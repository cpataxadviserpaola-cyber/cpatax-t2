import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=24 (Improving Your Retirement), word for word. The
// library lists "What are my projected required minimum distributions?" twice, for two calculators
// (qua07 and ret07); both are kept, in the library's order.
// Address: /guides/life-events/improving-your-retirement (topicPages in src/data/guides.js).
const retirementGuides = guide('life-events.php', 24);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [58, 'Retirement Plan Distributions: When To Take Them'],
      [59, 'Retirement Plan Distributions: How To Take Them'],
      [56, 'Social Security Benefits: How To Get The Maximum Amount'],
      [93, 'Survivors Benefits: A Guide To This Often overlooked Insurance Add-On'],
      [94, "Your Pension: What You're Entitled To"],
      [96, 'Reverse Mortgages: How They Can Enhance Your Retirement'],
      [97, 'Tap Your Retirement Money Early and Minimize Penalties'],
      [51, 'Annuities: How They Work and When You Should Use Them'],
      [60, 'Roth IRAs: How They Work and How To Use Them'],
    ].map(retirementGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [20, 'Retirement Plan Distributions: Frequently Asked Questions'],
      [27, 'Social Security Benefits: Frequently Asked Questions'],
      [19, 'Retirement Assets: Frequently Asked Questions'],
      [14, 'Annuities: Frequently Asked Questions'],
      [26, 'Traditional vs Roth IRAs: Frequently Asked Questions'],
    ].map(retirementGuides),
  },
  {
    label: 'Financial calculators',
    items: [
      ['ret02', 'Am I saving enough for my retirement?'],
      ['ret04', 'Social Security Retirement Income Estimator'],
      ['qua02', 'How Much Can I Contribute To An IRA?'],
      ['qua04', 'Should I Convert To A Roth IRA?'],
      ['qua07', 'What are my projected required minimum distributions?'],
      ['ret07', 'What are my projected required minimum distributions?'],
      ['sav01', 'Becoming A Millionaire'],
    ].map(calculator),
  },
];

export default function ImprovingYourRetirement() {
  return (
    <GuideTopic category="life-events" title="Improving Your Retirement" groups={groups}>
      In this section we've amassed a selection of financial guides designed to help you make the most of your retirement
      experience. Read at your leisure!
    </GuideTopic>
  );
}
