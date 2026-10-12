import GuideTopic from '../../../GuideTopic.jsx';
import { calculator, guide } from '../../../../../data/guides.js';

// Source: cpataxadviser.com/business-strategies.php?catid=8 (Running Your Business).
// Address: /guides/business-strategies/running-your-business (topicPages in src/data/guides.js).
const businessGuides = guide('business-strategies.php', 8);

const groups = [
  {
    label: 'Frequently asked questions',
    items: [
      [45, 'Recordkeeping For Your Taxes: Frequently Asked Questions'],
      [142, 'Travel and Entertainment: Frequently Asked Questions'],
      [140, 'Employee Benefits: Frequently Asked Questions'],
      [138, 'Small Business: Frequently Asked Questions'],
      [158, 'Financing Questions: Frequently Asked Questions'],
    ].map(businessGuides),
  },
  {
    label: 'Financial guides',
    items: [
      [119, 'Cash Flow - The Pulse of Your Business'],
      [120, 'Travel and Entertainment: Maximizing the Tax Benefits'],
      [121, 'Employee Benefits: How To Handle Them'],
      [102, 'Document Locator System: A Handy Aid For Keeping Track of Your Records'],
      [130, 'The Home-Based Business: Some Basics You Should Consider'],
      [137, 'Financial Planning Tips For Business Owners'],
      [61, 'The "SIMPLE" Plan: A Retirement Plan for the Really Small Business'],
    ].map(businessGuides),
  },
  {
    label: 'Financial calculators',
    items: [
      ['bus05', 'How many units do I need to sell to breakeven?'],
      ['bus07', 'What are my business financial ratios?'],
    ].map(calculator),
  },
];

export default function RunningYourBusiness() {
  return (
    <GuideTopic category="business-strategies" title="Running Your Business" groups={groups}>
      A cross-section of articles regarding important aspects of running a business efficiently and effectively.
    </GuideTopic>
  );
}
