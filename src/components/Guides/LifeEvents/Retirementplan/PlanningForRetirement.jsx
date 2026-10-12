import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=15 (Planning For Retirement), word for word. The
// library lists "What are my projected required minimum distributions?" twice, for two calculators
// (ret07 and qua07); both are kept.
// Address: /guides/life-events/planning-for-retirement (topicPages in src/data/guides.js).
const retirementGuides = guide('life-events.php', 15);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [54, 'Your Retirement Plan: How To Get Started'],
      [55, '10 Retirement Saving Tips'],
      [56, 'Social Security Benefits: How To Get The Maximum Amount'],
      [57, 'Should You Count On Social Security?'],
      [51, 'Annuities: How They Work and When You Should Use Them'],
      [58, 'Retirement Plan Distributions: When To Take Them'],
      [59, 'Retirement Plan Distributions: How To Take Them'],
      [60, 'Roth IRAs: How They Work and How To Use Them'],
      [61, 'The "SIMPLE" Plan: A Retirement Plan for the Really Small Business'],
    ].map(retirementGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [12, 'Developing a Financial Plan: Frequently Asked Questions'],
      [27, 'Social Security Benefits: Frequently Asked Questions'],
      [14, 'Annuities: Frequently Asked Questions'],
      [13, 'Investment Options: Frequently Asked Questions'],
      [20, 'Retirement Plan Distributions: Frequently Asked Questions'],
      [19, 'Retirement Assets: Frequently Asked Questions'],
      [148, 'Disability Insurance: Frequently Asked Questions'],
      [152, 'Long-Term Care Insurance: Frequently Asked Questions'],
      [26, 'Traditional vs Roth IRAs: Frequently Asked Questions'],
    ].map(retirementGuides),
  },
  {
    label: 'Financial calculators',
    items: [
      ['ret02', 'Am I saving enough for my retirement?'],
      ['ret04', 'Social Security Retirement Income Estimator'],
      ['ret07', 'What are my projected required minimum distributions?'],
      ['qua02', 'How Much Can I Contribute To An IRA?'],
      ['qua04', 'Should I Convert To A Roth IRA?'],
      ['qua07', 'What are my projected required minimum distributions?'],
      ['sav01', 'Becoming A Millionaire'],
    ].map(calculator),
  },
];

export default function PlanningForRetirement() {
  return (
    <GuideTopic category="life-events" title="Planning For Retirement" groups={groups}>
      Retirement is another important life event that requires proper planning to make it a pleasant life experience.
      Here you will find invaluable information to help you make the most out of your retirement, no matter how far off
      it might be.
    </GuideTopic>
  );
}
