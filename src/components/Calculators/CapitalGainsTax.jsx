import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import { capitalGainsFigures, capitalGainsTax } from './capitalGains.js';
import { dollars, number, percent, roundHalfEven } from './format.js';

// Source: CalcXML's "Long-term capital gains tax estimator" (calculator inc06 on the firm's
// account, 481), which the Resources page used to open on calcxml.com as "Capital Gains (Losses)
// Tax Estimator". Its wording is kept word for word: the introduction, the field groups and
// fields, the help, the results sentences, the summary table, the graph's bars and the
// disclaimer; and its results to the dollar for a net gain. Its tax follows the 2026 rules where
// CalcXML's doesn't (see capitalGains.js): CalcXML's 15% band starts at your income rather than
// at the 0% threshold, so gains that begin in the 0% band have too much taxed at 15% and too
// little at 20%; it allows a $3,000 loss married filing separately (the limit is $1,500); for a
// net loss it gives the deduction as the taxes due, in the 15% row, rather than the tax it saves;
// and its graph's net bar shows the gains without the losses. The summary adds, for a net loss,
// the deduction your income takes and the loss carried forward. The sentence gives the tax
// rounded as the table does (CalcXML's has $3,083 beside the table's $3,082). The four
// transactions are set out as rows of purchase and sales prices, the rest of the form as the
// other calculators' are (CalculatorPage.jsx). Address: /resources/calculators/capital-gains-tax
// (the calculator's link in the Resources page's Taxation list).

const intro =
  'Federal taxes on net long-term gains (assets held more than one year) will vary depending on your filing status and income level. Use this calculator to help estimate capital gain taxes due on your transactions.';

const transactionCount = 4;
const money = { kind: 'money', max: 999999999 };

// CalcXML's fields, in its order and groups; its four transaction groups are a row each.
const sections = [
  {
    title: 'Assumptions',
    fields: [
      {
        name: 'status',
        label: 'Tax filing status',
        control: 'select',
        options: [
          { value: 'S', label: 'Single' },
          { value: 'MJ', label: 'Married - Jointly' },
          { value: 'MS', label: 'Married - Separately' },
          { value: 'H', label: 'Head of Household' },
        ],
      },
      {
        name: 'income',
        label: 'Taxable Income (excluding your capital gains)',
        ...money,
        help: 'Your taxable income is all income that is not tax-exempt, such as salary, wages, interest, dividends, and pensions, minus deductions, such as itemized or standard deductions.',
      },
    ],
  },
  {
    title: 'Asset Transactions',
    columns: [
      { title: 'Purchase price', ...money },
      { title: 'Sales price', ...money },
    ],
    rows: Array.from({ length: transactionCount }, (_, index) => ({
      label: `Asset Transaction #${index + 1}`,
      names: [`purchase${index + 1}`, `sale${index + 1}`],
    })),
  },
];

const defaults = {
  status: 'MJ',
  income: '0',
  ...Object.fromEntries(
    Array.from({ length: transactionCount }, (_, index) => [
      [`purchase${index + 1}`, '0'],
      [`sale${index + 1}`, '0'],
    ]).flat(),
  ),
};

const calculate = (inputs) =>
  capitalGainsTax({
    status: inputs.status,
    income: inputs.income,
    transactions: Array.from({ length: transactionCount }, (_, index) => ({
      purchase: inputs[`purchase${index + 1}`],
      sale: inputs[`sale${index + 1}`],
    })),
  });

// Whole dollars, halves to the even dollar, as CalcXML's table has them.
const amount = (value) => dollars(roundHalfEven(value));

function Sentence({ results }) {
  if (!results.traded) return 'You have not input any long-term transactions.';
  const offset = `Long-term capital gains can be offset directly by long-term capital losses. You may deduct up to $${number(results.limit)} of net long-term capital losses per year.`;
  if (results.net > 0) {
    return (
      <>
        {offset} Your net long-term capital gain of <strong>{amount(results.net)}</strong> would be subject to a
        long-term capital gains tax of <strong>{amount(results.tax)}</strong>.
      </>
    );
  }
  if (-results.net > results.limit) {
    return (
      <>
        {offset} Your net long-term capital loss of <strong>{amount(-results.net)}</strong> would reduce your ordinary
        income by up to <strong>{amount(results.limit)}</strong> with the remainder available as a carry forward for use
        in future tax years.
      </>
    );
  }
  return (
    <>
      {offset} Your net long-term capital loss would reduce your ordinary income by{' '}
      <strong>{amount(results.deduction)}</strong>.
    </>
  );
}

function Results({ results }) {
  const loss = results.net <= 0 && results.traded;
  const rows = [
    ['Long-term capital gains', amount(results.gains)],
    ['Long-term capital losses', amount(results.losses)],
    ['Net long-term capital transaction', amount(results.net)],
    ...results.bands.map((band, index) => [
      `Amount Subject to Taxation at ${percent(capitalGainsFigures.rates[index])}`,
      amount(band),
    ]),
    ...(loss
      ? [
          ['Deducted from ordinary income', amount(results.used)],
          ['Loss carried forward to future years', amount(results.carryover)],
        ]
      : []),
    ['Taxes due', amount(results.tax), true],
    ['Effective Tax Rate on Net Long Term Capital Gains', percent(results.rate, 1)],
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          <Sentence results={results} />
        </p>
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Summary Of Long-Term Capital Transactions</th>
              <th scope="col" className="is-amount">
                <span className="sr-only">Amount</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, value, total]) => (
              <tr key={label} className={total ? 'is-total' : undefined}>
                <td>{label}</td>
                <td className="is-amount">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <AlternativesChart
        title="Capital Gains/Losses Tax Estimator"
        badge={null}
        format={amount}
        rows={[
          { label: 'Net Taxable Transactions', value: results.net },
          { label: 'Impact on Federal Taxes', value: results.tax, best: true },
        ]}
        empty="Enter your transactions to see the graph."
      />
    </>
  );
}

const { year, thresholds, lossLimit } = capitalGainsFigures;

export default function CapitalGainsTax() {
  return (
    <CalculatorPage
      page="Capital Gains Tax"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Capital Gains (Losses) Tax Estimator"
      intro={intro}
      formTitle="Your Long-Term Transactions"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your filing status, your taxable income and up to four assets you've sold after holding them more than a year, then select Calculate to see the tax on your net gain, or what a net loss saves."
      note={
        <>
          With the {year} rates, a net long-term gain sits on top of your other taxable income: the part that keeps your
          taxable income under ${number(thresholds.S[0])} (${number(thresholds.MJ[0])} married filing jointly, $
          {number(thresholds.H[0])} head of household) is taxed at 0%, the part up to ${number(thresholds.S[1])} ($
          {number(thresholds.MJ[1])} jointly, ${number(thresholds.MS[1])} separately, ${number(thresholds.H[1])} head of
          household) at 15%, and the rest at 20%. A net loss is deducted from your ordinary income, up to $
          {number(lossLimit.S)} (${number(lossLimit.MS)} married filing separately) and no more than that income, and the
          rest carries forward; its taxes due are the income tax the deduction saves, at your {year} tax rates. Gains on
          assets held a year or less are taxed as ordinary income and aren't included, nor are the 3.8% net investment
          income tax (on investment income once your modified AGI passes $200,000, $250,000 jointly) or state taxes.
        </>
      }
      cta={{
        title: (
          <>
            Selling an <em>investment?</em>
          </>
        ),
        text: 'Our team can help you time your sales and use your losses for the lowest tax, in English or Spanish.',
      }}
    />
  );
}
