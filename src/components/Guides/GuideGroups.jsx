import { Link } from 'react-router';
import Icon from '../Icon.jsx';

// A link to a guide (src/data/guides.js). A guide with `to` opens a page on this site; one
// with `href` opens its page in the guide library in a new tab.
export function GuideLink({ guide }) {
  return guide.to ? (
    <Link to={guide.to}>
      {guide.title}
      <Icon name="arrow" className="is-internal" />
    </Link>
  ) : (
    <a href={guide.href} target="_blank" rel="noopener noreferrer">
      {guide.title}
      <Icon name="arrow-up-right" />
    </a>
  );
}

// Lists of guides, each under its label. `wide` lays the links out three across, for a list
// that spans the whole page.
export default function GuideGroups({ groups, wide = false }) {
  return (
    <div className={`guide-groups reveal${wide ? ' is-wide' : ''}`}>
      {groups.map((group, index) => (
        <div key={group.label ?? index}>
          {group.label && <h3 className="label">{group.label}</h3>}
          <ul className="guide-links">
            {group.items.map((guide) => (
              <li key={guide.title}>
                <GuideLink guide={guide} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
