-- ============================================================
-- JAWAB.IN Database Schema
-- Run this in Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Portfolio projects
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('web', 'iot', 'ai')),
  image_url TEXT,
  tag TEXT NOT NULL,
  tag_color TEXT DEFAULT 'primary',
  card_rotate TEXT DEFAULT 'rotate-1',
  is_published BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  stars INTEGER DEFAULT 5 CHECK (stars >= 1 AND stars <= 5),
  avatar_color TEXT DEFAULT 'accent',
  is_published BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- Row Level Security (RLS)
-- ============================================================

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Anyone can INSERT contacts (public form submission)
CREATE POLICY "Public can submit contact form"
  ON contacts FOR INSERT
  WITH CHECK (true);

-- Only authenticated (admin) can READ contacts
CREATE POLICY "Admin can read contacts"
  ON contacts FOR SELECT
  USING (auth.role() = 'authenticated');

-- Anyone can READ published projects
CREATE POLICY "Public can read published projects"
  ON projects FOR SELECT
  USING (is_published = true);

-- Only authenticated (admin) can INSERT/UPDATE/DELETE projects
CREATE POLICY "Admin can manage projects"
  ON projects FOR ALL
  USING (auth.role() = 'authenticated');

-- Anyone can READ published testimonials
CREATE POLICY "Public can read published testimonials"
  ON testimonials FOR SELECT
  USING (is_published = true);

-- Only authenticated (admin) can INSERT/UPDATE/DELETE testimonials
CREATE POLICY "Admin can manage testimonials"
  ON testimonials FOR ALL
  USING (auth.role() = 'authenticated');
