import {Trash2, Upload, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useRef} from 'react';
import {HotelPhoto, PhotoSection, SECTION_LABELS} from '../types/media';

interface PhotoStudioDrawerProps {
  open: boolean;
  onClose: () => void;
  photos: HotelPhoto[];
  onUploadFiles: (files: FileList, forcedSection?: PhotoSection) => void;
  onUpdatePhoto: (id: string, updates: Partial<Pick<HotelPhoto, 'section' | 'caption'>>) => void;
  onDeletePhoto: (id: string) => void;
  onClearAll: () => void;
}

const ALL_SECTIONS: PhotoSection[] = [
  'hero',
  'about',
  'rooms',
  'restaurant',
  'food',
  'gallery',
];

export function PhotoStudioDrawer({
  open,
  onClose,
  photos,
  onUploadFiles,
  onUpdatePhoto,
  onDeletePhoto,
  onClearAll,
}: PhotoStudioDrawerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={onClose}
            className="fixed inset-0 bg-[#171310]/65 backdrop-blur-xs"
          />

          <motion.aside
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
            aria-label="Hotel Anjali Photo Studio"
            className="relative z-10 flex h-full w-full max-w-xl flex-col bg-[#FAF7F2] text-[#171310] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#171310]/12 px-6 py-5">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-[#8C6239]">
                  Owner Presentation Studio
                </p>
                <h2 className="mt-1 font-serif text-2xl font-medium">
                  Hotel Anjali Photo Placement
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close photo studio"
                className="inline-flex h-10 w-10 items-center justify-center border border-[#171310]/15 text-[#171310] transition-colors hover:bg-[#F0EBE2]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Batch Drop Zone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                    onUploadFiles(e.dataTransfer.files);
                  }
                }}
                className="border border-dashed border-[#8C6239]/50 bg-[#F0EBE2]/70 p-6 text-center"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      onUploadFiles(e.target.files);
                      e.target.value = '';
                    }
                  }}
                />
                <Upload className="mx-auto h-6 w-6 text-[#8C6239]" />
                <p className="mt-3 font-serif text-xl text-[#171310]">
                  Drop original Hotel Anjali photos here
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#171310]/65">
                  Photos are automatically matched to Hero, About, Rooms, Restaurant,
                  Food, or Gallery—and saved locally in your browser.
                </p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-5 bg-[#171310] px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-[#FAF7F2] transition-colors hover:bg-[#2C241E]"
                >
                  Select Photos
                </button>
              </div>

              {/* Uploaded Photos List */}
              <div className="mt-8">
                <div className="flex items-center justify-between border-b border-[#171310]/10 pb-3">
                  <span className="text-xs font-medium tracking-widest uppercase text-[#171310]/60 tabular-nums">
                    Placed Photographs ({photos.length})
                  </span>
                  {photos.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearAll}
                      className="text-xs font-medium text-[#9A3412] hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {photos.length === 0 ? (
                  <p className="py-10 text-center text-sm text-[#171310]/55">
                    No photographs uploaded yet. Select or drag multiple photos above to
                    populate the entire website.
                  </p>
                ) : (
                  <ul className="divide-y divide-[#171310]/10">
                    {photos.map((photo) => (
                      <li key={photo.id} className="flex gap-4 py-4">
                        <img
                          src={photo.dataUrl}
                          alt={photo.caption || photo.name}
                          className="h-20 w-24 shrink-0 border border-[#171310]/10 object-cover"
                        />
                        <div className="min-w-0 flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <input
                              type="text"
                              value={photo.caption ?? ''}
                              onChange={(e) =>
                                onUpdatePhoto(photo.id, {caption: e.target.value})
                              }
                              placeholder={photo.name}
                              aria-label="Photo caption"
                              className="w-full border-b border-[#171310]/15 bg-transparent pb-1 text-sm font-medium text-[#171310] placeholder:text-[#171310]/40 focus:border-[#8C6239] focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => onDeletePhoto(photo.id)}
                              aria-label={`Remove ${photo.name}`}
                              className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-[#171310]/50 transition-colors hover:text-[#9A3412]"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <label
                              htmlFor={`section-${photo.id}`}
                              className="text-xs text-[#171310]/55 shrink-0"
                            >
                              Section:
                            </label>
                            <select
                              id={`section-${photo.id}`}
                              value={photo.section}
                              onChange={(e) =>
                                onUpdatePhoto(photo.id, {
                                  section: e.target.value as PhotoSection,
                                })
                              }
                              className="w-full border border-[#171310]/15 bg-[#F0EBE2] px-2.5 py-1.5 text-xs font-medium text-[#171310] focus:border-[#8C6239] focus:outline-none"
                            >
                              {ALL_SECTIONS.map((sec) => (
                                <option key={sec} value={sec}>
                                  {SECTION_LABELS[sec]}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
