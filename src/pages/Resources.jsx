import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { calculatorCategories, calculatorUrl } from '../data/calculators.js';
import { linkCategories } from '../data/internetLinks.jsx';

// Source: cpataxadviser.com/resources.php and the two pages it leads to, word for word: Financial
// Calculators (calc-section.php, src/data/calculators.js) and Internet Links (links.php,
// src/data/internetLinks.jsx). Each is a section here, opening with its page's introduction;
// resources.php's captions are shorter versions of the same two lines. The library shows one
// category at a time; here each category is on the page, listed in the section's side column.
// Of the calculators, only the categories rebuilt on this site are shown (`shownCategories`);
// the others stay in calculators.js, left off the page. A calculator rebuilt on this site (with
// a `to` in calculators.js) opens here; any other opens on calcxml.com. The page banner's text
// is written for this site.

const shownCategories = ['paycheck-benefits', 'taxation'];

const sections = [
  {
    id: 'financial-calculators',
    icon: 'chart',
    title: 'Financial Calculators',
    intro:
      "Please try our wide variety of interactive financial problem solvers. Simply enter your criteria and you'll get your questions answered with dynamic graphs and personalized reports.",
    categories: calculatorCategories
      .filter((category) => shownCategories.includes(category.id))
      .map((category) => ({
        id: category.id,
        title: category.title,
        items: category.calculators.map((calculator) => ({
          title: calculator.title,
          to: calculator.to,
          url: calculator.url ?? calculatorUrl(calculator.id),
          text: calculator.text,
        })),
      })),
  },
  {
    id: 'internet-links',
    icon: 'globe',
    title: 'Internet Links',
    intro:
      "Finding what you're looking for on the internet can be quite a daunting task. We've made it a little easier by selecting a few of our favorite sites.",
    categories: linkCategories.map((category) => ({
      id: category.id,
      title: category.title,
      items: category.links,
    })),
  },
];

export default function Resources() {
  return (
    <>
      <PageHero page="Resources" eyebrow="Resources" title={<>Tools <em>and links</em></>}>
        Interactive financial calculators and a few of our favorite websites, in one place.
      </PageHero>

      <nav className="cat-nav" aria-label="Resources">
        <div className="container">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <Link to={`#${section.id}`}>
                  <Icon name={section.icon} />
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {sections.map((section, index) => (
        <section
          className={`section cat-section${index % 2 === 0 ? ' section-white' : ''}`}
          id={section.id}
          key={section.id}
        >
          <div className="container cat-grid">
            <aside className="cat-aside article-aside reveal">
              <p className="eyebrow">Resources</p>
              <h2>{section.title}</h2>
              <p>{section.intro}</p>
              <nav aria-label={`${section.title} categories`}>
                <p className="label">Categories</p>
                <ol className="article-toc is-plain">
                  {section.categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`#${category.id}`}>{category.title}</Link>
                    </li>
                  ))}
                </ol>
              </nav>
              {section.note && <p className="resource-note">{section.note}</p>}
            </aside>

            <div className="article resource-list">
              {section.categories.map((category) => (
                <section id={category.id} key={category.id}>
                  <h3>{category.title}</h3>
                  <ul className="article-agencies">
                    {category.items.map((item) => (
                      <li key={item.title}>
                        <strong>
                          {item.to ? (
                            <Link to={item.to}>{item.title}</Link>
                          ) : (
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              {item.title}
                            </a>
                          )}
                        </strong>
                        <p className="article-agency-text">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaSection
        soft
        title={<>Have a question we <em>didn't answer?</em></>}
        text="Our team is happy to help, in English or Spanish."
      />
    </>
  );
}
