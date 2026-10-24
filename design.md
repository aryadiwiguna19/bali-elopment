# BALI ELOPEMENT SERVICE — DESIGN SYSTEM & ARCHITECTURE SPECIFICATION
> **Document Version**: 2.0.0  
> **Aesthetic Philosophy**: Coastal Editorial Luxury & Soulful Minimalism  
> **Brand**: Bali Elopement Service  
> **Parent Heritage**: Bali Top Wedding ([balitopwedding.com](https://www.balitopwedding.com))  
> **Target Implementation**: Production Static Web & WordPress Bespoke Theme / Page Builder

---

## 1. Brand Identity & Creative Direction

### 1.1 Brand Purpose & Mission
**Bali Elopement Service** is a dedicated luxury celebration boutique designed specifically for discerning international couples seeking an intimate, profound, and stress-free wedding experience in Bali. Unlike traditional large-scale resort weddings, the brand focuses on authentic romance for just the couple (or an ultra-intimate circle of up to 6–30 guests).

### 1.2 The "Quiet Luxury" Design Principle
The aesthetic avoids flashy, neon, or overly ornate visual clutter. Instead, it embodies:
* **Airy Editorial Framing**: Generous whitespace, deliberate vertical rhythm, and expansive typography reminiscent of high-end bridal editorial publications (such as *Vogue Weddings* and *Kinfolk*).
* **Warm Natural Atmosphere**: Grounded in Bali's dramatic clifftops, serene volcanic horizons, and secluded shores through a balanced palette of **Coastal Slate (`#5A7A85`)**, **Deep Charcoal Slate (`#1E272B`)**, and **Crisp White / Cool Slate Mist (`#FFFFFF` / `#F4F7F8`)**.
* **Instant Reassurance & Credibility**: Transparent dual-currency pricing (IDR & USD/EUR), upfront service inclusions, and transparent links to Bali Top Wedding’s longstanding heritage.

---

## 2. Design Tokens & Color Palette

### 2.1 Core Color Tokens (`:root`)

```css
:root {
  /* Surface & Canvas */
  --cream: #FFFFFF;          /* Primary Canvas: Crisp Clean White (Zero Yellow/Cream) */
  --nude: #F4F7F8;           /* Alternating Canvas: Soft Cool Slate Mist */
  --sand: #E3EBEF;           /* Subtle Card Borders & Outlines */
  --linen: #D5E1E7;          /* Soft Dividers & Table Borders */

  /* Dark Contrast & Typography */
  --dark: #1E272B;           /* Deep Charcoal Slate for primary headings */
  --dark-surface: #141C1F;   /* Ultra-dark slate surface */
  --dark-border: #2B383E;    /* Dark container borders */

  /* Brand Primary Accent (Coastal Slate) */
  --coastal: #5A7A85;        /* Signature Coastal Slate: Buttons, badges, active dots */
  --coastal-dark: #435E67;   /* Deep Ocean Slate for hover states */
  --coastal-light: #7294A0;  /* Soft Ocean Mist for subtle highlights */
  --coastal-surface: #4C6974;/* Slightly lighter backdrop for dark blocks */

  /* Body Copy & Secondary Text */
  --muted: #52636A;          /* Slate Grey for high-legibility body paragraphs */
  --muted-light: #7B8F97;    /* Secondary metadata, timestamps, helper copy */

  /* Inverted / White on Dark Surfaces */
  --ivory: #FFFFFF;          /* Pure crisp white for text on Coastal Slate */
  --ivory-muted: #D5DFE2;    /* Soft silver slate for secondary text on dark */

  /* Borders & Shadows */
  --border-subtle: rgba(90, 122, 133, 0.16);
  --border-strong: rgba(90, 122, 133, 0.32);
  --shadow-subtle: 0 4px 20px rgba(30, 39, 43, 0.04);
  --shadow-card: 0 10px 30px rgba(34, 44, 48, 0.07);
  --shadow-hover: 0 16px 40px rgba(90, 122, 133, 0.16);
}
```

### 2.2 Palette Matrix & Usage Role

| Color Name | Hex Code | RGB | Role & Application | Contrast Ratio |
| :--- | :--- | :--- | :--- | :--- |
| **Crisp White** | `#FFFFFF` | `rgb(255, 255, 255)` | Primary page canvas, card backgrounds, modal content | Default (1.00) |
| **Cool Slate Mist** | `#F4F7F8` | `rgb(244, 247, 248)` | Alternating section backgrounds, subtle highlight boxes | 1.07:1 on White |
| **Deep Charcoal Slate** | `#1E272B` | `rgb(30, 39, 43)` | Primary serif headings (H1–H4), logo title | 14.2:1 (AAA) |
| **Coastal Slate** | `#5A7A85` | `rgb(90, 122, 133)` | Primary brand CTA, active indicators, footer block, statement sections | 4.8:1 on White (AA) |
| **Deep Ocean Slate** | `#435E67` | `rgb(67, 94, 103)` | Button `:hover` state, focused input outlines | 7.1:1 on White (AAA) |
| **Slate Grey** | `#52636A` | `rgb(82, 99, 106)` | Body paragraphs, bullet inclusions, metadata | 5.6:1 on White (AA) |
| **WhatsApp Green** | `#1B5E20` | `rgb(27, 94, 32)` | Fast Booking WhatsApp CTA button | 7.8:1 with White (AAA) |

### 2.3 Background Hierarchy Rules
1. **Light Flow (Default)**: Alternates between `var(--cream)` (`#FFFFFF`) and `var(--nude)` (`#F4F7F8`) to maintain visual cadence without jarring separators.
2. **Statement Dark Blocks**:
   * Hero Header Overlays: `linear-gradient(180deg, rgba(34, 44, 48, 0.40) 0%, rgba(90, 122, 133, 0.62) 100%)`
   * Couple Reflections (Video Section): Solid `var(--coastal)` (`#5A7A85`) with text `var(--ivory)` (`#FFFFFF`).
   * Direct Inquiries Banner: Solid `var(--coastal)` with dual-action pill buttons.
   * Master Footer: Solid `var(--coastal)` with `rgba(255, 255, 255, 0.85)` typography and translucent subtle borders.

---

## 3. Typography System

### 3.1 Font Families
* **Primary Editorial Serif**: `Cormorant Garamond`, Georgia, serif  
  *Loaded weights*: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), with italics.  
  *Usage*: Headings, package titles, pricing values, quotes, and editorial subtitles.
* **Secondary Modern Grotesque Sans**: `Jost`, -apple-system, BlinkMacSystemFont, sans-serif  
  *Loaded weights*: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold).  
  *Usage*: Body paragraphs, navigation links, section labels, buttons, pricing notes, and form inputs.

