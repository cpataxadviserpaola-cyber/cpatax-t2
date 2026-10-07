// Financial guides, grouped as in the firm's guide library (cpataxadviser.com/reports.php).
// They feed the Guides page, one section per category at /guides#<id>, and the "More topics"
// list on each topic page (src/components/Guides/).
//
// The guides themselves are still on the current site: each title links to its page there,
// opened in a new tab. Change `library` if those pages move.
//
// id       anchor of the category's section on the Guides page
// eyebrow  small label above the category's title
// title    category name, also used in the row of links under the page banner
// text     short description beside the category's guides
// groups   lists of guides, each with a label and its links

const library = 'https://www.cpataxadviser.com/';

// Topics and guides with their own page on this site, by their number in the library, with
// the page's address. Each page is a component in src/components/Guides/<Category>/<Topic>/,
// routed in src/App.jsx, and needs an entry in src/data/seo.js. Every other topic or guide
// links to its page in the library.
export const topicPages = {
  1: '/guides/life-events/getting-married',
  23: '/guides/life-events/death-of-a-loved-one',
};

export const articlePages = {
  1: '/guides/life-events/getting-married/financial-guidelines',
  10: '/guides/life-events/getting-married/your-financial-plan',
  11: '/guides/life-events/getting-married/budgeting',
  25: '/guides/life-events/getting-married/credit-reports',
  47: '/guides/life-events/getting-married/life-insurance',
  48: '/guides/life-events/getting-married/disability-insurance',
  49: '/guides/life-events/getting-married/disability-benefits',
  54: '/guides/life-events/getting-married/your-retirement-plan',
  56: '/guides/life-events/getting-married/social-security-benefits',
  58: '/guides/life-events/getting-married/retirement-distributions-when',
  59: '/guides/life-events/getting-married/retirement-distributions-how',
  64: '/guides/life-events/getting-married/homeowners-insurance',
  73: '/guides/life-events/getting-married/estate-planning',
  74: '/guides/life-events/getting-married/post-mortem-letter',
  82: '/guides/life-events/getting-married/funerals',
  83: '/guides/life-events/getting-married/investment-basics',
  84: '/guides/life-events/getting-married/asset-allocation',
  92: '/guides/life-events/getting-married/investing-in-mutual-funds',
  93: '/guides/life-events/getting-married/survivor-benefits',
  100: '/guides/life-events/getting-married/saving-money',
  102: '/guides/life-events/getting-married/document-locator',
  81:'/guides/life-events/death-of-a-loved-one/death-of-a-spouse',
};

// A single guide or FAQ, from its library page (life-events.php, say) and, optionally, its
// topic's number.
export const guide = (page, catid) => ([item, title]) =>
  articlePages[item]
    ? { title, to: articlePages[item] }
    : {
        title,
        href: `${library}${page}?item=${item}${catid ? `&catid=${catid}` : ''}&cat=${encodeURIComponent(title)}`,
      };

export const calculator = ([calc, title]) => ({ title, href: `${library}calcloader.php?calc=${calc}` });

// A topic in a category's list. Its library page lists that topic's guides, FAQs, and
// calculators.
const topic = (page) => ([catid, title]) =>
  topicPages[catid]
    ? { title, to: topicPages[catid] }
    : { title, href: `${library}${page}?catid=${catid}&cat=${encodeURIComponent(title)}` };

