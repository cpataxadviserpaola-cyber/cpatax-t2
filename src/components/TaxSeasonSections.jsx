import { useRef, useState } from 'react';
import Icon from './Icon.jsx';
import ProcessSteps from './ProcessSteps.jsx';
import SectionHead from './SectionHead.jsx';
import { links } from '../data/site.js';
import { pricingNotes, pricingTables } from '../data/pricing.js';
import { portalSteps, taxSeasonSteps } from '../data/process.js';
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
  {
    icon: 'banknote',
    title: 'Pay the IRS',
    text: 'Make a federal tax payment straight from your bank account, at no cost.',
    href: links.irsDirectPay,
    label: 'IRS Direct Pay',
  },
  {
    icon: 'user',
    title: 'Your IRS account',
    text: 'See your balance, payment history, and tax records with the IRS.',
    href: links.irsAccount,
    label: 'IRS online account',
  },
  {
    icon: 'target',
    title: 'Check your withholding',
    text: 'Estimate how much tax your employer or pension provider should withhold.',
    href: links.irsWithholding,
    label: 'IRS Withholding Estimator',
  },
  {
    icon: 'file',
    title: '2026 pricing guide',
    text: 'Our current fees for individual and business tax preparation, in one PDF.',
    href: asset(links.pricingGuide),
    label: 'Download the guide',
  },
];

export function TaxSeasonProcessContent() {
  return <ProcessSteps steps={taxSeasonSteps} />;
}

export function TaxSeasonPricingContent() {
  return (
    <>
      <section className="pricing-structure">
        <SectionHead
          eyebrow="Our pricing structure"
          title={<>Fees that reflect <em>your situation</em></>}
          center
        >
          We understand that every tax situation is unique. Our pricing structure is thoughtfully
          designed to align with the complexity and time investment required for each return.
          Explore the guide below to find the tier that best suits your needs.
        </SectionHead>
        <Pricing />
      </section>

      <div className="pricing-foot reveal">
        <p>
          <Icon name="file" />
          <span>
            {pricingNotes.final}
          </span>
        </p>
        <a className="btn btn-primary" href={asset(links.pricingGuide)} target="_blank" rel="noopener noreferrer">
          CPA Tax Adviser Pricing Guide 2026
          <Icon name="external" />
        </a>
      </div>
    </>
  );
}

export function ClientPortalContent() {
  return (
    <>
      <ProcessSteps steps={portalSteps} />
      <p className="section-action reveal">
        <a className="btn btn-primary btn-lg" href={links.portal} target="_blank" rel="noopener noreferrer">
          <Icon name="lock" />
          Log in to the client portal
        </a>
      </p>
    </>
  );
}

export function TaxToolboxContent() {
  return (
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
          <h3>{tool.title}</h3>
          <p>{tool.text}</p>
          <span className="tool-link">{tool.label}</span>
        </a>
      ))}
    </div>
  );
}

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
