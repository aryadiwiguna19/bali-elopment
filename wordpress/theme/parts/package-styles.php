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
    min-height: 500px;
    height: 52vh;
    padding: 0;
    background-position: center 38%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (max-width: 768px) {
    #pkg-hero {
      min-height: 320px;
      height: 40vh;
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

  /* Hero slideshow */
  .pkg-hero-slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1.2s ease;
  }
  .pkg-hero-slide.is-active {
    opacity: 1;
  }
  .pkg-hero-dots {
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 2;
  }
  .pkg-hero-dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    background: rgba(255, 255, 255, 0.35);
    cursor: pointer;
  }
  .pkg-hero-dot.is-active {
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
