import GuideArticle, { Callout, FigureTable, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=11 (Budgeting: How To Prepare a Workable
// Plan), word for word. Double hyphens are now dashes, and related guides are named by their
// titles in the library.
// Address: /guides/life-events/getting-married/budgeting (articlePages in src/data/guides.js).
const related = guide('life-events.php');

const sections = [
  {
    id: 'analyze',
    title: 'Step 1: Analyze Your Income and Expenses',
    body: (
      <>
        <p>
          The first thing you need to do is to review your income and spending for the past year. This
          "cash-flow analysis" will lay the groundwork for the budget you create. You'll need your
          checkbook, your credit card statements (paper copies or online records), and your most recent
          tax return. This should give you sufficient data to analyze your spending and income for the
          past year.
        </p>

        <h3>Your Income</h3>
        <p>
          Using an excel spreadsheet, ledger paper, or even notebook paper (as long as it has lines), list
          your income for a one-year period, breaking it down by month and year. Include the following
          types of income:
        </p>
        <ul>
          <li>Salary/wages</li>
          <li>Income from self-employment</li>
          <li>
            Retirement pay and/or government-source income (e.g., Social Security, disability,
            unemployment, annuity, and pension payments)
          </li>
          <li>Interest and dividends</li>
          <li>Alimony and/or child support</li>
          <li>Rents and/or royalties</li>
          <li>Income from trusts</li>
        </ul>
        <p>Your income analysis might look something like this:</p>
        <FigureTable
          label="Example income analysis"
          columns={['Income Item', 'Monthly', 'Yearly']}
          rows={[
            ['Salary (Gross)', '$10,000', '$120,000'],
            ['Dividends', '$100', '$1,200'],
            ['Rent', '$1,500', '$18,000'],
          ]}
          total={['Total', '$11,600', '$139,200']}
        />

        <h3>Your Fixed Expenses</h3>
        <p>
          Add up your fixed expenses. These are expenses that generally do not vary from month to month.
          Again, break them down into month and year. Make sure you include the following categories,
          whether or not they're immediately evident from the past year's bills:
        </p>
        <ul>
          <li>Taxes (federal, state and local)</li>
          <li>Mortgage or rent</li>
          <li>Insurance, including medical, auto, homeowners, life, and other</li>
          <li>Utilities</li>
          <li>Automobiles (costs of operating minus insurance cost)</li>
          <li>Dues and fees paid to associations and clubs</li>
        </ul>
        <p>
          Where the amounts vary by month, as with a phone bill, add up what you paid for the year and
          divide by twelve to get the monthly amount. For bills that you pay yearly or quarterly, add the
          total amount paid for the year and divide by 12 to arrive at a monthly amount. This will help you
          to arrive at a more functional budget. If you have large credit card debt, indicate the amounts
          you actually paid, not the minimum monthly payments.
        </p>

        <h3>Your Variable Expenses</h3>
        <p>
          Next, add up your variable expenses for the previous one-year period using your checkbook and
          credit card statements. Be sure to include the following:
        </p>
        <ul>
          <li>Food</li>
          <li>Clothing</li>
          <li>Furniture and appliances</li>
          <li>Entertainment</li>
          <li>Gas, oil, and commuting costs</li>
          <li>Medical care</li>
          <li>Gifts</li>
          <li>Vacations</li>
          <li>Fees paid to accountants, lawyers, and other professionals</li>
        </ul>
        <p>Estimate if you need to do so. Here's what your variable expenses might look like:</p>
        <FigureTable
          label="Example variable expenses"
          columns={['Expense', 'Monthly', 'Yearly']}
          rows={[
            ['Groceries', '$950', '$11,400'],
            ['Gifts For Weddings, Birthdays, etc.', '$50', '$600'],
            ['Magazine Subscriptions', '$10', '$120'],
            ['Movies, Theatre, Restaurants', '$175', '$2,100'],
            ['Vacations', '$250', '$3,000'],
            ['Gas, Oil, Car Repair', '$400', '$4,800'],
            ['Clothing', '$150', '$1,800'],
          ]}
          total={['Total', '$1,985', '$23,820']}
        />
        <p>
          You'll be able to tell whether you're overlooking any variable expenses by subtracting the total
          yearly amount you arrive at for variable and fixed expenses from your yearly income figure. If
          this amount is the amount you put away in savings for the previous year, then you can be pretty
          certain that you've included all of your variable expenses. If there is a large gap between
          income minus expenses and the amount you saved, do some digging to try to find out where the
          extra money went.
        </p>
      </>
    ),
  },
  {
    id: 'goals',
    title: 'Step 2: Set Budgeting Goals',
    body: (
      <>
        <p>
          Your budget should tie in with your financial planning goals. For instance, you may have taken a
          closer look at your retirement plan and decided that you needed to save $20,000 per year for the
          next ten years to accumulate the nest egg you want for retirement.
        </p>
        <RelatedGuide guide={related([54, 'Your Retirement Plan: How To Get Started'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <p>
          Or, you may be saving for a new home and figured out that you need to save $5,000 per year for
          the next three years to come up with a down payment.
        </p>
        <p>You may also want to reduce credit card debt or pay down a mortgage with your increased savings.</p>
        <RelatedGuide guide={related([100, 'Saving Money: 10 Major Ways To Increase Your Nest Egg'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <p>
          When setting your budgeting goals, decide how much you want to put away each year and what you
          will do with the savings. Your saving goals will depend on the financial planning goals mentioned
          above as well as on your age and income level.
        </p>
        <p>
          If you want to save more than you have been saving, then you'll need to cut down on optional
          expenditures. To do this, you'll enter an amount under "budgeted amount" that is less than "last
          year's actual."
        </p>
        <Callout label="Tip">
          <p>Review your budget each year to make sure it fits in with your financial goals, both long-term and short-term.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'create',
    title: 'Step 3: Create Your Budget',
    body: (
      <>
        <p>
          Now it's time to actually create a budget. The easiest way to do this is to use an excel
          spreadsheet. If you're not computer proficient, then use ledger paper or 8-1/2 by 11-inch paper
          used in "landscape" format (used horizontally instead of vertically).
        </p>
        <Callout label="Note">
          <p>
            As we stated before if you have a computer software program that formulates a budget for you,
            then use that, as it will be more convenient than writing up a budget by hand. But read through
            our guidelines anyway to get a grasp of the concepts involved.
          </p>
        </Callout>
        <p>
          Each sheet of paper should be headed by the name of the month. Once you've come up with January's
          version, you can photocopy that 11 times, since each month's version will be the same. You will
          end up with one sheet of paper for each month of the year.
        </p>
        <p>Each month's budget sheet might have five columns:</p>
        <ul>
          <li>
            Column 1, labeled <em>"Expense,"</em> will contain each of the items you listed under fixed and
            variable expenses.
          </li>
          <li>
            Column 2, labeled <em>"Last Year's Actual,"</em> will contain the monthly amounts you came up
            with for each fixed and variable expense.
          </li>
          <li>
            Column 3, labeled <em>"This Year's Budgeted,"</em> is where you will write in what you will allow
            yourself to spend on that item for the month. (It can, and probably will, differ from last
            year's actual expense).
          </li>
          <li>
            Column 4, labeled <em>"This Year's Actual,"</em> is where you will write in what you spend on that
            item for the month.
          </li>
          <li>
            Column 5, labeled <em>"Increase/Decrease,"</em> is where you will write in how much more—or
            less—you spent during that month than you had budgeted.
          </li>
        </ul>
        <p>
          Here is a <em>partial</em> view (showing just two expenses) of what your monthly budget might look
          like:
        </p>
        <FigureTable
          label="Example monthly budget"
          columns={['Expense', "Last Year's Actual", "This Year's Budgeted", "This Year's Actual", 'Over/(Under) Budget']}
          rows={[
            ['Electric', '$780', '$825', '$800', '($25)'],
            ['Groceries', '$950', '$1,000', '$1,100', '$100'],
          ]}
          total={['Total', '$1,730', '$1,825', '$1,900', '$75']}
          wide
        />
        <p>
          Arrange the items in whatever way is convenient for you, but make your budget easy to use because
          this will help ensure that you use it. If you prefer to categorize your expenses in an orderly way
          (fixed vs. variable or optional vs. mandatory), then do so. If you prefer to categorize them in the
          order in which they come up during the month, or by the manner in which they are paid (cash,
          check, or credit card), then do it that way.
        </p>
        <p>
          It takes discipline to record each amount in your budget as you pay it, but the discipline will
          pay off at the end of the year when you will have a clear picture of your spending.
        </p>
        <Callout label="Tip">
          <p>Keep receipts for cash payments until you are able to record expenditures in your budget.</p>
        </Callout>
        <Callout label="Tip">
          <p>
            Don't try to track every penny; instead, maintain a category called "petty cash" or
            "miscellaneous expenses" to cover spending cash that does not go for categorized items. This will
            cover cash that you withdraw from your checking account, but do not keep track of. Allow yourself
            a reasonable budgeted amount for this category.
          </p>
          <p>
            At the end of each month, and then at the end of the year, look at your monthly totals to see
            whether you've under- or overspent your budgeted amounts. Performing a monthly and yearly review
            will help you to set or revise goals for next year.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'review',
    title: 'Step 4: Review Your Adherence to the Budget',
    body: (
      <p>
        At the end of each month and again at the end of the year, look at your monthly totals to see
        whether you've under or overspent your budgeted amounts. Performing a monthly and yearly review will
        help you to set or revise goals for next year.
      </p>
    ),
  },
];

export default function Budgeting() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Budgeting"
      title={
        <>
          Budgeting: <em>How To Prepare a Workable Plan</em>
        </>
      }
      lead="A budget is an essential component of your financial plan. Not only does it force you to monitor your spending, it enables you to focus on which items (such as loans and credit card debt) you can pay off or pay down so that you can accumulate funds for retirement, education, or buying a home."
      sections={sections}
    >
      <p>Here is a guide to effectively organizing and keeping a check on your expenses.</p>
      <p>
        While this Financial Guide offers you guidance on how to develop a budget that works for you and
        your family, don't hesitate to contact your financial advisor if you need additional assistance.
      </p>
      <Callout label="Note">
        <p>
          The budget guidelines suggested here are intended for people who need to rein in their spending
          or have no idea what they spend their money on every month. If you have a good grasp of your cash
          inflows and outflows and have your spending under control, there may be no need to prepare a
          budget plan.
        </p>
      </Callout>
      <RelatedGuide guide={related([10, 'Your Financial Plan: Getting Started On a Secure Future'])}>
        Please see the Financial Guide:
      </RelatedGuide>
      <Callout label="Note">
        <p>
          Personal-finance computer software programs such as Quicken make it easy to set up a budget. If
          you have such a program, then simply follow the guidelines that the software gives you and use the
          information contained here as a guideline.
        </p>
      </Callout>
    </GuideArticle>
  );
}
