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
    youtube: "https://www.youtube.com/@balitopwedding",
    tiktok: "https://www.tiktok.com/@balitopwedding"
  },
  address: "Jalan Tukad Balian No. 99 A, Sidakarya, Denpasar Selatan, Bali 80224, Indonesia",
  officeHours: "09:00 - 18:00 WITA (GMT+8) • European consultation hours accommodated upon request"
};

// ── 2. PACKAGES DATABASE (SIGNATURE OFFERINGS) ──
// Overview pages: package-detail.html?pkg=<service key>. Detail pages: ?pkg=<package id>.
// Photos use the codes from "all pages teks updated.docx" (assets/images/pages/<code>.webp).
const PACKAGE_SERVICES = {
  "elopement": {
    title: "Bali Elopement Packages",
    intro: "Choose your perfect Bali elopement setting. Discover our curated collection of intimate, stress-free elopement packages—thoughtfully designed just for two across Bali’s most breathtaking locations.",
    heroImage: "assets/images/pages/013.webp", // photo 013
    heroPosition: "center 35%",
    backLabel: "All elopement packages",
    packages: ["elopement-1", "elopement-2", "elopement-3", "elopement-4", "elopement-5", "elopement-6", "elopement-7", "elopement-8", "elopement-9"]
  },
  "private-villa": {
    title: "Bali Villa Wedding",
    intro: "Explore our curated collection of intimate Bali villa wedding experiences—thoughtfully crafted for couples seeking total privacy, bespoke elegance, and a stress-free celebration. Surrounded by lush tropical gardens or dramatic ocean views, each estate provides a serene sanctuary to gather your loved ones for an unforgettable island celebration.",
    heroImage: "assets/images/pages/044.webp", // photo 044
    heroPosition: "center 58%",
    backLabel: "All villa wedding packages",
    packages: ["private-villa-1", "private-villa-2", "private-villa-3", "private-villa-4", "private-villa-5", "private-villa-6"]
  },
  "pre-wedding": {
    title: "Bali Pre-Wedding Photography",
    intro: "Capture your love story in paradise. Discover our curated collection of intimate, stress-free Bali pre-wedding photography sessions—thoughtfully designed to showcase your authentic connection across the island’s most breathtaking landscapes.",
    heroImage: "assets/images/pages/034.webp", // photo 034
    heroPosition: "center 50%",
    backLabel: "All pre-wedding packages",
    packages: ["pre-wedding-1", "pre-wedding-2", "pre-wedding-3"]
  }
};

const ELOPEMENT_INCLUDES = {
  planner: "<strong>Planner & Coordination:</strong> Professional wedding planner and on-site coordinator services",
  photo: "<strong>Photography & Videography:</strong> 1 professional photographer and 1 videographer (up to 2 hours coverage)",
  celebrant: "<strong>Ceremony & Officiant:</strong> English-speaking wedding celebrant (symbolic / non-religious & non-legal)",
  certificate: "<strong>Certificate:</strong> Commemorative wedding certificate",
  decor: "<strong>Decor & Styling:</strong> Elegant ceremony decor",
  flowers: "<strong>Personal Flowers:</strong> Fresh hand bouquet for the bride & matching boutonniere for the groom",
  transport: "<strong>Transportation:</strong> Private car with driver for round-trip transfers (hotel to venue and venue to hotel)",
  toast: "<strong>Toast:</strong> 1 bottle of local wine for a celebratory toast",
  welcomeDrinks: "<strong>Drinks:</strong> 2 glasses of non-alcoholic welcome drinks",
  dinnerWine: "<strong>Drinks:</strong> 1 bottle of local wine during dinner",
  dinner: "<strong>Dinner:</strong> Romantic dinner for 2 pax"
};
const elopementVenue = venue => `<strong>Venue:</strong> Venue rental at ${venue}`;

const ELOPEMENT_NOTES = {
  car: "We will provide a 5-seater car for your transport (suitable for up to 5 passengers without luggage). This vehicle includes round-trip transfers from your hotel to the wedding venue and back.",
  delivery: "The package includes 25 to 50 edited photos and one edited short video of 2–3 minutes. Photo and video editing takes approximately 30 working days following the wedding day. All high-resolution files will be delivered via Google Drive.",
  outdoorRain: "Please note that the venue does not have an indoor backup area. In the event of rain, the event will proceed in the same outdoor space, and umbrellas will be provided for you.",
  publicVenue: "Venues managed by local authorities are subject to sudden closure without prior notice due to religious ceremonies, community events, government projects, or natural conditions.",
  hotelRain: "In case of rain, an indoor backup venue such as a restaurant or lounge will be provided. Please note that the specific backup area is subject to availability and the hotel management's discretion at the time of the event."
};
const timeNote = time => `<strong>Time recommendation:</strong> ${time}`;

const VILLA_INCLUDES = [
  "Professional wedding organizer service",
  "Exquisite buffet and bar service",
  "Dedicated celebrant",
  "Elegant decoration tailored to your theme",
  "Photographer and videographer to capture every precious moment",
  "Sound and lighting",
  "Live band, MC & DJ to keep the celebration alive"
];
const villaStay = bedrooms => `Exclusive venue and a 2-night stay in a ${bedrooms}-bedroom villa`;
const VILLA_NOTES = ["Please contact our wedding planner for the full package details."];

