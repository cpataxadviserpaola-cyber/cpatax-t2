import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import { returnsHelp, taxBracketsHelp } from './helpCharts.jsx';

// Source: CalcXML's "Should I exercise my 'in-the-money' stock options?" (calculator pay06 on
// the firm's account, 481), which the Resources page used to open on calcxml.com. Its wording
// is kept word for word: the introduction, the field groups and fields, the help charts and
// table, the results sentence, the graph and its alternatives, the note under the graph and the
// disclaimer; and its results to the dollar, except that deferring is worth nothing, not a
// loss, when the stock ends below the strike price (the options are then simply left to
// expire). The form is set out as the other calculators' are (CalculatorPage.jsx); the
// marginal tax bracket comes last in its group and takes the whole row, so its tax table has
// room. Address: /resources/calculators/exercise-stock-options (the calculator's link in the
// Resources page's Paycheck and Benefits list).

const intro =
  "When your employee stock options become 'in-the-money', where the current price is greater than the strike price, you can choose from one of three basic sell strategies: Exercise your options, then hold the stock for sale at a later date (exercise and hold); hold your options and exercise them later (defer exercise); or exercise your options and immediately sell the stock (exercise and sell). This calculator will help you decide which choice will likely maximize your after-tax profits.";

// CalcXML's fields, in its order and groups (but for the tax bracket, as above).
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
        name: 'stockReturn',
        label: 'Anticipated annual return on stock',
        kind: 'percent',
        min: -50,
        max: 50,
        help: returnsHelp,
      },
      { name: 'dividends', label: 'Annual dividends (per share)', kind: 'money', max: 9999 },
    ],
  },
  {
    title: 'Taxation And Investment Assumptions',
    fields: [
      {
        name: 'altReturn',
        label: 'Anticipated annual return on alternative investment',
        kind: 'percent',
        min: -50,
        max: 50,
        help: returnsHelp,
      },
      { name: 'capGains', label: 'Long-term capital gains tax rate', kind: 'percent', max: 75 },
      { name: 'tax', label: 'Marginal tax bracket', kind: 'percent', max: 75, help: taxBracketsHelp, wide: true },
    ],
  },
];

const defaults = {
  years: '0',
  options: '0',
  price: '0',
  strike: '0',
  stockReturn: '8',
  dividends: '0',
  altReturn: '8',
  tax: '22',
  capGains: '15',
};

// What each alternative leaves you with when the options expire, as CalcXML figures it.
// Exercising now costs the strike price plus income tax on the gain, paid from other money that
// would otherwise have earned the alternative return, so both exercise alternatives give that
// up. Holding: the stock's value then, less capital gains tax on its rise since exercise, plus
// the dividends after income tax. Selling: the proceeds invested at the alternative return, less
// capital gains tax on their growth. Deferring: the options' value then, after income tax.
// The best is the one worth the most to the cent; a tie goes to the first, as on CalcXML.
const calculate = ({ years, options, price, strike, stockReturn, dividends, altReturn, tax, capGains }) => {
  const future = price * (1 + stockReturn) ** years;
  const growth = (1 + altReturn) ** years;
  const forgone = (options * strike + tax * options * (price - strike)) * growth;
  const alternatives = [
    {
      label: 'Exercise & Hold',
      value:
        options * future - capGains * options * (future - price) + options * dividends * years * (1 - tax) - forgone,
    },
    { label: 'Exercise & Sell', value: options * price + (1 - capGains) * options * price * (growth - 1) - forgone },
    { label: 'Defer Exercise', value: Math.max(0, options * (future - strike) * (1 - tax)) },
  ];
  const cents = alternatives.map((alternative) => Math.round(alternative.value * 100));
  const best = cents.indexOf(Math.max(...cents));
  return { alternatives: alternatives.map((alternative, index) => ({ ...alternative, best: index === best })) };
};

function Results({ results }) {
  const best = results.alternatives.find((alternative) => alternative.best);
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Based on your input, your best alternative may be to <strong>{best.label}</strong>. Exercising your employee
          stock options is a complicated transaction and you should seek the assistance of your professional financial
          advisors.
        </p>
      </div>

      <h3>Graph</h3>
      <AlternativesChart
        title="Exercise Alternatives"
        rows={results.alternatives}
        empty="Enter your options and their prices to see the graph."
      />
      <p className="calc-results-text">
        Taxes due upon the exercise of the employee stock option are calculated at the marginal income tax bracket.
        Taxes due on investment appreciation at the end of the holding period are calculated at the long-term capital
        gains rate. In order to compare your options, it is assumed that both the cost of exercising the option and the
        taxes due upon exercise are paid from 'other' resources (not from the proceeds of the option) and that such
        proceeds would have earned the 'alternative investment return' had they not been used to pay these expenses.
      </p>
    </>
  );
}

export default function StockOptionExercise() {
  return (
    <CalculatorPage
      page="Exercising Stock Options"
      category={{ to: '/resources#paycheck-benefits', label: 'Paycheck and Benefits' }}
      title="Should I Exercise My 'In-The-Money' Stock Options?"
      intro={intro}
      formTitle="Your Stock Options"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your options, the returns you expect and your tax rates, then select Calculate to compare exercising and holding, exercising and selling, and deferring."
      note={
        <>
          Each alternative is valued on the date the options expire, with the stock growing at its return once a year.
          Exercise &amp; Hold is the stock's value then, less capital gains tax on its rise since you exercised, plus
          the dividends after income tax. Exercise &amp; Sell is today's sale proceeds invested at the alternative
          return, less capital gains tax on their growth. Both take off what exercising costs today (the strike price
          plus income tax on the gain), grown at the alternative return. Defer Exercise is the options' value then (the
          stock's price less the strike price, times the number of options) after income tax, and nothing if the stock
          is below the strike price. State taxes, fees and the alternative minimum tax aren't included.
        </>
      }
      cta={{
        title: (
          <>
            Deciding when to <em>exercise?</em>
          </>
        ),
        text: 'Our team can help you weigh the tax on exercising and selling your options, in English or Spanish.',
      }}
    />
  );
}
