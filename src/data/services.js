// Services offered by the firm (source: cpataxadviser.com). They feed the Home and
// Services pages, the footer, the contact form, and each service's own page at
// /services/<id> (or /<slug>/). Adding an entry here creates its page; add it to the
// header menu in src/data/navigation.js.
//
// slug         optional address for the service's page at the top of the site, /<slug>/
//              (kept from the firm's current site); /services/<id> then forwards to it.
//              Link to a service's page with servicePath(service).
// category     business | individual | international (see serviceCategories)
// name         short label for cards, menus, links, and the contact form
// title        heading for the full description on the Services page
// chip         jump-link label on the Services page
// tagline      one-line description in the header menu
// headline     main heading on the service's own page
// summary      card text on the Home page and related-service cards
// description  intro under the page headings (search details are in src/data/seo.js)
// notice       optional note shown prominently on the service's page
// cta          label for the service's contact button
// sections     optional blocks for the service's page, in order, in place of the standard
//              overview, highlights, process, and faqs (see DetailBlock in ServiceDetail.jsx)
// related      ids of services suggested at the bottom of the service's page
//
// A service in hiddenServiceIds is left off the site: its page forwards to /services, and it's
// out of every list (menus, cards, related services, industries, the contact form). Its entry
// stays here, so taking its id out of the list brings it back.

export const hiddenServiceIds = ['payroll', 'advisory', 'quickbooks', 'individual', 'individual-planning', 'international'];

const allCategories = [
  { id: 'business', label: 'Business services' },
  { id: 'individual', label: 'Individual services' },
  { id: 'international', label: 'International client services' },
];

