import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'transfer-options',
    title: 'Consider the available transfer options',
    body: (
      <p>
        Owners may retain family ownership and management, keep ownership while hiring outside management, sell to
        an outsider or employee, or close the business. The right option depends on the business’s viability, the
        owner’s wishes, family members’ interests, and the needs of the people involved.
      </p>
    ),
  },
  {
    id: 'why-planning-matters',
    title: 'Plan for the barriers to a successful transfer',
    body: (
      <p>
        The source identifies four common barriers: a business that is not viable, insufficient planning, an owner
        who is reluctant to transfer control, and potential successors who do not want to join the business. Planning
        early can help the family address these issues while there is time to consider alternatives.
      </p>
    ),
  },
  {
    id: 'family-business-plan',
    title: 'Coordinate family, business, succession, and estate planning',
    body: (
      <p>
        A family-business strategic plan can define the family’s role, participation criteria, entry and exit
        policies, shared values, and business mission. A succession plan explains how leadership and ownership may
        pass and how the next leader’s readiness will be assessed. Estate planning is also important to coordinate
        the owner’s intentions with the business and family. These plans should be developed together and reviewed
        with qualified legal, tax, and financial advisers.
      </p>
    ),
  },
  {
    id: 'family-business-dynamics',
    title: 'Recognize the family and business as connected systems',
    body: (
      <p>
        Family businesses combine personal relationships with business roles and responsibilities. Family loyalty,
        communication habits, sibling relationships, compensation, ownership, and management authority can affect
        business decisions. Issues may arise when family roles carry over into work or business roles carry over
        into family life. Clarifying expectations and policies can help balance family needs with the business’s
        needs.
      </p>
    ),
  },
  {
    id: 'share-information',
    title: 'Share information and address issues together',
    body: (
      <p>
        The source emphasizes sharing relevant information with active and non-active family members. Identify
        potential sources of stress, discuss them with the family, and create policies that address participation,
        leadership, ownership, succession, liquidity, compensation, and family harmony. Early, open planning can
        reduce conflict when decisions are made and implemented.
      </p>
    ),
  },
  {
    id: 'dual-family-business-system',
    title: 'Understand the family business as two connected systems',
    body: (
      <p>
        The source describes a family business as both a family system and a business system. Family relationships
        often emphasize emotional bonds and long-standing roles; business roles depend on responsibilities,
        qualifications, performance, and accountability. Conflicts can arise when family communication or expectations
        are carried into workplace decisions, or when workplace authority is carried into family relationships.
        Recognizing which perspective is shaping a disagreement can help the family address it more constructively.
      </p>
    ),
  },
  {
    id: 'family-business-roles',
    title: 'Consider the perspectives of everyone involved',
    body: (
      <p>
        Different participants can have different interests: relatives who do not work in the business, family
        employees without ownership, family members who are both owners and employees, passive family owners,
        non-family employees, and employees who may become owners. Issues can include fairness in compensation,
        access to information, advancement, decision-making authority, dividends, and the effects of family conflict
        on daily operations. Include affected people in planning rather than assuming one person’s view represents
        everyone.
      </p>
    ),
  },
  {
    id: 'strategic-planning',
    title: 'Align the business strategy with family goals',
    body: (
      <p>
        The source recommends considering personal and professional goals, the family mission, the future direction
        of the firm, the role of family members in management, and how compensation and performance will be handled.
        Business planning can then assess the firm’s strengths, weaknesses, opportunities, and threats, set a mission
        and measurable objectives, select a strategy, and turn it into practical action steps. The selected strategy
        should fit both the business’s opportunities and the family’s risk tolerance and financial needs.
      </p>
    ),
  },
  {
    id: 'family-retreat',
    title: 'Set aside time for family-business planning',
    body: (
      <p>
        The source proposes a dedicated family-business retreat as a forum to review the business’s history, discuss
        family and business values, consider the firm’s future, and identify issues needing attention. Possible agenda
        topics include succession, estate planning, business strategy, compensation and rewards, performance
        evaluation, family communication, preparing adult children, transition timing, and policies for entering or
        leaving the business. Agree on actions, assign responsibility, and plan future meetings so the conversation
        continues.
      </p>
    ),
  },
  {
    id: 'succession-barriers',
    title: 'Recognize what can make succession difficult',
    body: (
      <p>
        In addition to the business and family challenges above, the source identifies barriers that can affect
        founders, relatives, employees, and the surrounding environment. These include difficulty letting go of
        control or identity, concerns about family roles and sibling fairness, employee attachment to the founder
        and fear of change, client dependence on the current owner, and social norms that discourage discussing
        succession. Acknowledging these concerns early can make them easier to address openly.
      </p>
    ),
  },
  {
    id: 'succession-stages',
    title: 'Work through succession in stages',
    body: (
      <>
        <p>The source describes succession as a process with four phases:</p>
        <ol>
          <li>
            <strong>Initiation:</strong> Let the next generation learn about the business, its values, and its future.
            Discuss the possibility of joining openly, without assuming that a family member must take over.
          </li>
          <li>
            <strong>Selection:</strong> Identify future leadership needs and assess candidates against the role’s
            requirements. Clear qualifications and objectives can help keep the decision focused on the needs of the
            business and reduce avoidable perceptions of favoritism.
          </li>
          <li>
            <strong>Education:</strong> Give a potential successor defined responsibilities, training, and increasing
            authority. Evaluate progress against agreed objectives and introduce the successor to important customers,
            lenders, and business contacts.
          </li>
          <li>
            <strong>Transition:</strong> Set a realistic timetable, communicate the plan, and make the transfer of
            authority clear. The source emphasizes an orderly transition in which the departing owner does not
            continue directing daily operations and the successor has clear accountability.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'strategic-plan-details',
    title: 'Turn the family and business vision into a strategic plan',
    body: (
      <p>
        The source recommends starting with a mission that explains the business, its customers, and its purpose.
        Set clear, realistic, measurable, time-specific objectives—such as goals for revenue, earnings, sales,
        market share, locations, quality, or reputation. Choose a direction that fits the firm and the family’s
        priorities, then turn it into practical steps, budgets, and assigned responsibilities. The plan should
        consider the firm’s strengths and weaknesses, market opportunities and threats, and the family’s own goals
        and tolerance for risk.
      </p>
    ),
  },
  {
    id: 'retreat-practice',
    title: 'Make family-business meetings productive',
    body: (
      <p>
        The source recommends setting aside dedicated time away from normal business operations for a family
        retreat. Invite family members, including in-laws, plan ahead, and create a non-confrontational setting for
        discussing the firm’s history, shared values, future direction, succession, estate planning, compensation,
        performance, communication, and entry or exit policies. A facilitator familiar with family businesses may
        help structure the discussion. End with decisions, assigned next steps, and a schedule for continued family
        meetings.
      </p>
    ),
  },
  {
    id: 'successor-development',
    title: 'Define the successor’s role, preparation, and evaluation',
    body: (
      <p>
        Before choosing a successor, describe the leadership role the business will need in light of its future
        objectives. Identify relevant skills and experience, then evaluate potential successors against those
        requirements rather than relying only on birth order or assumptions. Training can be structured around
        agreed responsibilities, timeframes, and review criteria, with authority increasing as the successor
        demonstrates readiness. Consider decision-making, leadership, risk judgment, interpersonal skills, and
        performance under stress. Introduce the successor to employees, customers, lenders, and other business
        contacts before the transition.
      </p>
    ),
  },
  {
    id: 'founder-transition',
    title: 'Prepare the founder to let go',
    body: (
      <p>
        Stepping away can be difficult when the business provides income, benefits, identity, status, social
        connection, routine, and a sense of purpose. Plan for the owner’s financial needs after retirement and for
        the successor to receive clear authority; otherwise, the owner may remain involved in daily decisions and
        prevent the next leader from taking charge. The source suggests planning the handoff, testing the business
        through planned owner absences, and building meaningful activities outside the business. Obtain independent
        financial, legal, and tax advice before deciding how the owner will be compensated or bought out.
      </p>
    ),
  },
  {
    id: 'board-and-communication',
    title: 'Use governance and communication to support the handoff',
    body: (
      <p>
        A board that includes informed outside members can provide expertise, help clarify objectives, review a
        successor’s progress, and offer perspective on transition timing. Define the board’s purpose before
        recruiting members, and keep its role distinct from daily operations. Regular family meetings can also
        explain the business, leadership requirements, decision-making policies, and conflict-resolution
        expectations. Address possible employee concerns and sibling disagreements early, and make clear how
        everyone is expected to work together.
      </p>
    ),
  },
  {
    id: 'transfer-and-estate-planning',
    title: 'Coordinate transfer mechanics and estate planning',
    body: (
      <p>
        Depending on the business structure and the owner’s goals, a transfer may involve a gift, a sale, payments
        over time, a buy-sell arrangement, or an employee ownership plan. Each approach can affect control,
        liquidity, financing, retirement security, and the business’s ability to continue operating. The source
        discusses estate planning and several transfer techniques, but its tax discussion reflects older law.
        Do not rely on its historical tax amounts or treatment; have qualified legal, tax, and financial advisers
        evaluate current rules and the specific transaction.
      </p>
    ),
  },
  {
    id: 'succession-checklist',
    title: 'Use a checklist to keep planning on track',
    body: (
      <p>
        The source’s planning checklist calls for ongoing communication; a business plan with a mission, goals, and
        strategy; a family plan that defines shared expectations and policies; successor training and a transition
        timetable; estate planning; and support for the chosen successor. Review the plans together, identify an
        owner for each next step, and revisit them when family circumstances or business conditions change.
      </p>
    ),
  },
];

export default function BusinessSuccession() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/selling-exiting-your-business"
      page="Your Business Succession"
      title="Your Business Succession: How To Plan For It"
      lead="Plan a family-business transition by evaluating transfer options and coordinating business, family, succession, and estate plans."
      sections={sections}
      numbered={false}
    />
  );
}
