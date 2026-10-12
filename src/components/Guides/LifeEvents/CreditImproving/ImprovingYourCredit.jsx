import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=6 (Improving Your Credit), word for word. The
// library lists "Should I Consolidate My Personal Debt Into A New Loan?" twice (the second time
// linked to a different calculator), so it appears here once.
// Address: /guides/life-events/improving-your-credit (topicPages in src/data/guides.js).
const creditGuides = guide('life-events.php', 6);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [24, 'Credit Cards: How To Choose—And Use—Them Wisely'],
      [25, 'Credit Reports: What You Should Know—And Do—About Yours'],
      [29, 'Merchant Credit Card Abuses: What They Cannot Ask You To Do'],
      [30, 'Your Credit Card Rights: What To Do If You Have a Problem'],
      [31, 'Getting Out of Financial Trouble: Steps You Can Take'],
    ].map(creditGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [32, 'Credit Cards: Frequently Asked Questions'],
      [33, 'Credit Reports: Frequently Asked Questions'],
      [35, 'Financial Trouble: Frequently Asked Questions'],
      [34, 'Credit Rating: Frequently Asked Questions'],
      [160, 'Loan Questions: Frequently Asked Questions'],
    ].map(creditGuides),
  },
  {
    label: 'Financial calculators',
    items: [
      ['det06', 'Should I Consolidate My Personal Debt Into A New Loan?'],
      ['det09', 'What Is The Impact Of Making Extra Payments On My Debt?'],
      ['det01', 'How Long Will It Take To Pay Off My Credit Card?'],
    ].map(calculator),
  },
];

export default function ImprovingYourCredit() {
  return (
    <GuideTopic category="life-events" title="Improving Your Credit" groups={groups}>
      Some financial advice to help you protect your credit and improve your credit rating.
    </GuideTopic>
  );
}
