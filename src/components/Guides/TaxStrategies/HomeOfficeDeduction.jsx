import GuideArticle, { Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/taxstrategies-businessowners.php?item=133 (The Home Office Deduction),
// word for word. The library's opening paragraph leads into a list, so it stays in the text and the
// banner's opening line (`lead`) is written for this site. The bold lead-ins ("Employees" through
// "Tax Deductions") are the guide's sections, the three kinds of expenses (set apart on the library
// without a label) are a list, and "--" used as dashes are dashes. The library
// repeats the employee's "two additional criteria" paragraph word for word; it appears here once.
// The note box keeps the library's label. "Nondeductible expenses such as insurance...", "under
// Deducting Expenses, later", "more than 3.4 million taxpayers claimed" and the "new" simplified
// option for 2013 are as the library has them. Back-to-top anchors omitted. Tax Strategies has no
// topic pages, so the breadcrumb ends at the category.
// Address: /guides/tax-strategies/home-office-deduction (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'employees',
    title: 'Employees',
    body: (
      <>
        <Callout label="Note">
          <p>
            Tax reform legislation passed in 2017 repealed certain itemized deductions on Schedule A,{' '}
            <em>Itemized Deductions</em> for tax years 2018 through 2025, including employee business expense deductions
            related to home office use.
          </p>
        </Callout>
        <p>
          For tax years prior to 2018, employees could claim home office expenses as deductions provided they met
          additional rules such as business use must also be for the convenience of the employer (not just the employee).
          To qualify for the home-office deduction, an employee must satisfy two additional criteria.
        </p>
        <p>
          First, the use of the home office must be for the convenience of the employer (for example, the employer does not
          provide a space for the employee to do his/her job). Second, the taxpayer does not rent all or part of the home to
          the employer and use the rented portion to perform services as an employee for the employer. Employees who
          telecommute may be able to satisfy the requirements for the home-office deduction.
        </p>
      </>
    ),
  },
  {
    id: 'expenses',
    title: 'Expenses',
    body: (
      <>
        <p>Home office expenses are classified into three categories:</p>
        <ul>
          <li>
            <strong>Direct Business Expenses</strong> relate to expenses incurred for the business part of your home such
            as additional phone lines, long-distance calls, and optional phone services. Basic local telephone service
            charges (that is, monthly access charges) for the first phone line in the residence generally do not qualify for
            the deduction.
          </li>
          <li>
            <strong>Indirect Business Expenses</strong> are expenditures that are related to running your home such as
            mortgage or rent, insurance, real estate taxes, utilities, and repairs.
          </li>
          <li>
            <strong>Unrelated Expenses</strong> such as painting a room that is not used for business or lawn care are not
            deductible.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'deduction-limit',
    title: 'Deduction Limit',
    body: (
      <>
        <p>
          You can deduct all your business expenses related to the use of your home if your gross income from the business
          use of your home equals or exceeds your total business expenses (including depreciation). But, if your gross
          income from the business use of your home is less than your total business expenses, your deduction for certain
          expenses for the business use of your home is limited.
        </p>
        <p>
          Nondeductible expenses such as insurance, utilities, and depreciation that are allocable to the business are
          limited to the gross income from the business use of your home minus the sum of the following:
        </p>
        <ul>
          <li>
            The business part of expenses you could deduct even if you did not use your home for business (such as mortgage
            interest, real estate taxes, and casualty and theft losses that are allowable as itemized deductions on Schedule
            A (Form 1040)). These expenses are discussed in detail under Deducting Expenses, later.
          </li>
          <li>
            The business expenses that relate to the business activity in the home (for example, business phone, supplies,
            and depreciation on equipment), but not to the use of the home itself.
          </li>
        </ul>
        <p>
          If your deductions are greater than the current year's limit, you can carry over the excess to the next year.
          They are subject to the deduction limit for that year, whether or not you live in the same home during that year.
        </p>
      </>
    ),
  },
  {
    id: 'sale-of-residence',
    title: 'Sale of Residence',
    body: (
      <>
        <p>
          If you use property partly as a home and partly for business, tax rules generally permit a $500,000 (married
          filing jointly) or $250,000 (single or married filing separately) exclusion on the gain from the sale of a primary
          residence provided certain ownership and use tests are met during the 5-year period ending on the date of the
          sale:
        </p>
        <ul>
          <li>You owned the home for at least 2 years (ownership test), and</li>
          <li>You lived in the home as your main home for at least 2 years (use test).</li>
        </ul>
        <p>
          If the part of your property used for business is within your home, such as a room used as a home office for a
          business there is no need to allocate gain on the sale of the property between the business part of the property
          and the part used as a home. However, if you used part of your property as a home and a separate part of it, such
          as an outbuilding, for business other rules apply such as whether the use test was met (or not met) for the
          business part and whether or not there was business use in the year of the sale.
        </p>
        <p>If you need more information about whether you qualify for the exclusion, please don't hesitate to call us.</p>
      </>
    ),
  },
  {
    id: 'simplified-deduction',
    title: 'Simplified Home Office Deduction',
    body: (
      <>
        <p>
          If you're one of the more than 3.4 million taxpayers claimed deductions for business use of a home (commonly
          referred to as the home office deduction), don't forget about the new simplified option available for taxpayers
          starting with 2013 tax returns. Taxpayers claiming the optional deduction will complete a significantly
          simplified form.
        </p>
        <p>
          The new optional deduction is capped at $1,500 per year based on $5 a square foot for up to 300 square feet.
          Though homeowners using the new option cannot depreciate the portion of their home used in a trade or business,
          they can claim allowable mortgage interest, real estate taxes and casualty losses on the home as itemized
          deductions on Schedule A. These deductions need not be allocated between personal and business use, as is
          required under the regular method. Business expenses unrelated to the home, such as advertising, supplies and
          wages paid to employees are still fully deductible.
        </p>
        <p>
          Current restrictions on the home office deduction, such as the requirement that a home office must be used
          regularly and exclusively for business and the limit tied to the income derived from the particular business,
          still apply under the new option.
        </p>
      </>
    ),
  },
  {
    id: 'tax-deductions',
    title: 'Tax Deductions',
    body: (
      <>
        <p>
          The "home office" tax deduction is valuable because it converts a portion of otherwise nondeductible expenses such
          as mortgage, rent, utilities and homeowners insurance into a deduction.
        </p>
        <p>
          Remember however, that an individual is not entitled to deduct any expenses of using his/her home for business
          purposes unless the space is used exclusively on a regular basis as the "principal place of business" as defined
          above. The IRS applies a 2-part test to determine if the home office is the principal place of business.
        </p>
        <ul>
          <li>Do you spend more business-related time in your home office than anywhere else?</li>
          <li>Are the most significant revenue-generating activities performed in your home office?</li>
        </ul>
        <p>
          If the answer to either of these questions is no, the home office will not be considered the principal place of
          business, and the deduction cannot be taken.
        </p>
        <p>
          A home office also increases your business miles because travel from your home office to a business
          destination—whether it's meeting clients, picking up supplies, or visiting a job site—counts as business miles.
          And, you can depreciate furniture and equipment (purchased new for your business or converted to business use),
          as well as expense new equipment used in your business under the Section 179 expense election.
        </p>
        <p>
          Taxpayers taking a deduction for business use of their home must complete Form 8829. If you have a home office or
          are considering one, please call us. We'll be happy to help you take advantage of these deductions.
        </p>
      </>
    ),
  },
];

