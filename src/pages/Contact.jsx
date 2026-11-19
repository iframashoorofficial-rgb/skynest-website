// Contact.jsx - Page 5: contact details, enquiry form, opening hours and location.
import { useSearchParams } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm.jsx';
import Icon from '../components/Icon.jsx';
import PageBanner from '../components/PageBanner.jsx';
import { images } from '../data/images.js';
import { packages } from '../data/packages.js';
import { siteInfo } from '../data/siteInfo.js';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Contact() {
  usePageTitle('Contact');

  // If the visitor clicked "Enquire Now" on a package, the link looks like
  // /contact?package=comfort – we read that and pre-select the package.
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('package');
  const initialPackage = packages.some((pkg) => pkg.id === requested) ? requested : '';

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Get in touch with SkyNest"
        intro="Have a question or ready to find your new home? Send us an enquiry and our team will help you choose the right package."
        image={images.contactBanner}
      />

      <section className="section">
        <div className="container contact-layout">
          {/* ---------- Contact details ---------- */}
          <div className="contact-info">
            <div className="card">
              <h2 className="h3-size">Contact information</h2>
              <ul className="info-list">
                <li>
                  <span className="icon-badge"><Icon name="mail" size={20} /></span>
                  <div>
                    <h3>Email</h3>
                    <p><a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></p>
                  </div>
                </li>
                <li>
                  <span className="icon-badge"><Icon name="phone" size={20} /></span>
                  <div>
                    <h3>Phone</h3>
                    <p><a href={`tel:${siteInfo.phoneLink}`}>{siteInfo.phone}</a></p>
                  </div>
                </li>
                <li>
                  <span className="icon-badge"><Icon name="pin" size={20} /></span>
                  <div>
                    <h3>Location</h3>
                    <p>{siteInfo.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="h3-size">Business hours</h2>
              <table className="hours-table">
                <caption className="visually-hidden">SkyNest business hours</caption>
                <tbody>
                  {siteInfo.hoursShort.map((row) => (
                    <tr key={row.days}>
                      <th scope="row">{row.days}</th>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ---------- Enquiry form ---------- */}
          <div className="card" id="enquiry-form">
            <h2>Send an enquiry</h2>
            <p className="lead">
              Fill in the form below and tell us what you are looking for.
            </p>
            <EnquiryForm key={initialPackage} initialPackage={initialPackage} />
          </div>
        </div>
      </section>

      {/* ---------- Location ---------- */}
      <section className="section section--white" aria-labelledby="location-heading">
        <div className="container split">
          <div>
            <p className="eyebrow">Location</p>
            <h2 id="location-heading">Find us in Dubai</h2>
            <p className="lead">
              SkyNest is based in {siteInfo.location}.
            </p>
            <p>
              Because SkyNest is a fictional demonstration business, no exact street address is
              shown. The map shows the city of Dubai.
            </p>
          </div>
          <iframe
            className="map-frame"
            title="Map of Dubai, United Arab Emirates"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.10%2C25.03%2C55.40%2C25.30&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
