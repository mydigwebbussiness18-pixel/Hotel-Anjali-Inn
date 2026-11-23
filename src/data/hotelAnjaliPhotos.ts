export type PhotoCategory =
  | 'exterior'
  | 'rooms'
  | 'restaurant'
  | 'food'
  | 'events';

export type FoodSubcategory = 'thalis' | 'snacks' | 'beverages';

export interface HotelPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: PhotoCategory;
  foodSubcategory?: FoodSubcategory;
  roomKind?: 'guest' | 'celebration';
  aspectHint?: 'landscape' | 'portrait';
  objectPosition?: string;
}

export const GALLERY_HIGHLIGHT_IDS = new Set([
  'ext-road-view',
  'ext-reception-walk',
  'ext-balcony-detail',
  'ext-night-gathering',
  'ext-garden-glow',
  'ext-event-lawn',
  'evt-marble-foyer',
  'evt-lobby-stairs',
  'evt-hospitality-lounge',
]);

export const CATEGORY_LABELS: Record<PhotoCategory, string> = {
  exterior: 'Exterior & Grounds',
  rooms: 'Rooms & Suites',
  restaurant: 'Restaurant & Dining',
  food: 'Food & Beverages',
  events: 'Banquets & Events',
};

export const BUSINESS_LINKS = {
  name: 'Hotel Anjali Inn',
  logoUrl: '/assets/aistudio/image_89126be7.png',
  instagramUrl: 'https://www.instagram.com/hotel._.anjali/',
  instagramHandle: '@hotel._.anjali',
  googleMapsUrl: 'https://share.google/9LBKvZnQKRhNv9Ad3',
  whatsappNumber: '919724037610',
  whatsappDisplay: '+91 9724037610',
} as const;

