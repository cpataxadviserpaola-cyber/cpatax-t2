// Search and social-sharing details for every page, by its address. Edit a page's entry to
// change what search results and shared links show for it.
//
// title        browser tab and search-result title, used exactly as written
// description  meta description, shown under the title in search results
// keywords     meta keywords, separated by commas ('' leaves the tag out)
// og           optional overrides for shared links (Open Graph, also used by X): title,
//              description, image. Without them, shared links use the page's title and
//              description and the site's default image.
//
// Each page's canonical URL is siteUrl followed by its address. `npm run build` writes these
// tags into every page's HTML (scripts/seo-pages.js), so search engines and link previews
// read them without running the site's script, and PageSeo.jsx keeps them current as
// visitors move between pages. A new page or service needs an entry here; the build stops
// and names any service page that is missing one.

export const siteUrl = 'https://www.cpataxadviser.com';

// Image for shared links when a page has none of its own: a file in public/, ideally
// 1200 × 630 pixels (for example '/social/cpa-tax-adviser.png'). '' shares without one.
export const defaultImage = '';

export const pages = {
  '/': {
    title: 'CPA Tax Adviser | Simpsonville, SC CPA Firm Serving Clients Nationwide',
    description:
      'CPA Tax Adviser is a South Carolina licensed CPA firm in Simpsonville, SC, providing business tax preparation, tax planning, accounting, bookkeeping, payroll, QuickBooks, and international tax services nationwide, in English and Spanish.',
    keywords: '',
    og: {
      title: 'CPA Tax Adviser | Where tax strategy meets real business understanding',
      description:
        'South Carolina licensed CPA firm helping business owners, professionals, and individuals nationwide, in English and Spanish.',
    },
  },
  '/about': {
    title: 'About Us | CPA Tax Adviser',
    description:
      'Learn about CPA Tax Adviser, a South Carolina Minority/Women-Owned Business Enterprise founded by Paola Martinez, CPA, CFP®, and meet our team.',
    keywords: '',
  },
  '/services': {
    title: 'Services | CPA Tax Adviser',
    description:
      'Business tax preparation, tax planning, small business accounting, bookkeeping, payroll, business advisory, QuickBooks, individual, and international tax services from CPA Tax Adviser.',
    keywords: '',
  },

  // Service pages (addresses from src/data/services.js)
  '/services/business-tax': {
    title: 'Business Tax Preparation | CPA Tax Adviser',
    description:
      'It is important to develop a relationship with a tax preparation firm that understands how your business works. As your trusted advisor, we make sure you stay on top of your tax obligations and avoid penalties and fees that reduce your profitability.',
    keywords: '',
  },
  '/services/planning': {
    title: 'Tax Planning | CPA Tax Adviser',
    description:
      "Many people feel like their tax bill is too high. The good news is that it doesn't have to be. Planning is the key to successfully and legally reducing your tax liability.",
    keywords: '',
  },
  '/services/accounting': {
    title: 'Small Business Accounting | CPA Tax Adviser',
    description:
      'As accountants, we handle the numbers so you can focus on your product or service. As your trusted financial advisor, our job is to help you succeed.',
    keywords: '',
  },
  '/bookkeeping-services-in-simpsonville/': {
    title: 'Essential Bookkeeping Services for Small Businesses',
    description:
      'We provide accurate and reliable bookkeeping services to help small businesses keep their financial records organized, up to date, and tax-ready.',
    keywords:
      'bookkeeping services simpsonville sc, monthly bookkeeping for small business, quickbooks bookkeeper simpsonville sc, catch-up bookkeeping services, bookkeeper south carolina, bookkeeping services in simpsonville, bookkeeping company simpsonville',
  },
  '/services/payroll': {
    title: 'Payroll | CPA Tax Adviser',
    description:
      'On average, small business owners spend eight hours per month on payroll-related tasks. When you outsource payroll to us, a dedicated payroll specialist works with you throughout the entire process.',
    keywords: '',
  },
  '/services/advisory': {
    title: 'Business Advisory | CPA Tax Adviser',
    description:
      "We combine industry experience with time-tested solutions to develop a framework on which to build your company's success.",
    keywords: '',
  },
  '/services/quickbooks': {
    title: 'QuickBooks Services | CPA Tax Adviser',
    description:
      'After we set up your QuickBooks software, we customize it specifically for your business, including integrating third-party invoicing or bill pay software, and help you move toward paperless accounting.',
    keywords: '',
  },
  '/services/individual': {
    title: 'Individual Tax Preparation | CPA Tax Adviser',
    description:
      "Our goal is to minimize your tax liability. We stay up to date on federal and state tax laws through continuing education, so you don't miss out on the credits and deductions you are entitled to.",
    keywords: '',
  },
  '/services/individual-planning': {
    title: 'Individual Tax Projections & Strategies | CPA Tax Adviser',
    description:
      'Planning is the key to successfully and legally reducing your tax liability. A tax projection shows where you stand while there is still time to act, and our strategies help you act on it.',
    keywords: '',
  },
  '/services/international': {
    title: 'International Tax Services | CPA Tax Adviser',
    description:
      'Nonresidents, expatriates, and individuals with foreign income face unique challenges when filing U.S. taxes. We simplify the process, keep you compliant, and look for every treaty benefit available to you.',
    keywords: '',
  },

  '/tax-season': {
    title: 'Tax Season | CPA Tax Adviser',
    description:
      'Our tax season process, pricing and the 2026 pricing guide, the client portal tutorial and login, a tax tool box, and upcoming IRS deadlines for CPA Tax Adviser clients.',
    keywords: '',
  },
  '/industries': {
    title: 'Industries | CPA Tax Adviser',
    description:
      'Accounting, bookkeeping, payroll, and tax services for real estate, healthcare, legal, manufacturing, restaurants, retail, e-commerce, contractors, investment advisers, MWBEs, and marketing agencies.',
    keywords: '',
  },
  '/resources': {
    title: 'Resources | CPA Tax Adviser',
    description:
      'Articles, guides, the newsletter, and answers to frequently asked questions from CPA Tax Adviser.',
    keywords: '',
  },
  '/financial-planning': {
    title: 'Financial Planning | CPA Tax Adviser',
    description:
      'Personalized financial guidance beyond tax season through our affiliated firm, Yellow Oak Financial Planning.',
    keywords: '',
  },
  '/contact': {
    title: 'Contact Us | CPA Tax Adviser',
    description:
      'Contact CPA Tax Adviser in Simpsonville, SC. Call (864) 432-6922, email contactus@cpataxadviser.com, or schedule a free initial consultation online.',
    keywords: '',
  },
  '/privacy': {
    title: 'Privacy Policy | CPA Tax Adviser',
    description:
      'How CPA Tax Adviser collects, protects, and shares nonpublic personal information, as required by the Gramm-Leach-Bliley Act.',
    keywords: '',
  },
  '/disclaimer': {
    title: 'Disclaimer | CPA Tax Adviser',
    description:
      'The terms that apply to the information on the CPA Tax Adviser website, including that it is not tax, accounting, or financial advice.',
    keywords: '',
  },
};

