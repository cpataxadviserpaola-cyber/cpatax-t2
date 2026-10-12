import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=21 (Getting Divorced or Becoming Widowed), word for
// word. The library lists no calculators for this topic.
// Address: /guides/life-events/getting-divorced-or-becoming-widowed (topicPages in
// src/data/guides.js).
const divorceGuides = guide('life-events.php', 21);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [1, 'Getting Married (or Divorced): Some Financial Guidelines'],
      [47, 'Life Insurance: How Much and What Kind To Buy'],
    ].map(divorceGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [154, 'Getting Married: Frequently Asked Questions'],
      [155, 'Getting Divorced: Frequently Asked Questions'],
    ].map(divorceGuides),
  },
];

export default function GettingDivorcedOrBecomingWidowed() {
  return (
    <GuideTopic category="life-events" title="Getting Divorced or Becoming Widowed" groups={groups}>
      A few financial guides that require sober consideration if you're getting divorced or have become widowed.
    </GuideTopic>
  );
}
