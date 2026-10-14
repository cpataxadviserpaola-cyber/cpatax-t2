import CalculatorPage from './CalculatorPage.jsx';
import AlternativesChart from './AlternativesChart.jsx';
import { compareDeductions, deductionFigures, statuses } from './deductions.js';
import { dollars, number, percent } from './format.js';

// Source: CalcXML's "Should I itemize or take the standard deduction?" (calculator inc10 on the
// firm's account, 481), which the Resources page used to open on calcxml.com. Its wording is
// kept word for word: the introduction, the field groups and fields, the results sentences, the
// summary table and the graph's parts, and the disclaimer. Its results follow the 2026 rules
// where CalcXML's don't (see deductions.js); the summary adds the charitable deduction for those
// who don't itemize, when there is one, and the results sentence counts it on the standard
// side. The sentence compares the whole-dollar amounts it shows (CalcXML can call $32,200
// "greater than" $32,200). The numbers of blind filers and filers 65 or older go up to two
// (CalcXML takes ten), and only one on a single or head of household return. The form is set
// out as the other calculators' are (CalculatorPage.jsx). Address:
// /resources/calculators/itemize-or-standard (the calculator's link in the Resources page's
// Taxation list).

const { year, standard } = deductionFigures;

const intro = `The standard deduction for ${year} is $${number(standard.S)} for single filers and $${number(standard.MFJ)} for those married filing jointly. If you have numerous itemized deductions such as mortgage interest, charitable contributions, etc., it may make sense for you to itemize your deductions instead of using the standard deduction for your tax filing status. However, with change in tax law capping some itemized deductions while increasing the standard deduction it might be better not to itemize and take the standard deduction. Calculate below to find out what is best for your situation when it comes to filing your taxes.`;

const money = (name, label) => ({ name, label, kind: 'money', max: 999999999 });

// CalcXML's fields, in its order and groups.
const sections = [
  {
    title: 'Input and Assumptions',
    fields: [
      money('agi', 'Estimated AGI (adjusted gross income)'),
      {
        name: 'status',
        label: 'Tax filing status',
        control: 'select',
        options: [
          { value: statuses.single, label: 'Single' },
          { value: statuses.joint, label: 'Married - Jointly' },
          { value: statuses.separate, label: 'Married - Separately' },
          { value: statuses.head, label: 'Head of Household' },
        ],
      },
      { name: 'blind', label: 'Number of blind filers', kind: 'count', max: 2, steps: ['One fewer', 'One more'] },
      {
        name: 'seniors',
        label: 'Number of filers over age 65',
        kind: 'count',
        max: 2,
        steps: ['One fewer', 'One more'],
      },
    ],
  },
  {
    title: 'Dental and Medical Expenses',
    fields: [money('medical', 'Medical expenses'), money('dental', 'Dental expenses')],
  },
  {
    title: 'Taxes You Paid',
    fields: [
      money('stateTaxes', 'State and local income taxes'),
      money('realEstateTaxes', 'Real estate taxes'),
      money('propertyTaxes', 'Personal property taxes'),
      money('otherTaxes', 'Other taxes'),
    ],
  },
  {
    title: 'Interest (Paid/Received)',
    fields: [
      money('mortgageInterest', 'Home mortgage interest, points, and PMI'),
      money('interestReceived', 'Investment interest and dividends received'),
      money('interestPaid', 'Investment interest you paid'),
    ],
  },
  {
    title: 'Charitable Contributions',
    fields: [
      money('charityCash', 'Cash contributions'),
      money('charityInKind', "'In-kind' contributions"),
      money('charityCarryOver', "'Carryover' contributions"),
    ],
  },
];

const defaults = {
  ...Object.fromEntries(sections.flatMap((section) => section.fields.map((field) => [field.name, '0']))),
  status: statuses.joint,
};

// A single or head of household return has one filer.
const validate = ({ status, blind, seniors }) => {
  if (status !== statuses.single && status !== statuses.head) return {};
  const message = 'A single or head of household return has only one filer.';
  return { ...(blind > 1 && { blind: message }), ...(seniors > 1 && { seniors: message }) };
};

