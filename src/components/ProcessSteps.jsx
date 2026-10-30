import Icon from './Icon.jsx';

// Steps as a row of cards joined by arrows (`layout="cards"`), or as a vertical timeline
// (`layout="timeline"`). A step may carry an `icon`; without one a plain marker is shown. Its
// `text` and its list of `points` are both optional.
export default function ProcessSteps({ steps, layout = 'cards' }) {
  return (
    <ol className={`steps steps-${layout} reveal`}>
      {steps.map((step, index) => (
        <li className="step" key={step.title}>
          <span className="step-marker" aria-hidden="true">
            {step.icon ? <Icon name={step.icon} /> : <i />}
          </span>
          <div className="step-body">
            <p className="step-label" aria-hidden="true">
              Step {index + 1}
            </p>
            <h3>{step.title}</h3>
            {step.text && <p>{step.text}</p>}
            {step.points && (
              <ul className="step-points">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
