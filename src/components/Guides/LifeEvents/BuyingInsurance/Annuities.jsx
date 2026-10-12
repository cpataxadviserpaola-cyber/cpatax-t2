import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=51 (Annuities: How They Work and When You Should Use Them),
// word for word. Back-to-top anchors omitted (handled by layout). The library page repeats the
// "If a particular fund has a great track record" paragraph at the end of How Payouts Are
// Taxed; it appears here once, under Next, Compare Contracts, where it belongs.
// Address: /guides/life-events/buying-insurance/annuities (articlePages in src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'how-annuities-work',
    title: 'How Annuities Work',
    body: (
      <>
        <p>
          While traditional life insurance guards against "dying too soon," an annuity, in essence,
          can be used as insurance against "living too long." In brief, when you buy an annuity
          (generally from an insurance company, that invests your funds), you in turn receive a series
          of periodic payments that are guaranteed as to amount and payment period. Thus, if you
          choose to take the annuity payments <strong>over your lifetime</strong> (keep in mind that
          there are many other options), you will have a guaranteed source of "income" until your
          death. If you "die too soon" (that is, you <strong>don't</strong> outlive your life
          expectancy), you will get back from the insurer far <strong>less</strong> than you paid in.
          On the other hand, if you "live too long" (and <strong>do</strong> outlive your life
          expectancy), you may get back far <strong>more</strong> than the cost of your annuity (and
          the resultant earnings). By comparison, if you put your funds into a traditional investment,
          you may run out of funds before your death.
        </p>
        <p>
          The earnings that occur during the term of the annuity are tax-deferred. You are not taxed
          on them until they are paid out. Because of the tax deferral, your funds have the chance to
          grow more quickly than they would in a taxable investment.
        </p>
      </>
    ),
  },
  {
    id: 'how-annuities-best-serve',
    title: 'How Annuities Best Serve Investors',
    body: (
      <>
        <Callout label="Tip">
          <p>
            Assess the costs of an annuity relative to the alternatives. Separate purchase of life
            insurance and tax-deferred investments may be more cost effective.
          </p>
        </Callout>
        <p>The two primary reasons to use an annuity as an investment vehicle are:</p>
        <ol>
          <li>You want to save money for a long-range goal, and/or</li>
          <li>You want a guaranteed stream of income for a certain period of time.</li>
        </ol>
        <p>
          Annuities lend themselves particularly well to funding retirement and, in certain cases,
          education costs.
        </p>
        <p>
          One negative aspect of an annuity is that you cannot get to your money during the growth
          period without incurring taxes and penalties. The tax code imposes a 10 percent
          premature-withdrawal penalty on money taken out of a tax-deferred annuity before age 59½,
          and insurers impose penalties on withdrawals made before the term of the annuity is up. The
          insurers' penalties are termed "surrender charges," and they usually apply for the first
          seven years of the annuity contract.
        </p>
        <p>
          These penalties lead to a de facto restriction on the use of annuities primarily as an
          investment. It only makes sense to put your money into an annuity if you can leave it there
          for at least ten years and the withdrawals are scheduled to occur after age 59½. These
          restrictions explain why annuities work well for either retirement needs or for cases of
          education funding where the depositor will be at least 59½ when withdrawals begin.
        </p>
        <Callout label="Tip">
          <p>
            The greater the investment return, the less punishing the 10 percent penalty on withdrawal
            under age 59½ will appear. If your variable annuity investments have grown substantially,
            you may want to consider taking some of those profits (despite the penalty, which applies
            only to the taxable portion of the amount withdrawn).
          </p>
        </Callout>
        <p>
          Annuities can also be effective in funding education costs where the annuity is held in the
          child's name under the provisions of the Uniform Gifts to Minors Act. The child would then
          pay tax (and 10 percent penalty) on the earnings when the time came for withdrawals.
        </p>
        <Callout label="Caution">
          <p>
            A major drawback is that the child is free to use the money for any purpose, not just
            education costs.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'types-of-annuities',
    title: 'Types Of Annuities',
    body: (
      <>
        <p>
          The available annuity products vary in terms of (1) how money is paid into the annuity
          contract, (2) how money is withdrawn, and (3) how the funds are invested. Here is a rundown
          on some of the annuity products you can buy:
        </p>
        <p>
          <strong>Single-Premium Annuities.</strong> You can purchase a single-premium annuity, in
          which the investment is made <strong>all at once</strong> (perhaps using a lump sum from a
          retirement plan payout). The minimum investment is usually $5,000 or $10,000.
        </p>
        <p>
          <strong>Flexible-Premium Annuities.</strong> With the flexible-premium annuity, the annuity
          is funded with a <strong>series</strong> of payments. The first payment can be quite small.
        </p>
        <p>
          <strong>Immediate Annuities.</strong> The immediate annuity starts payments right after the
          annuity is funded. It is usually funded with a single premium and is usually purchased by
          retirees with funds they have accumulated for retirement.
        </p>
        <p>
          <strong>Deferred Annuities.</strong> With a deferred annuity, payouts begin many years after
          the annuity contract is issued. You can choose to take the scheduled payments either in a
          lump sum or as an annuity, that is, as regular annuity payments over some guaranteed period.
          Deferred annuities are used as long-term investment vehicles by retirees and non-retirees
          alike. They are used to fund tax-deferred retirement plans and tax-sheltered annuities.
          They may be funded with a single or flexible premium.
        </p>
        <p>
          <strong>Fixed Annuities.</strong> With a fixed annuity contract, the insurance company puts
          your funds into conservative fixed income investments such as bonds. Your principal is
          guaranteed and the insurance company gives you an interest rate that is guaranteed for a
          certain minimum period from a month to several years. This guaranteed interest rate is
          adjusted upwards or downwards at the end of the guarantee period. Thus, the fixed annuity
          contract is similar to a CD or a money market fund, depending on the length of the period
          during which interest is guaranteed. The fixed annuity is considered a low-risk investment
          vehicle. All fixed annuities also guarantee you a certain minimum rate of interest of 3 to 5
          percent for the entirety of the contract. The fixed annuity is a good choice for investors
          with a low-risk tolerance and a short-term investing time horizon. The growth that will occur
          will be relatively low. Fixed annuity investors benefit if interest rates fall, but not if
          they rise.
        </p>
        <p>
          <strong>Variable Annuities.</strong> The variable annuity, which is considered to carry
          with it higher risks than the fixed annuity—about the same risk level as a mutual fund
          investment—gives you the ability to choose how to allocate your money among several
          different managed funds. There are usually three types of funds: stocks, bonds, and
          cash-equivalents. Unlike the fixed annuity, there are no guarantees of principal or
          interest. However, the variable annuity does benefit from tax deferral on the earnings.
        </p>
        <Callout label="Tip">
          <p>You can switch your allocations from time to time for a small fee or sometimes for free.</p>
        </Callout>
        <p>
          The variable annuity is a good annuity choice for investors with a moderate to high-risk
          tolerance and a long-term investing time horizon. Variable annuities have higher costs than
          similar investments that are not issued by an insurance company.
        </p>
        <Callout label="Caution">
          <p>
            The taxable portion of variable annuity distributions is taxable at full ordinary rates,
            even if they are based on stock investments. Unlike dividends from stock investments
            (including mutual funds), there is no capital gains relief.
          </p>
        </Callout>
        <p>
          Annuities are available that combine both fixed and variable features. Before buying an
          annuity, contribute as much as possible to other tax-deferred options such as IRA's and 401
          (k) plans. The reason is that the fees for these plans are likely to be lower than those of an
          annuity and early-withdrawal fees on annuities tend to be steep.
        </p>
        <Callout label="Tip">
          <p>
            IRA contributions are sometimes invested in flexible premium annuities with IRA deduction,
            if otherwise available. You may prefer to use IRAs for non-annuity assets. Non-annuity
            assets gain the ability to grow tax-free when held in an IRA. The IRA regime adds no such
            benefit to annuity assets which grow tax-free in or outside IRAs.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'choosing-payout-option',
    title: 'Choosing A Payout Option',
    body: (
      <>
        <p>
          When it's time to begin taking withdrawals from your deferred annuity, you have a number of
          choices. Most people choose a monthly annuity-type payment, although a lump sum withdrawal
          is also possible.
        </p>
        <Callout label="Caution">
          <p>Once you have chosen a payment option, you cannot change your mind.</p>
        </Callout>
        <p>The size of your payout (settlement option) depends on:</p>
        <ol>
          <li>The size of the amount in your annuity contract</li>
          <li>Whether there are minimum required payments</li>
          <li>Your life expectancy (or other payout period)</li>
          <li>Whether payments continue after your death</li>
        </ol>
        <p>Here are summaries of the most common forms of payout:</p>

        <h3>Fixed Amount</h3>
        <p>
          This type gives you a fixed monthly <strong>amount</strong> (chosen by you) that continues
          until your annuity is used up. The risk of using this option is that you may live longer
          than your money lasts. Thus, if the annuity is your only source of income, the fixed amount
          is not a good choice. And, if you die before your annuity is exhausted, your beneficiary
          gets the rest.
        </p>

        <h3>Fixed Period</h3>
        <p>
          This option pays you a fixed amount over the time <strong>period</strong> you choose. For
          example, you might choose to have the annuity paid out over ten years. If you are seeking
          retirement income before some other benefits start, this may be a good option. If you die
          before the period is up, your beneficiary gets the remaining amount.
        </p>

        <h3>Lifetime or Straight Life</h3>
        <p>
          This type of payment continues until you die. There are no payments to survivors. The life
          annuity gives you the highest monthly benefit of the options listed here. The risk is that
          you will die early, thus leaving the insurance company with some of your funds. The life
          annuity is a good choice if (1) you do not need the annuity funds to provide for the needs
          of a beneficiary and (2) you want to maximize your monthly income.
        </p>

        <h3>Life With Period Certain</h3>
        <p>
          This form of payment gives you payments as long as you live (as does the life annuity) but
          with a minimum period during which you or your beneficiary will receive payments, even if
          you die earlier than expected. The longer the guarantee period, the lower the monthly
          benefit.
        </p>

        <h3>Installment-Refund</h3>
        <p>
          This option pays you as long as you live and guarantees that, should you die early, whatever
          is left of your original investment will be paid to a beneficiary. Monthly payments are less
          than with a straight life annuity.
        </p>

        <h3>Joint And Survivor</h3>
        <p>
          In one joint and survivor option, monthly payments are made during the annuitants' joint
          lives, with the same or a lesser amount paid to whoever is the survivor. In the option
          typically used for retired employees (employment model), monthly payments are made to the
          retired employee, with the same or a lesser amount to the employee's surviving spouse or
          another beneficiary. The difference is that with the employment model, the spouse's (or
          other co-annuitant's) death before the employee won't affect what the survivor employee
          collects. The amount of the monthly payments depends on the annuitants' ages, and whether
          the survivor's payment is to be 100 percent of the joint amount or some lesser percentage.
        </p>
      </>
    ),
  },
  {
    id: 'how-payouts-are-taxed',
    title: 'How Payouts Are Taxed',
    body: (
      <>
        <p>
          The way your payouts are taxed differs for qualified and non-qualified annuities.
        </p>

        <h3>Qualified Annuity</h3>
        <p>
          A tax-qualified annuity is one used to fund a qualified retirement plan, such as an IRA,
          Keogh plan, 401(k) plan, SEP (simplified employee pension), or some other retirement plan.
          The tax-qualified annuity, when used as a retirement savings vehicle, is entitled to all of
          the tax benefits (and penalties) that Congress saw fit to attach to such qualified plans.
        </p>
        <p>The tax benefits are:</p>
        <ol>
          <li>
            Any nondeductible or after-tax amount you put into the plan is not subject to income tax
            when withdrawn
          </li>
          <li>The earnings on your investment are not taxed until withdrawal</li>
        </ol>
        <p>
          If you withdraw money from a qualified plan annuity before the age of 59½, you will have to
          pay a 10 percent penalty on the amount withdrawn in addition to paying the regular income
          tax. There are exceptions to the 10 percent penalty, including an exception for taking the
          annuity out in a series of equal periodic payments over the rest of your life.
        </p>
        <p>
          For individuals who reached age 72 after December 31, 2022, and age 73 before January 1,
          2033, the applicable age for starting RMDs is 73. Roth IRAs and employees still in the
          workforce after age 73 are exempted. For individuals who attain age 74 after December 31,
          2032, the applicable age is 75. The new rules apply to distributions required after
          December 31, 2022, for individuals who attain age 72 after such date. In other words,
          taxpayers born between 1951 and 1959 will begin RMDs at age 73. Those born in 1960 or later will begin taking RMDs at age 75. [SECURE Act 2.0 of 2022]
        </p>

        <h3>Non-Qualified Annuity</h3>
        <p>
          A non-qualified annuity is purchased with <strong>after-tax</strong> dollars. You still get
          the benefit of tax deferral on the earnings; however, you pay tax on the part of the
          withdrawals that represent earnings on your original investment.
        </p>
        <p>
          If you make a withdrawal before the age of 59½, you will pay the 10 percent penalty only on
          the portion of the withdrawal that represents earnings.
        </p>
        <p>
          With a non-qualified annuity, you are not subject to the minimum distribution rules that
          apply to qualified plans after you reach age 73 in tax years 2023 to 2033.
        </p>

        <h3>Tax on Your Beneficiaries or Heirs</h3>
        <p>
          If your annuity is to continue after your death, other taxes may apply to your beneficiary
          (the person you designate to take further payments) or your heirs (your estate or those who
          take through the estate if you didn't designate a beneficiary).
        </p>
        <p>
          <strong>Income Tax.</strong> Annuity payments collected by your beneficiaries or heirs are
          subject to tax on the same principles that would apply to payments collected by you.
        </p>
        <p>
          <strong>Exception.</strong> There's no 10 percent penalty on withdrawal under age 59½,
          regardless of the recipient's age, or your age at death.
        </p>
        <p>
          <strong>Estate Tax.</strong> The present value at your death of the remaining annuity
          payments is an asset of your estate, and subject to estate tax with other estate assets.
          Annuities passing to your surviving spouse or to charity would escape this tax.
        </p>
      </>
    ),
  },
  {
    id: 'how-to-shop',
    title: 'How To Shop For An Annuity',
    body: (
      <>
        <p>
          Although annuities are typically issued by insurance companies, they may also be purchased
          through banks, insurance agents, or stockbrokers.
        </p>
        <p>
          There is considerable variation in the amount of fees that you will pay for a given annuity
          as well in the quality of the product. Thus, it is important to compare costs and quality
          before buying an annuity.
        </p>

        <h3>First, Check Out The Insurer</h3>
        <p>
          Before checking out the product itself, it is important to make sure that the insurance
          company offering it is financially sound. Because annuity investments are not federally
          guaranteed, the soundness of the insurance company is the only assurance you can rely on.
          Consult services such as{' '}
          <a href="https://www.ambest.com/" {...external}>A.M. Best Company</a>,{' '}
          <a href="https://www.moodys.com/" {...external}>Moody's Investor Service</a>, or{' '}
          <a href="https://www.spglobal.com/ratings/en/" {...external}>S&amp;P Global's Ratings</a> to
          find out how the insurer is rated.
        </p>

        <h3>Next, Compare Contracts</h3>
        <p>The way you should go about comparing annuity contracts varies with the type of annuity:</p>
        <p>
          <strong>Immediate Annuities:</strong> Compare the settlement options. For each $1,000
          invested, how much of a monthly payout will you get? Be sure to consider the interest rate
          and any penalties and charges.
        </p>
        <p>
          <strong>Deferred Annuities:</strong> Compare the rate, the length of guarantee period, and
          a five-year history of rates paid on the contract. It is important to consider all three of
          these factors and not to be swayed by high interest rates alone.
        </p>
        <p>
          <strong>Variable Annuities:</strong> Check out the past performance of the funds involved.
        </p>
        <p>
          If a particular fund has a great track record, ascertain whether the same management is
          still in place. Although past performance is no guarantee, consistent management will grant
          you better odds.
        </p>
      </>
    ),
  },
  {
    id: 'costs-penalties-extras',
    title: 'Costs, Penalties, And Extras',
    body: (
      <>
        <p>Be sure to compare the following points when considering an annuity contract:</p>

        <h3>Surrender Penalties</h3>
        <p>
          Find out the surrender charges (that is, the amounts charged for early withdrawals). The
          typical charge is seven percent for first-year withdrawals, six percent for the second
          year, and so on, with no charges after the seventh year. Charges that go beyond seven
          years, or that exceed the above amounts, should not be acceptable.
        </p>
        <Callout label="Tip">
          <p>
            Be sure the surrender charge "clock" starts running with the date your contract begins,
            not with each new investment.
          </p>
        </Callout>

        <h3>Fees And Costs</h3>
        <p>
          Be sure to ask about all other fees. With variable annuities, the fees must be disclosed in
          the prospectus. Fees lower your return, so it is important to know about them. Fees might
          include:
        </p>
        <ul>
          <li>
            Mortality fees of 1 to 1.35 percent of your account (protection for the insurer in case
            you live a long time)
          </li>
          <li>Maintenance fees of $20 to $30 per year</li>
          <li>
            Investment advisory fees of 0.3 percent to 1 percent of the assets in the annuity's
            portfolios.
          </li>
        </ul>

        <h3>Extras</h3>
        <p>
          These provisions are not costs per se, but should be asked about before you invest in the
          contract. Some annuity contracts offer "bail-out" provisions that allow you to cash in the
          annuity if interest rates fall below a stated amount without paying surrender charges.
        </p>
        <p>
          There may also be a "persistency" bonus which rewards annuitants who keep their annuities for
          a certain minimum length of time. In deciding whether to use annuities in your retirement
          planning (or for any other reason) and which types of annuities to use, professional
          guidance is advisable.
        </p>
      </>
    ),
  },
  {
    id: 'risk-to-retirees',
    title: 'Risk To Retirees of Using An Immediate Annuity',
    body: (
      <>
        <p>
          At first glance, the immediate annuity would seem to make sense for retirees with lump-sum
          distributions from retirement plans. After all, an initial lump-sum premium can be converted
          into a series of monthly, quarterly, or yearly payments that represent a portion of
          principal plus interest and is guaranteed to last for life. The portion of the periodic
          payout that constitutes a return of principal is excluded from taxable income.
        </p>
        <p>
          However, this strategy contains risks. For one thing, when you lock yourself into a lifetime
          of level payments, you fail to guard against inflation. Furthermore, you are gambling that
          you will live long enough to get your money back. Thus, if you buy a $150,000 annuity and
          die after collecting only $60,000, the insurer often gets to keep the rest. Unlike other
          investments, the balance doesn't go to your heirs. Finally, since the interest rate is
          fixed by the insurer when you buy it, you may be locking yourself into low rates.
        </p>
        <p>
          You can hedge your bets by opting for a "period certain," or "term certain" which, in the
          event of your death, guarantees payment for some years to your beneficiaries. There are also
          "joint-and-survivor" options (which pay your spouse for the remainder of his or her life
          after you die) or a "refund" feature (in which some or all of the remaining principal is
          resumed to your beneficiaries).
        </p>
        <p>
          Some plans offer quasi-inflation adjusted payments. One company offers a guaranteed increase
          in payments of $10 at three-year intervals for the first 15 years. Payments then get an annual
          cost-of-living adjustment with a three percent maximum. However, for these enhancements to
          apply, you will have to settle for much lower monthly payments than the simple version.
        </p>
        <p>
          Recently, a few companies have introduced immediate annuities that offer potentially higher
          returns in return for some market risk. These "variable immediate annuities" convert an
          initial premium into a lifetime income; however, they tie the monthly payments to the returns
          on a basket of mutual funds.
        </p>
        <p>
          Seniors 75 years of age and older may have fewer worries about inflation or liquidity.
          Nevertheless, they should question whether they really need such annuities at all.
        </p>
        <p>
          If you want a comfortable retirement income, consider a balanced portfolio of mutual funds.
          If you want to guarantee that you will not outlive your money, you can plan your withdrawals
          over a longer time horizon.
        </p>
      </>
    ),
  },
];

export default function Annuities() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-insurance"
      page="Annuities"
      title={
        <>
          Annuities: <em>How They Work and When You Should Use Them</em>
        </>
      }
      lead="Annuities may help you meet some of your mid and long-range goals such as planning for your retirement and for a child's college education. This Financial Guide tells you how annuities work, discusses the various types of annuities, and helps you determine which annuity product (if any) suits your situation. It also discusses the tax aspects of annuities and explains how to shop for both an insurance company and an annuity, once you know which type you'll need."
      sections={sections}
      numbered={false}
    />
  );
}
