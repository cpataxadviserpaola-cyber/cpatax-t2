import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=10 (Buying Insurance), word for word.
// Address: /guides/life-events/buying-insurance (topicPages in src/data/guides.js).
const insuranceGuides = guide('life-events.php', 10);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [64, "Homeowner's Insurance: How To Get The Best Coverage and Value"],
      [43, 'Car Insurance: 10 Cost-Cutters To Save You Money'],
      [47, 'Life Insurance: How Much and What Kind To Buy'],
      [48, 'Disability Insurance: What To Look For'],
      [49, "Disability Benefits: How To Get All You're Entitled To"],
      [50, 'Long-Term Care Insurance: How To Get The Best Deal'],
      [51, 'Annuities: How They Work and When You Should Use Them'],
      [232, 'The Affordable Care Act'],
    ].map(insuranceGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [150, "Homeowner's Insurance: Frequently Asked Questions"],
      [147, 'Car Insurance: Frequently Asked Questions'],
      [151, 'Life Insurance: Frequently Asked Questions'],
      [148, 'Disability Insurance: Frequently Asked Questions'],
      [152, 'Long-Term Care Insurance: Frequently Asked Questions'],
      [14, 'Annuities: Frequently Asked Questions'],
    ].map(insuranceGuides),
  },
  {
    label: 'Financial calculators',
    items: [['ins01', 'How Much Life Insurance Do I Need?']].map(calculator),
  },
];

export default function BuyingInsurance() {
  return (
    <GuideTopic category="life-events" title="Buying Insurance" groups={groups}>
      Within this section you will find many articles related to various types of insurance that you
      might be seeking to purchase.
    </GuideTopic>
  );
}
