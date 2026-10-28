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

// ── 2. PACKAGES DATABASE (SIGNATURE OFFERINGS) ──
const PACKAGES_DATA = {
  "elopement-1": {
    id: "elopement-1",
    badge: "PACKAGE 1 · ROOFTOP KUTA",
    title: "Intimate rooftop vows over Kuta Beach and golden sunset",
    subtitle: "",
    priceIDR: "IDR 23,000,000 net",
    priceForeign: "",
    capacity: "Just for Two",
    duration: "Rooftop Vows Ceremony",
    heroImage: "assets/images/elopement/elopement-01.webp",
    heroPosition: "center 38%",
    description: "Celebrate your love high above the vibrant heart of Kuta. Powered by Bali Top Wedding, this elopement package combines modern comfort with breathtaking tropical views. Say \"I Do\" on a stunning private rooftop venue featuring panoramic ocean vistas, famous Bali sunset backdrops, and an intimate setting designed just for two.\n\nLocated directly in the center of Kuta's bustling tourism hub, this package offers unmatched convenience with instant access to top beach resorts, dining, and nightlife. From rooftop floral styling and ceremony arrangements to legalities and photography, our fully registered local team ensures an effortless, unforgettable rooftop elopement.",
    inclusions: [
      "<strong>Planner & Coordination:</strong> Wedding planner and coordinator services",
      "<strong>Venue:</strong> Hotel rooftop venue with panoramic beach and sunset views",
      "<strong>Photography & Videography:</strong> Professional 1 photographer and 1 videographer (up to 2 hours of coverage)",
      "<strong>Ceremony & Officiant:</strong> English-speaking wedding celebrant (symbolic / non-religious & non-legal)",
      "<strong>Certificate:</strong> Commemorative wedding certificate",
      "<strong>Decor & Styling:</strong> Elegant wedding arch & floral ceremony decor",
      "<strong>Personal Flowers:</strong> Fresh hand bouquet for the bride & matching boutonniere for the groom",
      "<strong>Toast:</strong> 1 Bottle of local sparkling wine for wedding toast",
      "<strong>Dining:</strong> Romantic dinner for 2 guests",
      "<strong>Accommodation:</strong> 1-night stay in a Superior Room (including breakfast)"
    ],
    timeline: [
      { time: "16:00 - 16:30", title: "Arrival at Rooftop Venue & Pre-Ceremony Preparation" },
      { time: "16:45 - 17:30", title: "Sunset Vows Exchange, Ring Ceremony & Toast" },
      { time: "17:30 - 18:30", title: "Golden Hour Ocean View Couple Portraiture" },
      { time: "19:00 - 21:00", title: "Romantic Celebration Dinner for Two" }
    ],
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

  "elopement-2": {
    id: "elopement-2",
    badge: "PACKAGE 2 · BALANGAN CLIFF",
    title: "Dramatic cliffside vows with sweeping ocean and sunset views",
    subtitle: "",
    priceIDR: "IDR 21,000,000 net",
    priceForeign: "",
    capacity: "Just for Two",
    duration: "Cliffside Vows Ceremony",
    heroImage: "assets/images/elopement/elopement-02.webp",
    heroPosition: "center 38%",
    description: "Say \"I Do\" surrounded by nature with an unforgettable elopement on South Bali Cliff. Powered by Bali Top Wedding, this iconic outdoor location offers breathtaking panoramas of soaring ocean cliffs, golden beaches, and world-famous Bali sunsets—making it a favorite choice for all couples seeking a truly scenic vow exchange.\n\nWhether you dream of a simple exchange of vows or an all-inclusive setup, our legally registered local team manages every detail, including location permits, floral styling, officiating, and photography. Celebrate effortlessly on one of Bali's most celebrated landscapes.",
    inclusions: [
      "<strong>Planner & Coordination:</strong> Professional wedding planner and on-site coordinator services",
      "<strong>Venue:</strong> Cliffside venue rental at Balangan Cliff",
      "<strong>Photography & Videography:</strong> 1 Professional photographer and 1 videographer (up to 2 hours coverage)",
      "<strong>Ceremony & Officiant:</strong> English-speaking wedding celebrant (symbolic / non-religious & non-legal)",
      "<strong>Certificate:</strong> Commemorative wedding certificate",
      "<strong>Decor & Styling:</strong> Elegant cliffside ceremony decor",
      "<strong>Personal Flowers:</strong> Fresh hand bouquet for the bride & matching boutonniere for the groom",
      "<strong>Transportation:</strong> Private car with driver for up to 8 hours",
      "<strong>Toast:</strong> 1 Bottle of local wine for celebratory toast"
    ],
    timeline: [
      { time: "14:00 - 15:30", title: "Private Chauffeured Transfer to Balangan Cliff" },
      { time: "16:00 - 16:45", title: "Arrival, Scenic Exploration & Ceremony Setup" },
      { time: "17:00 - 17:45", title: "Dramatic Cliffside Sunset Vows & Celebratory Toast" },
      { time: "17:45 - 18:30", title: "Panoramic Golden Hour Couple Portraiture" }
    ],
    photos: [
      { src: "assets/images/elopement/elopement-02.webp", alt: "Dramatic cliffside vows", spanClass: "brick-span-1" },
      { src: "assets/images/elopement/elopement-04.webp", alt: "Sunset edge couple portrait", spanClass: "brick-span-2" },
      { src: "assets/images/elopement/elopement-03.webp", alt: "Bespoke cliffside styling", spanClass: "brick-span-3" },
      { src: "assets/images/elopement/elopement-07.webp", alt: "Ocean vistas from high cliffs", spanClass: "brick-span-4" },
      { src: "assets/images/elopement/elopement-05.webp", alt: "Emotional vow moments", spanClass: "brick-span-5" },
      { src: "assets/images/elopement/elopement-06.webp", alt: "Sunset beach walk", spanClass: "brick-span-6" },
      { src: "assets/images/elopement/elopement-01.webp", alt: "Cliffside backdrop", spanClass: "brick-span-7" }
    ]
  },

  "elopement-3": {
    id: "elopement-3",
    badge: "PACKAGE 3 · TANJUNG BENOA",
    title: "Serene vows with a white sand beach and tropical garden backdrop",
    subtitle: "",
    priceIDR: "IDR 29,000,000 net",
    priceForeign: "",
    capacity: "Just for Two",
    duration: "Beach / Garden Vows Ceremony",
    heroImage: "assets/images/elopement/elopement-03.webp",
    heroPosition: "center 38%",
    description: "Exchange your vows where lush greenery meets the sparkling waters of Tanjung Benoa. Powered by Bali Top Wedding, this elopement package offers complete flexibility to choose an intimate ceremony directly on the white sand beach or in the seaside tropical garden with uninterrupted ocean views.\n\nFrom beach arches to garden styling, our legally registered local team manages every detail—including venue coordination, floral design, celebrant services, and professional photography. Enjoy an effortless, stress-free vow exchange tailored to your personal vision on Tanjung Benoa's stunning coastline.",
    inclusions: [
      "<strong>Planner & Coordination:</strong> Professional wedding planner and on-site coordinator services",
      "<strong>Venue:</strong> Venue rental choice of White Sand Beach or Seaside Tropical Garden",
      "<strong>Photography & Videography:</strong> 1 Professional photographer and 1 videographer (up to 2 hours coverage)",
      "<strong>Ceremony & Officiant:</strong> English-speaking wedding celebrant (symbolic / non-religious & non-legal)",
      "<strong>Certificate:</strong> Commemorative wedding certificate",
      "<strong>Decor & Styling:</strong> Intimate, elegant floral setup",
      "<strong>Personal Flowers:</strong> Fresh hand bouquet for the bride & matching boutonniere for the groom",
      "<strong>Toast:</strong> 2 Glasses of celebratory mocktails or local wine",
      "<strong>Accommodation:</strong> 1-Night stay at Signature Room (includes daily breakfast for 2)"
    ],
    timeline: [
      { time: "15:00 - 16:00", title: "Signature Room Check-in & Ceremony Preparation" },
      { time: "16:30 - 17:15", title: "White Sand Beach or Tropical Garden Vows Exchange" },
      { time: "17:15 - 17:45", title: "Celebratory Toast & Seaside Couple Portraiture" },
      { time: "18:00 - 18:45", title: "Sunset Shoreline Stroll & Fine Art Photography" }
    ],
    photos: [
      { src: "assets/images/elopement/elopement-03.webp", alt: "Tropical seaside beach vows", spanClass: "brick-span-1" },
      { src: "assets/images/elopement/elopement-02.webp", alt: "Golden sunset beach portrait", spanClass: "brick-span-2" },
      { src: "assets/images/elopement/elopement-01.webp", alt: "Intimate floral arch setup", spanClass: "brick-span-3" },
      { src: "assets/images/elopement/elopement-04.webp", alt: "Seaside celebration embrace", spanClass: "brick-span-4" },
      { src: "assets/images/elopement/elopement-05.webp", alt: "Vow exchange ceremony", spanClass: "brick-span-5" },
      { src: "assets/images/elopement/elopement-06.webp", alt: "Walking along shoreline", spanClass: "brick-span-6" },
      { src: "assets/images/elopement/elopement-07.webp", alt: "Tropical garden backdrop", spanClass: "brick-span-7" }
    ]
  },

  "elopement-4": {
    id: "elopement-4",
    badge: "PACKAGE 4 · UBUD RIVERSIDE",
    title: "An intimate riverside elopement in peaceful Ubud",
    subtitle: "",
    priceIDR: "IDR 26,000,000 net",
    priceForeign: "",
    capacity: "Just for Two",
    duration: "Riverside Garden Ceremony",
    heroImage: "assets/images/elopement/elopement-04.webp",
    heroPosition: "center 38%",
    description: "Exchange your vows nestled in a lush riverside garden along the gentle Wos River. Powered by Bali Top Wedding, this elopement package offers a peaceful, luxury sanctuary where manicured lawns and vibrant tropical greenery meet natural river views.\n\nFrom elegant floral styling and celebrant coordination to legal requirements and professional photography, our legally registered local team handles every detail seamlessly. Enjoy 5-star hospitality and authentic Balinese warmth as you celebrate your special day in a serene garden setting.",
    inclusions: [],
    timeline: [
      { time: "15:00 - 16:00", title: "Arrival at Riverside Garden & Private Prep" },
      { time: "16:30 - 17:15", title: "Intimate Riverside Vows by the Wos River" },
      { time: "17:15 - 18:15", title: "Tropical Greenery & Riverbank Couple Portraiture" }
    ],
    photos: [
      { src: "assets/images/elopement/elopement-04.webp", alt: "Peaceful riverside garden venue", spanClass: "brick-span-1" },
      { src: "assets/images/elopement/elopement-05.webp", alt: "Lush tropical greenery ceremony", spanClass: "brick-span-2" },
      { src: "assets/images/elopement/elopement-03.webp", alt: "Riverside floral arch detail", spanClass: "brick-span-3" },
      { src: "assets/images/elopement/elopement-06.webp", alt: "Couple reflection in nature", spanClass: "brick-span-4" },
      { src: "assets/images/elopement/elopement-01.webp", alt: "Sacred vow exchange in Ubud", spanClass: "brick-span-5" },
      { src: "assets/images/elopement/elopement-02.webp", alt: "Heartfelt romantic moments", spanClass: "brick-span-6" },
      { src: "assets/images/elopement/elopement-07.webp", alt: "Evening garden atmosphere", spanClass: "brick-span-7" }
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
    heroImage: "assets/images/prewedding/prewed-04.webp",
    heroPosition: "center 30%",
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
    heroImage: "assets/images/portfolio/goto-gathering/1.webp",
    heroPosition: "center 45%",
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

// Alias default 'elopement' to 'elopement-1' for legacy link preservation
PACKAGES_DATA["elopement"] = PACKAGES_DATA["elopement-1"];
PACKAGES_DATA["event"] = PACKAGES_DATA["private-villa"];

// ── 2.5 PORTFOLIO STORIES DATABASE (GALLERY-FIRST REAL CELEBRATIONS) ──
const PORTFOLIO_DATA = {
  "andi-eva": {
    id: "andi-eva",
    name: "Andi & Eva",
    meta: "Seminyak Sanctuary • Private Villa Elopement",
    description: "An effortless private villa elopement celebrated in complete couple intimacy. Surrounded by tropical frangipani trees and modern sanctuary architecture, Andi & Eva exchanged rings under a lush white floral arch before enjoying a private starlit dinner.",
    heroImage: "assets/images/portfolio/andi-eva/7.webp",
    reviewBg: "assets/images/portfolio/andi-eva/6.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    hasVideo: false,
    videoUrl: null,
    quote: "Bali Top Wedding transformed our elopement into a truly serene, stress-free dream. Every floral detail and the pacing of our day was simply flawless.",
    quoteAuthor: "Andi & Eva • Jakarta, Indonesia",
    photos: [
      "assets/images/portfolio/andi-eva/7.webp",
      "assets/images/portfolio/andi-eva/1.webp",
      "assets/images/portfolio/andi-eva/2.webp",
      "assets/images/portfolio/andi-eva/5.webp",
      "assets/images/portfolio/andi-eva/6.webp",
      "assets/images/portfolio/andi-eva/4.webp",
      "assets/images/portfolio/andi-eva/8.webp",
      "assets/images/portfolio/andi-eva/3.webp",
      "assets/images/portfolio/andi-eva/9.webp",
      "assets/images/portfolio/andi-eva/10.webp"
    ]
  },

  "budi-ella": {
    id: "budi-ella",
    name: "Budi & Ella",
    meta: "Sanur Beachfront • Sunset Blessing Ceremony",
    description: "A soulful Christian blessing ceremony on the tranquil shores of Bali. With pastel blue hydrangeas, white ceremony umbrellas (tedung), and the sound of gentle waves, Budi & Ella promised forever at golden hour.",
    heroImage: "assets/images/portfolio/budi-ella/8.webp",
    reviewBg: "assets/images/portfolio/budi-ella/7.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    hasVideo: false,
    videoUrl: null,
    quote: "Standing together on the beach as the sun went down, listening to the pastor's blessing... it was the most emotional and meaningful moment of our lives.",
    quoteAuthor: "Budi & Ella • Verified Couple",
    photos: [
      "assets/images/portfolio/budi-ella/8.webp",
      "assets/images/portfolio/budi-ella/1.webp",
      "assets/images/portfolio/budi-ella/7.webp",
      "assets/images/portfolio/budi-ella/2.webp",
      "assets/images/portfolio/budi-ella/3.webp",
      "assets/images/portfolio/budi-ella/4.webp",
      "assets/images/portfolio/budi-ella/5.webp",
      "assets/images/portfolio/budi-ella/6.webp",
      "assets/images/portfolio/budi-ella/9.webp",
      "assets/images/portfolio/budi-ella/10.webp"
    ]
  },

  "erik-sekar": {
    id: "erik-sekar",
    name: "Erik & Sekar",
    meta: "Panoramic Clifftop Ocean View • Vows & Candlelight Banquet",
    description: "Overlooking the endless expanse of the Indian Ocean, Erik & Sekar celebrated their sacred union framed by a grand circular white floral installation. The evening transitioned into a romantic private candlelit dinner under the twilight sky.",
    heroImage: "assets/images/portfolio/erik-sekar/8.webp",
    reviewBg: "assets/images/portfolio/erik-sekar/10.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    hasVideo: false,
    videoUrl: null,
    quote: "From the dramatic clifftop views to the romantic dinner setup for just the two of us, Bali Top Wedding executed every detail with pure elegance.",
    quoteAuthor: "Erik & Sekar • Surabaya, Indonesia",
    photos: [
      "assets/images/portfolio/erik-sekar/8.webp",
      "assets/images/portfolio/erik-sekar/5.webp",
      "assets/images/portfolio/erik-sekar/10.webp",
      "assets/images/portfolio/erik-sekar/1.webp",
      "assets/images/portfolio/erik-sekar/2.webp",
      "assets/images/portfolio/erik-sekar/3.webp",
      "assets/images/portfolio/erik-sekar/4.webp",
      "assets/images/portfolio/erik-sekar/6.webp",
      "assets/images/portfolio/erik-sekar/7.webp",
      "assets/images/portfolio/erik-sekar/9.webp"
    ]
  },

  "rubini-czarlie": {
    id: "rubini-czarlie",
    name: "Rubini & Czarlie",
    meta: "Secluded Coastal Shore • Sunset Romance",
    description: "A vibrant, joyful celebration on a secluded tropical beach. Featuring a striking coral and pink heart-shaped floral arch against the sapphire sea, Rubini & Czarlie held an intimate elopement filled with laughter and warm ocean breezes.",
    heroImage: "assets/images/portfolio/rubini-czarlie/7.webp",
    reviewBg: "assets/images/portfolio/rubini-czarlie/3.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    hasVideo: false,
    videoUrl: null,
    quote: "We wanted a carefree, vibrant beach elopement with zero stress, and Bali Top Wedding delivered beyond our expectations. Truly unforgettable!",
    quoteAuthor: "Rubini & Czarlie • Verified Couple",
    photos: [
      "assets/images/portfolio/rubini-czarlie/7.webp",
      "assets/images/portfolio/rubini-czarlie/3.webp",
      "assets/images/portfolio/rubini-czarlie/1.webp",
      "assets/images/portfolio/rubini-czarlie/2.webp",
      "assets/images/portfolio/rubini-czarlie/4.webp",
      "assets/images/portfolio/rubini-czarlie/5.webp",
      "assets/images/portfolio/rubini-czarlie/6.webp",
      "assets/images/portfolio/rubini-czarlie/8.webp",
      "assets/images/portfolio/rubini-czarlie/9.webp",
      "assets/images/portfolio/rubini-czarlie/10.webp"
    ]
  },

  "sarah-miha": {
    id: "sarah-miha",
    name: "Sarah & Miha",
    meta: "Kamandalu Ubud • Lush Rainforest Valley Sanctuary",
    description: "Nestled within the lush rainforest valley of Kamandalu Ubud, Sarah & Miha exchanged custom handwritten vows in a soft pink draped floral gazebo, surrounded by ancient tropical greenery and tranquil valley breezes.",
    heroImage: "assets/images/portfolio/sarah-miha/6.webp",
    reviewBg: "assets/images/portfolio/sarah-miha/1.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    hasVideo: false,
    videoUrl: null,
    quote: "Kamandalu Ubud was the most magical backdrop for our vows. The team handled every legal and ceremonial nuance with absolute grace.",
    quoteAuthor: "Sarah & Miha • Europe",
    photos: [
      "assets/images/portfolio/sarah-miha/6.webp",
      "assets/images/portfolio/sarah-miha/1.webp",
      "assets/images/portfolio/sarah-miha/2.webp",
      "assets/images/portfolio/sarah-miha/3.webp",
      "assets/images/portfolio/sarah-miha/4.webp",
      "assets/images/portfolio/sarah-miha/5.webp",
      "assets/images/portfolio/sarah-miha/7.webp",
      "assets/images/portfolio/sarah-miha/8.webp",
      "assets/images/portfolio/sarah-miha/9.webp",
      "assets/images/portfolio/sarah-miha/10.webp"
    ]
  },

  "vany-santi": {
    id: "vany-santi",
    name: "Vany & Santi",
    meta: "Southern Bali Cliff & Tidal Reef • Coastal Sunset Blessing",
    description: "A modern, carefree celebration beginning with an ocean-view cliff blessing under a rainbow floral arch and concluding with a barefoot sunset stroll along the tidal coral reef in matching white linen.",
    heroImage: "assets/images/portfolio/vany-santi/10.webp",
    reviewBg: "assets/images/portfolio/vany-santi/4.webp",
    packageId: "elopement",
    packageTitle: "Intimate Elopement Wedding",
    hasVideo: false,
    videoUrl: null,
    quote: "Barefoot on the reef as the twilight settled over the water was pure magic. We couldn't have asked for a more authentic, soulful elopement experience.",
    quoteAuthor: "Vany & Santi • Verified Couple",
    photos: [
      "assets/images/portfolio/vany-santi/10.webp",
      "assets/images/portfolio/vany-santi/4.webp",
      "assets/images/portfolio/vany-santi/1.webp",
      "assets/images/portfolio/vany-santi/2.webp",
      "assets/images/portfolio/vany-santi/3.webp",
      "assets/images/portfolio/vany-santi/5.webp",
      "assets/images/portfolio/vany-santi/6.webp",
      "assets/images/portfolio/vany-santi/7.webp",
      "assets/images/portfolio/vany-santi/8.webp",
      "assets/images/portfolio/vany-santi/9.webp"
    ]
  },

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
  },
  "art-centre": {
      "id": "art-centre",
      "name": "Art Centre Denpasar",
      "meta": "Denpasar Cultural Heritage • Balinese Traditional Architecture",
      "description": "An enchanting cultural pre-wedding session set amidst the majestic carved stone gates, traditional Balinese pavilions, and lush banyan trees of Taman Werdhi Budaya Art Centre Denpasar.",
      "heroImage": "assets/images/portfolio/art-centre/1.webp",
      "reviewBg": "assets/images/portfolio/art-centre/3.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "Capturing our prewedding portraits at the Art Centre gave our love story such an authentic, timeless Balinese cultural soul. The architectural framing was breathtaking.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 8,
      "photos": [
          "assets/images/portfolio/art-centre/1.webp",
          "assets/images/portfolio/art-centre/2.webp",
          "assets/images/portfolio/art-centre/3.webp",
          "assets/images/portfolio/art-centre/4.webp",
          "assets/images/portfolio/art-centre/5.webp",
          "assets/images/portfolio/art-centre/6.webp",
          "assets/images/portfolio/art-centre/7.webp",
          "assets/images/portfolio/art-centre/8.webp"
      ]
  },

  "balangan-cliff": {
      "id": "balangan-cliff",
      "name": "Balangan Beach & Cliff",
      "meta": "Bukit Peninsula Coast • Dramatic Sunset Cliffs",
      "description": "Perched upon the iconic golden limestone cliffs of Balangan overlooking turquoise breaks and sea caves, followed by a barefoot sunset shoreline stroll.",
      "heroImage": "assets/images/portfolio/balangan-cliff/1.webp",
      "reviewBg": "assets/images/portfolio/balangan-cliff/5.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "Standing on the edge of Balangan cliff at golden hour with the ocean wind was pure poetry. The photographer captured every candid look and laugh effortlessly.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 11,
      "photos": [
          "assets/images/portfolio/balangan-cliff/1.webp",
          "assets/images/portfolio/balangan-cliff/2.webp",
          "assets/images/portfolio/balangan-cliff/3.webp",
          "assets/images/portfolio/balangan-cliff/4.webp",
          "assets/images/portfolio/balangan-cliff/5.webp",
          "assets/images/portfolio/balangan-cliff/6.webp",
          "assets/images/portfolio/balangan-cliff/7.webp",
          "assets/images/portfolio/balangan-cliff/8.webp",
          "assets/images/portfolio/balangan-cliff/9.webp",
          "assets/images/portfolio/balangan-cliff/10.webp",
          "assets/images/portfolio/balangan-cliff/11.webp"
      ]
  },

  "black-lava-kintamani": {
      "id": "black-lava-kintamani",
      "name": "Black Lava Kintamani",
      "meta": "Mount Batur Caldera • Volcanic Heritage & Jeep Adventure",
      "description": "An edgy, editorial pre-wedding session set against the surreal monochrome expanse of Mount Batur’s ancient volcanic black lava fields and alpine pine foothills.",
      "heroImage": "assets/images/portfolio/black-lava-kintamani/1.webp",
      "reviewBg": "assets/images/portfolio/black-lava-kintamani/10.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "The black lava fields created such a high-fashion, dramatic contrast with our formal attire. Easily the most unforgettable photoshoot we have ever experienced.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 17,
      "photos": [
          "assets/images/portfolio/black-lava-kintamani/1.webp",
          "assets/images/portfolio/black-lava-kintamani/2.webp",
          "assets/images/portfolio/black-lava-kintamani/3.webp",
          "assets/images/portfolio/black-lava-kintamani/4.webp",
          "assets/images/portfolio/black-lava-kintamani/5.webp",
          "assets/images/portfolio/black-lava-kintamani/6.webp",
          "assets/images/portfolio/black-lava-kintamani/7.webp",
          "assets/images/portfolio/black-lava-kintamani/8.webp",
          "assets/images/portfolio/black-lava-kintamani/9.webp",
          "assets/images/portfolio/black-lava-kintamani/10.webp",
          "assets/images/portfolio/black-lava-kintamani/11.webp",
          "assets/images/portfolio/black-lava-kintamani/12.webp",
          "assets/images/portfolio/black-lava-kintamani/13.webp",
          "assets/images/portfolio/black-lava-kintamani/14.webp",
          "assets/images/portfolio/black-lava-kintamani/15.webp",
          "assets/images/portfolio/black-lava-kintamani/16.webp",
          "assets/images/portfolio/black-lava-kintamani/17.webp"
      ]
  },

  "blangsinga-waterfall": {
      "id": "blangsinga-waterfall",
      "name": "Blangsinga Waterfall",
      "meta": "Gianyar Rainforest • Majestic Canyon Cascade",
      "description": "An intimate tropical romance framed by the rushing cascades, river stones, and mist-drenched emerald jungle canyon of Blangsinga Waterfall.",
      "heroImage": "assets/images/portfolio/blangsinga-waterfall/1.webp",
      "reviewBg": "assets/images/portfolio/blangsinga-waterfall/3.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "Surrounded by cascading waterfalls and emerald moss in Gianyar, the atmosphere felt like a hidden paradise. The mist added pure magic to every frame.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 5,
      "photos": [
          "assets/images/portfolio/blangsinga-waterfall/1.webp",
          "assets/images/portfolio/blangsinga-waterfall/2.webp",
          "assets/images/portfolio/blangsinga-waterfall/3.webp",
          "assets/images/portfolio/blangsinga-waterfall/4.webp",
          "assets/images/portfolio/blangsinga-waterfall/5.webp"
      ]
  },

  "kebun-raya-bedugul": {
      "id": "kebun-raya-bedugul",
      "name": "Kebun Raya Bedugul",
      "meta": "Bedugul Highland Forest • Misty Giant Banyan & Pine Trails",
      "description": "A serene, ethereal pre-wedding journey through the towering banyans, ancient rainforest fern canopies, and cool highland breezes of Bali Botanic Garden Bedugul.",
      "heroImage": "assets/images/portfolio/kebun-raya-bedugul/1.webp",
      "reviewBg": "assets/images/portfolio/kebun-raya-bedugul/5.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "The cool mountain air, morning fog rolling between the giant trees, and the peaceful forest trails made us feel like we stepped into a fairytale.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 17,
      "photos": [
          "assets/images/portfolio/kebun-raya-bedugul/1.webp",
          "assets/images/portfolio/kebun-raya-bedugul/2.webp",
          "assets/images/portfolio/kebun-raya-bedugul/3.webp",
          "assets/images/portfolio/kebun-raya-bedugul/4.webp",
          "assets/images/portfolio/kebun-raya-bedugul/5.webp",
          "assets/images/portfolio/kebun-raya-bedugul/6.webp",
          "assets/images/portfolio/kebun-raya-bedugul/7.webp",
          "assets/images/portfolio/kebun-raya-bedugul/8.webp",
          "assets/images/portfolio/kebun-raya-bedugul/9.webp",
          "assets/images/portfolio/kebun-raya-bedugul/10.webp",
          "assets/images/portfolio/kebun-raya-bedugul/11.webp",
          "assets/images/portfolio/kebun-raya-bedugul/12.webp",
          "assets/images/portfolio/kebun-raya-bedugul/13.webp",
          "assets/images/portfolio/kebun-raya-bedugul/14.webp",
          "assets/images/portfolio/kebun-raya-bedugul/15.webp",
          "assets/images/portfolio/kebun-raya-bedugul/16.webp",
          "assets/images/portfolio/kebun-raya-bedugul/17.webp"
      ]
  },

  "melasti-beach": {
      "id": "melasti-beach",
      "name": "Melasti Beach & Cliff",
      "meta": "Ungasan Coastline • Winding Limestone Corridors & Azure Shore",
      "description": "From the monumental carved white limestone ravines to the tranquil turquoise shallows and coral reefs of Melasti Beach during the golden twilight hour.",
      "heroImage": "assets/images/portfolio/melasti-beach/1.webp",
      "reviewBg": "assets/images/portfolio/melasti-beach/7.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "The soaring cliff walls and crystal waters of Melasti offered the most versatile and grand scenery. Every single shot looks straight out of a luxury magazine.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 19,
      "photos": [
          "assets/images/portfolio/melasti-beach/1.webp",
          "assets/images/portfolio/melasti-beach/2.webp",
          "assets/images/portfolio/melasti-beach/3.webp",
          "assets/images/portfolio/melasti-beach/4.webp",
          "assets/images/portfolio/melasti-beach/5.webp",
          "assets/images/portfolio/melasti-beach/6.webp",
          "assets/images/portfolio/melasti-beach/7.webp",
          "assets/images/portfolio/melasti-beach/8.webp",
          "assets/images/portfolio/melasti-beach/9.webp",
          "assets/images/portfolio/melasti-beach/10.webp",
          "assets/images/portfolio/melasti-beach/11.webp",
          "assets/images/portfolio/melasti-beach/12.webp",
          "assets/images/portfolio/melasti-beach/13.webp",
          "assets/images/portfolio/melasti-beach/14.webp",
          "assets/images/portfolio/melasti-beach/15.webp",
          "assets/images/portfolio/melasti-beach/16.webp",
          "assets/images/portfolio/melasti-beach/17.webp",
          "assets/images/portfolio/melasti-beach/18.webp",
          "assets/images/portfolio/melasti-beach/19.webp"
      ]
  },

  "oculus-kintamani": {
      "id": "oculus-kintamani",
      "name": "Oculus Kintamani",
      "meta": "Batur Caldera Vista • Modern Architecture & Mountain Panorama",
      "description": "A sophisticated blend of contemporary alpine architecture and sweeping panoramic vistas overlooking Mount Batur, the caldera ridges, and serene Lake Batur.",
      "heroImage": "assets/images/portfolio/oculus-kintamani/1.webp",
      "reviewBg": "assets/images/portfolio/oculus-kintamani/4.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "Blending modern geometric architecture with Bali’s dramatic volcanic horizon was the perfect visual concept. The team guided our poses with such ease.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 12,
      "photos": [
          "assets/images/portfolio/oculus-kintamani/1.webp",
          "assets/images/portfolio/oculus-kintamani/2.webp",
          "assets/images/portfolio/oculus-kintamani/3.webp",
          "assets/images/portfolio/oculus-kintamani/4.webp",
          "assets/images/portfolio/oculus-kintamani/5.webp",
          "assets/images/portfolio/oculus-kintamani/6.webp",
          "assets/images/portfolio/oculus-kintamani/7.webp",
          "assets/images/portfolio/oculus-kintamani/8.webp",
          "assets/images/portfolio/oculus-kintamani/9.webp",
          "assets/images/portfolio/oculus-kintamani/10.webp",
          "assets/images/portfolio/oculus-kintamani/11.webp",
          "assets/images/portfolio/oculus-kintamani/12.webp"
      ]
  },

  "pantai-nyanyi": {
      "id": "pantai-nyanyi",
      "name": "Pantai Nyanyi",
      "meta": "Tabanan Coast • Glistening Black Sand Sunset & Tidal Mirror",
      "description": "Dramatic coastal romance on the glistening black sands and surging surf of Pantai Nyanyi, capturing ethereal sunset silhouettes and mirrored tidal reflections.",
      "heroImage": "assets/images/portfolio/pantai-nyanyi/1.webp",
      "reviewBg": "assets/images/portfolio/pantai-nyanyi/6.webp",
      "packageId": "pre-wedding",
      "packageTitle": "Pre-Wedding Adventure Experience",
      "quote": "The glistening wet black sand reflecting the fiery sunset sky was sheer poetry. Walking hand in hand along the shoreline felt like time stood completely still.",
      "quoteAuthor": "Pre-Wedding Couple • Verified Session",
      "count": 25,
      "photos": [
          "assets/images/portfolio/pantai-nyanyi/1.webp",
          "assets/images/portfolio/pantai-nyanyi/2.webp",
          "assets/images/portfolio/pantai-nyanyi/3.webp",
          "assets/images/portfolio/pantai-nyanyi/4.webp",
          "assets/images/portfolio/pantai-nyanyi/5.webp",
          "assets/images/portfolio/pantai-nyanyi/6.webp",
          "assets/images/portfolio/pantai-nyanyi/7.webp",
          "assets/images/portfolio/pantai-nyanyi/8.webp",
          "assets/images/portfolio/pantai-nyanyi/9.webp",
          "assets/images/portfolio/pantai-nyanyi/10.webp",
          "assets/images/portfolio/pantai-nyanyi/11.webp",
          "assets/images/portfolio/pantai-nyanyi/12.webp",
          "assets/images/portfolio/pantai-nyanyi/13.webp",
          "assets/images/portfolio/pantai-nyanyi/14.webp",
          "assets/images/portfolio/pantai-nyanyi/15.webp",
          "assets/images/portfolio/pantai-nyanyi/16.webp",
          "assets/images/portfolio/pantai-nyanyi/17.webp",
          "assets/images/portfolio/pantai-nyanyi/18.webp",
          "assets/images/portfolio/pantai-nyanyi/19.webp",
          "assets/images/portfolio/pantai-nyanyi/20.webp",
          "assets/images/portfolio/pantai-nyanyi/21.webp",
          "assets/images/portfolio/pantai-nyanyi/22.webp",
          "assets/images/portfolio/pantai-nyanyi/23.webp",
          "assets/images/portfolio/pantai-nyanyi/24.webp",
          "assets/images/portfolio/pantai-nyanyi/25.webp"
      ]
  },

  "goto-gathering": {
      "id": "goto-gathering",
      "name": "GoTo Group Gathering",
      "meta": "Bali Luxury Resort • Annual Corporate Celebration",
      "description": "A grand corporate celebration and executive gathering in Bali, featuring bespoke stage production, cultural Balinese welcome performances, dynamic networking lounges, and an exquisite gala banquet under the tropical sky.",
      "heroImage": "assets/images/portfolio/goto-gathering/1.webp",
      "reviewBg": "assets/images/portfolio/goto-gathering/7.webp",
      "packageId": "event",
      "packageTitle": "Corporate Gathering & Private Event",
      "hasVideo": false,
      "videoUrl": null,
      "quote": "The coordination was world-class. From audiovisual production to the flow of our team members, Bali Top Wedding managed our corporate gathering with absolute precision.",
      "quoteAuthor": "GoTo Group Organizing Committee",
      "count": 19,
      "photos": [
          "assets/images/portfolio/goto-gathering/1.webp",
          "assets/images/portfolio/goto-gathering/2.webp",
          "assets/images/portfolio/goto-gathering/3.webp",
          "assets/images/portfolio/goto-gathering/4.webp",
          "assets/images/portfolio/goto-gathering/5.webp",
          "assets/images/portfolio/goto-gathering/6.webp",
          "assets/images/portfolio/goto-gathering/7.webp",
          "assets/images/portfolio/goto-gathering/8.webp",
          "assets/images/portfolio/goto-gathering/9.webp",
          "assets/images/portfolio/goto-gathering/10.webp",
          "assets/images/portfolio/goto-gathering/11.webp",
          "assets/images/portfolio/goto-gathering/12.webp",
          "assets/images/portfolio/goto-gathering/13.webp",
          "assets/images/portfolio/goto-gathering/14.webp",
          "assets/images/portfolio/goto-gathering/15.webp",
          "assets/images/portfolio/goto-gathering/16.webp",
          "assets/images/portfolio/goto-gathering/17.webp",
          "assets/images/portfolio/goto-gathering/18.webp",
          "assets/images/portfolio/goto-gathering/19.webp"
      ]
  },

  "pertamina-gathering": {
      "id": "pertamina-gathering",
      "name": "Pertamina Corporate Gala",
      "meta": "Bali Beachfront Lawn • Leadership Summit & Gala",
      "description": "An inspiring corporate summit and appreciation banquet set across Bali’s premier seaside lawn, complete with theatrical lighting, traditional fanfare, live entertainment, and five-star culinary hospitality.",
      "heroImage": "assets/images/portfolio/pertamina-gathering/1.webp",
      "reviewBg": "assets/images/portfolio/pertamina-gathering/8.webp",
      "packageId": "event",
      "packageTitle": "Corporate Gathering & Private Event",
      "hasVideo": false,
      "videoUrl": null,
      "quote": "A truly prestigious event executed flawlessly. The ambiance, stage coordination, and seamless hospitality made our leadership gala an unforgettable success.",
      "quoteAuthor": "PT Pertamina Corporate Events",
      "count": 23,
      "photos": [
          "assets/images/portfolio/pertamina-gathering/1.webp",
          "assets/images/portfolio/pertamina-gathering/2.webp",
          "assets/images/portfolio/pertamina-gathering/3.webp",
          "assets/images/portfolio/pertamina-gathering/4.webp",
          "assets/images/portfolio/pertamina-gathering/5.webp",
          "assets/images/portfolio/pertamina-gathering/6.webp",
          "assets/images/portfolio/pertamina-gathering/7.webp",
          "assets/images/portfolio/pertamina-gathering/8.webp",
          "assets/images/portfolio/pertamina-gathering/9.webp",
          "assets/images/portfolio/pertamina-gathering/10.webp",
          "assets/images/portfolio/pertamina-gathering/11.webp",
          "assets/images/portfolio/pertamina-gathering/12.webp",
          "assets/images/portfolio/pertamina-gathering/13.webp",
          "assets/images/portfolio/pertamina-gathering/14.webp",
          "assets/images/portfolio/pertamina-gathering/15.webp",
          "assets/images/portfolio/pertamina-gathering/16.webp",
          "assets/images/portfolio/pertamina-gathering/17.webp",
          "assets/images/portfolio/pertamina-gathering/18.webp",
          "assets/images/portfolio/pertamina-gathering/19.webp",
          "assets/images/portfolio/pertamina-gathering/20.webp",
          "assets/images/portfolio/pertamina-gathering/21.webp",
          "assets/images/portfolio/pertamina-gathering/22.webp",
          "assets/images/portfolio/pertamina-gathering/23.webp"
      ]
  },

  "scarlett-gathering": {
      "id": "scarlett-gathering",
      "name": "Scarlett Whitening Gala",
      "meta": "Luxury Coastal Venue • Glamour Brand Gathering & Sunset Party",
      "description": "A high-energy, glamorous brand celebration featuring custom floral photo installations, branded interactive stages, celebrity performances, and a starlit coastal after-party.",
      "heroImage": "assets/images/portfolio/scarlett-gathering/1.webp",
      "reviewBg": "assets/images/portfolio/scarlett-gathering/6.webp",
      "packageId": "event",
      "packageTitle": "Corporate Gathering & Private Event",
      "hasVideo": false,
      "videoUrl": null,
      "quote": "The aesthetic was totally on-brand, vibrant, and visually breathtaking. Every single corner was an Instagrammable moment and the energy throughout the night was extraordinary!",
      "quoteAuthor": "Scarlett Brand Events Team",
      "count": 25,
      "photos": [
          "assets/images/portfolio/scarlett-gathering/1.webp",
          "assets/images/portfolio/scarlett-gathering/2.webp",
          "assets/images/portfolio/scarlett-gathering/3.webp",
          "assets/images/portfolio/scarlett-gathering/4.webp",
          "assets/images/portfolio/scarlett-gathering/5.webp",
          "assets/images/portfolio/scarlett-gathering/6.webp",
          "assets/images/portfolio/scarlett-gathering/7.webp",
          "assets/images/portfolio/scarlett-gathering/8.webp",
          "assets/images/portfolio/scarlett-gathering/9.webp",
          "assets/images/portfolio/scarlett-gathering/10.webp",
          "assets/images/portfolio/scarlett-gathering/11.webp",
          "assets/images/portfolio/scarlett-gathering/12.webp",
          "assets/images/portfolio/scarlett-gathering/13.webp",
          "assets/images/portfolio/scarlett-gathering/14.webp",
          "assets/images/portfolio/scarlett-gathering/15.webp",
          "assets/images/portfolio/scarlett-gathering/16.webp",
          "assets/images/portfolio/scarlett-gathering/17.webp",
          "assets/images/portfolio/scarlett-gathering/18.webp",
          "assets/images/portfolio/scarlett-gathering/19.webp",
          "assets/images/portfolio/scarlett-gathering/20.webp",
          "assets/images/portfolio/scarlett-gathering/21.webp",
          "assets/images/portfolio/scarlett-gathering/22.webp",
          "assets/images/portfolio/scarlett-gathering/23.webp",
          "assets/images/portfolio/scarlett-gathering/24.webp",
          "assets/images/portfolio/scarlett-gathering/25.webp"
      ]
  },

};

// ── 3. DOM BINDING & SITE INITIALIZATION ──
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize page-specific interactions immediately
  initPackageDetail();
  initPortfolioDetail();
  initInquiryForms();
  initLightbox();
  initPortfolioFilter();

  // 2. Load modular components (header & footer)
  loadComponents();
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
    const normPkg = pkgParam.startsWith("elopement") ? "elopement" : pkgParam;
    activeTarget = `package-detail.html?pkg=${normPkg}`;
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

  // Close menu when clicking on internal links
  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Support automated testing with ?drawer_open=1
  if (new URLSearchParams(window.location.search).has("drawer_open")) {
    toggleMenu();
  }
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
  const rawPkgKey = urlParams.get("pkg") || "elopement";
  let pkgKey = rawPkgKey.toLowerCase().trim();
  if (pkgKey === "event") pkgKey = "private-villa";

  const summaryView = document.getElementById("elopement-summary-view");
  const detailView = document.getElementById("package-detail-view");
  const breadcrumbNav = document.getElementById("pkg-breadcrumb");
  const heroEl = document.getElementById("pkg-hero");
  const backLink = document.getElementById("pkg-back-link");

  // Highlight tab 3 layanan utama (tanpa penomoran)
  const mainTabKey = pkgKey.startsWith("elopement") ? "elopement" : pkgKey;
  document.querySelectorAll(".pkg-tab-btn").forEach(btn => btn.classList.remove("active"));
  const activeMainTab = document.getElementById(`tab-${mainTabKey}`);
  if (activeMainTab) activeMainTab.classList.add("active");

  if (pkgKey === "elopement") {
    // ── 1. HALAMAN RINGKASAN ELOPEMENT ──
    if (summaryView) summaryView.style.display = "block";
    if (detailView) detailView.style.display = "none";

    if (heroEl) {
      heroEl.style.backgroundImage = "url('assets/images/elopement/elopement-04.webp')";
      heroEl.style.backgroundPosition = "center 38%";
    }

    if (breadcrumbNav) {
      breadcrumbNav.innerHTML = `
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="services.html">Services</a>
        <span>/</span>
        <span id="breadcrumb-current" style="color: var(--dark); font-weight: 500;">Bali Elopement Packages</span>
      `;
    }
    return;
  }

  // ── 2. HALAMAN DETAIL (elopement-1..4, pre-wedding, private-villa) ──
  if (summaryView) summaryView.style.display = "none";
  if (detailView) detailView.style.display = "block";

  const pkgData = PACKAGES_DATA[pkgKey] || PACKAGES_DATA["elopement-1"];

  // Breadcrumb
  if (breadcrumbNav) {
    if (pkgKey.startsWith("elopement-")) {
      const pkgNumMatch = pkgKey.match(/elopement-(\d+)/);
      const pkgNum = pkgNumMatch ? pkgNumMatch[1] : "";
      breadcrumbNav.innerHTML = `
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="services.html">Services</a>
        <span>/</span>
        <a href="package-detail.html?pkg=elopement">Bali Elopement Packages</a>
        <span>/</span>
        <span id="breadcrumb-current" style="color: var(--dark); font-weight: 500;">Bali Elopement Package ${pkgNum}</span>
      `;
    } else {
      breadcrumbNav.innerHTML = `
        <a href="index.html">Home</a>
        <span>/</span>
        <a href="services.html">Services</a>
        <span>/</span>
        <span id="breadcrumb-current" style="color: var(--dark); font-weight: 500;">${pkgData.title}</span>
      `;
    }
  }

  // Back link (← All elopement packages)
  if (backLink) {
    if (pkgKey.startsWith("elopement-")) {
      backLink.style.display = "inline-flex";
    } else {
      backLink.style.display = "none";
    }
  }

  // Update text fields
  const titleEl = document.getElementById("pkg-title");
  const subtitleEl = document.getElementById("pkg-subtitle");
  const badgeEl = document.getElementById("pkg-badge");
  const priceIdrEl = document.getElementById("pkg-price-idr");
  const priceForeignEl = document.getElementById("pkg-price-foreign");
  const descEl = document.getElementById("pkg-description");

  if (titleEl) titleEl.textContent = pkgData.title;
  if (subtitleEl) {
    if (pkgData.subtitle) {
      subtitleEl.textContent = pkgData.subtitle;
      subtitleEl.style.display = "block";
    } else {
      subtitleEl.textContent = "";
      subtitleEl.style.display = "none";
    }
  }
  if (badgeEl) badgeEl.textContent = pkgData.badge;
  if (priceIdrEl) priceIdrEl.textContent = pkgData.priceIDR;
  if (priceForeignEl) {
    if (pkgData.priceForeign) {
      priceForeignEl.textContent = pkgData.priceForeign;
      priceForeignEl.style.display = "block";
    } else {
      priceForeignEl.style.display = "none";
    }
  }
  if (descEl) {
    if (pkgData.description && pkgData.description.includes("\n\n")) {
      descEl.innerHTML = pkgData.description.split("\n\n").map(p => `<p style="margin-bottom: 14px; font-size: 15.5px; line-height: 1.75; color: var(--dark);">${p}</p>`).join("");
    } else {
      descEl.textContent = pkgData.description;
    }
  }
  if (heroEl && pkgData.heroImage) {
    heroEl.style.backgroundImage = `url('${pkgData.heroImage}')`;
    heroEl.style.backgroundPosition = pkgData.heroPosition || 'center 15%';
  }

  // Render Inclusions
  const inclusionsContainer = document.getElementById("pkg-inclusions");
  const inclusionsCol = inclusionsContainer ? inclusionsContainer.closest(".package-details-col") : null;
  if (inclusionsContainer) {
    if (pkgData.inclusions && pkgData.inclusions.length > 0) {
      if (inclusionsCol) inclusionsCol.style.display = "block";
      inclusionsContainer.innerHTML = pkgData.inclusions.map(inc => `
        <li class="inclusion-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${inc}</span>
        </li>
      `).join("");
    } else {
      // Hide inclusions list for Package 4 (BELUM TERSEDIA)
      inclusionsContainer.innerHTML = "";
      if (inclusionsCol) inclusionsCol.style.display = "none";
    }
  }

  // Render Timeline
  const timelineContainer = document.getElementById("pkg-timeline");
  if (timelineContainer && pkgData.timeline) {
    timelineContainer.innerHTML = pkgData.timeline.map(item => `
      <div class="timeline-node">
        <div class="timeline-time">${item.time}</div>
        <div class="timeline-title">${item.title}</div>
      </div>
    `).join("");
  }

  // Render Brick / Masonry Gallery (5-7 photos)
  const brickContainer = document.getElementById("pkg-brick-gallery");
  if (brickContainer && pkgData.photos) {
    brickContainer.innerHTML = pkgData.photos.map((p, idx) => `
      <div class="brick-item ${p.spanClass}" data-lightbox-src="${p.src}" title="Click to view full photo">
        <img src="${p.src}" alt="${p.alt}" loading="lazy">
        <div class="brick-overlay">
          <span>View Photo ${idx + 1} of ${pkgData.photos.length}</span>
        </div>
      </div>
    `).join("");
  }

  // Auto-select package in reservation form dropdown
  const packageSelect = document.getElementById("inquiry-package");
  if (packageSelect) {
    for (let i = 0; i < packageSelect.options.length; i++) {
      const optVal = packageSelect.options[i].value.toLowerCase();
      const pkgTitle = pkgData.title.toLowerCase();
      const pkgNumMatch = pkgKey.match(/elopement-(\d+)/);
      const isElopementMatch = pkgNumMatch && optVal.includes(`package ${pkgNumMatch[1]}`);
      if (isElopementMatch || optVal.includes(pkgTitle) || pkgTitle.includes(optVal) || (pkgData.id && optVal.includes(pkgData.id))) {
        packageSelect.selectedIndex = i;
        break;
      }
    }
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
    const samePackageKeys = Object.keys(PORTFOLIO_DATA).filter(k => k !== data.id && PORTFOLIO_DATA[k].packageId === data.packageId);
    const otherKeys = samePackageKeys.length >= 3 ? samePackageKeys : Object.keys(PORTFOLIO_DATA).filter(k => k !== data.id);
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
  const emptyState = document.querySelector(".portfolio-empty-state");

  if (!filterBtns.length) return;

  function applyFilter(btn) {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");
    let visibleCount = 0;
    items.forEach(item => {
      const itemCat = item.getAttribute("data-category") || item.querySelector(".portfolio-card")?.getAttribute("data-category") || "";
      const catList = itemCat.toLowerCase().split(/\s+/);
      if (category === "all" || catList.includes(category.toLowerCase())) {
        item.style.display = "block";
        visibleCount++;
      } else {
        item.style.display = "none";
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
      const emptyTitle = emptyState.querySelector(".empty-title");
      if (emptyTitle) {
        const catName = btn.textContent.trim();
        emptyTitle.textContent = `${catName} Gallery Coming Soon`;
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => applyFilter(btn));
  });

  // Check URL query param or hash, e.g. portfolio.html?filter=prewedding
  const urlFilter = new URLSearchParams(window.location.search).get("filter") || window.location.hash.replace("#", "");
  let initialBtn = null;
  if (urlFilter) {
    initialBtn = Array.from(filterBtns).find(b => b.getAttribute("data-filter") === urlFilter.toLowerCase());
  }
  if (!initialBtn) {
    initialBtn = document.querySelector(".portfolio-filter-btn.active") || filterBtns[0];
  }
  if (initialBtn) applyFilter(initialBtn);
}

