import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/business-strategies.php?item=106 (Advantages of Incorporating), word for
// word. Its two bold lead-ins ("Why Incorporate?", "Some Benefits Include:") are the guide's
// sections, without the closing colon. The library's guide has no introduction, so the banner's
// opening line (`lead`) is written for this site. Its closing link to the Incorporating FAQ is a
// related-guide box, with the FAQ named by its title in the library. Back-to-top anchors omitted.
// Address: /guides/business-strategies/starting-a-business/advantages-of-incorporating
// (articlePages in src/data/guides.js).

const related = guide('business-strategies.php');

const sections = [
  {
    id: 'why-incorporate',
    title: 'Why Incorporate?',
    body: (
      <>
        <p>
          All legal and tax professionals agree, if your business is not incorporated you may be throwing away thousands of
          dollars in tax savings and deductions.
        </p>
        <p>
          In addition, all of your personal assets such as your home, cars, boats, savings and investments are at risk and
          could be used to satisfy any law suits, debt or liability incurred by the business. Forming a Corporation can
          provide the protection and tax savings needed to give you peace of mind and make your business even more
          successful and profitable.
        </p>
      </>
    ),
  },
  {
    id: 'benefits',
    title: 'Some Benefits Include',
    body: (
      <>
        <p>
          <strong>Liability Protection:</strong> Properly forming and maintaining a corporation will provide personal
          liability protection to the owners or shareholders of the corporation for any debt or liability incurred by the
          business. Personal liability of the shareholders is normally limited to the amount of money invested in the
          corporation.
        </p>
        <p>
          <strong>Tax Advantages:</strong> Another important benefit is that a corporation can be structured many ways to
          provide substantial tax savings. You can minimize self-employment taxes and increase the number of allowable
          deductions lowering the taxes you pay on the income of the business. Many corporations structure retirement and
          tax deferred savings plans for their owners and employees which can provide even greater tax savings.
        </p>
        <p>
          <strong>Raising Capital:</strong> Sale of stock for the purposes of raising capital is often more attractive to
          investors than other forms of equity sales. A corporation can also issue Corporate Bonds to raise capital for
          expenditures without compromising the ownership of the business.
        </p>
        <RelatedGuide
          guides={[
            related([145, 'Incorporating: Frequently Asked Questions']),
            related([144, 'Business Forms of Organization: Frequently Asked Questions']),
          ]}
        />
      </>
    ),
  },
];

export default function AdvantagesOfIncorporating() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Advantages of Incorporating"
      title="Advantages of Incorporating"
      lead="Why business owners incorporate, and the liability protection, tax advantages, and ways of raising capital a corporation can offer."
      sections={sections}
    />
  );
}
