import PageHero from '../components/PageHero.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { TaxSeasonProcessContent } from '../components/TaxSeasonSections.jsx';

export default function TaxSeasonProcess() {
  return (
    <>
      <PageHero
        page="Our Tax Season Process"
        parents={[{ to: '/tax-season', label: 'Tax Season' }]}
        eyebrow="Our tax season process"
        title={<>From documents to <em>filed return</em></>}
      >
        A clear, secure process that keeps you informed at every step, from submitting your
        documents to your e-filed return.
      </PageHero>
      <section className="section section-white">
        <div className="container tax-process-content">
          <div className="tax-process-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/nWfKgLxLvJ0"
              title="CPA Tax Adviser Tax Season Process"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <TaxSeasonProcessContent />
        </div>
      </section>
      <CtaSection title={<>Ready to get <em>started?</em></>} text="Our team can help you take the next step." />
    </>
  );
}
