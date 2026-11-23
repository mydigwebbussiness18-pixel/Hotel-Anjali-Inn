import {motion} from 'motion/react';
import {useState} from 'react';
import {HotelPhoto, PhotoSection} from '../types/media';
import {MediaFrame} from './MediaFrame';

interface RestaurantSectionProps {
  restaurantPhotos: HotelPhoto[];
  foodPhotos: HotelPhoto[];
  onUploadDirect: (files: FileList, section: PhotoSection) => void;
  onInspect: (photo: HotelPhoto) => void;
}

type DiningTab = 'all' | 'food' | 'restaurant';

export function RestaurantSection({
  restaurantPhotos,
  foodPhotos,
  onUploadDirect,
  onInspect,
}: RestaurantSectionProps) {
  const [activeTab, setActiveTab] = useState<DiningTab>('all');

  const leadRestaurantPhoto = restaurantPhotos[0];
  const secondaryRestaurantPhotos = restaurantPhotos.slice(1);

  const showcaseItems: Array<{
    key: string;
    section: 'food' | 'restaurant';
    title: string;
    photo?: HotelPhoto;
  }> = [];

  if (activeTab === 'all' || activeTab === 'food') {
    if (foodPhotos.length > 0) {
      foodPhotos.forEach((p, idx) => {
        showcaseItems.push({
          key: p.id,
          section: 'food',
          title: p.caption || `Culinary Highlight ${idx + 1}`,
          photo: p,
        });
      });
    } else {
      showcaseItems.push(
        {key: 'food-slot-1', section: 'food', title: 'Signature Culinary Plate'},
        {key: 'food-slot-2', section: 'food', title: 'Fresh Kitchen Preparation'},
      );
    }
  }

  if (activeTab === 'all' || activeTab === 'restaurant') {
    if (secondaryRestaurantPhotos.length > 0) {
      secondaryRestaurantPhotos.forEach((p, idx) => {
        showcaseItems.push({
          key: p.id,
          section: 'restaurant',
          title: p.caption || `Dining Ambience ${idx + 2}`,
          photo: p,
        });
      });
    } else if (activeTab === 'restaurant' && !leadRestaurantPhoto) {
      showcaseItems.push({
        key: 'rest-slot-2',
        section: 'restaurant',
        title: 'Evening Table Setting',
      });
    } else if (activeTab === 'all' && foodPhotos.length === 0) {
      showcaseItems.push({
        key: 'food-slot-3',
        section: 'food',
        title: 'Dining Table Spread',
      });
    }
  }

  return (
    <section
      id="restaurant"
      className="bg-[#171310] py-20 text-[#FAF7F2] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Restaurant Experience Split */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-7"
          >
            <MediaFrame
              photo={leadRestaurantPhoto}
              section="restaurant"
              slotLabel="Restaurant Dining Room"
              aspectClass="aspect-[16/11] lg:h-full lg:min-h-[480px]"
              variant="dark"
              onUploadDirect={onUploadDirect}
              onInspect={onInspect}
            />
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B88B58]">
                03 · Restaurant Experience
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#FAF7F2]">
                An inviting dining room built for unhurried meals.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[#FAF7F2]/75">
                At the heart of Hotel Anjali is a kitchen and dining hall dedicated to
                freshly prepared hospitality. Warm lighting, comfortable seating, and
                attentive table service come together for travelers, families, and local
                guests alike.
              </p>
            </div>

            <blockquote className="mt-10 border-y border-[#FAF7F2]/15 py-6 font-serif text-2xl italic leading-snug text-[#FAF7F2]/90">
              “A good meal turns a brief stop into a lasting memory.”
            </blockquote>
          </motion.div>
        </div>

        {/* Food & Culinary Visual Showcase */}
        <div className="mt-20 border-t border-[#FAF7F2]/12 pt-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#B88B58]">
                Culinary Showcase
              </p>
              <h3 className="mt-2 font-serif text-3xl font-normal text-[#FAF7F2]">
                From the Hotel Anjali Kitchen
              </h3>
            </div>

            {/* Interactive Dining Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter dining photographs"
              className="inline-flex w-fit items-center gap-1 border border-[#FAF7F2]/15 bg-[#201A16] p-1"
            >
              {(
                [
                  {id: 'all', label: 'All Dining'},
                  {id: 'food', label: 'Food'},
                  {id: 'restaurant', label: 'Ambience'},
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B88B58] ${
                    activeTab === tab.id
                      ? 'bg-[#FAF7F2] text-[#171310]'
                      : 'text-[#FAF7F2]/70 hover:text-[#FAF7F2]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseItems.map((item) => (
              <div key={item.key} className="flex flex-col">
                <MediaFrame
                  photo={item.photo}
                  section={item.section}
                  slotLabel={item.title}
                  aspectClass="aspect-[4/3]"
                  variant="dark"
                  onUploadDirect={onUploadDirect}
                  onInspect={onInspect}
                />
                <div className="mt-3.5 flex items-center justify-between gap-4 border-b border-[#FAF7F2]/10 pb-3.5">
                  <span className="font-serif text-xl text-[#FAF7F2]">{item.title}</span>
                  <span className="text-xs tracking-wider uppercase text-[#FAF7F2]/50">
                    {item.section === 'food' ? 'Kitchen' : 'Dining'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
