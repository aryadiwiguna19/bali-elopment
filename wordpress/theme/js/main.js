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
  document.querySelectorAll(".pkg-slider").forEach(initPackageSlider);
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
 * Package photo slider: swipe or scroll, arrows, dots; a click on a photo enlarges it (initLightbox)
 */
function initPackageSlider(slider) {
  const track = slider.querySelector(".pkg-slider-track");
  const slides = slider.querySelectorAll(".pkg-slide");
  const dots = slider.querySelectorAll(".pkg-slider-dot");
  if (!track || slides.length < 2) return;

  const current = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = index => {
    const target = (index + slides.length) % slides.length;
    track.scrollTo({ left: target * track.clientWidth });
  };
  slider.querySelector(".pkg-slider-prev").addEventListener("click", () => go(current() - 1));
  slider.querySelector(".pkg-slider-next").addEventListener("click", () => go(current() + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => go(i)));

  let ticking = false;
  track.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const index = current();
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
      ticking = false;
    });
  }, { passive: true });
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
 * Inquiry & Booking Forms
 * "Send via Email" posts the form to WordPress (inc/inquiry.php): it is saved under
 * Inquiries in wp-admin and the planner is notified by email. "Send via WhatsApp"
 * opens WhatsApp with the details filled in and also saves a copy in wp-admin.
 */
const PAGE_LOADED_AT = Date.now();

function initInquiryForms() {
  document.querySelectorAll(".inquiry-form").forEach(form => {
    form.noValidate = true;
    form.removeAttribute("onsubmit");

    // Honeypot: hidden from people, bots fill it in.
    const trap = document.createElement("div");
    trap.className = "form-trap";
    trap.setAttribute("aria-hidden", "true");
    trap.innerHTML = '<label>Website <input type="text" name="website" tabindex="-1" autocomplete="off"></label>';
    form.appendChild(trap);

    const btnEmail = form.querySelector(".btn-submit-email");
    const btnWa = form.querySelector(".btn-submit-wa");

    form.addEventListener("input", e => clearFieldError(e.target));
    form.addEventListener("change", e => clearFieldError(e.target));
    // Enter in a field sends by email.
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (btnEmail) btnEmail.click();
    });

    if (btnEmail) {
      btnEmail.addEventListener("click", e => {
        e.preventDefault();
        if (btnEmail.disabled) return;
        const data = readInquiry(form);
        if (!validateInquiry(form, data)) return;

        setButtonBusy(btnEmail, true);
        postInquiry(form, data, "email")
          .then(res => {
            if (res.success) {
              form.reset();
              showInquiryModal({
                title: "Inquiry Received",
                text: `Thank you, ${data.name}. Your inquiry has reached our planning team. A senior planner will reply to ${data.email} within 24 hours. Please check your spam folder if you do not see it.`
              });
            } else if (res.data && res.data.fields) {
              showFieldErrors(form, res.data.fields);
            } else {
              showSendFailure(data, res.data && res.data.message);
            }
          })
          .catch(() => showSendFailure(data))
          .finally(() => setButtonBusy(btnEmail, false));
      });
    }

    if (btnWa) {
      btnWa.addEventListener("click", e => {
        e.preventDefault();
        const data = readInquiry(form);
        if (!validateInquiry(form, data)) return;

        const url = whatsappInquiryUrl(data);
        // Open first, inside the click, so popup blockers allow it.
        const win = window.open(url, "_blank");
        postInquiry(form, data, "whatsapp", true).catch(() => {});
        if (!win) {
          window.location.href = url;
          return;
        }
        win.opener = null;
        showInquiryModal({
          title: "WhatsApp Opened",
          text: "Your details are ready in WhatsApp. Please press Send there to deliver the message to our planner."
        });
      });
    }
  });
}

function readInquiry(form) {
  const val = name => (form.querySelector(`[name='${name}']`)?.value || "").trim();
  return {
    name: val("name"),
    email: val("email"),
    target_month: val("target_month"),
    package: val("package"),
    message: val("message"),
    website: val("website")
  };
}

