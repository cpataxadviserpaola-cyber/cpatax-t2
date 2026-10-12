import GuideArticle from '../../GuideArticle.jsx';

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'choose',
    title: 'How do I choose a credit card?',
    body: (
      <p>
        Start with how you expect to use the card. Compare the annual percentage rate (APR), annual
        and transaction fees, late-payment charges, grace-period terms, and any rewards or other
        benefits. Rewards are valuable only if they fit your normal spending and do not lead you to
        spend more or carry an expensive balance. Review the account agreement before applying.
      </p>
    ),
  },
  {
    id: 'cost',
    title: 'What costs should I compare?',
    body: (
      <>
        <p>Check the full fee schedule, including:</p>
        <ul>
          <li>Annual, balance-transfer, cash-advance, and foreign-transaction fees.</li>
          <li>APR for purchases, transfers, and cash advances, including introductory-rate terms.</li>
          <li>Late-payment charges and the effect of a missed payment on promotional rates.</li>
          <li>How interest is calculated and when the grace period applies.</li>
        </ul>
        <p>
          An introductory offer can change after a stated period. Note its end date and the rate or
          fee that will apply afterward.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How can I manage a credit card responsibly?',
    body: (
      <p>
        Use a budget to keep purchases within what you can repay. Pay the statement balance in full
        by the due date when possible, and at least make the required payment on time. Set reminders
        or automatic payments for an amount you can cover, and review statements regularly for
        errors or unfamiliar transactions. If you cannot pay in full, paying more than the minimum
        can reduce interest costs and shorten repayment time.
      </p>
    ),
  },
  {
    id: 'credit-history',
    title: 'How does card use affect my credit history?',
    body: (
      <p>
        Payment history and the amount of credit used can affect credit scores, along with other
        factors. Paying on time and keeping balances manageable may help build a positive history.
        There is no need to carry a balance or pay interest to build credit. Check your credit
        reports periodically and dispute information you believe is inaccurate.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'How can I protect my account?',
    body: (
      <>
        <p>
          Use unique account passwords, turn on transaction alerts, and contact the card issuer
          promptly if your card is lost or you see a charge you do not recognize. Do not share
          verification codes or account details in response to unexpected calls or messages.
        </p>
        <p>
          The{' '}
          <a href="https://www.consumerfinance.gov/consumer-tools/credit-cards/" {...external}>
            Consumer Financial Protection Bureau credit-card resources
          </a>{' '}
          explain card terms, billing, and consumer protections.
        </p>
      </>
    ),
  },
];

export default function CreditCards() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/preparing-for-college"
      page="Credit Cards"
      title={<>Credit Cards: <em>How To Choose—and Use—Them Wisely</em></>}
      lead="A credit card can make payments convenient, but rates and fees vary. Compare the complete terms and choose a card that fits your budget and payment habits."
      sections={sections}
    />
  );
}
