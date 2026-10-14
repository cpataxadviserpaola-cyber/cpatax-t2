import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import StepTable from './StepTable.jsx';
import { estimateRefund, refundFigures } from './refund.js';
import { businessSection, personalFields, TaxNote, taxAnalysisRows, taxDefaults, validateFilers } from './taxFields.jsx';
import { dollars, percent } from './format.js';

// Source: CalcXML's "Federal income tax calculator" (calculator inc02 on the firm's account, 481),
// which the Resources page used to open on calcxml.com. It's the tax refund estimator's
// calculator without the taxes withheld, and gives the effective and marginal tax rates instead
// of a refund. Its wording is kept word for word: the introduction, the field groups and fields
// (taxFields.jsx), the results sentence, the tax analysis table, the graph's bars and the
// disclaimer. Its tax follows the 2026 rules where CalcXML's doesn't, as the refund estimator's
// does (see refund.js and TaxRefundEstimator.jsx). The effective rate is the tax as a share of
// taxable income and the marginal rate the bracket of its last dollar, as on CalcXML; but with
// pass-through income counted as income (CalcXML gives 0% for both with only pass-through
// income), as it is in the graph's gross annual income. The form is set out as the other
// calculators' are (CalculatorPage.jsx). Address: /resources/calculators/federal-income-tax (the
// calculator's link in the Resources page's Taxation list).

const intro =
  'Taxes are unavoidable and without planning, the annual tax liability can be very uncertain. Use the following calculator to help determine your estimated tax liability along with your average and marginal tax rates.';

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Personal Tax Information',
    fields: personalFields(
      'Taxable gross annual income subject to ordinary income rates (W-2, unearned/investment, business income not eligible for 20% exemption amount, etc)',
    ),
  },
  businessSection,
];

const defaults = taxDefaults(sections);

// The tax, and its rates: on taxable income, and the bracket its last dollar is in (the lowest
// when deductions are more than the income; none with no income).
function calculate(inputs) {
  const results = estimateRefund({ ...inputs, withheld: 0 });
  const liability = Math.max(0, results.liability);
  const grossIncome = Math.max(0, inputs.income + results.business);
  const brackets = refundFigures.brackets[inputs.status];
  const marginal =
    grossIncome > 0 ? (brackets.findLast(([floor]) => results.taxable > floor) ?? brackets[0])[1] : 0;
  return {
    ...results,
    liability,
    grossIncome,
    effective: results.taxable > 0 ? liability / results.taxable : 0,
    marginal,
  };
}

function Results({ results }) {
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Based upon the information you provided, it appears that your estimated federal income tax liability will be
          approximately <strong>{dollars(results.liability)}</strong>. Your effective tax rate is{' '}
          <strong>{percent(results.effective, 1)}</strong> and your marginal tax rate is{' '}
          <strong>{percent(results.marginal, 1)}</strong>.
        </p>
      </div>

      <h3>Summary Table</h3>
      <StepTable
        title="Estimated Tax Analysis"
        rows={taxAnalysisRows(results, {
          gross: 'Gross income (ordinary income rates)',
          ira: 'Traditional IRA contributions',
          tax: 'Tax liability before credits (includes taxes on pass-through income)',
        })}
      />

      <h3>Graph</h3>
      <AlternativesChart
        title="Tax Analysis"
        badge={null}
        rows={[
          { label: 'Tax Liability', value: results.liability, best: true },
          { label: 'Gross Annual Income', value: results.grossIncome },
        ]}
        empty="Enter your income to see the graph."
      />
    </>
  );
}

export default function FederalIncomeTax() {
  return (
    <CalculatorPage
      page="Federal Income Tax"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Federal Income Tax Estimator"
      intro={intro}
      formTitle="Your Tax Year"
      sections={sections}
      defaults={defaults}
      validate={validateFilers}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your income, deductions and dependents, then select Calculate to estimate your federal income tax and your effective and marginal tax rates, with a table and a graph."
      note={
        <>
          <TaxNote /> The effective tax rate is the tax as a share of your taxable income; the marginal rate, the
          bracket your last dollar of taxable income is in.
        </>
      }
      cta={{
        title: (
          <>
            Want to lower <em>your tax?</em>
          </>
        ),
        text: 'Our team can help you plan your taxes for the year ahead, in English or Spanish.',
      }}
    />
  );
}
