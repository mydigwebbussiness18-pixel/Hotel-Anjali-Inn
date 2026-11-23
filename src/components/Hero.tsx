import {ArrowDownRight} from 'lucide-react';
import {motion, useScroll, useTransform} from 'motion/react';
import {useRef} from 'react';
import {HOTEL_ANJALI_PHOTOS} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {TiltCard} from './TiltCard';

export function Hero() {
  const {t, getPhotoCopy} = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle GPU-composited foreground scroll depth
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  const heroPhoto = HOTEL_ANJALI_PHOTOS[0];
  const heroPhotoCopy = getPhotoCopy(heroPhoto);

  return (
    <section
      id="home"
      ref={containerRef}
      className="surface-royal-navy relative grid min-h-screen w-full overflow-hidden text-[#FBF7EE]"
    >
      {/* Unified Uncropped Full-Width Property View (Desktop, Tablet & Mobile) */}
      <motion.div
        initial={{opacity: 0.72}}
        animate={{opacity: 1}}
        transition={{duration: 0.9, ease: [0.16, 1, 0.3, 1]}}
        className="pointer-events-none col-start-1 row-start-1 w-full min-w-0 self-start pt-[68px]"
      >
        <div className="relative w-full">
          <img
            src={heroPhoto.src}
            alt={heroPhotoCopy.title}
            className="block h-auto w-full object-contain object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#070E1A]/20 via-transparent to-[#0D192E]/30" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#070E1A] dark:from-[#050A14] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[54%] bg-gradient-to-t from-[#070E1A] via-[#070E1A]/75 dark:from-[#050A14] dark:via-[#050A14]/75 to-transparent" />
        </div>
      </motion.div>

      {/* Subtle Floating Royal-Gold Architectural Framing Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-24 bottom-8 mx-auto max-w-7xl border border-[#D4AF5F]/20 hidden sm:block"
      />

      {/* Editorial Hero Foreground */}
      <motion.div
        style={{y: contentY, opacity: contentOpacity}}
        className="relative z-10 col-start-1 row-start-1 self-end mx-auto w-full min-w-0 max-w-7xl px-6 pb-16 pt-[calc(68px+49vw)] sm:pb-20 lg:px-10 lg:pb-24 lg:pt-[calc(68px+44vw)]"
      >
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <motion.div
            initial={{opacity: 0, y: 28}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.85, ease: [0.16, 1, 0.3, 1]}}
            className="min-w-0 lg:col-span-8"
          >
            <motion.p
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
              className="mb-4 text-xs font-semibold tracking-[0.24em] uppercase text-[#F4DFB0]"
            >
              {t.hero.eyebrow}
            </motion.p>

            <h1 className="font-display text-[clamp(2.5rem,5.2vw,4.85rem)] font-normal leading-[1.06] tracking-tight text-[#FBF7EE] drop-shadow-[0_6px_24px_rgba(3,7,15,0.65)]">
              {t.hero.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#FBF7EE]/85 sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#hotel"
                className="inline-flex max-w-full items-center justify-center gap-2.5 bg-gradient-to-r from-[#F4DFB0] via-[#D4AF5F] to-[#F4DFB0] px-7 py-3.5 text-center text-xs font-semibold tracking-wider uppercase text-[#070E1A] shadow-[0_10px_26px_rgba(212,175,95,0.3)] sm:whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_34px_rgba(244,223,176,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4DFB0]"
              >
                <span>{t.hero.exploreHotel}</span>
                <ArrowDownRight className="h-4 w-4 shrink-0" />
              </a>

              <a
                href="#restaurant"
                className="inline-flex max-w-full items-center justify-center gap-2.5 border border-[#D4AF5F]/50 bg-[#0D192E]/75 px-7 py-3.5 text-center text-xs font-semibold tracking-wider uppercase text-[#F4DFB0] backdrop-blur-md sm:whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:bg-[#162849] hover:text-[#FBF7EE] hover:shadow-[0_14px_30px_rgba(212,175,95,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F]"
              >
                <span>{t.hero.exploreRestaurant}</span>
              </a>
            </div>
          </motion.div>

          {/* 3D Floating Royal Navy & Gold Glass Property Highlights Card */}
          <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1]}}
            className="min-w-0 w-full lg:w-auto lg:col-span-4 lg:justify-self-end"
          >
            <div className="float-gentle-2">
              <TiltCard className="w-full max-w-sm">
                <div className="card-luxury-lift-dark border border-[#D4AF5F]/35 bg-[#0B172B]/82 p-6 backdrop-blur-lg">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D4AF5F]">
                    {t.hero.cardEyebrow}
                  </p>
                  <p className="mt-2.5 font-serif text-2xl text-[#FBF7EE]">
                    {t.hero.cardTitle}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#FBF7EE]/78">
                    {t.hero.cardDescription}
                  </p>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