const PACKAGES_DATA = {
  "elopement-1": {
    id: "elopement-1",
    service: "elopement",
    label: "Bali Elopement 1",
    name: "Tibumana Waterfall",
    summary: "Say \"I Do\" surrounded by lush tropical jungle and the gentle cascade of Tibumana Waterfall. Designed for couples seeking pure nature and tranquility, this intimate Bali elopement is best experienced early in the morning for maximum privacy and magical lighting.",
    priceIDR: "IDR 23,500,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Tibumana Waterfall"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport, ELOPEMENT_INCLUDES.toast],
    notes: [ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery, ELOPEMENT_NOTES.outdoorRain, ELOPEMENT_NOTES.publicVenue, timeNote("6:00 – 7:00 AM")],
    heroPosition: "center 50%", // where the 40vh header crop sits
    photos: ["assets/images/pages/014.webp", "assets/images/pages/025.webp"] // photos 014, 025
  },
  "elopement-2": {
    id: "elopement-2",
    service: "elopement",
    label: "Bali Elopement 2",
    name: "Sanur Beach",
    summary: "Exchange your vows along the calm, golden shores of Sanur with a romantic Bali elopement at Hotel Mercure Sanur. Perfect for a serene morning ceremony at sunrise or a peaceful late-afternoon setting, this resort venue offers private beachfront charm and gentle ocean waves.",
    priceIDR: "IDR 29,000,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Hotel Mercure Sanur"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport, ELOPEMENT_INCLUDES.dinnerWine, ELOPEMENT_INCLUDES.dinner],
    notes: [ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery, ELOPEMENT_NOTES.hotelRain, timeNote("5:30 – 6:00 AM (sunrise) or 5:00 – 5:30 PM")],
    heroPosition: "center 38%", // where the 40vh header crop sits
    photos: ["assets/images/pages/015.webp", "assets/images/pages/023.webp", "assets/images/pages/024.webp"] // photos 015, 023, 024
  },
  "elopement-3": {
    id: "elopement-3",
    service: "elopement",
    label: "Bali Elopement 3",
    name: "Karang Boma Cliff Uluwatu",
    summary: "Say \"I Do\" perched atop the majestic heights of Karang Boma Cliff Uluwatu for an unforgettable cliffside Bali elopement. Best experienced during golden sunset, this iconic venue offers dramatic ocean views and breathtaking twilight skies as your backdrop.",
    priceIDR: "IDR 24,500,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Karang Boma Cliff"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport, ELOPEMENT_INCLUDES.toast],
    notes: [
      ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery, ELOPEMENT_NOTES.outdoorRain, ELOPEMENT_NOTES.publicVenue,
      timeNote("5:00 – 5:30 PM"),
      "Karang Boma Cliff is a public location and cannot be fully blocked for private use. While visitors may be present nearby during your elopement, they are naturally respectful of private moments and will not disturb your session.",
      "The cliff area is a natural habitat for local monkeys. While they generally do not disturb guests, we kindly advise everyone to remain cautious and keep personal belongings secure."
    ],
    heroPosition: "center 45%", // where the 40vh header crop sits
    photos: ["assets/images/pages/026.webp"] // photo 026
  },
  "elopement-4": {
    id: "elopement-4",
    service: "elopement",
    label: "Bali Elopement 4",
    name: "Taman Dedari Ubud",
    summary: "Exchange your vows amidst the iconic angel statues and lush valley scenery of Taman Dedari Ubud for a truly enchanting Bali elopement. Best experienced in the tranquil morning hours (around 8:00 AM) before the crowds arrive, this venue offers an intimate, otherworldly setting surrounded by nature.",
    priceIDR: "IDR 29,500,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Taman Dedari"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport, ELOPEMENT_INCLUDES.welcomeDrinks],
    notes: [
      ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery,
      "In case of rain, an indoor backup venue such as a restaurant will be provided. Please note that the specific backup area is subject to availability and the restaurant management's discretion at the time of the event.",
      timeNote("8:00 – 10:00 AM")
    ],
    heroPosition: "center 50%", // where the 40vh header crop sits
    photos: ["assets/images/pages/017.webp"] // photo 017
  },
  "elopement-5": {
    id: "elopement-5",
    service: "elopement",
    label: "Bali Elopement 5",
    name: "Nusa Dua Beach",
    summary: "Celebrate your love on the pristine white sands of Nusa Dua with an elegant beachfront Bali elopement at Merusaka Nusa Dua. While the resort's beach area is shared, hosting your ceremony during early morning or late afternoon offers a peaceful ambiance with minimal foot traffic.",
    priceIDR: "IDR 38,000,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Merusaka Nusa Dua"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport, ELOPEMENT_INCLUDES.welcomeDrinks, ELOPEMENT_INCLUDES.dinner],
    notes: [ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery, ELOPEMENT_NOTES.hotelRain, timeNote("5:30 – 6:00 PM")],
    heroPosition: "center 58%", // where the 40vh header crop sits
    photos: ["assets/images/pages/018.webp", "assets/images/pages/027.webp", "assets/images/pages/028.webp"] // photos 018, 027, 028
  },
  "elopement-6": {
    id: "elopement-6",
    service: "elopement",
    label: "Bali Elopement 6",
    name: "Jimbaran Beach View Chapel",
    summary: "Say \"I Do\" inside a stunning rooftop glass chapel overlooking the iconic Jimbaran Bay with an elevated Bali elopement at Le Méridien Bali Jimbaran. Best experienced during golden sunset hours, this modern venue offers breathtaking ocean horizons and fiery twilight skies.",
    priceIDR: "IDR 26,000,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Le Méridien Bali Jimbaran"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport, ELOPEMENT_INCLUDES.welcomeDrinks],
    notes: [ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery, timeNote("5:30 – 6:00 PM")],
    heroPosition: "center 58%", // where the 40vh header crop sits
    photos: ["assets/images/pages/019.webp", "assets/images/pages/029.webp", "assets/images/pages/030.webp"] // photos 019, 029, 030
  },
  "elopement-7": {
    id: "elopement-7",
    service: "elopement",
    label: "Bali Elopement 7",
    name: "Suwat Waterfall",
    summary: "Begin your new chapter hidden deep within a lush tropical bamboo canyon with an intimate Bali waterfall elopement at Suwat Waterfall. Best experienced in the tranquil morning hours for optimal privacy, soft light filtering through the trees, and peaceful water reflections.",
    priceIDR: "IDR 23,000,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Suwat Waterfall"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport, ELOPEMENT_INCLUDES.toast],
    notes: [ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery, ELOPEMENT_NOTES.outdoorRain, ELOPEMENT_NOTES.publicVenue, timeNote("6:00 – 7:00 AM")],
    heroPosition: "center 58%", // where the 40vh header crop sits
    photos: ["assets/images/pages/020.webp"] // photo 020
  },
  "elopement-8": {
    id: "elopement-8",
    service: "elopement",
    label: "Bali Elopement 8",
    name: "Kuta Beach View Rooftop",
    summary: "Step into forever above the iconic Kuta coastline with a breathtaking rooftop Bali elopement at Hotel Mercure Kuta. Best experienced during golden sunset hours, this elevated venue offers sweeping panoramic ocean views as the sun sinks into the horizon.",
    priceIDR: "IDR 26,000,000 net",
    priceNote: "for 2 pax",
    inclusions: [ELOPEMENT_INCLUDES.planner, elopementVenue("Hotel Mercure Kuta"), ELOPEMENT_INCLUDES.photo, ELOPEMENT_INCLUDES.celebrant, ELOPEMENT_INCLUDES.certificate, ELOPEMENT_INCLUDES.decor, ELOPEMENT_INCLUDES.flowers, "<strong>Stay:</strong> 1-night stay in a Superior Room", ELOPEMENT_INCLUDES.dinnerWine, ELOPEMENT_INCLUDES.dinner],
    notes: [ELOPEMENT_NOTES.delivery, ELOPEMENT_NOTES.hotelRain, timeNote("5:00 – 5:30 PM")],
    heroPosition: "center 53%", // where the 40vh header crop sits
    photos: ["assets/images/pages/021.webp", "assets/images/pages/031.webp", "assets/images/pages/032.webp", "assets/images/pages/033.webp"] // photos 021, 031, 032, 033
  },
  "elopement-9": {
    id: "elopement-9",
    service: "elopement",
    label: "Bali Elopement 9",
    name: "Ubud Green Valley and Rice Fields",
    summary: "Surround yourselves with serene emerald hills and traditional terraced landscapes. Experience an intimate Ubud elopement at The Granary Resort Ubud, set against sweeping views of a lush green valley and golden-green rice paddies. This peaceful haven offers a romantic, stress-free Bali rice field elopement surrounded by natural tropical beauty.",
    priceIDR: "IDR 28,000,000 net",
    priceNote: "for 2 pax",
    inclusions: [
      ELOPEMENT_INCLUDES.planner, elopementVenue("The Sun Granary"), ELOPEMENT_INCLUDES.photo,
      "<strong>Ceremony & Officiant:</strong> English-speaking celebrant or Balinese priest (symbolic / non-religious & non-legal)",
      ELOPEMENT_INCLUDES.certificate,
      "<strong>Decor & Styling:</strong> Elegant Balinese ceremony decor",
      ELOPEMENT_INCLUDES.flowers, ELOPEMENT_INCLUDES.transport,
      "<strong>Toast:</strong> 2 glasses of non-alcoholic drinks"
    ],
    notes: [ELOPEMENT_NOTES.car, ELOPEMENT_NOTES.delivery, ELOPEMENT_NOTES.hotelRain, timeNote("7:00 – 8:00 AM")],
    heroPosition: "center 35%", // where the 40vh header crop sits
    photos: ["assets/images/pages/022.webp"] // photo 022
  },

  "private-villa-1": {
    id: "private-villa-1",
    service: "private-villa",
    label: "Bali Villa Wedding 1",
    name: "Estuary Villa",
    summary: "Surround yourselves with swaying coconut palms and lush green lawns. Discover a secluded coastal haven with an intimate Bali villa wedding at Estuary Villa, featuring expansive manicured gardens overlooking the ocean for an idyllic Bali beach wedding setting. This private sanctuary offers a refined, stress-free backdrop for your island celebration.",
    priceIDR: "IDR 175,500,000",
    priceNote: "for 50 pax",
    inclusions: [villaStay(6), ...VILLA_INCLUDES],
    notes: VILLA_NOTES,
    heroPosition: "center 73%", // where the 40vh header crop sits
    photos: ["assets/images/pages/045.webp", "assets/images/pages/046.webp", "assets/images/pages/047.webp"] // photos 045, 046, 047
  },
  "private-villa-2": {
    id: "private-villa-2",
    service: "private-villa",
    label: "Bali Villa Wedding 2",
    name: "Candani Villa",
    summary: "Surround yourselves with serene tropical greenery and refined architecture. Curated to perfection by an expert Bali wedding planner, a private Bali villa wedding at Villa Candani offers an intimate sanctuary nestled among lush gardens and peaceful surroundings. Featuring expansive manicured lawns and understated elegance, this secluded estate provides a quiet, stress-free setting for a truly memorable celebration with your closest guests.",
    priceIDR: "IDR 242,000,000",
    priceNote: "for 50 pax",
    inclusions: [villaStay(6), ...VILLA_INCLUDES],
    notes: VILLA_NOTES,
    heroPosition: "center 62%", // where the 40vh header crop sits
    photos: ["assets/images/pages/048.webp", "assets/images/pages/049.webp", "assets/images/pages/050.webp"] // photos 048, 049, 050
  },
  "private-villa-3": {
    id: "private-villa-3",
    service: "private-villa",
    label: "Bali Villa Wedding 3",
    name: "Jeeva Saba Villa",
    summary: "Escape to a grand beachfront estate framed by dramatic black sand shores. Crafted seamlessly by an expert Bali wedding planner, a private Bali villa wedding at Jeeva Saba offers sweeping panoramic views of the ocean and the distant contours of Nusa Penida. Sprawled across lush manicured lawns along the coast, this exclusive sanctuary provides a serene, stress-free setting for an unforgettable island celebration.",
    priceIDR: "IDR 243,000,000",
    priceNote: "for 50 pax",
    inclusions: [villaStay(8), ...VILLA_INCLUDES],
    notes: VILLA_NOTES,
    heroPosition: "center 58%", // where the 40vh header crop sits
    photos: ["assets/images/pages/051.webp", "assets/images/pages/052.webp", "assets/images/pages/053.webp"] // photos 051, 052, 053
  },
  "private-villa-4": {
    id: "private-villa-4",
    service: "private-villa",
    label: "Bali Villa Wedding 4",
    name: "Puri Nirwana Villa",
    summary: "Retreat to an expansive beachfront haven offering two distinct event settings for your celebration. Coordinated seamlessly by a professional Bali wedding organizer, a private Bali villa wedding at Puri Nirwana Villa allows you to choose between a secluded garden sheltered by shady trees or a manicured lawn directly overlooking the ocean. Facing the dramatic shores of Cucukan Beach, this majestic estate provides a versatile, stress-free sanctuary tailored for an exclusive coastal celebration.",
    priceIDR: "IDR 204,500,000",
    priceNote: "for 50 pax",
    inclusions: [villaStay(6), ...VILLA_INCLUDES],
    notes: VILLA_NOTES,
    heroPosition: "center 68%", // where the 40vh header crop sits
    photos: ["assets/images/pages/054.webp", "assets/images/pages/055.webp", "assets/images/pages/056.webp"] // photos 054, 055, 056
  },
  "private-villa-5": {
    id: "private-villa-5",
    service: "private-villa",
    label: "Bali Villa Wedding 5",
    name: "Villa Plenilunio",
    summary: "Perch high above the Indian Ocean on Uluwatu’s majestic limestone cliffs. Coordinated seamlessly by an experienced Bali wedding organizer, a private Bali villa wedding at Villa Plenilunio combines traditional Mediterranean-inspired architecture with uninterrupted 180-degree ocean views. Featuring expansive manicured lawns and sunset-facing infinity pools, this clifftop sanctuary creates a grand, stress-free setting for an unforgettable luxury celebration.",
    priceIDR: "IDR 288,000,000",
    priceNote: "for 50 pax",
    inclusions: [villaStay(4), ...VILLA_INCLUDES],
    notes: VILLA_NOTES,
    heroPosition: "center 42%", // where the 40vh header crop sits
    photos: ["assets/images/pages/057.webp", "assets/images/pages/058.webp", "assets/images/pages/059.webp"] // photos 057, 058, 059
  },
  "private-villa-6": {
    id: "private-villa-6",
    service: "private-villa",
    label: "Bali Villa Wedding 6",
    name: "Villa Phalosa",
    summary: "Surround yourselves with endless ocean horizons along Batubelig’s peaceful shores. Discover an exquisite beachfront estate for a private Bali villa wedding at Villa Phalosa, featuring sweeping lawns that open directly onto the sand for a romantic Bali beach wedding setting. Positioned perfectly to capture Batubelig’s famed golden sunsets, this contemporary sanctuary offers an elegant, stress-free backdrop for an exclusive coastal celebration.",
    priceIDR: "IDR 297,000,000",
    priceNote: "for 50 pax",
    inclusions: [villaStay(8), ...VILLA_INCLUDES],
    notes: VILLA_NOTES,
    heroPosition: "center 50%", // where the 40vh header crop sits
    photos: ["assets/images/pages/060.webp", "assets/images/pages/061.webp", "assets/images/pages/062.webp"] // photos 060, 061, 062
  },

  "pre-wedding-1": {
    id: "pre-wedding-1",
    service: "pre-wedding",
    label: "Bali Pre-Wedding 1",
    name: "Simply Us",
    summary: "Capture your love effortlessly with our Simply Us Pre-Wedding Package. Designed for couples seeking a practical, stress-free Bali pre-wedding photo session, this package focuses on one stunning location without complex itineraries.",
    description: [
      "Capture your love effortlessly with our Simply Us Pre-Wedding Package by Bali Top Wedding. Designed for couples seeking a practical, stress-free Bali pre-wedding photo session, this package focuses on one stunning location without complex itineraries.",
      "Enjoy complete comfort with a professional Bali pre-wedding photographer, a dedicated couple assistant, and private transport. Bring your favorite outfits and let us capture your authentic connection in paradise."
    ],
    priceIDR: "IDR 7,000,000 net",
    inclusions: [
      "<strong>Location & Duration:</strong> 1 location (from our curated catalog) with up to 2 hours of photo and video coverage",
      "<strong>Professional Crew:</strong> 1 photographer, 1 videographer, and 1 couple assistant",
      "<strong>Private Transport:</strong> Return transfers (hotel – venue – hotel) in a private air-conditioned vehicle",
      "<strong>Digital Deliverables:</strong> 25–50 high-resolution edited photos and a 1-minute edited highlight video delivered via Google Drive (raw files available upon request; external hard drive required)"
    ],
    heroPosition: "center 38%", // where the 40vh header crop sits
    photos: ["assets/images/pages/035.webp", "assets/images/pages/036.webp", "assets/images/pages/037.webp"] // photos 035, 036, 037
  },
  "pre-wedding-2": {
    id: "pre-wedding-2",
    service: "pre-wedding",
    label: "Bali Pre-Wedding 2",
    name: "The Signature",
    summary: "Elevate your romantic story into a masterpiece of luxury. Indulge in an effortless, VIP experience with The Signature Bali pre-wedding photography package. Designed for complete peace of mind, this premium offering combines curated venue choices from our exclusive collection, select wardrobe options, and an expert Bali photographer to ensure a seamless, stress-free journey from start to finish.",
    description: [
      "Indulge in an effortless luxury experience with The Signature Pre-Wedding Package by Bali Top Wedding. Designed for complete peace of mind, this VIP package includes everything: bridal gown & suit, professional hair & makeup, full photo & video coverage, and all venue fees across 2 stunning locations. We even provide private transport and a dedicated assistant during your pre-shoot fitting session for a seamless, stress-free journey."
    ],
    priceIDR: "IDR 19,000,000 net",
    inclusions: [
      "<strong>VIP Fitting Care:</strong> Transport & assistant for your gown & suit fitting session",
      "<strong>Bridal Attire Rental:</strong> 1 selected wedding gown & 1 selected suit",
      "<strong>Professional Hair & Makeup:</strong> Expert bridal makeup & intricate hair styling",
      "<strong>2 Locations Coverage:</strong> 2 locations (from our curated catalog) with up to 2 hours of photo & video coverage per location (4 hours total) and all venue entry fees included",
      "<strong>Professional Crew:</strong> 1 photographer, 1 videographer, and 1 couple assistant",
      "<strong>Private Transport:</strong> Full return transfers (hotel – fitting – venues – hotel)",
      "<strong>Digital Deliverables:</strong> 40–80 edited photos and a 3-minute highlight video delivered via Google Drive (raw files upon request; external drive required)"
    ],
    heroPosition: "center 38%", // where the 40vh header crop sits
    photos: ["assets/images/pages/038.webp", "assets/images/pages/039.webp", "assets/images/pages/040.webp"] // photos 038, 039, 040
  },
  "pre-wedding-3": {
    id: "pre-wedding-3",
    service: "pre-wedding",
    label: "Bali Pre-Wedding 3",
    name: "Balinese Heritage",
    summary: "Immerse yourselves in the timeless majesty of island culture. Embrace the rich art and tradition of the island with Balinese Heritage, a cultural Bali pre-wedding photography experience featuring authentic Balinese attire and exquisite traditional royal makeup.",
    description: [
      "Transform into Balinese royalty with the Balinese Heritage Pre-Wedding Package by Bali Top Wedding. Built with the same comprehensive care as our Signature package, this cultural experience includes selected modern Balinese attire (Payas Modifikasi), authentic accessories, traditional hair & makeup, full photo & video coverage, and all venue fees across 2 locations. Enjoy private transport and a dedicated assistant during your pre-shoot fitting session for a seamless, culturally rich journey."
    ],
    priceIDR: "IDR 16,000,000 net",
    inclusions: [
      "<strong>VIP Fitting Care:</strong> Transport & assistant for your traditional attire fitting session",
      "<strong>Balinese Attire & Accessories:</strong> Selected modern Balinese traditional outfits (Payas Modifikasi) & complete authentic accessories for bride & groom",
      "<strong>Balinese Hair & Makeup:</strong> Expert cultural hair styling and a traditional Balinese makeup artist",
      "<strong>2 Locations Coverage:</strong> 2 locations (from our curated catalog) with up to 2 hours of photo & video coverage per location (4 hours total) and all venue entry fees included",
      "<strong>Professional Crew:</strong> 1 photographer, 1 videographer, and 1 couple assistant",
      "<strong>Private Transport:</strong> Full return transfers (hotel – fitting – venues – hotel)",
      "<strong>Digital Deliverables:</strong> 40–80 high-resolution edited photos and a 3-minute edited highlight video delivered via Google Drive (raw files upon request; external drive required)"
    ],
    heroPosition: "center 65%", // where the 40vh header crop sits
    photos: ["assets/images/pages/041.webp", "assets/images/pages/042.webp", "assets/images/pages/043.webp"] // photos 041, 042, 043
  }
};

