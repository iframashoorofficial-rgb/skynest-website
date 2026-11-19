// IconCard.jsx - a small card with an icon, a heading and a short sentence.
// Used for benefits, facilities and the resident community.
// Version 2: optional "href" adds a "Read more" link (used to jump to "Facilities in detail").
import Icon from './Icon.jsx';

export default function IconCard({ icon, title, children, headingLevel = 3, href }) {
  const Heading = `h${headingLevel}`;
  return (
    <div className="card icon-card">
      <span className="icon-badge">
        <Icon name={icon} />
      </span>
      <Heading className="icon-card-title">{title}</Heading>
      <p>{children}</p>
      {href && (
        <a className="text-link icon-card-link" href={href}>
          Read more<span className="visually-hidden"> about {title}</span>
          <Icon name="arrowRight" size={18} />
        </a>
      )}
    </div>
  );
}