function validateInquiry(form, data) {
  const errors = {};
  if (!data.name) errors.name = "Please enter your name.";
  if (!data.email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (form.querySelector("[name='target_month']") && !data.target_month) errors.target_month = "Please tell us your preferred month or date.";
  showFieldErrors(form, errors);
  return Object.keys(errors).length === 0;
}

function showFieldErrors(form, errors) {
  form.querySelectorAll(".field-error").forEach(el => el.remove());
  form.querySelectorAll(".has-error").forEach(el => el.classList.remove("has-error"));
  let first = null;
  Object.entries(errors).forEach(([name, message]) => {
    const input = form.querySelector(`[name='${name}']`);
    if (!input) return;
    const group = input.closest(".form-group") || input.parentElement;
    group.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
    const msg = document.createElement("span");
    msg.className = "field-error";
    msg.textContent = message;
    input.insertAdjacentElement("afterend", msg);
    if (!first) first = input;
  });
  if (first) first.focus();
}

function clearFieldError(input) {
  const group = input && input.closest ? input.closest(".form-group.has-error") : null;
  if (!group) return;
  group.classList.remove("has-error");
  group.querySelectorAll(".field-error").forEach(el => el.remove());
  input.removeAttribute("aria-invalid");
}

function postInquiry(form, data, channel, keepalive) {
  const body = new URLSearchParams({
    action: "btw_inquiry",
    channel,
    elapsed: String(Math.round((Date.now() - PAGE_LOADED_AT) / 1000)),
    page_url: window.location.href,
    ...data
  });
  return fetch(BTW.ajaxUrl || "/wp-admin/admin-ajax.php", {
    method: "POST",
    body,
    credentials: "same-origin",
    keepalive: !!keepalive
  }).then(r => r.json());
}

function whatsappInquiryUrl(data) {
  const text = `*New Inquiry - Bali Elopement*\n\n` +
    `*Name:* ${data.name}\n` +
    `*Email:* ${data.email}\n` +
    `*Target Month:* ${data.target_month}\n` +
    `*Package:* ${data.package || "-"}\n` +
    `*Notes:* ${data.message || "-"}\n\n` +
    `_Sent from ${window.location.hostname}_`;
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

/** The server could not be reached: offer the visitor's own email app or WhatsApp instead. */
function showSendFailure(data, message) {
  const subject = `${SITE_CONFIG.email.subjectPrefix} ${data.package} - ${data.name}`;
  const body = `Name: ${data.name}\nEmail: ${data.email}\nTarget Month / Date: ${data.target_month}\n` +
    `Package: ${data.package}\n\n${data.message}`;
  showInquiryModal({
    title: "Not Sent Yet",
    error: true,
    text: (message || "We could not send your inquiry just now.") + " Please send it with one of the options below. Your details are already filled in.",
    actions: [
      { label: "Open my email app", href: `mailto:${SITE_CONFIG.email.address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, className: "btn-primary" },
      { label: "Send via WhatsApp", href: whatsappInquiryUrl(data), className: "btn-whatsapp", newTab: true }
    ]
  });
}

function setButtonBusy(btn, busy) {
  btn.disabled = busy;
  btn.classList.toggle("is-busy", busy);
  if (busy) {
    btn.dataset.label = btn.innerHTML;
    btn.textContent = "Sending…";
  } else if (btn.dataset.label) {
    btn.innerHTML = btn.dataset.label;
  }
}

/**
 * Inquiry result modal
 */
function showInquiryModal({ title, text, error = false, actions = [] }) {
  let modal = document.getElementById("inquiry-success-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "inquiry-success-modal";
    modal.className = "modal-overlay";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `
      <div class="modal-container">
        <button class="modal-close" type="button" aria-label="Close">&times;</button>
        <div class="inquiry-modal-icon"></div>
        <h3 class="serif-title inquiry-modal-title" style="font-size: 26px; margin-bottom: 12px;"></h3>
        <p class="inquiry-modal-text" style="font-size: 15px; color: var(--muted); margin-bottom: 24px;"></p>
        <div class="inquiry-modal-actions"></div>
      </div>
    `;
    modal.addEventListener("click", e => {
      if (e.target === modal || e.target.closest(".modal-close, .modal-close-btn")) closeSuccessModal();
    });
    document.body.appendChild(modal);
  }
  modal.querySelector(".inquiry-modal-icon").innerHTML = error
    ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8F775C" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
    : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8F775C" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
  modal.querySelector(".inquiry-modal-title").textContent = title;
  modal.querySelector(".inquiry-modal-text").textContent = text;

  const box = modal.querySelector(".inquiry-modal-actions");
  box.innerHTML = "";
  actions.forEach(a => {
    const link = document.createElement("a");
    link.className = `btn ${a.className || "btn-primary"}`;
    link.href = a.href;
    link.textContent = a.label;
    if (a.newTab) { link.target = "_blank"; link.rel = "noopener"; }
    box.appendChild(link);
  });
  const close = document.createElement("button");
  close.type = "button";
  close.className = actions.length ? "inquiry-modal-dismiss modal-close-btn" : "btn btn-primary modal-close-btn";
  close.textContent = "Close";
  box.appendChild(close);

  modal.classList.add("is-active");
  close.focus();
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
