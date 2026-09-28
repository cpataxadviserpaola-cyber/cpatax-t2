import { Link } from 'react-router';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { site } from '../data/site.js';

// Expandable questions and answers.
export function FaqList({ faqs }) {
  return (
    <div className="faq">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>
            <span className="faq-q">{faq.question}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-body">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

// Centered FAQ section, closing with a strip for anything the list doesn't answer.
export default function FaqSection({ title, lead, faqs, contactLink = '/contact', soft = false }) {
  return (
    <section className={`section${soft ? ' section-white' : ''}`} id="faq">
      <div className="container faq-wrap">
        <SectionHead eyebrow="FAQ" title={title} center>
          {lead}
        </SectionHead>
        <div className="reveal">
          <FaqList faqs={faqs} />
        </div>
        <div className="faq-help reveal">
          <span className="icon-badge icon-badge-gold">
            <Icon name="chat" />
          </span>
          <p>
            <strong>Still have a question?</strong> Our team is happy to help, in English or Spanish.
          </p>
          <div className="faq-help-actions">
            <a className="btn btn-outline" href={site.phone.href}>
              <Icon name="phone" />
              {site.phone.display}
            </a>
            <Link className="btn btn-primary" to={contactLink}>
              Send a message
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
