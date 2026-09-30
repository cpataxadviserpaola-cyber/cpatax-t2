import Icon from './Icon.jsx';
import PageHero from './PageHero.jsx';
import { site } from '../data/site.js';

// Shared layout for the privacy policy and disclaimer: the page banner, the text in a
// readable column, and the firm's contact details for questions.
export default function LegalPage({ page, title, lead, question, children }) {
  return (
    <>
      <PageHero page={page} eyebrow="Legal" title={title}>
        {lead}
      </PageHero>

      <section className="section section-tight">
        <div className="container">
          <div className="legal">
            {children}

            <aside className="legal-contact" aria-label="Contact us">
              <p>{question}</p>
              <ul>
                <li>
                  <Icon name="pin" />
                  {site.name}, {site.address[0]}, {site.address[1]}
                </li>
                <li>
                  <Icon name="phone" />
                  <a href={site.phone.href}>{site.phone.display}</a>
                </li>
                <li>
                  <Icon name="mail" />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
