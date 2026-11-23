import {
  Check,
  ChevronDown,
  Globe,
  Instagram,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState} from 'react';
import {BUSINESS_LINKS} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {LanguageCode, SUPPORTED_LANGUAGES} from '../i18n/translations';
import {useTheme} from '../theme/ThemeContext';

interface NavbarProps {
  onOpenWhatsApp: () => void;
}

const SECTION_IDS = ['home', 'hotel', 'rooms', 'restaurant', 'gallery', 'location'] as const;

export function Navbar({onOpenWhatsApp}: NavbarProps) {
  const {language, setLanguage, t} = useLanguage();
  const {isDark, toggleTheme} = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const langOptionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const navLinks = [
    {label: t.nav.home, href: '#home', id: 'home'},
    {label: t.nav.hotel, href: '#hotel', id: 'hotel'},
    {label: t.nav.rooms, href: '#rooms', id: 'rooms'},
    {label: t.nav.restaurant, href: '#restaurant', id: 'restaurant'},
    {label: t.nav.gallery, href: '#gallery', id: 'gallery'},
    {label: t.nav.location, href: '#location', id: 'location'},
  ];

  const currentLang =
    SUPPORTED_LANGUAGES.find((opt) => opt.code === language) ?? SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 140;
      let current = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
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

  useEffect(() => {
    if (!langMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangMenuOpen(false);
        langButtonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [langMenuOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleSelectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setLangMenuOpen(false);
    langButtonRef.current?.focus();
  };

  const handleTriggerKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      setLangMenuOpen(true);
      const selectedIdx = SUPPORTED_LANGUAGES.findIndex((o) => o.code === language);
      const targetIdx =
        e.key === 'ArrowDown'
          ? (selectedIdx + 1) % SUPPORTED_LANGUAGES.length
          : (selectedIdx - 1 + SUPPORTED_LANGUAGES.length) % SUPPORTED_LANGUAGES.length;
      requestAnimationFrame(() => {
        langOptionRefs.current[targetIdx]?.focus();
      });
    }
  };

  const handleOptionKeyDown = (
    e: ReactKeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    const total = SUPPORTED_LANGUAGES.length;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      langOptionRefs.current[(idx + 1) % total]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      langOptionRefs.current[(idx - 1 + total) % total]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      langOptionRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      langOptionRefs.current[total - 1]?.focus();
    }
  };

  const isElevatedHeader = scrolled || mobileOpen;

  return (
    <>
      {/* Signature Imperial Velvet Burgundy Header — completely distinct from site Navy/Ivory surfaces */}
      <header
        className={`fixed inset-x-0 top-0 z-40 w-full max-w-full transition-all duration-300 ${
          isElevatedHeader
            ? 'border-b border-[#D4AF5F]/50 bg-gradient-to-r from-[#380816]/98 via-[#4F0E22]/98 to-[#380816]/98 text-[#FBF7EE] shadow-[0_12px_36px_rgba(28,4,11,0.48)] backdrop-blur-lg'
            : 'border-b border-[#F4DFB0]/35 bg-gradient-to-r from-[#4A0C1F]/92 via-[#63122B]/92 to-[#4A0C1F]/92 text-[#FBF7EE] shadow-[0_8px_28px_rgba(28,4,11,0.38)] backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:gap-3 lg:px-8 xl:gap-5 xl:px-10">
          {/* Zone 1: Official Hotel Anjali Inn Brand Logo & Title */}
          <a
            href="#home"
            onClick={handleLinkClick}
            aria-label="Hotel Anjali Inn — Home"
            className="group inline-flex min-w-0 items-center gap-2 sm:gap-3 shrink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4DFB0]"
          >
            <span className="inline-flex items-center shrink-0 border border-[#F4DFB0]/65 bg-white px-2 py-1 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[#F4DFB0] group-hover:shadow-[0_8px_22px_rgba(244,223,176,0.4)] sm:px-2.5">
              <img
                src={BUSINESS_LINKS.logoUrl}
                alt="Hotel Anjali Inn — Nilgiri Restaurant"
                className="h-8 w-auto object-contain sm:h-10"
              />
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              <span className="truncate font-serif text-[14px] min-[360px]:text-[15px] font-medium tracking-tight text-[#FBF7EE] transition-colors duration-200 group-hover:text-[#F4DFB0] sm:text-lg xl:text-[21px]">
                Hotel Anjali Inn
              </span>
              <span className="hidden xl:block mt-1 text-[9px] font-semibold tracking-[0.22em] uppercase text-[#F4DFB0]/90">
                Nilgiri Restaurant
              </span>
            </span>
          </a>

          {/* Zone 2: Clean single-line navigation links with sliding champagne-gold indicator */}
          <nav
            aria-label={t.nav.primaryLabel}
            className="hidden lg:flex min-w-0 items-center gap-3 xl:gap-5 text-[12.5px] xl:text-[13px] font-medium tracking-wide"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4DFB0] ${
                    isActive
                      ? 'text-[#F4DFB0] opacity-100'
                      : 'text-[#FBF7EE]/85 hover:text-[#F4DFB0]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="header-active-indicator"
                      transition={{duration: 0.28, ease: [0.16, 1, 0.3, 1]}}
                      className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-[#D4AF5F] via-[#F4DFB0] to-[#D4AF5F]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Dark/Light Toggle + Language Selector + Social + WhatsApp + Contact CTA */}
          <div className="flex items-center gap-1.5 shrink-0 sm:gap-2 xl:gap-2">
            {/* Dark / Light Mode Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? t.nav.switchToLightAria : t.nav.switchToDarkAria}
              title={isDark ? t.nav.switchToLightAria : t.nav.switchToDarkAria}
              className="inline-flex h-10 items-center justify-center gap-1.5 border border-[#F4DFB0]/40 bg-[#2C0511]/75 px-2.5 text-xs font-medium text-[#F4DFB0] whitespace-nowrap shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:bg-[#F4DFB0] hover:text-[#380816] hover:shadow-[0_8px_22px_rgba(244,223,176,0.38)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4DFB0]"
            >
              {isDark ? (
                <Sun className="h-3.5 w-3.5 shrink-0" />
              ) : (
                <Moon className="h-3.5 w-3.5 shrink-0" />
              )}
              <span className="hidden xl:inline tracking-wider uppercase">
                {isDark ? t.nav.lightLabel : t.nav.darkLabel}
              </span>
            </button>

            {/* Accessible Multi-Language Selector */}
            <div ref={langDropdownRef} className="relative">
              <button
                ref={langButtonRef}
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                onKeyDown={handleTriggerKeyDown}
                aria-haspopup="listbox"
                aria-expanded={langMenuOpen}
                aria-label={`${t.nav.languageSelectorLabel}: ${currentLang.nativeLabel}`}
                className="inline-flex h-10 items-center gap-1.5 border border-[#F4DFB0]/40 bg-[#2C0511]/75 px-2.5 text-xs font-medium text-[#FBF7EE] whitespace-nowrap shrink-0 transition-all duration-200 hover:border-[#F4DFB0] hover:bg-[#F4DFB0] hover:text-[#380816] hover:shadow-[0_8px_22px_rgba(244,223,176,0.38)] sm:px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4DFB0]"
              >
                <Globe className="h-3.5 w-3.5 shrink-0 opacity-90" />
                <span className="tracking-wider uppercase tabular-nums">
                  {currentLang.shortLabel}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                    langMenuOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{opacity: 0, y: 6}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 6}}
                    transition={{duration: 0.16, ease: [0.16, 1, 0.3, 1]}}
                    role="listbox"
                    aria-label={t.nav.languageSelectorLabel}
                    className="absolute right-0 top-[calc(100%+8px)] z-50 w-44 border border-[#D4AF5F]/50 bg-[#3B0817] py-1 text-[#FBF7EE] shadow-[0_18px_40px_rgba(20,3,8,0.55)]"
                  >
                    {SUPPORTED_LANGUAGES.map((option, idx) => {
                      const isSelected = language === option.code;
                      return (
                        <button
                          key={option.code}
                          ref={(el) => {
                            langOptionRefs.current[idx] = el;
                          }}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          lang={option.code}
                          onClick={() => handleSelectLanguage(option.code)}
                          onKeyDown={(e) => handleOptionKeyDown(e, idx)}
                          className={`group flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-xs transition-all duration-150 focus-visible:bg-[#5A1026] focus-visible:outline-none ${
                            isSelected
                              ? 'bg-[#5A1026] font-semibold text-[#F4DFB0] hover:bg-[#F4DFB0] hover:text-[#380816]'
                              : 'text-[#FBF7EE]/88 hover:bg-[#F4DFB0] hover:text-[#380816]'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="w-6 text-[10px] font-semibold tracking-wider uppercase text-[#F4DFB0] transition-colors group-hover:text-[#380816]">
                              {option.shortLabel}
                            </span>
                            <span className="text-sm">{option.nativeLabel}</span>
                          </span>
                          {isSelected && (
                            <Check className="h-3.5 w-3.5 shrink-0 text-[#F4DFB0] transition-colors group-hover:text-[#380816]" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={BUSINESS_LINKS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.nav.instagramAria}
              title={`Instagram · ${BUSINESS_LINKS.instagramHandle}`}
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center border border-[#F4DFB0]/40 bg-[#2C0511]/75 text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:bg-[#F4DFB0] hover:text-[#380816] hover:shadow-[0_8px_22px_rgba(244,223,176,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4DFB0]"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={onOpenWhatsApp}
              aria-label={t.nav.whatsappAria}
              title={t.nav.whatsappTitle}
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center border border-[#F4DFB0]/40 bg-[#146B43]/90 text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366]/75 hover:bg-[#198252] hover:shadow-[0_8px_22px_rgba(25,130,82,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-[#F4DFB0] via-[#D4AF5F] to-[#F4DFB0] px-3.5 xl:px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#380816] whitespace-nowrap shrink-0 shadow-[0_8px_20px_rgba(212,175,95,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_26px_rgba(244,223,176,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4DFB0]"
            >
              {t.nav.contact}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center border border-[#F4DFB0]/30 bg-[#2C0511]/70 text-[#FBF7EE] transition-all duration-200 hover:bg-[#F4DFB0] hover:text-[#380816] hover:shadow-[0_6px_18px_rgba(244,223,176,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4DFB0]"
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
            className="fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto border-t border-[#D4AF5F]/35 bg-gradient-to-b from-[#380816] to-[#26040E] text-[#FBF7EE] lg:hidden"
          >
            <nav
              aria-label={t.nav.mobileLabel}
              className="flex flex-col divide-y divide-[#F4DFB0]/15 px-6 py-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-4 font-serif text-2xl tracking-tight text-[#FBF7EE] transition-colors hover:text-[#F4DFB0]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reviews"
                onClick={handleLinkClick}
                className="py-4 font-serif text-2xl tracking-tight text-[#FBF7EE] transition-colors hover:text-[#F4DFB0]"
              >
                {t.nav.reviews}
              </a>
              <a
                href="#faq"
                onClick={handleLinkClick}
                className="py-4 font-serif text-2xl tracking-tight text-[#FBF7EE] transition-colors hover:text-[#F4DFB0]"
              >
                {t.nav.faq}
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="py-4 font-serif text-2xl tracking-tight text-[#FBF7EE] transition-colors hover:text-[#F4DFB0]"
              >
                {t.nav.contact}
              </a>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-pressed={isDark}
                  className="flex w-full items-center justify-between border border-[#D4AF5F]/45 bg-[#290510] px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#F4DFB0] transition-all duration-200 hover:bg-[#F4DFB0] hover:text-[#380816]"
                >
                  <span>{isDark ? t.nav.switchToLightAria : t.nav.switchToDarkAria}</span>
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenWhatsApp();
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#146B43] py-3.5 px-5 text-xs font-medium tracking-wider uppercase text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#105736] hover:shadow-[0_10px_22px_rgba(20,107,67,0.34)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.nav.whatsappInquiry}</span>
                </button>

                <a
                  href={BUSINESS_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="group inline-flex items-center justify-center gap-2 border border-[#F4DFB0]/45 bg-[#4D0D20] py-3.5 px-5 text-xs font-medium tracking-wider uppercase text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:bg-[#F4DFB0] hover:text-[#380816] hover:shadow-[0_10px_22px_rgba(244,223,176,0.28)]"
                >
                  <Instagram className="h-4 w-4 text-[#F4DFB0] transition-colors group-hover:text-[#380816]" />
                  <span>Instagram</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
