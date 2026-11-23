import {Expand} from 'lucide-react';
import {motion} from 'motion/react';
import {useState} from 'react';
import {HOTEL_ANJALI_PHOTOS, HotelPhoto} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {TiltCard} from './TiltCard';

interface RoomsSectionProps {
  onInspect: (photo: HotelPhoto) => void;
}

type RoomFilter = 'all' | 'guest' | 'celebration';

export function RoomsSection({onInspect}: RoomsSectionProps) {
  const {t, getPhotoCopy} = useLanguage();
  const [filter, setFilter] = useState<RoomFilter>('all');

  const guestRooms = HOTEL_ANJALI_PHOTOS.filter(
    (p) => p.category === 'rooms' && p.roomKind === 'guest',
  );
  const celebrationRooms = HOTEL_ANJALI_PHOTOS.filter(
    (p) => p.category === 'rooms' && p.roomKind === 'celebration',
  );

  const showGuest = filter === 'all' || filter === 'guest';
  const showCelebration = filter === 'all' || filter === 'celebration';

  const leadRoom = guestRooms[0];
  const secondaryGuestRooms = guestRooms.slice(1);
  const leadRoomCopy = leadRoom ? getPhotoCopy(leadRoom) : null;

  return (
    <section
      id="rooms"
      className="surface-champagne-cream py-20 sm:py-28 lg:py-32 transition-colors duration-300"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header + Filter */}
        <div className="flex flex-col gap-6 border-b border-[#0B1528]/14 dark:border-[#D4AF5F]/22 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
              {t.rooms.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-[#0B1528] dark:text-[#FBF7EE]">
              {t.rooms.headline}
            </h2>
          </div>

          <div
            role="tablist"
            aria-label={t.rooms.filterAria}
            className="inline-flex max-w-full flex-wrap items-center gap-1 border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#091326] p-1 shadow-[0_10px_28px_-14px_rgba(11,21,40,0.16)]"
          >
            {(
              [
                {id: 'all', label: t.rooms.tabs.all},
                {id: 'guest', label: t.rooms.tabs.guest},
                {id: 'celebration', label: t.rooms.tabs.celebration},
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`max-w-full px-4 py-2 text-xs font-medium sm:whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C] ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-[#091326] to-[#132544] text-[#FBF7EE] dark:from-[#D4AF5F] dark:to-[#B68B3C] dark:text-[#070E1A] dark:font-semibold shadow-[0_8px_18px_rgba(9,19,38,0.28)] hover:from-[#B68B3C] hover:to-[#D4AF5F] hover:text-[#070E1A]'
                    : 'text-[#0B1528]/75 dark:text-[#FBF7EE]/78 hover:bg-[#F3EBDC] dark:hover:bg-[#132544] hover:text-[#0B1528] dark:hover:text-[#F4DFB0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guest Accommodations Editorial Feature */}
        {showGuest && leadRoom && leadRoomCopy && (
          <div className="mt-12 space-y-10">
            {/* Lead Suite Asymmetric Feature */}
            <motion.article
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            >
              <TiltCard maxTilt={2.5} liftPx={6}>
                <div className="card-luxury-lift grid grid-cols-1 items-stretch border border-[#D4AF5F]/30 bg-[#FFFDF8] dark:bg-[#12223E] lg:grid-cols-12">
                  <div className="float-gentle-3 min-w-0 p-2.5 lg:col-span-7">
                    <button
                      type="button"
                      onClick={() => onInspect(leadRoom)}
                      aria-label={`${t.rooms.viewPhotoPrefix} ${leadRoomCopy.title}`}
                      className="group relative block aspect-[16/10] w-full overflow-hidden text-left lg:h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                    >
                      <img
                        src={leadRoom.src}
                        alt={leadRoomCopy.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/65 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Expand className="h-4 w-4" />
                      </span>
                    </button>
                  </div>

                  <div className="flex min-w-0 flex-col justify-between p-7 sm:p-10 lg:col-span-5">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#9A712C] dark:text-[#F4DFB0]">
                        <span className="font-semibold tracking-widest uppercase">
                          {t.rooms.featuredSuiteTag}
                        </span>
                        <span className="tabular-nums text-[#0B1528]/45 dark:text-[#F4DFB0]/60">01</span>
                      </div>
                      <h3 className="mt-4 font-serif text-3xl font-normal text-[#0B1528] dark:text-[#FBF7EE] sm:text-4xl">
                        {leadRoomCopy.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-[#0B1528]/72 dark:text-[#FBF7EE]/78">
                        {leadRoomCopy.subtitle}. {t.rooms.featuredSuiteExtra}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#D4AF5F]/25 pt-6">
                      <button
                        type="button"
                        onClick={() => onInspect(leadRoom)}
                        className="border border-[#0B1528]/20 dark:border-[#D4AF5F]/35 bg-[#F3EBDC]/80 dark:bg-[#091326] px-4 py-2.5 text-xs font-medium tracking-wider uppercase text-[#0B1528] dark:text-[#F4DFB0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF5F] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_10px_22px_rgba(212,175,95,0.32)]"
                      >
                        {t.rooms.inspectPhoto}
                      </button>
                      <a
                        href="#contact"
                        className="max-w-full bg-gradient-to-r from-[#091326] to-[#132544] dark:from-[#D4AF5F] dark:to-[#B68B3C] px-5 py-2.5 text-center text-xs font-medium dark:font-semibold tracking-wider uppercase text-[#FBF7EE] dark:text-[#070E1A] sm:whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:from-[#B68B3C] hover:to-[#D4AF5F] dark:hover:from-[#F4DFB0] dark:hover:to-[#D4AF5F] hover:text-[#070E1A] hover:shadow-[0_12px_26px_rgba(212,175,95,0.38)]"
                      >
                        {t.rooms.inquireCta}
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.article>

            {/* Secondary Guest Rooms Duo */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {secondaryGuestRooms.map((room, idx) => {
                const roomCopy = getPhotoCopy(room);
                return (
                  <motion.article
                    key={room.id}
                    initial={{opacity: 0, y: 18}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-50px'}}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="min-w-0"
                  >
                    <TiltCard className="h-full" maxTilt={3.5} liftPx={7}>
                      <div className="card-luxury-lift group flex h-full flex-col border border-[#D4AF5F]/28 bg-[#FFFDF8] dark:bg-[#12223E] p-3">
                        <button
                          type="button"
                          onClick={() => onInspect(room)}
                          aria-label={`${t.rooms.viewPhotoPrefix} ${roomCopy.title}`}
                          className="relative block aspect-[16/10] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                        >
                          <img
                            src={room.src}
                            alt={roomCopy.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Expand className="h-4 w-4" />
                          </span>
                        </button>

                        <div className="px-3 pb-3 pt-5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold tracking-widest uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                              {t.rooms.guestStayTag}
                            </span>
                            <span className="tabular-nums text-[#0B1528]/45 dark:text-[#F4DFB0]/60">
                              {String(idx + 2).padStart(2, '0')}
                            </span>
                          </div>
                          <h3 className="mt-2 font-serif text-2xl font-medium text-[#0B1528] dark:text-[#FBF7EE]">
                            {roomCopy.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#0B1528]/68 dark:text-[#FBF7EE]/72">
                            {roomCopy.subtitle}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}

        {/* Celebration & Special Occasion Room Decor */}
        {showCelebration && (
          <div className={showGuest ? 'mt-16 border-t border-[#0B1528]/14 dark:border-[#D4AF5F]/22 pt-14' : 'mt-12'}>
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                  {t.rooms.specialEyebrow}
                </p>
                <h3 className="mt-1.5 font-serif text-3xl font-normal text-[#0B1528] dark:text-[#FBF7EE]">
                  {t.rooms.specialHeadline}
                </h3>
              </div>
              <p className="text-sm text-[#0B1528]/68 dark:text-[#FBF7EE]/72">
                {t.rooms.specialSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {celebrationRooms.map((room, idx) => {
                const roomCopy = getPhotoCopy(room);
                return (
                  <motion.article
                    key={room.id}
                    initial={{opacity: 0, y: 18}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-50px'}}
                    transition={{
                      duration: 0.55,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="min-w-0"
                  >
                    <TiltCard className="h-full" maxTilt={4} liftPx={7}>
                      <div className="card-luxury-lift group flex h-full flex-col border border-[#D4AF5F]/28 bg-[#FFFDF8] dark:bg-[#12223E] p-3">
                        <button
                          type="button"
                          onClick={() => onInspect(room)}
                          aria-label={`${t.rooms.viewPhotoPrefix} ${roomCopy.title}`}
                          className="relative block aspect-[4/3] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                        >
                          <img
                            src={room.src}
                            alt={roomCopy.title}
                            loading="lazy"
                            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                              room.id === 'room-celebration-canopy'
                                ? 'object-[50%_62%]'
                                : 'object-center'
                            }`}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070E1A]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center border border-[#F4DFB0]/40 bg-[#070E1A]/75 text-[#F4DFB0] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Expand className="h-3.5 w-3.5" />
                          </span>
                        </button>

                        <div className="px-2 pb-2 pt-4">
                          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                            {t.rooms.celebrationDecorTag}
                          </p>
                          <h4 className="mt-1 font-serif text-xl font-medium text-[#0B1528] dark:text-[#FBF7EE]">
                            {roomCopy.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-[#0B1528]/68 dark:text-[#FBF7EE]/72">
                            {roomCopy.subtitle}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
