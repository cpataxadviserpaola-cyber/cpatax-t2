// Step-by-step processes shown with ProcessSteps.

// How a new client gets started (Home page and About > How We Work).
export const workSteps = [
  { icon: 'calendar', title: 'Schedule a consultation', text: 'Book a convenient time online or give us a call to discuss your needs, goals, and important deadlines.' },
  { icon: 'lock', title: 'Share your documents', text: 'Securely upload your tax forms and financial records through our client portal—no printing or scanning required.' },
  { icon: 'file-check', title: 'We prepare & review', text: 'Our team prepares your tax return or financial documents and carefully reviews everything for accuracy, compliance, and potential savings.' },
  { icon: 'trend', title: 'File & plan ahead', text: 'We handle the electronic filing process and help you identify opportunities and strategies to stay prepared for the year ahead.' },
];

// What happens during tax season (Tax Season > Our Tax Season Process), matching the steps in
// the page's video. A step has a sentence of `text` or a list of `points`.
export const taxSeasonSteps = [
  {
    icon: 'file',
    title: 'Submit Tax Documents',
    points: ['Businesses: Submit tax documents by February 15.', 'Individuals: Submit tax documents by March 15.'],
  },
  { icon: 'ledger', title: 'Tax Return Preparation', text: 'Once all documents are received, the tax return is usually ready within 1–2 weeks.' },
  {
    icon: 'users',
    title: 'CPA Review & Team Support',
    points: ['A responsive team provides support throughout the process.', 'A CPA personally reviews every file for accuracy.'],
  },
  {
    icon: 'lock',
    title: 'Secure Document Upload',
    points: ['Upload all documents through the secure portal.', 'Never send sensitive information by email.'],
  },
  {
    icon: 'card',
    title: 'Engagement & Payment',
    points: ['Work begins once the engagement is signed.', 'The tax return is e-filed after payment is received.'],
  },
  { icon: 'clock', title: 'Automatic Extension', text: 'If documents arrive after the deadline, an automatic extension will be filed to help keep you protected.' },
  {
    icon: 'chat',
    title: 'Communication & Final Assurance',
    points: ['Clear communication.', 'Bilingual support.', 'Personal CPA guidance throughout the process.'],
  },
];

// Getting around the client portal (Tax Season > Client Portal > Tutorial).
export const portalSteps = [
  { icon: 'user', title: 'Log in', text: 'Sign in to the client portal with the credentials from your invitation email.' },
  { icon: 'file', title: 'Upload documents', text: 'Add your tax forms and records securely, no printing or scanning required.' },
  { icon: 'file-check', title: 'Review and sign', text: 'Review engagement letters and returns, and sign them electronically.' },
  { icon: 'chat', title: 'Message our team', text: 'Ask questions and receive updates in one secure place.' },
];
