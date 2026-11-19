import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// When the page changes, scroll to the top.
// If the link has a #section (e.g. /packages#facilities), scroll to that section instead.
//
// Version 2:
// - Pages now load on demand (React.lazy), so the #section may not exist for a moment.
//   We keep checking for a short time until it appears.
// - Keyboard accessibility: after moving to a new page, focus goes to the main content,
//   so keyboard and screen reader users start at the new page, not at the old link.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const previous = useRef(null); // the address before this change

  useEffect(() => {
    let tries = 0;
    let timer;

    function go() {
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView();
          return;
        }
        if (tries < 40) {
          tries += 1;
          timer = setTimeout(go, 50); // try again in 50ms (up to 2 seconds)
          return;
        }
      }
      window.scrollTo(0, 0);
    }

    go();

    // Only when the address really changed (not on the first load, so the
    // "Skip to main content" link is still the first thing Tab reaches)
    if (previous.current !== null && previous.current !== pathname + hash) {
      document.getElementById('main-content')?.focus({ preventScroll: true });
    }
    previous.current = pathname + hash;

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
