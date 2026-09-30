import { Link } from 'react-router';
import Icon from './Icon.jsx';
import CountUp from './CountUp.jsx';
import Ribbons from './Ribbons.jsx';
import { commitments, site } from '../data/site.js';
import { monthNames, touchpoints } from '../data/yearPlan.js';
import { formatDeadlineLong, getNextDeadline } from '../data/deadlines.js';

// Entry points into the Services page groups (see groupId in Services.jsx) and Financial Planning.
const audiences = [
  { icon: 'briefcase', title: 'Business owners', text: 'Tax, accounting & payroll', to: '/services#group-business' },
  { icon: 'user', title: 'Individuals', text: 'Returns & tax projections', to: '/services#group-individual' },
  { icon: 'globe', title: 'International clients', text: 'Nonresidents & expats', to: '/services#group-international' },
  { icon: 'trend', title: 'Financial planning', text: 'With our affiliate, Yellow Oak', to: '/financial-planning' },
];

const credentials = [
  { icon: 'shield', label: 'SC licensed CPA firm' },
  { icon: 'award', label: 'CPA + CFP® founder' },
  { icon: 'users', label: 'Minority & women-owned' },
  { icon: 'chat', label: 'English & Spanish' },
  { icon: 'globe', label: 'Serving clients nationwide' },
];

// Split layout: the message and calls to action on the left; on the right, a countdown to the
// next IRS deadline over the year's check-ins, above the firm's credentials and key facts.
// A "Who we help" band underneath links each kind of client straight to their services.
export default function HomeHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
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

            <ul className="hero-creds" aria-label="Credentials">
              {credentials.map((item) => (
                <li key={item.label}>
                  <Icon name={item.icon} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <DeadlineCard />

            <div className="show-card show-facts">
              <div className="show-facts-head">
                <p className="show-kicker">
                  <Icon name="sparkle" />
                  Dual credentials
                </p>
                <p className="show-cred">
                  CPA <em>+</em> CFP<sup className="reg">®</sup>
                </p>
                <p className="show-cred-text">Tax strategy meets long-term financial planning.</p>
              </div>
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
        </div>

        <nav className="hero-audience" aria-labelledby="audience-title">
          <div className="hero-audience-head">
            <p className="show-kicker">
              <Icon name="users" />
              Who we help
            </p>
            <h2 className="hero-audience-title" id="audience-title">
              Find the right <em>service</em>
            </h2>
          </div>
          <ul className="audience-list">
            {audiences.map((item) => (
              <li key={item.title}>
                <Link className="audience-link" to={item.to}>
                  <span className="audience-icon">
                    <Icon name={item.icon} />
                  </span>
                  <span className="audience-copy">
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </span>
                  <Icon name="arrow" className="audience-arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
