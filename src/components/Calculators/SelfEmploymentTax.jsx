import CalculatorPage from './CalculatorPage.jsx';
import ShareBar from './ShareBar.jsx';
import { selfEmploymentTax } from './selfEmployment.js';
import { freedomFigures } from './freedom.js';
import { refundFigures } from './refund.js';
import { dollars, number, roundHalfEven } from './format.js';

// Source: CalcXML's "How much self-employment tax will I pay?" (calculator inc05 on the firm's
// account, 481), which the Resources page used to open on calcxml.com. Its wording is kept word
// for word: the introduction, the field group and fields, the help, the results sentence, the
// summary table, the graph's slices and the disclaimer. Its tax follows the 2026 rules where
// CalcXML's doesn't (see selfEmployment.js): CalcXML charges the 0.9% Additional Medicare Tax
// twice over (1.8%), on the income before the 92.35% adjustment, without lowering its threshold by
// your wages, takes it off the earnings as part of the adjustment, and counts half of it as
// deductible; and with wages, it takes the adjustment off what's left of the Social Security wage
// base, rather than off the income. The summary adds a row for the Additional Medicare Tax, part
// of the Medicare column's tax. The form is set out as the other calculators' are
// (CalculatorPage.jsx). Address: /resources/calculators/self-employment-tax (the calculator's link
// in the Resources page's Taxation list).

const intro =
  'Self employment taxes are comprised of two parts: Social Security and Medicare. You will pay 6.2 percent and your employer will pay Social Security taxes of 6.2 percent on the first $184,500 of your covered wages. You each also pay Medicare taxes of 1.45 percent on all your wages - no limit. If you are self-employed, your Social Security tax rate is 12.4 percent and your Medicare tax is 2.9 percent on those same amounts of earnings but you are able to deduct the employer portion. You will pay an additional 0.9% Medicare tax on the amount that your annual income exceeds $200,000 for single filers, $250,000 for married filing jointly, and $125,000 married filing separate. Use this calculator to estimate your self-employment taxes.';

// CalcXML's fields, in its order.
const sections = [
  {
    title: 'Wage Information',
    fields: [
      {
        name: 'income',
        label: 'Annual self-employment income',
        kind: 'money',
        max: 999999999,
        help: 'Enter your Schedule C net profit amount, including the impact of Section 179 and bonus depreciation.',
      },
      { name: 'wages', label: 'Annual employer income (already taxed)', kind: 'money', max: 999999999 },
      {
        name: 'status',
        label: 'Tax filing status',
        control: 'select',
        options: [
          { value: 'S', label: 'Single' },
          { value: 'H', label: 'Head of Household' },
          { value: 'MS', label: 'Married - Separately' },
          { value: 'MJ', label: 'Married - Jointly' },
        ],
      },
    ],
  },
];

const defaults = { income: '0', wages: '0', status: 'MJ' };

// Whole dollars, halves to the even dollar, as CalcXML's results have them.
const amount = (value) => dollars(roundHalfEven(value));

function Results({ results }) {
  const { socialSecurity, medicare } = results;
  const rows = [
    ["'Adjusted' earnings", socialSecurity.adjusted, medicare.adjusted],
    ['Less: self-employment adjustment', socialSecurity.adjustment, medicare.adjustment],
    ['Taxable self-employment earnings', socialSecurity.taxable, medicare.taxable],
    ['Self-employment tax', socialSecurity.tax, medicare.tax],
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Your total self-employment tax of <strong>{amount(results.total)}</strong> is comprised of{' '}
          <strong>{amount(socialSecurity.tax)}</strong> Social Security tax and <strong>{amount(medicare.tax)}</strong>{' '}
          Medicare tax. The tax-deductible portion for Form 1040 is <strong>{amount(results.deductible)}</strong>.
        </p>
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Self-Employment Tax Analysis</th>
              <th scope="col" className="is-amount">
                Social Security
              </th>
              <th scope="col" className="is-amount">
                Medicare
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, ...values]) => (
              <tr key={label}>
                <td>{label}</td>
                {values.map((value, index) => (
                  <td className="is-amount" key={index}>
                    {amount(value)}
                  </td>
                ))}
              </tr>
            ))}
            {medicare.additional > 0 && (
              <tr>
                <td>Including Additional Medicare Tax (0.9%)</td>
                <td className="is-amount" />
                <td className="is-amount">{amount(medicare.additional)}</td>
              </tr>
            )}
            <tr className="is-total">
              <td>Total self-employment tax</td>
              <td className="is-amount" colSpan={2}>
                {amount(results.total)}
              </td>
            </tr>
            <tr>
              <td>Tax-deductible portion</td>
              <td className="is-amount" colSpan={2}>
                {amount(results.deductible)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <ShareBar
        title="Self Employment Tax"
        parts={[
          { label: 'Social Security', value: socialSecurity.tax },
          { label: 'Medicare', value: medicare.tax },
        ]}
        empty="Enter your self-employment income to see the graph."
      />
    </>
  );
}

const { year, socialSecurity: { wageBase }, selfEmployment } = freedomFigures;
const { threshold } = refundFigures.additionalMedicare;

export default function SelfEmploymentTax() {
  return (
    <CalculatorPage
      page="Self-Employment Tax"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="How Much Self-Employment Tax Will I Pay?"
      intro={intro}
      formTitle="Your Self-Employment Income"
      sections={sections}
      defaults={defaults}
      calculate={selfEmploymentTax}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your self-employment income, any wages from an employer and your filing status, then select Calculate to see your Social Security and Medicare tax, and the part you can deduct."
      note={
        <>
          The tax is figured with the {year} rules on Schedule SE: your net earnings are 92.35% of your self-employment
          income (the adjustment), and under ${selfEmployment.minimum} of them, no tax is due. Social Security tax is 12.4%
          of them, up to ${number(wageBase)} less any wages; Medicare tax is 2.9% of all of them, plus the
          0.9% Additional Medicare Tax on what's over ${number(threshold.S)} (${number(threshold.MJ)} married filing
          jointly, ${number(threshold.MS)} separately) less any wages. Half of the Social Security and 2.9% Medicare tax
          is deducted on Form 1040; the Additional Medicare Tax isn't. Income tax on your self-employment income isn't
          included.
        </>
      }
      cta={{
        title: (
          <>
            Working <em>for yourself?</em>
          </>
        ),
        text: 'Our team can help you plan your estimated payments and lower your self-employment tax, in English or Spanish.',
      }}
    />
  );
}
