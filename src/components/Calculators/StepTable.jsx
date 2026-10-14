import { dollars } from './format.js';

// A results table in CalcXML's step-by-step layout (the estate tax and the tax calculators'): each
// line's label, the sign of what it does to the lines before (+, −, =), and its amount; totals in
// bold.
//
// title  the table's heading, over the labels
// rows   [{ label, sign ('+', '-', '=' or none), value (an amount, or text as shown), total }]
const signs = { '+': 'plus', '-': 'minus', '=': 'equals' };

export default function StepTable({ title, rows }) {
  return (
    <div className="article-table calc-table estate-table">
      <table>
        <thead>
          <tr>
            <th scope="col">{title}</th>
            <th scope="col">
              <span className="sr-only">Step</span>
            </th>
            <th scope="col" className="is-amount">
              <span className="sr-only">Amount</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, sign, value, total }) => (
            <tr key={label} className={total ? 'is-total' : undefined}>
              <td>{label}</td>
              <td className="estate-sign">
                {sign && <span aria-label={signs[sign]}>{sign === '-' ? '−' : sign}</span>}
              </td>
              <td className="is-amount">{typeof value === 'number' ? dollars(value) : value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
