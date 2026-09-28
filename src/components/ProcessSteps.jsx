import Icon from './Icon.jsx';

// Steps as a row of cards joined by arrows (`layout="cards"`), or as a vertical timeline
// (`layout="timeline"`). A step may carry an `icon`; without one a plain marker is shown.
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
            <p>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
