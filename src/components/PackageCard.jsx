// PackageCard.jsx - one accommodation package (photo, name, price, features, button).
// "Enquire Now" opens the Contact page with this package already chosen in the form.
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import Photo from './Photo.jsx';
import { formatPrice } from '../data/packages.js';
import './PackageCard.css';

export default function PackageCard({ pkg }) {
  const headingId = `package-${pkg.id}-title`;

  return (
    <article
      id={pkg.id}
      className={`package-card ${pkg.popular ? 'package-card--popular' : ''}`}
      aria-labelledby={headingId}
    >
      {pkg.popular && <p className="package-badge">Most popular</p>}

      {/* Version 2: larger room photo (4:3 instead of 16:10) in a sharper size */}
      <Photo
        image={pkg.image}
        width={1200}
        height={900}
        maxWidth={1200}
        sizes="(max-width: 960px) min(100vw, 560px), 380px"
      />

      <div className="package-body">
        <h3 id={headingId} className="package-name">{pkg.name}</h3>
        <p className="package-price">
          {formatPrice(pkg.price)} <span>/ month</span>
        </p>
        <p className="package-best">
          <strong>Best for:</strong> {pkg.bestFor}
        </p>
        <p className="package-description">{pkg.description}</p>

        <h4 className="package-features-title">What's included</h4>
        <ul className="check-list">
          {pkg.features.map((feature) => (
            <li key={feature}>
              <Icon name="check" size={18} />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          to={`/contact?package=${pkg.id}#enquiry-form`}
          className="btn--block"
          aria-label={`Enquire now about ${pkg.name}`}
        >
          <Icon name="mail" size={20} />
          Enquire Now
        </Button>
      </div>
    </article>
  );
}
