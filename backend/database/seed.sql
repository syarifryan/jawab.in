-- ============================================================
-- JAWAB.IN Seed Data
-- Run this AFTER schema.sql in Supabase SQL Editor
-- ============================================================

-- Portfolio Projects (matches existing frontend data)
INSERT INTO projects (title, description, category, image_url, tag, tag_color, card_rotate, sort_order) VALUES
(
  'Sistem Informasi Akademik',
  'Portal akademik terintegrasi untuk kampus digital modern.',
  'web',
  '/images/air_quality_monitoring.png',
  'Web Development',
  'primary',
  'rotate-1',
  1
),
(
  'Smart Green House',
  'Otomatisasi pertanian berbasis sensor cerdas dan cloud data.',
  'iot',
  '/images/blackout_mitigation.png',
  'IoT Solutions',
  'mint',
  '-rotate-1',
  2
),
(
  'Prediksi Pasar Saham',
  'Model machine learning untuk analisis sentimen & tren pasar.',
  'ai',
  '/images/trash_detection.png',
  'AI & Analysis',
  'lavender',
  'rotate-1',
  3
);

-- Testimonials (matches existing frontend data)
INSERT INTO testimonials (name, role, content, stars, avatar_color, sort_order) VALUES
(
  'Andi R.',
  'Mahasiswa Teknik Informatika',
  'Sangat terbantu dengan layanan bimbingan skripsinya. Tim responsif dan memberikan arahan yang solutif. Lulus tepat waktu!',
  5,
  'accent',
  1
),
(
  'Sarah W.',
  'CEO Digital Startup',
  'Project website company profile diselesaikan dengan cepat dan desainnya brutal abis! Sesuai dengan brief yang diberikan.',
  4,
  'mint',
  2
);
