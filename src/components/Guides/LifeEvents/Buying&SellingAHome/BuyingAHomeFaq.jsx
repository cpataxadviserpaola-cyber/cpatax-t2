import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'budget',
    title: 'How much home can I reasonably afford?',
    body: (
      <p>
        Start with a monthly budget that includes more than the mortgage payment. Property taxes, homeowners
        insurance, utilities, maintenance, and any association fees all affect what you can comfortably afford.
        Keep room for savings and unexpected repairs, and compare the full monthly cost with your take-home income.
      </p>
    ),
  },
  {
    id: 'preapproval',
    title: 'Does mortgage preapproval guarantee a loan?',
    body: (
      <p>
        No. A preapproval is an early estimate based on the information and documents reviewed by a lender. The
        lender will still verify your finances, the property, and other loan conditions before final approval.
        Avoid taking on new debt or making major financial changes while your application is underway.
      </p>
    ),
  },
  {
    id: 'inspection',
    title: 'Should I get a home inspection?',
    body: (
      <p>
        An independent inspection can help identify visible issues with a home’s structure and major systems before
        you buy. Review the report carefully, ask the inspector about significant findings, and consider specialist
        evaluations when recommended. An inspection is not a warranty and may not uncover every hidden defect.
      </p>
    ),
  },
  {
    id: 'offer',
    title: 'What should I consider before making an offer?',
    body: (
      <p>
        Compare recent sales and the home’s condition with your budget, then decide which terms matter to you. An
        offer may address price, financing, inspection, appraisal, closing date, and items included in the sale.
        Contingencies can provide important protections; understand their deadlines and consequences before waiving
        any of them.
      </p>
    ),
  },
  {
    id: 'closing',
    title: 'What should I expect at closing?',
    body: (
      <p>
        Before closing, review the final loan terms, settlement statement, and amount due, and ask about any
        unfamiliar fee. Arrange a secure way to send funds and independently confirm wiring instructions with a
        known contact, since real-estate wire fraud is a risk. Keep copies of signed documents and the closing
        statement with your records.
      </p>
    ),
  },
];

export default function BuyingAHomeFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="Buying a Home: Frequently Asked Questions"
      title={<>Buying a Home: <em>Frequently Asked Questions</em></>}
      lead="Clear, practical answers to common questions about budgeting for a home, mortgage preapproval, inspections, offers, and closing."
      sections={sections}
    />
  );
}
