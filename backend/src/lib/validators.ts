import { z } from 'zod';

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter')
    .trim(),
  email: z
    .string()
    .email('Format email tidak valid')
    .max(255, 'Email terlalu panjang')
    .trim()
    .toLowerCase(),
  service: z
    .string()
    .min(1, 'Pilih kategori layanan')
    .max(100, 'Kategori terlalu panjang'),
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(2000, 'Pesan maksimal 2000 karakter')
    .trim(),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Project query validation
export const projectQuerySchema = z.object({
  category: z.enum(['all', 'web', 'iot', 'ai']).optional().default('all'),
});

export type ProjectQuery = z.infer<typeof projectQuerySchema>;
