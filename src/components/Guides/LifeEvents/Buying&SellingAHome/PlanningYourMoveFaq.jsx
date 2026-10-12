import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'timeline',
    title: 'When should I start planning a move?',
    body: (
      <p>
        Start as soon as you know your likely moving window. Make a checklist with dates for booking movers,
        arranging utilities, updating your address, and completing home-sale or rental obligations. Build in extra
        time for tasks that depend on a closing date or other people’s schedules.
      </p>
    ),
  },
  {
    id: 'mover',
    title: 'How can I choose a moving company?',
    body: (
      <p>
        Get written estimates from more than one mover and make sure each estimate reflects the services and items
        you actually need. Ask what may change the quoted price, what coverage applies if belongings are damaged,
        and how complaints are handled. Check the mover’s credentials and terms before signing.
      </p>
    ),
  },
  {
    id: 'budget',
    title: 'What costs should I include in my moving budget?',
    body: (
      <p>
        Include packing materials, transportation, storage, travel, deposits, utility setup, cleaning, and any
        temporary lodging. Keep a contingency for delays or unexpected expenses, and save estimates, invoices, and
        receipts with your moving records.
      </p>
    ),
  },
  {
    id: 'address',
    title: 'Who should I notify about my new address?',
    body: (
      <p>
        Arrange mail forwarding and update your address with banks, insurers, employers, healthcare providers,
        government agencies that need it, and subscription or delivery services. Transfer or close utility and
        internet accounts as appropriate, and confirm when service will start at the new home.
      </p>
    ),
  },
  {
    id: 'protect',
    title: 'How can I protect belongings during the move?',
    body: (
      <p>
        Photograph valuable items before packing, keep essential documents and medications with you, and label boxes
        by room and contents. Make an inventory as items are packed and check items against it on arrival. Ask the
        mover to explain in writing what valuation or insurance coverage is available and what exclusions apply.
      </p>
    ),
  },
  {
    id: 'deductions',
    title: 'Can I deduct moving expenses on my federal tax return?',
    body: (
      <p>
        For most taxpayers, moving expenses are not deductible for federal income-tax purposes under current general
        rules. A limited exception may apply to certain active-duty members of the Armed Forces moving under military
        orders. Rules can change and state treatment may differ, so check the rules for the tax year of your move or
        ask a tax professional before claiming a deduction.
      </p>
    ),
  },
];

export default function PlanningYourMoveFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="Planning Your Move: Frequently Asked Questions"
      title={<>Planning Your Move: <em>Frequently Asked Questions</em></>}
      lead="A moving checklist in FAQ form, covering timing, choosing movers, budgeting, address changes, protecting belongings, and tax considerations."
      sections={sections}
    />
  );
}
