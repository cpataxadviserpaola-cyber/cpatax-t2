import CalculatorPage from './CalculatorPage.jsx';
import PaycheckChart from './PaycheckChart.jsx';
import SummaryTable from './SummaryTable.jsx';
import { bonusNetAfterTaxes, figures } from './withholding.js';
import { dollars, number, percent } from './format.js';

// Source: CalcXML's "How much will my company bonus net after taxes?" (calculator pay01 on the
// firm's account, 481), which the Resources page used to open on calcxml.com. Its wording is
// kept word for word: the introduction, the fields and their help, the results sentence, the
// summary table, the graph's parts and the disclaimer. Its figures are brought up to date (see
// withholding.js), and a note under the results says which ones it uses. The form is set out
// for this site (see CalculatorPage.jsx): its fields in three groups, the units CalcXML put in
// the labels ("($)", "(%)") shown in the boxes, a switch for filing status, buttons to step the
// allowances, and each help note behind a "?" button, as CalcXML's help bubbles were. Left out:
// the "Powered by CalcXML" logos. Address: /resources/calculators/bonus-net-after-taxes (the
// calculator's link in the Resources page's Paycheck and Benefits list).

const intro =
  'A bonus from your employer is always a good thing, however, you may want to estimate what you will actually take-home after federal withholding taxes, social security taxes and other deductions are taken out. Use this calculator to help determine your net take-home pay from a company bonus.';

// CalcXML's fields, in its order, in three groups.
const sections = [
  { title: 'Bonus', fields: [{ name: 'bonus', label: 'Amount of bonus', kind: 'money', max: 99999999 }] },
  {
    title: 'Your paycheck',
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
      { name: 'pay', label: 'Gross earnings per pay period', kind: 'money', max: 99999999 },
      {
        name: 'status',
        label: 'Filing status',
        control: 'switch',
        options: [
          { value: 'M', label: 'Married' },
          { value: 'S', label: 'Single' },
        ],
      },
      {
        name: 'allowances',
        label: 'Number of allowances claimed',
        kind: 'count',
        max: 25,
        steps: ['Remove an allowance', 'Add an allowance'],
      },
    ],
  },
  {
    title: 'Deductions from each paycheck',
    fields: [
      {
        name: 'preTax',
        label: 'Miscellaneous pre-tax deductions',
        kind: 'money',
        max: 99999999,
        help: 'Enter any pre-tax deductions not including 401(k)/403(b) contributions (i.e. medical employee contributions, cafeteria plan items such as group life, group dental, accidental death and dismemberment, day care, health care, etc.). Should be listed on pay stub.',
      },
      {
        name: 'retirementRate',
        label: 'Before-tax 401(k)/403(b)/457 withholding percentage',
        kind: 'percent',
        max: 100,
      },
      {
        name: 'postTax',
        label: 'Miscellaneous post-tax deductions',
        kind: 'money',
        max: 99999999,
        help: 'Enter any post-tax deductions such as supplemental life, disability, payments to credit union, etc. made by employer. Should be listed on pay stub.',
      },
      { name: 'reimbursements', label: 'Post-tax reimbursements', kind: 'money', max: 99999999 },
    ],
  },
];

const defaults = {
  bonus: '0',
  periods: '26',
  pay: '0',
  status: 'M',
  allowances: '2',
  preTax: '0',
  retirementRate: '0',
  postTax: '0',
  reimbursements: '0',
};

