// Firm details used across the whole site. Source: cpataxadviser.com.
export const site = {
  name: 'CPA Tax Adviser',
  tagline: 'Licensed CPA Firm',
  slogan: 'Where tax strategy meets real business understanding.',
  description:
    'A South Carolina licensed CPA firm helping business owners, professionals, and individuals nationwide make informed tax decisions.',
  mission:
    'Our mission is simple: to simplify complex tax matters, build lasting relationships, and become a trusted partner in your financial journey.',
  announcement: 'Now accepting new small business clients',
  phone: { display: '(864) 432-6922', href: 'tel:+18644326922' },
  fax: '(864) 642-3780',
  email: 'contactus@cpataxadviser.com',
  address: ['677 Fairview Rd #80638', 'Simpsonville, SC 29680'],
  languages: 'English and Spanish',
  // URL of a form service (for example a Formspree endpoint) that receives contact
  // form submissions. While empty, the form opens the visitor's email app instead.
  formEndpoint: '',
};

// Online tools and profiles the firm already uses.
export const links = {
  portal: 'https://cpataxadviser.taxdome.com/',
  payment: 'https://secure.cpacharge.com/pages/cpataxadviser/operating',
  schedule: 'https://calendly.com/paolacpacfp',
  refund: 'https://www.irs.gov/wheres-my-refund',
  pricingGuide: '/files/CPA-Tax-Adviser-Pricing-Guide-2026.pdf',
  financialPlanning: 'https://www.yellowoakfp.com/',
  linkedin: 'https://www.linkedin.com/company/cpataxadviser/',
  x: 'https://x.com/paomartinez85',
};

// Key facts shown on the Home and About pages.
export const commitments = [
  { value: '13', unit: '+', label: 'Years of tax preparation experience', short: 'Years of tax experience' },
  { value: '2', unit: '', label: 'Languages: English and Spanish', short: 'Languages: English & Spanish' },
  { value: '12', unit: 'mo', label: 'Of year-round guidance, not just at tax time', short: 'Of year-round guidance' },
];
