// The investment growth comparison (InvestmentGrowth.jsx): the same balance and yearly
// contributions, added at the end of each year, in three accounts. A fully-taxable account
// grows at its return less tax at your bracket each year. A tax-deferred account grows at its
// full return; its contributions were made after tax (as into an annuity or a nondeductible
// IRA), so when it's withdrawn in a lump sum only the growth is taxed, at your bracket, and a
// loss gives no tax back. A tax-free account grows at its return, untaxed.

// Rates as fractions: 0.08 for 8%.
export function compareGrowth({ balance, contributions, years, taxableReturn, deferredReturn, freeReturn, bracket }) {
  const afterTaxReturn = taxableReturn * (1 - bracket);
  const rows = [];
  let taxable = balance;
  let deferred = balance;
  let free = balance;
  for (let year = 1; year <= years; year += 1) {
    taxable = taxable * (1 + afterTaxReturn) + contributions;
    deferred = deferred * (1 + deferredReturn) + contributions;
    free = free * (1 + freeReturn) + contributions;
    rows.push({ year, taxable, deferred, free });
  }
  const paidIn = balance + contributions * years;
  return {
    afterTaxReturn,
    taxable,
    deferred,
    deferredAfterTax: deferred - bracket * Math.max(0, deferred - paidIn),
    free,
    rows,
  };
}
