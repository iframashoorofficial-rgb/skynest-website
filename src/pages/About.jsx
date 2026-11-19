// About.jsx - Page 2: explains the SkyNest business.
// Version 2: photos use <Photo> (responsive sizes, lazy loading); larger Enquire button.
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import IconCard from '../components/IconCard.jsx';
import PageBanner from '../components/PageBanner.jsx';
import Photo from '../components/Photo.jsx';
import { images } from '../data/images.js';
import usePageTitle from '../hooks/usePageTitle.js';

const coLivingBenefits = [
  { icon: 'wallet', title: 'Lower living costs', text: 'Sharing kitchens, lounges and facilities keeps rent affordable compared with renting alone.' },
  { icon: 'users', title: 'A ready-made community', text: 'Meet people from day one instead of spending your first months alone.' },
  { icon: 'key', title: 'Less admin', text: 'No furniture to buy and no separate internet or utility contracts to set up.' },
  { icon: 'calendar', title: 'More flexibility', text: 'Monthly packages make it easier to plan around studies, contracts and travel.' },
];

const whyChoose = [
  { title: 'Fully furnished rooms', text: 'Arrive with your suitcase and start living straight away.' },
  { title: 'Clear monthly prices', text: 'Three packages with prices and features shown up front.' },
  { title: 'Utilities and Wi-Fi included', text: 'One payment covers the essentials in every package.' },
  { title: 'Spaces to work and study', text: 'Study areas, dedicated workspaces and co-working options.' },
  { title: 'Wellbeing facilities', text: 'Gym access and a rooftop lounge in selected packages.' },
  { title: 'A welcoming community', text: 'Live with students and professionals from around the world.' },
];

const residents = [
  { icon: 'briefcase', title: 'Young professionals', text: 'Starting a new job and want a comfortable home close to the city.' },
  { icon: 'book', title: 'International students', text: 'Studying in Singapore and need an affordable, furnished place to live' },
  { icon: 'globe', title: 'Digital nomads & remote workers', text: 'Working online and need fast Wi-Fi and a good place to focus.' },
  { icon: 'users', title: 'Corporate clients', text: 'Companies arranging accommodation for employees relocating for work.' },
];

const steps = [
  { title: 'Compare packages online', text: 'See prices and features side by side before you arrive.' },
  { title: 'Send one enquiry', text: 'Tell us your dates and package, and the SkyNest team will get back to you.' },
  { title: 'Move into a ready room', text: 'Your room is furnished, connected and ready to live in.' },
  { title: 'Settle in faster', text: 'Meet other residents in the shared spaces from your very first week.' },
];

export default function About() {
  usePageTitle('About Us');

  return (
    <>
      <PageBanner
        eyebrow="About us"
        title="About SkyNest Co-Living Spaces"
        intro="Modern, affordable and fully furnished homes for people building a new life in Singapore."
        image={images.aboutBanner}
      />

      {/* ---------- Introduction ---------- */}
      <section className="section section--white">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>Flexible housing for modern lives</h2>
            <p className="lead">
              SkyNest Co-Living Spaces provides shared living and flexible housing in Singapore.
            </p>
            <p>
              We offer fully furnished rooms in shared homes with high-speed Wi-Fi, shared kitchens
              and lounges, and spaces to study or work. Our residents are students, young
              professionals, remote workers and people relocating for work who want a comfortable
              home without the cost and hassle of renting a whole apartment.
            </p>
          </div>
          <Photo
            className="split-image"
            image={images.aboutIntro}
            width={900}
            height={675}
            maxWidth={1200}
            sizes="(max-width: 860px) 100vw, 580px"
          />
        </div>
      </section>

      {/* ---------- Mission and vision ---------- */}
      <section className="section" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="visually-hidden">Our mission and vision</h2>
        <div className="container grid grid-2">
          <div className="card statement-card">
            <h3>
              <Icon name="home" /> Our mission
            </h3>
            <p>
              To provide modern, affordable and fully furnished accommodation that makes moving to
              a new city simple, so residents can focus on their studies, careers and new
              experiences.
            </p>
          </div>
          <div className="card statement-card">
            <h3>
              <Icon name="sun" /> Our vision
            </h3>
            <p>
              To become a trusted first home for people arriving in Singapore – a place where anyone
              can find flexible, good-value housing and a welcoming community.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Making moving easier ---------- */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Moving to a new city?</p>
            <h2>We make finding accommodation easier</h2>
            <p className="lead">
              Searching for housing in an unfamiliar city usually means viewings, contracts,
              furniture and utility set-up. SkyNest replaces all of that with a few simple steps.
            </p>
          </div>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Benefits of co-living ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Co-living explained</p>
            <h2>The benefits of co-living</h2>
          </div>
          <div className="grid grid-4">
            {coLivingBenefits.map((item) => (
              <IconCard key={item.title} icon={item.icon} title={item.title}>
                {item.text}
              </IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why choose SkyNest ---------- */}
      <section className="section section--white">
        <div className="container split">
          <Photo
            className="split-image"
            image={images.aboutCommunity}
            width={900}
            height={675}
            maxWidth={1200}
            sizes="(max-width: 860px) 100vw, 580px"
          />
          <div>
            <p className="eyebrow">Our promise</p>
            <h2>Why Choose SkyNest?</h2>
            <ul className="why-list">
              {whyChoose.map((item) => (
                <li key={item.title}>
                  <Icon name="checkCircle" />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Resident community ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow">Our community</p>
            <h2>Who lives at SkyNest?</h2>
            <p className="lead">
              Our homes bring together people at an exciting stage of life – a respectful, social
              community where everyone is new to the city at some point.
            </p>
          </div>
          <div className="grid grid-4">
            {residents.map((item) => (
              <IconCard key={item.title} icon={item.icon} title={item.title}>
                {item.text}
              </IconCard>
            ))}
          </div>

          <div className="cta-band" style={{ marginTop: '56px' }}>
            <h2>Find the package that suits you</h2>
            <p>Compare Essential, Comfort and Premium Living side by side.</p>
            <div className="center-actions">
              <Button to="/packages" className="btn--large">View Packages</Button>
              <Button to="/contact#enquiry-form" variant="outline" className="btn--large">
                <Icon name="mail" size={22} />
                Make an Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