// ── 2.5 PORTFOLIO STORIES DATABASE (GALLERY-FIRST REAL CELEBRATIONS) ──
const PORTFOLIO_DATA = {
  "erik-sekar": {
    id: "erik-sekar",
    name: "Erik & Sekar",
    meta: "Panoramic Clifftop Ocean View • Vows & Candlelight Banquet",
    description: "Overlooking the endless expanse of the Indian Ocean, Erik & Sekar celebrated their sacred union framed by a grand circular white floral installation. The evening transitioned into a romantic private candlelit dinner under the twilight sky.",
    heroImage: "assets/images/portfolio/erik-sekar/8.webp",
    reviewBg: "assets/images/portfolio/erik-sekar/10.webp",
    packageId: "elopement",
    packageTitle: "Bali Elopement",
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
    meta: "Nusa Dua • Beachfront Elopement",
    description: "A vibrant, joyful celebration on a secluded tropical beach. Featuring a striking coral and pink heart-shaped floral arch against the sapphire sea, Rubini & Czarlie held an intimate elopement filled with laughter and warm ocean breezes.",
    heroImage: "assets/images/portfolio/rubini-czarlie/1.webp",
    reviewBg: "assets/images/portfolio/rubini-czarlie/17.webp",
    packageId: "elopement",
    packageTitle: "Bali Elopement",
    hasVideo: false,
    videoUrl: null,
    quote: "We wanted a carefree, vibrant beach elopement with zero stress, and Bali Top Wedding delivered beyond our expectations. Truly unforgettable!",
    quoteAuthor: "Rubini & Czarlie • Verified Couple",
    photos: [
      "assets/images/portfolio/rubini-czarlie/1.webp",
      "assets/images/portfolio/rubini-czarlie/2.webp",
      "assets/images/portfolio/rubini-czarlie/3.webp",
      "assets/images/portfolio/rubini-czarlie/4.webp",
      "assets/images/portfolio/rubini-czarlie/5.webp",
      "assets/images/portfolio/rubini-czarlie/6.webp",
      "assets/images/portfolio/rubini-czarlie/7.webp",
      "assets/images/portfolio/rubini-czarlie/8.webp",
      "assets/images/portfolio/rubini-czarlie/9.webp",
      "assets/images/portfolio/rubini-czarlie/10.webp",
      "assets/images/portfolio/rubini-czarlie/11.webp",
      "assets/images/portfolio/rubini-czarlie/12.webp",
      "assets/images/portfolio/rubini-czarlie/13.webp",
      "assets/images/portfolio/rubini-czarlie/14.webp",
      "assets/images/portfolio/rubini-czarlie/15.webp",
      "assets/images/portfolio/rubini-czarlie/16.webp",
      "assets/images/portfolio/rubini-czarlie/17.webp",
      "assets/images/portfolio/rubini-czarlie/18.webp"
    ]
  },

  "sarah-miha": {
    id: "sarah-miha",
    name: "Sarah & Miha",
    meta: "Kamandalu Ubud • Lush Rainforest Valley Sanctuary",
    description: "Nestled within the lush rainforest valley of Kamandalu Ubud, Sarah & Miha exchanged custom handwritten vows in a soft pink draped floral gazebo, surrounded by ancient tropical greenery and tranquil valley breezes.",
    heroImage: "assets/images/portfolio/sarah-miha/1.webp",
    reviewBg: "assets/images/portfolio/sarah-miha/15.webp",
    packageId: "elopement",
    packageTitle: "Bali Elopement",
    hasVideo: false,
    videoUrl: null,
    quote: "Kamandalu Ubud was the most magical backdrop for our vows. The team handled every legal and ceremonial nuance with absolute grace.",
    quoteAuthor: "Sarah & Miha • Europe",
    photos: [
      "assets/images/portfolio/sarah-miha/1.webp",
      "assets/images/portfolio/sarah-miha/2.webp",
      "assets/images/portfolio/sarah-miha/3.webp",
      "assets/images/portfolio/sarah-miha/4.webp",
      "assets/images/portfolio/sarah-miha/5.webp",
      "assets/images/portfolio/sarah-miha/6.webp",
      "assets/images/portfolio/sarah-miha/7.webp",
      "assets/images/portfolio/sarah-miha/8.webp",
      "assets/images/portfolio/sarah-miha/9.webp",
      "assets/images/portfolio/sarah-miha/10.webp",
      "assets/images/portfolio/sarah-miha/11.webp",
      "assets/images/portfolio/sarah-miha/12.webp",
      "assets/images/portfolio/sarah-miha/13.webp",
      "assets/images/portfolio/sarah-miha/14.webp",
      "assets/images/portfolio/sarah-miha/15.webp",
      "assets/images/portfolio/sarah-miha/16.webp",
      "assets/images/portfolio/sarah-miha/17.webp"
    ]
  },

  "vany-santi": {
    id: "vany-santi",
    name: "Vany & Santi",
    meta: "Ungasan Cliff & Tidal Reef • Coastal Sunset Blessing",
    description: "A modern, carefree celebration beginning with an ocean-view cliff blessing under a rainbow floral arch and concluding with a barefoot sunset stroll along the tidal coral reef in matching white linen.",
    heroImage: "assets/images/portfolio/vany-santi/1.webp",
    reviewBg: "assets/images/portfolio/vany-santi/8.webp",
    packageId: "elopement",
    packageTitle: "Bali Elopement",
    hasVideo: false,
    videoUrl: null,
    quote: "Barefoot on the reef as the twilight settled over the water was pure magic. We couldn't have asked for a more authentic, soulful elopement experience.",
    quoteAuthor: "Vany & Santi • Verified Couple",
    photos: [
      "assets/images/portfolio/vany-santi/1.webp",
      "assets/images/portfolio/vany-santi/2.webp",
      "assets/images/portfolio/vany-santi/3.webp",
      "assets/images/portfolio/vany-santi/4.webp",
      "assets/images/portfolio/vany-santi/5.webp",
      "assets/images/portfolio/vany-santi/6.webp",
      "assets/images/portfolio/vany-santi/7.webp",
      "assets/images/portfolio/vany-santi/8.webp",
      "assets/images/portfolio/vany-santi/9.webp",
      "assets/images/portfolio/vany-santi/10.webp",
      "assets/images/portfolio/vany-santi/11.webp",
      "assets/images/portfolio/vany-santi/12.webp",
      "assets/images/portfolio/vany-santi/13.webp",
      "assets/images/portfolio/vany-santi/14.webp",
      "assets/images/portfolio/vany-santi/15.webp",
      "assets/images/portfolio/vany-santi/16.webp",
      "assets/images/portfolio/vany-santi/17.webp"
    ]
  },

  "astrella-mikhael": {
    id: "astrella-mikhael",
    name: "Astrella & Mikhael",
    meta: "Uluwatu Clifftop • Villa Wedding Celebration",
    description: "A grand clifftop celebration above the Uluwatu coastline. Astrella & Mikhael exchanged vows down a white aisle lined with deep red florals and ocean views, before an evening reception under string lights with sparklers and fireworks.",
    heroImage: "assets/images/portfolio/astrella-mikhael/1.webp",
    reviewBg: "assets/images/portfolio/astrella-mikhael/14.webp",
    packageId: "private-villa",
    packageTitle: "Bali Villa Wedding",
    hasVideo: false,
    videoUrl: null,
    photos: [
      "assets/images/portfolio/astrella-mikhael/1.webp",
      "assets/images/portfolio/astrella-mikhael/2.webp",
      "assets/images/portfolio/astrella-mikhael/3.webp",
      "assets/images/portfolio/astrella-mikhael/4.webp",
      "assets/images/portfolio/astrella-mikhael/5.webp",
      "assets/images/portfolio/astrella-mikhael/6.webp",
      "assets/images/portfolio/astrella-mikhael/7.webp",
      "assets/images/portfolio/astrella-mikhael/8.webp",
      "assets/images/portfolio/astrella-mikhael/9.webp",
      "assets/images/portfolio/astrella-mikhael/10.webp",
      "assets/images/portfolio/astrella-mikhael/11.webp",
      "assets/images/portfolio/astrella-mikhael/12.webp",
      "assets/images/portfolio/astrella-mikhael/13.webp",
      "assets/images/portfolio/astrella-mikhael/14.webp",
      "assets/images/portfolio/astrella-mikhael/15.webp",
      "assets/images/portfolio/astrella-mikhael/16.webp",
      "assets/images/portfolio/astrella-mikhael/17.webp"
    ]
  },

  "jay-lisa": {
    id: "jay-lisa",
    name: "Jay & Lisa",
    meta: "Saba Beach • Beachfront Garden Wedding",
    description: "A beachfront garden wedding at Saba Beach framed by palm trees and white orchids. After an aisle ceremony beside the ocean, Jay & Lisa celebrated with family and friends through a candlelit dinner, fireworks, and a lively dance floor.",
    heroImage: "assets/images/portfolio/jay-lisa/1.webp",
    reviewBg: "assets/images/portfolio/jay-lisa/3.webp",
    packageId: "private-villa",
    packageTitle: "Bali Villa Wedding",
    hasVideo: false,
    videoUrl: null,
    photos: [
      "assets/images/portfolio/jay-lisa/1.webp",
      "assets/images/portfolio/jay-lisa/2.webp",
      "assets/images/portfolio/jay-lisa/3.webp",
      "assets/images/portfolio/jay-lisa/4.webp",
      "assets/images/portfolio/jay-lisa/5.webp",
      "assets/images/portfolio/jay-lisa/6.webp",
      "assets/images/portfolio/jay-lisa/7.webp",
      "assets/images/portfolio/jay-lisa/8.webp",
      "assets/images/portfolio/jay-lisa/9.webp",
      "assets/images/portfolio/jay-lisa/10.webp",
      "assets/images/portfolio/jay-lisa/11.webp",
      "assets/images/portfolio/jay-lisa/12.webp",
      "assets/images/portfolio/jay-lisa/13.webp",
      "assets/images/portfolio/jay-lisa/14.webp",
      "assets/images/portfolio/jay-lisa/15.webp",
      "assets/images/portfolio/jay-lisa/16.webp",
      "assets/images/portfolio/jay-lisa/17.webp",
      "assets/images/portfolio/jay-lisa/18.webp"
    ]
  }
};

