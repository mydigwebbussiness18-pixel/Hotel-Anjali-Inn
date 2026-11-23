import {Expand} from 'lucide-react';
import {motion} from 'motion/react';
import {useState} from 'react';
import {
  FoodSubcategory,
  HOTEL_ANJALI_PHOTOS,
  HotelPhoto,
} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {TiltCard} from './TiltCard';

interface RestaurantSectionProps {
  onInspect: (photo: HotelPhoto) => void;
}

type FoodTab = 'all' | FoodSubcategory;

export function RestaurantSection({onInspect}: RestaurantSectionProps) {
  const {t, getPhotoCopy} = useLanguage();
  const [foodTab, setFoodTab] = useState<FoodTab>('all');

  const restaurantSpaces = HOTEL_ANJALI_PHOTOS.filter(
    (p) => p.category === 'restaurant',
  );
  const leadDining = restaurantSpaces[0];
  const leadDiningCopy = getPhotoCopy(leadDining);
  const pavilionSpaces = restaurantSpaces.slice(1);

  const allFood = HOTEL_ANJALI_PHOTOS.filter((p) => p.category === 'food');
  const landscapeFood = allFood.filter((f) => f.aspectHint === 'landscape');
  const portraitFood = allFood.filter((f) => f.aspectHint !== 'landscape');

  const filteredFood =
    foodTab === 'all'
      ? allFood
      : allFood.filter((item) => item.foodSubcategory === foodTab);

  return (
    <section
      id="restaurant"
      className="surface-royal-navy py-20 text-[#FBF7EE] sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Restaurant Experience Header & Lead Dining Hall */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            className="min-w-0 lg:col-span-7"
          >
            <div className="float-gentle-1 h-full">
              <TiltCard className="h-full" maxTilt={3} liftPx={7}>
                <div className="card-luxury-lift-dark h-full border border-[#D4AF5F]/28 bg-[#0D192E] p-2.5">
                  <button
                    type="button"
                    onClick={() => onInspect(leadDining)}
                    className="group relative block aspect-[16/10] w-full overflow-hidden text-left lg:h-full lg:min-h-[450px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F]"
                  >
                    <img
                      src={leadDining.src}
                      alt={leadDiningCopy.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div>
                        <p className="font-serif text-2xl text-[#FBF7EE]">{leadDiningCopy.title}</p>
                        <p className="text-xs text-[#F4DFB0]/85">{leadDiningCopy.subtitle}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/80 text-[#F4DFB0]">
                        <Expand className="h-4 w-4" />
                      </span>
                    </div>
                  </button>
                </div>
              </TiltCard>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="flex min-w-0 flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#F4DFB0]">
                {t.restaurant.eyebrow}
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-[#FBF7EE]">
                {t.restaurant.headline}
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[#FBF7EE]/78">
                {t.restaurant.description}
              </p>
            </div>

            <blockquote className="mt-10 border-y border-[#D4AF5F]/30 py-6 font-serif text-2xl italic leading-snug text-[#F4DFB0]/95">
              {t.restaurant.quote}
            </blockquote>
          </motion.div>
        </div>

        {/* Dining Atmospheres Trio */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pavilionSpaces.map((space, idx) => {
            const spaceCopy = getPhotoCopy(space);
            return (
              <motion.article
                key={space.id}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-50px'}}
                transition={{duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1]}}
              >
                <TiltCard className="h-full" maxTilt={4} liftPx={7}>
                  <div className="card-luxury-lift-dark group h-full border border-[#D4AF5F]/22 bg-[#0D192E] p-2.5">
                    <button
                      type="button"
                      onClick={() => onInspect(space)}
                      className="relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F]"
                    >
                      <img
                        src={space.src}
                        alt={spaceCopy.title}
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                          space.id === 'rest-chandelier-pavilion' ? 'object-[50%_62%]' : 'object-center'
                        }`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/80 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-3.5 w-3.5" />
                      </span>
                    </button>
                    <div className="px-2 pb-2 pt-4">
                      <h3 className="font-serif text-xl text-[#FBF7EE]">{spaceCopy.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#FBF7EE]/65">
                        {spaceCopy.subtitle}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            );
          })}
        </div>

        {/* Food & Culinary Visual Showcase */}
        <div id="menu" className="mt-20 border-t border-[#D4AF5F]/20 pt-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#F4DFB0]">
                {t.restaurant.menuEyebrow}
              </p>
              <h3 className="mt-2 font-serif text-3xl font-normal text-[#FBF7EE] sm:text-4xl">
                {t.restaurant.menuHeadline}
              </h3>
            </div>

            <div
              role="tablist"
              aria-label={t.restaurant.filterAria}
              className="inline-flex max-w-full flex-wrap items-center gap-1 border border-[#D4AF5F]/30 bg-[#0D192E] p-1"
            >
              {(
                [
                  {id: 'all', label: t.restaurant.tabs.all},
                  {id: 'thalis', label: t.restaurant.tabs.thalis},
                  {id: 'snacks', label: t.restaurant.tabs.snacks},
                  {id: 'beverages', label: t.restaurant.tabs.beverages},
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={foodTab === tab.id}
                  onClick={() => setFoodTab(tab.id)}
                  className={`max-w-full px-3.5 py-2 text-xs font-medium sm:whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F] ${
                    foodTab === tab.id
                      ? 'bg-gradient-to-r from-[#D4AF5F] to-[#B68B3C] text-[#070E1A] font-semibold shadow-[0_6px_18px_rgba(212,175,95,0.34)]'
                      : 'text-[#FBF7EE]/78 hover:bg-[#132544] hover:text-[#F4DFB0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {foodTab === 'all' ? (
            <div className="mt-10 space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {landscapeFood.map((dish, idx) => {
                  const dishCopy = getPhotoCopy(dish);
                  return (
                    <motion.article
                      key={dish.id}
                      initial={{opacity: 0, y: 18}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true, margin: '-40px'}}
                      transition={{duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1]}}
                    >
                      <TiltCard className="h-full" maxTilt={3.5} liftPx={7}>
                        <div className="card-luxury-lift-dark group h-full border border-[#D4AF5F]/22 bg-[#0D192E] p-2.5">
                          <button
                            type="button"
                            onClick={() => onInspect(dish)}
                            aria-label={`${t.restaurant.viewDishPrefix} ${dishCopy.title}`}
                            className="relative block aspect-[16/10] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F]"
                          >
                            <img
                              src={dish.src}
                              alt={dishCopy.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/80 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <Expand className="h-4 w-4" />
                            </span>
                          </button>
                          <div className="px-2 pb-2 pt-4">
                            <h4 className="font-serif text-2xl font-normal text-[#FBF7EE]">
                              {dishCopy.title}
                            </h4>
                            <p className="mt-1 text-sm leading-relaxed text-[#FBF7EE]/68">
                              {dishCopy.subtitle}
                            </p>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.article>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-12">
                {portraitFood.map((dish, idx) => {
                  const dishCopy = getPhotoCopy(dish);
                  const colSpan = idx < 3 ? 'min-w-0 lg:col-span-4' : 'min-w-0 lg:col-span-3';
                  return (
                    <motion.article
                      key={dish.id}
                      initial={{opacity: 0, y: 18}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true, margin: '-40px'}}
                      transition={{
                        duration: 0.5,
                        delay: Math.min(idx * 0.05, 0.2),
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={colSpan}
                    >
                      <TiltCard className="h-full" maxTilt={4} liftPx={7}>
                        <div className="card-luxury-lift-dark group h-full border border-[#D4AF5F]/22 bg-[#0D192E] p-2.5">
                          <button
                            type="button"
                            onClick={() => onInspect(dish)}
                            aria-label={`${t.restaurant.viewDishPrefix} ${dishCopy.title}`}
                            className="relative block aspect-[4/5] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F]"
                          >
                            <img
                              src={dish.src}
                              alt={dishCopy.title}
                              loading="lazy"
                              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/80 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <Expand className="h-3.5 w-3.5" />
                            </span>
                          </button>
                          <div className="px-1.5 pb-1.5 pt-3.5">
                            <h4 className="font-serif text-xl font-normal text-[#FBF7EE]">
                              {dishCopy.title}
                            </h4>
                            <p className="mt-1 text-xs leading-relaxed text-[#FBF7EE]/68">
                              {dishCopy.subtitle}
                            </p>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              className={`mt-10 grid grid-cols-1 gap-8 ${
                filteredFood.length === 2
                  ? 'md:grid-cols-2'
                  : filteredFood.length === 4
                    ? 'sm:grid-cols-2 lg:grid-cols-4'
                    : 'sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {filteredFood.map((dish, idx) => {
                const dishCopy = getPhotoCopy(dish);
                return (
                  <motion.article
                    key={dish.id}
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1]}}
                  >
                    <TiltCard className="h-full" maxTilt={4} liftPx={7}>
                      <div className="card-luxury-lift-dark group h-full border border-[#D4AF5F]/22 bg-[#0D192E] p-2.5">
                        <button
                          type="button"
                          onClick={() => onInspect(dish)}
                          aria-label={`${t.restaurant.viewDishPrefix} ${dishCopy.title}`}
                          className={`relative block w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F] ${
                            filteredFood.length === 2 ? 'aspect-[4/3]' : 'aspect-[4/5]'
                          }`}
                        >
                          <img
                            src={dish.src}
                            alt={dishCopy.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/80 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Expand className="h-3.5 w-3.5" />
                          </span>
                        </button>
                        <div className="px-2 pb-2 pt-4">
                          <h4 className="font-serif text-2xl font-normal text-[#FBF7EE]">
                            {dishCopy.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-[#FBF7EE]/68">
                            {dishCopy.subtitle}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
