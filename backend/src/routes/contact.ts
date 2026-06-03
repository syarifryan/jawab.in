import { Router, Request, Response } from 'express';
import { supabaseAdmin } from '../lib/supabase';
import { contactSchema } from '../lib/validators';
import { sendContactNotification } from '../lib/email';
import { ZodError } from 'zod';

const router = Router();

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;          // max 5 submissions
const RATE_WINDOW = 60 * 1000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

/**
 * POST /api/contact
 * Receives contact form data, validates, saves to Supabase, and optionally sends email
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    // Rate limiting
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        success: false,
        message: 'Terlalu banyak pengiriman. Coba lagi dalam 1 menit.',
      });
      return;
    }

    // Validate input
    const data = contactSchema.parse(req.body);

    // Insert into Supabase
    const { data: contact, error } = await supabaseAdmin
      .from('contacts')
      .insert({
        name: data.name,
        email: data.email,
        service: data.service,
        message: data.message,
      })
      .select()
      .single();

    if (error) {
      console.error('[Contact] Supabase insert error:', error);
      res.status(500).json({
        success: false,
        message: 'Gagal menyimpan pesan. Silakan coba lagi.',
      });
      return;
    }

    // Send email notification (non-blocking — don't await)
    sendContactNotification(data).catch((err) =>
      console.error('[Contact] Email notification failed:', err)
    );

    console.log(`[Contact] New submission from ${data.name} <${data.email}>`);

    res.status(201).json({
      success: true,
      message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.',
      data: { id: contact.id },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors = error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));

      res.status(400).json({
        success: false,
        message: 'Data tidak valid. Periksa form Anda.',
        errors: fieldErrors,
      });
      return;
    }

    console.error('[Contact] Unexpected error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server. Silakan coba lagi.',
    });
  }
});

export default router;
