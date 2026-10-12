import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=20 (Retirement Plan Distributions: Frequently Asked
// Questions), word for word. Each question is worded as in the library's answers, not its table of
// contents ("…save me taxes…" there, "…save me state taxes…" above the answer). "59 ½" is "59½",
// and double hyphens and hyphens used as dashes are now dashes. The library's page has no
// introduction, so the banner's opening line (`lead`) is written for this site, as on the other
// FAQ pages.
// Address: /guides/life-events/planning-for-retirement/retirement-plan-distributions-faq
// (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'how-to-take-distributions',
    title: 'How should I take distributions from my retirement plan?',
    body: (
      <>
        <p>
          If your assets are in a tax-favored retirement fund such as a company or Keogh pension or profit-sharing plan
          (including thrift and savings plans), 401(k), IRA, or stock bonus plan, when it comes time to take
          distributions, you have several options:
        </p>
        <ul>
          <li>Take everything in a lump sum</li>
          <li>Keep the money in the account, with regular distributions or withdrawals on an as-needed basis</li>
          <li>Purchase an annuity with all or part of the funds</li>
          <li>Take a partial withdrawal (leaving the balance for withdrawal later)</li>
          <li>Take a rollover distribution</li>
          <li>A combination of any of the above</li>
        </ul>
        <p>
          Your retirement assets may be distributed in kind—as employer stock or an annuity or insurance contract.
          Sometimes certain withdrawal options may be associated with certain retirement plans; for instance, annuities
          are more common with pension plans. Other types of plans favor the other options, but for the most part, most
          of these options are available for most plans. And more than likely, you'll want to preserve the tax shelter as
          long as possible by withdrawing no more than you need at any given time.
        </p>
        <p>
          Timing your withdrawal can be a factor, too. Withdrawals before the age of 59½ risk a tax penalty. At the other
          end, withdrawals are generally required to start at age 73 for taxpayers born between 1951 and 1959 (75 for
          those born in 1960 or later) or face a tax penalty. The only exceptions are Roth IRAs and non-owner-employees
          still working beyond that age.
        </p>
      </>
    ),
  },
  {
    id: 'lump-sum',
    title: 'When is it best to take a lump-sum distribution from my retirement plan?',
    body: (
      <p>
        Your personal needs should decide. You may need a lump sum to buy a retirement home or business. If your
        employer requires that you take a lump sum distribution, it may be wise to roll it over into an IRA.
      </p>
    ),
  },
  {
    id: 'changing-jobs',
    title: "What should I do about my retirement plan assets in my ex-employer's plan if I change jobs?",
    body: (
      <>
        <p>There are several things you might do depending upon your needs:</p>
        <ol>
          <li>If you don't need the assets to live on, try to continue the tax shelter and leave the money where it is.</li>
          <li>
            Transfer or roll over the assets into your new employer's plan—if that plan allows it (this can be tricky,
            though).
          </li>
          <li>If you've decided to start your own business, set up a Keogh and move the funds there.</li>
          <li>Roll them over into your IRA.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'creditors',
    title: 'Can creditors get at my retirement assets?',
    body: (
      <p>
        In general, employer plans such as your 401(k), IRAs, and pension plan funds are protected from general
        creditors unless you've used these assets as securities against a loan or are entering into bankruptcy. If this
        is the case, there's a chance they could be seized, but if the money is in a registered IRA, pension plan, or
        401(k), it's more than likely they will be protected in case of bankruptcy (subject to state and federal law of
        course).
      </p>
    ),
  },
  {
    id: 'state-tax',
    title: 'How will my state tax affect my retirement withdrawals?',
    body: (
      <>
        <p>Each state is different, but in general, consider the following:</p>
        <ol>
          <li>
            While withdrawals are generally taxable in states with income tax, some offer relief for retirement income up
            to a specified dollar amount.
          </li>
          <li>
            If your state doesn't allow deductions for Keogh or IRA investments allowed under federal law, these
            investments and sometimes more may come back tax-free.
          </li>
          <li>State tax penalties for early or inadequate withdrawal are unlikely.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'moving-states',
    title: 'Can moving to another state when I retire save me state taxes on my retirement plan?',
    body: (
      <>
        <p>
          Money from retirement plans, including 401(k)s, IRAs, company pensions, and other plans, is taxed according to
          your residence when you receive it.
        </p>
        <p>
          If you move from a state with a high-income tax, such as New York, to one with no personal income tax, such as
          Alaska, Florida, Nevada, South Dakota, Texas, Washington, and Wyoming, you will save money on state income tax.
        </p>
        <p>
          However, establishing residence in a new state may take as long as one year; if you retain property in both
          states, you may owe taxes to both.
        </p>
      </>
    ),
  },
  {
    id: 'reverse-mortgage',
    title: 'What is a reverse mortgage?',
    body: (
      <>
        <p>
          A reverse mortgage is a type of home equity loan that allows you to convert some of the equity in your home
          into cash while you retain home ownership. Reverse mortgages work much like traditional mortgages, only in
          reverse. Rather than making a payment to your lender each month, the lender pays you. Most reverse mortgages do
          not require any repayment of principal, interest, or servicing fees for as long as you live in your home.
        </p>
        <p>
          Retired people may want to consider the reverse mortgage as a way to generate cash flow. A reverse mortgage
          allows homeowners age 62 and over to remain in their homes while using their built-up equity for any purpose:
          to make repairs, keep up with property taxes or simply pay their bills.
        </p>
        <p>
          Reverse mortgages are rising-debt loans, which means that the interest is added to the principal loan balance
          each month (because it is not paid on a current basis). Therefore, the total amount of interest you owe
          increases significantly with time as the interest compounds. Reverse mortgages also use up some or all of the
          equity in your home.
        </p>
        <p>
          All three loan plans, whether FHA-insured, lender-insured, or uninsured, charge origination fees and closing
          costs. Insured plans also charge insurance premiums, and some impose mortgage servicing charges.
        </p>
        <p>
          Finally, homeowners should realize that if they're forced to move soon after taking the mortgage (because of
          illness, for example), they'll almost certainly end up with a great deal less equity to live on than if they
          had simply sold the house outright. That is particularly true for loans terminated in five years or less.
        </p>
      </>
    ),
  },
];

export default function RetirementDistributionsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-for-retirement"
      page="Retirement Plan Distributions: Frequently Asked Questions"
      title={
        <>
          Retirement Plan Distributions: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about taking distributions from your retirement plan, lump sums, changing jobs, creditors, state taxes and moving, and reverse mortgages."
      sections={sections}
    />
  );
}
