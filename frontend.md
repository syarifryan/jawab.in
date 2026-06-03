# JAWAB.IN — Frontend Design Specification

> Design reference untuk generate mockup & implementasi website JAWAB.IN dengan gaya **Neobrutalism**.

---

## 1. Design System

### 1.1 Color Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `primary` | `#FFE500` | 255, 229, 0 | CTA buttons, hero accents, highlights |
| `secondary` | `#3B82F6` | 59, 130, 246 | Links, service cards accent |
| `accent` | `#EC4899` | 236, 72, 153 | Badges, decorative, testimonial cards |
| `mint` | `#34D399` | 52, 211, 153 | IoT/tech cards, success states |
| `orange` | `#F97316` | 249, 115, 22 | Portfolio cards, warm accents |
| `lavender` | `#A78BFA` | 167, 139, 250 | AI-related cards, creative accents |
| `bg-light` | `#FFF8E7` | 255, 248, 231 | Page background (warm cream) |
| `bg-dark` | `#1A1A1A` | 26, 26, 26 | Dark mode background |
| `text-dark` | `#1A1A1A` | 26, 26, 26 | Primary text |
| `text-light` | `#F5F5F5` | 245, 245, 245 | Text on dark backgrounds |
| `border` | `#1A1A1A` | 26, 26, 26 | All neobrutalist borders |

### 1.2 Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 (Hero) | Space Grotesk | 800 | 64–72px | 36–40px |
| H2 (Section Title) | Space Grotesk | 700 | 40–48px | 28–32px |
| H3 (Card Title) | Space Grotesk | 600 | 24px | 20px |
| Body | Inter | 400 | 16–18px | 14–16px |
| Button | Space Grotesk | 700 | 16–18px | 14–16px |
| Caption/Tag | Inter | 500 | 12–14px | 12px |
| Nav Links | Space Grotesk | 600 | 16px | 18px |

### 1.3 Neobrutalism Tokens

```
Border:       2–3px solid #1A1A1A
Shadow:       4px 4px 0px #1A1A1A (resting state)
Shadow Hover: 6px 6px 0px #1A1A1A (hover — card grows)
Shadow Press: 0px 0px 0px #1A1A1A (active — shadow disappears)
Radius:       0px (sharp) atau max 8px (slight round)
Translate:    hover → translate(-2px, -2px), active → translate(4px, 4px)
```

### 1.4 Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `section-y` | 80–120px | Vertical padding per section |
| `container` | max-width 1200px, auto margin | Content container |
| `card-padding` | 24–32px | Internal card padding |
| `gap-grid` | 24–32px | Grid gap between cards |

---

## 2. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked, hamburger menu |
| Tablet | 640–1024px | 2-column grids, compact spacing |
| Desktop | > 1024px | Full layout, 3-column grids, side-by-side |

---

## 3. Section-by-Section Design

### 3.1 Navbar (Fixed Top)

```
┌─────────────────────────────────────────────────────────────┐
│  [LOGO]  JAWAB.IN    Beranda  Tentang  Layanan  Portfolio   │
│                      Review   Kontak          [ID|EN] [☰]   │
├─────────────────────────────────────────────────────────────┤
│  border-bottom: 3px solid #1A1A1A                           │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Background: `#FFF8E7` (semi-transparent dengan backdrop-blur)
- Height: 64–72px
- Logo: file dari user, max-height 40px, di kiri
- Nav links: Space Grotesk 600, uppercase, letter-spacing 0.5px
- Active link: background `#FFE500`, border 2px solid black, shadow 2px 2px 0px black
- Language toggle: Neo-styled pill button `[ID|EN]`, background toggle antara primary & secondary
- Mobile: hamburger icon → full-screen overlay menu dengan stacked links besar
- Z-index tinggi, selalu di atas konten

---

