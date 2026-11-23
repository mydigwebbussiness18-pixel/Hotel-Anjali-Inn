import {ArrowUpRight} from 'lucide-react';
import {BUSINESS_LINKS} from '../types/media';

export function Footer() {
  return (
    <footer className="border-t border-[#171310]/12 bg-[#171310] py-14 text-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 border-b border-[#FAF7F2]/12 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#top" className="font-serif text-3xl font-normal tracking-tight">
              Hotel Anjali
            </a>
            <p className="mt-2 max-w-sm text-sm text-[#FAF7F2]/60">
              Restful stays and welcoming dining—crafted for every guest at Hotel Anjali.
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#FAF7F2]/75"
          >
            <a href="#hotel" className="hover:text-[#FAF7F2] transition-colors">
              Hotel
            </a>
            <a href="#rooms" className="hover:text-[#FAF7F2] transition-colors">
              Rooms
            </a>
            <a href="#restaurant" className="hover:text-[#FAF7F2] transition-colors">
              Restaurant
            </a>
            <a href="#gallery" className="hover:text-[#FAF7F2] transition-colors">
              Gallery
            </a>
            <a href="#location" className="hover:text-[#FAF7F2] transition-colors">
              Location
            </a>
            <a href="#contact" className="hover:text-[#FAF7F2] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-[#FAF7F2]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hotel Anjali. Presentation Demo.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={BUSINESS_LINKS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#FAF7F2] transition-colors"
            >
              <span>Instagram</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={BUSINESS_LINKS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#FAF7F2] transition-colors"
            >
              <span>Google Business Profile</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
