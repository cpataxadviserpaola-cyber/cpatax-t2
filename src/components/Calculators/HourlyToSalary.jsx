import CalculatorPage from './CalculatorPage.jsx';
import ResultFigures from './ResultFigures.jsx';
import { dollars } from './format.js';

// Source: CalcXML's "Convert my hourly wage to an equivalent annual salary" (calculator pay04 on
// the firm's account, 481), which the Resources page used to open on calcxml.com. Its wording is
// kept word for word: the introduction, the field groups and fields, the results sentence and
// the disclaimer; and its results to the dollar. Its results are the one sentence; the three
// amounts in it are also set out on their own under it, as on the salary-to-hourly calculator
// (SalaryToHourly.jsx), its counterpart. The form is set out as the other calculators' are
// (CalculatorPage.jsx), with buttons to step the hours and weeks. Address:
// /resources/calculators/hourly-to-salary (the calculator's link in the Resources page's
// Paycheck and Benefits list).

const intro =
  'Use this calculator to determine your equivalent annual salary when given what you get paid per hour - it may surprise you what you make on a yearly basis.';

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Wage Information',
    fields: [{ name: 'wage', label: 'Hourly wage', kind: 'money', max: 999999999 }],
  },
  {
    title: 'Assumptions',
    fields: [
      {
        name: 'hours',
        label: 'Work hours per week',
        kind: 'count',
        min: 1,
        max: 80,
        steps: ['One hour fewer', 'One hour more'],
      },
      {
        name: 'weeks',
        label: 'Work weeks per year',
        kind: 'count',
        min: 1,
        max: 52,
        steps: ['One week fewer', 'One week more'],
      },
    ],
  },
];

const defaults = { wage: '0', hours: '40', weeks: '52' };

const calculate = ({ wage, hours, weeks }) => {
  const annual = wage * hours * weeks;
  return { weekly: wage * hours, monthly: annual / 12, annual };
};

// The hourly rate as entered, to the cent, a half cent rounding up as on CalcXML ($12.345 is
// $12.35); the results use it in full.
const cents = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const rate = (amount) => cents.format(Math.round(Number((amount * 100).toPrecision(12))) / 100);

function Results({ results }) {
  const figures = [
    ['Weekly pay', dollars(results.weekly)],
    ['Monthly pay', dollars(results.monthly)],
    ['Annual salary', dollars(results.annual)],
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          An hourly rate of <strong>{rate(results.inputs.wage)}</strong> equates to a weekly pay of{' '}
          <strong>{figures[0][1]}</strong>, monthly pay of <strong>{figures[1][1]}</strong>, and an annual salary of{' '}
          <strong>{figures[2][1]}</strong>.
        </p>
      </div>
      <ResultFigures figures={figures} />
    </>
  );
}

export default function HourlyToSalary() {
  return (
    <CalculatorPage
      page="Hourly Wage to Salary"
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title="Convert My Hourly Wage To An Equivalent Annual Salary"
      intro={intro}
      formTitle="Your Wage"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your hourly wage and the hours and weeks you work, then select Calculate to see what it comes to each week, each month and each year."
      note={
        <>
          Weekly pay is the hourly wage times the hours you work each week; the annual salary, weekly pay times the
          weeks you work in a year; and monthly pay, the annual salary divided by 12. All are before taxes and other
          deductions.
        </>
      }
      cta={{
        title: (
          <>
            Weighing a <em>job offer?</em>
          </>
        ),
        text: 'Our team can help you compare pay, benefits and the taxes on them, in English or Spanish.',
      }}
    />
  );
}
