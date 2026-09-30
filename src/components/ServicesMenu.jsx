import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Icon from './Icon.jsx';
import { servicesIn } from '../data/services.js';

// Hover opens the menu only with a mouse on the desktop layout (see DESKTOP_QUERY in Header.jsx).
const HOVER_QUERY = '(hover: hover) and (min-width: 1101px)';

const columns = [
  [{ label: 'Business', items: servicesIn('business') }],
  [
    { label: 'Individual', items: servicesIn('individual') },
    { label: 'International', items: servicesIn('international') },
    {
      label: 'Beyond taxes',
      items: [
        {
          id: 'financial-planning',
          to: '/financial-planning',
          icon: 'trend',
          name: 'Financial Planning',
          tagline: 'With Yellow Oak Financial Planning',
        },
      ],
    },
  ],
];

// "Services" item in the main navigation. On desktop it opens a dropdown panel listing
// every service by group; inside the mobile menu the same list expands in place.
export default function ServicesMenu({ style }) {
  const [open, setOpen] = useState(false);
  const itemRef = useRef(null);
  const buttonRef = useRef(null);
  const closeTimer = useRef(null);

  const canHover = () => window.matchMedia(HOVER_QUERY).matches;

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  // A short delay lets the pointer cross the gap between the link and the panel.
  const closeMenuSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // While open, close on Escape or on a click outside the menu.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!itemRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  // Close when keyboard focus moves outside the menu.
  const onBlur = (event) => {
    if (!itemRef.current?.contains(event.relatedTarget)) setOpen(false);
  };

  // With a mouse, hovering has already opened the menu, so a click on the arrow keeps it
  // open rather than toggling it shut. Keyboard (detail 0) and touch clicks toggle it.
  const onCaretClick = (event) => {
    if (event.detail > 0 && canHover()) openMenu();
    else setOpen((isOpen) => !isOpen);
  };

  // Close after a link inside the panel is chosen.
  const onPanelClick = (event) => {
    if (event.target.closest('a')) setOpen(false);
  };

  return (
    <li
      ref={itemRef}
      className={`nav-item has-menu${open ? ' is-open' : ''}`}
      style={style}
      onMouseEnter={() => canHover() && openMenu()}
      onMouseLeave={() => canHover() && closeMenuSoon()}
      onBlur={onBlur}
    >
      <div className="nav-item-row">
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <button
          ref={buttonRef}
          className="nav-caret"
          type="button"
          aria-expanded={open}
          aria-controls="services-menu"
          onClick={onCaretClick}
        >
          <span className="sr-only">Show all services</span>
          <Icon name="chevron" />
        </button>
      </div>

      <div className="mega" id="services-menu" onClick={onPanelClick}>
        <div className="mega-columns">
          {columns.map((groups, index) => (
            <div className="mega-col" key={index}>
              {groups.map((group) => (
                <div className="mega-group" key={group.label}>
                  <p className="mega-heading">{group.label}</p>
                  <ul className="mega-list">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <NavLink className="mega-link" to={item.to ?? `/services/${item.id}`}>
                          <span className="mega-icon">
                            <Icon name={item.icon} />
                          </span>
                          <span className="mega-copy">
                            <span className="mega-title">{item.name}</span>
                            <span className="mega-text">{item.tagline}</span>
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mega-foot">
          <p>
            Not sure which service fits? <Link to="/contact">Ask our team</Link>
          </p>
          <Link className="mega-all" to="/services">
            All services <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </li>
  );
}
