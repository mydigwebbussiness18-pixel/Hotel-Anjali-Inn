import {MotionConfig} from 'motion/react';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {Footer} from './components/Footer';
import {GallerySection} from './components/GallerySection';
import {Hero} from './components/Hero';
import {LocationContactSection} from './components/LocationContactSection';
import {Navbar} from './components/Navbar';
import {PhotoStudioDrawer} from './components/PhotoStudioDrawer';
import {RestaurantSection} from './components/RestaurantSection';
import {RoomsSection} from './components/RoomsSection';
import {HotelPhoto, PhotoSection} from './types/media';
import {
  clearAllSavedPhotos,
  deleteSavedPhoto,
  fileToDataUrl,
  inferPhotoSection,
  loadSavedPhotos,
  savePhoto,
} from './utils/storage';

export default function App() {
  const [photos, setPhotos] = useState<HotelPhoto[]>([]);
  const [studioOpen, setStudioOpen] = useState(false);
  const [inspectedPhoto, setInspectedPhoto] = useState<HotelPhoto | null>(null);

  useEffect(() => {
    loadSavedPhotos().then((saved) => {
      if (saved.length > 0) setPhotos(saved);
    });
  }, []);

  const handleUploadFiles = useCallback(
    async (files: FileList, forcedSection?: PhotoSection) => {
      const counts: Record<PhotoSection, number> = {
        hero: 0,
        about: 0,
        rooms: 0,
        restaurant: 0,
        food: 0,
        gallery: 0,
      };
      photos.forEach((p) => {
        counts[p.section] += 1;
      });

      const created: HotelPhoto[] = [];
      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];
        if (!file.type.startsWith('image/')) continue;
        const dataUrl = await fileToDataUrl(file);
        const section = forcedSection || inferPhotoSection(file.name, counts);
        counts[section] += 1;

        const item: HotelPhoto = {
          id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 7)}`,
          name: file.name,
          section,
          dataUrl,
          addedAt: Date.now() + i,
        };
        await savePhoto(item);
        created.push(item);
      }

      if (created.length > 0) {
        setPhotos((prev) => [...prev, ...created]);
      }
    },
    [photos],
  );

  const handleUpdatePhoto = useCallback(
    async (
      id: string,
      updates: Partial<Pick<HotelPhoto, 'section' | 'caption'>>,
    ) => {
      setPhotos((prev) =>
        prev.map((item) => {
          if (item.id !== id) return item;
          const next = {...item, ...updates};
          savePhoto(next);
          return next;
        }),
      );
    },
    [],
  );

  const handleDeletePhoto = useCallback(async (id: string) => {
    await deleteSavedPhoto(id);
    setPhotos((prev) => prev.filter((item) => item.id !== id));
    setInspectedPhoto((prev) => (prev?.id === id ? null : prev));
  }, []);

  const handleClearAll = useCallback(async () => {
    await clearAllSavedPhotos();
    setPhotos([]);
    setInspectedPhoto(null);
  }, []);

  const categorized = useMemo(() => {
    const heroPhoto = photos.find((p) => p.section === 'hero');
    const aboutPhoto = photos.find((p) => p.section === 'about') ?? photos.find((p) => p.section === 'hero' && p.id !== heroPhoto?.id);
    const roomPhotos = photos.filter((p) => p.section === 'rooms');
    const restaurantPhotos = photos.filter((p) => p.section === 'restaurant');
    const foodPhotos = photos.filter((p) => p.section === 'food');
    return {
      heroPhoto,
      aboutPhoto,
      roomPhotos,
      restaurantPhotos,
      foodPhotos,
    };
  }, [photos]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#FAF7F2] text-[#171310]">
        <Navbar
          onOpenStudio={() => setStudioOpen(true)}
          photoCount={photos.length}
        />

        <main>
          <Hero
            heroPhoto={categorized.heroPhoto}
            onOpenStudio={() => setStudioOpen(true)}
            totalPhotos={photos.length}
          />

          <AboutSection
            aboutPhoto={categorized.aboutPhoto}
            onUploadDirect={handleUploadFiles}
            onInspect={setInspectedPhoto}
          />

          <RoomsSection
            roomPhotos={categorized.roomPhotos}
            onUploadDirect={handleUploadFiles}
            onInspect={setInspectedPhoto}
          />

          <RestaurantSection
            restaurantPhotos={categorized.restaurantPhotos}
            foodPhotos={categorized.foodPhotos}
            onUploadDirect={handleUploadFiles}
            onInspect={setInspectedPhoto}
          />

          <GallerySection
            photos={photos}
            onUploadDirect={handleUploadFiles}
            onOpenStudio={() => setStudioOpen(true)}
            inspectedPhoto={inspectedPhoto}
            onInspect={setInspectedPhoto}
          />

          <LocationContactSection />
        </main>

        <Footer />

        <PhotoStudioDrawer
          open={studioOpen}
          onClose={() => setStudioOpen(false)}
          photos={photos}
          onUploadFiles={handleUploadFiles}
          onUpdatePhoto={handleUpdatePhoto}
          onDeletePhoto={handleDeletePhoto}
          onClearAll={handleClearAll}
        />
      </div>
    </MotionConfig>
  );
}
