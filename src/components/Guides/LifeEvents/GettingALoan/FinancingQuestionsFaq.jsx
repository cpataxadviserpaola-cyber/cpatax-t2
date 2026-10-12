import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=158 (Financing Questions: Frequently Asked
// Questions), word for word. The stray comma in "Even though, raising capital" is dropped and the
// sentence "These include working capital loans…" gets its full stop. The library's page has no
// introduction, so the banner's opening line (`lead`) is written for this site, as on the other FAQ
// pages.
// Address: /guides/life-events/getting-a-loan/financing-questions-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'raise-money',
    title: 'How Can I Raise Money For My Small Business?',
    body: (
      <>
        <p>
          Even though raising capital is the most basic of all business activities, it can be a complex and frustrating
          process. There are several sources to consider when looking for financing. The primary source of capital for
          most new businesses comes from savings and other forms of personal resources. While credit cards are often
          used to finance business needs, there may be better options available, even for very small loans.
        </p>
        <p>
          Many entrepreneurs also look to private sources such as friends and family when starting out in a business
          venture. Often, money is loaned interest-free or at a low-interest rate, which can be beneficial when getting
          started.
        </p>
        <p>
          Outside of personal resources, the most common source of funding is a bank or credit union. Venture capital
          firms also help companies grow in exchange for equity or partial ownership.
        </p>
      </>
    ),
  },
  {
    id: 'types-of-loans',
    title: 'What Types Of Loans Exist For Business Financing?',
    body: (
      <>
        <p>
          To successfully obtain a loan, you must know exactly how much money you need, why you need it, and how you
          will pay it back. Your written proposal must convince the lender that you are a good credit risk.
        </p>
        <p>
          Terms of loans vary from lender to lender, but there are two basic types of loans: Short-term and long-term.
        </p>
        <p>
          Generally, a short-term loan has a maturity of up one year. These include working capital loans, accounts
          receivable loans, and lines of credit.
        </p>
        <p>
          Long-term loans have maturities greater than one year but usually less than seven years. Real estate and
          equipment loans may have maturities of up to 25 years. Long-term loans are used for major business expenses
          such as purchasing real estate and facilities, construction, durable equipment, furniture and fixtures,
          vehicles, etc.
        </p>
      </>
    ),
  },
  {
    id: 'what-banks-look-for',
    title: 'What Do Banks Look For When Considering A Loan Request?',
    body: (
      <>
        <p>
          When reviewing a loan request, the bank official is primarily concerned about repayment. To help determine
          this ability, many loan officers will order a copy of your business credit report from a credit-reporting
          agency.
        </p>
        <p>Using the credit report and the information you have provided, the lending officer will consider the following issues:</p>
        <ul>
          <li>
            Have you invested savings or personal equity in your business totaling at least 25 to 50 percent of the loan
            you are requesting? Remember, a lender or investor will not finance 100 percent of your business.
          </li>
          <li>
            Do you have a sound record of credit-worthiness as indicated by your credit report, work history and letters
            of recommendation? This is very important.
          </li>
          <li>Do you have sufficient experience and training to operate a successful business?</li>
          <li>
            Have you prepared a loan proposal and business plan that demonstrate your understanding of and commitment to
            the success of the business?
          </li>
          <li>Does the business have sufficient cash flow to make the monthly payments on the amount of the loan request?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'loan-proposal',
    title: 'How Do I Write A Good Loan Proposal?',
    body: (
      <>
        <p>A good loan proposal contains the following key elements:</p>

        <h3>General Information</h3>
        <ul>
          <li>Business name and address, names of principals and their social security numbers.</li>
          <li>Purpose of the loan: exactly what the loan will be used for and why it is needed.</li>
          <li>Amount of money required: the exact amount you need to achieve your purpose.</li>
        </ul>

        <h3>Business Description</h3>
        <ul>
          <li>
            Details of what kind of business it is, how long it has existed, number of employees, and current business
            assets.
          </li>
          <li>Ownership structure: details on your company's legal structure.</li>
        </ul>

        <h3>Management Profile</h3>
        <p>
          Develop a short statement on each principal in your business, including background information such as
          education, experience, skills, and accomplishments.
        </p>

        <h3>Market Information</h3>
        <p>
          Clearly define your company's products as well as your markets, identify your competition, and explain how
          your business competes in the marketplace. Profile your customers and explain how your business can satisfy
          their needs.
        </p>

        <h3>Financial Information</h3>
        <ul>
          <li>
            Financial statements: balance sheets and income statements for the past three years. If you are just
            starting out, provide a projected balance sheet and income statement.
          </li>
          <li>Personal financial statements on yourself and other principal owners of the business.</li>
          <li>Collateral you would be willing to pledge as security for the loan.</li>
        </ul>
      </>
    ),
  },
];

export default function FinancingQuestionsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-a-loan"
      page="Financing Questions: Frequently Asked Questions"
      title={
        <>
          Financing Questions: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about raising money for a small business, the types of business loans, what banks look for in a loan request, and how to write a good loan proposal."
      sections={sections}
    />
  );
}
