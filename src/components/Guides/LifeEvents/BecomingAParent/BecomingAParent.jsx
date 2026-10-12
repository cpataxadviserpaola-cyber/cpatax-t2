import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('life-events.php');

const groups = [
  {
    label: 'Financial guides',
    items: [
      [10, 'Your Financial Plan: Getting Started On a Secure Future'],
      [11, 'Budgeting: How To Prepare a Workable Plan'],
      [47, 'Life Insurance: How Much and What Kind To Buy'],
      [93, 'Survivor Benefits: A Guide To This Often Overlooked Insurance Add-On'],
      [73, 'Estate Planning: How To Get Started'],
    ].map(related),
  },
  {
    label: 'Official resources',
    items: [
      {
        title: 'IRS information about the Child Tax Credit',
        href: 'https://www.irs.gov/credits-deductions/individuals/child-tax-credit',
      },
      {
        title: 'Social Security information about getting a Social Security number for a newborn',
        href: 'https://www.ssa.gov/number-card',
      },
    ],
  },
];

export default function BecomingAParent() {
  return (
    <GuideTopic category="life-events" title="Becoming a Parent" groups={groups}>
      Welcoming a child is a major life change that can affect your household budget, insurance
      needs, and long-term plans. These resources can help you organize your finances, consider
      protection for your family, and find official information about benefits and tax credits.
    </GuideTopic>
  );
}
