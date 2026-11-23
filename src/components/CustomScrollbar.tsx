import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const MIN_THUMB_HEIGHT = 44;

export function CustomScrollbar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [isScrollable, setIsScrollable] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const metricsRef = useRef({
    maxScroll: 0,
    thumbHeight: MIN_THUMB_HEIGHT,
    maxThumbTravel: 0,
    scrollHeight: 0,
    clientHeight: 0,
  });

  const dragStateRef = useRef({
    active: false,
    startY: 0,
    startScrollY: 0,
  });

  const rafIdRef = useRef<number>(0);

  const syncMetricsAndThumb = useCallback(() => {
    const docEl = document.documentElement;
    const scrollHeight = Math.max(
      docEl.scrollHeight,
      document.body ? document.body.scrollHeight : 0,
    );
    const clientHeight = window.innerHeight || docEl.clientHeight;
    const maxScroll = Math.max(scrollHeight - clientHeight, 0);
    const canScroll = maxScroll > 4;

    setIsScrollable(canScroll);

    const trackEl = trackRef.current;
    const thumbEl = thumbRef.current;
    if (!trackEl || !thumbEl || !canScroll) return;

    const trackHeight = trackEl.clientHeight;
    if (trackHeight <= 0) return;

    const rawThumb = Math.round((clientHeight / scrollHeight) * trackHeight);
    const maxAllowedThumb = Math.max(
      MIN_THUMB_HEIGHT,
      Math.round(trackHeight * 0.65),
    );
    const thumbHeight = Math.min(
      Math.max(rawThumb, MIN_THUMB_HEIGHT),
      maxAllowedThumb,
    );
    const maxThumbTravel = Math.max(trackHeight - thumbHeight, 0);

    metricsRef.current = {
      maxScroll,
      thumbHeight,
      maxThumbTravel,
      scrollHeight,
      clientHeight,
    };

    const currentScrollY = Math.min(Math.max(window.scrollY, 0), maxScroll);
    const ratio = maxScroll > 0 ? currentScrollY / maxScroll : 0;
    const thumbTop = ratio * maxThumbTravel;

    thumbEl.style.height = `${thumbHeight}px`;
    thumbEl.style.transform = `translate3d(0, ${thumbTop}px, 0)`;

    const nextPercent = Math.round(ratio * 100);
    setScrollPercent((prev) => (prev === nextPercent ? prev : nextPercent));
  }, []);

  useEffect(() => {
    const scheduleSync = () => {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(syncMetricsAndThumb);
    };

    syncMetricsAndThumb();

    window.addEventListener('scroll', scheduleSync, {passive: true});
    window.addEventListener('resize', scheduleSync, {passive: true});

    const resizeObserver = new ResizeObserver(scheduleSync);
    resizeObserver.observe(document.documentElement);
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);
      resizeObserver.disconnect();
    };
  }, [syncMetricsAndThumb]);

  useEffect(() => {
    if (!isDragging) return;

    document.documentElement.classList.add('anjali-scrollbar-dragging');

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragStateRef.current.active) return;
      const {maxScroll, maxThumbTravel} = metricsRef.current;
      if (maxThumbTravel <= 0 || maxScroll <= 0) return;

      const deltaY = e.clientY - dragStateRef.current.startY;
      const scrollDelta = (deltaY / maxThumbTravel) * maxScroll;
      const targetScroll = Math.min(
        Math.max(dragStateRef.current.startScrollY + scrollDelta, 0),
        maxScroll,
      );

      window.scrollTo({
        top: targetScroll,
        behavior: 'instant' as ScrollBehavior,
      });
    };

    const handlePointerUp = () => {
      dragStateRef.current.active = false;
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove, {passive: true});
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      document.documentElement.classList.remove('anjali-scrollbar-dragging');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  const handleThumbPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();
    e.stopPropagation();

    dragStateRef.current = {
      active: true,
      startY: e.clientY,
      startScrollY: window.scrollY,
    };
    setIsDragging(true);
  };

  const handleTrackMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (thumbRef.current && thumbRef.current.contains(e.target as Node)) return;
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const rect = trackEl.getBoundingClientRect();
    const {maxScroll, thumbHeight, maxThumbTravel} = metricsRef.current;
    if (maxThumbTravel <= 0 || maxScroll <= 0) return;

    const clickY = e.clientY - rect.top - thumbHeight / 2;
    const clampedThumbY = Math.min(Math.max(clickY, 0), maxThumbTravel);
    const targetScroll = (clampedThumbY / maxThumbTravel) * maxScroll;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const {maxScroll, clientHeight} = metricsRef.current;
    if (maxScroll <= 0) return;

    let target: number | null = null;
    if (e.key === 'ArrowDown') {
      target = Math.min(window.scrollY + 90, maxScroll);
    } else if (e.key === 'ArrowUp') {
      target = Math.max(window.scrollY - 90, 0);
    } else if (e.key === 'PageDown' || e.key === ' ') {
      target = Math.min(window.scrollY + clientHeight * 0.85, maxScroll);
    } else if (e.key === 'PageUp') {
      target = Math.max(window.scrollY - clientHeight * 0.85, 0);
    } else if (e.key === 'Home') {
      target = 0;
    } else if (e.key === 'End') {
      target = maxScroll;
    }

    if (target !== null) {
      e.preventDefault();
      window.scrollTo({top: target, behavior: 'smooth'});
    }
  };

  const isExpanded = isDragging || isHovered;

  return (
    <div
      className={`fixed right-[4px] top-[78px] bottom-3 z-[45] flex w-3.5 justify-center transition-opacity duration-300 sm:right-2 sm:top-[84px] sm:bottom-4 sm:w-4 ${
        isScrollable ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Track Container (slim visual rail inside wider pointer hit target) */}
      <div
        ref={trackRef}
        role="scrollbar"
        tabIndex={isScrollable ? 0 : -1}
        aria-label="Vertical page scrollbar"
        aria-controls="main-content"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={scrollPercent}
        onMouseDown={handleTrackMouseDown}
        onKeyDown={handleKeyDown}
        className="group relative flex h-full w-full cursor-pointer justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4C293]"
      >
        {/* Slim Dark Navy Track */}
        <div
          aria-hidden="true"
          className={`relative h-full overflow-visible rounded-full border border-[#E4C293]/25 bg-[#0B172A]/82 backdrop-blur-md transition-all duration-200 shadow-[0_6px_20px_rgba(6,12,24,0.34)] ${
            isExpanded
              ? 'w-[8px] border-[#E4C293]/45 bg-[#0B172A]/92 sm:w-[10px]'
              : 'w-[5px] sm:w-[8px]'
          }`}
        >
          {/* Subtle inner champagne hairline accent */}
          <div className="pointer-events-none absolute inset-y-2 left-1/2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#E4C293]/20 to-transparent" />

          {/* Draggable Golden Scrollbar Thumb */}
          <div
            ref={thumbRef}
            onPointerDown={handleThumbPointerDown}
            className={`absolute inset-x-[1px] top-0 rounded-full border border-[#FFF2D4]/55 will-change-transform transition-[box-shadow,filter,border-color] duration-200 ${
              isDragging
                ? 'cursor-grabbing border-[#FFF6DE]/85 brightness-110 shadow-[0_0_20px_rgba(228,194,147,0.78),0_0_8px_rgba(243,217,164,0.65)]'
                : isHovered
                  ? 'cursor-grab border-[#FFF2D4]/75 brightness-105 shadow-[0_0_16px_rgba(228,194,147,0.62),0_2px_8px_rgba(11,23,42,0.45)]'
                  : 'cursor-grab shadow-[0_0_11px_rgba(212,169,94,0.42),0_2px_6px_rgba(11,23,42,0.42)]'
            }`}
            style={{
              height: `${MIN_THUMB_HEIGHT}px`,
              background:
                'linear-gradient(180deg, #F4DBA7 0%, #D9AC62 48%, #9E723C 100%)',
              touchAction: 'none',
            }}
          >
            {/* Subtle top-to-bottom metallic crest sheen inside thumb */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[1.5px] top-1.5 bottom-1.5 rounded-full bg-gradient-to-b from-[#FFF8E8]/35 via-transparent to-[#5B3D1A]/25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
