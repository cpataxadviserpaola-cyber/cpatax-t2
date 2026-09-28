import { Link } from 'react-router';
import Icon from './Icon.jsx';

// Card linking to a service's own page. With `showIncluded`, the first few items from
// "What's included" are listed too.
export default function ServiceCard({ service, id, showIncluded = false }) {
  return (
    <Link className="svc-card" id={id} to={`/services/${service.id}`}>
      <span className="svc-card-top">
        <span className="icon-badge">
          <Icon name={service.icon} />
        </span>
        <span className="svc-card-go">
          <Icon name="arrow-up-right" />
        </span>
      </span>
      <h3>{service.name}</h3>
      <p>{service.summary}</p>
      {showIncluded && (
        <ul className="checklist">
          {service.included.slice(0, 4).map((item) => (
            <li key={item}>
              <Icon name="check" />
              {item}
            </li>
          ))}
        </ul>
      )}
      <span className="svc-card-more">
        Learn more
        <Icon name="arrow" />
      </span>
    </Link>
  );
}
