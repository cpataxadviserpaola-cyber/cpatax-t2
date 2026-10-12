import GuideArticle, { Callout, FigureTable } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/investment-strategies.php?item=15 (Bonds: Frequently Asked Questions),
// word for word. The library's page has no introduction, so the banner's opening line (`lead`) is
// written for this site, as on the other FAQ pages. The bold "Issuing Organization" and "Maturity"
// lead-ins are subheadings, the two tables are tables here, and the tip, note and example boxes
// keep the library's labels. Moody's has no rating for a bond in default, shown on the library as
// "__" and here as a dash. "maturates", "are issued denominations", "Treasury notes with that
// mature", the "Income (Bond)" row (the same as the municipal bond row below it) and the advice
// to call the Federal Reserve are as the library has them. Back-to-top anchors omitted. Investment
// Strategies has no topic pages, so the breadcrumb ends at the category.
// Address: /guides/investment-strategies/bonds-faq (articlePages in src/data/guides.js).

const ratings = [
  ['Aaa', 'Highest Quality', 'AAA'],
  ['Aa', 'High Quality', 'AA'],
  ['A', 'Good Quality', 'A'],
  ['Baa', 'Medium Quality', 'BBB'],
  ['Ba', 'Speculative Elements', 'BB'],
  ['B', 'Speculative', 'B'],
  ['Caa', 'More Speculative', 'CCC'],
  ['Ca', 'Highly Speculative', 'CC'],
  ['—', 'In Default', 'D'],
  ['N', 'Not Rated', 'N'],
];

const bondFunds = [
  ['Corporate Bond', 'Income, Capital Preservation', 'Corporate Debt', 'Interest Rate, Some Credit'],
  [
    'Global Bond',
    'Capital Appreciation',
    'U.S. and non-U.S. Corporate and Government Debt',
    'Currency, Policy, Interest Rate, Some Credit',
  ],
  [
    'Ginnie Mae (GNMA)',
    'Income',
    'Mortgage Securities backed by the Government National Mortgage Association',
    'Prepayment, Interest Rate',
  ],
  ['High-Yield', 'Income, Capital Appreciation Corporate Bond', 'Lower Quality Corporate Debt', 'Credit, Interest Rate'],
  [
    'Income (Bond)',
    'Federal Tax-exempt Income, Capital Preservation',
    'State and Local Government Debt',
    'Interest Rate, Some Credit',
  ],
  [
    'Long-Term Municipal Bond',
    'Federal Tax-exempt Income, Capital Preservation',
    'State and Local Government Debt',
    'Interest Rate, Some Credit',
  ],
  [
    'State Long-term Municipal Bond',
    'Federal and State Tax-exempt Income, Capital Preservation',
    'State and Local Government Debt of Only One State',
    'Interest Rate, Some Credit',
  ],
  [
    'U.S. Government Income',
    'Capital Preservation, Income',
    'U.S. Treasury and Other Government Securities',
    'Interest Rate',
  ],
];

