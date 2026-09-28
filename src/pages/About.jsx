import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaSection from '../components/CtaSection.jsx';
import TeamSection from '../components/TeamSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { commitments, site } from '../data/site.js';

// The firm's three underlying principles (source: cpataxadviser.com, Our Values).
const values = [
  {
    icon: 'award',
    title: 'Professionalism',
    text: 'By combining our expertise, experience, and the energy of our staff, each client receives close personal and professional attention. Our specialized staff and high standards set us apart.',
  },
  {
    icon: 'clock',
    title: 'Responsiveness',
    text: 'Companies who choose our firm rely on competent advice and fast, accurate personnel. Our growth comes from client referrals and the respect we have earned in the financial community.',
  },
  {
    icon: 'target',
    title: 'Quality',
    text: "An accounting firm is known for the quality of its service. Our reputation reflects the high standards we demand of ourselves, supported by continuing professional education.",
  },
];

export default function About() {
  usePageMeta(
    'About Us',
    `Learn about ${site.name}, a South Carolina Minority/Women-Owned Business Enterprise founded by Paola Martinez, CPA, CFP®, and meet our team.`,
  );

  return (
    <>
      <PageHero page="About" eyebrow="About us" title={<>A trusted partner in your <em>financial journey</em></>}>
        We'd like to give you an opportunity to get to know our staff and our firm's values before
        you come to see us.
      </PageHero>

      <section className="section section-white">
        <div className="container story">
          <div className="story-copy reveal">
            <p className="eyebrow">Our story</p>
            <h2>
              Where tax strategy meets <em>real business understanding</em>
            </h2>
            <p className="story-lead">
              {site.name} was founded by Paola Martinez, CPA, CFP<sup className="reg">®</sup>, and is a South
              Carolina Minority/Women-Owned Business Enterprise (MWBE). We help business owners,
              professionals, and individuals make informed tax decisions through practical advice,
              personalized strategies, and year-round guidance.
            </p>
            <p>
              Originally from Colombia, Paola moved to the United States in 2008 and graduated with
              honors. She became a licensed CPA in 2022 and also holds the CFP® certification. With
              degrees in business management, engineering, and accountancy, she understands not only
              the numbers but how a business truly operates, and she serves clients in both English
              and Spanish.
            </p>
            <p>
              Whether you're running a business, managing investments, or navigating international
              tax matters, we're committed to making the process clear and straightforward, and to
              helping you plan ahead.
            </p>
          </div>

          <dl className="story-facts reveal">
            {commitments.map((item) => (
              <div className="fact" key={item.short}>
                <dd>
                  {item.value}
                  {item.unit && <small>{item.unit}</small>}
                </dd>
                <dt>{item.label}</dt>
              </div>
            ))}
            <div className="fact fact-dark">
              <dd>MWBE</dd>
              <dt>South Carolina Minority/Women-Owned Business Enterprise</dt>
            </div>
          </dl>
        </div>
      </section>

      <section className="section mission">
        <div className="container">
          <figure className="mission-quote reveal">
            <span className="mission-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              <p>{site.mission}</p>
            </blockquote>
            <figcaption>
              <strong>Our mission</strong>
              {site.name}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHead eyebrow="Our values" title={<>Three principles behind <em>outstanding service</em></>} center>
            Our firm provides outstanding service to our clients because of our dedication to
            professionalism, responsiveness, and quality.
          </SectionHead>
          <div className="values reveal">
            {values.map((value) => (
              <article className="value" key={value.title}>
                <span className="icon-badge">
                  <Icon name={value.icon} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <CtaSection
        soft
        title={<>Let's work <em>together</em></>}
        text="Find out how a trusted advisor can help you become more organized, efficient, and confident in your financial direction."
        secondary={
          <Link className="btn btn-ghost-light btn-lg" to="/services">
            Our services
            <Icon name="arrow" />
          </Link>
        }
      />
    </>
  );
}
