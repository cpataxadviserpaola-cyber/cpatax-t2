import GuideArticle, { Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/taxstrategies-businessowners.php?item=132 (7 Ways To Save Even More
// Income Taxes), word for word. The library's page has no introduction, so the banner's opening line
// (`lead`) is written for this site. Each way is worded as in its heading, not the library's table
// of contents ("...Retirement Plan for You" there), and the closing period of "Deduct Your Home
// Computer." is dropped; the titles carry their own numbers, so the contents list doesn't number them
// again. "59 1/2" is "59½", "Prior to 2018, If" is "Prior to 2018, if", and the note and caution
// boxes keep the library's labels. The last caution box, left open on the library so that it runs
// on over the rest of the answer, ends after its own text. "Traditional and Roth IRAS", "roof HVAC
// systems", "contact the office", and the 2024/2025 limits are as the library has them. Back-to-top
// anchors omitted. Tax Strategies has no topic pages, so the breadcrumb ends at the category.
// Address: /guides/tax-strategies/7-ways-to-save-even-more-income-taxes (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'ira-funding-trick',
    title: '1. IRA Funding Trick',
    body: (
      <>
        <p>
          You have until the April 15 filing deadline for the tax year to make an IRA contribution for the tax year. If you
          don't have enough cash to make a deductible contribution to your IRA by April 15, here is how you can still take
          the tax deduction for that tax year. To get started, all you need is an existing IRA.
        </p>
        <p>
          Begin by withdrawing an amount up to the tax year's contribution limit ($7,000 for 2024 and 2025) from your IRA.
          Once you have the money, immediately deposit it back into your IRA. If you do this by April 15, this counts as
          your deductible contribution for the tax year. (Be aware that in some situations, the contribution may not be
          fully deductible. But nondeductible contributions can still be beneficial.) You then have 60 days to "make up" the
          withdrawal (and avoid penalties and taxes). To do this, simply deposit a "rollback" equal to the amount you
          withdrew into the same IRA within 60 days and you will avoid taxes and penalties on the original distribution
          made to you.
        </p>
        <p>
          This is a type of short-term loan from your IRA to make the tax year's contribution before the April 15 due date;
          however, you can only do this once in a 12-month period. If you don't replace the money within 60 days, you may
          owe income tax and, if you're under the age of 59½, a 10 percent early withdrawal penalty.
        </p>
      </>
    ),
  },
  {
    id: 'best-retirement-plan',
    title: '2. Determine the "Best" Retirement Plan Option',
    body: (
      <>
        <p>
          As a self-employed small business owner, there are several retirement plan options available to you, but
          understanding which option is most advantageous to you can be confusing. The "best" option for you may depend on
          whether you have employees and how much you want to save each year.
        </p>
        <p>There are four basic types of plans:</p>
        <ul>
          <li>Traditional and Roth IRAS</li>
          <li>
            Simplified Employee Pension (SEP) Plan and Savings Incentive Match Plan for Employees (SIMPLE)
          </li>
          <li>Self-employed 401(k)</li>
          <li>Qualified and Defined Benefit Plans</li>
        </ul>
        <p>
          To make sure you are getting the most out of your financial future, contact the office to determine your
          eligibility and to figure out which plan is best for your tax situation.
        </p>
      </>
    ),
  },
  {
    id: 'landlord-improvements',
    title: '3. Make Your Landlord Pay for Improvements',
    body: (
      <>
        <p>
          Instead of paying for leasehold improvements at your place of business, you can ask your landlord to pay for
          them. In return, you offer to pay your landlord more in rent over the term of the lease. By financing your
          leasehold improvements this way, both you and your landlord can save money on taxes.
        </p>
        <p>
          Under the Tax Cuts and Jobs Act of 2017 (i.e., tax reform), qualified leasehold improvement was superseded by
          qualified improvement property (QIP). Ordinarily, you must deduct the cost of qualified improvements made to your
          place of business over a 39-year period (similar to that of depreciating real estate); however, up to $1 million
          (indexed for inflation; $1.22 million for 2024 and $1.25 million for 2025) in qualified leasehold (as well as
          restaurant and retail) improvements can be expensed using the Section 179 deduction (subject to certain rules),
          thanks to tax reform legislation passed in late 2017. Improvements must be interior, that is, roof HVAC systems,
          façade work and other exterior improvements such as on the roof do not qualify.
        </p>
        <Callout label="Note">
          <p>
            Per the Coronavirus Aid, Relief, and Economic Security Act (CARES Act), Qualified Improvements to Property
            placed in service after 2017 are allowed over a 15-year period (vs. 39 years). In most cases, post-2017 QIP
            retroactively qualifies for the bonus depreciation deduction as well.
          </p>
        </Callout>
        <p>
          The PATH Act changed the definition of qualified property from qualified leasehold improvements to qualified
          improvement property. The rules regarding qualified improvement property differ from those for qualified
          leasehold improvement property in that the improvement does not have to be made pursuant to a lease and does not
          have to be made to a building more than three years old. For tax years 2016 and 2017, the rules still apply for
          defining qualified leasehold improvements. In addition, the 15-year recovery period for leasehold, retail, and
          restaurant improvements was made permanent by the PATH Act as well.
        </p>
        <p>
          Qualified leasehold improvements completed before 2008 were eligible for a special 15-year recovery period. If in
          the year your lease term ends you move to another location, you can deduct the portion of the improvement cost
          that you have not previously deducted. This normal scenario won't save you tax in the earlier years of the lease.
          Your landlord will have to put up the initial cash for the improvements, but you will cover that over time with
          increased payments in your rent. Since your landlord will be paying for the improvements, you will save tax early
          in the lease and your landlord will benefit as well!
        </p>
        <p>
          At the same time, your landlord will gain depreciation deductions for the cost of the leasehold improvements.
          When you leave, your landlord will still have the improved property to offer other future tenants. It is a great
          opportunity for a win-win situation giving you faster access to invested monies.
        </p>
      </>
    ),
  },
  {
    id: 'home-entertainment',
    title: '4. Deduct Home Entertainment Expenses',
    body: (
      <>
        <p>
          If you host a company picnic or holiday party at your home, then the cost of meals at your home is a deductible
          expense and you can deduct 100% of your meal expenses. However, under tax reform, and starting in 2018,
          entertainment-related expenses are no longer deductible.
        </p>
        <p>
          Prior to tax reform, 50 percent of your business-related entertainment expenses (with some exceptions) were
          generally deductible.
        </p>
      </>
    ),
  },
  {
    id: 'holiday-gifts',
    title: '5. Deduct Holiday Gifts Without Receipts',
    body: (
      <p>
        Don't overlook the deductible benefit of business gifts during the holidays or at any other time of the year.
        Whether you are a rank-and-file employee, a self-employed individual, or even a shareholder-employee in your own
        corporation, you can deduct the cost of gifts made to clients and other business associates as a business expense.
        The law limits your maximum deduction to $25 in value for each recipient for which the gift was purchased with cash.
      </p>
    ),
  },
  {
    id: 'home-computer',
    title: '6. Deduct Your Home Computer',
    body: (
      <>
        <Callout label="Caution">
          <p>
            Tax reform legislation passed in 2017 repealed certain itemized deductions on Schedule A,{' '}
            <em>Itemized Deductions</em> for tax years 2018 through 2025, including employee business expense deductions
            related to home office use. Prior to 2018, if you purchased a computer and used it for work-related purposes as
            an employee, you were able to deduct the cost as long as you met certain requirements such as your computer must
            be used for convenience and as a condition of your employment, for instance, or if you telecommute two days a
            week and work in the office the other three days.
          </p>
        </Callout>
        <p>
          If you are self-employed, you can take advantage of Section 179 expensing even if you don't claim the home office
          deduction. Section 179 allows you to write off new equipment (including computers) in the year it was purchased
          as long as it is used for business more than 50 percent of the time (subject to certain rules).
        </p>
      </>
    ),
  },
  {
    id: 'company-dinner',
    title: '7. Have Your Company Buy You Dinner',
    body: (
      <>
        <Callout label="Caution">
          <p>
            Prior to tax reform, i.e., for tax years before 2018, this expense was 100 percent deductible. Furthermore, per
            tax reform legislation, this expense is nondeductible after 2025. However, for tax years prior to 2018 the
            following was allowed:
          </p>
        </Callout>
        <p>
          If you are in a partnership or a shareholder-employee in a regular C or S corporation, and you have to work
          overtime, your company can, on occasion, provide you with meal money for dinner. The cost of this "fringe
          benefit" is 50 percent deductible for your company under Section 132 of the Internal Revenue Code and you don't
          have to pay personal income tax on the value of the meal.
        </p>
        <p>
          Your company can pay directly for the meal or can instead, provide you with dinner money. But, in order for this
          to work, the amount of money you receive for your meal must be reasonable. If the IRS decides that the amount of
          money you received from your employer was unreasonable, the entire amount will be considered taxable personal
          income and will not be deductible.
        </p>
      </>
    ),
  },
];

export default function SevenWaysToSaveTaxes() {
  return (
    <GuideArticle
      category="tax-strategies"
      page="7 Ways To Save Even More Income Taxes"
      title={
        <>
          7 Ways To Save <em>Even More Income Taxes</em>
        </>
      }
      lead="Seven ways for business owners to save tax: funding your IRA, choosing a retirement plan, leasehold improvements, meals and gifts, your home computer, and dinner money."
      sections={sections}
      numbered={false}
    />
  );
}
