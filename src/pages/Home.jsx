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
import { industries } from '../data/services.js';
import { team } from '../data/team.js';
import { asset } from '../utils/asset.js';

const founder = team.find((person) => person.featured);

// "Who we are / What we do / Who we serve" from the firm's homepage.
const pillars = [
  {
    icon: 'building',
    title: 'Who we are',
    text: 'A full-service CPA firm licensed in South Carolina. We are affordable, experienced, and friendly.',
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
    link: { to: '/contact', label: 'Get in touch' },
  },
];

const steps = [
  { icon: 'calendar', title: 'Schedule a consultation', text: 'Book a time online or call us to talk through your situation, goals, and deadlines.' },
  { icon: 'lock', title: 'Share your documents', text: 'Upload tax forms and records through our secure client portal. No printing or scanning required.' },
  { icon: 'file-check', title: 'We prepare & review', text: 'Our team prepares your return or financials and reviews them carefully for accuracy and savings.' },
  { icon: 'trend', title: 'File & plan ahead', text: 'We file electronically and help you plan strategies for the year ahead.' },
];

const faqs = [
  {
    question: 'Are you accepting new clients?',
    answer: 'We are currently focused on serving small business owners with sole proprietorships, LLCs, partnerships, or corporations. We are not onboarding new individual clients at this time, but you are welcome to contact us to join our waiting list.',
  },
  {
    question: 'Do you work with clients outside South Carolina?',
    answer: 'Yes. We are a South Carolina licensed CPA firm based in Simpsonville, and we serve clients nationwide.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'The cost depends mainly on how organized your financial information is and how complex your tax situation is. The more organized your documents, the less time preparation takes, which saves you money. For small businesses we offer tailored accounting and tax bundles. You can find our current pricing guide in the Client Center.',
  },
  {
    question: 'Do you offer services in Spanish?',
    answer: 'Yes. We proudly serve clients in both English and Spanish.',
  },
  {
    question: 'How do I send you my documents?',
    answer: 'Clients use our secure client portal to upload documents, sign forms electronically, and message our team. You can log in from the Client Center or the link at the top of every page.',
  },
  {
    question: 'How can I pay my invoice?',
    answer: 'You can pay online through our secure payment page. Use the "Pay my fee" link at the top of any page or in the Client Center.',
  },
  {
    question: 'Do you help clients with international tax matters?',
    answer: 'Yes. We help nonresidents, expatriates, international students, and foreign investors with Form 1040-NR, FBAR and FATCA reporting, tax treaty benefits, and Form 8843.',
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
              <span className="intro-avatar face-crop">
                <img src={asset(founder.photo)} alt="" />
              </span>
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
          <ProcessSteps steps={steps} />
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
