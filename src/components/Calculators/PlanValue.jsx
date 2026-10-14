import CalculatorPage from './CalculatorPage.jsx';
import GrowthChart from './GrowthChart.jsx';
import { returnsHelp } from './helpCharts.jsx';
import { compensationLimit, contributionLimit, matchRules, planValue } from './planContributions.js';
import { dollars, number, percent } from './format.js';

// Source: CalcXML's "What may my 403(b) Plan be worth?", "What may my 401(k) be worth?" and
// "What may my 457 Plan be worth?" (calculators pay11, pay07 and pay09 on the firm's account,
// 481), which the Resources page used to open on calcxml.com. They're the same calculator for
// three plans but for their wording, the most you can enter as your contribution, and how they
// read the maximum employer match (see matchRules in planContributions.js); this page is all
// three (`plans`). Their wording is kept word
// for word: the introduction, the field groups and fields, the help chart, the results sentence
// and its note on the contribution limit, the summary table, the graph, the year-by-year table
// and the disclaimer; and their results to the dollar, with two exceptions. Where a negative
// return meets a balance already in the plan, CalcXML's total takes the balance after one year;
// this takes it at retirement, as the graph and table do. And the limit note shows whenever a
// year's contribution is held to the limit, not only the first year's, and gives the limit's
// year (CalcXML's 401(k) note says 2024 beside the 2026 figure) and the ages its catch-up is
// for, 60 to 63 (CalcXML says 50 and older, whose limit is lower). The form is set out as the
// other calculators' are (CalculatorPage.jsx). Addresses: /resources/calculators/403b-plan-value,
// /resources/calculators/401k-plan-value and /resources/calculators/457-plan-value (the
// calculators' links in the Resources page's Paycheck and Benefits list).

// What differs between the plans: the plan's name as the introduction and each label have it,
// the most you can enter as your contribution, the match rule, and the decimals the results
// sentence gives your contribution to (4.00%, but 4.0% for the 457 Plan, as on CalcXML).
const employerShareNote = 'the employer adds its percentage of them, up to its maximum percentage of your salary';
const plans = {
  '403b': {
    page: '403(b) Plan Value',
    title: 'What May My 403(b) Plan Be Worth?',
    formTitle: 'Your 403(b) Plan',
    inIntro: '403(b) Plan',
    balance: 'Current 403(b) Plan balance',
    contribution: 'Current before-tax 403(b) Plan contribution',
    maxContribution: 20,
    limitFor: '403(b) plans',
    rule: matchRules.matchedPay,
    matchNote: 'the employer matches its percentage of them on up to its maximum percentage of your salary',
    sentenceDigits: 2,
  },
  '401k': {
    page: '401(k) Plan Value',
    title: 'What May My 401(k) Be Worth?',
    formTitle: 'Your 401(k) Plan',
    inIntro: '401(k) plan',
    balance: 'Current 401(k) balance',
    contribution: 'Current before-tax 401(k) plan contribution',
    maxContribution: 50,
    limitFor: '401(k) plans',
    rule: matchRules.employerShare,
    matchNote: employerShareNote,
    sentenceDigits: 2,
  },
  457: {
    page: '457 Plan Value',
    title: 'What May My 457 Plan Be Worth?',
    formTitle: 'Your 457 Plan',
    inIntro: '457 Plan',
    balance: 'Current 457 Plan balance',
    contribution: 'Current before-tax 457 Plan contribution',
    maxContribution: 20,
    limitFor: '457 plans',
    rule: matchRules.employerShare,
    matchNote: employerShareNote,
    sentenceDigits: 1,
  },
};

const introFor = (plan) =>
  `It may surprise you how significant your retirement accumulation may become simply by saving a small percentage of your salary each month in your ${plan.inIntro}. Use this calculator to estimate how much your plan may accumulate for retirement.`;

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
      { name: 'raises', label: 'Annual salary increases', kind: 'percent', max: 10 },
    ],
  },
  {
    title: 'Plan Information',
    fields: [
      { name: 'balance', label: plan.balance, kind: 'money', max: 999999999 },
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
      {
        name: 'planReturn',
        label: 'Annual before-tax return on savings',
        kind: 'percent',
        min: -12,
        max: 12,
        help: returnsHelp,
      },
      { name: 'match', label: 'Employer match', kind: 'percent', max: 300 },
      { name: 'maxMatch', label: 'Maximum employer match', kind: 'percent', max: 20 },
    ],
  },
  {
    title: 'Contribution Information',
    fields: [{ name: 'current', label: plan.contribution, kind: 'percent', max: plan.maxContribution }],
  },
];

