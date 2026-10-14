import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import CtaSection from '../components/CtaSection.jsx';

// Source: cpataxadviser.com/newsletter.php (This Month's Newsletter), word for word. The issue
// changes every month: replace `issue`, `featureArticles`, `taxTips` and `dueDates` with the new
// one. The library's contents (Feature Articles, Tax Tips) are the side column's lists, and its
// disclaimer comes after the articles, as on the guide pages. Left out: its sign-up box (the
// site's own sign-up form is below the issue instead, with the box's wording), the RSS feed and
// print links, the tax due date calendar (the issue lists the dates) and the back-to-top arrows.
// "registeredtrademarks" in the copyright line is "registered trademarks".
// Address: /newsletter (the Newsletter link in the Resources menu).

const issue = 'October 2026';

const featureArticles = [
  {
    id: 'taxable-benefits',
    title: 'Get Ahead of Taxable Benefits',
    body: (
      <>
        <p>
          As year end approaches, businesses have plenty of tax and payroll tasks competing for attention. One
          easy-to-overlook area is employee and owner benefits. Identifying taxable benefits before the final payroll
          runs of 2026 can help prevent reporting errors, payroll tax problems and unexpected Form W-2 adjustments.
        </p>
        <h3>Take Stock of Fringe Benefits</h3>
        <p>
          Many fringe benefits are excluded from employees' taxable income, yet employers generally may still deduct
          their cost as a business expense. Benefits that don't qualify for an exclusion usually must be included in
          employees' taxable compensation.
        </p>
        <p>
          Common examples of benefits that may be excluded from taxable wages include employer-provided health
          insurance, dependent care assistance, group-term life insurance, educational assistance and certain
          transportation benefits (but the employer can't deduct them), subject to various limits.
        </p>
        <p>
          Taxable fringe benefits may include personal use of a company vehicle, many entertainment and sporting event
          tickets, gift cards and other cash-equivalent benefits. Generally, the taxable amount is the benefit's fair
          market value, less any amount paid by the employee or excludable by law. Special valuation rules may apply.
        </p>
        <h3>Know What's New</h3>
        <p>
          Major legislation enacted in July of 2025 made several changes affecting benefits, including dependent care
          and educational assistance.
        </p>
        <p>
          For 2026, the maximum exclusion for employer-provided dependent care assistance increased to $7,500 ($3,750
          for married taxpayers filing separately).
        </p>
        <p>
          The 2025 law also made qualifying student loan payments permanently eligible for the educational assistance
          exclusion and added inflation adjustments after 2026. For 2026, employers generally can provide up to $5,250
          in tax-free educational assistance, including qualifying student loan payments.
        </p>
        <h3>Don't Overlook Special Owner Rules</h3>
        <p>
          Fringe-benefit rules can differ for business owners, depending on the entity type and benefit involved. For
          instance, one particularly important year-end payroll issue applies to S corporation shareholder-employees who
          own more than 2% of the company. Health and accident insurance premiums paid or reimbursed by the S
          corporation generally must be included in the shareholder-employee's Form W-2 wages for federal income tax
          purposes.
        </p>
        <p>
          Provided certain requirements are met, the premiums generally aren't subject to Social Security, Medicare or
          federal unemployment taxes. Proper reporting can also affect the shareholder's ability to claim the
          self-employed health insurance deduction.
        </p>
        <h3>Act Before Year End</h3>
        <p>
          Don't wait until Forms W-2 are prepared. Failing to account for taxable benefits properly can lead to
          insufficient federal income and payroll tax withholding, underpaid employer payroll taxes, penalties and
          incorrect wage reporting. Contact the office for help reviewing employee and owner benefits and determining the
          proper tax treatment before year end.
        </p>
      </>
    ),
  },
  {
    id: 'niit',
    title: 'Could You Owe the NIIT?',
    body: (
      <>
        <p>
          Selling a highly appreciated investment late in the year could trigger an additional tax cost: the 3.8% net
          investment income tax (NIIT). If you're considering a significant transaction before January 1, first estimate
          the potential tax impact and evaluate planning opportunities.
        </p>
        <h3>How the NIIT Works</h3>
        <p>
          You may be subject to the NIIT if you invest outside of tax-deferred accounts and your modified adjusted gross
          income (MAGI) exceeds the applicable threshold: $200,000 for single filers and heads of household, $250,000 for
          married couples filing jointly or $125,000 for married taxpayers filing separately. These thresholds aren't
          indexed for inflation, so more taxpayers are subject to the NIIT now than when the tax first went into effect.
        </p>
        <p>
          The NIIT equals 3.8% of the lesser of your net investment income or the amount by which your MAGI exceeds the
          applicable threshold.
        </p>
        <p>
          Net investment income generally includes taxable interest, dividends, capital gains, rents, royalties,
          nonqualified annuities and income from passive business activities. Wages, Social Security benefits,
          tax-exempt interest and income from nonpassive business activities (other than certain financial trading
          businesses) generally <em>aren't</em> included.
        </p>
        <p>
          Distributions from IRAs and qualified retirement plans also <em>aren't</em> net investment income. But taxable
          distributions can increase MAGI and, therefore, increase the amount of investment income exposed to the tax.
        </p>
        <h3>Watch for a Year-End Spike</h3>
        <p>
          A one-time transaction, such as selling appreciated stock or investment real estate, can push MAGI above the
          NIIT threshold. Before closing a large sale in 2026, consider whether changing the timing or structure could
          reduce your NIIT exposure.
        </p>
        <p>
          For example, you can postpone the stock sale until 2027 or structure the real estate transaction as an
          installment sale to spread the gain over multiple tax years. If you're at NIIT risk and you've already realized
          gains in 2026, harvesting capital losses before year end may offset those gains and reduce both MAGI and net
          investment income. (Keep the wash-sale rules in mind when selling securities at a loss.)
        </p>
        <p>
          Investors should also account for dividends, mutual fund capital gain distributions and other investment income
          expected before year end. These amounts can increase both MAGI and net investment income, potentially
          increasing your NIIT exposure.
        </p>
        <p>
          Reducing MAGI can also help. Depending on your circumstances and eligibility, maximizing pretax contributions to
          an employer retirement plan, making deductible traditional IRA contributions or contributing to a Health
          Savings Account may lower MAGI.
        </p>
        <p>
          If you have flexibility over the timing of other taxable income, deferring it until 2027 may also help reduce
          your 2026 MAGI. Remember that itemized deductions don't reduce MAGI and, therefore, won't reduce NIIT
          exposure.
        </p>
        <h3>Project and Plan</h3>
        <p>
          NIIT planning shouldn't drive an investment decision. Current market conditions, cash flow needs and your
          broader financial goals are important. But if a large transaction is on the horizon, modeling the tax
          consequences before acting is a good idea. Contact the office for help projecting your 2026 MAGI and NIIT
          exposure so you can plan accordingly.
        </p>
      </>
    ),
  },
  {
    id: 'building-improvements',
    title: 'Tax-Smart Building Improvements',
    body: (
      <>
        <p>
          If your business is planning improvements to a building before year end, careful planning may allow you to
          maximize your 2026 tax deduction. A special safe harbor can allow qualifying small businesses to deduct such
          expenditures currently—but only if expenses don't exceed the applicable limit.
        </p>
        <h3>Could You Qualify?</h3>
        <p>
          Normally, a business that has performed repairs or maintenance on a building can expense those costs and take
          an immediate deduction. But costs incurred to <em>improve</em> a building must be depreciated over several
          years. The safe harbor for small businesses allows costs that might be considered improvements to be currently
          deducted up to certain limits.
        </p>
        <p>
          The safe harbor is generally available to businesses with average annual gross receipts of $10 million or less
          for the three preceding tax years. It applies to an eligible building that the business owns or leases and
          that has an unadjusted basis of $1 million or less.
        </p>
        <p>
          For the safe harbor to apply, the total amount paid during the tax year for repairs, maintenance, improvements
          and similar activities on the building must not exceed the lesser of:
        </p>
        <ul>
          <li>$10,000, or</li>
          <li>2% of the building's unadjusted basis.</li>
        </ul>
        <p>
          For example, for an eligible building with a $400,000 unadjusted basis, the safe harbor limit is $8,000. If
          your total qualifying expenditures stay within that amount, you may be able to deduct them currently rather
          than capitalize them.
        </p>
        <h3>Watch the Annual Limit</h3>
        <p>
          The annual limit makes tracking building expenditures important. If total costs exceed the applicable
          threshold, the safe harbor doesn't apply to any of the expenditures for that building.
        </p>
        <p>
          Before authorizing additional work, review how much you've already spent. If you're close to the limit, another
          project before year end could push you over the threshold. It may make sense to postpone nonessential work
          until the following year.
        </p>
        <p>
          Expenditures that don't qualify for the safe harbor may still be currently deductible, but you must evaluate
          them under the general tangible property regulations. Under those rules, costs that result in a betterment,
          restoration or adaptation to a new or different use generally must be capitalized.
        </p>
        <h3>Seek Guidance</h3>
        <p>
          If repairs or improvements are on your year-end agenda, contact the office before moving ahead. It's important
          to review your building's unadjusted basis and your year-to-date expenditures to help determine whether the
          safe harbor could benefit your business.
        </p>
      </>
    ),
  },
];

const taxTips = [
  {
    id: 'charitable-givers',
    title: 'Charitable Givers Get a New Tax Break',
    body: (
      <>
        <p>
          Beginning in 2026, taxpayers who take the standard deduction may deduct up to $1,000 of qualifying charitable
          contributions, or up to $2,000 for married couples filing jointly. Only cash contributions qualify, such as
          gifts made by check, debit or credit card, payment app or payroll deduction. Contributions of property, such as
          clothing, household items or securities, <em>don't</em> qualify.
        </p>
        <p>
          If you expect to claim the standard deduction, you may want to make qualifying charitable gifts before December
          31. Doing so could reduce your taxable income while supporting causes that are important to you. Keep records
          supporting any deduction claimed. Contact the office with any questions.
        </p>
      </>
    ),
  },
  {
    id: 'disaster-relief',
    title: 'New Law Expands Disaster Tax Relief',
    body: (
      <>
        <p>
          The Doug LaMalfa Federal Disaster Tax Relief Certainty Act was signed into law in September. It extends
          expanded personal deductions for disaster-related losses temporarily available under the Federal Disaster Tax
          Relief Act. Without the relief, victims of a federally declared disaster can deduct personal casualty losses
          only if they itemize deductions and only to the extent those losses exceeded 10% of their adjusted gross income
          (AGI).
        </p>
        <p>
          The now-extended relief allows eligible disaster victims—generally for disasters starting December 28, 2019,
          through December 31, 2026—to deduct qualified losses above $500 without itemizing and removes the 10% of AGI
          threshold for those losses. The law also extends the exclusion of qualified wildfire relief payments from
          taxable gross income. Contact the office for details.
        </p>
      </>
    ),
  },
  {
    id: 'gifts-of-ownership',
    title: 'Maximize Tax-Free Gifts of Ownership Interests in Your Business',
    body: (
      <>
        <p>
          Business owners may be able to transfer wealth more tax efficiently by gifting ownership interests to family
          members. For 2026, the gift tax annual exclusion is $19,000 per recipient.
        </p>
        <p>
          Certain interests may qualify for valuation discounts. For example, a minority interest may qualify for a
          lack-of-control discount because the holder can't dictate business decisions. A lack-of-marketability discount
          may apply when there's no ready market for selling the interest. Assuming a combined discount of 25%, this year
          you could gift an interest worth up to $25,333 (on a controlling basis) tax-free because the discounted value
          wouldn't exceed the $19,000 annual exclusion. Contact the office to learn more.
        </p>
      </>
    ),
  },
];

// Each date: who must do what, as [who, what].
const dueDates = [
  {
    date: 'October 15',
    items: [
      [
        'Individuals',
        'File a 2025 income tax return (Form 1040 or Form 1040-SR) if an automatic six-month extension was filed (or if an automatic four-month extension was filed by a taxpayer living outside the United States and Puerto Rico). Pay any tax, interest and penalties due.',
      ],
      [
        'Individuals',
        'Make contributions for 2025 to certain existing retirement plans or establish and contribute to a SEP for 2025 if an automatic six-month extension was filed.',
      ],
      [
        'Individuals',
        'File a 2025 gift tax return (Form 709) and pay any tax, interest and penalties due if an automatic six-month extension was filed.',
      ],
      [
        'Calendar-year bankruptcy estates',
        'File a 2025 income tax return (Form 1041) if an automatic six-month extension was filed. Pay any tax, interest and penalties due.',
      ],
      [
        'Calendar-year C corporations',
        'File a 2025 income tax return (Form 1120) if an automatic six-month extension was filed. Pay any tax, interest and penalties due.',
      ],
      [
        'Calendar-year C corporations',
        'Make contributions for 2025 to certain employer-sponsored retirement plans if an automatic six-month extension was filed.',
      ],
      [
        'Employers',
        'Deposit Social Security, Medicare and withheld income taxes for September if the monthly deposit rule applies.',
      ],
      ['Employers', 'Deposit nonpayroll withheld income tax for September if the monthly deposit rule applies.'],
    ],
  },
  {
    date: 'November 2',
    items: [
      [
        'Employers',
        <>
          Report Social Security and Medicare taxes and income tax withholding for third quarter 2026 (Form 941) and pay
          any tax due if all of the associated taxes due <em>weren't</em> deposited on time and in full.
        </>,
      ],
    ],
  },
  {
    date: 'November 10',
    items: [
      ['Individuals', 'Report October tip income of $20 or more to employers (Form 4070).'],
      [
        'Employers',
        'Report Social Security and Medicare taxes and income tax withholding for third quarter 2026 (Form 941) if all of the associated taxes due were deposited on time and in full.',
      ],
    ],
  },
];

const disclaimer =
  'Any accounting, business or tax advice contained in this communication, including attachments and enclosures, is not intended as a thorough, in-depth analysis of specific issues, nor a substitute for a formal opinion, nor is it sufficient to avoid tax-related penalties. If desired, we would be pleased to perform the requisite research and provide you with a detailed written analysis. Such an engagement may be the subject of a separate engagement letter that would define the scope and limits of the desired consultation services.';

// A list of the issue's articles for the side column.
function Contents({ label, articles }) {
  return (
    <nav aria-label={label}>
      <p className="label">{label}</p>
      <ol className="article-toc">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`#${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function Newsletter() {
  return (
    <>
      <PageHero
        page="Newsletter"
        parents={[{ to: '/resources', label: 'Resources' }]}
        eyebrow={`${issue} issue`}
        title={
          <>
            Our <em>newsletter</em>
          </>
        }
      >
        Our regularly updated newsletter provides timely articles to help you achieve your financial goals. Please
        come back and visit often.
      </PageHero>

      <section className="section section-white">
        <div className="container cat-grid">
          <aside className="cat-aside article-aside reveal">
            <Contents label="Feature articles" articles={featureArticles} />
            <Contents label="Tax tips" articles={taxTips} />
            <Link className="link-arrow" to="#due-dates">
              Upcoming tax due dates <Icon name="arrow" />
            </Link>
            <Link className="link-arrow" to="#subscribe">
              Get it by email <Icon name="arrow" />
            </Link>
            <Link className="link-arrow" to="/contact">
              Ask about your situation <Icon name="arrow" />
            </Link>
          </aside>

          <article className="article">
            {[...featureArticles, ...taxTips].map((article) => (
              <section id={article.id} key={article.id}>
                <h2>{article.title}</h2>
                {article.body}
              </section>
            ))}
            <section id="due-dates">
              <h2>Upcoming Tax Due Dates</h2>
              {dueDates.map((day) => (
                <div key={day.date}>
                  <h3>{day.date}</h3>
                  {/* A date can list the same group twice, so items are keyed by position. */}
                  {day.items.map(([who, what], index) => (
                    <p key={index}>
                      <strong>{who}:</strong> {what}
                    </p>
                  ))}
                </div>
              ))}
            </section>
            <p className="article-disclaimer">{disclaimer}</p>
            <p className="article-disclaimer">
              Copyright &copy; 2026 All materials contained in this document are protected by U.S. and international
              copyright laws. All other trade names, trademarks, registered trademarks and service marks are the
              property of their respective owners.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="subscribe">
        <div className="container">
          <div className="newsletter surface-dark reveal">
            <div>
              <p className="eyebrow">Email updates</p>
              <h2>
                Get the newsletter <em>by email</em>
              </h2>
              <p>Enter your email below to subscribe to our monthly newsletter.</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <CtaSection
        soft
        title={
          <>
            Want advice for <em>your situation?</em>
          </>
        }
        text="Our team can help you apply these updates to your own taxes and business, in English or Spanish."
      />
    </>
  );
}
