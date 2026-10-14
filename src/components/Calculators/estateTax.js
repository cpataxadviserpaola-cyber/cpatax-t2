// The federal estate tax on an estate projected some years ahead, for the estate tax calculator
// (EstateTax.jsx). It works the way CalcXML's "What is my potential estate tax liability?"
// does, and agrees with it to the dollar: each kind of asset grows by its own rate once a year
// (its liability doesn't); probate and final expenses are a share of the gross estate (the
// assets before liabilities); the tax is figured on the net estate less those expenses and
// charitable contributions, at the unified rates, less the credit for the exclusion. Rates are
// fractions (0.05 for 5%).

export const estateFigures = {
  year: 2026,
  // The basic exclusion amount for 2026 (it rises with inflation in later years; like CalcXML,
  // this keeps it at this year's amount however far ahead the estate is projected). Each
  // January, update it.
  exclusion: 15000000,
  // The unified rate schedule (IRC section 2001(c)), as [amount over, tax on that amount, rate on
  // the rest].
  brackets: [
    [0, 0, 0.18],
    [10000, 1800, 0.2],
    [20000, 3800, 0.22],
    [40000, 8200, 0.24],
    [60000, 13000, 0.26],
    [80000, 18200, 0.28],
    [100000, 23800, 0.3],
    [150000, 38800, 0.32],
    [250000, 70800, 0.34],
    [500000, 155800, 0.37],
    [750000, 248300, 0.39],
    [1000000, 345800, 0.4],
  ],
};

// The tax on `amount` at the unified rates (none on nothing, or less).
export function tentativeTax(amount, { brackets } = estateFigures) {
  if (!(amount > 0)) return 0;
  const [over, base, rate] = brackets.findLast(([floor]) => amount >= floor);
  return base + (amount - over) * rate;
}

// assets: [{ value, growth, debt }] (personal, investment, business); charity, an amount;
// probate, a fraction of the gross estate; years, how far ahead to project.
export function estateTax({ assets, charity, probate, years }, figures = estateFigures) {
  const grown = assets.map(({ value, growth, debt }) => {
    const gross = value * (1 + growth) ** years;
    return { gross, net: gross - debt };
  });
  const gross = grown.reduce((sum, asset) => sum + asset.gross, 0);
  const netEstate = grown.reduce((sum, asset) => sum + asset.net, 0);
  const expenses = probate * gross;
  const taxable = netEstate - expenses - charity;
  const tentative = tentativeTax(taxable, figures);
  const credit = tentativeTax(figures.exclusion, figures);
  const tax = Math.max(0, tentative - credit);
  // What's left of the estate after charitable contributions: taxes and expenses, and the rest
  // to heirs (CalcXML's "Estate Distribution").
  const remaining = netEstate - charity;
  return {
    assets: grown.map((asset) => asset.net),
    netEstate,
    expenses,
    charity,
    taxable,
    tentative,
    credit,
    tax,
    reduction: tax > 0 ? tax / netEstate : 0,
    toTaxesAndExpenses: tax + expenses,
    toHeirs: remaining - tax - expenses,
  };
}
