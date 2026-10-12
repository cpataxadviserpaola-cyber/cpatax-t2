import GuideArticle, { Agencies, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';
import { creditAgencies } from '../../../../data/creditAgencies.js';

// Source: cpataxadviser.com/life-events.php?item=31 (Getting Out of Financial Trouble: Steps You
// Can Take), word for word. Double hyphens are now dashes, the "Tip:"/"Caution:" lead-ins are the
// boxes' labels, related guides are named by their titles in the library, and the eight steps
// are a numbered list.
// Address: /guides/life-events/improving-your-credit/getting-out-of-financial-trouble
// (articlePages in src/data/guides.js).
const related = guide('life-events.php');

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    body: (
      <>
        <p>Here are some specific steps you can take if you are in financial trouble:</p>
        <ol>
          <li>
            <em>Review each debt.</em> Make sure that the debt creditors claim you owe is really what you owe and that
            the amount is correct. If you dispute a debt, first contact the creditor directly to resolve your questions.
            If you still have questions about the debt, contact your state or local consumer protection office or, in
            cases of serious creditor abuse, your state Attorney General.
          </li>
          <li>
            <em>Contact your creditors.</em> Let your creditors know that you are having difficulty making your payments.
            Tell them why you are having trouble—perhaps it is because you recently lost your job or have unexpected
            medical bills. Try to work out an acceptable payment schedule with your creditors. Most are willing to work
            with you and will appreciate your honesty and forthrightness.
            <Callout label="Tip">
              <p>
                Most automobile financing agreements permit your creditor to repossess your car any time you are in
                default, with no advance notice. If your car is repossessed you may have to pay the full balance due on
                the loan, as well as towing and storage costs, to get it back. Do not wait until you are in default. Try
                to solve the problem with your creditor when you realize you will not be able to meet your payments. It
                may be better to sell the car yourself and pay off your debt than to incur the added costs of
                repossession.
              </p>
            </Callout>
          </li>
          <li>
            <em>Budget your expenses.</em> Create a spending plan that allows you to reduce your debts. Itemize your
            necessary expenses (such as housing and healthcare) and optional expenses (such as entertainment and vacation
            travel). Stick to the plan.
            <RelatedGuide guide={related([11, 'Budgeting: How To Prepare a Workable Plan'])}>
              For some guidance in this regard, please see the Financial Guide:
            </RelatedGuide>
            <Callout label="Tip">
              <p>Try self-budgeting before taking more extreme measures.</p>
            </Callout>
          </li>
          <li>
            <em>Try to reduce your expenses.</em> Cut out any unnecessary spending such as eating out and purchasing
            expensive entertainment. Consider taking public transportation or using a car sharing service rather than
            owning a car. Clip coupons, purchase generic products at the supermarket and avoid impulse purchases. Above
            all, stop incurring new debt. Leave your credit cards at home. Pay for all purchases in cash or use a debit
            card instead of a credit card.
          </li>
          <li>
            <em>Pay down debts using savings.</em> Withdrawing savings from low-interest accounts to settle high-rate
            loans or credit card debt usually makes sense.
            <Callout label="Tip">
              <p>Selling off a second car not only provides cash but also reduces insurance and other maintenance expenses.</p>
            </Callout>
          </li>
          <li>
            <em>Find out if you are eligible for social services.</em> Government assistance includes unemployment
            compensation, Temporary Assistance for Needy Families (TANF) formerly{' '}
            <em>Aid to Families with Dependent Children (AFDC)</em>, food stamps, now known as Supplemental Nutrition
            Assistance Program (SNAP), low-income energy assistance, Medicaid, and Social Security (including
            disability). Other resources may be available from churches and community groups.
          </li>
          <li>
            <em>Try to consolidate your debts.</em> There are a number of ways to pay off high-interest loans, such as
            credit cards, by getting a refinancing or consolidation loan, such as a second mortgage.
            <Callout label="Caution">
              <p>
                Be wary of any loan consolidations or other refinancing that actually <strong>increase</strong> interest
                owed, or require payments of points or large fees.
              </p>
            </Callout>
            <Callout label="Caution">
              <p>Second mortgages greatly increase the risk that you may lose your home.</p>
            </Callout>
          </li>
          <li>
            <em>Prepare a financial plan.</em> A financial plan can alleviate financial worries about the future and
            ensure that you will meet your financial goals whether they relate to retirement, asset acquisition,
            education, or just vacations.
            <RelatedGuide guide={related([10, 'Your Financial Plan: Getting Started On a Secure Future'])}>
              For guidance on how to begin the financial planning process, please see the Financial Guide:
            </RelatedGuide>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'credit-counseling',
    title: 'Credit Counseling Agencies',
    body: (
      <>
        <p>
          If you are unable to make satisfactory arrangements with your creditors, there are organizations to help you
          accomplish this. For instance, National Foundation for Consumer Credit (NFCC) member agencies provide education
          and counseling to families and individuals. For consumers who want individual help, counselors with
          professional backgrounds in money management and counseling are available to provide support.
        </p>
        <p>
          To promote high standards, the NFCC has developed a certification program for these counselors known as
          Certified Consumer Credit Counselors (CCCS). A counselor will work with you to develop a budget to maintain your
          basic living expenses and outline options for addressing your total financial situation.
        </p>
        <p>
          If creditors are pressing you, a CCCS counselor can also negotiate with these creditors to repay your debts
          through a financial management plan. Under this plan, creditors often agree to reduce payments or drop interest
          and finance charges and waive late fees and over-the-limit fees. After starting the plan, you will deposit
          money with CCCS each month to cover these newly negotiated payment amounts. Then CCCS will distribute this money
          to your creditors to repay your debts.
        </p>
        <p>
          With more than 1,100 locations nationwide, CCCS agencies are available to nearly all consumers. Supported
          mainly by contributions from community organizations, financial institutions, and merchants, CCCS provides
          services free or at a low cost to individuals seeking help. To contact a CCCS office for confidential help call
          1 (800) 388-2227, 24 hours a day, for an office near you or visit their website:{' '}
          <a href="https://www.nfcc.org" {...external}>
            NFCC
          </a>
        </p>
      </>
    ),
  },
  {
    id: 'bankruptcy',
    title: 'Personal Bankruptcy',
    body: (
      <>
        <p>Bankruptcy is a legal proceeding that is intended to give people who cannot pay their bills a fresh start.</p>
        <Callout label="Tip">
          <p>
            A decision to file for bankruptcy is a serious step, which should be taken only if it is the best way to deal
            with financial problems.
          </p>
        </Callout>
        <p>There are two types of bankruptcy available to most individuals:</p>
        <ul>
          <li>
            <em>Chapter 13 bankruptcy</em> allows debtors to keep property which they might otherwise lose, such as a
            mortgaged house or car. Reorganizations may allow debtors to pay off or cure a default over a period of three
            to five years, rather than surrender property.
          </li>
          <li>
            <em>Chapter 7 or "straight bankruptcy"</em> involves liquidation of all assets that are not exempt in your
            state. The exempt property may include items such as work-related tools and basic household furnishings,
            among others. Some of your property may be sold by a court-appointed official or turned over to your
            creditors. You can file for Chapter 7 only once every eight years.
          </li>
        </ul>
        <p>
          Both types of bankruptcy may get rid of unsecured debts (those where creditors have no rights to specific
          property), and stop foreclosures, repossessions, garnishments, utility shut-offs and debt collection
          activities. Both types also provide exemptions that permit most individual debtors to keep most of their
          assets, though these "exemption" amounts vary greatly from state to state.
        </p>
        <p>
          Bankruptcy cannot clean up a bad credit record and will be part of this record for up to ten years. Thus,
          filing bankruptcy will make it more difficult to get a mortgage to buy a house. It usually does not wipe out
          child support, alimony, fines, taxes, and some student loan obligations. Also, under Chapter 13, unless you
          have an acceptable plan to catch up on your debt, bankruptcy usually does not permit you to keep property when
          the creditor has an unpaid mortgage or lien on it. Bankruptcy cases must be filed in federal court.
        </p>
        <Callout label="Tip">
          <p>
            Be cautious when choosing a bankruptcy lawyer. Some of the less reputable lawyers make easy money by handling
            hundreds of bankruptcy cases without adequately considering individual needs and alternative solutions. Get
            recommendations from people you know and trust, and from employee assistance programs.
          </p>
        </Callout>
        <RelatedGuide guide={related([36, 'Lawyers: How To Choose The Right One'])}>
          For information on making sure you pick the right lawyer, please see the Financial Guide:
        </RelatedGuide>
        <p>
          Some public-funded legal services programs handle bankruptcy cases without charging attorney fees. Or these
          programs may provide referrals to private bankruptcy lawyers. Keep in mind that the fees of these attorneys may
          vary widely.
        </p>
      </>
    ),
  },
  {
    id: 'scams',
    title: 'Scams And Pitfalls',
    body: (
      <>
        <p>
          Consumers with credit problems have paid millions of dollars to firms that claim they can remove negative
          information, clean up credit reports, and allow consumers to get credit no matter how bad the credit history.
        </p>
        <p>
          These credit repair clinics charge consumers anywhere from $50 to $2,000 and often use questionable methods.
          Most clinics make misleading promises to consumers, and charge high fees for doing what you could do
          yourself—or simply take your money and do nothing at all.
        </p>
        <Callout label="Tip">
          <p>
            Do not confuse the for-profit credit repair clinics discussed here with the non-profit{' '}
            <a href="https://credit.org/credit-services/consumer-credit-counseling" {...external}>
              Consumer Credit Counseling Services (CCCS)
            </a>{' '}
            we discussed before.
          </p>
        </Callout>
        <p>Here are some common promises made by credit clinics and the reasons consumers should beware of such claims:</p>

        <h3>"Based on little-known loopholes in Federal credit laws, we can show you how to clean up your credit report!"</h3>
        <p>
          These "loopholes" are merely the provisions of the Fair Credit Reporting Act (FCRA), under which you have the
          right to challenge information in your credit report you believe incorrect. We discussed these provisions
          earlier in the section on "What To Do If You Have A Bad Credit Report." Credit repair clinics often flood
          credit bureaus with requests to check whether or not all negative data is correct. Credit clinics hope
          creditors will not be able to verify the information in a reasonable time period, causing the negative
          information to have to be dropped under the FCRA. Some credit clinics even tell consumers to challenge neutral
          information (e.g., name and address), hoping to distort file data so that the old, negative file will no longer
          be identifiable when a creditor asks for a consumer's file. Creditors and credit bureaus have become familiar
          with such tactics, and they have sought to use the provision of the FCRA that allows them to dismiss
          "frivolous" disputes of file information and to refuse to respond to repeated disputes of the same data.
        </p>

        <h3>"We can show you how to remove negative information from your file—including judgments."</h3>
        <p>
          Some clinics tell consumers to pay off any bills outstanding with the creditor in exchange for the removal of
          negative information. Or, they may tell a consumer who has an account in collections to pay part of the balance
          with a check. The check is to carry a disclaimer saying that, by cashing the check, the creditor agrees to
          remove the account from collections and remove any negative information about the account from its files.
          Creditors are under no obligation to agree to such measures, and the fees paid to clinics for such advice is
          wasted.
        </p>

        <h3>"We can get you a major credit card—even if you've been through bankruptcy!"</h3>
        <p>
          What you are not told is that you will have to "secure" the card first. Most credit cards are unsecured; that
          is, you are not pledging any of your assets as collateral for any credit you may use. A card is secured when a
          consumer puts a deposit in the bank and gets a bankcard with a credit limit based on a percentage of that
          deposit. While a secured card can be an excellent tool for rebuilding credit, why should you pay the credit
          clinic just to provide an application and deposit slip?
        </p>
        <p>
          Often for-profit or non-credential counseling organizations make promises that they cannot or do not keep. Be
          especially careful when asked for a large sum of money in advance.
        </p>
        <Callout label="Tip">
          <p>
            Several states have enacted laws to protect consumers against the deceptive practices of many credit clinics.
            These state laws generally require credit clinics to inform consumers of their rights under the FCRA; be
            bonded (hold a type of insurance to protect consumers who may sue) if they accept payment in advance of
            services; accurately represent what they can and cannot do; and offer a cancellation period before any
            contract for services the consumer may sign takes effect. Check with your state attorney general's office to
            determine if there are any regulations for credit clinics in your state.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            To check an organization's reputation, contact your state Attorney General, consumer protection agency, or{' '}
            <a href="https://www.bbb.org/" {...external}>
              Better Business Bureau.
            </a>
          </p>
        </Callout>
        <p>
          <em>A Final Word:</em> Don't lose hope, even if you despair of ever recovering financially. You can regain
          financial health if you act responsibly. The options presented here can put you on the road to financial
          recovery. Professional financial guidance can get you off to the right start.
        </p>
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

export default function FinancialTrouble() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-credit"
      page="Getting Out of Financial Trouble"
      title={
        <>
          Getting Out of Financial Trouble: <em>Steps You Can Take</em>
        </>
      }
      lead="If like thousands of others, you are having trouble paying your debts, it is important to take action. Doing nothing can lead to much larger problems in the future—and even bigger debts, such as the loss of assets such as your house, and a bad credit record. This Financial Guide suggests how you can help improve your relationships with creditors, reduce your debts, better manage your money and get a fresh start."
      sections={sections}
    >
      <p>
        How can you tell when you have too much debt? What if bill collectors are not calling yet, but you are having
        difficulty paying monthly bills? If these problems seem familiar, you should take action.
      </p>
      <ul>
        <li>Have you run several credit cards up to the limit?</li>
        <li>Do you frequently make only the minimum monthly payments on your credit cards?</li>
        <li>Do you apply for almost any credit card you are offered without checking out the terms?</li>
        <li>Have you used the cash advance feature from one card to pay the minimum payment on another?</li>
        <li>Do you use cash advances (or use a credit card) for living expenses such as food, rent, or utilities?</li>
        <li>Are you unaware of what your total debt is?</li>
        <li>
          Are you unaware of how long it would take you to pay off all your current debts (excluding mortgages and cars)
          at the rate you are paying?
        </li>
      </ul>
      <p>
        If you find any of these statements apply to you, you may need to learn more about managing debt before you try to
        reestablish credit.
      </p>
    </GuideArticle>
  );
}
