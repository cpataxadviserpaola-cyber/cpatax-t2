import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=1 (Getting Married), word for word.
// Address: /guides/life-events/getting-married (topicPages in src/data/guides.js).
const lifeEvents = guide('life-events.php', 1);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [1, 'Getting Married (or Divorced): Some Financial Guidelines'],
      [47, 'Life Insurance: How Much and What Kind To Buy'],
    ].map(lifeEvents),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [154, 'Getting Married: Frequently Asked Questions'],
      [151, 'Life Insurance: Frequently Asked Questions'],
    ].map(lifeEvents),
  },
  {
    label: 'Financial calculators',
    items: [['bud02', 'How Much Am I Spending?']].map(calculator),
  },
];

export default function GettingMarried() {
  return (
    <GuideTopic category="life-events" title="Getting Married" groups={groups}>
      Getting married is one of the most important events in many people's lives. Within this
      section you will find several guides to help you acquire necessary financial intelligence
      and wisdom.
    </GuideTopic>
  );
}
