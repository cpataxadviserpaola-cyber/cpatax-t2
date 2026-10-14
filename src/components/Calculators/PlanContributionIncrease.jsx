import CalculatorPage from './CalculatorPage.jsx';
import GrowthChart from './GrowthChart.jsx';
import { inflationHelp, returnsHelp } from './helpCharts.jsx';
import { compensationLimit, contributionIncrease, contributionLimit } from './planContributions.js';
import { dollars, number, percent } from './format.js';

// Source: CalcXML's "What is the impact of increasing my 457 Plan contribution?", "What is the
// impact of increasing my 403(b) contribution?" and "What is the impact of increasing my 401(k)
// contribution?" (calculators pay10, pay12 and pay08 on the firm's account, 481), which the
// Resources page used to open on calcxml.com. The three are the same calculator for different
// plans (see `plans`). Their wording is kept word for word: the introduction, the field groups
// and fields, their notes and help charts, the results sentence (or, when the current
// contribution already reaches the year's limit, the sentence saying a higher one won't help),
// the summary table, the graph, the year-by-year table and the disclaimer; and their results to
// the dollar (see planContributions.js), except where a negative return meets a balance already
// in the plan, where CalcXML's summary takes the balance after one year and this takes it at
// retirement, as the graph and table do. The limit sentence gives the catch-up's ages as 60 to
// 63 (CalcXML says 50 and older, whose limit is lower). The form is set out as the bonus
// calculator's is (CalculatorPage.jsx), with the units in the boxes, buttons to step the years,
// and a proposed contribution no higher than the current one sent back, as its note asks.
// Addresses: /resources/calculators/457-plan-contribution, /resources/calculators/403b-contribution
// and /resources/calculators/401k-contribution (the calculators' links in the Resources page's
// Paycheck and Benefits list).

// What differs between them is the plan's name in the wording, and how the results sentence
// gives the increase: to one decimal (2.3%), but the 401(k)'s to two (2.25%), as CalcXML's do.
// All three count this year's salary up to the compensation limit, and match your
// contributions on up to the maximum share of salary (matchRules.matchedPay in
// planContributions.js), unlike CalcXML's "What may my 401(k) be worth?".
const plans = {
  457: {
    page: '457 Plan Contribution',
    title: 'What Is The Impact Of Increasing My 457 Plan Contribution?',
    name: '457 Plan',
    formTitle: 'Your 457 Plan',
    balance: 'Current 457 Plan balance',
    current: 'Current 457 Plan contribution',
    proposed: 'Proposed 457 Plan contribution',
    limitFor: '457 plans',
    increaseDigits: 1,
  },
  '403b': {
    page: '403(b) Contribution',
    title: 'What Is The Impact Of Increasing My 403(b) Contribution?',
    name: '403(b)',
    formTitle: 'Your 403(b) Plan',
    balance: 'Current 403(b) balance',
    current: 'Current 403(b) plan contribution',
    proposed: 'Proposed 403(b) plan contribution',
    limitFor: '403(b) plans',
    increaseDigits: 1,
  },
  '401k': {
    page: '401(k) Contribution',
    title: 'What Is The Impact Of Increasing My 401(k) Contribution?',
    name: '401(k)',
    formTitle: 'Your 401(k) Plan',
    balance: 'Current 401(k) balance',
    current: 'Current 401(k) plan contribution',
    proposed: 'Proposed 401(k) plan contribution',
    limitFor: '401(k) plans',
    increaseDigits: 2,
  },
};

const introFor = (plan) =>
  `It may surprise you how significant your retirement accumulation may be simply by increasing the percent of your salary that you save each month in your ${plan.name}. Use this calculator to estimate how much more you could accumulate taking into account any employer match (if applicable).`;

const proposedNote = 'Be sure to enter a number greater than your current contribution.';

// CalcXML's fields, in its order and groups.
const sectionsFor = (plan) => [
  {
    title: 'Common Assumptions',
    fields: [
      {
        name: 'years',
        label: 'Years until retirement',
        kind: 'count',
        min: 1,
        max: 50,
        steps: ['One year fewer', 'One year more'],
      },
      { name: 'income', label: 'Current annual income', kind: 'money', max: 999999999 },
      { name: 'raises', label: 'Annual salary increases', kind: 'percent', max: 10, help: inflationHelp },
    ],
  },
  {
    title: 'Plan Information',
    fields: [
      { name: 'balance', label: plan.balance, kind: 'money', max: 999999999 },
      {
        name: 'planReturn',
        label: 'Annual before-tax return on savings',
        kind: 'percent',
        min: -12,
        max: 12,
        help: returnsHelp,
      },
      {
        name: 'periods',
        label: 'Pay period frequency',
        control: 'select',
        options: [
          { value: 52, label: 'Weekly' },
          { value: 26, label: 'Bi-Weekly' },
          { value: 24, label: 'Semi-Monthly' },
          { value: 12, label: 'Monthly' },
          { value: 1, label: 'Annually' },
        ],
      },
      { name: 'match', label: 'Employer match', kind: 'percent', max: 300 },
      { name: 'maxMatch', label: 'Maximum employer match', kind: 'percent', max: 20 },
    ],
  },
  {
    title: 'Contribution Information',
    fields: [
      { name: 'current', label: plan.current, kind: 'percent', max: 100 },
      { name: 'proposed', label: plan.proposed, kind: 'percent', max: 100, note: proposedNote },
    ],
  },
];

const defaults = {
  years: '30',
  income: '0',
  raises: '5',
  balance: '0',
  planReturn: '8',
  periods: '26',
  match: '100',
  maxMatch: '3',
  current: '4',
  proposed: '6',
};

