import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=58 (Retirement Plan Distributions: When To Take
// Them), word for word. Hyphens used as dashes are now dashes (with a closing dash where one
// was missing), and related guides are named by their titles in the library.
// Address: /guides/life-events/getting-married/retirement-distributions-when (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');

const sections = [
  {
    id: 'while-alive',
    title: "Withdrawal While You're Alive",
    body: (
      <>
        <h3>Before You Reach Age 73</h3>
        <p>
          Until the year you reach 73, you need not take your money out of your retirement account, although
          your employer's plan might require you to do so. In fact, there will usually be a 10 percent
          early-withdrawal penalty if you make withdrawals from an IRA before age 59 1/2. Between the ages of 59
          1/2 and 73; you pay only the income tax on any amounts you decide to withdraw, with no tax on the
          return of after-tax contributions you made.
        </p>
        <Callout label="Note">
          <p>
            Taxpayers affected by the coronavirus were able to withdraw up to $100,000 and will not be subject
            to the 10 percent penalty for early withdrawals. Distributions must have been taken before December
            31, 2020. The amount withdrawn is considered income, however, and taxpayers have three years to pay
            the tax on the additional income and replace the funds in-kind.
          </p>
        </Callout>

        <h3>Once You Reach Age 73</h3>
        <p>
          Once you hit 73, withdrawals must begin. Technically they can be postponed until April 1 of the year
          following the year you reach 73, but waiting until April 1 of the following year means you must
          withdraw for two years. To avoid this income bunching and a possible higher marginal tax rate, tax
          advisers generally suggest withdrawing in the year you reach 73.
        </p>
        <p>
          IRS has greatly simplified and relaxed the withdrawal rules over the years to increase the
          retirement plan tax shelter, by lengthening, in most cases, the period over which plan withdrawals
          may be stretched.
        </p>
        <p>
          The rules allow you, automatically, to spread your withdrawals over a period substantially longer
          than your life expectancy. Under these rules the taxpayer (say, an IRA owner) first determines his or
          her retirement plan asset values as of the end of the preceding year. Then the owner takes the number
          for his or her age from an IRS table (the table is unisex). The number corresponds to the period over
          which the withdrawals may be spread. The owner divides that number into the retirement asset total.
          The result is the amount to be withdrawn for the year.
        </p>
        <Callout label="Example">
          <p>
            <strong>Example 1:</strong> Joe reaches age 73 in October of this year. Retirement plan assets in
            his IRA totaled $600,000 at the end of last year. The IRS number for age 73 is 26.5. Joe must
            withdraw $22,641 ($600,000/26.5) this year.
          </p>
          <p>
            The distribution period in the IRS table in effect assumes distribution over a period based on your
            life expectancy plus that of a beneficiary 10 years younger than you. Distribution after your death
            is based on the actual life span or life expectancy of your actual beneficiary (see "Withdrawal after
            You Die" below). Only where your designated beneficiary is a spouse more than 10 years younger than
            you is his or her actual life expectancy used to figure the withdrawal period during your lifetime.
            You may use these rules to prolong distribution for 2003 and after, even though you have been taking
            withdrawals over a shorter period under previous rules.
          </p>
          <p>
            Under the current rules, the life expectancy of your designated beneficiary (if you have one) is
            irrelevant in figuring your withdrawal period (except for a beneficiary spouse more than 10 years
            younger). Thus, you can change your designated beneficiary at will, or replace one who died, without
            affecting your withdrawal period (except for a change to or from a spouse more than 10 years
            younger).
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            You can always take out money faster than required and pay tax on these withdrawals; however, the
            tax code is strict about minimum withdrawals. If you or your beneficiaries or heirs fail to take out
            what's required, a tax penalty will take 50 percent of what should have been withdrawn but wasn't.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'after-death',
    title: 'Withdrawal after You Die',
    body: (
      <>
        <p>
          The rules as to how fast your beneficiaries or heirs must withdraw funds from your account and pay
          the income tax—differ, depending on your beneficiary choice.
        </p>
        <Callout label="Caution">
          <p>
            Under the SECURE Act of 2019, and starting in 2020, there is a new beneficiary category—the eligible
            designated beneficiary (EDB). An EDB can include the IRA owner's surviving spouse or minor child, a
            person who is chronically ill or disabled, or another individual (e.g., parent, sibling, and
            unmarried partner) who is not more than 10 years younger than the IRA owner at the time of his/her
            death. If an individual inherits an IRA in 2020 (or in years beyond) but does not meet the definition
            of an EDB they may be required to take full distribution of the inherited IRA within 10 years after
            the IRA owner's year of death.
          </p>
        </Callout>
        <p>
          Of course, designating a beneficiary is wise as a matter of planning for the disposition of your
          assets. You may change the beneficiary later without affecting the amount you withdraw (except for a
          change to or from a spouse more than 10 years younger).
        </p>
        <p>
          <strong>Eligible Designated Beneficiaries: Your Spouse.</strong> Naming your spouse as beneficiary
          carries the most flexibility. A surviving spouse has options that no other beneficiary has such as:
        </p>
        <ul>
          <li>
            <strong>Leave the money in the IRA account.</strong> If your spouse, for example, is the sole
            beneficiary, he or she may elect to treat the balance in the IRA as if it were their own. Depending on
            their age, they may be required to take required minimum distributions.
          </li>
          <li>
            <strong>Rollover to another IRA.</strong> A spouse beneficiary of your IRA can elect to roll the IRA
            balance over to their own IRA. This provides the optimal extension of the withdrawal period if your
            spouse is younger than you since your spouse doesn't have to start withdrawing funds until they turn
            73. At age 73, your spouse can then use the period in the IRS table or a longer one if they then has
            a spouse more than 10 years younger. A rollover isn't allowed if a trust is a beneficiary, even if the
            spouse is the trust's sole beneficiary. A similar extension is allowed for a balance you might leave
            in a qualified retirement plan: your spouse can roll it over into his or her IRA. And your spouse can
            roll over a distribution from your retirement plan to another retirement plan in which he or she
            participates, as well as to an IRA.
          </li>
          <li>
            <strong>Remaining a beneficiary.</strong> Instead of a rollover, a surviving spouse can simply leave
            the money in the deceased participant's account. There's no 10 percent early-withdrawal penalty if
            the spouse takes funds out of <strong>your</strong> account, but that penalty <strong>would</strong>{' '}
            apply if the spouse rolled over the money into his or her own IRA and tapped it before reaching 59
            1/2.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            Leaving the money in your account makes sense if your spouse is under age 59 1/2 and needs the money
            soon after your death. If your spouse remains a beneficiary, he or she doesn't have to start
            withdrawals until you would have reached age 73 after which withdrawals will be taken under the IRS
            table. Generally, there will not be an estate tax on retirement plan assets left to a spouse and the
            spouse will pay income taxes only as funds are withdrawn.
          </p>
        </Callout>
        <p>
          <strong>Eligible Designated Beneficiaries: Your Minor Child.</strong> If you name your child you should
          be aware that upon reaching the age of majority (18 in most states, 19 in Alabama and Nebraska, and 21
          in Mississippi) your child will become a <em>non-eligible designated beneficiary</em> and subject to
          the 10-year rule—i.e., required to take full distribution of the inherited IRA within 10 years.
        </p>
        <p>
          <strong>Non-Designated Beneficiaries.</strong> This type of beneficiary does not have a life
          expectancy. As such, distributions are different depending on whether the IRA account owner dies
          before, during, or after the start of the required beginning date for required minimum distributions
          (RMDs). If a traditional IRA owner passes away after his/her RBD, the beneficiary must continue
          distributions using the decedent's life expectancy. If before, then the entire account balance must be
          taken by the end of 5th year following year of death. Beneficiaries of Roth IRA account owners who
          have died must distribute the assets within five years.
        </p>
        <Callout label="Tip">
          <p>The required payout schedules set the minimum that can be withdrawn. The beneficiary can always take out more.</p>
        </Callout>
        <p>
          <strong>No beneficiary.</strong> If you die before April 1 after the year you reach age 73 having
          named no beneficiary or, in most cases, where your beneficiary is not a human being (such as an estate
          or a charity), all funds must be distributed and income taxes paid within five to six years of your
          death. Heirs don't get the option of using their own life expectancy.
        </p>
        <p>
          If you die on or after that April 1 date without having named a beneficiary or having named your
          estate as the beneficiary, the money must come out by the end of the period remaining under the IRS
          table. For example, at age 80 the table period is 20.2. On a death at age 80, the estate or heirs
          would have 20.2 years to complete withdrawal.
        </p>
        <p>
          <strong>Death before distributions begin.</strong> If you should die before the time (age 73) required
          distributions are to begin, minimum distributions to your beneficiary can be spread over his or her
          life expectancy.
        </p>
        <p>
          <strong>Estate tax.</strong> There may be an estate tax on retirement funds left to someone other than
          your spouse, who will also owe an income tax as funds are withdrawn. Where an estate tax is imposed,
          the taxpayer who received the retirement funds is entitled to a partial income tax deduction for the
          estate tax paid.
        </p>
      </>
    ),
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    body: (
      <>
        <p>
          The above discussion covered the general rules as to the withdrawal of retirement plan distributions
          both before and after you die. Now let's look at some specific tax planning techniques, particularly
          as regards the estate tax, for minimizing the tax bite when the funds accumulated in your retirement
          accounts (including pension and profit-sharing plans, 401(k) plans, IRAs and rollover IRAs) are
          passed on to your heirs.
        </p>

        <h3>How Your Heirs Are Taxed</h3>
        <p>
          The general rule is that, while there may be a estate tax bite at your death, inherited assets are
          received income-tax-free by your heirs. Unfortunately, however, this general rule doesn't apply to
          money in a retirement plan. Whoever gets the money will incur income tax on it, unless it's left to
          charity (more on giving retirement assets to charity below).
        </p>
        <Callout label="Example">
          <p>
            If you gave your wife a $500,000 stock-and-bond portfolio, she will not pay income tax on receipt of
            the portfolio. Or if you leave your son a $150,000 vacation home, he will not pay income tax when he
            receives it. But if you leave your daughter the $150,000 in your IRA, she will be subject to income
            tax on it, more or less as you would be if you had received the distributions yourself. (Moreover,
            there may be a further estate tax as well.)
          </p>
        </Callout>
        <p>
          The basic income tax rule is that retirement plan distributions to heirs are taxable at ordinary
          rates, except for after-tax investments, which come out tax-free. There are, however, the following
          key exceptions or qualifications:
        </p>
        <ul>
          <li>On a lump sum distribution, heirs of persons born before 1936 can sometimes claim tax relief.</li>
          <li>
            Life insurance proceeds paid in a lump sum are tax-exempt. However, if they are paid in
            installments, the interest element is taxable.
          </li>
          <li>
            The value of a stock bonus is taxable when received as ordinary income, less unrealized
            appreciation, and after-tax investment. Any appreciation is taxable as capital gain when the stock
            is sold.
          </li>
          <li>
            Your spouse can roll over from your retirement account (IRA or other) to his or her IRA. No other
            heir can roll over from your account.
          </li>
          <li>
            There's no early withdrawal penalty on what your heir withdraws after your death, even if the heir is
            under age 59½, but in general, if your spouse is your heir and rolls over your retirement account to
            his or her IRA, a withdrawal from the IRA while under age 59 1/2 is subject to the penalty.
          </li>
        </ul>

        <h3>Some Tax Planning Opportunities</h3>
        <p>
          The federal estate tax isn't a major problem for most Americans. Less than one percent of those who
          die in any year leave an estate that's hit by the estate tax; but the larger a taxpayer's retirement
          account, the more likely it will be cut down by the federal estate tax on top of the federal income
          tax described above.
        </p>
        <p>
          Unlike the income tax, which is collected only as amounts are distributed—and thus is deferred on
          annuities and the like—the estate tax is collected up front, at the owner's death, on the present
          value of the annuity.
        </p>
        <p>
          One common planning technique—making lifetime gifts to reduce your taxable estate—is impractical for
          retirement accounts. Even where you might be able to give part of your retirement account away (as
          with an IRA, for example), your gift is a taxable distribution to you and no IRA tax shelter survives
          for your donee. But there are more practical techniques:
        </p>
        <ul>
          <li>
            Make your spouse the beneficiary of your retirement plan assets and leave non-retirement plan assets
            to non-spouse beneficiaries. This reduces estate taxes and permits deferral of income taxes for the
            longest period possible.
          </li>
          <li>
            If you plan on leaving assets to charity, use retirement plan assets. You can eliminate estate and
            income taxes on this amount while achieving charitable goals.
          </li>
          <li>
            A charitable remainder trust is a sophisticated way to benefit family, as well as charity at a
            reduced tax cost. Typically, your children or other non-spouse beneficiaries will draw the income
            from the retirement assets for a period, after which the remainder goes to charity. An estate tax
            deduction is allowed for the present value of what will go to the charity.
          </li>
          <li>
            Consider buying life insurance to pay estate tax that can't be avoided (perhaps because you want a
            large retirement account to go to someone other than a spouse or charity). The insurance proceeds
            will be exempt from income tax (while funds withdrawn from the account to pay estate tax will be
            subject to income tax). With proper planning, the withdrawn funds can escape estate tax as well.
          </li>
        </ul>
      </>
    ),
  },
];

export default function RetirementDistributionsWhen() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Retirement Plan Distributions: When"
      title={
        <>
          Retirement Plan Distributions: <em>When To Take Them</em>
        </>
      }
      lead="When must you start withdrawing the funds in your retirement plans? And what happens if the funds aren't withdrawn before you die? To what extent will your heirs be taxed? The rules are complex but there are ways the savvy taxpayer can maximize the tax shelter."
      sections={sections}
    >
      <p>
        The basic rule is that you must begin withdrawing funds—and incurring taxes on these withdrawals—no
        later than April 1 of the year after you turn 73. This rule exists so that retirement funds will be
        distributed whether or not spent during what for most people is their retirement years.
      </p>
      <Callout label="Note">
        <p>
          Under the SECURE 2.0 Act of 2022, for individuals who reach age 72 after December 31, 2022, and age 73
          before January 1, 2033, the applicable age for starting RMDS is 73. For individuals who attain age 74
          after December 31, 2032, the applicable age is 75. The new rules apply to distributions required to be
          made after December 31, 2022, for individuals who attain age 72 after such date. In other words,
          taxpayers born between 1951 and 1959 will begin RMDs at age 73. Those born in 1960 or later will begin
          taking RMDs at age 75.
        </p>
      </Callout>
      <p>
        An exception to this general rule is that, where your retirement plan permits, you do not need to begin
        these mandatory withdrawals until you retire if you are still employed when you reach the mandatory
        withdrawal age. The exception doesn't apply where you're a five percent or more owner of the business
        that provides the plan, or to withdrawals from traditional IRAs—in those cases, you are subject to the
        mandatory withdrawal rules.
      </p>
      <RelatedGuide guide={related([60, 'Roth IRAs: How They Work and How To Use Them'])}>
        Roth IRAs are another exception. For a discussion of Roth IRAs, please see the Financial Guide:
      </RelatedGuide>
      <p>
        <strong>Preserving the tax shelter.</strong> Your funds grow sheltered from tax while they are in the
        retirement plan. So the longer your financial situation lets you prolong the distribution or the smaller
        the amount you must withdraw the more your assets grow. Some taxpayers choose to defer withdrawals for as
        long as the law allows, to maximize assets and the shelter, for the next generation.
      </p>
      <p>
        The law has specific rules about how fast the money must be taken out of the plan after your death.
        These rules curtail the ability to prolong a tax shelter that started out to aid your retirement. The
        rules are complex, but here's a general overview of the timing of retirement plan distributions which
        will help avoid unnecessary tax headaches for you and your heirs. Because of the complexity of the rules,
        professional guidance in this area is strongly suggested.
      </p>
      <RelatedGuide guide={related([59, 'Retirement Plan Distributions: How To Take Them'])}>
        The tax treatment will be dictated not only by the <strong><em>timing</em></strong> of the withdrawal
        (i.e., <strong><em>when</em></strong> to take it) but also by the <strong><em>form</em></strong> of the
        withdrawal (i.e., <strong><em>how</em></strong> to take it). This Financial Guide discusses the "when."
        For a discussion of the "how," please see the Financial Guide:
      </RelatedGuide>
    </GuideArticle>
  );
}
