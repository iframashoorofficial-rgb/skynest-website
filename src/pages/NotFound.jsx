// NotFound.jsx - shown if someone types an address that does not exist.
import Button from '../components/Button.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="section not-found">
      <div className="container">
        <h1>Page not found</h1>
        <p className="lead">Sorry, we could not find that page.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  );
}
