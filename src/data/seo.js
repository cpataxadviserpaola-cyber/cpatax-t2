// Search and social-sharing details for every page, by its address. Edit a page's entry to
// change what search results and shared links show for it.
//
// title        browser tab and search-result title, used exactly as written
// description  meta description, shown under the title in search results
// keywords     meta keywords, separated by commas ('' leaves the tag out)
// og           optional overrides for shared links (Open Graph, also used by X): title,
//              description, image. Without them, shared links use the page's title and
//              description and the site's default image.
//
// Each page's canonical URL is siteUrl followed by its address. `npm run build` writes these
// tags into every page's HTML (scripts/seo-pages.js), so search engines and link previews
// read them without running the site's script, and PageSeo.jsx keeps them current as
// visitors move between pages. A new page or service needs an entry here; the build stops
// and names any service page that is missing one.

export const siteUrl = 'https://www.cpataxadviser.com';

// Image for shared links when a page has none of its own: a file in public/, ideally
// 1200 × 630 pixels (for example '/social/cpa-tax-adviser.png'). '' shares without one.
export const defaultImage = '';

export const pages = {
  '/': {
    title: 'CPA Tax Adviser | Simpsonville, SC CPA Firm Serving Clients Nationwide',
    description:
      'CPA Tax Adviser is a South Carolina licensed CPA firm in Simpsonville, SC, providing business tax preparation, tax planning, accounting, bookkeeping, payroll, QuickBooks, and international tax services nationwide, in English and Spanish.',
    keywords: '',
    og: {
      title: 'CPA Tax Adviser | Where tax strategy meets real business understanding',
      description:
        'South Carolina licensed CPA firm helping business owners, professionals, and individuals nationwide, in English and Spanish.',
    },
  },
  '/about': {
    title: 'About Us | CPA Tax Adviser',
    description:
      'Learn about CPA Tax Adviser, a South Carolina Minority/Women-Owned Business Enterprise founded by Paola Martinez, CPA, CFP®, and meet our team.',
    keywords: '',
  },
  '/services': {
    title: 'Services | CPA Tax Adviser',
    description:
      'Business tax preparation, tax planning, small business accounting, bookkeeping, payroll, business advisory, QuickBooks, individual, and international tax services from CPA Tax Adviser.',
    keywords: '',
  },

  // Service pages (addresses from src/data/services.js)
  '/services/business-tax': {
    title: 'Business Tax Preparation | CPA Tax Adviser',
    description:
      'It is important to develop a relationship with a tax preparation firm that understands how your business works. As your trusted advisor, we make sure you stay on top of your tax obligations and avoid penalties and fees that reduce your profitability.',
    keywords: '',
  },
  '/services/planning': {
    title: 'Tax Planning | CPA Tax Adviser',
    description:
      "Many people feel like their tax bill is too high. The good news is that it doesn't have to be. Planning is the key to successfully and legally reducing your tax liability.",
    keywords: '',
  },
  '/services/accounting': {
    title: 'Small Business Accounting | CPA Tax Adviser',
    description:
      'As accountants, we handle the numbers so you can focus on your product or service. As your trusted financial advisor, our job is to help you succeed.',
    keywords: '',
  },
  '/bookkeeping-services-in-simpsonville/': {
    title: 'Essential Bookkeeping Services for Small Businesses',
    description:
      'We provide accurate and reliable bookkeeping services to help small businesses keep their financial records organized, up to date, and tax-ready.',
    keywords:
      'bookkeeping services simpsonville sc, monthly bookkeeping for small business, quickbooks bookkeeper simpsonville sc, catch-up bookkeeping services, bookkeeper south carolina, bookkeeping services in simpsonville, bookkeeping company simpsonville',
  },
  '/services/payroll': {
    title: 'Payroll | CPA Tax Adviser',
    description:
      'On average, small business owners spend eight hours per month on payroll-related tasks. When you outsource payroll to us, a dedicated payroll specialist works with you throughout the entire process.',
    keywords: '',
  },
  '/services/advisory': {
    title: 'Business Advisory | CPA Tax Adviser',
    description:
      "We combine industry experience with time-tested solutions to develop a framework on which to build your company's success.",
    keywords: '',
  },
  '/services/quickbooks': {
    title: 'QuickBooks Services | CPA Tax Adviser',
    description:
      'After we set up your QuickBooks software, we customize it specifically for your business, including integrating third-party invoicing or bill pay software, and help you move toward paperless accounting.',
    keywords: '',
  },
  '/services/individual': {
    title: 'Individual Tax Preparation | CPA Tax Adviser',
    description:
      "Our goal is to minimize your tax liability. We stay up to date on federal and state tax laws through continuing education, so you don't miss out on the credits and deductions you are entitled to.",
    keywords: '',
  },
  '/services/individual-planning': {
    title: 'Individual Tax Projections & Strategies | CPA Tax Adviser',
    description:
      'Planning is the key to successfully and legally reducing your tax liability. A tax projection shows where you stand while there is still time to act, and our strategies help you act on it.',
    keywords: '',
  },
  '/services/international': {
    title: 'International Tax Services | CPA Tax Adviser',
    description:
      'Nonresidents, expatriates, and individuals with foreign income face unique challenges when filing U.S. taxes. We simplify the process, keep you compliant, and look for every treaty benefit available to you.',
    keywords: '',
  },

  '/tax-season': {
    title: 'Tax Season | CPA Tax Adviser',
    description:
      'Our tax season process, pricing and the 2026 pricing guide, the client portal tutorial and login, a tax tool box, and upcoming IRS deadlines for CPA Tax Adviser clients.',
    keywords: '',
  },
  '/industries': {
    title: 'Industries | CPA Tax Adviser',
    description:
      'Accounting, bookkeeping, payroll, and tax services for real estate, healthcare, legal, manufacturing, restaurants, retail, e-commerce, contractors, investment advisers, MWBEs, and marketing agencies.',
    keywords: '',
  },
  '/resources': {
    title: 'Resources | CPA Tax Adviser',
    description:
      'Interactive financial calculators for paychecks, benefits, and taxes, plus a few of our favorite websites: forms, government, finance, news, and software.',
    keywords: '',
  },
  '/resources/calculators/bonus-net-after-taxes': {
    title: 'How Much Will My Company Bonus Net After Taxes? | CPA Tax Adviser',
    description:
      'Estimate your take-home pay from a company bonus after federal income tax withholding, Social Security, Medicare, retirement plan contributions, and other deductions, with 2026 IRS withholding figures.',
    keywords: '',
  },
  '/resources/calculators/hourly-to-salary': {
    title: 'Convert My Hourly Wage To An Equivalent Annual Salary | CPA Tax Adviser',
    description:
      'Convert an hourly wage into its weekly pay, monthly pay, and annual salary, based on the hours and weeks you work each year.',
    keywords: '',
  },
  '/resources/calculators/interest-tax-implications': {
    title: 'What Are The Tax Implications Of Paying Interest? | CPA Tax Adviser',
    description:
      'See which of the interest you pay this year, on mortgages, investments, business and personal debt, is deductible under the 2026 rules and what it saves you in tax.',
    keywords: '',
  },
  '/resources/calculators/social-security-tax': {
    title: 'How Much Of My Social Security Benefit May Be Taxed? | CPA Tax Adviser',
    description:
      'Work through the IRS Publication 915 worksheet to see how much of your Social Security benefits may be taxable, up to 85%, and the federal tax on it.',
    keywords: '',
  },
  '/resources/calculators/compare-investment-growth': {
    title: 'Compare Taxable, Tax-Deferred And Tax-Free Investment Growth | CPA Tax Adviser',
    description:
      'Compare what the same savings may grow to, after taxes, in a fully-taxable account, a tax-deferred account and a tax-free investment, year by year.',
    keywords: '',
  },
  '/resources/calculators/capital-gains-tax': {
    title: 'Capital Gains (Losses) Tax Estimator | CPA Tax Adviser',
    description:
      'Estimate the 2026 federal tax on your long-term capital gains at the 0%, 15% and 20% rates, or what a net capital loss saves you and carries forward.',
    keywords: '',
  },
  '/resources/calculators/self-employment-tax': {
    title: 'How Much Self-Employment Tax Will I Pay? | CPA Tax Adviser',
    description:
      'Estimate your 2026 self-employment tax: the Social Security and Medicare tax on your self-employment income, any Additional Medicare Tax, and the half you can deduct.',
    keywords: '',
  },
  '/resources/calculators/investment-interest': {
    title: 'Will My Investment Interest Be Deductible? | CPA Tax Adviser',
    description:
      'See how much of the interest you pay to invest, such as margin interest, you can deduct against your investment income this year, the tax it saves, and what carries forward.',
    keywords: '',
  },
  '/resources/calculators/payroll-withholdings': {
    title: 'Should I Adjust My Payroll Withholdings? | CPA Tax Adviser',
    description:
      'Check whether your federal tax withholding will cover your 2026 tax, and how much to withhold from each paycheck for the rest of the year to come out even.',
    keywords: '',
  },
  '/resources/calculators/federal-income-tax': {
    title: 'Federal Income Tax Estimator | CPA Tax Adviser',
    description:
      'Estimate your 2026 federal income tax with your effective and marginal tax rates, including the new deductions for tips, overtime, car loan interest and seniors, the child tax credit, and pass-through income.',
    keywords: '',
  },
  '/resources/calculators/tax-freedom-day': {
    title: 'Tax Freedom Day | CPA Tax Adviser',
    description:
      'See how many days of 2026 you work to pay your federal income, Social Security and Medicare taxes, and the day you start earning money for yourself.',
    keywords: '',
  },
  '/resources/calculators/tax-refund-estimator': {
    title: 'Tax Refund Estimator | CPA Tax Adviser',
    description:
      'Estimate your 2026 federal tax and whether you will get a refund or owe, including the new deductions for tips, overtime, car loan interest and seniors, the child tax credit, and pass-through income.',
    keywords: '',
  },
  '/resources/calculators/tax-equivalent-yield': {
    title: 'What Is My Tax-Equivalent Yield? | CPA Tax Adviser',
    description:
      'Find the taxable yield that matches a tax-free yield, such as a municipal bond, after federal tax alone and after federal and state tax.',
    keywords: '',
  },
  '/resources/calculators/itemize-or-standard': {
    title: 'Should I Itemize Or Take The Standard Deduction? | CPA Tax Adviser',
    description:
      'Compare your itemized deductions with your 2026 standard deduction, including the senior deduction, the SALT cap, and the new charitable deduction rules, to see which is larger.',
    keywords: '',
  },
  '/resources/calculators/estate-tax': {
    title: 'What Is My Potential Estate Tax Liability? | CPA Tax Adviser',
    description:
      'Estimate the federal estate tax on your estate with the 2026 $15 million exclusion, after probate and final expenses and charitable contributions, projected as far ahead as you like.',
    keywords: '',
  },
  '/resources/calculators/exercise-stock-options': {
    title: "Should I Exercise My 'In-The-Money' Stock Options? | CPA Tax Adviser",
    description:
      'Compare exercising and holding, exercising and selling, and deferring your in-the-money employee stock options, after income and capital gains taxes, to see which may leave you with the most.',
    keywords: '',
  },
  '/resources/calculators/stock-options': {
    title: 'What Is The Future Value Of My Employee Stock Options? | CPA Tax Adviser',
    description:
      'Estimate what your employee stock options may be worth when they expire, and the before-tax gain over the strike price, at your expected return and 2 points above and below it.',
    keywords: '',
  },
  '/resources/calculators/salary-to-hourly': {
    title: 'Convert My Salary To An Equivalent Hourly Wage | CPA Tax Adviser',
    description:
      'Convert an annual salary into its monthly pay, weekly pay, and hourly wage, based on the hours and weeks you work each year.',
    keywords: '',
  },
  '/resources/calculators/payroll-adjustments': {
    title: 'How Will Payroll Adjustments Affect My Take-Home Pay? | CPA Tax Adviser',
    description:
      'Compare your take-home pay now with a what-if paycheck: a change in pay, filing status, allowances, retirement plan contributions, or other deductions, with 2026 IRS withholding figures.',
    keywords: '',
  },
  '/resources/calculators/457-plan-contribution': {
    title: 'What Is The Impact Of Increasing My 457 Plan Contribution? | CPA Tax Adviser',
    description:
      'See how much more your 457 plan could hold at retirement if you raise your contribution, including any employer match, with a year-by-year table and graph.',
    keywords: '',
  },
  '/resources/calculators/401k-contribution': {
    title: 'What Is The Impact Of Increasing My 401(k) Contribution? | CPA Tax Adviser',
    description:
      'See how much more your 401(k) could hold at retirement if you raise your contribution, including any employer match, with a year-by-year table and graph.',
    keywords: '',
  },
  '/resources/calculators/403b-contribution': {
    title: 'What Is The Impact Of Increasing My 403(b) Contribution? | CPA Tax Adviser',
    description:
      'See how much more your 403(b) could hold at retirement if you raise your contribution, including any employer match, with a year-by-year table and graph.',
    keywords: '',
  },
  '/resources/calculators/457-plan-value': {
    title: 'What May My 457 Plan Be Worth? | CPA Tax Adviser',
    description:
      'Estimate what your 457 plan may be worth at retirement from your salary, contributions, employer match, and return, with a year-by-year table and graph.',
    keywords: '',
  },
  '/resources/calculators/401k-plan-value': {
    title: 'What May My 401(k) Be Worth? | CPA Tax Adviser',
    description:
      'Estimate what your 401(k) may be worth at retirement from your salary, contributions, employer match, and return, with a year-by-year table and graph.',
    keywords: '',
  },
  '/resources/calculators/403b-plan-value': {
    title: 'What May My 403(b) Plan Be Worth? | CPA Tax Adviser',
    description:
      'Estimate what your 403(b) plan may be worth at retirement from your salary, contributions, employer match, and return, with a year-by-year table and graph.',
    keywords: '',
  },
  '/newsletter': {
    title: 'Newsletter | CPA Tax Adviser',
    description:
      "This month's newsletter from CPA Tax Adviser: tax and business articles, quick tax tips, and upcoming tax due dates, with sign-up for email updates.",
    keywords: '',
  },
  '/guides': {
    title: 'Financial Guides | CPA Tax Adviser',
    description:
      'Practical, unbiased financial guides from CPA Tax Adviser on life events, business strategies, investment strategies, and tax strategies for business owners.',
    keywords: '',
  },

  // Guide topic pages (topicPages in src/data/guides.js)
  '/guides/life-events/becoming-a-parent': {
    title: 'Becoming a Parent: Financial Guides | CPA Tax Adviser',
    description:
      'Financial resources for new and growing families, including budgeting, financial planning, life insurance, survivor benefits, and official tax and Social Security information.',
    keywords: '',
  },
  '/guides/life-events/dealing-with-your-bank': {
    title: 'Dealing with Your Bank | CPA Tax Adviser',
    description:
      'Resources for choosing and working with a bank, comparing account terms and fees, protecting deposits, and resolving account problems.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit': {
    title: 'Improving Your Credit: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and calculators to help you protect your credit and improve your credit rating, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/choosing-a-professional': {
    title: 'Choosing A Professional: Financial Guides | CPA Tax Adviser',
    description:
      'Guides and answers to common questions on choosing the right lawyer and getting good financial advice, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/choosing-a-professional/lawyers': {
    title: 'Lawyers: How To Choose The Right One | CPA Tax Adviser',
    description:
      'A comprehensive 10-step guide on how to decide if you need a lawyer, find reputable candidates, interview them, and manage legal fees and your ongoing case.',
    keywords: '',
  },
  '/guides/life-events/choosing-a-professional/good-financial-advice': {
    title: 'Are You Getting Good Financial Advice? | CPA Tax Adviser',
    description:
      'Evaluate your financial advice and advisor: measuring investment returns, trusting your gut, following recommendations, and ensuring clear communication.',
    keywords: '',
  },
  '/guides/life-events/choosing-a-professional/choosing-a-professional-faq': {
    title: 'Choosing a Professional: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about when to hire a lawyer, handling disputes on your own, finding and interviewing an attorney, and managing legal fee arrangements.',
    keywords: '',
  },
  '/guides/life-events/buying-insurance': {
    title: 'Buying Insurance: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and calculators to help you choose and buy homeowner’s, car, life, disability, and long-term care insurance.',
    keywords: '',
  },
  '/guides/life-events/getting-a-loan': {
    title: 'Getting a Loan: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and calculators on mortgages, refinancing, home equity loans, credit, and auto loans to help you choose the right loan.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement': {
    title: 'Planning For Retirement: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and calculators on retirement saving, Social Security, IRAs and Roth IRAs, annuities, and retirement plan distributions.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/your-retirement-plan': {
    title: 'Your Retirement Plan: How To Get Started | CPA Tax Adviser',
    description:
      'Get started on retirement planning: estimate your retirement income, set goals and work out how much to save each year, and choose investments.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/retirement-saving-tips': {
    title: '10 Retirement Saving Tips | CPA Tax Adviser',
    description:
      'Ten tips for building and stretching your retirement savings: start early, set realistic goals, use a 401(k) and IRAs, mind your asset allocation, and withdraw tax-efficiently.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/count-on-social-security': {
    title: 'Should You Count On Social Security? | CPA Tax Adviser',
    description:
      'How much to rely on Social Security in retirement: check your benefit estimate and earnings record, weigh when to start benefits, and plan to save on your own.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/roth-iras': {
    title: 'Roth IRAs: How They Work and How To Use Them | CPA Tax Adviser',
    description:
      'How Roth IRA contributions and withdrawals are taxed, converting from a traditional IRA, withdrawal requirements, the saver’s credit, and Roth IRAs in estate planning.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/simple-plan': {
    title: 'The "SIMPLE" Plan: A Retirement Plan for the Really Small Business | CPA Tax Adviser',
    description:
      'How a SIMPLE IRA works for a small or sideline business: how much you can contribute and deduct, withdrawals, drawbacks, and how to get started.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/financial-plan-faq': {
    title: 'Developing a Financial Plan: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about setting long-term financial goals, the limits of financial planning rules of thumb, and planning concerns for women and unmarried couples.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/social-security-benefits-faq': {
    title: 'Social Security Benefits: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about Social Security disability benefits, when they begin, taxes, appeals, and what to expect from Social Security when you retire.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/retirement-plan-distributions-faq': {
    title: 'Retirement Plan Distributions: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about taking retirement plan distributions, lump sums, changing jobs, creditors, state taxes and moving, and reverse mortgages.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/retirement-assets-faq': {
    title: 'Retirement Assets: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about how heirs are taxed on retirement assets, taking distributions, required withdrawals after age 73, and state taxes.',
    keywords: '',
  },
  '/guides/life-events/planning-for-retirement/traditional-vs-roth-iras-faq': {
    title: 'Traditional vs Roth IRAs: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about traditional and Roth IRAs: who can contribute and how much, spousal and child IRAs, Roth IRA pros and cons, and heirs.',
    keywords: '',
  },
  '/guides/life-events/buying-and-maintaining-a-car': {
    title: 'Buying & Maintaining A Car: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and calculators on buying or leasing your next car, auto payments, and cutting your car insurance costs.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home': {
    title: 'Buying & Selling A Home: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and calculators to help you make the best decisions when buying, financing, or selling a home.',
    keywords: '',
  },
  '/guides/life-events/planning-your-estate': {
    title: 'Planning Your Estate: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and a calculator on estate planning, postmortem letters, retirement plan distributions, wills, living trusts, and estate taxes.',
    keywords: '',
  },
  '/guides/life-events/planning-your-estate/living-trusts-faq': {
    title: 'Living Trusts: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about what a living trust is, how it avoids probate, what it costs, creditors, privacy, and whether it can save taxes.',
    keywords: '',
  },
  '/guides/life-events/planning-your-estate/wills-faq': {
    title: 'Wills: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about dying without a will, handwritten wills, naming a guardian for your children, will challenges, and final arrangements.',
    keywords: '',
  },
  '/guides/life-events/planning-your-estate/estate-and-taxes-faq': {
    title: 'Your Estate and Taxes: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about federal and state estate taxes, inheritance taxes, minimizing estate tax, and giving property away during your lifetime.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions': {
    title: 'Making Charitable Contributions: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides and answers to common questions on giving wisely, deducting gifts of property, the records you must keep, advanced techniques, and avoiding fraudulent charities.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions/giving-wisely': {
    title: 'Charitable Contributions: How To Give Wisely | CPA Tax Adviser',
    description:
      'How to check out a charity before you give money or time: mail, phone and door-to-door appeals, thrift stores, fund-raising events, affinity cards, and disaster appeals.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions/contributions-of-property': {
    title: 'Charitable Contributions of Property: Maximizing the Deduction | CPA Tax Adviser',
    description:
      'How to value donated property and figure your deduction: fair market value, special rules, property that has gone up or down in value, food inventory, and bargain sales.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions/records-to-keep': {
    title: 'What Records You Must Keep Relating To Your Charitable Contributions | CPA Tax Adviser',
    description:
      'The records and acknowledgments you need to deduct cash and noncash charitable contributions at each dollar level, plus out-of-pocket and car expenses.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions/advanced-charity-techniques': {
    title: 'Advanced Charity Techniques: Maximizing Your Deduction | CPA Tax Adviser',
    description:
      'Which gifts are deductible, common misconceptions, and planned or deferred giving: charitable remainder and lead trusts, gift annuities, pooled income funds, and life insurance.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions/fraudulent-charities': {
    title: 'Fraudulent Charities: How To Protect Yourself | CPA Tax Adviser',
    description:
      'How the states and the IRS regulate charities, the public documents you can get on a charity, and how to file a complaint against a fraudulent charity.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions/charitable-contributions-faq': {
    title: 'Charitable Contributions: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about charity scams, mail and door-to-door appeals, maximizing your tax benefit, planned giving, volunteering, thrift stores, and event tickets.',
    keywords: '',
  },
  '/guides/life-events/making-charitable-contributions/charitable-deductions-faq': {
    title: 'Charitable Deductions: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about whether gifts to a charity are deductible, which organizations qualify, deduction limits, and planned or deferred giving.',
    keywords: '',
  },
  '/guides/life-events/avoiding-scams': {
    title: 'Avoiding Scams: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides and answers to common questions on spotting con artists, protecting yourself from fraudulent charities, and avoiding scams.',
    keywords: '',
  },
  '/guides/life-events/avoiding-scams/con-artists': {
    title: 'Con Artists: How To Spot and Stop Them | CPA Tax Adviser',
    description:
      'How to recognize a con artist: the buzzwords and tip-offs, common con games, questions that expose a securities con, ten steps for avoiding scams, and telemarketing fraud.',
    keywords: '',
  },
  '/guides/life-events/avoiding-scams/avoiding-scams-faq': {
    title: 'Avoiding Scams: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about spotting rip-offs, Internet and identity scams, investment schemes, travel scams, used cars, auto repairs, and pickpockets.',
    keywords: '',
  },
  '/guides/life-events/getting-divorced-or-becoming-widowed': {
    title: 'Getting Divorced or Becoming Widowed: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides and answers to common questions on the financial side of divorce or losing a spouse, including marriage and divorce guidelines and life insurance.',
    keywords: '',
  },
  '/guides/life-events/getting-divorced-or-becoming-widowed/getting-divorced-faq': {
    title: 'Getting Divorced: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about preparing financially for divorce, protecting your credit, legal issues, dividing property and retirement plans, and divorce taxes.',
    keywords: '',
  },
  '/guides/life-events/coping-with-major-illness': {
    title: 'Coping with Major Illness: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides and answers to common questions on long-term care insurance, disability insurance and benefits, and Social Security benefits when illness strikes.',
    keywords: '',
  },
  '/guides/life-events/improving-your-retirement': {
    title: 'Improving Your Retirement: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and calculators on retirement distributions, Social Security, pensions, reverse mortgages, annuities, and IRAs.',
    keywords: '',
  },
  '/guides/life-events/improving-your-retirement/your-pension': {
    title: "Your Pension: What You're Entitled To | CPA Tax Adviser",
    description:
      "Your rights under ERISA: plan information, participation and vesting, when and how benefits are paid, spousal rights, claims, plan funding and termination, and the documents you're entitled to.",
    keywords: '',
  },
  '/guides/life-events/improving-your-retirement/tap-retirement-money-early': {
    title: 'Tap Your Retirement Money Early and Minimize Penalties | CPA Tax Adviser',
    description:
      'The exceptions that let you take money out of a 401(k), IRA, or other retirement plan before age 59½ without the 10 percent early withdrawal penalty.',
    keywords: '',
  },
  '/guides/life-events/handling-other-situations': {
    title: 'Handling Other Situations: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and a calculator on saving money, how long to keep your records, and keeping track of important documents.',
    keywords: '',
  },
  '/guides/life-events/handling-other-situations/recordkeeping-guide': {
    title: 'Recordkeeping Guide: How Long You Should Retain Your Records | CPA Tax Adviser',
    description:
      'Which personal and financial records to keep indefinitely, which to keep for a set number of years, and which you can throw out now.',
    keywords: '',
  },
  '/guides/life-events/handling-other-situations/other-situations-faq': {
    title: 'Other Situations: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about resolving a consumer complaint and cutting your bank fees, insurance, utility, phone, and mortgage costs.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business': {
    title: 'Starting A Business: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and a calculator on starting a business: choosing a form of organization, incorporating, LLCs, business plans, and raising capital.',
    keywords: '',
  },
  '/guides/business-strategies/running-your-business': {
    title: 'Running Your Business: Financial Guides | CPA Tax Adviser',
    description:
      'Guides, FAQs, and calculators for running a business, including recordkeeping, cash flow, employee benefits, travel and entertainment, succession, and financial planning.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business': {
    title: 'Growing Your Business: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, answers to common questions, and a calculator for growing a business, including evaluating markets, pricing, advertising, referrals, customer trust, and raising capital.',
    keywords: '',
  },
  '/guides/business-strategies/securing-business-loans': {
    title: 'Securing Business Loans: Financial Guides | CPA Tax Adviser',
    description:
      'Articles and financial calculators for business owners considering a loan, including raising capital, loan strategies, auto leasing or purchasing, and business financial ratios.',
    keywords: '',
  },
  '/guides/business-strategies/selling-exiting-your-business': {
    title: 'Selling/Exiting Your Business: Financial Guides | CPA Tax Adviser',
    description:
      'Guides on planning business succession, passing a family business to the next generation, creating an exit plan, and estimating business value.',
    keywords: '',
  },
  '/guides/business-strategies/selling-exiting-your-business/business-succession': {
    title: 'Your Business Succession: How To Plan For It | CPA Tax Adviser',
    description:
      'Review family-business transfer options and coordinate family, business, succession, and estate planning to prepare for ownership transition.',
    keywords: '',
  },
  '/guides/business-strategies/selling-exiting-your-business/passing-on-family-business': {
    title: 'Successfully Pass On Your Family Business | CPA Tax Adviser',
    description:
      'Understand family-business succession as a broader process involving family members, executives, advisers, business strategy, governance, and finances.',
    keywords: '',
  },
  '/guides/business-strategies/selling-exiting-your-business/winning-exit-plan': {
    title: 'Maximize Your Wealth With a Winning Exit Plan | CPA Tax Adviser',
    description:
      'Compare family ownership transfer, an employee stock ownership plan, a third-party sale, and liquidation when planning a business exit.',
    keywords: '',
  },
  '/guides/business-strategies/securing-business-loans/show-me-the-money': {
    title: 'Show Me The Money! Strategies For Securing a Loan | CPA Tax Adviser',
    description:
      'Prepare for a business loan by understanding lender concerns, selecting a suitable bank, building a relationship, and assembling a business plan, financial statements, references, and repayment information.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/evaluating-your-market': {
    title: 'Evaluating Your Market: A Basic Review | CPA Tax Adviser',
    description:
      'Use market research to understand potential customers, demand, competitors, pricing, market data, and export opportunities before expanding a business.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/pricing-products-and-services': {
    title: 'Pricing Your Products and Services: A Basic Review | CPA Tax Adviser',
    description:
      'Review pricing strategies, competitive position, materials, labor, overhead, service-business costs, and ways to monitor pricing for profitability.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/advertising-program': {
    title: 'Developing an Advertising Program: A Basic Review | CPA Tax Adviser',
    description:
      'Plan advertising around campaign goals, a defined audience, a customer-focused message, and appropriate media and budget.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/referrals': {
    title: 'Referrals: The Secret to Building a Better Business Faster | CPA Tax Adviser',
    description:
      'Build a thoughtful customer referral practice by delivering valuable service, asking for introductions, and showing appreciation.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/customer-trust': {
    title: 'How To Get Your Customers To Trust You | CPA Tax Adviser',
    description:
      'Build credibility with a strong customer experience and genuine, approved testimonials used responsibly in business marketing.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/customer-appreciation': {
    title: 'The Nicest Way To Build Your Business | CPA Tax Adviser',
    description:
      'Strengthen customer loyalty with attentive service, sincere appreciation, personal follow-up, and thoughtful thank-you notes.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/unique-selling-proposition': {
    title: 'Developing a Unique Selling Proposition | CPA Tax Adviser',
    description:
      'Define a customer-centered reason to choose your business and align your marketing message with the value your team delivers.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/customer-lifetime-value': {
    title: 'Uncover Your Business’s Most Valuable Hidden Asset | CPA Tax Adviser',
    description:
      'Estimate customer lifetime value from expected margins, retention, and referrals to help assess customer-acquisition investments.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/grow-with-less-stress': {
    title: 'How to Profitably Grow Your Business With Less Stress | CPA Tax Adviser',
    description:
      'Create clear roles and repeatable business processes while preserving the judgment and flexibility needed to serve customers well.',
    keywords: '',
  },
  '/guides/business-strategies/growing-your-business/marketing-pricing-faq': {
    title: 'Marketing and Pricing: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about researching product demand, asking market-research questions, and including material, labor, and overhead costs in prices.',
    keywords: '',
  },
  '/guides/business-strategies/running-your-business/travel-entertainment-faq': {
    title: 'Travel and Entertainment: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers about business meals, travel reimbursements, deductible travel and entertainment, temporary assignments, and substantiating expenses, with tax-year caveats.',
    keywords: '',
  },
  '/guides/business-strategies/running-your-business/employee-benefits-faq': {
    title: 'Employee Benefits: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about employer benefit obligations, medical plans, disability and life insurance, self-funded health plans, and cafeteria plans.',
    keywords: '',
  },
  '/guides/business-strategies/running-your-business/cash-flow': {
    title: 'Cash Flow: The Pulse of Your Business | CPA Tax Adviser',
    description:
      'Understand business cash flow, how it differs from profit, what affects receivables and payables, and ways to monitor and manage cash-flow gaps.',
    keywords: '',
  },
  '/guides/business-strategies/running-your-business/travel-entertainment': {
    title: 'Travel and Entertainment: Maximizing the Tax Benefits | CPA Tax Adviser',
    description:
      'How to deduct business travel, meal and auto costs: what counts as travel away from home, the meal rules, the records to keep, reimbursements, and auto expense methods.',
    keywords: '',
  },
  '/guides/business-strategies/running-your-business/employee-benefits': {
    title: 'Employee Benefits: How To Handle Them | CPA Tax Adviser',
    description:
      'An overview of required and optional benefits, health and insurance plans, self-funding, plan selection, and retirement benefits for employers.',
    keywords: '',
  },
  '/guides/business-strategies/running-your-business/financial-planning-tips': {
    title: 'Financial Planning Tips for Business Owners | CPA Tax Adviser',
    description:
      'Planning topics for business owners, from succession, ownership, and compensation to retirement, insurance, deductions, and tax compliance.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/three-things-you-must-know': {
    title: 'Starting a Business? 3 Things You Must Know | CPA Tax Adviser',
    description:
      'Three things to take care of when you start a business with employees: getting an EIN, registering for state payroll and sales taxes, and keeping payroll records.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/form-of-business-organization': {
    title: 'Form of Business Organization: Which Should You Choose? | CPA Tax Adviser',
    description:
      'Compare C-corps, S-corps, partnerships, LLCs, and sole proprietorships: how each is taxed, liability protection, professional practice entities, and changing entities.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/advantages-of-incorporating': {
    title: 'Advantages of Incorporating | CPA Tax Adviser',
    description:
      'Why incorporate your business: personal liability protection, tax advantages, and easier ways to raise capital.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/advantages-of-llcs': {
    title: 'Advantages of Limited Liability Companies | CPA Tax Adviser',
    description:
      'How an LLC combines the best of partnerships and corporations: limited personal liability, pass-through taxation, and member or manager management.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/business-plans': {
    title: 'Business Plans: How To Prepare An Effective One | CPA Tax Adviser',
    description:
      'How to prepare a business plan: questions to answer before you start a business, and what to include on your mission, products and markets, finances, and operations.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/home-based-business': {
    title: 'The Home-Based Business: Key Considerations | CPA Tax Adviser',
    description:
      'Key considerations for starting a home-based business: evaluating the idea, checking local requirements, and planning startup costs, operating expenses, sales, and cash flow.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/business-forms-faq': {
    title: 'Business Forms of Organization: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to questions about business entity liability, corporate double taxation, pass-through tax treatment, LLCs, professional practices, entity changes, and state rules.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/incorporating-faq': {
    title: 'Incorporating: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to questions about incorporating, S and C corporations, attorney requirements, corporate names, registered agents, shares, EINs, and organizing after formation.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/limited-liability-companies-faq': {
    title: 'Limited Liability Companies: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to questions about who should form an LLC, LLCs versus S corporations, operating agreements, meetings, and exceptions to limited liability.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/small-business-faq': {
    title: 'Small Business: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers on family-business succession, business plans, evaluating entrepreneurship, home-based business requirements, cash-flow planning, and reserves.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/recordkeeping-faq': {
    title: 'Recordkeeping for Your Taxes: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers about records to keep for taxes, retention periods, old returns, asset basis documents, non-tax records, and organizing personal and business files.',
    keywords: '',
  },
  '/guides/business-strategies/starting-a-business/raising-capital': {
    title: 'Raising Capital: How To Get Money For a Small Business | CPA Tax Adviser',
    description:
      'Where to find money for a small business, how to borrow and write a loan proposal, how lenders review your request, and the SBA loan programs available.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/buying-a-home': {
    title: 'Buying a Home: What To Do and How To Do It | CPA Tax Adviser',
    description:
      'A practical guide to buying a home: choosing a real estate agent, understanding contracts, inspections, title searches, closing costs, and protecting yourself throughout the process.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/buying-a-home-faq': {
    title: 'Buying a Home: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about home-buying budgets, mortgage preapproval, inspections, offers, and closing.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/homeowners-insurance-faq': {
    title: "Homeowner's Insurance: Frequently Asked Questions | CPA Tax Adviser",
    description:
      "Answers to common questions about homeowner's coverage, shopping for a policy, deductibles, and premiums.",
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/mortgages-faq': {
    title: 'Mortgages: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers about mortgage types, comparing offers, down payments, rate locks, and refinancing.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/selling-your-home-faq': {
    title: 'Selling Your Home: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers about pricing a home, preparing for sale, disclosures, evaluating offers, and possible tax effects.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/planning-your-move-faq': {
    title: 'Planning Your Move: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Moving tips covering timing, choosing a mover, budgeting, address changes, protecting belongings, and taxes.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/homeowners-insurance': {
    title: "Homeowner's Insurance: How To Get The Best Coverage and Value | CPA Tax Adviser",
    description:
      "How to evaluate and buy homeowner's insurance: coverage types, replacement cost vs. actual cash value, liability protection, flood and earthquake riders, and tips to lower your premium.",
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/home-mortgage-interest-deductions': {
    title: 'Home Mortgage Interest Deductions | CPA Tax Adviser',
    description:
      'Understand which home mortgage interest is tax-deductible, including acquisition debt, home equity loans, and refinanced mortgages, plus IRS limits and reporting requirements.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/the-deductibility-of-points': {
    title: 'The Deductibility of Points | CPA Tax Adviser',
    description:
      'Learn when mortgage points are fully deductible in the year paid and when they must be amortized over the life of the loan, with IRS rules for home purchases and refinancing.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/selling-your-home-effectively': {
    title: 'Selling Your Home: How To Do It Effectively | CPA Tax Adviser',
    description:
      'Tips for getting the best price when selling your home: finding a good agent, reviewing the listing agreement, speeding up the sale, negotiating effectively, and planning your move.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/selling-your-home-minimize-tax': {
    title: 'Selling Your Home: How To Minimize the Tax On the Gain | CPA Tax Adviser',
    description:
      'Key rules for minimizing taxes when selling your home: the $250,000/$500,000 exclusion, ownership and use tests, adjusted basis, non-traditional sales, and recapture of federal subsidy.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/which-moving-expenses-are-deductible': {
    title: 'Which Moving Expenses Are Deductible? | CPA Tax Adviser',
    description:
      'Learn which moving expenses were deductible before 2018: qualifying rules, the distance and time tests, household goods, travel, and moves within or outside the United States.',
    keywords: '',
  },
  '/guides/life-events/buying-and-selling-a-home/the-deduction-for-real-estate-taxes': {
    title: 'The Deduction For Real Estate Taxes | CPA Tax Adviser',
    description:
      'Explains which real estate tax expenses homeowners can deduct, the $10,000 SALT limit under TCJA, how deductions are split on a sale, and items not considered real estate taxes.',
    keywords: '',
  },
  '/guides/life-events/buying-and-maintaining-a-car/buy-or-lease': {
    title: 'Your Next Car: Should You Buy Or Lease? | CPA Tax Adviser',
    description:
      'Decide whether to lease or buy your next car: how leases work, initial, ongoing and final costs, option rights, and questions to ask before you sign.',
    keywords: '',
  },
  '/guides/life-events/buying-and-maintaining-a-car/car-insurance': {
    title: 'Car Insurance: 10 Cost-Cutters To Save You Money | CPA Tax Adviser',
    description:
      'Ten ways to cut your car insurance costs, from comparison shopping and higher deductibles to discounts and repair networks, plus a checklist for getting quotes.',
    keywords: '',
  },
  '/guides/life-events/buying-and-maintaining-a-car/buying-or-leasing-faq': {
    title: 'Buying or Leasing Your Next Car: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about leasing or buying a car, getting the best price, negotiating a purchase or lease, and lease costs, charges and options.',
    keywords: '',
  },
  '/guides/life-events/buying-and-maintaining-a-car/car-insurance-faq': {
    title: 'Car Insurance: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about auto policy coverage, handling a claim, deductibles, comparison shopping, discounts, and preventing car theft.',
    keywords: '',
  },
  '/guides/life-events/getting-a-loan/mortgage-alternatives': {
    title: 'Mortgage Alternatives: How To Choose The Right One | CPA Tax Adviser',
    description:
      'Compare fixed-rate, 15-year, adjustable-rate, balloon, graduated payment, and other mortgages, plus buy-downs, reverse mortgages, and the contract clauses to watch for.',
    keywords: '',
  },
  '/guides/life-events/getting-a-loan/mortgage-lock-ins': {
    title: 'Mortgage Lock-ins: Questions To Ask | CPA Tax Adviser',
    description:
      'What to ask lenders about locking in your mortgage rate and points, lock-in fees and expiration, speeding up loan processing, and how escrow accounts work.',
    keywords: '',
  },
  '/guides/life-events/getting-a-loan/refinancing-your-mortgage': {
    title: 'Refinancing Your Mortgage: When and How | CPA Tax Adviser',
    description:
      'Who can benefit from refinancing, how to decide, what refinancing costs, how it affects your taxes, tips for getting the best deal, and sample savings.',
    keywords: '',
  },
  '/guides/life-events/getting-a-loan/home-equity-loans': {
    title: 'Home Equity Loans: How To Shop For The One That Is Best For You | CPA Tax Adviser',
    description:
      'How a home equity line of credit works, what it costs, how you repay it, how it compares with a second mortgage, and how to compare APRs and loan terms.',
    keywords: '',
  },
  '/guides/life-events/getting-a-loan/reverse-mortgages': {
    title: 'Reverse Mortgages: How They Can Enhance Your Retirement | CPA Tax Adviser',
    description:
      'How reverse mortgages work, who qualifies, how payments and taxes work, the costs and drawbacks, the alternatives, and how to compare HECM and other plans.',
    keywords: '',
  },
  '/guides/life-events/getting-a-loan/financing-questions-faq': {
    title: 'Financing Questions: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about raising money for a small business, types of business loans, what banks look for, and writing a good loan proposal.',
    keywords: '',
  },
  '/guides/life-events/buying-insurance/long-term-care-insurance': {
    title: 'Long-Term Care Insurance: How To Get The Best Deal | CPA Tax Adviser',
    description:
      'Decide whether long-term care insurance is right for you: how policies work, the pros and cons, alternatives such as Medicaid, cost, and choosing an insurer and policy.',
    keywords: '',
  },
  '/guides/life-events/buying-insurance/annuities': {
    title: 'Annuities: How They Work and When You Should Use Them | CPA Tax Adviser',
    description:
      'How annuities work, the types available, payout options, how payouts are taxed, and how to shop for an annuity and compare its costs, penalties, and extras.',
    keywords: '',
  },
  '/guides/life-events/buying-insurance/the-affordable-care-act': {
    title: 'The Affordable Care Act | CPA Tax Adviser',
    description:
      'The tax side of the Affordable Care Act for individuals and businesses: marketplaces, premium tax credits, Medicare taxes, the small business credit, and employer rules.',
    keywords: '',
  },
  '/guides/life-events/buying-insurance/disability-insurance-faq': {
    title: 'Disability Insurance: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about disability insurance, workers compensation, how disability is defined, long-term care insurance, and qualifying for Medicaid.',
    keywords: '',
  },
  '/guides/life-events/buying-insurance/long-term-care-insurance-faq': {
    title: 'Long-Term Care Insurance: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about whether to buy long-term care insurance, its alternatives and cost, what to look for in a policy, and choosing an insurer.',
    keywords: '',
  },
  '/guides/life-events/buying-insurance/annuities-faq': {
    title: 'Annuities: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about how annuities work, the types available, payout options, how payouts are taxed, and the costs to compare when you shop.',
    keywords: '',
  },
  '/guides/life-events/dealing-with-your-bank/bank-accounts': {
    title: 'Bank Accounts: What To Look and Ask For | CPA Tax Adviser',
    description:
      'Compare checking, savings, money-market, and time-deposit accounts, understand fees and electronic transfers, and learn how to protect and monitor your account.',
    keywords: '',
  },
  '/guides/life-events/dealing-with-your-bank/bank-accounts-faq': {
    title: 'Bank Accounts: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to frequently asked questions about bank account types, fees, tiered interest rates, deposit insurance, and overdraft protection.',
    keywords: '',
  },
  '/guides/life-events/dealing-with-your-bank/atm-transactions-faq': {
    title: 'ATM Transactions: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to frequently asked questions about ATM transactions, error correction, lost or stolen cards, overseas ATM use, and fraud prevention.',
    keywords: '',
  },
  '/guides/life-events/dealing-with-your-bank/applying-for-a-loan': {
    title: 'Applying For a Loan: How To Get The Best Loan At The Lowest Cost | CPA Tax Adviser',
    description:
      'Compare loan types, APR, fees, rate terms, monthly payments, total borrowing costs, and repayment risks before choosing a loan.',
    keywords: '',
  },
  '/guides/life-events/dealing-with-your-bank/getting-a-loan-faq': {
    title: 'Getting a Loan: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to frequently asked questions about mortgage prepayment, refinancing, borrowing against securities, HELOCs, reverse mortgages, and loan interest deductions.',
    keywords: '',
  },
  '/guides/life-events/dealing-with-your-bank/loan-questions-faq': {
    title: 'Loan Questions: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to frequently asked questions about cosigning loans, getting the best home equity rates, HELOC closing costs, and comparing loan alternatives.',
    keywords: '',
  },
  '/guides/life-events/developing-a-financial-plan': {
    title: 'Developing a Financial Plan | CPA Tax Adviser',
    description:
      'Build a practical financial plan by setting goals, reviewing income, spending, assets, and debts, and choosing steps for saving and investing.',
    keywords: '',
  },
  '/guides/life-events/developing-a-financial-plan/investment-options-faq': {
    title: 'Investment Options: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about the investment process, risk and return, asset allocation, questions to ask before investing, IRAs, options, and measuring your return.',
    keywords: '',
  },
  '/guides/life-events/preparing-for-college': {
    title: 'Preparing for College: Financial Guides | CPA Tax Adviser',
    description:
      'Plan for college costs with resources on budgeting, saving, financial planning, Federal Student Aid, FAFSA, and education tax benefits.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/credit-cards': {
    title: 'Credit Cards: How To Choose—And Use—Them Wisely | CPA Tax Adviser',
    description:
      'How to compare credit card rates, fees, grace periods, and balance methods, use cards wisely, and dispute improper charges, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/merchant-credit-card-abuses': {
    title: 'Merchant Credit Card Abuses: What They Cannot Ask You To Do | CPA Tax Adviser',
    description:
      'What merchants cannot require when you pay by card or check, including personal information, minimum charges, and surcharges, and how to complain, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/credit-card-rights': {
    title: 'Your Credit Card Rights: What To Do If You Have a Problem | CPA Tax Adviser',
    description:
      'Your rights to prompt payment credit, refunds, billing error corrections, limits on unauthorized charges, and dispute resolution with merchants, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/credit-cards-faq': {
    title: 'Credit Cards: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common credit card questions: choosing a card, liability for a stolen card, rewards cards, balance methods, billing errors, and disputes, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/credit-reports-faq': {
    title: 'Credit Reports: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common credit report questions: getting free reports, correcting errors, building a credit history, who can see your file, and reading your report, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/financial-trouble-faq': {
    title: 'Financial Trouble: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about too much debt, steps to get out of financial trouble, dealing with debt collectors, and your rights against creditors, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/credit-rating-faq': {
    title: 'Credit Rating: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about what affects your credit rating: divorce, bank accounts, age, debt-to-income ratio, bankruptcy, medical debt, and available credit, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/getting-out-of-financial-trouble': {
    title: 'Getting Out of Financial Trouble: Steps You Can Take | CPA Tax Adviser',
    description:
      'Steps to take when debts become hard to pay: working with creditors, budgeting, credit counseling, bankruptcy, and avoiding credit repair scams, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/preparing-for-college/bank-accounts': {
    title: 'Bank Accounts: What To Look and Ask For | CPA Tax Adviser',
    description:
      'Compare bank and credit-union accounts by access, fees, rates, services, deposit insurance, and questions to ask before opening an account.',
    keywords: '',
  },
  '/guides/life-events/getting-married': {
    title: 'Getting Married: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides, frequently asked questions, and a spending calculator for couples getting married, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/getting-married/getting-married-faq': {
    title: 'Getting Married: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about marriage, financial and estate planning, life insurance, name changes, taxes, and property ownership.',
    keywords: '',
  },
  '/guides/life-events/getting-married/financial-guidelines': {
    title: 'Getting Married (or Divorced): Some Financial Guidelines | CPA Tax Adviser',
    description:
      'Financial and legal decisions to make when you marry, divorce, or remarry: life insurance, property ownership, money management, credit, and dividing property.',
    keywords: '',
  },
  '/guides/life-events/getting-married/life-insurance': {
    title: 'Life Insurance: How Much and What Kind To Buy | CPA Tax Adviser',
    description:
      'Whether you need life insurance, a worksheet to work out how much, how term and cash value policies differ, and how to shop for a policy.',
    keywords: '',
  },
  '/guides/life-events/getting-married/life-insurance-faq': {
    title: 'Life Insurance: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common life-insurance questions about underwriting, policy costs, choosing coverage, comparing policy types, and working with an agent.',
    keywords: '',
  },
  '/guides/life-events/getting-married/your-financial-plan': {
    title: 'Your Financial Plan: Getting Started On a Secure Future | CPA Tax Adviser',
    description:
      'Start a financial plan: set your goals, work out your net worth and cash flow, build a safety net, and decide how much to save, with worksheets for each step.',
    keywords: '',
  },
  '/guides/life-events/getting-married/document-locator': {
    title: 'Document Locator System: A Handy Aid For Keeping Track of Your Records | CPA Tax Adviser',
    description:
      'A simple system for filing your important personal records so you, your spouse, or your executor can find them, with a list of where to file each document.',
    keywords: '',
  },
  '/guides/life-events/getting-married/budgeting': {
    title: 'Budgeting: How To Prepare a Workable Plan | CPA Tax Adviser',
    description:
      'Build a budget in four steps: analyze your income and expenses, set budgeting goals, create your monthly budget, and review how well you keep to it.',
    keywords: '',
  },
  '/guides/life-events/improving-your-credit/credit-reports': {
    title: 'Credit Reports: What You Should Know—And Do—About Yours | CPA Tax Adviser',
    description:
      'How lenders evaluate credit, how to get and read your credit reports, how to dispute errors, and what affects your credit standing, with agencies to contact.',
    keywords: '',
  },
  '/guides/life-events/getting-married/post-mortem-letter': {
    title: 'Post-Mortem Letter: How To Prepare It and What To Include | CPA Tax Adviser',
    description:
      'What a postmortem letter does, how to get it to your executors, and what it should contain so your survivors can find your assets, records, and advisers.',
    keywords: '',
  },
  '/guides/life-events/getting-married/retirement-distributions-when': {
    title: 'Retirement Plan Distributions: When To Take Them | CPA Tax Adviser',
    description:
      'When you must start withdrawing from retirement plans, what happens to the funds after you die, how your heirs are taxed, and tax planning ideas.',
    keywords: '',
  },
  '/guides/life-events/getting-married/retirement-distributions-how': {
    title: 'Retirement Plan Distributions: How To Take Them | CPA Tax Adviser',
    description:
      'Your options for taking retirement plan distributions, from lump sums and rollovers to partial withdrawals, and how each is taxed.',
    keywords: '',
  },
  '/guides/life-events/getting-married/estate-planning': {
    title: 'Estate Planning: How To Get Started | CPA Tax Adviser',
    description:
      'A road map to estate planning: estate and gift taxes, wills, trusts, postmortem letters, living wills, life insurance, disclaimers, and lifetime gifts.',
    keywords: '',
  },
  '/guides/life-events/getting-married/funerals': {
    title: 'Funerals: What To Do At This Stressful Time | CPA Tax Adviser',
    description:
      'How to arrange a funeral, how the FTC Funeral Rule protects you, what the itemized statement shows, how to complain, and benefits for widows and widowers.',
    keywords: '',
  },
  '/guides/life-events/getting-married/saving-money': {
    title: 'Saving Money: 10 Major Ways To Increase Your Nest Egg | CPA Tax Adviser',
    description:
      'Ten ways to grow your nest egg by spending less, from a financial plan and automatic savings to lower mortgage, credit card, bank, insurance, and utility costs.',
    keywords: '',
  },
  '/guides/life-events/getting-married/disability-insurance': {
    title: 'Disability Insurance: What To Look For | CPA Tax Adviser',
    description:
      'How to protect your earning power with disability insurance: employer and government coverage, and what to look for in a private policy.',
    keywords: '',
  },
  '/guides/life-events/getting-married/disability-benefits': {
    title: "Disability Benefits: How To Get All You're Entitled To | CPA Tax Adviser",
    description:
      'Social Security disability benefits: who qualifies, how payments work, changes you must report, case reviews, returning to work, and your right to appeal.',
    keywords: '',
  },
  '/guides/life-events/getting-married/homeowners-insurance': {
    title: "Homeowner's Insurance: How To Get The Best Coverage and Value | CPA Tax Adviser",
    description:
      "What homeowner's insurance covers, the coverage to consider, how to shop for a policy, a glossary of terms, and an inventory sheet for your belongings.",
    keywords: '',
  },
  '/guides/life-events/getting-married/asset-allocation': {
    title: 'Asset Allocation: How To Diversify For Maximum Return | CPA Tax Adviser',
    description:
      'What asset allocation is, how it works, the main asset classes, how allocation models are built, and how the efficient frontier balances risk and return.',
    keywords: '',
  },
  '/guides/life-events/getting-married/social-security-benefits': {
    title: 'Social Security Benefits: How To Get The Maximum Amount | CPA Tax Adviser',
    description:
      'Social Security retirement benefits: eligibility, how your benefit is figured, early, full, and delayed retirement, family benefits, applying, and Medicare.',
    keywords: '',
  },
  '/guides/life-events/getting-married/investment-basics': {
    title: 'Investment Basics: What You Should Know | CPA Tax Adviser',
    description:
      'A starting point for new investors: how securities are traded and priced, how investors are protected, the main types of investments, risk and return, and a glossary.',
    keywords: '',
  },
  '/guides/investment-strategies/buying-on-margin': {
    title: 'Buying On Margin: How It Works and What To Watch Out For | CPA Tax Adviser',
    description:
      'How margin accounts work, how borrowing can magnify gains and losses, margin requirements and calls, and what to review in your brokerage agreement.',
    keywords: '',
  },
  '/guides/investment-strategies/financial-planning-checklist': {
    title: 'Financial Planning Checklist | CPA Tax Adviser',
    description:
      'A 13-point financial check-up covering goals, saving, retirement, employee benefits, education, investments, insurance, credit, legal documents, and family changes.',
    keywords: '',
  },
  '/guides/investment-strategies/investment-clubs': {
    title: 'Investment Clubs: What You Need To Know | CPA Tax Adviser',
    description:
      'How investment clubs pool money and make decisions, and how member participation, securities offerings, adviser activity, and state and federal rules may affect them.',
    keywords: '',
  },
  '/guides/investment-strategies/swap-tactic-lets-you-defer-capital-gains-tax': {
    title: 'Swap Tactic Lets You Defer Capital Gains Tax | CPA Tax Adviser',
    description:
      'Learn how Section 1031 like-kind exchanges may defer gain on qualifying business or investment real estate, including eligibility, deadlines, boot, and reporting.',
    keywords: '',
  },
  '/guides/investment-strategies/changing-jobs-401k': {
    title: "Changing Jobs? Don't Forget Your 401(k) | CPA Tax Adviser",
    description:
      'What to do with your 401(k) when you change jobs: why cashing out costs you, rolling over to a new plan or an IRA, the 60-day rollover period, and leaving it in your old plan.',
    keywords: '',
  },
  '/guides/investment-strategies/how-brokers-execute-trades': {
    title: 'How Brokers Execute Trades: What Every Investor Should Know | CPA Tax Adviser',
    description:
      'Where and how your broker executes a stock trade: limit orders, market makers and payment for order flow, the duty of best execution, and directing your own trades.',
    keywords: '',
  },
  '/guides/investment-strategies/investing-in-mutual-funds': {
    title: 'Investing In Mutual Funds: The Time-Tested Guidelines | CPA Tax Adviser',
    description:
      'How to choose a mutual fund: comparing performance, costs, investment philosophy, and customer service, and the risks of money market, bond, and stock funds.',
    keywords: '',
  },
  '/guides/investment-strategies/mutual-fund-taxation': {
    title: 'Mutual Fund Taxation: How To Cut The Tax Bite | CPA Tax Adviser',
    description:
      'How mutual fund distributions are taxed, and 13 tips to cut the tax: reinvested dividends, exchanges, tax-exempt funds, cost basis, and choosing which shares you sell.',
    keywords: '',
  },
  '/guides/investment-strategies/penny-stocks': {
    title: 'Penny Stocks: How To Investigate Them and Avoid the Traps | CPA Tax Adviser',
    description:
      'What microcap or penny stocks are, where they trade, which companies report to the SEC, common penny stock frauds, and the steps and red flags to check before you invest.',
    keywords: '',
  },
  '/guides/investment-strategies/mutual-funds-faq': {
    title: 'Mutual Funds: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about how mutual fund distributions are taxed, reinvested dividends, switching funds, returns of capital, tax-exempt funds, and foreign funds.',
    keywords: '',
  },
  '/guides/investment-strategies/stocks-faq': {
    title: 'Stocks: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about how stocks are traded, exchanges and over-the-counter markets, preferred and common stock, foreign stocks, and dividend reinvestment plans.',
    keywords: '',
  },
  '/guides/investment-strategies/bonds-faq': {
    title: 'Bonds: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about how bonds work, bond ratings and call provisions, what moves bond prices, bond funds, municipal bonds, and U.S. Government bonds.',
    keywords: '',
  },
  '/guides/tax-strategies/tax-planning-for-small-business-owners': {
    title: 'Tax Planning For Small Business Owners | CPA Tax Adviser',
    description:
      'How small business owners can plan to cut taxes legally: tax avoidance vs. evasion, planning goals, meal and auto deductions, and Section 179 and bonus depreciation.',
    keywords: '',
  },
  '/guides/tax-strategies/7-biggest-misconceptions': {
    title: '7 Biggest Misconceptions Business Owners Have About Their Returns | CPA Tax Adviser',
    description:
      'Seven common small business tax myths, from start-up costs and audit-proofing to incorporating, the home office deduction, filing extensions, and retirement plans.',
    keywords: '',
  },
  '/guides/tax-strategies/7-ways-to-save-even-more-income-taxes': {
    title: '7 Ways To Save Even More Income Taxes | CPA Tax Adviser',
    description:
      'Seven tax-saving ideas for business owners: funding your IRA, choosing a retirement plan, leasehold improvements, meals and gifts, your computer, and dinner money.',
    keywords: '',
  },
  '/guides/tax-strategies/home-office-deduction': {
    title: 'The Home Office Deduction | CPA Tax Adviser',
    description:
      'Who qualifies for the home office deduction, which expenses you can deduct and how they are limited, selling a home with an office, and the simplified option.',
    keywords: '',
  },
  '/guides/tax-strategies/turn-your-vacation-into-a-tax-deduction': {
    title: 'Turn your Vacation Into a Tax Deduction | CPA Tax Adviser',
    description:
      'How business owners can deduct travel costs on a trip that mixes business and vacation: setting appointments, business days, weekends, and the records to keep.',
    keywords: '',
  },
  '/guides/tax-strategies/retirement-plan-options-for-small-businesses': {
    title: 'Retirement Plan Options For Small Businesses | CPA Tax Adviser',
    description:
      'Retirement plans for small businesses compared: defined benefit and contribution plans, SIMPLE IRAs, SEPs, 401(k)s, profit-sharing plans, and choosing by your goals.',
    keywords: '',
  },
  '/guides/tax-strategies/recordkeeping-faq': {
    title: 'Recordkeeping: Frequently Asked Questions | CPA Tax Adviser',
    description:
      'Answers to common questions about the records your business needs to keep, automating your recordkeeping, choosing a computer system, and putting it in place.',
    keywords: '',
  },
  '/guides/life-events/getting-married/survivor-benefits': {
    title: 'Survivor Benefits: A Guide To This Often Overlooked Insurance Add-On | CPA Tax Adviser',
    description:
      'Social Security survivors benefits: who is eligible, how much your family can receive, how to apply, Medicare, and how your information is kept private.',
    keywords: '',
  },
  '/guides/life-events/death-of-a-loved-one': {
    title: 'Coping with Death of a Loved One: Financial Guides | CPA Tax Adviser',
    description:
      'Financial guides and answers to common questions on the death of a spouse, funerals, and preparing a postmortem letter, from CPA Tax Adviser.',
    keywords: '',
  },
  '/guides/life-events/death-of-a-loved-one/death-of-a-spouse': {
    title: 'Death of a Spouse: Financial Steps You Should Take | CPA Tax Adviser',
    description:
      'The financial steps to take after the death of a spouse: collecting papers, survivor and veterans benefits, the will, probate, taxes, and changing ownership.',
    keywords: '',
  },
  '/guides/life-events/death-of-a-loved-one/death-of-a-loved-one-faq': {
    title: 'Death of a Loved One: Frequently Asked Questions | CPA Tax Adviser',
    description:
      "Answers to common questions about the papers you'll need, the deceased's assets, funeral costs, Social Security survivors benefits, probate, and taxes after a death.",
    keywords: '',
  },
  '/financial-planning': {
    title: 'Financial Planning | CPA Tax Adviser',
    description:
      'Personalized financial guidance beyond tax season through our affiliated firm, Yellow Oak Financial Planning.',
    keywords: '',
  },
  '/contact': {
    title: 'Contact Us | CPA Tax Adviser',
    description:
      'Contact CPA Tax Adviser in Simpsonville, SC. Call (864) 432-6922, email contactus@cpataxadviser.com, or schedule a free initial consultation online.',
    keywords: '',
  },
  '/privacy': {
    title: 'Privacy Policy | CPA Tax Adviser',
    description:
      'How CPA Tax Adviser collects, protects, and shares nonpublic personal information, as required by the Gramm-Leach-Bliley Act.',
    keywords: '',
  },
  '/disclaimer': {
    title: 'Disclaimer | CPA Tax Adviser',
    description:
      'The terms that apply to the information on the CPA Tax Adviser website, including that it is not tax, accounting, or financial advice.',
    keywords: '',
  },
};

// Any address that isn't one of the pages above (the "page not found" page). It has no
// canonical URL and is kept out of search results.
export const notFound = {
  title: 'Page Not Found | CPA Tax Adviser',
  description: 'The page you were looking for could not be found.',
};

// The head of the page at `path`: its title, and its meta and link tags as lists of
// attributes. An address with or without a closing slash finds the same page.
export function pageHead(path) {
  const key = path && [path, path.replace(/\/$/, ''), `${path}/`].find((candidate) => candidate in pages);
  const page = key ? pages[key] : notFound;
  const share = { title: page.title, description: page.description, image: defaultImage, ...page.og };
  const url = key && siteUrl + key;
  const image = share.image && siteUrl + share.image;

  const tags = [
    { name: 'description', content: page.description },
    page.keywords && { name: 'keywords', content: page.keywords },
    !key && { name: 'robots', content: 'noindex' },
    url && { rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'CPA Tax Adviser' },
    { property: 'og:title', content: share.title },
    { property: 'og:description', content: share.description },
    url && { property: 'og:url', content: url },
    image && { property: 'og:image', content: image },
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: share.title },
    { name: 'twitter:description', content: share.description },
    image && { name: 'twitter:image', content: image },
  ];
  return { title: page.title, tags: tags.filter(Boolean) };
}
