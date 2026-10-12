import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=77 (What Records You Must Keep Relating To Your
// Charitable Contributions), word for word. Back-to-top anchors omitted (handled by layout). The
// third section takes its heading's wording, "Deductions of Less Than $250", not the table of
// contents' "Deductions Less Than $250". The library's two "Related Financial Guide" boxes at the
// end are one box here, with both guides, named by their titles in the library.
// Address: /guides/life-events/making-charitable-contributions/records-to-keep (articlePages in
// src/data/guides.js).

const related = guide('life-events.php');

const sections = [
  {
    id: 'cash-contributions',
    title: 'Cash Contributions',
    body: (
      <>
        <p>
          Cash contributions include those paid by cash, check, electronic funds transfer, debit card, credit card, or
          payroll deduction. You cannot deduct a cash contribution, regardless of the amount, unless it is substantiated
          by one of the following:
        </p>
        <ol>
          <li>
            A bank record that shows the name of the qualified organization, the date of the contribution, and the amount
            of the contribution. Bank records may include: a canceled check, a bank or credit union statement or a credit
            card statement.
          </li>
          <li>
            A receipt (or letter or other written communication) from the qualified organization showing the name of the
            organization, the date of the contribution, and the amount of the contribution.
          </li>
          <li>
            Payroll deduction records. The payroll records must include a pay stub, Form W-2 or other document furnished
            by the employer that shows the date and the amount of the contribution, and a pledge card or other document
            prepared by or for the qualified organization that shows the name of the organization.
          </li>
        </ol>
        <p>
          <strong>Cash Contributions of $250 or More:</strong> You can claim a deduction for a contribution of $250 or more
          only if you have an acknowledgment of your contribution from the qualified organization or certain payroll
          deduction records. If you made more than one contribution of $250 or more, you must have either a separate
          acknowledgment for each or one acknowledgment that lists each contribution and the date of each contribution
          and shows your total contributions.
        </p>
        <p>
          To determine whether a contribution is $250 or more, do not combine separate contributions. For example, if you
          gave to the church $25 each week, your weekly payments do not need to be combined. Each payment is a separate
          contribution. The acknowledgment must be written and state whether you received any goods or services in
          return. If something was received in return, a description and good faith estimate of the value of the goods
          or services must be included.
        </p>
        <p>
          For payroll deductions, the payroll records must include a pay stub, Form W-2 or other document furnished by the
          employer that shows the date and the amount of the contribution, and a pledge card or other document prepared
          by or for the qualified organization that shows the name of the organization. If the pay stub, Form W-2, pledge
          card, or other document does not show the date of the contribution, you must also have another document that
          does show the date of the contribution.
        </p>
      </>
    ),
  },
  {
    id: 'noncash-contributions',
    title: 'Noncash Contributions',
    body: (
      <>
        <p>For a contribution not made in cash, these general rules apply:</p>
        <p>The records you must keep depends on whether your deduction for the contribution is:</p>
        <ol>
          <li>Less Than $250</li>
          <li>At least $250 but not more than $500,</li>
          <li>Over $500 but not more than $5,000, or</li>
          <li>Over $5,000.</li>
        </ol>
        <p>
          <strong>Amount of contribution</strong>. In figuring whether your contribution is $500 or more, combine separate
          contributions of similar items during the year. If you received goods or services in return, reduce your
          contribution by the value of those goods or services. If you figure your deduction by reducing the fair market
          value of the donated property by its appreciation, your contribution is the reduced amount.
        </p>
      </>
    ),
  },
  {
    id: 'less-than-250',
    title: 'Deductions of Less Than $250',
    body: (
      <>
        <p>If you make any noncash contribution, you must get and keep a receipt from the charitable organization showing:</p>
        <ol>
          <li>The name of the charitable organization,</li>
          <li>The date and location of the charitable contribution, and</li>
          <li>A reasonably detailed description of the property.</li>
        </ol>
        <p>
          A letter or other written communication from the charitable organization acknowledging receipt of the
          contribution and containing the information in (1), (2), and (3) will serve as a receipt. You are not required
          to have a receipt where it is impractical to get one (for example, if you leave property at a charity's
          unattended drop site).
        </p>
        <p>
          <strong>Additional records</strong>. You must also keep reliable written records for each item of donated
          property. Your written records must include the following information.
        </p>
        <ol>
          <li>The name and address of the organization to which you contributed.</li>
          <li>The date and location of the contribution.</li>
          <li>
            A description of the property in detail reasonable under the circumstances. For a security, keep the name of
            the issuer, the type of security, and whether it is regularly traded on a stock exchange or in an
            over-the-counter market.
          </li>
          <li>
            The fair market value of the property at the time of the contribution and how you figured the fair market
            value. If it was determined by appraisal, you should also keep a signed copy of the appraisal.
          </li>
          <li>The cost or other basis of the property if you must reduce its fair market value by appreciation.</li>
          <li>
            The amount you claim as a deduction for the tax year as a result of the contribution if you contribute less
            than your entire interest in the property during the tax year. Your records must include the amount you
            claimed as a deduction in any earlier years for contributions of other interests in this property. They must
            also include the name and address of each organization to which you contributed the other interests, the
            place where any such tangible property is located or kept, and the name of any person in possession of the
            property, other than the organization to which you contributed.
          </li>
          <li>Any conditions attached to the gift of property.</li>
        </ol>
      </>
    ),
  },
  {
    id: '250-to-500',
    title: 'Deductions of At Least $250 But Not More Than $500',
    body: (
      <>
        <p>
          If you claim a deduction of at least $250 but not more than $500 for a noncash charitable contribution, you must
          get and keep an acknowledgment of your contribution from the qualified organization. If you made more than one
          contribution of $250 or more, you can have either a separate acknowledgment for each or one acknowledgment that
          shows your total contributions.
        </p>
        <p>
          The acknowledgement must contain the information in items (1) through (3) listed under{' '}
          <em>Deductions of Less Than $250</em>, earlier, and your written records must include the information listed in
          that discussion under <em>Additional Records</em>.
        </p>
        <p>1. It must be written.</p>
        <p>2. It must include:</p>
        <ul>
          <li>A description (but not necessarily the value) of any property you contributed,</li>
          <li>
            Whether the qualified organization gave you any goods or services as a result of your contribution (other than
            certain token items and membership benefits), and
          </li>
          <li>
            A description and good faith estimate of the value of any goods or services described above. If the only
            benefit you received was an intangible religious benefit (such as admission to a religious ceremony) that
            generally is not sold in a commercial transaction outside the donative context, the acknowledgment must say so
            and does not need to describe or estimate the value of the benefit.
          </li>
        </ul>
        <p>3. You must get the acknowledgment on or before the earlier of:</p>
        <ul>
          <li>The date you file your return for the year you make the contribution, or</li>
          <li>The due date, including extensions, for filing the return.</li>
        </ul>
      </>
    ),
  },
  {
    id: '500-to-5000',
    title: 'Deductions Over $500 But Not Over $5,000',
    body: (
      <>
        <p>
          If you claim a deduction over $500 but not over $5,000 for a noncash charitable contribution, you must have the
          acknowledgment and written records described under <em>Deductions of At Least $250 But Not More Than $500</em>.
          Your records must also include:
        </p>
        <ol>
          <li>How you got the property, for example, by purchase, gift, bequest, inheritance, or exchange.</li>
          <li>
            The approximate date you got the property or, if created, produced, or manufactured by or for you, the
            approximate date the property was substantially completed.
          </li>
          <li>
            The cost or other basis, and any adjustments to the basis, of property held less than 12 months and, if
            available, the cost or other basis of property held 12 months or more. This requirement, however, does not
            apply to publicly traded securities.
          </li>
        </ol>
        <p>
          If you are not able to provide information on either the date you got the property or the cost basis of the
          property and you have a reasonable cause for not being able to provide this information, attach a statement of
          explanation to your return.
        </p>
      </>
    ),
  },
  {
    id: 'over-5000',
    title: 'Deductions Over $5,000',
    body: (
      <>
        <p>
          If you claim a deduction of over $5,000 for a charitable contribution of one property item or a group of similar
          property items, you must have the acknowledgment and the written records described under{' '}
          <em>Deductions Over $500 But Not Over $5,000</em>. In figuring whether your deduction is over $5,000, combine
          your claimed deductions for all similar items donated to any charitable organization during the year.
        </p>
        <p>Generally, you must also obtain a qualified written appraisal of the donated property from a qualified appraiser.</p>
        <p>
          <strong>Qualified conservation contribution</strong>. If the gift was a "qualified conservation contribution,"
          your records must also include the fair market value of the underlying property before and after the gift and
          the conservation purpose furthered by the gift.
        </p>
      </>
    ),
  },
  {
    id: 'out-of-pocket-expenses',
    title: 'Out of Pocket Expenses',
    body: (
      <>
        <p>
          If you render services to a qualified organization and have unreimbursed out of pocket expenses related to
          those services, the following three rules apply.
        </p>
        <ol>
          <li>You must have adequate records to prove the amount of the expenses.</li>
          <li>
            You must get an acknowledgment from the qualified organization that contains a description of the services you
            provided and a statement of whether or not the organization provided you any goods and services to reimburse
            you for the expenses incurred. If so, the statement must include a description and good faith estimate of the
            value of any goods or services (other than intangible religious benefits). If the only benefit you received
            was an intangible religious benefit, you must receive a statement stating this; however, the acknowledgment
            does not need to describe or estimate the value of an intangible religious benefit.
          </li>
          <li>
            You must get the acknowledgment on or before the earlier of (a) The date you file your return for the year you
            make the contribution, or the due date, including extensions, for filing your return.
          </li>
        </ol>
        <p>
          <strong>Car Expenses.</strong> If you claim expenses directly related to the use of your car in giving services
          to a qualified organization, you must keep reliable written records of your expenses. Whether your records are
          considered reliable depends on all the facts and circumstances. Generally, they are reliable if you made them
          regularly and at the time you incurred the expense.
        </p>
        <p>
          Your records must show the name of the organization you were serving and the date each time you used your car
          for a charitable purpose. If you use the standard mileage rate, your records must show the miles you drove. If
          you use actual expenses to complete the deduction, your records must show the costs of operating the car for
          charitable purposes only.
        </p>
        <RelatedGuide
          guides={[
            related([78, 'Advanced Charity Techniques: Maximizing Your Deduction']),
            related([76, 'Charitable Contributions of Property: Maximizing the Deduction']),
          ]}
        />
      </>
    ),
  },
];

export default function RecordsToKeep() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/making-charitable-contributions"
      page="Records To Keep"
      title={
        <>
          What Records You Must Keep <em>Relating To Your Charitable Contributions</em>
        </>
      }
      lead="You must keep records to prove the amount of the cash and noncash contributions you make during the year. Which records you must keep depends on the amount of your contributions and whether they are cash or property contributions. New recordkeeping requirements were established for all contributions made after January 1, 2007. You cannot deduct a cash contribution, regardless of the amount, unless you keep as a record of the contribution, bank records (such as a canceled check or bank statement containing the name of the charity, date, and the amount) or a written communication from the charity."
      sections={sections}
      numbered={false}
    >
      <p>This Financial Guide discusses which records you must keep.</p>
    </GuideArticle>
  );
}
