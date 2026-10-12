import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('life-events.php');
const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'why-refinance',
    title: 'When might refinancing be worth considering?',
    body: (
      <>
        <p>
          A refinance replaces your current mortgage with a new loan. Homeowners consider one to
          lower the interest rate, change from an adjustable to a fixed rate, shorten or extend the
          payoff period, or borrow against available equity. Each goal changes the costs and
          tradeoffs, so compare the new loan with keeping your current mortgage.
        </p>
        <p>
          A lower monthly payment alone does not establish that refinancing saves money. The payment
          may fall because the new loan has a longer term, while the total interest paid increases.
          A cash-out refinance also increases the debt secured by your home.
        </p>
      </>
    ),
  },
  {
    id: 'break-even',
    title: 'How do I estimate the break-even point?',
    body: (
      <>
        <p>
          Add the refinance costs you would pay and divide that total by the expected monthly
          reduction in principal-and-interest payments. The result is a rough number of months to
          recover those costs. Compare that time with how long you expect to keep the home and loan.
        </p>
        <Callout label="Example">
          <p>
            If closing costs are $4,000 and the new payment is $200 lower per month, the simple
            break-even estimate is 20 months. This does not account for a different loan term,
            taxes, insurance, payment changes, or the time value of money.
          </p>
        </Callout>
        <p>
          Ask lenders for written estimates and compare the total costs and loan terms, not just the
          quoted rate. The{' '}
          <a href="https://www.consumerfinance.gov/owning-a-home/" {...external}>
            Consumer Financial Protection Bureau home-loan resources
          </a>{' '}
          explain how to review and compare mortgage offers.
        </p>
      </>
    ),
  },
  {
    id: 'loan-terms',
    title: 'What loan terms should I compare?',
    body: (
      <>
        <p>Review the complete offer, including:</p>
        <ul>
          <li>Interest rate and whether it is fixed or adjustable.</li>
          <li>Loan term, monthly principal-and-interest payment, and total interest over time.</li>
          <li>Points, lender fees, appraisal and title charges, and any prepayment penalty.</li>
          <li>Whether costs are paid upfront or added to the new loan balance.</li>
          <li>Mortgage insurance requirements and the treatment of any existing second mortgage.</li>
        </ul>
        <p>
          Get estimates from multiple lenders and check that you are comparing similar loan
          amounts, terms, and features. A rate that is lower but requires substantial points or
          fees may not be the least expensive option for your situation.
        </p>
      </>
    ),
  },
  {
    id: 'adjustable-rate',
    title: 'Should I replace an adjustable-rate mortgage?',
    body: (
      <p>
        If your current mortgage has an adjustable rate, find out when it can next change, how often
        it can adjust, and the contractual limits on rate and payment changes. Compare the expected
        payments under the existing loan with available fixed-rate and adjustable-rate offers.
        Consider whether the new payment fits your budget if rates rise and whether refinancing
        costs are justified by greater payment certainty.
      </p>
    ),
  },
  {
    id: 'next-steps',
    title: 'What should I do before applying?',
    body: (
      <>
        <p>
          Review your current mortgage statement and note the balance, rate, remaining term, and any
          payoff fees. Decide what you want the refinance to achieve, estimate how long you expect
          to stay, and compare written offers from several lenders. Ask each lender to explain
          unclear charges and whether quoted terms are locked.
        </p>
        <RelatedGuide guide={related([52, 'Home Equity Loans: How To Shop For The One That Is Best For You'])}>
          If you are considering borrowing against your home equity, also see:
        </RelatedGuide>
      </>
    ),
  },
];

export default function RefinancingYourMortgage() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/preparing-for-college"
      page="Refinancing Your Mortgage"
      title={<>Refinancing Your Mortgage: <em>When and How</em></>}
      lead="Refinancing can change your interest rate, payment, loan term, or access to home equity. Compare the total costs and long-term effects with your current mortgage before deciding."
      sections={sections}
    />
  );
}
