import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import HomeHero from '../components/HomeHero.jsx';
import ServicesDirectory from '../components/ServicesDirectory.jsx';
import WhyUs from '../components/WhyUs.jsx';
import Comparison from '../components/Comparison.jsx';
import OpportunityFinder from '../components/OpportunityFinder.jsx';
import TeamSection from '../components/TeamSection.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import FaqSection from '../components/FaqSection.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../data/site.js';
import { industries } from '../data/industries.js';
import { workSteps } from '../data/process.js';
import { faqs } from '../data/faqs.js';
import { team } from '../data/team.js';
import { asset } from '../utils/asset.js';

const founder = team.find((person) => person.featured);

// "Who we are / What we do / Who we serve" from the firm's homepage.
const pillars = [
  {
    icon: 'building',
    title: 'Who we are',
    text: 'A full-service CPA firm licensed in South Carolina. We are experienced and friendly.',
    link: { to: '/about', label: 'About our firm' },
  },
  {
    icon: 'briefcase',
    title: 'What we do',
    text: 'Outstanding service built on three principles: professionalism, responsiveness, and quality.',
    link: { to: '/services', label: 'Our services' },
  },
  {
    icon: 'users',
    title: 'Who we serve',
    text: 'A broad range of services for business owners, executives, and independent professionals.',
    tags: industries.map((industry) => industry.title),
    link: { to: '/industries', label: 'Industries we serve' },
  },
];

export default function Home() {
  usePageMeta(
    null,
    'CPA Tax Adviser is a South Carolina licensed CPA firm in Simpsonville, SC, providing business tax preparation, tax planning, accounting, bookkeeping, payroll, QuickBooks, and international tax services nationwide, in English and Spanish.',
  );

  return (
    <>
      <HomeHero />

      <section className="section section-white">
        <div className="container intro">
          <div className="intro-lead reveal">
            <p className="eyebrow">Our mission</p>
            <p className="intro-mission">{site.mission}</p>
            <p className="intro-sign">
              <img className="intro-avatar" src={asset(founder.avatar ?? founder.photo)} alt="" />
              <span>
                <small>Founded by</small>
                {founder.name}, {founder.credentials}
              </span>
            </p>
          </div>

          <div className="intro-pillars reveal">
            {pillars.map((pillar) => (
              <div className="pillar" key={pillar.title}>
                <span className="icon-badge">
                  <Icon name={pillar.icon} />
                </span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  {pillar.tags && (
                    <ul className="tags" aria-label="Industries we serve">
                      {pillar.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                  <Link className="link-arrow" to={pillar.link.to}>
                    {pillar.link.label} <Icon name="arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesDirectory />

      <WhyUs />

      <Comparison />

      <OpportunityFinder />

      <TeamSection showAboutLink />

      <section className="section section-white">
        <div className="container">
          <SectionHead eyebrow="How it works" title={<>Getting started is <em>simple</em></>} center>
            A straightforward process designed to save you time and give you peace of mind.
          </SectionHead>
          <ProcessSteps steps={workSteps} />
        </div>
      </section>

      <FaqSection
        title={<>Frequently asked <em>questions</em></>}
        lead="Answers to what new clients ask us most."
        faqs={faqs}
      />

      <CtaSection
        soft
        title={<>Ready to become more organized and <em>confident?</em></>}
        text="Let's talk about your business, your taxes, and the plan that gets you where you want to be."
      />
    </>
  );
}
