// Home.jsx - Page 1: the homepage.
//
// Version 2 changes on this page:
// - Contact visibility: larger "Contact Us" button in the hero, plus a phone link next to it,
//   an "Enquire" button on every package preview and an enquiry section at the end.
// - Accommodation images: NEW "Take a look inside" gallery of rooms and shared facilities.
// - Performance: photos use <Photo> (responsive sizes, lazy loading).
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import IconCard from '../components/IconCard.jsx';
import Photo from '../components/Photo.jsx';
import { images } from '../data/images.js';
import { packages, formatPrice } from '../data/packages.js';
import { siteInfo } from '../data/siteInfo.js';
import usePageTitle from '../hooks/usePageTitle.js';

const benefits = [
  {
    icon: 'sofa',
    title: 'Fully furnished homes',
    text: 'Move in with just a suitcase. Every room comes with a bed, storage and everything you need.',
  },
  {
    icon: 'wifi',
    title: 'High-speed Wi-Fi',
    text: 'Fast, reliable internet in every package – ideal for studying, streaming and remote work.',
  },
  {
    icon: 'calendar',
    title: 'Flexible stays',
    text: 'Simple monthly packages that fit around your studies, job or next move.',
  },
  {
    icon: 'wallet',
    title: 'One simple price',
    text: 'Utilities are included in every package, so there are no surprise bills to worry about.',
  },
];

// NEW in Version 2: photo gallery of rooms and shared spaces
const gallery = [
  { image: images.roomCityView, caption: 'Private rooms', feature: true },
  { image: images.kitchen, caption: 'Shared kitchen' },
  { image: images.lounge, caption: 'Shared lounge' },
  { image: images.coworking, caption: 'Co-working space' },
  { image: images.gym, caption: 'Gym' },
];

