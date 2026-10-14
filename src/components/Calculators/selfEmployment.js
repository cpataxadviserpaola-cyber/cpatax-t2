// Self-employment tax for 2026, for the self-employment tax calculator (SelfEmploymentTax.jsx):
// Social Security (12.4%) on 92.35% of the year's net self-employment income, up to what's left of
// the wage base after any W-2 wages; Medicare (2.9%) on all of it; and the 0.9% Additional
// Medicare Tax on it over the filing status's threshold, less any W-2 wages (Form 8959). Half of
// the Social Security and Medicare parts, not of the Additional Medicare Tax, is deductible. Under
// $400 of net earnings, in whole dollars as the return has them, none is due. The rates and limits
// are the tax freedom day calculator's (freedom.js) and the refund estimator's (refund.js).

import { freedomFigures } from './freedom.js';
import { refundFigures } from './refund.js';

// status: 'S', 'H', 'MS' or 'MJ'; income, the net profit from self-employment; wages, from an
// employer. Each tax's earnings are set out as CalcXML's table has them: the 'adjusted' earnings,
// less the adjustment, are the taxable earnings. For Social Security, the adjusted earnings are
// what's left of the wage base when the net earnings reach it, with no adjustment.
export function selfEmploymentTax({ status, income, wages }, figures = freedomFigures, refund = refundFigures) {
  const { socialSecurity, medicare, selfEmployment } = figures;
  const { additionalMedicare } = refund;
  const gross = Math.max(0, income);
  const earnings = gross * selfEmployment.share;
  const due = Math.round(earnings) >= selfEmployment.minimum;
  const room = Math.max(0, socialSecurity.wageBase - Math.max(0, wages));
  const socialSecurityAdjusted = earnings > room ? room : gross;
  const socialSecurityBase = Math.min(earnings, room);
  const additionalBase = Math.max(0, earnings - Math.max(0, additionalMedicare.threshold[status] - Math.max(0, wages)));
  const socialSecurityTax = due ? 2 * socialSecurity.rate * socialSecurityBase : 0;
  const medicareTax = due ? 2 * medicare * earnings : 0;
  const additionalTax = due ? additionalMedicare.rate * additionalBase : 0;
  return {
    socialSecurity: {
      adjusted: socialSecurityAdjusted,
      adjustment: socialSecurityAdjusted - socialSecurityBase,
      taxable: socialSecurityBase,
      tax: socialSecurityTax,
    },
    medicare: {
      adjusted: gross,
      adjustment: gross - earnings,
      taxable: earnings,
      tax: medicareTax + additionalTax,
      additional: additionalTax,
    },
    total: socialSecurityTax + medicareTax + additionalTax,
    deductible: (socialSecurityTax + medicareTax) / 2,
  };
}
