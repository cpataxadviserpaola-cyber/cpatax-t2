import IndustryPage from './IndustryPage.jsx';

// Source: the firm's page brief "Accounting Firms for Contractors", word for word. The brief has
// no banner of its own: the banner takes its page title and description. The brief's numbers
// on its lists, steps, and questions are left to the layout. Search details are in
// src/data/seo.js.
// Address: /industry/accounting-firms-for-contractors/ (slug in src/data/industries.js).
const banner = {
  title: 'Accounting Firms for Contractors',
  text: 'Get bookkeeping, accounting, tax planning, and tax preparation support for contractors and construction companies. Keep your financial records organized.',
};

const sections = [
  {
    eyebrow: 'Overview',
    paragraphs: [
      'Managing a contracting business involves more than completing projects. Tracking expenses, organizing financial records, managing cash flow, and preparing for tax obligations are essential to maintaining financial stability.',
      'Our accounting services for contractors help small contractors and construction businesses keep their financial information organized and make informed business decisions. From bookkeeping for contractors to tax planning and tax preparation, we provide practical financial support customized to your business needs.',
    ],
  },
  {
    eyebrow: 'Services',
    title: 'Our Services for Contractors',
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
      { heading: 'Bookkeeping Services for Contractors' },
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
      { heading: 'Tax Planning for Contractors' },
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
      { heading: 'Tax Preparation Services for Contractors' },
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
    title: 'Benefits of Accounting Services for Contractors',
    content: [
      {
        cards: [
          {
            title: 'Better Financial Organization',
            text: 'Maintain organized financial records to understand business income, expenses, and financial activity across your contracting operations.',
          },
          {
            title: 'Improved Expense Tracking',
            text: 'Keep track of project-related expenses, supplier costs, and other business expenditures to support better financial oversight.',
          },
          {
            title: 'Clearer Financial Reporting',
            text: 'Access relevant financial reports to understand business performance and make informed decisions about ongoing and upcoming projects.',
          },
          {
            title: 'Tax Planning Support',
            text: 'Prepare for future tax obligations with organized financial information and practical tax planning strategies suited to your business circumstances.',
          },
          {
            title: 'More Time for Project Management',
            text: 'Reduce the administrative burden associated with bookkeeping and financial recordkeeping, allowing you to focus more on managing projects and serving clients.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'Why choose us',
    title: 'Why Choose Our Accounting Services for Contractors?',
    content: [
      {
        cards: [
          {
            title: 'Services Customized to Contractor Businesses',
            text: 'We understand that contractors need organized records for business expenses, project costs, income, and tax-related information. Our services focus on these essential financial needs.',
          },
          {
            title: 'Support for Small Construction Businesses',
            text: 'Our accounting and bookkeeping services are suited to small construction businesses and contracting companies that need practical financial support.',
          },
          {
            title: 'Organized and Consistent Bookkeeping',
            text: 'We help maintain financial records on a monthly basis, supporting a clearer view of business activity and financial performance.',
          },
          {
            title: 'Practical Tax Planning Assistance',
            text: 'We help businesses prepare for upcoming tax obligations by applying relevant tax planning strategies and organizing the financial information needed for informed decisions.',
          },
          {
            title: 'Financial Information for Better Decisions',
            text: 'Well-maintained records and relevant financial reports can help contractors evaluate expenses, monitor cash flow, and plan for business needs.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'Advantages',
    title: 'Advantages of Professional Construction Accounting',
    content: [
      {
        cards: [
          {
            title: 'Understand Project Costs',
            text: 'Organized records help contractors review project-related expenses and understand how costs affect overall business performance.',
          },
          {
            title: 'Monitor Cash Flow',
            text: 'Tracking income and expenses helps contractors understand their financial position and prepare for upcoming business expenses.',
          },
          {
            title: 'Maintain Reliable Financial Records',
            text: 'Consistent bookkeeping helps keep transactions, invoices, receipts, and other financial documents organized.',
          },
          {
            title: 'Prepare for Tax Obligations',
            text: 'Organized records and tax planning support can make it easier to prepare financial information for applicable tax reporting requirements.',
          },
          {
            title: 'Support Business Growth',
            text: 'Reliable financial information helps contractors evaluate business performance, plan expenditures, and make informed decisions as their operations develop.',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'How it works',
    title: 'How Our Accounting Process Works',
    steps: [
      {
        title: 'Understand Your Business',
        text: 'We learn about your contracting business, the nature of your projects, and your accounting, bookkeeping, and tax preparation needs.',
      },
      {
        title: 'Review Your Financial Records',
        text: 'We review the available financial information and identify the records needed to support your selected services.',
      },
      {
        title: 'Organize Your Bookkeeping',
        text: 'We record and categorize financial transactions, reconcile accounts, and maintain organized bookkeeping records on a monthly basis.',
      },
      {
        title: 'Provide Accounting and Tax Planning Support',
        text: 'Based on your requirements, we help organize financial information, prepare relevant reports when applicable, and support tax planning activities.',
      },
      {
        title: 'Support Tax Preparation',
        text: 'We organize the necessary financial information for applicable business tax return preparation and filing, based on the agreed scope of services.',
      },
    ],
    callout: {
      title: 'Contact us today to discuss accounting services for your contracting business.',
    },
  },
  {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Do you provide bookkeeping for contractors?',
        answer: 'Yes. Our bookkeeping services help contractors record income and expenses, categorize transactions, reconcile accounts, and maintain organized financial records on a monthly basis.',
      },
      {
        question: 'Do you offer bookkeeping for small construction businesses?',
        answer: 'Yes. Our bookkeeping services support small construction businesses by helping organize financial transactions, track business expenses, maintain general ledger records, and prepare relevant financial reports when applicable.',
      },
      {
        question: 'What does accounting for construction companies include?',
        answer: 'Accounting support for construction companies may include organizing financial records, tracking income and expenses, reconciling accounts, maintaining general ledger information, and preparing relevant financial reports based on the agreed scope of services.',
      },
      {
        question: 'Do you provide tax planning for contractors?',
        answer: 'Yes. Our tax planning services help contractors prepare for future tax obligations and consider established strategies that may help minimize tax liability, depending on their business circumstances.',
      },
      {
        question: 'Do you offer tax preparation services for contractors?',
        answer: 'Yes. We help organize financial information and supporting documents for applicable business tax return preparation and filing, based on the services agreed upon.',
      },
      {
        question: 'How can bookkeeping help a contracting business?',
        answer: 'Bookkeeping helps contractors monitor income and expenses, maintain organized financial records, review project-related costs, and access financial information that supports business decisions.',
      },
    ],
  },
];

export default function ContractorFirms() {
  return <IndustryPage id="contractors" banner={banner} sections={sections} />;
}
