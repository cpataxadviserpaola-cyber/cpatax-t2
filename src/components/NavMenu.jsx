import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import Icon from './Icon.jsx';

// Hover opens a menu only with a mouse on the desktop layout (see DESKTOP_QUERY in Header.jsx).
const HOVER_QUERY = '(hover: hover) and (min-width: 1101px)';
// Closest a dropdown may come to the edge of the window.
const EDGE = 16;

// An item in the main navigation with a dropdown (see src/data/navigation.js). On desktop
// the dropdown is a panel under the item; inside the mobile menu it expands in place.
// The header keeps track of which dropdown is open, so only one shows at a time.
export default function NavMenu({ item, open, onOpen, onCloseSoon, onClose, style }) {
  const itemRef = useRef(null);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const [shift, setShift] = useState(0);
  const panelId = `menu-${item.id}`;

  const canHover = () => window.matchMedia(HOVER_QUERY).matches;

  // The dropdown is centered under its item; slide it sideways if that would push it past
  // the edge of the window (a wide panel under an item near either end of the menu).
  useLayoutEffect(() => {
    if (!open) return undefined;

    const place = () => {
      const anchor = itemRef.current.getBoundingClientRect();
      const width = panelRef.current.offsetWidth;
      const left = anchor.left + anchor.width / 2 - width / 2;
      const max = document.documentElement.clientWidth - EDGE;
      if (left < EDGE) setShift(EDGE - left);
      else if (left + width > max) setShift(max - left - width);
      else setShift(0);
    };

    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [open]);

  // While open, close on Escape or on a click outside the menu.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!itemRef.current?.contains(event.target)) onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open, onClose]);

  // Close when keyboard focus moves outside the menu.
  const onBlur = (event) => {
    if (open && !itemRef.current?.contains(event.relatedTarget)) onClose();
  };

  // With a mouse, hovering has already opened the menu, so a click on the arrow keeps it
  // open rather than toggling it shut. Keyboard (detail 0) and touch clicks toggle it.
  const onCaretClick = (event) => {
    if (event.detail > 0 && canHover()) onOpen();
    else if (open) onClose();
    else onOpen();
  };

  const panelClasses = ['mega', `mega-cols-${item.columns.length}`, item.compact && 'is-compact']
    .filter(Boolean)
    .join(' ');

  return (
    <li
      ref={itemRef}
      className={`nav-item has-menu${open ? ' is-open' : ''}`}
      style={style}
      onMouseEnter={() => canHover() && onOpen()}
      onMouseLeave={() => canHover() && onCloseSoon()}
      onBlur={onBlur}
    >
      <div className="nav-item-row">
        <NavLink className="nav-link" to={item.to}>
          {item.label}
        </NavLink>
        <button
          ref={buttonRef}
          className="nav-caret"
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onCaretClick}
        >
          <span className="sr-only">Show the {item.label} menu</span>
          <Icon name="chevron" />
        </button>
      </div>

      <div ref={panelRef} className={panelClasses} id={panelId} style={{ '--mega-shift': `${shift}px` }}>
        <div className="mega-columns">
          {item.columns.map((groups, index) => (
            <div className="mega-col" key={index}>
              {groups.map((group, groupIndex) => (
                <div className="mega-group" key={group.label ?? groupIndex}>
                  {group.label && <p className="mega-heading">{group.label}</p>}
                  <ul className="mega-list">
                    {group.items.map((link) => (
                      <li key={link.href ?? link.to}>
                        <MenuLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        {item.foot && (
          <div className="mega-foot">
            <p>
              {item.foot.text} <Link to={item.foot.action.to}>{item.foot.action.label}</Link>
            </p>
            <Link className="mega-all" to={item.foot.all.to}>
              {item.foot.all.label} <Icon name="arrow" />
            </Link>
          </div>
        )}
      </div>
    </li>
  );
}

// A link in a dropdown: another website opens in a new tab; a link to a section of a page
// (/about#team) is a plain link, so the whole page's sections aren't all marked current.
function MenuLink({ link }) {
  const content = (
    <>
      <span className="mega-icon">
        <Icon name={link.icon} />
      </span>
      <span className="mega-copy">
        <span className="mega-title">
          {link.label}
          {link.href && <Icon name="arrow-up-right" className="mega-ext" />}
        </span>
        {link.text && <span className="mega-text">{link.text}</span>}
      </span>
    </>
  );

  if (link.href) {
    return (
      <a className="mega-link" href={link.href} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  const LinkTag = link.to.includes('#') ? Link : NavLink;
  return (
    <LinkTag className="mega-link" to={link.to}>
      {content}
    </LinkTag>
  );
}
