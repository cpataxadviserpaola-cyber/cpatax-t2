import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView.js';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Counts up from 0 to a whole-number value once, when it first scrolls into view.
// Non-numeric values, and visitors who prefer reduced motion, see the final value straight
// away. Screen readers always get the final value.
export default function CountUp({ value, duration = 1600 }) {
  const target = Number(value);
  const isNumber = Number.isFinite(target);
  const [animate] = useState(() => isNumber && !prefersReducedMotion());
  const [current, setCurrent] = useState(animate ? 0 : target);
  const [ref, inView] = useInView(0.5);

  useEffect(() => {
    if (!animate || !inView) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animate, inView, target, duration]);

  if (!isNumber) return value;
  return (
    <span ref={ref}>
      <span aria-hidden="true">{current}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
