import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Scrolls to the top when the page changes, or to the matching section when the
// URL has a hash (e.g. /services#irs). Following a link to the page or section already
// shown (a menu link clicked twice) scrolls again too.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        // Web fonts can reflow the page after this first scroll (text above the target
        // grows), so line up again once they have loaded.
        if (document.fonts && document.fonts.status !== 'loaded') {
          document.fonts.ready.then(() => target.scrollIntoView());
        }
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, key]);

  return null;
}
