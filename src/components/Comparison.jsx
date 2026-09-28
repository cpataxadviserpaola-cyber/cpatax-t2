import { Link } from 'react-router';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { site } from '../data/site.js';

const rows = [
  {
    topic: 'Availability',
    typical: 'Busy in spring, hard to reach the rest of the year',
    ours: 'Year-round guidance, not just at tax time',
  },
  {
    topic: 'Relationship',
    typical: 'A different preparer each season',
    ours: 'A trusted partner who builds a lasting relationship',
  },
  {
    topic: 'Business insight',
    typical: 'Focused only on filling in forms',
    ours: 'Understands how your business truly operates',
  },
  {
    topic: 'Approach',
    typical: 'Enters the numbers you bring in',
    ours: 'Proactively recommends tax-saving strategies',
  },
  {
    topic: 'Pricing',
    typical: 'Unclear until the bill arrives',
    ours: 'Published pricing guide and tailored business bundles',
  },
  {
    topic: 'Convenience',
    typical: 'Paper forms and office visits',
    ours: 'Secure client portal, online payments, English and Spanish',
  },
];

// A typical seasonal tax office and the firm, side by side, one topic per row.
export default function Comparison() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Compare" title={<>Not your <em>typical</em> tax preparer</>} center>
          How working with a full-service CPA firm compares with a seasonal tax office.
        </SectionHead>

        <div className="versus reveal">
          <div className="versus-card versus-typical">
            <h3 className="versus-label">Typical tax office</h3>
            <ul className="versus-list">
              {rows.map((row) => (
                <li key={row.topic}>
                  <span className="mark mark-no">
                    <Icon name="close" />
                  </span>
                  <span>
                    <strong>{row.topic}</strong>
                    {row.typical}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <span className="versus-badge" aria-hidden="true">
            vs
          </span>

          <div className="versus-card versus-ours surface-dark">
            <h3 className="versus-label">
              {site.name}
              <span className="versus-tag">Our approach</span>
            </h3>
            <ul className="versus-list">
              {rows.map((row) => (
                <li key={row.topic}>
                  <span className="mark mark-yes">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>{row.topic}</strong>
                    {row.ours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="compare-cta">
          <Link className="btn btn-primary btn-lg" to="/contact">
            Work with a trusted advisor
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
