// Footer.jsx - the footer shown at the bottom of every page.
//
// Version 2 – reorganised after feedback:
// 1. An enquiry strip at the top of the footer (About, Packages and FAQ pages), so pages end
//    with a clear way to get in touch.
// 2. Quick links split into two clear groups: "Pages" and "Packages".
// 3. Contact details each have a visible label (Email, Phone, Location) inside an <address>.
// 4. Opening hours shown as a simple list of days and times.
// 5. A "Back to top" link in the bottom bar.
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import Button from './Button.jsx';
import { siteInfo } from '../data/siteInfo.js';
import { packages } from '../data/packages.js';
import './Footer.css';

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/packages', label: 'Packages' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  // The strip is not repeated on Home (which ends with its own enquiry section)
  // or on Contact (where the form is already on the page).
  const { pathname } = useLocation();
  const showCta = pathname !== '/' && pathname !== '/contact';

  return (
    <footer className="site-footer">
      {/* ---------- 1. Enquiry strip ---------- */}
      {showCta && (
      <div className="container">
        <div className="footer-cta">
          <div>
            <h2 className="footer-cta-title">Ready to find your new home in Singapore?</h2>
            <p>Tell us your dates and preferred package, and the SkyNest team will help you.</p>
          </div>
          <div className="footer-cta-actions">
            <Button to="/contact#enquiry-form">
              <Icon name="mail" size={20} />
              Send an Enquiry
            </Button>
            <a className="btn btn--on-dark" href={`tel:${siteInfo.phoneLink}`}>
              <Icon name="phone" size={20} />
              Call {siteInfo.phone}
            </a>
          </div>
        </div>
      </div>
      )}

      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="SkyNest Co-Living Spaces – go to homepage">
            <Logo variant="light" />
          </Link>
          <p>
            Modern, affordable and fully furnished co-living for students, professionals and anyone
            starting life in a new city.
          </p>
        </div>

        {/* ---------- 2. Quick links ---------- */}
        <nav className="footer-col" aria-labelledby="footer-pages-heading">
          <h2 className="footer-heading" id="footer-pages-heading">Pages</h2>
          <ul className="footer-links">
            {pageLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-labelledby="footer-packages-heading">
          <h2 className="footer-heading" id="footer-packages-heading">Packages</h2>
          <ul className="footer-links">
            {packages.map((pkg) => (
              <li key={pkg.id}>
                <Link to={`/packages#${pkg.id}`}>{pkg.name}</Link>
              </li>
            ))}
            <li><Link to="/packages#compare">Compare packages</Link></li>
            <li><Link to="/packages#facilities">Facilities</Link></li>
          </ul>
        </nav>

        {/* ---------- 3. Contact details with labels ---------- */}
        <div className="footer-col">
          <h2 className="footer-heading">Contact us</h2>
          <address className="footer-contact">
            <div>
              <Icon name="mail" size={20} />
              <p>
                <span className="footer-label">Email</span>
                <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
              </p>
            </div>
            <div>
              <Icon name="phone" size={20} />
              <p>
                <span className="footer-label">Phone</span>
                <a href={`tel:${siteInfo.phoneLink}`}>{siteInfo.phone}</a>
              </p>
            </div>
            <div>
              <Icon name="pin" size={20} />
              <p>
                <span className="footer-label">Location</span>
                {siteInfo.location}
              </p>
            </div>
          </address>
        </div>

        {/* ---------- 4. Opening hours ---------- */}
        <div className="footer-col">
          <h2 className="footer-heading">Opening hours</h2>
          <ul className="footer-hours">
            {siteInfo.hoursShort.map((row) => (
              <li key={row.days}>
                <span className="footer-label">{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- 5. Bottom bar ---------- */}
      <div className="container footer-bottom">
        <p>&copy; 2026 SkyNest Co-Living Spaces. All rights reserved.</p>
        <p>
          Demonstration website for a student assignment. Business details, prices and packages
          are fictional.
        </p>
        <a href="#main-content" className="back-to-top">
          Back to top <Icon name="chevronDown" size={18} className="icon--up" />
        </a>
      </div>
    </footer>
  );
}
