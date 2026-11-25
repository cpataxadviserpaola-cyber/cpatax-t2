import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('business-strategies.php');

const sections = [
  {
    id: 'liability',
    title: 'Which Kinds of Business Organization or Business Entity Will Limit My Liability to Business Creditors?',
    body: (
      <p>
        Corporations, limited liability companies (LLCs), limited partnerships, and limited liability partnerships
        (LLPs) can provide liability protection. A sole proprietor and a general partner generally remain personally
        responsible for business debts. In a limited partnership, the liability distinction is between limited partners
        and general partners. The scope of any protection depends on applicable law and the circumstances.
      </p>
    ),
  },
  {
    id: 'double-taxation',
    title: 'What Is the "Corporate Double Tax" and How Can It Be Avoided?',
    body: (
      <p>
        A C corporation is generally subject to tax on its income, and its owners may also owe individual tax when they
        receive profits as dividends or realize gains on their shares. The source guide discusses an S corporation
        election as a way that may avoid federal tax at the corporate level, and delaying distributions as a way to
        defer shareholder-level tax. Eligibility and current tax consequences depend on the facts and applicable law.
      </p>
    ),
  },
  {
    id: 'tax-entity-choice',
    title: 'Which Types of Business Entity Are Best for Tax Purposes?',
    body: (
      <p>
        There is no single best choice for every business. Pass-through treatment generally means owners report their
        shares of business income rather than the business paying federal income tax on that income at the entity
        level. The source guide notes that this treatment may also let owners use qualifying startup or operating
        losses against other income, subject to tax rules and limitations.
      </p>
    ),
  },
  {
    id: 'pass-through-entities',
    title: 'Which Are the "Pass-Through" Entities?',
    body: (
      <p>
        Common forms include sole proprietorships, general and limited partnerships, LLPs, LLCs, and S corporations.
        Partnerships and LLCs can generally choose a federal tax classification under the "check-the-box" rules;
        a single-member LLC may in some cases be treated as disregarded for federal tax purposes. Eligible corporations
        may elect S corporation status. These federal tax choices do not change an entity's legal form under state law.
        Classification choices can have significant consequences if changed, so get advice before making an election.
      </p>
    ),
  },
  {
    id: 'liability-and-double-tax',
    title: 'What Entities Will Let Me Both Limit My Liability and Avoid the Double Tax?',
    body: (
      <p>
        The source guide identifies S corporations in many cases, along with LLCs, LLPs, and limited partnerships for
        limited partners, when those entities are not taxed as C corporations. For a sole owner, it points to an
        S corporation or, where state law allows, a single-member LLC. Liability protections and tax treatment are
        governed by different rules and should be checked for the business and jurisdiction.
      </p>
    ),
  },
  {
    id: 'llc-benefits',
    title: 'What’s So Great About Limited Liability Companies (LLCs)?',
    body: (
      <>
        <p>
          An LLC can pair state-law liability protection with pass-through tax treatment, depending on its
          classification. The source guide highlights potential flexibility in allocating some tax benefits among
          owners, claiming qualifying losses, and handling tax consequences when owners join or receive liquidation
          distributions.
        </p>
        <p>
          State law determines whether a single-member LLC is available. Where it is, the owner may be able to choose
          disregarded-entity treatment for federal tax purposes without changing the LLC’s state-law form. The source
          also notes S corporation treatment as an alternative in some circumstances. Compare the current rules before
          choosing.
        </p>
        <RelatedGuide
          guides={[
            related([107, 'Advantages of Limited Liability Companies']),
            related([105, 'Form of Business Organization: Which Should You Choose?']),
          ]}
        />
      </>
    ),
  },
  {
    id: 'professional-practices',
    title: 'What Special Considerations Are There If My Business Is a Professional Practice?',
    body: (
      <p>
        An entity does not protect a professional from liability for their own malpractice. Depending on state law and
        whether the entity type is available to the profession, an LLC, professional LLC (PLLC), or LLP may provide
        some protection from a co-owner’s malpractice or other business debts. A professional corporation may have
        different limits. Professional entity and tax rules vary, so consult advisers familiar with the relevant
        profession and state.
      </p>
    ),
  },
  {
    id: 'changing-structure',
    title: 'What Are the Federal Tax Consequences of Changing Your Form of Business Organization?',
    body: (
      <p>
        Changing an entity’s legal form or federal tax classification can trigger tax. The source guide gives examples
        of transitions it describes as generally not taxable—such as changing between C and S corporation status or
        moving from a sole proprietorship, partnership, or LLC to a corporation—and contrasts them with changing from
        a C or S corporation to a partnership, LLC, or sole proprietorship. These are not universal rules: the actual
        result depends on the transaction, elections, assets, liabilities, and current law. Obtain professional advice
        before making a change.
      </p>
    ),
  },
  {
    id: 'state-rules',
    title: 'Do State Business Entity Rules Follow Federal Tax Rules?',
    body: (
      <p>
        Federal tax classification and state business law are distinct. Choosing corporate tax treatment for a
        partnership, for example, does not by itself give the partnership corporate liability protection under state
        law. States decide whether to follow federal classifications for state tax purposes, and may impose entity-level
        taxes even on an entity treated as a pass-through. Check the rules in each relevant state.
      </p>
    ),
  },
];

export default function BusinessFormsFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Business Forms FAQ"
      title={
        <>
          Business Forms of Organization: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to questions about liability to business creditors, corporate double taxation, pass-through entities, LLCs, professional practices, and entity changes."
      sections={sections}
      numbered={false}
    />
  );
}
