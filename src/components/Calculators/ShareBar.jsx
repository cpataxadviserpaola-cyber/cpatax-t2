import { dollars } from './format.js';

// A whole split into a few parts, as one bar, with each part's share and amount written beside
// its color: the estate tax calculator's estate distribution (the two slices of CalcXML's pie).
// Each share is rounded to a whole percent on its own, as CalcXML does. Every value is written
// out, so there's no axis or tip to read.
//
// title  the graph's caption
// parts  [{ label, value }], none below zero, together more than zero; otherwise `empty` is shown
// empty  what's shown instead of the graph
export default function ShareBar({ title, parts, empty }) {
  const total = parts.reduce((sum, part) => sum + part.value, 0);
  if (!(total > 0) || parts.some((part) => part.value < 0)) return <p className="chart-empty">{empty}</p>;

  const shares = parts.map((part) => ({ ...part, share: Math.round((part.value / total) * 100) }));
  return (
    <figure className="calc-chart share-chart">
      <figcaption className="chart-title">{title}</figcaption>
      <div className="share-bar" aria-hidden="true">
        {shares.map((part, index) =>
          part.value > 0 ? (
            <span key={part.label} style={{ flexGrow: part.value, '--series': `var(--series-${index + 1})` }} />
          ) : null,
        )}
      </div>
      <ul className="share-legend">
        {shares.map((part, index) => (
          <li key={part.label}>
            <span className="chart-swatch" style={{ '--series': `var(--series-${index + 1})` }} />
            <span className="share-label">{part.label}</span>
            <strong>{part.share}%</strong>
            <span className="share-amount">{dollars(part.value)}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
