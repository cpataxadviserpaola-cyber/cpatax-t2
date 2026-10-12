import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('life-events.php');
const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'loan-types',
    title: 'What are the main ways to borrow against home equity?',
    body: (
      <p>
        A home equity loan generally provides a lump sum repaid under agreed terms. A home equity
        line of credit (HELOC) is revolving credit: the lender approves a limit, and you draw funds
        as allowed by the agreement. Both are secured by your home, so missed payments can put the
        property at risk. Compare these options with unsecured alternatives and consider whether
        borrowing is necessary.
      </p>
    ),
  },
  {
    id: 'costs-and-rates',
    title: 'How should I compare rates and fees?',
    body: (
      <>
        <p>
          Request the full rate and fee terms in writing from multiple lenders. Compare the annual
          percentage rate (APR), how the rate can change, and all costs to open and use the account,
          including appraisal, application, closing, annual, transaction, and inactivity fees.
          Promotional rates may expire, so check what rate applies afterward.
        </p>
        <p>
          For a variable-rate HELOC, identify the index, lender margin, adjustment frequency, and
          applicable rate caps. Ask how payments might change if rates rise and whether the lender
          can freeze or reduce access to the line under the contract.
        </p>
        <p>
          The{' '}
          <a
            href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-home-equity-line-of-credit-heloc-en-246/"
            {...external}
          >
            Consumer Financial Protection Bureau HELOC guide
          </a>{' '}
          explains common features and risks.
        </p>
      </>
    ),
  },
  {
    id: 'repayment',
    title: 'What happens during repayment?',
    body: (
      <p>
        Many HELOC agreements have a draw period followed by a repayment period. During the draw
        period, payments may be interest-only or based on the amount borrowed; when repayment
        begins, payments can rise as principal becomes due. Check the dates, minimum-payment
        formula, options for renewing or converting the balance, and whether a large final payment
        could be due. Make sure the expected payment remains manageable under less favorable rate
        assumptions.
      </p>
    ),
  },
  {
    id: 'risk',
    title: 'What risks should I weigh before borrowing?',
    body: (
      <>
        <p>
          Home-equity borrowing turns your home into collateral for another debt. If you cannot
          repay, the lender may be able to foreclose. A variable rate, reduced credit line, future
          income change, or decline in home value can also make a plan harder to manage. Borrow only
          what you can repay and avoid treating an available credit limit as spendable income.
        </p>
        <Callout label="Important">
          <p>
            Compare the total borrowing cost and repayment schedule with your household budget, and
            keep funds for emergencies before using home equity for discretionary expenses.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'taxes',
    title: 'Can I deduct the interest?',
    body: (
      <p>
        The tax treatment depends on current law and how the borrowed funds are used, among other
        requirements. Do not assume interest is deductible simply because the debt is secured by
        your home. Keep records showing how loan proceeds were used and consult current IRS
        guidance or a tax professional about your situation.
      </p>
    ),
  },
  {
    id: 'shopping',
    title: 'How can I shop for a suitable plan?',
    body: (
      <>
        <p>
          First decide whether you need a one-time amount or ongoing access to credit. Then compare
          written offers using the same borrowing amount and assumptions. Ask lenders to explain
          fees, rate changes, payment changes, draw and repayment dates, early closure charges, and
          circumstances in which access may be restricted. Read the agreement before signing.
        </p>
        <RelatedGuide guide={related([68, 'Refinancing Your Mortgage: When and How'])}>
          If you are comparing a home-equity loan with refinancing your first mortgage, also see:
        </RelatedGuide>
      </>
    ),
  },
];

export default function HomeEquityLoans() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/preparing-for-college"
      page="Home Equity Loans"
      title={<>Home Equity Loans: <em>How To Shop For The One That Is Best For You</em></>}
      lead="A home-equity loan or line of credit can provide access to funds, but it also puts your home at risk if you cannot repay. Compare rates, fees, repayment terms, and alternatives before borrowing."
      sections={sections}
    />
  );
}