### 3.2 Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌──────────────────────────────┐  ┌─────────────────────┐    │
│   │                              │  │  ╔═══╗  ╔═══╗       │    │
│   │  ★ Jasa Akademik & Digital   │  │  ║   ║  ║   ║       │    │
│   │                              │  │  ╚═══╝  ╚═══╝       │    │
│   │  SOLUSI AKADEMIK             │  │     ◇                │    │
│   │  & DIGITAL                   │  │   ◇   ◇              │    │
│   │  TERPERCAYA                  │  │  geometric shapes    │    │
│   │                              │  │  & decorative        │    │
│   │  Kami membantu mewujudkan    │  │  illustrations       │    │
│   │  proyek akademik dan         │  │                      │    │
│   │  digital Anda dengan         │  └──────┤border├────────┘    │
│   │  hasil terbaik.              │                              │
│   │                              │                              │
│   │  ┌──────────────────┐        │                              │
│   │  │ KONSULTASI GRATIS │◄──neo-btn primary                    │
│   │  └──────────────────┘        │                              │
│   │  ┌──────────────────┐        │                              │
│   │  │ LIHAT PORTFOLIO   │◄──neo-btn outline                    │
│   │  └──────────────────┘        │                              │
│   │                              │                              │
│   └──────────────────────────────┘                              │
│                                                                 │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│   │  100+    │  │  50+     │  │  6+      │  │  98%     │      │
│   │  Project │  │  Klien   │  │  Kategori│  │  Puas    │      │
│   │  Selesai │  │  Puas    │  │  Jasa    │  │  Rating  │      │
│   └──border──┘  └──border──┘  └──border──┘  └──border──┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Min-height: 100vh, display flex align center
- Background: `#FFF8E7` dengan geometric pattern overlay (dots/grid pattern opacity 5%)
- Layout: 2 kolom (60% teks kiri, 40% decorative kanan) di desktop, stacked di mobile
- Badge atas: Neo-card kecil `★ Jasa Akademik & Digital`, bg `#FFE500`, border 2px
- H1: Space Grotesk 800, 64–72px, line-height 1.1, color `#1A1A1A`
- Sub-text: Inter 400, 18px, color `#555`, max-width 500px
- CTA Primary: bg `#FFE500`, border 3px solid black, shadow 4px 4px, text bold uppercase
- CTA Secondary: bg transparent, border 3px solid black, shadow 4px 4px
- Decorative: geometric shapes (circles, squares, triangles) dengan warna-warna palette, floating animation subtle
- Stats row: 4 neo-cards inline, each berbeda warna background (primary, secondary, accent, mint)
- Animation: fade-in-up staggered untuk setiap elemen (delay 0.1s between)

---

### 3.3 About Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              ★ TENTANG KAMI                                  │
│              ─────────────── (underline decorative)         │
│                                                             │
│   ┌──────────────────────────────────────────────────────┐  │
│   │  JAWAB.IN adalah penyedia jasa akademik dan digital  │  │
│   │  yang berfokus pada kualitas dan kepuasan klien.     │  │
│   │  [paragraph deskripsi lengkap]                       │  │
│   └──────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │
│   │  ⚡          │  │  🎯          │  │  🤝          │       │
│   │  Profesional │  │  Tepat Waktu │  │  Terpercaya  │       │
│   │  Tim ahli di │  │  Deadline    │  │  50+ klien   │       │
│   │  bidangnya   │  │  dijamin     │  │  puas        │       │
│   │  bg: #FFE500 │  │  bg: #3B82F6 │  │  bg: #34D399 │       │
│   └──border──────┘  └──border──────┘  └──border──────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Background: white `#FFFFFF`
- Section title: H2 + badge kecil di atas + underline decorative (thick, colored)
- Deskripsi: max-width 700px, centered, Inter 18px
- USP Cards (3 kolom): masing-masing neo-card dengan warna background berbeda, icon besar di atas, border 3px, shadow 4px 4px
- Hover: card naik sedikit (-2px), shadow membesar (6px 6px)
- Animation: cards fade-in saat scroll into view (staggered)

---

### 3.4 Services Section

