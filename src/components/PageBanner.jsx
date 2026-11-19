// PageBanner.jsx - the big heading area with a photo at the top of each inner page.
// Version 2: uses <Photo> so phones download a smaller banner image.
import Photo from './Photo.jsx';

export default function PageBanner({ eyebrow, title, intro, image }) {
  return (
    <section className="page-banner">
      {/* The first image on the page loads straight away (not lazy) */}
      {/* On phones the banner is taller than it is wide, so it needs an 800px image */}
      <Photo
        image={image}
        width={1800}
        height={600}
        sizes="(max-width: 600px) 800px, 100vw"
        priority
      />
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="banner-intro">{intro}</p>}
      </div>
    </section>
  );
}
