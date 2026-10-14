// Number formats and chart scales shared by the calculators.

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// Whole dollars: $1,234 or -$56 (and $0, never -$0).
export const dollars = (amount) => usd.format(Math.round(amount) + 0);

// A whole number with commas: 1,234.
export const number = (amount) => (Math.round(amount) + 0).toLocaleString('en-US');

// A rate as a percentage: percent(0.05) is "5%"; percent(0.05, 1) is "5.0%".
export const percent = (rate, digits) =>
  digits === undefined ? `${+(rate * 100).toFixed(2)}%` : `${(rate * 100).toFixed(digits)}%`;

// Axis labels: $0, $500, $2.5K, $1M, $40B.
export function compactDollars(amount) {
  if (amount >= 1e9) return `$${+(amount / 1e9).toFixed(2)}B`;
  if (amount >= 1e6) return `$${+(amount / 1e6).toFixed(2)}M`;
  if (amount >= 1e3) return `$${+(amount / 1e3).toFixed(1)}K`;
  return `$${amount}`;
}

// Round amounts from 0 up to at least `max`, in at most five steps.
export function axisTicks(max) {
  const magnitude = 10 ** Math.floor(Math.log10(max));
  const step = [0.1, 0.2, 0.25, 0.5, 1, 2, 2.5, 5, 10]
    .map((multiple) => multiple * magnitude)
    .find((size) => max / size <= 5);
  return Array.from({ length: Math.ceil(max / step) + 1 }, (_, index) => index * step);
}

// A whole number, an exact half going to the even one, as some of CalcXML's tables round:
// 3,595.5 is 3,596 but 9,562.5 is 9,562, so an amount and what's left of it still add up.
export function roundHalfEven(amount) {
  const whole = Math.floor(amount);
  if (amount - whole !== 0.5) return Math.round(amount);
  return whole % 2 === 0 ? whole : whole + 1;
}

// A rate as a percentage to `digits` decimals, an exact half going to the even one, as some of
// CalcXML's tables round: 0.0725 is "7.2%" and 0.325 with no decimals "32%".
export function percentHalfEven(rate, digits = 0) {
  const scaled = Number((rate * 100 * 10 ** digits).toFixed(6));
  return `${(roundHalfEven(scaled) / 10 ** digits).toFixed(digits)}%`;
}
