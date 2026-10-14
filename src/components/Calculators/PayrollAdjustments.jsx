import CalculatorPage from './CalculatorPage.jsx';
import PaycheckChart from './PaycheckChart.jsx';
import SummaryTable from './SummaryTable.jsx';
import { figures, paycheck } from './withholding.js';
import { dollars, number, percent } from './format.js';

// Source: CalcXML's "How will payroll adjustments affect my take-home pay?" (calculator pay02
// on the firm's account, 481), which the Resources page used to open on calcxml.com. Its
// wording is kept word for word: the introduction, the field groups and fields, the results
// sentence, the summary table, the graph's parts and the disclaimer. It figures each paycheck
// as the bonus calculator does (paycheck() in withholding.js), with the same up-to-date
// figures in place of CalcXML's 2021 ones, and a note under the results says which ones. The
// form is set out as the other calculators' are (CalculatorPage.jsx), with the Current and
// What-If entries side by side under their headings, as on CalcXML. Address:
// /resources/calculators/payroll-adjustments (the calculator's link in the Resources page's
// Paycheck and Benefits list).

const intro =
  'Contributions to a qualified plan, participation in a company-sponsored cafeteria plan, change in filing status, or number of allowances claimed will have a direct impact on take-home pay. For example, due to federal tax savings, contributions to a qualified plan do not translate into a direct dollar-for-dollar tradeoff on take-home pay. Use this take home pay calculator to help compare your current situation to what-if scenarios.';

// CalcXML's fields, in its order and groups; each entry under Paycheck Information and
// Assumptions is given for the current paycheck (…1) and the what-if one (…2).
const sections = [
  {
    title: 'Paycheck Frequency',
    fields: [
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
    ],
  },
  {
    title: 'Paycheck Information and Assumptions',
    columns: ['Current', 'What-If'],
    rows: [
      { label: 'Gross earnings per pay period', names: ['pay1', 'pay2'], kind: 'money', max: 99999999 },
      {
        label: 'Filing status',
        names: ['status1', 'status2'],
        control: 'switch',
        options: [
          { value: 'M', label: 'Married' },
          { value: 'S', label: 'Single' },
        ],
      },
      {
        label: 'Number of allowances claimed',
        names: ['allowances1', 'allowances2'],
        kind: 'count',
        max: 25,
        steps: ['Remove an allowance', 'Add an allowance'],
      },
      { label: 'Miscellaneous pre-tax deductions', names: ['preTax1', 'preTax2'], kind: 'money', max: 99999999 },
      {
        label: 'Before-tax 401(k)/403(b)/457 withholding percentage',
        names: ['retirementRate1', 'retirementRate2'],
        kind: 'percent',
        max: 100,
      },
      { label: 'Miscellaneous post-tax deductions', names: ['postTax1', 'postTax2'], kind: 'money', max: 99999999 },
      {
        label: 'Post-tax reimbursements',
        names: ['reimbursements1', 'reimbursements2'],
        kind: 'money',
        max: 99999999,
      },
    ],
  },
];

const defaults = {
  periods: '26',
  pay1: '0',
  pay2: '0',
  status1: 'M',
  status2: 'M',
  allowances1: '2',
  allowances2: '2',
  preTax1: '0',
  preTax2: '0',
  retirementRate1: '0',
  retirementRate2: '0',
  postTax1: '0',
  postTax2: '0',
  reimbursements1: '0',
  reimbursements2: '0',
};

// The entries for one column (1 current, 2 what-if), as paycheck() takes them.
const entriesFor = (inputs, column) => ({
  periods: inputs.periods,
  ...Object.fromEntries(
    ['pay', 'status', 'allowances', 'preTax', 'retirementRate', 'postTax', 'reimbursements'].map((key) => [
      key,
      inputs[`${key}${column}`],
    ]),
  ),
});

const calculate = (inputs) => ({ current: paycheck(entriesFor(inputs, 1)), whatIf: paycheck(entriesFor(inputs, 2)) });

