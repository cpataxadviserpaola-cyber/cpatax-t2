import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=14 (Annuities: Frequently Asked Questions), word
// for word. "59-1/2" and "59 1/2" are "59½", as on the Annuities guide, and double hyphens are
// now dashes. The library's page has no introduction, so the banner's opening line (`lead`) is
// written for this site, as on the other FAQ pages.
// Address: /guides/life-events/buying-insurance/annuities-faq (articlePages in src/data/guides.js).
// The Investment Strategies list on the Guides page links here too.

const sections = [
  {
    id: 'variable-annuities',
    title: 'What are variable annuities?',
    body: (
      <>
        <p>
          Variable annuity contracts are sold by insurance companies. Purchasers pay a premium of, for example, $10,000
          for a single payment variable annuity or $50 a month for a periodic payment variable annuity. The insurance
          company deposits these premiums in an account that is invested in a portfolio of securities. The value of the
          portfolio goes up or down as the prices of its securities rise or fall.
        </p>
        <p>
          After a specified period of time, which often coincides with the year the purchaser turns age 65, the assets
          are converted into annuity payments. Although the insurance company guarantees a minimum payment, these
          payments are variable, since they depend on the periodic performance of the underlying securities.
        </p>
        <p>
          Almost all variable annuity contracts carry sales charges, administrative charges, and asset charges. The
          amounts differ from one contract to another and from one insurance company to another.
        </p>
        <p>
          Fixed annuity contracts are not considered securities and are not regulated by the SEC (Securities and
          Exchange Commission).
        </p>
      </>
    ),
  },
  {
    id: 'how-they-work',
    title: 'How do annuities work?',
    body: (
      <>
        <p>
          An annuity, in essence, is insurance against "living too long." In contrast, traditional life insurance
          guards against "dying too soon." Briefly, here is how annuities function: An investor hands over funds to an
          insurance company. The insurer invests the funds. At the end of the annuity's term, the insurer pays the
          investor his or her investment plus the earnings. The amount paid at maturity may be a lump sum or an
          annuity, which is a set of periodic payments that are guaranteed as to amount and payment period.
        </p>
        <p>
          Earnings that occur during the term of the annuity are tax-deferred and an investor is not taxed until the
          amounts are paid out. Because of the tax deferral, your funds have the chance to grow more quickly than they
          would in a taxable investment.
        </p>
      </>
    ),
  },
  {
    id: 'should-i-invest',
    title: 'Should I invest in annuities?',
    body: (
      <>
        <p>There are two reasons to use an annuity as an investment vehicle:</p>
        <ol>
          <li>You want to save money for a long-range goal, and/or</li>
          <li>You want a guaranteed stream of income for a certain period of time.</li>
        </ol>
        <p>Annuities lend themselves well to funding retirement, and, in certain cases, education costs.</p>
        <p>
          One negative aspect of an annuity is that you cannot get to your money during the growth period without
          incurring taxes and penalties. The tax code imposes a 10 percent premature withdrawal penalty on money taken
          out of a tax-deferred annuity before age 59½, and insurers impose penalties on withdrawals made before the
          term of the annuity is up. The insurers' penalties are termed "surrender charges," and they usually apply
          for the first seven years of the annuity contract.
        </p>
        <p>
          These penalties lead to a de facto restriction on the use of annuities as an investment. It really only
          makes sense to put your money in an annuity if you can leave it there for at least ten years, and only when
          the withdrawals are scheduled to occur after age 59½. This is why annuities work well mostly for retirement
          needs, or for education funding in cases where the depositor will be at least 59½ when withdrawals begin.
        </p>
        <p>
          Annuities can also be effective in funding education costs where the annuity is held in the child's name
          under the provisions of the Uniform Gifts to Minors Act. The child would then pay tax on the earnings when
          the time came for withdrawals. A major drawback to this planning technique is that the child is free to use
          the money for any purpose, not just education costs.
        </p>
        <p>
          If an investment adviser recommends a tax-deferred variable annuity, should you invest it? Or would a
          regular taxable investment be better?
        </p>
        <p>
          Generally, you should be aware that tax-deferred annuities very often yield less than regular investments.
          They have higher expenses than regular investments, and these expenses eat into your returns. On the plus
          side, the annuity provides a death benefit. You should also be aware that there may be a commission on the
          product an investment adviser may be entitled to a commission on the product he or she is recommending.
        </p>
      </>
    ),
  },
  {
    id: 'immediate-annuity',
    title: 'Should a retiree purchase an immediate annuity?',
    body: (
      <>
        <p>
          At first glance, the immediate annuity would seem to make sense for retirees with lump-sum distributions
          from retirement plans. After all, an initial lump-sum premium can be converted into a series of monthly,
          quarterly or yearly payments, representing a portion of principal plus interest, and guaranteed to last for
          life. The portion of the periodic payout that is a return of principal is excluded from taxable income.
        </p>
        <p>
          However, there are risks. For one thing, when you lock yourself into a lifetime of level payments, you
          aren't guarding against inflation. You are also gambling that you will live long enough to get your money
          back. Thus, if you buy a $150,000 annuity and die after collecting only $60,000, the insurer often gets to
          keep the rest. Unlike other investments, the balance doesn't go to your heirs. Furthermore, since the
          interest rate is fixed by the insurer when you buy it, you are locking into today's low rates.
        </p>
        <p>
          You can hedge your bets by opting for what's called a "certain period," which, in the event of your death,
          guarantees payment for some years to your beneficiaries. There are also "joint-and-survivor" options, which
          pay your spouse for the remainder of his or her life after you die, or a "refund" feature, in which a portion
          of the remaining principal is resumed to your beneficiaries.
        </p>
        <p>
          Some plans offer quasi-inflation adjusted payments. One company offers a guaranteed increase in payments of
          10 percent at three-year intervals for the first 15 years. Payments are then subject to an annual
          cost-of-living adjustment, with a 3 percent maximum. However, for these enhancements to apply, you will have
          to settle for much lower monthly payments than the simple version.
        </p>
        <p>
          A few companies have introduced immediate annuities that offer potentially higher returns in return for some
          market risk. These "variable, immediate annuities" convert an initial premium into a lifetime income;
          however, they tie the monthly payments to the returns on a basket of mutual funds.
        </p>
        <p>
          If you want a comfortable retirement income, your best bet is a balanced portfolio of mutual funds. If you
          want to guarantee that you will not outlive your money, you can plan your withdrawals over a longer time
          horizon.
        </p>
      </>
    ),
  },
  {
    id: 'life-insurance',
    title: 'How do life annuities differ from life insurance?',
    body: (
      <>
        <p>
          While traditional life insurance guards against "dying too soon," an annuity, in essence, can be used as
          insurance against "living too long." With an annuity, you will receive in return a series of periodic
          payments that are guaranteed as to amount and payment period. Thus, if you choose to take the annuity
          payments over your lifetime (there are many other options), you will have a guaranteed source of "income"
          until your death.
        </p>
        <p>
          If you "die too soon" (that is, you don't outlive your life expectancy), you will get back from the insurer
          far less than you paid in. On the other hand, if you "live too long" and outlive your life expectancy you
          may get back far more than the cost of your annuity—along with the resultant earnings. By comparison, if you
          put your funds into a traditional investment, you may run out of funds before your death.
        </p>
      </>
    ),
  },
  {
    id: 'down-side',
    title: "What's the down side to buying an annuity?",
    body: (
      <p>
        You cannot get to your money during the growth period without incurring taxes and penalties. The tax code
        imposes a 10 percent premature-withdrawal penalty on money taken out of a tax-deferred annuity before age 59½
        and insurers impose penalties on withdrawals made before the term of the annuity is up. The insurers' penalties
        are termed "surrender charges," and they usually apply for the first seven years of the annuity contract.
      </p>
    ),
  },
  {
    id: 'types',
    title: 'What types of annuities are available?',
    body: (
      <>
        <p>
          You can purchase a <strong>single-premium annuity</strong>, in which the investment is made all at once
          (perhaps using a lump sum from a retirement plan payout).
        </p>
        <p>
          With the <strong>flexible-premium annuity</strong>, the annuity is funded with a series of payments. The
          first payment can be quite small.
        </p>
        <p>
          The <strong>immediate annuity</strong> starts payments right after the annuity is funded. It is usually
          funded with a single premium, and is usually purchased by retirees with funds they have accumulated for
          retirement.
        </p>
        <p>
          With a <strong>deferred annuity</strong>, payouts begin many years after the annuity contract is issued.
          Deferred annuities are used as long-term investment vehicles by retirees and non-retirees alike. They are
          used in tax-deferred retirement plans and as individual tax-sheltered annuity investments, and may be funded
          with a single or flexible premium.
        </p>
        <p>
          With a <strong>fixed annuity</strong> contract, the insurance company puts your funds into conservative,
          fixed income investments such as bonds. Your principal is guaranteed, and the insurance company gives you an
          interest rate that is guaranteed for a certain minimum period—from a month to a year, or more. A fixed
          annuity contract is similar to a CD or a money market fund, depending on length of the period during which
          interest is guaranteed, and is considered a low risk investment vehicle.
        </p>
        <p>This guaranteed interest rate is adjusted upwards or downwards at the end of the guarantee period.</p>
        <p>
          All fixed annuities also guarantee you a certain minimum rate of interest of 3 to 5 percent for the entirety
          of the contract.
        </p>
        <p>
          The fixed annuity is a good annuity choice for investors with a low risk tolerance and a short-term investing
          time horizon. The growth that will occur will be relatively low. In times of falling interest rates, fixed
          annuity investors benefit, while in times of rising interest rates they do not.
        </p>
        <p>
          The <strong>variable annuity</strong>, which is considered to carry with it higher risks than the fixed
          annuity (about the same risk level as a mutual fund investment) gives you the ability to choose how to
          allocate your money among several different managed funds. There are usually three types of funds: stocks,
          bonds, and cash-equivalents. Unlike the fixed annuity, there are no guarantees of principal or interest.
          However, the variable annuity does benefit from tax deferral on the earnings.
        </p>
        <p>You can switch your allocations from time to time for a small fee or sometimes for free.</p>
        <p>
          The variable annuity is a good annuity choice for investors with a moderate to high risk tolerance and a
          long-term investing time horizon.
        </p>
        <Callout label="Tip">
          <p>Today, insurers make available annuities that combine both fixed and variable features.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'collecting',
    title: 'What are my options for collecting my annuity?',
    body: (
      <>
        <p>
          When it's time to begin taking withdrawals from your deferred annuity, you have several choices. Most people
          choose a monthly annuity-type payment, although a lump sum withdrawal is also possible. The size of your
          monthly payment depends on several factors including:
        </p>
        <ol>
          <li>The size of the amount in your annuity contract</li>
          <li>Whether there are minimum required payments</li>
          <li>The annuitant's life expectancy</li>
          <li>Whether payments continue after the annuitant's death</li>
        </ol>
        <p>
          Summaries of the most common forms of payment (settlement options) are listed below. Keep in mind that once
          you have chosen a payment option, you cannot change your mind.
        </p>
        <p>
          <strong>Fixed Amount</strong> gives you a fixed monthly amount (chosen by you) that continues until your
          annuity is used up. The risk of using this option is that you may live longer than your money lasts. If you
          die before your annuity is exhausted, your beneficiary gets the rest.
        </p>
        <p>
          <strong>Fixed Period</strong> pays you a fixed amount over the time period you choose. For example, you might
          choose to have the annuity paid out over ten years. If you are seeking retirement income before some other
          benefits start, this may be a good option. If you die before the period is up, your beneficiary gets the
          remaining amount.
        </p>
        <p>
          <strong>Lifetime or Straight Life</strong> payments continue until you die. There are no payments to
          survivors. The life annuity gives you the highest monthly benefit of the options listed here. The risk is
          that you will die early, thus leaving the insurance company with some of your funds.
        </p>
        <p>
          <strong>Life with Period Certain</strong> gives you payments as long as you live (as does the life annuity)
          but with a minimum period during which you or your beneficiary will receive payments, even if you die earlier
          than expected. The longer the guarantee period is, the lower the monthly benefit will be.
        </p>
        <p>
          <strong>Installment-Refund</strong> pays you as long as you live and guarantees that, should you die early,
          whatever is left of your original investment will be paid to a beneficiary.
        </p>
        <p>
          <strong>Joint and Survivor.</strong> In one joint and survivor option, monthly payments are made during the
          annuitants' joint lives, with the same or a lesser amount paid to whoever is the survivor. In the option
          typically used for retired employees, monthly payments are made to the retired employee, with the same or a
          lesser amount to the employee's surviving spouse or other beneficiary. In this case, the spouse's (or other
          co-annuitant's) death before the employee won't affect what the survivor employee collects. The amount of the
          monthly payments depends on the annuitants' ages and whether the survivor's payment is to be 100 percent of
          the joint amount or some lesser percentage.
        </p>
      </>
    ),
  },
  {
    id: 'qualified-plan-tax',
    title: "What's the tax on payouts from a qualified plan or IRA annuity?",
    body: (
      <>
        <p>
          A tax-qualified annuity is one used to fund a qualified retirement plan, such as an IRA, Keogh plan, 401(k)
          plan, SEP (Simplified Employee Pension), or some other retirement plan.
        </p>
        <ol>
          <li>Any nondeductible or after-tax amount you put into the plan is not subject to income tax when withdrawn</li>
          <li>The earnings on your investment are not taxed until withdrawal.</li>
        </ol>
        <p>
          If you withdraw money before the age of 59½, you may have to pay a 10 percent penalty on the amount withdrawn
          in addition to the regular income tax. One of the exceptions to the 10 percent penalty is for taking the
          annuity out in equal periodic payments over the rest of your life.
        </p>
        <p>
          Once you reach the age after which retirement plan required minimum distributions (RMDs) must begin (age 73
          for 2024 through 2032), you will have to start taking withdrawals in certain minimum amounts specified by the
          tax law (with exceptions for Roth accounts and certain other retirement accounts of employees still working).
        </p>
      </>
    ),
  },
  {
    id: 'ira-annuities',
    title: 'Is it a good idea to buy annuities for my IRA or qualified plan?',
    body: (
      <p>
        Though this is sometimes done, no tax advantage is gained by putting annuities in such a plan since qualified
        plans and IRAs as well as annuities are tax-deferred. It might be better, depending on your situation, to put
        other investments such as mutual funds in IRAs and qualified retirement plans, and hold annuities in your
        individual account.
      </p>
    ),
  },
  {
    id: 'payouts-taxed',
    title: 'How will my annuity payouts be taxed?',
    body: (
      <>
        <p>
          Payouts are taxed differently for qualified and non-qualified plans. These differences are summarized below.
        </p>
        <h3>Qualified and Non-Qualified Annuities</h3>
        <p>
          A tax-qualified annuity is one used to fund a qualified retirement plan, such as an IRA, Keogh plan, 401(k)
          plan, SEP (Simplified Employee Pension), or some other retirement plan. The tax-qualified annuity, when used
          as a retirement savings vehicle, is entitled to all of the tax benefits—and penalties—that Congress saw fit
          to attach to such plans.
        </p>
        <p>The tax benefits are:</p>
        <ol>
          <li>The amount you put into the plan is not subject to income tax, and/or</li>
          <li>The earnings on your investment are not taxed until withdrawal.</li>
        </ol>
        <p>
          A non-qualified annuity, on the other hand, is purchased with after-tax dollars. You still get the benefit of
          tax deferral on the earnings.
        </p>
        <h3>Tax Rules for Qualified Annuities</h3>
        <p>
          When you withdraw money from a qualified plan annuity that was funded with pre-tax dollars, you must pay
          income tax on the entire amount withdrawn.
        </p>
        <p>
          Once you reach the age after which retirement plan required minimum distributions (RMDs) must begin (age 73
          for 2024 through 2032), you will have to start taking withdrawals, in certain minimum amounts specified by
          the tax law.
        </p>
        <h3>Tax Rules for Non-Qualified Annuities</h3>
        <p>
          With a non-qualified plan annuity that was funded with after-tax dollars, you pay tax only on the part of the
          withdrawal that represents earnings on your original investment.
        </p>
        <p>
          If you make a withdrawal before the age of 59½, you will pay the 10 percent penalty only on the portion of
          the withdrawal that represents earnings.
        </p>
        <p>With a non-qualified annuity, you are not subject to RMDs after age 73.</p>
      </>
    ),
  },
  {
    id: 'beneficiaries-heirs',
    title: 'What tax must my beneficiaries or heirs pay if my annuity continues after my death?',
    body: (
      <>
        <p>
          Taxes may apply to your beneficiary (the person you designate to take further payments) or your heirs (your
          estate or those who take through the estate if you didn't designate a beneficiary).
        </p>
        <p>
          <em>Income tax.</em> Annuity payments collected by your beneficiaries or heirs are subject to tax on the same
          principles that would apply to payments collected by you.
        </p>
        <p>
          <strong>Exception:</strong> There's no 10 percent penalty on withdrawal under age 59½ regardless of the
          recipient's age, or your age at death.
        </p>
        <p>
          <em>Estate tax.</em> The present value at your death of the remaining annuity payments is an asset of your
          estate and subject to estate tax with other estate assets. Annuities passing to your surviving spouse or to
          charity would escape this tax.
        </p>
      </>
    ),
  },
  {
    id: 'shop',
    title: 'How should I shop for an annuity?',
    body: (
      <>
        <p>
          <em>Check Out The Insurer.</em> Make sure that the insurance company offering it is financially sound.
          Annuity investments are not federally guaranteed, so the soundness of the insurance company is the only
          assurance you can rely on. Several services rate insurance companies.
        </p>
        <p>
          <em>Compare Contracts.</em> For immediate annuities: Compare the settlement options. For each $1,000
          invested, how much of a monthly payout will you get? Consider the interest rate and any penalties and
          charges.
        </p>
        <p>
          <em>Deferred annuities.</em> Compare the rate, the length of guarantee period, and a five-year history of
          rates paid on the contract, not just the interest rates.
        </p>
        <p>
          <em>Variable annuities.</em> Check out the past performance of the funds involved.
        </p>
        <p>
          If a particular fund has a great track record, ascertain whether the same management is still in place.
          Although past performance is no guarantee, consistent management will grant you better odds.
        </p>
      </>
    ),
  },
  {
    id: 'hidden-costs',
    title: 'What are the added or hidden costs in buying an annuity?',
    body: (
      <>
        <p>There are costs associated with annuities. Here are the most important items you should be aware of:</p>
        <p>
          <em>Sales Commission.</em> Ask for details on any commissions you will be paying. What percentage is the
          commission? Is the commission deducted as a front-end load? If so, your investment is directly reduced by the
          amount of the commission. A no-load annuity contract, or at least a low-load contract, is the best choice.
        </p>
        <p>
          <em>Surrender Penalties.</em> Find out the surrender charges (that is, the amounts charged for early
          withdrawals). The typical charge is 7 percent for first-year withdrawals, 6 percent for the second year, and
          so on, with no charges after the seventh year.
        </p>
        <Callout label="Tip">
          <p>
            Be sure the surrender charge "clock" starts running with the date your contract begins, not with each new
            investment.
          </p>
        </Callout>
        <p>
          <em>Other Fees and Costs.</em> Ask about all other fees. With variable annuities, the fees must be disclosed
          in the prospectus. Fees lower your return, so it is important to know about them. Fees might include:
        </p>
        <ul>
          <li>
            Mortality fees of 1 to 1.35 percent of your account (protection for the insurer in case you live a long
            time)
          </li>
          <li>Maintenance fees of $20 to $30 per year</li>
          <li>Investment advisory fees of 0.3 percent to 1 percent of the assets in the annuity's portfolios</li>
        </ul>
        <p>
          <em>Other Considerations.</em> Some annuity contracts offer "bail-out" provisions that allow you to cash in
          the annuity if interest rates fall below a stated amount without paying surrender charges.
        </p>
        <p>
          There may also be a "persistency" bonus which rewards annuitants who keep their annuities for a certain
          minimum length of time.
        </p>
      </>
    ),
  },
  {
    id: 'annuity-or-lump-sum',
    title: 'Is it better to take an annuity or a lump-sum distribution?',
    body: (
      <>
        <p>As in so many areas of retirement planning, that depends upon your particular needs and circumstances.</p>
        <ul>
          <li>
            An annuity preserves the tax shelter for funds not yet paid out as annuity income, continuing to grow
            tax-free to fund future payouts.
          </li>
          <li>A lump sum withdrawal may be preferable for those in questionable health.</li>
          <li>
            Consider an annuity with a "refund feature" that guarantees a fixed sum to your heirs should you die earlier
            than expected.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'joint-and-survivor',
    title: 'What is a joint and survivor annuity?',
    body: (
      <>
        <p>
          A joint and survivor annuity pays a certain annuity during your life and half that amount (it could be more)
          to your surviving spouse for life.
        </p>
        <p>
          In almost all cases, the annual amount you will get under a joint and survivor annuity will be less than you
          would get under an annuity on your life alone.
        </p>
      </>
    ),
  },
  {
    id: 'change-joint-and-survivor',
    title: "Can I change from a joint and survivor annuity if it doesn't meet my needs?",
    body: (
      <>
        <p>
          Joint and survivor annuities are almost always required in pension plans, and sometimes in other plans. But
          you and your spouse can still agree to some other form.
        </p>
        <p>
          Chief reasons for such agreement are so that your child or other family member can share in the income, or
          to take a lump sum distribution, or to take a larger annual amount over the participant's life alone.
        </p>
      </>
    ),
  },
];

export default function AnnuitiesFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-insurance"
      page="Annuities: Frequently Asked Questions"
      title={
        <>
          Annuities: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about how annuities work, the types available, your payout options, how payouts are taxed, and what to compare when you shop for one."
      sections={sections}
    />
  );
}
