import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'price',
    title: 'How should I choose an asking price?',
    body: (
      <p>
        Consider recent sales of similar homes, the property’s condition, current competition, and local market
        conditions. A real-estate professional can provide a comparative analysis, but the asking price is your
        decision. Estimate your likely net proceeds after mortgage payoff, selling expenses, and any agreed repairs
        or credits.
      </p>
    ),
  },
  {
    id: 'prepare',
    title: 'What should I do to prepare my home for sale?',
    body: (
      <p>
        Address safety and maintenance concerns, remove clutter, and make the home easy for buyers to view. Before
        making expensive upgrades, compare their likely benefit with the cost and the expectations of local buyers.
        Keep receipts and records for improvements and repairs.
      </p>
    ),
  },
  {
    id: 'disclosures',
    title: 'Do I have to disclose problems with the property?',
    body: (
      <p>
        Seller disclosure requirements depend on state and local law and the details of the transaction. Do not
        assume that an “as-is” sale eliminates every disclosure obligation. Ask a qualified local real-estate
        professional or attorney what must be disclosed, and answer buyer questions accurately.
      </p>
    ),
  },
  {
    id: 'offers',
    title: 'How should I compare offers?',
    body: (
      <p>
        Compare more than the proposed price. Consider financing, appraisal and inspection terms, requested
        concessions, contingencies, the proposed closing date, and evidence that the buyer can complete the
        purchase. Review the contract and deadlines with your agent or attorney before accepting or countering.
      </p>
    ),
  },
  {
    id: 'taxes',
    title: 'Could selling my home affect my taxes?',
    body: (
      <p>
        It can. A gain or loss is generally determined using the sale proceeds and your adjusted tax basis, and
        some qualifying homeowners may be able to exclude part or all of a gain under federal rules. Eligibility
        depends on your facts, and state treatment may differ. Keep purchase, improvement, and sale records and
        consult a tax professional about your situation.
      </p>
    ),
  },
];

export default function SellingYourHomeFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="Selling Your Home: Frequently Asked Questions"
      title={<>Selling Your Home: <em>Frequently Asked Questions</em></>}
      lead="Practical answers about setting a price, preparing a property, disclosures, evaluating offers, and considering tax effects."
      sections={sections}
    />
  );
}
