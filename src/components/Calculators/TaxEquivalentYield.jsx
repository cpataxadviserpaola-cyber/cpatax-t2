import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import { returnsHelp, taxBracketsHelp } from './helpCharts.jsx';
import { percent } from './format.js';

// Source: CalcXML's "What is my tax-equivalent yield?" (calculator inc11 on the firm's account,
// 481), which the Resources page used to open on calcxml.com. Its wording is kept word for
// word: the introduction and its note, the field group and fields, the help chart and tax
// table, the results sentence, the graph and its bars, and the disclaimer; and its results to
// the hundredth of a percent. The form is set out as the other calculators' are
// (CalculatorPage.jsx), each field on its own row, in CalcXML's order, so the tax table has
// room. Address: /resources/calculators/tax-equivalent-yield (the calculator's link in the
// Resources page's Taxation list).

const intro =
  'Tax-free investments such as municipal bonds have lower yields due to their tax-exempt status. Use this calculator to determine an equivalent yield on a taxable investment. The higher your marginal tax bracket (state and federal), the higher the tax-equivalent yield. Note: This calculator assumes state taxes paid are fully deductible on your federal form. If that is not the case then include state tax percentage as part of the federal tax percentage.';

const sections = [
  {
    title: 'Rates and Assumptions',
    fields: [
      { name: 'taxFree', label: 'Tax-free yield', kind: 'percent', min: -12, max: 12, help: returnsHelp, wide: true },
      { name: 'federal', label: 'Federal marginal tax bracket', kind: 'percent', max: 75, help: taxBracketsHelp, wide: true },
      { name: 'state', label: 'State marginal tax bracket', kind: 'percent', max: 75, wide: true },
    ],
  },
];

const defaults = { taxFree: '5', federal: '5', state: '7' };

// The taxable yields that leave the same return after tax: after federal tax alone, and after
// state tax too (deductible on the federal return, so the two rates compound).
const calculate = ({ taxFree, federal, state }) => ({
  federalOnly: taxFree / (1 - federal),
  stateAndFederal: taxFree / ((1 - federal) * (1 - state)),
});

const rate = (value) => percent(value, 2);

function Results({ results }) {
  const { inputs } = results;
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          A {rate(inputs.taxFree)} tax-free return has a tax-equivalent yield of{' '}
          <strong>{rate(results.stateAndFederal)}</strong> when subject to both federal and state income taxes and{' '}
          <strong>{rate(results.federalOnly)}</strong> when exempt from only federal income taxes.
        </p>
      </div>

      <h3>Graph</h3>
      <AlternativesChart
        title="Tax-Equivalent Yield"
        badge={null}
        format={rate}
        rows={[
          { label: 'Tax Free', value: inputs.taxFree },
          { label: 'Federal Tax Equivalent Yield', value: results.federalOnly },
          { label: 'State & Federal Tax Equivalent Yield', value: results.stateAndFederal, best: true },
        ]}
        empty="With a tax-free yield of zero, every yield here is zero."
      />
    </>
  );
}

export default function TaxEquivalentYield() {
  return (
    <CalculatorPage
      page="Tax-Equivalent Yield"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="What Is My Tax-Equivalent Yield?"
      intro={intro}
      formTitle="Your Yield and Tax Rates"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter the tax-free yield and your federal and state tax brackets, then select Calculate to see the taxable yield that would leave you the same after tax, with a graph."
      note={
        <>
          The tax-equivalent yield is what a taxable investment must pay to leave you the same return after tax: the
          tax-free yield divided by 1 less your federal rate, and, for income your state taxes too, divided again by 1
          less your state rate, since state tax is taken as deductible on your federal return. If you take the
          standard deduction, or your state and local taxes are over the cap on deducting them, it isn't: add your
          state rate to your federal rate, as the introduction says.
        </>
      }
      cta={{
        title: (
          <>
            Comparing <em>investments?</em>
          </>
        ),
        text: 'Our team can help you weigh tax-free and taxable investments for your tax bracket, in English or Spanish.',
      }}
    />
  );
}
