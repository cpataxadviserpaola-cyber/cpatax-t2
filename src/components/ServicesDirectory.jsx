import { Link } from 'react-router';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { serviceCategories, servicesIn } from '../data/services.js';

const business = servicesIn('business');
// One card per group beside the business panel; a group with several services links to each.
const sideGroups = ['individual', 'international'].map((id) => ({ id, items: servicesIn(id) }));
const groupTitle = { individual: 'Individual Tax Services', international: 'International Tax Services' };
const categoryName = Object.fromEntries(
  serviceCategories.map((category) => [category.id, category.label.replace(/ (client )?services$/, '')]),
);

// Directory of services: every business service in one dark panel, with the individual,
// international, and financial planning services as cards beside it.
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

        <div className="directory reveal">
          <div className="dir-main surface-dark">
            <div className="dir-main-head">
              <p className="dir-kicker">Business services</p>
              <p className="dir-count">For business owners</p>
            </div>
            <ul className="dir-list">
              {business.map((service) => (
                <li key={service.id}>
                  <Link className="dir-link" to={`/services/${service.id}`}>
                    <span className="dir-icon">
                      <Icon name={service.icon} />
                    </span>
                    <span className="dir-text">
                      <span className="dir-name">{service.name}</span>
                      <span className="dir-tagline">{service.tagline}</span>
                    </span>
                    <span className="dir-go">
                      <Icon name="arrow-up-right" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="dir-main-foot">
              <p>
                <strong>Not sure which service fits?</strong>
                Tell us about your business and we'll recommend the right approach.
              </p>
              <Link className="btn btn-gold" to="/contact">
                Ask our team
                <Icon name="arrow" />
              </Link>
            </div>
          </div>

          <div className="dir-side">
            {sideGroups.map(({ id, items }) => {
              const [lead] = items;
              return (
                <article className="dir-card" key={id}>
                  <div className="dir-card-top">
                    <span className="icon-badge">
                      <Icon name={lead.icon} />
                    </span>
                    <span className="dir-card-cat">{categoryName[id]}</span>
                  </div>
                  <h3>{groupTitle[id]}</h3>
                  <p>{lead.summary}</p>
                  {lead.notice && (
                    <p className="dir-note">
                      <Icon name="clock" />
                      Waiting list for new individual clients
                    </p>
                  )}
                  {items.length > 1 ? (
                    <ul className="dir-card-links">
                      {items.map((service) => (
                        <li key={service.id}>
                          <Link className="link-arrow" to={`/services/${service.id}`}>
                            {service.name} <Icon name="arrow" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Link className="link-arrow" to={`/services/${lead.id}`}>
                      Learn more<span className="sr-only"> about {lead.name}</span> <Icon name="arrow" />
                    </Link>
                  )}
                </article>
              );
            })}

            <article className="dir-card dir-card-gold">
              <div className="dir-card-top">
                <span className="icon-badge">
                  <Icon name="trend" />
                </span>
                <span className="dir-card-cat">Beyond taxes</span>
              </div>
              <h3>Financial Planning</h3>
              <p>
                Personalized financial guidance beyond tax season, through our affiliated firm,
                Yellow Oak Financial Planning.
              </p>
              <Link className="link-arrow" to="/financial-planning">
                Learn more<span className="sr-only"> about Financial Planning</span> <Icon name="arrow" />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
