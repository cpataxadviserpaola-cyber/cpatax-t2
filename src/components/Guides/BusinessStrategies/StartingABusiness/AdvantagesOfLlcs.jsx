import { Link } from 'react-router';
import GuideArticle from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/business-strategies.php?item=107 (Advantages of Limited Liability
// Companies), word for word. Its four bold lead-ins are the guide's sections. The library's guide has
// no introduction, so the banner's opening line (`lead`) is written for this site, as on Advantages
// of Incorporating. Double hyphens are now dashes. The "Exceptions to Limited Liability" link goes to
// the Limited Liability Companies FAQ, the page it links to in the library, and opens it on this
// site once that FAQ has a page here. Back-to-top anchors omitted.
// Address: /guides/business-strategies/starting-a-business/advantages-of-llcs (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };
const llcFaq = guide('business-strategies.php')([146, 'Limited Liability Companies: Frequently Asked Questions']);

const sections = [
  {
    id: 'best-aspects',
    title: 'Combining the Best Aspects of Partnerships and Corporations',
    body: (
      <>
        <p>
          A Limited Liability Company, or LLC, is not a corporation, although it offers many of the same advantages. An
          LLC is best described as a combination of a corporation and a partnership. LLCs offer the limited liability of a
          corporation while allowing more flexibility in managing the business and organization.
        </p>
        <p>
          An LLC does not pay any income tax itself. It's a "flow through" entity that allows profits and losses to flow
          through to the tax returns of the individual members, avoiding the double taxation of C corporations.
        </p>
        <p>
          While setting up an LLC can be more difficult than creating a partnership (or sole proprietorship), running one
          is significantly easier than running a corporation. Here are the main features of an LLC:
        </p>
      </>
    ),
  },
  {
    id: 'limited-personal-liability',
    title: 'Limited Personal Liability',
    body: (
      <>
        <p>
          Like shareholders of a corporation, all LLC owners are protected from personal liability for business debts and
          claims. This means that if the business itself can't pay a creditor—such as a supplier, a lender, or a
          landlord—the creditor cannot legally come after any LLC member's house, car, or other personal possessions.
          Because only LLC assets are used to pay off business debts, LLC owners stand to lose only the money that they've
          invested in the LLC. This feature is often called "limited liability."
        </p>
        <p>
          While LLC owners enjoy limited personal liability for many of their business transactions, it is important to
          realize that this protection is not absolute. See{' '}
          {llcFaq.to ? (
            <Link to={llcFaq.to}>Exceptions to Limited Liability.</Link>
          ) : (
            <a href={llcFaq.href} {...external}>
              Exceptions to Limited Liability.
            </a>
          )}
        </p>
      </>
    ),
  },
  {
    id: 'llc-taxes',
    title: 'LLC Taxes',
    body: (
      <>
        <p>
          Unlike a corporation, an LLC is not considered separate from its owners for tax purposes. Instead, it is what the
          IRS calls a "pass-through entity," like a partnership or sole proprietorship. This means that business income
          passes through the business to the LLC members, who report their share of profits—or losses—on their individual
          income tax returns. Each LLC member must make quarterly estimated tax payments to the IRS.
        </p>
        <p>
          While an LLC itself doesn't pay taxes, co-owned LLCs must file Form 1065, an informational return, with the IRS
          each year. This form, the same one that a partnership files, sets out each LLC member's share of the LLC's
          profits (or losses), which the IRS reviews to make sure the LLC members are correctly reporting their income.
        </p>
      </>
    ),
  },
  {
    id: 'llc-management',
    title: 'LLC Management',
    body: (
      <>
        <p>
          The owners of most small LLCs participate equally in the management of their business. This arrangement is called
          "member management."
        </p>
        <p>
          The alternative management structure—somewhat awkwardly called "manager management"—means that you designate one
          or more owners (or even an outsider) to take responsibility for managing the LLC. The non-managing owners
          (sometimes family members who have invested in the company) simply sit back and share in LLC profits. In a
          manager-managed LLC, only the named managers get to vote on management decisions and act as agents of the LLC.
        </p>
      </>
    ),
  },
];

export default function AdvantagesOfLlcs() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Advantages of LLCs"
      title="Advantages of Limited Liability Companies"
      lead="How a limited liability company combines the best aspects of partnerships and corporations: limited personal liability, pass-through taxation, and flexible management."
      sections={sections}
    />
  );
}
