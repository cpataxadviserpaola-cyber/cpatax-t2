import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { links } from '../data/site.js';

// Source: cpataxadviser.com, "Beyond Taxes | Financial Planning".
const expectations = [
  'Clear and practical guidance',
  'Personalized strategies built around your goals',
  'Less financial stress and more confidence',
  'Support that evolves with your life',
  'A judgment-free space to ask questions and learn',
];

const audiences = [
  { icon: 'briefcase', title: 'Professionals and business owners', text: 'Building long-term wealth alongside a growing career or company.' },
  { icon: 'home', title: 'Families', text: 'Looking for more financial organization and a shared plan.' },
  { icon: 'calendar', title: 'Pre-retirees', text: 'Preparing for the next chapter with confidence.' },
  { icon: 'target', title: 'Individuals', text: 'Wanting more clarity and confidence with money.' },
];

export default function FinancialPlanning() {
  usePageMeta(
    'Financial Planning',
    'Personalized financial guidance beyond tax season through our affiliated firm, Yellow Oak Financial Planning.',
  );

  return (
    <>
      <PageHero
        page="Financial Planning"
        parents={[{ to: '/services', label: 'Services' }]}
        eyebrow="Beyond taxes"
        title={<>Personalized financial guidance <em>beyond tax season</em></>}
        actions={
          <a className="btn btn-primary btn-lg" href={links.financialPlanning} target="_blank" rel="noopener noreferrer">
            Build my financial plan
            <Icon name="external" />
          </a>
        }
      >
        Taxes are one part of your financial picture. Through our affiliated firm, Yellow Oak
        Financial Planning, we help you plan for everything around them.
      </PageHero>

      <section className="section section-white">
        <div className="container split">
          <div className="prose reveal">
            <p className="eyebrow">Yellow Oak Financial Planning</p>
            <h2>
              Tax strategy and long-term planning, <em>working together</em>
            </h2>
            <p>
              Our founder, Paola Martinez, is both a licensed CPA and a CFP® professional. She
              integrates tax strategy with long-term financial planning, helping clients make
              informed, confident decisions.
            </p>
            <p>
              Yellow Oak Financial Planning extends that support beyond tax season, with a plan
              built around your goals that evolves as your life does.
            </p>
            <a className="btn btn-outline" href={links.financialPlanning} target="_blank" rel="noopener noreferrer">
              Visit Yellow Oak Financial Planning
              <Icon name="external" />
            </a>
          </div>

          <div className="expect-card reveal">
            <p className="label">What you can expect</p>
            <ul className="expect-list">
              {expectations.map((item) => (
                <li key={item}>
                  <span className="expect-check">
                    <Icon name="check" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Who it's for" title={<>Planning for <em>every stage</em></>} center />
          <div className="audience-grid reveal">
            {audiences.map((audience) => (
              <article className="audience" key={audience.title}>
                <span className="icon-badge">
                  <Icon name={audience.icon} />
                </span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        soft
        title={<>Start with your taxes, <em>plan for the future</em></>}
        text="Talk with us about how tax planning and financial planning fit together for you."
        to="/contact?service=financial-planning"
      />
    </>
  );
}
