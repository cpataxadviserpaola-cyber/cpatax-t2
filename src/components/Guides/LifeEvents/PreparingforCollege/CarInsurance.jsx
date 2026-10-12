import GuideArticle from '../../GuideArticle.jsx';

const external = { target: '_blank', rel: 'noopener noreferrer' };

const savings = [
  {
    title: 'Compare multiple quotes.',
    text: 'Request quotes for the same drivers, vehicles, limits, and deductibles so you can compare like with like.',
  },
  {
    title: 'Ask about available discounts.',
    text: 'Ask each insurer which discounts may apply to your household, vehicle, safety features, or driving habits; eligibility varies.',
  },
  {
    title: 'Review your coverage needs.',
    text: 'Check liability limits, required coverages, and optional protections with an agent before changing or removing coverage.',
  },
  {
    title: 'Choose a deductible you can afford.',
    text: 'A higher deductible may reduce the premium but means paying more out of pocket after a covered claim.',
  },
  {
    title: 'Check for multi-policy savings.',
    text: 'Ask whether combining auto and other policies changes the total cost, then compare the combined price with separate policies.',
  },
  {
    title: 'Keep driver and vehicle details current.',
    text: 'Tell your insurer about changes to drivers, address, vehicle use, and annual mileage to avoid inaccurate rating information.',
  },
  {
    title: 'Consider how you use the car.',
    text: 'If you drive less than before, ask whether a low-mileage plan or usage-based program is available and review its terms and data practices.',
  },
  {
    title: 'Review optional coverages.',
    text: 'Ask what optional protections cover and whether they duplicate benefits you already have; do not drop coverage without understanding the risk.',
  },
  {
    title: 'Maintain a safe driving record.',
    text: 'Avoiding tickets and at-fault crashes can help with future pricing, though insurers and state rules differ.',
  },
  {
    title: 'Re-shop at renewal.',
    text: 'Review the renewal notice each term and compare current quotes, since prices and available discounts can change.',
  },
];

const sections = [
  {
    id: 'cost-cutters',
    title: 'Ten ways to review your auto insurance costs',
    body: (
      <ol>
        {savings.map((tip) => (
          <li key={tip.title}>
            <strong>{tip.title}</strong> {tip.text}
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: 'balance',
    title: 'How can I balance savings with protection?',
    body: (
      <p>
        The lowest premium may not provide enough protection after a serious crash. Before making a
        change, compare policy limits, exclusions, deductibles, and how a claim would affect your
        finances. State minimums may not cover all losses for which you could be responsible. Ask
        your insurer or state insurance department about the requirements that apply where you live.
      </p>
    ),
  },
  {
    id: 'resources',
    title: 'Where can I learn more?',
    body: (
      <p>
        Keep your declarations page and policy documents available, and ask the insurer to explain
        unfamiliar terms. The{' '}
        <a href="https://content.naic.org/consumer/auto-insurance" {...external}>
          National Association of Insurance Commissioners auto-insurance resources
        </a>{' '}
        provide information on comparing coverage and contacting your state insurance department.
      </p>
    ),
  },
];

export default function CarInsurance() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/preparing-for-college"
      page="Car Insurance"
      title={<>Car Insurance: <em>10 Cost-Cutters To Save You Money</em></>}
      lead="Auto premiums depend on your policy, vehicle, drivers, and insurer. These ten review ideas can help you look for savings while keeping coverage appropriate for your needs."
      sections={sections}
    />
  );
}
