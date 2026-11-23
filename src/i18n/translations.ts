import {FoodSubcategory, PhotoCategory} from '../data/hotelAnjaliPhotos';

export type LanguageCode = 'en' | 'gu' | 'hi';

export interface LanguageOption {
  code: LanguageCode;
  shortLabel: string;
  nativeLabel: string;
  englishName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {code: 'en', shortLabel: 'EN', nativeLabel: 'English', englishName: 'English'},
  {code: 'gu', shortLabel: 'GU', nativeLabel: 'ગુજરાતી', englishName: 'Gujarati'},
  {code: 'hi', shortLabel: 'HI', nativeLabel: 'हिन्दी', englishName: 'Hindi'},
];

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    primaryLabel: string;
    mobileLabel: string;
    home: string;
    hotel: string;
    rooms: string;
    restaurant: string;
    gallery: string;
    location: string;
    reviews: string;
    faq: string;
    contact: string;
    whatsappInquiry: string;
    whatsappAria: string;
    whatsappTitle: string;
    instagramAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    languageSelectorLabel: string;
    switchToDarkAria: string;
    switchToLightAria: string;
    darkLabel: string;
    lightLabel: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    exploreHotel: string;
    exploreRestaurant: string;
    cardEyebrow: string;
    cardTitle: string;
    cardDescription: string;
  };
  about: {
    eyebrow: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    accommodationsLabel: string;
    accommodationsValue: string;
    hospitalityLabel: string;
    hospitalityValue: string;
    googleProfileLink: string;
    figPrefix: string;
  };
  rooms: {
    eyebrow: string;
    headline: string;
    filterAria: string;
    tabs: {
      all: string;
      guest: string;
      celebration: string;
    };
    featuredSuiteTag: string;
    featuredSuiteExtra: string;
    inspectPhoto: string;
    inquireCta: string;
    guestStayTag: string;
    specialEyebrow: string;
    specialHeadline: string;
    specialSubtitle: string;
    celebrationDecorTag: string;
    viewPhotoPrefix: string;
  };
  restaurant: {
    eyebrow: string;
    headline: string;
    description: string;
    quote: string;
    menuEyebrow: string;
    menuHeadline: string;
    filterAria: string;
    tabs: Record<'all' | FoodSubcategory, string>;
    viewDishPrefix: string;
  };
  events: {
    eyebrow: string;
    headline: string;
    description: string;
  };
  gallery: {
    eyebrow: string;
    headline: string;
    tabs: {
      highlights: string;
      exterior: string;
      rooms: string;
      restaurant: string;
      food: string;
      events: string;
      all: string;
    };
    categories: Record<PhotoCategory, string>;
    openLightboxPrefix: string;
    lightboxAria: string;
    closeLightboxAria: string;
    prevPhotoAria: string;
    nextPhotoAria: string;
  };
  reviews: {
    eyebrow: string;
    headline: string;
    description: string;
    sampleRatingLabel: string;
    sampleRatingAria: string;
    showReviewAriaPrefix: string;
    prevAria: string;
    nextAria: string;
    verifiedCtaText: string;
    verifiedCtaButton: string;
    slots: Array<{
      id: string;
      slotTag: string;
      templateQuote: string;
      reviewerPlaceholder: string;
      contextPlaceholder: string;
    }>;
    reviewForm: {
      eyebrow: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      ratingLabel: string;
      ratingAria: string;
      ratingPrompt: string;
      ratingLabels: [string, string, string, string, string];
      starAriaPrefix: string;
      commentLabel: string;
      commentPlaceholder: string;
      charHint: string;
      submitButton: string;
      resetHint: string;
      successTitle: string;
      successMessage: string;
      errorName: string;
      errorRating: string;
      errorComment: string;
      submittedSectionTitle: string;
      submittedTag: string;
    };
  };
  faq: {
    eyebrow: string;
    headline: string;
    description: string;
    expandAll: string;
    collapseAll: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
  };
  locationContact: {
    locationEyebrow: string;
    locationHeadline: string;
    locationDescription: string;
    openGoogleMaps: string;
    profileCardSub: string;
    viewProfile: string;
    mapCardHeadline: string;
    mapCardDescription: string;
    mapCardTag1: string;
    mapCardTag2: string;
    contactEyebrow: string;
    contactHeadline: string;
    contactDescription: string;
    inquireWhatsApp: string;
    followInstagram: string;
    googleMapsReviews: string;
    submittedTitle: string;
    submittedBodyBefore: string;
    submittedBodyMiddle: string;
    submittedBodyAfter: string;
    sendAnother: string;
    inquiryTypeLabel: string;
    topics: {
      stay: string;
      dining: string;
      event: string;
    };
    fullNameLabel: string;
    fullNamePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    formError: string;
    demoNote: string;
    previewInquiry: string;
  };
  whatsappModal: {
    eyebrow: string;
    title: string;
    closeAria: string;
    selectTopicLabel: string;
    templates: Array<{
      id: string;
      label: string;
      text: string;
    }>;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneHint: string;
    messageLabel: string;
    errorInvalidPhone: string;
    cancel: string;
    submit: string;
  };
  floating: {
    groupAria: string;
    instagramAria: string;
    whatsappAria: string;
    whatsappTitle: string;
    whatsappGreeting: string;
  };
  footer: {
    navAria: string;
    tagline: string;
    copyrightSuffix: string;
    instagram: string;
    googleProfile: string;
  };
  photos: Record<string, {title: string; subtitle: string}>;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  en: {
    meta: {
      title: 'Hotel Anjali Inn — Stay & Dining',
      description: 'Luxury Hotel & Restaurant hospitality showcase for Hotel Anjali Inn.',
    },
    nav: {
      primaryLabel: 'Primary Navigation',
      mobileLabel: 'Mobile Navigation',
      home: 'Home',
      hotel: 'Hotel',
      rooms: 'Rooms',
      restaurant: 'Restaurant',
      gallery: 'Gallery',
      location: 'Location',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      whatsappInquiry: 'WhatsApp Inquiry',
      whatsappAria: 'Inquire on WhatsApp',
      whatsappTitle: 'WhatsApp Concierge',
      instagramAria: 'Hotel Anjali Inn on Instagram',
      openMenuAria: 'Open navigation menu',
      closeMenuAria: 'Close navigation menu',
      languageSelectorLabel: 'Select language',
      switchToDarkAria: 'Switch to Dark Mode',
      switchToLightAria: 'Switch to Light Mode',
      darkLabel: 'Dark',
      lightLabel: 'Light',
    },
    hero: {
      eyebrow: 'Hotel Anjali Inn · Lawns, Suites & Dining',
      headline: 'Warm hospitality, sunlit lawns, and memorable dining.',
      description:
        'Welcome to Hotel Anjali Inn—combining tranquil guest rooms, lush open-air garden lawns, and a bustling restaurant crafted for travelers and families.',
      exploreHotel: 'Explore Hotel',
      exploreRestaurant: 'Explore Restaurant',
      cardEyebrow: 'Hotel Anjali Inn',
      cardTitle: 'Stay · Dine · Celebrate',
      cardDescription:
        'Comfortable suites, indoor & garden restaurant seating, and expansive banquet lawns under one roof.',
    },
    about: {
      eyebrow: '01 · About Hotel Anjali Inn',
      headline: 'A welcoming sanctuary of stays, dining, and open-air lawns.',
      paragraph1:
        'Framed by swaying palms and manicured green lawns, Hotel Anjali Inn brings together restful guest accommodations, a vibrant family restaurant, and expansive celebration spaces under one hospitality tradition.',
      paragraph2:
        'From the iconic arched entrance welcoming arrivals by day to festive evening lights across the garden courtyard, every corner is designed for comfort, warmth, and effortless gathering.',
      accommodationsLabel: 'Accommodations',
      accommodationsValue: 'Suites & Deluxe Rooms',
      hospitalityLabel: 'Hospitality',
      hospitalityValue: 'Restaurant & Event Lawns',
      googleProfileLink: 'Google Business Profile',
      figPrefix: 'Fig.',
    },
    rooms: {
      eyebrow: '02 · Hotel & Rooms',
      headline: 'Restful rooms & bespoke celebration setups.',
      filterAria: 'Filter room photographs',
      tabs: {
        all: 'All Rooms',
        guest: 'Guest Rooms',
        celebration: 'Special Decor',
      },
      featuredSuiteTag: 'Featured Suite',
      featuredSuiteExtra:
        'Designed with generous floor space, sunlit windows, lounge seating, and peaceful interiors for restful nights.',
      inspectPhoto: 'Inspect Room Photo',
      inquireCta: 'Inquire',
      guestStayTag: 'Guest Stay',
      specialEyebrow: 'Special Occasion Styling',
      specialHeadline: 'Romantic & Celebration Room Setups',
      specialSubtitle:
        'Custom floral petals, lighting, and balloon arrangements upon request.',
      celebrationDecorTag: 'Celebration Decor',
      viewPhotoPrefix: 'View',
    },
    restaurant: {
      eyebrow: '03 · Restaurant Experience',
      headline: 'Indoor dining warmth & open-air garden feasts.',
      description:
        'Hotel Anjali Inn’s restaurant welcomes guests into a bright, spacious dining hall framed by warm golden ceilings—paired with outdoor chandelier pavilions and live buffet counters for evening gatherings.',
      quote:
        '“From comforting traditional thalis and kulhad chai to festive family feasts under the lights.”',
      menuEyebrow: 'Food & Beverages Showcase',
      menuHeadline: 'Fresh from the Hotel Anjali Inn Kitchen',
      filterAria: 'Filter culinary showcase',
      tabs: {
        all: 'All Dishes',
        thalis: 'Thalis & Curries',
        snacks: 'Snacks & Starters',
        beverages: 'Chai & Shakes',
      },
      viewDishPrefix: 'View',
    },
    events: {
      eyebrow: '04 · Celebrations & Banquets',
      headline: 'Grand lawns, banquet halls, and reception foyers.',
      description:
        'Designed to host weddings, family milestones, and group gatherings with spacious indoor halls, landscaped outdoor stages, and polished reception foyers.',
    },
    gallery: {
      eyebrow: '05 · Property Gallery',
      headline: 'Every corner of Hotel Anjali Inn.',
      tabs: {
        highlights: 'Grounds & Foyers',
        exterior: 'Exterior & Lawns',
        rooms: 'Rooms & Suites',
        restaurant: 'Restaurant',
        food: 'Food & Drinks',
        events: 'Banquets & Lobby',
        all: 'All',
      },
      categories: {
        exterior: 'Exterior & Grounds',
        rooms: 'Rooms & Suites',
        restaurant: 'Restaurant & Dining',
        food: 'Food & Beverages',
        events: 'Banquets & Events',
      },
      openLightboxPrefix: 'Open in lightbox:',
      lightboxAria: 'Photograph lightbox',
      closeLightboxAria: 'Close lightbox',
      prevPhotoAria: 'Previous photograph',
      nextPhotoAria: 'Next photograph',
    },
    reviews: {
      eyebrow: '06 · Customer Reviews (Demo Template)',
      headline: 'Guest testimonials & verified review showcase.',
      description:
        'Designed to display verified reviews from Hotel Anjali Inn’s Google Business Profile. All cards below are clearly marked demo placeholders ready for real customer feedback.',
      sampleRatingLabel: 'Sample Rating Slot',
      sampleRatingAria: 'Sample 5-star placeholder indicator',
      showReviewAriaPrefix: 'Show demo review',
      prevAria: 'Previous review placeholder',
      nextAria: 'Next review placeholder',
      verifiedCtaText:
        'Read real, live guest ratings and reviews directly on Hotel Anjali Inn’s Google Business Profile.',
      verifiedCtaButton: 'Open Verified Google Reviews',
      slots: [
        {
          id: 'demo-stay',
          slotTag: 'Demo Review Slot · Hotel Stay',
          templateQuote:
            '[Demo Placeholder: Insert a verified guest review highlighting suite comfort, room cleanliness, and warm reception hospitality at Hotel Anjali Inn.]',
          reviewerPlaceholder: 'Verified Guest Name (Demo Placeholder)',
          contextPlaceholder: 'Room Stay · Replace with Google Business Review',
        },
        {
          id: 'demo-dining',
          slotTag: 'Demo Review Slot · Restaurant Dining',
          templateQuote:
            '[Demo Placeholder: Insert a verified diner review describing the Gujarati & Punjabi thalis, snacks, kulhad masala chai, and family dining atmosphere.]',
          reviewerPlaceholder: 'Verified Diner Name (Demo Placeholder)',
          contextPlaceholder: 'Restaurant Visit · Replace with Google Business Review',
        },
        {
          id: 'demo-events',
          slotTag: 'Demo Review Slot · Banquets & Lawns',
          templateQuote:
            '[Demo Placeholder: Insert a verified host review sharing feedback on lawn celebrations, banquet hall arrangements, and catering hospitality.]',
          reviewerPlaceholder: 'Verified Event Host (Demo Placeholder)',
          contextPlaceholder: 'Celebration Host · Replace with Google Business Review',
        },
      ],
      reviewForm: {
        eyebrow: 'Share Your Experience',
        title: 'Write a Guest Review',
        subtitle:
          'Visited Hotel Anjali Inn for a stay, family dinner, or celebration? Share your star rating and impressions below.',
        nameLabel: 'Guest Name',
        namePlaceholder: 'Enter your full name',
        ratingLabel: 'Star Rating',
        ratingAria: 'Select a star rating from 1 to 5',
        ratingPrompt: 'Select 1 to 5 stars',
        ratingLabels: ['Fair', 'Good', 'Very Good', 'Memorable', 'Exceptional'],
        starAriaPrefix: 'Rate',
        commentLabel: 'Your Review & Comments',
        commentPlaceholder:
          'Share your thoughts on our guest rooms, restaurant dishes, garden lawns, or hospitality...',
        charHint: 'Minimum 10 characters',
        submitButton: 'Submit Guest Review',
        resetHint: 'Form resets automatically after submission.',
        successTitle: 'Thank you for sharing your experience',
        successMessage:
          'Your guest review has been recorded below for this session and the form has been cleared.',
        errorName: 'Please enter your name (at least 2 characters).',
        errorRating: 'Please choose a star rating between 1 and 5.',
        errorComment: 'Please share a brief comment (at least 10 characters).',
        submittedSectionTitle: 'Recent Guest Submissions (Session Preview)',
        submittedTag: 'Guest Submission · Just Added',
      },
    },
    faq: {
      eyebrow: '07 · Frequently Asked Questions',
      headline: 'Helpful details for your visit.',
      description:
        'Explore quick answers about stays, restaurant dining, and event spaces at Hotel Anjali Inn. Multiple questions can be kept open side by side.',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      items: [
        {
          id: 'faq-offerings',
          question: 'What spaces and experiences does Hotel Anjali Inn offer?',
          answer:
            'Hotel Anjali Inn combines comfortable guest accommodations, a dedicated family restaurant with indoor dining and garden lawn seating, and spacious indoor and outdoor venues for weddings, birthdays, and group gatherings.',
        },
        {
          id: 'faq-rooms',
          question: 'What room options and special setups are available?',
          answer:
            'The property showcases Signature Suites, Classic Deluxe Rooms, and Contemporary Guest Rooms, alongside bespoke celebration room styling with floral petals, canopies, and balloon arrangements upon inquiry.',
        },
        {
          id: 'faq-dining',
          question: 'What dining experiences are featured at the restaurant?',
          answer:
            'Guests can enjoy dining in the sunlit main restaurant hall, the outdoor garden lawn, or draped chandelier pavilions—featuring Gujarati and Punjabi thalis, rich curries, starters and chaat, baked pizza, kulhad masala chai, dry-fruit shakes, and cold coffee.',
        },
        {
          id: 'faq-events',
          question: 'Can Hotel Anjali Inn host celebrations, banquets, and group events?',
          answer:
            'Yes. Hotel Anjali Inn features an open-air event lawn with a floral stage, live buffet and catering counters, a grand reception foyer, and indoor air-conditioned banquet halls suited for family celebrations and group functions.',
        },
        {
          id: 'faq-directions',
          question: 'Where can I find verified directions, hours, and updates?',
          answer:
            'Verified directions, live location details, and guest reviews are accessible through Hotel Anjali Inn’s official Google Business Profile linked in the Location section, and visual updates are shared on Instagram at @hotel._.anjali.',
        },
        {
          id: 'faq-inquiry',
          question: 'How can I make a stay, dining, or event inquiry?',
          answer:
            'You can compose an inquiry directly through the Contact section form or use the WhatsApp Inquiry button to prepare a pre-filled message for room stays, restaurant tables, or private celebrations.',
        },
      ],
    },
    locationContact: {
      locationEyebrow: '08 · Location & Directions',
      locationHeadline: 'Find Hotel Anjali Inn.',
      locationDescription:
        'Access verified directions, guest reviews, and live route guidance directly through the official Hotel Anjali Inn Google Business Profile, or explore recent updates on Instagram.',
      openGoogleMaps: 'Open Google Maps Directions',
      profileCardSub: 'Google Business Profile',
      viewProfile: 'View Profile',
      mapCardHeadline:
        'Verified location & route navigation linked directly to Google Maps.',
      mapCardDescription:
        'To preserve strict accuracy, live coordinates, opening hours, and turn-by-turn directions open directly in Hotel Anjali Inn’s official Google Business Profile.',
      mapCardTag1: 'Hotel & Restaurant',
      mapCardTag2: 'Verified Google Profile',
      contactEyebrow: '09 · Contact & Inquiries',
      contactHeadline: 'Plan a stay or reserve a table.',
      contactDescription:
        'Have a question about upcoming stays, family dining, or hospitality at Hotel Anjali Inn? Send an inquiry preview below or reach out via our official channels.',
      inquireWhatsApp: 'Inquire on WhatsApp',
      followInstagram: 'Follow on Instagram',
      googleMapsReviews: 'Google Maps & Reviews',
      submittedTitle: 'Inquiry Preview Ready',
      submittedBodyBefore: 'Thank you, ',
      submittedBodyMiddle: '. In a live deployment, this ',
      submittedBodyAfter:
        ' would be routed directly to Hotel Anjali Inn’s front desk or WhatsApp concierge.',
      sendAnother: 'Send Another Note',
      inquiryTypeLabel: 'Inquiry Type',
      topics: {
        stay: 'Stay Inquiry',
        dining: 'Restaurant & Dining',
        event: 'Group or Event',
      },
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'Your name',
      contactLabel: 'Phone or Email',
      contactPlaceholder: 'How should we reply?',
      messageLabel: 'Message & Preferred Dates',
      messagePlaceholder:
        'Share your preferred stay dates, dining party size, or questions...',
      formError: 'Please enter your name, contact detail, and inquiry message.',
      demoNote:
        'Presentation demo · No automated payment or reservation is charged.',
      previewInquiry: 'Preview Inquiry',
    },
    whatsappModal: {
      eyebrow: 'Direct Concierge',
      title: 'WhatsApp Inquiry',
      closeAria: 'Close WhatsApp dialog',
      selectTopicLabel: 'Select Inquiry Topic',
      templates: [
        {
          id: 'stay',
          label: 'Room Stay',
          text: 'Hello Hotel Anjali Inn, I would like to inquire about room availability and stay details.',
        },
        {
          id: 'dining',
          label: 'Restaurant Dining',
          text: 'Hello Hotel Anjali Inn, I would like to inquire about family dining and table availability at your restaurant.',
        },
        {
          id: 'event',
          label: 'Event & Banquet',
          text: 'Hello Hotel Anjali Inn, I would like to inquire about hosting a celebration or banquet on your lawn/hall.',
        },
      ],
      phoneLabel: 'Hotel Anjali Inn WhatsApp Number',
      phonePlaceholder: '+91 9724037610',
      phoneHint:
        'Direct WhatsApp concierge line (+91 9724037610) prefilled for Hotel Anjali Inn.',
      messageLabel: 'Message',
      errorInvalidPhone:
        'Enter Hotel Anjali Inn’s 10–12 digit WhatsApp number (with country code, e.g. 91...) to open WhatsApp.',
      cancel: 'Cancel',
      submit: 'Open WhatsApp',
    },
    floating: {
      groupAria: 'Quick Social & Concierge Actions',
      instagramAria: 'Follow Hotel Anjali Inn on Instagram',
      whatsappAria: 'Chat with Hotel Anjali Inn on WhatsApp (+91 9724037610)',
      whatsappTitle: 'Chat on WhatsApp · +91 9724037610',
      whatsappGreeting:
        'Hello Hotel Anjali Inn, I visited your website and would like to inquire about room stays, restaurant dining, or event bookings.',
    },
    footer: {
      navAria: 'Footer Navigation',
      tagline:
        'Restful stays, welcoming dining, and open-air lawns—crafted for every guest at Hotel Anjali Inn.',
      copyrightSuffix: 'Hotel Anjali Inn. Presentation Demo.',
      instagram: 'Instagram',
      googleProfile: 'Google Business Profile',
    },
    photos: {
      'ext-hero': {
        title: 'Hotel Anjali Inn Restaurant & Lawn',
        subtitle: 'Palm-lined facade with sunlit garden dining tables',
      },
      'ext-about-facade': {
        title: 'Landscaped Hotel Facade',
        subtitle: 'Manicured greenery welcoming guests to Hotel Anjali Inn',
      },
      'ext-arch-gate': {
        title: 'Hotel Anjali Inn Entrance Arch',
        subtitle: 'Grand courtyard entrance archway and stone walkway',
      },
      'ext-road-view': {
        title: 'Property Frontage',
        subtitle: 'Wide approach view of the Hotel Anjali Inn entrance',
      },
      'ext-reception-walk': {
        title: 'Reception Courtyard',
        subtitle: 'Paved promenade leading to the hotel reception',
      },
      'ext-balcony-detail': {
        title: 'Upper Balcony Wing',
        subtitle: 'Glass-railed balconies framed by tropical palms',
      },
      'ext-night-lights': {
        title: 'Evening Illuminated Facade',
        subtitle: 'Festive lights shimmering across the hotel exterior',
      },
      'ext-night-gathering': {
        title: 'Night Lawn Hospitality',
        subtitle: 'Evening dining and lawn celebrations under the lights',
      },
      'ext-garden-glow': {
        title: 'Illuminated Garden Palms',
        subtitle: 'Evening ambience across the manicured lawn',
      },
      'ext-event-lawn': {
        title: 'Expansive Event Lawn',
        subtitle: 'Open-air green grounds with guest parking access',
      },
      'room-signature-red': {
        title: 'Signature Suite',
        subtitle:
          'Spacious marble-floored suite with lounge seating and natural daylight',
      },
      'room-classic-deluxe': {
        title: 'Classic Deluxe Room',
        subtitle: 'Warm upholstered headboard, crisp linen, and bedside comfort',
      },
      'room-contemporary-teal': {
        title: 'Contemporary Guest Room',
        subtitle: 'Bright modern styling with recessed ceiling lighting',
      },
      'room-celebration-roses': {
        title: 'Celebration Room Arrangement',
        subtitle: 'Custom rose-petal and balloon decor for special milestones',
      },
      'room-celebration-canopy': {
        title: 'Fairy-Light Canopy Decor',
        subtitle: 'Bespoke birthday and anniversary room styling',
      },
      'room-celebration-petals': {
        title: 'Festive Suite Setup',
        subtitle: 'Prepared with fresh floral petals and celebratory accents',
      },
      'rest-dining-hall': {
        title: 'Main Restaurant Dining Hall',
        subtitle: 'Sunlit indoor dining room with warm golden ceiling contours',
      },
      'rest-chandelier-pavilion': {
        title: 'Chandelier Dining Pavilion',
        subtitle:
          'Outdoor draped dining tables with crystal chandeliers and floral settings',
      },
      'rest-banquet-canopy': {
        title: 'Grand Pavilion Seating',
        subtitle: 'Spacious family and celebration dining under festive canopies',
      },
      'rest-buffet-counter': {
        title: 'Live Catering & Buffet Pavilion',
        subtitle: 'Illuminated golden counters curated for grand feasts',
      },
      'food-thalis': {
        title: 'Gujarati Thali & Punjabi Thali',
        subtitle:
          'Traditional complete meal platters served with fresh accompaniments',
      },
      'food-curries': {
        title: 'Signature Curry Selection',
        subtitle: 'Richly spiced gravies finished with grated paneer and fresh herbs',
      },
      'food-skewers': {
        title: 'Crispy Starter Skewers',
        subtitle: 'Served hot with tangy red sauce and crisp shredded greens',
      },
      'food-panipuri': {
        title: 'Fresh Pani Puri Platter',
        subtitle: 'Crisp puris topped with sev and vibrant mint-coriander water',
      },
      'food-pizza': {
        title: 'Oven-Baked Cheese Pizza',
        subtitle: 'Golden crust topped with melted mozzarella and chilli flakes',
      },
      'food-fries': {
        title: 'Crispy Masala Fries',
        subtitle: 'Seasoned golden fries served with classic tomato dip',
      },
      'food-chai': {
        title: 'Kulhad Masala Chai',
        subtitle:
          'Aromatic spiced tea brewed with ginger, cardamom, cinnamon, and cloves',
      },
      'food-shakes': {
        title: 'Dry-Fruit Shakes & Lassi',
        subtitle:
          'Chilled creamy blends garnished with almonds, cashews, and cherries',
      },
      'food-cold-coffee': {
        title: 'Ice Cream Cold Coffee',
        subtitle:
          'Rich chocolate-swirled cold coffee crowned with ice cream and shavings',
      },
      'evt-lawn-stage': {
        title: 'Outdoor Wedding & Event Stage',
        subtitle: 'Floral-draped lawn stage set for grand celebrations',
      },
      'evt-grand-hall': {
        title: 'Grand Banquet & Conference Hall',
        subtitle: 'Air-conditioned indoor hall arranged for weddings and gatherings',
      },
      'evt-draped-hall': {
        title: 'Celebration Seating Hall',
        subtitle: 'Satin-accented banquet seating with main stage view',
      },
      'evt-party-stage': {
        title: 'Birthday & Milestone Hall',
        subtitle: 'Dedicated indoor stage for family festivities and parties',
      },
      'evt-marble-foyer': {
        title: 'Grand Marble Foyer',
        subtitle: 'Polished reception hall and buffet service corridor',
      },
      'evt-lobby-stairs': {
        title: 'Main Lobby & Reception',
        subtitle: 'Spacious arrival lounge connecting guest wings and banquet halls',
      },
      'evt-hospitality-lounge': {
        title: 'Welcome Lounge Corridor',
        subtitle: 'Quiet indoor seating adjacent to the main property entrance',
      },
    },
  },

  gu: {
    meta: {
      title: 'Hotel Anjali Inn — સ્ટે અને ડાઇનિંગ',
      description: 'Hotel Anjali Inn માટે પ્રીમિયમ હોટેલ અને રેસ્ટોરન્ટ હોસ્પિટાલિટી વેબસાઇટ.',
    },
    nav: {
      primaryLabel: 'મુખ્ય નેવિગેશન',
      mobileLabel: 'મોબાઇલ નેવિગેશન',
      home: 'હોમ',
      hotel: 'હોટેલ',
      rooms: 'રૂમ્સ',
      restaurant: 'રેસ્ટોરન્ટ',
      gallery: 'ગેલેરી',
      location: 'લોકેશન',
      reviews: 'રિવ્યુઝ',
      faq: 'પ્રશ્નો',
      contact: 'સંપર્ક',
      whatsappInquiry: 'WhatsApp પૂછપરછ',
      whatsappAria: 'WhatsApp પર પૂછપરછ કરો',
      whatsappTitle: 'WhatsApp કોન્શિયર્જ',
      instagramAria: 'Instagram પર Hotel Anjali Inn',
      openMenuAria: 'નેવિગેશન મેનૂ ખોલો',
      closeMenuAria: 'નેવિગેશન મેનૂ બંધ કરો',
      languageSelectorLabel: 'ભાષા પસંદ કરો',
      switchToDarkAria: 'ડાર્ક મોડ ચાલુ કરો',
      switchToLightAria: 'લાઇટ મોડ ચાલુ કરો',
      darkLabel: 'ડાર્ક',
      lightLabel: 'લાઇટ',
    },
    hero: {
      eyebrow: 'Hotel Anjali Inn · લૉન, સ્યુટ્સ અને ડાઇનિંગ',
      headline: 'હૂંફાળું આતિથ્ય, ખુલ્લા બગીચા અને યાદગાર ભોજન.',
      description:
        'Hotel Anjali Inn માં આપનું સ્વાગત છે—શાંત ગેસ્ટ રૂમ્સ, લીલાછમ ઓપન-એર ગાર્ડન લૉન અને પરિવારો તથા મુસાફરો માટે બનાવેલી જીવંત રેસ્ટોરન્ટનો સુંદર સંગમ.',
      exploreHotel: 'હોટેલ જુઓ',
      exploreRestaurant: 'રેસ્ટોરન્ટ જુઓ',
      cardEyebrow: 'Hotel Anjali Inn',
      cardTitle: 'રોકાણ · ભોજન · ઉજવણી',
      cardDescription:
        'એક જ સ્થળે આરામદાયક સ્યુટ્સ, ઇન્ડોર અને ગાર્ડન ડાઇનિંગ તેમજ વિશાળ બેન્ક્વેટ લૉન.',
    },
    about: {
      eyebrow: '૦૧ · Hotel Anjali Inn પરિચય',
      headline: 'આરામદાયક રોકાણ, સ્વાદિષ્ટ ભોજન અને ખુલ્લા લૉનનું સુંદર સ્થળ.',
      paragraph1:
        'લહેરાતા પામ વૃક્ષો અને સુવ્યવસ્થિત લીલા બગીચાથી સજ્જ Hotel Anjali Inn શાંતિપૂર્ણ ગેસ્ટ રૂમ્સ, પરિવારિક રેસ્ટોરન્ટ અને વિશાળ ઉજવણીના સ્થળોને એક સાથે રજૂ કરે છે.',
      paragraph2:
        'દિવસે સ્વાગત કરતી ભવ્ય પ્રવેશ કમાનથી લઈને સાંજની રોશનીથી ઝગમગતા ગાર્ડન સુધી, દરેક ખૂણો આરામ, ઉષ્મા અને યાદગાર મિલન માટે તૈયાર કરવામાં આવ્યો છે.',
      accommodationsLabel: 'રોકાણ વ્યવસ્થા',
      accommodationsValue: 'સ્યુટ્સ અને ડીલક્સ રૂમ્સ',
      hospitalityLabel: 'આતિથ્ય સેવા',
      hospitalityValue: 'રેસ્ટોરન્ટ અને ઇવેન્ટ લૉન',
      googleProfileLink: 'Google Business Profile',
      figPrefix: 'ચિત્ર',
    },
    rooms: {
      eyebrow: '૦૨ · હોટેલ અને રૂમ્સ',
      headline: 'શાંતિપૂર્ણ રૂમ્સ અને ખાસ ઉજવણીની સજાવટ.',
      filterAria: 'રૂમના ફોટા ફિલ્ટર કરો',
      tabs: {
        all: 'બધા રૂમ્સ',
        guest: 'ગેસ્ટ રૂમ્સ',
        celebration: 'ખાસ સજાવટ',
      },
      featuredSuiteTag: 'મુખ્ય સ્યુટ',
      featuredSuiteExtra:
        'વિશાળ જગ્યા, કુદરતી પ્રકાશવાળી બારીઓ, લાઉન્જ બેઠક અને શાંતિપૂર્ણ વાતાવરણ સાથે આરામદાયક રાત્રિ રોકાણ માટે.',
      inspectPhoto: 'રૂમનો ફોટો જુઓ',
      inquireCta: 'પૂછપરછ કરો',
      guestStayTag: 'ગેસ્ટ સ્ટે',
      specialEyebrow: 'ખાસ પ્રસંગ સજાવટ',
      specialHeadline: 'રોમેન્ટિક અને સેલિબ્રેશન રૂમ સેટઅપ',
      specialSubtitle:
        'વિનંતી મુજબ તાજા ફૂલોની પાંદડીઓ, લાઇટિંગ અને બલૂન સજાવટ.',
      celebrationDecorTag: 'સેલિબ્રેશન ડેકોર',
      viewPhotoPrefix: 'જુઓ:',
    },
    restaurant: {
      eyebrow: '૦૩ · રેસ્ટોરન્ટ અનુભવ',
      headline: 'ઇન્ડોર ડાઇનિંગની ઉષ્મા અને ખુલ્લા બગીચાની મિજબાની.',
      description:
        'Hotel Anjali Inn ની રેસ્ટોરન્ટ મહેમાનોનું સોનેરી સીલિંગવાળા તેજસ્વી ડાઇનિંગ હોલમાં સ્વાગત કરે છે—સાથે જ સાંજના મેળાવડા માટે આઉટડોર ઝૂમર પેવેલિયન અને લાઇવ બફે કાઉન્ટર પણ ઉપલબ્ધ છે.',
      quote:
        '“પરંપરાગત થાળી અને કુલ્હડ મસાલા ચા થી લઈને રોશની નીચે પરિવાર સાથેની ભવ્ય ઉજવણી સુધી.”',
      menuEyebrow: 'ભોજન અને પીણાંની ઝલક',
      menuHeadline: 'Hotel Anjali Inn ના રસોડામાંથી તાજું',
      filterAria: 'વાનગીઓ ફિલ્ટર કરો',
      tabs: {
        all: 'બધી વાનગીઓ',
        thalis: 'થાળી અને શાક',
        snacks: 'નાસ્તો અને સ્ટાર્ટર',
        beverages: 'ચા અને શેક',
      },
      viewDishPrefix: 'જુઓ:',
    },
    events: {
      eyebrow: '૦૪ · ઉજવણી અને બેન્ક્વેટ',
      headline: 'ભવ્ય લૉન, બેન્ક્વેટ હોલ અને રિસેપ્શન ફોયર.',
      description:
        'વિશાળ ઇન્ડોર હોલ, બગીચામાં સુંદર આઉટડોર સ્ટેજ અને સુશોભિત રિસેપ્શન ફોયર સાથે લગ્ન, પરિવારિક પ્રસંગો અને સમૂહ કાર્યક્રમો માટે ઉત્તમ સ્થળ.',
    },
    gallery: {
      eyebrow: '૦૫ · પ્રોપર્ટી ગેલેરી',
      headline: 'Hotel Anjali Inn નો દરેક ખૂણો.',
      tabs: {
        highlights: 'મેદાન અને ફોયર',
        exterior: 'બાહ્ય દૃશ્ય અને લૉન',
        rooms: 'રૂમ્સ અને સ્યુટ્સ',
        restaurant: 'રેસ્ટોરન્ટ',
        food: 'ભોજન અને પીણાં',
        events: 'બેન્ક્વેટ અને લોબી',
        all: 'બધા',
      },
      categories: {
        exterior: 'બાહ્ય દૃશ્ય અને મેદાન',
        rooms: 'રૂમ્સ અને સ્યુટ્સ',
        restaurant: 'રેસ્ટોરન્ટ અને ડાઇનિંગ',
        food: 'ભોજન અને પીણાં',
        events: 'બેન્ક્વેટ અને પ્રસંગો',
      },
      openLightboxPrefix: 'મોટા ફોટામાં જુઓ:',
      lightboxAria: 'ફોટો લાઇટબોક્સ',
      closeLightboxAria: 'લાઇટબોક્સ બંધ કરો',
      prevPhotoAria: 'અગાઉનો ફોટો',
      nextPhotoAria: 'આગળનો ફોટો',
    },
    reviews: {
      eyebrow: '૦૬ · ગ્રાહક પ્રતિભાવો (ડેમો ટેમ્પલેટ)',
      headline: 'મહેમાનોના અનુભવો અને ચકાસાયેલ રિવ્યુ પ્રદર્શન.',
      description:
        'Hotel Anjali Inn ની Google Business Profile પરથી ચકાસાયેલ રિવ્યુ બતાવવા માટે રચાયેલ. નીચેના બધા કાર્ડ વાસ્તવિક ગ્રાહક પ્રતિભાવો ઉમેરવા માટેના ડેમો પ્લેસહોલ્ડર છે.',
      sampleRatingLabel: 'નમૂના રેટિંગ સ્લોટ',
      sampleRatingAria: 'નમૂના 5-સ્ટાર પ્લેસહોલ્ડર સૂચક',
      showReviewAriaPrefix: 'ડેમો રિવ્યુ જુઓ',
      prevAria: 'અગાઉનો રિવ્યુ પ્લેસહોલ્ડર',
      nextAria: 'આગળનો રિવ્યુ પ્લેસહોલ્ડર',
      verifiedCtaText:
        'Hotel Anjali Inn ની Google Business Profile પર સીધા જ મહેમાનોના વાસ્તવિક રેટિંગ અને રિવ્યુ વાંચો.',
      verifiedCtaButton: 'Google રિવ્યુઝ ખોલો',
      slots: [
        {
          id: 'demo-stay',
          slotTag: 'ડેમો રિવ્યુ સ્લોટ · હોટેલ રોકાણ',
          templateQuote:
            '[ડેમો પ્લેસહોલ્ડર: Hotel Anjali Inn માં સ્યુટની સુવિધા, રૂમની સ્વચ્છતા અને રિસેપ્શનના ઉષ્માભર્યા આતિથ્ય અંગે મહેમાનનો ચકાસાયેલ પ્રતિભાવ અહીં ઉમેરો.]',
          reviewerPlaceholder: 'મહેમાનનું નામ (ડેમો પ્લેસહોલ્ડર)',
          contextPlaceholder: 'રૂમ રોકાણ · Google Business રિવ્યુ સાથે બદલો',
        },
        {
          id: 'demo-dining',
          slotTag: 'ડેમો રિવ્યુ સ્લોટ · રેસ્ટોરન્ટ ભોજન',
          templateQuote:
            '[ડેમો પ્લેસહોલ્ડર: ગુજરાતી અને પંજાબી થાળી, નાસ્તા, કુલ્હડ મસાલા ચા અને પરિવારિક ડાઇનિંગના અનુભવ અંગે ગ્રાહકનો પ્રતિભાવ અહીં ઉમેરો.]',
          reviewerPlaceholder: 'ભોજન ગ્રાહકનું નામ (ડેમો પ્લેસહોલ્ડર)',
          contextPlaceholder: 'રેસ્ટોરન્ટ મુલાકાત · Google Business રિવ્યુ સાથે બદલો',
        },
        {
          id: 'demo-events',
          slotTag: 'ડેમો રિવ્યુ સ્લોટ · બેન્ક્વેટ અને લૉન',
          templateQuote:
            '[ડેમો પ્લેસહોલ્ડર: લૉન ઉજવણી, બેન્ક્વેટ હોલ વ્યવસ્થા અને કેટરિંગ આતિથ્ય અંગે યજમાનનો ચકાસાયેલ પ્રતિભાવ અહીં ઉમેરો.]',
          reviewerPlaceholder: 'ઇવેન્ટ યજમાન (ડેમો પ્લેસહોલ્ડર)',
          contextPlaceholder: 'ઉજવણી યજમાન · Google Business રિવ્યુ સાથે બદલો',
        },
      ],
      reviewForm: {
        eyebrow: 'તમારો અનુભવ વહેંચો',
        title: 'મહેમાન રિવ્યુ લખો',
        subtitle:
          'Hotel Anjali Inn માં રોકાણ, પરિવારિક ભોજન કે ઉજવણી માટે મુલાકાત લીધી? નીચે તમારું સ્ટાર રેટિંગ અને પ્રતિભાવ શેર કરો.',
        nameLabel: 'મહેમાનનું નામ',
        namePlaceholder: 'તમારું પૂરું નામ લખો',
        ratingLabel: 'સ્ટાર રેટિંગ',
        ratingAria: '1 થી 5 સુધી સ્ટાર રેટિંગ પસંદ કરો',
        ratingPrompt: '1 થી 5 સ્ટાર પસંદ કરો',
        ratingLabels: ['સામાન્ય', 'સારું', 'ખૂબ સારું', 'યાદગાર', 'શ્રેષ્ઠ'],
        starAriaPrefix: 'રેટિંગ આપો',
        commentLabel: 'તમારો પ્રતિભાવ અને ટિપ્પણી',
        commentPlaceholder:
          'અમારા રૂમ્સ, રેસ્ટોરન્ટની વાનગીઓ, ગાર્ડન લૉન કે આતિથ્ય વિશે તમારો અનુભવ લખો...',
        charHint: 'ઓછામાં ઓછા 10 અક્ષરો લખો',
        submitButton: 'રિવ્યુ સબમિટ કરો',
        resetHint: 'સબમિટ કર્યા પછી ફોર્મ આપમેળે રીસેટ થઈ જશે.',
        successTitle: 'તમારો અનુભવ શેર કરવા બદલ આભાર',
        successMessage:
          'તમારો પ્રતિભાવ નીચે આ સત્ર માટે ઉમેરાઈ ગયો છે અને ફોર્મ રીસેટ થઈ ગયું છે.',
        errorName: 'કૃપા કરીને તમારું નામ દાખલ કરો (ઓછામાં ઓછા 2 અક્ષરો).',
        errorRating: 'કૃપા કરીને 1 થી 5 વચ્ચે સ્ટાર રેટિંગ પસંદ કરો.',
        errorComment: 'કૃપા કરીને ઓછામાં ઓછા 10 અક્ષરોનો પ્રતિભાવ લખો.',
        submittedSectionTitle: 'તાજેતરમાં ઉમેરાયેલ મહેમાન પ્રતિભાવો',
        submittedTag: 'મહેમાન પ્રતિભાવ · હમણાં ઉમેરાયેલ',
      },
    },
    faq: {
      eyebrow: '૦૭ · વારંવાર પૂછાતા પ્રશ્નો',
      headline: 'તમારી મુલાકાત માટે ઉપયોગી માહિતી.',
      description:
        'Hotel Anjali Inn ખાતે રોકાણ, રેસ્ટોરન્ટ ભોજન અને ઇવેન્ટ સ્થળો વિશે ઝડપી જવાબો મેળવો. એક સાથે એકથી વધુ પ્રશ્નો ખુલ્લા રાખી શકાય છે.',
      expandAll: 'બધા ખોલો',
      collapseAll: 'બધા બંધ કરો',
      items: [
        {
          id: 'faq-offerings',
          question: 'Hotel Anjali Inn કઈ જગ્યાઓ અને સુવિધાઓ પ્રદાન કરે છે?',
          answer:
            'Hotel Anjali Inn માં આરામદાયક ગેસ્ટ રૂમ્સ, ઇન્ડોર ડાઇનિંગ તથા ગાર્ડન લૉન બેઠક સાથેની ફેમિલી રેસ્ટોરન્ટ અને લગ્ન, જન્મદિવસ તથા સમૂહ પ્રસંગો માટે વિશાળ ઇન્ડોર અને આઉટડોર સ્થળો ઉપલબ્ધ છે.',
        },
        {
          id: 'faq-rooms',
          question: 'કયા રૂમ વિકલ્પો અને ખાસ સજાવટ ઉપલબ્ધ છે?',
          answer:
            'અહીં સિગ્નેચર સ્યુટ, ક્લાસિક ડીલક્સ રૂમ અને કન્ટેમ્પરરી ગેસ્ટ રૂમની સાથે પૂછપરછ પર ફૂલોની પાંદડીઓ, કેનોપી અને બલૂન સજાવટ સાથે ખાસ સેલિબ્રેશન રૂમ સ્ટાઇલિંગ પણ ઉપલબ્ધ છે.',
        },
        {
          id: 'faq-dining',
          question: 'રેસ્ટોરન્ટમાં કયા પ્રકારના ભોજનનો અનુભવ મળે છે?',
          answer:
            'મહેમાનો મુખ્ય ડાઇનિંગ હોલ, આઉટડોર ગાર્ડન લૉન અથવા ઝૂમર પેવેલિયનમાં ગુજરાતી અને પંજાબી થાળી, શાક, સ્ટાર્ટર અને ચાટ, બેક્ડ પિઝા, કુલ્હડ મસાલા ચા, ડ્રાય-ફ્રુટ શેક અને કોલ્ડ કોફીનો આનંદ માણી શકે છે.',
        },
        {
          id: 'faq-events',
          question: 'શું Hotel Anjali Inn માં ઉજવણી, બેન્ક્વેટ અને સમૂહ કાર્યક્રમો યોજી શકાય છે?',
          answer:
            'હા. Hotel Anjali Inn માં ફ્લોરલ સ્ટેજ સાથેનું ઓપન-એર ઇવેન્ટ લૉન, લાઇવ બફે અને કેટરિંગ કાઉન્ટર, ભવ્ય રિસેપ્શન ફોયર અને ઇન્ડોર એર-કન્ડિશન્ડ બેન્ક્વેટ હોલ ઉપલબ્ધ છે.',
        },
        {
          id: 'faq-directions',
          question: 'ચકાસાયેલ રસ્તો, સમય અને નવી માહિતી ક્યાંથી મળશે?',
          answer:
            'લોકેશન વિભાગમાં લિંક કરેલી Hotel Anjali Inn ની અધિકૃત Google Business Profile દ્વારા રસ્તો અને ગ્રાહક રિવ્યુ જોઈ શકાય છે, તથા Instagram પર @hotel._.anjali દ્વારા અપડેટ્સ મળે છે.',
        },
        {
          id: 'faq-inquiry',
          question: 'રોકાણ, ભોજન કે ઇવેન્ટ માટે પૂછપરછ કેવી રીતે કરવી?',
          answer:
            'તમે સંપર્ક વિભાગના ફોર્મ દ્વારા અથવા WhatsApp પૂછપરછ બટનનો ઉપયોગ કરીને રૂમ રોકાણ, રેસ્ટોરન્ટ ટેબલ કે ખાનગી ઉજવણી માટે પૂર્વ-તૈયાર સંદેશ સાથે પૂછપરછ મોકલી શકો છો.',
        },
      ],
    },
    locationContact: {
      locationEyebrow: '૦૮ · લોકેશન અને દિશા',
      locationHeadline: 'Hotel Anjali Inn સુધી પહોંચો.',
      locationDescription:
        'Hotel Anjali Inn ની અધિકૃત Google Business Profile દ્વારા સીધો રસ્તો, ગ્રાહક રિવ્યુ અને રૂટ માર્ગદર્શન મેળવો, અથવા Instagram પર નવી ઝલક જુઓ.',
      openGoogleMaps: 'Google Maps પર રસ્તો જુઓ',
      profileCardSub: 'Google Business Profile',
      viewProfile: 'પ્રોફાઇલ જુઓ',
      mapCardHeadline:
        'Google Maps સાથે સીધું જોડાયેલ ચકાસાયેલ લોકેશન અને રૂટ માર્ગદર્શન.',
      mapCardDescription:
        'સચોટ માહિતી માટે લાઇવ લોકેશન, સમય અને ટર્ન-બાય-ટર્ન દિશાઓ સીધી Hotel Anjali Inn ની અધિકૃત Google Business Profile માં ખૂલે છે.',
      mapCardTag1: 'હોટેલ અને રેસ્ટોરન્ટ',
      mapCardTag2: 'ચકાસાયેલ Google પ્રોફાઇલ',
      contactEyebrow: '૦૯ · સંપર્ક અને પૂછપરછ',
      contactHeadline: 'રોકાણનું આયોજન કરો અથવા ટેબલ બુક કરો.',
      contactDescription:
        'Hotel Anjali Inn ખાતે આગામી રોકાણ, પરિવારિક ભોજન કે આતિથ્ય વિશે કોઈ પ્રશ્ન છે? નીચે પૂછપરછ પ્રિવ્યૂ તૈયાર કરો અથવા અમારા અધિકૃત માધ્યમો દ્વારા જોડાઓ.',
      inquireWhatsApp: 'WhatsApp પર પૂછપરછ કરો',
      followInstagram: 'Instagram પર ફોલો કરો',
      googleMapsReviews: 'Google Maps અને રિવ્યુઝ',
      submittedTitle: 'પૂછપરછ પ્રિવ્યૂ તૈયાર છે',
      submittedBodyBefore: 'આભાર, ',
      submittedBodyMiddle: '. લાઇવ વેબસાઇટમાં તમારી આ ',
      submittedBodyAfter:
        ' સીધી Hotel Anjali Inn ના ફ્રન્ટ ડેસ્ક અથવા WhatsApp કોન્શિયર્જ પર મોકલવામાં આવશે.',
      sendAnother: 'બીજો સંદેશ મોકલો',
      inquiryTypeLabel: 'પૂછપરછનો પ્રકાર',
      topics: {
        stay: 'રોકાણ પૂછપરછ',
        dining: 'રેસ્ટોરન્ટ અને ભોજન',
        event: 'સમૂહ અથવા ઇવેન્ટ',
      },
      fullNameLabel: 'પૂરું નામ',
      fullNamePlaceholder: 'તમારું નામ',
      contactLabel: 'ફોન અથવા ઇમેઇલ',
      contactPlaceholder: 'અમે કેવી રીતે સંપર્ક કરીએ?',
      messageLabel: 'સંદેશ અને પસંદગીની તારીખો',
      messagePlaceholder:
        'તમારી રોકાણની તારીખો, મહેમાનોની સંખ્યા અથવા પ્રશ્નો લખો...',
      formError: 'કૃપા કરીને તમારું નામ, સંપર્ક વિગત અને સંદેશ દાખલ કરો.',
      demoNote:
        'પ્રેઝન્ટેશન ડેમો · કોઈ ઓટોમેટેડ પેમેન્ટ કે બુકિંગ ચાર્જ લેવાતો નથી.',
      previewInquiry: 'પૂછપરછ પ્રિવ્યૂ',
    },
    whatsappModal: {
      eyebrow: 'ડાયરેક્ટ કોન્શિયર્જ',
      title: 'WhatsApp પૂછપરછ',
      closeAria: 'WhatsApp સંવાદ બંધ કરો',
      selectTopicLabel: 'પૂછપરછનો વિષય પસંદ કરો',
      templates: [
        {
          id: 'stay',
          label: 'રૂમ રોકાણ',
          text: 'નમસ્તે Hotel Anjali Inn, હું રૂમની ઉપલબ્ધતા અને રોકાણની વિગતો વિશે પૂછપરછ કરવા માંગુ છું.',
        },
        {
          id: 'dining',
          label: 'રેસ્ટોરન્ટ ભોજન',
          text: 'નમસ્તે Hotel Anjali Inn, હું તમારી રેસ્ટોરન્ટમાં પરિવારિક ભોજન અને ટેબલ વિશે પૂછપરછ કરવા માંગુ છું.',
        },
        {
          id: 'event',
          label: 'ઇવેન્ટ અને બેન્ક્વેટ',
          text: 'નમસ્તે Hotel Anjali Inn, હું તમારા લૉન/હોલમાં ઉજવણી કે બેન્ક્વેટ યોજવા વિશે પૂછપરછ કરવા માંગુ છું.',
        },
      ],
      phoneLabel: 'Hotel Anjali Inn WhatsApp નંબર',
      phonePlaceholder: '+91 9724037610',
      phoneHint:
        'Hotel Anjali Inn નો ડાયરેક્ટ WhatsApp નંબર (+91 9724037610) પહેલેથી ઉમેરેલ છે.',
      messageLabel: 'સંદેશ',
      errorInvalidPhone:
        'WhatsApp ખોલવા માટે Hotel Anjali Inn નો 10–12 અંકનો નંબર (દેશ કોડ સહિત, દા.ત. 91...) દાખલ કરો.',
      cancel: 'રદ કરો',
      submit: 'WhatsApp ખોલો',
    },
    floating: {
      groupAria: 'ઝડપી સોશિયલ અને કોન્શિયર્જ ક્રિયાઓ',
      instagramAria: 'Instagram પર Hotel Anjali Inn ને ફોલો કરો',
      whatsappAria: 'WhatsApp પર Hotel Anjali Inn સાથે વાત કરો (+91 9724037610)',
      whatsappTitle: 'WhatsApp ચેટ · +91 9724037610',
      whatsappGreeting:
        'નમસ્તે Hotel Anjali Inn, મેં તમારી વેબસાઇટ જોઈ અને રૂમ રોકાણ, રેસ્ટોરન્ટ ભોજન અથવા ઇવેન્ટ બુકિંગ વિશે પૂછપરછ કરવા માંગુ છું.',
    },
    footer: {
      navAria: 'ફૂટર નેવિગેશન',
      tagline:
        'શાંત રોકાણ, આવકારદાયક ભોજન અને ખુલ્લા લૉન—Hotel Anjali Inn માં દરેક મહેમાન માટે.',
      copyrightSuffix: 'Hotel Anjali Inn. પ્રેઝન્ટેશન ડેમો.',
      instagram: 'Instagram',
      googleProfile: 'Google Business Profile',
    },
    photos: {
      'ext-hero': {
        title: 'Hotel Anjali Inn રેસ્ટોરન્ટ અને લૉન',
        subtitle: 'પામ વૃક્ષો અને સૂર્યપ્રકાશિત ગાર્ડન ડાઇનિંગ ટેબલ સાથેનું પરિસર',
      },
      'ext-about-facade': {
        title: 'સુશોભિત હોટેલ બાહ્ય દૃશ્ય',
        subtitle: 'Hotel Anjali Inn માં મહેમાનોનું સ્વાગત કરતી લીલોતરી',
      },
      'ext-arch-gate': {
        title: 'Hotel Anjali Inn પ્રવેશ કમાન',
        subtitle: 'ભવ્ય આંગણાની પ્રવેશ કમાન અને પથ્થરનો રસ્તો',
      },
      'ext-road-view': {
        title: 'પ્રોપર્ટી ફ્રન્ટેજ',
        subtitle: 'Hotel Anjali Inn પ્રવેશદ્વારનો વિશાળ નજારો',
      },
      'ext-reception-walk': {
        title: 'રિસેપ્શન કોર્ટયાર્ડ',
        subtitle: 'હોટેલ રિસેપ્શન તરફ દોરી જતો સુશોભિત રસ્તો',
      },
      'ext-balcony-detail': {
        title: 'અપર બાલ્કની વિંગ',
        subtitle: 'પામ વૃક્ષો વચ્ચે કાચની રેલિંગવાળી બાલ્કની',
      },
      'ext-night-lights': {
        title: 'સાંજની રોશનીથી સજ્જ પરિસર',
        subtitle: 'હોટેલની બહાર ઝગમગતી ઉત્સવી રોશની',
      },
      'ext-night-gathering': {
        title: 'રાત્રિ લૉન હોસ્પિટાલિટી',
        subtitle: 'રોશની નીચે સાંજનું ભોજન અને લૉન ઉજવણી',
      },
      'ext-garden-glow': {
        title: 'પ્રકાશિત ગાર્ડન પામ વૃક્ષો',
        subtitle: 'સુવ્યવસ્થિત લૉનમાં સાંજનું રમણીય વાતાવરણ',
      },
      'ext-event-lawn': {
        title: 'વિશાળ ઇવેન્ટ લૉન',
        subtitle: 'મહેમાન પાર્કિંગ સુવિધા સાથે ખુલ્લું લીલું મેદાન',
      },
      'room-signature-red': {
        title: 'સિગ્નેચર સ્યુટ',
        subtitle: 'માર્બલ ફ્લોર, લાઉન્જ બેઠક અને કુદરતી પ્રકાશવાળો વિશાળ સ્યુટ',
      },
      'room-classic-deluxe': {
        title: 'ક્લાસિક ડીલક્સ રૂમ',
        subtitle: 'આરામદાયક હેડબોર્ડ, સ્વચ્છ લિનન અને શાંત બેડસાઇડ સુવિધા',
      },
      'room-contemporary-teal': {
        title: 'કન્ટેમ્પરરી ગેસ્ટ રૂમ',
        subtitle: 'રિસેસ્ડ સીલિંગ લાઇટિંગ સાથે આધુનિક સજાવટ',
      },
      'room-celebration-roses': {
        title: 'સેલિબ્રેશન રૂમ સજાવટ',
        subtitle: 'ખાસ પ્રસંગો માટે ગુલાબની પાંદડીઓ અને બલૂન ડેકોરેશન',
      },
      'room-celebration-canopy': {
        title: 'ફેરી-લાઇટ કેનોપી ડેકોર',
        subtitle: 'જન્મદિવસ અને વર્ષગાંઠ માટે ખાસ રૂમ સ્ટાઇલિંગ',
      },
      'room-celebration-petals': {
        title: 'ઉત્સવી સ્યુટ સેટઅપ',
        subtitle: 'તાજા ફૂલોની પાંદડીઓ અને ઉજવણીના શણગાર સાથે તૈયાર',
      },
      'rest-dining-hall': {
        title: 'મુખ્ય રેસ્ટોરન્ટ ડાઇનિંગ હોલ',
        subtitle: 'સોનેરી સીલિંગ ડિઝાઇન સાથે તેજસ્વી ઇન્ડોર ડાઇનિંગ રૂમ',
      },
      'rest-chandelier-pavilion': {
        title: 'ઝૂમર ડાઇનિંગ પેવેલિયન',
        subtitle: 'ક્રિસ્ટલ ઝૂમર અને ફૂલોની સજાવટ સાથે આઉટડોર ડાઇનિંગ ટેબલ',
      },
      'rest-banquet-canopy': {
        title: 'ગ્રાન્ડ પેવેલિયન બેઠક',
        subtitle: 'ઉત્સવી કેનોપી નીચે વિશાળ પરિવારિક અને ઉજવણી ડાઇનિંગ',
      },
      'rest-buffet-counter': {
        title: 'લાઇવ કેટરિંગ અને બફે પેવેલિયન',
        subtitle: 'ભવ્ય મિજબાની માટે પ્રકાશિત સોનેરી કાઉન્ટર',
      },
      'food-thalis': {
        title: 'ગુજરાતી થાળી અને પંજાબી થાળી',
        subtitle: 'તાજા વ્યંજનો સાથે પરંપરાગત સંપૂર્ણ ભોજનની થાળી',
      },
      'food-curries': {
        title: 'સિગ્નેચર કરી સિલેક્શન',
        subtitle: 'છીણેલા પનીર અને તાજા મસાલાથી સજ્જ સ્વાદિષ્ટ ગ્રેવી',
      },
      'food-skewers': {
        title: 'ક્રિસ્પી સ્ટાર્ટર સ્ક્યુઅર્સ',
        subtitle: 'ચટપટી લાલ ચટણી અને તાજા સલાડ સાથે ગરમાગરમ પીરસાયેલ',
      },
      'food-panipuri': {
        title: 'તાજી પાણીપૂરી પ્લેટર',
        subtitle: 'સેવ અને ફુદીના-કોથમીરના તાજા પાણી સાથે ક્રિસ્પી પૂરી',
      },
      'food-pizza': {
        title: 'ઓવન-બેક્ડ ચીઝ પિઝા',
        subtitle: 'મોઝેરેલા ચીઝ અને ચિલી ફ્લેક્સ સાથે સોનેરી ક્રસ્ટ',
      },
      'food-fries': {
        title: 'ક્રિસ્પી મસાલા ફ્રાઇસ',
        subtitle: 'ક્લાસિક ટમેટા ડીપ સાથે મસાલેદાર સોનેરી ફ્રાઇસ',
      },
      'food-chai': {
        title: 'કુલ્હડ મસાલા ચા',
        subtitle: 'આદુ, એલચી, તજ અને લવિંગ સાથે ઉકાળેલી સુગંધિત ચા',
      },
      'food-shakes': {
        title: 'ડ્રાય-ફ્રુટ શેક અને લસ્સી',
        subtitle: 'બદામ, કાજુ અને ચેરીથી સજાવેલા ઠંડા ક્રીમી પીણાં',
      },
      'food-cold-coffee': {
        title: 'આઇસક્રીમ કોલ્ડ કોફી',
        subtitle: 'ચોકલેટ સ્વિર્લ અને આઇસક્રીમથી સજાવેલી સમૃદ્ધ કોલ્ડ કોફી',
      },
      'evt-lawn-stage': {
        title: 'આઉટડોર વેડિંગ અને ઇવેન્ટ સ્ટેજ',
        subtitle: 'ભવ્ય ઉજવણી માટે ફૂલોથી સજાવેલ લૉન સ્ટેજ',
      },
      'evt-grand-hall': {
        title: 'ગ્રાન્ડ બેન્ક્વેટ અને કોન્ફરન્સ હોલ',
        subtitle: 'લગ્ન અને મેળાવડા માટે એર-કન્ડિશન્ડ ઇન્ડોર હોલ',
      },
      'evt-draped-hall': {
        title: 'સેલિબ્રેશન બેઠક હોલ',
        subtitle: 'મુખ્ય સ્ટેજના દૃશ્ય સાથે સાટિન સજાવટવાળી બેન્ક્વેટ બેઠક',
      },
      'evt-party-stage': {
        title: 'જન્મદિવસ અને ખાસ પ્રસંગ હોલ',
        subtitle: 'પરિવારિક ઉત્સવો અને પાર્ટી માટે અલગ ઇન્ડોર સ્ટેજ',
      },
      'evt-marble-foyer': {
        title: 'ગ્રાન્ડ માર્બલ ફોયર',
        subtitle: 'ચમકદાર રિસેપ્શન હોલ અને બફે સર્વિસ કોરિડોર',
      },
      'evt-lobby-stairs': {
        title: 'મુખ્ય લોબી અને રિસેપ્શન',
        subtitle: 'ગેસ્ટ વિંગ્સ અને બેન્ક્વેટ હોલને જોડતું વિશાળ અરાઇવલ લાઉન્જ',
      },
      'evt-hospitality-lounge': {
        title: 'વેલકમ લાઉન્જ કોરિડોર',
        subtitle: 'મુખ્ય પ્રવેશદ્વારની નજીક શાંત ઇન્ડોર બેઠક વ્યવસ્થા',
      },
    },
  },

  hi: {
    meta: {
      title: 'Hotel Anjali Inn — स्टे एवं डाइनिंग',
      description: 'Hotel Anjali Inn के लिए प्रीमियम होटल और रेस्टोरेंट हॉस्पिटैलिटी वेबसाइट।',
    },
    nav: {
      primaryLabel: 'मुख्य नेविगेशन',
      mobileLabel: 'मोबाइल नेविगेशन',
      home: 'होम',
      hotel: 'होटल',
      rooms: 'रूम्स',
      restaurant: 'रेस्टोरेंट',
      gallery: 'गैलरी',
      location: 'लोकेशन',
      reviews: 'रिव्यूज़',
      faq: 'सवाल-जवाब',
      contact: 'संपर्क',
      whatsappInquiry: 'WhatsApp पूछताछ',
      whatsappAria: 'WhatsApp पर पूछताछ करें',
      whatsappTitle: 'WhatsApp कॉन्शियर्ज',
      instagramAria: 'Instagram पर Hotel Anjali Inn',
      openMenuAria: 'नेविगेशन मेनू खोलें',
      closeMenuAria: 'नेविगेशन मेनू बंद करें',
      languageSelectorLabel: 'भाषा चुनें',
      switchToDarkAria: 'डार्क मोड चालू करें',
      switchToLightAria: 'लाइट मोड चालू करें',
      darkLabel: 'डार्क',
      lightLabel: 'लाइट',
    },
    hero: {
      eyebrow: 'Hotel Anjali Inn · लॉन, सूइट्स और डाइनिंग',
      headline: 'आत्मीय आतिथ्य, खुले हरे लॉन और यादगार भोजन।',
      description:
        'Hotel Anjali Inn में आपका स्वागत है—शांत गेस्ट रूम्स, हरे-भरे ओपन-एयर गार्डन लॉन और यात्रियों व परिवारों के लिए बनाए गए जीवंत रेस्टोरेंट का सुंदर संगम।',
      exploreHotel: 'होटल देखें',
      exploreRestaurant: 'रेस्टोरेंट देखें',
      cardEyebrow: 'Hotel Anjali Inn',
      cardTitle: 'ठहराव · भोजन · उत्सव',
      cardDescription:
        'एक ही छत के नीचे आरामदायक सूइट्स, इनडोर व गार्डन डाइनिंग और विशाल बैंक्वेट लॉन।',
    },
    about: {
      eyebrow: '०१ · Hotel Anjali Inn परिचय',
      headline: 'ठहराव, स्वादिष्ट भोजन और खुले लॉन का स्वागतमय आशियाना।',
      paragraph1:
        'लहराते पाम पेड़ों और सजे-संवरे हरे लॉन से घिरा Hotel Anjali Inn आरामदायक अतिथि कक्षों, पारिवारिक रेस्टोरेंट और भव्य उत्सव स्थलों को एक साथ प्रस्तुत करता है।',
      paragraph2:
        'दिन में मेहमानों का स्वागत करते मेहराबदार प्रवेश द्वार से लेकर शाम की रोशनी से जगमगाते गार्डन तक, हर कोना सुकून, गरमाहट और सहज मिलन के लिए बनाया गया है।',
      accommodationsLabel: 'आवास व्यवस्था',
      accommodationsValue: 'सूइट्स और डीलक्स रूम्स',
      hospitalityLabel: 'आतिथ्य सेवा',
      hospitalityValue: 'रेस्टोरेंट और इवेंट लॉन',
      googleProfileLink: 'Google Business Profile',
      figPrefix: 'चित्र',
    },
    rooms: {
      eyebrow: '०२ · होटल और रूम्स',
      headline: 'सुखद कमरे और विशेष उत्सव सजावट।',
      filterAria: 'कमरे की तस्वीरें फ़िल्टर करें',
      tabs: {
        all: 'सभी रूम्स',
        guest: 'गेस्ट रूम्स',
        celebration: 'विशेष सजावट',
      },
      featuredSuiteTag: 'प्रमुख सूइट',
      featuredSuiteExtra:
        'विशाल स्थान, प्राकृतिक रोशनी वाली खिड़कियों, लाउंज सीटिंग और सुकूनभरे इंटीरियर के साथ आरामदायक ठहराव के लिए डिज़ाइन किया गया।',
      inspectPhoto: 'कमरे की तस्वीर देखें',
      inquireCta: 'पूछताछ करें',
      guestStayTag: 'गेस्ट स्टे',
      specialEyebrow: 'विशेष अवसर स्टाइलिंग',
      specialHeadline: 'रोमांटिक और सेलिब्रेशन रूम सेटअप',
      specialSubtitle:
        'अनुरोध पर ताज़े फूलों की पंखुड़ियों, लाइटिंग और गुब्बारों की सजावट।',
      celebrationDecorTag: 'सेलिब्रेशन डेकोर',
      viewPhotoPrefix: 'देखें:',
    },
    restaurant: {
      eyebrow: '०३ · रेस्टोरेंट अनुभव',
      headline: 'इनडोर डाइनिंग की गरमाहट और खुले बगीचे की दावत।',
      description:
        'Hotel Anjali Inn का रेस्टोरेंट सुनहरी छत वाले उजले, विशाल डाइनिंग हॉल में मेहमानों का स्वागत करता है—साथ ही शाम के आयोजनों के लिए आउटडोर झूमर मंडप और लाइव बुफे काउंटर भी हैं।',
      quote:
        '“पारंपरिक थाली और कुल्हड़ मसाला चाय से लेकर रोशनी के नीचे परिवार संग भव्य दावत तक।”',
      menuEyebrow: 'भोजन और पेय झलक',
      menuHeadline: 'Hotel Anjali Inn की रसोई से ताज़ा',
      filterAria: 'व्यंजन फ़िल्टर करें',
      tabs: {
        all: 'सभी व्यंजन',
        thalis: 'थाली और करी',
        snacks: 'स्नैक्स और स्टार्टर',
        beverages: 'चाय और शेक',
      },
      viewDishPrefix: 'देखें:',
    },
    events: {
      eyebrow: '०४ · उत्सव और बैंक्वेट',
      headline: 'भव्य लॉन, बैंक्वेट हॉल और रिसेप्शन फ़ोयर।',
      description:
        'शादियों, पारिवारिक समारोहों और सामूहिक आयोजनों के लिए विशाल इनडोर हॉल, सजे हुए आउटडोर स्टेज और आकर्षक रिसेप्शन फ़ोयर की सुविधा।',
    },
    gallery: {
      eyebrow: '०५ · प्रॉपर्टी गैलरी',
      headline: 'Hotel Anjali Inn का हर कोना।',
      tabs: {
        highlights: 'लॉन और फ़ोयर',
        exterior: 'बाहरी दृश्य और लॉन',
        rooms: 'रूम्स और सूइट्स',
        restaurant: 'रेस्टोरेंट',
        food: 'भोजन और पेय',
        events: 'बैंक्वेट और लॉबी',
        all: 'सभी',
      },
      categories: {
        exterior: 'बाहरी दृश्य और लॉन',
        rooms: 'रूम्स और सूइट्स',
        restaurant: 'रेस्टोरेंट और डाइनिंग',
        food: 'भोजन और पेय',
        events: 'बैंक्वेट और आयोजन',
      },
      openLightboxPrefix: 'बड़ी तस्वीर देखें:',
      lightboxAria: 'फ़ोटोग्राफ़ लाइटबॉक्स',
      closeLightboxAria: 'लाइटबॉक्स बंद करें',
      prevPhotoAria: 'पिछली तस्वीर',
      nextPhotoAria: 'अगली तस्वीर',
    },
    reviews: {
      eyebrow: '०६ · ग्राहक समीक्षाएं (डेमो टेम्पलेट)',
      headline: 'अतिथि अनुभव और सत्यापित समीक्षा प्रदर्शनी।',
      description:
        'Hotel Anjali Inn की Google Business Profile से सत्यापित समीक्षाएं दिखाने के लिए तैयार। नीचे दिए गए सभी कार्ड वास्तविक ग्राहक प्रतिक्रिया जोड़ने के लिए स्पष्ट डेमो प्लेसहोल्डर हैं।',
      sampleRatingLabel: 'नमूना रेटिंग स्लॉट',
      sampleRatingAria: 'नमूना 5-स्टार प्लेसहोल्डर संकेतक',
      showReviewAriaPrefix: 'डेमो समीक्षा देखें',
      prevAria: 'पिछला समीक्षा प्लेसहोल्डर',
      nextAria: 'अगला समीक्षा प्लेसहोल्डर',
      verifiedCtaText:
        'Hotel Anjali Inn की Google Business Profile पर सीधे मेहमानों की वास्तविक रेटिंग और समीक्षाएं पढ़ें।',
      verifiedCtaButton: 'Google समीक्षाएं खोलें',
      slots: [
        {
          id: 'demo-stay',
          slotTag: 'डेमो समीक्षा स्लॉट · होटल ठहराव',
          templateQuote:
            '[डेमो प्लेसहोल्डर: Hotel Anjali Inn में सूइट के आराम, कमरों की स्वच्छता और रिसेप्शन के आतिथ्य को दर्शाती हुई सत्यापित अतिथि समीक्षा यहां जोड़ें।]',
          reviewerPlaceholder: 'अतिथि का नाम (डेमो प्लेसहोल्डर)',
          contextPlaceholder: 'रूम ठहराव · Google Business समीक्षा से बदलें',
        },
        {
          id: 'demo-dining',
          slotTag: 'डेमो समीक्षा स्लॉट · रेस्टोरेंट भोजन',
          templateQuote:
            '[डेमो प्लेसहोल्डर: गुजराती व पंजाबी थाली, स्नैक्स, कुल्हड़ मसाला चाय और पारिवारिक डाइनिंग वातावरण के अनुभव पर समीक्षा यहां जोड़ें।]',
          reviewerPlaceholder: 'भोजन अतिथि का नाम (डेमो प्लेसहोल्डर)',
          contextPlaceholder: 'रेस्टोरेंट विज़िट · Google Business समीक्षा से बदलें',
        },
        {
          id: 'demo-events',
          slotTag: 'डेमो समीक्षा स्लॉट · बैंक्वेट और लॉन',
          templateQuote:
            '[डेमो प्लेसहोल्डर: लॉन समारोह, बैंक्वेट हॉल व्यवस्था और कैटरिंग आतिथ्य पर मेज़बान की सत्यापित समीक्षा यहां जोड़ें।]',
          reviewerPlaceholder: 'आयोजन मेज़बान (डेमो प्लेसहोल्डर)',
          contextPlaceholder: 'उत्सव मेज़बान · Google Business समीक्षा से बदलें',
        },
      ],
      reviewForm: {
        eyebrow: 'अपना अनुभव साझा करें',
        title: 'अतिथि समीक्षा लिखें',
        subtitle:
          'क्या आपने Hotel Anjali Inn में ठहराव, पारिवारिक डाइनिंग या उत्सव का अनुभव किया? नीचे अपनी स्टार रेटिंग और टिप्पणी साझा करें।',
        nameLabel: 'अतिथि का नाम',
        namePlaceholder: 'अपना पूरा नाम दर्ज करें',
        ratingLabel: 'स्टार रेटिंग',
        ratingAria: '1 से 5 तक स्टार रेटिंग चुनें',
        ratingPrompt: '1 से 5 स्टार चुनें',
        ratingLabels: ['सामान्य', 'अच्छा', 'बहुत अच्छा', 'यादगार', 'उत्कृष्ट'],
        starAriaPrefix: 'रेटिंग दें',
        commentLabel: 'आपकी समीक्षा और टिप्पणी',
        commentPlaceholder:
          'हमारे कमरों, रेस्टोरेंट के व्यंजनों, गार्डन लॉन या आतिथ्य के बारे में अपने विचार लिखें...',
        charHint: 'कम से कम 10 अक्षर लिखें',
        submitButton: 'समीक्षा सबमिट करें',
        resetHint: 'सबमिट करने के बाद फ़ॉर्म अपने आप रीसेट हो जाएगा।',
        successTitle: 'अपना अनुभव साझा करने के लिए धन्यवाद',
        successMessage:
          'आपकी समीक्षा नीचे इस सत्र के लिए जोड़ दी गई है और फ़ॉर्म रीसेट कर दिया गया है।',
        errorName: 'कृपया अपना नाम दर्ज करें (कम से कम 2 अक्षर)।',
        errorRating: 'कृपया 1 से 5 के बीच एक स्टार रेटिंग चुनें।',
        errorComment: 'कृपया कम से कम 10 अक्षरों की संक्षिप्त टिप्पणी लिखें।',
        submittedSectionTitle: 'हाल की अतिथि समीक्षाएं (सत्र प्रीव्यू)',
        submittedTag: 'अतिथि समीक्षा · अभी जोड़ी गई',
      },
    },
    faq: {
      eyebrow: '०७ · अक्सर पूछे जाने वाले प्रश्न',
      headline: 'आपकी यात्रा के लिए उपयोगी जानकारी।',
      description:
        'Hotel Anjali Inn में ठहराव, रेस्टोरेंट भोजन और इवेंट स्थलों से जुड़े त्वरित उत्तर देखें। एक साथ कई प्रश्न खुले रखे जा सकते हैं।',
      expandAll: 'सभी खोलें',
      collapseAll: 'सभी बंद करें',
      items: [
        {
          id: 'faq-offerings',
          question: 'Hotel Anjali Inn में कौन-कौन से स्थान और अनुभव उपलब्ध हैं?',
          answer:
            'Hotel Anjali Inn में आरामदायक गेस्ट रूम्स, इनडोर डाइनिंग और गार्डन लॉन बैठने की व्यवस्था वाला पारिवारिक रेस्टोरेंट तथा शादियों, जन्मदिन और सामूहिक आयोजनों के लिए विशाल इनडोर व आउटडोर स्थल उपलब्ध हैं।',
        },
        {
          id: 'faq-rooms',
          question: 'कौन-से कमरों के विकल्प और विशेष सजावट उपलब्ध हैं?',
          answer:
            'यहां सिग्नेचर सूइट, क्लासिक डीलक्स रूम और कंटेम्परेरी गेस्ट रूम के साथ-साथ पूछताछ पर फूलों की पंखुड़ियों, कैनोपी और गुब्बारों से सजाया गया विशेष सेलिब्रेशन रूम सेटअप भी उपलब्ध है।',
        },
        {
          id: 'faq-dining',
          question: 'रेस्टोरेंट में किस प्रकार के भोजन का अनुभव मिलता है?',
          answer:
            'मेहमान मुख्य डाइनिंग हॉल, आउटडोर गार्डन लॉन या झूमर मंडप में गुजराती और पंजाबी थाली, स्वादिष्ट करी, स्टार्टर व चाट, बेक्ड पिज़्ज़ा, कुल्हड़ मसाला चाय, ड्राई-फ्रूट शेक और कोल्ड कॉफ़ी का आनंद ले सकते हैं।',
        },
        {
          id: 'faq-events',
          question: 'क्या Hotel Anjali Inn में उत्सव, बैंक्वेट और सामूहिक कार्यक्रम आयोजित किए जा सकते हैं?',
          answer:
            'जी हां। Hotel Anjali Inn में फ्लोरल स्टेज वाला ओपन-एयर इवेंट लॉन, लाइव बुफे और कैटरिंग काउंटर, भव्य रिसेप्शन फ़ोयर और इनडोर एयर-कंडीशन्ड बैंक्वेट हॉल उपलब्ध हैं।',
        },
        {
          id: 'faq-directions',
          question: 'सत्यापित लोकेशन, समय और नए अपडेट्स कहां से मिलेंगे?',
          answer:
            'लोकेशन अनुभाग में दिए गए Hotel Anjali Inn के आधिकारिक Google Business Profile लिंक से दिशा-निर्देश और समीक्षाएं देखी जा सकती हैं, तथा Instagram पर @hotel._.anjali से ताज़ा अपडेट मिलते हैं।',
        },
        {
          id: 'faq-inquiry',
          question: 'ठहराव, डाइनिंग या इवेंट के लिए पूछताछ कैसे करें?',
          answer:
            'आप संपर्क अनुभाग के फ़ॉर्म के माध्यम से या WhatsApp पूछताछ बटन का उपयोग करके कमरों, रेस्टोरेंट टेबल या निजी समारोहों के लिए पहले से तैयार संदेश के साथ पूछताछ भेज सकते हैं।',
        },
      ],
    },
    locationContact: {
      locationEyebrow: '०८ · लोकेशन और दिशा-निर्देश',
      locationHeadline: 'Hotel Anjali Inn तक पहुंचें।',
      locationDescription:
        'Hotel Anjali Inn की आधिकारिक Google Business Profile से सत्यापित दिशा-निर्देश, ग्राहक समीक्षाएं और रूट मार्गदर्शन प्राप्त करें, या Instagram पर ताज़ा अपडेट देखें।',
      openGoogleMaps: 'Google Maps पर रास्ता खोलें',
      profileCardSub: 'Google Business Profile',
      viewProfile: 'प्रोफ़ाइल देखें',
      mapCardHeadline:
        'Google Maps से सीधे जुड़ी सत्यापित लोकेशन और रूट नेविगेशन।',
      mapCardDescription:
        'पूर्ण सटीकता बनाए रखने के लिए, लाइव निर्देशांक, खुलने का समय और टर्न-बाय-टर्न दिशाएं सीधे Hotel Anjali Inn की आधिकारिक Google Business Profile में खुलती हैं।',
      mapCardTag1: 'होटल एवं रेस्टोरेंट',
      mapCardTag2: 'सत्यापित Google प्रोफ़ाइल',
      contactEyebrow: '०९ · संपर्क एवं पूछताछ',
      contactHeadline: 'ठहराव की योजना बनाएं या टेबल आरक्षित करें।',
      contactDescription:
        'Hotel Anjali Inn में आगामी ठहराव, पारिवारिक डाइनिंग या आतिथ्य के बारे में कोई प्रश्न है? नीचे पूछताछ प्रीव्यू भेजें या हमारे आधिकारिक माध्यमों से संपर्क करें।',
      inquireWhatsApp: 'WhatsApp पर पूछताछ करें',
      followInstagram: 'Instagram पर फ़ॉलो करें',
      googleMapsReviews: 'Google Maps और समीक्षाएं',
      submittedTitle: 'पूछताछ प्रीव्यू तैयार है',
      submittedBodyBefore: 'धन्यवाद, ',
      submittedBodyMiddle: '। लाइव वेबसाइट में आपकी यह ',
      submittedBodyAfter:
        ' सीधे Hotel Anjali Inn के फ्रंट डेस्क या WhatsApp कॉन्शियर्ज तक भेजी जाएगी।',
      sendAnother: 'एक और संदेश भेजें',
      inquiryTypeLabel: 'पूछताछ का प्रकार',
      topics: {
        stay: 'ठहराव पूछताछ',
        dining: 'रेस्टोरेंट और डाइनिंग',
        event: 'समूह या इवेंट',
      },
      fullNameLabel: 'पूरा नाम',
      fullNamePlaceholder: 'आपका नाम',
      contactLabel: 'फ़ोन या ईमेल',
      contactPlaceholder: 'हम आपसे कैसे संपर्क करें?',
      messageLabel: 'संदेश और पसंदीदा तिथियां',
      messagePlaceholder:
        'अपनी पसंदीदा तिथियां, मेहमानों की संख्या या प्रश्न लिखें...',
      formError: 'कृपया अपना नाम, संपर्क विवरण और संदेश दर्ज करें।',
      demoNote:
        'प्रेज़ेंटेशन डेमो · कोई स्वचालित भुगतान या बुकिंग शुल्क नहीं लिया जाता।',
      previewInquiry: 'पूछताछ प्रीव्यू',
    },
    whatsappModal: {
      eyebrow: 'डायरेक्ट कॉन्शियर्ज',
      title: 'WhatsApp पूछताछ',
      closeAria: 'WhatsApp डायलॉग बंद करें',
      selectTopicLabel: 'पूछताछ का विषय चुनें',
      templates: [
        {
          id: 'stay',
          label: 'रूम ठहराव',
          text: 'नमस्ते Hotel Anjali Inn, मैं कमरों की उपलब्धता और ठहराव के विवरण के बारे में पूछताछ करना चाहता/चाहती हूं।',
        },
        {
          id: 'dining',
          label: 'रेस्टोरेंट डाइनिंग',
          text: 'नमस्ते Hotel Anjali Inn, मैं आपके रेस्टोरेंट में पारिवारिक भोजन और टेबल उपलब्धता के बारे में पूछताछ करना चाहता/चाहती हूं।',
        },
        {
          id: 'event',
          label: 'इवेंट और बैंक्वेट',
          text: 'नमस्ते Hotel Anjali Inn, मैं आपके लॉन/हॉल में समारोह या बैंक्वेट आयोजित करने के बारे में पूछताछ करना चाहता/चाहती हूं।',
        },
      ],
      phoneLabel: 'Hotel Anjali Inn WhatsApp नंबर',
      phonePlaceholder: '+91 9724037610',
      phoneHint:
        'Hotel Anjali Inn का डायरेक्ट WhatsApp नंबर (+91 9724037610) पहले से भरा हुआ है।',
      messageLabel: 'संदेश',
      errorInvalidPhone:
        'WhatsApp खोलने के लिए Hotel Anjali Inn का 10–12 अंकों का नंबर (देश कोड सहित, जैसे 91...) दर्ज करें।',
      cancel: 'रद्द करें',
      submit: 'WhatsApp खोलें',
    },
    floating: {
      groupAria: 'त्वरित सोशल और कॉन्शियर्ज विकल्प',
      instagramAria: 'Instagram पर Hotel Anjali Inn को फ़ॉलो करें',
      whatsappAria: 'WhatsApp पर Hotel Anjali Inn से चैट करें (+91 9724037610)',
      whatsappTitle: 'WhatsApp चैट · +91 9724037610',
      whatsappGreeting:
        'नमस्ते Hotel Anjali Inn, मैंने आपकी वेबसाइट देखी और मैं कमरे, रेस्टोरेंट डाइनिंग या इवेंट बुकिंग के बारे में पूछताछ करना चाहता/चाहती हूं।',
    },
    footer: {
      navAria: 'फ़ुटर नेविगेशन',
      tagline:
        'सुकूनभरा ठहराव, स्वागतमय भोजन और खुले लॉन—Hotel Anjali Inn में हर अतिथि के लिए।',
      copyrightSuffix: 'Hotel Anjali Inn. प्रेज़ेंटेशन डेमो।',
      instagram: 'Instagram',
      googleProfile: 'Google Business Profile',
    },
    photos: {
      'ext-hero': {
        title: 'Hotel Anjali Inn रेस्टोरेंट और लॉन',
        subtitle: 'ताड़ के पेड़ों और धूप से सजे गार्डन डाइनिंग टेबल वाला परिसर',
      },
      'ext-about-facade': {
        title: 'सजा हुआ होटल बाहरी दृश्य',
        subtitle: 'Hotel Anjali Inn में मेहमानों का स्वागत करती हरियाली',
      },
      'ext-arch-gate': {
        title: 'Hotel Anjali Inn प्रवेश द्वार',
        subtitle: 'भव्य आंगन प्रवेश मेहराब और पक्का मार्ग',
      },
      'ext-road-view': {
        title: 'प्रॉपर्टी फ्रंटेज',
        subtitle: 'Hotel Anjali Inn प्रवेश द्वार का विस्तृत दृश्य',
      },
      'ext-reception-walk': {
        title: 'रिसेप्शन कोर्टयार्ड',
        subtitle: 'होटल रिसेप्शन की ओर जाने वाला पक्का मार्ग',
      },
      'ext-balcony-detail': {
        title: 'ऊपरी बालकनी विंग',
        subtitle: 'ताड़ के पेड़ों से घिरी कांच की रेलिंग वाली बालकनी',
      },
      'ext-night-lights': {
        title: 'शाम की रोशनी से सजा परिसर',
        subtitle: 'होटल के बाहरी हिस्से में जगमगाती उत्सव की रोशनी',
      },
      'ext-night-gathering': {
        title: 'रात्रि लॉन आतिथ्य',
        subtitle: 'रोशनी के नीचे शाम का भोजन और लॉन समारोह',
      },
      'ext-garden-glow': {
        title: 'रोशनी से सजे गार्डन पाम',
        subtitle: 'सुव्यवस्थित लॉन में शाम का मनमोहक माहौल',
      },
      'ext-event-lawn': {
        title: 'विशाल इवेंट लॉन',
        subtitle: 'मेहमान पार्किंग सुविधा के साथ खुला हरा मैदान',
      },
      'room-signature-red': {
        title: 'सिग्नेचर सूइट',
        subtitle: 'मार्बल फ़्लोर, लाउंज सीटिंग और प्राकृतिक रोशनी वाला विशाल सूइट',
      },
      'room-classic-deluxe': {
        title: 'क्लासिक डीलक्स रूम',
        subtitle: 'आरामदायक हेडबोर्ड, साफ लिनन और शांत बेडसाइड सुविधा',
      },
      'room-contemporary-teal': {
        title: 'कंटेम्परेरी गेस्ट रूम',
        subtitle: 'रिसेस्ड सीलिंग लाइटिंग के साथ आधुनिक उजला इंटीरियर',
      },
      'room-celebration-roses': {
        title: 'सेलिब्रेशन रूम सजावट',
        subtitle: 'खास अवसरों के लिए गुलाब की पंखुड़ियों और गुब्बारों की सजावट',
      },
      'room-celebration-canopy': {
        title: 'फेयरी-लाइट कैनोपी डेकोर',
        subtitle: 'जन्मदिन और सालगिरह के लिए विशेष रूम स्टाइलिंग',
      },
      'room-celebration-petals': {
        title: 'उत्सव सूइट सेटअप',
        subtitle: 'ताज़े फूलों की पंखुड़ियों और उत्सव के शृंगार से तैयार',
      },
      'rest-dining-hall': {
        title: 'मुख्य रेस्टोरेंट डाइनिंग हॉल',
        subtitle: 'सुनहरी छत की डिज़ाइन वाला उजला इनडोर डाइनिंग हॉल',
      },
      'rest-chandelier-pavilion': {
        title: 'झूमर डाइनिंग मंडप',
        subtitle: 'क्रिस्टल झूमर और फूलों की सजावट वाले आउटडोर डाइनिंग टेबल',
      },
      'rest-banquet-canopy': {
        title: 'ग्रैंड मंडप सीटिंग',
        subtitle: 'उत्सव कैनोपी के नीचे विशाल पारिवारिक और समारोह डाइनिंग',
      },
      'rest-buffet-counter': {
        title: 'लाइव कैटरिंग और बुफे मंडप',
        subtitle: 'भव्य दावतों के लिए रोशनी से सजे सुनहरे काउंटर',
      },
      'food-thalis': {
        title: 'गुजराती थाली और पंजाबी थाली',
        subtitle: 'ताज़ा संगत के साथ परोसी जाने वाली पारंपरिक संपूर्ण थाली',
      },
      'food-curries': {
        title: 'सिग्नेचर करी सिलेक्शन',
        subtitle: 'कद्दूकस पनीर और ताज़ा मसालों से सजी स्वादिष्ट ग्रेवी',
      },
      'food-skewers': {
        title: 'क्रिस्पी स्टार्टर स्क्यूअर्स',
        subtitle: 'चटपटी लाल चटनी और ताज़ा सलाद के साथ गरमागरम परोसा गया',
      },
      'food-panipuri': {
        title: 'ताज़ा पानीपूरी प्लैटर',
        subtitle: 'सेव और ताज़ा पुदीना-धनिया पानी के साथ क्रिस्पी पूरियां',
      },
      'food-pizza': {
        title: 'ओवन-बेक्ड चीज़ पिज़्ज़ा',
        subtitle: 'पिघले मोज़ेरेला और चिली फ्लेक्स के साथ सुनहरा क्रस्ट',
      },
      'food-fries': {
        title: 'क्रिस्पी मसाला फ्राइज़',
        subtitle: 'क्लासिक टमाटर डिप के साथ मसालेदार सुनहरे फ्राइज़',
      },
      'food-chai': {
        title: 'कुल्हड़ मसाला चाय',
        subtitle: 'अदरक, इलायची, दालचीनी और लौंग के साथ बनी खुशबूदार चाय',
      },
      'food-shakes': {
        title: 'ड्राई-फ्रूट शेक और लस्सी',
        subtitle: 'बादाम, काजू और चेरी से सजे ठंडे क्रीमी पेय',
      },
      'food-cold-coffee': {
        title: 'आइसक्रीम कोल्ड कॉफ़ी',
        subtitle: 'चॉकलेट स्वर्ल और आइसक्रीम से सजी रिच कोल्ड कॉफ़ी',
      },
      'evt-lawn-stage': {
        title: 'आउटडोर वेडिंग और इवेंट स्टेज',
        subtitle: 'भव्य समारोहों के लिए फूलों से सजा लॉन स्टेज',
      },
      'evt-grand-hall': {
        title: 'ग्रैंड बैंक्वेट और कॉन्फ्रेंस हॉल',
        subtitle: 'शादियों और आयोजनों के लिए एयर-कंडीशन्ड इनडोर हॉल',
      },
      'evt-draped-hall': {
        title: 'सेलिब्रेशन सीटिंग हॉल',
        subtitle: 'मुख्य स्टेज के दृश्य के साथ साटन सजावट वाली बैंक्वेट सीटिंग',
      },
      'evt-party-stage': {
        title: 'जन्मदिन और विशेष अवसर हॉल',
        subtitle: 'पारिवारिक उत्सवों और पार्टियों के लिए समर्पित इनडोर स्टेज',
      },
      'evt-marble-foyer': {
        title: 'ग्रैंड मार्बल फ़ोयर',
        subtitle: 'चमकदार रिसेप्शन हॉल और बुफे सर्विस कॉरिडोर',
      },
      'evt-lobby-stairs': {
        title: 'मुख्य लॉबी और रिसेप्शन',
        subtitle: 'गेस्ट विंग्स और बैंक्वेट हॉल को जोड़ता विशाल अराइवल लाउंज',
      },
      'evt-hospitality-lounge': {
        title: 'वेलकम लाउंज कॉरिडोर',
        subtitle: 'मुख्य प्रवेश द्वार के पास शांत इनडोर बैठने की जगह',
      },
    },
  },
};
