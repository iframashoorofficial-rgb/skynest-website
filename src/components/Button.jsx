// Button.jsx - one reusable button.
// - If you give it "to", it becomes a link to another page (React Router <Link>).
// - Otherwise it is a normal <button> (for example the form's submit button).
// variant can be "primary", "outline" or "light".
import { Link } from 'react-router-dom';

export default function Button({ to, variant = 'primary', className = '', children, ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
