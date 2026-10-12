import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=20 (Avoiding Scams), word for word. The library
// lists no calculators for this topic.
// Address: /guides/life-events/avoiding-scams (topicPages in src/data/guides.js).
const scamGuides = guide('life-events.php', 20);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [80, 'Con Artists: How To Spot and Stop Them'],
      [79, 'Fraudulent Charities: How To Protect Yourself'],
    ].map(scamGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [[165, 'Avoiding Scams: Frequently Asked Questions']].map(scamGuides),
  },
];

export default function AvoidingScams() {
  return (
    <GuideTopic category="life-events" title="Avoiding Scams" groups={groups}>
      We've all heard the horror stories of overly trusting individuals being tricked into giving their money to less than
      savory characters. This guide section focuses on identifying scam artists and protecting yourself from them.
    </GuideTopic>
  );
}