### 3.2 Typographic Hierarchy Scale

| Element | Font Family | Size (Fluid / Responsive) | Weight | Letter Spacing | Line Height | Case & Style |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | Serif | `clamp(38px, 5.5vw, 68px)` | 300 | `-0.01em` | 1.20 | Normal or Italic Accent |
| **Section Title H2** | Serif | `clamp(30px, 4.0vw, 48px)` | 300 | `0` | 1.25 | Italic for emotive headings |
| **Card Title H3** | Serif | `clamp(22px, 2.5vw, 32px)` | 400 | `0.02em` | 1.30 | Normal |
| **Sub-heading H4** | Serif | `clamp(18px, 1.8vw, 24px)` | 500 | `0.04em` | 1.35 | Normal |
| **Eyebrow / Section Label**| Sans | `11px` | 500 | `0.22em` | 1.00 | ALL CAPS |
| **Nav Links (Desktop)** | Sans | `11.5px` | 500 | `0.14em` | 1.00 | ALL CAPS |
| **Nav Links (Mobile)** | Serif | `19px` (mobile), `18px` (<480px)| 400 | `0.02em` | 1.30 | Sentence Case |
| **Body Copy** | Sans | `16px` | 300 | `0` | 1.75 | Sentence Case |
| **Button Text** | Sans | `11.5px` | 500 | `0.18em` | 1.00 | ALL CAPS |
| **Pricing Large** | Serif | `22px - 26px` | 600 | `0.02em` | 1.20 | Normal |
| **Meta / Small** | Sans | `10px - 11px` | 400 | `0.10em` | 1.40 | ALL CAPS / Sentence |

---

## 4. Spacing, Layout & Grid System

