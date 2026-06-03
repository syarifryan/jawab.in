---
name: High-Impact Neobrutalism
colors:
  surface: '#fff9ea'
  surface-dim: '#e0dac7'
  surface-bright: '#fff9ea'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3df'
  surface-container: '#f4eeda'
  surface-container-high: '#eee8d4'
  surface-container-highest: '#e9e2cf'
  on-surface: '#1e1c10'
  on-surface-variant: '#4b4731'
  inverse-surface: '#333123'
  inverse-on-surface: '#f7f1dd'
  outline: '#7d775f'
  outline-variant: '#cec7aa'
  surface-tint: '#6a5f00'
  primary: '#6a5f00'
  on-primary: '#ffffff'
  primary-container: '#ffe500'
  on-primary-container: '#726600'
  inverse-primary: '#dec800'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#b4136d'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffdae5'
  on-tertiary-container: '#bd1e74'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fee400'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#fff9ea'
  on-background: '#1e1c10'
  surface-variant: '#e9e2cf'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.0'
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built on the principles of **Neobrutalism**, emphasizing raw honesty, high contrast, and structural clarity. It is designed to feel energetic, unapologetic, and highly functional. The aesthetic rejects subtle gradients and soft shadows in favor of hard-edged geometry and "loud" visual signals.

The target audience values efficiency and bold character. The UI should evoke a sense of urgency, playfulness, and confidence. By utilizing thick black strokes and vibrant primary colors, the system creates a tactile, almost printed-matter feel that stands out from typical "safe" corporate SaaS aesthetics.

## Colors

This design system utilizes a high-saturation palette against a warm cream background to ensure maximum readability and impact. 

- **Primary (Yellow):** Used for main CTAs and hero highlights.
- **Secondary (Blue) & Tertiary (Pink):** Used for category distinction and interactive sub-elements.
- **Accents (Mint, Orange, Lavender):** Reserved for status indicators, tags, and data visualization.
- **Borders/Text:** All structural elements use the hard `#1A1A1A` for strokes and primary text.

Avoid the use of transparency or opacity scales. Colors should be applied as solid blocks to maintain the brutalist integrity.

## Typography

The typography strategy relies on the tension between the geometric, technical character of **Space Grotesk** and the neutral utility of **Inter**.

- **Headlines & Buttons:** Always use Space Grotesk. Set headlines to Bold (700) or Extra Bold. Letter spacing should be tightened for display sizes to enhance the "chunky" aesthetic.
- **Body Text:** Inter is used for all long-form reading and metadata to ensure legibility isn't sacrificed for style.
- **Labels:** Use Space Grotesk in all-caps for a rhythmic, industrial feel on tags and small UI labels.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop and a **Fluid Grid** on mobile.

- **Desktop:** 12-column grid, 1200px max-width, 24px gutters.
- **Mobile:** 4-column grid with 16px margins.
- **Spacing Logic:** Use an 8px base unit. Neobrutalism thrives on "oversized" padding; when in doubt, increase internal padding to allow elements to breathe against their heavy borders.
- **Containers:** All main content sections should be housed in containers with a 3px solid black border and the signature hard shadow.

## Elevation & Depth

This design system ignores traditional Z-axis lighting and "fuzzy" shadows. Depth is communicated through **Hard Shadows (Shifted Strokes)**.

- **Shadow Style:** 4px 4px offset, 0px blur, 100% opacity, color `#1A1A1A`.
- **Interaction:** On hover, buttons and cards should "press down" by reducing the shadow offset to 2px 2px or 0px 0px, mimicking a physical click.
- **Layers:** Use "Paper-on-Paper" logic. Background elements remain flat; interactive or floating elements (modals, cards, dropdowns) gain the 4px hard shadow.

## Shapes

The shape language is primarily sharp and structural. 

- **Corners:** A standard radius of **4px** is preferred for a "soft-brutalist" feel that is easier on the eyes than 0px, but significantly sharper than modern mobile OS standards.
- **Strokes:** A consistent **3px solid black border** must be applied to all interactive elements, input fields, and containers. 
- **Icons:** Use thick-stroke (2px+) linear icons or solid geometric glyphs to match the weight of the typography.

## Components

### Buttons
- **Primary:** Yellow background, 3px black border, Space Grotesk Bold, 4px hard shadow.
- **Secondary:** Blue background, 3px black border, 4px hard shadow.
- **Active State:** On click/press, the button moves 4px right and 4px down, and the shadow disappears.

### Input Fields
- **Default:** Cream background, 3px black border, Inter 16px.
- **Focus:** 3px border remains black, but the background shifts to a very pale version of the Primary color (or white). No soft glows.

### Cards
- Always use a 3px border and 4px hard shadow.
- Header sections within cards should be separated by a 3px horizontal line.

### Chips & Tags
- Small, rectangular with 2px borders. Use the Secondary, Tertiary, or Accent colors for background fills to categorize information.

### Progress Bars
- Use a thick 3px border container. The fill should be a solid color (e.g., Mint) with no rounding on the internal progress indicator.