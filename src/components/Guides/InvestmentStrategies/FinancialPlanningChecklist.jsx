import GuideArticle from '../GuideArticle.jsx';

const sections = [
  {
    id: 'goals-and-saving',
    title: 'Review Your Goals and Savings',
    body: (
      <>
        <h3>1. Have You Set and Revisited Your Financial Goals?</h3>
        <p>
          Identify what you want to accomplish in both the near term and further ahead. Revisit those goals
          regularly and revise them as your circumstances or priorities change.
        </p>

        <h3>2. Are Your Saving and Investing on Track to Fund Those Goals?</h3>
        <p>
          Give each goal a target amount and time frame. Those details make it easier to measure your progress and
          decide whether to adjust how much you save or invest.
        </p>

        <h3>3. Are You Using Retirement Savings Arrangements Effectively?</h3>
        <p>
          Review contributions to tax-deferred arrangements such as IRAs, 401(k)s, and Keogh plans, including
          whether you can contribute more. Check that the investments suit your time until retirement and your
          comfort with risk. If planning withdrawals, consider both your needs and those of your beneficiaries, as
          well as the possible income- and estate-tax effects.
        </p>
      </>
    ),
  },
  {
    id: 'work-and-education',
    title: 'Workplace Benefits and Education Planning',
    body: (
      <>
        <h3>4. Are You Getting Full Value from Your Workplace Benefits?</h3>
        <p>
          Find out whether you are eligible for flexible spending accounts and whether you are making appropriate
          use of them. If your employer offers stock options or deferred compensation, understand how those benefits
          work and plan how to use or exercise them.
        </p>

        <h3>5. Is Your Approach to a Child’s Education Costs Working for Your Family?</h3>
        <p>
          Consider available education savings approaches, loans, and tax credits. Weigh the advantages of keeping
          savings in your own accounts against holding funds directly for the child or in a trust.
        </p>
      </>
    ),
  },
  {
    id: 'reserves-and-investments',
    title: 'Emergency Reserves and Investments',
    body: (
      <>
        <h3>6. Could You Cover an Emergency Without Disrupting Your Plans?</h3>
        <p>
          A commonly cited reserve is enough to cover three to six months of take-home pay, kept somewhere you can
          access promptly. Having cash available for unexpected costs can help you avoid selling investments or
          other assets at a difficult time.
        </p>

        <h3>7. Does Your Investment Mix Still Fit Your Plan?</h3>
        <p>
          Market rises and falls can cause your portfolio to drift from the mix you intended. Review the amount held
          in each asset class and whether taxable or tax-exempt fixed-income investments fit your marginal tax rate
          and risk tolerance.
        </p>
      </>
    ),
  },
  {
    id: 'insurance-and-documents',
    title: 'Insurance Protection and Legal Documents',
    body: (
      <>
        <h3>8. Would Your Insurance Protect Your Household and Belongings?</h3>
        <p>
          Consider whether life insurance would provide for your family if you died and whether disability coverage
          could help if you or your spouse could not work for an extended period. Review auto and homeowners
          coverage, and remember that renters may also need insurance for possessions kept in their home.
        </p>

        <h3>9. Are Your Important Legal and Health-Care Documents Prepared and Findable?</h3>
        <p>
          Check whether your will and estate plan are up to date, including any trusts for your spouse or heirs.
          Consider health-care directives and a durable power of attorney for managing assets if you cannot do so
          yourself. Let a trusted friend or family member know where these papers are stored.
        </p>
      </>
    ),
  },
  {
    id: 'credit-and-cash-flow',
    title: 'Credit Costs and Tax-Aware Cash Flow',
    body: (
      <>
        <h3>10. Are Your Borrowing Costs Competitive and Manageable?</h3>
        <p>
          Compare your mortgage rate with current alternatives and consider whether seeking a lower rate makes
          sense. Review credit-card rates too, and consider whether another card or a home-equity loan could better
          meet your needs.
        </p>

        <h3>11. Are You Coordinating Charitable Gifts and Deductions with Your Tax Plan?</h3>
        <p>
          Review whether you give to charity in cash or securities and whether the timing of itemized deductions
          could affect when you receive a tax benefit. The right approach depends on current tax law and your
          circumstances, so discuss it with a qualified tax professional.
        </p>
      </>
    ),
  },
  {
    id: 'business-and-family',
    title: 'Business Transitions and Changes in Your Family',
    body: (
      <>
        <h3>12. If You Own a Business, Have You Planned Who Will Take It Over?</h3>
        <p>
          Consider how ownership might pass to family members or employees you trust. Plan for possible income and
          estate taxes connected with a transfer, and review whether insurance could help protect the transition.
        </p>

        <h3>13. Have Important Family Events Changed What Your Plan Needs to Cover?</h3>
        <p>
          Births, deaths, graduations, engagements, and the start or end of a marriage can all affect financial
          priorities. A new child may prompt education saving; an inheritance may call for an investment plan; and
          an upcoming wedding may require new spending plans. After a divorce, review beneficiaries named on
          insurance policies and retirement plans.
        </p>
      </>
    ),
  },
];

export default function FinancialPlanningChecklist() {
  return (
    <GuideArticle
      category="investment-strategies"
      topic="/guides/life-events/getting-married/investment-basics"
      page="Financial Planning Checklist"
      title="Financial Planning Checklist"
      lead="Once your annual tax planning is complete and your return is on its way to the IRS, use that recent return as a snapshot of your finances and work through this checklist."
      sections={sections}
      numbered={false}
    />
  );
}
