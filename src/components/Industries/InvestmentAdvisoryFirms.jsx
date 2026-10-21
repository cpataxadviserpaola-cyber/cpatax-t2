import IndustryPage from './IndustryPage.jsx';

// Source: the firm's page brief "Accounting Services for Investment Advisory Firms", word for
// word, with its banner at the top. The brief's numbers on its lists, benefits, and questions
// are left to the layout. Search details are in src/data/seo.js.
// Address: /industry/accounting-services-for-investment-advisory/ (slug in
// src/data/industries.js).
const banner = {
  title: 'Bookkeeping, Accounting, and Tax Services for Investment Advisory Firms',
  text: 'CPA Tax Adviser offers accounting services for investment advisory firms to organize financial records, track expenses, monitor performance, and manage tax obligations.',
};

const sections = [
  {
    eyebrow: 'Overview',
    title: 'Accounting Solutions for Investment Advisory Businesses',
    paragraphs: [
      'Investment advisory firms need reliable financial records to manage operating costs, monitor revenue, and support informed business decisions. From tracking advisory fees and payroll expenses to maintaining bookkeeping records and preparing tax-related financial information, organized accounting plays an important role in business management.',
      'At CPA Tax Adviser, we provide accounting services for financial advisory businesses, including bookkeeping, financial reporting, tax planning, and tax preparation support. Our services help investment advisory firms maintain organized accounting records and focus on their clients and business operations.',
    ],
  },
  {
    eyebrow: 'Services',
    title: 'Our Services for Investment Advisory Firms',
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
      { heading: 'Bookkeeping Services for Investment Advisory' },
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
      { heading: 'Tax Planning for Investment Advisory' },
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
      { heading: 'Tax Preparation Services for Investment Advisory' },
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
    title: 'Benefits of Accounting Services for Investment Advisory Firms',
    content: [
      'Working with an accounting service provider can help investment advisory businesses maintain better control over their financial records and recurring administrative responsibilities.',
      {
        cards: [
          {
            title: 'Better Financial Visibility',
            text: 'Organized financial statements help you understand advisory revenue, operating expenses, and overall business performance.',
          },
          {
            title: 'Improved Cash Flow Awareness',
            text: 'Tracking recorded payments, outstanding invoices, and operating expenses helps your firm review its cash flow position.',
          },
          {
            title: 'Organized Accounting Records',
            text: 'Consistent bookkeeping helps maintain clear records of business transactions and supports regular financial reviews.',
          },
          {
            title: 'Improved Tax Preparation Readiness',
            text: 'Maintaining accurate financial records throughout the year can help simplify the collection and review of information needed for tax preparation.',
          },
          {
            title: 'Reduced Administrative Workload',
            text: 'Outsourcing bookkeeping and selected accounting tasks can help your team spend more time on client service and core business operations.',
          },
          {
            title: 'Consistent Financial Reporting',
            text: 'Regularly maintained accounting records support financial reviews and help you monitor business performance.',
          },
          {
            title: 'Support for Business Growth',
            text: 'Owners of consulting firms can monitor spending, assess profitability, and make plans for future business needs with the use of trustworthy financial data.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'Why choose us',
    title: 'Why Choose CPA Tax Adviser?',
    paragraphs: [
      'Investment advisory firms need organized financial records, clear reporting, and support that fits their business requirements.',
      'CPA Tax Adviser helps investment advisory businesses with:',
    ],
    points: [
      {
        label: 'Business-Focused Accounting Support',
        text: 'Services aligned with the financial recordkeeping requirements of investment advisory and financial services businesses.',
      },
      {
        label: 'Organized Bookkeeping',
        text: 'Support with transaction recording, account reconciliation, and General Ledger maintenance.',
      },
      {
        label: 'Financial Reporting',
        text: 'Relevant financial statements and reports to help review revenue, expenses, and business performance.',
      },
      {
        label: 'Tax Planning and Preparation Support',
        text: 'Assistance with organizing financial information for applicable tax planning and filing requirements.',
      },
      {
        label: 'Flexible Service Options',
        text: 'Support customized to your firm’s bookkeeping and accounting needs.',
      },
      {
        label: 'Clear Financial Information',
        text: 'Organized records that help you review business activity and prepare for financial decisions.',
      },
    ],
    closing:
      'Our goal is to help investment advisory firms maintain organized accounting information while focusing on their clients and business operations.',
  },
  {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What accounting services do investment advisory firms need?',
        answer: "Investment advisory firms may need bookkeeping, bank reconciliation, income and expense tracking, financial reporting, budgeting support, tax planning, and business tax preparation. Requirements vary according to the firm's size, structure, and operations.",
      },
      {
        question: 'What is included in investment advisory bookkeeping?',
        answer: 'Bookkeeping may include transaction recording, bank and credit card reconciliation, advisory income and expense categorization, accounts receivable tracking, General Ledger maintenance, monthly book closing, and relevant financial reporting.',
      },
      {
        question: 'Do you provide accounting services for financial advisory firms?',
        answer: "Our accounting service offerings can support financial advisory businesses with bookkeeping, financial reporting, accounting record organization, and applicable tax-related support, depending on the firm's requirements.",
      },
      {
        question: 'Can bookkeeping help investment advisory firms monitor revenue?',
        answer: 'Yes. Organized bookkeeping helps record advisory fee income, payments, expenses, and other business transactions, supporting financial reviews and revenue monitoring.',
      },
      {
        question: 'Do you offer tax planning for investment advisory firms?',
        answer: "We provide tax planning support focused on organizing financial information, reviewing applicable tax considerations, and preparing for upcoming tax obligations based on the business's circumstances.",
      },
      {
        question: 'What is the difference between an investment adviser and a financial adviser for accounting purposes?',
        answer: 'The accounting and tax requirements depend on the business structure, revenue sources, expenses, and applicable regulations. Firms should assess their specific requirements with an appropriately qualified tax or legal professional.',
      },
      {
        question: 'How do I choose an accounting and tax consultancy firm?',
        answer: "Consider the provider's service scope, bookkeeping processes, financial reporting capabilities, software compatibility, communication practices, and experience supporting professional service businesses.",
      },
      {
        question: 'Can I outsource bookkeeping for my investment advisory firm?',
        answer: 'Outsourcing bookkeeping can help investment advisory firms manage recurring financial recordkeeping tasks while allowing internal teams to focus on client services and business operations.',
      },
      {
        question: 'How can I find a tax accountant and financial advisor near me?',
        answer: 'When searching for a tax accountant or financial adviser near you, review professional qualifications, service offerings, relevant experience, and whether the provider can meet your specific accounting and tax requirements.',
      },
    ],
    callout: {
      title: 'Contact us today to discuss your accounting service needs.',
    },
  },
];

export default function InvestmentAdvisoryFirms() {
  return <IndustryPage id="investment-advisers" banner={banner} sections={sections} />;
}
