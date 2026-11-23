import {ArrowUpRight} from 'lucide-react';
import {motion} from 'motion/react';
import {BUSINESS_LINKS, HotelPhoto, PhotoSection} from '../types/media';
import {MediaFrame} from './MediaFrame';

interface AboutSectionProps {
  aboutPhoto?: HotelPhoto;
  onUploadDirect: (files: FileList, section: PhotoSection) => void;
  onInspect: (photo: HotelPhoto) => void;
}

export function AboutSection({
  aboutPhoto,
  onUploadDirect,
  onInspect,
}: AboutSectionProps) {
  return (
    <section id="hotel" className="bg-[#FAF7F2] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Narrative Column */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8C6239]">
                01 · About Hotel Anjali
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#171310]">
                Two hospitality traditions under one welcoming roof.
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-[#171310]/75">
                <p>
                  Hotel Anjali brings together comfortable, thoughtfully prepared guest
                  accommodations with the warmth and aroma of a dedicated in-house
                  restaurant. Whether arriving for an overnight journey or gathering around
                  the table with family and friends, every detail is shaped around ease.
                </p>
                <p>
                  From sunlit corridors and quiet rooms to freshly prepared dining
                  experiences, our spaces are curated to feel calm, attentive, and
                  unmistakably genuine.
                </p>
              </div>
            </div>

            {/* Clean Typographic Index without card-in-card clutter */}
            <div className="mt-12 border-t border-[#171310]/12 pt-8">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-medium tracking-widest uppercase text-[#171310]/50">
                    The Stay
                  </dt>
                  <dd className="mt-1.5 font-serif text-xl text-[#171310]">
                    Private Rooms &amp; Restful Quarters
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium tracking-widest uppercase text-[#171310]/50">
                    The Table
                  </dt>
                  <dd className="mt-1.5 font-serif text-xl text-[#171310]">
                    In-House Restaurant &amp; Dining
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                <a
                  href={BUSINESS_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#171310] underline decoration-[#171310]/25 underline-offset-4 transition-colors hover:text-[#8C6239] hover:decoration-[#8C6239]"
                >
                  <span>Instagram {BUSINESS_LINKS.instagramHandle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={BUSINESS_LINKS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#171310] underline decoration-[#171310]/25 underline-offset-4 transition-colors hover:text-[#8C6239] hover:decoration-[#8C6239]"
                >
                  <span>Google Business Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Media Column */}
          <motion.div
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <MediaFrame
              photo={aboutPhoto}
              section="about"
              slotLabel="Hotel Anjali Exterior & Reception"
              aspectClass="aspect-[4/5] lg:h-full lg:min-h-[520px]"
              variant="light"
              onUploadDirect={onUploadDirect}
              onInspect={onInspect}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
