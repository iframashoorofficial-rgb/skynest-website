// EnquiryForm.jsx - the contact form with validation.
//
// IMPORTANT: this is a DEMO form. There is no backend (server), so nothing is
// emailed or saved. After a valid submission we show a clearly labelled demo
// confirmation, and the details only ever exist inside this browser tab.
import { useRef, useState } from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import { packages, formatPrice } from '../data/packages.js';
import './EnquiryForm.css';

const emptyForm = { name: '', email: '', phone: '', package: '', message: '' };

// Options for the "Interested package" drop-down
const packageOptions = [
  ...packages.map((pkg) => ({
    value: pkg.id,
    label: `${pkg.name} – ${formatPrice(pkg.price)} / month`,
  })),
  { value: 'not-sure', label: 'Not sure yet – please advise me' },
];

// ---------- Validation rules ----------
// Returns an object of error messages, e.g. { email: 'Please enter...' }.
// An empty object means the form is valid.
export function validate(values) {
  const errors = {};

  if (values.name.trim() === '') {
    errors.name = 'Please enter your full name.';
  }

  const email = values.email.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (email === '') {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email address, for example name@example.com.';
  }

  const phone = values.phone.trim();
  const phonePattern = /^\+?[0-9\s()-]+$/; // digits, spaces, brackets, hyphens and an optional + at the start
  const digitCount = phone.replace(/\D/g, '').length;
  if (phone === '') {
    errors.phone = 'Please enter your phone number.';
  } else if (!phonePattern.test(phone)) {
    errors.phone =
      'Phone number can only contain numbers, spaces, brackets, hyphens and a + at the start.';
  } else if (digitCount < 7 || digitCount > 15) {
    errors.phone = 'Phone number must contain between 7 and 15 digits.';
  }

  if (values.package === '') {
    errors.package = 'Please choose the package you are interested in.';
  }

  if (values.message.trim() === '') {
    errors.message = 'Please enter a message.';
  }

  return errors;
}

// The order fields appear in, used for the error summary
const fieldLabels = {
  name: 'Full name',
  email: 'Email address',
  phone: 'Phone number',
  package: 'Interested package',
  message: 'Message',
};

export default function EnquiryForm({ initialPackage = '' }) {
  const [values, setValues] = useState({ ...emptyForm, package: initialPackage });
  const [errors, setErrors] = useState({});
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(null); // holds the demo confirmation details

  const errorSummary = useRef(null);
  const successBox = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);

    // After the first submit attempt, update the errors as the user fixes them
    if (triedToSubmit) {
      setErrors(validate(newValues));
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page
    setTriedToSubmit(true);

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Move focus to the error list so screen reader users hear the problems
      setTimeout(() => errorSummary.current?.focus(), 0);
      return;
    }

    // Valid! Show the demo confirmation. Nothing is sent or stored.
    const chosen = packageOptions.find((option) => option.value === values.package);
    setSubmitted({ name: values.name.trim(), packageLabel: chosen ? chosen.label : '' });
    setValues(emptyForm);
    setTriedToSubmit(false);
    setErrors({});
    setTimeout(() => successBox.current?.focus(), 0);
  }

  function startAgain() {
    setSubmitted(null);
  }

  // Clicking an error in the summary moves the cursor into that field
  function focusField(event, field) {
    event.preventDefault();
    document.getElementById(`enquiry-${field}`)?.focus();
  }

  // ---------- Demo confirmation ----------
  if (submitted) {
    return (
      <div className="form-success" ref={successBox} tabIndex="-1" role="status">
        <p className="demo-tag">Demo only</p>
        <h3>
          <Icon name="checkCircle" size={26} />
          Demo enquiry submitted successfully
        </h3>
        <p>
          Thank you, <strong>{submitted.name}</strong>. Your enquiry about{' '}
          <strong>{submitted.packageLabel}</strong> passed all the form checks.
        </p>
        <p className="demo-note">
          <strong>Please note:</strong> this is a demonstration website with no server
          connected. Your enquiry has <strong>not</strong> been sent to anyone and has{' '}
          <strong>not</strong> been saved. The details stayed in your browser and the form has
          been cleared.
        </p>
        <Button variant="outline" onClick={startAgain}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  // ---------- The form ----------
  const errorList = Object.keys(fieldLabels).filter((field) => errors[field]);

  // Helper that gives each input the right accessibility attributes
  function fieldProps(field, hasHint = false) {
    const hasError = Boolean(errors[field]);
    const describedBy = [
      hasHint ? `enquiry-${field}-hint` : null,
      hasError ? `enquiry-${field}-error` : null,
    ].filter(Boolean);
    return {
      id: `enquiry-${field}`,
      name: field,
      value: values[field],
      onChange: handleChange,
      required: true,
      'aria-invalid': hasError,
      'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined,
    };
  }

  // Shows the error message under a field (only if that field has an error)
  function errorText(field) {
    if (!errors[field]) return null;
    return (
      <p className="field-error" id={`enquiry-${field}-error`}>
        <Icon name="alert" size={18} />
        <span>
          <span className="visually-hidden">Error: </span>
          {errors[field]}
        </span>
      </p>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      {errorList.length > 0 && (
        <div className="error-summary" ref={errorSummary} tabIndex="-1" role="alert">
          <h3>
            <Icon name="alert" size={22} />
            Please fix {errorList.length === 1 ? '1 problem' : `${errorList.length} problems`} before
            sending
          </h3>
          <ul>
            {errorList.map((field) => (
              <li key={field}>
                <a href={`#enquiry-${field}`} onClick={(event) => focusField(event, field)}>
                  {fieldLabels[field]}: {errors[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="form-required-note">
        All fields marked <span aria-hidden="true">*</span>
        <span className="visually-hidden">with an asterisk</span> are required.
      </p>

      <div className="form-field">
        <label htmlFor="enquiry-name">
          Full name <span className="required" aria-hidden="true">*</span>
        </label>
        <input type="text" autoComplete="name" {...fieldProps('name')} />
        {errorText('name')}
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="enquiry-email">
            Email address <span className="required" aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" {...fieldProps('email')} />
          {errorText('email')}
        </div>

        <div className="form-field">
          <label htmlFor="enquiry-phone">
            Phone number <span className="required" aria-hidden="true">*</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...fieldProps('phone', true)} />
          <p className="field-hint" id="enquiry-phone-hint">For example +65 50 000 0000</p>
          {errorText('phone')}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="enquiry-package">
          Interested package <span className="required" aria-hidden="true">*</span>
        </label>
        <select {...fieldProps('package')}>
          <option value="">Select a package</option>
          {packageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errorText('package')}
      </div>

      <div className="form-field">
        <label htmlFor="enquiry-message">
          Message <span className="required" aria-hidden="true">*</span>
        </label>
        <textarea
          rows="5"
          placeholder="Tell us your move-in date, how long you would like to stay and any questions."
          {...fieldProps('message')}
        />
        {errorText('message')}
      </div>

      <p className="form-demo-note">
        <Icon name="alert" size={18} />
        Demo form: no enquiry is sent or stored.
      </p>

      <button type="submit" className="btn btn--primary btn--block">
        Send Enquiry
      </button>
    </form>
  );
}
