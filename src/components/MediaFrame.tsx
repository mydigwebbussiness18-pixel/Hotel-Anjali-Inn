import {Expand, ImagePlus} from 'lucide-react';
import {useRef, useState} from 'react';
import {HotelPhoto, PhotoSection, SECTION_LABELS} from '../types/media';

interface MediaFrameProps {
  photo?: HotelPhoto;
  section: PhotoSection;
  slotLabel: string;
  aspectClass?: string;
  variant?: 'light' | 'dark';
  onUploadDirect: (files: FileList, section: PhotoSection) => void;
  onInspect?: (photo: HotelPhoto) => void;
  className?: string;
}

export function MediaFrame({
  photo,
  section,
  slotLabel,
  aspectClass = 'aspect-[4/3]',
  variant = 'light',
  onUploadDirect,
  onInspect,
  className = '',
}: MediaFrameProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const isDark = variant === 'dark';

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUploadDirect(e.dataTransfer.files, section);
    }
  };

  if (photo && !imgFailed) {
    return (
      <figure className={`group relative overflow-hidden ${aspectClass} ${className}`}>
        <button
          type="button"
          onClick={() => onInspect?.(photo)}
          aria-label={`View ${photo.caption || slotLabel} in gallery`}
          className="relative block h-full w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6239]"
        >
          <img
            src={photo.dataUrl}
            alt={photo.caption || `${slotLabel} at Hotel Anjali`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171310]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="font-serif text-lg text-[#FAF7F2]">
              {photo.caption || slotLabel}
            </span>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[#FAF7F2]/30 bg-[#171310]/60 text-[#FAF7F2] backdrop-blur-sm">
              <Expand className="h-4 w-4" />
            </span>
          </div>
        </button>
      </figure>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`group relative flex flex-col items-center justify-center overflow-hidden border transition-colors duration-200 ${aspectClass} ${
        isDark
          ? dragging
            ? 'border-[#B88B58] bg-[#2B231D]'
            : 'border-[#FAF7F2]/15 bg-[#201A16] hover:border-[#FAF7F2]/30'
          : dragging
            ? 'border-[#8C6239] bg-[#E8E0D5]'
            : 'border-[#171310]/12 bg-[#F0EBE2] hover:border-[#171310]/25'
      } ${className}`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="sr-only"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            onUploadDirect(e.target.files, section);
            e.target.value = '';
          }
        }}
      />

      {/* Architectural hairline inner frame */}
      <div
        className={`pointer-events-none absolute inset-3 border ${
          isDark ? 'border-[#FAF7F2]/10' : 'border-[#171310]/8'
        }`}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="relative z-10 flex flex-col items-center justify-center px-6 py-8 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6239]"
      >
        <span
          className={`mb-4 inline-flex h-11 w-11 items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${
            isDark
              ? 'border-[#FAF7F2]/20 text-[#B88B58]'
              : 'border-[#171310]/15 text-[#8C6239]'
          }`}
        >
          <ImagePlus className="h-5 w-5" />
        </span>

        <span
          className={`text-xs font-medium tracking-widest uppercase ${
            isDark ? 'text-[#FAF7F2]/60' : 'text-[#171310]/55'
          }`}
        >
          {SECTION_LABELS[section]}
        </span>

        <span
          className={`mt-1.5 font-serif text-xl font-medium ${
            isDark ? 'text-[#FAF7F2]' : 'text-[#171310]'
          }`}
        >
          {slotLabel}
        </span>

        <span
          className={`mt-2 text-xs ${
            isDark ? 'text-[#FAF7F2]/50' : 'text-[#171310]/55'
          }`}
        >
          Drop photo or click to place
        </span>
      </button>
    </div>
  );
}
