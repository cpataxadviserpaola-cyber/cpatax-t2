// A 2026 federal income tax estimate and the refund or balance due against what's been withheld,
// for the tax refund estimator (TaxRefundEstimator.jsx). It follows CalcXML's "2026 tax refund
// estimator": its inputs, its 2026 tax rates and standard deductions, the new deductions for
// tips, overtime and car loan interest, the senior deduction, the child and other dependent
// credits, the 0.9% Additional Medicare Tax on earned income and the 3.8% net investment income
// tax, and a trust's compressed rates; with the 2026 rules CalcXML gets wrong or leaves out (see
// TaxRefundEstimator.jsx). The standard deduction, senior deduction and SALT figures are the
// itemize-or-standard calculator's (deductions.js). Each January, update `refundFigures` and
// `deductionFigures`.

import { deductionFigures } from './deductions.js';

// Filing statuses, as the form gives them (CalcXML's codes), and deductions.js's for each.
export const refundStatuses = { single: 'S', head: 'H', separate: 'MS', joint: 'MJ', trust: 'T' };
const deductionStatus = { S: 'S', H: 'HOH', MS: 'MFS', MJ: 'MFJ' };

export const refundFigures = {
  year: 2026,
  // The 2026 rate schedules, as [taxable income over, rate on the rest].
  brackets: {
    S: [[0, 0.1], [12400, 0.12], [50400, 0.22], [105700, 0.24], [201775, 0.32], [256225, 0.35], [640600, 0.37]],
    H: [[0, 0.1], [17700, 0.12], [67450, 0.22], [105700, 0.24], [201750, 0.32], [256200, 0.35], [640600, 0.37]],
    MS: [[0, 0.1], [12400, 0.12], [50400, 0.22], [105700, 0.24], [201775, 0.32], [256225, 0.35], [384350, 0.37]],
    MJ: [[0, 0.1], [24800, 0.12], [100800, 0.22], [211400, 0.24], [403550, 0.32], [512450, 0.35], [768700, 0.37]],
    T: [[0, 0.1], [3300, 0.24], [11700, 0.35], [16000, 0.37]],
  },
  // 0.9% on earned income, and 3.8% on investment income, over these (a trust's investment
  // income tax starts where its top rate does).
  additionalMedicare: { rate: 0.009, threshold: { S: 200000, H: 200000, MS: 125000, MJ: 250000 } },
  investmentIncome: { rate: 0.038, threshold: { S: 200000, H: 200000, MS: 125000, MJ: 250000, T: 16000 } },
  // A traditional IRA: the 2026 limit with the catch-up for ages 50 and older, for each filer.
  iraLimit: 8600,
  // No tax on tips and overtime: up to the cap, less $100 for each full $1,000 of income over
  // the threshold; car loan interest the same, $200 for each $1,000. None for married people
  // filing separately.
  tips: { cap: 25000, threshold: 150000, jointThreshold: 300000, per1000: 100 },
  overtime: { cap: 12500, jointCap: 25000, threshold: 150000, jointThreshold: 300000, per1000: 100 },
  carInterest: { cap: 10000, threshold: 100000, jointThreshold: 200000, per1000: 200 },
  // The child tax credit and the credit for other dependents, less $50 for each $1,000 or part of
  // $1,000 of income over the threshold; up to $1,700 a child is refundable, 15% of earned
  // income over $2,500.
  credits: {
    child: 2200,
    other: 500,
    threshold: 200000,
    jointThreshold: 400000,
    per1000: 50,
    refundable: 1700,
    refundRate: 0.15,
    earnedFloor: 2500,
  },
  // The 20% qualified business income deduction; over the threshold (taxable income before it),
  // limited to the greater of 50% of W-2 wages or 25% of them plus 2.5% of the business's
  // assets, phased in over the range.
  qbi: {
    rate: 0.2,
    threshold: { S: 201750, H: 201750, MS: 201775, MJ: 403500, T: 201750 },
    range: { S: 75000, H: 75000, MS: 75000, MJ: 150000, T: 75000 },
  },
};

// The tax on taxable income at a rate schedule's rates (the capital gains estimator's too, capitalGains.js).
export function bracketTax(income, brackets) {
  if (!(income > 0)) return 0;
  return brackets.reduce((tax, [floor, rate], index) => {
    const top = brackets[index + 1]?.[0] ?? Infinity;
    return tax + Math.max(0, Math.min(income, top) - floor) * rate;
  }, 0);
}

// A deduction capped, then reduced by `per1000` for each full $1,000 of income over the threshold.
const phasedDeduction = (amount, cap, agi, threshold, per1000) =>
  Math.max(0, Math.min(amount, cap) - per1000 * Math.floor(Math.max(0, agi - threshold) / 1000));

