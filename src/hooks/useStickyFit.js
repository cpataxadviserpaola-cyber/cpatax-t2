import { useEffect, useRef } from 'react';

// For a sticky sidebar that can be taller than the window (a long list on a laptop screen).
// Sets --sticky-max on the element to the room left below it, so styles.css can cap its
// `top` with min(): a sidebar that fits sticks under the header as usual, and one that
// doesn't scrolls with the page until its bottom (and the button there) is in view, then
// sticks there instead of keeping its end out of reach.
export default function useStickyFit(gap = 24) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const update = () => {
      node.style.setProperty('--sticky-max', `${window.innerHeight - node.offsetHeight - gap}px`);
    };

    update();
    window.addEventListener('resize', update);
    // Also re-measure when the sidebar itself changes height (web fonts loading, a resize
    // that rewraps its text).
    const observer = 'ResizeObserver' in window ? new ResizeObserver(update) : null;
    observer?.observe(node);
    return () => {
      window.removeEventListener('resize', update);
      observer?.disconnect();
    };
  }, [gap]);

  return ref;
}
