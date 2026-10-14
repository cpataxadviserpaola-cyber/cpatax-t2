// Year-by-year growth of a retirement plan, for the 457 Plan, 403(b) and 401(k) calculators
// (PlanContributionIncrease.jsx, PlanValue.jsx). It works the way CalcXML's "What is the impact
// of increasing my 457 Plan contribution?", "What may my 403(b) Plan be worth?" and "What may
// my 401(k) be worth?" do, and agrees with them to the dollar: the salary rises once a year;
// your contributions stop at the year's limit; the employer matches its percentage of what you
// put in, within its maximum percentage of your salary (see matchRules); each year's
// contributions are paid in equal parts at the start of every pay period; and the balance,
// including what's already in the plan, grows at the plan's return compounded every pay
// period. Rates are fractions (0.05 for 5%).

// The most you can contribute in a year, as CalcXML has it: the 2026 limit for 401(k), 403(b)
// and 457 plans ($24,500) plus the catch-up for ages 60 to 63 ($11,250). Each January, update it.
export const contributionLimit = { year: 2026, base: 24500, catchUp: 11250, total: 35750 };

// The most salary a 401(k) or 403(b) plan counts in 2026 (contributions and the match are
// figured on no more than this). As CalcXML does, it limits this year's salary, and the
// raises after build on that (the IRS raises the limit most years too). CalcXML's 457
// calculator uses it too, so all of these calculators do. Each January, update it.
export const compensationLimit = 360000;

// How the maximum employer match limits the match; CalcXML's calculators read it two ways.
// matchedPay (the three contribution calculators, and the 403(b) plan value one): the employer
// matches your contributions on up to that share of your salary, so with a 50% match up to 6%,
// it adds at most 3% of salary. employerShare (the 401(k) and 457 Plan value calculators): the
// employer's own contribution is at most that share of your salary, so with a 50% match up to
// 6%, it adds at most 6%. Both give the same match on contributions within the maximum when the
// match is 100% or less.
export const matchRules = {
  matchedPay: {
    employer: ({ match, maxMatch }, yours, salary) => match * Math.min(yours, maxMatch * salary),
    most: ({ match, maxMatch }, salary) => match * Math.min(maxMatch * salary, contributionLimit.total),
  },
  employerShare: {
    employer: ({ match, maxMatch }, yours, salary) => Math.min(match * yours, maxMatch * salary),
    most: ({ match, maxMatch }, salary) => Math.min(match * contributionLimit.total, maxMatch * salary),
  },
};

// The plan year by year at one contribution rate, starting from `balance`. `payLimit` is the
// most of this year's salary the plan counts; `rule`, one of matchRules.
function planGrowth(inputs, contribution, payLimit = Infinity, rule = matchRules.matchedPay) {
  const { years, income, raises, balance, planReturn, periods } = inputs;
  const rate = planReturn / periods;
  const growth = (1 + rate) ** periods;
  // What a year's dollar, paid in equal parts at the start of every pay period, is worth at
  // the year's end.
  const perDollar = rate === 0 ? 1 : (((growth - 1) / rate) * (1 + rate)) / periods;

  let end = balance;
  const rows = [];
  for (let year = 1; year <= years; year += 1) {
    const salary = Math.min(income, payLimit) * (1 + raises) ** (year - 1);
    const yours = Math.min(contribution * salary, contributionLimit.total);
    const employer = rule.employer(inputs, yours, salary);
    const begin = end;
    end = begin * growth + (yours + employer) * perDollar;
    rows.push({
      year,
      salary,
      yours,
      employer,
      capped: contribution * salary > contributionLimit.total,
      begin,
      interest: end - begin - yours - employer,
      end,
    });
  }
  return rows;
}

const sum = (rows, key) => rows.reduce((total, row) => total + row[key], 0);

// The 457 Plan, 403(b) and 401(k) contribution calculators: the plan at the current
// contribution rate and at the proposed one. `current` and `proposed` are your contribution
// rates; `payLimit` is the most of this year's salary the plan counts. What's already in the
// plan is followed on its own, so each year's contributions and interest at the current rate,
// and what the higher rate adds to them, don't include it.
export function contributionIncrease(inputs, payLimit = compensationLimit) {
  const existing = planGrowth({ ...inputs, income: 0 }, 0);
  const now = planGrowth({ ...inputs, balance: 0 }, inputs.current, payLimit);
  const proposed = planGrowth({ ...inputs, balance: 0 }, inputs.proposed, payLimit);

  const rows = now.map((row, index) => {
    const higher = proposed[index];
    return {
      year: row.year,
      yours: row.yours,
      employer: row.employer,
      interest: row.interest,
      extraYours: higher.yours - row.yours,
      extraEmployer: higher.employer - row.employer,
      extraInterest: higher.interest - row.interest,
      grandTotal: higher.end,
      existing: existing[index].end,
      currentBalance: row.end,
      addedBalance: higher.end - row.end,
    };
  });

  const last = rows.at(-1);
  return {
    rows,
    current: { yours: sum(now, 'yours'), employer: sum(now, 'employer'), total: last.existing + last.currentBalance },
    proposed: {
      yours: sum(proposed, 'yours'),
      employer: sum(proposed, 'employer'),
      total: last.existing + last.grandTotal,
    },
    increase: last.addedBalance,
    cost: sum(proposed, 'yours') - sum(now, 'yours'),
    // The current contribution already reaches the year's limit in the first year, so a higher
    // one adds nothing (CalcXML says so instead of giving the increase).
    atLimit: now[0].yours >= contributionLimit.total - 0.005,
  };
}

// The 403(b) and 401(k) calculators: the plan at your contribution rate (`current`), on salary
// up to the compensation limit, with the plan's match rule (matchRules). Each row also keeps
// the running totals the graph stacks: the starting balance, your contributions, the
// employer's, and the interest they've all earned.
export function planValue(inputs, rule = matchRules.matchedPay) {
  let yours = 0;
  let employer = 0;
  const rows = planGrowth(inputs, inputs.current, compensationLimit, rule).map((row) => {
    yours += row.yours;
    employer += row.employer;
    return {
      ...row,
      startingBalance: inputs.balance,
      yoursSoFar: yours,
      employerSoFar: employer,
      interestSoFar: row.end - inputs.balance - yours - employer,
    };
  });
  const first = rows[0];
  return {
    rows,
    firstYear: {
      yours: first.yours,
      employer: first.employer,
      // The most the employer would put in, by the plan's match rule.
      maxEmployer: rule.most(inputs, first.salary),
    },
    yours,
    employer,
    total: rows.at(-1).end,
    capped: rows.some((row) => row.capped),
  };
}
