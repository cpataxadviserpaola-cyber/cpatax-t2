import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/business-strategies.php?catid=12 (Securing Business Loans).
// Address: /guides/business-strategies/securing-business-loans (topicPages in src/data/guides.js).
const businessGuides = guide('business-strategies.php', 12);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [122, 'Raising Capital: How To Get Money For a Small Business'],
      [123, 'Show Me The Money! Strategies For Securing a Loan'],
    ].map(businessGuides),
  },
  {
    label: 'Financial calculators',
    items: [
      ['aut01', 'Should I lease or purchase an auto?'],
      ['bus07', 'What are my business financial ratios?'],
    ].map(calculator),
  },
];

export default function SecuringBusinessLoans() {
  return (
    <GuideTopic category="business-strategies" title="Securing Business Loans" groups={groups}>
      A few articles you should read if you're considering taking on a loan for your business.
    </GuideTopic>
  );
}
