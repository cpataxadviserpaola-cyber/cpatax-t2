import { useState } from 'react';
import { Link } from 'react-router';
import Icon from './Icon.jsx';
import { defaultSituations, opportunities, situations } from '../data/opportunities.js';

// Interactive checklist: visitors pick what applies to them and see the tax
// opportunities a CPA would review first.
export default function OpportunityFinder() {
  const [selected, setSelected] = useState(defaultSituations);

  const toggle = (id) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const matches = opportunities.filter((item) => item.for.some((id) => selected.includes(id)));
  const count = matches.length;

  return (
    <section className="section finder surface-dark" id="finder">
      <div className="container">
        <div className="finder-head reveal">
          <p className="eyebrow">Tax opportunity finder</p>
          <h2>
            Where could you <em>be saving?</em>
          </h2>
          <p className="lead">
            Choose what applies to you and see where one of our CPAs would look first.
          </p>

          <div className="finder-chips" role="group" aria-label="Your situation">
            {situations.map((situation) => {
              const isOn = selected.includes(situation.id);
              return (
                <button
                  key={situation.id}
                  className="finder-chip"
                  type="button"
                  aria-pressed={isOn}
                  onClick={() => toggle(situation.id)}
                >
                  <Icon name={isOn ? 'check' : situation.icon} />
                  {situation.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="finder-bar reveal">
          <p className="finder-count" aria-live="polite">
            <strong>{count}</strong>
            {count === 1 ? ' opportunity' : ' opportunities'} to review
          </p>
          <p className="finder-note">
            General information only. What applies to you depends on your full situation.
          </p>
          <Link className="btn btn-gold" to="/contact?service=planning">
            Review mine with a CPA
            <Icon name="arrow" />
          </Link>
        </div>

        {count > 0 ? (
          <ul className="finder-grid">
            {matches.map((item) => (
              <li key={item.title} className="finder-item">
                <span className="finder-tick">
                  <Icon name="check" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="finder-empty">Select one or more situations to see where you could save.</p>
        )}
      </div>
    </section>
  );
}
