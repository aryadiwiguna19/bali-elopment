<?php
/**
 * Converted from contact.html
 */
get_header();
?>
<style>
    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 48px;
      align-items: start;
    }
    /* The inquiry form carries the only email action on this page */
    .footer-contact-email {
      display: none;
    }
    @media (max-width: 860px) {
      .contact-layout {
        grid-template-columns: 1fr;
      }
      .contact-layout > :first-child {
        order: 2;
      }
    }
  </style>
  <!-- ── 3. HERO ── -->
  <header class="hero-inner" style="background-image: linear-gradient(180deg, rgba(20, 16, 14, 0.48) 0%, rgba(20, 16, 14, 0.78) 100%), url('<?php echo btw_asset('assets/images/hero/hero-contact.webp'); ?>'); background-position: center 60%;">
    <div class="hero-content">
      <h1>Start Your Bali Journey</h1>
      <p class="hero-subtitle">
        Whether you prefer an itemized email proposal or instant WhatsApp messaging, we are delighted to assist.
      </p>
    </div>
  </header>

  <!-- ── 4. CONTACT INFO & INQUIRY FORM ── -->
  <main class="section">
    <div class="container">
      
      <!-- Main Layout: Form & Office Information -->
      <div class="contact-layout">
        
        <!-- Left: Office Details & Overseas Coordination Guide -->
        <div>
          <div style="background-color: var(--card-bg); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 32px; box-shadow: var(--shadow-subtle); margin-bottom: 28px;">
            <h3 style="font-size: 22px; font-style: italic; margin-bottom: 16px;">Bali Head Office</h3>
            
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 16px;">
              <li style="display: flex; gap: 12px; font-size: 14.5px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <strong style="color: var(--dark);">Physical Office Address:</strong><br>
                  <span data-address>Jalan Tukad Balian No. 99 A, Sidakarya, Denpasar Selatan, Bali 80224, Indonesia</span>
                </div>
              </li>

              <li style="display: flex; gap: 12px; font-size: 14.5px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div>
                  <strong style="color: var(--dark);">Time Zone Coordination:</strong><br>
                  <span>Bali is in WITA (UTC+8). European inquiries (GMT / CET) are answered promptly during afternoon and evening European windows.</span>
                </div>
              </li>

              <li style="display: flex; gap: 12px; font-size: 14.5px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div>
                  <strong style="color: var(--dark);">Direct Phone:</strong><br>
                  <a href="#" data-phone data-phone-display>+62 361 464 623</a>
                </div>
              </li>

              <li style="display: flex; gap: 12px; font-size: 14.5px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" style="flex-shrink: 0; margin-top: 3px;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <div>
                  <strong style="color: var(--dark);">WhatsApp:</strong><br>
                  <a href="#" data-wa data-wa-display>+62 812 3749 5930</a>
                </div>
              </li>
            </ul>
          </div>

          <!-- Video Consultation Note -->
          <div style="background-color: var(--nude); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 24px;">
            <h4 style="font-size: 18px; margin-bottom: 8px;">Video Consultations via Google Meet or Zoom</h4>
            <p style="font-size: 13.5px; line-height: 1.6; margin-bottom: 0;">
              Planning from afar? We are happy to schedule a 30-minute private video call to walk you through venue photographs, package customizer options, and date availability.
            </p>
          </div>
        </div>

        <!-- Right: Inquiry Form -->
        <div style="background-color: var(--nude); border: 1px solid var(--border-strong); border-radius: 8px; padding: clamp(28px, 4vw, 44px);">
          <span class="section-label">Tailored Inquiry</span>
          <h2 style="font-style: italic; font-size: 32px; margin-bottom: 12px;">Tell Us About Your Dream Vows</h2>
          <p style="font-size: 14.5px; margin-bottom: 28px;">
            Fill in the essential details below. You can submit via Email or WhatsApp according to your preference.
          </p>

          <form class="inquiry-form" onsubmit="return false;">
            
            <div class="form-group">
              <label class="form-label" for="contact-name">Your Full Name *</label>
              <input type="text" id="contact-name" name="name" class="form-control" placeholder="e.g., Emma &amp; Lucas" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-email">Email Address *</label>
              <input type="email" id="contact-email" name="email" class="form-control" placeholder="e.g., yourname@email.com" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-target-month">Estimated Event Month / Target Year *</label>
              <input type="text" id="contact-target-month" name="target_month" class="form-control" placeholder="e.g., September 2026 or Spring 2027" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-package">Package of Interest</label>
              <select id="contact-package" name="package" class="form-control">
                <?php btw_package_options(); ?>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-message">Special Request / Message</label>
              <textarea id="contact-message" name="message" class="form-control" placeholder="Tell us your desired scenery (cliffs, beach, jungle), estimated guest count, or any specific questions..."></textarea>
            </div>

            <div class="form-dual-actions">
              <button type="button" class="btn btn-email-contrast btn-submit-email">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                Send Inquiry via Email
              </button>
              <button type="button" class="btn btn-whatsapp btn-submit-wa">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Send via WhatsApp
              </button>
            </div>

            <p class="form-note">
              🔒 We value your privacy. No spam. You will receive a direct, personal reply from our senior planner within 24 hours.
            </p>
          </form>
        </div>

      </div>

    </div>
  </main>

<?php get_footer(); ?>
