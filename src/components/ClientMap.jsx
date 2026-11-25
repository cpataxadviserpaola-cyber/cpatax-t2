import { useState } from 'react';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { DOT_STEP, states, viewBox } from '../data/usMap.js';
import { clientStates, homeState } from '../data/clientStates.js';

// A map pin with its point at 0,0: a round head 16 units wide, 24 units tall in all.
const PIN = 'M0 0C-1.5-4-8-8.5-8-15.5a8 8 0 1 1 16 0C8-8.5 1.5-4 0 0Z';

// Every other state's dots as one path; each client state gets its own, so it can light up.
const otherDots = Object.entries(states)
  .filter(([code]) => !clientStates.includes(code))
  .map(([, state]) => state.dots)
  .join('');

// Pins drawn north to south, so a pin further south sits over the point of the one above it.
// `order` is the state's place in the firm's list, which sets when its pin drops in.
const pins = clientStates
  .map((code, order) => ({ code, order, ...states[code] }))
  .sort((a, b) => a.pin[1] - b.pin[1]);

const round = (value) => Math.round(value * 10) / 10;

// A line from one point to another, bowed upward like a flight path.
function arc([x1, y1], [x2, y2]) {
  const length = Math.hypot(x2 - x1, y2 - y1);
  let nx = (y1 - y2) / length;
  let ny = (x2 - x1) / length;
  if (ny > 0) {
    nx = -nx;
    ny = -ny;
  }
  const bend = length * 0.2;
  return `M${x1} ${y1}Q${round((x1 + x2) / 2 + nx * bend)} ${round((y1 + y2) / 2 + ny * bend)} ${x2} ${y2}`;
}

// Home page: the states where most clients are, as glowing pins on a dotted map of the U.S.
// with lines running out from the home state, and listed by name beside it. Pointing at a
// state's name or its pin lights up both. The names carry the information; the map is a
// picture of it, so screen readers get it as one image with the states named.
export default function ClientMap() {
  const [active, setActive] = useState(null);
  const home = states[homeState].pin;
  const names = clientStates.map((code) => states[code].name);

  const pointAt = (code) => ({
    onMouseEnter: () => setActive(code),
    onMouseLeave: () => setActive((current) => (current === code ? null : current)),
  });

  return (
    <section className="section client-map surface-dark" id="client-map">
      <div className="container client-map-grid">
        <div className="client-map-copy">
          <SectionHead eyebrow="Clients nationwide" title={<>Serving clients <em>across the U.S.</em></>}>
            Licensed in South Carolina, we serve clients nationwide. Most of our clients are in
            these {clientStates.length} states.
          </SectionHead>
          <ul className="client-states reveal" aria-label="States where most of our clients are">
            {clientStates.map((code) => (
              <li key={code} className={`client-state${code === active ? ' is-active' : ''}`} {...pointAt(code)}>
                <Icon name="pin" />
                {states[code].name}
              </li>
            ))}
          </ul>
        </div>

        <figure className="client-map-figure reveal">
          <svg
            viewBox={viewBox.join(' ')}
            role="img"
            aria-label={`Map of the United States with a pin on each of these states: ${names.join(', ')}.`}
          >
            <g className="map-dots" strokeDasharray={`0.01 ${DOT_STEP - 0.01}`}>
              <path className="map-dots-other" d={otherDots} />
              {clientStates.map((code) => (
                <path
                  key={code}
                  className={`map-dots-client${code === active ? ' is-active' : ''}`}
                  d={states[code].dots}
                />
              ))}
            </g>

            <g className="map-arcs">
              {pins
                .filter((pin) => pin.code !== homeState)
                .map((pin) => (
                  <path
                    key={pin.code}
                    className="map-arc"
                    d={arc(home, pin.pin)}
                    pathLength="1"
                    style={{ '--i': pin.order }}
                  />
                ))}
            </g>

            {pins.map((pin) => (
              <g
                key={pin.code}
                className={`map-pin${pin.code === homeState ? ' is-home' : ''}${pin.code === active ? ' is-active' : ''}`}
                transform={`translate(${pin.pin.join(' ')})`}
                style={{ '--i': pin.order }}
                {...pointAt(pin.code)}
              >
                <title>{pin.name}</title>
                <ellipse className="map-pin-pulse" rx="10" ry="4" />
                <g className="map-pin-mark">
                  <path d={PIN} />
                  <circle cy="-15.5" r="3.2" />
                </g>
              </g>
            ))}
          </svg>
        </figure>
      </div>
    </section>
  );
}
