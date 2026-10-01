import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { serviceCategories, servicesIn } from '../data/services.js';
import { industries } from '../data/industries.js';

// Label and short introduction shown beside each group of services.
const categoryIntro = {
  business: {
    eyebrow: 'For business owners',
    text: 'Tax preparation and planning, accounting, bookkeeping, payroll, advisory, and QuickBooks services for sole proprietorships, LLCs, partnerships, and corporations.',
  },
  individual: {
    eyebrow: 'For individuals',
    text: 'Personal tax returns, projections, and withholding reviews for professionals, executives, and pre-retirees.',
  },
  international: {
    eyebrow: 'For international clients',
    text: 'U.S. tax filing for nonresidents, expatriates, international students, and foreign investors.',
  },
};

// Group anchors get a prefix: "individual" and "international" are also service ids, and
// /services#<service id> links to that service's card.
const groupId = (category) => `group-${category.id}`;

export default function Services() {
  usePageMeta(
    'Services',
    'Business tax preparation, tax planning, small business accounting, bookkeeping, payroll, business advisory, QuickBooks, individual, and international tax services from CPA Tax Adviser.',
  );

  return (
    <>
      <PageHero page="Services" eyebrow="What we do" title={<>We're on <em>your side</em></>}>
        Tax law is complex. That's why it pays to have an accounting firm you can trust. From cash
        flow statements to payroll and tax returns, we are here to help your business succeed.
      </PageHero>

      <nav className="cat-nav" aria-label="Service groups">
        <div className="container">
          <ul>
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <Link to={`#${groupId(category)}`}>{category.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/financial-planning">
                Financial planning
                <Icon name="arrow-up-right" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {serviceCategories.map((category, index) => {
        const items = servicesIn(category.id);
        return (
          <section
            className={`section cat-section${index % 2 === 0 ? ' section-white' : ''}`}
            id={groupId(category)}
            key={category.id}
          >
            <div className="container cat-grid">
              <div className="cat-aside reveal">
                <p className="eyebrow">{categoryIntro[category.id].eyebrow}</p>
                <h2>{category.label}</h2>
                <p>{categoryIntro[category.id].text}</p>
                <Link className="link-arrow" to="/contact">
                  Ask which fits you <Icon name="arrow" />
                </Link>
              </div>
              <div className={`svc-cards reveal${items.length === 1 ? ' is-single' : ''}`}>
                {items.map((service) => (
                  <ServiceCard key={service.id} id={service.id} service={service} showIncluded />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section industries surface-dark">
        <div className="container">
          <SectionHead eyebrow="Industries" title={<>Specialized knowledge <em>for your field</em></>} center>
            Our specialized knowledge has helped many professionals thrive, and we're ready to help
            you too.
          </SectionHead>
          <div className="industry-grid reveal">
            {industries.map((industry) => (
              <Link className="industry" key={industry.id} to={`/industries#${industry.id}`}>
                <span className="industry-icon">
                  <Icon name={industry.icon} />
                </span>
                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
              </Link>
            ))}
            <Link className="industry industry-more" to="/industries">
              <span className="industry-icon">
                <Icon name="arrow" />
              </span>
              <h3>All industries</h3>
              <p>See how we help businesses in each field, and the services that fit.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="beyond reveal">
            <div className="beyond-copy">
              <p className="eyebrow">Beyond taxes</p>
              <h2>
                Personalized financial guidance <em>beyond tax season</em>
              </h2>
              <p>
                Through our affiliated firm, Yellow Oak Financial Planning, we help professionals,
                business owners, families, and pre-retirees build a plan around their goals.
              </p>
            </div>
            <div className="beyond-panel">
              <Icon name="trend" />
              <p>Tax strategy and long-term planning, working together.</p>
              <Link className="btn btn-primary" to="/financial-planning">
                Explore financial planning
                <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        soft
        title={<>Not sure which service <em>you need?</em></>}
        text="Tell us about your business and we'll recommend the right approach."
      />
    </>
  );
}
