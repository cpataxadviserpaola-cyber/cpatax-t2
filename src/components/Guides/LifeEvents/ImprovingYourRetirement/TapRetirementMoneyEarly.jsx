import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=97 (Tap Your Retirement Money Early and Minimize
// Penalties), word for word. The library's guide has no headings, so it has no sections or
// contents list here; its opening paragraph is the banner's text (`lead`). "59 1/2" is "59½", and
// the missing space after "adoption distribution." is added. The library lists the qualified birth
// or adoption exception twice (the second time without its last sentence), and both are kept.
// Address: /guides/life-events/improving-your-retirement/tap-retirement-money-early (articlePages in
// src/data/guides.js).

export default function TapRetirementMoneyEarly() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-retirement"
      page="Tap Your Retirement Money Early"
      title={
        <>
          Tap Your Retirement Money Early <em>and Minimize Penalties</em>
        </>
      }
      lead="The purpose of retirement plans such as the 401(k) and Individual Retirement Account (IRA) is to save money for your retirement years. As such, the IRS imposes a penalty of 10 percent for early withdrawals taken from qualified retirement plans before age 59½. Qualified retirement plans include section 401(k) plans, tax-sheltered annuity plans under section 403(b) for employees of public schools or tax-exempt organizations, and individual retirement accounts."
    >
      <p>
        While you should always think carefully about taking money out of your retirement plan before you've reached
        retirement age, there may be times when you need access to those funds. Fortunately, IRS provisions allow a number
        of exceptions that may be used to avoid the tax penalty. Here are some of them:
      </p>
      <ul>
        <li>Distributions made to your beneficiary or estate on or after your death.</li>
        <li>Distributions made to certain unemployed individuals for health insurance premiums.</li>
        <li>
          Distributions made because you are totally and permanently disabled are exempt from the early withdrawal
          penalty. You are considered disabled if you can furnish proof that you cannot do any substantial gainful activity
          because of your physical or mental condition. A physician must determine that your condition can be expected to
          result in death or to be of long, continued, and indefinite duration.
        </li>
        <li>
          Distributions for qualified higher education expenses are also exempt, provided they are not paid through
          tax-free distributions from a Coverdell education savings account, scholarships and fellowships, Pell grants,
          employer-provided educational assistance, and Veterans' educational assistance. Qualified higher education
          expenses include tuition, fees, books, supplies, and equipment required for the enrollment or attendance of a
          student at an eligible educational institution, as well as expenses incurred by special needs students in
          connection with their enrollment or attendance. If the individual is at least a half-time student, room and
          board are qualified higher education expenses. This exception applies to expenses incurred by you, your spouse,
          children and grandchildren.
        </li>
        <li>Distributions due to an IRS levy of the qualified plan.</li>
        <li>Distributions due to death.</li>
        <li>
          Distributions that are not more than the cost of your medical insurance. Even if you are under age 59½, you may
          not have to pay the 10 percent additional tax on distributions during the year that is not more than the amount
          you paid during the year for medical insurance for yourself, your spouse, and your dependents. You will not have
          to pay the tax on these amounts if all of the following conditions apply: you lost your job, you received
          unemployment compensation paid under any federal or state law for 12 consecutive weeks because you lost your
          job, you receive the distributions during either the year you received the unemployment compensation or the
          following year, you receive the distributions no later than 60 days after you have been reemployed.
        </li>
        <li>
          Distributions that are excepted from the additional income tax by federal legislation relating to certain
          emergencies and disasters.
        </li>
        <li>
          Qualified retirement plan distributions (does not apply to IRAs) you receive after separation from service when
          the separation from service occurs in or after the year you reach age 55 (age 50 for qualified public safety
          employees). For distributions to qualified public safety employees on or after December 30, 2022, include
          distributions to employees with 25 years of service with the plan, distributions to firefighters covered by
          private sector retirement plans, and distributions to those employees who provide services as a corrections
          officer or as a forensic security employee, providing for the care, custody, and control of forensic patients,
          who meet the age requirement above.
        </li>
        <li>
          Distributions that are qualified reservist distributions. Generally, these are distributions made to individuals
          called to active duty for at least 180 days after September 11, 2001.
        </li>
        <li>
          Distributions up to $5,000 made to you from a defined contribution plan if the distribution is a qualified birth
          or adoption distribution. Attach a statement that provides the name, age, and TIN of the child or eligible
          adoptee.
        </li>
        <li>
          Distributions up to $5,000 made to you from a defined contribution plan if the distribution is a qualified birth
          or adoption distribution.
        </li>
        <li>Distributions made to an alternate payee under a qualified domestic relations order.</li>
        <li>Distributions of dividends from employee stock ownership plans.</li>
        <li>
          Corrective distributions made on or after December 29, 2022, the income on excess contributions distributed
          before the due date of the tax return (including extensions).
        </li>
        <li>
          Distributions due to terminal illness made on or after December 30, 2022. Distributions that are made after the
          date on which your physician has certified that you have an illness or physical condition that can reasonably be
          expected to result in death in 84 months or less after the date of the certification.
        </li>
        <li>
          Distributions in the form of an annuity. You can take the money as part of a series of substantially equal
          periodic payments over your estimated lifespan or the joint lives of you and your designated beneficiary. These
          payments must be made at least annually and payments are based on IRS life expectancy tables. If payments are
          from a qualified employee plan, they must begin after you have left the job. The payments must be made at least
          once each year until age 59½, or for five years, whichever period is longer.
        </li>
        <li>
          If you have out-of-pocket medical expenses that exceed 7.5 percent of your adjusted gross income, you can
          withdraw funds from a retirement account to pay those expenses without paying a penalty. For example, if you had
          an adjusted gross income of $100,000 and medical expenses of $12,500, you could withdraw as much as $5,000 from
          your pension or IRA without incurring the 10 percent penalty tax. You do not have to itemize your deductions to
          take advantage of this exception.
        </li>
        <li>IRA distributions made for the purchase of a first home, up to $10,000.</li>
      </ul>
      <p>
        Remember that although using the above techniques will help you avoid the 10 percent penalty tax, you are still
        liable for any regular income tax that's owed on the funds that you've withdrawn. Distributions rolled over into
        another qualified retirement plan or distributions from a Roth IRA, however, escape both the regular income tax
        and the 10 percent penalty tax. Rollovers should be made directly between your brokers, to avoid paying the 20
        percent withholding required on distributions that you touch.
      </p>
    </GuideArticle>
  );
}
