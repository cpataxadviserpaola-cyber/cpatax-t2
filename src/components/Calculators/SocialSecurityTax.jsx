import CalculatorPage from './CalculatorPage.jsx';
import ShareBar from './ShareBar.jsx';
import { taxBracketsHelp } from './helpCharts.jsx';
import { socialSecurityFigures, taxableSocialSecurity } from './socialSecurity.js';
import { dollars, number, percentHalfEven, roundHalfEven } from './format.js';

// Source: CalcXML's "How much of my social security benefit may be taxed?" (on the firm's
// account, 481), which the Resources page used to open on calcxml.com. Its wording is kept word
// for word: the introduction, the field groups and fields, the tax bracket table, the results
// sentence, the worksheet (IRS Publication 915's) with its line numbers, the graph's slices and
// the disclaimer; and its results to the dollar, rounded as its worksheet rounds (an exact half
// to the even dollar or percent), which its sentence doesn't always do ($5,359 beside the
// worksheet's $5,358): here both agree. Its worksheet follows Publication 915 where CalcXML's
// doesn't (see socialSecurity.js): CalcXML counts a net capital loss in full rather than up to
// $3,000, leaves out the deductible half of self-employment tax, and gives married filing
// separately a single filer's $25,000 and $9,000, which apply only if you lived apart all year;
// so the filing status has a choice for each, and line 6 names the self-employment tax when
// there is some. The form is set out as the other calculators' are (CalculatorPage.jsx).
// Address: /resources/calculators/social-security-tax (the calculator's link in the Resources
// page's Taxation list).

const intro =
  'Did you know that up to 85% of your Social Security Benefits may be subject to income tax? If this is the case you may want to consider repositioning some of your other income to minimize how much of your Social Security Benefit may be taxed and thereby, maximize your retirement income sources.';

const money = (name, label, extra) => ({ name, label, kind: 'money', max: 999999999, ...extra });
const gainOrLoss = { min: -999999999 };

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Income and Tax Information',
    fields: [
      {
        name: 'status',
        label: 'Tax filing status',
        control: 'select',
        options: [
          { value: 'S', label: 'Single' },
          { value: 'H', label: 'Head of Household' },
          { value: 'MJ', label: 'Married Filing Jointly' },
          { value: 'MS', label: 'Married Filing Separately' },
          { value: 'MSA', label: 'Married Filing Separately (lived apart all year)' },
        ],
      },
      { name: 'bracket', label: 'Marginal tax bracket', kind: 'percent', max: 75, help: taxBracketsHelp, wide: true },
    ],
  },
  {
    title: "Calculating 'Modified' Adjusted Gross Income",
    fields: [
      money('longTermGains', 'Long-term capital gains/losses (-)', gainOrLoss),
      money('shortTermGains', 'Short-term capital gains/losses (-)', gainOrLoss),
      money('dividends', 'Dividends'),
      money('interest', 'Taxable interest'),
      money('taxFreeInterest', 'Tax-free interest'),
      money('pension', 'Pension benefits'),
      money('ira', 'Taxable IRA distributions'),
      money('other', 'Other taxable income'),
      money('wages', 'Wages'),
      money('selfEmployment', 'Self-employed income/loss (-)', gainOrLoss),
      money('iraDeduction', 'Deductible IRA contributions'),
    ],
  },
  {
    title: 'Social Security Benefits',
    fields: [money('benefits', 'Social Security received')],
  },
];

const defaults = {
  status: 'S',
  bracket: '22',
  ...Object.fromEntries(sections.slice(1).flatMap((section) => section.fields.map((field) => [field.name, '0']))),
};

// Whole dollars, halves to the even dollar, as CalcXML's worksheet has them.
const amount = (value) => dollars(roundHalfEven(value));

