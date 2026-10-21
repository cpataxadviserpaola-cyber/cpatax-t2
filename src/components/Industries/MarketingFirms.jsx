import IndustryPage from './IndustryPage.jsx';

// Source: the firm's page brief "Accounting Services for Marketing Firms", word for word, with
// its banner at the top. The brief's numbers on its lists, benefits, and questions are left to
// the layout. Search details are in src/data/seo.js.
// Address: /industry/accounting-services-for-marketing-firms/ (slug in src/data/industries.js).
const banner = {
  title: 'Accounting, Bookkeeping & Tax Services for Marketing Firms',
  text: "Marketing firms may track their performance, maintain structured financial records, and prepare for taxes by using CPA Tax Adviser's accounting services.",
};

const sections = [
  {
    eyebrow: 'Overview',
    title: 'Accounting Solutions for Marketing Agencies',
    paragraphs: [
      'Marketing firms often handle multiple client accounts, project budgets, recurring service fees, advertising expenses, and operational costs. Managing these financial activities accurately is essential for understanding profitability and maintaining healthy cash flow.',
      'At CPA Tax Adviser, we provide accounting services for marketing agencies, including bookkeeping, financial reporting, tax planning, and tax preparation support. Our services help marketing businesses maintain organized accounting records, review financial performance, and focus on delivering results for their clients.',
    ],
  },
  {
    eyebrow: 'Services',
    title: 'Our Services for Marketing Firm',
    content: [
      { heading: 'Small Business Accounting Services' },
      {
        cards: [
          {
            title: 'Financial Reporting & Analysis',
            text: 'Help you understand your financial information and evaluate business performance.',
          },
          {
            title: 'Cash Flow & Profitability',
            text: 'Review your financial information to help you better understand cash flow and profitability.',
          },
          {
            title: 'Budgeting & Financial Forecasting',
            text: 'Help you plan expected income, expenses, and future financial goals.',
          },
          {
            title: 'Strategic Tax Planning',
            text: 'Provide practical tax planning support based on your business and financial situation.',
          },
          {
            title: 'Accounting System Setup',
            text: 'Help organize your accounting system, Chart of Accounts, and General Ledger.',
          },
          {
            title: 'Financial Statements',
            text: 'Provide applicable monthly, quarterly, and annual financial statements.',
          },
          {
            title: 'Profit & Loss & Balance Sheets',
            text: "Help you review key financial statements and understand your business's financial position.",
          },
          {
            title: 'Business Tax Returns',
            text: 'Assist with applicable business tax return preparation and related accounting information.',
          },
        ],
      },
      { heading: 'Bookkeeping Services for Marketing Firm' },
      {
        cards: [
          {
            title: 'Bank & Credit Card Reconciliation',
            text: 'We compare your bank and credit card activity with your accounting records to help identify missing transactions, discrepancies, and items that need attention.',
          },
          {
            title: 'Income & Expense Tracking',
            text: 'We keep your business income and expenses properly recorded and organized, giving you a clearer picture of where your money is coming from and where it is going.',
          },
          {
            title: 'Payroll Transaction Recording',
            text: 'We record payroll-related transactions accurately within your bookkeeping records so your financial statements reflect your business activity.',
          },
          {
            title: 'General Ledger & Chart of Accounts Management',
            text: 'A properly maintained general ledger and chart of accounts provide the foundation for clean and useful financial records.',
          },
          {
            title: 'Monthly Book Closing & Financial Reporting',
            text: 'We create crucial reports including cash flow statements, balance sheets, and profit and loss statements and assist you in keeping your accounts up to date.',
          },
          {
            title: 'Year-End Bookkeeping & Tax-Ready Records',
            text: 'At year-end, organized books make it easier to review your financial activity and prepare the records needed for tax work.',
          },
        ],
      },
      { heading: 'Tax Planning for Marketing Firm' },
      {
        list: [
          'We carefully review your tax situation to identify the tax credits and deductions you may be eligible to claim.',
          'We help you establish a recordkeeping system that meets IRS requirements and keeps your tax records organized.',
          'We work with you throughout the year—not just during tax season—to develop tax planning strategies that may help reduce your tax liability.',
          'We review your paycheck withholding and help ensure it accurately reflects your tax situation.',
          'We help you explore ways to defer tax liabilities through pension plans, retirement contributions, and other applicable plans.',
          'We help identify suitable investments that may provide federal or state tax-exempt income, where applicable.',
        ],
      },
      { heading: 'Tax Preparation Services for Marketing Firm' },
      {
        cards: [
          {
            title: 'State and Federal Income Tax Preparation and Filing',
            text: "We provide state and federal income tax preparation and filing for businesses, helping ensure required tax returns are prepared accurately and submitted according to applicable requirements. Our services help you stay organized during the tax filing process while meeting small businesses' tax preparation demands.",
          },
          {
            title: 'Business Tax Planning',
            text: 'Effective tax planning helps businesses prepare for upcoming tax obligations and make informed financial decisions. Our tax planning services in Simpsonville, SC, focus on helping small businesses organize their tax-related financial information and apply established tax planning strategies to help minimize tax liability.',
          },
          {
            title: 'Tax Strategy Service',
            text: 'A well-defined tax strategy helps small businesses make informed financial decisions and manage their tax liability. Our tax strategy services in Simpsonville, SC, focus on applying practical tax planning strategies that support business financial goals and help businesses prepare for future tax obligations.',
          },
          {
            title: 'Profit and Loss Statements',
            text: 'We provide profit and loss statements to help businesses maintain a clear view of their financial performance. These statements can support tax preparation and provide useful financial information for business management.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'Benefits',
    title: 'Benefits of Accounting Services for Marketing Firms',
    content: [
      'Working with an accounting service provider can help marketing agencies maintain better control over their financial records and recurring administrative responsibilities.',
      {
        cards: [
          {
            title: 'Better Financial Visibility',
            text: 'Organized financial statements help you understand agency revenue, operating expenses, and business profitability.',
          },
          {
            title: 'Improved Cash Flow Awareness',
            text: 'Tracking recorded client payments, outstanding invoices, and expenses helps your agency review its cash flow position.',
          },
          {
            title: 'Organized Campaign Financial Records',
            text: 'Structured bookkeeping helps keep available campaign-related expenses and client project income organized for financial review.',
          },
          {
            title: 'Improved Tax Preparation Readiness',
            text: 'Maintaining accurate records throughout the year can help simplify the collection and review of information needed for tax preparation.',
          },
          {
            title: 'Reduced Administrative Workload',
            text: 'Outsourcing bookkeeping and selected accounting tasks can help your team spend more time on marketing campaigns, client relationships, and business development.',
          },
          {
            title: 'Consistent Financial Reporting',
            text: 'Regularly maintained accounting records support financial reviews and help you monitor business performance.',
          },
          {
            title: 'Support for Business Growth',
            text: 'Reliable financial information helps agency owners review expenses, evaluate profitability, and plan for future business requirements.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'Why choose us',
    title: 'Why Choose CPA Tax Adviser?',
    paragraphs: [
      'Marketing firms need organized financial records, clear reporting, and support that fits their business requirements.',
      'CPA Tax Adviser helps marketing agencies with:',
    ],
    points: [
      {
        label: 'Business-Focused Accounting Support',
        text: 'Services aligned with the financial recordkeeping requirements of marketing and advertising businesses.',
      },
      {
        label: 'Organized Bookkeeping',
        text: 'Support with transaction recording, account reconciliation, and General Ledger maintenance.',
      },
      {
        label: 'Financial Reporting',
        text: 'Relevant reports to help review revenue, expenses, and business performance.',
      },
      {
        label: 'Tax Planning and Preparation Support',
        text: 'Assistance with organizing financial information for applicable tax planning and filing requirements.',
      },
      {
        label: 'Flexible Service Requirements',
        text: "Support based on your agency's bookkeeping and accounting needs.",
      },
      {
        label: 'Clear Financial Information',
        text: 'Organized records that help you review business activity and prepare for financial decisions.',
      },
    ],
    closing:
      'Our goal is to help marketing firms maintain organized accounting information while focusing on their clients, campaigns, and business growth.',
  },
  {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What accounting services do marketing firms need?',
        answer: "Marketing firms may need bookkeeping, bank reconciliation, income and expense tracking, financial reporting, budgeting support, tax planning, and business tax preparation. Requirements vary according to the agency's size, structure, and operations.",
      },
      {
        question: 'What is included in bookkeeping for marketing firms?',
        answer: 'Bookkeeping may include transaction recording, bank and credit card reconciliation, income and expense categorization, accounts receivable tracking, General Ledger maintenance, monthly book closing, and relevant financial reporting.',
      },
      {
        question: 'Can accounting services help marketing agencies track campaign expenses?',
        answer: 'Yes. Organized bookkeeping can help record and categorize available campaign-related expenses, software costs, contractor payments, and other operating expenses for financial review.',
      },
      {
        question: 'Do you provide tax planning for marketing firms?',
        answer: "We provide tax planning support focused on organizing financial information, reviewing applicable tax considerations, and preparing for upcoming tax obligations based on the business's circumstances.",
      },
      {
        question: 'Why is financial reporting important for marketing agencies?',
        answer: 'Financial reporting helps agency owners review revenue, expenses, cash flow, and profitability. It can also support budgeting, business planning, and decisions about future operating costs.',
      },
      {
        question: 'Can I outsource bookkeeping for my marketing agency?',
        answer: 'Outsourcing bookkeeping can help marketing agencies manage recurring financial recordkeeping tasks while allowing internal teams to focus on client services and business operations.',
      },
      {
        question: 'What should I look for in accounting services for marketing firms?',
        answer: "Consider the provider's service scope, bookkeeping processes, financial reporting capabilities, software compatibility, communication practices, and experience supporting professional service businesses.",
      },
      {
        question: 'Do marketing firms need tax preparation services?',
        answer: 'Marketing firms may need applicable federal and state business tax preparation depending on their business structure and tax obligations. Organized accounting records help support the preparation and review process.',
      },
    ],
  },
];

export default function MarketingFirms() {
  return <IndustryPage id="marketing" banner={banner} sections={sections} />;
}
