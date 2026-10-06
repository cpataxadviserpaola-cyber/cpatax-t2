import { Link } from 'react-router';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { site } from '../data/site.js';

const rows = [
  {
    topic: 'Availability',
    typical: 'Seasonal support when tax deadlines are approaching',
    ours: 'Year-round guidance when important decisions arise',
  },
  {
    topic: 'Relationship',
    typical: 'A tax preparer you see once a year',
    ours: 'A long-term advisor who knows your business',
  },
  {
    topic: 'Business insight',
    typical: 'Focused on preparing and filing your returns',
    ours: 'Looks beyond the numbers to understand your business',
  },
  {
    topic: 'Approach',
    typical: 'Reactive when tax issues come up',
    ours: 'Proactive planning to identify opportunities before deadlines',
  },
  {
    topic: 'Pricing',
    typical: 'Limited visibility into total costs',
    ours: 'Clear pricing and tailored advisory solutions',
  },
  {
    topic: 'Convenience',
    typical: 'Traditional paperwork and office appointments',
    ours: 'Secure digital communication and streamlined document sharing',
  },
];

// A traditional seasonal tax office and the firm, side by side, one topic per row.
export default function Comparison() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Compare" title={<>Not your <em>typical</em> tax preparer</>} center>
          How working with a full-service CPA firm compares with a seasonal tax office.
        </SectionHead>

        <div className="versus reveal">
          <div className="versus-card versus-typical">
            <h3 className="versus-label">Traditional tax office</h3>
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