// The worksheet's lines, as CalcXML words them.
const lines = [
  [1, 'Total Social Security benefit'],
  [2, 'One-half of line #1'],
  [3, "Adjusted Gross Income items (without 'adjustments')"],
  [4, 'Add back tax-free interest'],
  [5, 'Add lines 2,3 and 4'],
  [6, 'Adjustments (deductible IRA contributions)'],
  [7, 'Subtract line 6 from line 5'],
  [8, 'MAGI base amount'],
  [9, 'Subtract base amount (line 8 from line 7)'],
  [10, 'Enter factor based on filing status'],
  [11, 'Subtract 10 from 9 (min = 0)'],
  [12, 'Enter the smaller of line 9 or line 10'],
  [13, 'Enter one-half of line 12'],
  [14, 'Enter the smaller of line 2 and line 13'],
  [15, 'Multiply line 11 by 85% (min = 0)'],
  [16, 'Add lines 14 and 15'],
  [17, 'Multiply line 1 by 85%'],
  [18, 'Enter the smaller of line 16 or 17'],
];

function Results({ results }) {
  const { line } = results;
  const label = (lineNumber, text) =>
    lineNumber === 6 && results.selfEmploymentDeduction > 0
      ? 'Adjustments (deductible IRA contributions and half of self-employment tax)'
      : text;
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Based on the worksheet provided in the most recent IRS Publication 915, your Social Security benefit(s) of{' '}
          <strong>{amount(line[1])}</strong> will be <strong>{percentHalfEven(results.share)}</strong> taxable increasing
          your taxable income by <strong>{amount(results.taxable)}</strong> and creating a federal income tax liability
          of <strong>{amount(results.tax)}</strong>.
        </p>
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="colgroup" colSpan={2}>
                Social Security Taxation - IRS Publication 915
              </th>
              <th scope="col" className="is-amount">
                <span className="sr-only">Amount</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {lines.map(([lineNumber, text]) => (
              <tr key={lineNumber}>
                <td className="calc-line">{lineNumber}</td>
                <td>{label(lineNumber, text)}</td>
                <td className="is-amount">{amount(line[lineNumber])}</td>
              </tr>
            ))}
            <tr className="is-total">
              <td className="calc-line" />
              <td>Taxable Social Security benefit</td>
              <td className="is-amount">{amount(results.taxable)}</td>
            </tr>
            <tr>
              <td className="calc-line" />
              <td>Percent of Social Security benefit subject to taxation</td>
              <td className="is-amount">{percentHalfEven(results.share)}</td>
            </tr>
            <tr className="is-total">
              <td className="calc-line" />
              <td>Estimated taxes due</td>
              <td className="is-amount">{amount(results.tax)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <ShareBar
        title="Your Social Security Benefit"
        parts={[
          { label: 'Non-Taxable Portion of Benefit', value: line[1] - results.taxable },
          { label: 'Taxable Portion of Benefit', value: results.taxable },
        ]}
        empty="Enter the Social Security you received to see the graph."
      />
    </>
  );
}

const { base, secondTier, capitalLossLimit } = socialSecurityFigures;

export default function SocialSecurityTax() {
  return (
    <CalculatorPage
      page="Social Security Tax"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="How Much Of My Social Security Benefit May Be Taxed?"
      intro={intro}
      formTitle="Your Income and Benefits"
      sections={sections}
      defaults={defaults}
      calculate={taxableSocialSecurity}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your filing status, tax bracket, other income for the year and the Social Security you received, then select Calculate to see how much of it is taxable, line by line, and the tax on it."
      note={
        <>
          The worksheet is IRS Publication 915's. Your income is half your benefits plus your other income (a net capital
          loss counts only up to ${number(capitalLossLimit.S)}, ${number(capitalLossLimit.MS)} married filing
          separately) and tax-free interest, less a deductible IRA contribution and half of any self-employment tax. Up
          to 50% of benefits is taxed on what's over ${number(base.S)} (${number(base.MJ)} married filing jointly), and
          up to 85% on what's over another ${number(secondTier.S)} (${number(secondTier.MJ)} jointly). Married filing
          separately, both amounts are $0 if you lived with your spouse at any time in the year. The tax is the taxable
          part times your tax bracket.
        </>
      }
      cta={{
        title: (
          <>
            Planning your <em>retirement income?</em>
          </>
        ),
        text: 'Our team can help you arrange your withdrawals to keep more of your Social Security, in English or Spanish.',
      }}
    />
  );
}
