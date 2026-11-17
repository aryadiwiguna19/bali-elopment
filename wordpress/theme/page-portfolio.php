<?php
/**
 * Converted from portfolio.html
 */
get_header();
?>
<style>
    .portfolio-filters {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }
    .portfolio-filter-btn {
      background: transparent;
      border: 1px solid var(--border-strong);
      padding: 9px 24px;
      border-radius: 40px;
      font-size: 11px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      cursor: pointer;
      transition: var(--transition);
      color: var(--dark);
    }
    .portfolio-filter-btn:hover, .portfolio-filter-btn.active {
      background: var(--sage);
      color: var(--ivory);
      border-color: var(--sage);
    }
    
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 36px;
    }
    .portfolio-card {
      background: var(--card-bg);
      border: 1px solid var(--border-subtle);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: var(--shadow-subtle);
      transition: var(--transition);
      cursor: pointer;
    }
    .portfolio-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-card);
      border-color: var(--sage);
    }
    .portfolio-thumb-wrap {
      position: relative;
      aspect-ratio: 16 / 10;
      overflow: hidden;
    }
    .portfolio-thumb-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }
    .portfolio-card:hover .portfolio-thumb-wrap img {
      transform: scale(1.04);
    }
    .portfolio-body {
      padding: 28px 24px;
    }
    .portfolio-title {
      font-size: 24px;
      font-style: italic;
      margin-bottom: 12px;
    }

    .films-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr));
      gap: 36px;
    }
    .film-card {
      background: var(--card-bg);
      border: 1px solid var(--border-subtle);
      border-radius: 6px;
      overflow: hidden;
      box-shadow: var(--shadow-subtle);
    }
    .film-frame {
      aspect-ratio: 16 / 9;
      background-color: var(--dark);
    }
    .film-frame iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }
    .film-player {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      border: 0;
      background: none;
      cursor: pointer;
      overflow: hidden;
    }
    .film-player img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }
    .film-player:hover img {
      transform: scale(1.04);
    }
    .film-play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 68px;
      height: 68px;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.92);
      color: var(--sage-dark);
      box-shadow: var(--shadow-card);
    }
    .film-play-icon svg {
      width: 24px;
      height: 24px;
      margin-left: 3px;
    }
    .film-body {
      padding: 22px 24px;
    }
    .film-body .section-label {
      margin-bottom: 6px;
    }
    .film-body .portfolio-title {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .portfolio-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
  <!-- ── 3. HERO ── -->
  <header class="hero-inner" style="background-image: linear-gradient(180deg, rgba(20, 16, 14, 0.48) 0%, rgba(20, 16, 14, 0.78) 100%), url('<?php echo btw_asset('assets/images/portfolio/erik-sekar/8.webp'); ?>'); background-position: center 30%;">
    <div class="hero-content">
      <h1>Curated Love Stories</h1>
      <p class="hero-subtitle">
        Real intimate celebrations and cinematic portraits on the Island of the Gods.
      </p>
    </div>
  </header>

  <!-- ── 4. CURATED STORIES GRID ── -->
  <main class="section">
    <div class="container">
      
      <!-- Category Filter Tabs -->
      <div class="portfolio-filters" aria-label="Filter Stories">
        <button class="portfolio-filter-btn active" data-filter="elopement">Elopement</button>
        <button class="portfolio-filter-btn" data-filter="villa">Villa Wedding</button>
        <button class="portfolio-filter-btn" data-filter="prewedding">Pre-Wedding</button>
      </div>

      <!-- Curated Portfolio Stories -->
      <div class="portfolio-grid">
        
        <!-- Empty State (When no stories in category yet) -->
        <div class="portfolio-empty-state" style="display: none; grid-column: 1 / -1; text-align: center; padding: 70px 20px; background: var(--card-bg); border-radius: 8px; border: 1px dashed var(--border-strong);">
          <h3 class="empty-title" style="font-family: var(--font-serif); font-size: 26px; font-style: italic; color: var(--charcoal); margin-bottom: 12px;">Gallery Coming Soon</h3>
          <p style="font-size: 14px; color: var(--muted); max-width: 520px; margin: 0 auto 24px;">
            We are curating stunning visual celebrations for this category. Stay tuned or inquire directly with our team to view private portfolio previews.
          </p>
          <a href="<?php echo btw_url('contact'); ?>" class="btn btn-primary" style="display: inline-block;">Inquire With Our Team</a>
        </div>
        
        <!-- STORY 1: ANDI & EVA (PRIVATE VILLA ELOPEMENT) -->
        <a href="<?php echo btw_url('story:andi-eva'); ?>" class="portfolio-card-link" data-category="elopement">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/andi-eva/7.webp'); ?>" alt="Andi and Eva Private Villa Elopement" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Andi &amp; Eva</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                Surrounded by fragrant frangipani trees and modern sanctuary architecture, Andi &amp; Eva exchanged rings under an elegant white floral arch before enjoying a private starlit dinner.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- STORY 2: BUDI & ELLA (BEACHFRONT BLESSING) -->
        <a href="<?php echo btw_url('story:budi-ella'); ?>" class="portfolio-card-link" data-category="elopement beach">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/budi-ella/8.webp'); ?>" alt="Budi and Ella Beachfront Elopement" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Budi &amp; Ella</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                A soulful Christian blessing ceremony on the tranquil shores of Bali. With pastel blue hydrangeas, traditional white ceremony umbrellas, and breaking ocean waves, Budi &amp; Ella promised forever.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- STORY 3: ERIK & SEKAR (CLIFFTOP BANQUET) -->
        <a href="<?php echo btw_url('story:erik-sekar'); ?>" class="portfolio-card-link" data-category="elopement cliffside">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/erik-sekar/8.webp'); ?>" alt="Erik and Sekar Clifftop Elopement" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Erik &amp; Sekar</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                Perched high above the Indian Ocean, Erik &amp; Sekar celebrated their sacred union framed by a grand circular white floral installation, followed by a romantic private banquet for two under the stars.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- STORY 4: RUBINI & CZARLIE (SECLUDED SHORELINE) -->
        <a href="<?php echo btw_url('story:rubini-czarlie'); ?>" class="portfolio-card-link" data-category="elopement beach">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/rubini-czarlie/1.webp'); ?>" alt="Rubini and Czarlie Beach Elopement" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Rubini &amp; Czarlie</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                A joyful, carefree celebration on a pristine white sand beach. Featuring a striking coral and pink heart floral arch against the sapphire sea, Rubini &amp; Czarlie celebrated in pure romance.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- STORY 5: SARAH & MIHA (RAINFOREST SANCTUARY) -->
        <a href="<?php echo btw_url('story:sarah-miha'); ?>" class="portfolio-card-link" data-category="elopement">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/sarah-miha/1.webp'); ?>" alt="Sarah and Miha Ubud Elopement" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Sarah &amp; Miha</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                Nestled within the lush rainforest valley of Kamandalu Ubud, Sarah &amp; Miha exchanged custom handwritten vows in a soft pink draped floral gazebo, surrounded by ancient tropical greenery.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- STORY 6: VANY & SANTI (CLIFF & REEF WALK) -->
        <a href="<?php echo btw_url('story:vany-santi'); ?>" class="portfolio-card-link" data-category="elopement">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/vany-santi/1.webp'); ?>" alt="Vany and Santi Ocean Elopement" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Vany &amp; Santi</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                A modern celebration beginning with an ocean-view cliff blessing under a rainbow floral circle and concluding with a barefoot sunset stroll along the tidal coral reef in matching white linen.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- VILLA WEDDING 1: CLAUDIA & DENNIS -->
        <a href="<?php echo btw_url('story:claudia-dennis'); ?>" class="portfolio-card-link" data-category="villa">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/couples/claudia-dennis.webp'); ?>" alt="Claudia and Dennis Villa Wedding in Nusa Dua" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Claudia &amp; Dennis</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                A bespoke celebration for 25 cherished family members and friends in an exclusive oceanfront cliffside villa, with a custom stage over the infinity pool and an al-fresco dinner under fairy lights.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- VILLA WEDDING 2: ASTRELLA & MIKHAEL (ULUWATU) -->
        <a href="<?php echo btw_url('story:astrella-mikhael'); ?>" class="portfolio-card-link" data-category="villa">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/astrella-mikhael/1.webp'); ?>" alt="Astrella and Mikhael Clifftop Wedding in Uluwatu" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Astrella &amp; Mikhael</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                A grand clifftop celebration above the Uluwatu coastline, with a white aisle lined in deep red florals and an evening reception lit by sparklers and fireworks.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- VILLA WEDDING 3: JAY & LISA (SABA BEACH) -->
        <a href="<?php echo btw_url('story:jay-lisa'); ?>" class="portfolio-card-link" data-category="villa">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/jay-lisa/1.webp'); ?>" alt="Jay and Lisa Beachfront Wedding at Saba Beach" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Jay &amp; Lisa</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                A beachfront garden wedding framed by palm trees and white orchids, followed by a candlelit dinner, fireworks, and a lively dance floor.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- VILLA WEDDING 4: PUTRI & VICTOR (TANAH LOT) -->
        <a href="<?php echo btw_url('story:putri-victor'); ?>" class="portfolio-card-link" data-category="villa">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/putri-victor/1.webp'); ?>" alt="Putri and Victor Wedding near Tanah Lot" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Putri &amp; Victor</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                An ocean-view celebration near Tanah Lot blending Balinese heritage attire with soft pastel styling and an evening Balinese dance performance.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- PREWEDDING 1: ART CENTRE DENPASAR -->
        <a href="<?php echo btw_url('story:art-centre'); ?>" class="portfolio-card-link" data-category="prewedding">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/art-centre/1.webp'); ?>" alt="Art Centre Denpasar Prewedding" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Art Centre Denpasar</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                An enchanting cultural pre-wedding session set amidst the majestic carved stone gates, traditional Balinese pavilions, and lush banyan trees of Taman Werdhi Budaya.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- PREWEDDING 2: BALANGAN BEACH & CLIFF -->
        <a href="<?php echo btw_url('story:balangan-cliff'); ?>" class="portfolio-card-link" data-category="prewedding">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/balangan-cliff/1.webp'); ?>" alt="Balangan Beach and Cliff Prewedding" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Balangan Beach &amp; Cliff</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                Perched high upon the iconic golden limestone cliffs of Balangan overlooking turquoise breaks and sea caves, followed by a barefoot sunset shoreline stroll.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- PREWEDDING 3: RONNY & MELAN (KINTAMANI) -->
        <a href="<?php echo btw_url('story:ronny-melan'); ?>" class="portfolio-card-link" data-category="prewedding">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/ronny-melan/1.webp'); ?>" alt="Ronny and Melan Pre-Wedding in Kintamani" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Ronny &amp; Melan</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                An editorial pre-wedding session in two looks: a flowing white gown across Mount Batur&rsquo;s black lava fields, then soft pink at Oculus Kintamani overlooking the caldera.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- PREWEDDING 4: BLANGSINGA WATERFALL -->
        <a href="<?php echo btw_url('story:blangsinga-waterfall'); ?>" class="portfolio-card-link" data-category="prewedding">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/blangsinga-waterfall/1.webp'); ?>" alt="Blangsinga Waterfall Prewedding" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Blangsinga Waterfall</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                An intimate tropical romance framed by the rushing cascades, river stones, and mist-drenched emerald jungle canyon of Blangsinga Waterfall.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- PREWEDDING 5: STEVEN & JESSICA (BEDUGUL) -->
        <a href="<?php echo btw_url('story:steven-jessica'); ?>" class="portfolio-card-link" data-category="prewedding">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/steven-jessica/1.webp'); ?>" alt="Steven and Jessica Pre-Wedding in Bedugul" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Steven &amp; Jessica</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                A serene pre-wedding journey through the towering trees, open lawns, and cool highland breezes of Bali Botanic Garden Bedugul.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- PREWEDDING 6: MELASTI BEACH & CLIFF -->
        <a href="<?php echo btw_url('story:melasti-beach'); ?>" class="portfolio-card-link" data-category="prewedding">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/melasti-beach/1.webp'); ?>" alt="Melasti Beach and Cliff Prewedding" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Melasti Beach &amp; Cliff</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                From the monumental carved white limestone ravines to the tranquil turquoise shallows and coral reefs of Melasti Beach during the golden twilight hour.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

        <!-- PREWEDDING 8: PANTAI NYANYI -->
        <a href="<?php echo btw_url('story:pantai-nyanyi'); ?>" class="portfolio-card-link" data-category="prewedding">
          <article class="portfolio-card">
            <div class="portfolio-thumb-wrap">
              <img src="<?php echo btw_asset('assets/images/portfolio/pantai-nyanyi/1.webp'); ?>" alt="Pantai Nyanyi Prewedding" loading="lazy">
            </div>
            <div class="portfolio-body">
              <h3 class="portfolio-title">Pantai Nyanyi</h3>
              <p style="font-size: 14px; margin-bottom: 0;">
                Dramatic coastal romance on the glistening black sands and surging surf of Pantai Nyanyi, capturing ethereal sunset silhouettes and mirrored tidal reflections.
              </p>
              <span class="btn-story-link">Read Love Story &amp; View Gallery →</span>
            </div>
          </article>
        </a>

      </div>

    </div>
  </main>

  <!-- ── 5. WEDDING FILMS (Shown once PORTFOLIO_FILMS in script.js has entries) ── -->
  <section class="section section-nude" id="portfolio-films" hidden>
    <div class="container">
      <div class="section-header">
        <h2>Wedding Films</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="films-grid" id="films-grid"></div>
    </div>
  </section>

<?php get_footer(); ?>