```
┌─────────────────────────────────────────────────────────────┐
│  bg: #1A1A1A (dark section)                                 │
│                                                             │
│              ★ LAYANAN KAMI                                  │
│              ─────────────── (text white)                    │
│                                                             │
│   ┌────────────────┐  ┌────────────────┐  ┌──────────────┐ │
│   │  🌐             │  │  🔌             │  │  📚          │ │
│   │  Website &      │  │  IoT            │  │  Skripsi &   │ │
│   │  Mobile App     │  │  Internet of    │  │  Tugas       │ │
│   │                 │  │  Things         │  │  Akhir       │ │
│   │  Pembuatan web  │  │  Solusi IoT     │  │  Bimbingan   │ │
│   │  & aplikasi     │  │  berbasis       │  │  skripsi     │ │
│   │  modern...      │  │  ESP32...       │  │  lengkap...  │ │
│   │                 │  │                 │  │              │ │
│   │  bg: #FFE500    │  │  bg: #34D399    │  │  bg: #3B82F6 │ │
│   └──border-white───┘  └──border-white───┘  └──border─────┘ │
│                                                             │
│   ┌────────────────┐  ┌────────────────┐  ┌──────────────┐ │
│   │  📄             │  │  🤖             │  │  🎨          │ │
│   │  Jurnal &       │  │  Artificial     │  │  Design &    │ │
│   │  Paper          │  │  Intelligence   │  │  Editing     │ │
│   │                 │  │                 │  │              │ │
│   │  bg: #EC4899    │  │  bg: #A78BFA    │  │  bg: #F97316 │ │
│   └──border─────────┘  └──border─────────┘  └──border─────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Background: `#1A1A1A` (dark) — kontras dengan section lain
- Text: white
- Grid: 3×2 di desktop, 2×2 di tablet, 1 kolom di mobile
- Cards: masing-masing punya warna background unik dari palette, border 3px solid white, shadow 4px 4px white
- Icon: Lucide React icon, ukuran 40–48px, di dalam circle border
- Hover: card rotate sedikit (1–2deg) + shadow shift + scale 1.02
- Setiap card animasi stagger saat scroll masuk viewport

---

### 3.5 Portfolio Section

```
┌─────────────────────────────────────────────────────────────┐
│  bg: #FFF8E7                                                │
│                                                             │
│              ★ PORTFOLIO                                     │
│              ─────────────                                   │
│                                                             │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐│
│  │ All │ │ Web │ │ IoT │ │ AI  │ │Paper│ │Skrip│ │Desig││
│  └neo──┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘│
│  (active tab: bg yellow, others: bg white)                  │
│                                                             │
│   ┌──────────────────┐  ┌──────────────────┐               │
│   │  ┌──────────────┐│  │  ┌──────────────┐│               │
│   │  │  PROJECT IMG  ││  │  │  PROJECT IMG  ││               │
│   │  │  (thumbnail)  ││  │  │  (thumbnail)  ││               │
│   │  └──────────────┘│  │  └──────────────┘│               │
│   │                  │  │                  │               │
│   │  ┌────┐          │  │  ┌────┐          │               │
│   │  │IoT │ tag      │  │  │IoT │ tag      │               │
│   │  └────┘          │  │  └────┘          │               │
│   │  Monitoring      │  │  Piezoelektrik   │               │
│   │  Beban           │  │  Pemanenan       │               │
│   │  Kendaraan...    │  │  Energi...       │               │
│   │  bg: white       │  │  bg: white       │               │
│   └──border──────────┘  └──border──────────┘               │
│                                                             │
│   (grid 3 kolom desktop, 2 tablet, 1 mobile)               │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Background: `#FFF8E7`
- Filter tabs: Neo-styled pill buttons, active = `#FFE500` bg + shadow, inactive = white
- Cards: Neo-card, bg white, border 3px, shadow 4px 4px
- Thumbnail: aspect-ratio 16/9, gambar project (generated), border-bottom 3px
- Category tag: kecil, warna sesuai kategori, border 2px, font 12px uppercase
- Title: Space Grotesk 600, 20px
- Hover: card translate up, shadow grow, slight image zoom
- Filter animation: cards fade/slide in saat filter berubah (Framer Motion layout animation)

---

### 3.6 Testimonials Section

