import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=14 (Getting a Loan), word for word.
// Address: /guides/life-events/getting-a-loan (topicPages in src/data/guides.js).
const loanGuides = guide('life-events.php', 14);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [65, 'Mortgage Alternatives: How To Choose The Right One'],
      [68, 'Refinancing Your Mortgage: When and How'],
      [52, 'Home Equity Loans: How To Shop For The One That Is Best For You'],
      [53, 'Mortgage Lock-ins: Questions To Ask'],
      [31, 'Getting Out of Financial Trouble: Steps You Can Take'],
    ].map(loanGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [159, 'Getting a Loan: Frequently Asked Questions'],
      [160, 'Loan Questions: Frequently Asked Questions'],
      [158, 'Financing Questions: Frequently Asked Questions'],
      [33, 'Credit Reports: Frequently Asked Questions'],
      [34, 'Credit Rating: Frequently Asked Questions'],
      [35, 'Financial Trouble: Frequently Asked Questions'],
    ].map(loanGuides),
  },
  {
    label: 'Financial calculators',
    items: [
      ['hom02', 'Should I Refinance My Mortgage?'],
      ['hom04', 'Comparing Mortgage Terms (i.e. 15, 20, 30 year)'],
      ['aut03', 'What Would My Auto Payments Be?'],
      ['aut01', 'Should I lease or purchase an auto?'],
    ].map(calculator),
  },
];

export default function GettingALoan() {
  return (
    <GuideTopic category="life-events" title="Getting a Loan" groups={groups}>
      Here you will find a nice selection of guides pertaining to several loan options you should consider before
      making a decision on getting a loan.
    </GuideTopic>
  );
}
