import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';

// What sets the firm apart: the intro beside its checklist, then a grid of cards.
// The figures echo the service commitments in src/data/site.js; keep them in step.
const highlights = [
  'Proactive tax planning',
  'Business consulting',
  'Personalized strategies',
  'Secure & paperless',
  'International clients',
];

const cards = [
  {
    tone: 'light',
    kicker: 'A trusted partner',
    title: 'Not a Once-a-Year Tax Preparer',
    text: 'Work with a CPA who understands how your business truly operates, not just the numbers.',
    visual: <ChatPreview />,
  },
  {
    tone: 'gold',
    kicker: 'Dual credentials',
    title: 'Tax Strategy Meets Financial Planning',
    text: 'Our founder integrates tax strategy with long-term financial planning.',
    visual: (
      <p className="cred-big" aria-hidden="true">
        CPA <em>+</em> CFP<sup>®</sup>
      </p>
    ),
  },
  {
    tone: 'light',
    kicker: 'Certified & bilingual',
    title: 'Minority & Women-Owned',
    text: 'A South Carolina Minority/Women-Owned Business Enterprise, serving clients in English and Spanish.',
    visual: <MwbeRing />,
  },
  {
    tone: 'light',
    kicker: 'Paperless & secure',
    title: 'Upload, Sign, and Pay from Anywhere',
    text: 'A secure client portal for documents and e-signatures, plus online payments.',
    visual: <UploadPreview />,
  },
  {
    tone: 'dark',
    kicker: 'International clients',
    title: 'U.S. Tax Filing for Clients with International Ties',
    text: 'Nonresidents, expatriates, international students, and foreign investors.',
    visual: <FormList />,
  },
];

export default function WhyUs({ id, showCards = true }) {
  return (
    <section className="section section-white why" id={id}>
      <div className="container">
        <div className="why-intro">
          <SectionHead
            eyebrow="The CPA Tax Adviser difference"
            title={<>More Than Tax Planning &amp; <em>Preparation.</em></>}
          >
            We provide experienced tax and advisory support designed to help businesses,
            professionals, and individuals make informed decisions and plan confidently for the
            future.
          </SectionHead>
          <ul className="why-index reveal" aria-label="What sets us apart">
            {highlights.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {showCards && (
          <div className="why-grid">
            {cards.map((card) => (
              <article
                key={card.kicker}
                className={`why-card why-${card.tone} reveal${card.tone === 'dark' ? ' surface-dark' : ''}`}
              >
                <div className="why-copy">
                  <p className="why-kicker">{card.kicker}</p>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <div className="why-visual">{card.visual}</div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ChatPreview() {
  return (
    <div className="chat" aria-hidden="true">
      <p className="bubble bubble-client">Thinking about buying a rental property. Anything I should know first?</p>
      <div className="bubble-row">
        <span className="chat-avatar">
          <Icon name="check" />
        </span>
        <p className="bubble bubble-cpa">Good timing. Let's model the tax side before you sign. Thursday at 2?</p>
      </div>
      <p className="chat-meta">
        <span className="online-dot" />
        Your CPA · English or Spanish
      </p>
    </div>
  );
}

function MwbeRing() {
  return (
    <div className="ring" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <circle className="ring-track" cx="60" cy="60" r="52" />
        <circle className="ring-fill" cx="60" cy="60" r="52" pathLength="100" />
      </svg>
      <span>MWBE</span>
    </div>
  );
}

const UPLOADS = [
  { name: 'W-2_2025.pdf', size: '184 KB' },
  { name: '1099-B_Brokerage.pdf', size: '312 KB' },
];

function UploadPreview() {
  return (
    <ul className="uploads" aria-hidden="true">
      {UPLOADS.map((file) => (
        <li key={file.name}>
          <span className="file-icon">
            <Icon name="file" />
          </span>
          <span className="file-name">
            <span className="file-title">{file.name}</span>
            <small>{file.size}</small>
          </span>
          <span className="file-ok">
            <Icon name="lock" />
            <span className="file-ok-text">Encrypted</span>
          </span>
        </li>
      ))}
      <li>
        <span className="file-icon">
          <Icon name="file" />
        </span>
        <span className="file-name">
          <span className="file-title">1098_Mortgage.pdf</span>
          <span className="file-bar">
            <span />
          </span>
        </span>
        <span className="file-pct">72%</span>
      </li>
    </ul>
  );
}

const FORMS = [
  { form: '1040-NR', label: 'Nonresident returns' },
  { form: 'FBAR', label: 'Foreign bank accounts' },
  { form: '8938', label: 'FATCA reporting' },
  { form: '8843', label: 'Nonresident students' },
];

function FormList() {
  return (
    <div className="case" aria-hidden="true">
      <p className="case-title">
        <Icon name="globe" />
        International Filings We Handle
      </p>
      <ul className="forms">
        {FORMS.map((item) => (
          <li key={item.form}>
            <span className="form-code">{item.form}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
