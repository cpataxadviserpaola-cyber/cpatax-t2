import GuideArticle, { Agencies, Callout, FigureTable, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';
import { creditAgencies } from '../../../../data/creditAgencies.js';

// Source: cpataxadviser.com/life-events.php?item=24 (Credit Cards: How To Choose—And Use—Them
// Wisely), word for word. Hyphens used as dashes are now dashes, related guides are named by
// their titles in the library, and the five suggestions are a numbered list. One unfinished
// sentence ("The Credit CARD Act of 2009 also addresses"), which the next paragraph repeats in
// full, is left out.
// Address: /guides/life-events/improving-your-credit/credit-cards (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');

const sections = [
  {
    id: 'credit-card-act',
    title: 'Credit CARD Act of 2009',
    body: (
      <>
        <p>
          Known as the Credit CARD Act of 2009, the Credit Card Accountability Responsibility and Disclosure Act of
          2009 went into effect on February 22, 2010. The legislation strengthens consumer protection in the credit card
          market and is a comprehensive reform measure to protect credit card holders in the US against unfair interest
          rate hikes and hidden fees. Specifically, the legislation addresses:
        </p>
        <ul>
          <li>Unfair Rate Increases</li>
          <li>Unfair Fee Traps</li>
          <li>Plain Sight /Plain Language Disclosures</li>
          <li>Accountability of Credit Card Issuers</li>
          <li>Protections for Students and Young People</li>
        </ul>
        <p>
          Even with the new law in place, consumers should still be wary and shop around for the credit card that's best
          for them.
        </p>
      </>
    ),
  },
  {
    id: 'terms',
    title: "Examine The Card's Terms",
    body: (
      <>
        <p>
          To choose a credit card wisely, you must first review and understand the terms and features of the various
          cards. This can add up to very respectable savings over a period of time. In addition, you should also know
          how to use your cards wisely to keep your costs to a minimum. The Financial Guide explains how to achieve
          these goals.
        </p>
        <p>
          Chances are you have received offers in the mail asking if you would like to open credit card accounts.
          Frequently, these offers say that you have been "preapproved" for the card, often with a very attractive
          interest rate (usually, a short-term "low-ball" rate) and with a line of credit purportedly set aside for your
          use (although few people ultimately qualify for the credit line in the promotional literature). Typically,
          these offers urge you to accept quickly, "before the offer expires." However, before accepting a credit card
          offer, understand the card's credit terms and compare costs of similar cards to get the terms and features
          you want.
        </p>
        <p>
          Making an informed decision about a credit card is largely a matter of finding out what the actual cost of
          credit is under that card. Credit cards involve not only a "finance charge"—a charge for the convenience of
          borrowing—but usually other, less obvious charges as well.
        </p>
        <p>
          Learn which credit terms and conditions apply. Each affects the overall cost of the credit you will be using.
          Due to the provisions of the Fair Credit and Charge Card Disclosure Act (1998), you can compare terms and fees
          before you agree to open a credit card or charge card (no interest) account. Be sure to consider and compare
          the terms listed below, which both direct-mail applications and preapproved solicitations must reveal.
        </p>
        <p>
          Which card is best for you may depend on how you plan to use it. If you plan to pay bills in full each month,
          the size of the annual fee or other fees, and not the periodic and annual percentage rate, may be more
          important. If you expect to use credit cards to pay for purchases over time, the APR and the balance
          computation method are important terms to consider. In either case, keep in mind that your costs will also be
          affected by the grace period.
        </p>

        <h3>Annual Percentage Rate</h3>
        <p>
          The "annual percentage rate," or APR, is disclosed to you when you apply for a card, again when you open the
          account, and on each bill you receive. It is a measure of the cost of credit, expressed as a yearly rate.
        </p>
        <p>
          The card issuer also must disclose the "periodic rate," the rate the card issuer applies to your outstanding
          account balance to figure the finance charge for each billing period.
        </p>

        <h3>Variable Rates</h3>
        <p>
          Some credit card plans allow the card issuer to change the annual percentage rate on your account when
          interest rates or other economic indicators (called indexes) change. Because the rate change is linked to the
          performance of the index, which may rise or fall, these plans are commonly called "variable rate" plans. Rate
          changes raise or lower the amount of the finance charge you pay on your account. If the credit card you are
          considering has a variable rate feature, the card issuer must tell you that the rate may vary and how the rate
          is determined, including which index is used and what additional amount (the "margin") is added to the index
          to determine your new rate. You also must be told how much and how often your rate may change.
        </p>
        <RelatedGuide guide={related([31, 'Getting Out of Financial Trouble: Steps You Can Take'])}>
          If you find yourself in financial trouble, please see the Financial Guide:
        </RelatedGuide>

        <h3>Grace Period</h3>
        <p>
          A grace period allows you to avoid the finance charge by paying your current balance in full before the due
          date shown on your statement. Knowing whether a credit card plan gives you a grace period and the length of
          this period is especially important if you plan to pay your account in full each month.
        </p>
        <p>
          If there is no grace period, the card issuer will impose a finance charge from the date you use your credit
          card or from the date each credit card transaction is posted to your account. If your credit card allows a
          grace period, the card issuer must mail your bill at least 14 days before your payment is due. This policy
          ensures that you have enough time to make your payment by the due date.
        </p>
        <Callout label="Caution">
          <p>
            The grace period is generally misleading. The period does not start when the statement is mailed and end
            when your check is received, as many consumers believe. In fact, it usually starts a few days before the
            statement is mailed and ends a few days after the payment is received, based on certain accounting dates
            adopted by the credit card company. Consequently, a 25-day grace period (a fairly common period) for paying
            the statement may water down to a much shorter period.
          </p>
        </Callout>

        <h3>Annual Fees</h3>
        <p>
          An annual fee is a fee that is automatically charged to your credit card account once a year. Fees typically
          range from $25 to $500, depending on your credit card. The fee is for benefits that come with a particular
          credit card. In general, the more benefits associated with the card, the higher the fee; however, many credit
          cards have no annual fee so it pays to shop around.
        </p>

        <h3>Transaction Fees and Other Charges</h3>
        <p>
          A credit card also may involve other types of fees. For example, some card issuers charge a fee when you use
          the card to obtain a cash advance, when you fail to make a payment on time (late fees), or when you go over
          your credit limit (over-limit fees).
        </p>
        <p>
          The Credit CARD Act of 2009 specifically addresses late fees and over-limit fees in that card holders must be
          given at least 21 days from the time of mailing to pay their bill and all late fee traps such as weekend
          deadlines and due dates that change each month are eliminated. In addition, the law helps consumers avoid
          over-limit fees because issuing institutions must now obtain a consumer's permission to process transactions
          that would place the account over the limit.
        </p>
        <p>
          Balance transfer fees are incurred when balances are transferred from high-interest credit cards to lower
          interest cards. Fees for balance transfers are typically based on a percentage of the amount being
          transferred (typically 3% or 5%), with limits on minimum or maximum fee amounts. Many credit card issuers offer
          zero percent interest on balance transfers for the first six to 12 months that revert to regular interests
          rates at the end of the promotion period.
        </p>
        <p>
          Other types of fees can include foreign transaction fees, fees for receiving a copy of monthly statements,
          replacing lost cards, or for using the credit card as a source of funds for overdraft protection.
        </p>

        <h3>Balance Computation Method for the Finance Charge</h3>
        <p>
          If your plan has no grace period or if you expect to pay for purchases over time, it is important to know how
          the card issuer will calculate your finance charge. This charge will vary depending upon the method the card
          issuer uses to figure your balance. The method used can make a difference, sometimes a big difference, in how
          much finance charge you will pay even when the APR is identical to that charged by another card issuer and
          the pattern of purchases and payments is the same.
        </p>
        <p>
          Thanks to the Credit CARD Act of 2009, credit card issuers are now required to show consumers on their
          periodic statements how long it would take to pay off the existing balance and the total interest cost if the
          consumer paid only the minimum due, as well as the payment amount and total interest cost to pay off the
          existing balance in 36 months.
        </p>

        <h3>Average Daily Balance</h3>
        <p>
          The average daily balance method (including or excluding new purchases) gives you credit for your payment
          from the day the card issuer receives it. To compute the balance due, the card issuer totals the beginning
          balance for each day in the billing period and deducts any payments credited to your account that day. New
          purchases may or may not be added to the balance, depending on the plan, but cash advances typically are
          added. The resulting daily balances are added up for the billing cycle and the total is then divided by the
          number of days in the billing period to arrive at the "average daily balance." This is the most common method
          used by credit card issuers.
        </p>

        <h3>Adjusted Balance</h3>
        <p>
          This balance is computed by subtracting the payments you made and any credits you received during the present
          billing period from the balance you owed at the end of the previous billing period. New purchases that you
          made during the billing period are not included. Under the adjusted balance method, you have until the end of
          the billing cycle to pay part of your balance and you avoid the interest charges on that portion. Some
          creditors exclude prior, unpaid finance charges from the previous balance. The adjusted balance method
          usually is the most advantageous to card users.
        </p>

        <h3>Previous Balance</h3>
        <p>
          As the name suggests, this balance is simply the amount that you owed at the end of the previous billing
          period. Payments, credits, or new purchases made during the current billing period are not taken into
          account. Some creditors also exclude unpaid finance charges in computing this balance. If you do not
          understand how the balance on your account is computed, ask the card issuer. (An explanation of how the
          balance was determined must appear on the billing statements the card issuer provides you and on applications
          and preapproved solicitations the card issuer may send you.)
        </p>
      </>
    ),
  },
  {
    id: 'other-considerations',
    title: 'Considerations Other Than Cost',
    body: (
      <p>
        When shopping for a credit card, you probably will want to look at other factors besides cost, such as whether
        the credit limit is high enough to meet your needs, how widely the card is accepted, and what services and
        features are available under the plan. You may be interested, for example, in "affinity cards," all-purpose
        credit cards that are sponsored by professional organizations, college alumni associations, and some members of
        the travel industry. Frequently, an affinity card issuer donates a portion of the annual fees or transaction
        charges to the sponsoring organization or allows you to qualify for free travel or other bonuses.
      </p>
    ),
  },
  {
    id: 'balance-computations',
    title: 'How Different Balance Computations Affect The Cost of Credit',
    body: (
      <>
        <p>
          "While the interest rate is a major factor in determining your interest cost, the method of computing the
          balance to which the interest rate is applied can also be significant. The following table shows how your
          interest cost can vary when the Average Daily Balance, Adjusted Balance and Previous Balance methods are
          used."
        </p>
        <FigureTable
          label="Average daily balance, including and excluding new purchases"
          columns={['', 'Average Daily Balance (including new purchases)', 'Average Daily Balance (excluding new purchases)']}
          rows={[
            ['Monthly rate', '1-1/2%', '1-1/2%'],
            ['APR', '18%', '18%'],
            ['Previous Balance', '$400', '$400'],
            ['New and Purchases', '$50 on the 18th day', '$50 on the 18th day'],
            ['Payments', '$300 on 15th day (new balance = $100)', '$300 on 15th day (new balance = $100)'],
            ['Average Daily Balance', '$270*', '$250**'],
            ['Finance Charge', '$4.05 (1-1/2% of $270)', '$3.75 (1-1/2% of $250)'],
          ]}
          numeric={false}
          wide
        />
        <p>* To figure average daily balance (including new purchases):</p>
        <p className="article-formula">($400 x 15 days) + ($100 x 3 days) + ($150 x 12 days) divided by 30 days = $270</p>
        <p>** To figure average daily balance (excluding new purchases):</p>
        <p className="article-formula">($400 x 15 days) + ($100 x 15 days) divided by 30 days = $250</p>
        <FigureTable
          label="Adjusted balance and previous balance"
          columns={['', 'Adjusted Balance', 'Previous Balance']}
          rows={[
            ['Monthly rate', '1-1/2%', '1-1/2%'],
            ['APR', '18%', '18%'],
            ['Previous Balance', '$400', '$400'],
            ['Payments', '$300', '$300'],
            ['Average Daily Balance', 'N/A', 'N/A'],
            ['Finance Charge', '$1.50 (1-1/2% of $100)', '$6.00 (1-1/2% of $400)'],
          ]}
          numeric={false}
          wide
        />
        <p>
          As you can see, the finance charge varies based upon which balance is used and whether new purchases are
          included or excluded.
        </p>
      </>
    ),
  },
  {
    id: 'rewards',
    title: 'Rebate and Rewards Cards: Are They a Good Deal?',
    body: (
      <>
        <p>
          The use of rebate and rewards cards has grown rapidly. Costco, for example, sponsors a credit card (Costco Cash
          Rebate card) that give rebates on the cost of merchandise you buy with the card once you spend a certain
          amount. You usually get larger rebates on the sponsoring company's products and lower rebates on other card
          charges. Credit card solicitations promise cash, frequent-flier miles or points that will buy everything from
          hotel rooms to gas.
        </p>
        <p>
          You will get a good deal from a rebate card if you spend a lot, and if you pay your bill in full each month. If
          you carry a balance on the card, what you gain in rebates you will lose in the excessive interest charged by
          credit cards.
        </p>
      </>
    ),
  },
  {
    id: 'use-wisely',
    title: 'Use Credit Cards Wisely',
    body: (
      <>
        <p>Here are five suggestions for anyone planning to use credit cards:</p>
        <ol>
          <li>
            Pay bills promptly to keep finance charges as low as possible. Keep copies of sales slips and promptly
            compare charges when your bills arrive.
          </li>
          <li>
            Keep a list of your credit card account numbers, telephone numbers of each card issuer, and login
            information (if you pay your credit cards online) in a safe place in case your cards are lost or stolen.
          </li>
          <li>
            Protect your credit cards and account numbers to prevent unauthorized use. Draw a line through blank spaces
            above the total when you sign receipts. Rip up or retain carbons.
          </li>
          <li>
            Deal only with reliable firms. Check with your local consumer protection agency or the Better Business
            Bureau (BBB) closest to where the business is located. Study the advertising offer carefully. Ask the company
            about its warranty, refund and exchange policies. If you cannot get the answers to your questions, or there
            are any doubtful claims, don't buy.
          </li>
          <li>
            Never Send Cash. Never give out your credit, debit charge card, or bank account number unless you have
            checked out the company or have done business with them before. Try to pay by charge or credit card, so that
            you have record in the event of a dispute with the merchant.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'disputes',
    title: 'How To Dispute Improper Charges',
    body: (
      <>
        <p>
          If there is a problem with your order, for instance, if you were billed for the wrong amount, you never got
          the product, the goods arrived in damaged condition, or the merchandise or services were misrepresented, then
          try to resolve it by following these steps:
        </p>
        <p>
          When you have charged your purchase, you are entitled to a response to your complaint within 30 days, and the
          problem must be resolved within two billing cycles (but not more than 90 days). If you used a debit card, you
          are entitled to a response within 10 days. However, if the financial institution that issued the card needs
          more time, it may take up to 45 days, provided it credits your account with the disputed amount until the
          dispute is resolved.
        </p>
        <RelatedGuide guide={related([29, 'Merchant Credit Card Abuses: What They Cannot Ask You To Do'])}>
          For a listing of what merchants are allowed to ask, please see the Financial Guide:
        </RelatedGuide>
        <p>
          Write immediately to the company from whom you ordered, explaining the problem and asking for a specific
          resolution. Be sure to include your name, address, and daytime phone number, your order or invoice number, a
          copy of a canceled check, or any other helpful information about your purchase. You generally have 60 days
          after receiving a bill to dispute charges. Pay any other charges on your bill that you are not disputing.
        </p>
        <p>
          If you charged your purchase to a charge or credit card account, or you arranged for the payment to be
          automatically withdrawn from a bank account, send a copy of your letter to the card issuer or bank.
        </p>
        <RelatedGuide guide={related([30, 'Your Credit Card Rights: What To Do If You Have a Problem'])}>
          For a more in-depth discussion of your rights in the event of a dispute with a merchant, please see the
          Financial Guide:
        </RelatedGuide>
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
          Questions concerning a particular card issuer should be directed to the enforcement agency responsible for
          that issuer.
        </p>
        <Agencies agencies={creditAgencies} />
      </>
    ),
  },
];

export default function CreditCards() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-credit"
      page="Credit Cards"
      title={
        <>
          Credit Cards: <em>How To Choose—And Use—Them Wisely</em>
        </>
      }
      lead="Using your credit cards wisely is largely a matter of being informed—e.g., how much your card company is charging you for credit—and by following some simple tips for using the card."
      sections={sections}
    />
  );
}
