import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=19 (Making Charitable Contributions), word for
// word. The library lists no calculators for this topic.
// Address: /guides/life-events/making-charitable-contributions (topicPages in src/data/guides.js).
const charityGuides = guide('life-events.php', 19);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [75, 'Charitable Contributions: How To Give Wisely'],
      [76, 'Charitable Contributions of Property: Maximizing the Deduction'],
      [77, 'What Records You Must Keep Relating To Your Charitable Contributions'],
      [78, 'Advanced Charity Techniques: Maximizing Your Deduction'],
      [79, 'Fraudulent Charities: How To Protect Yourself'],
    ].map(charityGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [39, 'Charitable Contributions: Frequently Asked Questions'],
      [40, 'Charitable Deductions: Frequently Asked Questions'],
    ].map(charityGuides),
  },
];

export default function MakingCharitableContributions() {
  return (
    <GuideTopic category="life-events" title="Making Charitable Contributions" groups={groups}>
      Some guides pertaining to charitable contributions and related material.
    </GuideTopic>
  );
}
