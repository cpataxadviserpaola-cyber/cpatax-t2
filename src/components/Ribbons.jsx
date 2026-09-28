import { useId } from 'react';

// Fine gold and crimson lines that twist like the two ribbons in the logo. Each ribbon is a
// bundle of hairlines whose offsets change sign along the curve, so the bundle narrows and
// widens as if turning in space.
const bundle = (count, build) =>
  Array.from({ length: count }, (_, index) => build(index - (count - 1) / 2));

const GOLD = bundle(18, (t) =>
  `M-80 ${470 + t * 5} C 260 ${300 + t * 11}, 560 ${560 - t * 7}, 900 ${380 + t * 3} S 1300 ${150 + t * 9}, 1540 ${210 - t * 2}`,
);

const CRIMSON = bundle(12, (t) =>
  `M-80 ${560 + t * 3} C 320 ${440 - t * 7}, 660 ${300 + t * 10}, 1010 ${360 + t * 2} S 1320 ${330 - t * 8}, 1540 ${90 + t * 5}`,
);

export default function Ribbons({ className = '' }) {
  // useId output can contain characters that are awkward inside url(#…) references.
  const id = useId().replace(/[^\w-]/g, '');

  return (
    <svg
      className={`ribbons ${className}`.trim()}
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#dfbe86" stopOpacity="0" />
          <stop offset=".42" stopColor="#dfbe86" stopOpacity=".85" />
          <stop offset="1" stopColor="#ecd3a8" stopOpacity=".08" />
        </linearGradient>
        <linearGradient id={`${id}-crimson`} x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b31f3b" stopOpacity="0" />
          <stop offset=".62" stopColor="#c8284a" stopOpacity=".95" />
          <stop offset="1" stopColor="#b31f3b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="ribbons-crimson" stroke={`url(#${id}-crimson)`}>
        {CRIMSON.map((d, index) => (
          <path key={index} d={d} pathLength="1" style={{ '--i': index }} />
        ))}
      </g>
      <g className="ribbons-gold" stroke={`url(#${id}-gold)`}>
        {GOLD.map((d, index) => (
          <path key={index} d={d} pathLength="1" style={{ '--i': index }} />
        ))}
      </g>
    </svg>
  );
}