const allServices = [
  {
    id: 'business-tax',
    slug: 'business-tax-preparation-services',
    category: 'business',
    icon: 'briefcase',
    name: 'Business Tax Preparation',
    title: 'Tax Preparation for Businesses',
    chip: 'Business Tax',
    tagline: 'Federal, state, payroll and sales tax',
    // Page copy from the firm's business tax preparation page brief; keep it word for word.
    // The brief has no banner of its own: the banner takes its page title and description.
    headline: 'Business Tax Preparation Services',
    summary:
      'State and federal business returns, payroll and sales tax compliance, and entity structuring, from an advisor who works with you all year.',
    description:
      'Get professional business tax preparation, tax filing, payroll tax, sales tax, and tax planning services for businesses in South Carolina.',
    included: [
      'State and federal income tax preparation and filing',
      'Business tax planning',
      'Tax strategy service',
      'Profit and loss statements',
      'Local and state sales tax compliance',
      'State and federal payroll tax',
    ],
    cta: 'Discuss your business taxes',
    sections: [
      {
        eyebrow: 'Overview',
        title: 'We Specialize in Business Tax Preparation',
        paragraphs: [
          'As a business owner, your attention is on running and developing your firm. Managing tax requirements, preparing financial information, and keeping up with changing tax obligations can take valuable time away from your day-to-day responsibilities.',
          'Our business tax preparation services assist you in maintaining the organization of your financial data while handling your tax filing and compliance obligations.',
          "We work with companies all year long, not just during tax season, to offer useful tax planning, preparation, and assistance based on your company's requirements.",
        ],
      },
      {
        eyebrow: 'Services',
        title: 'Our Business Tax Preparation Services',
        paragraphs: [
          'Our business tax services are intended to assist companies in handling tax preparation, filing, compliance, and other financial obligations.',
        ],
        features: [
          {
            icon: 'file-check',
            title: 'State and Federal Income Tax Preparation and Filing',
            text: "We assist businesses with state and federal income tax preparation and filing, ensuring that necessary tax returns are correctly completed and filed in compliance with relevant regulations. Our services help you stay organized during the tax filing process while meeting small businesses' tax preparation demands.",
          },
          {
            icon: 'chart',
            title: 'Business Tax Planning',
            text: 'Effective tax planning helps businesses prepare for upcoming tax obligations and make informed financial decisions. Our tax planning services in Simpsonville, SC, focus on helping small businesses organize their tax-related financial information and apply established tax planning strategies to help minimize tax liability.',
          },
          {
            icon: 'target',
            title: 'Tax Strategy Service',
            text: 'A well-defined tax strategy helps small businesses make informed financial decisions and manage their tax liability. Our tax strategy services in Simpsonville, SC, focus on applying practical tax planning strategies that support business financial goals and help businesses prepare for future tax obligations.',
          },
          {
            icon: 'ledger',
            title: 'Profit and Loss Statements',
            text: 'We provide profit and loss statements to help businesses maintain a clear view of their financial performance. These statements can support tax preparation and provide useful financial information for business management.',
          },
        ],
      },
      {
        eyebrow: 'Benefits',
        title: 'Benefits of Our Business Tax Preparation Services',
        points: [
          {
            label: 'Accurate Tax Preparation',
            text: 'Create the necessary business tax returns in accordance with the applicable federal and state regulations.',
          },
          {
            label: 'Year-Round Tax Support',
            text: 'Get assistance with tax planning and preparation outside of the regular tax season.',
          },
          {
            label: 'Better Tax Organization',
            text: 'Keep relevant financial and tax information organized for the filing process.',
          },
          {
            label: 'Informed Business Decisions',
            text: 'Use financial information such as profit and loss statements to better understand your business performance.',
          },
        ],
      },
      {
        eyebrow: 'How it works',
        title: 'Our Process',
        steps: [
          {
            title: 'Understand Your Business',
            text: 'We begin by understanding your business structure, tax requirements, and specific tax preparation needs.',
          },
          {
            title: 'Review Financial Information',
            text: 'We review the relevant financial information required for business tax preparation and related reporting.',
          },
          {
            title: 'Prepare Required Tax Returns',
            text: 'We prepare the applicable state and federal business tax returns based on the information available and applicable requirements.',
          },
          {
            title: 'Address Tax Compliance Requirements',
            text: 'We help manage applicable sales tax and payroll tax requirements to keep your business current with required filings.',
          },
        ],
      },
      {
        eyebrow: 'Next steps',
        title: 'Ready to Get Started?',
        callout: {
          title: 'To discuss your needs for business tax preparation and planning, get in touch with us right now.',
        },
      },
      {
        eyebrow: 'FAQ',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'What business tax preparation services do you provide?',
            answer: 'We provide state and federal income tax preparation and filing, sales tax compliance, and business tax planning services.',
          },
          {
            question: 'What business tax strategies do you offer?',
            answer: 'We help businesses explore tax planning strategies to manage their tax obligations and identify opportunities to minimize tax liability.',
          },
          {
            question: 'Are state and federal business tax filing services offered by you?',
            answer: 'Yes. We provide state and federal income tax preparation and filing for businesses based on applicable tax requirements.',
          },
          {
            question: 'Do you provide business tax planning services?',
            answer: 'Yes. We provide business tax planning services to help businesses prepare for upcoming tax obligations and manage their tax liability.',
          },
          {
            question: 'Do you provide business tax strategy support?',
            answer: 'Yes. We provide tax strategy support to help businesses identify tax planning opportunities and make informed decisions about their tax obligations.',
          },
          {
            question: 'Do you provide profit and loss statements?',
            answer: 'Yes. We provide profit and loss statements to help businesses understand their financial performance and support tax preparation and business management.',
          },
        ],
      },
    ],
    related: ['planning', 'bookkeeping', 'advisory'],
  },
  {
    id: 'planning',
    slug: 'tax-planning-services-simpsonville-sc',
    category: 'business',
    icon: 'chart',
    name: 'Tax Planning',
    title: 'Tax Planning & Strategy',
    chip: 'Tax Planning',
    tagline: 'Year-round strategies to lower your tax',
    // Page copy from the firm's tax planning page brief; keep it word for word.
    headline: 'Tax Planning and Preparation Services',
    summary:
      'We go beyond tax compliance and proactively recommend tax-saving strategies to maximize your after-tax income.',
    description:
      "Use Professional Federal, State, and Tax Planning and Preparation Services to Simplify Your Tax Filing Process! We take care of complex tax files and paperwork so you don't have to.",
    included: [
      'Tax credit and deduction review',
      'IRS-compliant recordkeeping',
      'Year-round tax planning strategies',
      'Paycheck withholding review',
      'Tax deferral through pension and retirement plans',
      'Tax-exempt investment opportunities',
    ],
    cta: 'Start Now with a Free Consultation!',
    sections: [
      {
        eyebrow: 'Overview',
        title: 'Best Tax Planning Services in South Carolina, USA',
        paragraphs: [
          'Many individuals and businesses feel they are paying more in taxes than necessary. Our tax services help you understand your tax situation, identify available tax-saving opportunities, and plan ahead for your tax obligations.',
          'We provide tax planning and tax strategy support throughout the year, helping you make informed financial decisions and manage your tax liability more effectively.',
        ],
      },
      {
        eyebrow: 'Services',
        title: 'Our Tax Planning Services',
        content: [
          'Our tax planning services are designed to help you understand your tax obligations, plan ahead, and identify opportunities to manage your tax liability effectively.',
          { heading: 'Tax Planning Strategies for Businesses:' },
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
        ],
      },
      {
        eyebrow: 'Benefits',
        title: 'Benefits of Our Tax Planning Services',
        paragraphs: [
          'Our tax planning services are designed to help individuals and businesses better understand their tax situation, plan ahead, and make informed decisions throughout the year.',
        ],
        points: [
          {
            label: 'Reduce Unnecessary Tax Liability',
            text: 'Identify applicable tax deductions, credits, and planning opportunities that may help reduce your overall tax liability.',
          },
          {
            label: 'Better Year-Round Tax Planning',
            text: 'Plan for your tax obligations throughout the year instead of waiting until tax season.',
          },
          {
            label: 'Accurate Tax Withholding',
            text: 'Review your paycheck withholding to help ensure it reflects your current tax situation and avoid unnecessary overpayment.',
          },
          {
            label: 'IRS-Compliant Recordkeeping',
            text: 'Maintain a recordkeeping system that supports accurate financial and tax records and meets IRS requirements.',
          },
          {
            label: 'Plan for Tax Deferral Opportunities',
            text: 'Understand how retirement contributions, pension plans, and similar plans may help defer tax liabilities.',
          },
          {
            label: 'Understand Tax-Exempt Investment Opportunities',
            text: 'Learn about certain investments that may generate tax-exempt income at the federal or state level, depending on your situation.',
          },
          {
            label: 'Make Informed Tax Decisions',
            text: 'Gain a clearer understanding of your tax position and the available options for managing your tax obligations.',
          },
          {
            label: 'Tax Planning Support',
            text: 'Identify suitable tax planning possibilities and make plans for future tax requirements.',
          },
        ],
      },
      {
        eyebrow: 'Next steps',
        title: 'Ready to Plan Your Taxes More Effectively?',
        paragraphs: [
          'Take control of your tax planning with professional guidance tailored to your individual or business needs. Contact us today to discuss your tax situation and explore the right tax planning strategies for you.',
        ],
        callout: { title: 'Get Started Today', action: 'Contact Us' },
      },
      {
        eyebrow: 'How it works',
        title: 'Our Process',
        paragraphs: [
          'We follow a clear and practical process to understand your tax situation and help you plan your tax obligations throughout the year.',
        ],
        steps: [
          {
            title: 'Understand Your Tax Situation',
            text: 'We review your current tax situation, financial information, and applicable tax requirements to understand your specific needs.',
          },
          {
            title: 'Review Deductions and Credits',
            text: 'We identify applicable tax deductions and credits to help ensure you take advantage of the opportunities available to you.',
          },
          {
            title: 'Develop Tax Planning Strategies',
            text: 'Based on our review, we develop tax planning strategies that can help manage and potentially reduce your tax liability.',
          },
          {
            title: 'Review Withholding and Tax Deferral Options',
            text: 'We review your paycheck withholding and help you understand available tax deferral options, including retirement contributions and pension plans.',
          },
          {
            title: 'Support Year-Round Tax Planning',
            text: 'We work with you throughout the year—not only during tax season—to review your tax position and make adjustments when needed.',
          },
          {
            title: 'Prepare for Tax Filing',
            text: 'We use the information and planning completed throughout the year to help you move toward an accurate and well-prepared tax return.',
          },
        ],
      },
      {
        eyebrow: 'FAQ',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'What is tax planning, and why is it important?',
            answer: 'Tax planning involves reviewing your financial and tax situation throughout the year to identify potential deductions, credits, and tax-saving opportunities. Proactive planning can help you make informed financial decisions and prepare for your tax obligations.',
          },
          {
            question: 'Do you provide tax planning throughout the year or only during tax season?',
            answer: 'We provide year-round tax planning support. Working with you throughout the year allows us to review changes in your financial situation and identify planning opportunities before tax season.',
          },
          {
            question: 'Can you help me identify tax deductions and credits I may qualify for?',
            answer: 'Yes. We review your tax situation to help identify applicable tax deductions and credits you may be eligible to claim based on your circumstances.',
          },
          {
            question: 'Can you help me organize my tax records?',
            answer: 'Yes. We can help you establish an organized recordkeeping system designed to keep your financial and tax records properly maintained and aligned with applicable IRS requirements.',
          },
          {
            question: 'Can you review my paycheck withholding?',
            answer: 'Yes. We can review your current withholding and help determine whether it appears appropriate for your overall tax situation. We can also discuss potential adjustments when needed.',
          },
          {
            question: 'Can you help me reduce my tax liability?',
            answer: 'We can help identify legal tax planning strategies that may reduce or defer your tax liability, depending on your individual or business circumstances. Tax results vary, so we focus on strategies appropriate to your situation.',
          },
          {
            question: 'Can you help with retirement and pension planning for tax purposes?',
            answer: 'Yes. We can help you explore applicable retirement contributions, pension plans, and other qualifying strategies that may provide opportunities to defer taxes while supporting your long-term financial goals.',
          },
          {
            question: 'When should I start tax planning?',
            answer: 'The earlier you begin, the more opportunities you may have to plan ahead. Year-round tax planning allows you to address potential deductions, credits, withholding, retirement contributions, and other tax considerations before the end of the tax year.',
          },
        ],
      },
    ],
    related: ['business-tax', 'individual', 'advisory'],
  },
  {
    id: 'accounting',
    slug: 'small-business-accounting-service-sc',
    category: 'business',
    icon: 'building',
    name: 'Small Business Accounting',
    title: 'Small Business Accounting',
    chip: 'Accounting',
    tagline: 'Statements, cash flow, outsourced CFO',
    // Page copy from the firm's small business accounting page brief; keep it word for word.
    headline: 'Small Business Accounting Services',
    summary:
      'You have more important things to do than keep your own books. We take care of them so you can get back to running your business and generating profits.',
    description:
      'We provide reliable accounting, bookkeeping, tax, and financial support to help small businesses stay organized, understand their numbers, and make confident decisions.',
    included: [
      'Financial Reporting & Analysis',
      'Cash Flow & Profitability',
      'Budgeting & Financial Forecasting',
      'Strategic Tax Planning',
      'Accounting System Setup',
      'Financial Statements',
      'Profit & Loss & Balance Sheets',
      'Business Tax Returns',
    ],
    cta: 'Schedule a Consultation',
    sections: [
      {
        eyebrow: 'Overview',
        title: 'Accounting Support Built Around Your Business',
        paragraphs: [
          'Managing the financial side of a small business takes time, accuracy, and attention to detail. From maintaining financial records to understanding cash flow and preparing for tax obligations, having dependable accounting support can make a meaningful difference.',
          'At CPA Tax Adviser, we provide small business accounting services customized to your business needs. Whether you need ongoing accounting support, small business bookkeeping and tax assistance, or help understanding your financial information, our team helps keep your finances organized and easier to manage.',
        ],
      },
      {
        eyebrow: 'Accounting Services for Small Businesses',
        title: 'Practical Accounting Support Without the Complexity',
        paragraphs: [
          'Every business has different financial needs. We collaborate with small businesses to offer useful accounting assistance that promotes improved decision-making, reliable record-keeping, and financial performance monitoring.',
          "Whether you're looking for an accountant for a small business, top-rated small business accounting services, or comprehensive accounting and tax services for a small business, we can provide support based on your requirements.",
        ],
      },
      {
        eyebrow: 'What We Do for You',
        title: 'Comprehensive Accounting Services',
        features: [
          {
            icon: 'chart',
            title: 'Financial Reporting & Analysis',
            text: 'Help you understand your financial information and evaluate business performance.',
          },
          {
            icon: 'banknote',
            title: 'Cash Flow & Profitability',
            text: 'Review your financial information to help you better understand cash flow and profitability.',
          },
          {
            icon: 'trend',
            title: 'Budgeting & Financial Forecasting',
            text: 'Help you plan expected income, expenses, and future financial goals.',
          },
          {
            icon: 'target',
            title: 'Strategic Tax Planning',
            text: 'Provide practical tax planning support based on your business and financial situation.',
          },
          {
            icon: 'laptop',
            title: 'Accounting System Setup',
            text: 'Help organize your accounting system, Chart of Accounts, and General Ledger.',
          },
          {
            icon: 'file',
            title: 'Financial Statements',
            text: 'Provide applicable monthly, quarterly, and annual financial statements.',
          },
          {
            icon: 'ledger',
            title: 'Profit & Loss & Balance Sheets',
            text: "Help you review key financial statements and understand your business's financial position.",
          },
          {
            icon: 'file-check',
            title: 'Business Tax Returns',
            text: 'Assist with applicable business tax return preparation and related accounting information.',
          },
        ],
      },
      {
        eyebrow: 'Why Choose Our Accounting Services?',
        title: 'More Than Recordkeeping',
        content: [
          'Good accounting should help you understand your business—not simply record what has already happened.',
          'With professional accounting support, you can:',
          {
            list: [
              'Keep your financial records organized',
              'Gain a clearer view of business performance',
              'Better understand cash flow and profitability',
              'Make more informed financial decisions',
              'Stay better prepared for tax season',
              'Spend less time managing accounting tasks',
            ],
          },
        ],
        closing:
          'Whether you need a small company accountant, ongoing accounting support, or an accounting company for your small business, our team is here to help.',
      },
      {
        eyebrow: 'Nationwide',
        title: 'Accounting Support Wherever Your Business Operates',
        paragraphs: [
          "We provide accounting support for small businesses in Simpsonville, SC, and across the USA. Whether you're searching for accounting services near me for small business or looking for a dependable accounting partner beyond your local area, we provide professional support based on your business needs.",
        ],
      },
      {
        eyebrow: 'Next steps',
        title: 'Ready to Take Control of Your Business Finances?',
        paragraphs: [
          'Get the accounting support you need to keep your financial records organized, understand your numbers, and make confident decisions for your business.',
        ],
        callout: {
          title: 'Have questions about our accounting services?',
          text: 'Contact us today.',
        },
      },
      {
        eyebrow: 'FAQ',
        title: 'Frequently Asked Questions About Small Business Accounting',
        faqs: [
          {
            question: 'Do you provide accounting services for small businesses?',
            answer: 'Yes. We provide accounting support specifically for small businesses and customize our services to their financial and operational needs.',
          },
          {
            question: 'Do you provide bookkeeping and tax services for small businesses?',
            answer: 'Yes. We can provide small business bookkeeping and tax support based on your business requirements, helping keep your financial records organized and prepared for applicable tax needs.',
          },
          {
            question: 'Can you help with financial statements?',
            answer: "Yes. We provide applicable monthly, quarterly, and annual financial statements to help you review your business's financial position and performance.",
          },
          {
            question: 'Do you provide tax planning for small businesses?',
            answer: 'Yes. We provide strategic tax planning support to help small business owners make informed decisions based on their financial situation and business goals.',
          },
          {
            question: 'Can you help set up my accounting system?',
            answer: 'Yes. We can assist with accounting system setup, including organizing the Chart of Accounts and General Ledger based on your business needs.',
          },
          {
            question: 'Do you work with QuickBooks Online?',
            answer: 'Yes. We use QuickBooks Online, which supports our remote working environment and allows us to manage accounting tasks efficiently.',
          },
          {
            question: 'Do you provide accounting services in Simpsonville, SC?',
            answer: 'Yes. We provide accounting services in Simpsonville, SC, as well as support businesses across the USA.',
          },
          {
            question: 'How do I get started with your accounting services?',
            answer: 'You can contact us to discuss your business, current accounting needs, and goals. We can then help determine which accounting services are appropriate for your situation.',
          },
        ],
      },
    ],
    related: ['bookkeeping', 'payroll', 'business-tax'],
  },
  {
    id: 'bookkeeping',
    slug: 'bookkeeping-services-in-simpsonville',
    category: 'business',
    icon: 'ledger',
    name: 'Bookkeeping',
    title: 'Bookkeeping Services',
    chip: 'Bookkeeping',
    tagline: 'Clean-ups, ledgers, quarterly reviews',
    // Page copy from the firm's bookkeeping page brief; keep it word for word.
    headline: 'Bookkeeping Services for Small Businesses in Simpsonville, SC',
    summary:
      "Accurate bookkeeping is essential to your company's long-term viability. Experienced and reliable, we serve a variety of industries and clients.",
    description:
      'We provide accurate and reliable bookkeeping services to help small businesses keep their financial records organized, up to date, and tax-ready.',
    included: [
      'Bank & Credit Card Reconciliation',
      'Income & Expense Tracking',
      'Payroll Transaction Recording',
      'General Ledger & Chart of Accounts Management',
      'Monthly Book Closing & Financial Reporting',
      'Year-End Bookkeeping & Tax-Ready Records',
    ],
    cta: 'Discuss your books',
    sections: [
      {
        eyebrow: 'Overview',
        title: 'Keep Your Books Organized. Make Better Business Decisions.',
        paragraphs: [
          'Keeping up with bookkeeping can take valuable time away from running your business. At CPA Tax Adviser, we provide dependable bookkeeping services across the USA, helping small business owners keep their financial records accurate, organized, and up to date.',
          'From monthly bookkeeping and account reconciliation to financial reporting and year-end records, we handle your bookkeeping needs on a monthly basis, helping you keep your financial records organized while you focus on managing and growing your business.',
        ],
        callout: {
          title: 'Need help with your bookkeeping Services?',
          text: 'Contact CPA Tax Adviser today.',
        },
      },
      {
        eyebrow: 'Our approach',
        title: 'Bookkeeping Support Built Around Your Business',
        paragraphs: [
          'Every business has different bookkeeping needs. A new business may need help setting up its accounts and recordkeeping process, while an established company may need ongoing monthly support or help cleaning up years of financial records.',
          'CPA Tax Adviser works with small businesses, self-employed professionals, and business owners who need practical bookkeeping support without having to manage everything themselves.',
          'Our approach starts with understanding how your business operates and what you need from your financial records. We then help organize your books, keep transactions properly recorded, and maintain the records you need throughout the year.',
          'Whether you need regular monthly bookkeeping or catch-up bookkeeping services, our goal is to make your financial records easier to understand and manage.',
        ],
      },
      {
        eyebrow: 'Services',
        title: 'Our Bookkeeping Services',
        paragraphs: [
          'Our bookkeeping services cover the core financial recordkeeping tasks that small businesses need throughout the year.',
        ],
        features: [
          {
            icon: 'card',
            title: 'Bank & Credit Card Reconciliation',
            text: 'We compare your bank and credit card activity with your accounting records to help identify missing transactions, discrepancies, and items that need attention.',
          },
          {
            icon: 'trend',
            title: 'Income & Expense Tracking',
            text: 'We keep your business income and expenses properly recorded and organized, giving you a clearer picture of where your money is coming from and where it is going.',
          },
          {
            icon: 'banknote',
            title: 'Payroll Transaction Recording',
            text: 'We record payroll-related transactions accurately within your bookkeeping records so your financial statements reflect your business activity.',
          },
          {
            icon: 'ledger',
            title: 'General Ledger & Chart of Accounts Management',
            text: 'A properly maintained general ledger and chart of accounts provide the foundation for clean and useful financial records.',
          },
          {
            icon: 'chart',
            title: 'Monthly Book Closing & Financial Reporting',
            text: 'We help keep your books current and prepare important reports such as Profit & Loss Statements, Balance Sheets, and Cash Flow Statements.',
          },
          {
            icon: 'file-check',
            title: 'Year-End Bookkeeping & Tax-Ready Records',
            text: 'At year-end, organized books make it easier to review your financial activity and prepare the records needed for tax work.',
          },
        ],
      },
      {
        eyebrow: 'How it works',
        title: 'How Our Bookkeeping Process Works',
        paragraphs: ['We keep the process straightforward and focused on your business.'],
        steps: [
          {
            title: 'Understand Your Business',
            text: 'We start by learning about your business, your current bookkeeping setup, and the type of support you need.',
          },
          {
            title: 'Review Your Existing Records',
            text: 'We review your accounts and financial records to identify missing information, inconsistencies, or areas that need cleanup.',
          },
          {
            title: 'Organize Your Books',
            text: 'Transactions are properly categorized and recorded, while accounts, reconciliations, and other bookkeeping details are brought into order.',
          },
          {
            title: 'Maintain Your Books Regularly',
            text: 'With monthly bookkeeping support, we keep your records updated so you do not have to deal with a backlog at the end of the year.',
          },
          {
            title: 'Provide Financial Reports',
            text: 'Financial reports are available when applicable, giving you access to the information you need to review your business performance and make informed decisions.',
          },
          {
            title: 'Keep Your Records Tax-Ready',
            text: 'We maintain organized financial records throughout the year, making the transition into tax preparation easier.',
          },
        ],
      },
      {
        eyebrow: 'Why choose us',
        title: 'Why Choose CPA Tax Adviser?',
        paragraphs: [
          'Your bookkeeping should do more than record transactions. It should give you a reliable view of your business finances.',
          'At CPA Tax Adviser, we focus on providing bookkeeping support that fits the way small businesses actually operate.',
        ],
        points: [
          { label: 'Personalized service', text: 'We take the time to understand your business and bookkeeping needs.' },
          { label: 'Accurate records', text: 'We focus on keeping transactions, accounts, and financial records properly organized.' },
          { label: 'Ongoing support', text: 'Regular bookkeeping helps prevent your financial records from falling behind.' },
          { label: 'Support for growing businesses', text: 'Our services can support businesses as their financial activity and bookkeeping needs change.' },
          { label: 'Better financial visibility', text: 'Organized books make it easier to review income, expenses, cash flow, and overall business performance.' },
          { label: 'Tax-ready records', text: 'Keeping your books current throughout the year can make year-end financial review much easier.' },
        ],
        closing:
          'If you are searching for a bookkeeping company in Simpsonville, you can rely on CPA Tax Adviser for practical bookkeeping support designed around your business.',
      },
      {
        eyebrow: 'Next steps',
        title: 'Take Bookkeeping Off Your To-Do List',
        paragraphs: [
          'You started your business to serve your customers and build something valuable—not to spend every week sorting through transactions and financial records.',
          'Let CPA Tax Adviser handle your bookkeeping while you focus on running your business.',
        ],
        callout: {
          title:
            'Looking for reliable bookkeeping services in Simpsonville, SC? Contact CPA Tax Adviser today to discuss your bookkeeping needs.',
        },
      },
      {
        eyebrow: 'FAQ',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'What bookkeeping services do you provide for small businesses?',
            answer: 'We provide a range of bookkeeping services, including bank and credit card reconciliation, income and expense tracking, payroll transaction recording, general ledger management, monthly book closing, financial reporting, and year-end bookkeeping and tax-ready Records.',
          },
          {
            question: 'Do you provide monthly bookkeeping services?',
            answer: 'Yes. Monthly bookkeeping can help keep your financial records current throughout the year. Regular bookkeeping also makes it easier to review your business finances and address issues before they become larger problems.',
          },
          {
            question: 'Can you help clean up old or incomplete bookkeeping records?',
            answer: 'Yes. If your books have fallen behind or contain records that need to be organized, catch-up bookkeeping and cleanup can help bring your financial records up to date.',
          },
          {
            question: 'Do you work with QuickBooks?',
            answer: 'Yes. We work with QuickBooks Online and other cloud-based accounting software that supports our remote working environment.',
          },
          {
            question: 'Why is bookkeeping important for a small business?',
            answer: 'Good bookkeeping gives you a clearer view of your income, expenses, cash flow, and overall financial position. It also helps you maintain organized records throughout the year.',
          },
          {
            question: 'Can bookkeeping help prepare my business for tax time?',
            answer: 'Yes. Once all required data is submitted, we usually prioritize completing the bookkeeping needed for tax preparation, helping keep your records accurate and tax-ready.',
          },
          {
            question: 'How do I get started with your bookkeeping services?',
            answer: 'Contact CPA Tax Adviser and tell us about your business, your current bookkeeping setup, and the type of support you need. We can discuss your requirements and determine the appropriate bookkeeping service for your business.',
          },
        ],
      },
    ],
    related: ['quickbooks', 'payroll', 'accounting'],
  },
  {
    id: 'payroll',
    category: 'business',
    icon: 'banknote',
    name: 'Payroll',
    title: 'Payroll Services',
    chip: 'Payroll',
    tagline: 'Pay runs, payroll tax, W-2s and 1099s',
    headline: 'Cost-effective payroll services for your business',
    summary:
      "Payroll solutions that meet your business's needs and let you spend your time doing what you do best: running your company.",
    description:
      'On average, small business owners spend eight hours per month on payroll-related tasks. When you outsource payroll to us, a dedicated payroll specialist works with you throughout the entire process.',
    idealFor: 'businesses with employees or contractors',
    included: [
      'Direct deposit and electronic fund transfers',
      'Payroll check printing',
      'Payroll tax compliance, e-filing, and payments',
      'Payroll reports by employee or department',
      'W-2, W-3, and 1099 processing',
      'Monthly, quarterly, and annual payroll tax reports',
      'Payment of third-party withholdings, such as insurance',
    ],
    cta: 'Discuss your payroll',
    overview: [
      'Payroll takes time, and mistakes can be costly. Outsourcing it means no in-house payroll staff to hire and no systems to maintain.',
      'We handle each pay run, the tax deposits and filings that come with it, and the year-end forms your employees and contractors need.',
    ],
    highlights: [
      {
        icon: 'users',
        title: 'A dedicated specialist',
        text: 'One payroll specialist works with you throughout the entire payroll process.',
      },
      {
        icon: 'clock',
        title: 'Hours back every month',
        text: 'Skip the hours small business owners typically spend on payroll each month.',
      },
      {
        icon: 'shield',
        title: 'Compliant filings',
        text: 'Payroll taxes are calculated, paid, and filed on schedule.',
      },
    ],
    process: [
      { title: 'Set up payroll', text: 'We gather employee details, pay schedules, and tax accounts.' },
      { title: 'Run each payroll', text: 'Employees are paid by direct deposit or check.' },
      { title: 'File and pay taxes', text: 'We handle payroll tax payments, filings, and reports.' },
      { title: 'Year-end forms', text: 'We process W-2s, W-3s, and 1099s.' },
    ],
    faqs: [
      {
        question: 'Can employees be paid by direct deposit?',
        answer: 'Yes. We offer direct deposit and electronic fund transfers, as well as printed payroll checks.',
      },
      {
        question: 'Do you handle payroll tax filings?',
        answer: 'Yes. We handle payroll tax compliance, e-filing, and payments, along with monthly, quarterly, and annual payroll tax reports.',
      },
      {
        question: 'Do you prepare W-2s and 1099s?',
        answer: 'Yes. W-2, W-3, and 1099 processing is included.',
      },
    ],
    related: ['bookkeeping', 'accounting', 'business-tax'],
  },
  {
    id: 'advisory',
    category: 'business',
    icon: 'target',
    name: 'Business Advisory',
    title: 'Business Advisory Services',
    chip: 'Advisory',
    tagline: 'Strategy, valuations, and forecasts',
    headline: 'Business planning is the foundation of future success',
    summary:
      "If your plans and ideas are still locked up inside your head, a strategic plan can help you clarify your company's direction.",
    description:
      "We combine industry experience with time-tested solutions to develop a framework on which to build your company's success.",
    included: [
      'Planning for strategic growth',
      'Performance metrics',
      'Review and evaluation of internal controls',
      'SAS 112 compliance',
      'Business valuations and due diligence',
      'Budget and cash flow analysis and management',
      'Business entity selection and restructuring',
      'Financial projections and forecasts',
      'Assistance with debt and financing',
      'Business expansion and acquisition analysis',
      'Evaluation and implementation of accounting software',
    ],
    cta: 'Plan your next step',
    sections: [
      {
        title: 'Business Planning Is the Foundation of Future Success',
        content: [
          'In today’s fast-paced, competitive world, many businesses face unprecedented challenges.',
          'Maybe yours does too. If you agree, then chances are you’re spending more and more time on human resource issues, payroll tax compliance, and sales and use tax than you are on revenue-generating opportunities and planning for future growth.',
          { heading: "If You Feel Like You're Spinning Your Wheels, We Can Help." },
          'With years of proven expertise in business planning, we make sure that business owners like you have the information - and insights - they need to remain competitive and ensure financial stability for you and your loved ones for years to come.',
          'We combine industry experience with time-tested solutions to develop a framework upon which to build your company’s success. Even better, when you leave the business planning to us, you can get back to doing what you enjoy and do best--running your business.',
          'Our business planning and advisory services include:',
          {
            list: [
              'Planning for strategic growth',
              'Performance metrics',
              'Review and evaluation of internal controls',
              'SAS 112 compliance',
              'Business valuations and due diligence',
              'Budget and cash flow analysis and management',
              'Business entity selection and restructuring',
              'Financial projections and forecasts',
              'Assistance with debt and financing',
              'Business expansion and acquisition analysis',
              'Evaluation and implementation of accounting software',
            ],
          },
          { heading: 'Start Planning for Future Success Today' },
          'It’s more important than ever to have a trusted business advisor like us by your side to help you plan for the future success of your business. If you’re ready to turn today’s challenges into tomorrow’s opportunities, don’t wait a minute longer to contact us.',
          'To find out how we can help your business succeed submit the form below or give us a call. What have you got to lose?',
        ],
      },
    ],
    related: ['accounting', 'planning', 'business-tax'],
  },
  {
    id: 'quickbooks',
    category: 'business',
    icon: 'laptop',
    name: 'QuickBooks Services',
    title: 'Services for QuickBooks',
    chip: 'QuickBooks',
    tagline: 'Setup, training, and tune-ups',
    headline: 'QuickBooks, set up and running the way your business works',
    summary:
      'QuickBooks is ideal accounting software for small to mid-sized businesses. We set it up, train your team, and keep it running smoothly.',
    description:
      'After we set up your QuickBooks software, we customize it specifically for your business, including integrating third-party invoicing or bill pay software, and help you move toward paperless accounting.',
    included: [
      'QuickBooks setup and customization',
      'Invoicing and bill pay integrations',
      'Training for you and your employees',
      'Monthly or quarterly transaction review',
      'General ledger and account reconciliation',
      'Periodic tune-ups and clean-ups',
      'Answers to QuickBooks questions by phone or email',
      'QuickBooks Online setup',
    ],
    cta: 'Get QuickBooks help',
    sections: [
      {
        note: 'Intuit, QuickBooks, and QuickBooks ProAdvisor are registered trademarks of Intuit Inc.\nUsed with permission under the QuickBooks ProAdvisor Agreement.',
        title: 'Gain Valuable Financial Insights',
        content: [
          "If you've been thinking about making the switch to a paperless accounting system, QuickBooks is easy to use and is an affordable solution that allows you to manage your business more efficiently.",
          'With both desktop and online ("in the cloud") versions, it\'s easy to view transaction records and prepare custom reports that help you manage cash flow, monitor income and expenses, and make sound business decisions.',
          { heading: 'More Freedom to Focus on Your Business' },
          "When you use accounting software like QuickBooks, you'll have more time to focus on what you do best, which is run your business. Instead of searching through your filing cabinet or that stack of manila file folders piled high in the corner of your desk, you can quickly find the information you need using the search function and entering keywords. You can even search from your mobile, laptop, or your tax preparer's office if you're using cloud-based accounting software.",
          "We understand that the decision to switch to a new accounting system can be a difficult one. But once you've made the decision, we're here for you every step of the way.",
          'What we do for you:',
          {
            list: [
              'Set up and customization - After we set up your QuickBooks software, we help you customize it specifically for your business - including integrating third-party invoicing or bill pay software.',
              'Employee Training - Provide personalized training for you and your employees at your location or ours.',
              'QuickBooks Review - Review, sort and process monthly or quarterly transactions, reconcile the general ledger and all accounts and prepare required reports.',
              'Periodic Tune-ups - We are available to perform periodic reviews of your QuickBooks system reviewing transactions and cleaning up and organizing your bookkeeping system.',
            ],
          },
          { heading: 'Make the Smart Choice' },
          'QuickBooks is a financial management tool that simplifies your workflow processes, reduces paperwork clutter, and saves your business time and money.',
          "If you’re ready to give QuickBooks a try, contact us today. If you'd like to learn more about how QuickBooks can benefit your business, click on any of the links below.",
          {
            cards: [
              {
                title: 'Why QuickBooks',
                text: 'QuickBooks is the ideal business accounting software for small to mid-sized business owners. Here are 10 reasons why you should be using QuickBooks.',
                to: '#why-quickbooks',
              },
              {
                title: 'Setup for QuickBooks',
                text: 'Although QuickBooks is designed for the layperson to understand, the initial setup and installation can be tricky. Save hours of frustration by allowing us to set up QuickBooks for you correctly.',
                to: '#quickbooks-setup',
              },
              {
                title: 'Training for QuickBooks',
                text: 'Once QuickBooks is set up and working properly, we can train you or your employees how to use QuickBooks specifically for your business.',
                to: '#quickbooks-training',
              },
              {
                title: 'Answers to QuickBooks Questions',
                text: 'Employees in your accounting department will find comfort in knowing that the answers to their QuickBooks questions are only an email or phone call away, preventing many wasted hours of aggravation and embarrassment.',
                to: '#quickbooks-answers',
              },
              {
                title: 'Tune-up for QuickBooks',
                text: "Whether you need to prepare your books for tax time, a financial review or you just need to clean up some problem areas, you'll get your QuickBooks running smoothly again with a complete Tune-up.",
              },
              {
                title: 'QuickBooks Online',
                text: 'With its fast and easy setup, QuickBooks Online is the next generation of QuickBooks. QuickBooks Online organizes your financial information all in one place, so everything is easy to find. It simplifies all your accounting tasks and presents the information you need exactly the way you need it.',
              },
            ],
          },
        ],
      },
      {
        id: 'why-quickbooks',
        title: '10 Reasons Why You Should Use QuickBooks',
        content: [
          'QuickBooks is the ideal business accounting software for small to mid-sized business owners. Here are 10 reasons why you should be using QuickBooks.',
          {
            numbered: [
              'You save time on bookkeeping and paperwork because many of simple bookkeeping tasks are handled automatically making it easier to run your business.',
              "You can easily generate the reports with the information you need, so you always know where your business stands. You instantly know whether you're making money and whether your business is healthy.",
              'You save money because QuickBooks is so affordable. You can use it to run a $5 million or a $25 million business for a few hundred bucks. Accounting software is truly one of the great bargains in business.',
              'Your business can grow with QuickBooks. QuickBooks will help you design a business plan to use when trying to secure a small business loan or line of credit or to plan for the future. QuickBooks will create a projected balance sheet, profit and loss statement and statement of cash flows in the format recommended by the U.S. Small Business Administration.',
              'You can customize QuickBooks to work the way you want. QuickBooks is specifically designed to be flexible and adaptable to a wide range of small businesses. To broaden its appeal, QuickBooks has recently added customized accounting packages for contractors, retailers, health care professionals, and non-profit organizations.',
              "You can rest assured knowing that QuickBooks is a stable, reliable and proven product. Hundreds of thousands of small businesses throughout the world have chosen QuickBooks as their accounting software. You can't go wrong with a software program with such an extensive installed user base.",
              'You save typing time and errors by sharing data between QuickBooks and over 100 business applications. You can even share data with popular programs, such as Microsoft Excel, Word, Outlook and Act!.',
              'You will get paid faster with QuickBooks online payments. E-mail an invoice or statement and with QuickBooks Online Billing, your customer can easily pay you with a credit card or bank account transfer. No more waiting for the check in the mail!',
              "You can easily accept credit cards. With QuickBooks Merchant Account Service, you can accept credit cards with ease. QuickBooks Merchant Account Service is the only credit card acceptance service integrated with QuickBooks software, which means you don't have to enter the same data twice. No additional software or hardware is required. Your customers can use Visa, MasterCard, or American Express.",
              "You can pay your bills and handle your banking online. Setup your current bank account in QuickBooks, and you're ready to pay your bills without licking envelopes, sticking stamps, or printing paper checks. Just write checks in QuickBooks as you normally would, then click a button and your participating bank does the rest! Pay anyone in the U.S. from your credit card companies to your pizza service. Online banking also lets you download your monthly statement from your participating bank directly into QuickBooks for easier reconciliation.",
            ],
          },
        ],
      },
      {
        id: 'quickbooks-setup',
        title: 'Setup for QuickBooks',
        content: [
          'Although QuickBooks is designed for the layperson to understand, the initial setup and installation must be done correctly in order for future information to be accurate.',
          'All information necessary to set up manual accounting records is also necessary to set up and install QuickBooks on your desktop. This task is even more complicated if you switch from manual accounting operations to QuickBooks in the middle of the year.',
          'Which accounting method will you use? What chart of accounts do you need for your business? How do you handle beginning balances?',
          'An expert can easily answer all of these questions and complete the initial setup and Installation in a timely manner. In addition, your accounting employees receive training on the accounting software to enhance their performance.',
          { heading: 'How Much Does It Cost?' },
          'We first want to find out a little more about your business and your accounting records before we quote you an exact price. Rest assured that we work with many small business owners and our rates are designed to fit the budgets of our clients.',
          "As with any accounting software program, installation and training take time -- time taken away from managing your business. Here's a short list of the services we provide while setting up QuickBooks:",
          {
            list: [
              'Study and evaluate your software and accounting needs.',
              'Recommend software and hardware requirements.',
              'Install software, design and set up a chart of accounts and entire accounting package including payroll, accounts receivable, inventory, accounts payable, etc.',
              'Determination of your QuickBooks starting date.',
              'Loading your chart of account and balances as of that starting date.',
              'Preparation of a list of the items that you sell to your customers. This list includes services, inventory parts, non-inventory parts, other charges and sales taxes.',
              'Entering your outstanding accounts receivable and accounts payable details as of your starting date.',
              'Entering your ending statement bank balances and outstanding checks and deposits in transit as of your starting date.',
              'Printing a trial balance as of your starting date and comparing it to your trial balance from your old system.',
              'Entering your transactions since your starting date into QuickBooks',
              'Train client or client staff in use of software to meet their accounting, management and tax needs.',
            ],
          },
          '**Ongoing Services:**',
          {
            list: [
              'Follow up training to ensure the client is "on the right track."',
              'Monthly, quarterly or annual review of client QuickBooks data to assist in tax preparation and management reports.',
            ],
          },
        ],
      },
      {
        id: 'quickbooks-training',
        title: 'Training for QuickBooks',
        content: [
          'Once QuickBooks is set up and working properly, we can train you or your employees to properly operate QuickBooks specifically for your business.',
          { heading: 'Why choose one-on-one attention instead of taking a class?' },
          {
            list: [
              'We come to your location.',
              'We focus on the individual issues facing your business.',
              'We will be there to answer your specific questions and concerns.',
              "No need to spend time on features that don't impact your business!",
            ],
          },
          { callout: 'Call today to set up an appointment. We will come to your location!!', phone: true },
        ],
      },
      {
        id: 'quickbooks-answers',
        title: 'Answers to QuickBooks Questions',
        content: [
          { heading: 'Questions about QuickBooks?' },
          'QuickBooks users are generally not stumped by the software, they are stumped by the accounting information necessary to complete the transactions. Quick access to correct information is essential to maintain the accuracy of your financial records.',
          'Employees in your accounting department will find comfort in knowing an expert in QuickBooks is only an email or phone call away, preventing many wasted hours of aggravation and embarrassment.',
          'How much does it cost? $20 per question.',
          'Questions may be called in, left on voice mail, faxed or sent via email. A Certified Professional Advisor who specializes in working with QuickBooks will respond with a detailed solution to your problem or question, usually within 24 hours.',
          '100% Money-Back Guarantee: If we cannot adequately resolve your problem or question, your money will be refunded 100%, guaranteed.',
          'Our Answers to QuickBooks Questions service keeps your employees on task.',
        ],
      },
    ],
    related: ['bookkeeping', 'accounting', 'payroll'],
  },
  {
    id: 'individual',
    category: 'individual',
    icon: 'user',
    name: 'Individual Tax Preparation',
    title: 'Individual Tax Preparation',
    chip: 'Individual Tax',
    tagline: 'Personal returns and projections',
    headline: 'Your source for trusted personal accounting and tax preparation',
    summary:
      'We evaluate your individual tax situation and guide you through any tax challenges, so you keep more of your hard-earned money.',
    description:
      "Our goal is to minimize your tax liability. We stay up to date on federal and state tax laws through continuing education, so you don't miss out on the credits and deductions you are entitled to.",
    notice:
      'We are currently focused on small business owners and are not onboarding new individual clients. Contact us to join our waiting list.',
    included: [
      'Accurate returns, filed on time',
      'Estimated taxes for the self-employed',
      'Tax projections and strategies',
      'Electronic filing and direct deposit',
      'Extensions and estimated tax calculations',
      'Withholding review and adjustment',
    ],
    cta: 'Join the waiting list',
    sections: [
      {
        content: [
          "Preparing your own income tax return can be a task that leaves you with more questions than answers. According to a study released by the US Government's General Accounting Office, most taxpayers (77% of 71 million taxpayers) believe they benefited from using a professional tax preparer.",
          "Whether we like it or not, today's tax laws are so complicated that filing a relatively simple return can be confusing. It is just too easy to overlook deductions and credits to which you are entitled. Even if you use a computer software program, there's no substitute for the assistance of an experienced tax professional.",
          "**Here's what you get...**",
          {
            list: [
              'Your tax return will be checked and rechecked by our computer software identifying potential problems the IRS may look at more closely and reviewing the math to limit IRS contact.',
              'Your tax return can be filed electronically so you will get a refund back quicker.',
              'Our staff will show you how to adjust your payroll withholding to get more money back each week. Why give the IRS an interest-free loan for up to 16 months?',
              "We will show you potential deductions to limit your tax liability for next year. In addition, we will give you a sheet of commonly overlooked deductions to limit the following year's tax liability.",
            ],
          },
          { heading: 'Books a Mess? No Problem!' },
          "If you own a small business and haven't kept up with your bookkeeping, don't worry. We can help you. We'll prepare your bookkeeping for the year, prepare a full Schedule C, as well as your personal income tax return. Then we'll help you set up an easy system that allows you to keep your books in tip-top shape next year.",
        ],
      },
    ],
    related: ['individual-planning', 'international', 'planning'],
  },
  {
    id: 'individual-planning',
    category: 'individual',
    icon: 'chart',
    name: 'Individual Tax Projections & Strategies',
    title: 'Tax Projections & Strategies for Individuals',
    chip: 'Tax Projections',
    tagline: 'Know where you stand before year-end',
    headline: 'Plan ahead and keep more of your hard-earned money',
    summary:
      'Tax projections and personalized strategies for professionals, executives, and pre-retirees, so there are no surprises at tax time.',
    description:
      "Planning is the key to successfully and legally reducing your tax liability. A tax projection shows where you stand while there is still time to act, and our strategies help you act on it.",
    notice:
      'We are currently focused on small business owners and are not onboarding new individual clients. Contact us to join our waiting list.',
    included: [
      'Tax projections before year-end',
      'Paycheck withholding review and adjustment',
      'Estimated tax calculations for the self-employed',
      'Tax deferral through pension and retirement plans',
      'Investments that produce tax-exempt income',
      'Every tax credit and deduction you deserve',
    ],
    cta: 'Join the waiting list',
    sections: [
      {
        content: [
          'Learn how to lower your taxes with these legitimate tax-saving strategies.',
          { heading: 'Financial Guides' },
          {
            icon: 'book',
            list: [
              'Tax Saving Strategies: A Helpful Checklist',
              'Travel and Entertainment: Maximizing the Tax Benefits',
              'The "Nanny Tax" Rules: What To Do If You Have Household Employees',
              'Higher Education Costs: How To Get The Best Tax Treatment',
              'Selling Your Home: How To Minimize the Tax On the Gain',
              'The Deductibility of Points',
              'Annuities: How They Work and When You Should Use Them',
              'Retirement Plan Distributions: When To Take Them',
              'Retirement Plan Distributions: How To Take Them',
              'Roth IRAs: How They Work and How To Use Them',
              'Mutual Fund Taxation: How To Cut The Tax Bite',
              'Advanced Charity Techniques: Maximizing Your Deduction',
              'Charitable Contributions of Property: Maximizing the Deduction',
              'Charitable Contributions: How To Give Wisely',
            ],
          },
          { heading: 'Frequently Asked Questions' },
          {
            icon: 'help',
            list: [
              'Tax Saving Strategies: Frequently Asked Questions',
              'Travel and Entertainment: Frequently Asked Questions',
              '"Nanny Tax" Rules: Frequently Asked Questions',
              'Tax Benefits of Higher Education: Frequently Asked Questions',
              'Annuities: Frequently Asked Questions',
              'Retirement Assets: Frequently Asked Questions',
              'Mutual Funds: Frequently Asked Questions',
              'Traditional vs Roth IRAs: Frequently Asked Questions',
              'Recordkeeping: Frequently Asked Questions',
              'Charitable Contributions: Frequently Asked Questions',
              'Charitable Deductions: Frequently Asked Questions',
            ],
          },
        ],
      },
    ],
    related: ['individual', 'planning', 'international'],
  },
  {
    id: 'international',
    category: 'international',
    icon: 'globe',
    name: 'International Tax Services',
    title: 'International Client Services',
    chip: 'International',
    tagline: 'Nonresidents, expats, FBAR, treaties',
    headline: 'U.S. tax filing for nonresidents, expatriates, and international clients',
    summary:
      'Nonresident returns, FBAR and FATCA reporting, and tax treaty benefits for individuals and business owners with international ties.',
    description:
      'Nonresidents, expatriates, and individuals with foreign income face unique challenges when filing U.S. taxes. We simplify the process, keep you compliant, and look for every treaty benefit available to you.',
    idealFor: 'nonresidents, expatriates, international students, and foreign investors',
    included: [
      'Nonresident tax preparation (Form 1040-NR)',
      'FBAR and FATCA (Form 8938) compliance',
      'Tax treaty benefits',
      'Multi-state filings for nonresidents',
      'Expatriate tax services',
      'International student tax help (Form 8843)',
    ],
    cta: 'Discuss your situation',
    overview: [
      'Navigating U.S. tax laws and reporting requirements can be challenging for international business owners and individuals. Our founder specializes in working with foreign individuals and nonresident aliens investing in the United States.',
      'Common situations we handle include nonresidents with U.S. rental income, U.S. citizens and green card holders living abroad, and visa holders with U.S. employment income. We serve clients in English and Spanish.',
    ],
    highlights: [
      {
        icon: 'globe',
        title: 'Nonresident returns',
        text: 'Form 1040-NR for nonresidents with U.S. income, such as rental properties or wages.',
      },
      {
        icon: 'shield',
        title: 'FBAR & FATCA',
        text: 'Report foreign bank accounts and financial assets correctly and avoid costly penalties.',
      },
      {
        icon: 'landmark',
        title: 'Treaty benefits',
        text: 'We review applicable tax treaties to help reduce double taxation and increase savings.',
      },
    ],
    process: [
      { title: 'Review your status', text: 'We confirm your residency status, income sources, and filing requirements.' },
      { title: 'Check treaties', text: 'We identify tax treaty provisions that may apply to you.' },
      { title: 'Prepare & file', text: 'We prepare your returns and any FBAR, FATCA, or Form 8843 filings.' },
      { title: 'Plan ahead', text: 'We help you stay compliant in the years that follow.' },
    ],
    faqs: [
      {
        question: 'Do I need to file U.S. taxes as a nonresident?',
        answer: 'If you earn income from U.S. sources, such as rental income, wages, or investment gains, you generally need to file Form 1040-NR.',
      },
      {
        question: 'How is Form 1040-NR different from Form 1040?',
        answer: 'Form 1040-NR is for nonresidents reporting U.S. income. It has different rules for taxable income and allowable deductions than Form 1040, which residents file.',
      },
      {
        question: 'What is an FBAR, and do I need to file one?',
        answer: 'An FBAR (Foreign Bank Account Report) is required if you have a financial interest in, or signature authority over, foreign accounts totaling more than $10,000 at any time during the year. Penalties for not filing can be substantial.',
      },
      {
        question: 'How is FATCA different from the FBAR?',
        answer: 'FATCA reporting uses Form 8938, filed with your tax return when your foreign financial assets exceed certain thresholds. The FBAR is filed separately with FinCEN.',
      },
      {
        question: 'What are tax treaties, and how can they help me?',
        answer: 'Tax treaties between the U.S. and other countries help prevent double taxation by clarifying which country taxes certain income, and they may reduce rates on dividends, interest, and royalties.',
      },
      {
        question: 'How do I know if my country has a tax treaty with the U.S.?',
        answer: "The IRS publishes the list of U.S. tax treaties on its website. We can help you interpret your country's treaty and make sure you receive the benefits you're entitled to.",
      },
      {
        question: 'Do international students need to file U.S. taxes?',
        answer: 'Most F-1 and J-1 visa holders must file a U.S. tax return, even without income. Students without income usually file Form 8843, while those with income may also need to file Form 1040-NR.',
      },
      {
        question: 'What is Form 8843?',
        answer: 'Form 8843 declares nonresident status for F-1, J-1, and similar visa holders. It must be filed even if you had no income.',
      },
      {
        question: 'Can international students claim tax treaty benefits?',
        answer: 'Yes. Many tax treaties let students exempt certain income, such as scholarships, fellowships, or employment earnings. We can help determine whether you qualify.',
      },
      {
        question: 'Do students on OPT or CPT need to file U.S. taxes?',
        answer: 'Yes. Students working under Optional Practical Training (OPT) or Curricular Practical Training (CPT) must file a return to report that income. Depending on your status and income, this may include Form 1040-NR and Form 8843.',
      },
      {
        question: 'Can international students receive a tax refund?',
        answer: 'Some can, through treaty benefits, tax overpayments, or exemptions. We review each situation to identify any refund you may be due.',
      },
    ],
    related: ['individual', 'business-tax', 'planning'],
  },
];

// The services shown on the site, and the groups that have any.
export const services = allServices.filter((service) => !hiddenServiceIds.includes(service.id));
export const serviceCategories = allCategories.filter((category) =>
  services.some((service) => service.category === category.id),
);

export const findService = (id) => services.find((service) => service.id === id);

// Address of a service's own page: /<slug>/ when it has one, otherwise /services/<id>.
export const servicePath = (service) => (service.slug ? `/${service.slug}/` : `/services/${service.id}`);

export const servicesIn = (category) => services.filter((service) => service.category === category);

