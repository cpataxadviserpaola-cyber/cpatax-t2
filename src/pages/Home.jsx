import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import HomeHero from '../components/HomeHero.jsx';
import ServicesDirectory from '../components/ServicesDirectory.jsx';
import WhyUs from '../components/WhyUs.jsx';
import OpportunityFinder from '../components/OpportunityFinder.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import FaqSection from '../components/FaqSection.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { site } from '../data/site.js';
import { workSteps } from '../data/process.js';
import { faqs } from '../data/faqs.js';

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
    text: 'Our firm provides outstanding service to our clients because of our dedication to our underlying principles.',
    link: { to: '/services', label: 'Our services' },
  },
  {
    icon: 'users',
    title: 'Who we serve',
    text: 'A broad range of services for business owners, executives, and independent professionals.',
    link: { to: '/industries', label: 'Industries we serve' },
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="section section-white">
        <div className="container">
          {/* The firm's welcome, then the pillars under it. */}
          <div className="welcome reveal">
            <div>
              <h2>
                Welcome to <em>CPA Tax Adviser!</em>
              </h2>
              <p className="welcome-creds">
                <span>South Carolina Licensed CPA Firm</span>
                <span>Serving Clients Nationwide</span>
              </p>
              <p className="welcome-slogan">{site.slogan}</p>
            </div>
            <div>
              <p className="lead">
                Helping business owners, professionals, and individuals simplify complex tax
                matters and make informed financial decisions.
              </p>
              <p>
                At CPA Tax Adviser, we help business owners, professionals, and individuals make
                informed tax decisions through practical advice, personalized strategies, and
                year-round guidance. Whether you&rsquo;re running a business, managing investments,
                or navigating international tax matters, we&rsquo;re committed to making the
                process clear, straightforward, and helping you plan ahead.
              </p>
            </div>
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

      <WhyUs showCards={false} />

      <OpportunityFinder />

      <section className="section section-white">
        <div className="container">
          <SectionHead eyebrow="How it works" title={<>Getting started is <em>simple</em></>} center>
            A simple procedure that will offer you peace of mind and save you time.
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
        compact
        soft
        title={<>Ready to become more organized and <em>confident?</em></>}
        text="Let's talk about your business, your taxes, and the plan that gets you where you want to be."
      />
    </>
  );
}