// Old location-named pre-wedding links now open the couples' stories
const PORTFOLIO_ALIASES = {};

// ── 2.6 WEDDING FILMS (YOUTUBE, LANDSCAPE) ──
// Add one entry per film; the section on portfolio.html appears automatically.
// e.g. { title: "Michel & Angela", category: "Elopement", youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID" }
const PORTFOLIO_FILMS = [];

// ── 3. DOM BINDING & SITE INITIALIZATION ──
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize page-specific interactions immediately
  populatePackageSelects();
  initPackageDetail();
  initPortfolioDetail();
  initInquiryForms();
  initLightbox();
  initPortfolioFilter();
  initPortfolioFilms();

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
    const normPkg = getPackageService(pkgParam.toLowerCase()) || pkgParam;
    activeTarget = `package-detail.html?pkg=${normPkg}`;
  } else if (filename.includes("package-detail.html") || filename.includes("services.html")) {
    activeTarget = "package-detail.html?pkg=elopement";
  } else if (filename.includes("portfolio.html") || filename.includes("portfolio-detail.html")) {
    activeTarget = "portfolio.html";
  } else if (filename.includes("about.html")) {
    activeTarget = "about.html";
  } else if (filename.includes("blog.html")) {
    activeTarget = "blog.html";
  } else if (filename.includes("faq.html")) {
    activeTarget = "faq.html";
  } else if (filename.includes("testimonials.html")) {
    activeTarget = "testimonials.html";
  } else if (filename.includes("contact.html")) {
    activeTarget = "contact.html";
  }

  // Set active class on desktop links
  document.querySelectorAll(`.nav-link[href="${activeTarget}"]`).forEach(link => {
    link.classList.add("active");
  });

  // Highlight the "More" toggle when the current page lives in its dropdown
  document.querySelectorAll(`.dropdown-item[href="${activeTarget}"]`).forEach(item => {
    item.closest(".nav-dropdown").querySelector(".nav-link").classList.add("active");
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
 * Package Pages Renderer
 * ?pkg=<service key> shows that service's package overview, ?pkg=<package id> shows one package
 */
function getPackageService(pkgKey) {
  return Object.keys(PACKAGE_SERVICES).find(key => pkgKey === key || pkgKey.startsWith(`${key}-`));
}

function formatPackageTitle(pkg) {
  return `${pkg.label} – ${pkg.name}`;
}

/**
 * Fills every package <select> from PACKAGES_DATA, grouped by service
 */
function populatePackageSelects() {
  document.querySelectorAll("select[name='package']").forEach(select => {
    const customOption = select.querySelector("option[value='Custom / Undecided']");
    select.innerHTML = Object.values(PACKAGE_SERVICES).map(service => `
      <optgroup label="${service.title}">
        ${service.packages.map(id => {
          const title = formatPackageTitle(PACKAGES_DATA[id]);
          return `<option value="${title}">${title} (${PACKAGES_DATA[id].priceIDR})</option>`;
        }).join("")}
      </optgroup>
    `).join("") + (customOption ? customOption.outerHTML : "");
  });
}

/**
 * Package hero: one still photo (the first photo of the package or service)
 */
function renderPackageHero(photo, position) {
  const heroEl = document.getElementById("pkg-hero");
  if (!heroEl || !photo) return;
  heroEl.innerHTML = `<div class="pkg-hero-photo" style="background-image: url('${photo}'); background-position: ${position || "center 45%"};"></div>`;
}

function initPackageDetail() {
  const detailContainer = document.getElementById("package-detail-container");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  let pkgKey = (urlParams.get("pkg") || "elopement").toLowerCase().trim();
  if (pkgKey === "event") pkgKey = "private-villa";
  if (!PACKAGE_SERVICES[pkgKey] && !PACKAGES_DATA[pkgKey]) pkgKey = getPackageService(pkgKey) || "elopement";

  const serviceKey = getPackageService(pkgKey);
  const service = PACKAGE_SERVICES[serviceKey];
  const pkgData = PACKAGES_DATA[pkgKey];

  const summaryView = document.getElementById("package-summary-view");
  const detailView = document.getElementById("package-detail-view");
  const breadcrumbNav = document.getElementById("pkg-breadcrumb");
  const breadcrumbBase = `<a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span>`;

  document.querySelectorAll(".pkg-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.id === `tab-${serviceKey}`);
  });

  // ── 1. SERVICE OVERVIEW (all packages of one service) ──
  if (!pkgData) {
    if (summaryView) summaryView.style.display = "block";
    if (detailView) detailView.style.display = "none";
    document.title = `${service.title} — Bali Elopement Service`;
    renderPackageHero(service.heroImage, service.heroPosition);

    if (breadcrumbNav) {
      breadcrumbNav.innerHTML = `${breadcrumbBase}<span style="color: var(--dark); font-weight: 500;">${service.title}</span>`;
    }
    const titleEl = document.getElementById("summary-title");
    const introEl = document.getElementById("summary-intro");
    const gridEl = document.getElementById("summary-grid");
    if (titleEl) titleEl.textContent = service.title;
    if (introEl) introEl.textContent = service.intro;
    if (gridEl) {
      gridEl.innerHTML = service.packages.map(id => {
        const pkg = PACKAGES_DATA[id];
        return `
          <a href="package-detail.html?pkg=${pkg.id}" class="service-card elopement-summary-card">
            <div class="service-card-image">
              <img src="${pkg.photos[0]}" alt="${formatPackageTitle(pkg)}" loading="lazy">
            </div>
            <div class="service-card-body">
              <span class="service-card-category">${pkg.label}</span>
              <p class="elopement-card-tagline">${pkg.name}</p>
              <p class="service-card-desc">${pkg.summary}</p>
              <div class="elopement-card-footer">
                <div class="elopement-card-price">${pkg.priceIDR}</div>
                <span class="elopement-card-link">View details &rarr;</span>
              </div>
            </div>
          </a>
        `;
      }).join("");
    }
    return;
  }

  // ── 2. SINGLE PACKAGE ──
  if (summaryView) summaryView.style.display = "none";
  if (detailView) detailView.style.display = "block";
  document.title = `${formatPackageTitle(pkgData)} — Bali Elopement Service`;
  renderPackageHero(pkgData.photos[0], pkgData.heroPosition);

  if (breadcrumbNav) {
    breadcrumbNav.innerHTML = `${breadcrumbBase}<a href="package-detail.html?pkg=${serviceKey}">${service.title}</a><span>/</span><span style="color: var(--dark); font-weight: 500;">${formatPackageTitle(pkgData)}</span>`;
  }

  const backLink = document.getElementById("pkg-back-link");
  if (backLink) {
    backLink.href = `package-detail.html?pkg=${serviceKey}`;
    backLink.innerHTML = `&larr; ${service.backLabel}`;
  }

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text || "";
    return el;
  };
  setText("pkg-badge", pkgData.label);
  setText("pkg-title", pkgData.name);
  setText("pkg-price-idr", pkgData.priceIDR);
  const priceNoteEl = setText("pkg-price-foreign", pkgData.priceNote);
  if (priceNoteEl) priceNoteEl.style.display = pkgData.priceNote ? "block" : "none";

  // Package photos in a slider next to the explanation
  const sliderEl = document.getElementById("pkg-slider");
  if (sliderEl) {
    const photos = pkgData.photos;
    sliderEl.innerHTML = `
      <div class="pkg-slider-track">
        ${photos.map((src, i) => `
          <div class="pkg-slide" data-lightbox-src="${src}">
            <img src="${src}" alt="${formatPackageTitle(pkgData)} photo ${i + 1}"${i ? ' loading="lazy"' : ""}>
          </div>
        `).join("")}
      </div>
      ${photos.length > 1 ? `
        <button type="button" class="pkg-slider-btn pkg-slider-prev" aria-label="Previous photo">&#8249;</button>
        <button type="button" class="pkg-slider-btn pkg-slider-next" aria-label="Next photo">&#8250;</button>
        <div class="pkg-slider-dots">
          ${photos.map((_, i) => `<button type="button" class="pkg-slider-dot${i ? "" : " is-active"}" aria-label="Show photo ${i + 1}"></button>`).join("")}
        </div>
      ` : ""}
    `;
    initPackageSlider(sliderEl);
  }


  const descEl = document.getElementById("pkg-description");
  if (descEl) {
    descEl.innerHTML = (pkgData.description || [pkgData.summary])
      .map(p => `<p style="margin-bottom: 14px; font-size: 15.5px; line-height: 1.75; color: var(--dark);">${p}</p>`)
      .join("");
  }

  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const inclusionsEl = document.getElementById("pkg-inclusions");
  if (inclusionsEl) {
    inclusionsEl.innerHTML = pkgData.inclusions.map(inc => `<li class="inclusion-item">${checkIcon}<span>${inc}</span></li>`).join("");
  }

  const notesBlock = document.getElementById("pkg-notes-block");
  const notesEl = document.getElementById("pkg-notes");
  const notes = pkgData.notes || [];
  if (notesBlock) notesBlock.style.display = notes.length ? "block" : "none";
  if (notesEl) notesEl.innerHTML = notes.map(note => `<li>${note}</li>`).join("");

  // Pre-select this package in the inquiry form
  const packageSelect = document.getElementById("inquiry-package");
  if (packageSelect) packageSelect.value = formatPackageTitle(pkgData);
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
 * Wedding Films Section (portfolio.html)
 * Shows YouTube thumbnails first and only loads the player when a film is clicked
 */
function getYouTubeId(url) {
  const match = (url || "").match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
  return match ? match[1] : null;
}

function initPortfolioFilms() {
  const section = document.getElementById("portfolio-films");
  const grid = document.getElementById("films-grid");
  if (!section || !grid) return;

  const films = PORTFOLIO_FILMS
    .map(film => ({ ...film, videoId: getYouTubeId(film.youtubeUrl) }))
    .filter(film => film.videoId);
  if (!films.length) return;

  grid.innerHTML = films.map(film => `
    <article class="film-card">
      <div class="film-frame">
        <button type="button" class="film-player" data-video-id="${film.videoId}" data-title="${film.title}" aria-label="Play ${film.title} film">
          <img src="https://i.ytimg.com/vi/${film.videoId}/maxresdefault.jpg" alt="${film.title} wedding film" loading="lazy">
          <span class="film-play-icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </button>
      </div>
      <div class="film-body">
        <span class="section-label">${film.category}</span>
        <h3 class="portfolio-title">${film.title}</h3>
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
      player.parentElement.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0" title="${title} film" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    });
  });

  section.hidden = false;
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
  storyKey = PORTFOLIO_ALIASES[storyKey] || storyKey;
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
          item.innerHTML = `<img src="${photoUrl}" alt="${data.name} Celebration Photo ${index + 1}" loading="lazy">`;

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
    const badgeLabel = data.quote ? "Couple Reflections" : "Plan Your Celebration";
    const quoteHTML = data.quote
      ? `<div class="stars-container">★★★★★</div>
        <p class="review-quote-text">"${data.quote}"</p>
        <div class="review-author">— ${data.quoteAuthor}</div>`
      : `<p class="review-quote-text">Inspired by ${data.name}? Let's plan yours.</p>`;
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
            <span>${badgeLabel}</span>
          </div>
          ${quoteHTML}
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
          <span>${badgeLabel}</span>
        </div>
        ${quoteHTML}
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

