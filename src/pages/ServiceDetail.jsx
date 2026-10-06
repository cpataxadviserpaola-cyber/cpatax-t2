import { Link, Navigate, useLocation, useParams } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import { FaqList } from '../components/FaqSection.jsx';
import CtaSection from '../components/CtaSection.jsx';
import useStickyFit from '../hooks/useStickyFit.js';
import { links, site } from '../data/site.js';
import { findService, serviceCategories, servicePath } from '../data/services.js';
import NotFound from './NotFound.jsx';

// Page for a single service at /services/:serviceId, or at /<slug>/ for a service with its
// own address (App.jsx passes its `id`). Any other address for such a service, like
// /services/<id> or the slug without its closing slash, forwards to /<slug>/.
export default function ServiceDetail({ id }) {
  const { serviceId } = useParams();
  const { pathname, search, hash } = useLocation();
  const service = findService(id ?? serviceId);
  if (!service) return <NotFound />;
  if (service.slug && pathname !== servicePath(service)) {
    return <Navigate to={{ pathname: servicePath(service), search, hash }} replace />;
  }

  // The key resets the page (e.g. open FAQ answers) when moving between services.
  return <ServicePage key={service.id} service={service} />;
}

// The story of the service down the page, block by block, beside a "What's included" card
// that stays in view.
function ServicePage({ service }) {
  const asideRef = useStickyFit();

  const contactLink = `/contact?service=${service.id}`;
  const related = service.related.map(findService);
  const category = serviceCategories.find((item) => item.id === service.category);
  const sections = service.sections ?? standardSections(service);

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
            {sections.map((section, index) => (
              <DetailBlock
                key={index}
                section={section}
                lead={index === 0}
                action={
                  <Link className="btn btn-primary" to={contactLink}>
                    {service.cta}
                    <Icon name="arrow" />
                  </Link>
                }
              />
            ))}

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

          <aside className="detail-aside" ref={asideRef}>
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

// The page's blocks for a service without its own `sections`: overview, what to expect,
// process, and questions.
function standardSections(service) {
  return [
    {
      eyebrow: 'Overview',
      title: <>How we <em>help</em></>,
      paragraphs: service.overview,
      idealFor: service.idealFor,
    },
    {
      eyebrow: 'Why choose us',
      title: <>What you can <em>expect</em></>,
      features: service.highlights,
    },
    {
      eyebrow: 'How it works',
      title: <>A clear process from <em>start to finish</em></>,
      steps: service.process,
    },
    {
      eyebrow: 'FAQ',
      title: <>Common <em>questions</em></>,
      faqs: service.faqs,
    },
  ];
}

// One block of the story: a heading over paragraphs and any of an "Ideal for" note, rows of
// features, process steps, a checklist of points with a closing line, questions, and a
// callout beside the contact button (`action`). The first block's opening paragraph is set
// larger, as the lead.
function DetailBlock({ section, lead, action }) {
  return (
    <div className="detail-block reveal" id={section.faqs ? 'faq' : undefined}>
      <p className="eyebrow">{section.eyebrow}</p>
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph, index) => (
        <p key={index} className={lead && index === 0 ? 'detail-lead' : undefined}>
          {paragraph}
        </p>
      ))}
      {section.idealFor && (
        <div className="ideal-card">
          <span className="icon-badge icon-badge-gold">
            <Icon name="users" />
          </span>
          <p>
            <strong>Ideal for</strong>
            {section.idealFor}
          </p>
        </div>
      )}
      {section.features && (
        <ul className="feature-rows">
          {section.features.map((feature) => (
            <li key={feature.title}>
              <span className="icon-badge">
                <Icon name={feature.icon} />
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {section.steps && <ProcessSteps steps={section.steps} layout="timeline" />}
      {section.points && (
        <ul className="checklist detail-points">
          {section.points.map((point) => (
            <li key={point.label}>
              <Icon name="check" />
              <span>
                <strong>{point.label}:</strong> {point.text}
              </span>
            </li>
          ))}
        </ul>
      )}
      {section.closing && <p className="detail-closing">{section.closing}</p>}
      {section.faqs && <FaqList faqs={section.faqs} />}
      {section.callout && (
        <div className="detail-callout">
          <p>
            <strong>{section.callout.title}</strong> {section.callout.text}
          </p>
          {action}
        </div>
      )}
    </div>
  );
}
