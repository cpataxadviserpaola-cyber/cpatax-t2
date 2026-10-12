import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=25 (Handling Other Situations), word for word.
// Address: /guides/life-events/handling-other-situations (topicPages in src/data/guides.js).
const otherGuides = guide('life-events.php', 25);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [100, 'Saving Money: 10 Major Ways To Increase Your Nest Egg'],
      [101, 'Recordkeeping Guide: How Long You Should Retain Your Records'],
      [102, 'Document Locator System: A Handy Aid For Keeping Track of Your Records'],
    ].map(otherGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [[157, 'Other Situations: Frequently Asked Questions']].map(otherGuides),
  },
  {
    label: 'Financial calculators',
    items: [['sav01', 'Becoming A Millionaire']].map(calculator),
  },
];

export default function HandlingOtherSituations() {
  return (
    <GuideTopic category="life-events" title="Handling Other Situations" groups={groups}>
      Here are a few guides for other situations that might arise which require some basic knowledge to be able to handle
      appropriately.
    </GuideTopic>
  );
}
