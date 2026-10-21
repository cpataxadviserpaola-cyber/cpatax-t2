// Industries the firm serves. They feed the Industries page (one card each, with "Read more"
// leading to the industry's own page), the header menu, the Services page band, and the
// Home page tags.
//
// slug      address of the industry's own page, /industry/<slug>/ (from the firm's page
//           brief). Link to it with industryPath(industry).
// title     short name used in menus, tags, and the breadcrumb
// heading   headline on the industry's card on the Industries page; without one, the title
//           is used
// text      short description on the industry's card
// services  ids of services (src/data/services.js) linked from the industry's page; a hidden
//           service is left out
//
// A shown industry's page is its own file in src/components/Industries/, routed in App.jsx,
// and needs an entry in src/data/seo.js; the build stops and names any that is missing one.
// An industry in hiddenIndustryIds is left off the site: it's out of the menu, the pages and
// their lists. Its entry stays here, so taking its id out of the list brings it back (give
// it a slug and a page first).

export const hiddenIndustryIds = ['healthcare', 'legal', 'manufacturing', 'restaurant', 'retail', 'ecommerce', 'mwbe'];

const allIndustries = [
  {
    id: 'contractors',
    slug: 'accounting-firms-for-contractors',
    icon: 'wrench',
    title: 'Contractor Firms',
    heading: 'Accounting Firms for Contractors',
    text: 'Get bookkeeping, accounting, tax planning, and tax preparation support for contractors and construction companies. Keep your financial records organized.',
    services: ['accounting', 'bookkeeping', 'planning', 'business-tax'],
  },
  {
    id: 'real-estate',
    slug: 'accounting-services-for-real-estate-firms',
    icon: 'home',
    title: 'Real Estate Firms',
    heading: 'Bookkeeping & Tax Services for Property Management',
    text: 'Get real estate accounting, bookkeeping, property management bookkeeping, tax planning, and tax preparation support for your real estate business.',
    services: ['accounting', 'bookkeeping', 'planning', 'business-tax'],
  },
  {
    id: 'consulting',
    slug: 'accounting-solutions-for-consulting-businesses',
    icon: 'briefcase',
    title: 'Consulting Firms',
    heading: 'Best Accounting Solutions for Consulting Businesses',
    text: 'CPA Tax Adviser offers accounting services for consulting firms to manage expenses, maintain financial clarity, and make informed decisions.',
    services: ['accounting', 'bookkeeping', 'planning', 'business-tax'],
  },
  {
    id: 'marketing',
    slug: 'accounting-services-for-marketing-firms',
    icon: 'chat',
    title: 'Marketing Firms',
    heading: 'Accounting Services for Marketing Firms',
    text: 'At CPA Tax Adviser, we provide accounting services for investment advisory firms, including bookkeeping, financial reporting, tax planning, and tax preparation support.',
    services: ['accounting', 'bookkeeping', 'planning', 'business-tax'],
  },
  {
    id: 'investment-advisers',
    slug: 'accounting-services-for-investment-advisory',
    icon: 'trend',
    title: 'Investment Advisory Firms',
    heading: 'Accounting Services for Investment Advisory Firms',
    text: 'Accounting services for investment advisory firms, including bookkeeping, financial reporting, tax planning, and tax preparation support.',
    services: ['accounting', 'bookkeeping', 'planning', 'business-tax'],
  },
  {
    id: 'healthcare',
    icon: 'heart',
    title: 'Healthcare',
    text: 'Your expertise drives your practice, and our expertise helps ensure its financial success. We support medical and dental practices with their books, payroll, structure, and tax planning.',
    services: ['accounting', 'payroll', 'planning'],
  },
  {
    id: 'legal',
    icon: 'landmark',
    title: 'Legal',
    text: 'Law firms and solo practitioners rely on clean books, dependable payroll, and proactive tax planning, so they can stay focused on their clients.',
    services: ['bookkeeping', 'payroll', 'business-tax'],
  },
  {
    id: 'manufacturing',
    icon: 'factory',
    title: 'Manufacturing',
    text: 'Inventory, equipment, and cost of goods sold make manufacturing finances complex. We help you track costs, manage cash flow, and plan major purchases with taxes in mind.',
    services: ['accounting', 'advisory', 'business-tax'],
  },
  {
    id: 'restaurant',
    icon: 'utensils',
    title: 'Restaurant',
    text: 'Thin margins, tipped employees, and sales tax call for close attention to the numbers. We handle payroll and sales tax compliance and show you where your money goes.',
    services: ['payroll', 'bookkeeping', 'business-tax'],
  },
  {
    id: 'retail',
    icon: 'bag',
    title: 'Retail',
    text: 'From inventory to sales and use tax, retail businesses have a lot to keep track of. We keep your books accurate and your filings on schedule.',
    services: ['bookkeeping', 'quickbooks', 'business-tax'],
  },
  {
    id: 'ecommerce',
    icon: 'cart',
    title: 'E-commerce',
    text: 'Selling online can mean sales tax in several states, marketplace fees, and payment platform reports. We help you reconcile it all and stay compliant.',
    services: ['bookkeeping', 'quickbooks', 'business-tax'],
  },
  {
    id: 'mwbe',
    icon: 'users',
    title: 'Minority & Women-Owned Businesses (MWBEs)',
    text: 'As a certified MWBE, you face unique challenges and opportunities. We understand them firsthand, as a South Carolina Minority/Women-Owned Business Enterprise ourselves.',
    services: ['advisory', 'accounting', 'business-tax'],
  },
];

// The industries shown on the site, in this order.
export const industries = allIndustries.filter((industry) => !hiddenIndustryIds.includes(industry.id));

export const findIndustry = (id) => industries.find((industry) => industry.id === id);

// Address of an industry's own page.
export const industryPath = (industry) => `/industry/${industry.slug}/`;
