import GuideTopic from '../../GuideTopic.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('life-events.php');

const groups = [
  {
    label: 'Financial guides',
    items: [
      [24, 'Credit Cards: How To Choose—And Use—Them Wisely'],
      [22, 'Bank Accounts: What To Look and Ask For'],
      [43, 'Car Insurance: 10 Cost-Cutters To Save You Money'],
      [68, 'Refinancing Your Mortgage: When and How'],
      [52, 'Home Equity Loans: How To Shop For The One That Is Best For You'],
      [10, 'Your Financial Plan: Getting Started On a Secure Future'],
      [11, 'Budgeting: How To Prepare a Workable Plan'],
      [100, 'Saving Money: 10 Major Ways To Increase Your Nest Egg'],
      [83, 'Investment Basics: What You Should Know'],
    ].map(related),
  },
  {
    label: 'Official college-planning resources',
    items: [
      {
        title: 'Federal Student Aid: Prepare for college',
        href: 'https://studentaid.gov/resources/prepare-for-college',
      },
      {
        title: 'Federal Student Aid: FAFSA form and application information',
        href: 'https://studentaid.gov/h/apply-for-aid/fafsa',
      },
      {
        title: 'IRS information on qualified tuition programs (529 plans)',
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
