# JAWAB.IN — Neobrutalism Promotional Web App

Build a single-page promotional web app for JAWAB.IN (academic & digital services) based on the design assets in `design/`.

## Design Analysis Summary

| Source | Key Takeaways |
|--------|---------------|
| `design/DESIGN.md` | Full design system: colors, typography (Space Grotesk + Inter), spacing (8px base), neobrutalism tokens (4px hard shadows, 3px borders, 0px radius) |
| `design/code.html` | Complete single-file HTML reference with Tailwind CDN — 7 sections: Navbar, Hero, Marquee, About, Services, Portfolio, Testimonials, Contact, Footer |
| `design/screen.png` | Visual mockup confirming the neobrutalist aesthetic — cream bg, bold yellow/blue/pink/mint accent cards, thick black borders, hard offset shadows, floating geometric decorations |
| `frontend.md` | Extended spec with bilingual (ID/EN) support, animation guide, component library definitions, and responsive breakpoints |

### Design Style: **Neobrutalism**
- **4px solid black borders** on all interactive/container elements
- **8px 8px hard shadow** (offset, 0 blur, `#1A1A1A`)
- **0px border-radius** (sharp corners)
- Warm cream background (`#FFF9EA`) with vibrant accent blocks
- Fonts: **Space Grotesk** (headlines/buttons) + **Inter** (body)
- Floating geometric decorations (squares, circles, diamonds)
- Grain texture overlay at 5% opacity

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | **Next.js 15** (App Router) | SSR/SSG for SEO, native Vercel deployment, React ecosystem |
| **Styling** | **Tailwind CSS v4** | Design reference (`code.html`) is already built in Tailwind; keeps parity with the design tokens |
| **Language** | TypeScript | Type safety, better DX |
| **Fonts** | Google Fonts (Space Grotesk + Inter) via `next/font` | Optimized font loading, no layout shift |
| **Icons** | Material Symbols (via CDN or `@material-symbols/font-400`) | Matches the design reference icons |
| **i18n** | Custom lightweight context-based solution | Simple ID/EN toggle with `localStorage` persistence; no heavy i18n library needed for 2 languages |
| **Animations** | CSS + Intersection Observer | Scroll-triggered reveals, marquee, hover/press states |
| **Form** | Front-end mockup (Supabase-ready) | Mockup now; Supabase integration later |
| **Deployment** | **Vercel** | Target: `jawab-in.vercel.app` |
| **Local Dev** | `npm run dev` via Laragon | Run locally first before deploying |

### Package Manager & Init
```bash
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --no-import-alias
```

---

## Resolved Questions

| Question | Decision |
|----------|----------|
| Deployment | **Vercel** (`jawab-in.vercel.app`), run locally first |
| Form backend | **Supabase** later, **mockup** for now |
| WhatsApp | `+62 851-9814-3231` |
| Portfolio projects | **Sistem Monitoring Kualitas Udara**, **Sistem Mitigasi Blackout**, **Deteksi Sampah Otomatis** |
| Social links | IG: `https://www.instagram.com/jawab.innn/` · WA: `+62 851-9814-3231` · Web: `jawab-in.vercel.app` |
| Bilingual | **Yes** — ID/EN toggle, JS context-based, `localStorage` persistence |
| Images | Generate portfolio thumbnails with `generate_image` tool |

---

## Proposed Changes

### Project Structure

