import { useState } from 'react';
import Icon from './Icon.jsx';
import { defaultSituations, opportunities, situations } from '../data/opportunities.js';
import { links } from '../data/site.js';

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
          <h2>
            Where could you <em>be saving?</em>
          </h2>
          <p className="lead">
            Choose what applies to you and see what our CPAs would recommend first.
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
          <a className="btn btn-gold" href={links.schedule} target="_blank" rel="noopener noreferrer">
            Review Yours with Our CPA
            <Icon name="external" />
          </a>
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
