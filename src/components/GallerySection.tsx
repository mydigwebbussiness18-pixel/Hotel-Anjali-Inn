import {ChevronLeft, ChevronRight, ImagePlus, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useState} from 'react';
import {HotelPhoto, PhotoSection, SECTION_LABELS} from '../types/media';
import {MediaFrame} from './MediaFrame';

interface GallerySectionProps {
  photos: HotelPhoto[];
  onUploadDirect: (files: FileList, section: PhotoSection) => void;
  onOpenStudio: () => void;
  inspectedPhoto: HotelPhoto | null;
  onInspect: (photo: HotelPhoto | null) => void;
}

type GalleryFilter = 'all' | PhotoSection;

const FILTER_OPTIONS: Array<{id: GalleryFilter; label: string}> = [
  {id: 'all', label: 'All Photos'},
  {id: 'hero', label: 'Exterior'},
  {id: 'rooms', label: 'Rooms'},
  {id: 'restaurant', label: 'Restaurant'},
  {id: 'food', label: 'Food'},
  {id: 'gallery', label: 'Highlights'},
];

export function GallerySection({
  photos,
  onUploadDirect,
  onOpenStudio,
  inspectedPhoto,
  onInspect,
}: GallerySectionProps) {
  const [filter, setFilter] = useState<GalleryFilter>('all');

  const filteredPhotos =
    filter === 'all' ? photos : photos.filter((p) => p.section === filter);

  const inspectedIndex = inspectedPhoto
    ? photos.findIndex((p) => p.id === inspectedPhoto.id)
    : -1;

  useEffect(() => {
    if (!inspectedPhoto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onInspect(null);
      } else if (e.key === 'ArrowRight' && photos.length > 1) {
        const nextIdx = (inspectedIndex + 1) % photos.length;
        onInspect(photos[nextIdx]);
      } else if (e.key === 'ArrowLeft' && photos.length > 1) {
        const prevIdx = (inspectedIndex - 1 + photos.length) % photos.length;
        onInspect(photos[prevIdx]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [inspectedPhoto, inspectedIndex, photos, onInspect]);

  return (
    <section id="gallery" className="bg-[#FAF7F2] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col gap-8 border-b border-[#171310]/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8C6239]">
              04 · Visual Gallery
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#171310]">
              Inside Hotel Anjali.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                className={`px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6239] ${
                  filter === option.id
                    ? 'bg-[#171310] text-[#FAF7F2]'
                    : 'bg-[#F0EBE2] text-[#171310]/70 hover:text-[#171310]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {filteredPhotos.map((photo, idx) => {
              const spanClass =
                idx % 5 === 0
                  ? 'lg:col-span-8'
                  : idx % 5 === 1
                    ? 'lg:col-span-4'
                    : 'lg:col-span-4';
              const aspectClass =
                idx % 5 === 0
                  ? 'aspect-[16/10]'
                  : idx % 5 === 1
                    ? 'aspect-[4/5] lg:aspect-auto lg:h-full'
                    : 'aspect-[4/3]';

              return (
                <motion.div
                  key={photo.id}
                  initial={{opacity: 0, y: 16}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, margin: '-40px'}}
                  transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
                  className={spanClass}
                >
                  <MediaFrame
                    photo={photo}
                    section={photo.section}
                    slotLabel={photo.caption || SECTION_LABELS[photo.section]}
                    aspectClass={aspectClass}
                    variant="light"
                    onUploadDirect={onUploadDirect}
                    onInspect={(p) => onInspect(p)}
                  />
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <MediaFrame
                section="gallery"
                slotLabel="Property Highlight"
                aspectClass="aspect-[16/10]"
                variant="light"
                onUploadDirect={onUploadDirect}
              />
            </div>
            <div className="md:col-span-5">
              <MediaFrame
                section="gallery"
                slotLabel="Atmosphere & Details"
                aspectClass="aspect-[4/3] md:h-full"
                variant="light"
                onUploadDirect={onUploadDirect}
              />
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#171310]/10 pt-8">
          <p className="text-sm text-[#171310]/65">
            {photos.length > 0
              ? `Displaying ${filteredPhotos.length} of ${photos.length} uploaded Hotel Anjali photographs.`
              : 'Upload original Hotel Anjali photos to populate the full gallery and lightbox.'}
          </p>
          <button
            type="button"
            onClick={onOpenStudio}
            className="inline-flex items-center gap-2 border border-[#171310]/20 bg-[#F0EBE2] px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-[#171310] whitespace-nowrap shrink-0 transition-colors hover:border-[#171310] hover:bg-[#E7DFD3]"
          >
            <ImagePlus className="h-4 w-4 text-[#8C6239]" />
            <span>{photos.length > 0 ? 'Add or Organize Photos' : 'Open Photo Studio'}</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Keyboard-Accessible Lightbox */}
      <AnimatePresence>
        {inspectedPhoto && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            role="dialog"
            aria-modal="true"
            aria-label="Photograph lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#171310]/95 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => onInspect(null)}
          >
            <div
              className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex w-full items-center justify-between gap-4 text-[#FAF7F2]">
                <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#FAF7F2]/70">
                  <span className="text-[#B88B58]">
                    {SECTION_LABELS[inspectedPhoto.section]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">
                    {inspectedIndex + 1} / {photos.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onInspect(null)}
                  aria-label="Close lightbox"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#FAF7F2]/20 text-[#FAF7F2] transition-colors hover:bg-[#FAF7F2]/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative flex max-h-[75vh] w-full items-center justify-center overflow-hidden border border-[#FAF7F2]/12 bg-[#110E0C]">
                <img
                  src={inspectedPhoto.dataUrl}
                  alt={inspectedPhoto.caption || 'Hotel Anjali photograph'}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                {photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        const prevIdx =
                          (inspectedIndex - 1 + photos.length) % photos.length;
                        onInspect(photos[prevIdx]);
                      }}
                      aria-label="Previous photograph"
                      className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#FAF7F2]/20 bg-[#171310]/70 text-[#FAF7F2] transition-colors hover:bg-[#171310]"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const nextIdx = (inspectedIndex + 1) % photos.length;
                        onInspect(photos[nextIdx]);
                      }}
                      aria-label="Next photograph"
                      className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#FAF7F2]/20 bg-[#171310]/70 text-[#FAF7F2] transition-colors hover:bg-[#171310]"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <p className="mt-4 font-serif text-xl text-[#FAF7F2]">
                {inspectedPhoto.caption || inspectedPhoto.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
