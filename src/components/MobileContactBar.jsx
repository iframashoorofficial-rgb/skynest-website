// MobileContactBar.jsx - NEW in Version 2.
// Feedback said the Contact/Enquire buttons were not prominent enough. On phones the
// "Contact Us" button was hidden inside the menu, so this bar keeps "Enquire Now" and
// "Call" fixed at the bottom of the screen. It only shows on small screens (see CSS),
// and it is hidden on the Contact page, where the form is already on screen.
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';
import { siteInfo } from '../data/siteInfo.js';

export default function MobileContactBar() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <aside className="mobile-contact-bar" aria-label="Quick contact">
      <Link to="/contact#enquiry-form" className="btn btn--primary">
        <Icon name="mail" size={20} />
        Enquire Now
      </Link>
      <a href={`tel:${siteInfo.phoneLink}`} className="btn btn--outline">
        <Icon name="phone" size={20} />
        Call
        <span className="visually-hidden"> SkyNest on {siteInfo.phone}</span>
      </a>
    </aside>
  );
}
