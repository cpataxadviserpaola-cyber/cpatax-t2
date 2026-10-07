import GuideArticle, { Agencies, Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=92 (Investing In Mutual Funds: The Time-Tested
// Guidelines), word for word. Hyphens used as dashes are now dashes, the "Tip:"/"Caution:"/
// "Example:" lead-ins are the boxes' labels, and the organizations are shown as cards (their
// descriptions without the surrounding parentheses). The library's contents also list
// "Recommended Reading" and "Computer Programs," which have no text there, so they are left out.
// The SEC documents link goes to the SEC's home page.
// Address: /guides/life-events/getting-married/investing-in-mutual-funds (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const organizations = [
  {
    name: 'American Association of Individual Investors',
    website: 'www.aaii.com',
    text: 'Offers an annual guide to low-load mutual funds',
    lines: ['625 North Michigan Avenue', 'Chicago, IL 60611', 'Tel: 800-428-2244'],
  },
  {
    name: 'Investment Company Institute',
    website: 'www.ici.org',
    text: 'A trade association of fund companies that publishes an annual directory of mutual funds',
    lines: ['1401 H Street NW, Suite 1200', 'Washington, DC 20005', 'Tel: 202-326-5800'],
  },
  {
    name: 'Mutual Fund Education Alliance',
    website: 'www.mfea.com',
    text: 'Publishes an annual guide to low-cost mutual funds',
  },
];

const sections = [
  {
    id: 'choosing',
    title: 'How To Choose A Mutual Fund',
    body: (
      <>
        <p>
          Once you determine your asset allocation model, you can implement the recommended portfolio with mutual funds.
          You need only six to ten funds to achieve diversification and your asset allocation objectives, as opposed to
          having to buy many more individual securities to achieve the same results.
        </p>
        <Callout label="Caution">
          <p>
            Keep in mind that mutual funds ALWAYS carry investment risks. Some carry more risk than others; a higher
            rate of return typically involves a higher risk. don't buy a fund without knowing—and being willing to
            accept—the risk. The types of risks that attend a mutual fund depend on the type of fund. Risks are
            discussed later in the section on "Types of Mutual Funds and Their Varying Risk Factors."
          </p>
        </Callout>
        <p>
          Once you identify the asset classes that will be represented in your portfolio, it's time to select{' '}
          <em>specific funds</em> in those categories—i.e., funds that meet <em>your</em> investment goals. To choose
          wisely, it's necessary to assess:
        </p>
        <ul>
          <li>A fund's risk/reward history and characteristics, which should match your own financial profile;</li>
          <li>A fund's philosophy and investment style, which should match your own investment goals;</li>
          <li>A fund's costs, including loads and ongoing expenses; and</li>
          <li>The customer service available from the fund.</li>
        </ul>
        <Callout label="Tip">
          <p>
            Find out whether the fund will stop offering shares to the public once its assets have grown to a certain
            point (sometimes the case with small-cap funds).
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'recommendations',
    title: 'What About Recommendations?',
    body: (
      <p>
        Most sources of mutual fund recommendations are inadequate. They either depend solely on past performance or
        fail to take into account your particular needs. Newsletters and magazines, for example, often simply recommend
        last year's hot fund—which, even though it may remain hot for the current year, may be totally wrong for you.
      </p>
    ),
  },
  {
    id: 'performance',
    title: 'Comparing Performance',
    body: (
      <>
        <p>
          A fund's past performance is not as important as you might think. Advertisements, rankings, and ratings tell
          you how well a fund has performed in the past. But studies show that the future is often different. This
          year's "No. 1" fund can easily become next year's dog.
        </p>
        <Callout label="Tip">
          <p>
            Although past performance is not a reliable indicator of future performance, past <em>volatility</em> is a
            good indicator of future volatility.
          </p>
        </Callout>
        <p>Here are some tips for comparing fund performances:</p>
        <ul>
          <li>
            <em>Check the fund's total return</em>. You will find it in the Financial Highlights of the prospectus (near
            the front). Total return measures increases and decreases in the value of the investment over time, after
            subtracting costs. This is just one of many return measures.
          </li>
          <li>
            <em>Find out how the fund ranked in its investment category class</em>. There are various rating systems
            available to show how a fund ranked among its peers.
          </li>
          <li>
            <em>See how the total return has varied over the years</em>. The Financial Highlights in the prospectus
            show yearly total return for the most recent 10-year period. An impressive 10-year total return may be based
            on one spectacular year followed by many average years. Looking at year-to-year changes in total return is
            a good way to see how stable the fund's returns have been.
          </li>
          <li>
            <em>Check the fund's Sharpe ratio</em>. The Sharpe ratio is intended to give investors an understanding of
            the fund's performance <em>relative to the risk</em>. The Sharpe ratio is calculated by subtracting the
            average monthly return of the 90-day Treasury Bill—basically a risk-free return—from the average monthly
            return of the fund. The difference—the "excess" return—is then annualized and divided by the fund's annual
            standard deviation (a common measure of volatility).
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            Mathematical theory aside, the important point is that the higher the Sharpe ratio, the higher the fund's
            performance with less of a risk.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'costs',
    title: 'Comparing Costs',
    body: (
      <>
        <p>
          Costs are important because they lower your returns. A fund that has a sales load and high expenses will have
          to perform better than a low-cost fund, just to stay even.
        </p>
        <p>
          Find the fee table near the front of the fund's prospectus, where the fund's costs are laid out. You can use
          the fee table to compare the costs of different funds.
        </p>
        <p>The fee table breaks costs into two main categories:</p>
        <ul>
          <li>Sales loads and transaction fees (paid when you buy, sell or exchange your shares) and</li>
          <li>Ongoing expenses (paid while you remain invested in the fund).</li>
        </ul>

        <h3>Sales Loads</h3>
        <p>
          The first part of the fee table will tell you if the fund charges any sales loads. No-load funds by
          definition, do not charge sales loads. There are no-load funds in every major fund category. Even no-load
          funds have ongoing expenses, however, such as management fees.
        </p>
        <p>
          A sales load usually pays for commissions to the brokers who sell the fund's shares to you, as well as other
          marketing costs. Sales loads buy you a broker's services and advice; they do not assure superior performance.
        </p>
        <p>
          <em>Front-end load</em>: A front-end load is a sales charge you pay when you buy shares. This type of load,
          which by law cannot be higher than 8.5 percent of your investment—although in practice are often much
          less—reduces the amount of your investment in the fund.
        </p>
        <p>
          <em>Back-end load</em>: A back-end load (also called a deferred load) is a sales charge you pay when you sell
          or exchange your shares. It usually starts out at 5 or 6 percent for the first year and gets smaller each year
          after that until it reaches zero say, in year six or seven year of your investment.
        </p>
        <Callout label="Example">
          <p>
            You invest $1,000 in a mutual fund with a 6 percent back-end load that decreases to zero in the seventh year.
            Let's assume that the value of your investment remains at $1,000 for seven years. If you sell your shares
            during the first year, you will get back only $940 (the $60 will go to pay the sales charge). If you sell
            your shares during the seventh year, you will get back $1,000.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Many funds allow you to exchange your shares for those of another fund managed by the same adviser. The
            first part of the fee table will tell you if there is any exchange fee.
          </p>
        </Callout>

        <h3>Ongoing Expenses</h3>
        <p>
          The second part of the fee table tells you the kinds of ongoing expenses you will pay while you remain
          invested in the fund. It shows expenses as a percentage of the fund's assets, generally for the most recent
          fiscal year. Here, the table will tell you the management fee for managing the fund's portfolio, along with
          any other fees and expenses.
        </p>
        <Callout label="Caution">
          <p>
            Check the fee table to see if any part of a fund's fees or expenses has been waived. If so, the fees and
            expenses may increase suddenly when the waiver ends (the part of the prospectus after the fee table will
            tell you by how much).
          </p>
        </Callout>
        <p>
          High expenses do not assure superior performance. Higher-expense funds do not, on average, perform better
          than lower-expense funds. But there may be circumstances in which you decide it is appropriate to pay higher
          expenses. For example, you can expect to pay higher expenses for certain types of funds that require extra
          work by managers, such as international stock funds, which require sophisticated research.
        </p>
        <Callout label="Caution">
          <p>
            You may also pay higher expenses for funds that provide special services, like toll-free telephone numbers,
            check-writing and automatic investment programs.
          </p>
        </Callout>
        <p>
          A difference in expenses that may look small to you can make a big difference in the value of your investment
          over time.
        </p>
        <Callout label="Example">
          <p>
            You invest $1,000 in a fund, which yields an annual return of 5 percent before expenses. If the fund has
            expenses of 1.5 percent, after 20 years you would end up with roughly $2,012. If the fund has expenses of 0.5
            percent, you would end up with more than $2,455—a 22 percent difference. If your investment is $100,000
            instead of $1,000, that means a difference of more than $44,000.
          </p>
        </Callout>
        <p>
          <em>Rule 12b-1 fee</em>: One type of ongoing fee that is taken out of fund assets has come to be known as a
          Rule 12b-1 fee. It most often is used to pay commissions to brokers and other salespersons, and occasionally to
          pay for advertising and other costs of promoting the fund to investors. It usually is between 0.25 percent and
          1.00 percent of assets annually.
        </p>
        <p>
          Funds with back-end loads usually have higher Rule 12b-1 fees. If you are considering whether to pay a
          front-end load or a back-end load, think about how long you plan to stay in the fund. If you plan to stay in
          for six years or more, a back-end load will usually cost less than a front-end load.
        </p>
        <Callout label="Caution">
          <p>
            Yet, even if your back-end load has fallen to zero, you could pay more in Rule 12b-1 fees over time than if
            you paid a front-end load.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'philosophy',
    title: 'Comparing Investment Philosophy',
    body: (
      <>
        <p>Here are some suggestions for examining a fund's approach to investing.</p>
        <p>1. Determine the fund's overall investment objectives.</p>
        <Callout label="Tip">
          <p>
            Morningstar's system of rating mutual funds includes 40 investment objectives. This extensive list can be
            helpful in narrowing the comparison of funds' objectives. Morningstar's style boxes can also be used to
            compare funds' styles.
          </p>
        </Callout>
        <p>
          2. Determine whether the fund's portfolio matches its stated investment objectives. The fund should fully
          reveal how it invests.
        </p>
        <Callout label="Tip">
          <p>
            Morningstar's "style boxes" are extremely useful in determining (1) whether a fund's investment approach has
            a low, moderate, or high risk/return profile and (2) the types of securities invested in.
          </p>
        </Callout>
        <p>3. Determine whether the fund invests overseas.</p>
        <Callout label="Caution">
          <p>Generally, international equities are a longer-term, higher-risk investment.</p>
        </Callout>
        <p>4. For an equity fund, determine the industry sectors in which it's invested.</p>
        <p>5. For a bond fund, determine the years to maturity of its holdings and whether it holds any tax-exempt bonds.</p>
        <p>
          6. Find out how long the fund's management has been in place and whether one particular manager has been
          responsible for the success of the fund.
        </p>
        <Callout label="Caution">
          <p>If the manager is relatively new, this may add risk to the fund, unless the manager has had experience elsewhere.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'service',
    title: 'Comparing Customer Service',
    body: (
      <>
        <p>You'll want to find out what services the fund offers. Among the questions you should ask are:</p>
        <ol>
          <li>How long does it take to reach a representative?</li>
          <li>Which account options does the fund offer?</li>
          <li>How quickly are questions about returns or investments answered?</li>
        </ol>
      </>
    ),
  },
  {
    id: 'risks',
    title: 'Risk Factors In General',
    body: (
      <>
        <p>
          You take risks when you invest in any mutual fund. You may lose some or all of the money you invest (your
          principal) because the securities held by a fund go up and down in value. What you earn on your investment
          (dividends and interest) also may go up or down. The various types of risk are:
        </p>
        <ul>
          <li>
            <em>Volatility</em>: The unpredictability of changes in stock prices.
          </li>
          <li>
            <em>Interest-rate risk</em>: The fluctuation in bond prices due to interest rate changes.
          </li>
          <li>
            <em>Credit risk</em>: The likelihood that payments of bond interest and principal will not be made as
            promised.
          </li>
          <li>
            <em>Inflation risk</em>: The risk that the lowered purchasing power of the dollar will erode your return.
          </li>
        </ul>
        <p>
          Each kind of mutual fund has different risks and rewards. Generally, the higher the potential return, the
          higher the risk of loss. The following discussion of risk for the various types of funds is intended to aid
          you in choosing a fund that meets your requirements as an investor.
        </p>

        <h3>Money Market Fund Risks</h3>
        <p>
          Money market funds are relatively low risk compared to other mutual funds. They are limited by law to certain
          high-quality, short-term investments. They try to keep their net asset value (NAV) at a stable $1.00 per share.
        </p>
        <Callout label="Caution">
          <p>
            Contrary to popular belief, NAV may fall below $1.00 if the funds' investments perform poorly. Although
            investor losses have been rare, they are possible.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            Banks now sell mutual funds, some of which carry the bank's name. But mutual funds sold by banks, including
            money market funds, are not bank deposits. Don't confuse a "money market fund" with a "money market deposit
            account." The names are similar, but they are completely different:
          </p>
          <ul>
            <li>
              A <em>money market fund</em> is a type of mutual fund. It is not guaranteed, and comes with a prospectus.
            </li>
            <li>
              A <em>money market deposit account</em> is a bank deposit. It is guaranteed, and comes with a "Truth in
              Savings" form.
            </li>
          </ul>
        </Callout>
        <Callout label="Caution">
          <p>
            Many bank funds are just "private label" funds, i.e., run by a fund family for the bank. This adds an extra
            layer of cost.
          </p>
        </Callout>

        <h3>Bond Fund Risks</h3>
        <p>
          Bond funds (also called fixed-income funds) have higher risks than money market funds, but usually pay higher
          yields. Unlike money market funds, bond funds are not restricted to high-quality or short-term investments.
          Because there are many different types of bonds, bond funds can vary dramatically in their risks and rewards.
        </p>
        <p>
          Most bond funds have credit risk, the risk that companies or other issuers whose bonds are owned by the fund
          may fail to pay their bond holders. Some funds have little credit risk, however, such as those that invest in
          insured bonds or U.S. Treasury bonds. Keep in mind that nearly all bond funds have interest rate risk, which
          means that the market value of their bonds will go down when interest rates go up. Because of this, you can
          lose money in any bond fund, including those that invest only in insured bonds or Treasury bonds. Long-term
          bond funds invest in bonds with longer maturities (the length of time until the final payout). The net asset
          values (NAVs) of long-term bond funds can go up or down more rapidly than those of shorter-term bond funds.
        </p>
        <Callout label="Tip">
          <p>
            Morningstar's rating system uses specific times to maturity to distinguish between long-term, short-term and
            medium-term bonds. This system can help you choose the bond fund that is most suitable with regard to
            interest-rate risk.
          </p>
        </Callout>

        <h3>Stock Fund Risks</h3>
        <p>
          Stock funds (also called equity funds) generally involve more risk—volatility—than money market or bond funds,
          but they also offer the highest returns. A stock fund's value can rise and fall quickly over the short term,
          but historically stocks have performed better over the long term than other types of investments.
        </p>
        <p>
          Mutual fund rating companies use "beta" to measure risk. Beta measures a fund's price fluctuations relative to
          those of the whole market—that is, its sensitivity to market movements.
        </p>
        <p>
          Not all stock funds are the same. For example, growth funds focus on stocks that may not pay a regular dividend
          but have the potential for large capital gains. Others specialize in a particular industry segment such as
          technology stocks.
        </p>
        <p>
          The level of volatility in a stock fund depends on the fund's investments, e.g., small-cap growth stocks are
          more volatile than large-cap value stocks. The level of volatility is also affected by industry sector. Also,
          international stocks are generally more volatile than domestic stocks.
        </p>
        <p>
          The foregoing generalizations are intended only as such. It is important, when examining a fund for
          risk/reward characteristics, to analyze each fund on a case-by-case basis.
        </p>
        <Callout label="Caution">
          <p>
            Funds that invest in derivatives face special risks. Derivatives—which come in many different types and have
            many different uses—are financial instruments whose performance is derived, at least in part, from the
            performance of an underlying asset, security or index. Their value can be affected dramatically by even
            small market movements, sometimes in unpredictable ways. However, they do not necessarily increase risk, and
            may in fact reduce risk. A fund's prospectus will disclose how it may use derivatives. You may also want to
            call a fund and ask how it uses these instruments.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'summary',
    title: 'Summary',
    body: (
      <>
        <p>
          There are a number of sources of information that you should explore before investing in mutual funds. The
          most important of these is the prospectus, which is the fund's selling document and contains information
          about costs, risks, past performance and the fund's investment goals. Request the prospectus from the fund or
          from a financial professional if you are using one. Read the prospectus, and exercise your judgment carefully,
          before you invest.
        </p>
        <p>
          Read the sections of the prospectus that discuss the risks, investment goals and investment policies of the
          fund you are considering. Funds of the same type can have significantly different risks, objectives and
          policies.
        </p>
        <p>
          All mutual funds must prepare a Statement of Additional Information (SAI, also called Part B of the
          prospectus). It explains a fund's operations in greater detail than the prospectus. If you ask, the fund must
          send you an SAI.
        </p>
        <p>
          You can get a clearer picture of a fund's investment goals and policies by reading its annual and semi-annual
          reports to shareholders. If you ask, the fund will send you these reports. You can also research funds at most
          libraries or by using an on-line service.
        </p>
      </>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Non-Profit Agencies',
    body: (
      <>
        <h3>
          <a href="https://www.sec.gov" {...external}>
            The SEC
          </a>
        </h3>
        <p>
          The SEC has public reference rooms at its headquarters in Washington, D.C., and at its Northeast and Midwest
          Regional offices. Copies of the text of documents filed in these reference rooms may be obtained by visiting
          or writing the Public Reference Room (at a standard per page reproduction rate) or through private contractors
          (who charge for research and/or reproduction). Other sources of information filed with the SEC include public
          or law libraries, securities firms, financial service bureaus, computerized on-line services, and the
          companies themselves. Most companies whose stock is traded over the counter or on a stock exchange must file
          "full disclosure" reports on a regular basis with the SEC. The annual report (Form 10-K) is the most
          comprehensive of these. It contains a narrative description and statistical information on the company's
          business, operations, properties, parents, and subsidiaries; its management, including their compensation and
          ownership of company securities: and significant legal proceedings which involve the company. Form 10-K also
          contains the audited financial statements of the company (including a balance sheet, an income statement, and
          a statement of cash flow) and provides management's discussion of business operations and prospects for the
          future. Quarterly financial information on Form 8-K may be required as well.
        </p>
        <p>
          Anyone may obtain copies (at a modest copying charge) of any corporate report and most other documents filed
          with the Commission by visiting the{' '}
          <a href="https://www.sec.gov" {...external}>
            SEC website
          </a>
        </p>
        <Agencies agencies={organizations} />
      </>
    ),
  },
];

export default function MutualFunds() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Investing In Mutual Funds"
      title={
        <>
          Investing In Mutual Funds: <em>The Time-Tested Guidelines</em>
        </>
      }
      lead="Mutual funds are an excellent way to invest in stocks, bonds and other securities."
      sections={sections}
    >
      <p>They are a good choice of investment because:</p>
      <ul>
        <li>
          They are managed by professional money managers, so most of the investment research is done for you (most
          investors don't have the time or know-how to do all the necessary research).
        </li>
        <li>
          You diversify your investment risk by owning shares in a mutual fund, instead of buying individual stocks or
          bonds directly.
        </li>
        <li>
          Transaction costs are often lower than what you would pay if you invested in individual securities (the mutual
          fund buys and sells large amounts of securities at a time).
        </li>
      </ul>
      <p>Before getting into our discussion of mutual funds, there are three important points to keep in mind:</p>
      <ol>
        <li>
          Past performance is not a reliable indicator of future performance. Beware of dazzling performance claims.
          Many publications recommend mutual funds based only on past performance.
        </li>
        <li>
          Mutual funds are not guaranteed or insured by any bank or government agency. Even if you buy through a bank and
          the fund carries the bank's name, there is no guarantee. You can lose your investment.
        </li>
        <li>
          All mutual funds have costs that lower your investment returns. Thus, even an index fund that mirrors a broad
          market index cannot perform as well as its mirror index, since the fund has transaction and operating costs
          that the index does not.
        </li>
      </ol>
    </GuideArticle>
  );
}
