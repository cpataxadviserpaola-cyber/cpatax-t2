import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Icon from './Icon.jsx';
import { site } from '../data/site.js';
import { asset } from '../utils/asset.js';

// The banner's slides, in the firm's words: a headline, a line under it, and a button. `label`
// names the slide for screen readers. `line` is a list of short facts set side by side;
// otherwise `text` is a sentence. The photos are free Unsplash photos (unsplash.com/license:
// images.unsplash.com/photo-1551836022-aadb801c60ae, -1579621970563-ebec7560ff3e, mirrored so
// the plant sits clear of the text, and -1521791136064-7986c2920216), saved in public/hero/
// at 1920 and 960 pixels wide; they only set the scene, so they have no alt text.
const slides = [
  {
    label: 'Welcome',
    photo: 'client-meeting',
    title: 'Trusted tax and accounting support to help you save more and grow.',
    line: ['South Carolina Licensed CPA Firm', 'Helping Clients Across the U.S.'],
    action: { to: '/contact', label: 'Speak with your CPA' },
  },
  {
    label: 'Growth',
    photo: 'savings-growth',
    title: 'Smart Tax Planning. Steady Growth.',
    text: 'Keep more of what you earn and watch it grow.',
    action: { to: '/services', label: 'See How We Help' },
  },
  {
    label: 'Partnership',
    photo: 'handshake',
    title: 'A Partner for Every Stage of Growth',
    text: 'From startups to established practices, we grow with you.',
    action: { to: '/contact', label: 'Get Started Today' },
  },
];
const SLIDE_MS = 6000;

// The home page banner: the slides fading one into the next on their own, with a bar per slide
// (the current one fills while it shows) to jump to it. The slideshow holds while the pointer
// is over it or keyboard focus is inside it, so a slide stays put while it's read or its
// button is used. The page's main heading is there for screen readers and
// search engines only.
export default function HomeHero() {
  const [slide, setSlide] = useState(0);
  // Visitors who ask for less motion get no automatic changes; the bars still switch slides.
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [held, setHeld] = useState(false);
  const stopped = reducedMotion || held;

  // Moves on to the next slide after SLIDE_MS; picking a slide, or the pointer or focus
  // leaving, starts the wait over.
  useEffect(() => {
    if (stopped) return undefined;
    const timer = setTimeout(() => setSlide((index) => (index + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [slide, stopped]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHeld(false);
      }}
    >
      <h1 className="sr-only">{site.slogan}</h1>

      {/* Screen readers hear a new slide only once the slideshow has stopped moving. */}
      <div className="hero-track" aria-live={stopped ? 'polite' : 'off'}>
        {slides.map((item, index) => (
          <div
            key={item.label}
            className={`hero-slide${index === slide ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${item.label}, ${index + 1} of ${slides.length}`}
            inert={index !== slide}
          >
            <img
              className="hero-photo"
              src={asset(`hero/${item.photo}-1920.webp`)}
              srcSet={`${asset(`hero/${item.photo}-960.webp`)} 960w, ${asset(`hero/${item.photo}-1920.webp`)} 1920w`}
              sizes="100vw"
              alt=""
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
            <div className="container hero-caption surface-dark">
              <h2 className="hero-title">{item.title}</h2>
              {item.line ? (
                <p className="hero-line">
                  {item.line.map((fact) => (
                    <span key={fact}>{fact}</span>
                  ))}
                </p>
              ) : (
                <p className="hero-lead">{item.text}</p>
              )}
              <div className="hero-actions">
                <Link className="btn btn-gold btn-lg" to={item.action.to}>
                  {item.action.label}
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`hero-slides-nav${stopped ? ' is-paused' : ''}`} style={{ '--slide-ms': `${SLIDE_MS}ms` }}>
        {slides.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className="hero-slides-dot"
            aria-label={`Show slide ${index + 1} of ${slides.length}: ${item.label}`}
            aria-pressed={index === slide}
            onClick={() => setSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
