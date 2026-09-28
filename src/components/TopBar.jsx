import Icon from './Icon.jsx';
import { links, site } from '../data/site.js';
import { deadlineCountdown, formatDeadlineDay, getNextDeadline } from '../data/deadlines.js';

// Thin strip above the header: the next federal tax deadline on the left; links to the
// client portal and online payments, and the languages we serve in, on the right.
export default function TopBar() {
  const deadline = getNextDeadline();

  return (
    <div className="topbar surface-dark">
      <div className="container topbar-inner">
        {deadline ? (
          <p className="deadline">
            <span className="deadline-pulse" aria-hidden="true" />
            <span className="deadline-label">Next IRS deadline</span>
            <time className="deadline-date" dateTime={deadline.date}>
              {formatDeadlineDay(deadline.day)}
            </time>
            <span className="deadline-what">{deadline.label}</span>
            <span className="deadline-left">{deadlineCountdown(deadline.daysLeft)}</span>
          </p>
        ) : (
          <p className="topbar-note">{site.announcement}</p>
        )}

        <ul className="topbar-list">
          <li>
            <a className="topbar-item" href={links.portal} target="_blank" rel="noopener noreferrer">
              <Icon name="lock" />
              Client portal
            </a>
          </li>
          <li>
            <a className="topbar-item" href={links.payment} target="_blank" rel="noopener noreferrer">
              <Icon name="card" />
              Pay my fee
            </a>
          </li>
          <li>
            <span className="topbar-item">
              <Icon name="chat" />
              English &middot; Español
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
