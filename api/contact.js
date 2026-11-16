/**
 * Serverless Contact Form Endpoint for Brevo (Vercel / Netlify / Node)
 *
 * When deployed to Vercel, requests to /api/contact are handled by this function.
 * This keeps your BREVO_API_KEY secure on the server side.
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, company, email, phone, service, message, _gotcha } = body || {};

    // Spam bot check
    if (_gotcha) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const apiKey = process.env.BREVO_API_KEY || process.env.VITE_BREVO_API_KEY;
    const notificationTemplateId =
      process.env.BREVO_NOTIFICATION_TEMPLATE_ID || process.env.VITE_BREVO_NOTIFICATION_TEMPLATE_ID;
    const autoReplyTemplateId =
      process.env.BREVO_AUTOREPLY_TEMPLATE_ID || process.env.VITE_BREVO_AUTOREPLY_TEMPLATE_ID;

    if (!apiKey || !notificationTemplateId) {
      return res.status(500).json({ error: 'Brevo credentials not configured on the server.' });
    }

    const receiverEmail =
      process.env.BREVO_RECEIVER_EMAIL ||
      process.env.VITE_FORM_RECEIVER_EMAIL ||
      'contactus@cpataxadviser.com';

    // 1. Send Notification to CPA Tax Adviser
    const notifyPayload = {
      templateId: Number(notificationTemplateId),
      to: [{ email: receiverEmail, name: 'CPA Tax Adviser' }],
      replyTo: { email, name },
      params: {
        name,
        email,
        company: company || 'Not provided',
        phone: phone || 'Not provided',
        service: service || 'General inquiry',
        message,
      },
    };

    const notifyRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(notifyPayload),
    });

    if (!notifyRes.ok) {
      const errData = await notifyRes.json().catch(() => ({}));
      return res.status(notifyRes.status).json({
        error: errData.message || 'Failed to send notification via Brevo.',
      });
    }

    // 2. Optional Auto-Reply to Client
    if (autoReplyTemplateId) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          templateId: Number(autoReplyTemplateId),
          to: [{ email, name }],
          replyTo: { email: 'contactus@cpataxadviser.com', name: 'CPA Tax Adviser' },
          params: {
            name,
            service: service || 'General inquiry',
            message,
          },
        }),
      }).catch((err) => console.warn('Brevo auto-reply warning:', err));
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Server error handling contact request:', error);
    return res.status(500).json({ error: error.message || 'Internal server error.' });
  }
}
