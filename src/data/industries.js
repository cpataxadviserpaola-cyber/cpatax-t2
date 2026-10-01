// Industries the firm serves. They feed the Industries page (one card each, linked from
// /industries#<id>), the header menu, the Services page band, and the Home page tags.
//
// title     name used on cards, menus, and tags
// text      short description on the industry's card
// services  ids of services (src/data/services.js) linked from the card

export const industries = [
  {
    id: 'real-estate',
    icon: 'home',
    title: 'Real Estate',
    text: 'A dynamic industry full of opportunities, with its own unique financial challenges. We help agents, investors, and property owners track income and expenses and plan ahead at tax time.',
    services: ['business-tax', 'planning', 'bookkeeping'],
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
    id: 'contractors-advisers',
    icon: 'wrench',
    title: 'Contractors & Investment Advisory Firms',
    text: 'Contractors juggle job costs, equipment, and 1099s, while investment advisory firms work in a highly regulated, complex environment. Both call for precise financial management and strategic planning.',
    services: ['accounting', 'payroll', 'planning'],
  },
  {
    id: 'business-services',
    icon: 'briefcase',
    title: 'Accounting Business Services',
    text: 'We help service-based companies, consultants, and freelancers streamline their accounting, payroll, and tax processes, so handling the finances is one less hat to wear.',
    services: ['accounting', 'bookkeeping', 'payroll'],
  },
  {
    id: 'mwbe',
    icon: 'users',
    title: 'Minority & Women-Owned Businesses (MWBEs)',
    text: 'As a certified MWBE, you face unique challenges and opportunities. We understand them firsthand, as a South Carolina Minority/Women-Owned Business Enterprise ourselves.',
    services: ['advisory', 'accounting', 'business-tax'],
  },
  {
    id: 'marketing',
    icon: 'chat',
    title: 'Marketing & Advertising Agencies',
    text: 'Creative projects, client deadlines, and financial complexity, balanced with clear numbers. We help agencies follow project profitability, pay their teams, and plan for taxes.',
    services: ['accounting', 'payroll', 'planning'],
  },
];
