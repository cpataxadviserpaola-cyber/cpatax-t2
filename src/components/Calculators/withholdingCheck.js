// Whether this year's withholding will cover the year's tax, for the payroll withholdings
// calculator (PayrollWithholdings.jsx): the tax refund estimator's tax (refund.js), against what's
// been withheld so far plus the last paycheck's withholding for each pay period left in the year;
// and what to withhold each paycheck from now on to come out even. As on CalcXML, the pay periods
// left are the year's share still to come (from today) of the year's pay periods, rounded up.

import { estimateRefund } from './refund.js';

// The pay periods left in the year from `today`: at least the one under way.
export function periodsLeft(periods, today = new Date()) {
  const year = today.getFullYear();
  const start = new Date(year, 0, 1);
  const daysInYear = Math.round((new Date(year + 1, 0, 1) - start) / 86400000);
  const day = Math.floor((new Date(year, today.getMonth(), today.getDate()) - start) / 86400000) + 1;
  return Math.max(1, Math.ceil((periods * (daysInYear - day)) / daysInYear));
}

// inputs: those of estimateRefund, with withheld (to date), lastPaycheck (the tax withheld from
// it) and periods (pay periods a year).
export function checkWithholding(inputs, today = new Date()) {
  const tax = estimateRefund({ ...inputs, withheld: 0 });
  const liability = Math.max(0, tax.liability);
  const left = periodsLeft(inputs.periods, today);
  const toCome = inputs.lastPaycheck * left;
  const totalWithheld = inputs.withheld + toCome;
  // The refundable part of the child credit counts toward the tax, as it does in a refund.
  const balance = totalWithheld + tax.refundable - liability;
  const perPaycheck = Math.max(0, (liability - tax.refundable - inputs.withheld) / left);
  return { ...tax, liability, periodsLeft: left, toCome, totalWithheld, balance, perPaycheck };
}
