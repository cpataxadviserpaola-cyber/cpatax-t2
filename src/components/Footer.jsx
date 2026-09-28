import { Link } from 'react-router';
import Brand from './Brand.jsx';
import Icon from './Icon.jsx';
import { links, site } from '../data/site.js';
import { services } from '../data/services.js';

// Only Home, About and Contact link for now; items without `to` show as plain text.
const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { label: 'All Services' },
  { label: 'Financial Planning' },
  { label: 'Client Center' },
  { label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const clientTools = [
  { href: links.portal, label: 'Client portal login', icon: 'lock' },
  { href: links.payment, label: 'Pay my fee', icon: 'card' },
  { href: links.schedule, label: 'Schedule an appointment', icon: 'calendar' },
];

export default function Footer() {
  return (
    <footer className="site-footer surface-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p className="footer-slogan">{site.slogan}</p>
            <div className="footer-reach">
              <a className="footer-pill" href={site.phone.href}>
                <Icon name="phone" />
                {site.phone.display}
              </a>
              <a className="footer-pill" href={`mailto:${site.email}`}>
                <Icon name="mail" />
                {site.email}
              </a>
            </div>
            <ul className="footer-social">
              <li>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="CPA Tax Adviser on LinkedIn">
                  <Icon name="linkedin" />
                </a>
              </li>
              <li>
                <a href={links.x} target="_blank" rel="noopener noreferrer" aria-label="CPA Tax Adviser on X">
                  <Icon name="x" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Services</h2>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.id}>
                  <span className="footer-static">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Company</h2>
            <ul className="footer-links">
              {companyLinks.map(({ to, label }) => (
                <li key={label}>
                  {to ? <Link to={to}>{label}</Link> : <span className="footer-static">{label}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-title">Clients</h2>
            <ul className="footer-links footer-icons">
              {clientTools.map(({ href, label, icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon name={icon} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="footer-title footer-title-spaced">Visit</h2>
            <ul className="footer-links footer-icons">
              <li>
                <Icon name="pin" />
                <span>
                  {site.address[0]}
                  <br />
                  {site.address[1]}
                </span>
              </li>
              <li>
                <Icon name="file" />
                <span>Fax {site.fax}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved. South Carolina
            licensed CPA firm serving clients nationwide, in {site.languages}.
          </p>
          <p className="disclaimer">
            The information on this website is for general informational purposes only and does
            not constitute tax, legal, or accounting advice. Please consult a qualified professional
            about your specific situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
