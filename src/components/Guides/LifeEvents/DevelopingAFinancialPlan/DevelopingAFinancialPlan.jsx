import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

const related = guide('life-events.php', 4);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [10, 'Your Financial Plan: Getting Started On a Secure Future'],
      [11, 'Budgeting: How To Prepare a Workable Plan'],
    ].map(related),
  },
  {
    label: 'Frequently Asked Questions',
    items: [
      [12, 'Developing a Financial Plan: Frequently Asked Questions'],
      [13, 'Investment Options: Frequently Asked Questions'],
    ].map(related),
  },
  {
    label: 'Financial calculators',
    items: [
      ['bud02', 'How Much Am I Spending?'],
      ['sav09', 'How Do Taxes and Inflation Impact My Investment Return?'],
      ['det01', 'How Long Will It Take To Pay Off My Credit Card?'],
    ].map(calculator),
  },
];

export default function DevelopingAFinancialPlan() {
  return (
    <GuideTopic category="life-events" title="Developing a Financial Plan" groups={groups}>
      Some guides to help you develop a sound financial plan for today and the future, no matter
      where you are in your life's journey.
    </GuideTopic>
  );
}
