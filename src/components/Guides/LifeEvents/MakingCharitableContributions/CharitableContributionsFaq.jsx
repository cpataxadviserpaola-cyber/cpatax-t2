import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=39 (Charitable Contributions: Frequently Asked
// Questions), word for word. Double hyphens and hyphens used as dashes are now dashes; tips and
// notes the library sets inside a list item stay inside it, and the "Tip", "Note" and "Example"
// boxes keep the library's labels. The library's page has no introduction, so the banner's opening
// line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/making-charitable-contributions/charitable-contributions-faq
// (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'spot-a-scam',
    title: 'How can I spot a charity scam?',
    body: (
      <>
        <p>These are some common-sense suggestions for avoiding rip-offs:</p>
        <ul>
          <li>
            <strong>Try to avoid making a cash contribution.</strong> If possible make your donation using a check or
            money order made out to the charity—never to the individual soliciting the donation. If you do pay cash always
            get a receipt. Cash donations are not tax deductible without a receipt.
          </li>
          <li>
            <strong>Ask for written descriptions</strong> of the charity's programs and/or finances.
          </li>
          <li>
            <strong>Don't allow yourself to be pressured to donate immediately.</strong> Wait until you are sure that the
            charity is legitimate and deserving of a donation.
            <Callout label="Tip">
              <p>
                Don't forget to keep receipts, canceled checks and bank statements so you will have records of your
                charitable giving at tax time.
              </p>
            </Callout>
          </li>
          <li>
            <strong>Don't be misled by a charity</strong> that resembles or mimics the name of a well-known
            organization—all charities should be checked out.
          </li>
        </ul>
        <p>
          Before giving, check on all charities with the local charity registration office (usually a division of the
          state attorney's general office) and with the Better Business Bureau (BBB).
        </p>
      </>
    ),
  },
  {
    id: 'mail-solicitations',
    title: 'What should I watch out for with mail solicitations?',
    body: (
      <>
        <p>
          Many charities use direct mail to raise funds. While the overwhelming majority of these appeals are accurate
          and truthful, be aware of the following:
        </p>
        <ul>
          <li>
            The mailing piece should clearly identify the charity and describe its programs in specifics. If a
            fund-raising appeal brings tears to your eyes but tells you nothing about the charity's functions, check it
            out carefully before responding.
          </li>
          <li>
            Beware of fund-raising appeals that are disguised as bills or invoices. It is illegal to mail a bill, invoice
            or statement of account that is, in fact, an appeal for funds unless it has a clear and noticeable disclaimer
            stating that it is an appeal and that you are under no obligation to pay unless you accept the offer.
            <Callout label="Note">
              <p>
                Deceptive-invoice appeals are most often aimed at businesses, not individuals. If you receive one of
                these, contact your local Better Business Bureau.
              </p>
            </Callout>
          </li>
          <li>
            It is against the law to demand payment for unsolicited merchandise—e.g., address labels, stamps, bumper
            stickers, greeting cards, calendars, and pens. If such items are sent to you with an appeal letter, you are
            under no obligation to pay for or return them.
          </li>
          <li>
            Appeals that include sweepstakes promotions should disclose that you do not have to contribute to be eligible
            for the prizes offered. To require a contribution would make the sweepstakes illegal as a lottery operated by
            mail.
          </li>
          <li>Appeals that include surveys should not imply that you are obligated to return the survey.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'door-to-door',
    title: 'What should I watch out for with door-to-door solicitations?',
    body: (
      <>
        <p>
          When you are approached for a contribution of time or money, ask questions—and don't give until you're
          satisfied with the answers. Charities with nothing to hide will encourage your interest. Be wary of any
          reluctance to answer reasonable questions.
        </p>
        <ul>
          <li>
            <strong>Ask for the charity's full name and address.</strong> Demand identification from the solicitor.
          </li>
          <li>
            <strong>Ask if the contribution is tax-deductible.</strong> Contributions to tax-exempt organizations are not
            always tax-deductible.
          </li>
          <li>
            <strong>Ask if the charity is licensed by state and local authorities.</strong> Registration or licensing is
            required by most states and some local governments.
            <Callout label="Tip">
              <p>Registration, by itself, does not mean that the state or local government endorses the charity.</p>
            </Callout>
          </li>
          <li>
            <strong>Don't give in to pressure to make an immediate donation</strong> or allow a "runner" to pick up a
            contribution.
          </li>
          <li>
            <strong>Statements such as "all proceeds will go to charity"</strong> may mean money left after expense—such
            as the cost of fund-raising efforts—will go to the charity. These expenses can be big ones, so check
            carefully.
          </li>
          <li>
            <strong>
              When asked to buy candy, magazines, or tickets to benefit a charity, be sure to ask what the charity's share
              will be.
            </strong>{' '}
            Sometimes the organization will receive less than 20 percent of the amount you pay.
          </li>
        </ul>
        <p>
          If a fundraiser uses pressure tactics—intimidation, threats, or repeated and harassing calls or visits—call your
          local Better Business Bureau to report the actions.
        </p>
      </>
    ),
  },
  {
    id: 'maximize-tax-benefit',
    title: 'How can I maximize my tax benefit from charitable contributions?',
    body: (
      <>
        <p>
          Many donors are not aware that their contributions may not be deductible, or that deductions may be limited.
          Here are the general rules:
        </p>
        <p>
          When an organization claims to be tax-exempt, it does not necessarily mean contributions are deductible.
          "Tax-exempt" means that the organization does not have to pay federal income taxes, while "tax-deductible"
          means the donor can deduct contributions to the organization. The Internal Revenue Code defines more than 20
          different categories of tax-exempt organizations, but only a few of these are eligible to receive
          contributions deductible as charitable donations.
        </p>
        <Callout label="Tip">
          <p>When in doubt, call us or the IRS (800-829-1040) about the deductibility of a contribution.</p>
        </Callout>
        <p>
          If you go to a charity affair or buy something to benefit a charity (e.g., a magazine subscription or show
          tickets), you cannot deduct the full amount you pay. Only the part above the fair market value of the item you
          purchase is fully deductible.
        </p>
        <Callout label="Example">
          <p>You pay $50 for a charity luncheon worth $30. Only $20 can be deducted.</p>
        </Callout>
        <p>
          Donations made directly to needy individuals are not deductible. Contributions must be made to qualified
          organizations to be tax-deductible.
        </p>
        <p>
          Contributions are deductible for the year in which they are actually paid or delivered. Pledges are not
          deductible they are paid.
        </p>
        <p>
          Regardless of the amount, to deduct a contribution of cash, check, or other monetary gift, you must maintain a
          bank record, payroll deduction records or a written communication from the organization containing the name of
          the organization, the date of the contribution and amount of the contribution.
        </p>
        <p>
          For text message donations, a telephone bill will meet the record-keeping requirement if it shows the name of
          the receiving organization, the date of the contribution, and the amount given.
        </p>
        <p>
          To claim a deduction for contributions of cash or property equaling $250 or more you must have a bank record,
          payroll deduction records or a written acknowledgment from the qualified organization showing the amount of the
          cash and a description of any property contributed, and whether the organization provided any goods or services
          in exchange for the gift. One document may satisfy both the written communication requirement for monetary
          gifts and the written acknowledgment requirement for all contributions of $250 or more.
        </p>
      </>
    ),
  },
  {
    id: 'tax-effective-ways',
    title: 'What are the most tax-effective ways of donating?',
    body: (
      <>
        <p>
          There are many ways to give money to charity. In fact, much of many charities' revenues come from the "planned
          or deferred giving" techniques. A planned or deferred gift is a present commitment to make a gift in the
          future, either during your life or via your will. Aside from assuring your favorite charities of a
          contribution, planned or deferred giving brings with it tax benefits.
        </p>
        <p>
          Charitable gifts by will reduce the amount of your estate that is subject to estate tax. Lifetime gifts have the
          same estate tax effect (by removing the assets from your estate), but might also offer a current income tax
          deduction.
        </p>
        <p>
          If you have property that has significantly appreciated in value but does not bring in current income, you may
          be able to use one of these techniques to convert it into an income-producing asset. Further, you will be able
          to avoid or defer the capital gains tax that would be due on its sale—all the while helping a charity.
        </p>
        <p>
          Many variables affect the type of planned or deferred giving arrangement you choose, such as the amount of your
          income, the size of your estate and the type of asset transferred (e.g., cash, investments, real estate,
          retirement plan) and its appreciated value. Not all charities have the resources to be able to offer more
          sophisticated arrangements.
        </p>
        <Callout label="Tip">
          <p>
            These gifts are complex, so be sure to consult with both the charity and your financial advisor to determine
            how to best structure your deferred gift.
          </p>
        </Callout>
        <p>Here are some examples of planned and deferred charitable gifts:</p>

        <h3>Life Insurance</h3>
        <p>
          You name a charity as a beneficiary of a life insurance policy. With some limitations, both the contribution of
          the policy itself and the continued payment of premiums may be income-tax deductible.
        </p>

        <h3>Charitable Remainder Annuity</h3>
        <p>
          You transfer assets to a trust that pays a set amount each year to non-charitable beneficiaries (for example, to
          yourself or to your children) for a fixed term or for the life or lives of the beneficiaries, after which time
          the remaining assets are distributed to one or more charitable organizations. You get an immediate income tax
          deduction for the value of the remainder interest that goes to the charity on the trust's termination—even
          though you keep a life-income interest. In effect, you or your beneficiaries get current income for a specified
          period, and the remainder goes to the charity.
        </p>

        <h3>Charitable Remainder Unitrust</h3>
        <p>
          This is the same as the charitable remainder annuity trust, except the trust pays the actual income or a set
          percentage of the current value (rather than a set amount) of the trust's assets each year to the
          non-charitable beneficiaries. Here, too, you or your beneficiaries get current income for a specified period,
          and the remainder goes to the charity.
        </p>

        <h3>Charitable Lead Annuity Trust</h3>
        <p>
          You transfer assets to a trust that pays a set amount each year to charitable organizations for a fixed term or
          for the life of a named individual. At the termination of the trust, the remaining assets will be distributed
          to one or more non-charitable beneficiaries (for example, you or your children).
        </p>
        <p>
          You get a deduction for the value of the annual payments to the charity. You may still be liable for tax on the
          income earned by the trust. You keep the ability to pass on most of your assets to your heirs. Unlike the two
          trusts above, the charity gets the current income for a specified period, and your heirs get the remainder.
        </p>

        <h3>Charitable Lead Unitrust</h3>
        <p>
          This is the same as the lead annuity trust, except the trust pays the actual income or a set percentage of the
          current value (rather than a set amount) of the trust's assets each year to the charities.
        </p>
        <p>Here, too, the charity gets the current income for a specified period, and your heirs get the remainder.</p>

        <h3>Charitable Gift Annuity</h3>
        <p>
          You and a charity have a contract in which you make a present gift to the charity, and the charity pays a fixed
          amount each year for life to you or any other specified person.
        </p>

        <h3>Pooled Income Fund</h3>
        <p>
          You put funds into a pool that operates like a mutual fund but is controlled by a charity. You, or a designated
          beneficiary, get a share of the actual net income generated by the entire fund for life, after which your share
          of the assets is removed from the pooled fund and distributed to the charity.
        </p>
        <p>
          You get an immediate income tax deduction when you contribute the funds to the pool. The deduction is based on
          the value of the remainder interest.
        </p>
      </>
    ),
  },
  {
    id: 'planned-or-deferred-gift',
    title: 'Should I make a planned or deferred gift?',
    body: (
      <>
        <p>
          When determining whether to make a planned or deferred gift to a charity, ask whether you are ready to make a
          commitment to invest in a charitable organization; despite the tax benefits, you will still be "out-of-pocket"
          after the deduction.
        </p>
        <p>Some questions you should consider are:</p>
        <ul>
          <li>Is the charity viable, reputable, creditable, and reliable?</li>
          <li>Do you wish to support its programs?</li>
          <li>Does the gift fit into your estate and family plan?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'giving-time',
    title: 'Is it wise to give my time to charity?',
    body: (
      <>
        <p>
          Volunteering your time can be personally rewarding, but it is important to consider the following factors
          before committing yourself.
        </p>
        <p>
          First, make sure you are familiar with the charity's activities. Ask for written information about the
          charity's programs and finances.
        </p>
        <p>
          Be aware that volunteer work may require special training devotion of a scheduled number of hours each week to
          the charity.
        </p>
        <p>
          If you are considering assisting with door-to-door fund-raising, be sure to find out whether the charity has
          financial checks and balances in place to help ensure control over collected funds.
        </p>
        <Callout label="Tip">
          <p>
            Although the value of your time as a volunteer is not deductible, out-of-pocket expenses (including
            transportation costs) are generally deductible.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'thrift-stores',
    title: 'How do charity thrift stores work?',
    body: (
      <>
        <p>There are three major types of thrift store operations:</p>
        <ul>
          <li>
            <strong>Conduit-type shops are run by volunteer church and civic groups.</strong> These thrift stores
            generally distribute most of their proceeds to various charitable organizations, often community-based.
          </li>
          <li>
            <strong>
              The second category of thrift operations is represented by service organizations such as The Salvation
              Army and Goodwill Industries.
            </strong>{' '}
            Here, the thrift stores are operated as part of their program activities through the goal of "rehabilitation
            through employment."
          </li>
          <li>
            <strong>
              The third category involves charities that collect and sell used merchandise to raise funds for their own
              use.
            </strong>{' '}
            This arrangement is popular for a number of veterans organizations and other charities. Such arrangements
            generally work one of two ways: (1) the charity owns and operates the store, or, (2) more commonly, variously
            charities solicit and collect used items, which are then sold to independently managed store(s) for an
            agreed-upon amount.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            The "fair market value" of goods donated to a thrift store is deductible as a charitable donation, as long as
            the store is operated by a charity. To determine the fair market value, visit a thrift store and check the
            "going rate" for comparable items. If you are donating directly to a "for-profit" thrift store or if your
            merchandise is sold on a consignment basis whereby you get a percentage of the sale, the thrift contribution
            is not deductible.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Remember to ask for a receipt that is properly authorized by the charity. It is up to the donor to set a value
            on the donated item.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>If you plan to donate a large or unusual item, check with the charity first to determine if it is acceptable.</p>
        </Callout>
        <p>
          If you are approached to donate goods for thrift purposes, ask how the charity will benefit financially. If the
          goods will be sold by the charity to a third party, an independently managed thrift store, ask what the
          charity's share will be.
        </p>
        <Callout label="Tip">
          <p>
            Sometimes the charity receives a small percentage, e.g., 5 to 20 percent of the gross, or a flat fee per bag
            of goods collected.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'event-tickets',
    title: 'How are tickets to charitable events treated?',
    body: (
      <>
        <p>
          Dinners, luncheons, galas, tournaments, circuses, and other events are often put on by charities to raise
          funds. Here are some points to consider before deciding to participate in such events.
        </p>
        <ul>
          <li>
            Check out the charity. The fact that you are receiving a meal or theater tickets should not justify less
            scrutiny.
          </li>
          <li>
            Remember, your purchase of tickets to such events is generally not fully deductible. Only the portion of your
            gift above the "fair market value" of the benefit received (i.e., the meal, show, etc.) is deductible as a
            charitable donation. This rule holds true even if you decide to give your tickets away for someone else to
            use.
            <Callout label="Tip">
              <p>
                If you decide not to use the tickets, give them back to the charity. In order to be able to deduct the full
                amount paid, you must either refuse to accept the tickets or return them to the charitable organization.
                In this way, you will not have received value for your payment.
              </p>
            </Callout>
            <Callout label="Tip">
              <p>
                Make donations by check or money order out to the full name of the charity and not to the sponsoring show
                company or to an individual who may be collecting donations in person.
              </p>
            </Callout>
          </li>
          <li>
            Watch out for statements such as "all proceeds will go to the charity." This can mean the amount after
            expenses have been taken out, such as the cost of the production, the fees for the fund-raising company hired
            to conduct the event, and other related expenses. These expenses can make a big difference and sometimes
            result in the charity receiving 20 percent or less of the price paid.
            <Callout label="Tip">
              <p>Ask the charity what anticipated portion of the purchase price will benefit the organization.</p>
            </Callout>
          </li>
          <li>
            Solicitors for some fund-raising events such as circuses, variety shows, and ice skating shows may suggest
            that if you are not interested in attending the event, you can purchase tickets that will be given to
            handicapped or underprivileged children. If such statements are made, ask the solicitor how many children
            will attend the event, how they will be chosen, how many tickets have been already distributed to these
            children, and if transportation to the event will be provided for them.
          </li>
        </ul>
      </>
    ),
  },
];

export default function CharitableContributionsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/making-charitable-contributions"
      page="Charitable Contributions: Frequently Asked Questions"
      title={
        <>
          Charitable Contributions: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about spotting charity scams, mail and door-to-door appeals, getting the most tax benefit from your gifts, planned giving, volunteering, thrift stores, and event tickets."
      sections={sections}
    />
  );
}
