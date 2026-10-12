import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/business-strategies.php?catid=11 (Growing Your Business).
// Address: /guides/business-strategies/growing-your-business (topicPages in src/data/guides.js).
const businessGuides = guide('business-strategies.php', 11);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [109, 'Evaluating Your Market: A Basic Review'],
      [110, 'Pricing Your Products and Services: A Basic Review'],
      [111, 'Developing An Advertising Program: A Basic Review'],
      [112, 'Referrals: The Secret to Building a Better Business Faster'],
      [113, 'How To Get Your Customers To Trust You'],
      [114, 'The Nicest Way To Build Your Business'],
      [115, 'Developing a Unique Selling Proposition'],
      [116, "Uncover Your Business's Most Valuable Hidden Asset"],
      [117, 'How to Profitably Grow Your Business With Less Stress'],
      [122, 'Raising Capital: How To Get Money For a Small Business'],
    ].map(businessGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [[143, 'Marketing and Pricing: Frequently Asked Questions']].map(businessGuides),
  },
  {
    label: 'Financial calculators',
    items: [['bus05', 'How many units do I need to sell to breakeven?']].map(calculator),
  },
];

export default function GrowingYourBusiness() {
  return (
    <GuideTopic category="business-strategies" title="Growing Your Business" groups={groups}>
      A series of financial guides dedicated to helping you make your business fulfill its true potential.
    </GuideTopic>
  );
}
