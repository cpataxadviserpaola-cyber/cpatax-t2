import { useRef, useState } from 'react';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { links } from '../data/site.js';
import { feeFactors, pricingNotes, pricingTables } from '../data/pricing.js';
import { deadlineCountdown, getUpcomingDeadlines } from '../data/deadlines.js';
import { asset } from '../utils/asset.js';

const tools = [
  {
    icon: 'lock',
    title: 'Client portal login',
    text: 'Upload documents, sign forms electronically, and message our team securely.',
    href: links.portal,
    label: 'Log in to the portal',
  },
  {
    icon: 'card',
    title: 'Pay my fee',
    text: 'Pay your invoice online through our secure payment page.',
    href: links.payment,
    label: 'Make a payment',
  },
  {
    icon: 'calendar',
    title: 'Schedule an appointment',
    text: 'Book a consultation at a time that works for you.',
    href: links.schedule,
    label: 'Book a time',
  },
  {
    icon: 'file-check',
    title: 'Track your refund',
    text: "Check the status of your federal refund with the IRS. For state refunds, visit your state's revenue department.",
    href: links.refund,
    label: "IRS Where's My Refund",
  },
];

const portalSteps = [
  { icon: 'user', title: 'Log in', text: 'Sign in to the client portal with the credentials from your invitation email.' },
  { icon: 'file', title: 'Upload documents', text: 'Add your tax forms and records securely, no printing or scanning required.' },
  { icon: 'file-check', title: 'Review and sign', text: 'Review engagement letters and returns, and sign them electronically.' },
  { icon: 'chat', title: 'Message our team', text: 'Ask questions and receive updates in one secure place.' },
];

const monthOf = (date) => date.toLocaleDateString('en-US', { month: 'short' });

export default function ClientCenter() {
  usePageMeta(
    'Client Center',
    'Client portal login, online payments, scheduling, refund tracking, upcoming IRS deadlines, and the 2026 pricing guide for CPA Tax Adviser clients.',
  );

  const upcoming = getUpcomingDeadlines(4);

  return (
    <>
      <PageHero page="Client Center" eyebrow="Client center" title={<>Tax season tools <em>and resources</em></>}>
        Log in to your portal, pay your invoice, schedule time with us, and see our current
        pricing, all in one place.
      </PageHero>

      <section className="section section-tight">
        <div className="container">
          <div className="tool-grid reveal">
            {tools.map((tool) => (
              <a className="tool-card" key={tool.title} href={tool.href} target="_blank" rel="noopener noreferrer">
                <span className="tool-top">
                  <span className="icon-badge">
                    <Icon name={tool.icon} />
                  </span>
                  <span className="svc-card-go">
                    <Icon name="arrow-up-right" />
                  </span>
                </span>
                <h2>{tool.title}</h2>
                <p>{tool.text}</p>
                <span className="tool-link">{tool.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="section section-white">
          <div className="container calendar">
            <SectionHead eyebrow="Tax calendar" title={<>Upcoming <em>IRS deadlines</em></>}>
              Federal deadlines for calendar-year filers. Weekends, holidays, and disaster relief
              can move a date, so check with us if you're unsure.
            </SectionHead>
            <ol className="deadline-list reveal">
              {upcoming.map((deadline, index) => (
                <li className={index === 0 ? 'is-next' : undefined} key={deadline.date}>
                  <span className="dl-date" aria-hidden="true">
                    <small>{monthOf(deadline.day)}</small>
                    {deadline.day.getDate()}
                  </span>
                  <span className="dl-body">
                    <time className="sr-only" dateTime={deadline.date}>
                      {deadline.day.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}:
                    </time>
                    <span className="dl-what">{deadline.label}</span>
                    <span className="dl-left">{deadlineCountdown(deadline.daysLeft)}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section" id="pricing">
        <div className="container">
          <SectionHead eyebrow="Pricing" title={<>Investment in your <em>tax services</em></>} center>
            {pricingNotes.intro}
          </SectionHead>
          <Pricing />
          <div className="fee-factors reveal">
            <h3 className="fee-factors-title">
              What affects <em>your fee</em>
            </h3>
            <article className="fee-factor">
              <span className="icon-badge">
                <Icon name="file-check" />
              </span>
              <h4>How organized your records are</h4>
              <p>{feeFactors.organization}</p>
            </article>
            <article className="fee-factor">
              <span className="icon-badge icon-badge-gold">
                <Icon name="chart" />
              </span>
              <h4>How complex your situation is</h4>
              <p>{feeFactors.complexity}</p>
              <ul className="tags" aria-label="Life events that often add complexity">
                {feeFactors.events.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="pricing-foot reveal">
            <p>
              <Icon name="file" />
              <span>
                {pricingNotes.final} Because every small business is unique, we also offer tailored
                accounting and tax bundles.
              </span>
            </p>
            <a className="btn btn-primary" href={asset(links.pricingGuide)} target="_blank" rel="noopener noreferrer">
              Download the 2026 pricing guide (PDF)
              <Icon name="external" />
            </a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHead eyebrow="Client portal" title={<>Getting around <em>the portal</em></>} center>
            Our secure client portal keeps your documents, signatures, and messages in one place.
          </SectionHead>
          <ProcessSteps steps={portalSteps} />
        </div>
      </section>

      <CtaSection
        title={<>Questions about <em>tax season?</em></>}
        text="Our team is happy to help with your documents, your return, or your account."
      />
    </>
  );
}

// Individual and business pricing as two tabs of tier cards. Arrow keys move between tabs.
function Pricing() {
  const [active, setActive] = useState(pricingTables[0].id);
  const tabRefs = useRef([]);
  const table = pricingTables.find((item) => item.id === active);
  const note = { individual: pricingNotes.typical, business: pricingNotes.business }[table.id];

  const onKeyDown = (event) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const index = pricingTables.findIndex((item) => item.id === active);
    const next = (index + step + pricingTables.length) % pricingTables.length;
    setActive(pricingTables[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="pricing reveal">
      <div className="pricing-tabs" role="tablist" aria-label="Pricing" onKeyDown={onKeyDown}>
        {pricingTables.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            id={`pricing-tab-${item.id}`}
            className="pricing-tab"
            type="button"
            role="tab"
            aria-selected={item.id === active}
            aria-controls="pricing-panel"
            tabIndex={item.id === active ? 0 : -1}
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="pricing-panel" id="pricing-panel" role="tabpanel" aria-labelledby={`pricing-tab-${table.id}`}>
        <div className={`tiers tiers-${table.rows.length}`} key={table.id}>
          {table.rows.map((row) => (
            <article className={`tier${row.featured ? ' is-featured surface-dark' : ''}`} key={row.level}>
              {row.featured && <span className="tier-tag">Most clients</span>}
              <h3 className="tier-level">{row.level}</h3>
              <p className="tier-price">{row.price}</p>
              <p className="tier-caption">{table.columns[2]}</p>
              <p className="tier-detail">
                <span>{table.columns[1]}</span>
                {row.detail}
              </p>
            </article>
          ))}
        </div>
        {note && <p className="pricing-note">{note}</p>}
      </div>
    </div>
  );
}
