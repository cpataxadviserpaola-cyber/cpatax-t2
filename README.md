# CPATaxAdviser

Website for **CPA Tax Adviser**, a South Carolina licensed CPA firm in Simpsonville, SC. Content is based on [cpataxadviser.com](https://www.cpataxadviser.com/).

A premium, editorial website for a CPA and tax advisory firm, built with **React 19**, **React Router 7** and **Vite**.

## Design

- **Palette**: warm ivory pages with deep wine panels and champagne-gold and crimson accents, taken from the logo. All colors are CSS variables at the top of `src/styles.css`.
- **Type**: *Instrument Serif* for headings (with italic accents) and *Manrope* for text, loaded from Google Fonts in `index.html`.
- **Layout**: a deep wine header under a thin top bar that counts down to the next IRS deadline (the header turns to frosted glass and gets slimmer as the page scrolls), light editorial page headers, and rounded card panels. Signature details include fine gold and crimson "ribbon" lines echoing the logo (`Ribbons.jsx`), cards that stack as you scroll on the Home page, and sections that rise in as they scroll into view (`useReveal.js`). All motion is switched off for visitors who prefer reduced motion.

## Getting started

Requires [Node.js](https://nodejs.org) 20.19+ or 22.12+.

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/, with each page's SEO tags written in
npm run preview   # serve the production build locally
```

## Pages

| Route | Component | Contents |
| --- | --- | --- |
| `/` | `src/pages/Home.jsx` | Centered hero over a showcase (founder portrait, next IRS deadline countdown, key facts), mission and who we serve, services directory, what sets us apart (stacking cards), comparison, tax opportunity finder, team, process, FAQ |
| `/services` | `src/pages/Services.jsx` | Services grouped by business, individual, and international, each group beside its introduction; industries; financial planning |
| `/services/:id` | `src/pages/ServiceDetail.jsx` | One page per service (see the ids in `src/data/services.js`): overview, what to expect, process, FAQs beside a "What's included" card that stays in view, then related services |
| `/about` | `src/pages/About.jsx` | Firm story and key facts, mission, core values, team |
| `/client-center` | `src/pages/ClientCenter.jsx` | Client portal, online payment, scheduling, refund tracking, upcoming IRS deadlines, 2026 pricing (individual and business tabs) |
| `/financial-planning` | `src/pages/FinancialPlanning.jsx` | Financial planning through Yellow Oak Financial Planning |
| `/contact` | `src/pages/Contact.jsx` | Contact form, address, phone, fax, email, online scheduling |
| anything else | `src/pages/NotFound.jsx` | 404 page |

## Project structure

```
index.html              HTML shell and fonts
scripts/seo-pages.js    After a build, writes each page's HTML with its SEO tags
public/favicon.svg      Site icon
public/team/            Team photos
public/files/           Downloads (2026 pricing guide PDF)
src/
  main.jsx              App entry: router and global styles
  App.jsx               Route definitions
  styles.css            All site styles; colors and fonts are CSS variables at the top
  data/
    seo.js              Each page's title, description, keywords, and sharing tags
    site.js             Firm name, phone, email, address, hours, form endpoint, commitments
    services.js         The services and all the content of their pages (also feeds the
                        Home directory, footer and contact form)
    deadlines.js        IRS deadlines for the top bar, Home countdown, closing call to
                        action, and the Client Center's tax calendar
    opportunities.js    Situations and tax opportunities for the Home page finder
    team.js             Team directory (Home and About pages)
    pricing.js          Pricing tiers shown in the Client Center (from the 2026 pricing guide)
    yearPlan.js         A client's check-ins through the year (Home hero and timeline)
  components/           Layout, TopBar, Header, Footer, ContactForm, Icon and shared sections
                        (PageHero, SectionHead, ServicesDirectory, WhyUs, Comparison,
                        ProcessSteps, FaqSection, CtaSection, Ribbons…)
  hooks/
    useReveal.js        Fades `.reveal` elements in as they scroll into view
  utils/asset.js        Resolves files in public/ against the site's base URL
  pages/                One component per route
```

## Editing content

Content lives in data files, so each change updates every page that uses it:

- **`src/data/site.js`**: firm details (phone, fax, email, address, slogan, mission), the current client announcement, links to the client portal, payments, scheduling, and social profiles, and the key facts shown on the Home and About pages.
- **`src/data/services.js`**: everything about each service, including its group, menu tagline, page headline, overview, "What's included" list, highlights, process steps, FAQs, notices, and related services, plus the industries list. Adding an entry here creates a new service page and menu item automatically.
- **`src/data/team.js`**: team members, roles, bios, and photos (portrait files go in `public/team/`).
- **`src/data/pricing.js`**: pricing tiers shown in the Client Center. Update it together with the PDF in `public/files/`.
- **`src/data/deadlines.js`**: the tax deadlines counted down in the top bar. Past dates drop off on their own; add the next year's dates before the list runs out.
- **`src/data/seo.js`**: each page's search title, meta description, keywords, and what shared links show (Open Graph and X), by page address. Canonical URLs are built from `siteUrl` there. `npm run build` writes these into every page's HTML so search engines and link previews see them.

When the firm starts accepting individual clients again, update `announcement` in `site.js`, remove the `notice` on the individual service in `services.js`, and adjust the waiting-list notes on the Contact page and in the Home FAQ.

### Contact form

Until a form service is connected, the form opens the visitor's email app with the message filled in. To receive submissions directly, create a form endpoint (for example with [Formspree](https://formspree.io)) and set it in `src/data/site.js`:

```js
formEndpoint: 'https://formspree.io/f/your-id',
```

## Deploying

`npm run build` outputs a static site to `dist/` that any static host can serve (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a regular web server). The build also copies `index.html` to `404.html`, so direct links such as `/services` still load on hosts that serve a 404 page for unknown paths.

### GitHub Pages

The site is served from `https://<username>.github.io/CPATaxAdviser/`, so build it with that base path:

```bash
npm run build:gh-pages
```

Then publish the contents of `dist/`, for example with a GitHub Actions workflow that uses `actions/upload-pages-artifact` and `actions/deploy-pages`, and set **Settings → Pages → Source** to **GitHub Actions**.