```
jawab_in/
├── design/                          # (existing) Design references
├── frontend.md                      # (existing) Spec reference
├── IMPLEMENTATION_PLAN.md           # (this file)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout (fonts, metadata, i18n provider)
│   │   ├── page.tsx                 # Home page (assembles all sections)
│   │   ├── globals.css              # Tailwind directives + neo-brutalism utilities
│   │   └── favicon.ico              # Favicon
│   ├── components/
│   │   ├── LoadingScreen.tsx        # Neobrutalist intro loading screen
│   │   ├── Navbar.tsx               # Fixed top nav with mobile menu
│   │   ├── Hero.tsx                 # Hero section with stats & decorations
│   │   ├── Marquee.tsx              # Infinite scroll ticker
│   │   ├── About.tsx                # About section with USP cards
│   │   ├── Services.tsx             # 3×2 service cards grid (dark bg)
│   │   ├── Portfolio.tsx            # Filterable portfolio cards
│   │   ├── Testimonials.tsx         # Testimonial cards (blue bg)
│   │   ├── Contact.tsx              # Contact form + info panel
│   │   ├── Footer.tsx               # Footer with social links
│   │   └── ui/
│   │       ├── NeoButton.tsx        # Reusable neo-brutalist button
│   │       ├── NeoCard.tsx          # Reusable neo-brutalist card
│   │       ├── SectionTitle.tsx     # Section heading component
│   │       └── ScrollReveal.tsx     # Intersection Observer wrapper
│   ├── context/
│   │   └── LanguageContext.tsx      # i18n context provider (ID/EN)
│   ├── lib/
│   │   └── translations.ts         # Translation dictionary (ID/EN)
│   └── types/
│       └── index.ts                 # Shared TypeScript types
├── public/
│   └── images/                      # Generated portfolio thumbnails
├── tailwind.config.ts               # Tailwind config with design tokens
├── next.config.ts                   # Next.js config
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies
└── .gitignore                       # Git ignore
```

---

### Tailwind Configuration · `tailwind.config.ts`

Extended Tailwind theme matching all design tokens from `DESIGN.md`:
- Full color palette from the design system (primary, secondary, tertiary, neo-mint, neo-pink, neo-lavender, neo-orange, all surface variants)
- Custom font families (`font-display`, `font-headline`, `font-body`)
- Custom font sizes with line-height/weight presets (`text-display`, `text-headline-lg`, etc.)
- Custom spacing scale (xs, sm, md, lg, xl, gutter, margin-mobile, margin-desktop)
- Border radius overrides (0px default for brutalist aesthetic)

---

### Global Styles · `src/app/globals.css`

Tailwind directives plus custom utility classes:
- `.neo-shadow` / `.neo-shadow-hover` / `.neo-shadow-active` — hard shadow with press-down interaction
- `.neo-border` — 4px solid `#1A1A1A`
- `.text-stroke-3` — outline text effect for giant background text
- `.grain-bg::before` — CSS-generated grain noise texture at 5% opacity
- `.animate-marquee` — infinite horizontal scroll keyframe
- `.tape-effect::after` — decorative tape overlay on portfolio cards
- `.title-shadow` — `text-shadow: 4px 4px 0 #ffe500`

---

### Components

#### `src/components/ui/NeoButton.tsx`
Reusable button component with variants:
- **Primary**: Yellow bg (`primary-container`), black border, hard shadow
- **Secondary**: Blue bg (`secondary`), white text
- **Dark**: Black bg, white text
- **Outline**: Transparent bg, black border
- All variants: press-down animation (translate + shadow removal on active)

#### `src/components/ui/NeoCard.tsx`
Reusable card wrapper:
- 4px black border, 8px hard shadow
- Hover: lift up (-2px translate), optional rotation
- Configurable background color

#### `src/components/ui/SectionTitle.tsx`
Section heading with neo-badge:
- Background color block behind text
- Hard shadow + slight rotation
- Optional decorative floating shape

#### `src/components/ui/ScrollReveal.tsx`
Intersection Observer wrapper:
- Fade-in + slide-up animation on scroll into view
- Configurable delay for staggered reveals
- `threshold` and `rootMargin` options

---

### Section Components

#### `src/components/LoadingScreen.tsx`
Full-screen loading overlay that appears on first page visit, styled to match the neobrutalist theme:
- **Layout**: Fixed overlay, `z-[100]`, cream background (`#FFF9EA`) covering entire viewport
- **Logo**: "JAWAB.IN" in Space Grotesk 900, large display size, with `title-shadow` effect
- **Tagline**: "Solusi Akademik & Digital" in uppercase, bold, below the logo
- **Floating shapes**: Animated geometric decorations matching the Hero section aesthetic:
  - Mint square (rotating, bouncing)
  - Pink diamond (spinning)
  - Blue circle (pulsing)
  - Yellow rectangle (floating)