// The summary table's rows, as on CalcXML: each with the current and what-if values and the
// change between them.
function summaryRows({ inputs, current, whatIf }) {
  const money = (key) => [dollars(current[key]), dollars(whatIf[key]), dollars(whatIf[key] - current[key])];
  const { retirementRate1: rate1, retirementRate2: rate2 } = inputs;
  return [
    { label: 'Gross Earnings', values: money('gross') },
    { group: 'Withholdings & FICA' },
    { label: 'Marital status: (M/S)', values: [inputs.status1, inputs.status2, ''] },
    {
      label: 'Allowances',
      values: [inputs.allowances1, inputs.allowances2, inputs.allowances2 - inputs.allowances1],
    },
    { label: 'Federal tax withheld', values: money('federal') },
    { label: 'FICA', values: money('socialSecurity') },
    { label: 'FICA - health insurance', values: money('medicare') },
    { group: 'Pre-Tax Deductions' },
    { label: 'Miscellaneous', values: money('preTax') },
    { label: '401(k)/403(b)/457: (%)', values: [percent(rate1, 2), percent(rate2, 2), percent(rate2 - rate1, 2)] },
    { label: '401(k)/403(b)/457: ($)', values: money('retirement') },
    { group: 'After-Tax Deductions' },
    { label: 'Miscellaneous', values: money('postTax') },
    { label: '+ Reimbursement', values: money('reimbursements') },
    { group: 'Summary' },
    { label: 'Gross pay', values: money('gross') },
    { label: 'Total deductions', values: money('deductions') },
    { label: 'Take-home pay', values: money('takeHome') },
  ];
}

// The graph's two bars, with CalcXML's names for them and their parts.
const chartRow = (label, check) => ({
  label,
  gross: check.gross,
  takeHome: check.takeHome,
  values: {
    takeHome: check.takeHome,
    taxes: check.federal,
    fica: check.socialSecurity + check.medicare,
    retirement: check.retirement,
    preTax: check.preTax,
    afterTax: check.postTax - check.reimbursements,
  },
});

function Results({ results }) {
  const change = Math.round(results.whatIf.takeHome - results.current.takeHome);
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          {change === 0 ? (
            'It appears that your take-home pay will not be impacted.'
          ) : (
            <>
              It appears that your take-home pay will be adjusted {change > 0 ? 'upward' : 'downward'}{' '}
              <strong>{dollars(Math.abs(change))}</strong> under the proposed scenario.
            </>
          )}
        </p>
      </div>

      <h3>Summary Table</h3>
      <SummaryTable head={['Paycheck Analysis', 'Current', 'What-If', 'Change']} rows={summaryRows(results)} />

      <h3>Graph</h3>
      <PaycheckChart
        title="Paycheck Analysis"
        rows={[chartRow('Current', results.current), chartRow('What If', results.whatIf)]}
      />
    </>
  );
}

const { allowance, socialSecurity, medicare } = figures;

export default function PayrollAdjustments() {
  return (
    <CalculatorPage
      page="Payroll Adjustments"
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title="How Will Payroll Adjustments Affect My Take-Home Pay?"
      intro={intro}
      formTitle="Your Paycheck"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your paycheck as it is now and as it would be, then select Calculate to see how the change affects your take-home pay, with a summary table and a graph."
      note={
        <>
          Federal income tax withholding uses the {figures.year} IRS percentage method tables (Publication 15-T)
          for a Form W-4 from 2019 or earlier, with each allowance worth ${number(allowance)}. Social Security (FICA)
          is {percent(socialSecurity.rate)} of the year's pay up to ${number(socialSecurity.wageBase)}, and Medicare
          (FICA - health insurance) is {percent(medicare.rate)}, plus {percent(medicare.additionalRate)} on pay over $
          {number(medicare.additionalOver)}. Miscellaneous pre-tax deductions come off before both; 401(k)/403(b)/457
          contributions only before income tax. State and local taxes aren't included.
        </>
      }
      cta={{
        title: (
          <>
            Thinking about a <em>payroll change?</em>
          </>
        ),
        text: 'Our team can help you set your withholding and choose your benefits, in English or Spanish.',
      }}
    />
  );
}
