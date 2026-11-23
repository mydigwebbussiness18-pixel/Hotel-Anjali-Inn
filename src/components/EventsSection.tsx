import {Expand} from 'lucide-react';
import {motion} from 'motion/react';
import {HOTEL_ANJALI_PHOTOS, HotelPhoto} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {TiltCard} from './TiltCard';

interface EventsSectionProps {
  onInspect: (photo: HotelPhoto) => void;
}

export function EventsSection({onInspect}: EventsSectionProps) {
  const {t, getPhotoCopy} = useLanguage();
  const eventHighlights = HOTEL_ANJALI_PHOTOS.filter(
    (p) => p.category === 'events',
  ).slice(0, 4);

  return (
    <section className="surface-champagne-cream bg-[#F5EFE4] dark:bg-[#0D182C] py-20 sm:py-24 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-[#0B1528]/14 dark:border-[#D4AF5F]/22 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
              {t.events.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-tight text-[#0B1528] dark:text-[#FBF7EE]">
              {t.events.headline}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#0B1528]/72 dark:text-[#FBF7EE]/78 sm:text-base">
            {t.events.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {eventHighlights.map((item, idx) => {
            const itemCopy = getPhotoCopy(item);
            return (
              <motion.article
                key={item.id}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-40px'}}
                transition={{duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1]}}
                className="min-w-0"
              >
                <TiltCard className="h-full" maxTilt={4.5} liftPx={7}>
                  <div className="card-luxury-lift group h-full border border-[#D4AF5F]/30 bg-[#FFFDF8] dark:bg-[#12223E] p-2.5">
                    <button
                      type="button"
                      onClick={() => onInspect(item)}
                      className="relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                    >
                      <img
                        src={item.src}
                        alt={itemCopy.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </button>
                    <div className="px-2 pb-2 pt-4">
                      <span className="text-[11px] font-semibold tracking-widest text-[#9A712C] dark:text-[#F4DFB0] tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-medium text-[#0B1528] dark:text-[#FBF7EE]">
                        {itemCopy.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#0B1528]/68 dark:text-[#FBF7EE]/72">
                        {itemCopy.subtitle}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
