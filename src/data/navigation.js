import { links } from './site.js';
import { findService, servicePath } from './services.js';
import { industries } from './industries.js';

// Main menu in the header: desktop dropdowns and the full-screen menu on small screens.
//
// An item with `columns` opens a dropdown. Each column holds groups, and each group has an
// optional heading and its links. A link has `to` (a page on this site, optionally with a
// #section) or `href` (another website, opened in a new tab), an `icon`, and an optional
// `text` shown under it. `compact` lays the links out as a tighter list. `foot` adds a strip
// at the bottom of the dropdown.

const service = (id, label) => {
  const item = findService(id);
  return { label, to: servicePath(item), icon: item.icon, text: item.tagline };
};

const industryLinks = industries.map((industry) => ({
  label: industry.title,
  to: `/industries#${industry.id}`,
  icon: industry.icon,
}));
const half = Math.ceil(industryLinks.length / 2);

export const mainNav = [
  {
    id: 'about',
    label: 'About',
    to: '/about',
    columns: [
      [
        {
          items: [
            { label: 'About', to: '/about', icon: 'building', text: 'Our story, mission, and values' },
            { label: 'Why Choose Us', to: '/about#why-choose', icon: 'award', text: 'What sets our firm apart' },
            { label: 'How We Work', to: '/about#how-we-work', icon: 'target', text: 'Getting started, step by step' },
            { label: 'Technology', to: '/about#technology', icon: 'laptop', text: 'The tools we use' },
            { label: 'Meet Our Team', to: '/about#team', icon: 'users', text: 'The people behind your numbers' },
          ],
        },
      ],
    ],
  },
  {
    id: 'services',
    label: 'Services',
    to: '/services',
    columns: [
      [
        {
          label: 'Business services',
          items: [
            service('accounting', 'Small Business Accounting'),
            service('bookkeeping', 'Bookkeeping Services'),
            service('payroll', 'Payroll Services'),
            service('advisory', 'Business Advisory Services'),
            service('business-tax', 'Tax Preparation for Businesses'),
            service('planning', 'Tax Planning Services'),
            service('quickbooks', 'Services for QuickBooks'),
          ],
        },
      ],
      [
        {
          label: 'Individual services',
          items: [
            service('individual', 'Tax Preparation Only'),
            service('individual-planning', 'Tax Projections & Strategies'),
          ],
        },
        {
          label: 'International client services',
          items: [service('international', 'Tax Preparation Only')],
        },
      ],
    ],
    foot: {
      text: 'Not sure which service fits?',
      action: { to: '/contact', label: 'Ask our team' },
      all: { to: '/services', label: 'All services' },
    },
  },
  {
    id: 'tax-season',
    label: 'Tax Season',
    to: '/tax-season',
    columns: [
      [
        {
          label: 'Tax season',
          items: [
            { label: 'Our Tax Season Process', to: '/tax-season#process', icon: 'calendar', text: 'What happens, step by step' },
            { label: 'Pricing', to: '/tax-season#pricing', icon: 'banknote', text: 'Our fees and 2026 pricing guide' },
            { label: 'Tax Tool Box', to: '/tax-season#tax-toolbox', icon: 'toolbox', text: 'Refund status, IRS payments, and more' },
          ],
        },
      ],
      [
        {
          label: 'Client portal',
          items: [
            { label: 'Tutorial', to: '/tax-season#client-portal', icon: 'laptop', text: 'Getting around the portal' },
            { label: 'Login', href: links.portal, icon: 'lock', text: 'Upload, sign, and message us' },
          ],
        },
      ],
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    to: '/industries',
    compact: true,
    columns: [[{ items: industryLinks.slice(0, half) }], [{ items: industryLinks.slice(half) }]],
    foot: {
      text: "Don't see your industry?",
      action: { to: '/contact', label: 'Ask our team' },
      all: { to: '/industries', label: 'All industries' },
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    to: '/resources',
    columns: [
      [
        {
          items: [
            { label: 'Blog', to: '/resources#blog', icon: 'newspaper', text: 'Insights from our team' },
            { label: 'Guides', to: '/resources#guides', icon: 'book', text: 'Pricing guide, deadlines, and how-tos' },
            { label: 'Newsletter', to: '/resources#newsletter', icon: 'mail', text: 'Tax tips in your inbox' },
            { label: 'FAQs', to: '/resources#faq', icon: 'help', text: 'Answers to common questions' },
          ],
        },
      ],
    ],
  },
  { id: 'contact', label: 'Contact', to: '/contact' },
];
