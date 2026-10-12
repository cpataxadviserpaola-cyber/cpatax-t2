import GuideArticle from '../../../GuideArticle.jsx';

const sections = [
  {
    id: 'meals-away-from-office',
    title: 'Can I deduct meals on days I call on customers or clients away from my office?',
    body: (
      <p>
        Merely eating away from your office while meeting customers does not necessarily make a meal deductible.
        Business meal deductions generally depend on the circumstances, including whether the meal qualifies under
        current federal rules. The source FAQ describes the usual overnight-travel condition and historical 50%
        limitation, plus a temporary 100% restaurant-meal rule for 2021 and 2022. Those year-specific rules have
        expired; verify the rules for the tax year in question. When a meal is connected with entertainment, separately
        stated meal costs may be relevant.
      </p>
    ),
  },
  {
    id: 'employer-reimbursements',
    title: 'Must I report employer reimbursements for travel, entertainment, and meals?',
    body: (
      <p>
        Under an accountable reimbursement arrangement, an employee who substantiates expenses for business purpose,
        amount, time, and place and returns any excess advance generally does not include the reimbursement as wages
        or claim the same expenses again. The source FAQ also discusses the pre-2018 rules for unreimbursed employee
        expenses and the temporary 2018–2025 suspension of certain miscellaneous itemized deductions. Tax treatment
        depends on the tax year and reimbursement plan; check current IRS guidance.
      </p>
    ),
  },
  {
    id: 'deduction-limits',
    title: 'What are the limits on deductible travel, entertainment, and meal costs?',
    body: (
      <p>
        Expenses must qualify as ordinary and necessary business costs and meet substantiation requirements. Meal
        deductions are subject to specific limits, while business entertainment is generally nondeductible under
        federal law, subject to narrow exceptions. The source FAQ also describes historical 50% meal and entertainment
        limits, the temporary 100% restaurant-meal deduction in 2021 and 2022, and prior rules for sporting events and
        luxury travel. These historical examples should not be applied to a current return without checking the law
        for that year.
      </p>
    ),
  },
  {
    id: 'temporary-assignment',
    title: 'Can I deduct living expenses on a temporary assignment away from where I live and work?',
    body: (
      <p>
        Travel expenses may qualify when work takes you away from your tax home and the assignment is temporary. The
        source FAQ describes an assignment expected to last one year or less as temporary; an assignment expected to
        last longer may make the new location your tax home. Whether lodging and other costs are deductible depends
        on the facts and current rules.
      </p>
    ),
  },
  {
    id: 'travel-expenses',
    title: 'What expenses can I deduct while traveling away from home?',
    body: (
      <>
        <p>
          Depending on the purpose and circumstances of the trip, potentially qualifying expenses may include:
        </p>
        <ul>
          <li>Transportation to and from the destination and local business transportation.</li>
          <li>Lodging and qualifying meals, subject to applicable meal limits.</li>
          <li>Business-related phone, laundry, baggage handling, and similar costs.</li>
          <li>Reasonable tips related to otherwise qualifying expenses.</li>
        </ul>
        <p>Keep records showing the business purpose and substantiating the amounts claimed.</p>
      </>
    ),
  },
  {
    id: 'non-deductible-travel',
    title: 'What cannot be deducted as a travel expense?',
    body: (
      <p>
        Personal commuting between home and a regular work location is generally not deductible. The source FAQ
        identifies limited situations—such as travel from a qualifying principal place of business—that may be treated
        differently. Travel undertaken for education, job hunting in a new field, or looking for a new business site
        is not automatically deductible as business travel. Classification depends on the facts and current law.
      </p>
    ),
  },
  {
    id: 'entertainment',
    title: 'What can I deduct for business entertainment?',
    body: (
      <p>
        Federal rules generally disallow deductions for business entertainment, with limited exceptions. A separately
        stated business meal may qualify under meal rules even when entertainment does not. The source FAQ recounts
        pre-2018 rules and examples, including club expenses and sporting events, as well as the temporary 2021–2022
        restaurant-meal rule. These are historical descriptions; check current law and the rules for the tax year
        before claiming a deduction.
      </p>
    ),
  },
  {
    id: 'substantiation',
    title: 'How do I prove travel and entertainment expenses?',
    body: (
      <p>
        Keep timely records of the amount, date, location, business purpose, and business relationship for expenses.
        Employees seeking reimbursement should follow the employer’s expense-reporting process and return any excess
        advance when required. Some per diem or mileage arrangements may satisfy substantiation requirements when
        applicable conditions are met. The source FAQ discusses older rules for unreimbursed employee expenses;
        deductibility depends on the tax year and current law.
      </p>
    ),
  },
];

export default function TravelEntertainmentFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/running-your-business"
      page="Travel and Entertainment FAQ"
      title={
        <>
          Travel and Entertainment: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to questions about business meals, travel reimbursements, deductible travel costs, entertainment, temporary assignments, and documenting expenses."
      sections={sections}
      numbered={false}
    />
  );
}
