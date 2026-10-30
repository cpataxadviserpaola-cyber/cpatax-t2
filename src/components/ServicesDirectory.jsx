import { Link } from 'react-router';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { servicePath, services } from '../data/services.js';

// Directory of services, compact: a tile for each service shown on the site (a hidden service
// in src/data/services.js has none), then Financial Planning and a prompt to ask the team.
export default function ServicesDirectory() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head-row">
          <SectionHead eyebrow="What we do" title={<>Comprehensive accounting &amp; <em>tax services</em></>}>
            From cash flow statements to payroll and tax returns, we are here to help your
            business succeed.
          </SectionHead>
          <Link className="btn btn-outline" to="/services">
            View all services
            <Icon name="arrow" />
          </Link>
        </div>

        <ul className="dir-grid reveal">
          {services.map((service) => (
            <li key={service.id}>
              <Link className="dir-tile" to={servicePath(service)}>
                <span className="dir-icon">
                  <Icon name={service.icon} />
                </span>
                <span className="dir-text">
                  <span className="dir-name">{service.name}</span>
                  <span className="dir-tagline">{service.tagline}</span>
                </span>
                <Icon name="arrow-up-right" className="dir-go" />
              </Link>
            </li>
          ))}

          <li>
            <Link className="dir-tile dir-tile-gold" to="/financial-planning">
              <span className="dir-icon">
                <Icon name="trend" />
              </span>
              <span className="dir-text">
                <span className="dir-name">Financial Planning</span>
                <span className="dir-tagline">
                  Personalized financial guidance beyond tax season, through our affiliated firm,
                  Yellow Oak Financial Planning.
                </span>
              </span>
              <Icon name="arrow-up-right" className="dir-go" />
            </Link>
          </li>

          <li className="dir-ask surface-dark">
            <p>
              <strong>Not sure which service fits?</strong>
              Tell us about your business and we'll recommend the right approach.
            </p>
            <Link className="btn btn-gold" to="/contact">
              Ask our team
              <Icon name="arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
