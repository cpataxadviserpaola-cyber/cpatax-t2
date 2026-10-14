import CalculatorPage from './CalculatorPage.jsx';
import ResultFigures from './ResultFigures.jsx';
import StepTable from './StepTable.jsx';
import { checkWithholding } from './withholdingCheck.js';
import { businessSection, money, personalFields, TaxNote, taxAnalysisRows, taxDefaults, validateFilers } from './taxFields.jsx';
import { dollars, number } from './format.js';

// Source: CalcXML's "Payroll withholdings calculator" (calculator inc03 on the firm's account,
// 481), which the Resources page used to open on calcxml.com. It's the tax refund estimator's
// calculator with the year's withholding projected from the last paycheck (withholdingCheck.js).
// Its wording is kept word for word, defaults included: the introduction, the field groups and
// fields (taxFields.jsx, with this one's withholding information), the results sentences
// ("beginnng" reads "beginning"), the tax analysis table and the disclaimer. Its tax follows the
// 2026 rules where CalcXML's doesn't, as the refund estimator's does (see refund.js and
// TaxRefundEstimator.jsx), and counts the refundable part of the child credit toward the tax.
// CalcXML has no graph; the amounts the advice rests on are set out under the sentence instead.
// The form is set out as the other calculators' are (CalculatorPage.jsx). Address:
// /resources/calculators/payroll-withholdings (the calculator's link in the Resources page's
// Taxation list).

const intro =
  'Each April many taxpayers are surprised as they realize that they have either over withheld or under withheld on their taxes. Use this paycheck withholding calculator at least annually to help determine whether you are likely to be on target based on your current tax filing status and the number of W-4 allowances claimed. Then make adjustments to your employer W-4 form, if necessary, to more closely match your 2026 federal tax liability. In the event of a projected tax surplus, you may be able to increase your W-4 paycheck withholding allowances and, thereby, increase your paycheck amount.';

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Income and Tax Information',
    fields: personalFields('Taxable gross annual income subject to ordinary income rates (W-2, unearned/investment, etc)'),
  },
  businessSection,
  {
    title: 'Withholding Information',
    fields: [
      money('withheld', 'Federal taxes withheld to date'),
      money('lastPaycheck', 'Tax amount withheld last pay period', { max: 999999999 }),
      {
        name: 'periods',
        label: 'Payment frequency',
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
];

const defaults = taxDefaults(sections, { otherDependents: '2', periods: '24' });

function Results({ results }) {
  const surplus = Math.round(results.balance) >= 0;
  const rows = [
    ...taxAnalysisRows(results, {
      gross: 'Gross income',
      ira: 'Qualified Plan Contributions',
      tax: 'Tax liability before credits',
    }),
    { label: 'Taxes withheld to date', value: results.inputs.withheld },
    { label: 'Taxes yet to be withheld', sign: '+', value: results.toCome },
    { label: 'Total taxes withheld/to be withheld', sign: '=', value: results.totalWithheld },
    { label: surplus ? 'Tax surplus' : 'Tax shortfall', value: Math.abs(results.balance), total: true },
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          It appears that with your current withholdings you will have a tax {surplus ? 'SURPLUS' : 'SHORTFALL'} of{' '}
          <strong>{dollars(Math.abs(results.balance))}</strong> for the upcoming tax year, consider{' '}
          {surplus ? 'DECREASING' : 'INCREASING'} the total amount withheld each paycheck to{' '}
          <strong>{dollars(results.perPaycheck)}</strong> from now until the end of the year. Then rerun this calculator
          at the beginning of next year so that your future withholdings will more closely match your estimated tax
          liability.
        </p>
      </div>
      <ResultFigures
        figures={[
          ['Pay periods left this year', number(results.periodsLeft)],
          ['Withheld each paycheck now', dollars(results.inputs.lastPaycheck)],
          ['Withhold each paycheck', dollars(results.perPaycheck)],
        ]}
      />

      <h3>Detailed Data Table</h3>
      <StepTable title="Estimated Tax Analysis" rows={rows} />
    </>
  );
}

export default function PayrollWithholdings() {
  return (
    <CalculatorPage
      page="Payroll Withholdings"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Should I Adjust My Payroll Withholdings?"
      intro={intro}
      formTitle="Your Tax Year and Paychecks"
      sections={sections}
      defaults={defaults}
      validate={validateFilers}
      calculate={(inputs) => checkWithholding(inputs)}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your income, deductions, dependents and what's been withheld from your paychecks, then select Calculate to see whether you're on track and what to withhold from each paycheck for the rest of the year."
      note={
        <>
          <TaxNote /> The rest of the year's withholding is the last paycheck's for each pay period left, counted from
          today; the amount to withhold each paycheck is what's still to pay, after what's been withheld and the
          refundable child credit, spread over those pay periods.
        </>
      }
      cta={{
        title: (
          <>
            Need help with <em>your W-4?</em>
          </>
        ),
        text: 'Our team can help you set your withholding so there are no surprises at tax time, in English or Spanish.',
      }}
    />
  );
}