```
┌─────────────────────────────────────────────────────────────┐
│  bg: #3B82F6 (biru vibrant)                                 │
│                                                             │
│              ★ APA KATA MEREKA                               │
│              ─────────────── (text white)                    │
│                                                             │
│  ◄  ┌───────────────┐  ┌───────────────┐  ┌─────────────┐ ►│
│     │  "             │  │  "             │  │  "           │  │
│     │  Kualitas      │  │  Sangat        │  │  Harga       │  │
│     │  kerjanya      │  │  membantu      │  │  terjangkau  │  │
│     │  luar biasa!   │  │  skripsi       │  │  dan         │  │
│     │                │  │  saya...       │  │  profesional │  │
│     │  ★★★★★         │  │  ★★★★★         │  │  ★★★★☆       │  │
│     │                │  │                │  │              │  │
│     │  👤 Ahmad S.   │  │  👤 Siti R.    │  │  👤 Budi P.  │  │
│     │  Mahasiswa     │  │  Dosen         │  │  Startup     │  │
│     │  bg: #FFF8E7   │  │  bg: #FFE500   │  │  bg: #FFFFFF │  │
│     └──border────────┘  └──border────────┘  └──border─────┘  │
│                                                             │
│              ● ● ● ○ ○  (pagination dots)                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Background: `#3B82F6` — bold, kontras
- Carousel: horizontal scroll, 3 cards visible di desktop, 1 di mobile
- Cards: Neo-card, bg cream/yellow/white (varied), border 3px solid black, shadow 4px 4px black
- Quote mark: oversized `"` decorative, font 60px, opacity 20%, di pojok kiri atas card
- Stars: warna `#FFE500`, filled/unfilled
- Avatar: circle 48px, border 2px solid black
- Auto-scroll: 5 detik interval, pause on hover
- Navigation: arrow buttons kiri/kanan (neo-styled) + dots indicator

---

### 3.7 Contact Section

```
┌─────────────────────────────────────────────────────────────┐
│  bg: #FFFFFF                                                │
│                                                             │
│              ★ HUBUNGI KAMI                                   │
│              ─────────────                                   │
│                                                             │
│   ┌──────────────────────┐  ┌──────────────────────┐       │
│   │  FORM KONTAK          │  │  INFO KONTAK          │       │
│   │                      │  │                      │       │
│   │  ┌──────────────────┐│  │  📱 WhatsApp          │       │
│   │  │ Nama Lengkap     ││  │     08xx-xxxx-xxxx   │       │
│   │  └──neo-input───────┘│  │                      │       │
│   │  ┌──────────────────┐│  │  📧 Email             │       │
│   │  │ Email            ││  │     info@jawab.in    │       │
│   │  └──neo-input───────┘│  │                      │       │
│   │  ┌──────────────────┐│  │  📷 Instagram         │       │
│   │  │ Subjek           ││  │     @jawab.in        │       │
│   │  └──neo-input───────┘│  │                      │       │
│   │  ┌──────────────────┐│  │  📍 Lokasi            │       │
│   │  │ Pesan            ││  │     Indonesia        │       │
│   │  │                  ││  │                      │       │
│   │  │                  ││  │  ┌──────────────────┐│       │
│   │  └──neo-input───────┘│  │  │  CHAT WHATSAPP   ││       │
│   │                      │  │  │  (CTA besar)     ││       │
│   │  ┌──────────────────┐│  │  └──neo-btn─────────┘│       │
│   │  │  KIRIM PESAN     ││  │                      │       │
│   │  └──neo-btn─────────┘│  │  Social icons row    │       │
│   │  bg: #FFF8E7         │  │  bg: #1A1A1A         │       │
│   └──border──────────────┘  └──border──────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Layout: 2 kolom equal di desktop, stacked di mobile
- Form card: bg `#FFF8E7`, neo-card styling
- Input fields: bg white, border 2px solid black, shadow 2px 2px inset-style, focus → border `#3B82F6` + shadow glow
- Submit button: bg `#FFE500`, full-width, neo-btn style
- Info card: bg `#1A1A1A`, text white, neo-card, border 3px white
- WhatsApp CTA: bg `#22C55E`, large, icon + text, neo-btn
- Social icons: row, 40px each, neo-styled circles, hover color change

---

### 3.8 Footer

```
┌─────────────────────────────────────────────────────────────┐
│  border-top: 4px solid #1A1A1A                              │
│  bg: #1A1A1A                                                │
│                                                             │
│   JAWAB.IN           Quick Links      Layanan      Sosial  │
│   Solusi Akademik    • Beranda         • Website    • IG    │
│   & Digital          • Tentang         • IoT        • WA    │
│   Terpercaya         • Portfolio       • Skripsi    • Email │
│                      • Kontak          • AI               │
│                                                             │
│   ─────────────────────────────────────────────────────────  │
│   © 2026 JAWAB.IN. All rights reserved.                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specs:**
- Background: `#1A1A1A`
- Text: `#F5F5F5`
- Border-top: 4px solid `#FFE500` (primary accent)
- Layout: 4 kolom di desktop, 2 di tablet, stacked di mobile
- Logo: same logo, white version atau dengan filter brightness
- Links: hover underline + color `#FFE500`
- Divider: 1px solid `#333`
- Copyright: Inter 400, 14px, centered

