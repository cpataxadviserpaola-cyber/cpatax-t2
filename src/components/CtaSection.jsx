import { Link } from 'react-router';
import Icon from './Icon.jsx';
import Ribbons from './Ribbons.jsx';
import { site } from '../data/site.js';
import { formatDeadlineLong, getNextDeadline } from '../data/deadlines.js';

// Closing call to action: the page's own message in a wine panel beside a gold panel
// counting down to the next IRS deadline. The second button defaults to the phone number.
export default function CtaSection({ title, text, soft = false, to = '/contact', secondary }) {
  const deadline = getNextDeadline();

  return (
    <section className={`section section-cta${soft ? ' section-white' : ''}`}>
      <div className="container">
        <div className="cta reveal">
          <div className="cta-main surface-dark">
            <Ribbons className="cta-ribbons" />
            <p className="eyebrow">Let's talk</p>
            <h2>{title}</h2>
            <p className="cta-text">{text}</p>
            <div className="cta-actions">
              <Link className="btn btn-gold btn-lg" to={to}>
                Schedule a consultation
                <Icon name="arrow" />
              </Link>
              {secondary ?? (
                <a className="btn btn-ghost-light btn-lg" href={site.phone.href}>
                  <Icon name="phone" />
                  {site.phone.display}
                </a>
              )}
            </div>
          </div>

          <aside className="cta-side" aria-label={deadline ? 'Next IRS deadline' : 'Year-round support'}>
            <p className="cta-side-label">
              <Icon name="calendar" />
              {deadline ? 'Next IRS deadline' : 'Year-round support'}
            </p>
            {deadline ? (
              <>
                <p className="cta-side-days">
                  {deadline.daysLeft === 0 ? 'Today' : deadline.daysLeft}
                  <span className="cta-side-unit">
                    {deadline.daysLeft === 0 ? 'due' : deadline.daysLeft === 1 ? 'day left' : 'days left'}
                  </span>
                </p>
                <p className="cta-side-date">{formatDeadlineLong(deadline.day)}</p>
                <p className="cta-side-what">{deadline.label}</p>
              </>
            ) : (
              <p className="cta-side-days">
                12
                <span className="cta-side-unit">months a year</span>
              </p>
            )}
            <ul className="cta-side-meta">
              <li>
                <Icon name="globe" />
                Serving clients nationwide
              </li>
              <li>
                <Icon name="chat" />
                English &amp; Spanish
              </li>
              <li>
                <Icon name="lock" />
                Secure client portal
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
