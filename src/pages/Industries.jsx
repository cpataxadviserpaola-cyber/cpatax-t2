import { Link, useLocation } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaSection from '../components/CtaSection.jsx';
import IndustryCard from '../components/Industries/IndustryCard.jsx';
import { industries } from '../data/industries.js';

// One card per industry, without a link to the industry's own page. The footer links to each
// card at /industries#<id>; the page scrolls to it (ScrollManager) and the card is
// highlighted.
export default function Industries() {
  const { hash } = useLocation();
  const targetId = decodeURIComponent(hash.slice(1));

  return (
    <>
      <PageHero
        page="Industries"
        eyebrow="Industries"
        title={<>Accounting and Tax Services <em>for the Companies Listed Below</em></>}
        actions={
          <Link className="btn btn-primary btn-lg" to="/contact">
            Book a Consultation
            <Icon name="arrow" />
          </Link>
        }
      >
        Get reliable bookkeeping, accounting, financial reporting, and tax support to keep your
        business finances organized.
      </PageHero>

      <section className="section section-white">
        <div className="container">
          <SectionHead
            eyebrow="Our Industries"
            title={<>Accounting and Tax Solutions <em>for All Different Industries</em></>}
          />
          <div className="ind-grid">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.id}
                id={industry.id}
                industry={industry}
                highlighted={industry.id === targetId}
                readMore={false}
              />
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
