import GuideArticle, { ArticleTable, Blank, Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=102 (Document Locator System: A Handy Aid For
// Keeping Track of Your Records), word for word. Hyphens used as dashes in the text are now
// dashes, "Professional Residences" in the list of sections is split into the two sections the
// Locator uses (Professionals and Residences), and the Locator ends with blank rows, as the text
// describes.
// Address: /guides/life-events/getting-married/document-locator (articlePages in
// src/data/guides.js).

const tabbedSections = [
  'Banking',
  'Children',
  'Credit and Loans',
  'Employment',
  'Estate Planning [including wills and post-mortem matters]',
  'Important Personal',
  'Insurance',
  'Investments',
  'Major Assets',
  'Professionals',
  'Residences',
  'Tax Records',
  'Vehicles [including boats]',
];

// The Document Locator: each document and the section to file it in.
const locator = [
  ['Accident reports', 'Insurance'],
  ['Adoption records', 'Important Personal and/or Children'],
  ['Accountant', 'Professionals'],
  ['Address book', 'Important Personal'],
  ['Alimony records', 'Tax Records'],
  ['Apartment - records for', 'Residences'],
  ['Annuity', 'Investments'],
  ['Antiques', 'Major Assets'],
  ['Appliances - receipts, warranties, and contracts for', 'Major Assets'],
  ['Appraisals of assets', 'Major Assets'],
  ['Assets - list of', 'Major Assets'],
  ['Attorney', 'Professionals and/or Estate Planning'],
  ['Auto insurance', 'Vehicles and/or Insurance'],
  ['Auto loans', 'Credit and Loans'],
  ['Auto mileage logs', 'Tax Records'],
  ['Automobile title', 'Vehicles'],
  ['Bank account statements', 'Banking'],
  ['Bills of sale', 'Major Assets'],
  ['Birth certificates', 'Important Personal and/or Children'],
  ['Boat insurance', 'Insurance'],
  ['Boat records', 'Vehicles'],
  ['Broker account statements', 'Investments'],
  ['Business interests', 'Investments'],
  ['Canceled checks - general', 'Banking'],
  ['Canceled checks - insurance', 'Insurance'],
  ['Canceled checks - tax related', 'Tax Records'],
  ['Casualty loss records', 'Insurance'],
  ['CD', 'Banking and/or Investments'],
  ['Cemetery plot', 'Estate Planning'],
  ['Charitable gifts', 'Tax Records'],
  ['Checking account statements', 'Banking'],
  ['Child support papers', 'Important Personal and/or Children'],
  ['Claims - insurance', 'Insurance'],
  ['Coin collection', 'Major Assets'],
  ['Collections', 'Major Assets'],
  ['Confirmation slips - from broker', 'Investments'],
  ['CPA', 'Professionals'],
  ['Credit cards - list of', 'Credit and Loans'],
  ['Credit card statements', 'Credit and Loans'],
  ['Credit report - from credit reporting agency', 'Credit and Loans'],
  ['Credit union papers', 'Banking and/or Credit and Loans'],
  ['Custody agreement', 'Important Personal and/or Children'],
  ['Day care records', 'Children'],
  ['Death benefits', 'Employment'],
  ['Death certificate', 'Important Personal'],
  ['Debts owed to you', 'Investments'],
  ['Debts you owe', 'Credit and Loans'],
  ['Deeds to homes', 'Residences'],
  ['Disability insurance', 'Insurance'],
  ['Dividends - records of', 'Investments'],
  ['Divorce decree', 'Important Personal'],
  ['Doctors', 'Professionals'],
  ['Dues - professional or union', 'Tax Records'],
  ['Employee benefits - description of', 'Employment'],
  ['Employers - list of', 'Employment'],
  ['Equipment - business use of', 'Tax Records'],
  ['Equipment - warranties for', 'Major Assets'],
  ['Expenses', 'Tax Records'],
  ['Fees - deductible', 'Tax Records'],
  ['Financial statement - your personal', 'Credit and Loans'],
  ['Forms - tax', 'Tax Records'],
  ['Funeral arrangements', 'Estate Planning'],
  ['Furs', 'Major Assets'],
  ['Gifts - taxable', 'Tax Records'],
  ['Government employers - list of', 'Employment'],
  ['Health insurance', 'Insurance'],
  ['Home - contents of, photographic records', 'Insurance'],
  ['Home office', 'Tax Records'],
  ['Home improvements', 'Residences'],
  ['Inherited property - record of basis', 'Residences'],
  ['Insurance policies', 'Insurance'],
  ['Interest - record of', 'Residences and/or Tax Records'],
  ['IRA', 'Banking'],
  ['Jewelry', 'Major Assets'],
  ['K-1 Forms', 'Tax Records'],
  ['Safe deposit box keys', 'Banking'],
  ['Lawyers', 'Professionals and/or Estate Planning'],
  ['Lease - home', 'Residences'],
  ["License - driver's", 'Vehicles'],
  ['Life insurance policies', 'Insurance'],
  ['Limited partnership documents', 'Investments'],
  ['List of assets', 'Major Assets'],
  ['List of automobiles', 'Vehicles'],
  ['List of bank accounts', 'Banking'],
  ['List of brokerage accounts', 'Investments'],
  ["List of children's schools", 'Children'],
  ['List of credit cards', 'Credit and Loans'],
  ['List of debts', 'Credit and Loans'],
  ['List of employers - government and private', 'Employers'],
  ['List of home improvements', 'Residences'],
  ['List of life insurance policies', 'Insurance'],
  ['List of safe deposit boxes', 'Banking'],
  ['Living will', 'Important Personal'],
  ['Loans - list of', 'Credit and Loans'],
  ['Maintenance of appliances', 'Major Assets'],
  ['Marriage certificate', 'Important Personal'],
  ['Medical expenses', 'Tax Records'],
  ['Medical professionals', 'Professionals'],
  ['Mileage logs - expenses', 'Tax Records'],
  ['Military discharge', 'Important Personal'],
  ['Military employers', 'Employment'],
  ['Mortgage note', 'Residences'],
  ['Mortgage payments and yearly statement', 'Residence and/or Tax Records'],
  ['Moving expense', 'Tax Records'],
  ['Mutual funds', 'Investments'],
  ['Naturalization papers', 'Important Personal'],
  ["Owner's manuals", 'Vehicles and/or Major Assets'],
  ['Partnership statements', 'Tax Records'],
  ['Passports', 'Important Personal'],
  ['Paycheck stubs', 'Employment'],
  ['Pets', 'Important Personal'],
  ['Pension benefits - description', 'Employment'],
  ['Photos of family members', 'Important Personal'],
  ['Photos of home contents', 'Insurance'],
  ['Properties owned - list of', 'Residences'],
  ['Property damage - records', 'Insurance'],
  ['Prospectuses', 'Investments'],
  ['Real estate owned', 'Residences'],
  ['Real estate taxes', 'Residences and/or Tax Records'],
  ['Registration', 'Vehicles'],
  ['Rent - records of', 'Residences'],
  ['Residence closing - records of', 'Residences'],
  ['Retirement accounts', 'Investments'],
  ['Safe deposit boxes', 'Banking'],
  ['Savings accounts', 'Banking'],
  ['Schools - list of', 'Children'],
  ['Service - military', 'Employment and/or Important Personal'],
  ['Social Security numbers', 'Important Personal'],
  ['Stock certificates', 'Investments'],
  ["Survivors' benefits-descriptions", 'Employment'],
  ['Tax returns and forms', 'Tax Records'],
  ['Traffic tickets', 'Vehicles'],
  ['Titles to vehicles', 'Vehicles'],
  ['Travel expenses', 'Tax Records'],
  ['Trust documents', 'Estate Planning'],
  ['Unemployment compensation', 'Employment'],
  ['Vacation home', 'Residences'],
  ['W-2 forms', 'Tax Records'],
  ['Warranties', 'Major Assets'],
  ['Wills', 'Estate Planning'],
];

const sections = [
  {
    id: 'system',
    title: 'The Document Locator System',
    body: (
      <>
        <p>
          Most people have no idea where to start searching for their important records. They usually
          keep them scattered in various locations—tax records in a file cabinet, savings bonds in a home
          safe, wills at an attorney's office, some contracts or deeds in a bank safe deposit box.
        </p>
        <p>
          There's a reason many people do not have an organized recordkeeping system: Organizing your
          records is stressful and confusing.
        </p>
        <p>
          The Document Locator System is effective because it takes away that stress and confusion. This
          simple recordkeeping system provides an easy way to keep track of your important personal (not
          business) records, keeping them organized and available. You will not miss out on a tax
          deduction because you did not keep the necessary receipt. More importantly, the document locator
          system will help a spouse or executor locate your documents in case of death or disability.
        </p>
      </>
    ),
  },
  {
    id: 'sections',
    title: 'Set Up Tabbed Sections',
    body: (
      <>
        <p>
          Set up tabbed sections in your files with the following captions (customizing sections as
          appropriate to your particular situation):
        </p>
        <ol>
          {tabbedSections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ol>
      </>
    ),
  },
  {
    id: 'filing',
    title: 'File the Documents',
    body: (
      <>
        <p>
          File the documents and other records listed in Column 1 in the file sections recommended in
          Column 2 of the Document Locator. Where the original or a copy is filed elsewhere, note this
          location in Column 3 of the Document Locator. You can also use Column 3 for any notes regarding
          the document (such as Passport - "Renew by October 12, 2022" or IRA - "Take first distribution by
          December 31, 2022"). Where your filing system suggests a file section other than that
          recommended in Column 2, just substitute your location for the recommended one. For items other
          than those named here, use the blank spaces at the end of the Locator.
        </p>
        <p>This Document Locator is shown at the end of this Financial Guide.</p>
        <Callout label="Tip">
          <p>
            Put a photocopy of the Document Locator, which will contain the locations of all your important
            documents, in a fireproof safe or safe deposit box.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            In addition to the Document Locator System, prepare a post-mortem letter to a spouse or
            executor. This is also an essential part of helping your heirs and family members get your
            affairs in order in the event of death or disability. The purpose of such a letter is to provide
            them with the information needed to locate records or assets. This will prevent erosion of your
            estate by unnecessary taxes, unfounded claims, or just plain loss of assets.
          </p>
        </Callout>
        <p>
          The key is to develop and follow some type of recordkeeping system, not necessarily the one
          recommended here. If you have any questions, contact your financial advisor.
        </p>
        <Callout label="Tip">
          <p>
            Cull your records every so often. By getting rid of the papers you no longer need, you minimize
            the ever-encroaching mountains of paper we all have to handle.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'documents',
    title: 'Documents You Should Be Able To Locate Easily',
    body: (
      <>
        <p>
          Certain documents, records, and other information should be easily locatable in an emergency.
          These include (1) your personal records, (2) a list of your assets, (3) your estate planning
          records, and (4) your financial records.
        </p>

        <h3>Personal Records</h3>
        <ul>
          <li>Birth certificates of family members</li>
          <li>Death certificates of deceased family members</li>
          <li>Marriage license</li>
          <li>Divorce decree and custody agreement (if divorced)</li>
          <li>Passports (updated)</li>
          <li>Social Security numbers for family members</li>
          <li>The names and addresses of family members, close relatives, and any persons mentioned in a will</li>
          <li>Military records</li>
          <li>List of previous employers</li>
          <li>List of government employers</li>
          <li>Medical records and health insurance cards for family members</li>
        </ul>
        <p>In most cases, the reason these documents are needed is self-explanatory.</p>

        <h3>List of Your Assets</h3>
        <ul>
          <li>
            Description of all major assets that you own separately or jointly with your spouse or other
            person, together with the approximate values and location of deeds, titles, stock certificates,
            or other evidence of ownership.
          </li>
        </ul>
        <Callout label="Note">
          <p>
            Include cash, realty, investments, IRAs, retirement plan benefits, life insurance policies,
            interests in partnerships or other business entities, jewelry and other luxury items,
            automobiles, boats, antiques, coin collections, collectibles, art objects, and debts owed to you
            by others.
          </p>
        </Callout>
        <ul>
          <li>Appraisals of valuable items</li>
          <li>
            Description of the approximate amounts of pension, military, and/or other benefits you or your
            spouse may be entitled to on retirement or death
          </li>
          <li>
            Insurance policies (including group life, individual life, health, casualty, auto, etc.) and
            identity and phone numbers of insurance agents
          </li>
        </ul>

        <h3>Estate Planning Records</h3>
        <ul>
          <li>
            The whereabouts of your will and codicils, along with the name and address of the attorney who
            prepared them
          </li>
          <li>Title to cemetery plot or other burial arrangement</li>
          <li>Post-mortem letter to spouse or family members, to be opened after your death</li>
          <li>Living will or other directions in case of disability</li>
        </ul>

        <h3>Financial and Other Records</h3>
        <ul>
          <li>Location of all safe deposit boxes, keys, and passwords</li>
          <li>Important canceled checks</li>
          <li>
            The names and addresses of your CPA, attorney, and any other professionals concerned with your
            financial affairs
          </li>
          <li>Photographic or video record of house and its contents (for homeowners' insurance purposes)</li>
          <li>
            One statement for each bank account, IRA, mutual fund, broker, or other account you own, along
            with the name and telephone number of the primary banker, broker, or other contact person for
            each account
          </li>
          <li>Brokers' confirmation slips for purchases</li>
          <li>A statement or other reference for any bank account that is not in your name</li>
          <li>One statement or payment stub for each credit card, line of credit, or outstanding loan</li>
          <li>
            Income tax returns for at least six prior years (including all supporting records for the past
            six years), and all prior gift tax returns
          </li>
          <li>
            Records showing the original cost of any realty owned, cost of all improvements that can be
            added to tax basis, and depreciation taken (for business or rental property)
          </li>
          <li>Bills of sale or receipts for major items</li>
          <li>Equipment and appliance manuals and warranty information</li>
        </ul>
      </>
    ),
  },
  {
    id: 'where-to-file',
    title: 'Where to File What',
    body: (
      <>
        <h3>Document Locator</h3>
        <ArticleTable label="Document Locator">
          <colgroup>
            <col className="article-col-label" />
            <col span={2} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Document</th>
              <th scope="col">Where to file</th>
              <th scope="col">Other location/notes</th>
            </tr>
          </thead>
          <tbody>
            {locator.map(([document, section]) => (
              <tr key={document}>
                <td>{document}</td>
                <td>{section}</td>
                <Blank />
              </tr>
            ))}
            {[1, 2, 3, 4, 5].map((row) => (
              <tr key={`blank-${row}`}>
                <Blank />
                <Blank />
                <Blank />
              </tr>
            ))}
          </tbody>
        </ArticleTable>
      </>
    ),
  },
];

export default function DocumentLocator() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-your-estate"
      page="Document Locator System"
      title={
        <>
          Document Locator System: <em>A Handy Aid For Keeping Track of Your Records</em>
        </>
      }
      lead="Are you able to locate insurance contracts, wills, and other important personal records quickly and easily? With this simple document locator system, you no longer need to wonder where to file a paper or where to find it."
      sections={sections}
    />
  );
}
