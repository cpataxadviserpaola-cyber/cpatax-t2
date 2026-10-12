import GuideArticle, { Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/investment-strategies.php?item=95 (Penny Stocks: How To Investigate Them
// and Avoid the Traps), word for word. The library's opening paragraph is the banner's text
// (`lead`), and its table of contents is the guide's contents list. Hyphens and "--" used as dashes
// are dashes, and the note, tip and caution boxes keep the library's labels. Changes in layout only:
// the eight stock markets, run together with the list before them on the library, are a list
// under "It lists its securities on the following stock markets:"; lists the library splits in two
// with nothing between them are one list; and the two fraud schemes, set apart on the library
// without a label, are paragraphs. The EDGAR link is https, and the state regulators link goes to
// NASAA's home page. Back-to-top anchors omitted. Investment Strategies has no topic pages, so the
// breadcrumb ends at the category.
// Address: /guides/investment-strategies/penny-stocks (articlePages in src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const stockMarkets = [
  'American Stock Exchange',
  'Boston Stock Exchange',
  'Cincinnati Stock Exchange',
  'Chicago Stock Exchange',
  'NASDAQ',
  'New York Stock Exchange',
  'Pacific Exchange',
  'Philadelphia Stock Exchange',
];

const sections = [
  {
    id: 'what-is-a-microcap-stock',
    title: 'What is a Microcap Stock?',
    body: (
      <p>
        The term "microcap stock" applies to companies with low or "micro" capitalizations—meaning the total value of the
        company's stock. Microcap companies typically have limited assets. For example, in recent cases where the SEC
        suspended trading in microcap stocks, the average company had only $6 million in net tangible assets—and nearly
        half had less than $1.25 million. Microcap stocks tend to be low priced and trade in low volumes.
      </p>
    ),
  },
  {
    id: 'where-microcap-stocks-trade',
    title: 'Where do Microcap Stocks Trade?',
    body: (
      <>
        <p>
          Many microcap stocks trade in the "over-the-counter" (OTC) market and are quoted on OTC systems, such as the OTC
          Bulletin Board (OTCBB) or the "Pink Sheets."
        </p>
        <ul>
          <li>
            <strong>OTC Bulletin Board.</strong> The OTCBB is an electronic quotation system that displays real-time
            quotes, last-sale prices, and volume information for many OTC securities not listed on the NASDAQ or a national
            securities exchange. Brokers who subscribe to the system can use the OTCBB to look up prices or enter quotes for
            OTC securities.
          </li>
        </ul>
        <Callout label="Caution">
          <p>
            Although the FINRA oversees the OTCBB, the OTCBB is not part of the NASDAQ. Wrongdoers often claim that an
            OTCBB company is a NASDAQ company to mislead investors.
          </p>
        </Callout>
        <ul>
          <li>
            <strong>The "Pink Sheets."</strong> The Pink Sheets—named for the color of paper they've historically been
            printed on—are a weekly publication of a company called the National Quotation Bureau. They are updated daily
            electronically. Brokers who subscribe to the Pink Sheets can find out the names and telephone numbers of the
            "market makers" in various OTC stocks—meaning the brokers who commit to buying and selling those OTC
            securities. Unless your broker has the Pink Sheets or you contact the market makers directly, you'll have a
            difficult time finding price information for most stocks quoted in the Pink Sheets.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-microcap-stocks-differ',
    title: 'How Are Microcap Stocks Different From Other Stocks?',
    body: (
      <>
        <p>Microcap stocks differ from other stocks in a number of ways:</p>
        <p>
          <em>Lack of Public Information.</em> The biggest difference between a microcap stock and other stocks is the
          amount of reliable, publicly available information about the company. Larger public companies file reports with
          the SEC that any investor can get for free from the SEC's website. Professional stock analysts regularly research
          and write about larger public companies, and it's easy to find larger companies' stock prices. In contrast,
          information about microcap companies can be extremely difficult to find, making them more vulnerable to
          investment fraud schemes.
        </p>
        <Callout label="Note">
          <p>
            The SEC has proposed new rules that will increase the amount of information brokers must gather about microcap
            companies before quoting prices for their stocks in the OTC market.
          </p>
        </Callout>
        <p>
          <em>No Minimum Listing Standards.</em> Companies that trade their stocks on major exchanges and in the NASDAQ
          must meet minimum listing standards. For example, they must have certain minimums when it comes to net assets,
          and minimum numbers of shareholders. In contrast, companies on the OTCBB or the Pink Sheets do not have to meet
          any minimum standards.
        </p>
        <p>
          <em>Risk.</em> While all investments involve risk, microcap stocks are among the most risky. Many microcap
          companies are new, with no track record. Some of these companies have no assets or operations. Others have
          products and services that are still in development or have yet to be tested in the market.
        </p>
      </>
    ),
  },
  {
    id: 'companies-that-file',
    title: 'Which Companies File Reports With the SEC?',
    body: (
      <>
        <p>
          In general, the federal securities laws require all but the smallest of public companies to file reports with
          the SEC. A company can become "public" in one of two ways—by issuing securities in an offering or transaction
          that's registered with the SEC or by registering the company and its outstanding securities with the SEC. Both
          types of registration trigger ongoing reporting obligations, meaning the company must file periodic reports that
          disclose important information to investors about its business, financial condition, and management.
        </p>
        <p>
          This information is a treasure trove for investors: it tells you whether a company is making money or losing
          money and why.
        </p>
        <Callout label="Tip">
          <p>
            You'll find this information in the company's quarterly reports on Form 10-Q, annual reports (with audited
            financial statements) on Form 10-K, and periodic reports of significant events on Form 8-K.
          </p>
        </Callout>
        <p>A company must file reports with the SEC if:</p>
        <ul>
          <li>It has 500 or more investors and $10 million or more in assets; or</li>
          <li>
            It lists its securities on the following stock markets:
            <ul>
              {stockMarkets.map((market) => (
                <li key={market}>{market}</li>
              ))}
            </ul>
          </li>
        </ul>
        <p>Currently, only about half of the 6,500 companies whose securities are quoted on the OTCBB file reports with the SEC.</p>
        <Callout label="Note">
          <p>
            In January 1999, the SEC approved a new FINRA rule allowing the FINRA to require that all OTCBB companies file
            updated financial reports with the SEC or with their banking or insurance regulators. The new rule now applies to
            all companies on the OTCBB. Companies refusing to file with the SEC or their banking or insurance regulators
            cannot remain on the OTCBB.
          </p>
        </Callout>
        <p>
          With few exceptions, companies that file reports with the SEC must do so electronically using the SEC's EDGAR
          system. EDGAR stands for electronic data gathering and retrieval. The EDGAR database is available on the SEC's
          Web site at{' '}
          <a href="https://www.sec.gov" {...external}>
            www.sec.gov
          </a>
          . You'll find many corporate filings in the EDGAR database, including annual and quarterly reports and
          registration statements. Any investor can access and download this information for free from the SEC's Web site.
        </p>
        <Callout label="Caution">
          <p>As with any information, SEC filings should be read with a questioning and critical mind.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'companies-that-dont-file',
    title: "Which Companies Don't Have to File Reports With the SEC?",
    body: (
      <p>
        Smaller companies—those with less than $10 million in assets—generally do not have to file reports with the SEC.
        But some smaller companies, including microcap companies, may choose voluntarily to register their securities with
        the SEC. As described above, companies that register with the SEC must also file quarterly, annual, and other
        reports.
      </p>
    ),
  },
  {
    id: 'offering-requirements',
    title: 'Offering Requirements and Exemptions',
    body: (
      <>
        <p>
          Any company that wants to offer or sell securities to the public must either register with the SEC or meet an
          exemption. Here are two of the most common exemptions that many microcap companies use:
        </p>
        <ul>
          <li>
            <em>"Reg. A" Offerings.</em> Companies raising less than $5 million in a 12-month period may be exempt from
            registering their securities under a rule known as Regulation A. Instead of filing a registration statement
            through EDGAR, these companies need only file a printed copy of an "offering circular" with the SEC containing
            financial statements and other information.
          </li>
          <li>
            <em>"Reg. D" Offerings.</em> Some smaller companies offer and sell securities without registering the
            transaction under an exemption known as Regulation D. Regulation D exempts from registration companies that seek
            to raise less than $1 million dollars in a twelve-month period. It also exempts companies seeking to raise up to
            $5 million, as long as the companies sell to 35 or fewer individuals or any number of "accredited investors" who
            must meet high net worth or income standards. In addition, Regulation D exempts some larger private offerings of
            securities. While companies claiming an exemption under Reg. D don't have to register or file reports with the
            SEC, they must still file what's known as a "Form D" within a few days after they first sell their securities.
            Form D is a brief notice that includes the names and addresses of owners and stock promoters, but little other
            information about the company.
          </li>
        </ul>
        <Callout label="Tip">
          <p>You may be able to find out more about Reg. D companies by contacting your state securities regulator.</p>
        </Callout>
        <p>
          Unless they otherwise file reports with the SEC, companies that are exempt from registration under Reg. A, Reg.
          D, or another offering exemption, do not have to file reports with the SEC.
        </p>
      </>
    ),
  },
  {
    id: 'why-public-information-matters',
    title: 'Why Public Information Is So Important?',
    body: (
      <>
        <p>
          Many of the microcap companies that don't file reports with the SEC are legitimate businesses with real products
          or services. But the lack of reliable, readily available information about some microcap companies can open the
          door to fraud. It's easier to manipulate a stock when there's little or no information available about the
          company.
        </p>
        <p>Microcap fraud depends on spreading false information. Here's how some perpetrators carry out their scams:</p>
        <ul>
          <li>
            <em>Questionable Press Releases.</em> Con artists often issue press releases that contain exaggerations or lies
            about the microcap company's sales, acquisitions, revenue projections, or new products or services.
          </li>
          <li>
            <em>Paid Promoters.</em> Some microcap companies pay stock promoters to recommend or "tout" the microcap stock in
            supposedly independent and unbiased investment newsletters, research reports, or radio and television shows. The
            federal securities laws require the newsletters to disclose who paid them, the amount, and the type of payment.
            But many con artists fail to do so and mislead investors into believing they are receiving independent advice.
          </li>
          <li>
            <em>Internet Fraud.</em> Con artists often distribute junk e-mail or "spam" over the Internet to spread false
            information quickly and cheaply about a microcap company to thousands of potential investors. They also use
            aliases on Internet bulletin boards and chat rooms to hide their identities and post messages urging investors
            to buy stock in microcap companies based on supposedly "inside" information about impending developments at the
            companies.
          </li>
          <li>
            <em>"Boiler Rooms"</em> and Cold Calling. Dishonest brokers set up "boiler rooms" where a small army of
            high-pressure salespeople use banks of telephones to make cold calls to as many potential investors as possible.
            These strangers hound investors to buy "house stocks"—stocks that the firm buys or sells as a market maker or
            has in its inventory.
          </li>
        </ul>
        <Callout label="Tip">
          <p>Never buy stock in response to a cold call.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'fraud-schemes',
    title: 'Some Common Penny Stock Fraud Schemes',
    body: (
      <>
        <p>Microcap fraud schemes can take a variety of forms. Here's a description of the two most common:</p>
        <p>
          <em>The Classic "Pump and Dump" Scheme.</em> It's common to see messages posted on the Internet that urge readers
          to buy a stock quickly or to sell before the price goes down, or a telemarketer will call using the same sort of
          pitch. Often the promoters will claim to have "inside" information about an impending development or to use an
          "infallible" combination of economic and stock market data to pick stocks. In reality, they may be company
          insiders or paid promoters who stand to gain by selling their shares after the stock price is pumped up by the
          buying frenzy they create. Once these con artists sell their shares and stop hyping the stock, the price typically
          falls, and investors lose their money.
        </p>
        <p>
          <em>The Off-Shore Scam.</em> Under a rule known as "Regulation S," companies do not have to register stock they
          sell outside the United States to foreign or "off-shore" investors. In the typical off-shore scam, an unscrupulous
          microcap company sells unregistered Reg. S stock at a deep discount to con artists posing as foreign investors.
          These con artists then sell the stock to U.S. investors at inflated prices, pocketing huge profits, which they
          share with the microcap company insiders. The flood of unregistered stock into the U.S. eventually causes the
          price to plummet, leaving unsuspecting U.S. investors with enormous losses.
        </p>
        <Callout label="Note">
          <p>The SEC recently strengthened Reg. S to make this type of fraud harder to conduct.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'getting-information',
    title: 'How Do I Get Information About Microcap Companies?',
    body: (
      <>
        <p>
          If you're working with a broker or an investment adviser, you can ask your investment professional if the company
          files reports with the SEC and to get you written information about the company and its business, finances, and
          management. Be sure to carefully read the prospectus and the company's latest financial reports.
        </p>
        <p>You can also get information on your own from these sources:</p>
        <ul>
          <li>
            <em>From the company.</em> Ask the company if it is registered with the SEC and files reports with us. If the
            company is small and unknown to most people, you should also call your state securities regulator to get
            information about the company, its management, and the brokers or promoters who've encouraged you to invest in
            the company.
          </li>
          <li>
            <em>From the SEC.</em> A great many companies must file their reports with the SEC. Using the EDGAR database,
            you can find out whether a company files with the SEC, and get any reports you're interested in. For companies
            that do not file on EDGAR, check with the SEC's Public Reference Room to see whether the company has filed an
            offering circular under Reg. A.
          </li>
          <li>
            <em>From your state securities regulator.</em> We strongly urge you to contact your state securities regulator
            to find out whether they have information about a company and the people behind it. Look in the government
            section of your phone book or visit the website of the{' '}
            <a href="https://www.nasaa.org/" {...external}>
              North American Securities Administrators Association
            </a>{' '}
            to get the relevant name and phone number. Even though the company does not have to register its securities
            with the SEC, it may have to register them with your state. Your regulator will tell you whether the company has
            been legally cleared to sell securities in your state.
          </li>
          <li>
            <em>From other government regulators.</em> Many companies, such as banks, do not have to file reports with the
            SEC. But banks must file updated financial information with their banking regulators.
          </li>
          <li>
            <em>From reference books and commercial databases.</em> Visit your local public library or the nearest law or
            business school library. You'll find many reference materials containing information about companies. You can
            also access commercial databases for more information about the company's history, management, products or
            services, revenues, and credit ratings. But there are a number of commercial resources you may consult,
            including: Bloomberg, Dun &amp; Bradstreet, Hoover's Profiles, Lexis-Nexis, and Standard &amp; Poor's Corporate
            Profiles.
          </li>
          <li>
            <em>The Secretary of State Where the Company Is Incorporated.</em> Contact the secretary of state where the
            company is incorporated to find out whether the company is a corporation in good standing. You may also be able
            to obtain copies of the company's incorporation papers and any annual reports it files with the state.
          </li>
        </ul>
        <Callout label="Caution">
          <p>
            If you've been asked to invest in a company but you can't find any record that the company has registered its
            securities with the SEC or your state, or that it's exempt from registration, call or write your state's
            securities regulator or the SEC immediately with all the details. You may have come face to face with a scam.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'before-investing',
    title: 'Steps You Should Take Before Investing',
    body: (
      <>
        <p>
          To invest wisely and avoid investment scams, research each investment opportunity thoroughly and ask questions.
          These simple steps can make the difference between profits and losses:
        </p>
        <ol>
          <li>Find out whether the company has registered its securities with the SEC or your state's securities regulators.</li>
          <li>Make sure you understand the company's business and its products or services.</li>
          <li>
            Read the most recent reports the company has filed with its regulators and pay attention to the company's
            financial statements, particularly if they are not audited or not certified by an accountant. If the company
            does not file reports with the SEC, be sure to ask your broker for what's called the "Rule 15c2-11 file" on the
            company. That file will contain important information about the company.
          </li>
          <li>
            Check out the people running the company with your state securities regulator, and find out if they've ever
            made money for investors before. Also ask whether the people running the company have had run-ins with the
            regulators or other investors.
          </li>
          <li>
            Make sure the broker and his or her firm are registered with the SEC and licensed to do business in your state.
            And ask your state securities regulator whether the broker and the firm have ever been disciplined or have
            complaints against them.
          </li>
        </ol>
        <p>Also, watch out for these "red flags":</p>
        <ul>
          <li>
            <em>SEC Trading Suspensions.</em> The SEC has the power to suspend trading in any stock for up to 10 days when it
            believes that information about the company is inaccurate or unreliable. Think twice before investing in a
            company that's been the subject of an SEC trading suspension.
          </li>
          <li>
            <em>High Pressure Sales Tactics.</em> Beware of brokers who pressure you to buy before you have a chance to think
            about and investigate the "opportunity." Dishonest brokers may try to tell you about a "once-in-a-lifetime"
            opportunity or one that's based on "inside" or "confidential" information. Don't fall for brokers who promise
            spectacular profits or "guaranteed" returns. These are the hallmarks of fraud. If the deal sounds too good to be
            true, then it probably is.
          </li>
          <li>
            <em>Assets Are Large But Revenues Are Small.</em> Microcap companies sometimes assign high values on their
            financial statements to assets that have nothing to do with their business. Find out whether there's a valid
            explanation for low revenues, especially when the company claims to have large assets.
          </li>
          <li>
            <em>Odd Items in the Footnotes to the Financial Statements.</em> Many microcap fraud schemes involve unusual
            transactions among individuals connected to the company. These can be unusual loans or the exchange of
            questionable assets for company stock, which may be discussed in the footnotes.
          </li>
          <li>
            <em>Unusual Auditing Issues.</em> Be wary when a company's auditors have refused to certify the company's
            financial statements or if they've stated that the company may not have enough money to continue operating. Also
            question any change of accountants.
          </li>
          <li>
            <em>Insiders Own Large Amounts of the Stock.</em> In many microcap fraud cases—especially "pump and dump"
            schemes—the company's officers and promoters own significant amounts of the stock. When one person or group
            controls most of the stock, they can more easily manipulate the stock's price at your expense. You can ask your
            broker or the company whether one person or group controls most of the company's stock, but if the company is the
            subject of a scam, you may not get an honest answer.
          </li>
        </ul>
        <Callout label="Caution">
          <p>Don't deal with brokers who refuse to provide you with written information about the investments they're promoting.</p>
        </Callout>
        <Callout label="Caution">
          <p>Never tell a cold caller your social security number or numbers for your banking and securities accounts.</p>
        </Callout>
        <Callout label="Caution">
          <p>Be extra wary if someone you don't know and trust recommends foreign investments.</p>
        </Callout>
      </>
    ),
  },
];

export default function PennyStocks() {
  return (
    <GuideArticle
      category="investment-strategies"
      page="Penny Stocks"
      title={
        <>
          Penny Stocks: <em>How To Investigate Them and Avoid the Traps</em>
        </>
      }
      lead={`Information is the investor's best tool when it comes to investing wisely. But accurate information about "microcap stocks"—low-priced stocks issued by the smallest of companies, often called "penny stocks"—may be difficult to find. Many microcap companies do not file financial reports with the SEC, so it's hard for investors to get the facts about the company's management, products, services, and finances. When reliable information is scarce, wrongdoers can easily spread false information about microcap companies, making profits while creating losses for unsuspecting investors.`}
      sections={sections}
    >
      <p>
        This Financial Guide gives you the basics about microcap or "penny" stocks, discusses how to find information on
        them, and points out what "red flags" to watch out for.
      </p>
    </GuideArticle>
  );
}
