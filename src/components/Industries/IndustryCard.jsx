import { Link } from 'react-router';
import Icon from '../Icon.jsx';
import { industryPath } from '../../data/industries.js';

// Card for an industry: its icon, heading, and short description, with "Read more" leading to
// the industry's own page. `highlighted` marks it out, as the card a menu link pointed to. It's
// a data attribute rather than a class so React leaves the class useReveal adds in place.
export default function IndustryCard({ industry, id, highlighted = false }) {
  return (
    <article className="ind-card reveal" id={id} data-highlighted={highlighted || undefined}>
      <span className="icon-badge">
        <Icon name={industry.icon} />
      </span>
      <h3>{industry.heading ?? industry.title}</h3>
      <p>{industry.text}</p>
      <Link className="link-arrow" to={industryPath(industry)}>
        Read more<span className="sr-only"> about {industry.title}</span> <Icon name="arrow" />
      </Link>
    </article>
  );
}
