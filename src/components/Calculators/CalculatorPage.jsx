import { useEffect, useRef, useState } from 'react';
import Icon from '../Icon.jsx';
import PageHero from '../PageHero.jsx';
import CtaSection from '../CtaSection.jsx';
import useStickyFit from '../../hooks/useStickyFit.js';
import { number } from './format.js';

// Shared page for the calculators rebuilt from CalcXML: the banner with the calculator's
// introduction, its form beside the results in two equal columns, a note on how the results
// are figured, CalcXML's disclaimer, and the closing call to action. Each calculator gives its
// fields, its calculation and how to show the results.

// The disclaimer under every CalcXML calculator, word for word.
const disclaimer =
  'This information may help you analyze your financial needs. It is based on information and assumptions provided by you regarding your goals, expectations and financial situation. The calculations do not infer that the company assumes any fiduciary duties. The calculations provided should not be construed as financial, legal or tax advice. In addition, such information should not be relied upon as the only source of information. This information is supplied from sources we believe to be reliable but we cannot guarantee its accuracy. Hypothetical illustrations may provide historical or current performance information. Past performance does not guarantee nor indicate future results.';

// The kinds of number field: the unit shown in the box, what an entry must be, and how it's
// written back once filled in. A percentage reaches the calculation as a fraction (5 as 0.05).
const kinds = {
  money: {
    prefix: '$',
    describe: (min, max) => `an amount from ${number(min)} to ${number(max)}`,
    // Commas added, decimals kept as typed (CalcXML figures with them all: $12.345 an hour).
    format: (amount) => amount.toLocaleString('en-US', { maximumFractionDigits: 10 }),
  },
  count: {
    whole: true,
    describe: (min, max) => `a whole number from ${number(min)} to ${number(max)}`,
    format: (amount) => amount.toLocaleString('en-US'),
  },
  percent: { suffix: '%', describe: (min, max) => `a percentage from ${min}% to ${max}%`, format: String },
};

// The number in a field (left empty, 0), or NaN when it isn't one the field takes.
function parseField(field, text) {
  const cleaned = text.replace(/[$,%\s]/g, '');
  const amount = cleaned === '' ? 0 : /^-?(\d+\.?\d*|\.\d+)$/.test(cleaned) ? Number(cleaned) : NaN;
  const { min = 0, max } = field;
  return amount >= min && amount <= max && (!kinds[field.kind].whole || Number.isInteger(amount)) ? amount : NaN;
}

const rangeError = (field) => `Enter ${kinds[field.kind].describe(field.min ?? 0, field.max)}.`;