---

## 4. Component Library

### NeoCard
```
┌──────────────────────────────┐
│  border: 3px solid black     │
│  shadow: 4px 4px 0px black   │
│  padding: 24–32px            │
│  bg: configurable            │
│  hover: translate(-2px,-2px) │
│         shadow(6px 6px)      │
│  transition: all 200ms       │
└──────────────────────────────┘
```

### NeoButton
```
Variants:
┌─ PRIMARY ──────────────────────────┐
│  bg: #FFE500, border: 3px black    │
│  shadow: 4px 4px, text: black bold │
│  hover: translate(-2px,-2px)       │
│  active: translate(4px,4px)        │
│         shadow: none               │
└────────────────────────────────────┘

┌─ SECONDARY ────────────────────────┐
│  bg: #3B82F6, border: 3px black    │
│  text: white bold                  │
└────────────────────────────────────┘

┌─ OUTLINE ──────────────────────────┐
│  bg: transparent, border: 3px black│
│  text: black bold                  │
└────────────────────────────────────┘
```

### SectionTitle
```
┌──────────────────────────────────┐
│  ┌────────────────────────┐      │
│  │ ★ BADGE LABEL          │      │  ← small neo-badge above
│  └────────────────────────┘      │
│                                  │
│  SECTION HEADING                 │  ← H2, Space Grotesk 700
│  ═══════════════                 │  ← thick colored underline
│                                  │
│  Optional subtitle text          │  ← Inter 400, muted color
└──────────────────────────────────┘
```

### LanguageToggle
```
┌──────────────────┐
│  [ID] │ EN       │  ← active side: bg #FFE500
│       │          │     inactive: bg white
└──border 2px──────┘
```

---

## 5. Animation Guide

| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Hero elements | Fade-in + slide-up | 600ms | ease-out | Page load, staggered 100ms |
| Section titles | Fade-in + slide-up | 500ms | ease-out | Scroll into view |
| Cards (grid) | Fade-in + scale(0.95→1) | 400ms | spring | Scroll into view, staggered 80ms |
| Neo buttons | Translate + shadow shift | 200ms | ease | Hover / Active |
| Neo cards | Translate + shadow grow | 200ms | ease | Hover |
| Filter (portfolio) | Layout animation | 300ms | spring | Tab click |
| Testimonial carousel | Slide horizontal | 500ms | ease-in-out | Auto / Arrow click |
| Mobile menu | Slide-in from right | 300ms | ease-out | Hamburger click |
| Stats counter | Count-up number | 2000ms | ease-out | Scroll into view |

---

## 6. Bilingual UI Reference

Navbar links dan semua teks harus support 2 bahasa:

| Key | 🇮🇩 Indonesia | 🇬🇧 English |
|-----|---------------|-------------|
| nav.home | Beranda | Home |
| nav.about | Tentang | About |
| nav.services | Layanan | Services |
| nav.portfolio | Portfolio | Portfolio |
| nav.reviews | Review | Reviews |
| nav.contact | Kontak | Contact |
| hero.badge | Jasa Akademik & Digital | Academic & Digital Services |
| hero.title | Solusi Akademik & Digital Terpercaya | Your Trusted Academic & Digital Solution |
| hero.cta | Konsultasi Gratis | Free Consultation |
| hero.cta2 | Lihat Portfolio | View Portfolio |
| contact.submit | Kirim Pesan | Send Message |
| contact.wa | Chat WhatsApp | Chat on WhatsApp |

---

## 7. Visual Mood / References

Keyword untuk generate design mockup:
- **Neobrutalism web design**
- **Bold borders, hard shadows, vibrant colors**
- **Cream/warm background with thick black outlines**
- **Chunky geometric shapes as decoration**
- **Playful yet professional — tech services company**
- **High contrast, no gradients (flat colors only)**
- **Retro-modern hybrid aesthetic**
