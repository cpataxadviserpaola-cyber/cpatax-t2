import { Link } from 'react-router';
import logo from '../assets/cpa-tax-adviser-logo.png';
import { site } from '../data/site.js';

// The firm's logo: white wordmark under gold and crimson ribbons, so it sits on dark surfaces.
export default function Brand() {
  return (
    <Link className="brand" to="/" aria-label={`${site.name} home`}>
      <img className="brand-logo" src={logo} alt="" width="210" height="152" />
    </Link>
  );
}