const sections = [
  {
    id: 'what-is-a-bond',
    title: 'What is a bond?',
    body: (
      <>
        <p>
          A bond is a certificate promising to repay, no later than a specified date, a sum of money that an investor or
          bondholder has loaned to a company. In return for the use of the money, the company (or municipality or other
          government entity) also agrees to pay bondholders a certain amount of interest (referred to as a coupon) each
          year, and is typically a percentage of the amount loaned.
        </p>
        <p>
          Bondholders are not owners of the company. They do not share in dividend payments or vote on company matters and
          the return on their investment does not usually depend on how successful the company is. Bondholders are entitled
          to receive the amount of interest originally agreed upon, as well as a return of the principal amount of the bond,
          provided they hold the bond for the time period specified. For example, if you buy a bond with a face value of
          $1000 and a coupon of 8 percent with a 10-year maturity rate, you'll receive $80 in interest every year, and at
          the end of the 10 years, you'll get your $1,000 back.
        </p>
      </>
    ),
  },
  {
    id: 'types-of-bonds',
    title: 'What are the various types of bonds?',
    body: (
      <>
        <p>
          Bonds are categorized by the entities that issue them such as corporate, US Treasury, GSE (Government Sponsored
          Enterprises) debt securities, and municipal bonds. Corporate bonds generally are issued in denominations of
          $1,000 or sometimes, $5,000. Treasury bonds are issued denominations of $1,000 while municipal bonds are issued
          in denominations of $5,000. These numbers refer to the face value of the bond and is the amount that the company
          agrees to repay to the bondholder when the bond matures.
        </p>
        <p>
          The prices at which these bonds trade may differ from their face values because the price or value of a bond is
          closely related to the movement of interest rates in the economy. As interest rates change, so too will the value
          of the bond. If you need to sell the bond before it matures, it may be worth more (or less) than the price you
          originally paid for it.
        </p>
        <p>
          Some bonds are callable or redeemable, which means that the issuer can elect to buy them back from holders at the
          face amount before the date of maturity, often referred to as the call date. The price of a callable bond is
          always lower than the price of a regular bond and the yield is typically higher.
        </p>
      </>
    ),
  },
  {
    id: 'classified',
    title: 'How are bonds classified?',
    body: (
      <>
        <p>Bonds are classified in three ways: by the issuing organization, by their maturity, and by their quality.</p>
        <h3>Issuing Organization</h3>
        <p>
          The U.S. government sells bonds through the Treasury to finance the national debt and through various federal
          agencies for special purposes. State and local municipalities sell bonds to finance schools, hospitals, highways,
          bridges, airports, and the like, and corporations sell bonds to finance long-term capital project such as new
          plants or equipment.
        </p>
        <h3>Maturity</h3>
        <p>Maturity means the length of time until the principal is repaid.</p>
        <ul>
          <li>
            Short-term bonds mature in less than two years, but in some cases may also refer to bonds that mature in less
            than one year
          </li>
          <li>Long-term bonds mature in more than ten years</li>
          <li>Intermediate-term bonds, as the name implies, mature between short and long term debt</li>
        </ul>
        <p>
          Treasury bills have maturity dates of one year or less, Treasury notes mature between one and ten years, and
          Treasury bonds have maturates of ten years or longer.
        </p>
        <Callout label="Tip">
          <p>As a general rule, the longer the bond's maturity, the greater the interest-rate risk.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'bond-quality',
    title: 'What is meant by the term "bond quality?"',
    body: (
      <>
        <p>
          Bond quality refers to the creditworthiness of the issuing organization; in other words, the likelihood that it
          will be able to repay its debt. Independent rating services, such as Moody's Investors Service, Inc. or Standard
          &amp; Poor's, publish directories that rate bond quality. A lower rating means the service associates a greater
          credit risk with that particular bond issue. Rating agencies use a combination of letters A through D to estimate
          the risk for prospective investors. For example, AAA (or Aaa) is the highest quality bond while C or D rated bonds
          are in default of payment.
        </p>
        <Callout label="Note">
          <p>
            The ratings are not meant to measure the attractiveness of the bond as an investment, but rather the risk. That
            is, how likely the principal will be paid if held to maturity.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>Only the U.S. Treasury's debt is considered free of credit risk.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'call-provision',
    title: 'What is a "bond call provision?"',
    body: (
      <>
        <p>
          Investors considering long-term bonds should be alert to the possibility of a "call" or redemption feature in
          bonds, which can frustrate expectations of a high yield over the life of the bonds. Such a call feature gives the
          issuing corporation the right to call in or redeem its bonds after a specified number of years have elapsed.
          Growing numbers of corporations are reserving such early redemption features in their bonds in hopes of
          refinancing later at the lower interest rates. The call feature has three effects:
        </p>
        <ul>
          <li>After the call date there's no guarantee that high yields will continue</li>
          <li>It may limit the appreciation of the bonds</li>
          <li>
            It creates the risk that, where the purchase price is higher than the redemption price, part of the investment
            will be lost
          </li>
        </ul>
        <p>
          There are a number of different call provisions, some of which are complex and hard to understand, but brokers
          are required to disclose call features in writing. Check the indenture, which is the contract between the bond
          issuer and bondholder, and seek out bonds that either have no call feature or have call protection or choose bonds
          that have the latest possible redemption date.
        </p>
      </>
    ),
  },
  {
    id: 'bond-rating',
    title: 'What is a bond rating?',
    body: (
      <>
        <p>The table below provides a summary of the ratings:</p>
        <FigureTable
          label="Bond ratings"
          columns={["Moody's Rating:", 'Indicates:', "Standard & Poor's Rating:"]}
          rows={ratings}
          numeric={false}
        />
        <p>For more detailed definitions of each rating, consult the publications of the rating services.</p>
      </>
    ),
  },
  {
    id: 'bond-prices',
    title: 'What factors affect bond prices?',
    body: (
      <>
        <p>
          Think of bond prices and interest rates as opposite ends of a see-saw. When rates fall, prices rise. When rates
          rise, prices fall. Why does it work this way?
        </p>
        <Callout label="Example">
          <p>
            You buy a bond worth $10,000, which pays 9 percent interest until maturity in 30 years. Suppose you need to sell
            that bond after only 10 years, at which time, the interest rates on new loans is 11 percent. Why should
            investors buy your bond paying only 9 percent when they can get 11 percent elsewhere?
          </p>
          <p>
            To sell it, you'll need to drop the price of the bond below the price you paid for it. Then, when the bond
            matures, your buyer will get more than he or she paid for it, making up for the lower-than-market interest
            payments received meanwhile.
          </p>
          <p>
            On the other hand, if you needed to sell the bond when the prevailing interest rates on new loans was at 7
            percent, you could charge a premium price for your bond that pays a more favorable 9 percent rate. Your buyer
            will receive less than he or she paid for it when the bond matures, making up for the higher-than-marketplace
            interest payments received in the interim.
          </p>
        </Callout>
        <p>
          Bond prices are also influenced by maturity. The extent of the change in bond price is also influenced by the
          maturity of the bond. The longer the maturity is, the greater the change in price for a given change in interest
          rates. For example, a rise in interest rates will bring about a larger drop in price for a 20-year bond than for
          an otherwise equivalent 10-year bond.
        </p>
        <p>
          Bond mutual fund share values generally reflect bond prices. Fund managers decide which bonds to buy and sell,
          and when, in accordance with the fund's investment objective. And, of course, shares in a bond mutual fund can be
          redeemed or liquidated at any time.
        </p>
        <p>
          Bond fund managers try to lengthen or shorten the fund's average maturity (within the fund's overall investment
          objectives) to anticipate changing interest rates.
        </p>
        <p>
          Changes in bond mutual fund prices due to changing interest rates do not reflect on the creditworthiness of the
          bond issuers. If, however, their creditworthiness changes, bond mutual fund prices may also change. This type of
          price volatility is known as credit risk.
        </p>
        <Callout label="Tip">
          <p>
            This is one good reason to invest in bond funds. Because a fund consists of a pool of bonds from an array of
            organizations, the effect of one default on the share price of the entire fund is not nearly as great as it
            would be for an investor who held only that single bond.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'bonds-or-bond-funds',
    title: 'Should I buy individual bonds directly or through a mutual fund?',
    body: (
      <>
        <p>
          The biggest difference between an individual bond and a bond mutual fund is that with individual bonds you can
          "lock in" the rate, but with a bond mutual fund because the bond fund contains many different bonds, neither the
          dividend payments you receive nor the maturity date is fixed. So you can't lock in the principal or your payment
          rate.
        </p>
        <p>Let's examine the implications of this difference.</p>
        <p>
          A bond mutual fund is issued by an investment company of which the sole business is managing a portfolio of
          individual bonds. Investors purchase ownership shares in the fund, with each share representing ownership in all
          the bonds in the fund's portfolio. Thus, a pool of shareholders owns a pool of bonds. Professional money managers
          use shareholders' investments to buy and sell bonds for the portfolio in accordance with the fund's investment
          objective.
        </p>
        <p>
          Due to pooled resources and the professional money management, bond fund shareholders can invest in far more
          bonds than the average individual investor could. For example, you would need to pay $25,000 for a single
          Government National Mortgage Association (GNMA or Ginnie Mae) bond, but you can invest in most GNMA bond mutual
          funds for only $1,000.
        </p>
        <p>
          Liquidity is another important difference between an individual bond and a bond fund. By law, the bond fund must
          buy back your shares at any time. You may receive more or less than your purchase price, depending on how the
          value of the fund's underlying portfolio has changed.
        </p>
        <p>
          In contrast, for an individual bond, if you invested in it directly, you would need to find your own buyer if you
          wanted to sell the bond before it matured.
        </p>
        <p>
          Bond fund portfolios can contain many different types of bonds of different maturates and varying quality. Risks
          also vary depending on the type of fund. All bond funds are subject to interest rate risk and most are subject to
          credit risk. There may be other types of risk as well. Each fund's investment objective, the types of bonds it
          invests in, related risks, fees, and other information can be found in the fund's prospectus.
        </p>
      </>
    ),
  },
  {
    id: 'bond-fund-types',
    title: 'What types of bond funds are there?',
    body: (
      <>
        <p>The table below shows eight common types of bond funds and some of their key characteristics.</p>
        <FigureTable
          label="Types of bond funds"
          columns={['Type of Bond Fund', 'Goals', 'Invest Primarily In', 'Principal Risks']}
          rows={bondFunds}
          numeric={false}
          wide
        />
      </>
    ),
  },
  {
    id: 'municipal-bonds',
    title: 'What are municipal bonds?',
    body: (
      <>
        <p>
          Bonds issued by states, cities, or certain agencies of local governments (such as school districts) are called
          municipal bonds. An important feature of these bonds is that the interest a bondholder receives is not subject
          to federal income tax. In addition, the interest is also exempt from state and local tax if the bondholder lives
          in the jurisdiction of the issuing authority. Because of the tax advantages, however, the interest rate paid on
          municipal bonds is generally lower than that paid on corporate bonds.
        </p>
        <p>
          Rating agencies evaluate bonds issued by state and local governments and their agencies and take into
          consideration such factors as the tax base, population statistics, total debt outstanding, and the area's general
          economic climate.
        </p>
        <p>
          There are different types of municipal bonds. Some are general obligation bonds secured by the full faith and
          credit of a state or local government and backed by its taxing power. Others are revenue bonds that are issued to
          finance specified public works (such as bridges or tunnels) and are directly backed by the income from the
          specific project.
        </p>
        <p>Prices of most municipal bonds are not usually quoted in daily newspapers.</p>
        <Callout label="Tip">
          <p>
            If you are interested in a particular bond issue, consult bond dealers for their current prices. Your public
            library may also have copies of a municipal bond guide or a "Blue List."
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'government-bonds',
    title: 'What do I need to know about U.S. Government bonds?',
    body: (
      <>
        <p>
          Like state and local governments, the U.S. Government also issues debt securities to raise funds. Because these
          are backed by the federal government itself, they are considered to be very low risk.
        </p>
        <p>
          Government debt securities include Treasury bills with maturates of up to one year, Treasury notes with that
          mature between one and ten years, and Treasury bonds with maturates between ten and thirty years.
        </p>
        <p>Other U.S. Government agencies issue bonds, notes, debentures, and participation certificates as well.</p>
        <p>
          While government securities do not have to be registered with the SEC, transactions involving them are subject
          to the anti-fraud provisions of the securities laws and SEC rules.
        </p>
      </>
    ),
  },
  {
    id: 'treasuries-without-a-broker',
    title: 'Can I buy treasury bonds without a broker?',
    body: (
      <p>
        Treasury bills, notes, and bonds can be purchased directly from the Federal Reserve. Call the Federal Reserve branch
        nearest you and ask them to mail you information on purchasing through the Treasury Direct program.
      </p>
    ),
  },
];

export default function BondsFaq() {
  return (
    <GuideArticle
      category="investment-strategies"
      page="Bonds: Frequently Asked Questions"
      title={
        <>
          Bonds: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about how bonds work, their types and ratings, call provisions, what moves bond prices, bond funds, municipal bonds, and U.S. Government bonds."
      sections={sections}
    />
  );
}
