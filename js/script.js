/**
 * BALI ELOPEMENT — CORE JAVASCRIPT ENGINE
 * Powered & Organized by Bali Top Wedding
 * Centralized Configuration, Mobile Drawer, Dynamic Packages, Form & Channels
 */

// ── 1. GLOBAL CENTRALIZED CONFIGURATION ──
// Updating details here propagates everywhere on the website instantly!
const SITE_CONFIG = {
  brandName: "Bali Elopement",
  parentBrand: "Bali Top Wedding",
  parentUrl: "https://www.balitopwedding.com",
  whatsapp: {
    number: "6281237495930",
    display: "+62 812 3749 5930",
    defaultMessage: "Hello Bali Elopement! I would like to inquire about planning an intimate elopement in Bali."
  },
  email: {
    address: "wedding.bth@gmail.com",
    display: "wedding.bth@gmail.com",
    subjectPrefix: "[Bali Elopement Inquiry]"
  },
  phone: {
    number: "+62361464623",
    display: "+62 361 464 623"
  },
  socials: {
    instagram: "https://www.instagram.com/balitopwedding",
    pinterest: "https://www.pinterest.com/balitopwedding",
    youtube: "https://www.youtube.com/@balitopwedding",
    tiktok: "https://www.tiktok.com/@balitopwedding"
  },
  address: "Jalan Tukad Balian No. 99 A, Sidakarya, Denpasar Selatan, Bali 80224, Indonesia",
  officeHours: "09:00 - 18:00 WITA (GMT+8) • European consultation hours accommodated upon request"
};

