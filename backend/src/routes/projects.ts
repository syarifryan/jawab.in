import { Router, Request, Response } from 'express';
import { supabase } from '../lib/supabase';
import { projectQuerySchema } from '../lib/validators';

const router = Router();

/**
 * GET /api/projects
 * Fetches published projects, optionally filtered by category
 * Query: ?category=web|iot|ai|all (default: all)
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { category } = projectQuerySchema.parse(req.query);

    let query = supabase
      .from('projects')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (category && category !== 'all') {
      query = query.eq('category', category);
    }

    const { data: projects, error } = await query;

    if (error) {
      console.error('[Projects] Supabase query error:', error);
      res.status(500).json({
        success: false,
        message: 'Gagal memuat proyek.',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: projects || [],
    });
  } catch (error) {
    console.error('[Projects] Unexpected error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server.',
    });
  }
});

export default router;
