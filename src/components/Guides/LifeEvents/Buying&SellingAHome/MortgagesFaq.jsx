import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'fixed-or-adjustable',
    title: 'What is the difference between a fixed-rate and adjustable-rate mortgage?',
    body: (
      <p>
        A fixed-rate mortgage keeps the interest rate steady for the loan term, so principal-and-interest payments
        are more predictable. An adjustable-rate mortgage can start with a different rate and later change according
        to the loan’s terms and a reference index. Review when adjustments can happen, how much the rate can change,
        and whether the payment would remain manageable in a higher-rate period.
      </p>
    ),
  },
  {
    id: 'compare-loans',
    title: 'How should I compare mortgage offers?',
    body: (
      <p>
        Compare offers for the same loan amount, term, and type. Look at the interest rate, annual percentage rate,
        lender fees, points, estimated cash to close, and the total cost over the period you expect to keep the loan.
        Ask each lender which quoted terms can still change and what assumptions were used in the estimate.
      </p>
    ),
  },
  {
    id: 'down-payment',
    title: 'Do I need a 20 percent down payment?',
    body: (
      <p>
        Not always. Down-payment requirements vary by loan program and borrower circumstances. A smaller down
        payment may mean mortgage insurance, a larger monthly payment, or different loan costs. Compare the tradeoff
        with keeping enough savings for closing costs, repairs, and emergencies.
      </p>
    ),
  },
  {
    id: 'rate-lock',
    title: 'What does it mean to lock a mortgage rate?',
    body: (
      <p>
        A rate lock is an agreement that may hold a quoted interest rate for a specified period while your loan is
        processed, subject to its conditions. Ask how long the lock lasts, what happens if closing is delayed, and
        whether fees apply to extend it. Confirm the lock and its terms in writing with your lender.
      </p>
    ),
  },
  {
    id: 'refinance',
    title: 'When might refinancing make sense?',
    body: (
      <p>
        Refinancing replaces an existing mortgage with a new one. Compare the new payment and total borrowing costs,
        including closing expenses, against how long you expect to keep the loan. A lower rate alone does not prove
        a refinance will save money; also consider the new term, fees, and whether you are taking cash out.
      </p>
    ),
  },
];

export default function MortgagesFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="Mortgages: Frequently Asked Questions"
      title={<>Mortgages: <em>Frequently Asked Questions</em></>}
      lead="Answers to common questions about mortgage types, comparing loan offers, down payments, rate locks, and refinancing."
      sections={sections}
    />
  );
}