// ── 2. PACKAGES DATABASE (3 SIGNATURE OFFERINGS) ──
const PACKAGES_DATA = {
  "elopement": {
    id: "elopement",
    badge: "Most Cherished • Just the Two of Us",
    title: "Intimate Elopement Wedding",
    subtitle: "Just the two of you (or up to 6 beloved guests) exchanging eternal vows overlooking Bali's dramatic azure cliffs or secluded tropical shores.",
    priceIDR: "IDR 32,000,000 net",
    priceForeign: "~ €1,950 / $2,100 USD",
    capacity: "Couple + Up to 6 Close Guests",
    duration: "Full-Day Dedicated Experience",
    heroImage: "assets/images/hero/hero-elopement.webp",
    heroPosition: "center 38%",
    description: "Our signature Intimate Elopement is crafted specifically for couples seeking a profound, soulful ceremony without the stress, pressure, and high expenses of a massive traditional wedding. From legal or commitment celebrants to artistic floral installations and sunset photography, every moment is orchestrated with effortless grace.",
    inclusions: [
      "Exclusive private cliffside or oceanfront ceremony venue (Uluwatu / Nusa Dua)",
      "Romantic fresh flower arch, aisle petal pathway & bridal bouquet with matching boutonniere",
      "English-speaking licensed celebrant with customized vows ceremony & commemorative certificate",
      "Professional Hair & Makeup Artist for the Bride (including trial consultation & touch-ups)",
      "6 Hours dedicated Master Photographer & Cinematographer (drone aerial coverage included)",
      "Full digital album with 250+ edited high-res photos & 3-4 minute cinematic wedding film",
      "Private 4-Course Candlelight Romantic Sunset Dinner with a bottle of sparkling wine",
      "1-Night Luxury Suite / Villa Stay for the Wedding Couple",
      "Dedicated Senior Wedding Planner & on-site coordinator from Bali Top Wedding"
    ],
    timeline: [
      { time: "13:30 - 15:30", title: "Bridal Suite Preparation & Make-up" },
      { time: "16:00 - 16:30", title: "Arrival at Sacred Ceremony Venue & First Look" },
      { time: "17:00 - 17:30", title: "Sunset Vows Exchange, Ring Ceremony & Toast" },
      { time: "17:30 - 18:30", title: "Golden Hour Couple Portraiture by the Ocean" },
      { time: "19:00 - 21:00", title: "Intimate 4-Course Candlelight Celebration Dinner" }
    ],
    // 7 Curated Photos with alternating orientations for seamless brick grid
    photos: [
      { src: "assets/images/elopement/elopement-01.webp", alt: "Intimate cliffside vows ceremony in Bali", spanClass: "brick-span-1" },
      { src: "assets/images/elopement/elopement-02.webp", alt: "Sunset couple portrait along Bali ocean", spanClass: "brick-span-2" },
      { src: "assets/images/elopement/elopement-03.webp", alt: "Artistic floral arch detail", spanClass: "brick-span-3" },
      { src: "assets/images/elopement/elopement-04.webp", alt: "Embracing couple on golden cliff", spanClass: "brick-span-4" },
      { src: "assets/images/elopement/elopement-05.webp", alt: "Emotional vows exchange moment", spanClass: "brick-span-5" },
      { src: "assets/images/elopement/elopement-06.webp", alt: "Couple walking hand in hand", spanClass: "brick-span-6" },
      { src: "assets/images/elopement/elopement-07.webp", alt: "Romantic sunset backdrop", spanClass: "brick-span-7" }
    ]
  },

  "pre-wedding": {
    id: "pre-wedding",
    badge: "Cinematic Adventure • Editorial Style",
    title: "Pre-Wedding Adventure Experience",
    subtitle: "A breathtaking full-day photography and cinematic journey through Bali's most awe-inspiring landscapes, secret waterfalls, and rugged coastal cliffs.",
    priceIDR: "IDR 16,500,000 net",
    priceForeign: "~ €990 / $1,080 USD",
    capacity: "Couple + Styling Crew",
    duration: "Full-Day (Sunrise to Sunset)",
    heroImage: "assets/images/prewedding/prewed-01.webp",
    heroPosition: "center 22%",
    description: "Designed for adventurous couples traveling to Bali who desire magazine-worthy pre-wedding portraiture before their big day. We curate private transport, wardrobe styling guidance, and secret off-the-beaten-path locations so you can be completely immersed in the magic of the island.",
    inclusions: [
      "Up to 3 distinct photoshoot destinations (e.g., Mount Batur sunrise, waterfall sanctuary, & Uluwatu cliff sunset)",
      "Full-day private air-conditioned VIP van with dedicated driver & refreshments",
      "Professional Hair & Makeup artist accompanying you all day for 2-3 wardrobe style changes",
      "Artistic Lead Photographer and Drone Cinematographer with creative direction",
      "35 Fine-Art Retouched Portraits + all raw high-resolution files delivered in private online gallery",
      "60-90 seconds cinematic 4K teaser video reel for Instagram / wedding day projection",
      "All location permit fees, entrance tickets, and traditional village donation clearances included",
      "Concept moodboard consultation & styling concierge prior to arrival"
    ],
    timeline: [
      { time: "04:30 - 06:00", title: "Morning Glam & Departure for Sunrise Location" },
      { time: "06:30 - 08:30", title: "First Session: Misty Pine Forest or Lake Tamblingan" },
      { time: "11:00 - 13:00", title: "Lunch Break & Style Change" },
      { time: "14:00 - 16:00", title: "Second Session: Secret Tropical Waterfall" },
      { time: "17:00 - 18:30", title: "Golden Hour & Sunset Finale at Balangan Cliff" }
    ],
    photos: [
      { src: "assets/images/prewedding/prewed-01.webp", alt: "Cinematic couple portrait at sunrise", spanClass: "brick-span-1" },
      { src: "assets/images/prewedding/prewed-02.webp", alt: "Editorial cliff edge shoot", spanClass: "brick-span-2" },
      { src: "assets/images/prewedding/prewed-03.webp", alt: "Close-up intimate bridal portrait", spanClass: "brick-span-3" },
      { src: "assets/images/prewedding/prewed-04.webp", alt: "Atmospheric landscape couple session", spanClass: "brick-span-4" },
      { src: "assets/images/prewedding/prewed-05.webp", alt: "Tropical greenery bridal editorial", spanClass: "brick-span-5" },
      { src: "assets/images/prewedding/prewed-06.webp", alt: "Emotional couple moment", spanClass: "brick-span-6" },
      { src: "assets/images/prewedding/prewed-07.webp", alt: "Dramatic coastal cliff sunset", spanClass: "brick-span-7" }
    ]
  },

  "private-villa": {
    id: "private-villa",
    badge: "Exclusive Sanctuary • Intimate Gathering",
    title: "Private Villa Intimate Wedding",
    subtitle: "A secluded luxury villa estate exclusively reserved for you and 10 to 30 of your closest family and friends, blending privacy with 5-star elegance.",
    priceIDR: "IDR 78,000,000 net",
    priceForeign: "~ €4,680 / $5,100 USD",
    capacity: "10 to 30 Guests",
    duration: "Full Wedding Day + Villa Stay Options",
    heroImage: "assets/images/hero/hero-villa.webp",
    heroPosition: "center 20%",
    description: "Experience the pinnacle of Balinese hospitality with an intimate private villa wedding. Imagine walking down an infinity-pool aisle hovering above the Indian Ocean, followed by a gourmet banquet beneath a canopy of fairy lights and tropical flowers.",
    inclusions: [
      "Daytime & Evening event rental of luxury private cliffside or Canggu luxury estate villa",
      "Bespoke ceremonial floating stage or garden altar with premium fresh imported florals",
      "30 Tiffany / crossback chairs with customized stationery & botanical place cards",
      "Cocktail hour canapés & 3-course plated culinary dinner by master private chefs",
      "Full ambient acoustic duo / live sound system & ambient fairy light canopy",
      "8 Hours Photo & Cinema team with drone capturing vows, cocktail hour, and dinner speeches",
      "Bridal & Groom prep styling suite with complimentary welcome spa massage",
      "Complete local authority Banjar & noise permit clearances handled seamlessly",
      "Full-service wedding team (Lead Planner + 4 Coordinators) for flawless coordination"
    ],
    timeline: [
      { time: "12:00 - 15:30", title: "Villa Check-in, Hair & Makeup, Vendor Soundchecks" },
      { time: "16:00 - 16:45", title: "Guest Welcome Cocktails & Intimate Ceremony" },
      { time: "17:00 - 18:00", title: "Sunset Toast, Family Portraits & Canape Hour" },
      { time: "18:30 - 21:00", title: "Gourmet Banquet Dinner & Heartfelt Speeches" },
      { time: "21:00 - 22:30", title: "Cake Cutting, Acoustic Melodies & Sparkler Send-off" }
    ],
    photos: [
      { src: "assets/images/villa/villa-01.webp", alt: "Luxury private villa wedding setup", spanClass: "brick-span-1" },
      { src: "assets/images/villa/villa-02.webp", alt: "Ocean-view infinity pool aisle", spanClass: "brick-span-2" },
      { src: "assets/images/villa/villa-03.webp", alt: "Romantic dinner table under fairy lights", spanClass: "brick-span-3" },
      { src: "assets/images/villa/villa-04.webp", alt: "Intimate family celebration cheers", spanClass: "brick-span-4" },
      { src: "assets/images/villa/villa-05.webp", alt: "Sunset couple reflection by pool", spanClass: "brick-span-5" },
      { src: "assets/images/villa/villa-06.webp", alt: "Floral centerpiece detail", spanClass: "brick-span-6" },
      { src: "assets/images/villa/villa-07.webp", alt: "Evening ambiance and fairy lighting", spanClass: "brick-span-7" }
    ]
  }
};

