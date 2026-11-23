import {ArrowDownRight, ImagePlus} from 'lucide-react';
import {motion, useScroll, useTransform} from 'motion/react';
import {useRef} from 'react';
import {HotelPhoto} from '../types/media';

interface HeroProps {
  heroPhoto?: HotelPhoto;
  onOpenStudio: () => void;
  totalPhotos: number;
}

export function Hero({heroPhoto, onOpenStudio, totalPhotos}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle GPU-composited parallax transform on hero imagery
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#171310] text-[#FAF7F2]"
    >
      {/* Background Layer: Real uploaded property photograph or bespoke architectural canvas */}
      {heroPhoto ? (
        <motion.div
          style={{y: imageY, scale: imageScale}}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={heroPhoto.dataUrl}
            alt={heroPhoto.caption || 'Hotel Anjali exterior and hospitality'}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171310] via-[#171310]/50 to-[#171310]/40" />
        </motion.div>
      ) : (
        <div className="absolute inset-0 overflow-hidden bg-[#171310]">
          {/* Subtle architectural hairline grid & warm radial glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 72% 28%, rgba(184, 139, 88, 0.22), transparent 55%)',
            }}
          />
          <div className="absolute inset-x-6 inset-y-20 mx-auto max-w-7xl border border-[#FAF7F2]/8 pointer-events-none" />
        </div>
      )}

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:pb-24 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.75, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-8"
          >
            <p className="mb-4 text-xs font-medium tracking-[0.22em] uppercase text-[#B88B58]">
              Hotel &amp; Restaurant
            </p>

            <h1 className="font-display text-[clamp(2.75rem,6vw,5.25rem)] font-normal leading-[1.03] tracking-tight text-[#FAF7F2]">
              Warm hospitality, restful stays, and memorable dining.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#FAF7F2]/75 sm:text-lg">
              Welcome to Hotel Anjali—a thoughtful retreat designed for unhurried stays,
              attentive service, and an inviting dining room crafted for every gathering.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#hotel"
                className="inline-flex items-center gap-2.5 bg-[#FAF7F2] px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#171310] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#F0EBE2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B88B58]"
              >
                <span>Explore Hotel</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="#restaurant"
                className="inline-flex items-center gap-2.5 border border-[#FAF7F2]/30 px-6 py-3.5 text-xs font-medium tracking-wider uppercase text-[#FAF7F2] whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B88B58]"
              >
                <span>Explore Restaurant</span>
              </a>
            </div>
          </motion.div>

          {/* Right column: Photo Studio trigger for instant original photo placement */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-4 lg:justify-self-end"
          >
            <button
              type="button"
              onClick={onOpenStudio}
              className="group flex w-full max-w-sm items-center justify-between gap-4 border border-[#FAF7F2]/20 bg-[#171310]/70 px-5 py-4 text-left backdrop-blur-md transition-colors duration-200 hover:border-[#B88B58] hover:bg-[#241E19]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B88B58]"
            >
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-[#B88B58]">
                  Photo Studio
                </p>
                <p className="mt-1 text-sm text-[#FAF7F2]">
                  {totalPhotos > 0
                    ? `${totalPhotos} original ${totalPhotos === 1 ? 'photo' : 'photos'} placed`
                    : 'Upload Hotel Anjali photos'}
                </p>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#FAF7F2]/20 text-[#FAF7F2] transition-colors group-hover:border-[#B88B58] group-hover:text-[#B88B58]">
                <ImagePlus className="h-4 w-4" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
