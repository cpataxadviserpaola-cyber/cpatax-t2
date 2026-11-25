import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=17 (Buying & Selling A Home), word for word.
// Address: /guides/life-events/buying-and-selling-a-home (topicPages in src/data/guides.js).
const homeGuides = guide('life-events.php', 17);

const groups = [
  {
    label: 'Financial Guides',
    items: [
      [63, 'Buying a Home: What to Do and How to Do It'],
      [64, "Homeowner's Insurance: How to Get the Best Coverage and Value"],
      [65, 'Mortgage Alternatives: How to Choose the Right One'],
      [66, 'Home Mortgage Interest Deductions'],
      [67, 'The Deductibility of Points'],
      [68, 'Refinancing Your Mortgage: When and How'],
      [69, 'Selling Your Home: How to Do It Effectively'],
      [70, 'Selling Your Home: How to Minimize the Tax on the Gain'],
      [71, 'Which Moving Expenses Are Deductible?'],
      [72, 'The Deduction for Real Estate Taxes'],
    ].map(homeGuides),
  },
  {
    label: 'Frequently Asked Questions',
    items: [
      [2, 'Buying a Home: Frequently Asked Questions'],
      [150, "Homeowner's Insurance: Frequently Asked Questions"],
      [3, 'Mortgages: Frequently Asked Questions'],
      [4, 'Selling Your Home: Frequently Asked Questions'],
      [5, 'Planning Your Move: Frequently Asked Questions'],
    ].map(homeGuides),
  },
  {
    label: 'Financial Calculators',
    items: [
      ['hom02', 'Should I Refinance My Mortgage?'],
      ['hom04', 'Comparing Mortgage Terms (i.e. 15, 20, 30 year)'],
    ].map(calculator),
  },
];

export default function BuyingSellingAHome() {
  return (
    <GuideTopic category="life-events" title="Buying & Selling a Home" groups={groups}>
      This section is dedicated to another major life event. Within you will find a series of
      articles chosen to bequeath you with the knowledge necessary to make the best decisions you
      can when buying or selling a home.
    </GuideTopic>
  );
}
