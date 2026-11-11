import { links } from './site.js';
import { findService, servicePath } from './services.js';
import { industries } from './industries.js';

// Main menu in the header: desktop dropdowns and the full-screen menu on small screens.
//
// An item with `columns` opens a dropdown. Each column holds groups, and each group has an
// optional heading and its links. A link has `to` (a page on this site, optionally with a
// #section) or `href` (another website, opened in a new tab), an `icon`, and an optional
// `text` shown under it. `compact` lays the links out as a tighter list. `panel` shows the
// dropdown on desktops as a panel of columns, each a list of links, instead of a bar of links
// in a line, for more links than fit on one. `foot` adds a link to the whole section (`all`),
// with an optional line of `text` and an `action` link.

const service = (id, label) => {
  const item = findService(id);
  return { label, to: servicePath(item), icon: item.icon, text: item.tagline };
};

// The services in the header's Services menu, by column and group, and in the footer's Services
// list. The other services' pages are still on the site, listed on the All Services page.
const menuServiceColumns = [
  [
    {
      label: 'Business',
      items: [
        service('accounting', 'Small Business Accounting'),
        service('bookkeeping', 'Bookkeeping Services'),
        service('business-tax', 'Tax Preparation for Businesses'),
        service('planning', 'Tax Planning Services'),
      ],
    },
  ],
  [
    {
      label: 'Individual',
      items: [
        service('individual', 'Individual Tax Preparation'),
        service('individual-planning', 'Individual Tax Planning'),
      ],
    },
  ],
  [
    {
      label: 'International',
      items: [service('international', 'International Tax Preparation')],
    },
  ],
];
export const menuServices = menuServiceColumns.flat().flatMap((group) => group.items);

// Each industry's link goes to its card on the Industries page, which highlights it.
const industryLinks = industries.map((industry) => ({
  label: industry.title,
  to: `/industries#${industry.id}`,
  icon: industry.icon,
}));
const half = Math.ceil(industryLinks.length / 2);

export const mainNav = [
  { id: 'home', label: 'Home', to: '/' },
  {
    id: 'about',
    label: 'About',
    to: '/about',
    columns: [
      [
        {
          items: [
            { label: 'Our Values', to: '/our-values', icon: 'target', text: 'Professionalism, responsiveness, and quality' },
            { label: 'Meet Our Team', to: '/team', icon: 'users', text: 'The people behind your numbers' },
          ],
        },
      ],
    ],
  },
  {
    id: 'services',
    label: 'Services',
    to: '/services',
    panel: true,
    columns: menuServiceColumns,
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
    panel: true,
    foot: { all: { to: '/tax-season', label: 'Tax season overview' } },
    columns: [
      [
        {
          label: 'Tax season',
          items: [
            { label: 'Our Tax Season Process', to: '/tax-season/process', icon: 'calendar', text: 'What happens, step by step' },
            { label: 'Pricing', to: '/tax-season/pricing', icon: 'banknote', text: 'Our fees and 2026 pricing guide' },
            { label: 'Tax Tool Box', to: '/tax-season/toolbox', icon: 'toolbox', text: 'Refund status, IRS payments, and more' },
          ],
        },
      ],
      [
        {
          label: 'Client portal',
          items: [
            { label: 'Tutorial', to: '/tax-season/client-portal', icon: 'laptop', text: 'Getting around the portal' },
            { label: 'Login', href: links.portal, icon: 'lock', text: 'Upload, sign, and message us' },
          ],
        },
      ],
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    to: '/resources',
    columns: [
      [
        {
          items: [
            { label: 'Financial Calculators', to: '/resources#financial-calculators', icon: 'chart', text: 'Paychecks, benefits, and taxes' },
            { label: 'Internet Links', to: '/resources#internet-links', icon: 'globe', text: 'A few of our favorite sites' },
            { label: 'Guides', to: '/guides', icon: 'book', text: 'Life events, business, investing, and taxes' },
            { label: 'Newsletter', to: '/newsletter', icon: 'mail', text: "This month's tax articles and due dates" },
            { label: 'FAQs', to: '/#faq', icon: 'help', text: 'Answers to common questions' },
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
  { id: 'contact', label: 'Contact', to: '/contact' },
];
