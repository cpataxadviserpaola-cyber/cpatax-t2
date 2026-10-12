import GuideArticle, { Agencies, Callout } from '../../GuideArticle.jsx';
import { creditAgencies } from '../../../../data/creditAgencies.js';

// Source: cpataxadviser.com/life-events.php?item=30 (Your Credit Card Rights: What To Do If You
// Have a Problem), word for word. Double hyphens are now dashes, and the "Tip:" lead-ins are the
// boxes' labels. One paragraph ("The card issuer, in turn, must look into the problem...") is in
// the library's page but hidden there by a broken tag; it is shown here. The library's mail opt-out
// listing in this guide has the association's newer name and address, so that card replaces the
// one in the shared agency list. The Federal Reserve link goes to the page its old address now
// redirects to.
// Address: /guides/life-events/improving-your-credit/credit-card-rights (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const agencies = creditAgencies.map((agency) =>
  agency.name === 'Direct Marketing Mail Opt-Out:'
    ? {
        ...agency,
        lines: [
          'Data & Marketing Association, Inc. (formerly the Direct Marketing Association)',
          '1333 Broadway, Suite #301',
          'New York, NY 10036-6700',
          'Tel. 212.768.7277',
          'website: www.DMAChoice.org',
        ],
      }
    : agency,
);

