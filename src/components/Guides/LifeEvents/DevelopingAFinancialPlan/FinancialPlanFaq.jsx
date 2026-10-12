import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'goals',
    title: 'How do I identify useful financial goals?',
    body: (
      <p>
        Start by listing what matters to you and when you may need the money. Goals might include
        paying down debt, building emergency savings, buying a home, funding education, supporting
        family, or preparing for retirement. Estimate each goal’s cost and time frame, then decide
        which goals are most important and realistic given your income and obligations. Review the
        priorities when your circumstances change.
      </p>
    ),
  },
  {
    id: 'rules-of-thumb',
    title: 'Can I rely on financial-planning rules of thumb?',
    body: (
      <p>
        General guidelines can help you begin thinking about a question, but they cannot account
        for your full circumstances. Savings targets, insurance amounts, emergency reserves, and
        investment mixes depend on factors such as age, income stability, dependents, debt, health,
        existing resources, and goals. Use estimates as a starting point, then build a plan from
        your own budget and needs rather than treating a single percentage or formula as a
        recommendation.
      </p>
    ),
  },
  {
    id: 'review',
    title: 'How often should I review my financial plan?',
    body: (
      <p>
        Review your plan at least when making major financial decisions and after significant
        changes such as a new job, marriage, separation, a child, a move, inheritance, health event,
        or retirement. Check whether your goals, income, spending, debt, insurance, and savings
        still line up. You may also set a regular annual review to catch smaller changes before
        they become urgent.
      </p>
    ),
  },
  {
    id: 'working-together',
    title: 'What should partners consider when planning together?',
    body: (
      <p>
        Discuss shared and individual goals, income, debt, account ownership, spending expectations,
        and how household responsibilities would be handled if one person could not work or make
        decisions. Partners who are not married may have different legal rights from spouses, so
        consider appropriate estate documents, powers of attorney, and professional legal advice.
        Keep the plan understandable and make sure each person knows where important records are
        kept.
      </p>
    ),
  },
];

export default function FinancialPlanFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/developing-a-financial-plan"
      page="Developing a Financial Plan: Frequently Asked Questions"
      title={<>Developing a Financial Plan: <em>Frequently Asked Questions</em></>}
      lead="A useful financial plan reflects your priorities and circumstances, not a one-size-fits-all formula. These answers can help you set goals and keep your plan current."
      sections={sections}
    />
  );
}
