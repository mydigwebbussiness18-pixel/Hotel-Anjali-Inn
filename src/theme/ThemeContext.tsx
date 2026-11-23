import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'hotel_anjali_theme';

function isValidTheme(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

function resolveInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isValidTheme(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access errors
  }

  return 'light';
}

interface ThemeContextValue {
  theme: ThemeMode;
  isDark: boolean;
  setTheme: (next: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({children}: {children: ReactNode}) {
  const [theme, setThemeState] = useState<ThemeMode>(resolveInitialTheme);

  const setTheme = (next: ThemeMode) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage access errors
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