const sections = [
  {
    id: 'prompt-credit',
    title: 'Prompt Credit For Payment',
    body: (
      <>
        <p>
          A card issuer must credit your account on the day it receives your payment unless the payment is not made
          according to the creditor's requirements or the delay in crediting to your account does not result in a
          charge.
        </p>
        <Callout label="Tip">
          <p>
            To avoid delays that could result in finance charges, follow the card issuer's instructions about where to
            send payments. Payments sent to other locations could delay getting credit for your payment for up to five
            days. If you lose your payment envelope, look on the billing statement for the address for payments or call
            the card issuer.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'refunds',
    title: 'Refunds Of Credit Balances',
    body: (
      <p>
        When you return merchandise or pay more than you owe, you have the option of keeping the credit balance on your
        account or requesting a refund (if the amount exceeds $1.00). To obtain a refund, write the card issuer. The card
        issuer must send you the refund within seven business days of receiving your request.
      </p>
    ),
  },
  {
    id: 'errors',
    title: 'Resolution Of Errors',
    body: (
      <>
        <p>
          The Fair Credit Billing Act provides specific rules that the card issuer must follow for promptly correcting
          billing errors. The card issuer will give you a statement describing these rules when you open the credit card
          account and, after that, at least once a year. Many card issuers print a summary of your rights on each bill
          they send you.
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
          When you find an error you must notify the card issuer in writing within 60 days after the first bill
          containing the error was mailed to you. Some companies may accept e-mail; others will require that you put your
          dispute in writing. Be sure to include your name and account number, a description of the billing error and the
          date and amount of the charge you dispute.
        </p>
        <p>
          The card issuer, in turn, must look into the problem and either correct the error or explain to you why the
          bill is correct. If there is an error, you will not have to pay interest charges on the disputed amount. Your
          account must be corrected. If there is no error, the credit card company must send you an explanation and a
          statement of what you owe.
        </p>
        <p>
          During the period that the card issuer is investigating the error, you do not have to pay the amount in
          question. For further information visit{' '}
          <a href="https://www.federalreserve.gov/consumerscommunities.htm" {...external}>
            Consumer Information
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'unauthorized-charges',
    title: 'Removal Of Unauthorized Charges',
    body: (
      <>
        <p>
          Under the Truth in Lending Act, if your credit card is used without your authorization, you are only held
          liable for up to $50 per card. If you report the loss before the card is used, federal law says the card issuer
          cannot hold you responsible for any unauthorized charges.
        </p>
        <p>
          If a thief uses your card before you report it missing, the most you will owe for unauthorized charges is $50.
          This is true even if a thief is able to use your credit card at an automated teller machine (ATM) to access
          your credit card account.
        </p>
        <p>
          To minimize your liability, report the loss of your card as soon as possible. Most companies have toll-free
          numbers printed on their statements and 24-hour service to report lost or stolen cards.
        </p>
      </>
    ),
  },
  {
    id: 'disputes',
    title: 'Resolution Of Disputes',
    body: (
      <>
        <p>
          If you have a problem with merchandise or services that you charged to a credit card, and you have made a good
          faith effort to work out the problem with the seller, you have the right to withhold from the card issuer
          payment for the merchandise or services. Check with your credit card company regarding their policies.
        </p>
        <p>
          If you do not achieve satisfaction through the seller or credit card company, you can file a small claims court
          action an informal legal proceeding that can be used to settle disputes. Check your local telephone book under
          your municipal, county, or state government headings for small claims court listings.
        </p>
        <p>
          <strong>In addition, you have the following rights:</strong>
        </p>
        <p>
          You have the right to have mail and phone order purchases shipped when promised or to cancel for a full and
          prompt refund. If no shipping date is stated, your right to cancel begins 30 days after your order and payment
          are received by the merchant. If you cancel, the seller has one billing cycle to tell the card issuer to credit
          your account.
        </p>
        <p>
          There are two exceptions to the 30-day shipment rule: (1) If a company doesn't promise a shipping time, and you
          are applying for credit to pay for your purchase, the company has 50 days after receiving your order to ship.
          (2) Spaced deliveries, such as magazine subscriptions (except for the first shipment); items that continue until
          you cancel (e.g. book or record clubs, etc.); C.O.D. (cash on delivery) orders; services; and seeds or growing
          plants are not covered.
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
    id: 'prompt-shipment',
    title: 'Prompt Shipment',
    body: (
      <>
        <p>
          You have the right to have mail and phone order purchases shipped when promised or to cancel for a full and
          prompt refund. If no shipping date is stated, your right to cancel begins 30 days after your order and payment
          are received by the merchant. You can choose to wait longer for your order, or cancel and get a prompt refund.
          If you cancel, and your order was paid by charge or credit card, the seller has one billing cycle to tell the
          card issuer to credit your account.
        </p>
        <p>
          There are two exceptions to the 30-day shipment rule: (1) If a company doesn't promise a shipping time, and you
          are applying for credit to pay for your purchase, the company has 50 days after receiving your order to ship.
          (2) Spaced deliveries, such as magazine subscriptions (except for the first shipment); items which continue
          until you cancel (e.g. book or record clubs, etc.); C.O.D. (cash on delivery) orders; services; and seeds or
          growing plants are not covered.
        </p>
        <p>
          You have the right to a full refund—because of shipping delay—within seven working days (or one billing cycle)
          after the seller receives your request to cancel.
        </p>

        <h3>Refusal Of Delivery</h3>
        <p>You may refuse a delivery of damaged or spoiled items.</p>

        <h3>Withholding Of Payment In Case Of Dispute</h3>
        <p>You need not pay a disputed amount while your dispute is being reviewed by the card issuer.</p>
        <p>
          If you receive something C.O.D., you have the right to stop payment on a check made out to a seller, but not one
          made out to the Post Office, if there is something wrong with the order.
        </p>
        <Callout label="Tip">
          <p>
            If you are ordering something to be delivered by C.O.D., make your check out to the seller, not the post
            office. That way, you may contact your bank and stop the check if there is an immediate problem with
            merchandise.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'junk-mail',
    title: 'Protection Against Offensive Junk Mail/Junk Calls',
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
          <strong>Data & Marketing Association, Inc. (formerly the Direct Marketing Association)</strong>
          <span>1333 Broadway, Suite #301</span>
          <span>New York, NY 10036-6700</span>
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
          (Federal Trade Commission). You can also file a lawsuit against the telemarketer, but only if there is a
          "pattern and practice" of violations. You also have to have suffered actual damages of more than $50,000 and be
          able to prove both of these things.
        </p>
        <Callout label="Tip">
          <p>If you receive unordered merchandise in the mail, consider it a gift and don't feel pressure to pay for it.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Non-Profit Agencies',
    body: (
      <>
        <p>
          The following agencies are responsible for enforcing federal laws that govern credit card transactions.
          Questions concerning a particular card issuer should be directed to the enforcement agency responsible for that
          issuer.
        </p>
        <Agencies agencies={agencies} />
      </>
    ),
  },
];

export default function CreditCardRights() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-credit"
      page="Your Credit Card Rights"
      title={
        <>
          Your Credit Card Rights: <em>What To Do If You Have a Problem</em>
        </>
      }
      lead="Federal law grants consumers several rights relating to their credit card transactions, against the card companies and in the case of a dispute with a merchant. This Financial Guide discusses these important rights in depth."
      sections={sections}
    >
      <p>
        You have numerous rights related to your use of a credit card. These include (1) prompt credit for payment, (2)
        refunds of credit balances, (3) resolution of errors, (4) removal of unauthorized charges, (5) resolution of
        disputes, (6) prompt shipment, (7) refusal of delivery, (8) withholding of payment in case of dispute, (9)
        protection against offensive junk mail/junk calls.
      </p>
    </GuideArticle>
  );
}
