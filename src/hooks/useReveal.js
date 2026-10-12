import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Adds `is-visible` to each `.reveal` element the first time it scrolls into view, so
// sections can rise in (see "Scroll reveal" in styles.css). Runs again on every page change.
export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    document.documentElement.classList.add('has-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
    );

    const watch = (root) => root.querySelectorAll('.reveal:not(.is-visible)').forEach((node) => observer.observe(node));
    watch(document);

    // A guide renders only once its code has downloaded, after this has run, so also watch
    // for `.reveal` elements added later.
    const additions = new MutationObserver((mutations) => {
      mutations.forEach((mutation) =>
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          if (node.matches('.reveal:not(.is-visible)')) observer.observe(node);
          watch(node);
        }),
      );
    });
    additions.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      additions.disconnect();
    };
  }, [pathname]);
}
