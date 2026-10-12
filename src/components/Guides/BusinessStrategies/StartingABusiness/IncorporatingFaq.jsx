import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('business-strategies.php');

const sections = [
  {
    id: 'corporation',
    title: 'What is a corporation?',
    body: (
      <p>
        A corporation is a legal entity distinct from its owners. It is generally formed by filing articles of
        incorporation with the appropriate state office and paying required fees.
      </p>
    ),
  },
  {
    id: 's-and-c-corporations',
    title: 'What is the difference between an S corporation and a C corporation?',
    body: (
      <p>
        A C corporation is generally taxed separately on its taxable income. An eligible corporation can elect S
        corporation tax treatment by filing the required election with the IRS; qualifying income and losses generally
        pass through to shareholders instead of being taxed at the corporate level. S corporations must meet ownership
        and other requirements, including a limit on the number of shareholders. Confirm current eligibility and
        filing deadlines before making an election.
      </p>
    ),
  },
  {
    id: 'attorney',
    title: 'Do I need an attorney to incorporate?',
    body: (
      <p>
        Whether an attorney is legally required depends on the state and current filing rules. The source FAQ states
        that South Carolina requires an in-state licensed attorney’s signature on articles of incorporation, while
        other states allow owners to prepare and file them. Requirements can change; verify them with the state filing
        office and consider legal advice if you need help choosing a structure or preparing documents.
      </p>
    ),
  },
  {
    id: 'name-availability',
    title: 'How do I know if my name is available?',
    body: (
      <p>
        Check the proposed name against the state’s business-name records and reservation rules before filing. The
        source FAQ describes its provider checking two proposed names as part of an order and contacting the customer
        for alternatives if neither is available. A provider’s search is not a substitute for confirming state
        availability and approval.
      </p>
    ),
  },
  {
    id: 'corporate-name',
    title: 'How do I name my corporation?',
    body: (
      <p>
        State naming rules vary. Common requirements include using a corporate designator, such as “Inc.” or
        “Corporation,” and choosing a name distinguishable from existing entities. Check the state’s naming rules,
        restricted words, and required suffixes before filing.
      </p>
    ),
  },
  {
    id: 'benefits',
    title: 'What are the benefits of incorporating?',
    body: (
      <>
        <p>
          Incorporation can separate the corporation’s obligations from shareholders’ personal assets, although
          protection has limits and may not cover personal guarantees or an individual’s own conduct. The source guide
          also notes continuity if an owner leaves or dies, easier transfer of ownership, centralized management,
          potential tax and retirement-plan considerations, and the ability to raise capital by issuing stock.
        </p>
        <RelatedGuide guide={related([106, 'Advantages of Incorporating'])} />
      </>
    ),
  },
  {
    id: 'registered-agent',
    title: 'What is a registered agent?',
    body: (
      <p>
        A registered agent is the person or authorized company designated to receive official notices and legal
        documents for a business. States generally require a physical address in the state of formation and
        availability during business hours; check the particular state’s requirements.
      </p>
    ),
  },
  {
    id: 'directors-shareholders',
    title: 'How many directors and shareholders do I need?',
    body: (
      <p>
        The number depends on state law and the corporation’s structure. The source FAQ notes that many states permit
        one person to serve as sole shareholder, director, and officer. Verify the current rules for the state where
        the corporation will be formed.
      </p>
    ),
  },
  {
    id: 'shares',
    title: 'How many shares should I authorize, and what par value should they have?',
    body: (
      <p>
        The appropriate number of authorized shares and any par value depend on the corporation’s plans and the
        state’s requirements and fees. The source FAQ describes a provider default of 200 shares and notes that some
        states link fees to authorized shares and par value or restrict issuing shares below par value. Review the
        filing rules and get advice before selecting these figures.
      </p>
    ),
  },
  {
    id: 'ein',
    title: 'What is a Federal Tax Identification Number or EIN?',
    body: (
      <p>
        An Employer Identification Number (EIN) is a federal tax ID issued by the IRS. Corporations commonly use it
        for tax administration, payroll, and banking. Apply through the IRS and confirm whether the corporation needs
        an EIN for its activities and tax filings.
      </p>
    ),
  },
  {
    id: 'after-incorporation',
    title: 'What do I need to do after I incorporate?',
    body: (
      <p>
        Complete the corporation’s initial organizational actions. Depending on the state and how directors were
        designated, this may include an initial shareholder meeting, electing directors and officers, adopting bylaws,
        issuing shares, and recording the decisions in corporate records. Keep up with ongoing state filings and tax
        obligations as well.
      </p>
    ),
  },
  {
    id: 'getting-started',
    title: 'How do I get started?',
    body: (
      <p>
        First choose a compliant name and confirm the corporation is the right structure for your needs. Then follow
        the state’s formation process, prepare and file the required documents, and organize the corporation after
        formation. The linked FAQ also describes its provider’s online order process: after receiving a paid order,
        the provider checks the proposed names, prepares and files the articles, and sends the filed documents to the
        customer.
      </p>
    ),
  },
];

export default function IncorporatingFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Incorporating FAQ"
      title={
        <>
          Incorporating: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about forming a corporation, S and C corporation tax treatment, naming, registered agents, shares, EINs, and initial corporate steps."
      sections={sections}
      numbered={false}
    />
  );
}
