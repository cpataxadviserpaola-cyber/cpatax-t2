import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { industries } from '../data/industries.js';
import { findService } from '../data/services.js';

// One card per industry, each reachable at /industries#<id> from the header menu.
export default function Industries() {
  usePageMeta(
    'Industries',
    'Accounting, bookkeeping, payroll, and tax services for real estate, healthcare, legal, manufacturing, restaurants, retail, e-commerce, contractors, investment advisers, MWBEs, and marketing agencies.',
  );

  return (
    <>
      <PageHero page="Industries" eyebrow="Industries" title={<>Specialized knowledge <em>for your field</em></>}>
        Every industry has its own numbers, rules, and pressures. Our specialized knowledge has
        helped many professionals thrive, and we're ready to help you too.
      </PageHero>

      <section className="section section-white">
        <div className="container">
          <div className="ind-grid">
            {industries.map((industry) => (
              <article className="ind-card reveal" id={industry.id} key={industry.id}>
                <span className="icon-badge">
                  <Icon name={industry.icon} />
                </span>
                <h2>{industry.title}</h2>
                <p>{industry.text}</p>
                <p className="label">How we help</p>
                <ul className="ind-services">
                  {industry.services.map((id) => (
                    <li key={id}>
                      <Link to={`/services/${id}`}>
                        {findService(id).name}
                        <Icon name="arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<>Don't see <em>your industry?</em></>}
        text="We serve a broad range of business owners and professionals. Tell us about yours and we'll show you how we can help."
      />
    </>
  );
}