// ── 2.5 PORTFOLIO STORIES DATABASE (GALLERY-FIRST REAL CELEBRATIONS) ──
const PORTFOLIO_DATA = {
  "michel-angela": {
    id: "michel-angela",
    name: "Michel & Angela",
    meta: "Uluwatu Cliffs • Intimate Sunset Elopement",
    description: "An ethereal, distraction-free vows exchange perched 150 meters above the Indian Ocean. Surrounded only by the ocean breeze and breaking surf, Michel and Angela celebrated their sacred commitment in pure couple solitude, concluding with an intimate dinner under the starlit sky.",
    heroImage: "assets/images/couples/michel-angela.webp",
    reviewBg: "assets/images/elopement/elopement-02.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    hasVideo: true,
    videoUrl: "assets/videos/michel-angela.mov",
    quote: "I really wanna thank the Bali Top Wedding team for helping our wonderful wedding. It was a rush for us busy people, but having a team that is really fast response, reliable, and thoughtful made our day completely magical!",
    quoteAuthor: "Michel & Angela • Switzerland",
    photos: [
      "assets/images/couples/michel-angela.webp",
      "assets/images/elopement/elopement-01.webp",
      "assets/images/elopement/elopement-03.webp",
      "assets/images/elopement/elopement-05.webp",
      "assets/images/elopement/elopement-02.webp",
      "assets/images/elopement/elopement-06.webp",
      "assets/images/elopement/elopement-07.webp"
    ]
  },

  "maria-ellias": {
    id: "maria-ellias",
    name: "Maria & Ellias",
    meta: "Kintamani Highlands & Secret Beach • Pre-Wedding Editorial",
    description: "A cinematic sunrise-to-sunset editorial journey through Bali's most dramatic landscapes. From mist-shrouded mountain pine forests at dawn to crashing ocean waves during golden hour, Maria and Ellias captured pure authentic connection across the island.",
    heroImage: "assets/images/couples/maria-ellias.webp",
    reviewBg: "assets/images/prewedding/prewed-02.webp",
    packageId: "pre-wedding",
    packageTitle: "Pre-Wedding Adventure Experience",
    hasVideo: false,
    videoUrl: null,
    quote: "Flying to Bali for our pre-wedding photoshoot was the best decision we ever made. The team had our entire day planned to perfection: early morning coffee, touchups on the go, and absolute privacy. The photos look like a high-fashion editorial magazine spread!",
    quoteAuthor: "Maria & Ellias • Germany",
    photos: [
      "assets/images/couples/maria-ellias.webp",
      "assets/images/prewedding/prewed-01.webp",
      "assets/images/prewedding/prewed-04.webp",
      "assets/images/prewedding/prewed-03.webp",
      "assets/images/prewedding/prewed-02.webp",
      "assets/images/prewedding/prewed-05.webp",
      "assets/images/prewedding/prewed-06.webp",
      "assets/images/prewedding/prewed-07.webp"
    ]
  },

  "claudia-dennis": {
    id: "claudia-dennis",
    name: "Claudia & Dennis",
    meta: "Nusa Dua Luxury Estate • Private Villa Wedding",
    description: "A bespoke sanctuary celebration for 25 cherished family members and friends. Set in an exclusive oceanfront cliffside villa, the ceremony featured a custom acrylic stage hovering over the infinity pool, followed by an al-fresco dinner under a canopy of fairy lights.",
    heroImage: "assets/images/couples/claudia-dennis.webp",
    reviewBg: "assets/images/villa/villa-03.webp",
    packageId: "private-villa",
    packageTitle: "Private Villa Wedding Celebration",
    hasVideo: true,
    videoUrl: "assets/videos/claudia-dennis.mp4",
    quote: "Thank you so much to our planner who accompanied us for more than two years and patiently answered all of our countless questions! Everything was so seamless, the food was spectacular, and our guests couldn't stop raving about the villa.",
    quoteAuthor: "Claudia & Dennis • Australia",
    photos: [
      "assets/images/couples/claudia-dennis.webp",
      "assets/images/villa/villa-01.webp",
      "assets/images/villa/villa-02.webp",
      "assets/images/hero/hero-villa.webp",
      "assets/images/villa/villa-03.webp",
      "assets/images/villa/villa-04.webp",
      "assets/images/villa/villa-05.webp",
      "assets/images/villa/villa-07.webp"
    ]
  },

  "weisma-fadhil": {
    id: "weisma-fadhil",
    name: "Weisma & Fadhil",
    meta: "Sacred Ayung River Sanctuary, Ubud • Intimate Forest Wedding",
    description: "Surrounded by ancient tropical rainforest canopy and the gentle murmur of the Ayung River, Weisma and Fadhil embraced the slow-living essence of Bali. A peaceful, heartfelt celebration dedicated to genuine emotional presence with their closest inner circle.",
    heroImage: "assets/images/couples/weisma-fadhil.webp",
    reviewBg: "assets/images/elopement/elopement-04.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    quote: "Every single detail felt crafted with genuine love and intention. We were able to be fully present, cry happy tears, and laugh with our family without looking at the clock once.",
    quoteAuthor: "Weisma & Fadhil • Verified Couple",
    photos: [
      "assets/images/couples/weisma-fadhil.webp",
      "assets/images/elopement/elopement-04.webp",
      "assets/images/elopement/elopement-03.webp",
      "assets/images/elopement/elopement-05.webp",
      "assets/images/blog/blog-spots.webp",
      "assets/images/elopement/elopement-02.webp",
      "assets/images/elopement/elopement-06.webp",
      "assets/images/elopement/elopement-07.webp"
    ]
  }
};