export default function HomeOfficeDeduction() {
  return (
    <GuideArticle
      category="tax-strategies"
      page="The Home Office Deduction"
      title={
        <>
          The Home Office <em>Deduction</em>
        </>
      }
      lead="Who qualifies for the home office deduction, which expenses count and how they're limited, selling a home with an office, and the simplified option."
      sections={sections}
    >
      <p>
        Under the IRS rules, a taxpayer is allowed to deduct expenses related to business use of a home, but only if the
        space is used "exclusively" on a "regular basis." To qualify for a home office deduction you must meet one of the
        following requirements:
      </p>
      <ol>
        <li>Exclusive and regular use as your principal place of business</li>
        <li>A place for meeting with clients or customers in the ordinary course of business</li>
        <li>
          A place for the taxpayer to perform administrative or management activities associated with the business,
          provided there is no other fixed location from which the taxpayer conducts a substantial amount of such
          administrative or management activities
        </li>
      </ol>
      <p>
        A separate structure not attached to your dwelling unit that is used regularly and exclusively for your trade or
        profession also qualifies as a home office under the IRS definition.
      </p>
      <p>
        The exclusive-use test is satisfied if a specific portion of the taxpayer's home is used solely for business
        purposes or inventory storage. The regular-basis test is satisfied if the space is used on a continuing basis for
        business purposes. Incidental business use does not qualify.
      </p>
      <p>
        In determining the principal place of business, the IRS considers two factors: Does the taxpayer spend more
        business-related time in the home office than anywhere else? Are the most significant revenue-generating activities
        performed in the home office? Both of these factors must be considered when determining the principal place of
        business.
      </p>
    </GuideArticle>
  );
}
