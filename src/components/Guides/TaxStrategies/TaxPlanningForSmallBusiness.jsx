import GuideArticle from '../GuideArticle.jsx';

// Source: cpataxadviser.com/taxstrategies-businessowners.php?item=127 (Tax Planning For Small
// Business Owners), word for word. The library's opening paragraph is the banner's text (`lead`),
// and its five bold lead-ins are the guide's sections. Hyphens used as dashes are dashes. The 2024
// mileage rate and Section 179 limits, the bonus depreciation schedule, and "for tax years 2018
// through 2025" are as the library has them. Back-to-top anchors omitted. Tax Strategies has no
// topic pages, so the breadcrumb ends at the category.
// Address: /guides/tax-strategies/tax-planning-for-small-business-owners (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'avoidance-vs-evasion',
    title: 'Tax Avoidance vs. Tax Evasion',
    body: (
      <>
        <p>
          Although tax avoidance planning is legal, tax evasion—reducing the amount of tax owed through deceit, fraud, or
          concealment—is not. Frequently what sets tax evasion apart from tax avoidance is the IRS's finding that there was
          fraudulent intent on the part of the business owner. The following are four of the areas the IRS examiners
          commonly focus on as pointing to possible fraud:
        </p>
        <ol>
          <li>
            Failure to report substantial amounts of income such as a shareholder's failure to report dividends or a store
            owner's failure to report a portion of the daily business receipts.
          </li>
          <li>
            Claims for fictitious or improper deductions on a return, such as a sales representative's substantial
            overstatement of travel expenses or a taxpayer's claim of a large deduction for charitable contributions when no
            verification exists.
          </li>
          <li>
            Accounting irregularities such as a business's failure to keep adequate records or a discrepancy between amounts
            reported on a corporation's return and amounts reported on its financial statements.
          </li>
          <li>
            Improper allocation of income to a related taxpayer in a lower tax bracket, such as where a corporation makes
            distributions to the controlling shareholder's children.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'strategies',
    title: 'Tax Planning Strategies',
    body: (
      <>
        <p>
          Countless tax planning strategies are available to small business owners. Some tax strategies target the
          owner's individual tax situation, and others target the business itself. Regardless of how simple or how complex
          a tax strategy is, its intention will be to accomplish one or more of these often-overlapping goals:
        </p>
        <ul>
          <li>Reducing the amount of taxable income</li>
          <li>Lowering your tax rate</li>
          <li>Controlling the time when the tax must be paid</li>
          <li>Claiming any available tax credits and deductions</li>
          <li>Controlling the effects of the Alternative Minimum Tax</li>
          <li>Avoiding the most common tax planning mistakes</li>
        </ul>
        <p>
          To plan effectively, you'll need to estimate your personal and business income for the next few years. Many tax
          planning strategies will save tax dollars at one income level but create a larger tax bill at other income
          levels. You will want to avoid having the "right" tax plan made "wrong" by erroneous income projections. Once you
          know your approximate income, you can take the next step: estimating your tax bracket.
        </p>
        <p>
          You should already be projecting your sales revenues, income, and cash flow for general business planning
          purposes. The better your estimates are, the better the odds that your tax planning efforts will succeed.
        </p>
      </>
    ),
  },
  {
    id: 'meals-and-entertainment',
    title: 'Business Meal and Entertainment Expenses',
    body: (
      <>
        <p>
          Business meal expenses are legitimate deductions that can lower your tax bill and save you money, provided you
          follow certain guidelines. Business must be discussed before, during, or after the meal to qualify as a
          deduction. Furthermore, the surroundings must be conducive to a business discussion. For instance, a small, quiet
          restaurant would be an ideal location for a business dinner. A nightclub would not.
        </p>
        <p>
          Under the Tax Cuts and Jobs Act of 2017, the deduction remains at 50 percent for taxpayers who incur food and
          beverage expenses associated with operating a trade or business. Employee meals while on business travel also
          remain deductible at 50 percent. For tax years 2018 through 2025, the 50 percent deduction expands to include
          expenses incurred for meals furnished to employees for the employer's convenience. Amounts after 2025 are not
          deductible, however.
        </p>
        <p>Under the TCJA, the deduction for business entertainment expenses was eliminated.</p>
      </>
    ),
  },
  {
    id: 'automobile',
    title: 'Important Business Automobile Deductions',
    body: (
      <>
        <p>
          If you use your car for business, such as visiting clients or going to business meetings away from your regular
          workplace, you may be able to take certain deductions for the cost of operating and maintaining your vehicle. You
          can deduct car expenses by taking either the standard mileage rate or using actual expenses. The mileage
          reimbursement rate for 2024 is 67 cents per business mile.
        </p>
        <p>
          If you own two cars, another way to increase deductions is to include both cars in your deductions. This
          deduction works because business miles driven is determined by business use. To figure business use, divide the
          business miles driven by the total miles driven. This strategy can result in significant deductions. Whichever
          method you decide to use to take the deduction, always keep accurate records such as a mileage log and receipts.
        </p>
      </>
    ),
  },
  {
    id: 'depreciation',
    title: 'Depreciation-Related Deductions',
    body: (
      <>
        <p>
          Section 179 expensing for tax year 2024 allows you to immediately deduct, rather than depreciate over time,
          $1,220,000 of the first $3,050,000 of qualifying equipment placed in service during the current tax year.
          Equipment can be new or used and includes certain software. All depreciable equipment in a home office meets the
          qualification. Indexed to inflation for tax years after 2018, the deduction was enhanced under the Tax Cuts and
          Jobs Act of 2017 to include improvements to nonresidential qualified real property such as roofs, fire
          protection, alarm systems, security systems, and heating, ventilation, and air-conditioning systems.
        </p>
        <p>
          Businesses with eligible property placed in service after September 27, 2017, and before January 1, 2023, were
          allowed to deduct 100 percent of the cost immediately. This first-year bonus depreciation is being phased
          downward over four years: 80 percent in 2023, 60 percent in 2024, 40 percent in 2025, and 20 percent in 2026.
        </p>
        <p>
          These are just a few of the tax breaks that may be available to you as a business owner. Consider meeting with a
          tax professional to learn about more tax-savings strategies for small businesses.
        </p>
      </>
    ),
  },
];

export default function TaxPlanningForSmallBusiness() {
  return (
    <GuideArticle
      category="tax-strategies"
      page="Tax Planning For Small Business Owners"
      title={
        <>
          Tax Planning For <em>Small Business Owners</em>
        </>
      }
      lead="Tax planning is the process of determining when, whether, and how to conduct business and personal transactions to defer, reduce or eliminate tax liability."
      sections={sections}
    >
      <p>
        Many small business owners ignore tax planning. They don't even think about their taxes until it's time to meet
        with their accountants. But tax planning is an ongoing process, and good tax advice is a valuable commodity. It is
        to your benefit to review your income and expenses monthly and meet with your CPA or tax advisor quarterly to
        analyze how you can take full advantage of the tax credits, deductions and other breaks that are legally available
        to you.
      </p>
    </GuideArticle>
  );
}