// ── 3. DOM BINDING & SITE INITIALIZATION ──
document.addEventListener("DOMContentLoaded", async () => {
  // 1. First load modular components (header & footer)
  await loadComponents();

  // 2. Initialize page-specific interactions
  initPackageDetail();
  initPortfolioDetail();
  initInquiryForms();
  initLightbox();
  initPortfolioFilter();
});

/**
 * Asynchronously load modular components (header and footer)
 */
async function loadComponents() {
  const headerContainer = document.getElementById("site-header");
  const footerContainer = document.getElementById("site-footer");

  const tasks = [];

  if (headerContainer) {
    tasks.push(
      fetch("components/header.html")
        .then(res => {
          if (!res.ok) throw new Error(`Header HTTP error ${res.status}`);
          return res.text();
        })
        .then(rawHtml => {
          // Remove any live-server injected script tags or comments and body tags
          const cleanHtml = rawHtml
            .replace(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/gi, "")
            .replace(/<\/?body>/gi, "")
            .trim();
          headerContainer.innerHTML = cleanHtml;
          highlightActiveNav();
          initMobileDrawer();
          initScrollEffects();
        })
        .catch(err => {
          console.error("Failed to load header component:", err);
        })
    );
  }

  if (footerContainer) {
    tasks.push(
      fetch("components/footer.html")
        .then(res => {
          if (!res.ok) throw new Error(`Footer HTTP error ${res.status}`);
          return res.text();
        })
        .then(rawHtml => {
          // Remove any live-server injected script tags or comments and body tags
          const cleanHtml = rawHtml
            .replace(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/gi, "")
            .replace(/<\/?body>/gi, "")
            .trim();
          footerContainer.innerHTML = cleanHtml;
        })
        .catch(err => {
          console.error("Failed to load footer component:", err);
        })
    );
  }

  await Promise.all(tasks);
  // Re-run contact bindings so dynamic email/WhatsApp links in header & footer are attached
  initContactBindings();
}

