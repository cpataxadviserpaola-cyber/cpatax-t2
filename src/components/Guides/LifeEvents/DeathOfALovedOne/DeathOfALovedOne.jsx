import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=23 (Coping with Death of a Loved One), word
// for word.
// Address: /guides/life-events/death-of-a-loved-one (topicPages in src/data/guides.js).
const lifeEvents = guide('life-events.php', 23);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [81, 'Death of a Spouse: Financial Steps You Should Take'],
      [82, 'Funerals: What To Do At This Stressful Time'],
      [74, 'Postmortem Letter: How To Prepare It and What To Include'],
    ].map(lifeEvents),
  },
  {
    label: 'Frequently asked questions',
    items: [[156, 'Death of a Loved One: Frequently Asked Questions']].map(lifeEvents),
  },
];

export default function DeathOfALovedOne() {
  return (
    <GuideTopic category="life-events" title="Coping with Death of a Loved One" groups={groups}>
      When tragedy strikes the last thing anyone wants to be bothered with are financial obligations
      surrounding the event. Let us share this burden with you, here are some guides to get you
      started.
    </GuideTopic>
  );
}
