import GuideArticle, { ArticleTable, Blank, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=10 (Your Financial Plan: Getting Started On a
// Secure Future), word for word. Hyphens used as dashes are now dashes, related guides are
// named by their titles in the library, and the worksheets' blanks are write-in lines, with a
// dollar sign only where an amount goes. The savings worksheet has five rows (one in the
// original), one per goal.
// Address: /guides/life-events/getting-married/your-financial-plan (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');
const investing = guide('investment-strategies.php', 28);

const assets = [
  'Checking accounts',
  'Savings accounts',
  'Brokerage accounts',
  'Money market accounts',
  'Certificates of deposit',
  'IRA accounts',
  'Keogh accounts',
  '401(k) plans',
  'Pension plans',
  'Other retirement accounts',
  'Life insurance (cash values)',
  'Annuities',
  'Bonds (government)',
  'Bonds (corporate)',
  'Mutual funds',
  'Stocks',
  'Other securities',
  'Money owed to you',
  'Home',
  'Other real estate',
  'Automobiles',
  'Household furnishings',
  'Jewelry',
  'Other assets',
];

const liabilities = [
  'Home mortgage',
  'Other mortgages',
  'Automobile loans',
  'Credit card balances',
  'Installment accounts',
  'Contractual obligations',
  'Money owed to others',
  'Income taxes',
  'Pledges',
  'Other debts',
];

const income = [
  'Salary/Wages',
  'Interest/Dividends',
  'Social Security',
  'Retirement Plans',
  'Reimbursements (only if included as an expense)',
  'Sale of investments',
  'Other income',
];

const expenses = [
  'Savings (including pension plan contributions)',
  'Income taxes',
  'Property taxes',
  'Insurance (health, disability, life, car, home)',
  'Mortgage/rent',
  'Other debt payments',
  'Utilities (heat, electric, water, garbage, phone)',
  'Transportation',
  'Vacation',
  'Medical (other than insurance)',
  'Personal (small cash expenditures, such as haircuts)',
  'Charitable contributions',
  'Food',
  'Restaurants',
  'Recreation',
  'Holiday expenses',
  'Gifts',
  'Education',
  'Clothing',
  'Other (children, professional fees, hobbies, etc.—if large expenditures, create a line item for each)',
  'Miscellaneous',
];

// Blank rows for a worksheet.
const rows = (count) => Array.from({ length: count }, (_, index) => index);

// A statement with Total, Self, and Spouse columns: a row per item, then the totals.
function Statement({ heading, items, totals }) {
  return (
    <ArticleTable label={heading} wide>
      <colgroup>
        <col className="article-col-label" />
        <col span={3} />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">{heading}</th>
          <th scope="col">Total</th>
          <th scope="col">Self</th>
          <th scope="col">Spouse</th>
        </tr>
      </thead>
      <tbody>
        {[...items, ...totals].map((item) => (
          <tr className={totals.includes(item) ? 'is-total' : undefined} key={item}>
            <td>{item}</td>
            <Blank amount />
            <Blank amount />
            <Blank amount />
          </tr>
        ))}
      </tbody>
    </ArticleTable>
  );
}

const sections = [
  {
    id: 'goals',
    title: 'Identify Your Goals',
    body: (
      <>
        <p>
          Spend some time thinking and talking with family members about what you would like to achieve
          financially. What would make you and them happy? What would be fulfilling? Would you like to
          start your own business? Retire early? Acquire a vacation home? Pursue a hobby? Travel?
        </p>
        <p>
          Perhaps you'd like to change careers, and you'll need money to finance an education in a
          different field. Or perhaps you'd like to have a large amount of money to give to your favorite
          charity. Once you've got some idea of what you'd like to accomplish, fill out the Goals
          Worksheet below.
        </p>
        <ul>
          <li>
            The "Goals" section should state what you'd like to accomplish. Be as specific as possible,
            e.g., instead of writing "Acquire a bigger home," write "Acquire a home with at least 12 rooms
            in Anytown."
          </li>
          <li>
            The "Amount Needed" should be an estimate of the amount of money you'll need. For instance, to
            retire early, you might estimate that you'll need a $1,000,000 nest egg by the time you reach
            age 50, or to buy a vacation home, you might estimate that you'll need a $50,000 down payment.
          </li>
          <li>
            The "Target Date" section should include the approximate year or, in the case of short-term
            goals such as a vacation in the current year, the month in which you would like to achieve
            your goal.
          </li>
        </ul>
        <ArticleTable label="Goals worksheet">
          <thead>
            <tr>
              <th scope="col">Goals</th>
              <th scope="col">Amount Needed</th>
              <th scope="col">Target Date</th>
            </tr>
          </thead>
          <tbody>
            {rows(10).map((row) => (
              <tr key={row}>
                <Blank />
                <Blank amount />
                <Blank />
              </tr>
            ))}
          </tbody>
        </ArticleTable>
      </>
    ),
  },
  {
    id: 'net-worth',
    title: 'Determine Your Net Worth',
    body: (
      <>
        <p>
          Your financial plan should include an inventory of the existing financial resources you'll be
          using to achieve the goals you decided on above.
        </p>
        <p>
          Fill out the personal statement of net worth below. This will enable you to estimate the value
          of everything you own, minus the value of your debts. When asked for a value, use what the
          property would fetch if you sold it today at its market value.
        </p>
        <p>
          It may take some time to do this, but the effort will be worth it. This is the foundation for
          your financial plan.
        </p>

        <h3>Financial Statement</h3>
        <p className="article-fill">
          Date: <span className="article-line" />
        </p>
        <Statement heading="Assets (Current Value)" items={assets} totals={['Total Assets']} />
        <Statement
          heading="Liabilities (Current Value)"
          items={liabilities}
          totals={[
            'Total Liabilities',
            'Total Assets (from above)',
            'Less Liabilities (from above)',
            'Net Worth (Assets less Liabilities)',
          ]}
        />
        <p>
          This statement should be reviewed to determine which assets are available to achieve the goals
          you listed above. If most of your net worth is tied up in your home and personal use assets
          (such as furniture and cars), you may not be able to achieve your goals. Which assets are
          available to invest towards your goals? Are they sufficient? If not, you may need to liquidate
          other assets or start a savings plan out of your cash flow to come up with the necessary funds.
        </p>
      </>
    ),
  },
  {
    id: 'cash-flow',
    title: 'Determine Your Cash Flow',
    body: (
      <>
        <p>
          Once you've completed the net worth statement, fill in the cash flow statement below. This will
          give you an estimate of what you earn per year—your salary, investment income, and retirement
          income and what your current expenses are. To fill out this form, it will help to have on hand
          your check register and one year's worth of credit card receipts.
        </p>
        <p>
          Here's why the cash flow statement is so important: once you know how much is coming in and how
          much of it is going out in the form of expenses, you can start to make adjustments in your
          discretionary expenses in order to meet your saving and investment goals.
        </p>

        <h3>Cash Flow Statement</h3>
        <p className="article-fill">
          Period: <span className="article-line" /> to <span className="article-line" />
        </p>
        <Statement heading="Income" items={income} totals={['Total Income']} />
        <Statement heading="Expenses" items={expenses} totals={['Total Expenses']} />
        <Callout label="Note">
          <p>Omit one-time, non-recurring items as they should not be used for budgeting or future planning.</p>
        </Callout>
        <p>
          How much cash flow is available to accumulate assets for the goals identified above? Is it
          sufficient in combination with your available assets from your net worth statement? If not, you
          need to examine the above expenses in detail and cut back on those which are discretionary until
          sufficient cash flow is identified.
        </p>
      </>
    ),
  },
  {
    id: 'plan',
    title: 'Plan To Achieve Your Goals',
    body: (
      <>
        <p>
          Now that you know what your goals are and have an idea of your financial resources, it's time to
          begin making a plan.
        </p>

        <h3>Financial Safety Net</h3>
        <p>
          Determine the funds you'll need in case of a disaster or emergency. Coverage of such
          contingencies comes from insurance and from an emergency fund.
        </p>

        <h3>Emergency Fund</h3>
        <p>
          You should have a fund of three to six months (we'll leave the number of months to your
          judgment) worth of living expenses to tide you over in case you lose your job or have unexpected
          bills. The emergency fund should be kept in an accessible account: a money market account is
          good for this purpose.
        </p>

        <h3>Life Insurance</h3>
        <p>
          Make sure your coverage is adequate. You should have enough coverage, should a catastrophe occur
          to ensure your family would continue to enjoy the same level of income it does currently.
        </p>

        <h3>Disability Insurance</h3>
        <p>
          Disability insurance is intended to replace lost income due to the occurrence of illness or
          accident. Consider whether you need to provide coverage for your family.
        </p>
        <RelatedGuide
          guides={[
            related([48, 'Disability Insurance: What To Look For']),
            related([49, "Disability Benefits: How To Get All You're Entitled To"]),
          ]}
        >
          Please see the Financial Guides:
        </RelatedGuide>

        <h3>Auto, Home, and Health Insurance</h3>
        <p>
          It's important to make sure these types of policies provide adequate coverage. If not, an
          accident or other catastrophe could wipe out a large portion of your assets or cash flow and you
          may be unable to achieve your goals.
        </p>
        <RelatedGuide guide={related([64, "Homeowner's Insurance: How To Get The Best Coverage and Value"])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'how-much',
    title: "Establish How Much You'll Need",
    body: (
      <>
        <p>
          Once you have covered your insurance and emergency-fund needs, you can start working towards
          your financial goals.
        </p>
        <p>
          Go back to your Goals Worksheet (above) and enter the goal in the Worksheet below. For each
          goal, estimate the "Cost of the Goal," i.e., the cost of achieving that goal. For instance, if
          you want to retire at age 55, estimate the nest egg you'll need to accumulate by then. (Don't
          bother accounting for inflation right now; this is just an estimate.)
        </p>
        <p>
          Then fill in the "Amount On Hand," i.e., the amount you have already saved for that purpose. For
          instance, if you have $10,000 in a mutual fund IRA, you might wish to allocate that amount to
          your retirement nest egg.
        </p>
        <p>
          Next, write in the "Amount Still Needed." Then, fill in the "Years to Target Date," i.e., the
          year you want to achieve your goal. Finally, enter the "Intended Yearly Savings," the amount you
          need to save each year (the "Amount Still Needed" divided by the "Years to Target Date").
        </p>
        <ArticleTable label="Savings worksheet" wide>
          <thead>
            <tr>
              <th scope="col">Goal</th>
              <th scope="col">Cost of the goal</th>
              <th scope="col">Amount on hand</th>
              <th scope="col">Amount still needed</th>
              <th scope="col">Years to target date</th>
              <th scope="col">Intended yearly savings</th>
            </tr>
          </thead>
          <tbody>
            {rows(5).map((row) => (
              <tr key={row}>
                <Blank />
                <Blank amount />
                <Blank amount />
                <Blank amount />
                <Blank />
                <Blank amount />
              </tr>
            ))}
          </tbody>
        </ArticleTable>
        <p>
          Add up the "Intended Yearly Savings," i.e., the yearly amounts you need to save, in the extreme
          right-hand column. Look back at the "Savings" amount in the expense portion of your cash flow
          statement (above). How much <em>are</em> you currently saving? How does this compare with how
          much you <em>need</em> to save to meet your goals?
        </p>
        <p>Most people find that the amount they are saving is inadequate.</p>
        <Callout label="Tip">
          <p>Here are some ways that you might increase the amount you are saving each year:</p>
          <ul>
            <li>Pay yourself first. Save and invest at least 10 percent of your after tax income.</li>
            <li>If possible, earn more or spend less. Put a stop to discretionary spending.</li>
          </ul>
        </Callout>
        <p>
          You might also want to take another look at your goals. Perhaps they need to be modified or the
          target dates need to be deferred.
        </p>
      </>
    ),
  },
  {
    id: 'action',
    title: 'Put the Plan into Action',
    body: (
      <>
        <p>
          Make a savings plan. How will you save the amounts you have targeted? Will you have them
          deducted from your paycheck? Will you deposit them into a savings account each month?
        </p>
        <p>
          Once you've accumulated a chunk of savings for each goal, you'll need an investment strategy.
          For each goal, determine how much risk you are willing to take with your savings. This will
          depend on how much of the money you can afford to lose, how essential the goal is, and your own
          risk preferences.
        </p>
        <p>
          You may have read recently about asset allocation, and wondered whether an investor such as
          yourself needed to worry about this concept. The answer is a resounding yes. Asset
          allocation—not fund or security selection, not market timing—is the most important factor in
          determining how much money you make on your investments. In fact, according to
          Nobel-Prize-winning research, asset allocation—the type or class of security owned—determines 90
          percent of the return. The remaining 10 percent of the return is determined by which particular
          stock, bond, or mutual fund you select, and when you decide to buy it. In short, asset allocation
          and diversification are the cornerstones of good investing.
        </p>
        <RelatedGuide guide={investing([84, 'Asset Allocation: How To Diversify For Maximum Return'])}>
          For a comprehensive discussion of asset allocation, please see the Financial Guide:
        </RelatedGuide>
        <p>Here, in a nutshell, are the three most important things an investor can do:</p>
        <ol>
          <li>
            Establish a financial profile. Your financial profile is the translation of your goals, risk
            threshold, and time horizon into a graph or curve, using a computer software program. The
            three factors we just mentioned are plotted on a graph according to the program's formulas.
          </li>
          <li>
            Find the right mix of "asset classes" for your portfolio. The right mix of asset classes will
            balance each other in a way that will give the best possible return for the amount of risk you
            are willing to take. Using computer programs, asset allocation professionals will determine the
            proper mix of assets for your financial profile. Over time, the ideal allocation for you will
            not remain the same; it will change as your situation changes, or in response to changes in
            market conditions.
          </li>
          <li>Choose investments from each class, based on performance and costs.</li>
        </ol>

        <h3>How Does Asset Allocation Work?</h3>
        <p>
          Using computerized formulas, asset allocator's take down information they glean from a
          questionnaire you have filled out. This information gives them what they need to become familiar
          with your needs, constraints, and unique circumstances. The following factors should become
          apparent from the questionnaire.
        </p>
        <ul>
          <li>Your risk threshold (how much of your capital you are willing to lose during a given time frame),</li>
          <li>Your goals (whatever financial planning goals you and your family want to achieve), and</li>
          <li>Your investing time horizon (mainly, your age and retirement objectives).</li>
        </ul>
        <p>
          In addition, the professional needs to consider how wealthy you are, what your income tax bracket
          is, how much of your portfolio needs to be kept liquid, and how often withdrawals will be made
          from the portfolio.
        </p>
        <p>
          The allocator's goal now is to come up with the right blend of six or seven asset classes, in
          the right percentages, that will match your financial profile—your risk profile and time
          horizon.
        </p>
      </>
    ),
  },
];

export default function YourFinancialPlan() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Your Financial Plan"
      title={
        <>
          Your Financial Plan: <em>Getting Started On a Secure Future</em>
        </>
      }
      lead="This Financial Guide tells you how to begin the financial planning process. It provides worksheets to help you find out where you are financially and where you want to be in the future. It will help you identify your goals, determine your net worth and cash flow, plan to achieve your goals as well as begin to put your plan into action."
      sections={sections}
    >
      <p>
        Financial security derives not only from acquiring more money but from planning. A solid financial
        plan can alleviate financial worries about the future and ensure that you will meet your financial
        goals—whether they relate to retirement, asset acquisition, education, or just vacations.
      </p>
      <Callout label="Tip">
        <p>
          Review your financial plan every year to keep it up to date. If you set it up properly initially,
          it is relatively easy to review and keep current.
        </p>
      </Callout>
      <p>
        This Financial Guide allows you to take the first step towards a solid plan. By following the
        instructions and guidelines contained in it, you can find out where you are now and how you can
        put your plan into action.
      </p>
      <p>
        There are many ways to approach setting up a financial plan. The one outlined in this guide is just
        one of a number of approaches. Your financial advisor can assist you in setting up the financial
        plan that best meets your particular situation and needs.
      </p>
    </GuideArticle>
  );
}
