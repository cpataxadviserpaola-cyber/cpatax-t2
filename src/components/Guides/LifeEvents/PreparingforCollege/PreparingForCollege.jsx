import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('life-events.php');

const groups = [
  {
    label: 'Financial Guides',
    items: [
      [24, 'Credit Cards: How to Choose—And Use—Them Wisely'],
      [22, 'Bank Accounts: What to Look and Ask For'],
      [43, 'Car Insurance: 10 Cost-Cutters to Save You Money'],
      [68, 'Refinancing Your Mortgage: When and How'],
      [52, 'Home Equity Loans: How to Shop for the One That Is Best for You'],
      [10, 'Your Financial Plan: Getting Started on a Secure Future'],
      [11, 'Budgeting: How to Prepare a Workable Plan'],
      [100, 'Saving Money: 10 Major Ways to Increase Your Nest Egg'],
      [83, 'Investment Basics: What You Should Know'],
    ].map(related),
  },
  {
    label: 'Official College-Planning Resources',
    items: [
      {
        title: 'Federal Student Aid: Prepare for College',
        href: 'https://studentaid.gov/resources/prepare-for-college',
      },
      {
        title: 'Federal Student Aid: FAFSA Form and Application Information',
        href: 'https://studentaid.gov/h/apply-for-aid/fafsa',
      },
      {
        title: 'IRS Information on Qualified Tuition Programs (529 Plans)',
        href: 'https://www.irs.gov/taxtopics/tc313',
      },
    ],
  },
];

export default function PreparingForCollege() {
  return (
    <GuideTopic category="life-events" title="Preparing for College" groups={groups}>
      College planning involves more than tuition. Estimate the full cost of attendance, consider
      how savings and financial aid may contribute, and make a plan that fits your family’s
      resources. These guides and official resources can help you get started; check current
      program requirements and deadlines directly with the school and Federal Student Aid.
    </GuideTopic>
  );
}
