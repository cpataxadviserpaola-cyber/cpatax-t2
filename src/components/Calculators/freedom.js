// Tax Freedom Day: the year's federal income tax plus Social Security and Medicare tax, as a share
// of the year's income, in days, for the tax freedom day calculator (TaxFreedomDay.jsx). The
// income tax is the tax refund estimator's (refund.js), less its nonrefundable credits (the
// refundable part of the child credit isn't counted, as on CalcXML). Employees pay FICA on their
// earned income; the self-employed pay self-employment tax on their earned income and their
// share of pass-through income instead, and deduct half of it before AGI. A trust pays neither.
// Each January, update `freedomFigures` (and those in refund.js and deductions.js).

import { estimateRefund } from './refund.js';

export const freedomFigures = {
  year: 2026,
  socialSecurity: { rate: 0.062, wageBase: 184500 },
  medicare: 0.0145,
  // Self-employment tax is figured on 92.35% of net earnings (none under $400), at twice the
  // employee rates.
  selfEmployment: { share: 0.9235, minimum: 400 },
};

export function taxFreedomDay(inputs, figures = freedomFigures) {
  const { socialSecurity, medicare, selfEmployment } = figures;
  const trust = inputs.status === 'T';
  const business = inputs.passThrough * inputs.ownership;
  const earned = Math.max(0, inputs.income - inputs.unearned);

  let payroll = 0;
  let adjustments = 0;
  let medicareWages = earned;
  if (!trust && inputs.selfEmployed) {
    const netEarnings = Math.max(0, earned + business) * selfEmployment.share;
    if (netEarnings >= selfEmployment.minimum) {
      payroll = 2 * (socialSecurity.rate * Math.min(netEarnings, socialSecurity.wageBase) + medicare * netEarnings);
      adjustments = payroll / 2;
    }
    medicareWages = netEarnings;
  } else if (!trust) {
    payroll = socialSecurity.rate * Math.min(earned, socialSecurity.wageBase) + medicare * earned;
  }

  const income = estimateRefund({ ...inputs, withheld: 0, adjustments, medicareWages });
  const incomeTax = Math.max(0, income.liability);
  const total = incomeTax + payroll;
  const grossIncome = Math.max(0, inputs.income + business);
  const days = grossIncome > 0 ? Math.min(365, Math.round((total / grossIncome) * 365)) : 0;
  // The day the tax is paid: the last of those days (January 1 if there are none).
  const date = new Date(Date.UTC(figures.year, 0, Math.max(1, days)));

  return { incomeTax, payroll, total, grossIncome, days, date };
}