// Any address that isn't one of the pages above (the "page not found" page). It has no
// canonical URL and is kept out of search results.
export const notFound = {
  title: 'Page Not Found | CPA Tax Adviser',
  description: 'The page you were looking for could not be found.',
};

// The head of the page at `path`: its title, and its meta and link tags as lists of
// attributes. An address with or without a closing slash finds the same page.
export function pageHead(path) {
  const key = path && [path, path.replace(/\/$/, ''), `${path}/`].find((candidate) => candidate in pages);
  const page = key ? pages[key] : notFound;
  const share = { title: page.title, description: page.description, image: defaultImage, ...page.og };
  const url = key && siteUrl + key;
  const image = share.image && siteUrl + share.image;

  const tags = [
    { name: 'description', content: page.description },
    page.keywords && { name: 'keywords', content: page.keywords },
    !key && { name: 'robots', content: 'noindex' },
    url && { rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'CPA Tax Adviser' },
    { property: 'og:title', content: share.title },
    { property: 'og:description', content: share.description },
    url && { property: 'og:url', content: url },
    image && { property: 'og:image', content: image },
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: share.title },
    { name: 'twitter:description', content: share.description },
    image && { name: 'twitter:image', content: image },
  ];
  return { title: page.title, tags: tags.filter(Boolean) };
}