### 4.1 Container Dimensions
* **`--container-max`**: `1200px` (standard content, text grids, card listings)
* **`--container-wide`**: `1320px` (cinematic hero banners, wide masonry galleries)
* **Container Padding**:
  * Desktop (>920px): `padding: 0 24px;`
  * Tablet & Mobile (≤920px): `padding: 0 18px;`
  * Compact Mobile (≤480px): `padding: 0 16px;`

### 4.2 Vertical Rhythm (Section Spacing)
* **Standard Section**: `padding: clamp(60px, 8vw, 110px) 0;`
* **Compact / Sub-section**: `padding: 40px 0;`
* **Section Header Margins**: `margin: 0 auto clamp(40px, 5vw, 60px);` with `max-width: 700px;`

### 4.3 Responsive Breakpoints
* **`Desktop Large`**: `> 1200px` — Full multi-column grid layouts
* **`Desktop Standard`**: `921px - 1200px` — Standard navigation and 3-column offerings
* **`Tablet / Mobile Switch`**: `≤ 920px` — Topbar collapses, mobile hamburger navigation activates, columns wrap to 1 or 2
* **`Mobile Standard`**: `≤ 768px` — Stacking dual-action buttons, 1-column cards, hero heights scale down
* **`Mobile Compact`**: `≤ 480px` — Brand title scales to 15px single-line, drawer expands to 92% width

---

## 5. Component Design Specifications

### 5.1 Header & Sticky Navigation
* **Container**: Sticky navigation with blur effect (`backdrop-filter: blur(12px)`), `height: 72px`, bordered with `var(--border-subtle)`.
* **Elevation**: On scroll (`.is-scrolled`), acquires `box-shadow: 0 4px 25px rgba(30, 25, 22, 0.05)`.
* **Brand Block**:
  * Title: `Bali Elopement Service` (`font-size: 22px`, letter spacing `0.1em`, serif).
  * Subline: `Powered by Bali Top Wedding` with external link in Coastal Slate.
  * Mobile constraint: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` to guarantee 1-line presentation on 360px–430px devices.
* **Desktop Links**: Horizontal list with hover underline sweep animation (`transition: width 0.3s ease;`).
* **Desktop Action**: Inquire Now outlined pill button (`.btn-nav-inquire`).

### 5.2 Mobile Drawer Navigation
* **Placement**: Fixed right drawer (`position: fixed; width: 88%; max-width: 360px; height: 100dvh; z-index: 1090;`).
* **Overlay**: Blurred dark backdrop (`rgba(30, 39, 43, 0.5); backdrop-filter: blur(3px); z-index: 1080;`).
* **Drawer Header**:
  * Dedicated top bar containing brand title and subline.
  * Explicit circular close button (`.mobile-drawer-close`) with 20×20 SVG cross (`✕`) that rotates 90° on hover.
* **Primary Links**:
  * Large serif links (`19px`, Cormorant Garamond).
  * Active state (`.active`) highlighted in Coastal Slate `#5A7A85` with a subtle circular dot indicator (`::after`) on the right.
* **Secondary Links**:
  * Clean single-line divider (`.mobile-nav-divider`).
  * Muted sans-serif utility links (`13px`, Jost) for *Portfolio*, *About Us*, *Journal*, and *Inquiries*.
* **Drawer Footer**:
  * Two-column grid (`display: grid; grid-template-columns: 1fr 1fr; gap: 10px;`).
  * Direct Email pill button and WhatsApp fast booking button pinned to the bottom.
  * `scrollbar-width: none` ensures clean native mobile app appearance.

### 5.3 Buttons (Dual-Action Interaction System)
* **Base Pill Style (`.btn`)**:
  * `border-radius: 50px; text-transform: uppercase; letter-spacing: 0.18em; font-size: 11.5px; font-weight: 500;`
* **Primary Coastal Slate (`.btn-primary`)**:
  * Solid `#5A7A85` with white text.
  * Hover: Elevates by `-2px` with shadow expansion `0 8px 24px rgba(85, 98, 78, 0.35)`.
* **Secondary Ghost (`.btn-ghost`)**:
  * Transparent background, `border: 1px solid rgba(250, 248, 245, 0.7)`, frosted glass effect.
* **High-Contrast Email (`.btn-email-contrast`)**:
  * Pure white background with Coastal Slate dark text `#435E67` for high legibility across dark statement blocks.
