import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaSection from '../components/CtaSection.jsx';
import { deadlineCountdown, getUpcomingDeadlines } from '../data/deadlines.js';

const monthOf = (date) => date.toLocaleDateString('en-US', { month: 'short' });

const destinations = [
  {
    to: '/tax-season/process',
    icon: 'calendar',
    title: 'Our Tax Season Process',
    text: 'See what happens from submitting your documents through filing.',
  },
  {
    to: '/tax-season/pricing',
    icon: 'banknote',
    title: 'Pricing',
    text: 'Review our individual and business tax preparation fees.',
  },
  {
    to: '/tax-season/toolbox',
    icon: 'toolbox',
    title: 'Tax Tool Box',
    text: 'Quick links to payments, refund tracking, and IRS tools.',
  },
  {
    to: '/tax-season/client-portal',
    icon: 'laptop',
    title: 'Client Portal Tutorial',
    text: 'Learn how to upload documents, sign, and message us securely.',
  },
];

export default function TaxSeason() {
  const upcoming = getUpcomingDeadlines(4);

  return (
    <>
      <PageHero page="Tax Season" eyebrow="Tax season" title={<>Tax season, <em>made simple</em></>}>
        Choose a topic to find the tax season information you need. Our process, pricing, client
        portal guidance, and tax tools each have their own page.
      </PageHero>

      <section className="section section-white">
        <div className="container">
          <SectionHead eyebrow="Explore tax season" title={<>Choose what you <em>need</em></>} center>
            Find step-by-step guidance, pricing, the client portal tutorial, and useful tax tools.
          </SectionHead>
          <div className="tool-grid reveal">
            {destinations.map((destination) => (
              <Link className="tool-card" key={destination.to} to={destination.to}>
                <span className="tool-top">
                  <span className="icon-badge">
                    <Icon name={destination.icon} />
                  </span>
                  <span className="svc-card-go">
                    <Icon name="arrow" />
                  </span>
                </span>
                <h3>{destination.title}</h3>
                <p>{destination.text}</p>
                <span className="tool-link">Explore this page</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="section" id="deadlines">
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

      <CtaSection
        title={<>Questions about <em>tax season?</em></>}
        text="Our team is happy to help with your documents, your return, or your account."
      />
    </>
  );
}