// One field: its label (with a "?" button that opens its help, if it has some), its box, and
// below, any note, the help and any error.
//
// field: name, label, and either kind ('money', 'count' or 'percent') with max (and min, when
// not 0) or control ('select' or 'switch') with options ({ value, label }). Optional: steps
// (labels for a count's − and + buttons), help (text, or a chart), note (always shown),
// hideLabel (the label is read out but not shown, for a box under a column heading), and wide
// (the field takes the whole row, its box the usual width, so a wide help table has room).
function Field({ field, value, error, onChange, onBlur, onStep }) {
  const [helpOpen, setHelpOpen] = useState(false);
  const id = `calc-${field.name}`;
  const labelId = `${id}-label`;
  const noteId = `${id}-note`;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const describedBy = [field.note && noteId, field.help && hintId, error && errorId].filter(Boolean).join(' ') || undefined;

  let control;
  if (field.control === 'select') {
    control = (
      <select id={id} name={field.name} value={value} onChange={onChange}>
        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  } else if (field.control === 'switch') {
    control = (
      <div className="calc-switch" role="radiogroup" aria-labelledby={labelId}>
        {field.options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={field.name}
              value={option.value}
              checked={value === String(option.value)}
              onChange={onChange}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    );
  } else {
    const { prefix, suffix } = kinds[field.kind];
    const input = (
      <input
        id={id}
        name={field.name}
        type="text"
        // Phones' number pads have no minus sign, so a field that takes one gets the keyboard.
        inputMode={field.min < 0 ? 'text' : field.kind === 'count' ? 'numeric' : 'decimal'}
        autoComplete="off"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={(event) => event.target.select()}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
    );
    const count = Number(value);
    control = field.steps ? (
      <div className="calc-stepper">
        <button type="button" aria-label={field.steps[0]} aria-controls={id} disabled={count <= (field.min ?? 0)}
          onClick={() => onStep(field, -1)}>
          <Icon name="minus" />
        </button>
        {input}
        <button type="button" aria-label={field.steps[1]} aria-controls={id} disabled={count >= field.max}
          onClick={() => onStep(field, 1)}>
          <Icon name="plus" />
        </button>
      </div>
    ) : (
      <div className={`calc-affix${prefix ? ' has-prefix' : ''}${suffix ? ' has-suffix' : ''}`}>
        {prefix && <span aria-hidden="true">{prefix}</span>}
        {input}
        {suffix && <span aria-hidden="true">{suffix}</span>}
      </div>
    );
  }

  return (
    <div className={`field${field.wide ? ' is-wide' : ''}`}>
      <div className={`field-label${field.hideLabel ? ' sr-only' : ''}`}>
        {field.control === 'switch' ? (
          <span id={labelId}>{field.label}</span>
        ) : (
          <label id={labelId} htmlFor={id}>
            {field.label}
          </label>
        )}
        {field.help && (
          <button
            type="button"
            className="field-help"
            aria-expanded={helpOpen}
            aria-controls={hintId}
            onClick={() => setHelpOpen((open) => !open)}
          >
            <Icon name="help" />
            <span className="sr-only">What to enter</span>
          </button>
        )}
      </div>
      {field.caption && (
        <span className="field-caption" aria-hidden="true">
          {field.caption}
        </span>
      )}
      {control}
      <div className="field-notes">
        {field.note && (
          <p className="field-note" id={noteId}>
            {field.note}
          </p>
        )}
        {field.help && (
          <div className="field-hint" id={hintId} hidden={!helpOpen}>
            {typeof field.help === 'string' ? <p>{field.help}</p> : field.help}
          </div>
        )}
        {error && (
          <p className="field-error" id={errorId}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

// page          short name for the breadcrumb
// category      the calculator's category on the Resources page: { to, label }
// title         the calculator's title
// intro         CalcXML's introduction, shown in the banner
// formTitle     heading of the form
// sections      the form's field groups: { title, fields } (see Field), two to a row; or, for
//               the same entries side by side, { title, columns, rows }, with each row a field
//               whose `names` gives its name in each column. A column is its heading, or
//               { title, kind, max, … } when each column takes its own kind of entry (an
//               amount, then a percentage). Three columns stack in a narrow form, each box
//               with its column's heading beside it.
// defaults      each field's starting entry, as typed
// validate      optional checks across fields: (inputs) => { [field name]: message }
// calculate     (inputs) => results; the page keeps the inputs with them as results.inputs
// renderResults (results) => what's shown under "Results", beside the form
// renderDetails optional (results) => a wide table under the form and results
// placeholder   what the results column says before there are results
// note          how the results are figured, for the note under them
// cta           { title, text } for the closing call to action
export default function CalculatorPage({
  page,
  category,
  title,
  intro,
  formTitle,
  sections,
  defaults,
  validate,
  calculate,
  renderResults,
  renderDetails,
  placeholder,
  note,
  cta,
}) {
  // A row of side-by-side entries becomes a field per column, labeled for reading out with
  // its column ("Filing status (What-If)"); the row's label shows once, above them.
  const groups = sections.map((section) =>
    section.rows
      ? {
          ...section,
          rows: section.rows.map(({ names, ...row }) => ({
            label: row.label,
            fields: section.columns.map((column, index) => {
              const { title, ...kind } = typeof column === 'string' ? { title: column } : column;
              return {
                ...row,
                ...kind,
                name: names[index],
                label: `${row.label} (${title})`,
                caption: title,
                hideLabel: true,
                steps: row.steps?.map((step) => `${step} (${title})`),
              };
            }),
          })),
        }
      : section,
  );
  const fields = groups.flatMap((section) => section.fields ?? section.rows.flatMap((row) => row.fields));
  const [values, setValues] = useState(defaults);
  const [errors, setErrors] = useState({});
  const [results, setResults] = useState(null);
  // On wide screens the form stays beside the results as they scroll (see .calc-form).
  const formRef = useStickyFit();
  const resultsRef = useRef(null);

  // New results: bring them into view and move focus to them, as CalcXML jumps to its results.
  useEffect(() => {
    if (!results) return;
    resultsRef.current.scrollIntoView({ block: 'start' });
    resultsRef.current.focus({ preventScroll: true });
  }, [results]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  // Like CalcXML, a field is checked when it's left, and amounts get their commas back.
  const handleBlur = (event) => {
    const { name, value } = event.target;
    const field = fields.find((item) => item.name === name);
    const amount = parseField(field, value);
    if (Number.isNaN(amount)) setErrors((current) => ({ ...current, [name]: rangeError(field) }));
    else setValues((current) => ({ ...current, [name]: kinds[field.kind].format(amount) }));
  };

  // The − and + buttons beside a count; a box that isn't a whole number starts over from the lowest.
  const handleStep = (field, change) => {
    const min = field.min ?? 0;
    const count = parseField(field, values[field.name]);
    const next = Math.min(Math.max((Number.isNaN(count) ? min : count) + change, min), field.max);
    setValues((current) => ({ ...current, [field.name]: String(next) }));
    setErrors((current) => ({ ...current, [field.name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = {};
    const found = {};
    for (const field of fields) {
      const value = values[field.name];
      if (field.options) {
        inputs[field.name] = field.options.find((option) => String(option.value) === value).value;
        continue;
      }
      const amount = parseField(field, value);
      if (Number.isNaN(amount)) found[field.name] = rangeError(field);
      else inputs[field.name] = field.kind === 'percent' ? amount / 100 : amount;
    }
    if (!Object.keys(found).length && validate) Object.assign(found, validate(inputs));
    setErrors(found);
    const firstError = fields.find((field) => found[field.name]);
    if (firstError) {
      formRef.current.elements[firstError.name].focus();
      return;
    }
    setResults({ inputs, ...calculate(inputs) });
  };

  const handleReset = () => {
    setValues(defaults);
    setErrors({});
    setResults(null);
  };

  return (
    <>
      <PageHero
        page={page}
        parents={[{ to: '/resources', label: 'Resources' }, category]}
        eyebrow="Financial calculator"
        title={title}
      >
        {intro}
      </PageHero>

      <section className="section section-white">
        <div className="container calc-grid">
          <form className="form-card calc-form" ref={formRef} noValidate onSubmit={handleSubmit}>
            <h2>{formTitle}</h2>
            {groups.map((section) => (
              <fieldset className="calc-section" key={section.title}>
                <legend className="label">{section.title}</legend>
                {section.rows ? (
                  <div
                    className={`calc-pairs${section.columns.length > 2 ? ' is-stackable' : ''}`}
                    style={{ '--columns': section.columns.length }}
                  >
                    <div className="calc-pairs-head" aria-hidden="true">
                      {section.columns.map((column) => {
                        const title = typeof column === 'string' ? column : column.title;
                        return <span key={title}>{title}</span>;
                      })}
                    </div>
                    {section.rows.map((row) => (
                      <div className="calc-pair" key={row.label}>
                        <p className="calc-pair-label" aria-hidden="true">
                          {row.label}
                        </p>
                        {row.fields.map((field) => (
                          <Field
                            key={field.name}
                            field={field}
                            value={values[field.name]}
                            error={errors[field.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onStep={handleStep}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`calc-row${section.fields.length === 1 ? ' is-single' : ''}`}>
                    {section.fields.map((field) => (
                      <Field
                        key={field.name}
                        field={field}
                        value={values[field.name]}
                        error={errors[field.name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onStep={handleStep}
                      />
                    ))}
                  </div>
                )}
              </fieldset>
            ))}
            <div className="calc-actions">
              <button className="btn btn-primary btn-lg" type="submit">
                Calculate
                <Icon name="arrow" />
              </button>
              <button className="btn btn-outline btn-lg" type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>

          <div className="calc-output">
            {results ? (
              <section className="calc-results" aria-labelledby="calc-results">
                <h2 id="calc-results" ref={resultsRef} tabIndex={-1}>
                  Results
                </h2>
                {renderResults(results)}
              </section>
            ) : (
              <div className="calc-empty">
                <span className="calc-empty-icon">
                  <Icon name="chart" />
                </span>
                <strong>Your results will appear here</strong>
                <p>{placeholder}</p>
              </div>
            )}

            <div className="calc-note">
              <p className="label">How it's figured</p>
              <p>{note}</p>
            </div>
            <p className="article-disclaimer">{disclaimer}</p>
          </div>
        </div>
        {results && renderDetails && <div className="container calc-details">{renderDetails(results)}</div>}
      </section>

      <CtaSection soft title={cta.title} text={cta.text} />
    </>
  );
}
