import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=74 (Post-Mortem Letter: How To Prepare It and
// What To Include), word for word. Related guides are named by their titles in the library.
// Address: /guides/life-events/getting-married/post-mortem-letter (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');

const sections = [
  {
    id: 'what-it-does',
    title: 'What the Postmortem Letter Does',
    body: (
      <>
        <p>
          A postmortem letter provides executors and survivors with the location of assets, the identity of
          professionals consulted by you during life, and the location of important records. And while its
          inclusion in your estate plan is optional, it is often a very helpful document during an especially
          stressful time.
        </p>
        <p>
          To represent you after your death, your executor must know almost everything you know. They must
          have all the facts, figures, and proof you have at your fingertips. This is where the postmortem
          letter is most helpful. Only with this information can the executor carry out your desires.
        </p>
        <p>
          The postmortem letter also informs your loved ones of things you would like done in the event of
          your death and guides you on how you would like certain items handled. This includes many things
          which may not be appropriate to include in your will, or that need to be handled immediately after
          death and before a reading of your will.
        </p>
      </>
    ),
  },
  {
    id: 'what-it-does-not-do',
    title: 'What the Postmortem Letter Does Not Do',
    body: (
      <p>
        The postmortem letter cannot be used in place of a properly executed will and does not have the
        legal force of a will. Similarly, it does not take the place of a living will. The postmortem letter
        is designed to convey instructions after your death, unlike after a life-threatening injury. It is
        vital to have both a will, a living will, and a postmortem letter.
      </p>
    ),
  },
  {
    id: 'getting-it-to-executors',
    title: 'How To Get the Postmortem Letter to Your Executors',
    body: (
      <>
        <p>
          Write the postmortem letter now and leave several copies of it in places where it is certain to be
          found after your death. For example, attached to your will, in your desk, with your spouse, with
          your attorney, with your executor, or in a safe deposit box.
        </p>
        <p>
          If you do not want the information in the letter revealed before your death, leave the letter
          sealed. Do not leave the only copy of your postmortem letter in your safe deposit box. It may never
          be found or may be inaccessible after death.
        </p>
        <Callout label="Caution">
          <p>
            It is extremely important that instructions be left with the survivors that none of your papers
            are to be thrown away until the matter is discussed with your attorney, accountant, or executor.
            Otherwise, your efforts to provide information helpful to your estate may be thwarted.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>It is critical to update the letter periodically to account for changes that occur after you write it.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'contents',
    title: 'What The Postmortem Letter Should Contain',
    body: (
      <>
        <p>The following items should be included in the postmortem letter.</p>

        <h3>To-Do List</h3>
        <ul>
          <li>Notify your employer (remember to include phone numbers).</li>
          <li>Notify certain friends and relatives (provide a list with phone numbers).</li>
          <li>
            If you have volunteered as an organ donor, provide the information necessary for your family to
            act on your wishes.
          </li>
          <li>Notify the Social Security Administration (include your social security number for convenience).</li>
          <li>List of names and contact numbers for an accountant, attorney, financial planner, and insurance agent(s).</li>
          <li>List of club memberships.</li>
          <li>Any instructions on the care of pets.</li>
        </ul>

        <h3>Location of Your Will</h3>
        <p>The location of your final executed will should be mentioned, along with any copies.</p>
        <Callout label="Caution">
          <p>
            Do not leave a will in a safe deposit box. Safe deposit boxes are sealed on the death of the
            decedent in many states; this will cause headaches and delays.
          </p>
        </Callout>

        <h3>Guardians of Children</h3>
        <p>
          The names and addresses of guardians for minor children in case they are orphaned should be
          mentioned in your will. These should also be included in the letter.
        </p>

        <h3>Funeral Arrangements and Cemetery Plot</h3>
        <p>
          If you have arranged funeral services or established a preneed funeral trust, provide details in
          the letter. The location of your cemetery plot and the location of the deed or certificate relating
          to the burial plot should be mentioned. The letter should mention any instructions for the executor
          relating to burial.
        </p>
        <RelatedGuide guide={related([82, 'Funerals: What To Do At This Stressful Time'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <Callout label="Tip">
          <p>
            For the reasons mentioned above under "Location of Will," do not leave the cemetery plot deed or
            certificate in a safe deposit box.
          </p>
        </Callout>

        <h3>Safe Deposit Boxes</h3>
        <p>
          The location of safe deposit boxes, the contents, along with the location of keys, passwords, and
          combinations, should be mentioned. The letter should indicate whether anyone else has access to the
          boxes. If you have rented a post office box, include the number, location of the box, and location
          of the key.
        </p>
        <Callout label="Tip">
          <p>
            If other people have access, ask the executor to take inventory of the box before anyone else is
            allowed to take items out of the box.
          </p>
        </Callout>

        <h3>Bank, Checking, and Credit Card Accounts</h3>
        <p>
          All checking and savings accounts and their account numbers should be mentioned. Instruct the
          executor whether a stop should be placed on withdrawals from these accounts and whether anyone else
          has the right to withdraw from them, whether as a co-depositor or under a power of attorney.
        </p>
        <p>
          Describe where your current and past checkbooks and canceled checks can be found. These may save
          the estate from having to pay a claim or expense that has already been paid and can establish the
          cost of an asset.
        </p>
        <Callout label="Tip">
          <p>
            Be sure to mention any accounts that are not in your name, such as deposits in a Swiss numbered
            account. Otherwise, these accounts may be lost because no one knows about them.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Keep savings accounts active by periodically sending a request for the balance in writing or by
            making deposits. Inactive accounts left for a certain period may revert to the state.
          </p>
        </Callout>
        <p>
          A list of credit card accounts and numbers should be included. The executor should be instructed to
          cancel credit card accounts immediately and to change joint accounts to single accounts.
        </p>

        <h3>Loans</h3>
        <p>
          Provide information on any outstanding debts. Some loans, such as student loans and home mortgages,
          may have an insurance feature that cancels the debt in the event of your death. In the case of
          student loans, this was often paid for in the form of a fee at the amount the loan was disbursed,
          and many people are unaware of this feature. Examine your loan documents for any such features and
          detail them in your letter.
        </p>

        <h3>Tax-Related Matters</h3>
        <p>
          The location of copies of your income tax returns going back as far as possible should be
          mentioned, including any gift-tax returns filed at any time. If copies cannot be located, your
          memory of when and where the gift tax returns were filed and the gift to which they related should
          be mentioned. If any refund claims are pending, or if you feel a refund should be filed for, mention
          these as well.
        </p>

        <h3>Attorneys and Other Professionals</h3>
        <p>
          Mention the names and addresses of any professionals associated with your affairs or who could
          assist the executor. Include accountants, attorneys, insurance agents, financial advisors, bank
          officers, realtors, and brokers. If you relied heavily on these people, they could save your estate
          plenty of money and trouble just by answering a few of the executor's questions.
        </p>
        <Callout label="Tip">
          <p>Also mention your physician since your executor may need help in proving you were mentally competent.</p>
        </Callout>

        <h3>Insurance-Related Matters</h3>
        <p>
          Mention all life insurance policies owned, with the policy numbers. Give the location of the
          policies. Do not neglect to mention employer-provided group insurance.
        </p>
        <p>
          All property, liability, malpractice, business continuation, and other types of insurance policies
          should be mentioned. These policies may save the estate from paying a claim and contain the location
          and description of properties. Further, access to these policies may allow the estate to obtain
          reimbursement for expenses incurred immediately before death.
        </p>
        <Callout label="Tip">
          <p>Mention policies that have lapsed since they may still have some value.</p>
        </Callout>

        <h3>Property Owned</h3>
        <p>List all assets you own and give the location of deeds and titles. Include personal and real property.</p>
        <Callout label="Tip">
          <p>
            If you know of a market for some of your assets that might otherwise be difficult to sell (e.g., a
            special collection or unique asset), tell the executor about it.
          </p>
        </Callout>
        <p>
          Don't neglect to mention property that will not be easy to locate, e.g., the property you have
          loaned out or sold on consignment.
        </p>
        <Callout label="Tip">
          <p>If there is any reason why the executor should value a piece of property at less than its fair market value, explain why.</p>
        </Callout>

        <h3>Investments</h3>
        <p>
          List all brokerage accounts and other investment vehicles, such as limited partnerships or interests
          in real estate. Give the location of brokers' confirmation slips for securities purchases going back
          as far as possible to establish the cost of securities. The cost is your tax basis, which will affect
          the amount of tax you pay on a sale for securities you may have sold before death.
        </p>
        <p>
          The basis of securities held at the time of death will be determined based on their current value.
          If you cannot locate confirmation slips, note the transfer dates shown on stock certificates and
          registered bonds. These dates will allow you to look up the price of the stock.
        </p>
        <p>
          Provide information on all retirement accounts, including IRAs. Indicate your designated beneficiary
          and describe where statements are located. In the case of IRAs, provide information on the account's
          tax status. In particular, if non-deductible contributions were made, a portion of the account may
          not be taxed to the beneficiary.
        </p>

        <h3>Employment</h3>
        <p>
          Provide a list of all prior employers, no matter how long ago you worked for them. You may be
          entitled to pension benefits or death benefits. Tell the executor where to find a description of
          any pension benefits you are entitled to.
        </p>
        <p>
          Provide the executor with a record of any governmental employment, past or present. For the armed
          services, include the branch of service, serial number, and approximate dates. You may be entitled
          to veterans' benefits or survivors' benefits.
        </p>

        <h3>Personal Papers</h3>
        <p>
          Mention the location of your passport and birth certificate, which may be needed for Social Security
          benefits and employee retirement plans, and specify the location of your marriage certificate, which
          may be needed in connection with the marital deduction, joint gifts, and statutory spousal rights. A
          divorce decree will also be necessary and should be mentioned.
        </p>

        <h3>Inheritances</h3>
        <p>
          If you received an inheritance from someone, include that person's name and the date of death. The
          executor may be able to claim a state or federal estate tax credit for transfers within ten years of
          your death. Note the location of any letters from the person's executor, if any. If you have any
          future rights in someone else's property, whether by will or by trust, include those details as
          well.
        </p>

        <h3>Trusts</h3>
        <p>
          If you had ever set up a trust or been named as a trust beneficiary, where the trust instrument is
          located, and when the trust was set up.
        </p>

        <h3>Money Owed to You</h3>
        <p>Mention debts owed to you by others and any proof that the debt exists.</p>
      </>
    ),
  },
];

export default function PostMortemLetter() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-your-estate"
      page="Post-Mortem Letter"
      title={
        <>
          Post-Mortem Letter: <em>How To Prepare It and What To Include</em>
        </>
      }
      lead="The postmortem letter, a simple and practical estate planning tool you can put together yourself, can protect your estate, maximize the amount available to heirs and save your spouse and executors a lot of trouble. This important letter tells your executor and survivors where to locate everything they need to carry out your instructions."
      sections={sections}
    >
      <p>
        Does anyone other than yourself know where your tax records and supporting tax documents are located?
        How about deeds, titles, wills, and insurance papers? Does anyone know who your accountant is? Your
        lawyer? Your broker? Your financial planner? Your insurance agent? If you pass away without leaving your
        heirs this information, it will cause many headaches. Worse than that, part of your estate may have to
        be spent on needless taxes, claims, or expenses because the information is missing.
      </p>
      <RelatedGuide guide={related([73, 'Estate Planning: How To Get Started'])}>
        Please see the Financial Guide:
      </RelatedGuide>
      <p>
        The postmortem letter is an often overlooked estate planning tool. Tell your executors and survivors
        what they need to know to maximize your estate, the location of assets, records, and contacts. Without
        the postmortem letter, you risk losing part of your estate's assets because necessary assets and
        documentation cannot be located.
      </p>
      <RelatedGuide guide={related([81, 'Death of a Spouse: Financial Steps You Should Take'])}>
        Please see the Financial Guide:
      </RelatedGuide>
    </GuideArticle>
  );
}
