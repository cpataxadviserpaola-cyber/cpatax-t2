import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { pageHead } from '../data/seo.js';

// Keeps the head's title, description, keywords, canonical URL, and sharing tags (see
// src/data/seo.js) in step with the page shown as visitors move around the site. Each
// built page already starts with its own; they carry data-seo so they can be swapped out.
export default function PageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, tags } = pageHead(pathname);
    document.title = title;
    document.head.querySelectorAll('[data-seo]').forEach((element) => element.remove());
    for (const attributes of tags) {
      const element = document.createElement(attributes.rel ? 'link' : 'meta');
      for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
      element.setAttribute('data-seo', '');
      document.head.append(element);
    }
  }, [pathname]);

  return null;
}