// inputs: status (refundStatuses); income, the gross income at personal rates (including
// `unearned`, the investment part of it); ira; itemized (other than SALT); salt; children and
// otherDependents; tips, overtime, carInterest; blind and seniors (filers); passThrough with
// ownership (a fraction), assets and wages (the company's); withheld. Optional, for the tax
// freedom day calculator (freedom.js): adjustments, other deductions before AGI (half of
// self-employment tax); medicareWages, the earnings the Additional Medicare Tax applies to
// (earned income unless given).
export function estimateRefund(inputs, figures = refundFigures, deductions = deductionFigures) {
  const { status } = inputs;
  const trust = status === 'T';
  const joint = status === 'MJ';
  const separate = status === 'MS';
  const d = deductionStatus[status];

  const business = inputs.passThrough * inputs.ownership;
  const ira = trust ? 0 : Math.min(inputs.ira, figures.iraLimit * (joint ? 2 : 1));
  const agi = inputs.income + business - ira - (inputs.adjustments ?? 0);
  const earned = Math.max(0, inputs.income - inputs.unearned);
  const medicareWages = inputs.medicareWages ?? earned;

  // Deductions: the larger of the standard deduction and itemizing, plus those taken either way.
  let deduction = 0;
  if (!trust) {
    const standard = deductions.standard[d] + deductions.additional[d] * (inputs.blind + inputs.seniors);
    const { salt } = deductions;
    const saltCap = Math.max(salt.floor[d], salt.cap[d] - salt.rate * Math.max(0, agi - salt.threshold[d]));
    const itemized = inputs.itemized + Math.min(inputs.salt, saltCap);
    const { senior } = deductions;
    const seniorDeduction = separate
      ? 0
      : Math.min(inputs.seniors, joint ? 2 : 1) *
        Math.max(0, senior.amount - senior.rate * Math.max(0, agi - senior.threshold[d]));
    const { tips, overtime, carInterest } = figures;
    const extra = separate
      ? 0
      : phasedDeduction(inputs.tips, tips.cap, agi, joint ? tips.jointThreshold : tips.threshold, tips.per1000) +
        phasedDeduction(
          inputs.overtime,
          joint ? overtime.jointCap : overtime.cap,
          agi,
          joint ? overtime.jointThreshold : overtime.threshold,
          overtime.per1000,
        ) +
        phasedDeduction(
          inputs.carInterest,
          carInterest.cap,
          agi,
          joint ? carInterest.jointThreshold : carInterest.threshold,
          carInterest.per1000,
        );
    deduction = Math.max(standard, itemized) + seniorDeduction + extra;
  }

  // The qualified business income deduction, on taxable income before it.
  const beforeQbi = agi - deduction;
  let qbiDeduction = 0;
  if (business > 0) {
    const { qbi } = figures;
    const full = qbi.rate * business;
    const wages = inputs.wages * inputs.ownership;
    const assets = inputs.assets * inputs.ownership;
    const limit = Math.max(0.5 * wages, 0.25 * wages + 0.025 * assets);
    const over = Math.min(1, Math.max(0, beforeQbi - qbi.threshold[status]) / qbi.range[status]);
    const allowed = full > limit ? full - (full - limit) * over : full;
    qbiDeduction = Math.max(0, Math.min(allowed, qbi.rate * Math.max(0, beforeQbi)));
  }
  const taxable = beforeQbi - qbiDeduction;

  // Income tax, then the Additional Medicare Tax and the net investment income tax.
  const incomeTax = bracketTax(taxable, figures.brackets[status]);
  const { additionalMedicare, investmentIncome } = figures;
  const medicare = trust
    ? 0
    : additionalMedicare.rate * Math.max(0, medicareWages - additionalMedicare.threshold[status]);
  const investment = trust
    ? Math.max(0, agi - investmentIncome.threshold.T)
    : Math.min(Math.max(0, inputs.unearned), Math.max(0, agi - investmentIncome.threshold[status]));
  const investmentTax = investmentIncome.rate * investment;
  const tax = incomeTax + medicare + investmentTax;

  // Credits: reduced together for high incomes, the child credit first; they offset income tax,
  // and what's left of them is refunded up to $1,700 a child (as Form 8812 figures it).
  let childCredit = 0;
  let otherCredit = 0;
  let refundable = 0;
  let creditsUsed = 0;
  if (!trust) {
    const { credits } = figures;
    const reduction =
      credits.per1000 * Math.ceil(Math.max(0, agi - (joint ? credits.jointThreshold : credits.threshold)) / 1000);
    childCredit = Math.max(0, credits.child * inputs.children - reduction);
    otherCredit = Math.max(0, credits.other * inputs.otherDependents - Math.max(0, reduction - credits.child * inputs.children));
    creditsUsed = Math.min(incomeTax, childCredit + otherCredit);
    refundable = Math.min(
      childCredit + otherCredit - creditsUsed,
      childCredit,
      credits.refundable * inputs.children,
      credits.refundRate * Math.max(0, earned - credits.earnedFloor),
    );
  }
  const liability = tax - creditsUsed;
  const balance = inputs.withheld + refundable - liability;

  return {
    business,
    ira,
    agi,
    deduction,
    qbiDeduction,
    taxable,
    tax,
    childCredit,
    otherCredit,
    liability,
    refundable,
    withheld: inputs.withheld,
    balance,
  };
}
