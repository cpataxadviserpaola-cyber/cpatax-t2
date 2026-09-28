// Services offered by the firm (source: cpataxadviser.com). They feed the Home and
// Services pages, the header menu, the footer, the contact form, and each service's own
// page at /services/<id>. Adding an entry here creates its page and menu item.
//
// category     business | individual | international (see serviceCategories)
// name         short label for cards, menus, links, and the contact form
// title        heading for the full description on the Services page
// chip         jump-link label on the Services page
// tagline      one-line description in the header menu
// headline     main heading on the service's own page
// summary      card text on the Home page and related-service cards
// description  intro under the page headings
// notice       optional note shown prominently on the service's page
// cta          label for the service's contact button
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
    idealFor: 'sole proprietorships, LLCs, partnerships, S corporations, and C corporations',
    included: [
      'State and federal income tax preparation and filing',
      'Local and state sales tax compliance',
      'State and federal payroll tax',
      'Proven strategies to minimize tax liability',
      'Profit and loss statements',
      'Mergers and acquisitions',
      'Entity selection and structure (S-Corp, C-Corp, LLC)',
    ],
    cta: 'Discuss your business taxes',
    overview: [
      "As a business owner, you're busy developing new products or services and making sure your business runs smoothly. You probably don't have time to reconcile your bank account or generate balance sheets to manage your cash flow, let alone read up on the latest tax laws to find out which tax breaks you can take advantage of.",
      "When you first started out, the do-it-yourself method of accounting might have worked just fine. But once you have employees, pay estimated taxes, and need to manage your cash flow better, it's time to find a trusted advisor to partner with all year long, not just at tax time.",
    ],
    highlights: [
      {
        icon: 'calendar',
        title: 'Never miss a deadline',
        text: 'The IRS and state and local governments impose strict deadlines. We keep you on top of them to avoid fines and penalties.',
      },
      {
        icon: 'building',
        title: 'The right structure',
        text: 'We help you choose and review your entity, whether that is an LLC, S corporation, or C corporation.',
      },
      {
        icon: 'trend',
        title: 'Planning, not just filing',
        text: 'We use proven tax planning strategies to legally minimize what your business owes.',
      },
    ],
    process: [
      { title: 'Discovery call', text: 'We learn how your business operates, your entity type, and how your records are kept.' },
      { title: 'Organize your records', text: 'You share your financials through our secure client portal, and we identify any gaps.' },
      { title: 'Prepare & review', text: 'We prepare your federal and state returns and review the results with you.' },
      { title: 'File & plan ahead', text: 'We file, confirm acceptance, and plan estimated payments and strategies for the year ahead.' },
    ],
    faqs: [
      {
        question: 'What types of businesses do you work with?',
        answer: 'We work with sole proprietorships, LLCs, partnerships, and corporations, including service businesses, consultants and freelancers, investment advisers, real estate professionals, professional practices, and marketing agencies.',
      },
      {
        question: 'Can you help me choose the right entity?',
        answer: 'Yes. Entity selection and structure is part of our business tax work. We compare S corporation, C corporation, and LLC treatment for your situation.',
      },
      {
        question: 'Do you handle payroll and sales tax too?',
        answer: 'Yes. We handle state and federal payroll tax and local and state sales tax compliance, so every filing stays on schedule.',
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
    idealFor: 'business owners, executives, professionals, and pre-retirees',
    included: [
      'Every tax credit and deduction you deserve',
      'An IRS-compliant recordkeeping system',
      'Year-round tax planning strategies',
      'Paycheck withholding review and adjustment',
      'Tax deferral through pension and retirement plans',
      'Investments that produce tax-exempt income',
    ],
    cta: 'Start planning',
    overview: [
      "There is more to preparing your taxes than simply filling out forms at tax time. It's also about understanding our clients' needs and helping them plan for a secure future.",
      'We work with you all year long, not just at tax time, to develop strategies that lower your tax bill. As a CPA and CFP® professional, our founder integrates tax strategy with long-term financial planning, so you can make informed, confident decisions.',
    ],
    highlights: [
      {
        icon: 'chart',
        title: 'Projections and strategies',
        text: 'Tax projections show where you stand before year-end, while there is still time to act.',
      },
      {
        icon: 'target',
        title: 'Withholding that fits',
        text: "We review and adjust your paycheck withholding so you keep more of your money. Why give the IRS a free loan?",
      },
      {
        icon: 'award',
        title: 'A CPA + CFP® perspective',
        text: 'Your tax strategy connects to your long-term goals, from retirement contributions to investments.',
      },
    ],
    process: [
      { title: 'Understand your goals', text: 'We review your income, investments, and plans for the years ahead.' },
      { title: 'Project your taxes', text: "We estimate this year's tax and identify credits, deductions, and deferral opportunities." },
      { title: 'Put the plan in place', text: 'You receive clear recommendations, from withholding changes to retirement contributions.' },
      { title: 'Review through the year', text: 'We revisit your plan as your situation and tax laws change.' },
    ],
    faqs: [
      {
        question: 'When should I start tax planning?',
        answer: 'As early in the year as possible. Many strategies, such as contributions through a workplace retirement plan or the timing of income and expenses, must be in place by December 31 to count for that year.',
      },
      {
        question: 'Is tax planning only for businesses?',
        answer: 'No. We also help professionals, executives, and pre-retirees who are building wealth through diverse portfolios and investments.',
      },
      {
        question: 'How does tax planning connect with financial planning?',
        answer: 'Our founder is both a CPA and a CFP® professional. For broader financial planning, we work with our affiliated firm, Yellow Oak Financial Planning.',
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
    idealFor: 'small and mid-sized businesses and growing companies',
    included: [
      'Financial data reports and analysis',
      'Cash flow evaluation and profitability improvement',
      'Budget preparation',
      'Strategic tax planning and financial forecasting',
      'Accounting system and chart of accounts setup',
      'Internal controls to help prevent fraud',
      'Monthly, quarterly, and annual financial statements',
      'Sales and use tax processing',
      'Profit statements and balance sheets',
      'Custom financial reports',
      'Business tax returns',
      'Outsourced CFO services',
    ],
    cta: 'Discuss your accounting',
    overview: [
      'Most entrepreneurs start a business because they are passionate about their product or service, not because they want to manage the books. That is where we come in.',
      'From financial statements and cash flow analysis to budgets and outsourced CFO support, we give you a clear picture of your numbers, so you can improve cash flow, increase profitability, and focus on growth.',
    ],
    highlights: [
      {
        icon: 'chart',
        title: 'Numbers you can act on',
        text: 'Monthly, quarterly, and annual statements, plus custom reports that show how your business is really performing.',
      },
      {
        icon: 'shield',
        title: 'Stronger controls',
        text: 'We set up your accounting system and the internal controls that help protect your business from fraud.',
      },
      {
        icon: 'briefcase',
        title: 'Outsourced CFO',
        text: 'Strategic financial leadership without the cost of a full-time hire.',
      },
    ],
    process: [
      { title: 'Assess your needs', text: 'We review your current accounting, reporting, and goals.' },
      { title: 'Set up the system', text: 'We configure your accounting system and chart of accounts.' },
      { title: 'Report regularly', text: 'You receive financial statements on the schedule that fits your business.' },
      { title: 'Advise and improve', text: 'We use the numbers to help improve cash flow and profitability.' },
    ],
    faqs: [
      {
        question: 'How often will I receive financial statements?',
        answer: 'We prepare monthly, quarterly, and annual financial statements, so you can choose the reporting schedule that fits your business.',
      },
      {
        question: 'What is an outsourced CFO?',
        answer: 'An outsourced CFO provides the financial analysis, forecasting, and planning a chief financial officer would, on a part-time basis, so you get strategic guidance without a full-time salary.',
      },
      {
        question: 'Do you offer bundled pricing for businesses?',
        answer: 'Yes. Because every small business is unique, we offer tailored accounting and tax bundles so you get the best fit for your needs.',
      },
    ],
    related: ['bookkeeping', 'payroll', 'business-tax'],
  },
  {
    id: 'bookkeeping',
    category: 'business',
    icon: 'ledger',
    name: 'Bookkeeping',
    title: 'Bookkeeping Services',
    chip: 'Bookkeeping',
    tagline: 'Clean-ups, ledgers, quarterly reviews',
    headline: 'Leave the bookkeeping to us and focus on growing your business',
    summary:
      "Accurate bookkeeping is essential to your company's long-term viability. Experienced, affordable, and reliable, we serve a variety of industries and clients.",
    description:
      'We serve clients from self-employed, home-based business owners to small and medium-sized businesses with employees, using current technology to provide personalized service.',
    idealFor: 'self-employed owners and small and medium-sized businesses',
    included: [
      'Bookkeeping clean-ups',
      'Quarterly bookkeeping reviews',
      'General ledger maintenance',
      'Account reconciliations',
      'Form 1099 and 1096 preparation',
      'Outsourced bookkeeping',
    ],
    cta: 'Discuss your books',
    overview: [
      'Whether you are starting a new business and need help setting up your books, or you are established and want to improve your current system, we can help.',
      'We keep your financial records accurate, organized, and up to date, so you always understand your numbers and are ready at tax time.',
    ],
    highlights: [
      {
        icon: 'ledger',
        title: 'Clean-ups and catch-ups',
        text: 'Behind on your books? We clean up and organize your records so you can file accurately.',
      },
      {
        icon: 'calendar',
        title: 'Quarterly reviews',
        text: 'Regular reviews keep your records accurate throughout the year, not just at year-end.',
      },
      {
        icon: 'users',
        title: 'A dedicated bookkeeper',
        text: 'Our bookkeeper works closely with you to keep your financial foundation strong.',
      },
    ],
    process: [
      { title: 'Review your records', text: 'We look at your current books, software, and accounts.' },
      { title: 'Clean up and organize', text: 'We catch up, reconcile, and correct your records.' },
      { title: 'Maintain', text: 'We keep your general ledger and accounts current.' },
      { title: 'Stay tax-ready', text: 'Your books are ready for tax preparation and financial reporting.' },
    ],
    faqs: [
      {
        question: 'Can you catch up on months of bookkeeping?',
        answer: 'Yes. Bookkeeping clean-ups are one of our core services, including catch-up work for small business owners who have fallen behind.',
      },
      {
        question: 'Do you prepare 1099s?',
        answer: 'Yes. We prepare Forms 1099 and 1096 as part of our bookkeeping services.',
      },
      {
        question: 'Do you work with QuickBooks?',
        answer: 'Yes. We set up, review, and tune up QuickBooks, including QuickBooks Online, and train your team to use it.',
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
    idealFor: 'owners planning for growth, financing, or a transition',
    included: [
      'Strategic growth planning',
      'Performance metrics',
      'Internal control review and evaluation',
      'SAS 112 compliance',
      'Business valuations and due diligence',
      'Budget and cash flow analysis and management',
      'Business entity selection and restructuring',
      'Financial projections and forecasts',
      'Assistance with debt and financing',
      'Expansion and acquisition analysis',
      'Accounting software evaluation and implementation',
    ],
    cta: 'Plan your next step',
    overview: [
      "In today's fast-paced, competitive world, many business owners spend their time on human resources, payroll tax compliance, and sales and use tax instead of planning for growth.",
      "If you feel like you're spinning your wheels, we can help. It's more important than ever to have a trusted business advisor by your side to help you plan for the future success of your business.",
    ],
    highlights: [
      {
        icon: 'target',
        title: 'Clear direction',
        text: 'A strategic plan turns ideas into goals, priorities, and measurable performance metrics.',
      },
      {
        icon: 'trend',
        title: 'Informed growth decisions',
        text: 'We analyze expansion, acquisitions, financing, and restructuring before you commit.',
      },
      {
        icon: 'shield',
        title: 'Stronger foundations',
        text: 'We review internal controls and accounting systems so your business is ready to scale.',
      },
    ],
    process: [
      { title: 'Understand the business', text: 'We learn your goals, challenges, and current numbers.' },
      { title: 'Analyze', text: 'We review cash flow, performance, controls, and structure.' },
      { title: 'Plan', text: 'We build projections and a practical plan for growth.' },
      { title: 'Support', text: 'We stay by your side as you put the plan into action.' },
    ],
    faqs: [
      {
        question: 'Can you help me get financing?',
        answer: 'Yes. We assist with debt and financing, including the financial projections and forecasts lenders often ask for.',
      },
      {
        question: 'Do you provide business valuations?',
        answer: 'Yes. Business valuations and due diligence are part of our advisory services, along with expansion and acquisition analysis.',
      },
      {
        question: 'Can you help me choose accounting software?',
        answer: 'Yes. We evaluate and implement accounting software, and we offer full QuickBooks services.',
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
    idealFor: 'small to mid-sized businesses using or moving to QuickBooks',
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
    overview: [
      'QuickBooks is powerful, but only when it is set up correctly and used consistently. We tailor it to your business so your records are accurate from day one.',
      "We provide personalized training for you and your employees, answer your team's questions as they come up, and perform periodic tune-ups that keep your system clean and ready for tax preparation or financial reviews.",
    ],
    highlights: [
      {
        icon: 'laptop',
        title: 'Set up for your business',
        text: 'Customized setup, including third-party invoicing and bill pay integrations.',
      },
      {
        icon: 'users',
        title: 'Personalized training',
        text: 'Training for you and your employees, focused on how your business uses QuickBooks.',
      },
      {
        icon: 'check',
        title: 'Periodic tune-ups',
        text: 'We review transactions and clean up your system so it stays organized.',
      },
    ],
    process: [
      { title: 'Assess', text: 'We review your current setup, or your needs for a new file.' },
      { title: 'Set up', text: 'We configure QuickBooks or QuickBooks Online for your business.' },
      { title: 'Train', text: 'We train you and your staff on the tasks you use most.' },
      { title: 'Support', text: 'We answer questions and perform periodic reviews and tune-ups.' },
    ],
    faqs: [
      {
        question: 'Do you support QuickBooks Online?',
        answer: 'Yes. QuickBooks Online is cloud-based, quick to set up, and keeps your financial information organized in one place. We help you set it up and use it well.',
      },
      {
        question: 'Can my accounting staff ask you questions?',
        answer: 'Yes. We answer QuickBooks questions from you and your accounting staff by email or phone.',
      },
      {
        question: 'Can you fix a messy QuickBooks file?',
        answer: 'Yes. A QuickBooks tune-up reviews your transactions and cleans up and organizes your bookkeeping system, whether for tax preparation or a financial review.',
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
    idealFor: 'professionals, executives, and pre-retirees',
    included: [
      'Accurate returns, filed on time',
      'Estimated taxes for the self-employed',
      'Tax projections and strategies',
      'Electronic filing and direct deposit',
      'Extensions and estimated tax calculations',
      'Withholding review and adjustment',
    ],
    cta: 'Join the waiting list',
    overview: [
      'As your trusted advisors, we evaluate your individual tax situation and guide you through any tax challenges that develop.',
      'Beyond preparing your return, we provide tax projections and strategies, show you how to adjust your withholding, and point out potential deductions to limit your tax liability for next year.',
    ],
    highlights: [
      {
        icon: 'file-check',
        title: 'Checked and rechecked',
        text: 'Your return is checked for potential problems the IRS may look at more closely, and the math is reviewed to limit IRS contacts.',
      },
      {
        icon: 'clock',
        title: 'Faster refunds',
        text: 'Electronic filing and direct deposit get your refund to you sooner.',
      },
      {
        icon: 'target',
        title: 'Plan for next year',
        text: "We show you potential deductions and withholding changes to limit next year's tax.",
      },
    ],
    process: [
      { title: 'Share your documents', text: 'Upload your tax documents through our secure client portal.' },
      { title: 'We prepare', text: 'We prepare your federal and state returns and check them carefully.' },
      { title: 'Review together', text: 'We walk through your results and answer your questions.' },
      { title: 'E-file', text: 'Your return is filed electronically, with direct deposit for any refund.' },
    ],
    faqs: [
      {
        question: 'Are you accepting new individual clients?',
        answer: 'We are currently focused on serving small business owners and are not onboarding new individual clients. You are welcome to contact us to join our waiting list.',
      },
      {
        question: 'Can you file an extension for me?',
        answer: 'Yes. We file extensions and calculate estimated tax to help you avoid interest and penalties. An extension gives you more time to file, not more time to pay.',
      },
      {
        question: 'Do you prepare Schedule C for small businesses?',
        answer: 'Yes. We help self-employed owners with Schedule C preparation, including bookkeeping catch-up work and setting up a recordkeeping system.',
      },
    ],
    related: ['planning', 'international', 'bookkeeping'],
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
        answer: "Tax treaties between the U.S. and other countries help prevent double taxation by clarifying which country taxes certain income, and they may reduce rates on dividends, interest, and royalties. We can interpret your country's treaty and help you use its benefits.",
      },
      {
        question: 'Do international students need to file U.S. taxes?',
        answer: 'Most F-1 and J-1 visa holders must file. Students without income usually file Form 8843, while those with income, including OPT or CPT employment, may also need to file Form 1040-NR.',
      },
      {
        question: 'What is Form 8843?',
        answer: 'Form 8843 declares nonresident status for F-1, J-1, and similar visa holders. It must be filed even if you had no income.',
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

export const servicesIn = (category) => services.filter((service) => service.category === category);

// Industries the firm specializes in (Services page and Home page band).
export const industries = [
  {
    icon: 'briefcase',
    title: 'Service-oriented businesses',
    text: 'We help service-based companies streamline their accounting, payroll, and tax processes.',
  },
  {
    icon: 'laptop',
    title: 'Consultants and freelancers',
    text: "You wear many hats, from client relationships to delivering great work. Handling your finances doesn't have to be one of them.",
  },
  {
    icon: 'trend',
    title: 'Investment advisers',
    text: 'A highly regulated, complex environment that calls for precise financial management and strategic planning.',
  },
  {
    icon: 'home',
    title: 'Real estate professionals',
    text: 'A dynamic industry full of opportunities, with its own unique financial challenges.',
  },
  {
    icon: 'globe',
    title: 'International business owners',
    text: 'Guidance through U.S. tax laws and financial reporting requirements for owners with international ties.',
  },
  {
    icon: 'award',
    title: 'Lawyers, doctors, and dentists',
    text: 'Your expertise drives your practice, and our expertise helps ensure its financial success.',
  },
  {
    icon: 'users',
    title: 'Minority & women-owned businesses',
    text: 'As a certified MWBE, you face unique challenges and opportunities. We understand them firsthand.',
  },
  {
    icon: 'chat',
    title: 'Marketing and advertising agencies',
    text: 'Creative projects, client deadlines, and financial complexity, balanced with clear numbers.',
  },
];
