import { Link } from 'react-router';
import GuideArticle, { Agencies, Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/investment-strategies.php?item=99 (Mutual Fund Taxation: How To Cut The
// Tax Bite), word for word. The library's opening paragraph is the banner's text (`lead`), and the
// guide's headings are its sections (their contents list matches the headings, where the library's
// list words three of them slightly differently). Hyphens and spaced "&mdash;"s used as dashes are
// dashes, the note, tip and example boxes keep the library's labels, the three methods under Tip
// #8 are subheadings, and the three organizations are cards. Typing slips fixed: "For example,:"
// is "For example:", "Tip #4.." is "Tip #4.", "$ 1,020" and "$ 10,000" lose the space, and the
// last heading loses its closing period. "Form 8-K", "22,000" (no dollar sign) and "($5,000 x
// 200)" are as the library has them. Back-to-top anchors omitted. Investment Strategies has no
// topic pages, so the breadcrumb ends at the category.
// Address: /guides/investment-strategies/mutual-fund-taxation (articlePages in src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const organizations = [
  { name: 'American Association of Individual Investors', website: 'www.aaii.com' },
  { name: 'Investment Company Institute', website: 'www.ici.org' },
  { name: 'Investment Management Education Alliance', website: 'imeaconnect.com' },
];

const sections = [
  {
    id: 'taxable-distributions',
    title: 'Taxable Distributions',
    body: (
      <>
        <p>There are three types of taxable distributions:</p>
        <ol>
          <li>
            <strong>Ordinary dividends.</strong> Distributions of ordinary dividends, which come from the interest and
            dividends earned by securities in the fund's portfolio, represent the net earnings of the fund. They are paid
            out periodically to shareholders. Like the return on any other investment, mutual fund dividend payments decline
            or rise from year to year, depending on the income earned by the fund in accordance with its investment policy.
            These dividend payments must be reported on your tax return and are subject to your ordinary income tax rate.
          </li>
          <li>
            <strong>Qualified dividends.</strong> Qualified dividends are dividends that are subject to the same lower tax
            rates that apply to net long-term capital gains. Dividends from mutual funds qualify where a mutual fund is
            receiving qualified dividends and distributing the required proportions thereof.
          </li>
          <li>
            <strong>Capital gain distributions</strong>. When gains from the fund's sales of securities exceed losses, they
            are distributed to shareholders. As with ordinary dividends, these capital gain distributions vary in amount
            from year to year. They are treated as long-term capital gain, regardless of how long you have owned your fund
            shares. A mutual fund owner may also have capital gains from selling mutual fund shares.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'capital-gains-rates',
    title: 'Capital Gains Rates',
    body: (
      <>
        <p>
          The beneficial long-term capital gains rates on sales of mutual fund shares apply only to profits on shares held
          more than a year before sale. Profit on shares held a year or less before the sale is ordinary income, but capital
          gain distributions are long-term regardless of the length of time held before the distribution.
        </p>
        <p>
          The current capital gains and qualified dividend rates of 0%, 15%, and 20% are permanent, meaning that they have
          no scheduled end date. However, legislation could be passed by Congress and signed into law changing them. The
          thresholds for each rate, however, are annually adjusted for inflation.
        </p>
        <p>
          For 2025, the 0% rate applies to those with taxable income up to $48,350 (singles), $64,750 (heads of
          households), $96,700 (joint filers) or $48,350 (separate filers)—up from $47,025, $63,000, $94,050 and $47,025
          respectively, for 2024.
        </p>
        <p>
          For 2025, the 20% rate applies to those with taxable income exceeding $533,400 (singles), $566,700 (heads of
          households), $600,050 (joint filers) or $300,000 (separate filers)—up from $518,900, $551,350, $583,750 and
          $291,850, respectively, for 2024.
        </p>
        <p>Taxpayers with taxable incomes between those amounts are subject to the 15% rate.</p>
        <p>
          At tax time, your mutual fund will send you a Form 1099-DIV, which tells you what earnings to report on your
          income tax return, and how much of it is qualified dividends. Also, capital losses are netted against capital
          gains before applying favorable capital gains rates. Losses will not be netted against dividends.
        </p>
        <p>
          Mutual funds sometimes retain a part of their capital gain and pay tax on them. You must report your share of
          undistributed capital gains and can claim a credit for the tax paid. The mutual fund will report these amounts to
          you on Form 2439. You increase your shares' "cost basis" (more about this in Tip No. 5, below) by 65 percent of
          the gain, representing the gain reduced by the credit.
        </p>
      </>
    ),
  },
  {
    id: 'net-investment-income-tax',
    title: 'Net Investment Income Tax',
    body: (
      <>
        <p>
          Taxpayers with modified adjusted gross income (MAGI) over $200,000 per year ($250,000 for married filing jointly
          and $125,000 for married filing separately) are subject to the extra 3.8% net investment income tax (NIIT) on the
          lesser of their net investment income or the amount by which their MAGI exceeds the applicable threshold. Net
          investment income can include capital gains, dividends, interest and other investment-related income (but not
          self-rental income from an active trade or business). These amounts are not indexed for inflation.
        </p>
        <p>
          Now that you have a better understanding of how mutual funds are taxed, here are 13 tips for minimizing the tax
          on your mutual fund activities:
        </p>
      </>
    ),
  },
  {
    id: 'tip-1',
    title: 'Tip #1: Keep Track of Reinvested Dividends',
    body: (
      <>
        <p>
          Most funds offer you the option of having dividend and capital gain distributions automatically reinvested in
          the fund—a good way to buy new shares and expand your holdings. While most shareholders take advantage of this
          service, it is not a way to avoid being taxed. Reinvested ordinary dividends are still taxed (at long-term
          capital gains rates if qualified), just as if you had received them in cash. Similarly, reinvested{' '}
          <em>capital gain distributions</em> are taxed as long-term capital gain.
        </p>
        <Callout label="Tip">
          <p>
            If you reinvest, add the amount reinvested to the "cost basis" of your account, i.e., the amount you paid for
            your shares. The cost basis of your new shares purchased through automatic reinvesting is easily seen from your
            fund account statements. This information is important later on when you sell shares (more about that in{' '}
            <Link to="#tip-5">Tip #5</Link>).
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-2',
    title: 'Tip #2: Be Aware That Exchanges of Shares Are Taxable Events',
    body: (
      <>
        <p>
          The "exchange privilege," or the ability to exchange shares of one fund for shares of another, is a popular
          feature of many mutual fund "families," i.e., fund organizations that offer a variety of funds. For tax purposes,
          exchanges are treated as if you had sold your shares in one fund and used the cash to purchase shares in another
          fund. In other words, you must report any capital gain from the exchange on your return. The same tax rules used
          for calculating gains and losses when you redeem shares apply when you exchange them.
        </p>
        <Callout label="Note">
          <p>
            Gains on these redemptions and exchanges are taxable whether the fund invests in taxable or tax-exempt
            securities.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-3',
    title: 'Tip #3: Be Wary of Buying Shares Just Before the Ex-Dividend Date',
    body: (
      <>
        <p>
          Tax law requires that mutual funds distribute at least 98 percent of their ordinary and capital gain income
          annually. Thus, many funds make disproportionately large distributions in December. The date on which a fund's
          shareholders become entitled to future payment of a distribution is referred to as the ex-dividend date. On that
          date, the fund's net asset value (NAV) is reduced on a per-share basis by the exact amount of the distribution.
          Buying mutual fund shares just before this date can trigger an unexpected tax.
        </p>
        <Callout label="Example">
          <p>
            You buy 1,000 shares of Fund XYZ at $10 a share. A few days later, the fund goes ex-dividend, entitling you to a
            $1 per share distribution. Because $1 of your $10 NAV is being distributed to you, the value of your 1,000
            shares is reduced to $9,000. As with any fund distribution, you may receive the $1,000 in cash or reinvest it
            and receive additional shares. In either case, you must pay tax on the distribution.
          </p>
        </Callout>
        <p>
          If you reinvest the $1,000, the distribution has the appearance of a wash in your account since the value of
          your fund investment remains $10,000. The $1,000 reinvestment results in the acquisition of 111.1 new shares with
          a $9 NAV and increases the cost basis of your total investment to $11,000. If you were to redeem your shares for
          $10,000 (their current value), you would realize a $1,000 capital loss.
        </p>
        <p>
          In spite of these tax consequences, in some instances it may still be a good idea to buy shares right before the
          fund goes ex-dividend. For instance, the distribution could be relatively small, with only minor tax
          consequences. Or the market could be moving up, with share prices expected to be higher after the ex-dividend
          date.
        </p>
        <Callout label="Tip">
          <p>To find out a fund's ex-dividend date, call the fund directly.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-4',
    title: "Tip #4: Don't Overlook the Advantages of Tax-Exempt Funds",
    body: (
      <>
        <p>
          If you are in the higher tax brackets and are seeing your investment profits taxed away, then there is a good
          alternative to consider: tax-exempt mutual funds. Distributions from such funds that are attributable to interest
          from state and municipal bonds are exempt from federal income tax (although they may be subject to state tax).
        </p>
        <p>
          The same is true of distributions from tax-exempt money market funds. These funds also invest in municipal bonds,
          but only in those that are short-term or close to maturity, the aim being to reduce the fluctuation in NAV that
          occurs in long-term funds.
        </p>
        <p>
          Many taxpayers can ease their tax bite by investing in municipal bond funds. The catch is that they offer lower
          yields than comparable taxable bonds. For example, if a U.S. Treasury bond yields 2.8 percent, then a quality
          municipal bond of the same maturity might yield 2.45 percent. If an investor is in a higher tax bracket, the tax
          advantage makes it worthwhile to invest in the lower-yielding tax-exempt fund. Whether the tax advantage actually
          benefits a particular investor depends on that investor's tax bracket.
        </p>
        <p>
          To figure out how much you would have to earn on a taxable investment to equal the yield on a tax-exempt
          investment, use this formula: Tax-exempt yield divided by (1 minus your tax bracket) = equivalent yield of a
          taxable investment.
        </p>
        <Callout label="Example">
          <p>
            Let's say you expect to be in the 32% bracket, and the yield of a tax-exempt investment is 2.8 percent. Applying
            the formula, we get .028 divided by .68 (1 minus .32) = .041. Therefore, 4.1 percent is the yield you would
            need from a taxable investment to match the tax-exempt yield of 2.8 percent.
          </p>
        </Callout>
        <Callout label="Note">
          <p>
            In limited cases based on the types of bonds involved, part of the income earned by tax-exempt funds may be
            subject to the federal alternative minimum tax.
          </p>
        </Callout>
        <p>
          Although income from tax-exempt funds is federally tax-exempt, you must still report on your tax return the
          amount of tax-exempt income you received during the year. This is an information-reporting requirement only and
          does not convert tax-exempt earnings into taxable income.
        </p>
        <p>
          Your tax-exempt mutual fund will send you a statement summarizing its distributions for the past year and
          explaining how to handle tax-exempt dividends on a state-by-state basis.
        </p>
        <Callout label="Note">
          <p>
            Capital gain distributions paid by municipal bond funds (unlike distributions of interest) are not free from
            federal tax. Most states also tax these capital gain distributions.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-5',
    title: 'Tip #5: Keep Records of Your Mutual Fund Transactions',
    body: (
      <>
        <p>It is very important to keep the statements from each mutual fund you own, especially the year-end statement.</p>
        <p>
          By law, mutual funds must send you a record of every transaction in your account, including reinvestments and
          exchanges of shares. The statement shows the date, amount, and number of full and fractional shares bought or
          sold. These transactions are also contained in the year-end statement.
        </p>
        <p>
          In addition, you will receive a year-end Form 1099-B, which reports the sale of fund shares, for any non-IRA
          mutual fund account in which you sold shares during the year.
        </p>
        <p>
          Why is record keeping so important? When you sell mutual fund shares, you will realize a capital gain or loss in
          the year the shares are sold. You must pay tax on any capital gain arising from the sale, just as you would from
          the sale of individual securities. (Losses may be used to offset other gains in the current year and deducted up
          to an additional $3,000 of ordinary income. Remaining loss may be carried for comparable treatment in later
          years.)
        </p>
        <p>
          The amount of the gain or loss is determined by the difference between the cost basis of the shares (generally
          the original purchase price plus any increases in basis, for example, from dividend and capital gains
          distribution re-investments) and the sale price. Thus, in order to figure the gain or loss on a sale of shares,
          it is essential to know the cost basis. If you have kept your statements, you will be able to figure this out.
        </p>
        <Callout label="Example">
          <p>
            Let's say in 2022, you purchased 100 shares of Fund JKL at $10 a share for a total purchase price of $1,000.
            Your cost basis for each share is $10 (what you paid for the shares). Any fees or commissions paid at the time
            of purchase are included in the basis, so since you paid an up-front commission of two percent, or $20, on the
            purchase, your cost basis for each share is $10.20 ($1,020 divided by 100). Let's say you sell your Fund JKL
            shares this year for $1,500. Assume there are no adjustments to your $1,020 basis, such as basis attributable
            to shares purchased through reinvestment (for an example of the effect of reinvestment on the cost basis, see
            Tip #6.). On this year's income tax return, you report a capital gain of $480 ($1,500 minus $1,020).
          </p>
        </Callout>
        <Callout label="Note">
          <p>
            Since they are taken into account in your cost basis, commissions or brokerage fees are not deductible
            separately as investment expenses on your tax return.
          </p>
        </Callout>
        <p>
          One of the advantages of mutual fund investing is that the fund provides you with all of the records that you
          need to compute gains and losses—a real plus at tax time. Some funds even provide cost basis information or
          compute gains and losses for shares sold. That is why it is important to save the statements. However, you are
          not required to use the fund's gain or loss computations in your tax reporting.
        </p>
      </>
    ),
  },
  {
    id: 'tip-6',
    title: 'Tip #6: Factor Re-invested Dividends & Capital Gain Distributions into Your Calculations',
    body: (
      <>
        <p>
          Make sure that you do not pay any unnecessary capital gain taxes on the sale of mutual fund shares because you
          forgot about reinvested amounts. When you reinvest dividends and capital gain distributions to buy more shares,
          you should add the cost of those shares (that is, the amount invested) to the cost basis of the shares in that
          account because you have already paid tax on those shares. Failure to include reinvested dividends and capital
          gain distributions in your cost basis is a costly mistake.
        </p>
        <Callout label="Example">
          <p>
            Let's say you bought 500 shares in Fund PQR 15 years ago for $10,000. Over the years, you reinvested dividends
            and capital gain distributions in the amount of $8,000, for which you received 100 additional shares. This
            year, you sell all 600 of those shares for $40,000. If you forget to include the price paid for the 100 shares
            purchased through reinvestment (even though the fund sent you a statement recording the shares you received in
            each transaction), you will unwittingly report on your tax return a capital gain of $30,000 ($40,000 - $10,000)
            on your redemption of 600 shares, rather than the correct capital gain of 22,000 ($40,000 - [$10,000 +
            $8,000]).
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-7',
    title: 'Tip #7: Adjust Cost Basis for Nontaxable Distributions',
    body: (
      <>
        <p>
          Sometimes mutual funds make distributions to shareholders that are not attributable to the fund's earnings. These
          are nontaxable distributions, also known as returns of capital. Because a return of capital is a return of part
          of your investment, it is not taxable. Your mutual fund will show any return of capital on Form 1099-DIV in the
          box for nontaxable distributions.
        </p>
        <Callout label="Note">
          <p>
            Nontaxable distributions are not the same as the tax-exempt dividends described in{' '}
            <Link to="#tip-4">Tip #4</Link>.
          </p>
        </Callout>
        <p>If you receive a return-of-capital distribution, your basis in the shares is reduced by the amount of the return.</p>
        <Callout label="Example">
          <p>
            Let's say that 15 years ago, you purchased 1,000 shares of Fund ABC at $10 a share. The following year you
            received a $1-per-share return-of-capital distribution, which reduced your basis in those shares by $1, to give
            you an adjusted basis of $9 per share. This year you sell your 1,000 shares for $15 a share. Assuming no other
            transactions during this period, you would have a capital gain this year of $6 a share ($15 - $9) for a total
            reported capital gain of $6,000.
          </p>
        </Callout>
        <p>
          Nontaxable distributions cannot reduce your basis below zero. If you receive returns of capital that, taken
          together, exceed your original basis, you must report the excess as a long-term capital gain.
        </p>
        <p>
          Your <em>overall</em> basis will not change if nontaxable distributions are reinvested. However, your per-share
          basis will be reduced.
        </p>
      </>
    ),
  },
  {
    id: 'tip-8',
    title: 'Tip #8: Use the Best Method of Identifying Sold Shares',
    body: (
      <>
        <p>
          Calculating the capital gain or loss on shares you sell is more complicated if, as is usually the case, you are
          selling only some of your shares. You then must choose an accounting method to identify which shares were sold to
          determine your capital gain or loss. The IRS recognizes several methods of identifying the shares sold:
        </p>
        <ul>
          <li>First-in, first-out (FIFO),</li>
          <li>Average cost (single category and double category), and</li>
          <li>Specific identification.</li>
        </ul>
        <p>
          Reports from your funds may include a computation of gain or loss on your sale of mutual fund shares. Typically,
          these will use the average cost method, single category rule. This is done as a convenience. You are allowed to
          adopt one of the other methods.
        </p>
        <h3>First-In, First-Out (FIFO)</h3>
        <p>
          Under this method, the first shares bought are considered the first shares sold. Unless you specify that you are
          using one of the other methods, the IRS will assume you are using FIFO.
        </p>
        <h3>Average Cost</h3>
        <p>
          This approach allows you to calculate an average cost for each share by adding up the total cost of all the
          shares you own in a particular mutual fund and dividing by the number of shares. If you elect to take an average
          cost approach, you must then choose whether to use a single-category method or a double-category method.
        </p>
        <ul>
          <li>
            With the <em>single category</em> method, you simply group all shares together, add up the cost, and divide by
            the number of shares. Under this method, you are deemed to have sold first the shares you have held the longest.
          </li>
          <li>
            The <em>double category</em> method enables you to separate short-term and long-term shares. Shares held for
            one year or less are considered short-term; shares held for more than one year are considered long-term. You
            average the cost of shares in each category separately. In this way, you may specify whether you are redeeming
            long-term or short-term shares.
          </li>
        </ul>
        <p>
          Keep in mind that once you elect to use either average cost method, you must continue to use it for all
          transactions in that fund unless you receive IRS approval to change your method.
        </p>
        <h3>Specific Identification</h3>
        <p>
          Under this method, you specify the individual shares that are sold. If you have kept track of the purchase prices
          and dates of all your fund shares, including shares purchased with reinvested distributions, you will be able to
          identify, for example, those shares with the highest purchase prices and indicate that they are the shares you
          are selling. This strategy gives you the smallest capital gain and could save you a significant amount on your
          taxes.
        </p>
        <p>
          To take advantage of this method, you must, at the time of the sale or exchange, indicate to your broker or to
          the mutual fund itself the particular shares you are selling. The IRS also insists that you receive written
          confirmation of your instructions.
        </p>
        <Callout label="Note">
          <p>
            To see the advantages and disadvantages of these methods of identifying sold shares, see{' '}
            <em>
              <Link to="#identification-methods">How The Various Identification Methods Compare</Link>
            </em>{' '}
            (below).
          </p>
        </Callout>
        <Callout label="Note">
          <p>
            Money market funds present a very simple case when you redeem shares. Because most money market funds maintain
            a stable net asset value of $1 per share, you have no capital gain or loss when you sell shares. Thus, you only
            pay tax on any earnings distributed.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-9',
    title: 'Tip #9: Avoid Backup Withholding',
    body: (
      <>
        <p>
          One way the IRS makes sure it receives taxes owed by taxpayers is through backup withholding. In the mutual fund
          context, this means that a mutual fund company is required to deduct and withhold a specified percentage (see
          below) of your dividend and redemption proceeds if one of the following situations has occurred:
        </p>
        <ul>
          <li>
            You have not supplied your taxpayer identification number (TIN, which generally is the taxpayer's Social
            Security number) to the fund company;
          </li>
          <li>You supplied a TIN that the IRS finds to be wrong;</li>
          <li>The IRS finds you have underreported your interest and dividend payments; or</li>
          <li>You failed to tell the fund company you are not subject to backup withholding.</li>
        </ul>
        <p>The backup withholding percentage is 24 percent for tax years 2018-2025 (28 percent in prior years).</p>
      </>
    ),
  },
  {
    id: 'tip-10',
    title: "Tip #10: Don't Forget State Taxation",
    body: (
      <>
        <p>
          Many states treat mutual fund distributions the same way the federal government does. There are, however, some
          differences. For example:
        </p>
        <ul>
          <li>
            If your mutual fund invests in U.S. government obligations, states generally exempt from state taxation
            dividends attributable to federal obligation interest.
          </li>
          <li>
            Most states do not tax income from their own obligations, whether held directly or through mutual funds. On the
            other hand, the majority of states do tax income from the obligations of other states. Thus, in most states, you
            will not pay state tax to the extent you receive, through the fund, income from obligations issued by your state
            or its municipalities.
          </li>
          <li>Most states don't have reduced tax rates for capital gains or dividends.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'tip-11',
    title: "Tip #11: Don't Overlook Possible Tax Credits for Foreign Income",
    body: (
      <>
        <p>
          If your fund invests in foreign stocks or bonds, part of the income it distributes may have been subject to
          foreign tax withholding. If so, you may be entitled to a tax deduction or credit for your pro-rata share of taxes
          paid. Your fund will provide you with the necessary information.
        </p>
        <Callout label="Tip">
          <p>
            Because a tax credit provides a dollar-for-dollar offset against your tax bill, while a deduction reduces the
            amount of income on which you must pay tax, it is generally advantageous to claim the foreign tax credit. If the
            foreign tax doesn't exceed $300 ($600 on a joint return), then you may not need to file IRS form 1116 to claim
            the credit.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-12',
    title: 'Tip #12: Be Careful About Trying the "Wash Sale" Rule',
    body: (
      <>
        <p>
          If you sell fund shares at a loss (so you can take a capital loss on your return) and then repurchase shares in
          the same fund shortly thereafter, beware of the wash sale rule. This rule bars a loss deduction when a taxpayer
          buys "substantially identical" shares within 30 days before or after the date of sale.
        </p>
        <Callout label="Tip">
          <p>Be sure to wait more than thirty (30) days before reinvesting.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tip-13',
    title: 'Tip #13: Choose Tax-Efficient Funds',
    body: (
      <>
        <p>
          Many investors who hold mutual funds directly may hold others through tax-deferred accounts such as 401(k)s and
          IRAs. Your aggressive high-turnover funds and high-income funds that generate more current income and gains
          should be held in tax-deferred accounts, where they won't trigger current-year taxes. Buy-to-hold funds and low
          activity funds such as index funds should be owned directly (as opposed to a tax-deferred account). With
          relatively small currently distributable income, such investments can continue to grow with only a modest
          reduction for current taxes.
        </p>
        <p>
          As you can see, there are many tax pitfalls that await the unwary mutual fund investor. Professional guidance
          should be considered to minimize the tax impact.
        </p>
      </>
    ),
  },
  {
    id: 'identification-methods',
    title: 'How the Various Identification Methods Compare',
    body: (
      <>
        <p>
          To illustrate the advantages and disadvantages of the various methods of identifying the shares that you sell,
          let's say that you bought 100 shares of Fund PQR in January 2018 at $20 a share, 100 shares in January 2020 at
          $30 a share, and 100 shares in January 2025 at $46 a share. You sell 50 shares in November 2025 for $50 a share.
          Here are your alternative ways to determine cost basis.
        </p>
        <ol>
          <li>
            <strong>First-In, First-Out (FIFO)</strong>. The FIFO method identifies the 50 shares sold as among the first
            100 shares purchased. Your cost basis per share is $20. This rate gives you a capital gain of $1,500 ($2,500 -
            (50 x $20)).{' '}
            <em>
              <strong>Advantages/disadvantages:</strong>
            </em>{' '}
            In this example, this method produces the highest amount of capital gain on which you are taxed. FIFO provides
            the lowest capital gain amount when the fund's net asset value has declined, and the first shares purchased
            were the most expensive. It can also sometimes save tax when shares bought later weren't held long enough to
            qualify for long-term capital gains treatment.
          </li>
          <li>
            <strong>Average Cost/Single Category</strong>. Average cost/single category allows you to calculate the average
            price paid for all shares in the fund. Here, your cost basis per share is $32 (your 300 shares cost $9,600:
            $9,600 divided by 300 = $32), giving you a capital gain of $900 ($2,500 - (50 x $32)).{' '}
            <em>
              <strong>Advantages/disadvantages:</strong>
            </em>{' '}
            Compared to FIFO, this method can reduce the amount of your capital gain if the fund's net asset value has
            increased over time. You could generate a lower long-term capital gain by using specific identification, but
            average cost/single category is useful if you did not designate shares at the time of sale or you simply do not
            want to do the record-keeping required to use the specific identification method.
          </li>
          <li>
            <strong>Average Cost/Double Category</strong>. Under this method, you average the cost of the short-term shares
            (those held for one year or less) and the cost of the long-term shares (those held for more than one year)
            separately. Thus, in the long-term category, you have 200 shares at $5,000 for an average cost of $25 per share
            ($5,000 x 200), and in the short-term category, you have 100 shares at $4,600 for an average cost of $46 per
            share ($4,600 divided by 100). Comparing the two categories, your taxable gain using the long-term shares would
            be $1,250 ($2,500 - (50 x $25)), to be taxed at up to 20 percent, while your taxable gain using the short-term
            shares would be $200 ($2,500 - (50 x $46)), to be taxed at up to 37 percent (top rate for 2025).{' '}
            <em>
              <strong>Advantages/disadvantages:</strong>
            </em>{' '}
            In this example, using the average cost of short-term shares produces a better result. However, because of the
            current spread between the top marginal income tax rates and the maximum rate on long-term capital gains, it
            could make sense in some instances to choose the long-term shares. Furthermore, as with specific identification,
            you must plan ahead to use this method by specifying to the broker or mutual fund company at the time of sale
            that you are selling short-term or long-term shares, and you must receive confirmation of your specification in
            writing. If you have elected to use average cost-double category but do not specify for a particular redemption
            whether you are redeeming short-term or long-term shares, the IRS will deem you to have redeemed the long-term
            shares first.
          </li>
          <li>
            <strong>Specific identification.</strong> With this method, you designate which shares you are selling. To
            reduce your capital gains the most, you would select the shares with the highest purchase price. In this case,
            you would identify the 50 shares sold as among those purchased in 2025. Your cost basis, therefore, is $46 per
            share, giving you a capital gain of $200 ($2,500 - (50 x $46)).{' '}
            <em>
              <strong>Advantages/disadvantages:</strong>
            </em>{' '}
            This method can produce favorable results in lowering the capital gain, but IRS regulations require you to think
            ahead by providing instructions before the sale and then receiving confirmation of your specification in
            writing. The IRS will not let you designate shares after the fact. Also, if the difference in price between the
            2025 purchase price and the 2020 purchase price had been smaller, designating that you were selling the 2020
            shares might have saved more tax, due to the difference between the short-term and long-term capital gains
            rates.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Nonprofit Agencies',
    body: (
      <>
        <h3>
          <a href="https://www.sec.gov" {...external}>
            US Securities and Exchange Commission (SEC)
          </a>
        </h3>
        <p>
          Most companies whose stock is traded over the counter or on a stock exchange must file "full disclosure" reports
          on a regular basis with the SEC. The annual report (Form 10-K) is the most comprehensive of these. It contains a
          narrative description and statistical information on the company's business, operations, properties, parents,
          and subsidiaries; its management, including their compensation and ownership of company securities; and
          significant legal proceedings which involve the company. Form 10-K also contains the audited financial statements
          of the company (including a balance sheet, an income statement, and a statement of cash flow) and provides
          management's discussion of business operations and prospects for the future.
        </p>
        <p>Quarterly financial information on Form 8-K may be required as well.</p>
        <p>
          Anyone may search the{' '}
          <a href="https://www.sec.gov/search/search.htm" {...external}>
            SEC's Company Filings database
          </a>{' '}
          for information such as quarterly and annual reports, registration statements for IPOs and other offerings,
          insider trading reports, and proxy materials.
        </p>
        <Agencies agencies={organizations} />
      </>
    ),
  },
];

export default function MutualFundTaxation() {
  return (
    <GuideArticle
      category="investment-strategies"
      page="Mutual Fund Taxation"
      title={
        <>
          Mutual Fund Taxation: <em>How To Cut The Tax Bite</em>
        </>
      }
      lead="How are distributions from mutual funds taxed? What happens when they are reinvested? How are capital gains on sales of mutual funds determined? This Financial Guide provides you with tips on reducing the tax on mutual fund activities."
      sections={sections}
      numbered={false}
    >
      <p>
        A basic knowledge of mutual fund taxation and careful record-keeping can help you cut the tax bite on your mutual
        fund investments.
      </p>
      <p>
        You must generally report as income any mutual fund distributions, whether or not they are reinvested. The tax law
        generally treats mutual fund shareholders as if they directly owned a proportionate share of the fund's portfolio
        of securities. Thus, all dividends and interest from securities in the portfolio, as well as any capital gains from
        the sales of securities, are taxed to the shareholders.
      </p>
      <Callout label="Note">
        <p>
          The fund itself is not taxed on its income if certain tests are met and substantially all of its income is
          distributed to its shareholders.
        </p>
      </Callout>
    </GuideArticle>
  );
}
