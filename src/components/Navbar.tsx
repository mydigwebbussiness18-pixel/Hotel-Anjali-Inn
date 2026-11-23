import {Menu, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useState} from 'react';

interface NavbarProps {
  onOpenStudio: () => void;
  photoCount: number;
}

const NAV_LINKS = [
  {label: 'Hotel', href: '#hotel'},
  {label: 'Rooms', href: '#rooms'},
  {label: 'Restaurant', href: '#restaurant'},
  {label: 'Gallery', href: '#gallery'},
  {label: 'Location', href: '#location'},
];

export function Navbar({onOpenStudio, photoCount}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#FAF7F2]/95 text-[#171310] backdrop-blur-md border-b border-[#171310]/10'
            : 'bg-transparent text-[#FAF7F2]'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 lg:px-10">
          {/* Zone 1: Single-element Brand Wordmark */}
          <a
            href="#top"
            onClick={handleLinkClick}
            className="font-serif text-2xl font-medium tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6239]"
          >
            Hotel Anjali
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-opacity duration-200 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C6239] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                  scrolled ? 'after:bg-[#171310]' : 'after:bg-[#FAF7F2]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6239] ${
                scrolled
                  ? 'bg-[#171310] text-[#FAF7F2] hover:bg-[#2C241E]'
                  : 'bg-[#FAF7F2] text-[#171310] hover:bg-[#F0EBE2]'
              }`}
            >
              Contact
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex md:hidden h-11 w-11 items-center justify-center transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8C6239]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -12}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -12}}
            transition={{duration: 0.22, ease: [0.16, 1, 0.3, 1]}}
            className="fixed inset-x-0 top-16 bottom-0 z-30 bg-[#FAF7F2] text-[#171310] md:hidden overflow-y-auto border-t border-[#171310]/10"
          >
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-col px-6 py-8 divide-y divide-[#171310]/10"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-4 font-serif text-2xl tracking-tight text-[#171310] transition-colors hover:text-[#8C6239]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="py-4 font-serif text-2xl tracking-tight text-[#171310] transition-colors hover:text-[#8C6239]"
              >
                Contact
              </a>
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenStudio();
                  }}
                  className="w-full py-3.5 px-5 border border-[#171310]/20 text-sm font-medium text-[#171310] hover:bg-[#F0EBE2] transition-colors text-center"
                >
                  {photoCount > 0 ? `Manage Photos (${photoCount})` : 'Upload Hotel Photos'}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
