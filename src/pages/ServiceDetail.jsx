import { Link, useParams } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import { FaqList } from '../components/FaqSection.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { links, site } from '../data/site.js';
import { findService, serviceCategories } from '../data/services.js';
import NotFound from './NotFound.jsx';

// Page for a single service at /services/:serviceId.
export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = findService(serviceId);
  if (!service) return <NotFound />;

  // The key resets the page (e.g. open FAQ answers) when moving between services.
  return <ServicePage key={service.id} service={service} />;
}

// The story of the service down the page (overview, what to expect, process, questions)
// beside a "What's included" card that stays in view.
function ServicePage({ service }) {
  usePageMeta(service.name, service.description);

  const contactLink = `/contact?service=${service.id}`;
  const related = service.related.map(findService);
  const category = serviceCategories.find((item) => item.id === service.category);
  const [firstParagraph, ...otherParagraphs] = service.overview;

  return (
    <>
      <PageHero
        page={service.name}
        parents={[{ to: '/services', label: 'Services' }]}
        eyebrow={category.label}
        title={service.headline}
        actions={
          <>
            <Link className="btn btn-primary btn-lg" to={contactLink}>
              {service.cta}
              <Icon name="arrow" />
            </Link>
            <a className="btn btn-outline btn-lg" href={site.phone.href}>
              <Icon name="phone" />
              {site.phone.display}
            </a>
          </>
        }
      >
        {service.description}
      </PageHero>

      {service.notice && (
        <div className="notice-bar" role="note">
          <div className="container notice-bar-inner">
            <Icon name="clock" />
            <p>{service.notice}</p>
          </div>
        </div>
      )}

      <section className="section section-white">
        <div className="container detail">
          <div className="detail-main">
            <div className="detail-block reveal">
              <p className="eyebrow">Overview</p>
              <h2>
                How we <em>help</em>
              </h2>
              <p className="detail-lead">{firstParagraph}</p>
              {otherParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="ideal-card">
                <span className="icon-badge icon-badge-gold">
                  <Icon name="users" />
                </span>
                <p>
                  <strong>Ideal for</strong>
                  {service.idealFor}
                </p>
              </div>
            </div>

            <div className="detail-block reveal">
              <p className="eyebrow">Why choose us</p>
              <h2>
                What you can <em>expect</em>
              </h2>
              <ul className="feature-rows">
                {service.highlights.map((highlight) => (
                  <li key={highlight.title}>
                    <span className="icon-badge">
                      <Icon name={highlight.icon} />
                    </span>
                    <div>
                      <h3>{highlight.title}</h3>
                      <p>{highlight.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-block reveal">
              <p className="eyebrow">How it works</p>
              <h2>
                A clear process from <em>start to finish</em>
              </h2>
              <ProcessSteps steps={service.process} layout="timeline" />
            </div>

            <div className="detail-block reveal" id="faq">
              <p className="eyebrow">FAQ</p>
              <h2>
                Common <em>questions</em>
              </h2>
              <FaqList faqs={service.faqs} />
            </div>

            <div className="talk-card reveal">
              <div>
                <h3>Prefer to talk it through?</h3>
                <p>Call, email, or book a time online. We serve clients nationwide, in English and Spanish.</p>
              </div>
              <div className="talk-actions">
                <a className="btn btn-outline" href={site.phone.href}>
                  <Icon name="phone" />
                  {site.phone.display}
                </a>
                <a className="btn btn-outline" href={links.schedule} target="_blank" rel="noopener noreferrer">
                  <Icon name="calendar" />
                  Book online
                </a>
              </div>
            </div>
          </div>

          <aside className="detail-aside">
            <div className="included-card surface-dark">
              <span className="icon-badge included-icon">
                <Icon name={service.icon} />
              </span>
              <h2 className="included-title">What's included</h2>
              <ul className="checklist">
                {service.included.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="btn btn-gold btn-block" to={contactLink}>
                Request a quote
                <Icon name="arrow" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="Related services" title={<>You may <em>also need</em></>} />
            <Link className="btn btn-outline" to="/services">
              View all services
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="card-grid reveal">
            {related.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        soft
        to={contactLink}
        title={<>Ready to <em>get started?</em></>}
        text="Book a free, no-obligation consultation and find out how we can help."
      />
    </>
  );
}
