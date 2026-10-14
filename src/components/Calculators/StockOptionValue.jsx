import CalculatorPage from './CalculatorPage.jsx';
import PaycheckChart from './PaycheckChart.jsx';
import { returnsHelp } from './helpCharts.jsx';
import { dollars, percent } from './format.js';

// Source: CalcXML's "What is the future value of my employee stock options?" (calculator pay05
// on the firm's account, 481), which the Resources page used to open on calcxml.com. Its
// wording is kept word for word: the introduction, the field group and fields, the help chart,
// the results sentence, the graph and its parts, the year-by-year table's headings and the
// disclaimer; and its results to the dollar. "Next 1 years" in the sentence reads "next 1
// year". The form is set out as the other calculators' are (CalculatorPage.jsx), with buttons
// to step the years. Address: /resources/calculators/stock-options (the calculator's link in
// the Resources page's Paycheck and Benefits list).

const intro =
  "Your company-issued employee stock options may not be 'in-the-money' today but assuming an investment growth rate may be worth some money in the future. Use this calculator to help determine what your employee stock options may be worth assuming a steadily increasing company value.";

// CalcXML's fields, in its order.
const sections = [
  {
    title: 'Stock Option Assumptions',
    fields: [
      {
        name: 'years',
        label: 'Years until option expiration date',
        kind: 'count',
        max: 20,
        steps: ['One year fewer', 'One year more'],
      },
      { name: 'options', label: 'Total number of options', kind: 'count', max: 999999 },
      { name: 'price', label: 'Current price (per share)', kind: 'money', max: 9999 },
      { name: 'strike', label: 'Strike (grant) price (per share)', kind: 'money', max: 9999 },
      {
        name: 'expectedReturn',
        label: 'Anticipated annual return on stock',
        kind: 'percent',
        min: -12,
        max: 12,
        help: returnsHelp,
      },
    ],
  },
];

const defaults = { years: '0', options: '0', price: '0', strike: '0', expectedReturn: '8' };

// The options' value when they expire at the return entered and at 2 points below and above
// it: today's price grown once a year, times the number of options. The gain is what's left
// after paying the strike price for them, and none when they're worth less.
const calculate = ({ years, options, price, strike, expectedReturn }) => {
  const cost = options * strike;
  return {
    projections: [
      ['Low Return', expectedReturn - 0.02],
      ['Anticipated Return', expectedReturn],
      ['High Return', expectedReturn + 0.02],
    ].map(([name, rate]) => {
      const value = options * price * (1 + rate) ** years;
      return { label: `${name}: ${percent(rate, 1)}`, value, cost, gain: Math.max(0, value - cost) };
    }),
  };
};

const chartSeries = [
  { key: 'strike', label: 'Strike Price' },
  { key: 'gain', label: 'Net Gain (before tax)' },
];

function Results({ results }) {
  const { inputs, projections } = results;
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          The value of your current employee stock option (as detailed below) will be highly dependent upon the
          return achieved by the underlying stock over the next {inputs.years} {inputs.years === 1 ? 'year' : 'years'}.
          The returns assumed below are based on the Anticipated Rate of Return you input, as well as a rate 2
          percentage points higher and 2 percentage points lower, for comparison purposes.
        </p>
      </div>

      <h3>Graph</h3>
      <PaycheckChart
        title="Future Value of My Employee Stock Options"
        variant="is-options"
        series={chartSeries}
        rows={projections.map((projection) => ({
          ...projection,
          values: { strike: projection.cost, gain: projection.gain },
        }))}
        summary={(projection) => (
          <>
            Gain <strong>{dollars(projection.gain)}</strong> of {dollars(projection.value)}
          </>
        )}
        empty="Enter your options and their prices to see the graph."
      />

      <h3>Detailed Data Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Projected Returns</th>
              <th scope="col" className="is-amount">
                Future Value Year {inputs.years.toFixed(1)}
              </th>
              <th scope="col" className="is-amount">
                Strike Price
              </th>
              <th scope="col" className="is-amount">
                Gain (Before-Tax)
              </th>
            </tr>
          </thead>
          <tbody>
            {projections.map((projection) => (
              <tr key={projection.label}>
                <td>{projection.label}</td>
                <td className="is-amount">{dollars(projection.value)}</td>
                <td className="is-amount">{dollars(projection.cost)}</td>
                <td className="is-amount">{dollars(projection.gain)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function StockOptionValue() {
  return (
    <CalculatorPage
      page="Employee Stock Options"
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title="What Is The Future Value Of My Employee Stock Options?"
      intro={intro}
      formTitle="Your Stock Options"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your options, their prices and the return you expect, then select Calculate to see what they may be worth when they expire, with a graph and a table."
      note={
        <>
          Each projection grows today's price by the return shown, compounded once a year, until the options expire;
          the future value is that price times the number of options. The gain is the future value less the cost
          of exercising them (the strike price times the number of options), before taxes, and none when they're
          worth less than that. The low and high returns are 2 percentage points below and above the one you enter.
          Taxes, fees and dividends aren't included.
        </>
      }
      cta={{
        title: (
          <>
            Holding employee <em>stock options?</em>
          </>
        ),
        text: 'Our team can help you plan when to exercise and how the tax works, in English or Spanish.',
      }}
    />
  );
}
