import CalculatorPage from './CalculatorPage.jsx';
import ResultFigures from './ResultFigures.jsx';
import { dollars } from './format.js';

// Source: CalcXML's "Convert my salary to an equivalent hourly wage" (calculator pay03 on the
// firm's account, 481), which the Resources page used to open on calcxml.com. Its wording is
// kept word for word: the introduction, the field groups and fields, the results sentence and
// the disclaimer; and its results to the cent. Its results are the one sentence; the three
// amounts in it are also set out on their own under it. The form is set out as the other
// calculators' are (CalculatorPage.jsx), with buttons to step the hours and weeks. Address:
// /resources/calculators/salary-to-hourly (the calculator's link in the Resources page's
// Paycheck and Benefits list).

const intro =
  'Use this calculator to determine what your hourly wage equates to when given your annual salary - it may surprise you what you make on an hourly basis.';

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Wage Information',
    fields: [{ name: 'salary', label: 'Annual salary', kind: 'money', max: 999999999 }],
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

const defaults = { salary: '0', hours: '40', weeks: '52' };

const calculate = ({ salary, hours, weeks }) => ({
  monthly: salary / 12,
  weekly: salary / weeks,
  hourly: salary / (weeks * hours),
});

const cents = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function Results({ results }) {
  const figures = [
    ['Monthly pay', dollars(results.monthly)],
    ['Weekly pay', dollars(results.weekly)],
    ['Hourly wage', cents.format(results.hourly)],
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          A salary of <strong>{dollars(results.inputs.salary)}</strong> equates to a monthly pay of{' '}
          <strong>{figures[0][1]}</strong>, weekly pay of <strong>{figures[1][1]}</strong>, and an hourly wage of{' '}
          <strong>{figures[2][1]}</strong>.
        </p>
      </div>
      <ResultFigures figures={figures} />
    </>
  );
}

export default function SalaryToHourly() {
  return (
    <CalculatorPage
      page="Salary to Hourly Wage"
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title="Convert My Salary To An Equivalent Hourly Wage"
      intro={intro}
      formTitle="Your Salary"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your annual salary and the hours and weeks you work, then select Calculate to see what it comes to each month, each week and each hour."
      note={
        <>
          Monthly pay is the annual salary divided by 12; weekly pay, the salary divided by the weeks you work in a
          year; and the hourly wage, the salary divided by the hours you work in a year (hours a week times weeks a
          year). All are before taxes and other deductions.
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
