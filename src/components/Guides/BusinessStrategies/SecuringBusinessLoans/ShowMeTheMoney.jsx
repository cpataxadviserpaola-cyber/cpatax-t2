import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'loan-myths',
    title: 'Avoid common assumptions about business loans',
    body: (
      <>
        <p>
          The source warns against assuming that lenders are eager to fund small businesses or start-ups, that the
          business will speak for itself, that all banks offer the same terms and services, or that a loan is obtained
          simply by persuading a lender to hand over money. A loan request is an assessment of risk and repayment, so
          preparation and evidence matter.
        </p>
        <p>
          The article cites a 2014 study when discussing banks as a source of small-business credit. Those figures are
          historical; current lending conditions and available financing vary by lender, market, and borrower.
        </p>
      </>
    ),
  },
  {
    id: 'bank-perspective',
    title: 'Understand the lender’s perspective',
    body: (
      <p>
        Lenders must protect depositors, comply with regulators, and manage risk while serving their communities.
        Consider the request from the lender’s point of view: show that the business is trustworthy, can repay the
        loan, and has a plan for handling difficulties. Understanding those concerns can help you prepare a clear,
        supportable proposal.
      </p>
    ),
  },
  {
    id: 'choose-a-bank',
    title: 'Choose a lender that fits your business',
    body: (
      <p>
        Banks differ in the financing they offer, interest rates, risk tolerance, staff expertise, services, and
        approach to small-business lending. Compare local business-oriented lenders and consider both your current
        and anticipated needs. The source notes that banks commonly expect business borrowers to maintain an account
        with them; ask each lender about its requirements. An accountant may help you assess which institution offers
        suitable expertise and value.
      </p>
    ),
  },
  {
    id: 'build-relationship',
    title: 'Build a relationship before you need financing',
    body: (
      <p>
        Get to know the lender and loan officer before a financing emergency. A bank that understands your business
        and its history may be better positioned to assess a request when challenges arise. The source also suggests
        establishing a reliable repayment history, where appropriate, by borrowing modest amounts and meeting the
        agreement’s terms on schedule.
      </p>
    ),
  },
  {
    id: 'loan-proposal',
    title: 'Prepare a complete loan proposal',
    body: (
      <>
        <p>
          Explain the request clearly and support it with evidence. A lender will want to understand:
        </p>
        <ul>
          <li>The specific purpose of the loan and the exact amount required.</li>
          <li>The primary source of repayment and evidence that it is reliable.</li>
          <li>Alternative repayment sources if the plan does not work as expected.</li>
          <li>Business or personal assets available as collateral.</li>
          <li>The experience and ability of the management team.</li>
        </ul>
        <p>
          Anticipate questions about these points. Unclear assumptions or incomplete answers can make it harder for a
          lender to understand the business and evaluate its plan.
        </p>
      </>
    ),
  },
  {
    id: 'prepare-before-applying',
    title: 'Do your homework before applying',
    body: (
      <>
        <p>The source recommends three preparations:</p>
        <ol>
          <li>
            <strong>Write a business plan.</strong> Use it to examine and plan the business, not only to seek a loan.
            Prepare a concise executive summary as well.
          </li>
          <li>
            <strong>Prepare historical financial statements.</strong> The article recommends having an accountant
            prepare or review the statements. Understand the figures and be ready to explain the business’s financial
            position and performance.
          </li>
          <li>
            <strong>Line up references.</strong> Be ready to provide contact information for suppliers, customers,
            potential partners, and professional advisers if the lender requests permission to speak with them.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'respond-to-concerns',
    title: 'Address concerns clearly and ask for advice',
    body: (
      <p>
        A loan application can involve scrutiny and possible rejection, so preparation can make the process more
        manageable. The source notes that an application may fail because a concern was perceived but not clearly
        addressed or represented, rather than because of an actual flaw. Explain the facts accurately, respond
        directly to lender questions, and consult your accountant when you need help preparing.
      </p>
    ),
  },
  {
    id: 'myths-in-detail',
    title: 'Loan assumptions the source cautions against',
    body: (
      <>
        <p>
          The linked guide identifies six assumptions that can leave a borrower unprepared: that lenders are waiting
          to finance small firms; that banks are a ready source of start-up financing; that a company can rely on its
          name or business alone to support a request; that all banks are alike; that large banks do not want small
          business customers; and that a loan can be secured simply by persuading a lender to provide funds.
        </p>
        <p>
          The source also cites a 2014 working paper reporting that 48% of business owners named a major bank as
          their primary financing relationship and 34% named a regional or community bank. These are historical
          figures from the cited study, not current lending statistics.
        </p>
      </>
    ),
  },
  {
    id: 'local-bank-details',
    title: 'Compare local banks and their requirements',
    body: (
      <p>
        The article emphasizes that lenders vary in the types of financing offered, pricing, risk tolerance, staff
        expertise, services, and interest in small-business loans. It recommends looking for a business-oriented
        local bank: a lender outside the area may be less familiar with the borrower and face greater costs in
        checking credit or collecting a defaulted loan. The source notes that banks commonly expect business
        borrowers to maintain a checking or money-market account with them. Confirm current account and lending
        requirements directly with each lender.
      </p>
    ),
  },
  {
    id: 'relationship-details',
    title: 'Establish a track record with the bank',
    body: (
      <p>
        The source recommends beginning the relationship before financing is urgently needed, not first approaching
        an unfamiliar bank during a cash crisis. Where suitable, a borrower may establish a record by taking a
        smaller loan and meeting every part of the agreement on schedule. A history of responsible repayment and
        open communication can help the lender understand how the business handles challenges; it does not guarantee
        approval of future credit.
      </p>
    ),
  },
  {
    id: 'preparation-details',
    title: 'Add detail to your application materials',
    body: (
      <p>
        The guide recommends preparing a complete business plan and a two-page executive summary for situations
        where a lender requests a brief overview. It also says historical financial statements should be prepared
        or verified by an accountant where appropriate. Know what the statements show, be able to explain the
        business’s financial position, and understand how its performance compares with relevant industry norms.
        Keep reference contact information ready so you can respond promptly if the lender asks to speak with
        suppliers, customers, potential partners, or professional advisers.
      </p>
    ),
  },
  {
    id: 'additional-source-details',
    title: 'Additional details from the source',
    body: (
      <>
        <p>
          The source lists as a further misconception the belief that banks—particularly large banks—do not need or
          want small-business customers. It instead recommends identifying a lender whose financing, expertise, and
          services fit the business, and notes that an accountant may help compare institutions.
        </p>
        <p>
          The source says banks commonly require business borrowers, regardless of size, to maintain a checking or
          money-market account with the institution. Requirements differ, so confirm them with each lender before
          applying.
        </p>
        <p>
          To illustrate the role of banks in small-business credit, the source cites a 2014 working paper reporting
          that about 48% of business owners named a major bank as their primary financing relationship, while about
          34% named a regional or community bank. Those figures describe the cited study and are not current
          statistics.{' '}
          <a
            href="https://www.hbs.edu/faculty/Publication%20Files/15-004_09b1bf8b-eb2a-4e63-9c4e-0374f770856f.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the 2014 working paper cited by the source
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function ShowMeTheMoney() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/securing-business-loans"
      page="Strategies for Securing a Loan"
      title="Show Me The Money! Strategies For Securing a Loan"
      lead="Prepare for a business loan by understanding the lender’s risk concerns, choosing a suitable bank, building a relationship early, and presenting a well-supported proposal."
      sections={sections}
      numbered={false}
    />
  );
}
