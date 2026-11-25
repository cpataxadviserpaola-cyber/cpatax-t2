import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=18 (Planning Your Estate), word for word.
// Address: /guides/life-events/planning-your-estate (topicPages in src/data/guides.js).
const estateGuides = guide('life-events.php', 18);

const groups = [
  {
    label: 'Financial Guides',
    items: [
      [73, 'Estate Planning: How to Get Started'],
      [74, 'Postmortem Letter: How To Prepare It and What To Include'],
      [58, 'Retirement Plan Distributions: When to Take Them'],
      [59, 'Retirement Plan Distributions: How to Take Them'],
      [60, 'Roth IRAs: How They Work and How to Use Them'],
    ].map(estateGuides),
  },
  {
    label: 'Frequently Asked Questions',
    items: [
      [41, 'Living Trusts: Frequently Asked Questions'],
      [28, 'Wills: Frequently Asked Questions'],
      [42, 'Your Estate and Taxes: Frequently Asked Questions'],
    ].map(estateGuides),
  },
  {
    label: 'Financial Calculators',
    items: [['inc01', 'What Is My Potential Estate Tax Liability?']].map(calculator),
  },
];

export default function PlanningYourEstate() {
  return (
    <GuideTopic category="life-events" title="Planning Your Estate" groups={groups}>
      Some guides related to estate planning, information to help make this process as free of stress as possible.
    </GuideTopic>
  );
}
