import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Brand from './Brand.jsx';
import Icon from './Icon.jsx';
import NavMenu from './NavMenu.jsx';
import { mainNav } from '../data/navigation.js';
import { links, site } from '../data/site.js';

// Must match the breakpoint where styles.css switches to the full-screen mobile menu.
const DESKTOP_QUERY = '(min-width: 1101px)';

// Deep wine bar under the top bar that turns to frosted glass once the page scrolls: the
// logo, the main menu (src/data/navigation.js), and the consultation button. Below the
// desktop breakpoint the menu opens full screen.
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Only one dropdown is open at a time. A short delay before closing lets the pointer
  // cross the gap between an item and its panel; moving onto another item cancels it.
  const openMenu = useCallback((id) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(id);
  }, []);
  const closeMenuSoon = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 160);
  }, []);
  const closeMenu = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(null);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // While the mobile menu is open, keep the page behind it still, and close the menu on
  // Escape, an outside click, or when the window grows to desktop width.
  useEffect(() => {
    if (!menuOpen) return undefined;

    document.body.classList.add('menu-open');
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (mq) => {
      if (mq.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [menuOpen]);

  // Close the menus after a link is chosen.
  const onNavClick = (event) => {
    if (event.target.closest('a')) {
      setMenuOpen(false);
      closeMenu();
    }
  };

  const classes = ['site-header', 'surface-dark', scrolled && 'is-scrolled', menuOpen && 'is-menu-open']
    .filter(Boolean)
    .join(' ');

  return (
    <header ref={headerRef} className={classes}>
      <div className="container header-inner">
        <Brand />

        <nav
          id="site-nav"
          className={`nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Main"
          onClick={onNavClick}
        >
          <ul className="nav-list">
            {mainNav.map((item, index) => {
              const style = { '--i': index };
              if (item.columns) {
                return (
                  <NavMenu
                    key={item.id}
                    item={item}
                    style={style}
                    open={openDropdown === item.id}
                    onOpen={() => openMenu(item.id)}
                    onCloseSoon={closeMenuSoon}
                    onClose={closeMenu}
                  />
                );
              }
              return (
                <li key={item.id} style={style}>
                  <NavLink className="nav-link" to={item.to}>
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Shown inside the full-screen menu on small screens only. */}
          <div className="nav-foot">
            <Link className="btn btn-gold btn-lg nav-cta" to="/contact">
              Get a Free Consultation
              <Icon name="arrow" />
            </Link>
            <div className="nav-extra">
              <a href={site.phone.href}>
                <Icon name="phone" />
                {site.phone.display}
              </a>
              <a href={links.portal} target="_blank" rel="noopener noreferrer">
                <Icon name="lock" />
                Client portal
              </a>
              <a href={links.payment} target="_blank" rel="noopener noreferrer">
                <Icon name="card" />
                Pay my fee
              </a>
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <Link className="btn btn-gold header-cta" to="/contact">
            Get a Free Consultation
            <Icon name="arrow" />
          </Link>

          <button
            ref={toggleRef}
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span className="nav-toggle-bars" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