const defaults = {
  years: '30',
  income: '0',
  raises: '3',
  balance: '0',
  periods: '26',
  planReturn: '8',
  match: '100',
  maxMatch: '3',
  current: '4',
};

// The graph's parts, in CalcXML's order up each column.
const chartSeries = [
  { key: 'startingBalance', label: 'Current Balance' },
  { key: 'yoursSoFar', label: 'Your Contribution' },
  { key: 'employerSoFar', label: 'Employer Match' },
  { key: 'interestSoFar', label: 'Interest Growth' },
];

function Results({ results, plan }) {
  const { inputs } = results;
  const summary = [
    ['Your contribution', percent(inputs.current, 1), dollars(results.firstYear.yours)],
    ['Employer match', percent(inputs.match, 1), dollars(results.firstYear.employer)],
    ['Maximum employer contribution', percent(inputs.maxMatch, 1), dollars(results.firstYear.maxEmployer)],
    ['Your cumulative contributions', '', dollars(results.yours)],
    ['Employer cumulative contributions', '', dollars(results.employer)],
    [`Total before-tax value in year ${inputs.years}`, '', dollars(results.total)],
  ];

  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          By contributing {percent(inputs.current, plan.sentenceDigits)} of your salary to your retirement plan you may accumulate a
          plan balance of <strong>{dollars(results.total)}</strong> at retirement at an out-of-pocket cost of just{' '}
          <strong>{dollars(results.yours)}</strong>.
        </p>
        {results.capped && (
          <p className="calc-answer-note">
            NOTE: Your total annual contribution(s) have been adjusted downward to reflect the maximum limit. For
            example, the year {contributionLimit.year} contribution cap is ${number(contributionLimit.total)} which
            includes a catch-up provision for those age 60 to 63.
          </p>
        )}
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Accumulation analysis</th>
              <th scope="col" className="is-amount">
                (%)
              </th>
              <th scope="col" className="is-amount">
                ($)
              </th>
            </tr>
          </thead>
          <tbody>
            {summary.map(([label, rate, amount], index) => (
              <tr key={label} className={index === summary.length - 1 ? 'is-total' : undefined}>
                <td>{label}</td>
                <td className="is-amount">{rate}</td>
                <td className="is-amount">{amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <GrowthChart
        title="Retirement Plan Accumulation"
        series={chartSeries}
        variant="is-accumulation"
        rows={results.rows}
      />
    </>
  );
}

// CalcXML's year-by-year table: the first row's amounts with dollar signs, the rest without.
function Details({ results }) {
  const headings = [
    'Beginning Balance',
    'Your Contribution',
    'Employer Contribution',
    `Interest at ${percent(results.inputs.planReturn, 1)}`,
    'Ending Balance',
  ];
  return (
    <section aria-labelledby="calc-details">
      <h3 id="calc-details">Detailed Data Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Year</th>
              {headings.map((heading) => (
                <th scope="col" className="is-amount" key={heading}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.rows.map((row, index) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                {[row.begin, row.yours, row.employer, row.interest, row.end].map((amount, column) => (
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

// plan: '403b', '401k' or '457' (see `plans`).
export default function PlanValue({ plan: planId = '403b' }) {
  const plan = plans[planId];
  return (
    <CalculatorPage
      // A new plan starts with a fresh form, not the other plan's entries and results.
      key={planId}
      page={plan.page}
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title={plan.title}
      intro={introFor(plan)}
      formTitle={plan.formTitle}
      sections={sectionsFor(plan)}
      defaults={defaults}
      calculate={(inputs) => planValue(inputs, plan.rule)}
      renderResults={(results) => <Results results={results} plan={plan} />}
      renderDetails={(results) => <Details results={results} />}
      placeholder="Enter your salary, your plan and your contribution, then select Calculate to see what your plan may be worth at retirement, with a summary table, a graph and a year-by-year table."
      note={
        <>
          Your salary rises by the yearly increase you enter, from the second year on; the plan counts no more than $
          {number(compensationLimit)} of this year's salary (the {contributionLimit.year} limit), and the raises after
          build on that. Your contributions, up to ${number(contributionLimit.total)} a year (the{' '}
          {contributionLimit.year} limit for {plan.limitFor}, ${number(contributionLimit.base)}, plus the $
          {number(contributionLimit.catchUp)} catch-up for ages 60 to 63), go in at the start of each pay period, and{' '}
          {plan.matchNote}. Everything in the plan earns the return you enter, compounded each pay period. The out-of-pocket cost is what you put in,
          before any tax savings; taxes, fees and withdrawals aren't included.
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
