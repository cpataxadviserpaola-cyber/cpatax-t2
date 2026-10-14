import CalculatorPage from './CalculatorPage.jsx';
import ShareBar from './ShareBar.jsx';
import StepTable from './StepTable.jsx';
import { estateFigures, estateTax } from './estateTax.js';
import { dollars, number, percent } from './format.js';

// Source: CalcXML's "What is my potential estate tax liability?" (calculator inc01 on the firm's
// account, 481), which the Resources page used to open on calcxml.com. Its wording is kept word
// for word: the introduction, the field groups, fields and column headings, the results
// sentences, the summary table and the graph's parts, and the disclaimer; and its results to the
// dollar (see estateTax.js). Its graph, a pie of two slices, is a bar of the same two shares
// here, with their amounts; it isn't drawn when charitable contributions or liabilities leave
// nothing to divide (CalcXML then draws shares below zero or over 100%). The form is set out
// as the other calculators' are (CalculatorPage.jsx), with each kind of asset's value, growth
// and liability side by side under CalcXML's column headings. Address:
// /resources/calculators/estate-tax (the calculator's link in the Resources page's Taxation
// list).

const intro = `In ${estateFigures.year} estates worth up to $${(estateFigures.exclusion / 1e6).toFixed(1)} million will be excluded from paying federal estate tax. This means that the federal government could 'inherit' a significant portion of your estate unless you take measures to preserve your wealth. Use this federal estate tax calculator to help estimate your tax liability.`;

const assetKinds = [
  ['personal', 'Personal assets'],
  ['investment', 'Investment assets'],
  ['business', 'Business assets'],
];

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Assets/Liabilities and Assumptions',
    columns: [
      { title: 'Value', kind: 'money', max: 999999999 },
      { title: 'Growth', kind: 'percent', max: 500 },
      { title: 'Liability', kind: 'money', max: 999999999 },
    ],
    rows: assetKinds.map(([key, label]) => ({ label, names: [`${key}Value`, `${key}Growth`, `${key}Debt`] })),
  },
  {
    title: 'Assumptions',
    fields: [
      { name: 'charity', label: 'Charitable contributions', kind: 'money', max: 999999999 },
      { name: 'probate', label: 'Probate and final expenses (% of gross estate)', kind: 'percent', max: 100 },
      {
        name: 'years',
        label: 'Years to project estate growth',
        kind: 'count',
        max: 120,
        steps: ['One year fewer', 'One year more'],
      },
    ],
  },
];

const defaults = {
  ...Object.fromEntries(assetKinds.flatMap(([key]) => [[`${key}Value`, '0'], [`${key}Growth`, '0'], [`${key}Debt`, '0']])),
  charity: '0',
  probate: '3',
  years: '0',
};

const calculate = (inputs) =>
  estateTax({
    assets: assetKinds.map(([key]) => ({
      value: inputs[`${key}Value`],
      growth: inputs[`${key}Growth`],
      debt: inputs[`${key}Debt`],
    })),
    charity: inputs.charity,
    probate: inputs.probate,
    years: inputs.years,
  });

// CalcXML's summary: each line with the sign of what it does to the line before, the subtotals in
// bold.
function summaryRows(results) {
  return [
    ['(Appreciated) personal assets less debt', '', results.assets[0]],
    ['(Appreciated) investment assets less debt', '+', results.assets[1]],
    ['(Appreciated) business assets less debt', '+', results.assets[2]],
    ['(Appreciated) net estate', '=', results.netEstate],
    ['Probate and final expenses', '-', results.expenses],
    ['Charitable donations', '-', results.charity],
    ['(Appreciated) net taxable estate', '=', results.taxable],
    ['Tentative tax liability', '', results.tentative],
    ['Unified credit', '-', results.credit],
    ['Federal estate tax liability', '=', results.tax],
  ]
    .map(([label, sign, value]) => ({ label, sign, value, total: sign === '=' }))
    .concat({ label: 'Estate reduction due to taxes', value: percent(results.reduction, 2) });
}

function Results({ results }) {
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          {results.tax > 0 ? (
            <>
              Without any planning it appears that your estate tax liability will be{' '}
              <strong>{dollars(results.tax)}</strong> resulting in <strong>{percent(results.reduction, 2)}</strong>{' '}
              reduction to your estate.
            </>
          ) : (
            'It appears that you do not have sufficient assets to warrant a federal estate tax liability.'
          )}
        </p>
      </div>

      <h3>Summary Table</h3>
      <StepTable title="Estimated Estate Tax Analysis" rows={summaryRows(results)} />

      <h3>Graph</h3>
      <ShareBar
        title="Estate Distribution"
        parts={[
          { label: 'Taxes And Expenses', value: results.toTaxesAndExpenses },
          { label: 'Amount To Heirs', value: results.toHeirs },
        ]}
        empty="The graph shows how the estate left after charitable contributions divides between taxes and expenses and your heirs; with these entries there's none left to divide."
      />
    </>
  );
}

export default function EstateTax() {
  return (
    <CalculatorPage
      page="Estate Tax"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="What Is My Potential Estate Tax Liability?"
      intro={intro}
      formTitle="Your Estate"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter what you own and owe, your charitable contributions and how far ahead to look, then select Calculate to estimate the federal estate tax on your estate, with a summary table and a graph."
      note={
        <>
          Each kind of asset grows by its rate once a year for the years you enter; its liability doesn't. Probate and
          final expenses are the percentage you enter of the gross estate, the assets before liabilities. The tax is
          figured on the net taxable estate (the net estate less those expenses and charitable contributions) at the
          federal estate tax rates, 18% to 40%, less the unified credit: the tax on the $
          {number(estateFigures.exclusion)} excluded in {estateFigures.year}, which isn't adjusted for inflation in
          the years projected. Gifts made during your life, the marital deduction, and state estate and inheritance
          taxes aren't included. The graph divides what's left after charitable contributions between taxes and
          expenses and your heirs.
        </>
      }
      cta={{
        title: (
          <>
            Planning your <em>estate?</em>
          </>
        ),
        text: 'Our team can help you estimate the tax on your estate and plan to reduce it, in English or Spanish.',
      }}
    />
  );
}
