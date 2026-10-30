import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { TaxToolboxContent } from '../components/TaxSeasonSections.jsx';

export default function TaxToolbox() {
  return (
    <>
      <PageHero
        page="Tax Tool Box"
        parents={[{ to: '/tax-season', label: 'Tax Season' }]}
        eyebrow="Tax tool box"
        title={<>Helpful tools, <em>all in one place</em></>}
      >
        Quickly access client services and IRS tools for payments, refund tracking, and tax
        withholding.
      </PageHero>
      <section className="section section-white">
        <div className="container">
          <SectionHead eyebrow="Online tools" title={<>Choose a <em>tool</em></>} center>
            Each link opens the relevant secure client service or official IRS website in a new tab.
          </SectionHead>
          <TaxToolboxContent />
        </div>
      </section>
      <CtaSection title={<>Need a hand with <em>tax season?</em></>} text="Our team is happy to help." />
    </>
  );
}
