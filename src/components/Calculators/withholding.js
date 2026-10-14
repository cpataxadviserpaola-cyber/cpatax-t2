// Payroll withholding on a paycheck and on a bonus, for the bonus calculator
// (BonusNetAfterTaxes.jsx). It works the way CalcXML's "How much will my company bonus net
// after taxes?" does: federal income tax by the IRS percentage method for a Form W-4 from 2019
// or earlier (marital status and allowances), and the bonus withheld by the aggregate method
// (tax on paycheck + bonus, less the tax on the paycheck alone).
//
// CalcXML's version still uses 2021 figures; this one uses 2026's. It also fixes CalcXML's
// Social Security where pre-tax deductions or the wage base come in (the bonus's ignored both,
// and the paycheck's took pre-tax deductions off after the wage base), and adds the Additional
// Medicare Tax and the 37% rate on bonuses over $1 million, which it leaves out. Otherwise the
// two agree to the dollar when given the same year's figures. Each January, replace `figures`
// with the new year's.

export const figures = {
  year: 2026,
  // IRS Publication 15-T (2026), Worksheet 1A: each allowance on a 2019-or-earlier Form W-4.
  allowance: 4300,
  // Pub. 15-T (2026), annual STANDARD withholding rate schedules, as
  // [wages over, tax on that amount, rate on the rest]. Married uses the Married Filing
  // Jointly column; Single, the Single or Married Filing Separately one.
  brackets: {
    M: [
      [0, 0, 0],
      [19300, 0, 0.1],
      [44100, 2480, 0.12],
      [120100, 11600, 0.22],
      [230700, 35932, 0.24],
      [422850, 82048, 0.32],
      [531750, 116896, 0.35],
      [788000, 206583.5, 0.37],
    ],
    S: [
      [0, 0, 0],
      [7500, 0, 0.1],
      [19900, 1240, 0.12],
      [57900, 5800, 0.22],
      [113200, 17966, 0.24],
      [209275, 41024, 0.32],
      [263725, 58448, 0.35],
      [648100, 192979.25, 0.37],
    ],
  },
  // Pub. 15 (2026): Social Security on wages up to the wage base, Medicare on all wages, and
  // the Additional Medicare Tax on wages over $200,000.
  socialSecurity: { rate: 0.062, wageBase: 184500 },
  medicare: { rate: 0.0145, additionalRate: 0.009, additionalOver: 200000 },
  // Supplemental wages over $1 million in a year are withheld at 37%.
  supplementalOverMillion: { threshold: 1000000, rate: 0.37 },
};

// Federal income tax to withhold for a year's wages.
function annualIncomeTax(wages, status, allowances, { allowance, brackets }) {
  const adjusted = Math.max(0, wages - allowances * allowance);
  const [over, base, rate] = brackets[status].findLast(([floor]) => adjusted >= floor);
  return base + (adjusted - over) * rate;
}

// Deductions and take-home pay for one paycheck, as in CalcXML's bonus and payroll adjustment
// calculators. Amounts are per pay period; `retirementRate` is a fraction (0.05 for 5%).
// Pre-tax deductions (cafeteria plan items) come off before income tax and FICA;
// 401(k)/403(b)/457 deferrals only before income tax. Social Security and Medicare look at
// the year's pay (the paycheck times the pay periods), so a paycheck over the wage base pays
// Social Security on its share of it. Also gives the paycheck's wages for income tax and the
// year's wages for FICA, which the bonus builds on.
export function paycheck(
  { periods, pay, status, allowances, preTax, retirementRate, postTax, reimbursements },
  year = figures,
) {
  const { socialSecurity, medicare } = year;
  const retirement = pay * retirementRate;
  const incomeTaxWages = Math.max(0, pay - preTax - retirement);
  const federal = annualIncomeTax(incomeTaxWages * periods, status, allowances, year) / periods;
  const ficaWages = Math.max(0, pay - preTax) * periods;
  const socialSecurityTax = (Math.min(ficaWages, socialSecurity.wageBase) * socialSecurity.rate) / periods;
  const medicareTax =
    (ficaWages * medicare.rate + Math.max(0, ficaWages - medicare.additionalOver) * medicare.additionalRate) / periods;
  const deductions = federal + preTax + socialSecurityTax + medicareTax + retirement + postTax - reimbursements;
  return {
    gross: pay,
    federal,
    preTax,
    socialSecurity: socialSecurityTax,
    medicare: medicareTax,
    retirement,
    postTax,
    reimbursements,
    deductions,
    takeHome: pay - deductions,
    incomeTaxWages,
    ficaWages,
  };
}

// Deductions and take-home pay for the next paycheck and for the bonus, which is paid with it.
// The bonus pays Social Security on whatever room is left under the wage base after the year's
// pay.
export function bonusNetAfterTaxes(inputs, year = figures) {
  const { bonus, periods, status, allowances, retirementRate } = inputs;
  const { socialSecurity, medicare, supplementalOverMillion } = year;
  const pay = paycheck(inputs, year);
  const { ficaWages } = pay;

  // Withheld by the aggregate method up to $1 million, and at 37% past it.
  const retirement = bonus * retirementRate;
  const wages = bonus - retirement;
  const aggregated = Math.min(wages, supplementalOverMillion.threshold);
  const federal =
    annualIncomeTax((pay.incomeTaxWages + aggregated) * periods, status, allowances, year) / periods -
    pay.federal +
    (wages - aggregated) * supplementalOverMillion.rate;
  const socialSecurityTax =
    (Math.min(ficaWages + bonus, socialSecurity.wageBase) - Math.min(ficaWages, socialSecurity.wageBase)) *
    socialSecurity.rate;
  const medicareTax =
    bonus * medicare.rate +
    (Math.max(0, ficaWages + bonus - medicare.additionalOver) - Math.max(0, ficaWages - medicare.additionalOver)) *
      medicare.additionalRate;
  const deductions = federal + socialSecurityTax + medicareTax + retirement;

  return {
    pay,
    bonus: {
      gross: bonus,
      federal,
      socialSecurity: socialSecurityTax,
      medicare: medicareTax,
      retirement,
      deductions,
      takeHome: bonus - deductions,
    },
  };
}
