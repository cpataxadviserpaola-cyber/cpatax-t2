import GuideArticle, { Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/investment-strategies.php?item=17 (Stocks: Frequently Asked Questions),
// word for word. Each question is worded as in the library's answers, not its table of contents
// ("...Over-the-Counter Trades and Stock-Exchange Trades?" there). The library's page has no
// introduction, so the banner's opening line (`lead`) is written for this site, as on the other FAQ
// pages. The tip box keeps the library's label. Dashes the library lost are back, with no words
// changed: "an odd lot—say 175 shares—will be treated", "at one location—the floor of the
// exchange", "No matter how you buy a fund—through ... the mail—bond funds" and "the federal
// government—primarily through the Securities and Exchange Commission—and"; "in addition" after a
// full stop is "In addition". "bond funds" in the answer on mutual fund insurance is as the library
// has it. Back-to-top anchors omitted. Investment Strategies has no topic pages, so the breadcrumb
// ends at the category.
// Address: /guides/investment-strategies/stocks-faq (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'how-stocks-are-traded',
    title: 'How are Stocks Traded?',
    body: (
      <>
        <p>
          Generally, stocks are traded in blocks or multiples of 100 shares, which are called round lots. An amount of
          stock consisting of fewer than 100 shares is said to be an odd lot.
        </p>
        <p>
          On an exchange, an order that involves both a round lot and an odd lot—say 175 shares—will be treated as two
          different trades and may be executed at different prices.
        </p>
        <p>
          In the financial world, a trade is jargon for buy and sell. Your broker will charge you a different commission on
          each trade, and will confirm each of them separately.
        </p>
        <p>
          These distinctions do not generally apply to trades executed in the OTC (Over-the-Counter) market. OTC stocks
          are not traded on a formal exchange such as New York Stock Exchange (NYSE) or the American Stock Exchange (AMEX).
        </p>
      </>
    ),
  },
  {
    id: 'exchange-vs-otc',
    title: 'What are the Differences between Stock Exchange Trades and Over-the-Counter Trades?',
    body: (
      <>
        <p>
          To be traded on an exchange such as the NYSE or AMEX, the issuing company must meet the exchange's listing
          standards; these may include requirements on the company's assets, number of shares publicly held, and number of
          stockholders. Organized markets for other instruments, including standardized options, impose similar
          restrictions.
        </p>
        <p>
          The National Association of Securities Dealers' Automated Quotation System (NASDAQ), operated by the Financial
          Industry Regulatory Authority (FINRA), is considered a stock exchange. Like the exchanges, NASDAQ has certain
          listing standards which must be met for securities to be traded in that market.
        </p>
        <p>
          Many securities are not traded on an exchange because the issuing companies are too small to meet exchange
          requirements. Instead, they are traded Over-the-Counter or OTC by broker-dealers negotiating directly with each
          other via computer and phone.
        </p>
        <p>
          Investors who buy or sell securities on an exchange or over the counter usually will do so with the aid of a
          broker-dealer firm. The registered representative is the link between the investor and the traders and dealers
          who actually buy and sell securities on the floor of the exchange or elsewhere.
        </p>
        <p>
          Market prices for stocks traded over the counter and for those traded on exchanges are established in somewhat
          different ways. The exchanges centralize trading in each security at one location—the floor of the exchange.
          There, auction principles of trading establish the market price of a security according to the current buying
          and selling interests. If such interests do not balance, designated floor members known as specialists are
          expected to step in to buy or sell for their own account, to a reasonable degree, as necessary to maintain an
          orderly market.
        </p>
      </>
    ),
  },
  {
    id: 'insurance',
    title: 'Are My Mutual Fund Investments Protected by Insurance?',
    body: (
      <>
        <p>
          There are no guarantees for investors. No matter how you buy a fund—through a brokerage firm, a bank, an
          insurance agency, a financial planning firm, or directly through the mail—bond funds, unlike bank deposits, are
          not insured or guaranteed by the Federal Deposit Insurance Corporation or any other government agency. Nor are
          they guaranteed by the bank or other financial institution through which you make your investment. Mutual funds
          involve investment risk, including the possible loss of principal. Conversely, investment risk always includes
          the potential for greater reward.
        </p>
        <p>
          Even though mutual funds are not insured, there are some protections. Mutual funds are highly regulated by both
          the federal government—primarily through the Securities and Exchange Commission—and each of the state
          governments.
        </p>
        <p>
          For example, all funds must meet certain operating standards, observe strict anti-fraud rules, and disclose
          specific information to potential investors. After you invest, funds must provide you with reports at least twice
          a year that describe how the fund fared during the period covered.
        </p>
      </>
    ),
  },
  {
    id: 'how-securities-are-held',
    title: 'How are Securities Held?',
    body: (
      <>
        <p>
          Today, debt securities are held in electronic book-entry form, but in the past were issued as paper
          certificates. Ownership is transferred via computer rather than via actual transfer of paper certificates,
          reducing the possibility of loss, theft, or mutilation of the certificates.
        </p>
        <p>
          There are still, however, many securities that are in certificate form. For example, you may have inherited stock
          certificates in paper form from a grandparent or other older relatives. Certificates representing your ownership
          of stocks or bonds are valuable documents and should be kept in a safe place. If a certificate is lost or
          destroyed, it may prove time-consuming and costly to obtain a replacement. Furthermore, some securities
          certificates may not be replaceable at all.
        </p>
      </>
    ),
  },
  {
    id: 'preferred-vs-common',
    title: 'What are the Differences between Preferred Stock and Common Stock?',
    body: (
      <p>
        Stocks may be designated as common stock, which is the most widely known form, or as preferred stock. Preferred
        shareholders have more of a stake in the company's assets and earnings and when dividends are issued, they are paid
        before shareholders of common stock. In addition, when you hold preferred stock you receive dividend payouts at a
        regular interval and generally have a stated dividend while common stock dividends are based on company
        performance. Shareholders with common stock may or may not receive a dividend and are last in line to be paid when
        a company goes belly up and is liquidated or reorganized in bankruptcy.
      </p>
    ),
  },
  {
    id: 'restricted-securities',
    title: 'What are Restricted Securities?',
    body: (
      <p>
        Some stocks are designated as "restricted" or "unregistered" because they were originally issued in a private sale
        or other transaction where they were not registered with the SEC. Restricted or unregistered securities may not be
        freely resold unless a registration statement is filed with the SEC or unless an exemption under the law permits
        resale.
      </p>
    ),
  },
  {
    id: 'foreign-stocks',
    title: 'How Can Foreign Stocks Be Bought?',
    body: (
      <>
        <p>
          Foreign corporations that sell securities in the United States must register those securities with the SEC. They
          are generally subject to the same rules and regulations that apply to securities of U.S. companies, although the
          nature of information foreign companies makes available to investors may be somewhat different.
        </p>
        <p>
          U.S. investors who are interested in foreign securities may also purchase American Depositary Receipts (ADRs).
          These are negotiable receipts, registered in the name of a U.S. citizen, which represent a specific number of
          shares of a foreign corporation. Denominations are in U.S. dollars and the security is held by a U.S. financial
          institution overseas. Listed on either the NYSE, AMEX or NASDAQ, ADRs are an excellent way to buy shares in a
          foreign company, but keep in mind that there are still risks associated with doing so.
        </p>
      </>
    ),
  },
  {
    id: 'drips',
    title: 'What are Dividend Reinvestment Plans (DRIPs)?',
    body: (
      <>
        <p>
          Dividend reinvestment plans, often referred to as DRIPs or DRPs, are associated with company-sponsored plans, but
          may also be purchased through a broker, and offer opportunities to make small, regular cash investments in
          participating companies without paying prohibitive transaction fees. Further, all or a part of your dividends can
          be reinvested and used to purchase more shares, although some plans offer the option to receiving dividends by
          check.
        </p>
        <Callout label="Tip">
          <p>
            Treat your decision to enroll in a DRIP just as seriously as you would a decision to invest in a company. Before
            investing, subject the company to your usual research and analysis.
          </p>
        </Callout>
        <p>
          Many U.S. companies have direct stock purchase programs that allow investors to buy a company's shares directly
          from the company instead of using a broker. To enroll in the DRIP, contact the transfer agent or the company's
          shareholder relations department, and ask for an enrollment form. Then return the form, usually along with your
          first optional cash investment, to the company.
        </p>
        <p>
          Once you are enrolled, you can invest more money directly through the company's transfer agent. Many companies
          offer an automatic investment service, that is, they will automatically withdraw a pre-set amount from your bank
          account to make optional cash investments. There may be a fee for this service.
        </p>
        <p>
          Direct stock purchase plans cost an investor less, since there is no broker commission to pay, and often no fee.
          Some programs have automatic investment options, which will debit a set amount each month from an investor's
          bank account.
        </p>
        <p>
          Dividend reinvestment isn't mandatory. Investors can receive dividend payments, and they can be automatically
          deposited in a bank account. Some companies that offer direct-purchase programs do not pay dividends.
        </p>
        <p>
          As with anything else, there are positives and negatives. The main drawback associated with DRIPs is that
          calculation of capital-gains taxes becomes complex when dividends have been reinvested over the years, and lots
          have been bought at varying prices. This can be remedied by carefully keeping track of the cost basis of shares
          when dividends are reinvested. Further, investors who invest through an IRA need not deal with the problem of
          calculating capital gains taxes at all. In addition, the dividends are taxable income even though you reinvest
          them.
        </p>
      </>
    ),
  },
];

export default function StocksFaq() {
  return (
    <GuideArticle
      category="investment-strategies"
      page="Stocks: Frequently Asked Questions"
      title={
        <>
          Stocks: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about how stocks are traded, exchanges and over-the-counter markets, how securities are held, preferred and common stock, foreign stocks, and dividend reinvestment plans."
      sections={sections}
    />
  );
}
