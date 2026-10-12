import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=53 (Mortgage Lock-ins: Questions To Ask), word for
// word. Back-to-top anchors omitted (handled by layout). Double hyphens and hyphens used as dashes
// are now dashes, "5-l/2" (with a letter l) and "2-1/2" are "5½" and "2½", and the "Tip:" lead-ins
// are the boxes' labels.
// Address: /guides/life-events/getting-a-loan/mortgage-lock-ins (articlePages in
// src/data/guides.js).

const related = guide('life-events.php');

const sections = [
  {
    id: 'lock-ins-and-fees',
    title: 'Lock-ins and Fees',
    body: (
      <>
        <p>
          When you are ready to settle on your loan, you will want to get the loan terms that you've locked in. To
          increase that likelihood, it is important to learn as much as you can about what the lender is promising you
          before you apply for a loan. Ask for the following information when you shop for a loan:
        </p>
        <ul>
          <li>Does the lender offer a lock-in of the interest rate and points?</li>
          <li>
            When will the lender let you lock in the interest rate and points? When you apply? When the loan is
            approved?
          </li>
          <li>
            Will the lock-in be in writing? If the lock-in is not in writing, you will have no record of the lender's
            agreement with you in case of a dispute.
          </li>
          <li>
            Does the lender charge a fee to lock in your interest rate? Does the fee increase for longer lock-in
            periods? If so, then by how much?
          </li>
          <li>
            If you have locked in a rate and the lender's rate drops, can you lock in at the lower rate? Does the lender
            charge you an additional fee to lock in the lower rate?
          </li>
          <li>Can you float your interest rate and points for now and lock them in later?</li>
        </ul>

        <h3>Loan Processing Time</h3>
        <p>
          While the lender has the greatest role in how fast your loan application is processed, there are certain
          things you can do to speed up its approval. Try to find out what documentation the lender will require from
          you. Much of this documentation can be brought with you when you apply for the loan. When you first meet with
          your lender, be sure to bring the following documents:
        </p>
        <ul>
          <li>
            The purchase contract for the house (if you don't have the contract, check with your real estate agent or
            the seller).
          </li>
          <li>
            Your bank account numbers, the address of your bank branch and your latest bank statement, plus pay stubs,
            W-2 forms, or other proof of employment and salary, to help the lender check your finances.
          </li>
          <li>
            If you are self-employed, balance sheets, tax returns for 2-3 previous years, and other information about
            your business.
          </li>
          <li>
            Information about debts, including loan and credit card account numbers and the names and addresses of your
            creditors.
          </li>
          <li>Evidence of your mortgage or rental payments, such as cancelled checks.</li>
          <li>Certificate of Eligibility from the Veterans Administration if you want a VA-guaranteed loan.</li>
        </ul>
        <Callout label="Tip">
          <p>
            Be sure to respond promptly to your lender's requests for information while your loan is being processed.
            It is also a good idea to call the lender and real estate agent from time to time. By calling occasionally,
            you can check on the status of your application, and offer to help contact others such as employers who may
            need to provide documents and other information for your loan. It is also helpful to keep notes on your
            contacts with the lender so that you will have a record of your conversations.
          </p>
        </Callout>

        <h3>Expiration of Lock-ins</h3>
        <p>Because mortgage lock-in rates do expire, you'll want to ask potential lenders about the following:</p>
        <ul>
          <li>How long does the lender expect to take to process your loan?</li>
          <li>What has been the lender's average time for processing loans recently?</li>
          <li>Has the lender's loan volume increased? Heavy volume might increase the lender's average processing time.</li>
          <li>
            What rate is charged if the lock-in expires before settlement? The rate in effect when the lock-in expires?
          </li>
          <li>
            If you fail to settle within the lock-in period, will the lender refund some or all of your application or
            lock-in fees if you decide to cancel the loan application?
          </li>
          <li>
            If your lock-in expires and you want to get another lock-in at the rate in effect at the time of the
            expiration, will the lender charge an additional fee for the second lock-in?
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'locking-in-the-mortgage',
    title: 'Locking in the Mortgage',
    body: (
      <>
        <p>
          When looking for a mortgage, you should shop among lenders for (1) the most favorable interest rate and (2)
          the lowest points and other up-front charges.
        </p>
        <RelatedGuide guide={related([65, 'Mortgage Alternatives: How To Choose The Right One'])}>
          For a more in-depth discussion about mortgages, please see the Financial Guide
        </RelatedGuide>
        <p>
          In most cases, the terms you are quoted when you shop among lenders only represent the terms available to
          borrowers settling their loan agreement at the time of the quote. The quoted terms may not be the terms
          available to you at settlement weeks or even months later. Therefore, you should not rely on the terms quoted
          to you when shopping for a loan unless a lender is willing to offer a lock-in.
        </p>
        <p>
          Lock-ins on rates and points might offer you a way to ensure that what you shop for is what you get. This next
          section explains what these arrangements mean.
        </p>

        <h3>What Is a Lock-In?</h3>
        <p>
          A lock-in, also called a rate-lock or rate commitment, is a lender's promise to hold a certain interest rate
          and a certain number of points for you, usually for a specified period of time, while your loan application
          is processed.
        </p>
        <p>
          Points are additional charges imposed by the lender that are usually prepaid by the consumer at settlement,
          but can sometimes be financed by adding them to the mortgage amount. One point equals one percent of the loan
          amount.
        </p>
        <p>
          Depending on the lender, you may be able to lock in the interest rate and number of points that you will be
          charged when you file your application, during processing of the loan, when the loan is approved, or later.
        </p>
        <p>
          A lock-in that is given when you apply for a loan may be useful because it is likely to take your lender
          several weeks or longer to prepare, document, and evaluate your loan application. During that time, the cost
          of mortgages may change. But if your interest rate and points are locked in, you should be protected against
          increases while your application is processed. This protection could affect whether you can afford the
          mortgage.
        </p>
        <p>
          Remember that a locked-in rate could also prevent you from taking advantage of price decreases, unless your
          lender is willing to lock in a lower rate that becomes available during this period.
        </p>
        <p>
          It is important to recognize that a lock-in is not the same as a loan commitment, although some loan
          commitments may contain a lock-in. A loan commitment is the lender's promise to make you a loan in a specific
          amount at some future time. Generally, you will receive the lender's commitment only after your loan
          application has been approved. This commitment usually will state the loan terms that have been approved
          (including loan amount), how long the commitment is valid, and the lender's conditions for making the loan,
          such as receipt of a satisfactory title insurance policy protecting the lender.
        </p>

        <h3>Will Your Lock-In Be In Writing?</h3>
        <p>
          Some lenders have preprinted forms that set out the exact terms of the lock-in agreement. Others may only make
          an oral lock-in promise on the telephone or at the time of application. Oral agreements can be very difficult
          to prove in the event of a dispute.
        </p>
        <p>
          Some lenders' lock-in forms may contain crucial information that is difficult to understand or that is in fine
          print. For example, some lock-in agreements may become void through some unrelated action such as a change in
          the maximum rate for Veterans Administration guaranteed loans. Thus, it is wise to obtain a blank copy of a
          lender's lock-in form to read carefully before you apply for a loan. If possible, show the lock-in form to a
          lawyer or real estate professional.
        </p>
        <Callout label="Tip">
          <p>
            Obtain written, rather than verbal, lock-in agreements to make sure that you fully understand how your
            lender's lock-ins and loan commitments work and to have a tangible record of your arrangements with the
            lender. This record may be useful in the event of a dispute.
          </p>
        </Callout>

        <h3>Will You Be Charged for a Lock-In?</h3>
        <p>
          Lenders may charge you a fee for locking in the rate of interest and number of points for your mortgage. Some
          lenders may charge you a fee up-front, and may not refund it if you withdraw your application, if your credit
          is denied, or if you do not close the loan. Others might charge the fee at settlement. The fee might be a flat
          fee, a percentage of the mortgage amount, or a fraction of a percentage point added to the rate you lock in.
        </p>
        <p>
          The amount of the fee and how it is charged will vary among lenders and may depend on the length of the
          lock-in period.
        </p>

        <h3>How to Handle the Options Available for Mortgage Settlement Terms</h3>
        <p>
          Lenders may offer different options in establishing the interest rate and points that you will be charged,
          such as:
        </p>
        <p>
          <em>Locked-In Interest Rate—Locked-In Points.</em> Under this option, the lender lets you lock in both the
          interest rate and points quoted to you. This option is considered to be a true lock-in because your mortgage
          terms should not increase above the interest rate and points that you have agreed upon even if market
          conditions change.
        </p>
        <p>
          <em>Locked-In Interest Rate—Floating Points.</em> Under this option, the lender lets you lock in the interest
          rate, while permitting or requiring the points to rise and fall (float) with changes in market conditions. If
          market interest rates drop during the lock-in period, the points may also fall. If they rise, the points may
          increase.
        </p>
        <p>
          Even if you float your points, your lender may allow you to lock-in the points at some time before settlement
          at whatever level is then current. For instance, say that you've locked in a 5½ percent interest rate, but not
          the 3 points that went with that rate. A month later, the market interest rate remains the same, but the points
          the lender charges for that rate have dropped to 2½. With your lender's agreement, you could then lock in the
          lower 2½ points.
        </p>
        <p>
          If you float your points and market interest rates increase by the time of settlement, the lender may charge a
          greater number of points for a loan at the rate you've locked in. In this case, the benefit you might have had
          by locking in your rate may be lost because you will have to pay more in up-front costs.
        </p>
        <p>
          <em>Floating Interest Rate—Floating Points.</em> Under this option, the lender lets you lock in the interest
          rate and the points at some time after application but before settlement. If you think that rates will remain
          level or even go down, you may want to wait on locking in a particular rate and points. If rates go up, you
          should expect to be charged the higher rate.
        </p>
        <p>Because practices vary, you may want to ask your lender whether any other options are available to you.</p>

        <h3>How Long Are Lock-ins Valid?</h3>
        <p>
          Usually the lender will promise to hold a certain interest rate and number of points for a given number of
          days, but to get these terms you must settle on the loan within that time period. Lock-ins of 30 to 60 days
          are common, but some lenders may offer a lock-in for a shorter period of time, for example, 7 days after your
          loan is approved, while some others might offer longer lock-ins (up to 120 days). Lenders that charge a
          lock-in fee may charge a higher fee for the longer lock-in period. Usually, the longer the period is, the
          greater the fee will be.
        </p>
        <p>
          The lock-in period should be long enough to allow for settlement, and any other contingencies imposed by the
          lender, before the lock-in expires.
        </p>
        <Callout label="Tip">
          <p>
            Before deciding on the length of the lock-in to ask for, you should find out the average time for processing
            loans in your area and ask your lender to estimate (in writing, if possible) the time needed to process your
            loan. You will also want to take into account any factors that might delay your settlement. These may
            include delays that you can anticipate in providing materials about your financial condition and, in case
            you are purchasing a new house, unanticipated construction delays.
          </p>
        </Callout>
        <p>Finally, ask for a lock-in with as few contingencies as possible.</p>

        <h3>What Happens If the Lock-In Period Expires?</h3>
        <p>
          If you do not settle within the lock-in period, you might lose the interest rate and the number of points you
          had locked in. This could happen if there are delays in processing, whether they are caused by you, others
          involved in the settlement process, or the lender. For example, your loan approval could be delayed if the
          lender has to wait for any documents from you or from others such as employers, appraisers, termite
          inspectors, builders, and individuals selling the home. On occasion, lenders are themselves the cause of
          processing delays, particularly when loan demand is heavy, which sometimes happens when interest rates fall
          suddenly.
        </p>
        <p>
          If your lock-in expires, most lenders will offer the loan based on the prevailing interest rate and points. If
          market conditions have caused interest rates to rise, most lenders will charge you more for your loan. One
          reason why some lenders may be unable to offer the lock-in rate after the period expires is that they can no
          longer sell the loan to investors at the lock-in rate. When lenders lock in loan terms for borrowers, they
          often have an agreement with investors to buy these loans based on the lock-in terms. That agreement may
          expire around the same time that the lock-in expires and the lender may be unable to afford to offer the same
          terms if market rates have increased. Lenders who intend to keep the loans they make may have more flexibility
          in those cases where settlement is not reached before the lock-in expires.
        </p>

        <h3>Complaints about Lock-ins</h3>
        <p>
          Knowing what to look for puts you in a better position to decide whether, when, and how long to lock in
          mortgage terms. Also, by helping to keep the loan process moving, you can lessen the chance that your lock-in
          will run out before settlement.
        </p>
        <p>
          But what if your lock-in does lapse? If you believe that the lapse was due to delays caused by the lender or
          someone else involved in the loan process, you should first try to reach a mutually satisfactory agreement
          with the lender. If that effort fails, consider writing to the appropriate state or federal regulatory agency.
        </p>
        <p>
          Some lender actions, such as offering lock-in terms which are impossible to fulfill, failing to process your
          loan diligently, or causing your lock-in to expire are improper—and may even be illegal. In addition, because
          you may have contractual rights under your lock-in or loan commitment, you may want to consult with an
          attorney. Be aware, though, that complaints may not be resolved as quickly as may be necessary for a home
          purchase.
        </p>
        <p>
          Depending upon their authority under applicable state or federal law, regulatory agencies may either attempt
          to help you resolve your complaint directly or record your complaint and recommend other action.
        </p>
        <p>
          State consumer protection offices, banking authorities, and offices of the attorney general can be contacted
          regarding complaints against many lenders doing business in the state.
        </p>
      </>
    ),
  },
  {
    id: 'escrow-accounts',
    title: 'Escrow Accounts',
    body: (
      <>
        <p>
          Your monthly mortgage payments will cover principal and interest and, most likely, something called an escrow
          account. The following information will help you to understand how these accounts work.
        </p>

        <h3>What Is An Escrow Account?</h3>
        <p>
          An escrow account is a fund that your lender establishes in order to pay property taxes and hazard insurance
          as they become due on your home during the year. In this way, the lender uses the escrow account to guard its
          investment in your home. For example, if you did not pay your property taxes, your municipality could sell
          your home at a foreclosure sale. Similarly, if you neglected to pay the hazard insurance premium, a fire or
          flood that destroyed your home also would destroy the lender's security for the loan.
        </p>
        <p>Most mortgage loans require escrow accounts, but not all do.</p>
        <Callout label="Tip">
          <p>
            If your mortgage contract does not specifically require an escrow account, try to negotiate with the lender
            for the right to pay your own taxes and insurance. In this way, you can avoid having your money tied up until
            it is needed.
          </p>
        </Callout>
        <p>
          However, if you have a mortgage insured by the Federal Housing Administration or the Veterans Administration
          you must pay the lender each month for taxes and insurance, and these payments must be held in an escrow
          account until the lender disburses them on your behalf.
        </p>

        <h3>How Are The Payments Calculated?</h3>
        <p>
          The goal of the escrow account is to have enough money to pay taxes and insurance when they become due. To
          achieve this goal, the lender adds one-twelfth of the tax and insurance amount to your mortgage payment each
          month. For example, if your taxes and insurance are $1,200 per year, the lender would collect $2,400 in twelve
          installments of $200 per month.
        </p>
        <p>
          To cover possible tax or insurance increases, the federal Real Estate Settlement Procedures Act (RESPA)
          permits the lender to add to the yearly amount two months of extra payments prorated monthly. So, the lender
          would collect an additional $400 divided by 12, or $33.33 per month, for a total escrow payment of $233.33 per
          month.
        </p>
        <Callout label="Tip">
          <p>
            To determine if you are being charged correctly, compare your escrow payments with what you owe annually on
            your hazard insurance and property taxes. You can get this information from your local tax authority and
            your insurance company. If the lender charges you substantially less than the required amount, you will need
            to pay an additional lump sum at the end of the year. If the lender charges you substantially more, it may
            tie up your money unfairly, as well as violate the RESPA regulations.
          </p>
        </Callout>

        <h3>Why Mortgage Payments Change</h3>
        <p>
          Most lenders will analyze your escrow account yearly to make sure they are collecting enough money to pay your
          taxes and insurance. If your taxes or insurance premiums change during the year, your lender will need to
          adjust your payments accordingly.
        </p>

        <h3>Interest on Escrowed Funds</h3>
        <p>
          Does the lender have to pay me interest on money being held in escrow? In most cases, no. But this is
          determined by the law of the state where your property is located. Check with the state banking commission or
          consumer protection office concerning such state requirements.
        </p>

        <h3>Escrow Account Balance</h3>
        <p>
          Most lenders provide an annual statement at the end of the year. Read this carefully. If you have any
          questions, ask the lender. If the statement shows that the lender has collected more in escrow payments than
          it has paid out, ask to have the money refunded to you, unless you prefer to have it applied toward next
          year's payments.
        </p>

        <h3>If You Have a Complaint</h3>
        <p>
          First try to resolve any dispute or problem with your lender. If you cannot resolve your problem with the
          person handling your account, talk to a supervisor or an officer of the company. Be sure to keep a copy of any
          correspondence you may have. Often, your state banking agency will be able to help you, or at least direct you
          to the state agency that can help.
        </p>
        <Callout label="Tip">
          <p>
            If you are a consumer with a question or complaint related to your mortgage or mortgage servicer, please
            contact the Consumer Financial Protection Bureau's (CFPB) Consumer Response team at 855-411-2372
            (855-729-2372 TTY/TDD), or by fax number 855-237-2392.
          </p>
        </Callout>
      </>
    ),
  },
];

export default function MortgageLockIns() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-a-loan"
      page="Mortgage Lock-ins"
      title={
        <>
          Mortgage Lock-ins: <em>Questions To Ask</em>
        </>
      }
      lead="When you are ready to settle on your mortgage loan, you want to get the best rate and loan terms that you can. To increase that likelihood, it is important to learn as much as you can about what the lender is promising you before you apply for a loan—including locking in your loan at a great rate. This guide provides information on how to do that."
      sections={sections}
    />
  );
}
