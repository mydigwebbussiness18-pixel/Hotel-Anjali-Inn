import {ChevronLeft, ChevronRight, Expand, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useState} from 'react';
import {
  GALLERY_HIGHLIGHT_IDS,
  HOTEL_ANJALI_PHOTOS,
  HotelPhoto,
  PhotoCategory,
} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {TiltCard} from './TiltCard';

interface GallerySectionProps {
  inspectedPhoto: HotelPhoto | null;
  onInspect: (photo: HotelPhoto | null) => void;
}

type GalleryFilter = 'highlights' | 'all' | PhotoCategory;

export function GallerySection({
  inspectedPhoto,
  onInspect,
}: GallerySectionProps) {
  const {t, getPhotoCopy} = useLanguage();
  const [filter, setFilter] = useState<GalleryFilter>('highlights');

  const filterOptions: Array<{id: GalleryFilter; label: string}> = [
    {id: 'highlights', label: t.gallery.tabs.highlights},
    {id: 'exterior', label: t.gallery.tabs.exterior},
    {id: 'rooms', label: t.gallery.tabs.rooms},
    {id: 'restaurant', label: t.gallery.tabs.restaurant},
    {id: 'food', label: t.gallery.tabs.food},
    {id: 'events', label: t.gallery.tabs.events},
    {id: 'all', label: `${t.gallery.tabs.all} (${HOTEL_ANJALI_PHOTOS.length})`},
  ];

  const filteredPhotos =
    filter === 'highlights'
      ? HOTEL_ANJALI_PHOTOS.filter((p) => GALLERY_HIGHLIGHT_IDS.has(p.id))
      : filter === 'all'
        ? HOTEL_ANJALI_PHOTOS
        : HOTEL_ANJALI_PHOTOS.filter((p) => p.category === filter);

  const inspectedIndex = inspectedPhoto
    ? HOTEL_ANJALI_PHOTOS.findIndex((p) => p.id === inspectedPhoto.id)
    : -1;
  const inspectedCopy = inspectedPhoto ? getPhotoCopy(inspectedPhoto) : null;

  useEffect(() => {
    if (!inspectedPhoto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onInspect(null);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (inspectedIndex + 1) % HOTEL_ANJALI_PHOTOS.length;
        onInspect(HOTEL_ANJALI_PHOTOS[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx =
          (inspectedIndex - 1 + HOTEL_ANJALI_PHOTOS.length) %
          HOTEL_ANJALI_PHOTOS.length;
        onInspect(HOTEL_ANJALI_PHOTOS[prevIdx]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [inspectedPhoto, inspectedIndex, onInspect]);

  const gridColsClass =
    filteredPhotos.length === 4
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section id="gallery" className="surface-ivory-silk py-20 sm:py-28 lg:py-32 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col gap-8 border-b border-[#0B1528]/14 dark:border-[#D4AF5F]/22 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
              {t.gallery.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-[#0B1528] dark:text-[#FBF7EE]">
              {t.gallery.headline}
            </h2>
          </div>

          <div className="flex max-w-full flex-wrap items-center gap-1.5">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                className={`max-w-full px-3.5 py-2 text-xs font-medium sm:whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C] ${
                  filter === option.id
                    ? 'bg-gradient-to-r from-[#091326] to-[#132544] text-[#FBF7EE] dark:from-[#D4AF5F] dark:to-[#B68B3C] dark:text-[#070E1A] dark:font-semibold shadow-[0_8px_20px_rgba(9,19,38,0.28)] hover:from-[#B68B3C] hover:to-[#D4AF5F] hover:text-[#070E1A]'
                    : 'border border-[#D4AF5F]/25 bg-[#FFFDF8] dark:bg-[#0E1B33] text-[#0B1528]/78 dark:text-[#FBF7EE]/80 hover:border-[#D4AF5F] hover:bg-[#F3EBDC] dark:hover:bg-[#16294B] hover:text-[#0B1528] dark:hover:text-[#F4DFB0]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flush Museum-Framed Responsive Grid */}
        <div className={`mt-12 grid gap-7 ${gridColsClass}`}>
          {filteredPhotos.map((photo, idx) => {
            const photoCopy = getPhotoCopy(photo);
            const isHeroSpan =
              (filteredPhotos.length === 7 || filteredPhotos.length === 10) && idx === 0;
            const spanClass = isHeroSpan ? 'min-w-0 sm:col-span-2' : 'min-w-0';

            return (
              <motion.figure
                key={photo.id}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
                className={spanClass}
              >
                <TiltCard className="h-full" maxTilt={isHeroSpan ? 2.5 : 4} liftPx={7}>
                  <div className="card-luxury-lift group flex h-full flex-col border border-[#D4AF5F]/28 bg-[#FFFDF8] dark:bg-[#0E1B33] p-2.5">
                    <button
                      type="button"
                      onClick={() => onInspect(photo)}
                      aria-label={`${t.gallery.openLightboxPrefix} ${photoCopy.title}`}
                      className={`relative block w-full overflow-hidden bg-[#ECE2CE] dark:bg-[#091326] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C] ${
                        isHeroSpan ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photoCopy.title}
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                          photo.aspectHint === 'portrait' ? 'object-[50%_40%]' : 'object-center'
                        }`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </button>

                    <figcaption className="flex items-baseline justify-between gap-3 px-2 pb-1.5 pt-3.5">
                      <div>
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                          {t.gallery.categories[photo.category]}
                        </p>
                        <p className="mt-0.5 font-serif text-xl text-[#0B1528] dark:text-[#FBF7EE]">
                          {photoCopy.title}
                        </p>
                      </div>
                    </figcaption>
                  </div>
                </TiltCard>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Keyboard-Accessible Fullscreen Lightbox */}
      <AnimatePresence>
        {inspectedPhoto && inspectedCopy && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            role="dialog"
            aria-modal="true"
            aria-label={t.gallery.lightboxAria}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#060C18]/96 p-4 sm:p-8 backdrop-blur-md"
            onClick={() => onInspect(null)}
          >
            <div
              className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex w-full items-center justify-between gap-4 text-[#FBF7EE]">
                <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#FBF7EE]/78">
                  <span className="text-[#F4DFB0]">
                    {t.gallery.categories[inspectedPhoto.category]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">
                    {inspectedIndex + 1} / {HOTEL_ANJALI_PHOTOS.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onInspect(null)}
                  aria-label={t.gallery.closeLightboxAria}
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#D4AF5F]/35 bg-[#0D192E] text-[#FBF7EE] transition-all duration-200 hover:border-[#F4DFB0] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_8px_20px_rgba(212,175,95,0.34)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex max-h-[75vh] w-full items-center justify-center overflow-hidden border border-[#D4AF5F]/30 bg-[#091326]">
                <img
                  src={inspectedPhoto.src}
                  alt={inspectedCopy.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                <button
                  type="button"
                  onClick={() => {
                    const prevIdx =
                      (inspectedIndex - 1 + HOTEL_ANJALI_PHOTOS.length) %
                      HOTEL_ANJALI_PHOTOS.length;
                    onInspect(HOTEL_ANJALI_PHOTOS[prevIdx]);
                  }}
                  aria-label={t.gallery.prevPhotoAria}
                  className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#D4AF5F]/35 bg-[#070E1A]/80 text-[#FBF7EE] transition-all duration-200 hover:border-[#F4DFB0] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_8px_22px_rgba(212,175,95,0.36)]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const nextIdx =
                      (inspectedIndex + 1) % HOTEL_ANJALI_PHOTOS.length;
                    onInspect(HOTEL_ANJALI_PHOTOS[nextIdx]);
                  }}
                  aria-label={t.gallery.nextPhotoAria}
                  className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#D4AF5F]/35 bg-[#070E1A]/80 text-[#FBF7EE] transition-all duration-200 hover:border-[#F4DFB0] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_8px_22px_rgba(212,175,95,0.36)]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="font-serif text-2xl text-[#FBF7EE]">
                  {inspectedCopy.title}
                </p>
                <p className="mt-1 text-sm text-[#F4DFB0]/75">
                  {inspectedCopy.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
