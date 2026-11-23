import {
  PointerEvent as ReactPointerEvent,
  ReactNode,
  useEffect,
  useRef,
} from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  liftPx?: number;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 4.5,
  liftPx = 8,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const canTiltRef = useRef(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapability = () => {
      canTiltRef.current = hoverQuery.matches && !motionQuery.matches;
      if (!canTiltRef.current && cardRef.current) {
        cardRef.current.style.transform = '';
      }
    };

    updateCapability();
    hoverQuery.addEventListener('change', updateCapability);
    motionQuery.addEventListener('change', updateCapability);

    return () => {
      hoverQuery.removeEventListener('change', updateCapability);
      motionQuery.removeEventListener('change', updateCapability);
    };
  }, []);

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!canTiltRef.current || e.pointerType === 'touch') return;
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const px = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    const py = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);

    const rotY = (px - 0.5) * 2 * maxTilt;
    const rotX = (0.5 - py) * 2 * maxTilt;

    el.style.setProperty('--glow-x', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--glow-y', `${(py * 100).toFixed(1)}%`);
    el.style.transform = `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translate3d(0, -${liftPx}px, 0)`;
  };

  const handlePointerLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`tilt-host relative ${className}`}
    >
      <span aria-hidden="true" className="tilt-sheen-layer" />
      {children}
    </div>
  );
}
