import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaSection from '../components/CtaSection.jsx';
import WhyUs from '../components/WhyUs.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import { commitments, site } from '../data/site.js';
import { workSteps } from '../data/process.js';

export default function About() {
  return (
    <>
      <PageHero
        page="About"
        eyebrow="About us"
        title={
          <>
            Trusted expertise.
            <br />
            Personal attention.
            <br />
            <em>Business-focused solutions.</em>
          </>
        }
        actions={
          <Link className="btn btn-primary btn-lg" to="#story">
            Learn more
            <Icon name="arrow" />
          </Link>
        }
      >
        We’re a dedicated team committed to providing reliable tax, accounting, and financial
        solutions that help individuals and businesses stay organized, compliant, and prepared for
        what’s ahead.
      </PageHero>

      <section className="section section-white" id="story">
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

      <WhyUs id="why-choose" />

      <section className="section section-white" id="how-we-work">
        <div className="container">
          <SectionHead eyebrow="How we work" title={<>Getting started is <em>simple</em></>} center>
            A straightforward process designed to save you time and give you peace of mind, with
            year-round guidance once we're working together.
          </SectionHead>
          <ProcessSteps steps={workSteps} />
        </div>
      </section>

      <CtaSection
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
