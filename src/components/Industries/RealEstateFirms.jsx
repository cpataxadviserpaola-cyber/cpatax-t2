import IndustryPage from './IndustryPage.jsx';

// Source: the firm's page brief "Accounting and Bookkeeping Services for Real Estate Firms",
// word for word. The brief has no banner of its own: the banner takes its page title and
// description. The brief's numbers on its lists, steps, and questions are left to the layout.
// Search details are in src/data/seo.js.
// Address: /industry/accounting-services-for-real-estate-firms/ (slug in
// src/data/industries.js).
const banner = {
  title: 'Accounting and Bookkeeping Services for Real Estate Firms',
  text: 'Get real estate accounting, bookkeeping, property management bookkeeping, tax planning, and tax preparation support for your real estate business.',
};

const sections = [
  {
    eyebrow: 'Overview',
    paragraphs: [
      'Managing a real estate business involves tracking property-related income, operating expenses, management fees, and financial records across multiple transactions. Accurate financial information helps real estate professionals understand business performance and prepare for tax obligations. Our accounting and bookkeeping services for real estate firms help real estate agents, property managers, investors, and real estate companies maintain organized financial records and make informed financial decisions.',
    ],
  },
  {
    eyebrow: 'Services',
    title: 'Our Services for Real Estate Firms',
    content: [
      { heading: 'Small Business Accounting Services' },
      'Our accounting services for real estate firms help maintain organized financial records, monitor business performance, and support informed financial decisions. Our services include:',
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
      { heading: 'Bookkeeping Services for Real Estate' },
      'Accurate bookkeeping helps real estate businesses track financial activity and maintain organized records. Our bookkeeping for real estate services supports real estate firms, agents, property managers, and investors with their ongoing bookkeeping requirements.',
      'Our services include:',
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
            text: 'We provide crucial reports including cash flow statements, balance sheets, and profit and loss statements and assist you in keeping your accounts up to date.',
          },
          {
            title: 'Year-End Bookkeeping & Tax-Ready Records',
            text: 'At year-end, organized books make it easier to review your financial activity and prepare the records needed for tax work.',
          },
        ],
      },
      'Whether you need bookkeeping for real estate agents, bookkeeping for real estate investors, or support with real estate company accounting, our services help keep your financial information organized.',
      { heading: 'Property Management Bookkeeping Services' },
      'Our property management bookkeeping services include:',
      {
        list: [
          'Recording rental-related income and management fees.',
          'Categorizing maintenance and operating expenses.',
          'Reconciling bank accounts and financial transactions.',
          'Organizing vendor invoices and property-related receipts.',
          'Maintaining financial records for property management operations.',
          'Preparing relevant financial reports when applicable.',
        ],
      },
      'Our property management bookkeeping support helps property managers maintain organized business records and access financial information for review and decision-making.',
      { heading: 'Tax Planning for Real Estate Firms' },
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
      { heading: 'Tax Preparation Services for Real Estate Firms' },
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
    title: 'Benefits of Accounting Services for Real Estate Firms',
    content: [
      {
        cards: [
          {
            title: 'Better Financial Organization',
            text: "Maintain organized records of property-related income, management fees, commissions, and operating expenses to understand your business's financial activity.",
          },
          {
            title: 'Improved Expense Tracking',
            text: 'Keep track of maintenance expenses, vendor payments, administrative costs, and other business expenditures to support better financial oversight.',
          },
          {
            title: 'Clearer Financial Reporting',
            text: 'Access relevant financial reports to review income, expenses, and business performance, helping you make informed financial decisions.',
          },
          {
            title: 'Support for Tax Preparation',
            text: 'Organized bookkeeping and financial documentation help prepare the information needed for applicable tax reporting and filing requirements.',
          },
          {
            title: 'More Time for Real Estate Operations',
            text: 'Reduce the administrative burden of maintaining financial records so you can focus on property management, client relationships, and business development.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'Why choose us',
    title: 'Why Choose Our Accounting Services for Real Estate Firms?',
    content: [
      {
        cards: [
          {
            title: 'Support for Different Real Estate Businesses',
            text: 'Our accounting and bookkeeping services support real estate companies, property managers, agents, and investors with their business financial recordkeeping needs.',
          },
          {
            title: 'Organized Property-Related Financial Records',
            text: 'We help maintain records of income, expenses, management fees, commissions, and other relevant financial transactions.',
          },
          {
            title: 'Consistent Monthly Bookkeeping',
            text: 'Our monthly bookkeeping approach helps businesses maintain organized financial information and review their financial activity regularly.',
          },
          {
            title: 'Practical Tax Planning Support',
            text: 'We help real estate businesses prepare for upcoming tax obligations through organized financial information and relevant tax planning strategies.',
          },
          {
            title: 'Financial Information for Business Decisions',
            text: 'Well-maintained accounting records and relevant financial reports help real estate professionals review expenses, monitor business performance, and plan for future needs.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'How it works',
    title: 'How Our Real Estate Accounting Process Works',
    steps: [
      {
        title: 'Understand Your Business',
        text: 'We learn about your real estate operations, whether you work as an agent, property manager, investor, or real estate company, and identify your accounting and bookkeeping requirements.',
      },
      {
        title: 'Review Your Financial Records',
        text: 'We review the available financial information, including income records, expense documents, bank transactions, and other relevant business records.',
      },
      {
        title: 'Organize Your Bookkeeping',
        text: 'We record and categorize transactions, reconcile accounts, and maintain organized financial records on a monthly basis.',
      },
      {
        title: 'Support Accounting and Tax Planning',
        text: 'Based on your requirements, we help organize financial information, prepare relevant financial reports when applicable, and support tax planning activities.',
      },
      {
        title: 'Prepare Financial Information for Tax Reporting',
        text: 'We organize relevant financial records and supporting documents for applicable business tax return preparation and filing, based on the agreed scope of services.',
      },
    ],
  },
  {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What accounting services do you provide for real estate firms?',
        answer: 'We provide financial reporting and analysis, cash flow and profitability reviews, budgeting and financial forecasting, accounting system setup, financial statement preparation, and business tax return support for real estate firms.',
      },
      {
        question: 'Do you provide bookkeeping services for real estate agents and investors?',
        answer: 'Yes. Our bookkeeping services help real estate agents, investors, and businesses record income and expenses, reconcile bank and credit card accounts, maintain general ledger records, and organize financial information.',
      },
      {
        question: 'What does your property management bookkeeping service include?',
        answer: 'Our property management bookkeeping services include recording rental income and management fees, categorizing maintenance and operating expenses, reconciling accounts, organizing vendor invoices and receipts, and maintaining financial records.',
      },
      {
        question: 'Do you provide monthly bookkeeping and financial reporting?',
        answer: 'Yes. We provide monthly bookkeeping support, including transaction recording, account reconciliation, month-end closing, and preparation of applicable financial reports, such as Profit and Loss Statements, Balance Sheets, and Cash Flow Statements.',
      },
      {
        question: 'Can you help set up an accounting system for a real estate business?',
        answer: 'Yes. We help organize your accounting system, including the Chart of Accounts and General Ledger, to support consistent bookkeeping and organized financial records.',
      },
      {
        question: 'Do you provide budgeting and financial forecasting for real estate firms?',
        answer: 'Yes. Our budgeting and financial forecasting support helps real estate businesses plan expected income and expenses and evaluate future financial goals based on their business needs.',
      },
      {
        question: 'Do you offer tax planning services for real estate firms?',
        answer: 'Yes. Our tax planning services help real estate businesses review their tax situation, organize tax records, and consider applicable deductions, credits, and tax planning strategies that may help minimize tax liability.',
      },
      {
        question: 'Do you provide year-round tax planning support?',
        answer: 'Yes. We provide year-round tax planning support to help businesses stay organized, review their tax situation, and prepare for future tax obligations. Business owners remain responsible for paying their taxes.',
      },
      {
        question: 'Do you provide state and federal business tax preparation and filing?',
        answer: 'Yes. We assist with applicable state and federal business income tax return preparation and filing, based on your business circumstances and the agreed scope of services.',
      },
      {
        question: 'Can you prepare Profit and Loss Statements for real estate businesses?',
        answer: 'Yes. We prepare applicable Profit and Loss Statements to help real estate businesses review income, expenses, and financial performance. These statements can also provide useful financial information for tax preparation.',
      },
    ],
  },
];

export default function RealEstateFirms() {
  return <IndustryPage id="real-estate" banner={banner} sections={sections} />;
}