export const guideCategories = [
  {
    id: 'life-events',
    eyebrow: 'Personal finance',
    title: 'Life Events',
    text: 'Life is full of changes and surprises. Use these guides to help you make sound financial decisions.',
    groups: [
      {
        label: 'Topics',
        items: [
          [1, 'Getting Married'],
          [2, 'Becoming a Parent'],
          [3, 'Preparing for College'],
          [4, 'Developing a Financial Plan'],
          [5, 'Dealing with Your Bank'],
          [6, 'Improving Your Credit'],
          [9, 'Choosing A Professional'],
          [10, 'Buying Insurance'],
          [14, 'Getting a Loan'],
          [15, 'Planning For Retirement'],
          [16, 'Buying & Maintaining A Car'],
          [17, 'Buying & Selling A Home'],
          [18, 'Planning Your Estate'],
          [19, 'Making Charitable Contributions'],
          [20, 'Avoiding Scams'],
          [21, 'Getting Divorced or Becoming Widowed'],
          [22, 'Coping with Major Illness'],
          [23, 'Coping with Death of a Loved One'],
          [24, 'Improving Your Retirement'],
          [25, 'Handling Other Situations'],
        ].map(topic('life-events.php')),
      },
    ],
  },
  {
    id: 'business-strategies',
    eyebrow: 'Running a business',
    title: 'Business Strategies',
    text: 'Learn how to start, run and eventually sell a successful business.',
    groups: [
      {
        label: 'Topics',
        items: [
          [7, 'Starting A Business'],
          [8, 'Running Your Business'],
          [11, 'Growing Your Business'],
          [12, 'Securing Business Loans'],
          [13, 'Selling/Exiting Your Business'],
        ].map(topic('business-strategies.php')),
      },
    ],
  },
  {
    id: 'investment-strategies',
    eyebrow: 'Investing',
    title: 'Investment Strategies',
    text: 'Why leave your money sitting in a bank account earning for other people when you can put it to work for yourself? This section is dedicated to tested and proven investment strategies and concepts.',
    groups: [
      {
        label: 'Financial guides',
        items: [
          [83, 'Investment Basics: What You Should Know'],
          [84, 'Asset Allocation: How To Diversify For Maximum Return'],
          [86, 'Buying On Margin: How It Works and What To Watch Out For'],
          [87, 'Financial Planning Checklist'],
          [88, 'Investment Clubs: What You Need To Know'],
          [89, 'Swap Tactic Lets You Defer Capital Gains Tax'],
          [90, "Changing Jobs? Don't Forget Your 401(k)"],
          [91, 'How Brokers Execute Trades: What Every Investor Should Know'],
          [92, 'Investing In Mutual Funds: The Time-Tested Guidelines'],
          [99, 'Mutual Fund Taxation: How To Cut The Tax Bite'],
          [95, 'Penny Stocks: How To Investigate Them and Avoid the Traps'],
          [51, 'Annuities: How They Work and When You Should Use Them'],
          [55, '10 Retirement Saving Tips'],
          [54, 'Your Retirement Plan: How To Get Started'],
          [60, 'Roth IRAs: How They Work and How To Use Them'],
        ].map(guide('investment-strategies.php', 28)),
      },
      {
        label: 'Frequently asked questions',
        items: [
          [13, 'Investment Options: Frequently Asked Questions'],
          [16, 'Mutual Funds: Frequently Asked Questions'],
          [17, 'Stocks: Frequently Asked Questions'],
          [15, 'Bonds: Frequently Asked Questions'],
          [14, 'Annuities: Frequently Asked Questions'],
          [19, 'Retirement Assets: Frequently Asked Questions'],
          [12, 'Developing a Financial Plan: Frequently Asked Questions'],
          [26, 'Traditional vs Roth IRAs: Frequently Asked Questions'],
        ].map(guide('investment-strategies.php', 28)),
      },
      {
        label: 'Financial calculators',
        items: [
          ['ret02', 'Am I saving enough for my retirement?'],
          ['qua02', 'How Much Can I Contribute To An IRA?'],
          ['qua04', 'Should I Convert To A Roth IRA?'],
          ['qua07', 'What are my projected required minimum distributions?'],
          ['sav09', 'How Do Taxes and Inflation Impact My Investment Return?'],
          ['sav01', 'Becoming A Millionaire'],
        ].map(calculator),
      },
    ],
  },
  {
    id: 'tax-strategies',
    eyebrow: 'Tax savings',
    title: 'Tax Strategies for Business Owners',
    text: 'Find tax deductions that you may be missing. This segment of financial guides is dedicated to strategic tax planning for business owners. Can you save more? We think so.',
    groups: [
      {
        label: 'Financial guides',
        items: [
          [127, 'Tax Planning For Small Business Owners'],
          [128, '7 Biggest Misconceptions Business Owners Have About Their Returns'],
          [120, 'Travel and Entertainment: Maximizing the Tax Benefits'],
          [132, '7 Ways To Save Even More Income Taxes'],
          [133, 'The Home Office Deduction'],
          [135, 'Turn your Vacation Into a Tax Deduction'],
          [105, 'Form of Business Organization: Which Should You Choose?'],
          [136, 'Retirement Plan Options For Small Businesses'],
          [61, 'The "SIMPLE" Plan: A Retirement Plan for the Really Small Business'],
        ].map(guide('taxstrategies-businessowners.php', 26)),
      },
      {
        label: 'Frequently asked questions',
        items: [[141, 'Recordkeeping: Frequently Asked Questions']].map(
          guide('taxstrategies-businessowners.php', 26),
        ),
      },
    ],
  },
];
