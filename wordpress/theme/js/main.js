/**
 * BALI ELOPEMENT — FRONT-END SCRIPT (WordPress theme)
 * Header, footer and all page content are rendered by PHP. This file only adds the
 * interactions. Contact details and films come from window.BTW (inc/setup.php).
 */

const BTW = window.BTW || { config: {}, films: [] };
const SITE_CONFIG = BTW.config;

document.addEventListener("DOMContentLoaded", () => {
  initContactBindings();
  initMobileDrawer();
  initScrollEffects();
  initPackageHero();
  initPortfolioGallery();
  initInquiryForms();
  initLightbox();
  initPortfolioFilter();
  initPortfolioFilms();
});

/**
 * Fills links marked with data attributes from the contact details
 */
function initContactBindings() {
  if (!SITE_CONFIG.whatsapp) return;

  document.querySelectorAll("[data-wa]").forEach(el => {
    const msg = encodeURIComponent(el.getAttribute("data-wa-msg") || SITE_CONFIG.whatsapp.defaultMessage);
    el.setAttribute("href", `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${msg}`);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
    if (el.hasAttribute("data-wa-display")) el.textContent = SITE_CONFIG.whatsapp.display;
  });

  document.querySelectorAll("[data-email]").forEach(el => {
    const subject = el.getAttribute("data-email-subject") || SITE_CONFIG.email.subjectPrefix;
    el.setAttribute("href", `mailto:${SITE_CONFIG.email.address}?subject=${encodeURIComponent(subject)}`);
    if (el.hasAttribute("data-email-display")) el.textContent = SITE_CONFIG.email.display;
  });

  document.querySelectorAll("[data-phone]").forEach(el => {
    el.setAttribute("href", `tel:${SITE_CONFIG.phone.number}`);
    if (el.hasAttribute("data-phone-display")) el.textContent = SITE_CONFIG.phone.display;
  });

  document.querySelectorAll("[data-parent-url]").forEach(el => {
    el.setAttribute("href", SITE_CONFIG.parentUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  document.querySelectorAll("[data-address]").forEach(el => {
    el.textContent = SITE_CONFIG.address;
  });

  document.querySelectorAll("[data-social]").forEach(el => {
    const url = SITE_CONFIG.socials[el.getAttribute("data-social")];
    if (!url) return;
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
}

/**
 * Mobile Navigation Drawer
 */
function initMobileDrawer() {
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-drawer");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  const closeBtn = document.querySelector(".mobile-drawer-close");
  if (!hamburger || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.toggle("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    if (overlay) overlay.classList.toggle("is-active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };
  const closeMenu = () => {
    drawer.classList.remove("is-open");
    hamburger.classList.remove("is-active");
    if (overlay) overlay.classList.remove("is-active");
    document.body.style.overflow = "";
  };

  hamburger.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  drawer.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
}

/**
 * Sticky Navbar scroll elevation
 */
function initScrollEffects() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });
}

/**
 * Package hero: cross-fades the slides rendered by PHP, with clickable dots
 */
function initPackageHero() {
  const heroEl = document.getElementById("pkg-hero");
  if (!heroEl) return;
  const slides = heroEl.querySelectorAll(".pkg-hero-slide");
  const dots = heroEl.querySelectorAll(".pkg-hero-dot");
  if (slides.length < 2) return;

  let current = 0;
  let timer;
  const show = index => {
    slides[current].classList.remove("is-active");
    dots[current].classList.remove("is-active");
    current = index;
    slides[current].classList.add("is-active");
    dots[current].classList.add("is-active");
  };
  const start = () => {
    clearInterval(timer);
    timer = setInterval(() => show((current + 1) % slides.length), 5000);
  };
  dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); start(); }));
  start();
}

/**
 * Wedding Films Section (portfolio page)
 * Shows YouTube thumbnails first and only loads the player when a film is clicked
 */
