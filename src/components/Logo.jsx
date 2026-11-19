// Logo.jsx - the SkyNest logo: a roof, a nest and a small bird, plus the name.
// variant="light" is used on dark backgrounds (the footer).
import './Logo.css';

export default function Logo({ variant = 'dark' }) {
  return (
    <span className={`logo logo--${variant}`}>
      <svg
        className="logo-mark"
        viewBox="0 0 48 40"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        {/* roof */}
        <polyline className="logo-roof" points="6,21 22,8 38,21" strokeWidth="3.5" />
        {/* nest */}
        <path className="logo-nest" d="M12 26 Q22 36 32 26" strokeWidth="3.5" />
        {/* bird */}
        <path className="logo-bird" d="M33 8 q2.5 -3 5 0 q2.5 -3 5 0" strokeWidth="2.2" />
      </svg>
      <span className="logo-text">
        Sky<span>Nest</span>
        <small>Co-Living Spaces</small>
      </span>
    </span>
  );
}
