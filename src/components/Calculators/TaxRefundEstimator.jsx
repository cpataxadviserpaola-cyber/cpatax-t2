import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import StepTable from './StepTable.jsx';
import { estimateRefund } from './refund.js';
import { businessSection, money, personalFields, TaxNote, taxAnalysisRows, taxDefaults, validateFilers } from './taxFields.jsx';
import { dollars } from './format.js';

// Source: CalcXML's "2026 tax refund estimator" (calculator inc12 on the firm's account, 481),
// which the Resources page used to open on calcxml.com. Its wording is kept word for word: the
// introduction, the field groups and fields (taxFields.jsx, which the other tax calculators
// share), the results sentences, the graph and its bars, the year's tax analysis table, and the
// disclaimer. Its results follow the 2026 rules where CalcXML's don't (see refund.js): a
// traditional IRA deduction up to the year's limit; itemized deductions plus state and local
// taxes up to the SALT cap, whatever the itemized amount (CalcXML ignores SALT with no other
// itemized deductions, and takes off $10,000 when SALT is under it), the cap shrinking for high
// incomes but not below its floor (CalcXML shrinks all itemized deductions); the senior deduction
// for itemizers too; the child and other dependent credits reduced together, by $50 for each
// $1,000 or part of $1,000; the refundable child credit from earned income only, with or without
// tax withheld; and the 20% qualified business income deduction after AGI, phased in over the
// 2026 range (CalcXML takes it off all or nothing, against 2025 thresholds). So the table shows
// pass-through income in full, then the deduction on its own line; the IRA line, unlabeled on
// CalcXML, is named. A business loss lowers AGI, as it does the tax. "Both of Us" is for a joint
// return only. The form is set out as the other calculators' are (CalculatorPage.jsx). Address:
// /resources/calculators/tax-refund-estimator (the calculator's link in the Resources page's
// Taxation list).

const intro =
  'Did you withhold enough in taxes this past year? Use this calculator to help determine whether you might receive a tax refund or still owe additional money to the IRS. Remember this is just a tax estimator so you should file a proper tax return to get exact figures.';

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Personal Tax Information',
    fields: personalFields(
      'Taxable gross annual income subject to personal rates (W-2, unearned/investment, business income not eligible for 20% exemption amount, etc)',
    ),
  },
  businessSection,
  { title: 'Taxes Withheld', fields: [money('withheld', 'Tax amount withheld to date')] },
];

const defaults = taxDefaults(sections);

function Results({ results }) {
  const balance = Math.round(results.balance);
  const owed = balance < 0;
  const rows = [
    ...taxAnalysisRows(results, {
      gross: 'Gross income (subject to personal rates)',
      ira: 'Traditional IRA contribution',
      tax: 'Tax liability before credit (includes taxes on pass-through income)',
    }),
    { label: 'Taxes withheld', sign: '-', value: results.withheld },
    { label: owed ? 'Tax shortfall' : 'Tax surplus', sign: '=', value: Math.abs(results.balance), total: true },
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          It appears that you will have an estimated tax {owed ? 'DUE' : 'REFUND'} of{' '}
          <strong>{dollars(Math.abs(balance))}</strong> for the current tax year.
        </p>
      </div>

      <h3>Graph</h3>
      <AlternativesChart
        title="Tax Analysis"
        badge={null}
        rows={[
          { label: 'Tax Liability', value: Math.max(0, results.liability) },
          { label: 'Taxes Withheld', value: results.withheld },
          { label: owed ? 'Estimated Tax Due' : 'Estimated Tax Refund', value: Math.abs(results.balance), best: true },
        ]}
        empty="Enter your income and what's been withheld to see the graph."
      />

      <h3>Detailed Data Table</h3>
      <StepTable title="Estimated Tax Analysis" rows={rows} />
    </>
  );
}

export default function TaxRefundEstimator() {
  return (
    <CalculatorPage
      page="Tax Refund Estimator"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Tax Refund Estimator"
      intro={intro}
      formTitle="Your Tax Year"
      sections={sections}
      defaults={defaults}
      validate={validateFilers}
      calculate={estimateRefund}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your income, deductions, dependents and what's been withheld, then select Calculate to estimate your refund or what you'll owe, with a graph and a table."
      note={<TaxNote />}
      cta={{
        title: (
          <>
            Want a closer look at <em>your return?</em>
          </>
        ),
        text: 'Our team can prepare your return and help you set your withholding, in English or Spanish.',
      }}
    />
  );
}
