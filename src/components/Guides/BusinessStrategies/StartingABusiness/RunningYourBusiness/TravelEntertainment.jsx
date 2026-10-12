import { Link } from 'react-router';
import GuideArticle, { Callout } from '../../../GuideArticle.jsx';

// Source: cpataxadviser.com/business-strategies.php?item=120 (Travel and Entertainment: Maximizing
// the Tax Benefits; the same text as taxstrategies-businessowners.php?item=120), word for word. The
// library's opening paragraph is the banner's text (`lead`), and its table of contents is the
// guide's contents list. The three questions under Meal and Entertainment Expenses are subheadings,
// the two examples set apart without a label are "Example 1" and "Example 2" boxes (their "Example
// #1:" and "Example #2:" lead-ins are the boxes' labels), and the note, tip, example and caution
// boxes keep the library's labels. "you can't use the actual mileage for that vehicle", "the
// standard mileage deduction described below", "50 percent in 2024" and "2018 through 2025" are as
// the library has them. Back-to-top anchors omitted.
// Address: /guides/business-strategies/running-your-business/travel-entertainment (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'travel-expenses',
    title: 'Travel Expenses',
    body: (
      <>
        <p>If you're eligible, you generally can deduct two types of travel expenses related to your business:</p>
        <p>
          <strong>1. Local transportation costs.</strong> Commuting expenses aren't deductible, but costs related to trips
          from your workplace to other locations, such as to visit a client or vendor, are deductible. Examples of such
          costs include public transportation, taxi, ride share or your own auto, as well as parking and tolls. For those
          whose main place of business is their personal residence, business trips from the home office and back are
          considered deductible transportation and not non-deductible commuting.
        </p>
        <Callout label="Note">
          <p>
            Please see the special section below for the most effective ways of deducting{' '}
            <Link to="#auto-expenses">auto expenses</Link>.
          </p>
        </Callout>
        <p>
          <strong>2. Away-from-home travel expenses.</strong> You can only deduct one-half of the cost of meals (50
          percent) in 2024. Lodging expenses incurred while traveling away from home are fully deductible. You also can
          deduct 100 percent of your transportation expenses as long as business is the primary reason for your trip.
        </p>
        <Callout label="Tip">
          <p>
            The 100 percent deduction for the cost of business meals and beverages purchased from restaurants in 2021 and
            2022 was not extended.
          </p>
        </Callout>
        <p>
          Here are some additional considerations as you assess the deductibility of your local transportation and
          away-from-home travel expenses:
        </p>
        <p>
          <strong>To be deductible, travel expenses must be "ordinary and necessary,"</strong> although "necessary" is
          liberally defined as "helpful and appropriate," not "indispensable." The deduction is also denied for that part
          of any travel expense that is "lavish or extravagant," though this rule does not bar deducting the cost of
          first-class travel or deluxe accommodations or (subject to percentage limitations below) deluxe meals.
        </p>
        <p>
          <strong>What does "away from home" mean?</strong> To deduct the costs of lodging and meals (and incidentals, see
          below) you must generally stay somewhere overnight. In other words, you must be away from your regular place of
          business longer than an ordinary day's work and need to sleep or rest to meet the demands of your work while away
          from home. Otherwise, your costs are considered local transportation costs and the costs of lodging and meals are
          not deductible.
        </p>
        <p>
          <strong>Where is your "home" for tax purposes?</strong> The general view is that your "home" for travel expense
          purposes is your place of business or your post of duty. It is not where your family lives (some courts have
          stated that it's the general area of your residence). Here is an example:
        </p>
        <Callout label="Example">
          <p>
            George's family lives in Boston and George's business is in Washington, DC. George spends the weekends in
            Boston and the weekdays in Washington, where he stays in a hotel and eats out. For tax purposes, George's "home"
            is in Washington, not Boston, therefore, he cannot deduct any of the following expenses: cost of traveling back
            and forth between Washington and Boston, cost of eating out in Washington, cost of staying in a hotel in
            Washington, or any costs incurred traveling between his hotel in Washington and his job in Washington (the
            latter are considered non-deductible commuting costs).
          </p>
        </Callout>
        <p>
          There are some rules in the tax law concerning where a taxpayer's "home" is for purposes of deducting travel
          expenses that are less clear, such as when a taxpayer works at a temporary site or works in two different places.
        </p>
        <p>
          <strong>We'll cover these rules briefly in these two examples:</strong>
        </p>
        <Callout label="Example 1">
          <p>
            Joe, who lives in Connecticut and is self-employed, works eight months out of the year in Connecticut (from
            which he usually earns about $100,000) and four months out of the year in Florida (from which he usually earns
            about $50,000). Joe's "tax home" for travel expense purposes is Connecticut. Therefore, the costs of traveling to
            and from the "lesser" place of employment (Florida), as well as meals and lodging costs incurred while working in
            Florida, are deductible.
          </p>
        </Callout>
        <Callout label="Example 2">
          <p>
            Susan is self-employed and works and lives in New York. Occasionally, she must travel to Maryland on temporary
            assignments, where she spends up to a week at a time. Assuming Susan's clients don't reimburse her for travel
            expenses, she can deduct the costs of meals and lodging while she's in Maryland, as well as the costs of
            traveling to and from Maryland. This holds true because her work assignments in Maryland are considered
            temporary since they will end within a foreseeable time. If an assignment is considered indefinite, that is,
            expected to last for more than a year, under the tax law, travel, meal, and lodging costs are not deductible.
          </p>
        </Callout>
        <p>
          <strong>Here's a list of some deductible away-from-home travel expenses:</strong>
        </p>
        <ul>
          <li>
            Meals limited to 50 percent in 2024 and lodging while traveling or once you get to your away-from-home business
            destination.
          </li>
          <li>The cost of having your clothes cleaned and pressed away from home.</li>
          <li>The costs of transportation between job sites or to and from hotels and terminals.</li>
          <li>Airfare, bus fare, rail fare, and charges related to shipping baggage or taking it with you.</li>
          <li>The cost of bringing or sending samples or displays, and of renting sample display rooms.</li>
          <li>The costs of keeping and operating a car, including garaging costs.</li>
          <li>The cost of keeping and operating an airplane, including hangar costs.</li>
          <li>Transportation costs between "temporary" job sites and hotels and restaurants.</li>
          <li>Incidentals, including equipment rentals, stenographers' fees.</li>
          <li>Tips related to the above.</li>
        </ul>
        <p>However, many away-from-home travel expenses are not deductible or are restricted in some way. These include:</p>
        <p>
          <strong>Travel as a form of education.</strong> Trips that are educational in a general way, or improve knowledge
          of a certain field but are not part of a taxpayer's job, are not deductible.
        </p>
        <p>
          <strong>Seeking a new location.</strong> Travel costs (and other costs) incurred while you are looking for a new
          place for your business (or for a new business) must be capitalized and cannot be deducted currently.
        </p>
        <p>
          <strong>Luxury water travel:</strong> If you travel using an ocean liner, a cruise ship, or some other type of
          "luxury" water transportation, the amount you can deduct is subject to a per-day limit.
        </p>
        <p>
          <strong>Seeking foreign customers:</strong> The costs of traveling abroad to find foreign markets for existing
          products are not deductible.
        </p>
      </>
    ),
  },
  {
    id: 'meals-and-entertainment',
    title: 'Meal and Entertainment Expenses',
    body: (
      <>
        <p>
          Under the TCJA, there have been a number of changes to the rules for meal and entertainment expense deductions.
          The most notable is that entertainment expenses paid or incurred after December 31, 2017, are not deductible
          unless they fall under specific exceptions, for example, expenses incurred for social activities primarily for the
          benefit of your employees.
        </p>
        <p>
          Dues paid to country clubs or social or golf and athletic clubs are also not deductible nor are dues that you pay
          to professional and civic organizations. Prior to 2018, these dues were deductible at 50 percent as long as your
          membership had a business purpose. Such organizations included business leagues, trade associations, chambers of
          commerce, boards of trade, and real estate boards.
        </p>
        <p>
          Meals with clients, however, are still 50% deductible as long as they're "ordinary and necessary" and not "lavish
          or extravagant" and they're directly related to or associated with your business.
        </p>
        <h3>How Do You Prove Meal Expenses Are "Directly Related?"</h3>
        <p>Expenses are directly related if you can show:</p>
        <ul>
          <li>There was more than a general expectation of gaining some business benefit other than goodwill.</li>
          <li>You conducted business during the meal.</li>
          <li>Active conduct of business was your main purpose.</li>
        </ul>
        <h3>How Do You Meet The "Associated With" Test?</h3>
        <p>
          Even if you can't show that the meal was "directly related" as discussed above, you can still deduct the expenses
          as long as you can prove the meal was "associated" with your business. To meet this test, the meal must directly
          precede or come after a substantial business discussion. Further, you must have had a clear business purpose when
          you took on the expense.
        </p>
        <h3>For Whom Can You Get The Deduction?</h3>
        <p>
          The person you dined with must be a business associate. That is, it must be someone who could reasonably be
          expected to be a customer or conduct business with you, including an employee or professional advisor.
        </p>
      </>
    ),
  },
  {
    id: 'recordkeeping',
    title: 'Recordkeeping and Substantiation Requirements',
    body: (
      <>
        <p>
          Tax law requires you to keep records that will prove the business purpose and amounts of your business travel
          and meal expenses. To substantiate business travel and business meal expenses, you must prove:
        </p>
        <ul>
          <li>The amount,</li>
          <li>The time and place of the travel or meal,</li>
          <li>The business purpose, and</li>
          <li>The business relationship of the recipient of business meals.</li>
        </ul>
        <Callout label="Tip">
          <p>
            The most frequent reason for IRS's disallowance of travel and meal expenses is the failure to show the place and
            business purpose of an item. Therefore, pay special attention to these aspects of your record-keeping.
          </p>
          <p>
            Keeping a diary or logbook and recording your business-related activities at or close to the time the expense
            is incurred is one of the best ways to document your business expenses.
          </p>
        </Callout>
        <p>Here's how these rules apply to your record-keeping for travel expenses and business meals:</p>
        <p>
          <strong>Away-from-home travel expenses.</strong> You must document the following for each trip:
        </p>
        <ul>
          <li>
            The amount of each expense, e.g., the cost of each transportation, lodging and meal. You can group similar types
            of incidentals together, i.e., "meals, taxis,"
          </li>
          <li>The dates of your departure and return and the number of days you spent on business.</li>
          <li>Your destination, and</li>
          <li>The business reason for the travel or the business benefit you expect.</li>
        </ul>
        <p>
          <strong>Business meal expenses.</strong> You must prove the following for each claimed deduction for meal
          expenses:
        </p>
        <ul>
          <li>The amount,</li>
          <li>The date of the meal, and</li>
          <li>The name, title, and occupation (showing business relation) of your meal guests.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'fully-reimbursed',
    title: 'Employees Who Are "Fully Reimbursed"',
    body: (
      <>
        <p>Employees who are "fully reimbursed" by their employer for travel or business meal expenses must:</p>
        <ul>
          <li>Adequately account to their employer by means of an expense account statement, and</li>
          <li>Return any excess reimbursement.</li>
        </ul>
        <p>
          As long as you are covered by (and follow) an "accountable plan," and your reimbursements don't exceed your
          expenses, you won't have to report the reimbursements as gross income. Some per diem arrangements (by which you
          receive a flat amount per day) and mileage allowances can avoid detailed expense accounting to the employer, but
          proof of time, place, and business purpose is still required.
        </p>
        <p>
          However, if your employer's reimbursement plan is not "accountable," you must report the reimbursements as
          income. Prior to 2018, you could deduct these expenses on your tax return as miscellaneous itemized deductions on
          Form 1040 Schedule A, subject to the two percent-of-adjusted-gross-income floor. As noted earlier, however, the
          TCJA eliminated miscellaneous deductions for tax years 2018 through 2025.
        </p>
      </>
    ),
  },
  {
    id: 'auto-expenses',
    title: 'Auto Expenses',
    body: (
      <>
        <p>If you're eligible, you have two choices as to how to claim the deduction for business auto expenses:</p>
        <ol>
          <li>
            You can deduct the actual business-related costs of gas, oil, lubrication, repairs, tires, supplies, parking,
            tolls, chauffeur salaries, and depreciation, or
          </li>
          <li>
            You can use the standard mileage deduction, which is an inflation-adjusted amount that is multiplied by the
            number of business miles driven.
          </li>
        </ol>
        <p>Parking fees and tolls may be deducted no matter which method you use.</p>
        <p>
          The standard mileage rate produces a larger deduction for some business owners, while others fare better
          (tax-wise) by deducting actual expenses. Figuring your deduction using both methods tells you which method is
          better for you tax-wise. Here are some additional considerations:
        </p>
        <p>
          <strong>Expensing and depreciating vehicle costs.</strong> Deduction options and amounts depend on the percentage
          used for business. Also, if the car is used more than 50 percent for business, it can be included as business
          property and qualify for Section 179 expensing in the year of purchase. The deduction is reduced proportionately
          to the extent the car is used for personal purposes. If you take this deduction, you can't use the actual mileage
          for that vehicle in any year.
        </p>
        <p>
          <strong>Depreciation.</strong> Assuming the car cost more than the Section 179 limit, or Section 179 is not
          available or is not claimed, depreciation is allowed. Several depreciation options are available, but there are
          limits to the amount of depreciation that can be claimed per year. Depreciation otherwise allowable is reduced by
          the proportion of personal use. For example, a car used 20 percent for personal use is depreciated at 80 percent
          of the amount otherwise allowed.
        </p>
        <p>
          Accelerated depreciation is defined as depreciation that is at a rate higher than normal that results from
          dividing the vehicle's cost by the number of years it will be used. It is not allowed where personal use is 50
          percent or more. If you claimed accelerated depreciation in a prior year and your business use then falls to 50
          percent or less, you become subject to "recapture" of the excess depreciation (i.e., it's included in income). Of
          course, using the standard mileage deduction described below allows you to avoid these limits.
        </p>
        <p>
          <strong>Determining whether to use the standard mileage deduction.</strong> If you opt for the standard mileage
          rate, you simply multiply the applicable cents-per-mile rate by the number of business miles you drove. Be aware,
          however, that the standard mileage deduction may understate your costs. This is especially true for taxpayers who
          use the car 100 percent for business, or close to that percentage.
        </p>
        <Callout label="Caution">
          <p>
            Once you choose the standard mileage rate, you cannot use accelerated depreciation even if you opt for the
            actual cost method in a later year. You may use only straight line.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            The standard mileage method usually benefits taxpayers who have less expensive cars or who travel a large number
            of business miles. To determine which method is better for you, make the calculations each way during the first
            year you use the car for business.
          </p>
        </Callout>
        <p>
          You may use the standard mileage for leased cars if you use it for the entire lease period. Or, you can deduct
          actual expenses instead, including leasing costs.
        </p>
        <p>
          <strong>Recordkeeping.</strong> Tax law requires that you keep travel expense records and that you give
          information on your return showing business versus personal use. Not only is keeping good records essential in
          case of an audit, but it also allows you to make the most of your auto deductions. For example, you won't be able
          to determine which of the two options is better if you don't know the number of miles driven and the total amount
          you spent on the car. If you use the actual cost method, you'll have to keep receipts as well. For many business
          owners, using a separate credit card for business simplifies your record-keeping.
        </p>
        <Callout label="Tip">
          <p>Don't forget to deduct the interest you pay to finance a business-use car if you're self-employed.</p>
        </Callout>
      </>
    ),
  },
];

export default function TravelEntertainment() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/running-your-business"
      page="Travel and Entertainment"
      title={
        <>
          Travel and Entertainment: <em>Maximizing the Tax Benefits</em>
        </>
      }
      lead="Don't overpay your income taxes by overlooking expenses that you are entitled to deduct. Use this Financial Guide to ensure you are handling your business travel, meal and auto costs in a tax-wise manner."
      sections={sections}
    >
      <p>
        This Financial Guide shows you how to take advantage of all of the travel, meal and auto expenses you're legally
        entitled to and offers guidance on which expenses are deductible and what percentage of them you can deduct. It
        also discusses the importance of following IRS rules for keeping records and substantiating your expenses in order
        to avoid an audit.
      </p>
      <Callout label="Note">
        <p>
          From 2018 through 2025, employees who travel or incur meal or auto costs for business can't deduct such expenses
          on Form 1040, Schedule A. This is due to the Tax Cuts and Jobs Act of 2017 (TCJA) suspension of miscellaneous
          itemized deductions subject to the 2% of adjusted gross income floor. Generally only businesses and the
          self-employed can deduct such costs.
        </p>
      </Callout>
    </GuideArticle>
  );
}
