// The form CalcXML's tax calculators share (the tax refund estimator, tax freedom day and the
// federal income tax estimator): its fields, word for word, with each calculator adding its own
// (TaxRefundEstimator.jsx, TaxFreedomDay.jsx, FederalIncomeTax.jsx); and the tax analysis table
// two of them show. See refund.js for what each field does.

import { refundFigures, refundStatuses } from './refund.js';
import { number } from './format.js';

export const money = (name, label, extra) => ({ name, label, kind: 'money', max: 99999999, ...extra });
const count = (name, label) => ({ name, label, kind: 'count', max: 15, steps: ['One fewer', 'One more'] });
const filers = [
  { value: 0, label: 'None' },
  { value: 1, label: 'One of Us' },
  { value: 2, label: 'Both of Us' },
];

// The personal fields, the income field's label being each calculator's own.
export const personalFields = (incomeLabel) => [
  {
    name: 'status',
    label: 'Tax filing status',
    control: 'select',
    options: [
      { value: refundStatuses.single, label: 'Single' },
      { value: refundStatuses.head, label: 'Head of Household' },
      { value: refundStatuses.separate, label: 'Married - Separately' },
      { value: refundStatuses.joint, label: 'Married - Jointly' },
      { value: refundStatuses.trust, label: 'Trust' },
    ],
  },
  money('income', incomeLabel, { wide: true }),
  money('ira', 'Traditional IRA Contribution'),
  money('itemized', 'Itemized deductions (other than SALT) - $0 for Standard'),
  count('children', 'Number of dependent children under 17 with SS#'),
  count('otherDependents', 'Number of non-child dependents'),
  money('unearned', 'Amount of gross income considered "unearned"/investment income'),
  money('salt', 'State and local taxes paid'),
  money('tips', 'Qualified tips'),
  money('overtime', 'Qualified overtime'),
  money('carInterest', 'Qualified car loan interest'),
  { name: 'blind', label: 'Are you (and/or your spouse if filing jointly) blind?', control: 'select', options: filers },
  {
    name: 'seniors',
    label: 'Are you (and/or your spouse if filing jointly) 65 or older?',
    control: 'select',
    options: filers,
  },
];

export const businessSection = {
  title: 'Business/Self-Employed Income',
  fields: [
    money('passThrough', 'Total company pass-through income', { min: -999999999, max: 999999999 }),
    { name: 'ownership', label: 'Individual company ownership', kind: 'percent', max: 100 },
    money('assets', 'Total company capital assets'),
    money('wages', 'Total company W-2 wages'),
  ],
};

// Every field at 0, a joint return, full ownership; `extra` for each calculator's own.
export const taxDefaults = (sections, extra) => ({
  ...Object.fromEntries(sections.flatMap((section) => section.fields.map((field) => [field.name, '0']))),
  status: refundStatuses.joint,
  ownership: '100',
  ...extra,
});

// "Both of Us" needs a spouse on the return.
export const validateFilers = ({ status, blind, seniors }) => {
  if (status === refundStatuses.joint) return {};
  const message = '"Both of Us" is for a joint return only.';
  return { ...(blind > 1 && { blind: message }), ...(seniors > 1 && { seniors: message }) };
};

// The tax analysis, as CalcXML lays it out (rows for StepTable.jsx): from gross income to the
// estimated tax and the refundable child credit; each calculator names three of the lines its own
// way (`labels`: gross, ira, tax). The table shows pass-through income in full, then the
// qualified business income deduction on its own line, when there is one.
export const taxAnalysisRows = (results, labels) => [
  { label: labels.gross, value: results.inputs.income },
  { label: 'Pass-through income (your share)', sign: '+', value: results.business },
  { label: labels.ira, sign: '-', value: results.ira },
  { label: 'Adjusted gross income', sign: '=', value: results.agi },
  { label: 'Standard/Itemized deductions', sign: '-', value: results.deduction },
  ...(results.qbiDeduction > 0
    ? [{ label: 'Qualified business income deduction', sign: '-', value: results.qbiDeduction }]
    : []),
  { label: 'Taxable income', sign: '=', value: results.taxable },
  { label: labels.tax, value: results.tax },
  { label: 'Child tax credits', sign: '-', value: results.childCredit },
  { label: 'Family tax credits', sign: '-', value: results.otherCredit },
  { label: 'Estimated tax liability', sign: '=', value: Math.max(0, results.liability) },
  { label: 'Refundable Child Tax Credit', value: results.refundable },
];

// How the tax is figured, for the note under the results of the calculators that use refund.js.
export function TaxNote() {
  const { year, iraLimit, tips, overtime, carInterest, credits, qbi } = refundFigures;
  return (
    <>
      The {year} federal tax rates and standard deductions. AGI is your income plus your share of pass-through income,
      less a traditional IRA contribution up to ${number(iraLimit)} a person (the {year} limit with the catch-up for 50
      and older). You get the larger of the standard deduction (with the additional amounts for age and blindness) and
      your itemized deductions plus state and local taxes up to the SALT cap; then the senior deduction, and qualified
      tips (up to ${number(tips.cap)}), overtime (up to ${number(overtime.cap)}, ${number(overtime.jointCap)} jointly)
      and car loan interest (up to ${number(carInterest.cap)}), each reduced at higher incomes, and the{' '}
      {qbi.rate * 100}% qualified business income deduction, limited by the business's W-2 wages and assets at higher
      incomes. Married people filing separately get none of the senior, tips, overtime or car loan interest deductions
      here. Tax adds 0.9% on earned income and 3.8% on investment income over their thresholds. The child credit is $
      {number(credits.child)} a child under 17, up to ${number(credits.refundable)} of it refundable from earned
      income; ${number(credits.other)} for other dependents. A trust pays the trust rates on all of it, with the 3.8%
      tax over the top rate's threshold. Self-employment tax, capital gains rates, other credits, IRA limits for those
      covered by a plan at work and state income tax aren't included.
    </>
  );
}