// The summary table's rows, as on CalcXML: a label and the paycheck's and bonus's values, or
// a group heading.
function summaryRows({ inputs, pay, bonus }) {
  const rate = percent(inputs.retirementRate, 2);
  return [
    { label: 'Gross Pay', values: [dollars(pay.gross), dollars(bonus.gross)] },
    { group: 'Withholdings' },
    { label: 'Marital status: (M/S)', values: [inputs.status, inputs.status] },
    { label: 'Allowances', values: [inputs.allowances, inputs.allowances] },
    { label: 'Federal tax withheld', values: [dollars(pay.federal), dollars(bonus.federal)] },
    { group: 'Pre-Tax Deductions' },
    { label: 'Miscellaneous', values: [dollars(pay.preTax), 'n/a'] },
    { label: 'FICA', values: [dollars(pay.socialSecurity), dollars(bonus.socialSecurity)] },
    { label: 'FICA - health insurance', values: [dollars(pay.medicare), dollars(bonus.medicare)] },
    { label: '401(k)/403(b)/457: (%)', values: [rate, rate] },
    { label: '401(k)/403(b)/457: ($)', values: [dollars(pay.retirement), dollars(bonus.retirement)] },
    { group: 'After-Tax Deductions' },
    { label: 'Miscellaneous', values: [dollars(pay.postTax), 'n/a'] },
    { label: '+ Reimbursement', values: [dollars(pay.reimbursements), 'n/a'] },
    { group: 'Summary' },
    { label: 'Gross pay', values: [dollars(pay.gross), dollars(bonus.gross)] },
    { label: 'Total deductions', values: [dollars(pay.deductions), dollars(bonus.deductions)] },
    { label: 'Take-home pay', values: [dollars(pay.takeHome), dollars(bonus.takeHome)] },
  ];
}

// The graph's two bars, with CalcXML's names for them and their parts.
function chartRows({ pay, bonus }) {
  return [
    {
      label: 'Current Pay',
      gross: pay.gross,
      takeHome: pay.takeHome,
      values: {
        takeHome: pay.takeHome,
        taxes: pay.federal,
        fica: pay.socialSecurity + pay.medicare,
        retirement: pay.retirement,
        preTax: pay.preTax,
        afterTax: pay.postTax - pay.reimbursements,
      },
    },
    {
      label: 'Bonus',
      gross: bonus.gross,
      takeHome: bonus.takeHome,
      values: {
        takeHome: bonus.takeHome,
        taxes: bonus.federal,
        fica: bonus.socialSecurity + bonus.medicare,
        retirement: bonus.retirement,
        preTax: 0,
        afterTax: 0,
      },
    },
  ];
}

function Results({ results }) {
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          It appears that for the next pay period your net take-home pay will be increased{' '}
          <strong>{dollars(results.bonus.takeHome)}</strong> when receiving a{' '}
          <strong>{dollars(results.bonus.gross)}</strong> bonus.
        </p>
      </div>

      <h3>Summary Table</h3>
      <SummaryTable head={['Paycheck and Bonus Analysis', 'Current Paycheck', 'Bonus']} rows={summaryRows(results)} />

      <h3>Graph</h3>
      <PaycheckChart title="Paycheck And Bonus Analysis" rows={chartRows(results)} />
    </>
  );
}

const { allowance, socialSecurity, medicare, supplementalOverMillion } = figures;

export default function BonusNetAfterTaxes() {
  return (
    <CalculatorPage
      page="Company Bonus"
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title="How Much Will My Company Bonus Net After Taxes?"
      intro={intro}
      formTitle="Bonus and Current Paycheck Information"
      sections={sections}
      defaults={defaults}
      calculate={bonusNetAfterTaxes}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your bonus, your paycheck and its deductions, then select Calculate to see what the bonus adds to your take-home pay, with a summary table and a graph."
      note={
        <>
          Federal income tax withholding uses the {figures.year} IRS percentage method tables (Publication 15-T)
          for a Form W-4 from 2019 or earlier, with each allowance worth ${number(allowance)}. The bonus is withheld
          by the aggregate method: the tax on the paycheck and bonus together, less the tax on the paycheck alone (
          {percent(supplementalOverMillion.rate)} on any part over ${number(supplementalOverMillion.threshold)}).
          Social Security (FICA) is {percent(socialSecurity.rate)} of the year's pay up to $
          {number(socialSecurity.wageBase)}, and Medicare (FICA - health insurance) is {percent(medicare.rate)},
          plus {percent(medicare.additionalRate)} on pay over ${number(medicare.additionalOver)}. State and local
          taxes aren't included.
        </>
      }
      cta={{
        title: (
          <>
            Planning around a <em>bonus?</em>
          </>
        ),
        text: 'Our team can help you set your withholding and plan for the tax on a bonus, in English or Spanish.',
      }}
    />
  );
}
