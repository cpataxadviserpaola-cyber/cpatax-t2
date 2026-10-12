import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=157 (Other Situations: Frequently Asked Questions),
// word for word. Double hyphens and hyphens used as dashes are now dashes, the stray full stop in
// "refinancing your mortgage., but" is dropped, the note the library sets inside the third step of
// Contacting the Seller stays there, and the "Note" and "Tip" boxes keep the library's labels. The
// library's page has no introduction, so the banner's opening line (`lead`) is written for this
// site, as on the other FAQ pages.
// Address: /guides/life-events/handling-other-situations/other-situations-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'consumer-complaint',
    title: 'How Can I Resolve A Consumer Complaint?',
    body: (
      <>
        <p>
          First, go to the seller of the item. Second, contact the relevant consumer agency. Finally, if neither of these
          results in satisfaction, you can file a lawsuit or use arbitration.
        </p>

        <h3>Contacting the Seller</h3>
        <p>Before you take your complaint to the store or other entity that sold you the service or product:</p>
        <ol>
          <li>
            Gather any evidence you may need, such as the receipt, a canceled check, photographs showing the problem, a
            warranty, a contract, or a bill of sale.
          </li>
          <li>
            Figure out what your goal is. Do you want the product replaced? Do you want your money back? Do you merely want
            an apology?
          </li>
          <li>
            Call the store or service provider and ask to make an appointment with the manager, customer service
            representative, or another appropriate person. Meet face to face with that individual and explain as
            succinctly as possible the nature of the problem and what you want to be done about it. If you talk on the
            phone, follow up with a letter, and make notes of the dates of your calls and to whom you spoke.
            <Callout label="Note">
              <p>
                If the product is covered by a warranty, it's usually better to follow up with the manufacturer instead of
                the merchant.
              </p>
            </Callout>
          </li>
          <li>
            If this doesn't produce results, take your problem to a higher authority. This might be a supervisor or a
            corporate president. You should put your complaint in writing at this point if you haven't already done so.
            Your letter should include your name, address, phone numbers, and account number (if relevant). If a product
            is involved, include the date and place of purchase, and the model and serial number. Briefly, state the
            problem with the product or service, and write about what you have done so far to resolve it. Finally, tell
            the letter recipient what you want done, and give him or her a deadline. Include copies of relevant documents
            (not originals), and keep a copy of your letter. Keep copies of anything you receive from the company.
          </li>
        </ol>

        <h3>Contacting an Agency</h3>
        <p>
          If you still haven't achieved the result you wanted, look in the phone book for a consumer complaint agency,
          such as the state, county, or city consumer protection office, or the Better Business Bureau.
        </p>
        <p>
          Or, you might want to go the trade association route. Some industry trade associations offer help in mediating
          disputes concerning their members.
        </p>
        <p>
          If your complaint involves a bank, you might wish to contact the appropriate state banking regulator. Similarly,
          you might want to contact the state insurance regulator if an insurer is involved, the securities regulator for
          a securities problem, or the public utility commission for utility-related problems.
        </p>
        <p>
          If the problem involves a state-licensed trade (e.g., a general contractor or a plumber), call the state
          licensing department.
        </p>
        <p>
          If you bought a "lemon" used car, investigate your state's lemon laws by contacting your state consumer
          protection agency.
        </p>
        <p>
          If the problem involves mail order or mail fraud, contact your area postal inspector, who can be found in the
          U.S. government section of the phone book.
        </p>
        <p>There may also be a local television news program hotline for resolving consumer complaints.</p>
        <Callout label="Tip">
          <p>Call the agency first to find out what procedures it wants you to follow.</p>
        </Callout>

        <h3>Filing a Lawsuit</h3>
        <p>
          When all else fails, you might want to file a court case—either a small claims case, if the amount of money
          involved is small enough (generally, under $5,000)—or a regular lawsuit. More often than not, simply contacting
          an attorney and having him or her write a letter to the merchant or service provider indicating that you intend
          to file a lawsuit will get you the result you are seeking. If a small claims case is involved, you generally
          won't need to hire an attorney, but if the case doesn't qualify for small claims, you'll probably need to hire
          an attorney.
        </p>
      </>
    ),
  },
  {
    id: 'bank-fees',
    title: 'How Can I Reduce My Bank Fees?',
    body: (
      <>
        <p>There are many ways to reduce your bank fees. Here are a few of them:</p>
        <ul>
          <li>
            Are there fees associated with your checking account? If so, then call your bank and find out what you can do
            to get free checking and free ATM usage. For example, you might need to keep a minimum balance in the account
            and use only ATMs at your own bank. You may want to ditch banks altogether and join a credit union, which
            typically charges less for banking services.
          </li>
          <li>
            Don't keep too much money in a low-interest savings account. Find out how much money you'll need access to in
            an emergency (generally three to six months' worth of expenses) and keep only that amount in your savings
            account. The rest of your funds should be invested in the stocks and mutual funds or in the high-interest rate
            CD (Certificate of Deposit) you can find (check out Bankrate.com).
          </li>
          <li>
            If you still write checks don't order them through your bank. Many check printers charge less for check orders
            than the printers used by banks.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'insurance-costs',
    title: 'How Can I Save On My Insurance Costs?',
    body: (
      <>
        <p>Here are some ways to save on insurance of all types:</p>
        <ul>
          <li>
            Shop around for a life insurance policy. It pays to check prices on life insurance policies periodically
            because rates change frequently. Also, if you've quit smoking, you may be entitled to better rates after a few
            years.
          </li>
          <li>Take a look at your life insurance needs to see whether you even need a policy or are paying for too much coverage.</li>
          <li>
            Insure your home and <strong>autos</strong> with the same insurer. You may be able to get a break by doing
            this.
          </li>
          <li>
            Shop for <strong>auto insurance</strong> to try to get a lower rate.
          </li>
          <li>
            Install smoke detectors, burglar alarms, and sprinkler systems to save on{' '}
            <strong>homeowner's insurance</strong>. Don't forget to ask your insurance agent about other cost saving
            measures.
          </li>
          <li>
            Get rid of private mortgage insurance. Once you have enough equity in the home, ask your lender to cancel your
            private mortgage insurance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'utility-costs',
    title: 'How Can I Cut My Utility Costs?',
    body: (
      <>
        <p>Here are some thoughts to keep in mind when trying to cut utility costs:</p>
        <ul>
          <li>
            Your utility company or state may have a program that subsidizes making your home more energy-efficient. If
            not, there's plenty of information out there about making your home more energy efficient such as caulking
            your windows and making sure your insulation's "R" factor is correct for your location.
          </li>
          <li>
            Install CFLs (compact fluorescent lights) or LEDs (light-emitting diodes) instead of incandescent bulbs to save
            energy and money.
          </li>
          <li>
            Keep the thermostat at the lowest temperature comfortable in winter and the highest temperature comfortable in
            summer.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'phone-bill',
    title: 'How Can I Reduce The Cost Of My Phone Bill?',
    body: (
      <>
        <p>
          Today's cost-cutting competition among land-line and mobile phone service providers offers a few opportunities
          for savings on your phone bills, such as:
        </p>
        <ul>
          <li>
            Shopping around to make sure you're paying as little as possible for long-distance and mobile phone charges.
            Take the time to investigate which service provider will save you the most and switch if it is a better deal.
          </li>
          <li>Consider getting rid of your land-line phone altogether.</li>
          <li>Use e-mail or Skype to correspond with relatives and friends.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'mortgage-cost',
    title: 'How Can I Reduce The Cost Of My Mortgage?',
    body: (
      <>
        <p>Consider the following options to help you reduce the cost of your mortgage:</p>
        <ul>
          <li>
            <strong>Paying down your mortgage.</strong> For most people, paying down a mortgage is an effective way of
            saving and increasing net worth. Decide that you will pay $100 or $200 per month—or more—in mortgage principal,
            and do it faithfully.
          </li>
          <li>
            <strong>Refinancing your mortgage.</strong> You may be able to save money by refinancing your mortgage, but you
            need to go through the calculations and see whether the reduction in your monthly payments would be worth the
            costs involved with refinancing. The general rule is that a reduction of at least two points will make it
            worthwhile to refinance if you intend to stay in the house for at least five years.
          </li>
        </ul>
      </>
    ),
  },
];

export default function OtherSituationsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/handling-other-situations"
      page="Other Situations: Frequently Asked Questions"
      title={
        <>
          Other Situations: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about resolving a consumer complaint and cutting your bank fees, insurance, utility, phone, and mortgage costs."
      sections={sections}
    />
  );
}
