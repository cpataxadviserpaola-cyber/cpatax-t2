import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'records-to-keep',
    title: 'What pieces of paper do I need to keep in order to do my taxes?',
    body: (
      <p>
        Keep detailed records supporting the income, expenses, and other information on your tax return. Organized
        records can help you prepare your return, substantiate deductions, and respond to an audit. The source FAQ
        suggests keeping many records for several years and some indefinitely; the appropriate period depends on the
        record and tax issue.
      </p>
    ),
  },
  {
    id: 'types-of-records',
    title: 'What type of records do I need to keep?',
    body: (
      <>
        <p>Keep current-year records for income and any deductions or credits you claim. The source FAQ lists:</p>
        <ul>
          <li>Income, including wages, interest, and dividends.</li>
          <li>Information used to support dependents and their support.</li>
          <li>Medical expenses, taxes, and interest.</li>
          <li>Charitable contributions and child-care expenses.</li>
          <li>Business expenses, professional or union dues, uniforms, and job supplies.</li>
          <li>Education expenses, when deductible under the rules that apply to your return.</li>
          <li>Vehicle and travel costs when connected with an activity for which expenses may be claimed.</li>
        </ul>
        <p>
          Keep relevant bank-account and loan records too, even when they are not directly entered on the return.
          Statements, receipts, invoices, mileage logs, and other original records can help explain reported amounts
          and transactions.
        </p>
      </>
    ),
  },
  {
    id: 'retention-period',
    title: 'How long should I keep these records?',
    body: (
      <>
        <p>
          Keep income and expense records for as long as they may be needed to substantiate a return. The source FAQ
          summarizes federal periods this way: generally three years; six years if more than 25% of gross income was
          omitted; indefinitely for a fraudulent or unfiled return; three years from filing the original return or
          two years from payment, whichever is later, for certain refund claims; seven years for a claim involving a
          worthless security or bad-debt deduction; and at least four years for employment tax records, measured
          from when the tax is due or paid, whichever is later.
        </p>
        <p>
          The source page also describes a general three-year period measured from filing or the return’s due date,
          whichever is later, or two years from payment when that is later. These examples are not a complete
          statement of current law. Verify the period that applies to your return, claim, and state.
        </p>
      </>
    ),
  },
  {
    id: 'old-returns',
    title: 'Should I keep my old tax returns? If so, for how long?',
    body: (
      <>
        <p>
          Yes. A prior return can help when preparing the next return, remind you of recurring items, and preserve
          information that may be needed later. The source FAQ suggests keeping old returns, particularly when they
          contain information such as a home’s tax basis, and notes that an examiner may ask for copies of prior-year
          returns during an audit.
        </p>
        <p>
          The source mentions keeping the prior three or four years as a practical minimum in many cases, while
          retaining returns longer when they contain information that remains relevant. IRS copies or transcripts may
          be requested under current IRS procedures; check which option is available for the year you need.
        </p>
      </>
    ),
  },
  {
    id: 'asset-records',
    title: 'What other types of tax records should I keep?',
    body: (
      <>
        <p>
          Keep records that establish cost and adjustments for property you may later sell. Examples in the source
          include capital assets such as coins, antiques, jewelry, stocks, and bonds; purchase and improvement records
          for your home; and purchase, maintenance, and improvement records for rental or investment property.
        </p>
        <p>
          Retain basis records for as long as you own the property and afterward for the applicable period for the
          transaction and related return.
        </p>
      </>
    ),
  },
  {
    id: 'non-tax-records',
    title: 'Are there any non-tax records I should keep?',
    body: (
      <>
        <p>Some records may be useful beyond tax preparation, including:</p>
        <ul>
          <li>Insurance policies for casualty, theft, medical, or certain business-loss claims.</li>
          <li>Records of major purchases, which can help with a loss claim, donation, or later sale.</li>
          <li>
            Family and legal documents—such as marriage, birth, and adoption records and divorce agreements—that may
            support filing status or dependent-related matters.
          </li>
          <li>Health and medical-history records that may explain the need for medical expenses.</li>
        </ul>
        <p>Which additional documents matter depends on your circumstances. Store sensitive records securely.</p>
      </>
    ),
  },
  {
    id: 'recordkeeping-system',
    title: 'What kind of recordkeeping system do I need?',
    body: (
      <>
        <p>
          Your system can be simple if it keeps records complete and retrievable. The source suggests grouping
          receipts by category, labeling folders, separating each tax year, and storing the filed return with its
          records. A business owner, partner, or S corporation shareholder may benefit from formal books and help from
          a bookkeeper or accountant.
        </p>
        <h3>Charitable contributions</h3>
        <p>
          Keep required proof of gifts. The source FAQ describes bank records, written acknowledgments from the
          organization, or employer payroll-deduction records as substantiation examples for cash or check
          contributions. Documentation requirements change and can depend on the gift amount and type; check current
          IRS rules. If claiming charitable mileage, retain a contemporaneous record of the miles and how they were
          calculated.
        </p>
        <h3>Records for particular situations</h3>
        <ul>
          <li>
            If you pay work expenses yourself, keep supporting records for reimbursement or any deduction currently
            allowed under the rules that apply.
          </li>
          <li>If you receive tips, keep an accurate record of tip income.</li>
          <li>For property, retain receipts and other proof of repairs and improvements.</li>
          <li>
            If you hire household workers, document who worked, when and where they worked, and the amounts paid.
          </li>
          <li>
            For a business, keep timely records of transactions, expenses, vehicle mileage, travel, and other costs
            relevant to the business and its tax filings.
          </li>
          <li>
            For business travel, save receipts and logs for transportation, lodging, meals, and other expenses that
            may be claimed under current rules.
          </li>
        </ul>
        <p>
          Up-to-date business records help support tax reporting and make it easier to assess whether the business is
          profitable.
        </p>
      </>
    ),
  },
];

export default function RecordkeepingFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Recordkeeping for Your Taxes FAQ"
      title={
        <>
          Recordkeeping for Your Taxes: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about tax documents, what to retain and for how long, old returns, property records, and organizing files for personal and business taxes."
      sections={sections}
      numbered={false}
    />
  );
}
