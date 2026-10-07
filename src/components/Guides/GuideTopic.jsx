import { Link, useLocation } from 'react-router';
import Icon from '../Icon.jsx';
import PageHero from '../PageHero.jsx';
import SectionHead from '../SectionHead.jsx';
import CtaSection from '../CtaSection.jsx';
import GuideGroups from './GuideGroups.jsx';
import { guideCategories } from '../../data/guides.js';

// Shared layout for a topic's page (one per topic, in a folder for its category): the page
// banner with the topic's introduction, its guides, then the other topics in its category.
//
// category  id of the topic's category in src/data/guides.js
// title     the topic's name
// groups    the topic's guides, FAQs, and calculators, each list under its label
// children  the topic's introduction
export default function GuideTopic({ category: categoryId, title, groups, children }) {
  const { pathname } = useLocation();
  const category = guideCategories.find((item) => item.id === categoryId);
  const others = category.groups.flatMap((group) => group.items).filter((item) => item.to !== pathname);

  return (
    <>
      <PageHero
        page={title}
        parents={[
          { to: '/resources', label: 'Resources' },
          { to: '/guides', label: 'Guides' },
          { to: `/guides#${category.id}`, label: category.title },
        ]}
        eyebrow={category.title}
        title={title}
      >
        {children}
      </PageHero>

      <section className="section section-white">
        <div className="container cat-grid">
          <div className="cat-aside reveal">
            <p className="eyebrow">{title}</p>
            <h2>
              Guides for <em>this topic</em>
            </h2>
            <p>Practical, unbiased information to help you reach your financial goals.</p>
            <Link className="link-arrow" to="/contact">
              Ask about your situation <Icon name="arrow" />
            </Link>
          </div>
          <GuideGroups groups={groups} />
        </div>
      </section>

      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow={category.title} title={<>More <em>topics</em></>}>
              {category.text}
            </SectionHead>
            <GuideGroups groups={[{ items: others }]} wide />
            <p className="section-action reveal">
              <Link className="btn btn-outline" to="/guides">
                All guides
                <Icon name="arrow" />
              </Link>
            </p>
          </div>
        </section>
      )}

      <CtaSection
        soft
        title={<>Want advice for <em>your situation?</em></>}
        text="These guides are a good place to start. Our team can help you apply them to your own taxes and finances, in English or Spanish."
      />
    </>
  );
}
