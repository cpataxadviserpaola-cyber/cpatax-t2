// A results table in CalcXML's layout for paychecks: a label and a value per column, under
// group headings, the last row (take-home pay) set in bold.
//
// head  the column headings, the first over the labels
// rows  [{ label, values }] or [{ group }]; a row before the first group isn't set in
export default function SummaryTable({ head, rows }) {
  return (
    <div className="article-table calc-table">
      <table>
        <thead>
          <tr>
            {head.map((heading, index) => (
              <th scope="col" className={index ? 'is-amount' : undefined} key={heading}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Some labels repeat (Miscellaneous), so rows are keyed by position. */}
          {rows.map((row, index) =>
            row.group ? (
              <tr className="is-group" key={index}>
                <td colSpan={head.length}>{row.group}</td>
              </tr>
            ) : (
              <tr className={`${index ? 'is-item' : ''}${index === rows.length - 1 ? ' is-total' : ''}`} key={index}>
                <td>{row.label}</td>
                {row.values.map((value, column) => (
                  <td className="is-amount" key={column}>
                    {value}
                  </td>
                ))}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
