import GuideArticle, { Agencies, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=73 (Estate Planning: How To Get Started), word
// for word. Related guides are named by their titles in the library, and the agencies'
// websites use their secure addresses.
// Address: /guides/life-events/getting-married/estate-planning (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');

const estateTaxStates = [
  'Connecticut',
  'District of Columbia',
  'Hawaii',
  'Illinois',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Minnesota',
  'New York',
  'Oregon',
  'Rhode Island',
  'Vermont',
  'Washington',
];

const inheritanceTaxStates = ['Iowa', 'Kentucky', 'Maryland', 'Nebraska', 'New Jersey', 'Pennsylvania'];

const agencies = [
  {
    name: 'Army and Air Force Mutual Aid Association',
    website: 'www.aafmaa.com',
    text: "An organization that provides information on officers' benefits and estate planning",
    lines: ['Tel. 800-336-4538'],
  },
  {
    name: 'Navy Mutual Aid Association',
    website: 'www.navymutual.org',
    text: "This veterans' benefit organization provides information for Navy, Marine Corps, Coast Guard, Public Health, and NOAA personnel",
    lines: ['Tel. 800-628-6011'],
  },
];

const sections = [
  {
    id: 'overall-picture',
    title: 'The Overall Picture',
    body: (
      <>
        <p>
          <strong>What is your "estate?"</strong> Simply stated, it includes everything you own at your death
          minus your debts. However, some rather tricky rules apply, which may bring back into the estate assets
          you've given away, or thought you'd given away.
        </p>
        <p>
          Most estates do not need to pay the federal estate tax, in many cases because you can leave an
          unlimited amount to a surviving spouse without having it being subjected to federal estate tax (i.e.,
          the bequest provides a marital deduction). In 2023, there is an exemption of $12,920,000 (up from
          $12,060,000 in 2022) per individual before the federal estate tax kicks in. The nearly doubling of the
          exemption amount is due to tax reform legislation passed in December 2017. In 2026, however, the estate
          tax exemption amount reverts to the 5 million exemption amount (indexed for inflation) that that went
          into effect in 2011. State inheritance taxes, which vary from state to state, must also be considered
          in addition to federal estate tax.
        </p>
        <Callout label="Note">
          <p>
            In November 2019, the Department of Treasury and Internal Revenue Service (IRS) issued final
            regulations regarding increased gift and estate tax exclusion amounts in effect from tax years 2018
            through 2025. The final regulations state that individuals who take advantage of the increased gift
            and estate tax exclusion amounts will not be impacted adversely after tax year 2025 when exclusion
            levels are scheduled to revert to pre-2018 TCJA levels.
          </p>
        </Callout>
        <p>
          In addition to the two primary estate planning tools, wills, and trusts, there are other essential
          tools you should consider such as:
        </p>
        <ul>
          <li>The postmortem letter to your spouse and survivors,</li>
          <li>Living wills,</li>
          <li>Life insurance,</li>
          <li>Disclaimers,</li>
          <li>Lifetime gifts, and</li>
          <li>Powers of attorney.</li>
        </ul>
        <p>
          <strong>State estate taxes.</strong> States had death taxes (i.e. estate and/or inheritance taxes)
          long before there was a federal estate tax. Today, twelve states and the District of Columbia impose an
          estate tax while six states have an inheritance tax:
        </p>
        <p>
          <strong>Estate Tax</strong>
        </p>
        <ul className="article-columns">
          {estateTaxStates.map((state) => (
            <li key={state}>{state}</li>
          ))}
        </ul>
        <p>
          <strong>Inheritance Tax</strong>
        </p>
        <ul className="article-columns">
          {inheritanceTaxStates.map((state) => (
            <li key={state}>{state}</li>
          ))}
        </ul>
        <p>
          Many state death taxes are loosely based on the federal estate tax model. In some cases, the amount
          subject to the state death tax is the same dollar amount that is also subject to federal estate tax. In
          other states, estate taxes at death are independent of the federal estate tax and apply whether or not
          a federal estate tax applies. While the federal estate tax rate was made permanent (indexed for
          inflation), state death taxes are often subject to change.
        </p>
        <p>
          <strong>Gift tax</strong>. The lifetime gift tax exemption is $12.92 million ($25.84 million joint) in
          2023.
        </p>
        <p>
          Gifts (apart from the annual exclusion of $17,000 per donee in 2023 ($16,000 in 2022) are applied
          against the $12.92 million exemption so that gift tax is due when their total exceeds that exemption
          amount. If the estate tax is still in existence when the donor dies, the estate will include prior
          taxed gifts and prior untaxed gifts counted against the $12.92 million exemption. If an estate tax
          results because the estate at death plus these prior gifts exceeds the estate tax exclusion amount
          applicable in the year of death, that tax is reduced by prior gift tax payments.
        </p>
        <p>Some states impose gift taxes.</p>
        <Callout label="Caution">
          <p>
            Under the estate/gift tax scheme now applicable, gift tax can result in situations where there would
            be no estate tax if assets of the same value had been held at death. Gifts that bring the gift total
            above the lifetime exemption should be made only on the specific advice of a tax professional.
          </p>
        </Callout>
        <p>Gift tax is continued after estate tax repeal as a device to limit asset transfers designed to avoid income tax.</p>
        <p>
          <strong>Income tax after estate tax repeal</strong>. Assets acquired upon another person's death
          usually take a tax basis to the heir equal to the asset's fair market value on the date of death. Thus,
          for example, if a person bought 1,000 shares of stock at $10 a share and died when the shares were worth
          $50 a share (a $40,000 unrealized gain), his or her heir takes the shares at a total basis of $50,000.
          The heir can sell the shares for $50,000, free of income (capital gains) tax.
        </p>
        <p>
          Fair market value basis at death is usually a step up in basis although the basis is stepped down at
          death where value has fallen below cost. Basis step-up by which most inherited assets escape most
          capital gains tax has been justified as a kind of compensation for the possible exposure of the entire
          asset (not just the unrealized gain) to the estate tax, whether or not estate tax was actually imposed.
          The theoretical reason for step-up in basis is reduced if there is no estate tax. The step-up in basis
          was retained by the Tax Cuts and Jobs Act of 2017.
        </p>
        <p>
          Complex estate planning for making use of this surviving step-up in basis is possible, but your
          professional tax adviser's view of the prospects for estate tax repeal should govern whether such
          planning should be done now.
        </p>
      </>
    ),
  },
  {
    id: 'wills',
    title: 'Wills',
    body: (
      <>
        <p>
          A will is the foundation of good estate planning and it's critical to obtain competent legal help when
          drafting a will. A will that is poorly drafted or does not dot every legal "i" and cross every legal
          "t" can be the cause of endless trouble for your survivors.
        </p>
        <Callout label="Tip">
          <p>
            Do not keep original copies of your will in a safe deposit box. Instead, keep them in a fireproof safe
            at home and give copies to your attorney and your executor as well.
          </p>
        </Callout>
        <p>
          Many people believe they do not need a will, but there are many good reasons, other than saving estate
          taxes, for having a valid and updated will.
        </p>

        <h3>Why You Need a Will</h3>
        <p>There are five basic reasons to prepare a will:</p>
        <p>
          <strong>1. To Choose Beneficiaries</strong>. The laws of the state in which you live determine how your
          property will be distributed if you die without a valid will. For example, in most states, the
          property of a married person with children who dies intestate (i.e., without a will) generally will be
          distributed one-third to his or her spouse and two-thirds to the children, while the property of an
          unmarried, childless person who dies intestate generally will be distributed to his or her parents (or
          siblings if there are no parents). These distributions may be contrary to what you want. In effect, by
          not having a will, you are allowing the state to choose your beneficiaries. Further, a will allows you
          to specify not only who will receive the property, but how much each beneficiary will receive. You may
          also wish to leave property to a charity after your death, and a will may be needed to accomplish this
          goal.
        </p>
        <p>
          <strong>2. To Minimize Taxes</strong>. Many people feel they do not need a will because they believe
          their taxable estate is below that taxable amount for federal estate tax purposes. However, your
          taxable estate may be larger than you think. For example, life insurance, qualified retirement plan
          benefits, and IRAs typically pass outside of a will or of estate administration. But these assets are
          still part of your federal estate and can cause your estate to go over the threshold amount. Also, in
          some states, an estate becomes subject to state death taxes at a point well below the federal
          threshold. A properly prepared will is necessary to implement estate tax reduction strategies.
        </p>
        <Callout label="Tip">
          <p>
            Periodically reviewing your estate plan is advisable to take into account the changes in estate and
            gift tax rules, as well as rules on items that affect the size of your estate including retirement and
            education funding plans. Amounts subject to estate tax, and estate and gift tax rates, are scheduled
            to change periodically in future years.
          </p>
        </Callout>
        <p>
          <strong>3. To Appoint a Guardian</strong>. Your will should name a guardian for your minor children in
          the event of your death and/or the death of your spouse. While naming a guardian does not bind either
          the named guardian or the court, it does indicate your wishes, which courts generally try to
          accommodate.
        </p>
        <p>
          <strong>4. To Name an Executor</strong>. Without a will, you cannot appoint someone you trust to carry
          out the administration of your estate. If you do not specifically name an executor in a will, a court
          will appoint someone to handle your estate, perhaps someone you would not have chosen. Obviously, there
          is an advantage, as well as peace of mind, in selecting an executor you trust.
        </p>
        <p>
          <strong>5. To Establish Domicile</strong>. You may wish to firmly establish domicile (permanent legal
          residence) in a particular state, for tax or other reasons. If you move frequently or own homes in more
          than one state, each state in which you reside could try to impose death or inheritance taxes at the
          time of death, possibly subjecting your estate to multiple probate proceedings. To lessen the risk of
          this, you should execute a will that clearly indicates your intended state of domicile.
        </p>
        <p>
          You should review your will every two or three years, or whenever your circumstances change. Changes
          that warrant revising your estate plan might include:
        </p>
        <ul>
          <li>Divorce,</li>
          <li>Having a child,</li>
          <li>Having children move out of the house,</li>
          <li>Acquiring a large asset,</li>
          <li>Selling a large asset, or</li>
          <li>A change in the tax laws.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'trusts',
    title: 'Trusts',
    body: (
      <>
        <p>
          Today, trusts are not just used by the very wealthy, people with a wide range of income levels use them
          as estate planning tools too, despite the fact that trusts are complex and costly to set up and run,
          and require a higher level of services from an attorney than a will does.
        </p>

        <h3>What is a Trust?</h3>
        <p>
          A trust owns its own property (holds the title). When it is set up, the trust appears on official
          papers and records as the legal owner of any property that is placed into it. The trust's principal is
          the property that the trust owns, as distinguished from the interest or dividends earned by that
          property. The terms of the trust dictate who will get the benefit of the income from the trust
          property, how long the trust will last, and so on.
        </p>
        <p>
          The trustee is the person or entity whose job it is to administer and manage the trust: make investment
          decisions, pay taxes, make sure the terms of the trust are carried out, and take care of the trust's
          property. Generally speaking, the trust must pay income tax on any of its undistributed interest or
          other income.
        </p>
        <p>There are basically two types of trusts:</p>
        <ul>
          <li>
            An irrevocable trust is a separate entity, for both legal and tax purposes, and pays its own taxes.
            The irrevocable trust cannot be revoked or changed.
          </li>
          <li>
            A revocable trust is not considered a separate entity for tax purposes, although it may be considered
            a separate legal entity. The revocable trust can be changed or revoked (taken back) by the creator of
            the trust.
          </li>
        </ul>
        <p>
          Another way to categorize trusts is the living (or inter vivos) trust, which is set up by a living
          person, or a testamentary trust, which is created by a will.
        </p>

        <h3>What is a Trust Used For?</h3>
        <p>A trust can be used for many worthwhile purposes:</p>
        <ol>
          <li>Giving property to children.</li>
          <li>Reducing estate taxes.</li>
          <li>Leaving assets to a spouse.</li>
          <li>Providing for life insurance used to pay estate tax.</li>
        </ol>
        <p>
          <strong>Giving property to children</strong>. People generally do not want to give property to a minor
          child outright because of the financial risks involved (e.g., the child could squander it). Many
          people give property to a minor through a trust. The trust's terms can be written so that the child
          does not get outright ownership until he or she has achieved a certain age so that the child receives
          only the income from the trust property until that time. Another way to give property to a minor is via
          the Uniform Gifts to Minors Act or Uniform Transfers to Minors Act. These provisions, which apply in
          most states, provide for a custodianship over property given to a minor.
        </p>
        <p>
          <strong>Reducing estate taxes</strong>. As noted earlier, if you leave everything to your spouse, it
          passes free of federal estate tax. However, when your surviving spouse dies, anything in his or her
          estate over the exclusion amount (also called "exemption amount") would be subject to estate tax. The
          exclusion amount for 2023 is $12,920,000. The credit shelter trust or bypass trust is used to shelter up
          to the exclusion amount from the estate tax.
        </p>
        <Callout label="Caution">
          <p>
            Wills may be drafted to leave a bypass trust an amount equal to the exclusion amount in the year of
            death, rather than a specific dollar amount. However, because amounts change, review of the estate
            plan may be needed to keep the desired balance between what the spouse is to get and what trust
            beneficiaries are to get.
          </p>
        </Callout>
        <p>
          <strong>Leaving an asset to a spouse</strong>. The marital deduction trust allows the first spouse to
          die to place estate assets in a trust for the surviving spouse, instead of leaving them to him or her
          outright. If the legal requirements are met, the estate gets the marital deduction, but can still
          preserve assets for heirs other than the surviving spouse. Typically, the income of such trusts will go
          to the surviving spouse for life and the principal will go to children. All of the income must go to
          the surviving spouse for the trust to qualify for the marital deduction. It must be paid out at least
          once a year. The spouse may have some access to the principal. When the second spouse dies, the
          property is included in his or her estate for estate tax purposes.
        </p>
        <p>
          <strong>Pay estate tax</strong>. Complex and expensive arrangements, life insurance trusts are usually
          used to finance future estate taxes on an estate that contains a business interest or real estate.
        </p>
      </>
    ),
  },
  {
    id: 'postmortem-letters',
    title: 'Postmortem Letters',
    body: (
      <>
        <p>
          Does anyone but you know where your tax records and supporting tax documents are located? How about
          deeds, titles, wills, insurance papers? Does anyone know who your accountant is? Your lawyer? Your
          broker? If you pass away without leaving your heirs this information, it will cause a lot of headaches.
          Worse than that, part of your estate may have to be spent in needless taxes, claims, or expenses
          because the information is missing.
        </p>
        <p>
          The postmortem letter is an often overlooked estate planning tool. It tells your executors and
          survivors what they need to know to maximize your estate such as the location of assets, records, and
          contacts. Without the postmortem letter, you risk losing part of your estate's assets because necessary
          documentation cannot be located.
        </p>
        <RelatedGuide guide={related([74, 'Post-Mortem Letter: How To Prepare It and What To Include'])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'living-wills',
    title: 'Livings Wills',
    body: (
      <p>
        A living will, which is sometimes called a health care proxy, makes known your wishes as to what medical
        treatment or measures you want to have if you become incapacitated and unable to make the decision
        yourself. It tells family and physicians whether you want to be kept alive through mechanical means or
        whether you would prefer not to have such means used. If there is no living will, this decision is left
        up to the family, or the physicians, to decide. Stating your preference in a living will take some of
        the burden off of family members and decreases the stress in an emergency.
      </p>
    ),
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    body: (
      <>
        <p>
          The main purpose of life insurance is to provide for the welfare of survivors. But life insurance can
          also serve as an estate planning tool. For example, it can be used to finance the payment of future
          estate taxes or to finance a buy-out of a deceased's interest in a business. It can also be used to pay
          funeral and final expenses and debts.
        </p>
        <Callout label="Tip">
          <p>
            If the decedent owns the policy, the proceeds will be included in the estate and subject to estate
            tax. However, if the decedent gives away all incidents of ownership in the policy, and names a
            beneficiary other than the estate, the proceeds will not be included in the estate.
          </p>
        </Callout>
        <RelatedGuide guide={related([47, 'Life Insurance: How Much and What Kind To Buy'])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    body: (
      <>
        <p>
          The disclaimer is a way for an heir to refuse all or part of the property that would otherwise pass to
          him or her, via a will, intestacy laws, or by operation of law. An effective disclaimer passes the
          property to the next beneficiary in line.
        </p>
        <Callout label="Tip">
          <p>
            With a properly drawn disclaimer, the property is treated as if it had passed directly from the
            decedent to the next-in-line beneficiary. This may save thousands of dollars in estate taxes. The
            provision for a disclaimer in a will and the wise use of a disclaimer allows intrafamily income
            shifting for maximum use of the estate tax marital deduction, the unified credit, and the lower income
            tax brackets.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Disclaimers can also be used to provide for financial contingencies. For example, a beneficiary can
            disclaim an interest if someone else is in need of funds.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'lifetime-gifts',
    title: 'Lifetime Gifts',
    body: (
      <p>
        The annual gift tax exclusion provides a simple, effective way of cutting estate taxes and shifting
        income. You can make annual gifts in 2023 of up to $17,000 ($34,000 for a married couple) to as many
        donees as you desire. The $17,000 is excluded from the federal gift tax so that you will not incur gift
        tax liability. Further, each $17,000 you give away during your lifetime reduces your estate for federal
        estate tax purposes.
      </p>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Nonprofit Agencies',
    body: <Agencies agencies={agencies} />,
  },
];

export default function EstatePlanning() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Estate Planning"
      title={
        <>
          Estate Planning: <em>How To Get Started</em>
        </>
      }
      lead="Proper estate planning can help to increase the size of your estate, whether large or small. Its basic purposes are to (1) choose how your property will be distributed after your death, (2) help assure that your property will be distributed in an orderly and efficient way and (3) minimize taxes."
      sections={sections}
    >
      <p>
        This Financial Guide gives you a road map to the estate planning process. It will help you to get
        started: to provide for your heirs, to lessen the administrative burden on your survivors, and to
        understand what you'll have to do to minimize estate and income taxes. It will enable you to approach
        your attorney and other professional advisors with a clearer idea of what the process should entail.
      </p>
    </GuideArticle>
  );
}
