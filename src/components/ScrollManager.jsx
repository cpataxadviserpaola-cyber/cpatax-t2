import { useEffect } from 'react';
import { useLocation } from 'react-router';

// How long to wait for a section that isn't on the page yet (a guide whose code is still
// downloading) before giving up on scrolling to it.
const WAIT_FOR_TARGET_MS = 5000;

// Lines `target` up with the top of the window.
function scrollToTarget(target) {
  target.scrollIntoView();
  // Web fonts can reflow the page after this first scroll (text above the target
  // grows), so line up again once they have loaded.
  if (document.fonts && document.fonts.status !== 'loaded') {
    document.fonts.ready.then(() => target.scrollIntoView());
  }
}

// Scrolls to the top when the page changes, or to the matching section when the
// URL has a hash (e.g. /services#irs). Following a link to the page or section already
// shown (a menu link clicked twice) scrolls again too.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.slice(1)) : '';
    const target = id && document.getElementById(id);
    if (target) {
      scrollToTarget(target);
      return undefined;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (!id) return undefined;

    // A guide's code downloads the first time it's opened, so its sections may not be on the
    // page yet: scroll to the section once it appears.
    const watcher = new MutationObserver(() => {
      const found = document.getElementById(id);
      if (found) {
        stop();
        scrollToTarget(found);
      }
    });
    const timer = setTimeout(() => stop(), WAIT_FOR_TARGET_MS);
    function stop() {
      watcher.disconnect();
      clearTimeout(timer);
    }
    watcher.observe(document.body, { childList: true, subtree: true });
    return stop;
  }, [pathname, hash, key]);

  return null;
}
