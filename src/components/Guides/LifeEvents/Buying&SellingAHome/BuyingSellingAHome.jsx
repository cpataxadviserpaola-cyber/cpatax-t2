import GuideTopic from '../../GuideTopic.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?catid=17 (Buying & Selling A Home), word for word.
// Address: /guides/life-events/buying-and-selling-a-home (topicPages in src/data/guides.js).
const homeGuides = guide('life-events.php', 17);

const groups = [
  {
    label: 'Financial guides',
    items: [
      [63, 'Buying a Home: What To Do and How To Do It'],
      [64, "Homeowner's Insurance: How To Get The Best Coverage and Value"],
      [65, 'Mortgage Alternatives: How To Choose The Right One'],
      [66, 'Home Mortgage Interest Deductions'],
      [67, 'The Deductibility of Points'],
      [68, 'Refinancing Your Mortgage: When and How'],
      [69, 'Selling Your Home: How To Do It Effectively'],
      [70, 'Selling Your Home: How To Minimize the Tax On the Gain'],
      [71, 'Which Moving Expenses Are Deductible?'],
      [72, 'The Deduction For Real Estate Taxes'],
    ].map(homeGuides),
  },
  {
    label: 'Frequently asked questions',
    items: [
      [2, 'Buying a Home: Frequently Asked Questions'],
      [150, "Homeowner's Insurance: Frequently Asked Questions"],
      [3, 'Mortgages: Frequently Asked Questions'],
      [4, 'Selling Your Home: Frequently Asked Questions'],
      [5, 'Planning Your Move: Frequently Asked Questions'],
    ].map(homeGuides),
  },
  {
    label: 'Financial calculators',
    items: [
      ['hom02', 'Should I Refinance My Mortgage?'],
      ['hom04', 'Comparing Mortgage Terms (i.e. 15, 20, 30 year)'],
    ].map(calculator),
  },
];

export default function BuyingSellingAHome() {
  return (
    <GuideTopic category="life-events" title="Buying & Selling A Home" groups={groups}>
      This section is dedicated to another major life event. Within you will find a series of
      articles chosen to bequeath you with the knowledge necessary to make the best decisions you
      can when buying or selling a home.
    </GuideTopic>
  );
}
