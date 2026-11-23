import {HotelPhoto, PhotoSection} from '../types/media';

const DB_NAME = 'hotel_anjali_studio';
const STORE_NAME = 'photos';
const DB_VERSION = 1;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {keyPath: 'id'});
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function loadSavedPhotos(): Promise<HotelPhoto[]> {
  try {
    const db = await openDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const items = (req.result as HotelPhoto[]) || [];
        resolve(items.sort((a, b) => a.addedAt - b.addedAt));
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    return [];
  }
}

export async function savePhoto(photo: HotelPhoto): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(photo);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function deleteSavedPhoto(id: string): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function clearAllSavedPhotos(): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Infers the best initial section from filename keywords when files are batch-dropped,
 * falling back cleanly across empty slots so every uploaded image is placed purposefully.
 */
export function inferPhotoSection(
  fileName: string,
  existingCounts: Record<PhotoSection, number>,
): PhotoSection {
  const lower = fileName.toLowerCase();

  if (/(exterior|facade|front|building|entrance|night|hotel|view|lobby)/.test(lower)) {
    return existingCounts.hero === 0 ? 'hero' : existingCounts.about === 0 ? 'about' : 'gallery';
  }
  if (/(room|suite|bed|deluxe|stay|accommodation|interior_room)/.test(lower)) {
    return 'rooms';
  }
  if (/(food|dish|thali|curry|biryani|dessert|plate|meal|starter|drink|chai|coffee|breakfast|lunch|dinner)/.test(lower)) {
    return 'food';
  }
  if (/(restaurant|dining|table|cafe|seating|hall|ambience|kitchen|bar)/.test(lower)) {
    return 'restaurant';
  }

  // Balanced automatic assignment when filenames are generic (e.g. IMG_1234.jpg)
  const order: PhotoSection[] = ['hero', 'about', 'rooms', 'restaurant', 'food', 'gallery'];
  for (const candidate of order) {
    const limit = candidate === 'hero' || candidate === 'about' ? 1 : 2;
    if (existingCounts[candidate] < limit) {
      return candidate;
    }
  }
  return 'gallery';
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
