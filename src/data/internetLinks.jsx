// Internet Links by category, as on the old site's Internet Links page
// (cpataxadviser.com/links.php), word for word: each site with the library's description. Links
// use the sites' current addresses. Left out because the site is gone or now something else: ABC's
// of Real Estate, Tucows, U.S. News' College Center, National Council of Higher Education and
// Industry Player; and QuickBooks, which linked to a page of the old site. "help and appraiser" and
// "a outstanding" are as the library has them. Shown on the Resources page.

const reader = (
  <a href="https://get.adobe.com/reader/" target="_blank" rel="noopener noreferrer">
    download
  </a>
);

export const linkCategories = [
  {
    id: 'new-employee-forms',
    title: 'New Employee Forms',
    links: [
      {
        title: 'W4',
        url: 'https://www.irs.gov/pub/irs-pdf/fw4.pdf',
        text: (
          <>
            Use this form to determine employee's federal income tax withholding. This form requires Adobe PDF Reader.
            If you do not have it, you may {reader} it here.
          </>
        ),
      },
      {
        title: 'I9',
        url: 'https://www.uscis.gov/sites/default/files/document/forms/i-9.pdf',
        text: (
          <>
            All employees must complete this form at time of hire for the Immigration and Naturalization Service. This
            form requires Adobe PDF Reader. If you do not have it, you may {reader} it here.
          </>
        ),
      },
    ],
  },
  {
    id: 'financial-links',
    title: 'Financial Links',
    links: [
      {
        title: 'Microsoft MoneyCentral',
        url: 'https://www.msn.com/en-us/money',
        text: 'MoneyCentral is the best source for all your personal finance needs. Get quotes, stock research, portfolio tracking, news, and online bill payment. Keep informed and on track with a broad range of personal finance topics.',
      },
      {
        title: 'CBS MarketWatch',
        url: 'https://www.marketwatch.com/',
        text: 'This investment supersite provides links to stock quotes, IRA information, financial news, mutual funds, stock recommendations, investment message boards and much more.',
      },
      {
        title: 'Travelex',
        url: 'https://www.travelexinsurance.com/',
        text: 'The largest airport foreign exchange, foreign currency, currency exchange, Bureau de change and foreign money provider. Providing competitive exchange rates, travelers cheques and online currency converters.',
      },
    ],
  },
  {
    id: 'government-links',
    title: 'Government Links',
    links: [
      {
        title: 'The Internal Revenue Service',
        url: 'https://www.irs.gov/',
        text: 'Downloadable tax forms and publications as well as a lot of great tax advice.',
      },
      {
        title: 'Social Security Administration',
        url: 'https://www.ssa.gov/',
        text: 'Learn how the Social Security Administration can help with your retirement, medicare, disability, survivorship and other benefit questions.',
      },
      {
        title: 'U.S. Small Business Administration',
        url: 'https://www.sba.gov/',
        text: "You don't need an MBA to use the SBA. This site outlines everything in plain English. The SBA site contains a wealth of information for entrepreneurs and small business owners.",
      },
      {
        title: 'U.S. Department of Commerce',
        url: 'https://www.commerce.gov/',
        text: 'A thorough overview of the Commerce Department and the organizations under its banner',
      },
    ],
  },
  {
    id: 'consumer-advice',
    title: 'Consumer Advice',
    links: [
      {
        title: 'Consumer World',
        url: 'https://www.consumerworld.org/',
        text: 'Before you purchase a product or service, spend a few minutes at Consumer World and save yourself the agony of buyer remorse. Research rates and comparison shop until you drop, for everything—cars, travel, credit cards and much more.',
      },
    ],
  },
  {
    id: 'internet-resource',
    title: 'Internet Resource',
    links: [
      {
        title: 'HotMail',
        url: 'https://outlook.live.com/',
        text: 'Free e-mail accounts from Microsoft.',
      },
      {
        title: 'E-Bay',
        url: 'https://www.ebay.com/',
        text: 'The buy and sell all of the internet auctions, trades, and commerce. Accounts start with $10 of credit!',
      },
      {
        title: 'The Best Search Engine - Metacrawler',
        url: 'https://www.metacrawler.com/',
        text: 'Named the search engine of search engines. Metacrawler provides fast and efficient searching on multiple search engines like Google, Yahoo, Alta Vista, Excite, and more.',
      },
      {
        title: 'Priceline',
        url: 'https://www.priceline.com/',
        text: 'Name your price on airplane tickets, cars, mortgages, hotel rooms, and home equity loans!',
      },
    ],
  },
  {
    id: 'news-and-magazines',
    title: 'News And Magazines',
    links: [
      {
        title: 'CNN.com',
        url: 'https://www.cnn.com/',
        text: 'CNN.com is the best place for up to the minute news. Superb coverage of major world events as well as a link to local news.',
      },
      {
        title: 'New York Times',
        url: 'https://www.nytimes.com/',
        text: 'An eight page digest of the New York Times presenting the highlights of the front-page articles, the top foreign, national and business news, sports, results, the daily crossword puzzle, and a selection of editorials and commentaries.',
      },
      {
        title: 'The Newspaper Association of America',
        url: 'https://www.newsmediaalliance.org/',
        text: 'The Newspaper Association of America provides a large list of U.S. magazines with Web sites. Some contain the full content and back issues of the publication and others are little more than advertising brochures. Most contain information to help and appraiser looking for locational background.',
      },
      {
        title: 'Money Magazine',
        url: 'https://money.com/',
        text: 'Money Magazine online edition is a outstanding resource for tax, real estate, insurance and retirement information.',
      },
    ],
  },
  {
    id: 'software-links',
    title: 'Software Links',
    links: [
      {
        title: 'C/Net Software',
        url: 'https://www.cnet.com/',
        text: 'This is a huge search engine giving access to hundreds of thousands of programs plus demos, drivers, upgrades and patches.',
      },
      {
        title: 'Download.com',
        url: 'https://download.cnet.com/',
        text: 'A C/Net affiliated site offering shareware and freeware programs to download, including software, music, and games.',
      },
      {
        title: 'AVG Anti-Virus',
        url: 'https://www.avg.com/',
        text: 'AVG Anti-Virus FREE Edition is a well-known anti-virus protection tool. AVG Anti-Virus FREE is available free-of-charge to home users for the life of the product! Rapid virus database updates are available for the lifetime of the product, thereby providing the high-level of detection capability that millions of users around the world trust to protect their computers. AVG Anti-Virus FREE is easy-to-use and will not slow your system down (low system resource requirements).',
      },
      {
        title: 'Ad-Aware',
        url: 'http://www.lavasoft.com/',
        text: 'A download.com 5 star resource, Ad-Aware has the ability to scan your RAM, registry, hard drives, and external storage devices for known data-mining, advertising, and tracking components, usually referred to as spy ware. Ad-aware SE can easily clean your system, allowing you to maintain a higher degree of privacy while you surf the Web. Be warned that ad-aware may disable your file sharing software.',
      },
      {
        title: 'Ardamax Keylogger',
        url: 'https://www.ardamax.com/info_akll.html',
        text: "Ardamax Keylogger Lite is a free keystroke recorder that captures user's activity and saves it to a log file. The log file can be viewed as a text or web page. Use this tool to find out what is happening on your computer while you are away, maintain a backup of your typed data automatically or use it to monitor your kids. Also you can use it as a monitoring device for detecting unauthorized access.",
      },
      {
        title: 'Naomi Content Filtering',
        url: 'https://naomi.en.download.it/',
        text: 'Naomi is an Internet content filtering program, intended for families and parents in particular. It constantly monitors all Internet connections for inappropriate materials, and immediately closes down the browser if encountered. The programs considerations include obscene or violent contents; pornography in the form of images or texts, as well as sites that popularize drugs, gambling, terrorism, hate propaganda and more.',
      },
    ],
  },
  {
    id: 'education-links',
    title: 'Education Links',
    links: [
      {
        title: 'SavingForCollege.com',
        url: 'https://www.savingforcollege.com/',
        text: "Learn how to best save for your children's college education. Find out how 529 Plans and Coverdell Education Savings Accounts can help you save wisely.",
      },
      {
        title: 'New Clients, Inc.',
        url: 'https://www.newclientsinc.com/',
        text: 'The leader in client acquisition, practice management and practice sales.',
      },
    ],
  },
  {
    id: 'just-for-fun',
    title: 'Just For Fun',
    links: [
      {
        title: 'Investopedia Stock Market Simulation Game',
        url: 'https://www.investopedia.com/simulator/',
        text: (
          <>
            Sign up free and $100,000 of virtual cash is placed in your account. Build your portfolio with any stock that
            trades on a major North American exchange. Your account simulates all aspects of investing with an online
            brokerage and tracks what happens to your investments.
            <br />
            <br />
            Continue to test investment strategies and learn advanced trading techniques such as short selling, trading
            with margin, and buying options. You can even create your own groups and challenge your friends.
          </>
        ),
      },
      {
        title: 'Gazillionaire',
        url: 'https://www.lavamind.com/games/gazillionaire/',
        text: 'Try the free shareware version of Gazillionaire, the award-winning game of business strategy. Become a mogul or tycoon in this out-of-this-world economic simulation game and build a financial empire. Yahoo! Computer Life Magazine declares: "If you\'ve dreamed of becoming an extra-terrestrial Trump, Gazillionaire is the answer to your greedy little prayers."',
      },
    ],
  },
];
