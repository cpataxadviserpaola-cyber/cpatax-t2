import { useEffect } from 'react';
import { site } from '../data/site.js';

// Sets the browser tab title and meta description for the current page.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${site.name}`
      : `${site.name} | Simpsonville, SC CPA Firm Serving Clients Nationwide`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
