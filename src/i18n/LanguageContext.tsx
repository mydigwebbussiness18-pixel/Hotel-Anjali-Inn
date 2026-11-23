import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {HotelPhoto} from '../data/hotelAnjaliPhotos';
import {LanguageCode, TRANSLATIONS, TranslationSchema} from './translations';

const STORAGE_KEY = 'hotel_anjali_lang';

function isValidLanguage(value: string | null): value is LanguageCode {
  return value === 'en' || value === 'gu' || value === 'hi';
}

function resolveInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en';

  try {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    if (isValidLanguage(paramLang)) {
      return paramLang;
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (isValidLanguage(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage/URL access errors
  }

  return 'en';
}

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationSchema;
  getPhotoCopy: (photo: HotelPhoto) => {title: string; subtitle: string};
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({children}: {children: ReactNode}) {
  const [language, setLanguageState] = useState<LanguageCode>(resolveInitialLanguage);

  const setLanguage = (next: LanguageCode) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage access errors
    }
  };

  useEffect(() => {
    const dict = TRANSLATIONS[language];
    document.documentElement.lang = language;
    document.title = dict.meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', dict.meta.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', dict.meta.title);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', dict.meta.description);
    }
  }, [language]);

  const t = TRANSLATIONS[language];

  const getPhotoCopy = (photo: HotelPhoto) => {
    return t.photos[photo.id] ?? {title: photo.title, subtitle: photo.subtitle};
  };

  return (
    <LanguageContext.Provider value={{language, setLanguage, t, getPhotoCopy}}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
