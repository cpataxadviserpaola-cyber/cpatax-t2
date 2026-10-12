import GuideArticle, { Callout } from '../GuideArticle.jsx';

const sections = [
  {
    id: 'how-margin-works',
    title: 'How buying on margin works',
    body: (
      <>
        <p>
          A margin account lets you borrow from a brokerage firm to buy eligible securities, with the securities in
          the account serving as collateral. Borrowing increases your buying power, but it also magnifies the effect
          of price changes on the money you put in, and interest adds to the cost.
        </p>
        <p>
          For example, a $50 investment that rises to $75 gains 50% when fully paid for. If you instead pay $25 and
          borrow $25, the same $25 price increase doubles your initial cash before interest and other costs. If the
          price falls from $50 to $25, a fully paid purchase loses half its value; with the $25 loan still owed, your
          original $25 is lost and you still owe interest.
        </p>
        <Callout label="Caution">
          <p>
            A broker may sell securities in a margin account to address a shortfall, sometimes without first
            contacting you. A sale during a steep decline can lock in losses and leave you unable to benefit if the
            market later recovers.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'risks',
    title: 'Understand the risks',
    body: (
      <>
        <p>Before opening a margin account, understand that:</p>
        <ul>
          <li>Losses can exceed the cash or securities you initially contributed.</li>
          <li>You may have to add cash or eligible securities on short notice.</li>
          <li>Falling prices can force the sale of some or all of your holdings.</li>
          <li>Your firm may sell collateral to repay the loan without consulting you first.</li>
        </ul>
        <p>
          Margin is not suitable for everyone. Consider your financial resources, investment objectives, ability to
          absorb losses, and tolerance for risk before using borrowed money to invest.
        </p>
        <Callout label="Tip">
          <p>
            Include loan interest and other account costs when estimating an investment’s return, and ask your
            brokerage firm whether margin fits your circumstances.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'agreement',
    title: 'Read the margin agreement',
    body: (
      <>
        <p>
          A margin agreement may be part of your account paperwork or a separate document. It explains the terms of
          the loan, how interest is calculated, your repayment obligations, and how your securities serve as
          collateral. It also describes the firm’s rights and procedures if your account falls below required
          levels.
        </p>
        <p>
          Review what notice, if any, the firm must provide before selling securities. Ask questions about any term
          you do not understand before signing.
        </p>
      </>
    ),
  },
  {
    id: 'margin-rules',
    title: 'Know the margin requirements',
    body: (
      <>
        <p>
          Federal Reserve rules and requirements set by securities regulators and exchanges govern margin trading.
          Brokerage firms may set stricter requirements, and not every security is eligible for margin borrowing.
          The source guide describes a $2,000 minimum deposit (or the full purchase price if lower), an initial
          margin limit of up to 50% of the purchase price under Regulation T, and a 25% maintenance minimum. Firms
          may require more, with the source noting requirements commonly in the 30%–40% range or higher for some
          securities.
        </p>
        <p>
          Treat those figures as a starting point, not a promise of the terms your account will receive. Rules,
          eligible securities, and firm requirements can change; confirm current requirements directly with your
          brokerage firm before trading.
        </p>
        <p>
          Maintenance equity is the market value of the account’s securities minus the amount owed. For example,
          if securities worth $16,000 were bought with $8,000 borrowed and $8,000 of your own funds, a decline to
          $12,000 leaves $4,000 of equity. That is above a 25% requirement ($3,000), but below a 40% requirement
          ($4,800), leaving an $800 shortfall at the higher threshold.
        </p>
      </>
    ),
  },
  {
    id: 'margin-calls',
    title: 'Respond to margin calls',
    body: (
      <>
        <p>
          If equity drops below the firm’s maintenance requirement, the firm may ask you to deposit cash or
          securities. If you do not meet the requirement, the firm may sell holdings to restore the account’s
          equity. A firm may not have to issue a margin call or give you time to respond before it sells; the
          agreement governs the firm’s rights.
        </p>
        <ul>
          <li>Do not use margin unless you can withstand losses greater than your initial contribution.</li>
          <li>Understand the agreement and ask the firm how its margin account works.</li>
          <li>Know the interest rate and other costs, and include them in your return calculations.</li>
          <li>Be prepared for the firm to sell collateral if your account does not meet its requirements.</li>
        </ul>
      </>
    ),
  },
];

export default function BuyingOnMargin() {
  return (
    <GuideArticle
      category="investment-strategies"
      topic="/guides/life-events/getting-married/investment-basics"
      page="Buying On Margin"
      title="Buying On Margin: How It Works and What To Watch Out For"
      lead="Buying on margin means borrowing from a brokerage firm to purchase securities. It can increase gains, but it can also magnify losses, trigger demands for more collateral, and lead to forced sales."
      sections={sections}
    />
  );
}
