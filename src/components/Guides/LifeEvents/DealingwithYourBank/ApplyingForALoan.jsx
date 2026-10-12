import GuideArticle, { ArticleTable, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=23 (Applying For a Loan: How To Get The Best
// Loan At The Lowest Cost), word for word from the live page.
// Address: /guides/life-events/dealing-with-your-bank/applying-for-a-loan (articlePages in
// src/data/guides.js).

const related = guide('life-events.php', 5);
const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'types-of-loans',
    title: 'Types Of Loans',
    body: (
      <>
        <p>Let's take a look at the various ways you can borrow money and the negative and positive aspects of each.</p>

        <h3>Home Equity Loans</h3>
        <p>
          By using the equity in your home, you may qualify for a sizable amount of credit, available for use when and how
          you please at an interest rate that is relatively low. Furthermore, under the tax law—depending on your specific
          situation you may be allowed to deduct the interest because the debt is secured by your home.
        </p>
        <RelatedGuide guide={related([52, "Home Equity Loans: How To Shop For The One That's Best For You"])}>
          Please see the Financial Guide:
        </RelatedGuide>

        <h3>Home Equity Lines Of Credit</h3>
        <p>
          A home equity line of credit is a form of revolving credit in which your home serves as collateral. Because the
          home is likely to be a consumer's largest asset, many homeowners use their credit lines only for major items such as
          education, home improvements, or medical bills—not for day-to-day expenses. With a home equity line, you will be
          approved for a specific amount of credit—your credit limit—that is the maximum amount you can borrow at any one
          time while you have the plan.
        </p>
        <p>
          Many lenders set the credit limit on a home equity line by taking a percentage (say, 75%) of the appraised value of
          the home and subtracting the balance owed on the existing mortgage.
        </p>
        <Callout label="Example">
          <p>
            A home with a $60,000 mortgage debt is appraised at $200,000. The bank sets a 75% credit limit. Thus, the
            potential credit line is $90,000 (75% of $200,000 = $150,000 - $60,000).
          </p>
        </Callout>
        <p>
          In determining your actual credit line, the lender will also consider your ability to repay by looking at your
          income, debts, other financial obligations, and your credit history.
        </p>
        <p>
          Home equity plans often set a fixed time during which you can borrow money, such as 10 years. When this period is
          up, the loan may allow you to renew the credit line. But, in a loan that does not allow renewals, you will not be
          able to borrow additional money once the time has expired. Some plans may call for payment in full of any
          outstanding balance, while others may permit you to repay over a fixed time.
        </p>
        <p>
          Once approved for the home equity plan, you will usually be able to borrow up to your credit limit whenever you
          want. Typically, you will be able to draw on your line by using special checks. Under some plans, borrowers can use a
          credit card or other means to borrow money and make purchases using the line. However, there may be limitations on
          how you use the line. Some plans may require you to borrow a minimum amount each time you draw on the line, for
          example, $300—and to keep a minimum amount outstanding.
        </p>
        <p>Some lenders also may require that you take an initial advance when you first set up the line.</p>

        <h3>Traditional Second Mortgage Loans</h3>
        <p>
          If you are thinking about a home equity line of credit you might also want to consider a more traditional second
          mortgage loan. This type of loan provides you with a fixed amount of money repayable over a fixed period. Usually,
          the payment schedule calls for equal payments that will pay off the entire loan within that time.
        </p>
        <Callout label="Tip">
          <p>
            Consider a traditional second mortgage loan instead of a home equity line if, for example, you need a set
            amount for a specific purpose, such as an addition to your home.
          </p>
        </Callout>
        <p>
          In deciding which type of loan best suits your needs, consider the costs under the two alternatives. Look at the APR
          and other charges.
        </p>
        <Callout label="Caution">
          <p>
            Do not simply compare the APR for a traditional mortgage loan with the APR for a home equity line—the APRs are
            figured differently. The APR for a traditional mortgage takes into account the interest rate charged plus
            points and other finance charges. The APR for a home equity line is based on the periodic interest rate alone. It
            does not include points or other charges.
          </p>
        </Callout>

        <h3>Automobile Loans</h3>
        <p>
          Automobile loans are among the most common types of loans today. Your automobile serves as the security for the
          loan. These loans are available not only through banks but also through automobile dealers. However, the dealer
          itself does not provide the financing; it simply routes the loan to an affiliated finance company, such as the Ally
          Financial Inc., formerly known (until 2009) as GMAC Inc., the General Motors Acceptance Corporation.
        </p>
        <Callout label="Planning aid">
          <p>
            Please see{' '}
            <a href="https://www.bankrate.com/loans/auto-loans/rates/" {...external}>
              Auto Loan Rates
            </a>{' '}
            for a reference on how to obtain an auto loan.
          </p>
        </Callout>

        <h3>Investment Loans</h3>
        <p>
          Borrowing against your securities can be a low-cost way to borrow money. No deduction is allowed for the interest
          unless the loan is used for investment or business purposes.
        </p>
        <Callout label="Caution">
          <p>
            If your margin debt exceeds 50% of the value of your securities, you will be subject to a margin call, which
            means that you will have to come up with cash or sell securities. If the market is falling at the time, a margin
            call can cause a financial disaster. Therefore, we recommend against the use of margin debt, unless the amount
            is kept way below 50%. We think 25% is a safe percentage.
          </p>
        </Callout>

        <h3>CD And Passbook Loans</h3>
        <p>
          Because the rate of interest you are earning on the CD or savings account is probably less than the interest that
          would be charged on the loan, it is usually a better idea to withdraw the money in the account (waiting until the
          term of the CD is up, to avoid penalties), than to borrow against it.
        </p>

        <h3>Loans Against 401(K) Plans And Life Insurance</h3>
        <p>
          One advantage of borrowing from a 401(k) plan or profit-sharing plan, assuming loans are permitted, is that the
          interest you pay goes back into your own pocket—right into your 401(k) or profit-sharing account. The amount of
          the loan is limited.
        </p>
        <p>
          Loans against life insurance policies used to be available at fairly low rates. If you can get a rate of 5 or 6% on
          a loan against the cash value of your life insurance policy, it is generally a good deal. If the rate is any higher
          than this, such a loan is generally not a good idea.
        </p>

        <h3>Credit Union Loans</h3>
        <p>Credit union loans may be available at lower rates than those of banks.</p>

        <h3>Banks And Savings And Loans</h3>
        <p>
          If you obtain an unsecured loan at a bank, the rate will be higher because there is no collateral. For this reason,
          unsecured bank loans are generally not attractive.
        </p>

        <h3>Credit Card Advances</h3>
        <p>These are almost always a bad idea, despite their convenience, because of the high rate you will pay.</p>
      </>
    ),
  },
  {
    id: 'how-to-shop-for-a-loan',
    title: 'How To Shop For A Loan',
    body: (
      <>
        <p>
          If you are thinking of borrowing, your first step is to figure out how much it will cost you and whether you can
          afford it. Then shop for the credit terms that best meet your borrowing needs without posing undue financial risk.
          Look carefully at the credit agreement and examine the terms and conditions of the various possibilities, including
          the annual percentage rate (APR) and the costs you will pay to establish the plan.
        </p>
        <p>
          The Truth in Lending Act requires lenders to disclose the important terms and costs of credit, including the APR,
          miscellaneous charges, the payment terms, and information about any variable-rate feature. In general, neither the
          lender nor anyone else may charge a fee until after you have received this information. Use these disclosures to
          compare the costs of loans. You usually get these disclosures when you receive an application form and you will get
          additional disclosures before the loan is made. If any term has changed before the loan is made (other than a
          variable-rate feature), the lender must usually return all fees if you decide not enter into the loan because of the
          changed term.
        </p>

        <h3>Interest Rate Charges And Loan Features</h3>
        <p>
          Credit costs vary. By remembering two terms, you can compare credit prices from different sources. Under Truth in
          Lending, the creditor must tell you, in writing and before you sign any agreement, the finance charge, and the
          annual percentage rate.
        </p>
        <ul>
          <li>
            The finance charge is the total dollar amount you pay to use credit. It includes interest costs, service
            charges, and some credit-related insurance premiums. For example, a $10,000 loan may have a 10% interest rate and
            a service charge of $100; thus, the finance charge would total $1,100.
          </li>
          <li>
            The annual percentage rate (APR) is the percentage cost (or relative cost) of credit on a yearly basis. This is
            your key to comparing costs, regardless of the amount of credit or how long you have to repay it:
          </li>
        </ul>
        <Callout label="Example">
          <p>
            You borrow $10,000 for one year at 10%. If you can keep the entire $10,000 for the whole year, and then pay back
            $11,000 at the end of the year, the APR is 10%. On the other hand, if you repay the $10,000, and the interest (a
            total of $11,000) in 12 equal monthly installments, you don't really get to use $10,000 for the whole year. In
            fact, you get to use less and less of that $10,000 each month. In this case, the $1,000 charge for credit amounts
            to an APR of 18%.
          </p>
        </Callout>
        <p>
          All creditors—banks, stores, car dealers, credit card companies, finance companies—must state the cost of their
          credit in terms of the finance charge and the APR. Federal law does not set interest rates or other credit charges.
          But it does require their disclosure so that you can compare credit costs. The law says these two pieces of
          information must be shown to you before you sign a credit contract or use a credit card.
        </p>
        <p>
          Interest rates may be either fixed or variable. A variable rate must be based on a publicly available index (such
          as the prime rate published in some major daily newspapers or a U.S. Treasury bill rate). Lenders then add a
          margin, i.e., a number of percentage points, to the index value to arrive at the interest rate you will pay. This
          interest rate will change, mirroring fluctuations in the index.
        </p>
        <Callout label="Tip">
          <p>
            Because the cost of borrowing is tied directly to the index rate, ask what index and margin each lender uses, how
            often the index changes, and how high it has risen in the past.
          </p>
        </Callout>
        <p>
          Sometimes lenders advertise a temporarily discounted rate—a rate that is unusually low and often lasts only for an
          introductory period, such as six months.
        </p>
        <p>
          Variable rate plans may have a ceiling (or cap) on how high your interest rate can climb over the life of the loan.
          Some variable-rate plans limit how much your payment may increase and how low your interest rate may fall if
          interest rates drop. Some lenders may permit you to convert a variable rate to a fixed interest rate during the life
          of the plan or to convert all or a portion of your line to a fixed-term installment loan.
        </p>
        <p>
          With a variable rate, your monthly payments may change. Assume, for example, that you borrow $10,000 under a loan
          that calls for interest-only payments. At a 10% interest rate, your initial payments would be $83 monthly. If the
          rate should rise over time to 15%, your payments will increase to $125 per month. Even with payments that cover
          interest plus some portion of the principal, there could be a similar increase in your monthly payment, unless the
          agreement calls for keeping payments level throughout the plan.
        </p>
        <p>
          Agreements generally will permit the lender to freeze or reduce your credit line under certain circumstances. For
          example, some variable-rate plans may not allow you to get additional funds during any period the interest rate
          reaches the cap.
        </p>

        <h3>Repaying The Loan</h3>
        <p>
          Consider how you will pay back any money you might borrow. Some plans set minimum payments that cover a portion of
          the principal of the amount you borrow plus accrued interest. But, unlike the typical installment loan, the portion
          that goes toward principal may not be enough to repay the debt by the end of the term. Other plans may allow
          payments of interest alone during the life of the plan, which means that you pay nothing toward the principal. Thus,
          if you borrow $10,000, you will owe that entire sum when the loan ends.
        </p>
        <p>
          Regardless of the minimum payment required, you can usually pay more than the minimum. Many lenders may give you a
          choice of payment options.
        </p>
        <p>
          Whatever your payment arrangements during the life of the loan—whether you pay some, a little, or none of the
          principal amount of the loan you may have to pay the entire balance owed when the loan ends, all at once. You must
          be prepared to make this &ldquo;balloon&rdquo; payment by refinancing it with the lender, by obtaining a loan from
          another lender, or by some other means. If you are unable to make the balloon payment, you could lose any security
          given for the loan (e.g., your home or car).
        </p>
      </>
    ),
  },
  {
    id: 'comparing-loans',
    title: 'Comparing Loans',
    body: (
      <>
        <p>
          Even when you understand the terms a creditor is offering, it is easy to underestimate the difference in dollars
          that different terms can make. Suppose you are going to borrow $6,000. Compare the three credit arrangements below:
        </p>
        <ArticleTable label="Comparing loans" wide>
          <thead>
            <tr>
              <th scope="col">Creditor</th>
              <th scope="col">APR</th>
              <th scope="col">Length of Loan</th>
              <th scope="col">Monthly Payment</th>
              <th scope="col">Total Finance Charges</th>
              <th scope="col">Total of Payments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Creditor A</th>
              <td>14%</td>
              <td>3 years</td>
              <td>$205.07</td>
              <td>$1,382.52</td>
              <td>$7,382.52</td>
            </tr>
            <tr>
              <th scope="row">Creditor B</th>
              <td>14%</td>
              <td>4 years</td>
              <td>$163.96</td>
              <td>$1,870.08</td>
              <td>$7,870.08</td>
            </tr>
            <tr>
              <th scope="row">Creditor C</th>
              <td>15%</td>
              <td>4 years</td>
              <td>$166.98</td>
              <td>$2,015.00</td>
              <td>$8,015.04</td>
            </tr>
          </tbody>
        </ArticleTable>
        <p>How do these choices stack up? The answer depends partly on what you need.</p>
        <ul>
          <li>The lowest cost loan (total payments) is available from Lender A.</li>
          <li>
            If you were looking for the lowest monthly payments, that would be available from Lender B. This is because you
            are paying the loan off over a longer period of time. However, you would have to pay more in total costs. The loan
            from Lender B—also at a 14% APR but for four years—will add about $488 to your finance charge.
          </li>
          <li>
            If that four-year loan were available only from Lender C, the APR of 15% would add another $145 or so to your
            finance charges as compared with Lender B.
          </li>
        </ul>
        <p>
          Other terms, such as the size of the down payment, will also make a difference. Be sure to look at all the terms
          before you make your choice.
        </p>
      </>
    ),
  },
  {
    id: 'home-equity-loans',
    title: 'Home Equity Loans',
    body: (
      <>
        <p>
          Before signing for a home equity line of credit or other type of home equity loan, weigh carefully the costs of a
          home equity debt against the benefits. Remember, failure to repay the line could mean the loss of your home.
        </p>
        <p>Many of the costs of setting up a home equity line of credit are similar to those you pay when you buy a home, such as:</p>
        <ul>
          <li>A fee for a property appraisal, which estimates the value of your home;</li>
          <li>An application fee, which may not be refundable if you are turned down for credit;</li>
          <li>Up-front charges, such as one or more points (one point equals one percent of the credit limit);</li>
          <li>
            Other closing costs, which include fees for attorneys, title search, mortgage preparation and filing, property
            and title insurance, as well as taxes; and
          </li>
          <li>Yearly membership or maintenance fees.</li>
        </ul>
        <p>You also may be charged a transaction fee every time you draw on the credit line.</p>
        <p>
          You could find yourself paying hundreds of dollars to establish the plan. If you were to draw only a small amount
          against your credit line, those charges and closing costs would substantially increase the cost of the funds
          borrowed. On the other hand, the lender's risk is lower than for other forms of credit because your home serves as
          collateral. Thus, annual percentage rates for home equity lines are generally lower than rates for other types of
          credit. The interest you save could offset the initial costs of obtaining the line. In addition, some lenders may
          waive a portion or all of the closing costs.
        </p>
      </>
    ),
  },
];

export default function ApplyingForALoan() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/dealing-with-your-bank"
      page="Applying For a Loan"
      title={<>Applying For a Loan: <em>How To Get The Best Loan At The Lowest Cost</em></>}
      lead="Debt should be incurred with caution. Yet there are ways to take advantage of your available credit to enjoy a purchase, make an investment, or take care of an emergency. Here is a guide to finding out which form of borrowing will best suit your needs as well as some pointers on finding the lowest-cost loan available."
      sections={sections}
    />
  );
}
