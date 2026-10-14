import CalculatorPage from './CalculatorPage.jsx';
import PaycheckChart from './PaycheckChart.jsx';
import { taxBracketsHelp } from './helpCharts.jsx';
import { interestDeductions, interestFigures } from './interestDeductions.js';
import { dollars, number, roundHalfEven } from './format.js';

// Source: CalcXML's "What are the tax implications of paying interest?" (calculator inc09 on the
// firm's account, 481), which the Resources page used to open on calcxml.com. Its wording is
// kept word for word: the introduction, the field groups and fields, the tax bracket table, the
// results sentence, the summary table, the graph's title and bars, and the disclaimer; and its
// results to the dollar, rounded as its table rounds (an exact half to the even dollar), which
// its sentence doesn't always do ($3,001 beside the table's $3,000): here both agree. Its rules
// follow 2026's where CalcXML's don't (see interestDeductions.js): CalcXML lets a short-term
// capital loss reduce the investment income that investment interest is deductible against;
// counts all home equity loan interest as deductible, though it is only if the loan bought,
// built or improved the home; and counts no car loan interest, though a new U.S.-assembled
// vehicle's is deductible from 2025 through 2028. So the form asks about each loan, and the
// results sentence says what isn't deductible and what is. CalcXML's graph pairs each kind's
// interest with its tax savings; here each kind's bar is its interest, split into the tax saved
// and the rest. The form is set out as the other calculators' are (CalculatorPage.jsx).
// Address: /resources/calculators/interest-tax-implications (the calculator's link in the
// Resources page's Taxation list).

const intro =
  'Interest paid may or may not be tax-deductible depending on the type of interest paid. Use this calculator to help determine what, if any, interest you pay this year may be deductible and to what extent it may save you on taxes.';

const { year, carLoan } = interestFigures;
const money = (name, label, extra) => ({ name, label, kind: 'money', max: 999999999, ...extra });
const yesNo = [
  { value: 'Y', label: 'Yes' },
  { value: 'N', label: 'No' },
];

// CalcXML's fields, in its order and groups, with a question after the home equity loan and
// the auto loan.
const sections = [
  {
    title: 'Federal Income Tax Information',
    fields: [{ name: 'bracket', label: 'Marginal tax bracket', kind: 'percent', max: 75, help: taxBracketsHelp, wide: true }],
  },
  {
    title: 'Home Mortgage Interest',
    fields: [
      money('firstMortgage', 'First mortgage interest'),
      money('secondMortgage', 'Second mortgage interest'),
      money('homeEquity', 'Home equity loan interest'),
      {
        name: 'homeEquityForHome',
        label: 'Was the home equity loan used to buy, build or improve your home?',
        control: 'switch',
        options: yesNo,
        wide: true,
        help: 'Interest on a home equity loan or line of credit is deductible only if the money was used to buy, build or substantially improve the home that secures it, and only on up to $750,000 of mortgage debt in all ($375,000 married filing separately).',
      },
    ],
  },
  {
    title: 'Investment Interest',
    fields: [
      money('investmentPaid', 'Investment interest you PAID'),
      money('investmentIncome', 'Interest and dividends you RECEIVED'),
      money('shortTermGains', 'Short-term capital gains/losses (-)', { min: -999999999 }),
    ],
  },
  {
    title: 'Business Debt Interest',
    fields: [money('business', 'Business debt interest')],
  },
  {
    title: 'Personal Debt Interest',
    fields: [
      money('creditCard', 'Credit card interest'),
      money('auto', 'Auto loan interest'),
      {
        name: 'carLoanQualifies',
        label: 'Is the auto loan for a new vehicle assembled in the U.S.?',
        control: 'switch',
        options: yesNo,
        wide: true,
        help: `From 2025 through ${carLoan.lastYear}, interest on a loan taken out after 2024 to buy a new car, SUV, van, pickup or motorcycle for personal use, with its final assembly in the U.S., is deductible up to $${number(carLoan.cap)} a year, whether or not you itemize. The limit drops by $${carLoan.phaseOut.per1000} for each $1,000 of income over $${number(carLoan.phaseOut.S)} ($${number(carLoan.phaseOut.MJ)} married filing jointly).`,
      },
      money('otherPersonal', 'Other personal debt interest'),
    ],
  },
];

const defaults = {
  bracket: '22',
  firstMortgage: '0',
  secondMortgage: '0',
  homeEquity: '0',
  homeEquityForHome: 'Y',
  investmentPaid: '0',
  investmentIncome: '0',
  shortTermGains: '0',
  business: '0',
  creditCard: '0',
  auto: '0',
  carLoanQualifies: 'N',
  otherPersonal: '0',
};

