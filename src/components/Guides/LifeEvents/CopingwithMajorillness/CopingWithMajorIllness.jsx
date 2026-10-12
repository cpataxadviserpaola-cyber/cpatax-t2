import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=22 (Coping with Major Illness), word for word. The
// library lists no calculators for this topic.
// Address: /guides/life-events/coping-with-major-illness (topicPages in src/data/guides.js).
const illnessGuides = guide('life-events.php', 22);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [50, 'Long-Term Care Insurance: How To Get The Best Deal'],
      [48, 'Disability Insurance: What To Look For'],
      [49, "Disability Benefits: How To Get All You're Entitled To"],
      [56, 'Social Security Benefits: How To Get The Maximum Amount'],
    ].map(illnessGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [148, 'Disability Insurance: Frequently Asked Questions'],
      [27, 'Social Security Benefits: Frequently Asked Questions'],
    ].map(illnessGuides),
  },
];

export default function CopingWithMajorIllness() {
  return (
    <GuideTopic category="life-events" title="Coping with Major Illness" groups={groups}>
      A major illness can bring about life altering circumstances. These guides will better prepare you for the financial
      implications of such an event.
    </GuideTopic>
  );
}
