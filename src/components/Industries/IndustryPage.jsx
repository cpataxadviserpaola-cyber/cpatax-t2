import { Link, Navigate, useLocation } from 'react-router';
import Icon from '../Icon.jsx';
import PageHero from '../PageHero.jsx';
import SectionHead from '../SectionHead.jsx';
import DetailBlock from '../DetailBlock.jsx';
import CtaSection from '../CtaSection.jsx';
import IndustryCard from './IndustryCard.jsx';
import useStickyFit from '../../hooks/useStickyFit.js';
import { findService, servicePath } from '../../data/services.js';
import { findIndustry, industries, industryPath } from '../../data/industries.js';

// Layout shared by the industry pages in this folder: the brief's banner, then its blocks down
// the page beside a card linking to the services the industry uses, three other industries,
// and the closing call to action. The page lives at industryPath(industry); its address
// without the closing slash forwards there.
//
// id        the industry's id in src/data/industries.js
// banner    { title, text } at the top of the page
// sections  the page's blocks, in the brief's order (see src/components/DetailBlock.jsx)
export default function IndustryPage({ id, banner, sections }) {
  const { pathname, search, hash } = useLocation();
  const asideRef = useStickyFit();
  const industry = findIndustry(id);
  if (pathname !== industryPath(industry)) {
    return <Navigate to={{ pathname: industryPath(industry), search, hash }} replace />;
  }

  const services = industry.services.map(findService).filter(Boolean);
  // The next three industries after this one, starting over from the top of the list.
  const index = industries.indexOf(industry);
  const others = [...industries.slice(index + 1), ...industries.slice(0, index)].slice(0, 3);

  const consultation = (
    <Link className="btn btn-primary" to="/contact">
      Get a Free Consultation
      <Icon name="arrow" />
    </Link>
  );

  return (
    <>
      <PageHero
        page={industry.title}
        parents={[{ to: '/industries', label: 'Industries' }]}
        eyebrow="Industries"
        title={banner.title}
        actions={
          <>
            <Link className="btn btn-primary btn-lg" to="/contact">
              Get a Free Consultation
              <Icon name="arrow" />
            </Link>
            <Link className="btn btn-outline btn-lg" to="/services">
              Explore Our Services
              <Icon name="arrow" />
            </Link>
          </>
        }
      >
        {banner.text}
      </PageHero>

      <section className="section section-white">
        <div className="container detail">
          <div className="detail-main">
            {sections.map((section, sectionIndex) => (
              <DetailBlock key={sectionIndex} section={section} lead={sectionIndex === 0} action={consultation} />
            ))}
          </div>

          <aside className="detail-aside" ref={asideRef}>
            <div className="included-card surface-dark">
              <span className="icon-badge included-icon">
                <Icon name={industry.icon} />
              </span>
              <h2 className="included-title">Our services</h2>
              <ul className="included-links">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link to={servicePath(service)}>
                      {service.name}
                      <Icon name="arrow" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link className="btn btn-gold btn-block" to="/contact">
                Get a Free Consultation
                <Icon name="arrow" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHead eyebrow="Industries" title={<>Other industries <em>we serve</em></>} />
            <Link className="btn btn-outline" to="/industries">
              All industries
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="ind-grid">
            {others.map((item) => (
              <IndustryCard key={item.id} industry={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        soft
        title={<>Ready to <em>get started?</em></>}
        text="Book a free, no-obligation consultation and find out how we can help."
      />
    </>
  );
}
