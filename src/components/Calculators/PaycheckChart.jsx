import { useRef, useState } from 'react';
import { axisTicks, compactDollars, dollars } from './format.js';

// A graph of side-by-side bars, each split into parts, on one dollar scale: the paycheck
// calculators' (a bar for each paycheck: the paycheck and the bonus, or the current and
// what-if paychecks, split into where the money goes) and the stock option calculator's (a bar
// for each return, split into the strike price and the gain). The table with it has every
// value, so the details shown on hover or keyboard focus only add to it.

// The paycheck calculators' parts. Each part's color is set in .paycheck-chart
// (src/styles.css), or the chart's variant class, by its place in its list, which is also the
// order along each bar.
const paycheckSeries = [
  { key: 'takeHome', label: 'Take-home' },
  { key: 'taxes', label: 'Taxes' },
  { key: 'fica', label: 'FICA' },
  { key: 'retirement', label: '401(k)/403(b)/457' },
  { key: 'preTax', label: 'Pre-tax' },
  { key: 'afterTax', label: 'After-tax' },
];

const paycheckSummary = (bar) => (
  <>
    Take-home <strong>{dollars(bar.takeHome)}</strong> of {dollars(bar.gross)}
  </>
);

// title    the graph's caption
// rows     one per bar: { label, values: { [series key]: amount } }, plus what summary uses
//          (for the paycheck parts, gross and takeHome)
// series   the parts, in order along each bar: [{ key, label }] (the paycheck parts unless given)
// summary  (row) => the figures shown beside the bar's label (take-home of gross unless given)
// variant  a class with the parts' colors, when they aren't the paycheck ones
// empty    what's shown instead of the graph when there's nothing to draw
export default function PaycheckChart({
  title,
  rows,
  series: chartSeries = paycheckSeries,
  summary = paycheckSummary,
  variant,
  empty = 'Enter a bonus or a paycheck amount to see the graph.',
}) {
  const plotRef = useRef(null);
  const [tip, setTip] = useState(null);

  // A part under half a dollar isn't drawn, nor is a negative one (reimbursements larger than
  // the after-tax deductions); the table shows them.
  const bars = rows.map((row) => {
    let total = 0;
    const segments = chartSeries.flatMap((series, slot) => {
      const value = row.values[series.key];
      if (!(value >= 0.5)) return [];
      const segment = { ...series, slot, start: total, value };
      total += value;
      return [segment];
    });
    return { ...row, segments, total };
  });
  const max = Math.max(...bars.map((bar) => bar.total));
  if (max < 1) {
    return <p className="chart-empty">{empty}</p>;
  }

  const ticks = axisTicks(max);
  const scale = ticks.at(-1);
  const percent = (amount) => `${(amount / scale) * 100}%`;
  const shown = chartSeries.filter((series) => bars.some((bar) => bar.segments.some((s) => s.key === series.key)));

  // The tip sits over the part, kept inside the plot.
  function showTip(event, bar, segment) {
    const plot = plotRef.current.getBoundingClientRect();
    const mark = event.currentTarget.getBoundingClientRect();
    const half = Math.min(90, plot.width / 2);
    const center = mark.left + mark.width / 2 - plot.left;
    setTip({
      x: Math.min(Math.max(center, half), plot.width - half),
      y: mark.top - plot.top,
      value: dollars(segment.value),
      label: `${segment.label}, ${bar.label.toLowerCase()}`,
    });
  }
  const hideTip = () => setTip(null);

  return (
    <figure className={`calc-chart paycheck-chart${variant ? ` ${variant}` : ''}`}>
      <figcaption className="chart-title">{title}</figcaption>
      <ul className="chart-legend">
        {shown.map((series) => (
          <li key={series.key}>
            <span className="chart-swatch" style={{ '--series': `var(--series-${chartSeries.indexOf(series) + 1})` }} />
            {series.label}
          </li>
        ))}
      </ul>

      <div className="paycheck-plot" ref={plotRef}>
        {bars.map((bar) => (
          <div className="paycheck-row" key={bar.label}>
            <p className="paycheck-row-head">
              <span className="paycheck-row-label">{bar.label}</span>
              <span>{summary(bar)}</span>
            </p>
            <div className="paycheck-track" style={{ '--steps': ticks.length - 1 }}>
              {bar.segments.map((segment) => (
                <span
                  key={segment.key}
                  className="paycheck-seg"
                  role="img"
                  tabIndex={0}
                  aria-label={`${bar.label}, ${segment.label}: ${dollars(segment.value)}`}
                  style={{
                    left: percent(segment.start),
                    width: percent(segment.value),
                    '--series': `var(--series-${segment.slot + 1})`,
                  }}
                  onPointerEnter={(event) => showTip(event, bar, segment)}
                  onPointerLeave={(event) => event.pointerType !== 'touch' && hideTip()}
                  onFocus={(event) => showTip(event, bar, segment)}
                  onBlur={hideTip}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="paycheck-axis" aria-hidden="true">
          {ticks.map((tick) => (
            <span key={tick} style={{ left: percent(tick) }}>
              {compactDollars(tick)}
            </span>
          ))}
        </div>
        {tip && (
          <div className="chart-tip" style={{ left: tip.x, top: tip.y }} aria-hidden="true">
            <strong>{tip.value}</strong>
            <span>{tip.label}</span>
          </div>
        )}
      </div>
    </figure>
  );
}
