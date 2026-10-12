import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=19 (Retirement Assets: Frequently Asked Questions),
// word for word. Each question is worded as in the library's answers, not its table of contents
// ("…save me taxes…" there, "…save me state taxes…" above the answer). "59 1/2" and "59 ½" are
// "59½", and hyphens used as dashes are now dashes. The library's page has no introduction, so the
// banner's opening line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/planning-for-retirement/retirement-assets-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'heirs-income-tax',
    title: 'Will my heirs owe income taxes when they inherit my retirement assets?',
    body: (
      <>
        <p>
          Yes, generally under the same rules that would apply to your withdrawals of the same amounts had you
          lived—unless it's a Roth IRA. A Roth IRA is exempt from federal income tax if the account was opened five
          years before any withdrawals.
        </p>
        <p>
          Also, your spouse can roll over your account to their IRA. No early withdrawal penalty applies, regardless of
          your beneficiary's age. However, a spouse who rolled over to an IRA may owe an early withdrawal penalty on IRA
          withdrawals taken before age 59½.
        </p>
      </>
    ),
  },
  {
    id: 'heirs-estate-tax',
    title: 'Will my heirs owe estate taxes on inherited retirement assets?',
    body: (
      <p>
        Your retirement assets will be included in your taxable estate. But because of the currently high estate tax
        exemption, very few estates have to pay federal estate tax. And assets passing to your surviving spouse
        (provided he or she is a U.S. citizen) or to charity will be excluded from estate tax.
      </p>
    ),
  },
  {
    id: 'annuity',
    title: 'Is estate tax deferred if my heir gets an annuity?',
    body: <p>No. The estate is taxed on the annuity's present value.</p>,
  },
  {
    id: 'minimize-tax',
    title: 'How can I minimize or eliminate tax on inherited retirement assets?',
    body: (
      <>
        <p>You can minimize or eliminate tax on inherited retirement assets by using the following methods:</p>
        <ol>
          <li>
            <strong>Leave them to your spouse.</strong> Doing so can eliminate estate tax and help postpone withdrawals
            subject to income tax—provided your spouse takes no withdrawals before age 59½.
          </li>
          <li>
            <strong>Leave them to charity.</strong> Although there's no financial benefit to the family, this saves
            income and estate taxes.
          </li>
          <li>
            <strong>Provide life insurance to pay estate tax on retirement assets.</strong> If estate taxes are a
            concern, the benefit of this option is that it provides estate liquidity, avoiding taxable distributions to
            pay estate tax.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'how-to-take-distributions',
    title: 'How should I take distributions from my retirement plan?',
    body: (
      <>
        <p>
          If your assets are in a tax-favored retirement fund such as a defined-benefit pension plan, 401(k) or IRA, you
          have several distribution options:
        </p>
        <ul>
          <li>Take everything in a lump sum</li>
          <li>Keep the money in the account, with regular distributions or withdrawals on an as-needed / as-required basis</li>
          <li>Purchase an annuity with all or part of the funds</li>
          <li>Take a partial withdrawal (leaving the balance for withdrawal later)</li>
          <li>Make a rollover distribution to another retirement plan</li>
          <li>A combination of any of the above</li>
        </ul>
        <p>
          Your retirement assets may be distributed in kind as employer stock or an annuity or insurance contract.
          Sometimes certain withdrawal options may be associated with certain retirement plans; for instance, annuities
          are more common with pension plans. Other types of plans favor the other options, but for the most part, most
          of these options are available for most plans. And more than likely, you'll want to preserve the tax shelter as
          long as possible by withdrawing no more than you need at any given time.
        </p>
        <p>
          Timing your withdrawal can be a factor, too. Withdrawals before age 59½ risk a tax penalty. At the other end,
          withdrawals are generally required to start at age 73 for taxpayers born between 1951 and 1959 (75 for those
          born in 1960 or later) or face a tax penalty. The only exceptions are Roth accounts and non-owner-employees
          still working beyond that age.
        </p>
      </>
    ),
  },
  {
    id: 'lump-sum',
    title: 'When should I take a lump-sum distribution from my retirement plan?',
    body: (
      <p>
        Your personal needs should decide. You may need a lump sum to buy a retirement home or business, but be aware of
        the tax consequences. If your employer requires that you take a lump sum distribution, it may be wise to roll it
        over into an IRA.
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
            Transfer or roll over the assets into your new employer's plan if that plan allows it (this can be tricky,
            though).
          </li>
          <li>If you've decided to start your own business, set up a new retirement plan and move the funds there.</li>
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
            If your state doesn't allow deductions for retirement investments allowed under federal law, these
            investments and sometimes more may come back tax-free.
          </li>
          <li>State tax penalties for early or inadequate withdrawal are unlikely.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'required-withdrawals',
    title: "I understand that I'm required to take money out of my retirement plan after I reach age 73. Why is that?",
    body: (
      <p>
        Retirement plans offer the biggest tax shelter in the federal system since funds grow tax-free while in the
        plan. But the shelter is primarily intended for retirement. So when you reach 73 (or shortly after that), you
        must start withdrawing money from the plan.
      </p>
    ),
  },
  {
    id: 'continue-shelter',
    title: 'How can I continue the tax shelter for retirement plan assets after age 73?',
    body: (
      <p>
        The shelter can continue for many of those assets for a long time, assuming you don't need them to live on. You
        can spread withdrawals over a period based on, but longer than, your life expectancy, for example, over a period
        of at least 26.5 years if you're 73 now. You are free, however, to withdraw at a faster rate or even all of it if
        you wish. The shelter continues for whatever is not withdrawn.
      </p>
    ),
  },
  {
    id: 'assets-at-death',
    title:
      'Suppose there are still retirement assets in my account at my death. Can the shelter continue for those who receive those assets?',
    body: (
      <p>
        Many rules regarding inherited retirement accounts changed with the passage of the Setting Every Community Up
        for Retirement Enhancement (SECURE) Act of 2019 and the SECURE 2.0 Act of 2022. For example, if you're a spouse
        not more than ten (10) years younger than your deceased spouse, you will have different options than if you were
        more than ten (10) years younger. Due to the complexity of these rules, it is important to speak with a
        qualified financial advisor before making any decisions.
      </p>
    ),
  },
  {
    id: 'moving-states',
    title: 'Can moving to another state when I retire save me state taxes on my retirement plan?',
    body: (
      <p>
        Money from retirement plans, including 401(k)s, IRAs, company pensions, and other plans, is taxed according to
        your residence when you receive it. You will save money on state income tax if you move from a state with a high
        personal income tax to one with no personal income tax. Also, some states with a state income tax don't tax
        retirement plan distributions. Others offer other tax relief for retirement income. However, establishing
        residence in a new state may take as long as one year; if you retain property in both states, you may owe taxes
        to both.
      </p>
    ),
  },
];

export default function RetirementAssetsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-for-retirement"
      page="Retirement Assets: Frequently Asked Questions"
      title={
        <>
          Retirement Assets: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about how your heirs are taxed on retirement assets, taking distributions, changing jobs, required withdrawals after age 73, and state taxes."
      sections={sections}
    />
  );
}
