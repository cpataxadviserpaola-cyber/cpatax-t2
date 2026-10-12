import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=139 (Choosing a Professional: Frequently Asked Questions),
// word for word. Back-to-top anchors omitted (handled by layout).
// Address: /guides/life-events/choosing-a-professional/choosing-a-professional-faq (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'when-to-hire',
    title: 'When should I hire a lawyer?',
    body: (
      <>
        <p>
          For certain legally complex or time-consuming disputes or problems, there is no doubt that
          a lawyer is necessary. For example, if you want a will prepared, or a more complex business
          deal handled, you will need to hire a lawyer. And, if a court case is involved (other than a
          simple, routine matter), you'll almost always need a lawyer.
        </p>
        <p>When deciding whether to hire an attorney, consider the following:</p>
        <ul>
          <li>
            Does the matter involve a complex legal issue or is it likely to go to court? Is a large
            amount of money, property, or time involved? These factors indicate that you need to
            hire a lawyer.
          </li>
          <li>
            Is there a form or self-help book available that you can use instead of hiring a lawyer?
            You may be able to solve certain problems with only minimal assistance.
          </li>
          <li>Are there any non-lawyer legal resources available to assist you?</li>
        </ul>
        <p>
          Unlike more complex transactions, some transactions can be handled without a lawyer. For
          instance, a living will can often be prepared with the help of organizations such as the
          American Association of Retired Persons (AARP). Non-profits that deal with retired and
          elderly persons may also be able to provide you with the necessary paperwork to create a
          living will in your state, as well as additional information and/or assistance in completing
          the form properly.
        </p>
      </>
    ),
  },
  {
    id: 'handle-dispute-on-your-own',
    title: 'How would I handle a dispute on my own?',
    body: (
      <>
        <p>
          Many disputes can be resolved by writing letters or negotiating with the other party on
          your own, or by using arbitration or mediation. Legal self-help manuals and seminars can
          provide you with the tools to handle a portion of, or the entire, dispute.
        </p>
        <Callout label="Tip">
          <p>
            Consider hiring an attorney to review papers or provide advice, rather than fully
            representing you.
          </p>
        </Callout>
        <p>
          <strong>Negotiating on your own.</strong> Negotiating on your own behalf is often the
          best way to solve minor disputes. Visit your local library or search online for resources
          that explain the best way to negotiate a dispute.
        </p>
        <Callout label="Tip">
          <p>
            Before starting the negotiation process, it's usually a good idea to familiarize yourself
            with legal issues that might come up by calling a legal hot-line or consulting other
            sources of information.
          </p>
        </Callout>
        <p>
          <strong>Mediation or arbitration.</strong> Dispute resolution centers have been
          established in every state. Most specialize in helping to resolve problems in the areas of
          consumer complaints, landlord/tenant disputes, and disagreements between neighbors or
          family members.
        </p>
        <p>
          During the mediation process, a neutral person assists the two sides in discussing their
          differences and helps them possibly reach an agreement. In an arbitration setting, the
          neutral third party conducts a more formal process and makes a decision (usually written)
          after listening to both sides.
        </p>
        <p>
          If both parties agree to it, using a dispute resolution center or a private mediation center
          is a lower-cost alternative to bringing a lawsuit to court or hiring an attorney to
          represent you during a negotiation process.
        </p>
        <p>
          <strong>Small claims court.</strong> Small claims court may be appropriate if you have a
          monetary claim for damages within the limits set by your state (usually $1,000 to
          $5,000). These courts are more informal and involve less paperwork than regular courts. If
          you file in small claims court, be prepared to act as your own attorney, gathering
          necessary evidence, researching the law, and presenting your story in court.
        </p>
      </>
    ),
  },
  {
    id: 'find-a-good-lawyer',
    title: 'How do I find a good lawyer?',
    body: (
      <>
        <p>
          The first step is to compile a list of names. Ask relatives, friends, clergy, social
          workers, or your doctor for recommendations. State bar associations usually have lawyer
          referral lists organized by specialty.{' '}
          <a href="https://www.martindale.com/" {...external}>
            Martindale-Hubbell
          </a>{' '}
          also has a comprehensive lawyer referral service. For specific groups such as persons with
          disabilities, older persons, or victims of domestic violence consult a community lawyer
          referral services. The court and your banker may also be good referral sources. Finally,
          don't forget the yellow pages of the telephone book, which often lists lawyers according
          to their specialties.
        </p>
        <Callout label="Tip">
          <p>
            If you use a referral service, ask how attorneys are chosen to be listed with that
            particular service. Many services make referrals to all lawyers who are members
            (regardless of type and level of experience) of a particular organization.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Be aware that many bar associations have committees that conduct training or public
            service work in various areas of specialty. An attorney serving on one of these
            committees could have the expertise you are looking for.
          </p>
        </Callout>
        <p>
          After developing a list of potential lawyers, interview them initially by telephone to
          narrow down the list and then arrange face-to-face interviews.
        </p>
      </>
    ),
  },
  {
    id: 'questions-to-ask',
    title: 'What questions should I ask?',
    body: (
      <>
        <p>Before committing yourself to a consultation, ask potential candidates the following questions:</p>
        <ul>
          <li>Do you provide a free consultation for the initial interview?</li>
          <li>How long have you been in practice?</li>
          <li>
            What percentage of your cases is similar to my type of legal problem? (A lawyer with
            experience in handling cases like yours will be more efficient).
          </li>
          <li>
            Can you provide me with any references, such as trust officers in banks, other
            attorneys, or clients?
          </li>
          <li>
            Do you represent any clients or special-interest groups that might cause a conflict of
            interest?
          </li>
          <li>What type of fee arrangement do you require? Are the fees negotiable?</li>
          <li>What information should I bring with me to the initial consultation?</li>
        </ul>
        <p>
          Follow up your phone calls by scheduling interviews with at least two of the attorneys.
          Don't feel embarrassed about selecting only the best candidates or canceling appointments
          with some of the attorneys after you complete your initial phone calls.
        </p>
        <p>
          Next, interview the candidates. Come prepared with a brief summary of your immediate case
          (including dates and facts) as well as a list of general questions for the attorney. The
          purpose of the interview is twofold: (1) to decide if the attorney has the necessary
          experience and is available to take your case; and, (2) to decide if you are comfortable
          with the fee arrangement and, most importantly, comfortable working with the attorney.
        </p>
      </>
    ),
  },
  {
    id: 'legal-fee-arrangements',
    title: 'What legal fee arrangements are best for me?',
    body: (
      <>
        <p>
          The market rate for any given legal service varies by locality. A "fair" fee is what seems
          fair to you, based on your knowledge of going rates. Whether you are comfortable with a fee
          is likely to be based on the following factors:
        </p>
        <ul>
          <li>How much you can afford</li>
          <li>Whether the case is routine or requires special expertise</li>
          <li>The range of attorney rates for this type of case in your area</li>
          <li>How much work can you can do on the case yourself</li>
        </ul>
        <p>The most common types of fee arrangements used by lawyers are listed below.</p>
        <p>
          <strong>Flat fee.</strong> The lawyer will charge you a specific total fee for your case. A
          flat fee is usually offered only if your case is relatively simple or routine.
        </p>
        <Callout label="Note">
          <p>
            While lawyers will not set a flat fee for litigation, they can usually give you a good
            estimate of the costs at each stage.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Ask if photocopying, typing, and other out-of-pocket expenses are covered by this flat fee.
          </p>
        </Callout>
        <p>
          <strong>Hourly rate.</strong> Attorneys charge by the hour (or portion of an hour). For
          instance, if your attorney's fee is $100 per hour, and he or she works ten hours, the cost
          will be $1,000. Some attorneys charge a higher rate for court work and less per hour for
          research or case preparation. And, as a rule, large law firms usually charge more than small
          law firms and attorneys in urban areas often charge more per hour than attorneys practicing in
          rural areas.
        </p>
        <Callout label="Tip">
          <p>
            If you agree to an hourly rate, be sure to find out how much experience your attorney has
            had with your type of case. A less experienced attorney will usually require more time to
            research your case, although he or she may charge a lower hourly rate.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Ask what is included in the hourly rate. If other staff such as secretaries, messengers,
            paralegals, and law clerks will be working on your case, find out how their time will be
            charged to you? Ask about costs and out-of-pocket expenses, which are usually billed in
            addition to the hourly rate.
          </p>
        </Callout>
        <p>
          <strong>Contingency fee.</strong> Under this arrangement, the attorney's fee is based on a
          percentage of what you are awarded in the case. If you lose the case, the attorney does not
          get a fee, although you will still have to pay expenses. A one-third fee is common.
        </p>
        <Callout label="Tip">
          <p>
            Ask whether the lawyer will calculate the fee before or after the expenses. This can make
            a substantial difference, since calculating the percentage of the attorney's fee after the
            expenses have been deducted increases the amount of money you receive.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'save-money-on-legal-fees',
    title: 'How can I save money on legal fees?',
    body: (
      <>
        <p>
          It is important to remember that a lawyer's fees are often negotiable, but your lawyer is
          unlikely to invite you to bargain over fees! Here are some tips for ensuring the
          cost-effectiveness of legal fees.
        </p>
        <p>
          <strong>Comparison shop for flat fees on simple cases.</strong>
        </p>
        <p>
          Ask about the billing method for hourly rates. A written agreement specifying the fee
          arrangement and the work involved is the best way to be clear about the total cost of the
          case.
        </p>
        <p>
          Choose a lawyer with the appropriate qualifications. Most legal work is relatively routine
          in nature and often has more to do with knowing which form to fill out and which county clerk
          will process it most quickly.
        </p>
        <p>
          <strong>Offer to perform some of the work.</strong>
        </p>
        <p>
          Hire the attorney to act as a go-between. Some lawyers are open to negotiating a lower fee if
          you are only looking for their legal expertise to write a letter to the other side to settle.
        </p>
        <p>
          Hire the attorney to act as your pro se coach. If you want to represent yourself in court
          (called "appearing pro se"), hire your attorney to act as a pro se coach who will review
          documents and letters that you prepare and sign.
        </p>
        <p>
          <strong>Choose a lawyer who specializes in what you need.</strong>
        </p>
        <p>
          <strong>Prepare for meetings with your attorney.</strong> The more work you do to prepare,
          the less time your attorney needs to spend (and charge you) for finding the information.
        </p>
        <p>
          <strong>Answer your attorney's questions fully.</strong> If your attorney knows all the facts
          as early as possible in the case, it will save time and money that might be spent later on
          further investigations or misdirected case development.
        </p>
        <p>
          <strong>If the situation changes, tell your attorney as soon as possible.</strong> You don't
          want your attorney heading in the wrong direction on a case.
        </p>
        <p>
          <strong>Maximize contact with your attorney.</strong> Consolidate your questions or
          information-giving into a single call. Unless you have a specific reason for doing so, pass
          on information in writing or to other office staff rather than speaking directly with the
          attorney.
        </p>
        <p>
          <strong>Examine your bill.</strong> Request that your attorney bill you on a regular basis.
          Even if you have agreed on a contingency fee and will not actually pay the expenses until the
          case is settled, you should periodically examine the expenses. Question any items that you
          do not understand or that are not covered in your fee agreement.
        </p>
      </>
    ),
  },
];

export default function ChoosingAProfessionalFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/choosing-a-professional"
      page="Choosing a Professional: Frequently Asked Questions"
      title={
        <>
          Choosing a Professional: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about when to hire a lawyer, handling disputes on your own, finding and interviewing an attorney, and managing legal fee arrangements."
      sections={sections}
    />
  );
}
