import GuideArticle, { ArticleTable, Blank, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=47 (Life Insurance: How Much and What Kind
// To Buy), word for word. Hyphens used as dashes are now dashes, the related guide is named by
// its title in the library, and the worksheet's blanks are write-in lines.
// Address: /guides/life-events/getting-married/life-insurance (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');

const monthlyExpenses = [
  'Mortgage or rent, and other home-related expenses. Include your monthly mortgage payment, with insurance and real estate taxes, or the amount paid for rent. Also include the amounts you spend monthly on home repairs—e.g., plumbers, contractors, electricians, appliance repair—and on home improvements. Add to this the amounts spent monthly on furniture, appliances, linens, and other items bought for the home',
  'Heat, electricity, insurance (life, health, and liability) water, gas, trash collection, and other monthly bills',
  'Food, including other items bought at grocery stores or drug stores, such as toothpaste, and including restaurant bills',
  'Clothing',
  'Travel, including car payments, gas and oil, car repair, and car payments',
  'Child care or other dependent care',
  'Recreation, including travel, gifts, theater, cinema',
  'Other',
];

// The worksheet's rows: a numbered line, a heading over the items that follow it (`group`),
// one of those items (`item`), or their total (`total`).
const worksheet = [
  { label: '1. Annual income needed.' },
  { label: '2. Subtract other annual income sources:', group: true },
  { label: 'Salary of surviving spouse and other family', item: true },
  { label: 'Estimated earnings on investments', item: true },
  { label: 'Social Security', item: true },
  { label: 'Pension income', item: true },
  { label: 'Other income', item: true },
  { label: 'Total other annual income sources', total: true },
  { label: '3. Subtract total of line 2 items from line 1' },
  { label: '4. Amount of proceeds needed', note: '(divide line 3 by 4%, 5%, or 6%)' },
  { label: '5. Lump-sum expenses:', group: true },
  { label: 'Funeral expenses', item: true },
  { label: 'Final medical costs', item: true },
  { label: 'Estate administration and probate costs', item: true },
  { label: 'Federal estate and state inheritance tax', item: true },
  { label: 'Emergency living expenses fund', item: true },
  { label: 'Debts to be paid off', item: true },
  { label: 'Education expenses', item: true },
  { label: 'Other lump-sum expenses', item: true },
  { label: 'Total lump-sum expenses:', total: true },
  { label: '6. Interim insurance proceeds needed', note: '(add line 4 and total of line 5 items)' },
  { label: '7. Assets that can be sold and other insurance', group: true },
  { label: 'Employer-provided group life insurance', item: true },
  { label: 'Other life insurance.', item: true },
  { label: 'Death benefit from pension plan.', item: true },
  { label: 'Cash, savings.', item: true },
  { label: 'IRA, Keogh, and 401(K) plan lump sum amounts', item: true },
  { label: 'Other assets that can be sold', item: true },
  { label: 'Total assets', total: true },
  { label: '8. Total insurance needed', note: '(subtract total of line 7 items from line)' },
];

const products = ['Term Life', 'Universal Life', 'Whole Life', 'Variable Whole Life', 'Variable Universal Life'];

const features = [
  ['Policy term', 'Stated in policy', 'Until age 95', 'Life', 'Life', 'Life'],
  ['Type of death benefit', 'Determined', 'Variable', 'Determined', 'Variable', 'Variable and determined'],
  [
    'Existence of cash value',
    'No',
    'Current rate, guaranteed minimum',
    'Fixed rate, guaranteed',
    'Variable rate, not guaranteed',
    'Variable rate, not guaranteed',
  ],
  ['Ability to choose cash value investments', 'N/A', 'No', 'No', 'Yes', 'Yes'],
  ['Regulatory agency', 'Insurance', 'Insurance', 'Insurance', 'Insurance and securities', 'Insurance and securities'],
];

const sections = [
  {
    id: 'need',
    title: 'Do You Need Life Insurance?',
    body: (
      <>
        <p>
          The purpose of life insurance is to provide a source of income, in the case of your death, for
          your children, dependents, or other beneficiaries. Life insurance can also serve other estate
          planning purposes, such as giving money to charity on your death, paying for estate taxes, or
          providing for a buy-out of a business interest. These will not be discussed in this guide,
          however.
        </p>
        <RelatedGuide guide={related([73, 'Estate Planning: How To Get Started'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <p>
          Whether you need to buy life insurance depends on whether anyone is depending on your income.
          If you have a spouse, child, parent, or some other individual who depends on your income, you
          probably need life insurance. You might also need life insurance for estate planning or
          business succession planning purposes.
        </p>
        <p>Here are some typical insurance situations along with typical insurance needs:</p>

        <h4>Situation 1: Families or single parents with young children or other dependents</h4>
        <p>
          The younger your children, the more insurance you need. If both spouses earn income, then
          both spouses should be insured, with insurance amounts proportionate to salary amounts. If the
          family cannot afford to insure both wage earners, the primary wage earner should be insured
          first, and the secondary wage earner should be insured later on. A less expensive term policy
          might be used to fill an insurance gap. If one spouse does not work outside the home, insurance
          should be purchased to cover the absence of the services being provided by that spouse such as
          child care, housekeeping, and bookkeeping. However, if funds are limited, insurance on the
          non-wage earner should be secondary to insurance on the life of the wage earner.
        </p>

        <h4>Situation 2: Adults with no children or other dependents</h4>
        <p>
          If your spouse could live comfortably without your income, then you will need less insurance
          than the people in Situation (1). However, you will still need some life insurance. At a
          minimum, you will want to provide for burial expenses, for paying off whatever debts you have
          incurred, and for providing an orderly transition for the surviving spouse. If your spouse would
          undergo financial hardship without your income, or if you do not have adequate savings, you may
          need to purchase more insurance. The amount will depend on your salary level and that of your
          spouse, on the amount of savings you have, and on the amount of debt you both have.
        </p>

        <h4>Situation 3: Single adults with no dependents</h4>
        <p>
          You will need only enough insurance to cover burial expenses and debts unless you want to use
          insurance for estate planning purposes.
        </p>

        <h4>Situation 4: Children</h4>
        <p>
          Children generally need only enough life insurance to pay burial expenses and medical debts. In
          some cases, a life insurance policy might be used as a long-term savings vehicle.
        </p>

        <h4>Situation 5: Retirees</h4>
        <p>
          There is less of a need for life insurance after retirement unless it is to be used for other
          estate planning purposes. You may need to provide an income for the second spouse to die if
          your retirement assets are not large enough. Further, you will need some insurance to pay burial
          expenses, final medical costs, and debts.
        </p>
      </>
    ),
  },
  {
    id: 'how-much',
    title: 'How Much Life Insurance Do You Need?',
    body: (
      <>
        <p>Determining how much insurance to buy requires you to invest some time in calculating:</p>
        <ul>
          <li>Your current annual household expenses</li>
          <li>Your assets, debts, and other sources of income.</li>
        </ul>
        <p>We've provided a worksheet, which we will refer to in our discussion.</p>
        <Callout label="Tip">
          <p>
            Find out how much insurance you need before considering which type of insurance to buy.
            Having enough is more important than having the right type. You should provide for your
            insurance needs immediately, although you can always switch to a more cost-effective or
            investment-oriented type of insurance later.
          </p>
        </Callout>
        <p>
          The ideal amount of coverage is the amount that would allow your dependents to invest the
          insurance proceeds after your death and maintain their desired standard of living without
          touching the principal. Although the old rule of thumb to buy five, six or seven times your
          annual salary may serve as a starting point, it is no substitute for making the calculations to
          find out how much you really need.
        </p>
        <p>
          By using the worksheet and our explanations, you will be able to make a fairly good estimate of
          your insurance coverage needs. You will need to make some assumptions about your family's
          future. It's important to be as accurate as possible in filling out the worksheet since an
          underestimation could lead to your being underinsured, and an overestimation will lead to money
          wasted on unnecessary coverage.
        </p>
        <p>Here is a line-by-line discussion of how to prepare the worksheet.</p>

        <h3>Line 1: Calculate The "Annual Income Needed"</h3>
        <p>
          Line 1 of the worksheet, "Annual Income Needed," is the amount that your survivors would need to
          live comfortably. It is important not to underestimate this amount. If there are recurring
          expenses that your family incurs but that are not shown on the list below, do not neglect to
          include these.
        </p>
        <p>
          To arrive at the "Annual Income Needed," find the following amounts paid monthly. Then multiply
          the figure you arrive at by 12 to arrive at an annual amount. Add the following amounts:
        </p>
        <ArticleTable label="Monthly expenses">
          <tbody>
            {monthlyExpenses.map((expense) => (
              <tr key={expense}>
                <td>{expense}</td>
                <Blank amount />
              </tr>
            ))}
            <tr className="is-total">
              <td>Total</td>
              <Blank amount />
            </tr>
            <tr className="is-total">
              <td>Multiply by 12 and enter amount in Line 1 of the worksheet (below)</td>
              <Blank amount />
            </tr>
          </tbody>
        </ArticleTable>

        <h3>Line 2: Subtract "Other Sources"</h3>
        <p>
          The next item on the worksheet represents the income that your survivors will have. If there
          are sources of income other than the ones listed, do not neglect to include them.
        </p>
        <Callout label="Tip">
          <p>
            To calculate Social Security benefits, you may wish to obtain an estimate of your benefit from
            the Social Security Administration. You can obtain a request form by calling SSA's toll-free
            number—800-772-1213.
          </p>
          <p>
            Since you cannot predict the amount your survivors will receive (it will depend on your age at
            death, your earnings, and the ages of your children), you may use the following as rough
            estimates: $4,000 per year if you have one child under 16, or $5,000 for two or more children
            under 16.
          </p>
        </Callout>
        <p>Do not include other insurance proceeds here; this will be accounted for later.</p>

        <h3>Line 3: Determine The "Shortfall"</h3>
        <p>
          Line 3 represents the shortfall, i.e., the amount you need your insurance proceeds to replace.
          This is determined by subtracting the "Annual Income From Other Sources" amount from the "Annual
          Income Needed."
        </p>

        <h3>Line 4: Determine the "Amount Of Proceeds Needed"</h3>
        <p>
          Line 4 is the amount that will generate the investment income needed to make up the annual
          "Shortfall" in Line 3.
        </p>
        <p>
          The amount by which you should divide line represents the after-tax rate of return you can
          expect on the invested life insurance proceeds. The amount you choose to divide by depends on
          how conservative you want to be. It is reasonable for most people to expect an after-tax rate of
          return of at least six percent. But if you want to ensure that you are protected from inflation
          risk and interest rate risk, use the lower divisor of four percent. The middle divisor of 5
          percent represents a "middle of the road" approach.
        </p>
        <p>
          The amount you arrive at is the amount of death benefit (proceeds) you will need. The amount
          will be further adjusted as you work through the worksheet.
        </p>

        <h3>Line 5: Add the "Lump-Sum Expenses"</h3>
        <p>
          These are the items your family will have to pay for at the time of death. They differ from the
          "annual income needs" amounts in that they are not part of the family's everyday living
          expenses. Further, unlike the annual income amounts, they represent pure guesswork. If you wish
          to strive for a higher rate of accuracy, you can try to adjust these items for inflation, but
          this is not strictly necessary.
        </p>
        <p>
          The estimate for funeral expenses should be at least $5,000. Depending on your desires and those
          of your family, you can adjust this figure upward.
        </p>
        <p>
          The final medical expenses will be minimal if you have adequate health insurance. You can
          estimate this amount by finding out how much your policy requires you to contribute per illness.
        </p>
        <p>
          The estate administration and probate costs can be estimated at 5 percent of your estate for the
          sake of simplicity. Your estate is the total value of your assets at death.
        </p>
        <p>
          You will only owe federal estate taxes if your taxable estate exceeds the amount of the unified
          credit exemption equivalent. Your state inheritance taxes will depend on the laws in your state.
        </p>
        <p>
          The "emergency living expenses" amount can range from three to six months' worth of family
          living expenses.
        </p>
        <p>
          The "debts" amount represents debts that your family desires to pay off at your death. Normally,
          it does not include items that make up the "annual living expenses" such as mortgage payments,
          car payments. However, if you decide that you wish to use insurance proceeds to pay off such
          expenses, then add in the amounts you estimate will be needed to pay off such debts.
        </p>
        <p>
          As for future education expenses, it is suggested that you use an annual cost of $20,000 per
          child, per year, for the sake of simplicity.
        </p>

        <h3>Line 6: Determine the "Interim Insurance Proceeds Amount"</h3>
        <p>
          Subtract the "future expenses" on line 5 from the "proceeds needed" amount on line 4. This is the
          amount of insurance you will need to buy on your life. The amount will be further adjusted.
        </p>

        <h3>Line 7: Subtract the "Assets That Can Be Sold and Other Insurance"</h3>
        <p>
          For line 7, determine the amounts that represent assets that your survivors could liquidate to
          pay future expenses. Do not include any assets your survivors will be using to produce income
          that you included in "other sources." Also, note that you should include insurance payments and
          pension death benefits here, and not on the line for "other sources." This is because such
          proceeds will represent one-time payments and not sources of annual income.
        </p>

        <h3>Line 8: Determine the "Total Insurance Needed"</h3>
        <p>
          Subtract the "assets that can be sold and other insurance" on line 7 from the interim insurance
          proceeds amount" on line 6. This is an estimate of the amount of insurance coverage you need.
        </p>

        <h3>Life Insurance Worksheet</h3>
        <ArticleTable label="Life insurance worksheet">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Your estimate</th>
            </tr>
          </thead>
          <tbody>
            {worksheet.map((row) =>
              row.group ? (
                <tr className="is-group" key={row.label}>
                  <td colSpan={2}>{row.label}</td>
                </tr>
              ) : (
                <tr className={row.item ? 'is-item' : row.total ? 'is-total' : undefined} key={row.label}>
                  <td>
                    {row.label}
                    {row.note && <span className="article-table-note"> {row.note}</span>}
                  </td>
                  <Blank amount />
                </tr>
              ),
            )}
          </tbody>
        </ArticleTable>
      </>
    ),
  },
  {
    id: 'types',
    title: 'Types Of Insurance',
    body: (
      <>
        <p>
          Although the array of insurance products may seem confusing, there are really just two types of
          insurance: term and cash value, which is more commonly referred to as whole life, universal
          life, or permanent life insurance.
        </p>
        <p>
          With term insurance, you pay for coverage for a specified amount of time, and if you die during
          that time the insurer pays your survivors the death benefit specified. Cash value on the other
          hand provides you with some other redeemable value in addition to paying a death benefit. For
          individuals age 40 or less, a term policy will almost always be less costly than a whole life
          policy. Although term policies do not build cash values, many are convertible to whole life
          policies without a physical exam. Thus, a term convertible policy may be a good option for
          someone who is under 40.
        </p>

        <h3>Term Insurance</h3>
        <p>There are various types of term insurance including:</p>
        <p>
          <strong>Renewable</strong>. A renewable term policy is the most common type of life insurance
          where the policy renews automatically on a renewable term, e.g. every year, every 5 years, every
          10 years, or every 20 years, which is the most popular renewal term. You do not need to take a
          physical or verify the fact that you are employed. The premium goes up at the beginning of each
          new term to reflect the fact that you are older. Most renewable term policies can be renewable
          until you reach age 70 or so.
        </p>
        <p>
          <strong>Re-entry</strong>. With this type of policy, you must undergo a physical exam after a
          certain period, or pay an extra premium.
        </p>
        <p>
          <strong>Level</strong>. With level term policies, the premium is guaranteed to stay the same over
          a certain period. This period may be shorter than the term of the policy. Nearly all life
          insurance bought today is level term insurance.
        </p>
        <p>
          <strong>Decreasing</strong>. With a decreasing term policy, a good option for insuring mortgage
          payments the face amount of the policy decreases over time while the premium payments remain the
          same.
        </p>
        <p>
          <strong>Return of Premium</strong>. Some insurers offer term life with "return of premium."
          Typically, premiums are significantly higher and they require keeping the policy in force to its
          term.
        </p>

        <h3>Cash Value Life Insurance</h3>
        <p>
          There are four types of cash value life insurance: (1) whole life, (2) universal life, (3)
          variable universal life and (4) variable whole life. The first two types are the most common and
          have a guaranteed cash surrender value; in the last two types, the cash surrender value is not
          guaranteed.
        </p>
        <p>
          <strong>Whole Life</strong>. This is the traditional life insurance policy. It provides a death
          benefit, has a cash value build-up, and sometimes pays dividends. You do not need to renew a whole
          life policy. As long as you pay your premiums, you will have coverage, usually until your death.
          The premium for a whole life policy remains the same for the amount of time you own the policy;
          the premium is "level" in insurance parlance. Thus, when you are younger, the premium you pay for
          whole life will be greater than what you would pay for term insurance but when you are older, the
          premium will be much less than a term premium. Part of each premium goes into the cash value of
          your policy. Your cash value, which is actually an investment, is guaranteed to grow at a fixed
          rate. You do not have to pay current income taxes on the growth in the cash value—it is
          tax-deferred.
        </p>
        <Callout label="Tip">
          <p>
            You can borrow against your cash value at a rate that is usually better than the prevailing
            consumer lending rates. If you die with an outstanding loan amount, the loan amount, plus
            interest, will be subtracted from your death benefit.
          </p>
        </Callout>
        <p>
          Dividend-paying whole life policies—termed "participating" policies are usually offered by mutual
          life insurance companies. Mutual life insurance companies are generally owned by policyholders
          while other insurance companies are owned by shareholders. The dividends are refunds of insurance
          premiums that exceed a certain level. They are paid when the insurance company does well during a
          quarter or a year. Of course, premiums for participating policies are usually higher than those
          paid for non-participating policies.
        </p>
        <Callout label="Note">
          <p>Term policies can also be participating, but the dividends paid are usually minimal.</p>
        </Callout>
        <p>
          <strong>Universal Life</strong>. Universal life, also known as "flexible premium adjustable
          life," is similar to whole life, but offers more flexibility in terms of payment of premiums and
          cash value growth. With a universal life policy, your monthly premium amount is first credited to
          your cash value. The company then deducts the cost of your death benefit and the expenses of the
          policy. These costs are about equal to what it would cost to buy term coverage. As with whole
          life, your cash value grows at a fixed minimum rate of interest. The growth of the cash value is
          tax-deferred, and you can borrow against it or make partial withdrawals.
        </p>
        <Callout label="Caution">
          <p>
            A special feature of universal life is that you can vary the premium paid from month to month.
            You can pay more or less—within certain limits—without jeopardizing your coverage. You can even
            let the cash value absorb the premium. However, the danger here is that if the premium payments
            fall too low, your policy may lapse. While some states require the insurer to tell you when your
            cash value is at a dangerously low point, you will, if you live in another state, have to
            maintain a careful watch on the amount of cash value if premiums are skipped.
          </p>
        </Callout>
        <p>
          <strong>Variable Universal Life</strong>. Variable universal life allows you to choose the
          investment for your cash value. You have a potentially greater cash value growth, but you also
          have added risk, depending on the type of investment you choose.
        </p>
        <p>
          <strong>Variable Whole Life</strong>. With variable whole life, the death benefit and cash value
          will depend on the performance of an investment fund that you choose. Again, you have potentially
          greater reward, with its accompanying risks.
        </p>
      </>
    ),
  },
  {
    id: 'differences',
    title: 'How Insurance Products Differ',
    body: (
      <>
        <p>Here, in table form, is a summary of the different features of the various types of life insurance.</p>
        <ArticleTable label="How life insurance products differ" wide>
          <thead>
            <tr>
              <td />
              {products.map((product) => (
                <th scope="col" key={product}>
                  {product}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map(([feature, ...values]) => (
              <tr key={feature}>
                <th scope="row">{feature}</th>
                {values.map((value, index) => (
                  <td key={products[index]}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </ArticleTable>
      </>
    ),
  },
  {
    id: 'shopping',
    title: 'How To Shop For Insurance',
    body: (
      <>
        <p>
          In order to be able to shop for the best premiums, it's a good idea to know how premiums are
          calculated by insurers. Bear in mind that premiums vary among insurance companies, and it is a
          good idea to ask several insurers for their rates.
        </p>
        <p>
          Insurance companies place individuals into four risk groups: preferred, standard, substandard, or
          uninsurable. The premiums charged will be commensurate with the category you are placed in. Thus,
          a standard risk will pay an average premium for similarly situated insurers.
        </p>
        <p>
          If you have a high-risk job or hobby, you will be considered substandard, a high risk. A terminal
          illness at the time you apply for insurance will render you uninsurable. Having some type of
          chronic illness will place you in the substandard category. People with conditions such as
          diabetes or heart disease can be insured, but will pay higher premiums.
        </p>
        <Callout label="Tip">
          <p>
            One company's category for you may not hold with another company. Thus, it still pays to shop
            for insurance with other companies even though one may have labeled you "substandard."
          </p>
        </Callout>
        <Callout label="Tip">
          <p>Once an insurance company approves you for coverage, you cannot be dropped unless you stop paying your premium.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'policy',
    title: 'Shopping For A Policy',
    body: (
      <>
        <p>
          In most states, there are rules, set by a group of state insurance regulators, requiring the
          agent to calculate two types of cost indexes that can help you to shop for a policy. You can use
          the indexes to compare policy costs.
        </p>
        <p>
          One type of index, the net payment index, gauges the cost of carrying your policy for the next
          ten or twenty years. The lower the number is the less expensive the policy will be. This index is
          useful if you are most interested in the death benefit aspect of a policy, as opposed to the
          investment aspect. The other type of index, the surrender cost index, is useful to those who have
          a high level of concern about the cash value. This index may be a negative number. The lower the
          number, the less expensive the policy.
        </p>
        <p>
          These two indexes apply to term and whole life policies. With universal life policies, focus on
          the cash value growth and the cash surrender value to make comparisons. Cash surrender value is
          the amount you receive if you cancel the policy. It is not the same as cash accumulation value. If
          you are shown two universal life policies, and they have the same premium, death benefit, and
          interest rate, then the one with the higher cash surrender value is generally the better policy.
        </p>
        <p>Here are some questions to ask about policies:</p>
        <ul>
          <li>How do cash values accumulate? An early, rapid build-up is generally preferable.</li>
          <li>
            How has the policy's cash value performed in the past? You can get this information from a
            publication called <em>Best's Review, Life and Health Insurance edition</em>. Determine how the
            policy performed in comparison with the company's projection and with other insurers.
          </li>
          <li>Are any special features merely bells and whistles, or do they add value for you?</li>
          <li>
            What is the company's rating with Best, Standard &amp; Poor's, and Moody's? You can find these
            publications in public libraries. The rankings should be in the top three to ensure that a
            company has financial stability.
          </li>
        </ul>
      </>
    ),
  },
];

export default function LifeInsurance() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Life Insurance"
      title={
        <>
          Life Insurance: <em>How Much and What Kind To Buy</em>
        </>
      }
      lead="How much life insurance do you need? What type is appropriate? You should review your life insurance needs each time you have a major life event. Here is what you need to know to properly plan for your life insurance needs to buy enough and to get the most for your money."
      sections={sections}
    >
      <p>
        The prospect of planning for your family's life insurance needs may seem daunting. The array of
        confusing products available, coupled with the calculations needed to find the right amount of
        insurance, would put anyone off.
      </p>
      <p>
        Yet the hard fact is that life insurance is an essential part of your family's financial
        well-being. The more you know about it before you go to your agent, the better your coverage will
        be. If you don't plan for your life insurance needs, the result could be a waste of thousands of
        dollars on inappropriate or ineffective life insurance or, worse, financial hardship due to not
        having enough insurance.
      </p>
      <p>
        This Financial Guide gives you some basic guidelines about whether and when you should purchase
        life insurance, and provides you with a system for determining how much you need. It also
        discusses the types of insurance available, their suitability for various situations, and how to
        comparison shop for a policy.
      </p>
    </GuideArticle>
  );
}
