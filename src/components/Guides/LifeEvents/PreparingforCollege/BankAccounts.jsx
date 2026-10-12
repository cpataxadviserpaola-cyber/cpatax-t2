import GuideArticle from '../../GuideArticle.jsx';

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'needs',
    title: 'What should I consider before choosing an account?',
    body: (
      <p>
        Match the account to how you handle money. A checking account may suit frequent payments
        and withdrawals, while a savings account is generally intended for money set aside. Consider
        whether you need nearby branches, cash deposits, mobile access, bill pay, direct deposit, or
        linked accounts, and check whether the institution supports those services.
      </p>
    ),
  },
  {
    id: 'fees',
    title: 'Which fees and requirements should I ask about?',
    body: (
      <>
        <p>Ask for the fee schedule and find out:</p>
        <ul>
          <li>Whether there is a monthly maintenance fee and how it can be waived.</li>
          <li>Minimum opening deposit and minimum balance requirements.</li>
          <li>ATM, overdraft, returned-payment, wire-transfer, and paper-statement charges.</li>
          <li>Limits or fees for withdrawals, transfers, or cash deposits.</li>
          <li>How long deposits take to become available and how disputes are handled.</li>
        </ul>
        <p>
          Ask the institution to explain overdraft options and opt-in requirements before deciding
          whether to enable a service that may result in fees.
        </p>
      </>
    ),
  },
  {
    id: 'interest',
    title: 'How do I compare interest and account features?',
    body: (
      <p>
        For interest-bearing accounts, compare the annual percentage yield (APY), minimum balance
        needed to earn it, and whether the rate can change. Also consider ATM availability, online
        access, customer support, account alerts, and how easily you can transfer money. Promotional
        rates may be temporary, so confirm the standard rate and conditions.
      </p>
    ),
  },
  {
    id: 'safety',
    title: 'Is my deposit protected?',
    body: (
      <p>
        Check that the bank is insured by the FDIC or the credit union by the NCUA, and understand
        that coverage applies to eligible deposits subject to applicable limits and ownership
        categories. Investment products offered through a financial institution are not necessarily
        insured deposits. Verify an institution’s status directly using{' '}
        <a href="https://www.fdic.gov/resources/deposit-insurance/" {...external}>
          FDIC deposit-insurance resources
        </a>{' '}
        or the{' '}
        <a href="https://ncua.gov/support-services/share-insurance-fund" {...external}>
          NCUA Share Insurance Fund information
        </a>
        .
      </p>
    ),
  },
  {
    id: 'before-opening',
    title: 'What should I do before opening an account?',
    body: (
      <p>
        Compare the account agreement and fee schedule from more than one institution. Confirm
        eligibility, required identification, funding methods, and any conditions for avoiding
        fees. Keep copies of the account disclosures and set up alerts for low balances, deposits,
        and withdrawals after opening.
      </p>
    ),
  },
];

export default function BankAccounts() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/preparing-for-college"
      page="Bank Accounts"
      title={<>Bank Accounts: <em>What To Look and Ask For</em></>}
      lead="The right account depends on how you save, spend, and access your money. Compare fees, requirements, services, interest, and deposit protection before opening one."
      sections={sections}
    />
  );
}