- **Progress bar**: Chunky neo-brutalist bar at bottom center:
  - 4px black border, hard shadow
  - Solid yellow (`primary-container`) fill that animates from 0% → 100%
  - Width ~300px, height ~20px
- **Exit animation**: Once loading completes (~2s or on `window.load`):
  - Progress bar fills to 100%
  - Entire screen slides up with a punchy `ease-in` transition (500ms)
  - `display: none` after transition ends, removed from DOM
- **First-visit only**: Uses `sessionStorage` to skip on subsequent navigations within the same session
- **Grain overlay**: Same `.grain-bg` pseudo-element as the rest of the site

#### `src/components/Navbar.tsx`
- Fixed top, `z-50`, 4px bottom border
- Logo "JAWAB.IN" with hover rotation
- Desktop nav links (Services/Portfolio/About/Testimonials) with colored hover backgrounds
- EN/ID toggle button (neo-styled, lavender bg)
- "Get Started" CTA button (yellow)
- Mobile: hamburger icon → full-screen overlay with stacked links
- Smooth scroll to anchor on click

#### `src/components/Hero.tsx`
- Min-height 90vh, flex center
- Giant outline text "JAWAB" as background (25vw, rotated, 10% opacity)
- Floating geometric decorations (mint square, blue circle, pink diamond) with bounce animation
- Badge: "#1 Academic Solution" (pink bg, rotated)
- H1: "Solusi Akademik & Digital Terpercaya" — 64px/96px display size
- "Digital" word highlighted in yellow container with rotation
- Subtitle with left border accent
- Two CTA buttons: "Konsultasi Gratis" + "Lihat Portfolio"
- Stats cards: "100+ Project Selesai" (mint) + "98% Rating Puas" (blue)

#### `src/components/Marquee.tsx`
- Black background, white bold text
- Infinite scroll: "Professional • Trusted • Innovative" repeated
- CSS animation, 20s linear infinite

#### `src/components/About.tsx`
- Two-column layout
- Left: Section title "Tentang Kami" + description paragraphs
- Right: Two USP cards stacked
  - "Profesional" card (yellow bg, verified icon)
  - "Tepat Waktu" card (blue bg, schedule icon)
- Floating lavender decoration square

#### `src/components/Services.tsx`
- Dark background (`#1A1A1A`), white text
- Section title "Layanan Kami" with inverted shadow (white)
- 3×2 grid of service cards, each with:
  - Unique accent color (yellow, mint, blue, pink, lavender, orange)
  - Material icon
  - Title with bottom border separator
  - Description text
  - Hover: lift up + slight rotation

| Card | Color | Icon | Title |
|------|-------|------|-------|
| 1 | `primary-container` | `language` | Web Dev |
| 2 | `neo-mint` | `router` | IoT Solutions |
| 3 | `secondary` | `school` | Skripsi |
| 4 | `neo-pink` | `article` | Jurnal |
| 5 | `neo-lavender` | `smart_toy` | AI & Data |
| 6 | `neo-orange` | `design_services` | UI/UX |

#### `src/components/Portfolio.tsx`
- Filter tabs: All / Web / IoT / AI (neo-styled buttons)
- 3 project cards with generated images:
  1. **Sistem Monitoring Kualitas Udara** — tag: IoT Solutions
  2. **Sistem Mitigasi Blackout** — tag: IoT Solutions
  3. **Deteksi Sampah Otomatis** — tag: AI & Analysis
- Each card: image (tape effect), category tag, title, description, "Detail Project" button
- Filter animation: fade/slide on tab switch

#### `src/components/Testimonials.tsx`
- Blue background (`secondary`), floating decorative shapes
- Section title "Apa Kata Mereka?" (white bg, rotated)
- 2-column grid with testimonial cards:
  - Quote icon (oversized, in black box)
  - Star ratings (yellow)
  - Quote text (headline font)
  - Author info with avatar initial (colored square)
  - Bottom border separator

