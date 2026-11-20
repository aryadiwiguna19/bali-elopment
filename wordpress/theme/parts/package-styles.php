<?php /* Styles shared by the service overview and package pages (from package-detail.html). */ ?>
<style>
  /* Package Switcher Tabs */
  .package-tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  .pkg-tab-btn {
    padding: 10px 22px;
    border-radius: 40px;
    border: 1px solid var(--border-strong);
    background-color: var(--white);
    color: var(--dark);
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    transition: var(--transition);
    cursor: pointer;
    text-decoration: none;
  }
  .pkg-tab-btn:hover, .pkg-tab-btn.active {
    background-color: var(--coastal);
    color: var(--ivory);
    border-color: var(--coastal);
  }

  #pkg-hero {
    min-height: 300px;
    height: 40vh;
    max-height: 440px;
    padding: 0;
    background-position: center 38%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    #pkg-hero {
      min-height: 220px;
      height: 30vh;
    }
  }
  
  .breadcrumb-nav {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 24px;
    color: var(--muted);
  }
  .breadcrumb-nav a {
    color: var(--accent-dark);
  }
  .breadcrumb-nav a:hover {
    color: var(--dark);
  }

  /* Hero photo */
  .pkg-hero-photo {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }

  /* Explanation and price */
  .package-header-left {
    max-width: none;
    width: 100%;
  }
  .package-price-block {
    display: inline-block;
    margin-top: 12px;
    padding: 16px 22px;
    background-color: var(--nude);
    border-radius: 6px;
  }
  .package-price-block .package-price-tag {
    font-size: clamp(28px, 3vw, 34px);
  }

  /* Explanation and booking box share the width equally */
  .package-content-grid {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1024px) {
    .package-content-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Explanation and price left, photo slider right */
  .package-header-bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  @media (max-width: 900px) {
    .package-header-bar {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }

  /* Photo slider: swipe, arrows, dots, click to enlarge */
  .pkg-slider {
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--nude);
  }
  .pkg-slider-track {
    display: flex;
    height: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  .pkg-slider-track::-webkit-scrollbar {
    display: none;
  }
  .pkg-slide {
    flex: 0 0 100%;
    scroll-snap-align: start;
    cursor: zoom-in;
  }
  .pkg-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .pkg-slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.88);
    color: var(--dark);
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    transition: background 0.2s ease;
  }
  .pkg-slider-btn:hover {
    background: #FFFFFF;
  }
  .pkg-slider-prev {
    left: 14px;
  }
  .pkg-slider-next {
    right: 14px;
  }
  .pkg-slider-dots {
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  }
  .pkg-slider-dot {
    width: 9px;
    height: 9px;
    padding: 0;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }
  .pkg-slider-dot.is-active {
    background: #FFFFFF;
  }

  /* Good to Know notes */
  .pkg-notes {
    margin: 0 0 12px 18px;
    display: grid;
    gap: 10px;
    font-size: 14.5px;
    line-height: 1.7;
    color: var(--muted);
  }
</style>
