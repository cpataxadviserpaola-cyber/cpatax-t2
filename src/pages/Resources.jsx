import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import FaqSection from '../components/FaqSection.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { links } from '../data/site.js';
import { articles } from '../data/articles.js';
import { faqs } from '../data/faqs.js';
import { asset } from '../utils/asset.js';

const sections = [
  { id: 'blog', label: 'Blog' },
  { id: 'guides', label: 'Guides' },
  { id: 'newsletter', label: 'Newsletter' },
  { id: 'faq', label: 'FAQs' },
];

// Guides already on the site. `href` opens in a new tab; `to` stays on the site.
const guides = [
  {
    icon: 'file',
    title: '2026 pricing guide',
    text: 'Our current fees for individual and business tax preparation, in one PDF.',
    href: asset(links.pricingGuide),
    label: 'Download the PDF',
  },
  {
    icon: 'calendar',
    title: 'Upcoming IRS deadlines',
    text: 'The next federal tax deadlines for calendar-year filers, with a countdown to each.',
    to: '/tax-season#deadlines',
    label: 'See the tax calendar',
  },
  {
    icon: 'laptop',
    title: 'Client portal tutorial',
    text: 'How to log in, upload documents, sign, and message our team in the portal.',
    to: '/tax-season#client-portal',
    label: 'Read the tutorial',
  },
  {
    icon: 'globe',
    title: 'International tax questions',
    text: 'Form 1040-NR, FBAR and FATCA, tax treaties, and filing as an international student.',
    to: '/services/international#faq',
    label: 'Read the answers',
  },
];

const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

// Blog, guides, the newsletter sign-up, and frequently asked questions, in the order of the
// Resources menu.
export default function Resources() {
  usePageMeta(
    'Resources',
    'Articles, guides, the newsletter, and answers to frequently asked questions from CPA Tax Adviser.',
  );

  return (
    <>
      <PageHero page="Resources" eyebrow="Resources" title={<>Guides, insights, <em>and answers</em></>}>
        Practical information to help you stay organized and make informed tax decisions all year,
        not just at tax time.
      </PageHero>

      <nav className="cat-nav" aria-label="Resources">
        <div className="container">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <Link to={`#${section.id}`}>{section.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section section-white" id="blog">
        <div className="container">
          <SectionHead eyebrow="Blog" title={<>Insights from <em>our team</em></>}>
            Tax planning ideas, deadline reminders, and small business finance, in plain language.
          </SectionHead>
          {articles.length > 0 ? (
            <div className="tool-grid reveal">
              {articles.map((article) => (
                <a className="tool-card" key={article.title} href={article.href} target="_blank" rel="noopener noreferrer">
                  <time className="label" dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <span className="tool-link">Read the article</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="empty-note reveal">
              <span className="icon-badge icon-badge-gold">
                <Icon name="newspaper" />
              </span>
              <p>
                <strong>Our first articles are on the way.</strong> Subscribe to the newsletter to
                hear when they're published.
              </p>
              <Link className="btn btn-outline" to="#newsletter">
                Subscribe
                <Icon name="arrow" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="section" id="guides">
        <div className="container">
          <SectionHead eyebrow="Guides" title={<>Helpful guides <em>and how-tos</em></>}>
            Quick references for working with us and staying on top of your taxes.
          </SectionHead>
          <div className="tool-grid reveal">
            {guides.map((guide) => {
              const content = (
                <>
                  <span className="tool-top">
                    <span className="icon-badge">
                      <Icon name={guide.icon} />
                    </span>
                    <span className="svc-card-go">
                      <Icon name={guide.href ? 'arrow-up-right' : 'arrow'} />
                    </span>
                  </span>
                  <h3>{guide.title}</h3>
                  <p>{guide.text}</p>
                  <span className="tool-link">{guide.label}</span>
                </>
              );
              return guide.href ? (
                <a className="tool-card" key={guide.title} href={guide.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <Link className="tool-card" key={guide.title} to={guide.to}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-white" id="newsletter">
        <div className="container">
          <div className="newsletter surface-dark reveal">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2>
                Tax tips, <em>in your inbox</em>
              </h2>
              <p>
                Deadline reminders, tax planning ideas, and news from our firm, sent to your inbox
                when there's something worth knowing.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <FaqSection
        title={<>Frequently asked <em>questions</em></>}
        lead="Answers to what new clients ask us most."
        faqs={faqs}
      />

      <CtaSection
        soft
        title={<>Have a question we <em>didn't answer?</em></>}
        text="Our team is happy to help, in English or Spanish."
      />
    </>
  );
}
