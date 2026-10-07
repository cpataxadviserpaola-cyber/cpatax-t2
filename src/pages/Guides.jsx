import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import GuideGroups from '../components/Guides/GuideGroups.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { guideCategories } from '../data/guides.js';

// The guide library, one section per category (src/data/guides.js), each reachable at
// /guides#<id>. Topics with a page on this site open it; the rest open in a new tab.
export default function Guides() {
  return (
    <>
      <PageHero
        page="Guides"
        parents={[{ to: '/resources', label: 'Resources' }]}
        eyebrow="Guides"
        title={<>Practical, unbiased <em>financial guides</em></>}
      >
        Choose any of the categories below to find practical, unbiased information to help you
        reach your financial goals.
      </PageHero>

      <nav className="cat-nav" aria-label="Guide categories">
        <div className="container">
          <ul>
            {guideCategories.map((category) => (
              <li key={category.id}>
                <Link to={`#${category.id}`}>{category.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {guideCategories.map((category, index) => (
        <section
          className={`section cat-section${index % 2 === 0 ? ' section-white' : ''}`}
          id={category.id}
          key={category.id}
        >
          <div className="container cat-grid">
            <div className="cat-aside reveal">
              <p className="eyebrow">{category.eyebrow}</p>
              <h2>{category.title}</h2>
              <p>{category.text}</p>
              <Link className="link-arrow" to="/contact">
                Ask about your situation <Icon name="arrow" />
              </Link>
            </div>
            <GuideGroups groups={category.groups} />
          </div>
        </section>
      ))}

      <CtaSection
        soft
        title={<>Want advice for <em>your situation?</em></>}
        text="These guides are a good place to start. Our team can help you apply them to your own taxes and finances, in English or Spanish."
      />
    </>
  );
}