const validate = ({ current, proposed }) => (proposed > current ? {} : { proposed: proposedNote });

// The graph's parts, in CalcXML's order up each column.
const chartSeries = [
  { key: 'existing', label: 'Existing Balance' },
  { key: 'currentBalance', label: 'Current Contribution Level' },
  { key: 'addedBalance', label: 'Additional Proposed Contributions' },
];

function Results({ results, plan }) {
  const { inputs } = results;
  const increase = percent(inputs.proposed - inputs.current, plan.increaseDigits);
  const summary = [
    ['Your contribution (as % of salary)', percent(inputs.current, 1), percent(inputs.proposed, 1)],
    ['Employer match (as % of contribution)', percent(inputs.match, 1), percent(inputs.match, 1)],
    ['Maximum match (as % of salary)', percent(inputs.maxMatch, 1), percent(inputs.maxMatch, 1)],
    ['Your cumulative contributions', dollars(results.current.yours), dollars(results.proposed.yours)],
    ['Employer cumulative contributions', dollars(results.current.employer), dollars(results.proposed.employer)],
    [
      `Total Value in Year ${inputs.years} (includes projected balance, if any)`,
      dollars(results.current.total),
      dollars(results.proposed.total),
    ],
    ['Increase in value', '', dollars(results.increase)],
    ["Out-of-pocket 'cost'", '', dollars(results.cost)],
  ];

  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        {results.atLimit ? (
          <p>
            Increasing your annual plan contribution by {increase} will not help you accumulate additional savings as
            your current contribution level has already reached the maximum limit. For example, the year{' '}
            {contributionLimit.year} contribution cap is ${number(contributionLimit.total)} which includes a catch-up
            provision for those age 60 to 63.
          </p>
        ) : (
          <p>
            By increasing your annual plan contribution by {increase} you may increase your final plan balance by{' '}
            <strong>{dollars(results.increase)}</strong> at an out-of-pocket cost of just{' '}
            <strong>{dollars(results.cost)}</strong>.
          </p>
        )}
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Comparison analysis</th>
              <th scope="col" className="is-amount">
                Current Course
              </th>
              <th scope="col" className="is-amount">
                Proposed Course
              </th>
            </tr>
          </thead>
          <tbody>
            {summary.map(([label, now, proposed], index) => (
              <tr key={label} className={index >= summary.length - 2 ? 'is-total' : undefined}>
                <td>{label}</td>
                <td className="is-amount">{now}</td>
                <td className="is-amount">{proposed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <GrowthChart title="Retirement Plan Accumulation" series={chartSeries} variant="is-increase" rows={results.rows} />
    </>
  );
}

// CalcXML's year-by-year table: the first row's amounts with dollar signs, the rest without.
function Details({ results }) {
  const interest = `Interest ${percent(results.inputs.planReturn, 2)}`;
  return (
    <section aria-labelledby="calc-details">
      <h3 id="calc-details">Detailed Data Table</h3>
      <div className="article-table is-wide calc-table">
        <table>
          <thead>
            <tr>
              <th scope="colgroup" colSpan={4}>
                Current Course
              </th>
              <th scope="colgroup" colSpan={4}>
                Proposed Increase
              </th>
            </tr>
            <tr>
              <th scope="col">Year</th>
              {['Your Cont', 'Employer Cont', interest, 'Your Cont', 'Employer Cont', interest, 'Grand Total'].map(
                (heading, index) => (
                  <th scope="col" className="is-amount" key={index}>
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {results.rows.map((row, index) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                {[
                  row.yours,
                  row.employer,
                  row.interest,
                  row.extraYours,
                  row.extraEmployer,
                  row.extraInterest,
                  row.grandTotal,
                ].map((amount, column) => (
                  <td className="is-amount" key={column}>
                    {index === 0 ? dollars(amount) : number(amount)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// plan: '457', '403b' or '401k' (see `plans`).
export default function PlanContributionIncrease({ plan: planId = '457' }) {
  const plan = plans[planId];
  return (
    // Keyed by plan, so going from one plan's page to the other starts with a fresh form.
    <CalculatorPage
      key={planId}
      page={plan.page}
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title={plan.title}
      intro={introFor(plan)}
      formTitle={plan.formTitle}
      sections={sectionsFor(plan)}
      defaults={defaults}
      validate={validate}
      calculate={contributionIncrease}
      renderResults={(results) => <Results results={results} plan={plan} />}
      renderDetails={(results) => <Details results={results} />}
      placeholder="Enter your salary, your plan and your contributions, then select Calculate to see how much more a higher contribution could add by retirement, with a summary table, a graph and a year-by-year table."
      note={
        <>
          Your salary rises by the yearly increase you enter, from the second year on; the plan counts no more than $
          {number(compensationLimit)} of this year's salary (the {contributionLimit.year} limit), and the raises after
          build on that. Your contributions, up to ${number(contributionLimit.total)} a year (the {contributionLimit.year} limit
          for {plan.limitFor}, ${number(contributionLimit.base)}, plus the ${number(contributionLimit.catchUp)}{' '}
          catch-up for ages 60 to 63), go in at the start of each pay period, and the employer matches its
          percentage of them on up to its maximum percentage of your salary. Everything in the plan earns the return
          you enter, compounded each pay period. The out-of-pocket cost is the extra you put in, before any tax
          savings; taxes, fees and withdrawals aren't included.
        </>
      }
      cta={{
        title: (
          <>
            Planning for <em>retirement?</em>
          </>
        ),
        text: 'Our team can help you decide how much to save and how it fits with your taxes, in English or Spanish.',
      }}
    />
  );
}
