// Itemized deductions against the standard deduction, for the itemize-or-standard calculator
// (ItemizeOrStandard.jsx), under the 2026 rules. It follows CalcXML's "Should I itemize or take
// the standard deduction?" and its figures (the 2026 standard deduction and the additional
// amounts for age and blindness; the $6,000 deduction for seniors on either side; medical
// expenses over 7.5% of AGI; the SALT cap; investment interest up to investment income;
// charitable gifts up to 60% of AGI), with the 2026 rules CalcXML gets wrong or leaves out:
// the senior deduction shrinks by 6% (not all) of income over its threshold, for each senior,
// isn't allowed to married people filing separately, and isn't given for blindness alone; the
// additional amount for blindness or age is the married one when filing separately; the SALT
// cap shrinks for high incomes;
// other deductible taxes count, outside the cap; itemizers deduct only gifts over 0.5% of AGI;
// and those who don't itemize may deduct cash gifts up to $1,000 ($2,000 on a joint return).
// Each January, update `deductionFigures`.

// Filing statuses, as the form gives them.
export const statuses = { single: 'S', joint: 'MFJ', separate: 'MFS', head: 'HOH' };

export const deductionFigures = {
  year: 2026,
  standard: { S: 16100, MFJ: 32200, MFS: 16100, HOH: 24150 },
  // For each filer who is blind and each who is 65 or older.
  additional: { S: 2050, MFJ: 1650, MFS: 1650, HOH: 2050 },
  // The deduction for seniors (2025 to 2028): $6,000 for each, less 6% of AGI over the
  // threshold, each; not for married people filing separately.
  senior: { amount: 6000, rate: 0.06, threshold: { S: 75000, MFJ: 150000, HOH: 75000 } },
  // State and local taxes: the cap, less 30% of AGI over the threshold, but not below the floor.
  salt: {
    cap: { S: 40400, MFJ: 40400, MFS: 20200, HOH: 40400 },
    threshold: { S: 505000, MFJ: 505000, MFS: 252500, HOH: 505000 },
    rate: 0.3,
    floor: { S: 10000, MFJ: 10000, MFS: 5000, HOH: 10000 },
  },
  medicalFloor: 0.075,
  // Itemizers deduct gifts over 0.5% of AGI, up to 60% of AGI.
  charity: { floor: 0.005, limit: 0.6, withoutItemizing: { S: 1000, MFJ: 2000, MFS: 1000, HOH: 1000 } },
};

// inputs: agi; status (statuses); blind and seniors, the filers who are; and the amounts
// entered.
export function compareDeductions(inputs, figures = deductionFigures) {
  const { agi, status, blind, seniors } = inputs;
  const { senior, salt, charity } = figures;

  const seniorCount = status === 'MFS' ? 0 : Math.min(seniors, status === 'MFJ' ? 2 : 1);
  const seniorEach = Math.max(0, senior.amount - senior.rate * Math.max(0, agi - (senior.threshold[status] ?? 0)));
  const seniorDeduction = seniorCount * seniorEach;

  const medical = Math.max(0, inputs.medical + inputs.dental - figures.medicalFloor * agi);
  const saltCap = Math.max(salt.floor[status], salt.cap[status] - salt.rate * Math.max(0, agi - salt.threshold[status]));
  const stateAndLocal = Math.min(inputs.stateTaxes + inputs.realEstateTaxes + inputs.propertyTaxes, saltCap);
  const taxes = stateAndLocal + inputs.otherTaxes;
  const interest = inputs.mortgageInterest + Math.min(inputs.interestPaid, inputs.interestReceived);
  const gifts = inputs.charityCash + inputs.charityInKind + inputs.charityCarryOver;
  const charitable = Math.min(Math.max(0, gifts - charity.floor * agi), charity.limit * agi);

  const standard = figures.standard[status] + figures.additional[status] * (blind + seniors) + seniorDeduction;
  const charityWithoutItemizing = Math.min(inputs.charityCash, charity.withoutItemizing[status]);
  const itemized = seniorDeduction + medical + taxes + interest + charitable;

  return {
    seniorDeduction,
    medical,
    taxes,
    saltCap,
    interest,
    charitable,
    itemized,
    standard,
    charityWithoutItemizing,
    withoutItemizing: standard + charityWithoutItemizing,
  };
}
