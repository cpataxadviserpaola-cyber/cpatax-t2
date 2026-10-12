import GuideArticle, { ArticleTable, Callout, FigureTable } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=52 (Home Equity Loans: How To Shop For The One That
// Is Best For You), word for word. Back-to-top anchors omitted (handled by layout). The first
// section takes its heading's wording, "What Is a Home Equity Line Of Credit (HELOC)?", not the
// table of contents' "What Is A Home Equity Line Of Credit?". Hyphens used as dashes are now dashes,
// "1-1/2" is "1½", "pay back 11,000" is "$11,000", and the "Tip", "Caution" and "Example" boxes
// keep the library's labels (some of its tips have no "Tip:" lead-in; they are tips all the same).
// Address: /guides/life-events/getting-a-loan/home-equity-loans (articlePages in
// src/data/guides.js). The guide's earlier address under Preparing for College redirects here.

const sections = [
  {
    id: 'what-is-a-heloc',
    title: 'What Is a Home Equity Line Of Credit (HELOC)?',
    body: (
      <>
        <p>
          A home equity line of credit (also called a home equity plan) is a form of revolving credit in which your
          home serves as collateral. Because the home is likely to be a consumer's largest asset, many homeowners use
          their credit lines only for major items such as education, home improvements, or medical bills—not for
          day-to-day expenses.
        </p>
        <Callout label="Caution">
          <p>
            For tax years 2018 through 2025 interest on home equity loans is only deductible when the loan is used to
            buy, build or substantially improve the taxpayer's home that secures the loan. Prior to 2018, many
            homeowners took out home equity loans. Unlike other consumer-related interest expenses (e.g., car loans and
            credit cards) interest on a home equity loan was deductible on your tax return.
          </p>
        </Callout>
        <p>
          With a HELOC, you are approved for a specific amount of credit, which is referred to as your credit limit. A
          line of credit is the maximum amount you can borrow at any one time while you have the home equity plan.
        </p>
        <p>
          Many lenders set the credit limit on a home equity line by taking a percentage (75 percent in this example) of
          the appraised value of the home and subtracting the balance owed on the existing mortgage. For example:
        </p>
        <ArticleTable label="Example of a potential credit line">
          <tbody>
            <tr>
              <td>Appraisal of home</td>
              <td className="is-amount">$100,000</td>
            </tr>
            <tr>
              <td>Percentage</td>
              <td className="is-amount">x 75%</td>
            </tr>
            <tr>
              <td>Percentage of appraised value</td>
              <td className="is-amount">$75,000</td>
            </tr>
            <tr>
              <td>Less mortgage debt</td>
              <td className="is-amount">− 40,000</td>
            </tr>
            <tr className="is-total">
              <td>Potential credit line</td>
              <td className="is-amount">$35,000</td>
            </tr>
          </tbody>
        </ArticleTable>
        <p>
          In determining your actual credit line, the lender will also consider your ability to repay by looking at
          your income, debts, and other financial obligations, as well as your credit history.
        </p>
        <p>
          Home equity plans often set a fixed time during which you can borrow money, such as ten years. When this
          period is up, the plan may allow you to renew the credit line. But in a plan that does not allow renewals,
          you will not be able to borrow additional money once the time has expired. Some plans may call for payment in
          full of any outstanding balance. Others may permit you to repay over a fixed time.
        </p>
        <p>
          Once approved for the home equity plan, you will usually be able to borrow up to your credit limit whenever
          you want. Typically, you will be able to draw on your line by using special checks.
        </p>
        <p>
          Under some plans, borrowers can use a credit card or other means to borrow money and make purchases using the
          line. However, there may be limitations on how you use the line. Some plans may require you to borrow a
          minimum amount each time you draw on the line—for example, $300—and to keep a minimum amount outstanding.
          Some lenders also may require that you take an initial advance when you first set up the line.
        </p>
      </>
    ),
  },
  {
    id: 'what-to-look-for',
    title: 'What to Look For',
    body: (
      <>
        <p>
          If you decide to apply for a HELOC, look carefully at the credit agreement. Examine the terms and conditions
          of various plans, including the annual percentage rate (APR) and the costs you will pay to establish the
          plan.
        </p>
        <Callout label="Tip">
          <p>
            The disclosed APR will not reflect the closing costs and other fees and charges, so compare these costs, as
            well as the APRs, among lenders.
          </p>
        </Callout>

        <h3>Interest Rate Charges and Plan Features</h3>
        <p>
          Home equity plans typically involve variable interest rates rather than fixed rates. A variable rate must be
          based on a publicly available index (such as the prime rate published in some major daily newspapers or a
          U.S. Treasury bill rate). The interest rate will change, mirroring fluctuations in the index.
        </p>
        <p>To figure the interest rate that you will pay, most lenders add a margin, such as 2 percentage points, to the index value.</p>
        <Callout label="Tip">
          <p>
            Because the cost of borrowing is tied directly to the index rate, find out what index and margin each lender
            uses, how often the index changes, and how high it has risen in the past.
          </p>
        </Callout>
        <p>
          Sometimes lenders advertise a temporarily discounted rate for home equity lines—a rate that is unusually low
          and often lasts only for an introductory period, such as six months.
        </p>
        <p>
          Variable rate plans secured by a dwelling must have a ceiling (or cap) on how high your interest rate can
          climb over the life of the plan. Some variable-rate plans limit how much your payment may increase, and also
          how low your interest rate may fall if interest rates drop.
        </p>
        <p>
          Some lenders may permit you to convert a variable rate to a fixed interest rate during the life of the plan,
          or to convert all or a portion of your line to a fixed-term installment loan.
        </p>
        <p>
          Agreements generally will permit the lender to freeze or reduce your credit line under certain circumstances.
          For example, some variable-rate plans may not allow you to get additional funds during any period the
          interest rate reaches the cap.
        </p>
      </>
    ),
  },
  {
    id: 'costs',
    title: 'Costs of Obtaining a Home Equity Line',
    body: (
      <>
        <p>
          Many of the costs in setting up a home equity line of credit are similar to those you pay when you buy a
          home, such as:
        </p>
        <ul>
          <li>A fee for a property appraisal, which estimates the value of your home</li>
          <li>An application fee, which may not be refundable if you are turned down for credit</li>
          <li>Up-front charges, such as one or more points (one point equals one percent of the credit limit)</li>
          <li>
            Other closing costs, which include fees for attorneys, title search, mortgage preparation and filing,
            property and title insurance, as well as taxes
          </li>
          <li>Yearly membership or maintenance fees</li>
        </ul>
        <p>You also may be charged a transaction fee every time you draw on the credit line.</p>
        <p>
          You could find yourself paying hundreds of dollars to establish the plan. If you were to draw only a small
          amount against your credit line, those charges, and closing costs would substantially increase the cost of
          the funds borrowed.
        </p>
        <p>
          On the other hand, the lender's risk is lower than for other forms of credit because your home serves as
          collateral. Thus, annual percentage rates for home equity lines are generally lower than rates for other
          types of credit.
        </p>
        <p>
          The interest you save could offset the initial costs of obtaining the line. In addition, some lenders may
          waive a portion or all of the closing costs.
        </p>
      </>
    ),
  },
  {
    id: 'repaying',
    title: 'How will You Repay Your Home Equity Plan',
    body: (
      <>
        <p>
          Before entering into a plan, consider how you will pay back any money you might borrow. Some plans set
          minimum payments that cover a portion of the principal of the amount you borrow plus accrued interest. But,
          unlike the typical installment loan, the portion that goes toward principal may not be enough to repay the
          debt by the end of the term. Other plans may allow payments of interest alone during the life of the plan,
          which means that you pay nothing toward the principal. If you borrow $10,000, you will owe that entire sum
          when the plan ends.
        </p>
        <p>
          Regardless of the minimum payment required, you can pay more than the minimum and many lenders may give you a
          choice of payment options. Consumers often will choose to pay down the principal regularly as they do with
          other loans. For example, if you use your line to buy a boat, you may want to pay it off as you would a
          typical boat loan.
        </p>
        <p>
          Whatever your payment arrangements during the life of the plan whether you pay some, a little, or none of the
          principal amount of the loan when the plan ends you may have to pay the entire balance owed all at once. You
          must be prepared to make this balloon payment by either refinancing it with the lender, obtaining a loan from
          another lender, or some other means. If you are unable to make the balloon payment, you could lose your home.
        </p>
        <p>
          With a variable rate, your monthly payments may change. Assume, for example, that you borrow $10,000 under a
          plan that calls for interest-only payments. At a 10 percent interest rate, your initial payments would be $83
          monthly. If the rate should rise over time to 15 percent, your payments will increase to $125 per month.
        </p>
        <p>
          Even with payments that cover interest plus some portion of the principal, there could be a similar increase
          in your monthly payment, unless the agreement calls for keeping payments level throughout the plan.
        </p>
        <p>
          When you sell your home, you probably will be required to pay off your home equity line in full. If you are
          likely to sell your house in the near future, consider whether it makes sense to pay the up-front costs of
          setting up an equity credit line. Also, keep in mind that leasing your home may be prohibited under the terms
          of your home equity agreement.
        </p>
      </>
    ),
  },
  {
    id: 'second-mortgage',
    title: 'Line Of Credit vs. Traditional Second Mortgage',
    body: (
      <>
        <p>
          If you are thinking about a home equity line of credit, you also might want to consider a more traditional
          second mortgage loan. This type of loan provides you with a fixed amount of money repayable over a fixed
          period. Usually, the payment schedule calls for equal payments that will pay off the entire loan within that
          time.
        </p>
        <Callout label="Tip">
          <p>
            Consider a traditional second mortgage loan instead of a home equity line of credit if, for example, you
            need a set amount for a specific purpose, such as an addition to your home.
          </p>
        </Callout>
        <p>
          When deciding which type of loan best suits your needs, consider the costs under the two alternatives. Look
          at the APR and other charges.
        </p>
        <Callout label="Tip">
          <p>
            Do not simply compare the APR for a traditional mortgage loan with the APR for a home equity line of credit
            because the APRs are figured differently. For a traditional mortgage, the APR takes into account the
            interest rate charged plus points and other finance charges. The APR for a HELOC, on the other hand, is
            based on the periodic interest rate alone and does not include points or other charges.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'compare-costs',
    title: 'How to Compare Costs',
    body: (
      <>
        <p>
          The Truth in Lending Act requires lenders to disclose the important terms and costs of their home equity
          plans, including the APR, miscellaneous charges, the payment terms, and information about any variable-rate
          feature. In general, neither the lender nor anyone else may charge a fee until after you have received this
          information. Use these disclosures to compare the costs of home equity loans.
        </p>
        <p>
          You usually get these disclosures when you receive an application form, and you will get additional
          disclosures before the plan is opened. If any term has changed before the plan is opened (other than a
          variable-rate feature), the lender must return all fees if you decide not to enter into the plan because of
          the changed term.
        </p>
        <Callout label="Caution">
          <p>
            When you open a home equity line of credit the transaction puts your home at risk. For your principal
            dwelling, the Truth in Lending Act gives you three days from the day the account was opened to cancel the
            credit line. This right allows you to change your mind for any reason. You simply inform the creditor in
            writing within the three-day period. The creditor must then cancel the security interest in your home and
            return all fees—including any application and appraisal fees—paid in opening the account.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'finance-charge-and-apr',
    title: 'The Finance Charge and the Annual Percentage Rate (APR)',
    body: (
      <>
        <p>
          Credit costs vary. By remembering two terms, you can compare credit prices from different sources. Under
          Truth in Lending, the creditor must tell you—in writing and before you sign any agreement—the finance charge
          and the annual percentage rate.
        </p>
        <p>
          The finance charge is the total dollar amount you pay to use credit. It includes interest costs, and other
          costs, such as service charges and some credit-related insurance premiums. For example, borrowing $10,000 for
          a year might cost you $1,000 in interest. If there were also a service charge of $100, the finance charge
          would be $1,100.
        </p>
        <p>
          The annual percentage rate (APR) is the percentage cost (or relative cost) of credit on a yearly basis. This
          is your key to comparing costs, regardless of the amount of credit or how long you have to repay it:
        </p>
        <Callout label="Example">
          <p>
            You borrow $10,000 for one year at a 10 percent interest rate. If you keep the entire $10,000 for the whole
            year and then pay back $11,000 at the end of the year, the APR is 10 percent. On the other hand, if you
            repay the $10,000, and the interest (a total of $11,000) in 12 equal monthly installments, you don't really
            get to use $10,000 for the whole year. In fact, you get to use less and less of that $10,000 each month. In
            this case, the $1,000 charge for credit amounts to an APR of 18 percent.
          </p>
        </Callout>
        <p>
          All creditors including banks, stores, car dealers, credit card companies, and finance companies must state
          the cost of their credit in terms of the finance charge and the APR. Federal law does not set interest rates
          or other credit charges. But it does require their disclosure so that you can compare credit costs. The law
          says that these two pieces of information must be shown to you before you sign a credit contract or before
          you use a credit card.
        </p>
      </>
    ),
  },
  {
    id: 'comparing-loan-terms',
    title: 'Comparing Loan Terms',
    body: (
      <>
        <p>
          Even when you understand the terms a creditor is offering, it is easy to underestimate the difference in
          dollars that different terms can make. Consider the three credit arrangements below. Suppose you are going to
          borrow $6,000. How do these choices stack up? The answer depends partly on what you need.
        </p>
        <p>The lowest cost loan is available from Lender A.</p>
        <FigureTable
          label="Three ways to borrow $6,000"
          columns={['', 'APR', 'Length of Loan', 'Monthly Payments', 'Total Finance Charges', 'Total of Payments']}
          rows={[
            ['Creditor A', '14%', '3 years', '$205.07', '$1,382.52', '$7,382.52'],
            ['Creditor B', '14%', '4 years', '$163.96', '$1,870.08', '$7,870.08'],
            ['Creditor C', '15%', '4 years', '$166.98', '$2,015.04', '$8,015.04'],
          ]}
          wide
        />
        <p>
          If you were looking for lower monthly payments, you could get them by paying the loan off over a longer
          period of time. However, you would have to pay more in total costs. A loan from Lender B—also at a 14 percent
          APR, but for four years—will add about $488 to your finance charge.
        </p>
        <p>
          If that four-year loan were available only from Lender C, the APR of 15 percent would add another $145 or so
          to your finance charges as compared with Lender B.
        </p>
        <p>
          Other terms, such as the size of the down payment, will also make a difference. Be sure to look at all the
          terms before you make your choice.
        </p>
      </>
    ),
  },
  {
    id: 'special-considerations',
    title: 'Special Considerations',
    body: (
      <>
        <p>
          A home equity line of credit is open-end credit, similar to bank and department store credit cards, gasoline
          company cards, and certain check overdraft accounts. Open-end credit can be used again and again, generally
          until you reach a certain prearranged borrowing limit. The Truth in Lending Act requires that open-end
          creditors tell you the terms of the credit plan so that you can shop and compare the costs involved.
        </p>
        <p>
          When you are shopping for an open-end plan, the APR represents only the periodic rate that you will be
          charged, which is figured on a yearly basis. For instance, a creditor that charges 1½ percent interest each
          month would quote you an APR of 18 percent. Annual membership fees, transaction charges, and points, for
          example, are listed separately and are not included in the APR. Be sure to keep all of these in mind when
          comparing all of the costs involved in the plans.
        </p>
        <p>
          Creditors must tell you when finance charges begin on your account, so you know how much time you have to pay
          your bill before a finance charge is added. Creditors may give you a 25-day grace period, for example, to pay
          your balance in full before making you pay a finance charge.
        </p>
        <p>
          Creditors also must tell you the method they use to figure the balance on which you pay a finance charge; the
          interest rate they charge is applied to this balance to come up with the finance charge. Creditors use a
          number of different methods to arrive at the balance. Study them carefully as they can significantly affect
          your finance charge.
        </p>
        <ul>
          <li>
            <em>Adjusted balance method.</em> Some creditors, for instance, take the amount you owed at the beginning of
            the billing cycle and subtract any payments you made during that cycle. Purchases are not counted. This
            practice is called the adjusted balance method.
          </li>
          <li>
            <em>Previous balance method.</em> With this method, creditors simply use the amount owed at the beginning of
            the billing cycle to come up with the finance charge.
          </li>
          <li>
            <em>Average daily balance method.</em> Under one of the most common methods, the average daily balance
            method, creditors add your balances for each day in the billing cycle and then divide that total by the
            number of days in the cycle. Payments made during the cycle are subtracted in arriving at the daily amounts,
            and, depending on the plan, new purchases may or may not be included. Under another method, the two-cycle
            average daily balance method, creditors use the average daily balances for two billing cycles to compute
            your finance charge. Again, payments will be taken into account in figuring the balances, but new purchases
            may or may not be included.
          </li>
        </ul>
        <p>
          One final note: Be aware that the amount of the finance charge may vary considerably depending on the method
          used even for the same pattern of purchases and payments.
        </p>
      </>
    ),
  },
];

export default function HomeEquityLoans() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-a-loan"
      page="Home Equity Loans"
      title={
        <>
          Home Equity Loans: <em>How To Shop For The One That Is Best For You</em>
        </>
      }
      lead="By using the equity in your home, you may qualify for a home equity line of credit (HELOC), a sizable amount of credit that is available to you to use when you need it, and, at a relatively low interest rate. Furthermore, under the tax law, and depending on your specific situation, you may be allowed to deduct the interest because the debt is secured by your home. This Financial Guide provides the information you need to determine which home equity loan is right for you."
      sections={sections}
      numbered={false}
    >
      <p>
        Before signing for a home equity loan, such as a line of credit, carefully weigh the costs of a home equity
        debt against the benefits. If you are thinking of borrowing, your first step is to figure out how much it will
        cost you and whether you can afford it. Then shop around for the best terms, i.e., those that best meet your
        borrowing needs without posing an undue financial risk. And, remember, failure to repay the line of credit could
        mean the loss of your home.
      </p>
    </GuideArticle>
  );
}
