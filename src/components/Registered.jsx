import { Fragment } from 'react';

// Renders text with each ® raised and reduced, so the mark sits neatly beside display type
// ("CPA, CFP®") instead of at full size.
export default function Registered({ children }) {
  const parts = String(children).split('®');
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && <sup className="reg">®</sup>}
    </Fragment>
  ));
}
