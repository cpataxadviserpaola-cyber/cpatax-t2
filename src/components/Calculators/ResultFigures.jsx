// The amounts in a calculator's results sentence, set out on their own, side by side.
// figures: [[label, amount as shown]]
export default function ResultFigures({ figures }) {
  return (
    <dl className="calc-figures">
      {figures.map(([label, amount]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{amount}</dd>
        </div>
      ))}
    </dl>
  );
}
