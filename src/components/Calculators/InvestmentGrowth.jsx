import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import { returnsHelp, taxBracketsHelp } from './helpCharts.jsx';
import { compareGrowth } from './investmentGrowth.js';
import { dollars, number, percentHalfEven, roundHalfEven } from './format.js';

// Source: CalcXML's "Compare taxable, tax-deferred and tax-free investment growth" (calculator
// inc07 on the firm's account, 481), which the Resources page used to open on calcxml.com. Its
// wording is kept word for word: the introduction, the field groups and fields, the help charts,
// the results sentence, the summary table and its note, the graph's bars, the year-by-year table
// and the disclaimer; and its results to the dollar, rounded as its table rounds (an exact half
// to the even dollar or tenth of a percent), which its sentence doesn't always do ($102,563
// beside the table's $102,562): here both agree. One exception: where the tax-deferred account
// ends below what was paid in, CalcXML gives back tax at your bracket on the loss; a loss inside
// an annuity or IRA isn't deductible in 2026, so here no tax is due and none comes back (see
// investmentGrowth.js). The graph marks the account that leaves the most after taxes. The form
// is set out as the other calculators' are (CalculatorPage.jsx). Address:
// /resources/calculators/compare-investment-growth (the calculator's link in the Resources
// page's Taxation list).

const intro =
  'Investment vehicles are taxed differently. This investment growth calculator is intended to help compare a fully taxable investment to two tax advantaged situations. In one situation, an investment account is not taxed until the money is withdrawn. In the second scenario, the money is an investment that is not subject to Federal or State tax.';

const money = (name, label) => ({ name, label, kind: 'money', max: 999999999 });
const rate = (name, label, extra) => ({ name, label, kind: 'percent', min: -12, max: 12, ...extra });

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Savings',
    fields: [
      money('balance', 'Current investment balance'),
      money('contributions', 'Annual contributions'),
      {
        name: 'years',
        label: 'Number of years to invest',
        kind: 'count',
        min: 1,
        max: 50,
        steps: ['One year fewer', 'One year more'],
      },
    ],
  },
  {
    title: 'Assumptions',
    fields: [
      rate('taxableReturn', 'Before-tax return on fully-taxable investment', { help: returnsHelp, wide: true }),
      rate('deferredReturn', 'Before-tax return on tax-deferred investment'),
      rate('freeReturn', 'Return on tax-free investment'),
      { name: 'bracket', label: 'Marginal tax bracket', kind: 'percent', max: 75, help: taxBracketsHelp, wide: true },
    ],
  },
];

const defaults = {
  balance: '0',
  contributions: '0',
  years: '20',
  taxableReturn: '8',
  deferredReturn: '8',
  freeReturn: '5',
  bracket: '25',
};

// Whole dollars, halves to the even dollar, as CalcXML's results have them.
const amount = (value) => dollars(roundHalfEven(value));
const wholeNumber = (value) => number(roundHalfEven(value));

