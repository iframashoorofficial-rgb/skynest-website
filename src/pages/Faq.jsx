// Faq.jsx - Page 4: frequently asked questions in an accordion.
import Button from '../components/Button.jsx';
import FaqAccordion from '../components/FaqAccordion.jsx';
import PageBanner from '../components/PageBanner.jsx';
import { images } from '../data/images.js';
import { faqs } from '../data/faqs.js';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Faq() {
  usePageTitle('FAQ');

  return (
    <>
      <PageBanner
        eyebrow="Help centre"
        title="Frequently Asked Questions"
        intro="Clear answers about our packages, stays and facilities."
        image={images.faqBanner}
      />

      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-head section-head--center">
            <h2 id="faq-heading">Your questions, answered</h2>
            <p className="lead">
              Select a question to show its answer. Where a policy is not shown here, please
              confirm the details directly with SkyNest.
            </p>
          </div>

          <FaqAccordion items={faqs} />

          <div className="cta-band" style={{ marginTop: '56px' }}>
            <h2>Still have a question?</h2>
            <p>The SkyNest team is happy to help, Monday to Saturday, 9:00 AM – 6:00 PM.</p>
            <div className="center-actions">
              <Button to="/contact">Contact Us</Button>
              <Button to="/packages" variant="outline">View Packages</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