function Results({ results }) {
  const without = Math.round(results.withoutItemizing);
  const itemized = Math.round(results.itemized);
  const comparison = without === itemized ? 'equal to' : without < itemized ? 'less than' : 'greater than';
  const rows = [
    ['OBBBA Senior Deduction', results.seniorDeduction],
    ['Deductible dental and medical expenses', results.medical],
    ['Deductible taxes you paid', results.taxes],
    ['Deductible interest you paid', results.interest],
    ['Deductible charitable contributions', results.charitable],
    ['Total itemized deduction', results.itemized, true],
    ['Your standard deduction', results.standard, true],
    ...(results.charityWithoutItemizing > 0
      ? [
          ['Charitable deduction if you don’t itemize', results.charityWithoutItemizing],
          ['Your deduction if you don’t itemize', results.withoutItemizing, true],
        ]
      : []),
  ];

  return (
    <>
      <div className="calc-answer">
        <h3 className="label">Explanation of Results</h3>
        <p>
          Based on the input you provided, your Standard Deduction
          {results.charityWithoutItemizing > 0 && ' (with the charitable deduction for those who don’t itemize)'} of{' '}
          <strong>{dollars(without)}</strong> is {comparison} your Itemized Deductions of{' '}
          <strong>{dollars(itemized)}</strong>.
        </p>
      </div>

      <h3>Summary Table</h3>
      <div className="article-table calc-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Summary of Itemized Deduction</th>
              <th scope="col" className="is-amount">
                <span className="sr-only">Amount</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, amount, total]) => (
              <tr key={label} className={total ? 'is-total' : undefined}>
                <td>{label}</td>
                <td className="is-amount">{dollars(amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>Graph</h3>
      <AlternativesChart
        title="Itemized vs. Standard Deduction"
        badge="Larger deduction"
        rows={[
          { label: 'Net Itemized Deduction', value: results.itemized, best: itemized > without },
          { label: 'Your Standard Deduction', value: results.withoutItemizing, best: without > itemized },
        ]}
        empty="Enter your income and deductions to see the graph."
      />
    </>
  );
}

const { senior, salt, charity } = deductionFigures;

export default function ItemizeOrStandard() {
  return (
    <CalculatorPage
      page="Itemize or Standard Deduction"
      category={{ to: '/resources#taxation', label: 'Taxation' }}
      title="Should I Itemize Or Take The Standard Deduction?"
      intro={intro}
      formTitle="Your Deductions"
      sections={sections}
      defaults={defaults}
      validate={validate}
      calculate={compareDeductions}
      renderResults={(results) => <Results results={results} />}
      placeholder="Enter your income, filing status and the expenses you could itemize, then select Calculate to see which deduction is larger, with a summary table and a graph."
      note={
        <>
          The {year} standard deduction for your filing status, plus the additional amount for each filer who is blind
          or 65 or older. Each filer 65 or older also gets the ${number(senior.amount)} senior deduction, itemizing or
          not, less {percent(senior.rate)} of AGI over ${number(senior.threshold.S)} ($
          {number(senior.threshold.MFJ)} on a joint return); married people filing separately don't. Itemized: medical
          and dental expenses over {percent(deductionFigures.medicalFloor)} of AGI; state and local income, real estate
          and personal property taxes up to ${number(salt.cap.MFJ)} (${number(salt.cap.MFS)} filing separately), less{' '}
          {percent(salt.rate)} of AGI over ${number(salt.threshold.MFJ)}, but not below ${number(salt.floor.MFJ)}, plus
          other taxes; mortgage interest, and investment interest up to your investment income; and charitable gifts
          over {percent(charity.floor)} of AGI, up to {percent(charity.limit)} of AGI. If you don't itemize, you can
          still deduct cash gifts up to ${number(charity.withoutItemizing.S)} ($
          {number(charity.withoutItemizing.MFJ)} on a joint return). AGI is used where the law uses modified AGI; limits
          on mortgage debt, gifts of property and to donor-advised funds, and the limit on itemized deductions in the
          37% bracket aren't included.
        </>
      }
      cta={{
        title: (
          <>
            Want help with <em>your deductions?</em>
          </>
        ),
        text: 'Our team can help you decide whether to itemize and plan your deductions, in English or Spanish.',
      }}
    />
  );
}
