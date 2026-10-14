// How much of a year's Social Security benefits is taxable, by the worksheet in IRS Publication
// 915, for the Social Security taxation calculator (SocialSecurityTax.jsx). Its income is Form
// 1040's, with a net capital loss counted only up to $3,000 ($1,500 married filing separately);
// its adjustments are a deductible IRA contribution and the deductible half of any
// self-employment tax (selfEmployment.js). Married filing separately, the base and second-tier
// amounts are $0 if you lived with your spouse at any time in the year (so up to 85% is
// taxable), and a single filer's if you lived apart all year. The amounts aren't indexed; they
// haven't changed since 1993.

import { selfEmploymentTax } from './selfEmployment.js';

export const socialSecurityFigures = {
  // Statuses: 'S', 'H', 'MJ', 'MS' (lived with your spouse at some time in the year) and 'MSA'
  // (married filing separately, lived apart all year).
  base: { S: 25000, H: 25000, MJ: 32000, MS: 0, MSA: 25000 },
  secondTier: { S: 9000, H: 9000, MJ: 12000, MS: 0, MSA: 9000 },
  capitalLossLimit: { S: 3000, H: 3000, MJ: 3000, MS: 1500, MSA: 1500 },
  taxableShare: 0.85,
};

// Amounts in dollars, the bracket as a fraction. Returns the worksheet's lines, by number.
export function taxableSocialSecurity(inputs, figures = socialSecurityFigures) {
  const { status, benefits, longTermGains, shortTermGains, selfEmployment, wages } = inputs;
  const capitalGains = Math.max(longTermGains + shortTermGains, -figures.capitalLossLimit[status]);
  const selfEmploymentDeduction =
    selfEmployment > 0
      ? selfEmploymentTax({ status: status === 'MSA' ? 'MS' : status, income: selfEmployment, wages }).deductible
      : 0;
  const line = [];
  line[1] = benefits;
  line[2] = benefits / 2;
  line[3] =
    capitalGains + inputs.dividends + inputs.interest + inputs.pension + inputs.ira + inputs.other + wages + selfEmployment;
  line[4] = inputs.taxFreeInterest;
  line[5] = line[2] + line[3] + line[4];
  line[6] = inputs.iraDeduction + selfEmploymentDeduction;
  line[7] = line[5] - line[6];
  line[8] = figures.base[status];
  line[9] = Math.max(0, line[7] - line[8]);
  line[10] = figures.secondTier[status];
  line[11] = Math.max(0, line[9] - line[10]);
  line[12] = Math.min(line[9], line[10]);
  line[13] = line[12] / 2;
  line[14] = Math.min(line[2], line[13]);
  line[15] = figures.taxableShare * line[11];
  line[16] = line[14] + line[15];
  line[17] = figures.taxableShare * line[1];
  line[18] = Math.min(line[16], line[17]);
  const taxable = line[18];
  return {
    line,
    capitalGains,
    selfEmploymentDeduction,
    taxable,
    share: benefits > 0 ? taxable / benefits : 0,
    tax: taxable * inputs.bracket,
  };
}
