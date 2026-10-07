import { Link } from 'react-router';
import Icon from '../Icon.jsx';
import PageHero from '../PageHero.jsx';
import CtaSection from '../CtaSection.jsx';
import { GuideLink } from './GuideGroups.jsx';
import { guideCategories } from '../../data/guides.js';

// The notice at the end of every guide in the library.
const disclaimer =
  'This Content is for informational purposes only. Nothing contained herein constitutes accounting, tax, financial, investment, legal or other professional advice, and, accordingly, the author and the distributor assume no liability whatsoever in connection with its use. This Content is not an exhaustive explanation of any topic, practice or process. You should seek the advice of a licensed professional before making any accounting, tax, financial, investment or legal decision.';

// Shared layout for a guide's page (one per guide, in the folder of the topic it belongs to):
// the page banner with the guide's opening paragraph, its contents beside the text, and the
// library's disclaimer at the end.
//
// category  id of the guide's category in src/data/guides.js
// topic     address of the topic page it belongs to, which gives the breadcrumb its name
// page      short name for the breadcrumb
// title     the guide's title
// lead      the opening paragraph, shown in the banner
// children  text before the first section
// sections  the guide's sections: id (its anchor), title, and body
// numbered  false when the section titles carry their own numbers ("1. ..."), so the contents
//           list doesn't number them again
export default function GuideArticle({
  category: categoryId,
  topic: topicPath,
  page,
  title,
  lead,
  children,
  sections,
  numbered = true,
}) {
  const category = guideCategories.find((item) => item.id === categoryId);
  const topic = category.groups.flatMap((group) => group.items).find((item) => item.to === topicPath);

  return (
    <>
      <PageHero
        page={page}
        parents={[
          { to: '/resources', label: 'Resources' },
          { to: '/guides', label: 'Guides' },
          { to: `/guides#${category.id}`, label: category.title },
          { to: topic.to, label: topic.title },
        ]}
        eyebrow="Financial guide"
        title={title}
      >
        {lead}
      </PageHero>

      <section className="section section-white">
        <div className="container cat-grid">
          <aside className="cat-aside article-aside reveal">
            <nav aria-label="In this guide">
              <p className="label">In this guide</p>
              <ol className={`article-toc${numbered ? '' : ' is-plain'}`}>
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link to={`#${section.id}`}>{section.title}</Link>
                  </li>
                ))}
              </ol>
            </nav>
            <Link className="link-arrow" to={topic.to}>
              More on {topic.title.toLowerCase()} <Icon name="arrow" />
            </Link>
            <Link className="link-arrow" to="/contact">
              Ask about your situation <Icon name="arrow" />
            </Link>
          </aside>

          <article className="article">
            {children}
            {sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.body}
              </section>
            ))}
            <p className="article-disclaimer">{disclaimer}</p>
          </article>
        </div>
      </section>

      <CtaSection
        soft
        title={<>Want advice for <em>your situation?</em></>}
        text="These guides are a good place to start. Our team can help you apply them to your own taxes and finances, in English or Spanish."
      />
    </>
  );
}

// A tip or note set apart from the text.
export function Callout({ label, children }) {
  return (
    <aside className={`article-callout is-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <p className="label">{label}</p>
      {children}
    </aside>
  );
}

// A table (a worksheet or a comparison). One wider than the screen scrolls sideways inside its
// frame, so `label` names it for keyboard and screen reader users. `wide` keeps a table with
// many columns readable by letting it scroll on small screens instead of squeezing.
export function ArticleTable({ label, wide = false, children }) {
  return (
    <div className={`article-table${wide ? ' is-wide' : ''}`} role="region" aria-label={label} tabIndex={0}>
      <table>{children}</table>
    </div>
  );
}

// A table of figures, such as a worked example: a header row, then rows of a label followed by
// amounts (aligned right), and the totals (`total`, optional) in bold. `numeric={false}` keeps
// values that are words ("65 and 2 months") aligned left.
export function FigureTable({ label, columns, rows, total, wide = false, numeric = true }) {
  const amount = numeric ? 'is-amount' : undefined;
  return (
    <ArticleTable label={label} wide={wide}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th scope="col" className={index ? amount : undefined} key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...rows, ...(total ? [total] : [])].map(([name, ...values]) => (
          <tr className={name === total?.[0] ? 'is-total' : undefined} key={name}>
            <td>{name}</td>
            {values.map((value, index) => (
              <td className={amount} key={columns[index + 1]}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </ArticleTable>
  );
}

// Addresses of agencies and organizations, one card each: its name, its website (`website`,
// such as 'www.example.org', shown as a link), a line about it (`text`), its address lines,
// and a closing remark (`note`).
export function Agencies({ agencies }) {
  return (
    <ul className="article-agencies">
      {agencies.map((agency) => (
        <li key={agency.name}>
          <strong>{agency.name}</strong>
          {agency.website && (
            <a href={`https://${agency.website}`} target="_blank" rel="noopener noreferrer">
              {agency.website}
            </a>
          )}
          {agency.text && <p className="article-agency-text">{agency.text}</p>}
          {agency.lines?.map((line) => (
            <span key={line}>{line}</span>
          ))}
          {agency.note && <p className="article-agency-note">{agency.note}</p>}
        </li>
      ))}
    </ul>
  );
}

// A glossary: each [term, definition] pair, the term in bold with its definition after it.
export function Glossary({ terms }) {
  return (
    <dl className="article-glossary">
      {terms.map(([term, definition]) => (
        <div key={term}>
          <dt>{term}</dt>
          <dd>{definition}</dd>
        </div>
      ))}
    </dl>
  );
}

// A worksheet cell to write in: a dashed line, after a dollar sign for an amount.
export function Blank({ amount = false }) {
  return <td className="article-blank">{amount && '$'}</td>;
}

// A pointer to other guides, with their links (from guide() in src/data/guides.js): `guide`
// for one, `guides` for several.
export function RelatedGuide({ guide, guides = [guide], children }) {
  return (
    <aside className="article-related">
      <p className="label">{guides.length > 1 ? 'Related guides' : 'Related guide'}</p>
      <p>{children}</p>
      <ul className="guide-links">
        {guides.map((item) => (
          <li key={item.title}>
            <GuideLink guide={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
