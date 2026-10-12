import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/business-strategies.php?catid=7 (Starting A Business), word for word.
// Address: /guides/business-strategies/starting-a-business (topicPages in src/data/guides.js).
const businessGuides = guide('business-strategies.php', 7);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [104, 'Starting a Business? 3 Things You Must Know'],
      [105, 'Form of Business Organization: Which Should You Choose?'],
      [106, 'Advantages of Incorporating'],
      [107, 'Advantages of Limited Liability Companies'],
      [108, 'Business Plans: How To Prepare An Effective One'],
      [122, 'Raising Capital: How To Get Money For a Small Business'],
      [130, 'The Home-Based Business: Some Basics You Should Consider'],
    ].map(businessGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [144, 'Business Forms of Organization: Frequently Asked Questions'],
      [145, 'Incorporating: Frequently Asked Questions'],
      [146, 'Limited Liability Companies: Frequently Asked Questions'],
      [138, 'Small Business: Frequently Asked Questions'],
      [158, 'Financing Questions: Frequently Asked Questions'],
      [45, 'Recordkeeping For Your Taxes: Frequently Asked Questions'],
      [139, 'Choosing a Professional: Frequently Asked Questions'],
    ].map(businessGuides),
  },
  {
    label: 'Financial calculators',
    items: [['bus05', 'How many units do I need to sell to breakeven?']].map(calculator),
  },
];

export default function StartingABusiness() {
  return (
    <GuideTopic category="business-strategies" title="Starting A Business" groups={groups}>
      This section contains a selection of articles pertinent to starting a business.
    </GuideTopic>
  );
}
