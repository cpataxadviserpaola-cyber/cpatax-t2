import { useState } from 'react';
import Icon from './Icon.jsx';
import { site } from '../data/site.js';

// Newsletter sign-up. Like the contact form, it posts to site.formEndpoint when one is set,
// and otherwise opens the visitor's email app with the request ready to send.
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get('_gotcha')) return; // A spam bot filled in the hidden field.

    if (!site.formEndpoint) {
      const subject = 'Newsletter sign-up';
      const body = `Please add ${email} to the ${site.name} newsletter.`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        type: 'success',
        message: `Your email app should now open with your sign-up ready to send. If it doesn't, email us at ${site.email}.`,
      });
      return;
    }

    setSending(true);
    formData.set('_subject', 'Newsletter sign-up');
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setEmail('');
      setStatus({ type: 'success', message: "Thank you! You're on the list." });
    } catch {
      setStatus({ type: 'error', message: 'Sorry, we could not sign you up. Please email us directly.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <div className="newsletter-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="btn btn-gold" type="submit" disabled={sending}>
          {sending ? 'Signing up…' : 'Subscribe'}
          <Icon name="arrow" />
        </button>
      </div>

      <div className="hp" aria-hidden="true">
        <label htmlFor="newsletter-gotcha">Leave this field empty</label>
        <input id="newsletter-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className={`form-status${status ? ` is-${status.type}` : ''}`} role="status">
        {status?.message}
      </p>
    </form>
  );
}
