import { dollars } from './format.js';

// A graph comparing a few alternatives, such as the stock option exercise calculator's or the
// itemized and standard deductions: a bar for each, from a zero line (to the left for a loss),
// with its name and amount written beside it, and the best one picked out in color and named.
// Every amount is written out, so there's no axis or tip to read.
//
// title   the graph's caption
// rows    [{ label, value, best }]; none best, when they're equal
// badge   what the best one is called beside its name (none: it's only picked out in color)
// format  (value) => the value as written (whole dollars unless given)
// empty   what's shown instead of the graph when every value is zero
export default function AlternativesChart({ title, rows, badge = 'Best alternative', format = dollars, empty }) {
  const values = rows.map((row) => row.value);
  const low = Math.min(0, ...values);
  const high = Math.max(0, ...values);
  if (!(high > low)) return <p className="chart-empty">{empty}</p>;

  const share = (amount) => (amount / (high - low)) * 100;
  const zero = share(-low);

  return (
    <figure className="calc-chart alternatives-chart">
      <figcaption className="chart-title">{title}</figcaption>
      <ul className="alt-rows" style={{ '--zero': `${zero}%` }}>
        {rows.map((row) => (
          <li key={row.label} className={row.best ? 'is-best' : undefined}>
            <p className="alt-head">
              <span className="alt-label">
                {row.label}
                {row.best && badge && <span className="alt-badge">{badge}</span>}
              </span>
              <strong>{format(row.value)}</strong>
            </p>
            <div className="alt-track" aria-hidden="true">
              <span
                className={`alt-bar${row.value < 0 ? ' is-loss' : ''}`}
                style={{
                  left: `${row.value < 0 ? zero - share(-row.value) : zero}%`,
                  width: `${share(Math.abs(row.value))}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}
