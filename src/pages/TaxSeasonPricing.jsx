import PageHero from '../components/PageHero.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { TaxSeasonPricingContent } from '../components/TaxSeasonSections.jsx';

export default function TaxSeasonPricing() {
  return (
    <div className="pricing-page">
      <PageHero
        page="Pricing"
        parents={[{ to: '/tax-season', label: 'Tax Season' }]}
        eyebrow="Clear, transparent pricing"
        title={<>Tax preparation <em>pricing</em></>}
      >
        Our fees reflect how organized your financial information is and the complexity of your tax
        situation. Review our pricing guide and learn what can affect the cost of preparation.
      </PageHero>
      <section className="section section-white">
        <div className="container">
          <TaxSeasonPricingContent />
        </div>
      </section>
      <CtaSection title={<>Questions about <em>pricing?</em></>} text="Contact us to discuss your situation and the services you need." />
    </div>
  );
}
