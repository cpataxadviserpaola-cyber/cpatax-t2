import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=9 (Choosing A Professional), word for word.
// Address: /guides/life-events/choosing-a-professional (topicPages in src/data/guides.js).
const professionalGuides = guide('life-events.php', 9);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [36, 'Lawyers: How To Choose The Right One'],
      [38, 'Are You Getting Good Financial Advice?'],
    ].map(professionalGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [[139, 'Choosing a Professional: Frequently Asked Questions']].map(professionalGuides),
  },
];

export default function ChoosingAProfessional() {
  return (
    <GuideTopic category="life-events" title="Choosing A Professional" groups={groups}>
      A few articles with recommendations for choosing the best professional for your needs.
    </GuideTopic>
  );
}
