import {MotionConfig, motion, useScroll} from 'motion/react';
import {useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {AmbientThreeBackground} from './components/AmbientThreeBackground';
import {CustomScrollbar} from './components/CustomScrollbar';
import {EventsSection} from './components/EventsSection';
import {FaqSection} from './components/FaqSection';
import {FloatingWhatsAppButton} from './components/FloatingWhatsAppButton';
import {Footer} from './components/Footer';
import {GallerySection} from './components/GallerySection';
import {GuestExperiencesSection} from './components/GuestExperiencesSection';
import {Hero} from './components/Hero';
import {LocationContactSection} from './components/LocationContactSection';
import {Navbar} from './components/Navbar';
import {RestaurantSection} from './components/RestaurantSection';
import {RoomsSection} from './components/RoomsSection';
import {SectionDivider} from './components/SectionDivider';
import {WhatsAppModal} from './components/WhatsAppModal';
import {HotelPhoto} from './data/hotelAnjaliPhotos';
import {LanguageProvider} from './i18n/LanguageContext';
import {ThemeProvider} from './theme/ThemeContext';

export default function App() {
  const [inspectedPhoto, setInspectedPhoto] = useState<HotelPhoto | null>(null);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const {scrollYProgress} = useScroll();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#FBF7EE] text-[#0B1528] dark:bg-[#050A14] dark:text-[#FBF7EE] transition-colors duration-300">
            <AmbientThreeBackground />

            {/* Hairline metallic gold scroll depth indicator (compositor transform only) */}
            <motion.div
              aria-hidden="true"
              style={{scaleX: scrollYProgress}}
              className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2.5px] origin-left bg-gradient-to-r from-[#B68B3C] via-[#F4DFB0] to-[#D4AF5F] shadow-[0_0_10px_rgba(212,175,95,0.55)]"
            />

            <Navbar onOpenWhatsApp={() => setWhatsAppOpen(true)} />
            <CustomScrollbar />

            <main id="main-content" className="w-full max-w-full">
              <Hero />
              <SectionDivider
                variant="wave"
                from="#070E1A"
                to="#FBF7EE"
                darkFrom="#050A14"
                darkTo="#091224"
              />
              <AboutSection onInspect={setInspectedPhoto} />
              <SectionDivider
                variant="crest"
                from="#FBF7EE"
                to="#F3EBDC"
                darkFrom="#091224"
                darkTo="#0D182C"
              />
              <RoomsSection onInspect={setInspectedPhoto} />
              <SectionDivider
                variant="wave"
                from="#F3EBDC"
                to="#070E1A"
                darkFrom="#0D182C"
                darkTo="#050A14"
                flip
              />
              <RestaurantSection onInspect={setInspectedPhoto} />
              <SectionDivider
                variant="wave"
                from="#070E1A"
                to="#F5EFE4"
                darkFrom="#050A14"
                darkTo="#0D182C"
              />
              <EventsSection onInspect={setInspectedPhoto} />
              <SectionDivider
                variant="crest"
                from="#F5EFE4"
                to="#FBF7EE"
                darkFrom="#0D182C"
                darkTo="#091224"
              />
              <GallerySection
                inspectedPhoto={inspectedPhoto}
                onInspect={setInspectedPhoto}
              />
              <SectionDivider
                variant="wave"
                from="#FBF7EE"
                to="#070E1A"
                darkFrom="#091224"
                darkTo="#050A14"
                flip
              />
              <GuestExperiencesSection />
              <SectionDivider
                variant="wave"
                from="#070E1A"
                to="#FBF7EE"
                darkFrom="#050A14"
                darkTo="#091224"
              />
              <FaqSection />
              <SectionDivider
                variant="crest"
                from="#FBF7EE"
                to="#F3EBDC"
                darkFrom="#091224"
                darkTo="#0D182C"
              />
              <LocationContactSection onOpenWhatsApp={() => setWhatsAppOpen(true)} />
            </main>

            <SectionDivider
              variant="wave"
              from="#FBF7EE"
              to="#070E1A"
              darkFrom="#091224"
              darkTo="#050A14"
              flip
            />
            <Footer />

            <FloatingWhatsAppButton />
            <WhatsAppModal
              open={whatsAppOpen}
              onClose={() => setWhatsAppOpen(false)}
            />
          </div>
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
}