/**
 * Automatically detects current page URL and marks corresponding nav link as active
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const filename = currentPath.split("/").pop() || "index.html";
  const urlParams = new URLSearchParams(window.location.search);
  const pkgParam = urlParams.get("pkg");

  // Remove existing active classes
  document.querySelectorAll(".nav-link.active, .mobile-nav-link.active").forEach(el => {
    el.classList.remove("active");
  });

  // Determine active target
  let activeTarget = "index.html";
  if (filename === "" || filename === "index.html") {
    activeTarget = "index.html";
  } else if (filename.includes("package-detail.html") && pkgParam) {
    activeTarget = `package-detail.html?pkg=${pkgParam}`;
  } else if (filename.includes("package-detail.html") || filename.includes("services.html")) {
    activeTarget = "package-detail.html?pkg=elopement";
  } else if (filename.includes("portfolio.html") || filename.includes("portfolio-detail.html")) {
    activeTarget = "portfolio.html";
  } else if (filename.includes("about.html")) {
    activeTarget = "about.html";
  } else if (filename.includes("blog.html")) {
    activeTarget = "blog.html";
  } else if (filename.includes("testimonials.html")) {
    activeTarget = "testimonials.html";
  } else if (filename.includes("contact.html")) {
    activeTarget = "contact.html";
  }

  // Set active class on desktop links
  document.querySelectorAll(`.nav-link[href="${activeTarget}"]`).forEach(link => {
    link.classList.add("active");
  });

  // Set active class on mobile links
  document.querySelectorAll(`.mobile-nav-link[href="${activeTarget}"]`).forEach(link => {
    link.classList.add("active");
  });
}

/**
 * Automatically update all elements using data attributes to match SITE_CONFIG
 */
