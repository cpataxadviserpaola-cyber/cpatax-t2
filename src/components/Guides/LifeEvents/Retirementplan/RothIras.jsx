import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=60 (Roth IRAs: How They Work and How To Use Them),
// word for word. Back-to-top anchors omitted (handled by layout). The library's table of contents
// hides "Converting from a Traditional IRA…", but the section is on its page, so it is here and in
// the contents. Its "Qualified Distributions" to "Distributions after Owner's Death" headings sit
// under "How Withdrawals Are Treated". "59 1/2" is "59½", double hyphens and hyphens used as dashes
// are now dashes, "Aggregation (grouping and adding) rules." loses its full stop, and the sentence
// ending "also apply to Roth IRAs" gets one. The "Note", "Example", "Caution" and "Tip" boxes keep
// the library's labels.
// Address: /guides/life-events/planning-for-retirement/roth-iras (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'contributions',
    title: 'How Contributions Are Treated',
    body: (
      <>
        <p>
          The 2023 annual contribution limit to a Roth IRA is $6,500. An additional "catch-up" contribution of $1,000 is
          allowed for people age 50 or over bringing the contribution total to $7,500 for certain taxpayers. To make the
          full contribution, you must earn at least $6,500 ($7,500 if age 50 or older) from personal services and have
          income (modified adjusted gross income or MAGI) below $138,000 if single or $218,000 on a joint return in 2023.
          The $6500 limit in 2023 phases out on incomes between $138,000 and $153,000 (single filers) and $218,000 and
          $228,000 (joint filers). Also, the $6,500 limit is reduced for contributions to traditional IRAs though not SEP
          or SIMPLE IRAs.
        </p>
        <p>
          You can contribute to a Roth IRA for your spouse, subject to the income limits above. So assuming earnings
          (your own or combined with your spouse) of at least $13,000, up to $13,000 ($6,500 each) can go into the
          couple's Roth IRAs. As with traditional IRAs, there's a six percent penalty on excess contributions. The rule
          continues that the dollar limits are reduced by contributions to traditional IRAs.
        </p>
      </>
    ),
  },
  {
    id: 'withdrawals',
    title: 'How Withdrawals Are Treated',
    body: (
      <>
        <p>
          You may withdraw money from a Roth IRA at any time; however, taxes and penalty could apply depending on the
          timing of contributions and withdrawals.
        </p>

        <h3>Qualified Distributions</h3>
        <p>
          Since all your investments in a Roth IRA are after-tax, your withdrawals, whenever you make them, are often
          tax-free. But the best kind of withdrawal, which allows earnings, as well as contributions and conversion,
          amounts to come out completely tax-free, are qualified distributions. These are withdrawals meeting the
          following conditions:
        </p>
        <p>
          1. At least, five years have elapsed since the first year a Roth IRA contribution was made or, in the case of a
          conversion since the conversion occurred and
        </p>
        <p>
          2. At least <strong>one</strong> of these additional conditions is met:
        </p>
        <ul>
          <li>The owner is age 59½.</li>
          <li>The owner is disabled.</li>
          <li>The owner has died (distribution is to estate or heir).</li>
          <li>Withdrawal is for a first-time home that you build, rebuild, or buy (lifetime limit up to $10,000).</li>
        </ul>
        <Callout label="Note">
          <p>
            A distribution used to buy, build or rebuild a first home must be used to pay qualified costs for the main
            home of a first-time home buyer who is either yourself, your spouse or you or your spouse's child,
            grandchild, parent or another ancestor.
          </p>
        </Callout>

        <h3>Non-Qualified Distributions</h3>
        <p>
          To discourage the use of pension funds for purposes other than normal retirement, the law imposes an
          additional 10 percent tax on certain early distributions from Roth IRAs unless an exception applies.
          Generally, early distributions are those you receive from an IRA before reaching age 59½.
        </p>
        <p>
          <strong>Exceptions.</strong> You may not have to pay the 10 percent additional tax in the following
          situations:
        </p>
        <ul>
          <li>You are disabled.</li>
          <li>You are the beneficiary of a deceased IRA owner.</li>
          <li>You use the distribution to pay certain qualified first-time homebuyer amounts.</li>
          <li>The distributions are part of a series of substantially equal payments.</li>
          <li>You have significant unreimbursed medical expenses.</li>
          <li>You are paying medical insurance premiums after losing your job.</li>
          <li>The distributions are not more than your qualified higher education expenses.</li>
          <li>The distribution is due to an IRS levy of the qualified plan.</li>
          <li>The distribution is a qualified reservist distribution.</li>
        </ul>
        <p>
          Part of any distribution that is not a qualified distribution may be taxable as ordinary income and subject to
          the additional 10 percent tax on early distributions. Distributions of conversion contributions within a
          5-year period following a conversion may be subject to the 10 percent early distribution tax, even if the
          contributions have been included as income in an earlier year.
        </p>

        <h3>Ordering Rules for Distributions</h3>
        <p>
          If you receive a distribution from your Roth IRA, that is not a qualified distribution, part of it may be
          taxable. There is a set order in which contributions (including conversion contributions) and earnings are
          considered to be distributed from your Roth IRA. Order the distributions as follows.
        </p>
        <ol>
          <li>Regular contributions.</li>
          <li>
            Conversion contributions, on a first-in-first-out basis (generally, total conversions from the earliest year
            first). See Aggregation (grouping and adding) rules, later. Take these conversion contributions into account
            as follows:
            <ul>
              <li>
                Taxable portion (the amount required to be included in gross income because of conversion) first, and
                then the
              </li>
              <li>Nontaxable portion.</li>
            </ul>
          </li>
          <li>Earnings on contributions.</li>
        </ol>
        <p>Disregard rollover contributions from other Roth IRAs for this purpose.</p>

        <h3>Aggregation (grouping and adding) rules</h3>
        <p>
          Determine the taxable amounts distributed (withdrawn), distributions, and contributions by grouping and adding
          them together as follows.
        </p>
        <ul>
          <li>Add all distributions from all your Roth IRAs during the year together.</li>
          <li>
            Add all regular contributions made for the year (including contributions made after the close of the year,
            but before the due date of your return) together. Add this total to the total undistributed regular
            contributions made in prior years.
          </li>
          <li>Add all conversion and rollover contributions made during the year together.</li>
        </ul>
        <p>
          For years prior to 2018, add any recharacterized contributions that end up in a Roth IRA to the appropriate
          contribution group for the year that the original contribution would have been taken into account if it had
          been made directly to the Roth IRA. Disregard any recharacterized contribution that ends up in an IRA other
          than a Roth IRA for the purpose of grouping (aggregating) both contributions and distributions. Also,
          disregard any amount withdrawn to correct an excess contribution (including the earnings withdrawn) for this
          purpose.
        </p>
        <Callout label="Example">
          <p>
            On October 15, 2016, Justin converted all $80,000 in his traditional IRA to his Roth IRA. His Forms 8606 from
            prior years show that $20,000 of the amount converted is his basis. Justin included $60,000 ($80,000 −
            $20,000) in his gross income. On February 23, 2017, Justin makes a regular contribution of $4,000 to a Roth
            IRA. On November 7, 2023, at age 65 Justin takes a $7,000 distribution from his Roth IRA.
          </p>
          <ul>
            <li>
              The first $4,000 of the distribution is a return of Justin's regular contribution and is not includible
              in his income.
            </li>
            <li>The next $3,000 of the distribution is not includible in income because it was included previously.</li>
          </ul>
        </Callout>

        <h3>Distributions after Owner's Death</h3>
        <p>
          Qualified distributions after the owner's death are tax-free to heirs. Nonqualified distributions after
          death, which are distributions where the 5-year holding period wasn't met, are taxable income to heirs as
          they would be to the owner (the earnings are taxed), except there's no penalty tax on early withdrawal.
          However, an owner's surviving spouse can convert an inherited Roth IRA into his or her own Roth IRA. This
          way, distribution can be postponed, so that nonqualified amounts can become qualified, and the tax shelter
          prolonged.
        </p>
        <p>Roth IRA assets left at death are subject to federal estate tax, just as traditional IRA assets are.</p>
      </>
    ),
  },
  {
    id: 'converting',
    title: 'Converting from a Traditional IRA or Other Eligible Retirement Plan to a Roth IRA',
    body: (
      <>
        <p>
          The conversion of your traditional IRA to a Roth IRA was the feature that caused most excitement about Roth
          IRAs. Conversion means that what would be a taxable traditional IRA distribution can be made into a
          tax-exempt Roth IRA distribution. Starting in 2008, further conversion or rollover opportunities from other
          eligible retirement plans were made available to taxpayers.
        </p>

        <h3>Conversion Methods</h3>
        <p>
          You can convert a traditional IRA to a Roth IRA. The conversion is treated as a rollover, regardless of the
          conversion method used.
        </p>
        <p>You can convert amounts from a traditional IRA to a Roth IRA in any of the following three ways.</p>
        <ul>
          <li>
            <strong>Rollover.</strong> You can receive a distribution from a traditional IRA and roll it over
            (contribute it) to a Roth IRA within 60 days after the distribution.
          </li>
          <li>
            <strong>Trustee-to-trustee transfer.</strong> You can direct the trustee of the traditional IRA to transfer
            an amount from the traditional IRA to the trustee of the Roth IRA.
          </li>
          <li>
            <strong>Same trustee transfer.</strong> If the trustee of the traditional IRA also maintains the Roth IRA,
            you can direct the trustee to transfer an amount from the traditional IRA to the Roth IRA.
          </li>
        </ul>
        <Callout label="Note">
          <p>
            Conversions made with the same trustee can be made by redesignating the traditional IRA as a Roth IRA,
            rather than opening a new account or issuing a new contract.
          </p>
        </Callout>
        <p>
          Prior to 2008, you could only roll over (convert) amounts from either a traditional, SEP, or SIMPLE IRA into a
          Roth IRA. You can now roll over amounts from the following plans into a Roth IRA.
        </p>
        <ul>
          <li>A qualified pension, profit-sharing or stock bonus plan (including a 401(k) plan),</li>
          <li>An annuity plan,</li>
          <li>A tax-sheltered annuity plan (section 403(b) plan),</li>
          <li>A deferred compensation plan of a state or local government (section 457 plan), or</li>
          <li>An IRA.</li>
        </ul>
        <p>
          Any amount rolled over is subject to the same rules for converting a traditional IRA to a Roth IRA. Also, the
          rollover contribution must meet the rollover requirements that apply to the specific type of retirement plan.
        </p>
        <p>
          There is a cost to the rollover. The amount converted is fully taxable in the year converted, except for the
          portion of after-tax investment in the traditional IRA. So you must pay tax now (though there's no early
          withdrawal penalty) for the opportunity to withdraw tax-free later, an opportunity that can extend to your
          heirs.
        </p>
      </>
    ),
  },
  {
    id: 'undoing-a-conversion',
    title: 'Undoing a Conversion to a Roth IRA',
    body: (
      <>
        <Callout label="Caution">
          <p>The information in this section only applies to taxable years beginning after December 31, 2017.</p>
          <p>
            Under tax reform (Tax Cuts and Jobs Act of 2017), if a contribution to a regular IRA has been converted into
            a contribution to a Roth IRA, it can no longer be converted back into a contribution to a regular IRA. This
            provision prevents a taxpayer from using recharacterization to unwind a Roth conversion.
          </p>
        </Callout>
        <p>
          Since everyone recognizes that conversion is a high-risk exercise, the law, and liberal IRS rules provide an
          escape hatch: You can undo a Roth IRA conversion by what IRS calls a "recharacterization." This move, by which
          you move your conversion assets from a Roth IRA back to a traditional IRA, makes what would have been a
          taxable conversion into a tax-free rollover between traditional IRAs. Re-characterization can be done any time
          until the due date for the return for the year of conversion.
        </p>
        <Callout label="Example">
          <p>
            If your assets are worth $180,000 at conversion and fall to $140,000 later, you're taxed on up to $180,000,
            which is $40,000 more than you now have. Undoing—re-characterization—avoids the tax, and gets you out of the
            Roth IRA.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            One reason to do this, dramatized by a volatile stock market, is where the value of your portfolio drops
            sharply after the conversion.
          </p>
        </Callout>
        <p>
          Can you undo one Roth IRA conversion and then make another one a reconversion? Yes, but only one time and
          subject to the following requirements: Reconversion must take place in the tax year following the original
          conversion to Roth IRA, and the reconversion date must also be more than 30 days after the previous
          recharacterization transfer from the Roth IRA back to the traditional IRA.
        </p>
      </>
    ),
  },
  {
    id: 'withdrawal-requirements',
    title: 'Withdrawal Requirements',
    body: (
      <>
        <p>
          You are not required to take distributions from your Roth IRA once you reach a particular age. The minimum
          distribution rules that apply to traditional IRAs do not apply to Roth IRAs while the owner is alive. However,
          after the death of a Roth IRA owner, certain of the minimum distribution rules that apply to traditional IRAs
          also apply to Roth IRAs.
        </p>
        <p>
          Also, unlike traditional IRAs (but like other tax-favored retirement plans), a Roth IRA owner who continues
          working may continue to contribute to the Roth IRA.
        </p>
      </>
    ),
  },
  {
    id: 'savers-credit',
    title: "Retirement Savings Contributions Credit (Saver's Credit)",
    body: (
      <>
        <p>
          Also known as the saver's credit, this credit helps low and moderate-income workers save for retirement.
          Taxpayers age 18 and over who are not full-time students and can't be claimed as dependents, are allowed a tax
          credit for their contributions to a workplace retirement plan, traditional or Roth IRA if their modified
          adjusted gross income (MAGI) in 2023 for a married filer is below $73,000. For heads-of-household MAGI is below
          $54,750 and for others (single, married filing separately) it is below $36,500.
        </p>
        <p>
          These amounts are indexed for inflation each year. The credit, up to $1,000, is a percentage from 10 to 50
          percent of each dollar placed into a qualified retirement plan up to the first $2,000 ($4,000 married filing
          jointly). The lower the MAGI is, the higher the credit percentage, resulting in the maximum credit of $1,000
          (50 percent of $2,000). Both you and your spouse may be eligible to receive this credit if you both contributed
          to a qualified retirement plan and meet the adjusted gross income limits.
        </p>
        <Callout label="Note">
          <p>
            The saver's credit is available in addition to any other tax savings that apply. Further, IRA contributions
            can be made until the April 15 tax return due date of the following year and still be considered in the
            current tax year.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'estate-planning',
    title: 'Use in Estate Planning',
    body: (
      <>
        <p>
          Though Roth IRAs enjoy no estate tax relief, they are already figuring in estate plans. The aim is to build a
          large Roth IRA fund largely through conversion of traditional IRAs—to pass to beneficiaries in later
          generations. The beneficiaries will be tax exempt on withdrawals (of qualified distributions) and the Roth IRA
          tax shelter continues by spreading withdrawal over their lifetimes.
        </p>
        <p>
          <strong>Long-term planning with Roth IRAs.</strong> If you would be allowed a deduction for a contribution to a
          traditional IRA, contributing to a Roth IRA means surrendering current tax reduction for future tax reduction
          (to zero) for qualified distributions. This can be presented as an after-tax return-on-investment calculation
          involving assumed future tax rates. The higher the projected tax rate at withdrawal, the more tax Roth IRA
          saves.
        </p>
        <p>
          Comparable considerations apply to conversions to Roth IRAs. Here the taxpayer incurs substantial current tax
          cost (directly or indirectly reducing the amount invested) for future tax relief to the taxpayer or an heir. So
          the return on investment resulting from conversion increases as projected future rates rise.
        </p>
        <p>
          A key element in making such projections is the possibility that current and future federal deficits will lead
          to future tax rate increases a factor which would tend to encourage current Roth IRA investment and
          conversion. On the other hand, there's the question whether Roth IRA benefits currently promised will survive
          into future decades.
        </p>
        <p>
          Highly sophisticated planning is required for Roth IRA conversions. Consultation with a qualified advisor is a
          must. Please call if you have any questions.
        </p>
      </>
    ),
  },
];

export default function RothIras() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-for-retirement"
      page="Roth IRAs"
      title={
        <>
          Roth IRAs: <em>How They Work and How To Use Them</em>
        </>
      }
      lead={`Roth IRAs differ from other tax-favored retirement plans, including other IRAs (called "traditional IRAs"), in that they promise complete tax exemption on distribution. There are other important differences as well, and many qualifications about their use. This Financial Guide shows how they work, how they compare with other retirement devices—and why YOU might want one, or more.`}
      sections={sections}
      numbered={false}
    >
      <p>
        With most tax-favored retirement plans, the contribution to (i.e., investment in) the plan is deductible, the
        investment compounds tax-free until distributed, and distributions are taxable as received. There are variations
        from this pattern, as with 401(k)s where the exemption for salary diverted to a 401(k) takes the place of a
        deduction and for after-tax investments where invested capital is tax-free when distributed.
      </p>
      <p>
        With a Roth IRA, there's never an up-front deduction for contributions. Funds contributed compound tax-free until
        distributed (standard for all tax-favored plans) and distributions are completely exempt from income tax.
      </p>
    </GuideArticle>
  );
}
