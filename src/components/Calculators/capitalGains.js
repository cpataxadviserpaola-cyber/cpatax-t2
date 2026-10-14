// The 2026 federal tax on a year's long-term capital transactions, for the capital gains
// estimator (CapitalGainsTax.jsx). A net gain sits on top of the rest of your taxable income: the
// part of it that stays under the 0% threshold is taxed at 0%, the part up to the 15% threshold
// at 15%, and the rest at 20%. A net loss is deducted from ordinary income, up to $3,000 ($1,500
// married filing separately) and no more than that income, and the rest carries forward; its
// "tax" is the income tax the deduction saves, at the 2026 rates (refund.js), so it's negative.
// Each January, update `capitalGainsFigures`.

import { bracketTax, refundFigures } from './refund.js';

export const capitalGainsFigures = {
  year: 2026,
  // Taxable income, with the gains, where the 15% and 20% rates start.
  thresholds: { S: [49450, 545500], MJ: [98900, 613700], MS: [49450, 306850], H: [66200, 579600] },
  rates: [0, 0.15, 0.2],
  lossLimit: { S: 3000, MJ: 3000, MS: 1500, H: 3000 },
};

// status: 'S', 'MJ', 'MS' or 'H'; income, taxable income without the gains; transactions,
// [{ purchase, sale }].
export function capitalGainsTax({ status, income, transactions }, figures = capitalGainsFigures, refund = refundFigures) {
  const results = transactions.map(({ purchase, sale }) => sale - purchase);
  const gains = results.filter((result) => result > 0).reduce((sum, result) => sum + result, 0);
  const losses = results.filter((result) => result < 0).reduce((sum, result) => sum + result, 0);
  const net = gains + losses;
  const taxable = Math.max(0, income);
  const traded = results.some((result) => result !== 0);
  const [zeroTop, fifteenTop] = figures.thresholds[status];

  if (net > 0) {
    const atZero = Math.max(0, Math.min(net, zeroTop - taxable));
    const atFifteen = Math.max(0, Math.min(taxable + net, fifteenTop) - Math.max(taxable, zeroTop));
    const atTwenty = net - atZero - atFifteen;
    const bands = [atZero, atFifteen, atTwenty];
    const tax = bands.reduce((sum, amount, index) => sum + amount * figures.rates[index], 0);
    return { traded, gains, losses, net, bands, tax, rate: tax / net, limit: figures.lossLimit[status] };
  }

  // The deduction, and the part of it the income can take (Schedule D's carryover worksheet).
  const limit = figures.lossLimit[status];
  const deduction = Math.min(-net, limit);
  const used = Math.min(deduction, taxable);
  const brackets = refund.brackets[status];
  const savings = bracketTax(taxable, brackets) - bracketTax(taxable - used, brackets);
  return { traded, gains, losses, net, bands: [0, 0, 0], tax: -savings, rate: 0, limit, deduction, used, carryover: -net - used };
}
