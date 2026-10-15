// Help that CalcXML shows as a chart beside a rate field, rebuilt as a small list of bars with
// their values: recent inflation (beside salary increases) and long-run returns (beside rates
// of return); and the tax brackets it shows as a table (beside a tax bracket). Figures and
// sources as on CalcXML's.

function HelpBars({ title, rows, note, source, stacked = false }) {
  const max = Math.max(...rows.map(([, value]) => value));
  return (
    <figure className={`help-bars${stacked ? ' is-stacked' : ''}`}>
      <figcaption>{title}</figcaption>
      <ul>
        {rows.map(([label, value]) => (
          <li key={label}>
            <span className="help-bars-label">{label}</span>
            <span className="help-bars-bar" style={{ '--share': value / max }} aria-hidden="true" />
            <strong>{value.toFixed(1)}%</strong>
          </li>
        ))}
      </ul>
      {note && <p>{note}</p>}
      <p>Source: {source}</p>
    </figure>
  );
}

export const inflationHelp = (
  <HelpBars
    title="10-Year U.S. Inflation: Average 2.9%"
    rows={[
      ['2016', 1.3],
      ['2017', 2.1],
      ['2018', 2.4],
      ['2019', 1.8],
      ['2020', 1.2],
      ['2021', 4.7],
      ['2022', 8.0],
      ['2023', 4.1],
      ['2024', 2.9],
      ['2025', 2.6],
    ]}
    source="U.S. Department of Labor"
  />
);

export const returnsHelp = (
  <HelpBars
    title="Historic Rates of Return: 1926-2025"
    rows={[
      ['Inflation', 2.9],
      ['U.S. Treasury Bills', 3.3],
      ['Long-Term Government Bonds', 5.0],
      ['U.S. Large-Company Stocks', 10.5],
      ['U.S. Small-Company Stocks', 11.8],
    ]}
    note="Past Performance Is No Guarantee Of Future Results"
    source="Ibbotson SBBI 1926-2025"
    stacked
  />
);
// 2026 federal income tax brackets, by filing status, as on CalcXML's table, but with the rate
// first rather than last, so it stays in view when the table scrolls sideways.
const brackets = [
  ['$0-$12,400', '$0-$17,700', '$0-$24,800', '$0-$12,400', '10%'],
  ['$12,401-$50,400', '$17,701-$67,450', '$24,801-$100,800', '$12,401-$50,400', '12%'],
  ['$50,401-$105,700', '$67,451-$105,700', '$100,801-$211,400', '$50,401-$105,700', '22%'],
  ['$105,701-$201,775', '$105,701-$201,750', '$211,401-$403,550', '$105,701-$201,775', '24%'],
  ['$201,776-$256,225', '$201,751-$256,200', '$403,551-$512,450', '$201,776-$256,225', '32%'],
  ['$256,226-$640,600', '$256,201-$640,600', '$512,451-$768,700', '$256,226-$384,350', '35%'],
  ['$640,601+', '$640,601+', '$768,701+', '$384,351+', '37%'],
];

export const taxBracketsHelp = (
  <figure className="help-table">
    <figcaption>2026 Federal Taxable Income Brackets and Rates (for returns due in April 2027)</figcaption>
    <div className="help-table-scroll">
      <table>
        <thead>
          <tr>
            {['Federal Tax Rate', 'Single', 'Head of Household', 'Married Filing Jointly', 'Married Filing Separately'].map(
              (heading) => (
                <th scope="col" key={heading}>
                  {heading}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {brackets.map((row) => (
            <tr key={row[4]}>
              <th scope="row">{row[4]}</th>
              {row.slice(0, 4).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>Source: Internal Revenue Service</p>
  </figure>
);
