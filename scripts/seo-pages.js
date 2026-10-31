// Runs after `npm run build`. Saves a copy of the built index.html for every page in
// src/data/seo.js with that page's title, description, keywords, canonical URL, and sharing
// tags in its head, so search engines and link previews, which don't run the site's script,
// see them. Also saves 404.html, which hosts serve for any other address (the site's script
// then shows the right page, or "page not found"). The home page's copy also asks for the
// banner's first photo straight away, and every other page's copy asks for that page's own
// code alongside the site's main script instead of after it.
//
// Usage: node scripts/seo-pages.js [build folder, default dist]

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { pageHead, pages } from '../src/data/seo.js';
import { hiddenServiceIds, servicePath, services } from '../src/data/services.js';
import { industries, industryPath } from '../src/data/industries.js';
import { articlePages, topicPages } from '../src/data/guides.js';

const outDir = process.argv[2] ?? 'dist';

const ownPages = [
  ...services.map(servicePath),
  ...industries.map(industryPath),
  ...Object.values(topicPages),
  ...Object.values(articlePages),
];
const missing = ownPages.filter((path) => !(path in pages));
if (missing.length) {
  console.error(`src/data/seo.js has no entry for these service, industry, or guide pages: ${missing.join(', ')}`);
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

// The built page with its title, data-seo tags, and data-preload hints taken out, and a marker
// where they go.
const shell = readFileSync(join(outDir, 'index.html'), 'utf8')
  .replace(/<title>[\s\S]*?<\/title>/, '%SEO%')
  .replace(/\s*<(?:meta|link)\b[^>]*\bdata-(?:seo|preload)\b[^>]*>/g, '');

// The folder the site is served from ('/', or for example '/CPATaxAdviser/'), as the built
// page's script address shows it.
const base = shell.match(/<script type="module"[^>]*\bsrc="([^"]*?)assets\//)?.[1] ?? '/';

// The home page's first slide photo (see src/components/HomeHero.jsx; keep this in step with
// the first slide's `photo`). The page asks for it straight away instead of once the site's
// script has drawn the slide, so the banner shows sooner. Same choice of sizes as the slide.
const homePhoto = `${base}hero/client-meeting`;
const homePreload =
  `<link rel="preload" as="image" href="${homePhoto}-1920.webp" ` +
  `imagesrcset="${homePhoto}-960.webp 960w, ${homePhoto}-1920.webp 1920w" imagesizes="100vw" ` +
  'fetchpriority="high" data-preload />';

// Each page's own code (every page but Home is a file of its own, see src/App.jsx), by address.
// App.jsx names a page's code as `const Name = lazy(() => import('./…'))` (or `id: lazy(…)`
// for an industry page) and gives its address as <Route path="…" element={<Name …; service
// and industry pages take theirs from their data files.
function pageCode() {
  const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
  const source = {};
  for (const [, name, id, file] of app.matchAll(/(?:const (\w+) =|'?([\w-]+)'?:) lazy\(\(\) => import\('\.\/([^']+)'\)\)/g)) {
    source[name ?? id] = `src/${file}`;
  }
  const byPath = {};
  for (const [, path, name] of app.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<(\w+)/g)) {
    if (source[name]) byPath[`/${path}`] = source[name];
  }
  for (const service of services) byPath[servicePath(service)] = source.ServiceDetail;
  for (const industry of industries) byPath[industryPath(industry)] = source[industry.id];
  return byPath;
}
const codeByPath = pageCode();
const codeFor = (path) => codeByPath[path] ?? codeByPath[path.replace(/\/$/, '')] ?? codeByPath[`${path}/`];

// The build's list of files for each source file (see vite.config.js).
const manifestFile = join(outDir, '.vite', 'manifest.json');
const manifest = existsSync(manifestFile) ? JSON.parse(readFileSync(manifestFile, 'utf8')) : {};
// A file and the files it imports, leaving out any in `skip`.
function filesOf(key, skip = new Set(), found = new Set()) {
  const chunk = manifest[key];
  if (!chunk || skip.has(chunk.file) || found.has(chunk.file)) return found;
  found.add(chunk.file);
  for (const dep of chunk.imports ?? []) filesOf(dep, skip, found);
  return found;
}
// The main script and what it imports, which the page already asks for.
const mainFiles = filesOf('index.html');

const unmatched = [];
function codePreloads(path) {
  if (path === '/') return [];
  const code = codeFor(path);
  const files = code ? [...filesOf(code, mainFiles)] : [];
  if (!files.length) unmatched.push(path);
  return files.map((file) => `<link rel="modulepreload" crossorigin href="${base}${file}" data-preload />`);
}

function save(file, path) {
  const target = join(outDir, file);
  mkdirSync(dirname(target), { recursive: true });
  const extra = path === null ? [] : path === '/' ? [homePreload] : codePreloads(path);
  const head = [renderHead(pageHead(path)), ...extra].join('\n    ');
  writeFileSync(target, shell.replace('%SEO%', () => head));
}

// Each page is saved as <address>/index.html, and also as <address>.html when its address
// has no closing slash, so it is found however the host maps addresses to files. A hidden
// service's page isn't saved: its address gets 404.html, and the site's script forwards it to
// /services.
const hiddenPaths = new Set(hiddenServiceIds.map((id) => `/services/${id}`));
const shown = Object.keys(pages).filter((path) => !hiddenPaths.has(path));
for (const path of shown) {
  if (path === '/') save('index.html', path);
  else if (path.endsWith('/')) save(`${path}index.html`, path);
  else {
    save(`${path}.html`, path);
    save(`${path}/index.html`, path);
  }
}
save('404.html', null);

console.log(`SEO tags written for ${shown.length} pages and 404.html.`);
// Such a page still works; it just fetches its code a little later.
if (unmatched.length) {
  console.warn(`No early code fetch for (check its route in src/App.jsx): ${[...new Set(unmatched)].join(', ')}`);
}
