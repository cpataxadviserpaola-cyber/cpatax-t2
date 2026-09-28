import { useState } from 'react';
import { useSearchParams } from 'react-router';
import Icon from './Icon.jsx';
import { site } from '../data/site.js';
import { services } from '../data/services.js';

const serviceOptions = [
  ...services.map((service) => ({ value: service.id, label: service.name })),
  { value: 'financial-planning', label: 'Financial planning' },
  { value: 'other', label: 'Something else / not sure' },
];

const emptyForm = { name: '', company: '', email: '', phone: '', service: '', message: '' };

export default function ContactForm() {
  // Links such as /contact?service=business pre-select a service.
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState(() => {
    const requested = searchParams.get('service');
    const known = serviceOptions.some((option) => option.value === requested);
    return { ...emptyForm, service: known ? requested : '' };
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get('_gotcha')) return; // A spam bot filled in the hidden field.

    const serviceLabel =
      serviceOptions.find((option) => option.value === values.service)?.label ?? 'General inquiry';

    // No form service connected yet: hand the message to the visitor's email app.
    if (!site.formEndpoint) {
      const subject = `Consultation request: ${serviceLabel}`;
      const body = [
        `Name: ${values.name}`,
        `Company: ${values.company || 'Not provided'}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || 'Not provided'}`,
        `Service: ${serviceLabel}`,
        '',
        values.message,
      ].join('\n');

      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        type: 'success',
        message: `Your email app should now open with your message ready to send. If it doesn't, please email us at ${site.email}.`,
      });
      return;
    }

    setSending(true);
    formData.set('service', serviceLabel);
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setValues(emptyForm);
      setStatus({
        type: 'success',
        message: "Thank you! Your request has been sent, and we'll be in touch soon.",
      });
    } catch {
      setStatus({
        type: 'error',
        message: 'Sorry, your message could not be sent. Please call or email us directly.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required
            value={values.name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="company">
            Company name <span className="optional">(optional)</span>
          </label>
          <input id="company" name="company" type="text" autoComplete="organization"
            value={values.company} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required
            value={values.email} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone <span className="optional">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel"
            value={values.phone} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="service">I'm interested in</label>
          <select id="service" name="service" value={values.service} onChange={handleChange}>
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field field-full">
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message" required
            placeholder="Briefly describe your situation and any upcoming deadlines."
            value={values.message} onChange={handleChange} />
        </div>
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="gotcha">Leave this field empty</label>
        <input id="gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="form-note">
        <Icon name="lock" />
        <span>
          Please don't include Social Security numbers or other sensitive details here. We'll share
          documents with you through our secure client portal.
        </span>
      </p>

      <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send Request'}
        <Icon name="arrow" />
      </button>
      <p className={`form-status${status ? ` is-${status.type}` : ''}`} role="status">
        {status?.message}
      </p>
    </form>
  );
}
