import { Router, Request, Response } from 'express';
import { supabase } from '../lib/supabase';

const router = Router();

/**
 * GET /api/testimonials
 * Fetches all published testimonials
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { data: testimonials, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('[Testimonials] Supabase query error:', error);
      res.status(500).json({
        success: false,
        message: 'Gagal memuat testimonial.',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: testimonials || [],
    });
  } catch (error) {
    console.error('[Testimonials] Unexpected error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server.',
    });
  }
});

export default router;
