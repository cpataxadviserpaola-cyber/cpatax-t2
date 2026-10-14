import { useState } from 'react';
import { axisTicks, compactDollars, dollars } from './format.js';

// The retirement plan calculators' graph: the plan's value at the end of each year, in parts
// stacked up each column, on one dollar scale. Pointing at a year, or moving through the years
// with the arrow keys once the graph has focus, shows that year's parts; the year-by-year table
// under the results has the figures behind them.
//
// title    the graph's caption
// series   its parts, in order up each column: [{ key, label }]. Each part's color is set by
//          its place in this list, in the chart's class in src/styles.css (variant).
// variant  that class: 'is-increase' (457 Plan) or 'is-accumulation' (403(b) Plan)
// rows     one per year: { year, [key]: amount }
export default function GrowthChart({ title, series: chartSeries, variant, rows }) {
  const [active, setActive] = useState(null);

  // A part under half a dollar isn't drawn, nor is a negative one.
  const columns = rows.map((row) => {
    const segments = chartSeries.flatMap((series, slot) =>
      row[series.key] >= 0.5 ? [{ ...series, slot, value: row[series.key] }] : [],
    );
    return { row, segments, total: segments.reduce((sum, segment) => sum + segment.value, 0) };
  });
  const max = Math.max(...columns.map((column) => column.total));
  if (max < 1) return <p className="chart-empty">Enter an income or a plan balance to see the graph.</p>;

  const ticks = axisTicks(max);
  const scale = ticks.at(-1);
  const height = (amount) => `${(amount / scale) * 100}%`;
  // Every year is labeled up to ten years; past that, every few (1, 4, 7, …), as on CalcXML.
  const every = Math.ceil(rows.length / 10);
  const last = rows.length - 1;
  const shown = chartSeries.filter((series) => columns.some((column) => column.segments.some((s) => s.key === series.key)));
  const current = active === null ? null : columns[active];

  const handleKeyDown = (event) => {
    const moves = { ArrowLeft: -1, ArrowRight: 1, Home: -Infinity, End: Infinity };
    if (!(event.key in moves)) return;
    event.preventDefault();
    setActive((index) => Math.min(Math.max((index ?? last) + moves[event.key], 0), last));
  };

  return (
    <figure className={`calc-chart growth-chart ${variant}`}>
      <figcaption className="chart-title">{title}</figcaption>
      <ul className="chart-legend">
        {shown.map((series) => (
          <li key={series.key}>
            <span className="chart-swatch" style={{ '--series': `var(--series-${chartSeries.indexOf(series) + 1})` }} />
            {series.label}
          </li>
        ))}
      </ul>

      <div className="growth-plot">
        <div className="growth-y" aria-hidden="true">
          {ticks.map((tick) => (
            <span key={tick} style={{ bottom: height(tick) }}>
              {compactDollars(tick)}
            </span>
          ))}
        </div>
        <div
          className={`growth-area${current ? ' has-active' : ''}`}
          style={{ '--steps': ticks.length - 1 }}
          tabIndex={0}
          role="group"
          aria-label="Plan value at the end of each year. Use the left and right arrow keys to go from year to year."
          onKeyDown={handleKeyDown}
          onFocus={() => setActive((index) => index ?? last)}
          onBlur={() => setActive(null)}
          onPointerLeave={(event) => event.pointerType !== 'touch' && setActive(null)}
        >
          {columns.map((column, index) => (
            <div
              key={column.row.year}
              className={`growth-slot${index === active ? ' is-active' : ''}`}
              onPointerEnter={() => setActive(index)}
              onPointerDown={() => setActive(index)}
            >
              <div className="growth-column" style={{ height: height(column.total) }}>
                {column.segments.map((segment) => (
                  <span
                    key={segment.key}
                    className="growth-seg"
                    style={{ flexGrow: segment.value, '--series': `var(--series-${segment.slot + 1})` }}
                  />
                ))}
              </div>
            </div>
          ))}
          {/* The year's figures, on the side away from its column. */}
          {current && (
            <div className="chart-tip growth-tip" style={active < rows.length / 2 ? { right: 0 } : { left: 0 }} aria-hidden="true">
              <strong>Year {current.row.year}</strong>
              {chartSeries.map((series, slot) => (
                <span className="growth-tip-row" key={series.key}>
                  <i style={{ '--series': `var(--series-${slot + 1})` }} />
                  {series.label}
                  <b>{dollars(current.row[series.key])}</b>
                </span>
              ))}
              <span className="growth-tip-row is-total">
                Total
                <b>{dollars(chartSeries.reduce((total, series) => total + current.row[series.key], 0))}</b>
              </span>
            </div>
          )}
        </div>
        <div className="growth-x" aria-hidden="true">
          {columns.map((column, index) => (
            <span key={column.row.year}>{index % every === 0 ? column.row.year : ''}</span>
          ))}
        </div>
        <p className="growth-x-title" aria-hidden="true">
          Year
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {current &&
          `Year ${current.row.year}: ${chartSeries
            .map((series) => `${series.label} ${dollars(current.row[series.key])}`)
            .join(', ')}.`}
      </p>
    </figure>
  );
}
