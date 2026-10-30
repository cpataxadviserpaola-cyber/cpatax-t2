import PageHero from '../components/PageHero.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { portalSteps } from '../data/process.js';
import { links } from '../data/site.js';
import Icon from '../components/Icon.jsx';

export default function ClientPortalTutorial() {
  return (
    <>
      <PageHero
        page="Client Portal Tutorial"
        parents={[{ to: '/tax-season', label: 'Tax Season' }]}
        eyebrow="Client portal tutorial"
        title={<>Getting around <em>the portal</em></>}
      >
        Our secure client portal keeps your documents, signatures, and messages in one place.
      </PageHero>
      <section className="section section-white">
        <div className="container">
          <ProcessSteps steps={portalSteps} />
          <p className="section-action reveal">
            <a className="btn btn-primary btn-lg" href={links.portal} target="_blank" rel="noopener noreferrer">
              <Icon name="lock" />
              Log in to the client portal
            </a>
          </p>
        </div>
      </section>
      <CtaSection title={<>Questions about the <em>portal?</em></>} text="Contact our team for help accessing your account." />
    </>
  );
}
