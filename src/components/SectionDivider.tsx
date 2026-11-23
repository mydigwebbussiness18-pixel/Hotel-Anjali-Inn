import {useId} from 'react';
import {useTheme} from '../theme/ThemeContext';

interface SectionDividerProps {
  variant?: 'wave' | 'crest';
  from: string;
  to: string;
  darkFrom?: string;
  darkTo?: string;
  flip?: boolean;
  tone?: 'dark' | 'light';
}

export function SectionDivider({
  variant = 'wave',
  from,
  to,
  darkFrom,
  darkTo,
  flip = false,
  tone = 'light',
}: SectionDividerProps) {
  const uid = useId().replace(/:/g, '');
  const {isDark} = useTheme();

  const resolvedFrom = isDark && darkFrom ? darkFrom : from;
  const resolvedTo = isDark && darkTo ? darkTo : to;
  const effectiveTone = isDark ? 'dark' : tone;

  if (variant === 'crest') {
    const lineId = `crest-line-${uid}`;
    const bgId = `crest-bg-${uid}`;
    const strokeColor = effectiveTone === 'dark' ? '#F4DFB0' : '#9A712C';

    return (
      <div
        aria-hidden="true"
        className="relative flex h-12 w-full items-center justify-center overflow-hidden select-none sm:h-16"
        style={{
          background: `linear-gradient(to bottom, ${resolvedFrom} 0%, ${resolvedTo} 100%)`,
        }}
      >
        <svg
          className="h-7 w-full max-w-6xl px-6 lg:px-10"
          viewBox="0 0 1200 24"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={lineId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={strokeColor} stopOpacity="0" />
              <stop offset="20%" stopColor={strokeColor} stopOpacity="0.32" />
              <stop offset="46%" stopColor="#D4AF5F" stopOpacity="0.72" />
              <stop offset="50%" stopColor="#D4AF5F" stopOpacity="0" />
              <stop offset="54%" stopColor="#D4AF5F" stopOpacity="0.72" />
              <stop offset="80%" stopColor={strokeColor} stopOpacity="0.32" />
              <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
            </linearGradient>
            <linearGradient id={bgId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F4DFB0" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#9A712C" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Tapered Horizon Filaments */}
          <line
            x1="0"
            y1="12"
            x2="574"
            y2="12"
            stroke={`url(#${lineId})`}
            strokeWidth="1"
          />
          <line
            x1="626"
            y1="12"
            x2="1200"
            y2="12"
            stroke={`url(#${lineId})`}
            strokeWidth="1"
          />

          {/* Subtle flanking ticks */}
          <circle cx="582" cy="12" r="1.45" fill="#D4AF5F" fillOpacity="0.6" />
          <circle cx="618" cy="12" r="1.45" fill="#D4AF5F" fillOpacity="0.6" />

          {/* Centered architectural diamond ornament */}
          <path
            d="M600 4.5 L607.5 12 L600 19.5 L592.5 12 Z"
            fill={`url(#${bgId})`}
            stroke="#D4AF5F"
            strokeOpacity="0.78"
            strokeWidth="1.1"
          />
          <circle cx="600" cy="12" r="1.7" fill="#D4AF5F" fillOpacity="0.88" />
        </svg>
      </div>
    );
  }

  const waveGradientId = `wave-stroke-${uid}`;
  const curvePath = flip
    ? 'M0,24 C280,54 620,8 940,36 C1160,54 1320,20 1440,26'
    : 'M0,36 C320,8 660,54 980,26 C1180,8 1340,22 1440,34';

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden leading-none select-none"
      style={{backgroundColor: resolvedFrom}}
    >
      <svg
        className="block h-10 w-full sm:h-12 md:h-16"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={waveGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B68B3C" stopOpacity="0.16" />
            <stop offset="28%" stopColor="#D4AF5F" stopOpacity="0.62" />
            <stop offset="50%" stopColor="#F4DFB0" stopOpacity="0.88" />
            <stop offset="72%" stopColor="#D4AF5F" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#B68B3C" stopOpacity="0.16" />
          </linearGradient>
        </defs>

        <path d={`${curvePath} L1440,60 L0,60 Z`} fill={resolvedTo} />
        <path
          d={curvePath}
          stroke={`url(#${waveGradientId})`}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
