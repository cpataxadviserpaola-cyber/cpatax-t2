import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta('Page Not Found', 'The page you were looking for could not be found.');

  return (
    <section className="section not-found">
      <div className="container">
        <div className="not-found-card">
          <p className="not-found-code" aria-hidden="true">404</p>
          <h1>
            We couldn't find <em>that page</em>
          </h1>
          <p className="lead">The page may have moved or no longer exists.</p>
          <div className="not-found-actions">
            <Link className="btn btn-primary btn-lg" to="/">
              Back to home
              <Icon name="arrow" />
            </Link>
            <Link className="btn btn-outline btn-lg" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