* **WhatsApp Direct Action (`.btn-whatsapp`)**:
  * Forest Green `#1B5E20` background with white text and WhatsApp SVG icon.

### 5.4 Offerings & Package Cards
* **Layout**: 3-column desktop grid (`grid-template-columns: repeat(3, 1fr)`).
* **Card Anatomy**:
  1. **Top Badge**: Highlight pill (`Most Cherished • Just the Two of Us`).
  2. **Card Thumbnail**: 16:10 ratio with hover scale zoom (`transform: scale(1.04)`).
  3. **Editorial Title**: Serif italic 26px heading.
  4. **Pricing Container**: Structured box with primary IDR net pricing and converted EUR/USD estimation.
  5. **Inclusions Highlights**: Dashed-divider list with checkmark icons.
  6. **Dual CTAs**: "View Full Inclusions" primary button + WhatsApp instant inquiry.

### 5.5 Brick / Masonry Dynamic Gallery
* **Grid**: 12-column responsive layout (`grid-template-columns: repeat(12, 1fr)`).
* **Tile Asymmetry**:
  * Tile 1 (Hero Portrait): `grid-column: span 5; grid-row: span 2;`
  * Tile 2 & 3 (Landscape Stack): `grid-column: span 7;`
  * Tile 4 & 5 (Symmetrical Pair): `grid-column: span 6;`
* **Interaction**: Interactive cursor zoom with fullscreen lightbox trigger (`data-lightbox-src`).

### 5.6 Vertical Video Cinema Player (9:16 Aspect Ratio)
* **Container**: Aspect ratio `9 / 16`, `border-radius: 12px`, with drop shadow.
* **Playback Controls**: Custom play/pause overlay, mute/unmute audio toggle, progress scrubber, and full-screen button.
* **Responsive Pairing**: Paired side-by-side with couple reflection story and emotional pull-quote.

### 5.7 Inclusions Accordion & Journey Timeline
* **Inclusions Accordion**: Clean toggle items with subtle border dividers and rotating plus/minus icon.
* **Journey Timeline**: Vertical milestone line with numbered round nodes (01 Preparation, 02 Ceremony, 03 Sunset Session, 04 Candlelight Dinner).

### 5.8 Statement Footer
* **Background**: Solid Coastal Slate (`#5A7A85`) with white and translucent white text (`rgba(255, 255, 255, 0.85)`).
* **Columns (4-Column Desktop)**:
  1. *Brand & Heritage*: Bali Elopement logo, summary, and official Bali Top Wedding partnership accreditation.
  2. *Signature Offerings*: Direct links to the 3 packages.
  3. *Discovery & Guides*: Links to Portfolio, Journal, Legal Guides, and About Us.
  4. *Direct Concierge & Socials*: Official email, phone, physical office address, and social icons (Instagram, Pinterest, YouTube, TikTok).
* **Sub-footer Bar**: Copyright notice and privacy links.

---

## 6. Imagery & Media Guidelines

### 6.1 Photography Style
* **Color Grading**: Warm, natural golden hour tones, soft skin tones, rich ocean blues and lush tropical greens. Avoid artificial over-saturation.
* **Subject Matter**: Candid romance, wind-swept veils on clifftops, intimate glances, artisanal floral styling, and candlelit twilight ambiance.

### 6.2 Recommended Media Dimensions

| Asset Type | Ratio | Target Resolution | Format | Max File Size |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Landscape** | 16:9 or 21:9 | `1920 × 1080 px` | WebP | < 250 KB |
| **Package Card Thumbnail** | 16:10 | `800 × 500 px` | WebP | < 120 KB |
| **Masonry Portrait Tile** | 4:5 or 2:3 | `900 × 1200 px` | WebP | < 180 KB |
| **Masonry Landscape Tile** | 3:2 | `1200 × 800 px` | WebP | < 150 KB |
| **Vertical Cinema Film** | 9:16 | `1080 × 1920 px` (1080p) | MP4 (H.264/AAC) | < 8 MB |
| **Planner & Team Avatar** | 1:1 | `400 × 400 px` | WebP | < 60 KB |

---

## 7. WordPress Implementation Blueprint

### 7.1 Template File Structure (Custom Theme Architecture)