function initContactBindings() {
  // WhatsApp bindings
  document.querySelectorAll("[data-wa]").forEach(el => {
    const customMsg = el.getAttribute("data-wa-msg");
    const msg = encodeURIComponent(customMsg || SITE_CONFIG.whatsapp.defaultMessage);
    el.setAttribute("href", `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${msg}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
    
    if (el.hasAttribute("data-wa-display")) {
      el.textContent = SITE_CONFIG.whatsapp.display;
    }
  });

  // Email bindings
  document.querySelectorAll("[data-email]").forEach(el => {
    const customSubject = el.getAttribute("data-email-subject") || SITE_CONFIG.email.subjectPrefix;
    el.setAttribute("href", `mailto:${SITE_CONFIG.email.address}?subject=${encodeURIComponent(customSubject)}`);
    
    if (el.hasAttribute("data-email-display")) {
      el.textContent = SITE_CONFIG.email.display;
    }
  });

  // Phone bindings
  document.querySelectorAll("[data-phone]").forEach(el => {
    el.setAttribute("href", `tel:${SITE_CONFIG.phone.number}`);
    if (el.hasAttribute("data-phone-display")) {
      el.textContent = SITE_CONFIG.phone.display;
    }
  });

  // Parent Company URL bindings
  document.querySelectorAll("[data-parent-url]").forEach(el => {
    el.setAttribute("href", SITE_CONFIG.parentUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Office address
  document.querySelectorAll("[data-address]").forEach(el => {
    el.textContent = SITE_CONFIG.address;
  });

  // Social Media links binding
  document.querySelectorAll("[data-social]").forEach(el => {
    const channel = el.getAttribute("data-social");
    if (channel && SITE_CONFIG.socials[channel]) {
      el.setAttribute("href", SITE_CONFIG.socials[channel]);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileDrawer() {
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".mobile-drawer-overlay");

  if (!hamburger || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.toggle("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    if (overlay) overlay.classList.toggle("is-active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  hamburger.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", toggleMenu);

  // Close menu when clicking on internal links
  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (drawer.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  });
}

/**
 * Sticky Navbar scroll elevation
 */
function initScrollEffects() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  }, { passive: true });
}

/**
 * Dynamic Package Detail Renderer
 * Reads ?pkg=... URL param and populates content, brick gallery, inclusions, timeline, and form
 */
function initPackageDetail() {
  const detailContainer = document.getElementById("package-detail-container");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const pkgKey = urlParams.get("pkg") || "elopement";
  const pkgData = PACKAGES_DATA[pkgKey] || PACKAGES_DATA["elopement"];

  // 1. Update text fields
  const titleEl = document.getElementById("pkg-title");
  const subtitleEl = document.getElementById("pkg-subtitle");
  const badgeEl = document.getElementById("pkg-badge");
  const priceIdrEl = document.getElementById("pkg-price-idr");
  const priceForeignEl = document.getElementById("pkg-price-foreign");
  const descEl = document.getElementById("pkg-description");
  const breadcrumbCurrent = document.getElementById("breadcrumb-current");
  const heroEl = document.getElementById("pkg-hero");

  if (titleEl) titleEl.textContent = pkgData.title;
  if (subtitleEl) subtitleEl.textContent = pkgData.subtitle;
  if (badgeEl) badgeEl.textContent = pkgData.badge;
  if (priceIdrEl) priceIdrEl.textContent = pkgData.priceIDR;
  if (priceForeignEl) priceForeignEl.textContent = pkgData.priceForeign;
  if (descEl) descEl.textContent = pkgData.description;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = pkgData.title;
  if (heroEl && pkgData.heroImage) {
    heroEl.style.backgroundImage = `url('${pkgData.heroImage}')`;
    heroEl.style.backgroundPosition = pkgData.heroPosition || 'center 15%';
  }

  // 2. Render Inclusions
  const inclusionsContainer = document.getElementById("pkg-inclusions");
  if (inclusionsContainer) {
    inclusionsContainer.innerHTML = pkgData.inclusions.map(inc => `
      <li class="inclusion-item">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${inc}</span>
      </li>
    `).join("");
  }

  // 3. Render Timeline
  const timelineContainer = document.getElementById("pkg-timeline");
  if (timelineContainer) {
    timelineContainer.innerHTML = pkgData.timeline.map(item => `
      <div class="timeline-node">
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-title">${item.title}</div>
      </div>
    `).join("");
  }

  // 4. Render Brick / Masonry Gallery (5-7 photos)
  const brickContainer = document.getElementById("pkg-brick-gallery");
  if (brickContainer) {
    brickContainer.innerHTML = pkgData.photos.map((p, idx) => `
      <div class="brick-item ${p.spanClass}" data-lightbox-src="${p.src}" title="Click to view full photo">
        <img src="${p.src}" alt="${p.alt}" loading="lazy">
        <div class="brick-overlay">
          <span>View Photo ${idx + 1} of ${pkgData.photos.length}</span>
        </div>
      </div>
    `).join("");
  }

  // 5. Auto-select package in reservation form dropdown
  const packageSelect = document.getElementById("inquiry-package");
  if (packageSelect) {
    packageSelect.value = pkgData.id;
  }
}

/**
 * Dynamic Portfolio Detail Page Handler (Gallery-First Experience)
 * Reads ?story= from URL query and populates photo gallery, client meta, review, and related stories
 */
let currentPhotoIndex = 0;
let currentPhotos = [];

function initPortfolioDetail() {
  const detailContainer = document.getElementById("portfolio-detail-container");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  let storyKey = urlParams.get("story") || "michel-angela";
  if (!PORTFOLIO_DATA[storyKey]) {
    storyKey = "michel-angela";
  }
  const data = PORTFOLIO_DATA[storyKey];
  currentPhotos = data.photos || [];

  // 1. Page Title & Meta
  document.title = `${data.name} — Bali Elopement`;

  // 2. Pure Photographic Hero Banner
  const heroEl = document.getElementById("story-hero");
  if (heroEl) {
    const heroBg = data.heroImage || (data.photos && data.photos[0]) || "";
    heroEl.style.backgroundImage = `url('${heroBg}')`;
  }

  // 3. Client Header & Concise Description
  const nameEl = document.getElementById("client-name");
  const metaEl = document.getElementById("client-meta");
  const descEl = document.getElementById("client-description");
  if (nameEl) nameEl.textContent = data.name;
  if (metaEl) metaEl.textContent = data.meta;
  if (descEl) descEl.textContent = data.description;

  // 4. Two-Column Zigzag Masonry Gallery
  const galleryContainer = document.getElementById("galleryContainer");
  function renderGallery() {
    if (!galleryContainer) return;
    galleryContainer.innerHTML = "";
    if (data.photos && data.photos.length > 0) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        galleryContainer.className = "gallery-single-column";
        data.photos.forEach((photoUrl, index) => {
          const item = document.createElement("div");
          item.className = "gallery-masonry-item";
          item.onclick = () => openPortfolioLightbox(index);
          item.innerHTML = `<img src="${photoUrl}" alt="${data.name} Celebration Photo ${index + 1}" loading="lazy">`;
          galleryContainer.appendChild(item);
        });
      } else {
        galleryContainer.className = "gallery-two-columns";
        const colLeft = document.createElement("div");
        colLeft.className = "gallery-col";
        const colRight = document.createElement("div");
        colRight.className = "gallery-col";

        galleryContainer.appendChild(colLeft);
        galleryContainer.appendChild(colRight);

        data.photos.forEach((photoUrl, index) => {
          const item = document.createElement("div");
          item.className = "gallery-masonry-item";
          item.onclick = () => openPortfolioLightbox(index);
          item.innerHTML = `<img src="${photoUrl}" alt="${data.name} Celebration Photo ${index + 1}">`;

          if (index % 2 === 0) {
            colLeft.appendChild(item);
          } else {
            colRight.appendChild(item);
          }
        });
      }
    }
  }
  renderGallery();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderGallery, 150);
  });

  // 5. Client Review / Reflections Section (with Video support)
  const reviewSection = document.getElementById("reviewSection");
  const reviewContentContainer = document.getElementById("reviewContentContainer");

  if (reviewSection) {
    const bgUrl = data.reviewBg || data.heroImage;
    reviewSection.style.backgroundImage = `linear-gradient(rgba(68, 97, 108, 0.88), rgba(90, 122, 133, 0.90)), url('${bgUrl}')`;
  }

  if (reviewContentContainer) {
    const inquireUrl = `contact.html?package=${data.packageId}&ref=${encodeURIComponent(data.name)}`;
    const waText = encodeURIComponent(`Hello Bali Elopement Service! I was moved by the celebration story of ${data.name} and would like to inquire about planning a celebration like this.`);
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${waText}`;

    if (data.hasVideo && data.videoUrl) {
      let videoHTML = "";
      if (data.videoUrl.includes("drive.google.com")) {
        let driveId = "";
        const idMatch = data.videoUrl.match(/[?&]id=([^&]+)/) || data.videoUrl.match(/\/d\/([^/]+)/);
        if (idMatch) driveId = idMatch[1];
        videoHTML = `<iframe src="https://drive.google.com/file/d/${driveId}/preview" allow="autoplay" allowfullscreen></iframe>`;
      } else {
        videoHTML = `
          <video controls playsinline preload="metadata" poster="${data.heroImage}">
            <source src="${data.videoUrl}" type="${data.videoUrl.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'}">
            <source src="${data.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      }

      reviewContentContainer.className = "review-layout-split";
      reviewContentContainer.innerHTML = `
        <div class="review-text-block">
          <div class="review-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>Couple Reflections</span>
          </div>
          <div class="stars-container">★★★★★</div>
          <p class="review-quote-text">"${data.quote}"</p>
          <div class="review-author">— ${data.quoteAuthor}</div>
          <div class="review-cta-group">
            <a href="${inquireUrl}" class="btn btn-primary" style="background-color: var(--ivory); color: var(--sage-dark); border-color: var(--ivory);">Plan a Celebration Like This</a>
            <a href="${waUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener">Chat with Planner on WhatsApp</a>
          </div>
        </div>
        <div class="review-video-block">
          <div class="review-video-container">
            ${videoHTML}
          </div>
        </div>
      `;
    } else {
      reviewContentContainer.className = "review-content-container";
      reviewContentContainer.innerHTML = `
        <div class="review-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span>Couple Reflections</span>
        </div>
        <div class="stars-container">★★★★★</div>
        <p class="review-quote-text">"${data.quote}"</p>
        <div class="review-author">— ${data.quoteAuthor}</div>
        <div class="review-cta-group">
          <a href="${inquireUrl}" class="btn btn-primary" style="background-color: var(--ivory); color: var(--sage-dark); border-color: var(--ivory);">Plan a Celebration Like This</a>
          <a href="${waUrl}" class="btn btn-whatsapp" target="_blank" rel="noopener">Chat with Planner on WhatsApp</a>
        </div>
      `;
    }
  }

  // 6. Related Celebrations
  const relatedContainer = document.getElementById("related-stories-container");
  if (relatedContainer) {
    const otherKeys = Object.keys(PORTFOLIO_DATA).filter(k => k !== data.id);
    relatedContainer.innerHTML = otherKeys.slice(0, 3).map(k => {
      const s = PORTFOLIO_DATA[k];
      return `
        <article class="related-story-card">
          <a href="portfolio-detail.html?story=${s.id}" class="related-story-link">
            <div class="related-story-thumb">
              <img src="${s.heroImage}" alt="${s.name}" loading="lazy">
              <span class="related-story-badge">${s.packageTitle}</span>
            </div>
            <div class="related-story-body">
              <h4 class="related-story-title">${s.name}</h4>
              <p class="related-story-location">📍 ${s.meta}</p>
              <span class="related-story-cta">View Story &amp; Gallery →</span>
            </div>
          </a>
        </article>
      `;
    }).join("");
  }

  // 7. Lightbox Controls & Keyboard Navigation
  const closeBtn = document.getElementById("lightboxClose");
  const nextBtn = document.getElementById("lightboxNext");
  const prevBtn = document.getElementById("lightboxPrev");
  const modal = document.getElementById("lightboxModal");

  if (closeBtn) closeBtn.onclick = closePortfolioLightbox;
  if (nextBtn) nextBtn.onclick = nextPortfolioLightbox;
  if (prevBtn) prevBtn.onclick = prevPortfolioLightbox;
  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal || e.target.classList.contains("lightbox-content-wrapper")) {
        closePortfolioLightbox();
      }
    };
  }

  document.addEventListener("keydown", (e) => {
    if (modal && modal.classList.contains("active")) {
      if (e.key === "ArrowRight") nextPortfolioLightbox();
      if (e.key === "ArrowLeft") prevPortfolioLightbox();
      if (e.key === "Escape") closePortfolioLightbox();
    }
  });
}

function openPortfolioLightbox(index) {
  currentPhotoIndex = index;
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  if (!modal || !img || !currentPhotos.length) return;
  img.src = currentPhotos[currentPhotoIndex];
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePortfolioLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function nextPortfolioLightbox() {
  if (!currentPhotos.length) return;
  currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
  const img = document.getElementById("lightboxImg");
  if (img) img.src = currentPhotos[currentPhotoIndex];
}

function prevPortfolioLightbox() {
  if (!currentPhotos.length) return;
  currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
  const img = document.getElementById("lightboxImg");
  if (img) img.src = currentPhotos[currentPhotoIndex];
}

/**
 * Inquiry & Booking Form Handler
 * Validates required inputs and provides Dual Options: Email or WhatsApp
 */
function initInquiryForms() {
  document.querySelectorAll(".inquiry-form").forEach(form => {
    const btnEmail = form.querySelector(".btn-submit-email");
    const btnWa = form.querySelector(".btn-submit-wa");

    const getFormData = () => {
      const name = form.querySelector("[name='name']")?.value.trim() || "";
      const email = form.querySelector("[name='email']")?.value.trim() || "";
      const targetMonth = form.querySelector("[name='target_month']")?.value || "";
      const selectedPkg = form.querySelector("[name='package']")?.value || "Intimate Elopement";
      const message = form.querySelector("[name='message']")?.value.trim() || "";

      if (!name || !email) {
        alert("Please provide both your Name and Email address so we can reach you.");
        return null;
      }

      return { name, email, targetMonth, selectedPkg, message };
    };

    // Action 1: Submit via Email
    if (btnEmail) {
      btnEmail.addEventListener("click", (e) => {
        e.preventDefault();
        const data = getFormData();
        if (!data) return;

        const subject = `${SITE_CONFIG.email.subjectPrefix} ${data.selectedPkg} - ${data.name}`;
        const body = `Dear Bali Elopement Planner,\n\nI would like to inquire about planning an intimate celebration in Bali.\n\n` +
          `• Client Name: ${data.name}\n` +
          `• Email Address: ${data.email}\n` +
          `• Target Month / Date: ${data.targetMonth}\n` +
          `• Selected Package: ${data.selectedPkg}\n\n` +
          `• Special Request / Story:\n${data.message || "(No additional requests)"}\n\n` +
          `Warm regards,\n${data.name}`;

        // Trigger native email client
        window.location.href = `mailto:${SITE_CONFIG.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        showSuccessModal("Your email client has been prepared with your inquiry details. If it did not open automatically, please write directly to " + SITE_CONFIG.email.address);
      });
    }

    // Action 2: Submit via WhatsApp
    if (btnWa) {
      btnWa.addEventListener("click", (e) => {
        e.preventDefault();
        const data = getFormData();
        if (!data) return;

        const waText = `*New Inquiry - Bali Elopement*\n\n` +
          `*Name:* ${data.name}\n` +
          `*Email:* ${data.email}\n` +
          `*Target Month:* ${data.targetMonth}\n` +
          `*Package:* ${data.selectedPkg}\n` +
          `*Notes:* ${data.message || "-"}\n\n` +
          `_Sent from balielopement.com_`;

        window.open(`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(waText)}`, "_blank");
        showSuccessModal("Thank you! WhatsApp has been opened with your inquiry details. Our wedding planner will respond promptly.");
      });
    }
  });
}

/**
 * Success Confirmation Modal
 */
function showSuccessModal(customText) {
  let modal = document.getElementById("inquiry-success-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "inquiry-success-modal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-container">
        <button class="modal-close" onclick="closeSuccessModal()">&times;</button>
        <div style="width: 56px; height: 56px; border-radius: 50%; background: #FAF8F5; border: 1px solid #C4B09A; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8F775C" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 class="serif-title" style="font-size: 26px; margin-bottom: 12px;">Inquiry Received</h3>
        <p id="modal-feedback-text" style="font-size: 15px; color: var(--muted); margin-bottom: 24px;"></p>
        <button class="btn btn-primary" onclick="closeSuccessModal()">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const textEl = document.getElementById("modal-feedback-text");
  if (textEl) textEl.textContent = customText;
  modal.classList.add("is-active");
}

function closeSuccessModal() {
  const modal = document.getElementById("inquiry-success-modal");
  if (modal) modal.classList.remove("is-active");
}

/**
 * Lightbox for viewing full-screen photos
 */
function initLightbox() {
  document.addEventListener("click", (e) => {
    const targetItem = e.target.closest("[data-lightbox-src]");
    if (!targetItem) return;

    const imgSrc = targetItem.getAttribute("data-lightbox-src");
    let lightbox = document.getElementById("image-lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "image-lightbox";
      lightbox.className = "modal-overlay";
      lightbox.innerHTML = `
        <button class="modal-close" style="color: #fff; top: 24px; right: 24px; font-size: 32px;" onclick="closeLightbox()">&times;</button>
        <img class="lightbox-content" id="lightbox-img" src="" alt="Full view">
      `;
      lightbox.addEventListener("click", (evt) => {
        if (evt.target === lightbox) closeLightbox();
      });
      document.body.appendChild(lightbox);
    }

    const img = document.getElementById("lightbox-img");
    if (img) img.src = imgSrc;
    lightbox.classList.add("is-active");
  });
}

function closeLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  if (lightbox) lightbox.classList.remove("is-active");
}

/**
 * Portfolio category filtering
 */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll(".portfolio-filter-btn");
  const items = document.querySelectorAll(".portfolio-card-link, .portfolio-card:not(.portfolio-card-link .portfolio-card)");

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      items.forEach(item => {
        const itemCat = item.getAttribute("data-category") || item.querySelector(".portfolio-card")?.getAttribute("data-category");
        if (category === "all" || itemCat === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