export default function Home() {
  usePageTitle('Home');

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        {/* On phones the hero is tall, so the cropped photo needs about 1200px of width */}
        <Photo
          image={images.homeHero}
          width={1800}
          height={1000}
          sizes="(max-width: 860px) 1200px, 100vw"
          priority
        />
        <div className="container">
          <p className="eyebrow">Co-living in Dubai</p>
          <h1>
            Your Space, <span>Feel at Home.</span>
          </h1>
          <p className="hero-text">
            SkyNest offers modern, affordable and fully furnished co-living rooms for students,
            young professionals, remote workers and people relocating for work. You get a private
            or shared room of your own, plus shared kitchens, lounges and workspaces – all for one
            monthly price.
          </p>

          {/* Version 2: bigger button with an icon, plus a direct phone link */}
          <div className="hero-actions">
            <Button to="/contact" className="btn--large">
              <Icon name="mail" size={22} />
              Contact Us
            </Button>
            <p className="hero-call">
              <Icon name="phone" size={20} />
              <span>
                Or call us on{' '}
                <a href={`tel:${siteInfo.phoneLink}`}>{siteInfo.phone}</a>
              </span>
            </p>
          </div>

          <ul className="hero-points" aria-label="Included with every package">
            <li><Icon name="check" size={18} /> Fully furnished</li>
            <li><Icon name="check" size={18} /> High-speed Wi-Fi</li>
            <li><Icon name="check" size={18} /> Utilities included</li>
          </ul>
        </div>
      </section>

      {/* ---------- Short introduction ---------- */}
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">Welcome to SkyNest</p>
            <h2>Co-living made simple</h2>
            <p className="lead">
              Moving to a new city is exciting, but finding a good place to live can be stressful.
              SkyNest makes it easy.
            </p>
            <p>
              We provide ready-to-live-in rooms in a friendly shared home. Instead of buying
              furniture, setting up internet and paying separate bills, you choose one package and
              move in. You get your own space when you need it and a community when you want it.
            </p>
            <Link to="/about" className="text-link">
              Learn more about SkyNest <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <Photo
            className="split-image"
            image={images.homeIntro}
            width={900}
            height={675}
            maxWidth={1200}
            sizes="(max-width: 860px) 100vw, 580px"
          />
        </div>
      </section>

      {/* ---------- Key benefits ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Why residents love it</p>
            <h2>Everything you need from day one</h2>
          </div>
          <div className="grid grid-4">
            {benefits.map((benefit) => (
              <IconCard key={benefit.title} icon={benefit.icon} title={benefit.title}>
                {benefit.text}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- NEW: Take a look inside (gallery) ---------- */}
      <section className="section section--white" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Rooms and shared spaces</p>
            <h2 id="gallery-heading">Take a look inside</h2>
            <p className="lead">
              See the kind of rooms and shared facilities you can expect at SkyNest.
            </p>
          </div>

          <ul className="gallery">
            {gallery.map((item) => (
              <li key={item.caption} className={item.feature ? 'gallery-feature' : ''}>
                <figure>
                  <Photo
                    image={item.image}
                    width={item.feature ? 1200 : 800}
                    height={item.feature ? 900 : 600}
                    maxWidth={item.feature ? 1200 : 800}
                    sizes={item.feature ? '(max-width: 700px) 100vw, 600px' : '(max-width: 700px) 100vw, 300px'}
                  />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <p className="gallery-note">
            Photos show example rooms and facilities. Facilities depend on your package.
          </p>

          <div className="center-actions">
            <Button to="/packages#facilities" variant="outline">
              See all facilities
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- Packages preview ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Our packages</p>
            <h2>A package for every stage of life</h2>
            <p className="lead">
              Three simple monthly packages. All include a furnished room, Wi-Fi, laundry access
              and utilities.
            </p>
          </div>

          <div className="grid grid-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`card preview-card ${pkg.popular ? 'preview-card--popular' : ''}`}
              >
                {pkg.popular && <p className="preview-label">Most popular</p>}
                <h3>{pkg.name}</h3>
                <p className="preview-price">
                  {formatPrice(pkg.price)} <span>/ month</span>
                </p>
                <ul className="check-list">
                  {pkg.features.slice(0, 4).map((feature) => (
                    <li key={feature}>
                      <Icon name="check" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Version 2: a clear Enquire button on every package */}
                <div className="preview-actions">
                  <Button
                    to={`/contact?package=${pkg.id}#enquiry-form`}
                    className="btn--block"
                    aria-label={`Enquire now about ${pkg.name}`}
                  >
                    Enquire Now
                  </Button>
                  <Link to={`/packages#${pkg.id}`} className="text-link">
                    View {pkg.name} <Icon name="arrowRight" size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Community living highlight */}
          <div className="community" style={{ marginTop: '56px' }}>
            <div className="split">
              <div className="community-text">
                <p className="eyebrow">Community living</p>
                <h2>Living is better together</h2>
                <p>
                  Every SkyNest package includes shared spaces where residents cook, relax and
                  work side by side. It is an easy way to make friends and build a network when
                  you arrive somewhere new.
                </p>
                <ul className="check-list">
                  <li><Icon name="check" size={18} /> Shared kitchens and lounges</li>
                  <li><Icon name="check" size={18} /> Study, working and co-working areas</li>
                  <li><Icon name="check" size={18} /> A mix of students and professionals from around the world</li>
                </ul>
                <Button to="/packages" variant="light">
                  Compare all packages
                </Button>
              </div>
              <Photo
                className="community-image"
                image={images.community}
                width={900}
                height={700}
                maxWidth={1200}
                sizes="(max-width: 860px) 100vw, 580px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- NEW: Enquiry section ---------- */}
      <section className="section section--white" aria-labelledby="home-enquire-heading">
        <div className="container">
          <div className="enquire-panel">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 id="home-enquire-heading">Ready to move in?</h2>
              <p className="lead">
                Send us an enquiry with your move-in date and preferred package, and the SkyNest
                team will help you choose the right room.
              </p>
            </div>
            <ul className="enquire-options">
              <li>
                <Button to="/contact#enquiry-form" className="btn--large btn--block">
                  <Icon name="mail" size={22} />
                  Send an Enquiry
                </Button>
              </li>
              <li>
                <a className="btn btn--outline btn--large btn--block" href={`tel:${siteInfo.phoneLink}`}>
                  <Icon name="phone" size={22} />
                  Call {siteInfo.phone}
                </a>
              </li>
              <li className="enquire-hours">
                <Icon name="clock" size={20} />
                {siteInfo.hours}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
