import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

const bankGuides = guide('life-events.php', 5);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [22, 'Bank Accounts: What To Look and Ask For'],
      [23, 'Applying For a Loan: How To Get The Best Loan At The Lowest Cost'],
    ].map(bankGuides),
  },
  {
    label: 'Frequently Asked Questions',
    items: [
      [161, 'Bank Accounts: Frequently Asked Questions'],
      [162, 'ATM Transactions: Frequently Asked Questions'],
      [159, 'Getting a Loan: Frequently Asked Questions'],
      [160, 'Loan Questions: Frequently Asked Questions'],
    ].map(bankGuides),
  },
];

export default function DealingWithYourBank() {
  return (
    <GuideTopic category="life-events" title="Dealing with Your Bank" groups={groups}>
      Some information to consider when dealing with banks.
    </GuideTopic>
  );
}
