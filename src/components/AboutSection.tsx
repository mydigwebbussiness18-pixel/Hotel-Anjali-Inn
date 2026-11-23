import {ArrowUpRight, Expand} from 'lucide-react';
import {motion} from 'motion/react';
import {BUSINESS_LINKS, HOTEL_ANJALI_PHOTOS, HotelPhoto} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {TiltCard} from './TiltCard';

interface AboutSectionProps {
  onInspect: (photo: HotelPhoto) => void;
}

export function AboutSection({onInspect}: AboutSectionProps) {
  const {t, getPhotoCopy} = useLanguage();
  const facadePhoto = HOTEL_ANJALI_PHOTOS.find((p) => p.id === 'ext-about-facade')!;
  const gatePhoto = HOTEL_ANJALI_PHOTOS.find((p) => p.id === 'ext-arch-gate')!;
  const lawnPhoto = HOTEL_ANJALI_PHOTOS.find((p) => p.id === 'ext-night-lights')!;

  const facadeCopy = getPhotoCopy(facadePhoto);
  const gateCopy = getPhotoCopy(gatePhoto);
  const lawnCopy = getPhotoCopy(lawnPhoto);

  return (
    <section id="hotel" className="surface-ivory-silk py-20 sm:py-28 lg:py-32 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Narrative Column */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            className="flex min-w-0 flex-col justify-between lg:sticky lg:top-28 lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                {t.about.eyebrow}
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-[#0B1528] dark:text-[#FBF7EE]">
                {t.about.headline}
              </h2>

              <div className="mt-7 space-y-5 text-base leading-relaxed text-[#0B1528]/78 dark:text-[#FBF7EE]/80">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
              </div>
            </div>

            <div className="mt-10 border-t border-[#D4AF5F]/35 pt-8">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                    {t.about.accommodationsLabel}
                  </dt>
                  <dd className="mt-1.5 font-serif text-xl text-[#0B1528] dark:text-[#FBF7EE]">
                    {t.about.accommodationsValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                    {t.about.hospitalityLabel}
                  </dt>
                  <dd className="mt-1.5 font-serif text-xl text-[#0B1528] dark:text-[#FBF7EE]">
                    {t.about.hospitalityValue}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                <a
                  href={BUSINESS_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#0B1528] dark:text-[#FBF7EE] underline decoration-[#D4AF5F]/65 underline-offset-4 transition-colors hover:text-[#9A712C] dark:hover:text-[#F4DFB0] hover:decoration-[#9A712C]"
                >
                  <span>Instagram {BUSINESS_LINKS.instagramHandle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={BUSINESS_LINKS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#0B1528] dark:text-[#FBF7EE] underline decoration-[#D4AF5F]/65 underline-offset-4 transition-colors hover:text-[#9A712C] dark:hover:text-[#F4DFB0] hover:decoration-[#9A712C]"
                >
                  <span>{t.about.googleProfileLink}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Aligned 3D Architectural 3-Photo Editorial Composition */}
          <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-12 lg:col-span-7">
            <motion.figure
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
              className="min-w-0 sm:col-span-12"
            >
              <div className="float-gentle-1">
                <TiltCard>
                  <div className="card-luxury-lift border border-[#D4AF5F]/30 bg-[#FFFDF8] dark:bg-[#0E1B33] p-2.5">
                    <button
                      type="button"
                      onClick={() => onInspect(facadePhoto)}
                      className="group relative block aspect-[16/10] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                    >
                      <img
                        src={facadePhoto.src}
                        alt={facadeCopy.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center border border-[#F4DFB0]/45 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-4 w-4" />
                      </span>
                    </button>
                  </div>
                </TiltCard>
              </div>
              <figcaption className="mt-2.5 flex flex-wrap items-baseline justify-between gap-4 text-xs text-[#0B1528]/65 dark:text-[#FBF7EE]/68">
                <span className="font-serif text-sm italic text-[#0B1528]/85 dark:text-[#F4DFB0]">
                  {t.about.figPrefix} 01 — {facadeCopy.title}
                </span>
                <span>{facadeCopy.subtitle}</span>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1]}}
              className="min-w-0 sm:col-span-6"
            >
              <div className="float-gentle-2">
                <TiltCard>
                  <div className="card-luxury-lift border border-[#D4AF5F]/30 bg-[#FFFDF8] dark:bg-[#0E1B33] p-2.5">
                    <button
                      type="button"
                      onClick={() => onInspect(gatePhoto)}
                      className="group relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                    >
                      <img
                        src={gatePhoto.src}
                        alt={gateCopy.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/45 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </div>
                </TiltCard>
              </div>
              <figcaption className="mt-2.5 font-serif text-sm italic text-[#0B1528]/80 dark:text-[#F4DFB0]/90">
                {t.about.figPrefix} 02 — {gateCopy.title}
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1]}}
              className="min-w-0 sm:col-span-6"
            >
              <div className="float-gentle-3">
                <TiltCard>
                  <div className="card-luxury-lift border border-[#D4AF5F]/30 bg-[#FFFDF8] dark:bg-[#0E1B33] p-2.5">
                    <button
                      type="button"
                      onClick={() => onInspect(lawnPhoto)}
                      className="group relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                    >
                      <img
                        src={lawnPhoto.src}
                        alt={lawnCopy.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/45 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </div>
                </TiltCard>
              </div>
              <figcaption className="mt-2.5 font-serif text-sm italic text-[#0B1528]/80 dark:text-[#F4DFB0]/90">
                {t.about.figPrefix} 03 — {lawnCopy.title}
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
