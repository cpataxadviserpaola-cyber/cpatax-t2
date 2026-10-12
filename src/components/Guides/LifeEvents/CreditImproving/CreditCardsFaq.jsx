import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=32 (Credit Cards: Frequently Asked Questions), word
// for word. Double hyphens are now dashes, and the tips the library sets between the steps of
// "How can I get the most benefit from my credit cards?" sit under the step they belong to. The
// library's page has no introduction, so the banner's opening line (`lead`) is written for this
// site, as on the other FAQ pages. The Federal Reserve link goes to the page its old address now
// redirects to.
// Address: /guides/life-events/improving-your-credit/credit-cards-faq (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'best-cards',
    title: 'Which are the best credit cards?',
    body: (
      <>
        <p>
          Finding the best credit card is mostly a matter of comparison shopping, but before you accept a credit card
          offer, make sure you understand the card's credit terms. For instance, what is the annual percentage rate? Is
          there a grace period? How much is the annual fee? Once you have the answers to these and other answers, then
          you can compare several cards at once and figure out which card meets your particular needs and which one
          offers you a better deal.
        </p>
        <Callout label="Tip">
          <p>
            Figuring out which card is best for you is not always obvious because it really depends on how you plan to use
            the card. For example, if you plan to pay your bills in full each month, fees and the length of the grace
            period may be more important than the periodic and annual percentage rate. If you anticipate using your credit
            cards to pay for purchases over a period of time, then the annual percentage rate (APR) and the balance
            computation method are important terms to consider. In either case, keep in mind that your costs will be
            affected by whether or not there is a grace period.
          </p>
        </Callout>
        <p>When it comes to shopping around for a credit card there are a few terms you should know and understand. These include:</p>
        <p>
          <strong>Annual percentage rate.</strong> The annual percentage rate or APR is a measure of the cost of credit
          expressed as a yearly rate.
        </p>
        <p>
          <strong>Periodic rate.</strong> The card issuer also must disclose the periodic rate applied to your
          outstanding account balance to figure the finance charge for each billing period.
        </p>
        <p>
          <strong>Variable rate.</strong> If the credit card you are considering has a variable rate feature, the card
          issuer must tell you that the rate may vary and how the rate is determined. You also must be told how much and
          how often your rate may change.
        </p>
        <p>
          <strong>Grace period.</strong> The grace period allows you to avoid the finance charge by paying your current
          balance in full before the due date shown on your statement. Knowing whether a credit card plan gives you a grace
          period is especially important if you plan to pay your account in full each month. And, thanks to the Credit
          CARD Act of 2009, if the credit card has a grace period finance charges for the month cannot be assessed unless
          you receive the monthly statement 21 days before the financing charges begin.
        </p>
        <p>
          If there is no grace period, the card issuer will impose a finance charge from the date you use your credit card
          or from the date each transaction is posted to your account.
        </p>
        <p>
          <strong>Annual membership.</strong> Most credit card issuers used to charge annual membership fees, but this is
          no longer the case. There are plenty of cards out there with no annual or other participation fees. For those
          card issuers that do impose annual fees, they typically range from $18 to $95. The annual fee for an American
          Express Platinum Card is $450.
        </p>
        <p>
          <strong>Other costs.</strong> A credit card also may involve other types of costs such as balance transfer fees
          and fees for cash advances, or late fees.
        </p>
      </>
    ),
  },
  {
    id: 'stolen-card',
    title: 'If someone steals my credit card, how much am I liable for?',
    body: (
      <>
        <p>
          Under the Truth in Lending Act, if your credit card is used without your authorization, you are only held
          liable for up to $50 per card. If you report the loss before the card is used, federal law says the card issuer
          cannot hold you responsible for any unauthorized charges.
        </p>
        <p>
          If a thief uses your card before you report it missing, the most you will owe for unauthorized charges is $50.
          This is true even if a thief is able to use your credit card at an automated teller machine (ATM) to access your
          credit card account.
        </p>
        <p>
          To minimize your liability, report the loss of your card as soon as possible. Most companies have toll-free
          numbers printed on their statements and 24-hour service to report lost or stolen cards.
        </p>
      </>
    ),
  },
  {
    id: 'rewards-cards',
    title: 'Are rebate and rewards credit cards a good deal?',
    body: (
      <>
        <p>
          The use of rebate and rewards cards has grown rapidly. Costco for example sponsors a credit card (Costco Cash
          Rebate card) that give rebates on the cost of merchandise you buy with the card once you spend a certain amount.
          You usually get larger rebates on the sponsoring company's products and lower rebates on other card charges.
          Credit card solicitations promise cash, frequent-flier miles or points that will buy everything from hotel rooms
          to gas.
        </p>
        <Callout label="Tip">
          <p>
            You'll get a good deal from a rebate card if you spend a lot, and if you pay your bill in full each month. If
            you carry a balance on the card, what you gain in rebates you will lose in the excessive interest charged by
            credit cards.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'balance-methods',
    title: 'What is the difference between the average daily balance, adjusted balance and previous balance?',
    body: (
      <>
        <p>
          <strong>Average Daily Balance</strong> (including or excluding new purchases). The average daily balance method
          gives you credit for your payment from the day the card issuer receives it. To compute the balance due, the card
          issuer totals the beginning balance for each day in the billing period and deducts any payments credited to your
          account that day. New purchases may or may not be added to the balance, depending on the plan, but cash advances
          typically are added. The resulting daily balances are added up for the billing cycle and the total is then
          divided by the number of days in the billing period to arrive at the "average daily balance." This is the most
          common method used by credit card issuers.
        </p>
        <p>
          <strong>Adjusted Balance.</strong> This balance is computed by subtracting the payments you made and any credits
          you received during the present billing period from the balance you owed at the end of the previous billing
          period. New purchases that you made during the billing period are not included. Under the adjusted balance
          method, you have until the end of the billing cycle to pay part of your balance and you avoid the interest
          charges on that portion. Some creditors exclude prior, unpaid finance charges from the previous balance. The
          adjusted balance method usually is the most advantageous to card users.
        </p>
        <p>
          <strong>Previous Balance.</strong> As the name suggests, this balance is simply the amount you owed at the end of
          the previous billing period. Payments, credits, or new purchases made during the current billing period are not
          taken into account. Some creditors also exclude unpaid finance charges in computing this balance.
        </p>
      </>
    ),
  },
  {
    id: 'dissatisfied',
    title: 'What can I do if I am dissatisfied with a credit card purchase?',
    body: (
      <>
        <p>
          If you have a problem with merchandise or services that you charged to a credit card, and you have made a good
          faith effort to work out the problem with the seller, you have the right to withhold from the card issuer
          payment for the merchandise or services. Check with your credit card company regarding their policies.
        </p>
        <p>
          If you do not achieve satisfaction through the seller or credit card company, you can file a small claims court
          action—an informal legal proceeding that can be used to settle disputes. Check your local telephone book under
          your municipal, county, or state government headings for small claims court listings.
        </p>
        <p>
          <strong>In addition, you have the following rights:</strong>
        </p>
        <p>
          You have the right to have mail and phone order purchases shipped when promised, or to cancel for a full and
          prompt refund. If no shipping date is stated, your right to cancel begins 30 days after your order and payment
          are received by the merchant. If you cancel, the seller has one billing cycle to tell the card issuer to credit
          your account.
        </p>
        <p>
          There are two exceptions to the 30-day shipment rule: (1) If a company doesn't promise a shipping time, and you
          are applying for credit to pay for your purchase, the company has 50 days after receiving your order to ship. (2)
          Spaced deliveries, such as magazine subscriptions (except for the first shipment); items that continue until you
          cancel (e.g. book or record clubs, etc.); C.O.D. (cash on delivery) orders; services; and seeds or growing plants
          are not covered.
        </p>
        <p>
          You have the right to a full refund—because of shipping delay—within seven working days (or one billing cycle)
          after the seller receives your request to cancel.
        </p>
        <p>You may refuse a delivery of damaged or spoiled items.</p>
        <Callout label="Tip">
          <p>
            If there is obvious damage to a package you receive in the mail, and if you decide not to accept the package,
            write "REFUSED" on the wrapper (at time of delivery) and return it unopened to the seller. No new postage is
            needed, unless the package came by insured, registered, certified or C.O.D. mail and you signed for it.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            If you are ordering something to be delivered by C.O.D., make your check out to the seller, not the post
            office. That way, you may contact your bank and stop the check if there is an immediate problem with
            merchandise.
          </p>
        </Callout>
        <p>
          When you return merchandise or pay more than you owe, you have the option of keeping the credit balance on your
          account or requesting a refund (if the amount exceeds $1.00). To obtain a refund, write the card issuer. The card
          issuer must send you the refund within seven business days of receiving your request.
        </p>
      </>
    ),
  },
  {
    id: 'billing-mistake',
    title: 'What can I do if there is a mistake on my credit card bill?',
    body: (
      <>
        <p>
          The Fair Credit Billing Act provides specific rules that the card issuer must follow for promptly correcting
          billing errors. The card issuer will give you a statement describing these rules when you open the credit card
          account and, after that, at least once a year. Many card issuers print a summary of your rights on each bill they
          send you.
        </p>
        <p>Billing errors include:</p>
        <ul>
          <li>a charge for something you didn't buy</li>
          <li>a purchase by someone not authorized to use your card</li>
          <li>an amount on your bill that is different from the actual amount you paid</li>
          <li>a charge for something that you did not accept on delivery</li>
          <li>a charge for something that was not delivered according to the agreement</li>
          <li>arithmetic errors</li>
          <li>payments not credited to your account</li>
        </ul>
        <p>
          When you find an error you must notify the card issuer in writing within 60 days after the first bill containing
          the error was mailed to you. Some companies may accept e-mail; others will require that you put your dispute in
          writing. Be sure to include your name and account number, a description of the billing error and the date and
          amount of the charge you dispute.
        </p>
        <p>
          The card issuer, in turn, must look into the problem and either correct the error or explain to you why the bill
          is correct. If there is an error, you will not have to pay interest charges on the disputed amount. Your account
          must be corrected. If there is no error, the credit card company must send you an explanation and a statement of
          what you owe.
        </p>
        <p>
          During the period that the card issuer is investigating the error, you do not have to pay the amount in question.
          For further information visit{' '}
          <a href="https://www.federalreserve.gov/consumerscommunities.htm" {...external}>
            Consumer Information
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'most-benefit',
    title: 'How can I get the most benefit from my credit cards?',
    body: (
      <>
        <p>Here are some suggestions for the use of credit cards:</p>
        <ol>
          <li>
            Pay bills promptly to keep finance charges as low as possible.
            <Callout label="Tip">
              <p>Keep copies of sales slips and promptly compare charges when your bills arrive</p>
            </Callout>
          </li>
          <li>
            Keep a list of your credit card account numbers and the telephone numbers of each card issuer in a safe place
            in case your cards are lost or stolen.
          </li>
          <li>
            Protect your credit cards and account numbers to prevent unauthorized use.
            <Callout label="Tip">
              <p>Draw a line through blank spaces above the total when you sign receipts. Rip up or retain carbons.</p>
            </Callout>
          </li>
          <li>
            Deal only with reliable firms. Check with your local consumer protection agency or the Better Business Bureau
            (BBB) closest to where the business is located. Study the advertising offer carefully and always ask the
            company about its refund and exchange policies as well as product warranties offered.
            <Callout label="Tip">
              <p>Pay by money order, check, charge or credit card so you have a record of your purchase.</p>
            </Callout>
          </li>
          <li>
            Never send cash. Keep the ad you responded to and a copy of the order form. If there is no order form, make
            your own notes with the company's name, address, phone number, date, amount, the item you purchased, and any
            delivery date that may have been promised.
          </li>
          <li>
            Never give out your credit, debit, charge card or bank account numbers unless you've checked out the company or
            have done business with it before.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'merchant-restrictions',
    title: 'What restrictions and limitations can a merchant impose before accepting my credit card?',
    body: (
      <>
        <p>
          Some merchant practices violate your privacy and expose you to potential credit fraud, and are therefore illegal
          in many states.
        </p>
        <p>To protect your privacy, say "no" to a merchant who engages in these impermissible credit card practices:</p>
        <ul>
          <li>Writes your credit card number on your personal check</li>
          <li>Writes your personal information on a bank credit card sales slip</li>
          <li>Imposes a minimum sales amount for credit card purchases</li>
          <li>Charges extra for payment by credit card.</li>
        </ul>
        <Callout label="Note">
          <p>Giving a discount for cash payments is allowed.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'junk-mail',
    title: 'How can I stop junk mail or telemarketing calls?',
    body: (
      <>
        <p>
          You have the right to tell commercial telephone and direct mail marketers to stop calling you. If you wish to
          have your name removed from telephone lists of marketing companies contact the federal Do Not Call Registry:
        </p>
        <address className="article-address">
          <strong>National Do Not Call Registry</strong>
          <span>Federal Trade Commission</span>
          <span>600 Pennsylvania Avenue, NW</span>
          <span>Washington, DC 20580</span>
          <span>
            website:{' '}
            <a href="https://www.donotcall.gov" {...external}>
              www.donotcall.gov
            </a>
          </span>
        </address>
        <p>Consumers who do not wish to receive promotional mail at home should contact:</p>
        <address className="article-address">
          <strong>Direct Marketing Association</strong>
          <span>1120 Avenue of the Americas</span>
          <span>NY, NY New York, NY 10036-6700</span>
          <span>Tel. 212.768.7277</span>
          <span>
            website:{' '}
            <a href="https://www.dmachoice.org" {...external}>
              www.DMAChoice.org
            </a>
          </span>
        </address>
        <p>
          If companies you now do business with also removes your name, you can contact them directly to have your name
          reinstated. If the marketer violates the do-not-call list, the first step is to file a complaint with the FTC
          (Federal Trade Commission). You can also file a lawsuit against the telemarketer, but only if there is a "pattern
          and practice" of violations. You also have to have suffered actual damages of more than $50,000 and be able to
          prove both of these things.
        </p>
        <Callout label="Tip">
          <p>If you receive unordered merchandise in the mail, consider it a gift and don't feel pressure to pay for it.</p>
        </Callout>
      </>
    ),
  },
];

export default function CreditCardsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-credit"
      page="Credit Cards: Frequently Asked Questions"
      title={
        <>
          Credit Cards: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Choosing and using credit cards raises practical questions about costs, liability, billing errors, and your rights. Here are answers to common questions."
      sections={sections}
    />
  );
}
