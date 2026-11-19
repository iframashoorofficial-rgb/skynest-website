// Packages.jsx - Page 3: the three packages, comparison table and facilities.
//
// Version 2 changes on this page:
// - Accommodation images: larger room photos on the package cards, plus NEW "Inside the rooms".
// - Facilities information: NEW "Facilities in detail" with photos, extra points and
//   which packages include each facility (Wi-Fi and co-working first).
// - Facilities now come from src/data/facilities.js.
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import IconCard from '../components/IconCard.jsx';
import PackageCard from '../components/PackageCard.jsx';
import ComparisonTable from '../components/ComparisonTable.jsx';
import PageBanner from '../components/PageBanner.jsx';
import Photo from '../components/Photo.jsx';
import { images } from '../data/images.js';
import { packages } from '../data/packages.js';
import { facilities } from '../data/facilities.js';
import usePageTitle from '../hooks/usePageTitle.js';

const roomPhotos = [
  { image: images.roomCityView, caption: 'Private room with a city view' },
  { image: images.roomSpacious, caption: 'Spacious private room' },
  { image: images.roomDesk, caption: 'A quiet place to study or work' },
];

export default function Packages() {
  usePageTitle('Packages');

  return (
    <>
      <PageBanner
        eyebrow="Accommodation packages"
        title="Choose your SkyNest package"
        intro="Three simple monthly packages – from budget-friendly shared rooms to spacious private rooms with a dedicated workspace."
        image={images.packagesBanner}
      />

      {/* ---------- Package cards ---------- */}
      <section className="section" aria-labelledby="packages-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Monthly packages</p>
            <h2 id="packages-heading">Find the right fit</h2>
            <p className="lead">
              Every package includes a furnished room, high-speed Wi-Fi, laundry access and
              utilities. The higher the package, the more private space and facilities you get.
            </p>
            <p className="fictional-note">
              <Icon name="alert" size={18} />
              These are fictional demonstration prices and packages.
            </p>
          </div>

          <div className="package-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* NEW: more room photos */}
          <div className="room-strip">
            <h3 className="room-strip-title">Inside the rooms</h3>
            <ul className="room-photos">
              {roomPhotos.map((item) => (
                <li key={item.caption}>
                  <figure>
                    <Photo
                      image={item.image}
                      width={800}
                      height={600}
                      maxWidth={800}
                      sizes="(max-width: 700px) 100vw, 380px"
                    />
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Comparison table ---------- */}
      <section className="section section--white" id="compare" aria-labelledby="compare-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Side by side</p>
            <h2 id="compare-heading">Compare packages</h2>
            <p className="lead">See exactly what is included in each package.</p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* ---------- Facilities overview (8 facilities with icons) ---------- */}
      <section className="section" id="facilities" aria-labelledby="facilities-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Facilities</p>
            <h2 id="facilities-heading">Facilities at SkyNest</h2>
            <p className="lead">
              Some facilities depend on your package. Select a facility to read more about it.
            </p>
          </div>
          <ul className="grid grid-4 facility-grid">
            {facilities.map((item) => (
              <li key={item.id}>
                <IconCard icon={item.icon} title={item.title} href={`#facility-${item.id}`}>
                  {item.text}
                </IconCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- NEW: Facilities in detail ---------- */}
      <section className="section section--white" aria-labelledby="facility-details-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">More information</p>
            <h2 id="facility-details-heading">Facilities in detail</h2>
            <p className="lead">
              What each facility offers and which packages include it. If something you need is
              not covered here, please confirm it with SkyNest before you book.
            </p>
          </div>

          <div className="facility-details">
            {facilities.map((item) => (
              <article
                key={item.id}
                id={`facility-${item.id}`}
                className={`facility-detail ${item.image ? '' : 'facility-detail--no-photo'}`}
                aria-labelledby={`facility-${item.id}-title`}
              >
                {item.image && (
                  <Photo
                    className="facility-photo"
                    image={item.image}
                    width={800}
                    height={600}
                    maxWidth={800}
                    sizes="(max-width: 860px) 100vw, 480px"
                  />
                )}
                <div className="facility-body">
                  <h3 id={`facility-${item.id}-title`}>
                    <span className="icon-badge icon-badge--small">
                      <Icon name={item.icon} size={22} />
                    </span>
                    {item.title}
                  </h3>
                  <ul className="check-list">
                    {item.details.map((point) => (
                      <li key={point}>
                        <Icon name="check" size={18} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="facility-available">
                    <p className="facility-available-title">Included in:</p>
                    <ul>
                      {item.available.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="gallery-note">
            Photos show example rooms and facilities. SkyNest is a fictional demonstration business.
          </p>

          <div className="cta-band" style={{ marginTop: '56px' }}>
            <h2>Not sure which package to choose?</h2>
            <p>
              Send us an enquiry and the SkyNest team will help you pick the right option, or read
              our frequently asked questions.
            </p>
            <div className="center-actions">
              <Button to="/contact#enquiry-form" className="btn--large">
                <Icon name="mail" size={22} />
                Make an Enquiry
              </Button>
              <Button to="/faq" variant="outline" className="btn--large">Read the FAQ</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
