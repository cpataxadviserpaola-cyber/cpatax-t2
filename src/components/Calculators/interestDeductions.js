// What a year's interest saves in tax, by kind, for the interest calculator
// (InterestDeductions.jsx). Mortgage interest is deductible, but a home equity loan's only if it
// was used to buy, build or improve the home. Investment interest is deductible up to investment
// income: interest and dividends received and net short-term gains (a net loss counts as none,
// as on Form 4952), the rest carrying forward. Business interest is deductible. Personal interest
// isn't, except, from 2025 through 2028, up to $10,000 of interest on a loan for a new vehicle
// assembled in the U.S. Each deduction saves the interest times your tax bracket. Each January,
// update `interestFigures`.

export const interestFigures = {
  year: 2026,
  carLoan: { cap: 10000, lastYear: 2028, phaseOut: { S: 100000, MJ: 200000, per1000: 200 } },
};

// Amounts in dollars, the bracket as a fraction; homeEquityForHome and carLoanQualifies, booleans.
export function interestDeductions(inputs, figures = interestFigures) {
  const { bracket } = inputs;
  const investmentIncome = inputs.investmentIncome + Math.max(0, inputs.shortTermGains);
  const carLoan = inputs.carLoanQualifies ? Math.min(inputs.auto, figures.carLoan.cap) : 0;
  const kinds = {
    mortgage: {
      total: inputs.firstMortgage + inputs.secondMortgage + inputs.homeEquity,
      deductible: inputs.firstMortgage + inputs.secondMortgage + (inputs.homeEquityForHome ? inputs.homeEquity : 0),
    },
    investment: { total: inputs.investmentPaid, deductible: Math.min(inputs.investmentPaid, investmentIncome) },
    business: { total: inputs.business, deductible: inputs.business },
    personal: { total: inputs.creditCard + inputs.auto + inputs.otherPersonal, deductible: carLoan },
  };
  for (const kind of Object.values(kinds)) kind.savings = kind.deductible * bracket;
  const sum = (key) => Object.values(kinds).reduce((total, kind) => total + kind[key], 0);
  return {
    ...kinds,
    totals: { total: sum('total'), deductible: sum('deductible'), savings: sum('savings') },
    investmentIncome,
    carryover: inputs.investmentPaid - kinds.investment.deductible,
    homeEquityExcluded: inputs.homeEquityForHome ? 0 : inputs.homeEquity,
    carLoan,
  };
}
