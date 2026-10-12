import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('business-strategies.php');

const sections = [
  {
    id: 'business-succession',
    title: 'How can I help my small business survive a transition to the next generation?',
    body: (
      <p>
        Plan early for who will own and manage the business next. Options include closing, selling to an outsider or
        employee, keeping ownership while hiring outside management, or transferring ownership and management within
        the family. The source FAQ identifies business viability, lack of planning, an owner’s reluctance to transfer,
        and successors’ lack of interest as common obstacles; it emphasizes planning as a key factor.
      </p>
    ),
  },
  {
    id: 'succession-planning',
    title: 'What is involved in succession planning for a family business?',
    body: (
      <>
        <p>
          The source guide recommends coordinating four plans: a long-term business strategy, a family policy for
          participation and roles, an estate plan, and a succession plan. The succession plan identifies and prepares
          future leaders, sets out how a handover will happen, and helps establish when a successor is ready.
        </p>
        <p>
          Clarify business goals and resource priorities, family members’ roles and entry or exit criteria, estate
          arrangements, successor training, and the owner’s intended retirement timing.
        </p>
      </>
    ),
  },
  {
    id: 'business-readiness',
    title: 'How do I know whether I have what it takes to run my own business?',
    body: (
      <p>
        Assess your reasons for starting, the skills and experience you can bring, the work you enjoy, and the time
        you can commit. Research the product or service you plan to offer, the customer need it serves, your
        competition, and how you could differentiate the business and attract demand.
      </p>
    ),
  },
  {
    id: 'business-plan',
    title: 'What should I include in a business plan?',
    body: (
      <>
        <p>
          Adapt the plan to your business. The source FAQ groups the contents into an introduction, marketing,
          financial management, operations, and a concluding statement.
        </p>
        <ul>
          <li>
            <strong>Introduction:</strong> Describe the business, goals, ownership and legal structure, relevant
            experience, and competitive advantage.
          </li>
          <li>
            <strong>Marketing:</strong> Explain the offer, customer demand, target market, market size and location,
            promotion, and pricing.
          </li>
          <li>
            <strong>Financial management:</strong> Cover startup capital, budgets, cash-flow and income projections,
            return expectations, break-even analysis, owner compensation, accounting records, and contingency plans.
          </li>
          <li>
            <strong>Operations:</strong> Describe day-to-day management, personnel, insurance, premises, equipment,
            production, and delivery.
          </li>
          <li>
            <strong>Conclusion:</strong> Restate objectives, commitment, and how you intend to reach your goals.
          </li>
        </ul>
        <RelatedGuide guide={related([108, 'Business Plans: How To Prepare An Effective One'])} />
      </>
    ),
  },
  {
    id: 'home-business',
    title: 'Is a home-based business right for me?',
    body: (
      <p>
        Consider whether you can stay self-directed, understand the demands of the work, and adapt your plans as the
        business develops. A professional workspace can help; if possible, set aside a separate area for business
        activities.
      </p>
    ),
  },
  {
    id: 'home-business-law',
    title: 'What legal requirements might affect a home-based business?',
    body: (
      <p>
        A home business may be subject to zoning, licensing, product, registration, tax, and employment rules. Some
        locations restrict particular products made at home. Depending on the business, you may need permits or a
        sales-tax account and may benefit from separate business banking and communications. Employers also have
        payroll withholding, wage, and workplace-safety obligations. Check local and state requirements and obtain
        professional guidance where appropriate.
      </p>
    ),
  },
  {
    id: 'cash-flow-problems',
    title: 'How can I avoid cash-flow problems in my small business?',
    body: (
      <p>
        Understand the operating cycle: cash may be tied up in inventory and customer receivables before sales
        proceeds arrive, while supplier bills and other expenses still come due. Prepare regular cash-flow projections
        comparing expected receipts with payments. Use actual results to spot deficits or surplus cash early, then
        adjust the financial plan and spending accordingly.
      </p>
    ),
  },
  {
    id: 'improve-cash-flow',
    title: 'What steps can I take to improve business cash flow?',
    body: (
      <p>
        The source FAQ suggests managing and collecting overdue receivables, reviewing customer credit terms,
        setting prices with market and cost information in mind, considering short-term financing when needed, and
        growing sales carefully. Credit sales can increase receivables and inventory needs before they produce cash,
        so assess their effect on working capital rather than assuming higher sales immediately mean more cash.
      </p>
    ),
  },
  {
    id: 'cash-reserve',
    title: 'Should I keep a cash reserve in my small business?',
    body: (
      <p>
        Maintain accessible cash to meet expected expenses and provide a reasonable emergency cushion. If cash exceeds
        near-term needs, consider whether an accessible, lower-risk interest-bearing account is suitable for the
        reserve, taking liquidity and business needs into account.
      </p>
    ),
  },
];

export default function SmallBusinessFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Small Business FAQ"
      title={
        <>
          Small Business: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions on family-business succession, assessing a business idea, writing a plan, home-based operations, and managing cash flow."
      sections={sections}
      numbered={false}
    />
  );
}
