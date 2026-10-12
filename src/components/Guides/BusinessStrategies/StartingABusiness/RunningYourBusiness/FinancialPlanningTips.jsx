import GuideArticle from '../../../GuideArticle.jsx';

const sections = [
  {
    id: 'ownership-and-succession',
    title: 'Plan for ownership, succession, and compensation',
    body: (
      <ul>
        <li>
          Consider whether an employee stock ownership plan (ESOP) fits your goals for employee ownership, financing,
          or succession; seek specialist advice.
        </li>
        <li>
          Plan for future management and ownership transitions in case of retirement, death, or incapacity.
        </li>
        <li>
          Review whether an LLC or LLP is appropriate for legal, tax, or operational reasons.
        </li>
        <li>
          Ensure compensation is reasonable, supported by the work performed, and documented consistently.
        </li>
        <li>
          Evaluate whether corporate-owned life insurance could serve a defined business purpose, such as funding
          deferred compensation or a succession arrangement.
        </li>
      </ul>
    ),
  },
  {
    id: 'retirement-and-insurance',
    title: 'Review retirement and health-insurance planning',
    body: (
      <ul>
        <li>Compare employer retirement-plan options, including SIMPLE plans, SEP IRAs, and individual 401(k) plans.</li>
        <li>
          For self-employed owners and eligible partners or S corporation shareholder-employees, check whether health
          insurance premiums qualify for a deduction and what limits apply.
        </li>
        <li>
          Review required minimum distribution timing and consider the tax impact of delaying an initial distribution
          when later distributions may also be due.
        </li>
        <li>
          Consider whether traditional or Roth IRA contributions or conversions fit your circumstances; conversions
          can have current tax consequences.
        </li>
      </ul>
    ),
  },
  {
    id: 'business-tax-decisions',
    title: 'Check business tax and filing decisions',
    body: (
      <ul>
        <li>
          Review Section 179 expensing and other depreciation options for qualifying business property using current
          year limits and eligibility rules.
        </li>
        <li>
          Determine whether owner income is subject to self-employment tax based on the entity and the owner’s role.
        </li>
        <li>
          Confirm payroll and filing responsibilities if you employ household workers.
        </li>
        <li>
          Compare filing statuses and state tax effects when relevant to your personal and business planning.
        </li>
        <li>
          Keep records showing that a business activity is conducted for profit; hobby-loss rules depend on facts and
          applicable standards.
        </li>
        <li>
          Review your estate documents and succession arrangements periodically, since tax elections and deadlines
          after a death can be time-sensitive.
        </li>
        <li>
          Check current eligibility for family-related credits, including the Child Tax Credit.
        </li>
      </ul>
    ),
  },
];

export default function FinancialPlanningTips() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/running-your-business"
      page="Financial Planning Tips for Business Owners"
      title={<>Financial Planning Tips <em>For Business Owners</em></>}
      lead="A checklist of ownership, succession, compensation, retirement, insurance, and tax-planning topics for business owners to review with their advisers."
      sections={sections}
    />
  );
}