#### `src/components/Contact.tsx`
- Two-panel layout in a neo-card:
  - **Left (3/5)**: Contact form — name, email, service dropdown, message textarea, submit button
    - Input focus states: mint, pink, lavender, yellow backgrounds
  - **Right (2/5)**: Dark bg with dot pattern overlay
    - "Langsung Saja!" headline
    - Office address (mint icon box)
    - Email: halo@jawab.in (pink icon box)
    - WhatsApp CTA button (green `#25D366`, links to `wa.me/6285198143231`)
- Floating lavender decoration square

#### `src/components/Footer.tsx`
- Dark bg (`inverse-surface`)
- Logo "JAWAB.IN" in primary-container color
- Tagline: "Digital Solutions & Academic Excellence"
- Copyright: "© 2024 JAWAB.IN"
- Social links: IG (pink), LI (blue), TW (mint) — neo-styled with hover rotation
- Giant background text "SOLUTIONS" at 15vw, 5% opacity

---

### i18n System

#### `src/context/LanguageContext.tsx`
React context providing:
- `language` state (`'id'` | `'en'`)
- `toggleLanguage()` function
- `t(key)` translation helper
- `localStorage` persistence

#### `src/lib/translations.ts`
Translation dictionary based on `frontend.md` section 6:

| Key | 🇮🇩 Indonesia | 🇬🇧 English |
|-----|---------------|-------------|
| `nav.services` | Layanan | Services |
| `nav.portfolio` | Portfolio | Portfolio |
| `nav.about` | Tentang | About |
| `nav.testimonials` | Testimoni | Testimonials |
| `hero.badge` | #1 Solusi Akademik | #1 Academic Solution |
| `hero.title` | Solusi Akademik & Digital Terpercaya | Your Trusted Academic & Digital Solution |
| `hero.cta1` | Konsultasi Gratis | Free Consultation |
| `hero.cta2` | Lihat Portfolio | View Portfolio |
| `contact.title` | Mulai Konsultasi | Start Consultation |
| `contact.submit` | Kirim Sekarang | Send Now |
| `contact.wa` | WhatsApp Kami | WhatsApp Us |
| *(+ all other section text)* | | |

---

### Generated Assets

Portfolio thumbnails to create with `generate_image`:

| Image | Description |
|-------|-------------|
| `air_quality_monitoring` | IoT dashboard with air quality sensors, real-time graphs, ESP32 hardware, neobrutalist style |
| `blackout_mitigation` | Electrical system monitoring dashboard with load shedding controls, ship power grid |
| `trash_detection` | AI-powered waste classification system with camera feed and detection boxes |

---

## Build Order

1. Initialize Next.js project with Tailwind
2. Configure Tailwind with design tokens
3. Set up global CSS (neo-brutalism utilities)
4. Build UI primitives (`NeoButton`, `NeoCard`, `SectionTitle`, `ScrollReveal`)
5. Set up i18n context + translations
6. Build `LoadingScreen` component (first-visit intro animation)
7. Build section components (Navbar → Hero → Marquee → About → Services → Portfolio → Testimonials → Contact → Footer)
8. Generate portfolio images
9. Assemble page (LoadingScreen wraps/precedes all content)
10. Test locally
11. Polish animations and responsiveness

---

## Verification Plan

### Automated Tests
- Open the site in the browser tool and verify:
  - Loading screen appears on first visit with logo, shapes, and progress bar
  - Loading screen exits smoothly and does not reappear on same-session navigation
  - All 10 sections render correctly (Loading + 9 content sections)
  - Navbar is fixed and responsive
  - Neobrutalist styling (borders, shadows, colors) matches the design
  - Mobile hamburger menu works
  - Portfolio filter tabs function
  - Smooth scrolling between sections
  - Language toggle switches all text
  - Animations trigger on scroll
  - WhatsApp link opens `wa.me/6285198143231`
  - Instagram link opens correct profile

### Visual Checks
- Screenshot comparison against `screen.png` reference
- Responsive testing at mobile (375px), tablet (768px), and desktop (1440px) widths
- Verify color palette accuracy against `DESIGN.md`
- Verify typography (Space Grotesk + Inter) loading correctly via `next/font`

### Deployment Readiness
- `npm run build` completes without errors
- Ready for `vercel deploy` or Git push to Vercel