export const HOTEL_ANJALI_PHOTOS: HotelPhoto[] = [
  // Exterior & Grounds (10)
  {
    id: 'ext-hero',
    src: '/assets/aistudio/image_630862b8.png',
    title: 'Hotel Anjali Inn Restaurant & Lawn',
    subtitle: 'Palm-lined facade with sunlit garden dining tables',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-about-facade',
    src: '/assets/aistudio/image_dadc4ea8.png',
    title: 'Landscaped Hotel Facade',
    subtitle: 'Manicured greenery welcoming guests to Hotel Anjali Inn',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-arch-gate',
    src: '/assets/aistudio/image_7b527166.png',
    title: 'Hotel Anjali Inn Entrance Arch',
    subtitle: 'Grand courtyard entrance archway and stone walkway',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-road-view',
    src: '/assets/aistudio/image_6b9da2fd.png',
    title: 'Property Frontage',
    subtitle: 'Wide approach view of the Hotel Anjali Inn entrance',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-reception-walk',
    src: '/assets/aistudio/image_f18ce9f4.png',
    title: 'Reception Courtyard',
    subtitle: 'Paved promenade leading to the hotel reception',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-balcony-detail',
    src: '/assets/aistudio/image_b1091f9e.png',
    title: 'Upper Balcony Wing',
    subtitle: 'Glass-railed balconies framed by tropical palms',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-night-lights',
    src: '/assets/aistudio/image_cc014958.png',
    title: 'Evening Illuminated Facade',
    subtitle: 'Festive lights shimmering across the hotel exterior',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-night-gathering',
    src: '/assets/aistudio/image_b2b82dbd.png',
    title: 'Night Lawn Hospitality',
    subtitle: 'Evening dining and lawn celebrations under the lights',
    category: 'exterior',
    aspectHint: 'landscape',
  },
  {
    id: 'ext-garden-glow',
    src: '/assets/aistudio/image_429d7830.png',
    title: 'Illuminated Garden Palms',
    subtitle: 'Evening ambience across the manicured lawn',
    category: 'exterior',
    aspectHint: 'portrait',
  },
  {
    id: 'ext-event-lawn',
    src: '/assets/aistudio/image_1d917fab.png',
    title: 'Expansive Event Lawn',
    subtitle: 'Open-air green grounds with guest parking access',
    category: 'exterior',
    aspectHint: 'landscape',
  },

  // Rooms & Suites (6)
  {
    id: 'room-signature-red',
    src: '/assets/aistudio/image_d313f8c4.png',
    title: 'Signature Suite',
    subtitle: 'Spacious marble-floored suite with lounge seating and natural daylight',
    category: 'rooms',
    roomKind: 'guest',
    aspectHint: 'landscape',
  },
  {
    id: 'room-classic-deluxe',
    src: '/assets/aistudio/image_e4072498.png',
    title: 'Classic Deluxe Room',
    subtitle: 'Warm upholstered headboard, crisp linen, and bedside comfort',
    category: 'rooms',
    roomKind: 'guest',
    aspectHint: 'landscape',
  },
  {
    id: 'room-contemporary-teal',
    src: '/assets/aistudio/image_cd2c1032.png',
    title: 'Contemporary Guest Room',
    subtitle: 'Bright modern styling with recessed ceiling lighting',
    category: 'rooms',
    roomKind: 'guest',
    aspectHint: 'landscape',
  },
  {
    id: 'room-celebration-roses',
    src: '/assets/aistudio/image_b405a5c4.png',
    title: 'Celebration Room Arrangement',
    subtitle: 'Custom rose-petal and balloon decor for special milestones',
    category: 'rooms',
    roomKind: 'celebration',
    aspectHint: 'landscape',
  },
  {
    id: 'room-celebration-canopy',
    src: '/assets/aistudio/image_7490fd9b.png',
    title: 'Fairy-Light Canopy Decor',
    subtitle: 'Bespoke birthday and anniversary room styling',
    category: 'rooms',
    roomKind: 'celebration',
    aspectHint: 'portrait',
  },
  {
    id: 'room-celebration-petals',
    src: '/assets/aistudio/image_372bd1aa.png',
    title: 'Festive Suite Setup',
    subtitle: 'Prepared with fresh floral petals and celebratory accents',
    category: 'rooms',
    roomKind: 'celebration',
    aspectHint: 'landscape',
  },

  // Restaurant & Dining Spaces (4)
  {
    id: 'rest-dining-hall',
    src: '/assets/aistudio/image_38ee7de4.png',
    title: 'Main Restaurant Dining Hall',
    subtitle: 'Sunlit indoor dining room with warm golden ceiling contours',
    category: 'restaurant',
    aspectHint: 'landscape',
  },
  {
    id: 'rest-chandelier-pavilion',
    src: '/assets/aistudio/image_288d377a.png',
    title: 'Chandelier Dining Pavilion',
    subtitle: 'Outdoor draped dining tables with crystal chandeliers and floral settings',
    category: 'restaurant',
    aspectHint: 'portrait',
  },
  {
    id: 'rest-banquet-canopy',
    src: '/assets/aistudio/image_8788c7ad.png',
    title: 'Grand Pavilion Seating',
    subtitle: 'Spacious family and celebration dining under festive canopies',
    category: 'restaurant',
    aspectHint: 'landscape',
  },
  {
    id: 'rest-buffet-counter',
    src: '/assets/aistudio/image_4d6eff64.png',
    title: 'Live Catering & Buffet Pavilion',
    subtitle: 'Illuminated golden counters curated for grand feasts',
    category: 'restaurant',
    aspectHint: 'landscape',
  },

  // Food & Beverages (9)
  {
    id: 'food-thalis',
    src: '/assets/aistudio/image_a62cbde7.png',
    title: 'Gujarati Thali & Punjabi Thali',
    subtitle: 'Traditional complete meal platters served with fresh accompaniments',
    category: 'food',
    foodSubcategory: 'thalis',
    aspectHint: 'landscape',
  },
  {
    id: 'food-curries',
    src: '/assets/aistudio/image_fb85dd35.png',
    title: 'Signature Curry Selection',
    subtitle: 'Richly spiced gravies finished with grated paneer and fresh herbs',
    category: 'food',
    foodSubcategory: 'thalis',
    aspectHint: 'portrait',
  },
  {
    id: 'food-skewers',
    src: '/assets/aistudio/image_984eb199.png',
    title: 'Crispy Starter Skewers',
    subtitle: 'Served hot with tangy red sauce and crisp shredded greens',
    category: 'food',
    foodSubcategory: 'snacks',
    aspectHint: 'portrait',
  },
  {
    id: 'food-panipuri',
    src: '/assets/aistudio/image_af2e4341.png',
    title: 'Fresh Pani Puri Platter',
    subtitle: 'Crisp puris topped with sev and vibrant mint-coriander water',
    category: 'food',
    foodSubcategory: 'snacks',
    aspectHint: 'portrait',
  },
  {
    id: 'food-pizza',
    src: '/assets/aistudio/image_6d915706.png',
    title: 'Oven-Baked Cheese Pizza',
    subtitle: 'Golden crust topped with melted mozzarella and chilli flakes',
    category: 'food',
    foodSubcategory: 'snacks',
    aspectHint: 'portrait',
  },
  {
    id: 'food-fries',
    src: '/assets/aistudio/image_65dc1ad3.png',
    title: 'Crispy Masala Fries',
    subtitle: 'Seasoned golden fries served with classic tomato dip',
    category: 'food',
    foodSubcategory: 'snacks',
    aspectHint: 'portrait',
  },
  {
    id: 'food-chai',
    src: '/assets/aistudio/image_8919ef6c.png',
    title: 'Kulhad Masala Chai',
    subtitle: 'Aromatic spiced tea brewed with ginger, cardamom, cinnamon, and cloves',
    category: 'food',
    foodSubcategory: 'beverages',
    aspectHint: 'portrait',
  },
  {
    id: 'food-shakes',
    src: '/assets/aistudio/image_515d9855.png',
    title: 'Dry-Fruit Shakes & Lassi',
    subtitle: 'Chilled creamy blends garnished with almonds, cashews, and cherries',
    category: 'food',
    foodSubcategory: 'beverages',
    aspectHint: 'landscape',
  },
  {
    id: 'food-cold-coffee',
    src: '/assets/aistudio/image_2d77ddaf.png',
    title: 'Ice Cream Cold Coffee',
    subtitle: 'Rich chocolate-swirled cold coffee crowned with ice cream and shavings',
    category: 'food',
    foodSubcategory: 'beverages',
    aspectHint: 'portrait',
  },

  // Banquets, Events & Hospitality Foyers (7)
  {
    id: 'evt-lawn-stage',
    src: '/assets/aistudio/image_ed7df677.png',
    title: 'Outdoor Wedding & Event Stage',
    subtitle: 'Floral-draped lawn stage set for grand celebrations',
    category: 'events',
    aspectHint: 'landscape',
  },
  {
    id: 'evt-grand-hall',
    src: '/assets/aistudio/image_b178f30e.png',
    title: 'Grand Banquet & Conference Hall',
    subtitle: 'Air-conditioned indoor hall arranged for weddings and gatherings',
    category: 'events',
    aspectHint: 'landscape',
  },
  {
    id: 'evt-draped-hall',
    src: '/assets/aistudio/image_49d45efe.png',
    title: 'Celebration Seating Hall',
    subtitle: 'Satin-accented banquet seating with main stage view',
    category: 'events',
    aspectHint: 'landscape',
  },
  {
    id: 'evt-party-stage',
    src: '/assets/aistudio/image_594f8cfc.png',
    title: 'Birthday & Milestone Hall',
    subtitle: 'Dedicated indoor stage for family festivities and parties',
    category: 'events',
    aspectHint: 'landscape',
  },
  {
    id: 'evt-marble-foyer',
    src: '/assets/aistudio/image_08ca2154.png',
    title: 'Grand Marble Foyer',
    subtitle: 'Polished reception hall and buffet service corridor',
    category: 'events',
    aspectHint: 'landscape',
  },
  {
    id: 'evt-lobby-stairs',
    src: '/assets/aistudio/image_b19a7b77.png',
    title: 'Main Lobby & Reception',
    subtitle: 'Spacious arrival lounge connecting guest wings and banquet halls',
    category: 'events',
    aspectHint: 'landscape',
  },
  {
    id: 'evt-hospitality-lounge',
    src: '/assets/aistudio/image_43b75b53.png',
    title: 'Welcome Lounge Corridor',
    subtitle: 'Quiet indoor seating adjacent to the main property entrance',
    category: 'events',
    aspectHint: 'landscape',
  },
];
