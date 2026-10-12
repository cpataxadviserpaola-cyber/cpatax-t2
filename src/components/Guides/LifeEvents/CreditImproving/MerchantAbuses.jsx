import GuideArticle, { Agencies, Callout } from '../../GuideArticle.jsx';
import { creditAgencies } from '../../../../data/creditAgencies.js';

// Source: cpataxadviser.com/life-events.php?item=29 (Merchant Credit Card Abuses: What They Cannot
// Ask You To Do), word for word. Hyphens used as dashes are now dashes, the "Tip:" lead-ins are
// the boxes' labels, and the card companies' addresses are shown as cards.
// Address: /guides/life-events/improving-your-credit/merchant-credit-card-abuses (articlePages in
// src/data/guides.js).

const cardCompanies = [
  {
    name: 'Visa USA',
    lines: ['Consumer Relations', 'P.O. Box 8999', 'San Francisco, CA 94128', '+1-800-VISA-911 (customer assistance)'],
  },
  {
    name: 'MasterCard Worldwide',
    lines: [
      'Public Relations',
      '2000 Purchase Street',
      'Purchase, NY 10577',
      'Call collect from anywhere globally: +1-636-722-7111 or toll-free from the United States: +1-800-627-8372 (+1 800 MASTERCARD)',
    ],
  },
  {
    name: 'American Express',
    lines: [
      'Customer Service',
      'PO Box 297812',
      'Ft. Lauderdale, FL 33329-7812',
      '1-800-528-4800 (US) or 1-336-393-1111 (International Collect)',
    ],
  },
];

const personalInformationStates = [
  'California',
  'Delaware',
  'Georgia',
  'Kansas',
  'Maryland',
  'Massachusetts',
  'Minnesota',
  'Nevada',
  'New Jersey',
  'New York',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'Washington, DC',
  'Wisconsin',
];

const surchargeStates = [
  'California',
  'Colorado',
  'Connecticut',
  'Florida',
  'Kansas',
  'Maine',
  'Massachusetts',
  'New York',
  'Oklahoma',
  'Texas',
];

const cardNumberOnCheckStates = [
  'California',
  'Delaware',
  'Florida',
  'Georgia',
  'Illinois',
  'Iowa',
  'Kansas',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New York',
  'North Dakota',
  'Ohio',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'Tennessee',
  'Virginia',
  'Washington, DC',
  'Washington',
  'Wisconsin',
];

const stateList = (states) => (
  <ul className="article-columns">
    {states.map((state) => (
      <li key={state}>{state}</li>
    ))}
  </ul>
);

