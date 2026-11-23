export type PhotoSection =
  | 'hero'
  | 'about'
  | 'rooms'
  | 'restaurant'
  | 'food'
  | 'gallery';

export interface HotelPhoto {
  id: string;
  name: string;
  section: PhotoSection;
  dataUrl: string;
  caption?: string;
  addedAt: number;
}

export const SECTION_LABELS: Record<PhotoSection, string> = {
  hero: 'Hero & Exterior',
  about: 'Property Story',
  rooms: 'Stay & Rooms',
  restaurant: 'Restaurant Space',
  food: 'Culinary Showcase',
  gallery: 'Property Gallery',
};

export const BUSINESS_LINKS = {
  name: 'Hotel Anjali',
  instagramUrl: 'https://www.instagram.com/hotel._.anjali',
  instagramHandle: '@hotel._.anjali',
  googleMapsUrl: 'https://share.google/9LBKvZnQKRhNv9Ad3',
} as const;
