import {motion} from 'motion/react';
import {HotelPhoto, PhotoSection} from '../types/media';
import {MediaFrame} from './MediaFrame';

interface RoomsSectionProps {
  roomPhotos: HotelPhoto[];
  onUploadDirect: (files: FileList, section: PhotoSection) => void;
  onInspect: (photo: HotelPhoto) => void;
}

const DEFAULT_ROOM_SLOTS = [
  {
    index: '01',
    title: 'Guest Room',
    subtitle: 'Restful quarters designed for quiet comfort',
  },
  {
    index: '02',
    title: 'Signature Stay',
    subtitle: 'Clean linen, warm lighting, and calm ambience',
  },
  {
    index: '03',
    title: 'Private Retreat',
    subtitle: 'Thoughtfully arranged for travelers and families',
  },
];

export function RoomsSection({
  roomPhotos,
  onUploadDirect,
  onInspect,
}: RoomsSectionProps) {
  const displayItems =
    roomPhotos.length > 0
      ? roomPhotos.map((photo, idx) => ({
          key: photo.id,
          index: String(idx + 1).padStart(2, '0'),
          title: photo.caption || `Guest Room ${idx + 1}`,
          subtitle: 'Original Hotel Anjali room photograph',
          photo,
        }))
      : DEFAULT_ROOM_SLOTS.map((slot) => ({
          key: slot.index,
          index: slot.index,
          title: slot.title,
          subtitle: slot.subtitle,
          photo: undefined,
        }));

  return (
    <section
      id="rooms"
      className="border-t border-[#171310]/10 bg-[#F0EBE2]/55 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 border-b border-[#171310]/12 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8C6239]">
              02 · Stay &amp; Rooms
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#171310]">
              Spaces tailored for unhurried rest.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#171310]/70 sm:text-base">
            Every room at Hotel Anjali is showcased exclusively through real property
            photographs—capturing genuine comfort without exaggeration.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayItems.map((item, idx) => (
            <motion.article
              key={item.key}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-60px'}}
              transition={{
                duration: 0.6,
                delay: Math.min(idx * 0.08, 0.24),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <MediaFrame
                photo={item.photo}
                section="rooms"
                slotLabel={item.title}
                aspectClass="aspect-[4/3]"
                variant="light"
                onUploadDirect={onUploadDirect}
                onInspect={onInspect}
              />

              <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-[#171310]/10 pb-4">
                <div>
                  <span className="text-xs font-medium tracking-widest text-[#8C6239] tabular-nums">
                    {item.index}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-medium text-[#171310]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#171310]/65">{item.subtitle}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#171310]/65">
            Interested in room availability or group stays?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-[#171310] px-6 py-3 text-xs font-medium tracking-wider uppercase text-[#171310] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#171310] hover:text-[#FAF7F2]"
          >
            Inquire About Stays
          </a>
        </div>
      </div>
    </section>
  );
}