const calculate = (inputs) =>
  interestDeductions({
    ...inputs,
    homeEquityForHome: inputs.homeEquityForHome === 'Y',
    carLoanQualifies: inputs.carLoanQualifies === 'Y',
  });

// Whole dollars, halves to the even dollar, as CalcXML's table has them.
const amount = (value) => dollars(roundHalfEven(value));

const kinds = [
  ['mortgage', 'Home mortgage', 'Mortgage Interest'],
  ['investment', 'Investment', 'Investment Interest'],
  ['business', 'Business', 'Business Interest'],
  ['personal', 'Personal', 'Personal Interest'],
];

const chartSeries = [
  { key: 'savings', label: 'Tax Savings' },
  { key: 'cost', label: 'Interest after tax savings' },
];

function Results({ results }) {
  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Generally speaking, your mortgage interest of <strong>{amount(results.mortgage.deductible)}</strong> is fully
          deductible (with some limits), investment interest of <strong>{amount(results.investment.total)}</strong> is
          deductible to the extent it can be offset by investment income (excess interest may be carried forward), and
          your business interest of <strong>{amount(results.business.total)}</strong> is fully deductible (with some
          limits).
          {results.homeEquityExcluded > 0 && (
            <>
              {' '}
              Home equity loan interest of <strong>{amount(results.homeEquityExcluded)}</strong> is not deductible, as
              the loan wasn't used to buy, build or improve your home.
            </>
          )}{' '}
          Personal interest of <strong>{amount(results.personal.total)}</strong> is not deductible
          {results.carLoan > 0 ? (
            <>
              , except <strong>{amount(results.carLoan)}</strong> of interest on your loan for a new vehicle assembled in
              the U.S. (through {carLoan.lastYear}).
            </>
          ) : (
            '.'
          )}
        </p>
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              {['Interest Type', 'Total Interest', 'Deductible Interest', 'Tax Savings'].map((heading, index) => (
                <th scope="col" className={index ? 'is-amount' : undefined} key={heading}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...kinds, ['totals', 'Totals']].map(([key, label]) => (
              <tr key={key} className={key === 'totals' ? 'is-total' : undefined}>
                <td>{label}</td>
                {['total', 'deductible', 'savings'].map((column) => (
                  <td className="is-amount" key={column}>
                    {amount(results[key][column])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <PaycheckChart
        title="Interest Deductibility Summary"
        variant="is-interest"
        series={chartSeries}
        rows={kinds.map(([key, , chartLabel]) => ({
          label: chartLabel,
          ...results[key],
          values: { savings: results[key].savings, cost: results[key].total - results[key].savings },
        }))}
        summary={(row) => (
          <>
            Tax savings <strong>{amount(row.savings)}</strong> of {amount(row.total)}
          </>
        )}
        empty="Enter the interest you pay to see the graph."
      />
    </>
  );
}

export default function InterestDeductions() {
  return (
    <CalculatorPage
      page="Interest Tax Implications"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="What Are The Tax Implications Of Paying Interest?"
      intro={intro}
      formTitle="Your Interest"
      sections={sections}
      defaults={defaults}
      calculate={calculate}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your tax bracket and the interest you pay this year on each kind of debt, then select Calculate to see how much is deductible and what it saves you in tax."
      note={
        <>
          With the {year} rules: mortgage interest is deductible on up to $750,000 of debt used to buy, build or improve
          your home, a home equity loan's included only if it was used that way. Investment interest is deductible up to
          your investment income (interest, dividends and net short-term gains; a net loss doesn't reduce it), and the
          rest carries forward. These two are itemized deductions, so they save tax only if you itemize. Business
          interest is deducted from business income. Other personal interest, on credit cards and personal loans, isn't
          deductible; interest on a loan for a new vehicle assembled in the U.S. is, through {carLoan.lastYear}, up to $
          {number(carLoan.cap)} (less if your income is over ${number(carLoan.phaseOut.S)}, $
          {number(carLoan.phaseOut.MJ)} jointly), whether or not you itemize. The tax savings are the deductible interest
          times your tax bracket.
        </>
      }
      cta={{
        title: (
          <>
            Making the most of your <em>interest deductions?</em>
          </>
        ),
        text: 'Our team can help you see which of your interest is deductible and how to keep it that way, in English or Spanish.',
      }}
    />
  );
}
