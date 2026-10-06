// Runs after `npm run build`. Saves a copy of the built index.html for every page in
// src/data/seo.js with that page's title, description, keywords, canonical URL, and sharing
// tags in its head, so search engines and link previews, which don't run the site's script,
// see them. Also saves 404.html, which hosts serve for any other address (the site's script
// then shows the right page, or "page not found").
//
// Usage: node scripts/seo-pages.js [build folder, default dist]

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pageHead, pages } from '../src/data/seo.js';
import { servicePath, services } from '../src/data/services.js';

const outDir = process.argv[2] ?? 'dist';

const missing = services.map(servicePath).filter((path) => !(path in pages));
if (missing.length) {
  console.error(`src/data/seo.js has no entry for these service pages: ${missing.join(', ')}`);
  process.exit(1);
}

const escape = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderHead({ title, tags }) {
  const lines = tags.map((attributes) => {
    const list = Object.entries(attributes).map(([name, value]) => `${name}="${escape(value)}"`);
    return `<${attributes.rel ? 'link' : 'meta'} ${list.join(' ')} data-seo />`;
  });
  return [`<title>${escape(title)}</title>`, ...lines].join('\n    ');
}

// The built page with its title and data-seo tags taken out, and a marker where they go.
const shell = readFileSync(join(outDir, 'index.html'), 'utf8')
  .replace(/<title>[\s\S]*?<\/title>/, '%SEO%')
  .replace(/\s*<(?:meta|link)\b[^>]*\bdata-seo\b[^>]*>/g, '');

function save(file, path) {
  const target = join(outDir, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, shell.replace('%SEO%', () => renderHead(pageHead(path))));
}

// Each page is saved as <address>/index.html, and also as <address>.html when its address
// has no closing slash, so it is found however the host maps addresses to files.
for (const path of Object.keys(pages)) {
  if (path === '/') save('index.html', path);
  else if (path.endsWith('/')) save(`${path}index.html`, path);
  else {
    save(`${path}.html`, path);
    save(`${path}/index.html`, path);
  }
}
save('404.html', null);

console.log(`SEO tags written for ${Object.keys(pages).length} pages and 404.html.`);