```
wp-content/themes/bali-elopement/
├── style.css                   # Theme header + CSS Design Tokens & Base Styles
├── functions.php               # Theme setup, CPT registration, ACF, Enqueue scripts
├── header.php                  # Sticky navigation + Mobile drawer markup
├── footer.php                  # 4-Column Coastal Slate footer markup
├── front-page.php              # Homepage template (Hero, 3 Offerings, Cinema, Inquiries)
├── single-package.php          # Detailed Package switcher & inclusions accordion
├── archive-portfolio.php       # Curated Portfolio gallery with category filters
├── single-portfolio.php        # Story detail with 9:16 vertical video & photo grid
├── page-about.php              # About Us & team profile page
├── page-contact.php            # Direct inquiry channels & interactive form
├── home.php                    # Journal / Blog archive listing
├── single.php                  # Individual journal guide reading layout
├── assets/
│   ├── css/
│   │   └── style.css           # Core styling compiled from our design system
│   ├── js/
│   │   └── main.js             # Mobile drawer, tabs, lightbox, video controls
│   └── images/                 # Optimized brand assets & iconography
└── inc/
    ├── custom-post-types.php   # Registration for packages & portfolio
    └── acf-fields.php          # Exported ACF field groups
```

### 7.2 Custom Post Types (CPT) Schema

#### 1. CPT: `package`
* **Slug**: `/package/`
* **Post Names**:
  * `intimate-elopement`
  * `pre-wedding`
  * `private-villa`
* **ACF Fields**:
  * `package_badge` (Text, e.g., *"Most Cherished • Just the Two of Us"*)
  * `package_subtitle` (Textarea)
  * `price_idr` (Text, e.g., *"IDR 32,000,000 net"*)
  * `price_foreign` (Text, e.g., *"~ €1,950 / $2,100 USD"*)
  * `capacity` (Text, e.g., *"Couple + Up to 6 Close Guests"*)
  * `duration` (Text, e.g., *"Full-Day Dedicated Experience"*)
  * `inclusions_list` (Repeater: `inclusion_title`, `inclusion_description`)
  * `gallery_photos` (Gallery field, min 6 photos for masonry grid)

#### 2. CPT: `portfolio`
* **Slug**: `/portfolio/`
* **Custom Taxonomy**: `portfolio_category` (*Cliffside*, *Beachfront*, *Tropical Forest*, *Private Villa*)
* **ACF Fields**:
  * `couple_names` (Text, e.g., *"Claudia & Marcus"*)
  * `wedding_location` (Text, e.g., *"Uluwatu Sunset Cliffs"*)
  * `quote_text` (Textarea, emotional testimonial quote)
  * `vertical_video_file` (File / MP4 URL for 9:16 player)
  * `photo_story_gallery` (Gallery field)

### 7.3 Page Builder Mapping (Elementor Pro / Bricks Builder)

If building via a Visual Page Builder instead of raw PHP:
1. **Global Colors**:
   * Primary: `#5A7A85` (Coastal Slate)
   * Secondary: `#435E67` (Deep Ocean Slate)
   * Canvas Light: `#FFFFFF` (Crisp White)
   * Canvas Soft: `#F4F7F8` (Cool Slate Mist)
   * Text Heading: `#1E272B` (Deep Charcoal Slate)
   * Text Body: `#52636A` (Slate Grey)
   * High Contrast White: `#FFFFFF`
2. **Global Typography**:
   * Primary Display: `Cormorant Garamond` (Weights 300, 400, 600)
   * Primary Body: `Jost` (Weights 300, 400, 500)
3. **Custom Code Widgets**:
   * Insert `components/header.html` and `components/footer.html` into Elementor Theme Builder Header & Footer templates.
   * Enqueue `css/style.css` in Customizer or child theme `style.css`.

---

## 8. Summary Checklist for Quality Assurance

- [x] **Palette Consistency**: Zero yellow/old cream tones. Clean crisp white with Coastal Slate `#5A7A85`.
- [x] **Mobile Drawer Navigation**: Single-line brand title, visible close button `✕`, active dot indicator, and no scrollbar overflow.
- [x] **Accessibility & Contrast**: All body text and buttons meet WCAG 2.1 AA standards.
- [x] **Dual Action CTAs**: Every commercial page provides instantaneous WhatsApp communication and formal direct Email inquiry.
- [x] **WordPress Ready**: Clear mapping for templates, CPTs, and custom fields.
