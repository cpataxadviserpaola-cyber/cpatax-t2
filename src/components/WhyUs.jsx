import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import useStickyFit from '../hooks/useStickyFit.js';
import { monthNames, touchpoints } from '../data/yearPlan.js';

// What sets the firm apart. The intro and its checklist stay in view while the cards on the
// right pile up on top of each other as the page scrolls (on wide screens).
// The figures echo the service commitments in src/data/site.js; keep them in step.
const highlights = [
  'Proactive tax planning',
  'Year-round support',
  'Business advisory',
  'Personalized strategies',
  'Secure & paperless',
  'International clients',
];

const cards = [
  {
    tone: 'dark',
    kicker: 'Year-round guidance',
    title: 'With you in every season, not just at tax time',
    text: 'We work with you all year long to develop strategies that lower your tax bill.',
    visual: <YearTimeline />,
  },
  {
    tone: 'light',
    kicker: 'A trusted partner',
    title: 'Not a once-a-year tax preparer',
    text: 'Work with a CPA who understands how your business truly operates, not just the numbers.',
    visual: <ChatPreview />,
  },
  {
    tone: 'gold',
    kicker: 'Dual credentials',
    title: 'Tax strategy meets financial planning',
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
    title: 'Minority & women-owned',
    text: 'A South Carolina Minority/Women-Owned Business Enterprise, serving clients in English and Spanish.',
    visual: <MwbeRing />,
  },
  {
    tone: 'light',
    kicker: 'Paperless & secure',
    title: 'Upload, sign, and pay from anywhere',
    text: 'A secure client portal for documents and e-signatures, plus online payments.',
    visual: <UploadPreview />,
  },
  {
    tone: 'dark',
    kicker: 'International clients',
    title: 'U.S. tax filing for clients with international ties',
    text: 'Nonresidents, expatriates, international students, and foreign investors.',
    visual: <FormList />,
  },
];

export default function WhyUs({ id }) {
  const introRef = useStickyFit();

  return (
    <section className="section section-white why" id={id}>
      <div className="container why-grid">
        <div className="why-intro" ref={introRef}>
          <SectionHead
            eyebrow="The CPA Tax Adviser difference"
            title={<>More than tax planning &amp; <em>preparation.</em></>}
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

        <div className="why-stack">
          {cards.map((card, index) => (
            <article
              key={card.kicker}
              className={`why-card why-${card.tone} reveal${card.tone === 'dark' ? ' surface-dark' : ''}`}
              style={{ '--i': index }}
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
      </div>
    </section>
  );
}

const TYPICAL = [3];

// Two rows of months: a typical firm is active only at filing time; we are there all year.
function YearTimeline() {
  const ours = touchpoints.map((point) => point.month);
  const row = (label, active, className) => (
    <div className={`year-row ${className}`}>
      <span className="year-label">{label}</span>
      {monthNames.map((name, month) => (
        <span key={name} className={`year-dot${active.includes(month) ? ' is-on' : ''}`} />
      ))}
    </div>
  );

  return (
    <div className="year" aria-hidden="true">
      {row('Typical firm', TYPICAL, 'is-typical')}
      {row('With us', ours, 'is-ours')}
      <div className="year-row year-months">
        <span />
        {monthNames.map((name) => (
          <span key={name}>{name.charAt(0)}</span>
        ))}
      </div>
      <ul className="year-legend">
        {touchpoints.map((point) => (
          <li key={point.month}>
            <strong>{monthNames[point.month]}</strong>
            {point.label}
          </li>
        ))}
      </ul>
    </div>
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
        International filings we handle
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
