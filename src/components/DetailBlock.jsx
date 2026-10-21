import { Link } from 'react-router';
import Icon from './Icon.jsx';
import ProcessSteps from './ProcessSteps.jsx';
import { FaqList } from './FaqSection.jsx';
import { site } from '../data/site.js';

// One block of the story down a service or industry page: a heading over paragraphs and any
// of an "Ideal for" note, rows of features, process steps, a checklist of points with a
// closing line, questions, and a callout ({ title, text }) beside the contact button
// (`action`), which reads the callout's own `action` when it has one, or else the page's
// own label. A block can instead list its `content` in the order the firm wrote it (see
// ContentItem), with an optional `note` in small print above its heading and an `id` to
// link to. The first block's opening paragraph is set larger, as the lead.
export default function DetailBlock({ section, lead, action }) {
  const leadIndex = lead ? section.content?.findIndex((item) => typeof item === 'string') : -1;

  return (
    <div className="detail-block reveal" id={section.id ?? (section.faqs ? 'faq' : undefined)}>
      {section.note && <p className="detail-note">{section.note}</p>}
      {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
      {section.title && <h2>{section.title}</h2>}
      {section.content?.map((item, index) => (
        <ContentItem key={index} item={item} lead={index === leadIndex} action={action} />
      ))}
      {section.paragraphs?.map((paragraph, index) => (
        <p key={index} className={lead && index === 0 ? 'detail-lead' : undefined}>
          {paragraph}
        </p>
      ))}
      {section.idealFor && (
        <div className="ideal-card">
          <span className="icon-badge icon-badge-gold">
            <Icon name="users" />
          </span>
          <p>
            <strong>Ideal for</strong>
            {section.idealFor}
          </p>
        </div>
      )}
      {section.features && (
        <ul className="feature-rows">
          {section.features.map((feature) => (
            <li key={feature.title}>
              <span className="icon-badge">
                <Icon name={feature.icon} />
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {section.steps && <ProcessSteps steps={section.steps} layout="timeline" />}
      {section.points && (
        <ul className="checklist detail-points">
          {section.points.map((point) => (
            <li key={point.label}>
              <Icon name="check" />
              <span>
                <strong>{point.label}:</strong> {point.text}
              </span>
            </li>
          ))}
        </ul>
      )}
      {section.closing && <p className="detail-closing">{section.closing}</p>}
      {section.faqs && <FaqList faqs={section.faqs} />}
      {section.callout && (
        <div className="detail-callout">
          <p>
            <strong>{section.callout.title}</strong> {section.callout.text}
          </p>
          {action}
        </div>
      )}
    </div>
  );
}

// One item of a block's `content`: a paragraph (a string, where **double asterisks** mark
// bold words), or a { heading }, a bulleted { list } (with an optional `icon`), a
// { numbered } list, { cards } that can link to other blocks (`to: '#id'`), or a bold
// { callout } beside the contact button (or the phone number, with `phone: true`).
function ContentItem({ item, lead, action }) {
  if (typeof item === 'string') {
    return (
      <p className={lead ? 'detail-lead' : undefined}>
        <Rich text={item} />
      </p>
    );
  }
  if (item.heading) return <h3 className="detail-subhead">{item.heading}</h3>;
  if (item.list) {
    return (
      <ul className="checklist detail-list">
        {item.list.map((entry) => (
          <li key={entry}>
            <Icon name={item.icon ?? 'check'} />
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (item.numbered) {
    return (
      <ol className="detail-numbered">
        {item.numbered.map((entry) => (
          <li key={entry}>{entry}</li>
        ))}
      </ol>
    );
  }
  if (item.cards) {
    return (
      <ul className="detail-cards">
        {item.cards.map((card) => {
          const body = (
            <>
              <h3 className="detail-card-title">{card.title}</h3>
              <p>{card.text}</p>
            </>
          );
          return (
            <li key={card.title}>
              {card.to ? (
                <Link className="detail-card is-link" to={card.to}>
                  {body}
                  <Icon name="arrow" className="detail-card-arrow" />
                </Link>
              ) : (
                <div className="detail-card">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
  if (item.callout) {
    return (
      <div className="detail-callout">
        <p>
          <strong>{item.callout}</strong>
        </p>
        {item.phone ? (
          <a className="btn btn-primary" href={site.phone.href}>
            <Icon name="phone" />
            {site.phone.display}
          </a>
        ) : (
          action
        )}
      </div>
    );
  }
  return null;
}

// Text with the words between **double asterisks** set in bold.
function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/).map((part, index) => (index % 2 ? <strong key={index}>{part}</strong> : part));
}
