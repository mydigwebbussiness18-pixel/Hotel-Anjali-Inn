import {ArrowUpRight} from 'lucide-react';
import {BUSINESS_LINKS} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';

export function Footer() {
  const {t} = useLanguage();

  return (
    <footer className="surface-royal-navy w-full max-w-full border-t border-[#D4AF5F]/22 pt-14 pb-24 text-[#FBF7EE] sm:py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 border-b border-[#D4AF5F]/18 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a
              href="#home"
              aria-label="Hotel Anjali Inn — Home"
              className="inline-block border border-[#D4AF5F]/45 bg-white px-4 py-2.5 shadow-[0_12px_28px_rgba(2,6,14,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:shadow-[0_14px_30px_rgba(212,175,95,0.28)]"
            >
              <img
                src={BUSINESS_LINKS.logoUrl}
                alt="Hotel Anjali Inn — Nilgiri Restaurant"
                className="h-20 w-auto object-contain sm:h-24"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#F4DFB0]/72">
              {t.footer.tagline}
            </p>
          </div>

          <nav
            aria-label={t.footer.navAria}
            className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#FBF7EE]/78"
          >
            <a href="#home" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.home}
            </a>
            <a href="#hotel" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.hotel}
            </a>
            <a href="#rooms" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.rooms}
            </a>
            <a href="#restaurant" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.restaurant}
            </a>
            <a href="#gallery" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.gallery}
            </a>
            <a href="#reviews" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.reviews}
            </a>
            <a href="#faq" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.faq}
            </a>
            <a href="#location" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.location}
            </a>
            <a href="#contact" className="transition-colors hover:text-[#F4DFB0]">
              {t.nav.contact}
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-[#FBF7EE]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.footer.copyrightSuffix}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={BUSINESS_LINKS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-[#F4DFB0]"
            >
              <span>{t.footer.instagram}</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={BUSINESS_LINKS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-[#F4DFB0]"
            >
              <span>{t.footer.googleProfile}</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
