// Header.jsx - the logo, navigation links and "Contact Us" button shown on every page.
// On small screens the links are hidden behind a "Menu" button.
//
// Version 2 – keyboard accessibility:
// - When the mobile menu opens, focus moves to the first link.
// - If you Tab out of the open menu, it closes (so it never hides the page behind it).
// - Escape still closes the menu and returns focus to the Menu button.
// Version 2 – contact visibility: the "Contact Us" button has a mail icon and is larger.
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/packages', label: 'Packages' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const nav = useRef(null);
  const header = useRef(null);
  const location = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    // Move keyboard focus to the first link in the menu (only when the Menu button is in use)
    if (window.getComputedStyle(menuButton.current).display !== 'none') {
      nav.current.querySelector('a')?.focus();
    }

    // Close the mobile menu with the Escape key and return focus to the Menu button
    function handleKey(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current.focus();
      }
    }

    // Close the menu if focus moves outside the header (e.g. Tab past the last link)
    function handleFocus(event) {
      if (!header.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleKey);
    document.addEventListener('focusin', handleFocus);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('focusin', handleFocus);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label="SkyNest Co-Living Spaces – go to homepage">
          <Logo />
        </Link>

        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <nav
          id="main-navigation"
          ref={nav}
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Main"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                {/* NavLink adds class="active" and aria-current="page" to the current page */}
                <NavLink to={link.to} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" className="nav-cta">
            <Icon name="mail" size={20} />
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
