import { Link } from 'react-router';
import Icon from './Icon.jsx';
import CountUp from './CountUp.jsx';
import Registered from './Registered.jsx';
import Ribbons from './Ribbons.jsx';
import { commitments, site } from '../data/site.js';
import { team } from '../data/team.js';
import { monthNames, touchpoints } from '../data/yearPlan.js';
import { formatDeadlineLong, getNextDeadline } from '../data/deadlines.js';
import { asset } from '../utils/asset.js';

const founder = team.find((person) => person.featured);

const credentials = [
  { icon: 'shield', label: 'SC licensed CPA firm' },
  { icon: 'award', label: 'CPA + CFP® founder' },
  { icon: 'users', label: 'Minority & women-owned' },
  { icon: 'chat', label: 'English & Spanish' },
  { icon: 'globe', label: 'Serving clients nationwide' },
];

// Centered headline, then a three-panel showcase: the founder's portrait, a countdown to
// the next IRS deadline over the year's check-ins, and the firm's key facts.
export default function HomeHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-intro">
          <p className="hero-chip">
            <span className="status-dot" aria-hidden="true" />
            {site.announcement}
          </p>

          <h1 className="hero-title">
            Where tax strategy meets <em>real business understanding.</em>
          </h1>

          <p className="hero-lead">
            We help business owners, professionals, and individuals make informed tax decisions
            through practical advice, personalized strategies, and year-round guidance.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" to="/contact">
              Schedule a consultation
              <Icon name="arrow" />
            </Link>
            <a className="btn btn-outline btn-lg" href={site.phone.href}>
              <Icon name="phone" />
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className="showcase">
          <figure className="show-card show-portrait">
            {founder.photo ? (
              <img src={asset(founder.photo)} alt={`${founder.name}, ${founder.role}`} />
            ) : (
              <span className="show-initials" aria-hidden="true">{founder.initials}</span>
            )}
            <figcaption>
              <strong>{founder.name}</strong>
              <span>
                Founder · <Registered>{founder.credentials}</Registered>
              </span>
            </figcaption>
          </figure>

          <DeadlineCard />

          <div className="show-card show-facts">
            <p className="show-kicker">
              <Icon name="sparkle" />
              Dual credentials
            </p>
            <p className="show-cred">
              CPA <em>+</em> CFP<sup className="reg">®</sup>
            </p>
            <p className="show-cred-text">Tax strategy meets long-term financial planning.</p>
            <dl className="show-stats">
              {commitments.map((item) => (
                <div key={item.short}>
                  <dt>{item.short}</dt>
                  <dd>
                    {item.value}
                    {item.unit && <small>{item.unit}</small>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <ul className="hero-creds" aria-label="Credentials">
          {credentials.map((item) => (
            <li key={item.label}>
              <Icon name={item.icon} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Days until the next IRS deadline, above a strip of the months in which we check in
// with clients (the current month is marked).
function DeadlineCard() {
  const deadline = getNextDeadline();
  const month = new Date().getMonth();
  const checkIns = touchpoints.map((point) => point.month);

  return (
    <div className="show-card show-deadline surface-dark">
      <Ribbons className="show-ribbons" />
      <p className="show-kicker">
        <Icon name="calendar" />
        {deadline ? 'Next IRS deadline' : 'Year-round support'}
      </p>

      {deadline && deadline.daysLeft > 0 && (
        <p className="show-days">
          <CountUp value={deadline.daysLeft} />
          <span className="show-days-unit">{deadline.daysLeft === 1 ? 'day left' : 'days left'}</span>
        </p>
      )}
      {deadline && deadline.daysLeft === 0 && (
        <p className="show-days">
          Today
          <span className="show-days-unit">due</span>
        </p>
      )}
      {!deadline && (
        <p className="show-days">
          12
          <span className="show-days-unit">months a year</span>
        </p>
      )}
      {deadline && (
        <>
          <p className="show-date">{formatDeadlineLong(deadline.day)}</p>
          <p className="show-what">{deadline.label}</p>
        </>
      )}

      <div className="show-track" aria-hidden="true">
        <div className="track-months">
          {monthNames.map((name, index) => (
            <span
              key={name}
              className={`track-month${checkIns.includes(index) ? ' is-touch' : ''}${index === month ? ' is-now' : ''}`}
            >
              <i />
              {name.charAt(0)}
            </span>
          ))}
        </div>
        <p className="track-label">
          <span className="track-key" />
          Your check-ins with us, all year long
        </p>
      </div>
    </div>
  );
}
