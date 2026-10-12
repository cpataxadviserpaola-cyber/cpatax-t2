import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/business-strategies.php?catid=13 (Selling/Exiting Your Business).
// Address: /guides/business-strategies/selling-exiting-your-business (topicPages in src/data/guides.js).
const businessGuides = guide('business-strategies.php', 13);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [124, 'Your Business Succession: How To Plan For It'],
      [125, 'Successfully Pass On Your Family Business To Next Generation'],
      [126, 'Maximize Your Wealth With a Winning Exit Plan'],
    ].map(businessGuides),
  },
  {
    label: 'Financial calculators',
    items: [['bus04', 'What is the value of my business?']].map(calculator),
  },
];

export default function SellingExitingYourBusiness() {
  return (
    <GuideTopic category="business-strategies" title="Selling/Exiting Your Business" groups={groups}>
      A few befitting articles about selling or leaving a business.
    </GuideTopic>
  );
}
