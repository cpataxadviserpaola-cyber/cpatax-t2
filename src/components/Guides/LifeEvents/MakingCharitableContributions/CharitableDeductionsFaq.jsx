import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=40 (Charitable Deductions: Frequently Asked
// Questions), word for word. Hyphens used as dashes are now dashes, the "Tip" boxes keep the
// library's labels, and the IRS link opens in a new tab. The library's page has no introduction,
// so the banner's opening line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/making-charitable-contributions/charitable-deductions-faq
// (articlePages in src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'is-it-deductible',
    title: 'How can I find out if contributions to a particular charity are tax-deductible?',
    body: (
      <>
        <p>
          To obtain tax-exempt status under Section 501(c)(3) of the Internal Revenue Code, an organization has to file
          certain documents with the IRS that prove it is organized and operated for specified charitable purposes.
        </p>
        <p>
          Organizations with 501(c)(3) status are those that the IRS considers charitable, educational, religious,
          scientific or literary, those that prevent cruelty to animals, and those that foster national or international
          sports competition.
        </p>
        <p>
          When the IRS rules positively on an application, the organization is eligible to receive contributions
          deductible as charitable donations for federal income tax purposes. The charity receives a "Determination
          Letter" formally notifying it of its charitable status. Older charities may have a "101(6) ruling," which
          corresponds to Section 501(c)(3) of the current IRC. Churches and small charities with less than $5,000 of
          annual gross receipts (subject to the <em>Gross Receipts test</em>) do not have to apply to the IRS for
          exemption.
        </p>
        <Callout label="Tip">
          <p>
            You can search the IRS database for a list of{' '}
            <a href="https://www.irs.gov/charities-non-profits/search-for-tax-exempt-organizations" {...external}>
              tax-exempt organization eligible to receive deductible contributions
            </a>
            .
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'irs-information',
    title: 'What information can I obtain from the IRS about a charity?',
    body: (
      <>
        <p>
          You can obtain three documents on a specific charity by sending a written request to the attention of the
          Disclosure Officer at your nearest IRS District Office. The IRS will charge a per-page copying fee for these
          items. To speed your request, have the full, official name of the charity, as well as the city and state
          location.
        </p>
        <p>These three publicly available documents are:</p>
        <ul>
          <li>
            <strong>Form 1023</strong>—the application filed by the charity to obtain tax-exempt status.
          </li>
          <li>
            <strong>IRS Letter of Determination</strong>—the two-page IRS letter that notifies the organization of its
            tax-exempt status.
          </li>
          <li>
            <strong>Form 990</strong>—the financial/income tax form filed with the IRS annually by the charity. Charities
            with a gross income of less than $25,000 and churches are not required to file this form. Among other things,
            Form 990 includes information on the charity's income, expenses, assets, liabilities and net assets in the
            past fiscal year. Form 990 also identifies the salaries of the charity's five highest-paid employees. When
            contacting the IRS for copies, specify the fiscal year.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            If your request for information involves only Form 990, you can get a faster response by writing directly to
            the IRS Service Center where the charity files its return. Contact your nearest IRS office for the address of
            the appropriate Service Center.
          </p>
        </Callout>
        <p>
          The charity registration office in your state (usually a division of the state attorney general's office) may
          also have a copy of the charity's latest Form 990, along with other publicly available information on charities
          soliciting in your state.
        </p>
        <p>
          A charity's application for tax-exempt status and its annual Form 990 must be made available for public
          inspection during regular business hours at the principal office of the charity and at each of its regional or
          district offices containing three or more employees. The charity is not required to provide photocopies of the
          return but must have a copy on hand for public inspection.
        </p>
      </>
    ),
  },
  {
    id: 'types-of-contributions',
    title: 'What types of deductible contributions can be made to charity?',
    body: (
      <p>
        Generally, you can donate money or property to charity. A deduction is usually available for the fair market
        value of the money or property. However, for certain property the deduction is limited to your cost basis;
        inventory (some exceptions), certain creative works, stocks held short term and certain business-use property. You
        can also donate your services to charity, however, you may not deduct the value of your services. You can deduct
        your travel expenses and some out of pocket expenses.
      </p>
    ),
  },
  {
    id: 'qualifying-organizations',
    title: 'What types of organizations generally qualify for a charitable deduction?',
    body: (
      <>
        <p>
          The following types of organizations generally qualify for a deduction. Before making a donation, make sure to
          verify the organization's status. You can do this by asking for evidence in writing or contacting the Internal
          Revenue Service.
        </p>
        <ul>
          <li>Churches, synagogues, temples, mosques, and other religious organizations.</li>
          <li>Federal, state and local governments if the proceeds are used for public purposes.</li>
          <li>Nonprofit schools, hospitals and volunteer fire companies.</li>
          <li>Public parks and recreation facilities.</li>
          <li>Salvation Army, United Way, Red Cross, Goodwill, Boy Scouts and Girl Scouts.</li>
          <li>War veterans' groups.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'non-qualifying-organizations',
    title: 'What types of organizations generally do not qualify for a charitable deduction?',
    body: (
      <>
        <p>The following types of organizations generally do not qualify for a charitable deduction:</p>
        <ul>
          <li>Social and sports clubs.</li>
          <li>For-profit organizations.</li>
          <li>Lottery, bingo or raffle tickets.</li>
          <li>Dues to social or recreational clubs.</li>
          <li>Homeowners' associations.</li>
          <li>Individuals.</li>
          <li>Political organizations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'deduction-limit',
    title: 'What is the limit on the deductibility of charitable contributions?',
    body: (
      <p>
        The amount of your deduction for charitable contributions is limited to 50 percent of your adjusted gross income
        and may be limited to 20 or 30 percent of your adjusted gross income, depending on the type of property you give
        and the type of organization you give it to. Before you make a donation, verify with your tax advisor which limit
        applies.
      </p>
    ),
  },
  {
    id: 'tax-exempt-organizations',
    title: 'Can I deduct contributions to tax-exempt organizations?',
    body: (
      <p>
        Not necessarily. Tax-exempt means that the organization does not have to pay federal income taxes while
        tax-deductible means the donor can deduct contributions to the organization. There are more than 20 different
        categories of tax-exempt organizations, but only a few of these offer tax-deductibility for donations.
      </p>
    ),
  },
  {
    id: 'look-out-for',
    title: 'What should I look out for in my charitable giving?',
    body: (
      <>
        <p>Not everything the charity gets from you qualifies for deduction:</p>
        <ul>
          <li>
            If you go to a charity affair or buy something to benefit a charity (e.g., a magazine subscription or show
            tickets), you cannot deduct the full amount you pay. Only the part above the fair market value of the item you
            purchase is fully deductible. For example, if you pay $500 for a charity luncheon worth $200, only $300 can be
            deducted.
          </li>
          <li>
            Since contributions are deductible only for the year in which they are actually paid or delivered, pledges are
            not deductible until they are paid.
          </li>
          <li>No cash or non-cash donation is deductible unless the taxpayer has a receipt from the charity substantiating the donation.</li>
          <li>
            Since contributions must be made to qualified organizations to be tax-deductible, donations made to needy
            individuals are not deductible.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'gift-or-estate-tax',
    title: 'Is federal gift or estate tax due on my charitable gift?',
    body: (
      <p>
        Charitable gifts made pursuant to your will reduce the amount of your estate that is subject to estate tax.
        Lifetime gifts have the same estate tax effect (by removing the assets from your estate), along with the current
        income tax deduction.
      </p>
    ),
  },
  {
    id: 'planned-or-deferred-giving',
    title: 'Some charities talk about planned or deferred giving. What is that?',
    body: (
      <>
        <p>
          Usually they are ways whereby both you (or your family) and charity enjoy your property or its income. The most
          popular are:
        </p>

        <h3>Life Insurance</h3>
        <p>
          You name a charity as a beneficiary of a life insurance policy. With some limitations, both the contribution of
          the policy itself and the continued payment of premiums may be income-tax deductible.
        </p>

        <h3>Charitable Remainder Trust</h3>
        <p>
          You transfer assets to a trust that pays an amount each year to non-charitable beneficiaries (for example, to
          yourself or your children) for a fixed term or for the life or lives of the beneficiaries, after which time the
          remaining assets are distributed to one or more charitable organizations. You get an immediate income tax
          deduction for the value of the remainder interest that goes to the charity on the trust's termination, even
          though you keep a life-income interest. In effect, you or your beneficiaries get current income for a
          specified period and the remainder goes to the charity.
        </p>

        <h3>Charitable Lead Trust</h3>
        <p>
          You transfer assets to a trust that pays an amount each year to charitable organizations for a fixed term or for
          the life of a named individual. At the termination of the trust, the remaining assets will be distributed to one
          or more non-charitable beneficiaries (for example, you or your children).
        </p>
        <p>
          You get a deduction for the value of the annual payments to the charity. You keep the ability to pass on most of
          your assets to your heirs. Unlike the charitable remainder trusts above, the charity gets the current income for
          a specified period and your heirs get the remainder.
        </p>

        <h3>Charitable Gift Annuity</h3>
        <p>
          You and a charity have a contract in which you make a present gift to the charity and the charity pays a fixed
          amount each year for life to you or any other specified person. Your charitable deduction is the value of your
          gift minus the present value of your annuity.
        </p>

        <h3>Pooled Income Fund</h3>
        <p>
          You put funds into a pool that operates like a mutual fund but is controlled by a charity. You, or a designated
          beneficiary, get a share of the actual net income generated by the entire fund for life, after which your share
          of the assets is removed from the pooled fund and distributed to the charity. You get an immediate income tax
          deduction when you contribute the funds to the pool. The deduction is based on the value of the remainder
          interest.
        </p>
      </>
    ),
  },
];

export default function CharitableDeductionsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/making-charitable-contributions"
      page="Charitable Deductions: Frequently Asked Questions"
      title={
        <>
          Charitable Deductions: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about checking whether a charity's contributions are deductible, which gifts and organizations qualify, the limits on the deduction, and planned or deferred giving."
      sections={sections}
    />
  );
}
