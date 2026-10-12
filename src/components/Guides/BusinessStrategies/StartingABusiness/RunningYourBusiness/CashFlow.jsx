import GuideArticle from '../../../GuideArticle.jsx';

const sections = [
  {
    id: 'what-is-cash-flow',
    title: 'What is cash flow?',
    body: (
      <p>
        Cash flow is money moving into and out of a business. Customer receipts—cash sales and collections on
        receivables—are common inflows, alongside borrowing, proceeds from asset sales, and interest. Outflows include
        payroll, inventory and materials, operating costs, equipment, debt payments, and taxes. Timing matters:
        revenue recorded on a sale is not cash in hand until the customer pays.
      </p>
    ),
  },
  {
    id: 'cash-flow-and-profit',
    title: 'Cash flow versus profit',
    body: (
      <p>
        Profit measures income less expenses over a period; cash flow tracks when money is actually received and paid.
        A profitable sale on credit can still leave a business short of cash while bills come due before the customer
        pays. Persistent gaps may damage credit, require borrowing, or prevent the business from meeting obligations.
      </p>
    ),
  },
  {
    id: 'analyze-cash-flow',
    title: 'Analyzing your cash flow',
    body: (
      <>
        <p>Review the timing and management of the main components that affect cash:</p>
        <ul>
          <li>
            <strong>Accounts receivable:</strong> Monitor how quickly customers pay; long collection times delay cash
            inflows.
          </li>
          <li>
            <strong>Credit terms and policy:</strong> Set payment deadlines and decide carefully which customers
            receive credit.
          </li>
          <li>
            <strong>Inventory:</strong> Excess stock ties up funds that could be used to meet other expenses.
          </li>
          <li>
            <strong>Accounts payable:</strong> Review supplier payment schedules and available trade credit to plan
            outflows.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'manage-cash-flow',
    title: 'Managing cash-flow gaps',
    body: (
      <p>
        Some gaps result from deliberate choices, such as buying extra stock for a discount or investing in expansion;
        others may follow predictable seasonal cycles. Monitor cash-flow statements regularly to identify trouble
        early, compare expected receipts with bills due, and adjust operations or forecasts. Depending on the
        circumstances, businesses may use cash surpluses from peak periods, trade credit, a revolving credit line, or
        a bank loan to address shortfalls. Consider financing costs and repayment ability before borrowing.
      </p>
    ),
  },
];

export default function CashFlow() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/running-your-business"
      page="Cash Flow"
      title={<>Cash Flow: <em>The Pulse of Your Business</em></>}
      lead="Understand the difference between profit and cash, identify what affects the timing of receipts and payments, and monitor cash-flow gaps before they threaten day-to-day operations."
      sections={sections}
    />
  );
}
