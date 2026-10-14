import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import { freedomFigures, taxFreedomDay } from './freedom.js';
import { businessSection, personalFields, taxDefaults, validateFilers } from './taxFields.jsx';
import { dollars, number } from './format.js';

// Source: CalcXML's "Tax freedom day" (calculator inc13 on the firm's account, 481), which the
// Resources page used to open on calcxml.com. Its wording is kept word for word, defaults
// included: the introduction, the field groups and fields, the results sentence ("full- time"
// reads "full-time"), the summary and the graph's bars, and the disclaimer. Its tax follows the
// 2026 rules where CalcXML's doesn't (see freedom.js and refund.js, the tax refund estimator's,
// which it shares): CalcXML ignores "Are you self-employed?", charges FICA on investment income
// and on a trust, and leaves pass-through income out of the income the days are counted
// against. Its date is the day the tax is paid, the last of the days counted (CalcXML's is
// often a day short of them: 76 days "until March 16"). The summary also gives the income tax
// and the Social Security and Medicare tax on their own. The form is set out as the other
// calculators' are (CalculatorPage.jsx). Address: /resources/calculators/tax-freedom-day (the
// calculator's link in the Resources page's Taxation list).

const intro =
  'It might surprise you how many days you would have to work to pay your estimated federal tax liability (including Social Security tax withholdings). Use this calculator to determine your Tax Freedom Day - the day you begin earning money for yourself. This calculator does not take into account sales and excise taxes, state and local property taxes, and other taxes such as car and estate taxes.';

// CalcXML's fields, in its order and groups (taxFields.jsx, which the other tax calculators share,
// with this one's question on self-employment).
const sections = [
  {
    title: 'Income and Tax Information',
    fields: [
      ...personalFields('Taxable gross annual income subject to ordinary income rates (W-2, unearned/investment, etc)'),
      {
        name: 'selfEmployed',
        label: 'Are you self-employed?',
        control: 'select',
        options: [
          { value: 'N', label: 'No' },
          { value: 'Y', label: 'Yes' },
        ],
      },
    ],
  },
  businessSection,
];

const defaults = taxDefaults(sections, { otherDependents: '2', selfEmployed: 'N' });

const calculate = (inputs) => taxFreedomDay({ ...inputs, selfEmployed: inputs.selfEmployed === 'Y' });

const dayAndMonth = (date) => date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'UTC' });
const fullDate = (date) =>
  date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

function Results({ results }) {
  const selfEmployed = results.inputs.selfEmployed === 'Y';
  const rows = [
    ['Federal income tax', dollars(results.incomeTax)],
    [selfEmployed ? 'Self-employment tax' : 'Social Security and Medicare (FICA)', dollars(results.payroll)],
    ['Estimated tax liability (including FICA withholdings)', dollars(results.total), true],
    ['Number of days to work to pay your tax liability', number(results.days)],
    ['Tax Freedom Day', fullDate(results.date), true],
  ];
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Based upon the information you provided, it appears that your estimated federal income tax liability
          (including FICA withholdings) will be approximately <strong>{dollars(results.total)}</strong>. This means you
          would have to work for the government full-time for <strong>{number(results.days)}</strong>{' '}
          {results.days === 1 ? 'day' : 'days'} until <strong>{dayAndMonth(results.date)}</strong> before you could
          begin earning money for yourself!
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
        title="Tax Analysis"
        badge={null}
        rows={[
          { label: 'Tax Liability', value: results.total, best: true },
          { label: 'Gross Annual Income', value: results.grossIncome },
        ]}
        empty="Enter your income to see the graph."
      />
    </>
  );
}

const { year, socialSecurity, medicare } = freedomFigures;

export default function TaxFreedomDay() {
  return (
    <CalculatorPage
      page="Tax Freedom Day"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Tax Freedom Day"
      intro={intro}
      formTitle="Your Income and Taxes"
      sections={sections}
      defaults={defaults}
      validate={validateFilers}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your income, deductions and dependents, then select Calculate to see how many days of the year your federal taxes take, and the day you start earning for yourself."
      note={
        <>
          The federal income tax is figured as in the Tax Refund Estimator, with the {year} rates, deductions and
          credits (the refundable part of the child credit isn't counted). Employees add Social Security tax (
          {socialSecurity.rate * 100}% of earned income up to ${number(socialSecurity.wageBase)}) and Medicare tax (
          {medicare * 100}%); the self-employed add self-employment tax, twice those rates on 92.35% of their earned
          and pass-through income, and deduct half of it from income. Investment income and trusts pay neither. The days
          are those taxes as a share of your income (with your share of pass-through income), times 365; Tax Freedom Day
          is the last of them. State and local taxes aren't included.
        </>
      }
      cta={{
        title: (
          <>
            Want to keep more of <em>what you earn?</em>
          </>
        ),
        text: 'Our team can help you plan to lower your taxes, in English or Spanish.',
      }}
    />
  );
}