function initPortfolioFilms() {
  const section = document.getElementById("portfolio-films");
  const grid = document.getElementById("films-grid");
  const films = BTW.films || [];
  if (!section || !grid || !films.length) return;

  const escapeHtml = text => String(text).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  grid.innerHTML = films.map(film => `
    <article class="film-card">
      <div class="film-frame">
        <button type="button" class="film-player" data-video-id="${film.videoId}" data-title="${escapeHtml(film.title)}" aria-label="Play ${escapeHtml(film.title)} film">
          <img src="https://i.ytimg.com/vi/${film.videoId}/maxresdefault.jpg" alt="${escapeHtml(film.title)} wedding film" loading="lazy">
          <span class="film-play-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </button>
      </div>
      <div class="film-body">
        <span class="section-label">${escapeHtml(film.category)}</span>
        <h3 class="portfolio-title">${escapeHtml(film.title)}</h3>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".film-player").forEach(player => {
    const { videoId, title } = player.dataset;
    // Not every upload has a maxres thumbnail
    player.querySelector("img").addEventListener("error", e => {
      e.target.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    }, { once: true });
    player.addEventListener("click", () => {
      player.parentElement.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" title="${escapeHtml(title)} film" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    });
  });

  section.hidden = false;
}

/**
 * Portfolio story gallery: two zigzag columns on desktop, one on mobile, plus a lightbox
 */
let currentPhotoIndex = 0;
let currentPhotos = [];

function initPortfolioGallery() {
  const gallery = document.getElementById("galleryContainer");
  if (!gallery) return;

  const items = Array.from(gallery.querySelectorAll(".gallery-masonry-item"));
  currentPhotos = items.map(item => item.querySelector("img").src);
  items.forEach((item, index) => item.addEventListener("click", () => openPortfolioLightbox(index)));

  let layout = "";
  const arrange = () => {
    const next = window.innerWidth <= 768 ? "single" : "two";
    if (next === layout) return;
    layout = next;
    gallery.innerHTML = "";
    if (layout === "single") {
      gallery.className = "gallery-single-column";
      items.forEach(item => gallery.appendChild(item));
      return;
    }
    gallery.className = "gallery-two-columns";
    const cols = [document.createElement("div"), document.createElement("div")];
    cols.forEach(col => { col.className = "gallery-col"; gallery.appendChild(col); });
    items.forEach((item, index) => cols[index % 2].appendChild(item));
  };
  arrange();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(arrange, 150);
  });

  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  const nextBtn = document.getElementById("lightboxNext");
  const prevBtn = document.getElementById("lightboxPrev");
  if (closeBtn) closeBtn.onclick = closePortfolioLightbox;
  if (nextBtn) nextBtn.onclick = () => stepPortfolioLightbox(1);
  if (prevBtn) prevBtn.onclick = () => stepPortfolioLightbox(-1);
  if (modal) {
    modal.onclick = e => {
      if (e.target === modal || e.target.classList.contains("lightbox-content-wrapper")) closePortfolioLightbox();
    };
  }
  document.addEventListener("keydown", e => {
    if (!modal || !modal.classList.contains("active")) return;
    if (e.key === "ArrowRight") stepPortfolioLightbox(1);
    if (e.key === "ArrowLeft") stepPortfolioLightbox(-1);
    if (e.key === "Escape") closePortfolioLightbox();
  });
}

function openPortfolioLightbox(index) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  if (!modal || !img || !currentPhotos.length) return;
  currentPhotoIndex = index;
  img.src = currentPhotos[currentPhotoIndex];
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePortfolioLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function stepPortfolioLightbox(step) {
  if (!currentPhotos.length) return;
  currentPhotoIndex = (currentPhotoIndex + step + currentPhotos.length) % currentPhotos.length;
  const img = document.getElementById("lightboxImg");
  if (img) img.src = currentPhotos[currentPhotoIndex];
}

/**
 * Inquiry & Booking Form Handler
 * Validates required inputs and opens either the email app or WhatsApp
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

    if (btnEmail) {
      btnEmail.addEventListener("click", e => {
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
        window.location.href = `mailto:${SITE_CONFIG.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        showSuccessModal("Your email client has been prepared with your inquiry details. If it did not open automatically, please write directly to " + SITE_CONFIG.email.address);
      });
    }

    if (btnWa) {
      btnWa.addEventListener("click", e => {
        e.preventDefault();
        const data = getFormData();
        if (!data) return;
        const waText = `*New Inquiry - Bali Elopement*\n\n` +
          `*Name:* ${data.name}\n` +
          `*Email:* ${data.email}\n` +
          `*Target Month:* ${data.targetMonth}\n` +
          `*Package:* ${data.selectedPkg}\n` +
          `*Notes:* ${data.message || "-"}\n\n` +
          `_Sent from ${window.location.hostname}_`;
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
        <button class="modal-close" type="button">&times;</button>
        <div style="width: 56px; height: 56px; border-radius: 50%; background: #FAF8F5; border: 1px solid #C4B09A; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8F775C" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 class="serif-title" style="font-size: 26px; margin-bottom: 12px;">Inquiry Received</h3>
        <p id="modal-feedback-text" style="font-size: 15px; color: var(--muted); margin-bottom: 24px;"></p>
        <button class="btn btn-primary modal-close-btn" type="button">Close</button>
      </div>
    `;
    modal.querySelectorAll(".modal-close, .modal-close-btn").forEach(btn => btn.addEventListener("click", closeSuccessModal));
    document.body.appendChild(modal);
  }
  document.getElementById("modal-feedback-text").textContent = customText;
  modal.classList.add("is-active");
}

function closeSuccessModal() {
  const modal = document.getElementById("inquiry-success-modal");
  if (modal) modal.classList.remove("is-active");
}

/**
 * Lightbox for any element with data-lightbox-src
 */
function initLightbox() {
  document.addEventListener("click", e => {
    const targetItem = e.target.closest("[data-lightbox-src]");
    if (!targetItem) return;

    let lightbox = document.getElementById("image-lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "image-lightbox";
      lightbox.className = "modal-overlay";
      lightbox.innerHTML = `
        <button class="modal-close" type="button" style="color: #fff; top: 24px; right: 24px; font-size: 32px;">&times;</button>
        <img class="lightbox-content" id="lightbox-img" src="" alt="Full view">
      `;
      lightbox.addEventListener("click", evt => {
        if (evt.target === lightbox || evt.target.classList.contains("modal-close")) closeLightbox();
      });
      document.body.appendChild(lightbox);
    }
    document.getElementById("lightbox-img").src = targetItem.getAttribute("data-lightbox-src");
    lightbox.classList.add("is-active");
  });
}

function closeLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  if (lightbox) lightbox.classList.remove("is-active");
}

/**
 * Portfolio category filtering (?filter=villa or #villa preselects a tab)
 */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll(".portfolio-filter-btn");
  const items = document.querySelectorAll(".portfolio-card-link, .portfolio-card:not(.portfolio-card-link .portfolio-card)");
  const emptyState = document.querySelector(".portfolio-empty-state");
  if (!filterBtns.length) return;

  function applyFilter(btn) {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");
    let visibleCount = 0;
    items.forEach(item => {
      const itemCat = item.getAttribute("data-category") || item.querySelector(".portfolio-card")?.getAttribute("data-category") || "";
      const visible = category === "all" || itemCat.toLowerCase().split(/\s+/).includes(category.toLowerCase());
      item.style.display = visible ? "block" : "none";
      if (visible) visibleCount++;
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
      const emptyTitle = emptyState.querySelector(".empty-title");
      if (emptyTitle) emptyTitle.textContent = `${btn.textContent.trim()} Gallery Coming Soon`;
    }
  }

  filterBtns.forEach(btn => btn.addEventListener("click", () => applyFilter(btn)));

  const urlFilter = new URLSearchParams(window.location.search).get("filter") || window.location.hash.replace("#", "");
  const initialBtn = (urlFilter && Array.from(filterBtns).find(b => b.getAttribute("data-filter") === urlFilter.toLowerCase()))
    || document.querySelector(".portfolio-filter-btn.active")
    || filterBtns[0];
  if (initialBtn) applyFilter(initialBtn);
}
