# BALI ELOPEMENT SERVICE — DESIGN SYSTEM & ARCHITECTURE SPECIFICATION
> **Document Version**: 2.1.0 (updated 11 Nov 2026 after the 30 Oct 2026 website review meeting)  
> **Aesthetic Philosophy**: Coastal Editorial Luxury & Soulful Minimalism  
> **Brand**: Bali Elopement Service  
> **Parent Heritage**: Bali Top Wedding ([balitopwedding.com](https://www.balitopwedding.com))  
> **Target Implementation**: Production Static Web & WordPress Bespoke Theme / Page Builder

---

## 1. Brand Identity & Creative Direction

### 1.1 Brand Purpose & Mission
**Bali Elopement Service** is a dedicated luxury celebration boutique designed specifically for discerning international couples seeking an intimate, profound, and stress-free wedding experience in Bali. Unlike traditional large-scale resort weddings, the brand focuses on authentic romance: elopements just for the couple (9 settings), villa weddings at 6 private estates (priced for 50 guests), and pre-wedding photography (3 packages). Package copy and prices come from `all pages teks updated.docx` (15 Nov 2026).

**Service order** (use everywhere: cards, tabs, footer, forms): **Elopement → Villa Wedding → Pre-Wedding**. Elopement is the lead service and the only service in the top menu; the others live under **More**.

### 1.2 The "Quiet Luxury" Design Principle
The aesthetic avoids flashy, neon, or overly ornate visual clutter. Instead, it embodies:
* **Airy Editorial Framing**: Generous whitespace, deliberate vertical rhythm, and expansive typography reminiscent of high-end bridal editorial publications (such as *Vogue Weddings* and *Kinfolk*).
* **Warm Natural Atmosphere**: Grounded in Bali's dramatic clifftops, serene volcanic horizons, and secluded shores through a balanced palette of **Coastal Slate (`#5A7A85`)**, **Deep Charcoal Slate (`#1E272B`)**, and **Crisp White / Cool Slate Mist (`#FFFFFF` / `#F4F7F8`)**.
* **Instant Reassurance & Credibility**: Transparent IDR net pricing, upfront service inclusions, and transparent links to Bali Top Wedding’s longstanding heritage.
* **Short Copy**: The team found long paragraphs off-putting. Card descriptions stay at one paragraph, and photos carry the page. The approved copy in `all pages teks updated.docx` is the source of truth for wording.

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
* **Standard Section**: `padding: clamp(44px, 5vw, 72px) 0;` (tightened after the review: gaps of up to 220px felt empty)
* **Compact / Sub-section**: `padding: 40px 0;`
* **Section Header Margins**: `margin: 0 auto clamp(28px, 3.5vw, 40px);` with `max-width: 700px;`
* **Continuous Sections**: When two sections share a background and belong together (homepage gallery → testimonials), the second uses `padding-top: 0`.

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
* **Layout**: Three-column grid (`grid-template-columns: 1fr auto 1fr`). Logo left, menu exactly centered, Inquire Now right (`justify-self: end`). The equal side columns keep the menu centered regardless of logo width.
* **Elevation**: On scroll (`.is-scrolled`), acquires `box-shadow: 0 4px 25px rgba(30, 25, 22, 0.05)`.
* **Brand Block**:
  * Title: `Bali Elopement Service` (`font-size: 22px`, letter spacing `0.1em`, serif).
  * Subline: `Powered by Bali Top Wedding` with external link in Coastal Slate.
  * Mobile constraint: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` to guarantee 1-line presentation on 360px–430px devices.
* **Menu Items**: `Home` · `Elopement` · `More ▾`. Hover underline sweep animation (`transition: width 0.3s ease;`).
* **More Dropdown** (`.nav-dropdown`): Opens on hover and on keyboard focus (`:focus-within`). Two labelled groups (`.dropdown-label`):
  * **Other Services**: Villa Wedding, Pre-Wedding
  * **Discover**: About Us, Portfolio, Wedding Journal, FAQ
  * Contact is deliberately not in More, because Inquire Now is always visible.
  * When the current page is inside the dropdown, the `More` trigger carries the active state.
* **Desktop Action**: Inquire Now outlined pill button (`.btn-nav-inquire`).

### 5.2 Mobile Drawer Navigation
* **Same structure as desktop**: The drawer mirrors the desktop menu and its groups. The hamburger stays because five links plus Inquire do not fit a phone header.
* **Placement**: Fixed right drawer (`position: fixed; width: 88%; max-width: 360px; height: 100dvh; z-index: 1090;`).
* **Overlay**: Blurred dark backdrop (`rgba(30, 39, 43, 0.5); backdrop-filter: blur(3px); z-index: 1080;`).
* **Drawer Header**:
  * Dedicated top bar containing brand title and subline.
  * Explicit circular close button (`.mobile-drawer-close`) with 20×20 SVG cross (`✕`) that rotates 90° on hover.
* **Primary Links**: Home and Bali Elopement Packages as large serif links (`19px`, Cormorant Garamond). Active state highlighted in Coastal Slate `#5A7A85` with a circular dot indicator.
* **Grouped Secondary Links** (`.mobile-nav-label` + `13px` Jost links):
  * **Other Services**: Villa Weddings, Pre Wedding Photography
  * **Discover**: About Us, Portfolio, Wedding Journal, FAQ, Direct Inquiries Desk (contact stays here because the Inquire button is hidden on mobile)
* **Drawer Footer**: Two-column grid with Email and WhatsApp pill buttons pinned to the bottom. `scrollbar-width: none`.

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

### 5.4 Homepage Structure
In this order:
1. **Hero** (`.hero`): `min-height: 58vh`, title aligned to the lower part of the image (`align-items: flex-end`) so the photo reads fully. Light overlay only: `linear-gradient(180deg, rgba(28,42,48,0.08) 0%, rgba(28,42,48,0.1) 50%, rgba(28,42,48,0.5) 100%)`. Hero photos must be bright, landscape, and not dramatic/dark.
2. **Packages** (`#services-preview`): Label, heading, three short intro paragraphs, then three cards (Bali Elopement Packages, Bali Villa Wedding Packages, Bali Pre Wedding Photography) linking to each service overview.
3. **Captured in Paradise**: Heading, one sentence, 7-tile brick gallery and a portfolio button.
4. **Words from Our Couples**: Follows the gallery directly on the same background (`padding-top: 0`). Heading, one sentence, then three testimonial cards.
5. **About Us**: Text and team photo.

The "Why Couples Choose Us" section was removed from the homepage and the About page.

### 5.5 Package Cards
* **Layout**: 3-column desktop grid (`grid-template-columns: repeat(3, 1fr)`), order Elopement → Villa Wedding → Pre-Wedding.
* **Card Anatomy**:
  1. **Top Badge**: Highlight pill (e.g. `Most Popular • Couple Only`).
  2. **Card Thumbnail**: Hover scale zoom (`transform: scale(1.04)`).
  3. **Category Label** and **Editorial Title** (serif italic).
  4. **Description**: One paragraph, two sentences at most.
  5. **CTA**: Full-width "View Details" button.

### 5.6 Brick / Masonry Dynamic Gallery
* **Grid**: 12-column responsive layout (`grid-template-columns: repeat(12, 1fr)`).
* **Tile Asymmetry**:
  * Tile 1 (Hero Portrait): `grid-column: span 5; grid-row: span 2;`
  * Tile 2 & 3 (Landscape Stack): `grid-column: span 7;`
  * Tile 4 & 5 (Symmetrical Pair): `grid-column: span 6;`
* **Interaction**: Interactive cursor zoom with fullscreen lightbox trigger (`data-lightbox-src`).

### 5.7 Portfolio
* **Category Tabs**: `Elopement` · `Villa Wedding` · `Pre-Wedding` (filter keys `elopement`, `villa`, `prewedding`; deep link with `?filter=`). Corporate events (GoTo, Pertamina, Scarlett) are not shown.
* **Story Page Gallery**: 5–10 photos per story (agreed ceiling for performance). Two columns on desktop, one on mobile, all images lazy-loaded.
* **Wedding Films Section** (`#portfolio-films`): Below the story grid. Landscape 16:9 YouTube films in a `repeat(auto-fit, minmax(min(100%, 480px), 1fr))` grid. Each card shows the YouTube thumbnail with a play button. The YouTube player (`youtube-nocookie.com`) is only inserted when the card is clicked, so the page stays light. The section is hidden while there are no films.
* **Legacy story video**: The 9:16 self-hosted player on story pages (`assets/videos/*.mov|mp4`, 176 MB and 48 MB) is being retired. These films move to YouTube, so do not upload them to hosting.

### 5.8 Inclusions, Timeline & FAQ Accordion
* **Inclusions**: Checkmark list with a bold label per line.
* **Journey Timeline**: Vertical milestone line with time and title per node.
* **FAQ** (`faq.html`): Grouped questions (Ceremony & Legal, Packages & Guests, Pre-Wedding Photography, Planning With Us) using native `<details name="faq">` so only one answer is open at a time. A `+` / `−` indicator sits on the right. The page ends with an Inquire Now + WhatsApp CTA.

### 5.9 Contact Page
* **Two sides**: Contact info on the left (address, time zone, phone, WhatsApp, video consultation note), inquiry form on the right. On mobile the form comes first.
* **One email action**: The form's "Send Inquiry via Email" button is the only email action on this page. The footer email line is hidden here (`.footer-contact-email`).

### 5.10 Statement Footer
* **Background**: Solid Coastal Slate (`#5A7A85`) with white and translucent white text (`rgba(255, 255, 255, 0.85)`).
* **Columns (4-Column Desktop)**:
  1. *Brand & Heritage*: Summary, Bali Top Wedding partnership box, and social icons (Instagram, Pinterest, YouTube, TikTok).
  2. *Designed For You*: Bali Elopement Packages, Villa Weddings, Pre Wedding Photography, Services Comparison. ("Our Services" was rejected as a heading.)
  3. *More*: About Us & Team Staff, Portfolio, Wedding Journal, FAQ.
  4. *Get in Touch*: Office address, email, phone, WhatsApp.
* **Sub-footer Bar**: Copyright notice.

### 5.11 Naming
| Use | Not |
| :--- | :--- |
| Villa Wedding(s) | Private Villa (as a menu or package name) |
| Wedding Journal | Elopement Journal, Blog |
| Designed For You | Our Services |
| More | Explore, Discover (as the menu name) |

"Private villa" may still appear in descriptive sentences. The URL key `pkg=private-villa` was kept in the static site so existing links keep working.

---

## 6. Imagery & Media Guidelines

### 6.1 Photography Style
* **Color Grading**: Warm, natural golden hour tones, soft skin tones, rich ocean blues and lush tropical greens. Avoid artificial over-saturation.
* **Brightness**: Prefer bright, airy images. Dramatic or dark photos were rejected for the homepage.
* **Variety**: Balance beach shots with wide landscape (non-beach) shots.
* **Subject Matter**: Candid romance, wind-swept veils on clifftops, intimate glances, artisanal floral styling, and candlelit twilight ambiance.

### 6.2 File Size & Resolution Rules
Agreed in the review meeting: **under 700 KB is ideal, about 1 MB is the maximum.** Blurry photos were caused by **too little resolution**, not by file size. Several pre-wedding galleries were exported at 512px wide and average only ~110 KB. Re-export from the original files instead of shrinking further.

| Asset Type | Ratio | Long Edge | Format | File Size |
| :--- | :--- | :--- | :--- | :--- |
| **Hero** | ~2:1 landscape | 2400 px | WebP | ≤ 700 KB |
| **Gallery / Story Photo** | any | 2000–2400 px | WebP (quality ~80) | ≤ 700 KB |
| **Package Card / Thumbnail** | 16:10 | 1600 px | WebP | ≤ 300 KB |
| **Planner & Team Avatar** | 1:1 | 400 px | WebP | < 60 KB |
| **Films** | 16:9 landscape | n/a | YouTube link | Not hosted |

Reference: the `rubini-czarlie` gallery (2400 px, ~470 KB average) looks sharp and meets the size rule.

---

## 7. WordPress Implementation Blueprint

The static site in this repository is the approved reference. The design (CSS, markup, content) carries over to WordPress. The parts below do **not** carry over as-is and must be converted.

### 7.1 What Changes in the Migration
| Static site | WordPress |
| :--- | :--- |
| Header/footer loaded with `fetch("components/*.html")` in `js/script.js` | `header.php` / `footer.php`. Remove `loadComponents()`, which breaks on WordPress URLs, and call `initMobileDrawer()`, `initScrollEffects()` and `initContactBindings()` directly on `DOMContentLoaded` |
| `PACKAGES_DATA`, `PORTFOLIO_DATA`, `PORTFOLIO_FILMS` hard-coded in `js/script.js` | Custom Post Types + ACF fields (7.3), editable from wp-admin |
| `highlightActiveNav()` matches file names | WordPress menu classes `current-menu-item` / `current-menu-ancestor`. Style `.current-menu-ancestor > .nav-link` like `.nav-link.active` |
| Hard-coded `.html` links, including links built inside JS (`portfolio-detail.html?story=`, `contact.html?package=`) | Permalinks (7.4) |
| Relative `assets/...` paths, including inline `background-image` styles on 8 pages | Media Library URLs or `get_template_directory_uri()` |
| Journal articles rendered in a JavaScript modal (`openArticleModal`) | Real posts, each with its own URL (better for search engines) |
| `SITE_CONFIG` (WhatsApp, email, phone, socials) in JS | Theme options/ACF options page, passed to JS with `wp_localize_script` |

Keep as JavaScript: mobile drawer, scroll effect, lightbox, portfolio filter, films player, and the inquiry form (it only builds `mailto:` / WhatsApp links, so it needs no server).

### 7.2 Template File Structure (Custom Theme)
```
wp-content/themes/bali-elopement/
├── style.css                   # Theme header
├── functions.php               # Setup, menus, CPTs, ACF, enqueue scripts
├── header.php                  # Sticky nav (Home · Elopement · More) + mobile drawer
├── footer.php                  # 4-column footer (5.10)
├── front-page.php              # Homepage sections in the order of 5.4
├── taxonomy-service.php        # Service overview: all packages of Elopement / Villa Wedding / Pre-Wedding
├── single-package.php          # Package detail: hero slideshow, inclusions, Good to Know notes, inquiry form
├── archive-portfolio.php       # Story grid + category tabs + Wedding Films
├── single-portfolio.php        # Story gallery (5–10 photos) + quote
├── page-about.php
├── page-contact.php            # Info left, form right (5.9)
├── page-faq.php                # Or a normal page built from core Details blocks
├── home.php / single.php       # Wedding Journal
├── assets/css/style.css        # Copied from css/style.css
├── assets/js/main.js           # From js/script.js minus the parts listed in 7.1
└── inc/                        # CPT registration, ACF field groups, nav walker
```

### 7.3 Content Model

#### Menus (`register_nav_menus`)
* **primary**: Home, Elopement, More. Under More, the group labels "Other Services" and "Discover" are custom links (`#`) with the CSS class `dropdown-label`, rendered without a link by a small nav walker. The mobile drawer uses the same menu.
* **footer-services** and **footer-more**: Footer columns 2 and 3.

#### CPT: `package`
* **Posts**: 18 packages, mirroring `PACKAGES_DATA` in `js/script.js`
  * Elopement 1–9: Tibumana Waterfall, Sanur Beach, Karang Boma Cliff Uluwatu, Taman Dedari Ubud, Nusa Dua Beach, Jimbaran Beach View Chapel, Suwat Waterfall, Kuta Beach View Rooftop, Ubud Green Valley and Rice Fields
  * Villa Wedding 1–6: Estuary Villa, Candani Villa, Jeeva Saba Villa, Puri Nirwana Villa, Villa Plenilunio, Villa Phalosa
  * Pre-Wedding 1–3: Simply Us, The Signature, Balinese Heritage
* **Taxonomy** `service` (mirror `PACKAGE_SERVICES`): `elopement`, `villa-wedding`, `pre-wedding`, each with a title, intro text and header photo for its overview page
* **ACF Fields**:
  * `label` (Text, e.g. *"Bali Elopement 3"*). The post title is the venue/package name
  * `summary` (Textarea, overview card) and `description` (WYSIWYG, detail page; falls back to summary)
  * `price_idr` (Text, e.g. *"IDR 24,500,000 net"*; villa prices have no "net") and `price_note` (Text, e.g. *"for 2 pax"*, *"for 50 pax"*)
  * `inclusions` (Repeater: `label`, `text`)
  * `notes` (Repeater: `text`, shown as "Good to Know": transport, delivery, rain plan, time recommendation)
  * `gallery` (Gallery, 2–4 photos for the hero slideshow; the first is the card thumbnail)

#### CPT: `portfolio`
* **Taxonomy** `portfolio_category`: `elopement`, `villa-wedding`, `pre-wedding`. Do not migrate the corporate event stories.
* **ACF Fields** (mirror `PORTFOLIO_DATA`):
  * `meta` (Text, location line), `description` (Textarea)
  * `related_package` (Post Object → `package`)
  * `quote`, `quote_author` (Text)
  * `review_background` (Image)
  * `gallery` (Gallery, 5–10 photos)
  * `youtube_url` (URL, landscape film, optional)
  * Featured image = hero and card thumbnail

#### Wedding Films
ACF repeater on the Portfolio archive settings: `title`, `category`, `youtube_url` (same shape as `PORTFOLIO_FILMS`). WordPress oEmbed also accepts the plain YouTube link.

#### FAQ
A normal page using core **Details** blocks under group headings, so the team can edit answers without code.

### 7.4 URL Map
| Static | WordPress |
| :--- | :--- |
| `index.html` | `/` |
| `package-detail.html?pkg=elopement` | `/elopement/` |
| `package-detail.html?pkg=elopement-1` … `-9` | `/packages/tibumana-waterfall/` … |
| `package-detail.html?pkg=private-villa` | `/villa-wedding/` |
| `package-detail.html?pkg=private-villa-1` … `-6` | `/packages/estuary-villa/` … |
| `package-detail.html?pkg=pre-wedding` | `/pre-wedding/` |
| `package-detail.html?pkg=pre-wedding-1` … `-3` | `/packages/simply-us/` … |
| `services.html` | `/designed-for-you/` |
| `portfolio.html` (`?filter=`) | `/portfolio/` (`/portfolio-category/…/`) |
| `portfolio-detail.html?story=…` | `/portfolio/{story}/` |
| `about.html`, `contact.html`, `faq.html`, `testimonials.html` | `/about/`, `/contact/`, `/faq/`, `/testimonials/` |
| `blog.html` | `/wedding-journal/` |

If the static links were already shared (e.g. with planners), add 301 redirects for them.

### 7.5 Media in WordPress
* Upload photos at the sizes in 6.2. WordPress generates smaller sizes and `srcset` automatically. Images over 2560 px are scaled down on upload.
* Do not upload the local video files. Use YouTube links (hosting space is limited).

### 7.6 Page Builder Option (Elementor Pro / Bricks)
If building visually instead of a custom theme:
1. **Global Colors**: Primary `#5A7A85`, Secondary `#435E67`, Canvas `#FFFFFF`, Canvas Soft `#F4F7F8`, Heading `#1E272B`, Body `#52636A`.
2. **Global Typography**: Display `Cormorant Garamond` (300, 400, 600), Body `Jost` (300, 400, 500).
3. **Header/Footer**: Rebuild in Theme Builder with the Nav Menu widget using the menus in 7.3. Pasting `components/header.html` alone is not enough, because the drawer is only initialized after the `fetch` that no longer happens.
4. Load `css/style.css` through a child theme.

---

## 8. Quality Checklist

- [x] **Palette Consistency**: Crisp white with Coastal Slate `#5A7A85` (the team confirmed the blue).
- [x] **Navigation**: Home · Elopement · More, menu centered, mobile drawer with the same groups.
- [x] **Approved Copy**: Homepage and package texts match `all pages teks updated.docx`. No "Why Couples Choose Us".
- [x] **Single Email Action on Contact**: Form button only.
- [x] **Dual Action CTAs**: Commercial pages offer WhatsApp and email inquiry.
- [ ] **Photos**: Every image ≤ 1 MB, galleries at 2000–2400 px, 5–10 photos per story.
- [ ] **Films**: All portfolio films on YouTube, landscape. No self-hosted video.
- [ ] **WordPress**: Conversions in 7.1 done, URL map in 7.4 applied.

## 9. Open Items From the Review Meeting

| Item | Owner | Status |
| :--- | :--- | :--- |
| Re-export blurry galleries at 2000–2400 px, ≤ 700 KB (`pantai-nyanyi`, `balangan-cliff`, `melasti-beach`, `art-centre`), and add non-beach landscape shots | Made | Waiting |
| `ronny-melan`: 8 of 17 source photos are only 516–1024 px (the Oculus set, `AJA_5818` to `AJA_5976`). Need the originals | Made | Waiting |
| Galleries over 10 photos to trim or approve (`pantai-nyanyi` 25, `melasti-beach` 19, `balangan-cliff` 11, and the client galleries with 17–18 each). Full-resolution originals are kept outside the repo in `C:\bali-elopement-sumber-foto\` (`PORTOFOLIO`, `FOTO FOR ALL PAGES`) | Team | Waiting |
| New bright hero photo (fishing couple / reef with fabric, flower shower, Rubini) | Team | Waiting |
| Pre-wedding photos in Balinese heritage attire, cleared for upload | Widya | Waiting |
| Nando & Karin (Sagara) gallery | Team | Waiting |
| Low-resolution coded photos that look soft at full width: `014` and `025` (Tibumana, 1264 px), `020` (Suwat, 1536 px), `026` (Karang Boma, 1448 px), `037` (Simply Us, 1024 px). `011` and `012` are fine as small gallery tiles. Need larger originals | Team | Waiting |
| YouTube links for all elopement and pre-wedding films | Team → Arya | Waiting |
| FAQ topics not yet answered: payment and deposit, cancellation, booking lead time | Team | Waiting |
| Share the website link with the group and email it to planners | Arya | After the above |
