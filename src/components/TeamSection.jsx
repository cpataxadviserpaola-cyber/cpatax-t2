import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import Icon from './Icon.jsx';
import Registered from './Registered.jsx';
import SectionHead from './SectionHead.jsx';
import { team } from '../data/team.js';
import { asset } from '../utils/asset.js';

const founder = team.find((person) => person.featured);
const members = team.filter((person) => !person.featured);

// Team: the founder in a dark spotlight card with her portrait, then the rest of the team
// in an open row. "Read bio" opens the person's full bio in a modal window.
export default function TeamSection({ soft = false, showAboutLink = false }) {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  // Remember which button opened the window so focus can return to it on close
  // (browsers such as Safari don't focus a button when it is clicked).
  const openBio = (person, event) => {
    triggerRef.current = event.currentTarget;
    setSelected(person);
  };

  const onBioClosed = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  // Open the window once its content has rendered.
  useEffect(() => {
    if (selected && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [selected]);

  const closeBio = () => dialogRef.current?.close();

  return (
    <section className={`section team${soft ? ' section-white' : ''}`}>
      <div className="container">
        <div className="section-head-row">
          <SectionHead eyebrow="Meet our team" title={<>The people behind <em>your numbers</em></>}>
            Get to know the people who will work on your taxes and books before you come to see us.
          </SectionHead>
          {showAboutLink && (
            <Link className="btn btn-outline" to="/about">
              About our firm
              <Icon name="arrow" />
            </Link>
          )}
        </div>

        <article className="spotlight surface-dark reveal">
          <div className="spotlight-copy">
            <p className="team-role">{founder.role}</p>
            <h3 className="spotlight-name">
              {founder.name}
              {founder.credentials && (
                <span>
                  , <Registered>{founder.credentials}</Registered>
                </span>
              )}
            </h3>
            <blockquote className="team-quote">
              <p>{founder.highlight}</p>
            </blockquote>
            <p className="spotlight-intro">{founder.bio[0]}</p>
            <ul className="spotlight-facts" aria-label="Credentials and experience">
              {founder.facts.map((fact) => (
                <li key={fact}>
                  <Icon name="check" />
                  {fact}
                </li>
              ))}
            </ul>
            <div className="spotlight-actions">
              <PersonAction action={founder.action} className="btn btn-gold" />
              <button className="btn btn-ghost-light" type="button" aria-haspopup="dialog" onClick={(event) => openBio(founder, event)}>
                Read full bio
              </button>
            </div>
          </div>
          <div className="spotlight-photo">
            <Avatar person={founder} />
          </div>
        </article>

        <ul className="people reveal">
          {members.map((person) => (
            <li className="person" key={person.id}>
              <Avatar person={person} small />
              <h3>{person.name}</h3>
              <p className="member-role">{person.role}</p>
              <p className="person-summary">{person.summary}</p>
              <button className="member-more" type="button" aria-haspopup="dialog" onClick={(event) => openBio(person, event)}>
                Read bio<span className="sr-only"> of {person.name}</span>
                <Icon name="arrow" />
              </button>
            </li>
          ))}
        </ul>

        <p className="team-strip reveal">
          <Icon name="award" />
          <span>
            <strong>A South Carolina Minority/Women-Owned Business Enterprise.</strong> Our team
            serves clients nationwide, in English and Spanish.
          </span>
        </p>
      </div>

      {/* Clicking the dim backdrop (the dialog element itself) closes the window. */}
      <dialog
        ref={dialogRef}
        className="bio-dialog"
        aria-labelledby="bio-title"
        onClose={onBioClosed}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeBio();
        }}
      >
        {selected && <Bio person={selected} onClose={closeBio} />}
      </dialog>
    </section>
  );
}

function Bio({ person, onClose }) {
  return (
    <div className="bio-inner">
      <div className="bio-head">
        <Avatar person={person} small />
        <div>
          <h2 id="bio-title">
            {person.name}
            {person.credentials && (
              <span>
                , <Registered>{person.credentials}</Registered>
              </span>
            )}
          </h2>
          <p className="member-role">{person.role}</p>
        </div>
        <button className="bio-close" type="button" onClick={onClose}>
          <Icon name="close" />
          <span className="sr-only">Close</span>
        </button>
      </div>
      <blockquote className="team-quote">
        <p>{person.highlight}</p>
      </blockquote>
      {person.bio.map((paragraph, number) => (
        <p className="bio-text" key={number}>
          {paragraph}
        </p>
      ))}
      <p className="label">Focus areas</p>
      <ul className="team-focus">
        {person.focus.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>
      <PersonAction action={person.action} />
    </div>
  );
}

function PersonAction({ action, className = 'btn btn-primary' }) {
  const content = (
    <>
      {action.label}
      <Icon name={action.external ? 'external' : 'arrow'} />
    </>
  );
  if (action.external) {
    return (
      <a className={className} href={action.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link className={className} to={action.href}>
      {content}
    </Link>
  );
}

// The person's photo if one is set, otherwise their initials on a wine disc.
function Avatar({ person, small = false }) {
  const className = small ? 'member-avatar' : 'founder-avatar';
  if (person.photo) {
    if (small) {
      return (
        <span className={`${className} face-crop`}>
          <img src={asset(person.photo)} alt={`${person.name}, ${person.role}`} />
        </span>
      );
    }
    return <img className={className} src={asset(person.photo)} alt={`${person.name}, ${person.role}`} />;
  }
  return (
    <span className={`${className} is-initials`} aria-hidden="true">
      {person.initials}
    </span>
  );
}
