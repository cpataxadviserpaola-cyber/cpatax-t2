import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import { taxBracketsHelp } from './helpCharts.jsx';
import { dollars, percent } from './format.js';

// Source: CalcXML's "Will my investment interest be deductible?" (calculator inc04 on the firm's
// account, 481), which the Resources page used to open on calcxml.com. Its wording is kept word
// for word: the introduction, the field groups and fields, the tax bracket table, the results
// sentences, the summary, the graph's bars and the disclaimer; and its results to the dollar.
// The form is set out as the other calculators' are (CalculatorPage.jsx), the tax bracket on a
// row of its own so its table has room. Address: /resources/calculators/investment-interest (the
// calculator's link in the Resources page's Taxation list).

const intro =
  "Interest paid on debts incurred in order to invest (such as 'margin accounts') is generally deductible to the extent that it offsets investment income (such as interest, dividends and short term capital gains). Interest payments in excess of investment income can be carried forward in hopes of offsetting future investment income. This calculator can help you better manage the use of debt as an investment tool, and more accurately time your income and interest payments to take best advantage of current deductibility laws and limitations.";

const money = (name, label) => ({ name, label, kind: 'money', max: 999999999 });

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Federal Income Tax Information',
    fields: [{ name: 'bracket', label: 'Marginal tax bracket', kind: 'percent', max: 75, help: taxBracketsHelp, wide: true }],
  },
  {
    title: 'Investment Interest You Receive',
    fields: [money('dividends', 'Dividend income'), money('interest', 'Interest income'), money('shortTermGains', 'Short-term capital gains')],
  },
  {
    title: 'Investment Interest You Pay',
    fields: [money('margin', 'Margin account interest'), money('otherInterest', 'Other investment interest')],
  },
];

const defaults = { bracket: '22', dividends: '0', interest: '0', shortTermGains: '0', margin: '0', otherInterest: '0' };

// Investment interest is deductible up to investment income; the rest carries forward.
const calculate = ({ bracket, dividends, interest, shortTermGains, margin, otherInterest }) => {
  const earned = dividends + interest + shortTermGains;
  const paid = margin + otherInterest;
  const deductible = Math.min(paid, earned);
  return { earned, paid, deductible, savings: deductible * bracket, carryover: paid - deductible };
};

function Results({ results }) {
  const { inputs } = results;
  const rows = [
    ['Interest you earned', dollars(results.earned)],
    ['Interest you paid', dollars(results.paid)],
    ['Deductible interest', dollars(results.deductible)],
    ['Federal income tax bracket', percent(inputs.bracket)],
    ['Federal tax savings (current year)', dollars(results.savings)],
    ['Deductible interest carryover', dollars(results.carryover)],
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          {results.paid > 0 ? (
            <>
              Based on your input, you will be able to deduct <strong>{dollars(results.deductible)}</strong> for a total
              tax savings of <strong>{dollars(results.savings)}</strong>
              {results.carryover > 0 ? (
                <>
                  , and carry forward an interest deduction of <strong>{dollars(results.carryover)}</strong>.
                </>
              ) : (
                '.'
              )}
            </>
          ) : (
            'You did not indicate any deductible investment interest.'
          )}
        </p>
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Summary</th>
              <th scope="col" className="is-amount">
                <span className="sr-only">Amount</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label}>
                <td>{label}</td>
                <td className="is-amount">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <AlternativesChart
        title="Will My Investment Interest Be Deductible?"
        badge={null}
        rows={[
          { label: 'Interest You Earned', value: results.earned },
          { label: 'Interest You Paid', value: results.paid },
          { label: 'Deductible Interest', value: results.deductible },
          { label: 'Federal Tax Savings (current year)', value: results.savings, best: true },
        ]}
        empty="Enter your investment income and the interest you pay to see the graph."
      />
    </>
  );
}

export default function InvestmentInterest() {
  return (
    <CalculatorPage
      page="Investment Interest"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Will My Investment Interest Be Deductible?"
      intro={intro}
      formTitle="Your Investment Interest"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your tax bracket, your investment income and the investment interest you pay, then select Calculate to see how much you can deduct this year and carry forward, with a summary and a graph."
      note={
        <>
          The interest you pay to invest is deductible up to your investment income for the year (dividends, interest
          and short-term gains), and what's left carries forward to later years; the tax saved is the deduction times
          your tax bracket. Qualified dividends count as investment income only if you choose to have them taxed at
          ordinary rates rather than the lower ones, and the deduction is an itemized deduction, so it saves tax only if
          you itemize.
        </>
      }
      cta={{
        title: (
          <>
            Investing with <em>borrowed money?</em>
          </>
        ),
        text: 'Our team can help you time your interest and investment income for the best deduction, in English or Spanish.',
      }}
    />
  );
}