function Results({ results }) {
  const { inputs } = results;
  const three = (value) => [value, value, value];
  const rows = [
    ['Current investment balance', three(amount(inputs.balance))],
    ['Annual contributions', three(amount(inputs.contributions))],
    ['Number of years to invest', three(number(inputs.years))],
    [
      'Before-tax return',
      [inputs.taxableReturn, inputs.deferredReturn, inputs.freeReturn].map((value) => percentHalfEven(value, 1)),
    ],
    ['Marginal tax bracket', three(percentHalfEven(inputs.bracket))],
    [
      'After-tax return',
      [results.afterTaxReturn, inputs.deferredReturn, inputs.freeReturn].map((value) => percentHalfEven(value, 1)),
    ],
    ['Future account value *', [results.taxable, results.deferred, results.free].map(amount)],
    ['Future account value (after-tax)', [results.taxable, results.deferredAfterTax, results.free].map(amount), true],
  ];

  // The account that leaves the most after taxes, if one does.
  const afterTax = [results.taxable, results.free, results.deferredAfterTax].map(roundHalfEven);
  const most = Math.max(...afterTax);
  const best = (value) => value === most && most > 0 && afterTax.filter((each) => each === most).length === 1;

  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Based on the assumptions you provided you could expect to accumulate <strong>{amount(results.taxable)}</strong>{' '}
          in a fully-taxable account, <strong>{amount(results.deferredAfterTax)}</strong> in a tax-deferred investment
          (adjusted for taxes), or <strong>{amount(results.free)}</strong> in a tax-free investment vehicle.
        </p>
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Summary</th>
              {['Fully-Taxable', 'Tax-Deferred', 'Tax-Free'].map((heading) => (
                <th scope="col" className="is-amount" key={heading}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, values, total]) => (
              <tr key={label} className={total ? 'is-total' : undefined}>
                <td>{label}</td>
                {values.map((value, index) => (
                  <td className="is-amount" key={index}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="article-table-note">
        * The lump sum shown after taxes is based on the marginal tax rate that you selected. This lump sum after tax
        figure does not take into account the possible change in tax bracket that might occur due to a lump sum
        distribution of the taxable amount, nor does it take into effect any applicable tax penalties.
      </p>

      <h3>Graph</h3>
      <AlternativesChart
        title="Compare Taxable, Tax-Deferred & Tax-Free Investments"
        badge="Most after taxes"
        format={amount}
        rows={[
          { label: 'Fully-Taxable', value: results.taxable, best: best(afterTax[0]) },
          { label: 'Tax-Free', value: results.free, best: best(afterTax[1]) },
          {
            label: 'Tax Deferred Account After Lump Sum Withdrawal',
            value: results.deferredAfterTax,
            best: best(afterTax[2]),
          },
          { label: 'Tax Deferred Account Before Withdrawal', value: results.deferred },
        ]}
        empty="Enter your balance or contributions to see the graph."
      />
    </>
  );
}

// CalcXML's year-by-year table: the first row's amounts with dollar signs, the rest without.
function Details({ results }) {
  return (
    <section aria-labelledby="calc-details">
      <h3 id="calc-details">Detailed Data Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Year</th>
              {['Fully-Taxable', 'Tax-Deferred', 'Tax-Free'].map((heading) => (
                <th scope="col" className="is-amount" key={heading}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.rows.map((row, index) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                {[row.taxable, row.deferred, row.free].map((value, column) => (
                  <td className="is-amount" key={column}>
                    {index === 0 ? amount(value) : wholeNumber(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function InvestmentGrowth() {
  return (
    <CalculatorPage
      page="Investment Growth"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Compare Taxable, Tax-Deferred And Tax-Free Investment Growth"
      intro={intro}
      formTitle="Your Savings and Returns"
      sections={sections}
      defaults={defaults}
      calculate={compareGrowth}
      renderResults={(results) => <Results results={results} />}
      renderDetails={(results) => <Details results={results} />}
      placeholder="Enter your balance, what you'll add each year, the returns you expect and your tax bracket, then select Calculate to compare what each kind of account may be worth, with a graph and a year-by-year table."
      note={
        <>
          Each account starts with your balance and takes your contribution at the end of each year. The fully-taxable
          account grows at its return less tax at your bracket each year. The tax-deferred account grows at its full
          return; your contributions to it are made after tax (as to an annuity or a nondeductible IRA), so when it's
          withdrawn in one sum only its growth is taxed, at your bracket, with no early withdrawal penalty, and a loss
          gives no tax back. The tax-free account grows at its return, untaxed. A deductible account, such as a 401(k) or
          traditional IRA, saves tax when you put money in and is taxed on all of it when withdrawn.
        </>
      }
      cta={{
        title: (
          <>
            Choosing where to <em>invest?</em>
          </>
        ),
        text: 'Our team can help you weigh taxable, tax-deferred and tax-free accounts for your situation, in English or Spanish.',
      }}
    />
  );
}
