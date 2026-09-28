// Eyebrow label, heading, and optional lead paragraph that open most sections.
// `title` may contain an <em> for the italic accent.
export default function SectionHead({ eyebrow, title, center = false, children }) {
  return (
    <div className={`section-head reveal${center ? ' center' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </div>
  );
}
