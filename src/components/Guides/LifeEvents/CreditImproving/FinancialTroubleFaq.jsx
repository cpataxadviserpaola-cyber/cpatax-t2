import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=35 (Financial Trouble: Frequently Asked
// Questions), word for word. Double hyphens are now dashes, and the credit counseling link goes
// to the page its old address now redirects to. The library's page has no introduction, so the
// banner names the topics.
// Address: /guides/life-events/improving-your-credit/financial-trouble-faq (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'too-much-debt',
    title: 'How can I tell whether I have too much debt?',
    body: (
      <>
        <p>If you answer yes to any one of the following questions, you should take action:</p>
        <ul>
          <li>Have you run several credit cards up to the limit?</li>
          <li>Do you frequently make only the minimum monthly payments?</li>
          <li>Do you apply for almost any credit card you are offered—without checking out the terms?</li>
          <li>Have you used the cash advance feature from one card to pay the minimum payment on another?</li>
          <li>Do you use cash advances (or a credit card) for living expenses such as food, rent, or utilities?</li>
          <li>Are you unable to say what your total debt is?</li>
          <li>
            Are you unable to say how long it would take you to pay off all your current debts (excluding mortgages and
            cars) at the rate you have been paying?
          </li>
        </ul>
        <p>
          If you find several of these statements describe your credit habits, it may be that you need to take steps to
          manage your debt before bill collectors start calling and your credit history is endangered.
        </p>
      </>
    ),
  },
  {
    id: 'steps',
    title: 'What steps should I take if I get into financial trouble?',
    body: (
      <>
        <p>Here are some specific steps you can take if you are in financial trouble.</p>
        <ol>
          <li>
            Review each debt that creditors claim you owe to make certain you really owe it, and that the amount is
            correct.
          </li>
          <li>
            Contact your creditors to let them know you're having difficulty making your payments. Tell them why you're
            having trouble. Try to work out an acceptable payment schedule with your creditors.
            <Callout label="Tip">
              <p>
                Do not wait until your account is turned over to a debt collector. At that point, the creditor has given
                up on you. As soon as you find that you cannot make your payments, contact your creditors to try to work
                out a reduced payment plan.
              </p>
            </Callout>
          </li>
          <li>
            Budget your expenses. Create a spending plan that allows you to reduce your debts. Itemize your necessary
            expenses (such as housing and healthcare) and optional expenses (such as entertainment and vacation travel).
            Stick to the plan.
          </li>
          <li>
            Try to reduce your expenses. Cut out any unnecessary spending such as eating out and expensive entertainment.
            Consider taking public transportation rather than owning a car. Clip coupons, purchase generic products at the
            supermarket and avoid impulse purchases. Above all, stop incurring new debt. Consider substituting a debit
            card for your credit cards.
          </li>
          <li>
            Use your savings and other assets to pay down debts. Withdrawing savings from low-interest accounts to settle
            high-rate loans usually makes sense.
            <Callout label="Tip">
              <p>Selling off a second car not only provides cash but also reduces insurance and other maintenance expenses.</p>
            </Callout>
            <Callout label="Tip">
              <p>
                If you are unable to make satisfactory arrangements with your creditors, there are organizations to help
                you with your financial situation. For instance,{' '}
                <a href="https://credit.org/credit-services/consumer-credit-counseling" {...external}>
                  Consumer Credit Counseling Service
                </a>{' '}
                (CCCS) agencies, which are local, nonprofit organizations affiliated with the National Foundation for
                Consumer Credit (NFCC), provide education and counseling to families and individuals.
              </p>
              <p>
                To contact a CCCS office for confidential help, look in your telephone directory white pages, or call
                1-800-431-8157 for an office near you. To contact the National Foundation for Consumer Credit Counseling
                and connect with an NFCC Certified Consumer Credit Counselor call 800-388-2227.
              </p>
            </Callout>
            <Callout label="Tip">
              <p>
                Some people with debt problems have found that{' '}
                <a href="https://www.debtorsanonymous.org" {...external}>
                  Debtors Anonymous
                </a>
                , General Service Office, PO Box 920888, Needham, MA 02492-0009, 1-800-421-2383 has provided helpful
                service.
              </p>
            </Callout>
          </li>
        </ol>
        <p>
          Personal bankruptcy, a serious step, should be considered only if other means have been exhausted, and only if
          it is the best way to deal with financial problems. A skilled and trusted bankruptcy lawyer should be consulted.
        </p>
      </>
    ),
  },
  {
    id: 'debt-collector',
    title: 'What can I do if I am being hounded by a debt collector?',
    body: (
      <>
        <p>
          If you fall behind in paying your creditors, or an error is made on your accounts, you may be contacted by a
          "debt collector." The Fair Debt Collection Practices Act prohibits certain practices by debt collectors.
        </p>
        <p>
          <strong>What to do:</strong> To stop a debt collector from calling you, write a letter to the collection agency
          telling them to stop. Once the agency receives your letter, it may not contact you again except to say there
          will be no further contact. Another exception is that the agency may notify you if the debt collector or the
          creditor intends to take some specific action.
        </p>
        <p>
          If you believe a debt collector has violated the law by harassing you, you have the right to sue a collector in
          a state or federal court within one year from the date you believe the law was violated. The following practices
          are specifically prohibited.
        </p>
        <p>
          <strong>Harassment, Oppression, or Abuse.</strong> For example, debt collectors may not:
        </p>
        <ul>
          <li>Use threats of violence or harm against the person, property, or reputation</li>
          <li>Publish a list of consumers who refuse to pay their debts (except to a credit bureau)</li>
          <li>Use obscene or profane language</li>
          <li>Repeatedly use the telephone to annoy someone</li>
          <li>Telephone people without identifying themselves</li>
          <li>Advertise your debt</li>
        </ul>
        <p>
          <strong>False Statements.</strong> For example, debt collectors may not:
        </p>
        <ul>
          <li>Give false credit information about you to anyone</li>
          <li>Send you anything that looks like an official document from a court or government agency when it is not</li>
          <li>Use a false name</li>
          <li>Falsely imply that they are attorneys or government representatives</li>
          <li>Falsely imply that you have committed a crime</li>
          <li>Falsely represent that they operate or work for a credit bureau</li>
          <li>Lie about the amount of your debt</li>
          <li>Lie about the involvement of an attorney in collecting a debt</li>
          <li>Indicate that papers being sent to you are legal forms when they are not</li>
          <li>Indicate that papers being sent to you are not legal forms when they are</li>
          <li>Tell you that you will be arrested if you do not pay your debt</li>
          <li>
            Tell you they will seize, garnish, attach, or sell your property or wages, unless the collection agency or
            creditor intends to do so, and it is legal to do so
          </li>
          <li>
            Tell you that actions, such as a lawsuit, will be taken against you, which legally may not be taken, or which
            they do not intend to take
          </li>
        </ul>
        <p>
          <strong>Unfair Practices.</strong> For example, collectors may not:
        </p>
        <ul>
          <li>Collect any amount greater than your debt, unless allowed by law</li>
          <li>Deposit a post-dated check prematurely</li>
          <li>Make you accept collect calls or pay for telegrams</li>
          <li>Take or threaten to take your property unless this can be done legally</li>
          <li>Contact you by postcard</li>
        </ul>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'What are my rights against banks, creditors and debt collectors?',
    body: (
      <>
        <p>You have the following rights:</p>
        <ul>
          <li>
            <strong>Banks.</strong> If you have a complaint about a bank in connection with any of the Federal credit laws
            or if you think any part of your business with a bank has been handled in an unfair or deceptive way write the
            nearest office of the{' '}
            <a href="https://www.ftc.gov" {...external}>
              Federal Trade Commission
            </a>{' '}
            or Consumer & Community Affairs, Board of Governors of the Federal Reserve System, 20th & Constitution Avenue,
            N.W. Washington, D.C. 20551.
          </li>
          <li>
            <strong>Credit Clinics.</strong> File a complaint with the Better Business Bureau, your state attorney
            general's office, and the Federal Trade Commission (FTC).
          </li>
          <li>
            <strong>Debt Collectors.</strong> Report any problems you have with a debt collector to your state Attorney
            General's office and the Federal Trade Commission.
          </li>
          <li>
            <strong>Other Institutions.</strong> The Federal Trade Commission enforces a number of federal laws involving
            consumer credit, including the Equal Credit Opportunity Act, the Fair Credit Reporting Act, the Truth in
            Lending Act, the Fair Credit Billing Act, and the Fair Debt Collection Practices Act.
          </li>
        </ul>
        <p>
          You may also take legal action against a creditor. If you decide to bring a lawsuit, here are the penalties a
          creditor must pay if you win:
        </p>
        <ul>
          <li>
            <strong>Truth in Lending and Consumer Leasing Acts.</strong> If any creditor fails to disclose information
            required under these Acts, or gives inaccurate information, or does not comply with the rules about credit
            cards or the right to cancel certain home-secured loans, you as an individual may sue for actual damages—any
            money loss you suffer. In addition, you can sue for twice the finance charge in the case of certain credit
            disclosures, or, if a lease is concerned, 25 percent of total monthly payments. You may also be entitled to
            reimbursement for court costs and attorney's fees.
          </li>
          <li>
            <strong>Equal Credit Opportunity Act.</strong> If you think you can prove that a creditor has discriminated
            against you for any reason prohibited by the Act, you as an individual may sue for actual damages plus
            punitive damages of up to $10,000.
          </li>
          <li>
            <strong>Violations by Debt Collectors.</strong> You have the right to sue a collector for violations under the
            Fair Debt Collection Practices Act in a state or federal court within one year from the date you believe the
            law was violated. If you win, you may recover money for the damages you suffered. A group of people also may
            sue a debt collector and recover money for damages up to $500,000, or one percent of the collector's net
            worth, whichever is less.
          </li>
          <li>
            <strong>Fair Credit Billing Act.</strong> A creditor who breaks the rules for the correction of billing errors
            automatically loses the amount owed on the item in question and any finance charges on it, up to a combined
            total of $50—even if the bill was correct.
          </li>
          <li>
            <strong>Fair Credit Reporting Act.</strong> You may sue any credit reporting agency or creditor for breaking
            the rules about who may see your credit records or for not correcting errors in your file. A person who
            obtains a credit report without proper authorization or an employee of a credit reporting agency who gives a
            credit report to unauthorized persons may be fined up to $5,000 or imprisoned for one year, or both.
          </li>
        </ul>
      </>
    ),
  },
];

export default function FinancialTroubleFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-credit"
      page="Financial Trouble: Frequently Asked Questions"
      title={
        <>
          Financial Trouble: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about recognizing too much debt, the steps to take, dealing with debt collectors, and your rights against banks, creditors, and collectors."
      sections={sections}
    />
  );
}
