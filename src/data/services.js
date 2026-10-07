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

export const serviceCategories = [
  { id: 'business', label: 'Business services' },
  { id: 'individual', label: 'Individual services' },
  { id: 'international', label: 'International client services' },
];

export const services = [
  {
    id: 'business-tax',
    category: 'business',
    icon: 'briefcase',
    name: 'Business Tax Preparation',
    title: 'Tax Preparation for Businesses',
    chip: 'Business Tax',
    tagline: 'Federal, state, payroll and sales tax',
    headline: 'Business tax preparation from a firm that understands how you operate',
    summary:
      'State and federal business returns, payroll and sales tax compliance, and entity structuring, from an advisor who works with you all year.',
    description:
      'It is important to develop a relationship with a tax preparation firm that understands how your business works. As your trusted advisor, we make sure you stay on top of your tax obligations and avoid penalties and fees that reduce your profitability.',
    included: [
      'State and federal income tax preparation and filing',
      'Local and state sales tax compliance',
      'State and federal payroll tax',
      'Minimize tax liability through the use of proven tax planning strategies',
      'Profit and loss statements',
      'Mergers and Acquisitions',
      'Entity selection and structure (S-Corp, C-Corp, LLC)',
    ],
    cta: 'Discuss your business taxes',
    sections: [
      {
        title: 'We Specialize in Business Tax Preparation',
        content: [
          'As a business owner, you’re busy developing new products or services and making sure your business runs smoothly. You probably don’t have time to reconcile your bank account or generate balance sheets to manage your cash flow, let alone read up on the latest tax laws to find out which tax breaks you can take advantage of.',
          'When you first started out, and money was tight, the do-it-yourself method of accounting might have worked just fine. But now that you have employees, pay estimated taxes, and need to manage your cash flow better, it’s time to find a trusted advisor to partner with all year long--not just at tax time.',
          { heading: 'There’s no better time than now to discuss tax planning strategies that will help you build a foundation for future success.' },
          'Here is what we do for you:',
          {
            list: [
              'State and federal income tax preparation and filing',
              'Local and state sales tax compliance',
              'State and federal payroll tax',
              'Minimize tax liability through the use of proven tax planning strategies',
              'Profit and loss statements',
              'Mergers and Acquisitions',
              'Entity selection and structure (S-Corp, C-Corp, LLC)',
            ],
          },
          { heading: 'Make Sure You Never Miss a Deadline Again' },
          'The IRS, as well as state and local governments, imposes strict deadlines for business tax obligations. Missing these tax deadlines and failing to comply with payroll and sales taxes negatively impacts your bottom line and may result in fines for non-compliance.',
          'As your trusted advisor, we make sure you stay on top of your tax obligations and avoid penalties and fees that reduce your profitability.',
          { heading: 'Experienced Tax and Accounting Professionals You Can Trust' },
          'To find out how our team of experienced tax and accounting professionals can help your small business achieve success, call us today or use the contact form below.',
        ],
      },
    ],
    related: ['planning', 'bookkeeping', 'advisory'],
  },
  {
    id: 'planning',
    category: 'business',
    icon: 'chart',
    name: 'Tax Planning',
    title: 'Tax Planning & Strategy',
    chip: 'Tax Planning',
    tagline: 'Year-round strategies to lower your tax',
    headline: 'Start planning your financial future today',
    summary:
      'We go beyond tax compliance and proactively recommend tax-saving strategies to maximize your after-tax income.',
    description:
      "Many people feel like their tax bill is too high. The good news is that it doesn't have to be. Planning is the key to successfully and legally reducing your tax liability.",
    included: [
      'Every tax credit and deduction you deserve',
      'An IRS-compliant recordkeeping system',
      'Year-round tax planning strategies',
      'Paycheck withholding review and adjustment',
      'Tax deferral through pension and retirement plans',
      'Investments that produce tax-exempt income',
    ],
    cta: 'Start planning',
    sections: [
      {
        title: 'Start Planning Your Financial Future Today',
        content: [
          'Many people feel like their tax bill is too high. Maybe you do too. The good news is that it doesn’t have to be. When you work with an accounting firm like ours, we make your financial success a priority.',
          { heading: 'If Financial Success Is Your Goal, We Are Here to Help!' },
          "There is more to preparing your taxes than simply filling out forms at tax time. It's also about understanding our clients’ needs and helping them plan for a secure future.",
          'Here’s how we do it:',
          {
            list: [
              'Based on careful analysis of your tax situation we make sure you take every tax credit and deduction you deserve on your tax return.',
              'We help you set up a recordkeeping system that meets IRS requirements.',
              'We work with you all year long--not just at tax time to develop tax planning strategies that lower your tax bill.',
              'We review and adjust your paycheck withholding so that it accurately reflects your tax situation and lets you keep more of your money (why give the IRS a free loan?).',
              'We help you understand how to defer tax liabilities through pension plans, retirement contributions, and similar plans.',
              'We make sure you take advantage of certain investments to produce tax-exempt income (federal or state or both).',
            ],
          },
          { heading: 'Ready to Take the Next Step?' },
          'If you feel like too much of your hard-earned money goes straight to the IRS instead of your bank account, then we can help.',
          "Simply fill out the form below or give us a call. It's that easy!",
        ],
      },
    ],
    related: ['business-tax', 'individual', 'advisory'],
  },
  {
    id: 'accounting',
    category: 'business',
    icon: 'building',
    name: 'Small Business Accounting',
    title: 'Small Business Accounting',
    chip: 'Accounting',
    tagline: 'Statements, cash flow, outsourced CFO',
    headline: 'Take control of your finances so you can focus on your business',
    summary:
      'You have more important things to do than keep your own books. We take care of them so you can get back to running your business and generating profits.',
    description:
      'As accountants, we handle the numbers so you can focus on your product or service. As your trusted financial advisor, our job is to help you succeed.',
    included: [
      'Generate reports and analyze financial data',
      'Evaluate cash flow and improve profitability',
      'Prepare budgets',
      'Strategic tax planning and financial forecasting',
      'Accounting systems set-up, Chart of Accounts and General Ledger',
      'Internal controls for fraud prevention',
      'Quarterly, monthly, and annual financial statements',
      'Use and sales tax processing',
      'Profit statements and balance sheets',
      'Custom financial reports',
      'Business tax returns',
      'Outsourced CFO services',
    ],
    cta: 'Discuss your accounting',
    sections: [
      {
        title: 'We Help You Take Control of Your Finances so You Can Focus on Your Business',
        content: [
          'We’re accountants, and we enjoy crunching numbers, but chances are good that as a small business owner, you don’t. In fact, you probably started your business because you had a great product or service to offer and not because you were excited about cash flow analysis, profit and loss statements, budget forecasting, and strategic tax planning.',
          'That’s why we’re here.',
          { heading: 'Leave the Accounting to Us.' },
          'When you use our team of experienced tax and accounting professionals, you get all of the benefits of hiring an experienced financial executive without the added expense.',
          'Whether we meet with you monthly, quarterly, or once a year, we help you take financial control of your business, enabling you to focus on your core business tasks and make informed decisions about your financial future.',
          '**What we do for you:**',
          {
            list: [
              'Generate reports and analyze financial data',
              'Evaluate cash flow and improve profitability',
              'Prepare budgets',
              'Strategic tax planning and financial forecasting',
              'Accounting systems set-up, Chart of Accounts and General Ledger',
              'Internal controls for fraud prevention',
              'Quarterly, monthly, and annual financial statements',
              'Use and sales tax processing',
              'Profit statements and balance sheets',
              'Custom financial reports',
              'Business tax returns',
              'Outsourced CFO services',
            ],
          },
          { heading: "We're Here to Help You Succeed in Reaching Your Business Goals." },
          'As your trusted financial advisor, our job is to help you succeed. If you’re ready to take your business to the next level, improve cash flow, increase the profitability of your company, and focus on growing your business, we are here for you.',
          { callout: "Contact us today using the form below if you have any questions. We're happy to help!" },
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

export const findService = (id) => services.find((service) => service.id === id);

// Address of a service's own page: /<slug>/ when it has one, otherwise /services/<id>.
export const servicePath = (service) => (service.slug ? `/${service.slug}/` : `/services/${service.id}`);

export const servicesIn = (category) => services.filter((service) => service.category === category);

