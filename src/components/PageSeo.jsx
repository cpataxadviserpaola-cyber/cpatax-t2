import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

// Keeps the head's title, description, keywords, canonical URL, and sharing tags (see
// src/data/seo.js) in step with the page shown as visitors move around the site. Each
// built page already starts with its own; they carry data-seo so they can be swapped out.
// The first page shown needs nothing from seo.js (every page's details), so it downloads
// only once the visitor moves to another page.
export default function PageSeo() {
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    // The built page's own tags are already right when they're for this address. (The dev
    // server's page and 404.html, which hosts also serve for addresses they don't know, have
    // no canonical address.)
    if (first.current) {
      first.current = false;
      const canonical = document.head.querySelector('link[rel="canonical"][data-seo]');
      const trim = (path) => path.replace(/\/$/, '');
      if (canonical && trim(new URL(canonical.href).pathname) === trim(pathname)) return undefined;
    }
    let current = true;
    import('../data/seo.js').then(({ pageHead }) => {
      // A newer page took over while the file was downloading.
      if (!current) return;
      const { title, tags } = pageHead(pathname);
      document.title = title;
      document.head.querySelectorAll('[data-seo]').forEach((element) => element.remove());
      for (const attributes of tags) {
        const element = document.createElement(attributes.rel ? 'link' : 'meta');
        for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
        element.setAttribute('data-seo', '');
        document.head.append(element);
      }
    });
    return () => {
      current = false;
    };
  }, [pathname]);

  return null;
}
