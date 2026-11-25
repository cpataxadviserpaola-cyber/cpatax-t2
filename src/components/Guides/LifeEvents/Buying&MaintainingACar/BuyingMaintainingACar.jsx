import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=16 (Buying & Maintaining A Car), word for word.
// Address: /guides/life-events/buying-and-maintaining-a-car (topicPages in src/data/guides.js).
const carGuides = guide('life-events.php', 16);

const groups = [
  {
    label: 'Financial Guides',
    items: [
      [62, 'Your Next Car: Should You Buy or Lease?'],
      [43, 'Car Insurance: 10 Cost-Cutters to Save You Money'],
    ].map(carGuides),
  },
  {
    label: 'Frequently Asked Questions',
    items: [
      [153, 'Buying or Leasing Your Next Car: Frequently Asked Questions'],
      [147, 'Car Insurance: Frequently Asked Questions'],
    ].map(carGuides),
  },
  {
    label: 'Financial Calculators',
    items: [
      ['aut01', 'Should I Lease or Purchase An Auto?'],
      ['aut03', 'What Would My Auto Payments Be?'],
    ].map(calculator),
  },
];

export default function BuyingMaintainingACar() {
  return (
    <GuideTopic category="life-events" title="Buying & Maintaining a Car" groups={groups}>
      This section has several articles pertaining to automobile acquisition and maintenance.
    </GuideTopic>
  );
}
