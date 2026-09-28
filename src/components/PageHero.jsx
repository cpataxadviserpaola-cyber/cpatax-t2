import { Fragment } from 'react';
import { Link } from 'react-router';

// Light editorial header at the top of inner pages: breadcrumb, then the title on the
// left and the intro text with optional action buttons on the right.
export default function PageHero({ page, parents = [], eyebrow, title, children, actions }) {
  return (
    <section className="page-head">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {parents.map((parent) => (
            <Fragment key={parent.to}>
              <span className="breadcrumb-sep" aria-hidden="true" />
              <Link to={parent.to}>{parent.label}</Link>
            </Fragment>
          ))}
          <span className="breadcrumb-sep" aria-hidden="true" />
          <span aria-current="page">{page}</span>
        </nav>

        <div className="page-head-grid">
          <div className="page-head-title">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <div className="page-head-side">
            <p className="page-head-lead">{children}</p>
            {actions && <div className="page-head-actions">{actions}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