const sections = [
  {
    id: 'personal-information',
    title: 'Personal Information',
    body: (
      <>
        <p>
          When using a credit card for a purchase, some merchants might ask you to provide a phone number, home address,
          or other personal information on credit card sales slips; however, consumers should always decline. This
          practice not only violates your privacy, but American Express, MasterCard, and Visa prohibit requiring it as a
          condition of sale. Furthermore, while credit card policies as well as state and federal laws vary, in
          California, for example, it is illegal for the merchant to record any personal information other than what is
          on the front of the credit card.
        </p>
        <p>
          There is no need for merchants to obtain phone numbers or other personal information from customers. Once they
          have correctly processed the bank card transaction (gotten an authorization number and made sure the signatures
          match), they are guaranteed to receive payment.
        </p>
        <Callout label="Tip">
          <p>
            If you don't want to provide personal information on a credit card sales slip, you can refuse to do so. The
            merchant has no right to refuse you the sale (although unknowledgeable clerks may have no authority to vary
            from store policy).
          </p>
        </Callout>
        <p>
          Further, if you refuse to present identification, such as a driver's license, the merchant may not refuse to
          make a credit card sale under Visa, MasterCard, and Amex rules.
        </p>
        <Callout label="Tip">
          <p>
            If you exceed your credit limit, the card-issuing bank absorbs the loss, so there is no need for the merchant
            to contact you. Thus, there's no reason to provide your personal information.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'minimum-charge',
    title: 'Minimum Charge Requirements',
    body: (
      <>
        <p>
          Some stores require consumers to spend at least $20 (or some other minimum) to pay for purchases by credit
          card. They engage in this practice because they and their banks do not want the expense of processing a credit
          card transaction involving a small amount of money.
        </p>
        <p>
          This practice defeats one of the major purposes of credit cards—convenience—and may force credit card users to
          spend more than they want to. In addition, minimum charge requirements vary from merchant to merchant, and there
          are no regulations requiring disclosure of these minimum purchase levels.
        </p>
        <p>
          Visa's and MasterCard's regulations prohibit minimum charge amounts. American Express's regulations do not
          explicitly prohibit minimum charges, but its policy is to discourage any merchant practices that create a
          "barrier to acceptance." Amex does prohibit "discrimination" against the Amex card, however, so if a merchant
          has no minimum charge for Visa and MasterCard, the merchant may not discriminate against Amex by imposing a
          minimum charge.
        </p>
        <Callout label="Tip">
          <p>
            If a store requires a minimum purchase for Visa or MasterCard, point out to the store manager that the
            practice is prohibited by the card companies.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'extra-charge',
    title: 'Extra Charge For Using A Credit Card',
    body: (
      <>
        <p>Some merchants seek to impose a service fee for all credit card purchases.</p>
        <p>
          When a merchant gives a credit card slip to the credit card company or bank for processing, a percentage of
          each purchase—usually 1.5 to 5 percent of the purchase amount is deducted. This "merchant discount fee" helps
          pay for the bank's services and for the credit card system. By charging extra for credit card use, the merchant
          passes the discount fee on to customers.
        </p>
        <p>
          Visa and MasterCard prohibit surcharges, and American Express discourages them. Amex does prohibit
          "discrimination" against the Amex card, however, so if a merchant accepts Visa and MasterCard (and cannot impose
          a surcharge under those companies' rules), the merchant may not discriminate against Amex by imposing a
          surcharge.
        </p>
        <Callout label="Tip">
          <p>
            Any merchant that accepts American Express cards and also accepts Visa and/or MasterCard may not charge
            consumers a surcharge on Amex purchases.
          </p>
        </Callout>
        <p>
          Surcharges invite numerous abuses by retailers, including bait-and-switch tactics. There are no laws on how and
          when surcharges must be disclosed, making it difficult to figure out the total price of an item. Travelers
          often find it difficult to get out-of-state checks accepted, and should not be penalized for using credit
          cards. Further, credit card acceptance usually produces higher sales for merchants, offsetting the cost of
          processing credit card transactions.
        </p>
        <p>
          Note that a cash discount is legal and permitted under all credit card companies rules. A cash discount offers a
          lower price for cash than credit; for example, many gasoline stations offer cash discounts. While this may
          merely be a loophole, it is permitted. In addition, there are a few state governmental agencies, including state
          tax offices and motor vehicle departments that are permitted to charge surcharges due to state laws that do not
          permit them to pay discount fees. However, retail merchants may not impose surcharges.
        </p>
      </>
    ),
  },
  {
    id: 'id-by-check',
    title: 'ID When Paying By Check',
    body: (
      <>
        <p>
          Merchants often ask for two forms of identification before accepting a personal check as payment for a
          purchase: a driver's license and a major credit card. Merchants also believe consumers with credit cards are
          less likely to bounce checks. This is a misconception: nearly 90 percent of all bounced checks result from
          arithmetic error, not fraud.
        </p>
        <p>When merchants write your credit card number on your personal check, they are subjecting you to possible fraud.</p>
        <ul>
          <li>Anyone who sees the check sees your name, address, telephone number, and credit card number.</li>
          <li>
            Further, several states use an individual's Social Security number as the only identifying number on a
            driver's license. Once a thief has your Social Security number, along with the other information on the
            check, he or she can get your credit report, and even apply for credit in your name.
          </li>
          <li>
            Someone can use your credit card number to order merchandise by phone or through the mail by requesting the
            merchandise be sent to a post office box or an address other than your own.
          </li>
          <li>
            Someone might use your personal information to apply for credit in your name, then run up bills on your
            account without paying them, of course. People who are victims of so-called application fraud do not find out
            until months or even years later when they begin receiving letters from creditors, by which time the damage
            has been done to their credit histories.
          </li>
        </ul>
        <p>
          Although Visa, MasterCard and American Express do not have the authority to prohibit the practice of writing
          credit card numbers on checks, the three card companies do prohibit merchants from charging a credit card
          account to cover a bounced check.
        </p>
        <Callout label="Tip">
          <p>
            If a merchant asks for your credit card number, ask why he or she needs to record it, since, due to the above
            prohibition, nothing can be done with it.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            There is probably no harm in allowing a merchant to see that you carry a major credit card, and even to note
            on the check whether it is Visa, MasterCard, or American Express. For your own safety, this is the only credit
            card-related information you should allow to be recorded. You should not allow the merchant to record the
            credit card number.
          </p>
        </Callout>
        <p>
          If the sale is refused, ask to speak with the store manager. Explain the risks of fraud, and point out that the
          rules of the three major credit card companies prohibit charging a credit card to cover a bounced check. You
          might also point out that, if there is a problem, merchants usually have all the information they need to
          locate the customer written right on the check: name, address, phone number and driver's license number. Also,
          merchants will not be able to use the credit card number to locate the consumer.
        </p>
        <p>Many store clerks are simply unaware of the potential crimes associated with the use of personal information written on checks.</p>
      </>
    ),
  },
  {
    id: 'other-cards',
    title: 'Cards Other Than The "Big Three"',
    body: (
      <>
        <p>
          Other cards may not provide cardholders with any of the protections described above. However, purchases made
          with other cards are covered in all states that have laws prohibiting the practices described here.
        </p>
        <Callout label="Tip">
          <p>
            Cardholders who experience the practices discussed here should complain to store managers and encourage the
            card company to change its policies.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'complain',
    title: 'How To Complain',
    body: (
      <>
        <p>When merchants violate the policies described here, report them to Visa, MasterCard, and American Express.</p>
        <Agencies agencies={cardCompanies} />
        <p>
          In your letter, give the name and location of the merchant and a copy of a credit card sales slip. The sales
          slip is needed by Visa and MasterCard to track down the offending merchant. American Express provides
          cardmembers with a toll-free number to call if they have difficulty with a merchant. Make sure you have the
          complete details about the merchant and the problem before you call.
        </p>
        <p>If a merchant is uncooperative, take your business elsewhere.</p>
      </>
    ),
  },
  {
    id: 'personal-information-states',
    title: 'States That Prohibit Recording Of Personal Information',
    body: (
      <>
        <p>
          The following states prohibit merchants from recording certain personal information in connection with credit
          card transactions:
        </p>
        {stateList(personalInformationStates)}
      </>
    ),
  },
  {
    id: 'surcharge-states',
    title: 'States That Prohibit Credit Card Surcharges',
    body: (
      <>
        <p>The following states prohibit merchants from adding surcharges to credit card transactions</p>
        {stateList(surchargeStates)}
      </>
    ),
  },
  {
    id: 'check-states',
    title: 'States That Prohibit Recording A Credit Card Number On A Check',
    body: (
      <>
        <p>The following states prohibit merchants from recording your credit card number on your check:</p>
        {stateList(cardNumberOnCheckStates)}
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
        <Agencies agencies={creditAgencies} />
      </>
    ),
  },
];

export default function MerchantAbuses() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-credit"
      page="Merchant Credit Card Abuses"
      title={
        <>
          Merchant Credit Card Abuses: <em>What They Cannot Ask You To Do</em>
        </>
      }
      lead="Many merchants engraft their own rules to your use of a credit card, usually without the right to do so. What are you required to do and what can you rightfully refuse to do? The Financial Guide explains your rights."
      sections={sections}
    >
      <p>
        Do sales clerks ask you to write your phone number or address on a credit card slip? Have you been told that
        "store policy" requires a $25 minimum for credit card use? Have you been charged an extra 3 percent just for using
        a major credit card? When you pay by personal check, does the clerk ask for two forms of identification and then
        write your credit card number on your check?
      </p>
      <p>
        These practices violate your privacy, expose you to potential credit fraud and may be illegal in some cases. We
        will tell you how to say "no" to a merchant who engages in these impermissible credit card practices:
      </p>
      <ul>
        <li>Writes your personal information on a bank credit card sales slip</li>
        <li>Imposes a minimum sales amount for credit card purchases</li>
        <li>Charges extra for payment by credit card</li>
        <li>Writes your credit card number on your personal check</li>
      </ul>
    </GuideArticle>
  );
}
