import GuideArticle, { Callout, FigureTable } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=159 (Getting a Loan: Frequently Asked
// Questions), word for word from the live page. The library's answer to "Is interest on educational
// loans tax deductible?" only points to its Tax Benefits of Higher Education FAQ, which has no page
// here, so that question is left out.
// Address: /guides/life-events/dealing-with-your-bank/getting-a-loan-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'prepaying-mortgage',
    title: 'Should I prepay my mortgage?',
    body: (
      <>
        <p>
          As a general rule, if you are able to prepay your mortgage (and if there is no penalty for doing so) you should
          prepay as much as you can every month. There are, however, two exceptions to the general rule:
        </p>
        <ol>
          <li>
            You do not have an emergency fund of three to six months' worth of expenses stashed away. Any extra money you have
            should be put towards the emergency fund. Once you've achieved this essential financial goal, then you can begin
            paying down your mortgage.
          </li>
          <li>
            You have a large amount of credit card debt. In such case, all of your extra funds should be used to pay down those
            debts.
          </li>
        </ol>
        <p>
          In addition, there are a few individuals for whom paying down a mortgage earlier might not be as beneficial
          financially, particularly if they achieve a better return by investing that money elsewhere. Whether an investor
          fits into this category depends on his or her marginal tax rate, mortgage interest rate, the return they can get on
          an investment, and any long-term investment goals they might have.
        </p>
      </>
    ),
  },
  {
    id: 'when-to-refinance',
    title: 'When should I refinance my home?',
    body: (
      <>
        <p>
          Refinancing becomes worth your while if the current interest rate on your mortgage is at least 2 percentage points
          higher than the prevailing market rate. Talk to some lenders to determine what rates are available and the costs
          associated with refinancing. These costs include appraisals, attorney's fees, and points.
        </p>
        <p>
          Once you know what the costs will be, figure out what your new payment would be if you refinanced. You can then
          estimate how long it will take to recover the costs of refinancing by dividing your closing costs by the difference
          between your new and old payments (your monthly savings).
        </p>
        <p>
          Be aware that the amount you ultimately save depends on many factors, including your total refinancing costs,
          whether you sell your home in the near future, and the effects of refinancing on your taxes.
        </p>
      </>
    ),
  },
  {
    id: 'borrowing-against-securities',
    title: 'Should I borrow against my securities?',
    body: (
      <>
        <p>
          Borrowing against your securities can be a low-cost way to borrow money. No deduction is allowed for the interest
          unless the loan is used for investment or business purposes.
        </p>
        <Callout label="Tip">
          <p>
            If your margin debt exceeds 50 percent of the value of your securities, you will be subject to a margin call,
            which means that you will have to come up with cash or sell securities. If the market is falling at the time, a
            margin call can cause a financial disaster. Therefore, we recommend against the use of margin debt, unless the
            amount is kept way below 50 percent. Twenty-five percent is a much safer percentage.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'home-equity-line-of-credit',
    title: 'What is a home equity line of credit?',
    body: (
      <>
        <p>
          A home equity line of credit is a form of revolving credit in which your home serves as collateral. Because a home
          is likely to be a consumer's largest asset, many homeowners use their credit lines only for major items such as
          education, home improvements, or medical bills and not for day-to-day expenses.
        </p>
        <p>
          With a home equity line, you will be approved for a specific amount of credit, in other words, the maximum amount
          you can borrow at any one time while you have the plan.
        </p>
        <p>
          Many lenders set the credit limit on a home equity line by taking a percentage (say, 75 percent) of the appraised
          value of the home and subtracting the balance owed on the existing mortgage. For example:
        </p>
        <FigureTable
          label="Example home equity credit line calculation"
          columns={['Item', 'Amount']}
          rows={[
            ['Appraisal of home', '$100,000'],
            ['Percentage', '× 75%'],
            ['Percentage of appraised value', '$75,000'],
            ['Less mortgage debt', '-$40,000'],
          ]}
          total={['Potential credit line', '$35,000']}
        />
        <p>
          In determining your actual credit line, the lender will also consider your ability to repay by looking at your
          income, debts, and other financial obligations, as well as your credit history.
        </p>
        <p>
          Once you're approved for a home equity loan, you will usually be able to borrow up to your credit limit whenever you
          want. Typically, you draw on your line of credit by using special checks, but under some plans, borrowers can use a
          credit card or other means to borrow money and make purchases. There may be limitations on how you use the line,
          however. Some plans may require you to borrow a minimum amount each time you draw on the line—for example, $300—and
          to keep a minimum amount outstanding.
        </p>
      </>
    ),
  },
  {
    id: 'heloc-costs',
    title: 'What are the costs of obtaining a home equity line of credit?',
    body: (
      <>
        <p>
          Many of the costs in setting up a home equity line of credit are similar to those you pay when you buy a home. For
          example these fees may be charged:
        </p>
        <ul>
          <li>A fee for a property appraisal, which estimates the value of your home</li>
          <li>An application fee, which may not be refundable if you are turned down for credit</li>
          <li>Up-front charges, such as one or more points (one point equals one percent of the credit limit)</li>
          <li>
            Other closing costs, which include fees for attorneys, title search, mortgage preparation and filing, property and
            title insurance, as well as taxes
          </li>
          <li>Yearly membership or maintenance fees</li>
        </ul>
        <p>You also may be charged a transaction fee every time you draw on the credit line.</p>
      </>
    ),
  },
  {
    id: 'interest-rate-lock-in',
    title: 'What is an interest rate "lock-in"?',
    body: (
      <>
        <p>
          If you decide to apply for financing with a particular lender, and if you do not want to let the interest rate
          &ldquo;float&rdquo; until closing, then get a written statement guaranteeing the interest rate and the number of
          discount points that you will pay at closing. This binding commitment or &ldquo;lock-in&rdquo; ensures that the
          lender will not raise these costs even if rates increase before you settle on the new loan. You also may consider
          requesting an agreement where the interest rate can decrease (but not increase) before closing. If you cannot get the
          lender to put this information in writing, you may want to choose one that will.
        </p>
        <p>
          Most lenders place a limit on the length of time (say, 60 days) that they will guarantee the interest rate. You must
          sign the loan during that time or lose the benefit of that particular rate. Because many people are refinancing their
          mortgages, there may be a delay in processing the papers. Therefore, it may be wise to contact your loan officer
          periodically to check on the progress of your loan approval and to see if information is needed.
        </p>
      </>
    ),
  },
  {
    id: 'lender-disclosures',
    title: 'What disclosures must a lender give you?',
    body: (
      <>
        <p>
          For a financing loan, the lender must give you a written statement of the costs and terms of the financing before
          you become legally obligated for the loan. This is required by the Truth in Lending Act and you usually receive the
          information around the time of settlement—although some lenders provide it earlier.
        </p>
        <Callout label="Tip">
          <p>
            Review this statement carefully before you sign the loan. The disclosure tells you what the APR, finance charge,
            amount financed, payment schedule, and other important credit terms are.
          </p>
        </Callout>
        <p>
          If you refinance with a different lender, or if you borrow beyond your unpaid balance with your current lender, you
          also must be given the right to rescind the loan. In these loans, you have the right to rescind or cancel the
          transaction within three business days following settlement, receipt of your Truth in Lending disclosures, or
          receipt of your cancellation notice, whichever occurs last.
        </p>
      </>
    ),
  },
  {
    id: 'reverse-mortgage',
    title: 'What is a reverse mortgage?',
    body: (
      <>
        <p>
          A reverse mortgage is a type of home equity loan that allows you to convert some of the equity in your home into cash
          while you continue to own the home. Reverse mortgages operate like traditional mortgages, only in reverse. Rather
          than paying your lender each month, the lender pays you. Reverse mortgages differ from home equity loans in that most
          reverse mortgages do not require any repayment of principal, interest, or servicing fees as long as you live in the
          home.
        </p>
        <p>
          The reverse mortgage's benefit is that it allows homeowners who are age 62 and over to keep living in their homes and
          to use their equity for whatever purpose they choose. A reverse mortgage might be used to cover the cost of home
          health care, or to pay off an existing mortgage to stop a foreclosure, or to support children or grandchildren.
        </p>
        <p>
          When the homeowner dies or moves out, the loan is paid off by a sale of the property. Any leftover equity belongs to
          the homeowner or the heirs.
        </p>
      </>
    ),
  },
  {
    id: 'tax-deductible-interest',
    title: 'What loan interest is tax-deductible?',
    body: (
      <>
        <p>
          The deductibility of interest has been limited in recent years. The following types of interest are at least
          partially deductible:
        </p>
        <ul>
          <li>Mortgage interest</li>
          <li>Business interest</li>
          <li>Investment interest</li>
          <li>Education related interest</li>
        </ul>
      </>
    ),
  },
  {
    id: 'mortgage-interest-limitations',
    title: 'What are the limitations on deductibility of mortgage interest?',
    body: (
      <p>
        Generally, interest expense on the taxpayer's primary residence and second (but not a third) home, is deductible.
        Interest is only deductible on the first $1,000,000 of the acquisition loan ($500,000 if married filing jointly). As
        the loan is paid off the limit is reduced. In other words, you cannot refinance a loan for a higher amount than the
        current principal balance and increase the deduction. In addition interest on a home equity loan of up to $100,000 can
        be deducted.
      </p>
    ),
  },
  {
    id: 'business-interest-deductibility',
    title: 'Is interest expense incurred for business purposes deductible?',
    body: (
      <p>
        Yes. Interest expense incurred for a trade or business is deductible against the income of that business. For example,
        if you are self-employed the business interest would be deducted on Schedule C.
      </p>
    ),
  },
  {
    id: 'investment-interest-deductibility',
    title: 'Is investment related interest expense deductible?',
    body: (
      <p>Yes. Investment interest is deductible up to the amount of investment income.</p>
    ),
  },
  {
    id: 'private-mortgage-insurance',
    title: 'When can you stop paying private mortgage insurance?',
    body: (
      <>
        <p>
          Generally, if you make a down payment of less than 20 percent when buying a home, the lender will require you to
          buy private mortgage insurance (PMI). You can generally drop the PMI when you have attained 20 percent equity in the
          home, or when the value of your home goes up (due to a good real estate market) so that your equity constitutes 20
          percent.
        </p>
        <p>
          Under the Homeowner's Protection Act (HPA) of 1998 you have the right to request cancellation of PMI when you pay
          down your mortgage to the point that it equals 80 percent of the original purchase price or appraised value of your
          home at the time the loan was obtained, whichever is less. You also need a good payment history, meaning that you
          have not been 30 days late with your mortgage payment within a year of your request, or 60 days late within two
          years. Your lender may require evidence that the value of the property has not declined below its original value and
          that the property does not have a second mortgage, such as a home equity loan.
        </p>
        <p>
          Under HPA, mortgage lenders or servicers must automatically cancel PMI coverage on most loans, once you pay down
          your mortgage to 78 percent of the value if you are current on your loan. If the loan is delinquent on the date of
          automatic termination, the lender must terminate the coverage as soon thereafter as the loan becomes current.
          Lenders must terminate the coverage within 30 days of cancellation or the automatic termination date, and are not
          permitted to require PMI premiums after this date. Any unearned premiums must be returned to you within 45 days of
          the cancellation or termination date.
        </p>
        <p>
          For high-risk loans, mortgage lenders or servicers are required to automatically cancel PMI coverage once the
          mortgage is paid down to 77 percent of the original value of the property, provided you are current on your loan.
        </p>
        <p>
          If PMI has not been canceled or otherwise terminated, coverage must be removed when the loan reaches the midpoint of
          the amortization period. On a 30-year loan with 360 monthly payments, for example, the chronological midpoint would
          occur after 180 payments. This provision also requires that the borrower must be current on the payments required by
          the terms of the mortgage. Final termination must occur within 30 days of this date.
        </p>
        <p>
          HPA applies to residential mortgage transactions obtained on or after July 29, 1999, but it also has requirements for
          loans obtained before that date.
        </p>
      </>
    ),
  },
];

export default function GettingALoanFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/dealing-with-your-bank"
      page="Getting a Loan: Frequently Asked Questions"
      title={<>Getting a Loan: <em>Frequently Asked Questions</em></>}
      lead="Borrowing against your home, investments, or business requires balancing interest rates, closing costs, and tax rules. Here are answers to common questions about loans and refinancing."
      sections={sections}
    />
  );
}
