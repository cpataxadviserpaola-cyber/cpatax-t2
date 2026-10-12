import GuideArticle, { ArticleTable, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=94 (Your Pension: What You're Entitled To), word for
// word. Back-to-top anchors omitted (handled by layout). Each section takes its heading's wording,
// except the last, which takes the table of contents' "Summary of Information You're Entitled To"
// (the heading reads "Summary of Information you're entitled to:"). Hyphens used as dashes are now
// dashes, "59-1/2" is "59½", and the "Tip", "Note", "Example" and "Caution" boxes keep the
// library's labels. The library repeats one tip ("A plan that intends to relieve plan officials of
// fiduciary duties…") under How Must Your Plan Be Funded?, and it is kept there too. In the summary
// table, the library's empty first column is dropped, each document's name and description heads
// its rows, and the cells are as the library's table shows them (some "Whom" cells are empty).
// Links: the IRS reading room and the ERISA vesting link go to the addresses their old ones now
// redirect to; the related guide is named by its title in the library.
// Address: /guides/life-events/improving-your-retirement/your-pension (articlePages in
// src/data/guides.js).

const related = guide('life-events.php');
const external = { target: '_blank', rel: 'noopener noreferrer' };

// The summary table: each document, its description, and its rows of [whom, when, cost].
const documents = [
  {
    name: 'Summary Plan Description:',
    text: 'This summary of your pension plan tells you what the plan provides and how it operates.',
    rows: [
      ['Plan Administrator', 'Within 30 days of your request', 'Reasonable charge'],
      ['Dept. of Labor', 'Automatically within 90 days of your becoming covered under the plan.', 'Free'],
      ['', 'Automatically every 5 years if your plan is amended', 'Free'],
      ['', 'Automatically every 10 years if your plan has not been amended', 'Free'],
    ],
  },
  {
    name: 'Summary of Material Modifications:',
    text: 'This summarizes any changes to your plan',
    rows: [
      [
        'Plan Administrator',
        'Automatically within 210 days after the end of the plan year for which the plan has been amended',
        'Free',
      ],
      ['Dept. of Labor', 'Upon Request', 'Copying Charge'],
    ],
  },
  {
    name: 'Summary Annual Reports:',
    text: 'This summarizes the annual financial reports that most pension plans file with the Dept. of Labor',
    rows: [
      [
        'Plan Administrator',
        'Automatically within 9 months after the end of the plan year, or 2 months after the filing of the annual report.',
        'Free',
      ],
      ['Dept. of Labor', 'Upon request', 'Copying Charge'],
    ],
  },
  {
    name: 'Latest Annual Report (Form 5500 Series):',
    text: 'Annual financial reports that most pension plans file with the Dept. of Labor.',
    rows: [
      ['Plan Administrator', 'Within 30 days of written request', 'Reasonable Charge'],
      ['Dept. of Labor', 'Upon Request', 'Copying Charge'],
    ],
  },
  {
    name: 'Annual Financial Report:',
    text: 'This is the last financial report filed by a plan that has been terminated',
    rows: [['Plan Administrator', 'Within 30 days of written request', 'Reasonable charge']],
  },
  {
    name: 'Individual Benefit Statement:',
    text: 'Describes your total accrued and vested benefits',
    rows: [['Plan Administrator', 'Once every 12 months', 'Free']],
  },
  {
    name: 'Plan Document',
    text: '(or any other documents under which the plan is established or operated):',
    rows: [
      ['Plan Administrator', 'Within 30 days of written request', 'Reasonable Charge'],
      ['Available for Inspection at Plan\'s Office', 'Upon Request', 'Free'],
    ],
  },
  {
    name: 'Notice to Participants on Plan Funding and PBGC Guarantees',
    text: '(when a Plan is Less than 90 percent funded.)',
    rows: [['Plan Administrator', 'Annually', 'Free']],
  },
];

const sections = [
  {
    id: 'what-erisa-does',
    title: 'What Does ERISA Do For You?',
    body: (
      <>
        <p>
          ERISA sets minimum standards that pension plans in private industry must meet. Thus, if your employer maintains
          a pension plan, ERISA dictates, for example, the latest date by which you can become a participant and how long
          you may be required to work before you obtain a vested (nonforfeitable) interest in your pension.
        </p>
        <p>
          If not for ERISA (or some other federal or state law), plans would, for example, be able to require that
          employees work ten years before becoming vested in a pension plan or to require them to work five years before
          having to put in any money for them.
        </p>
        <p>
          ERISA does not force an employer to establish a pension plan. It merely requires that if the employer
          establishes a plan, the plan must meet ERISA's standards. The law also does not specify how much money a
          participant must be paid as a benefit.
        </p>
      </>
    ),
  },
  {
    id: 'standards',
    title: 'What Standards Does ERISA Set?',
    body: (
      <>
        <p>ERISA does the following (these will be examined in more detail later on in the guide):</p>
        <ul>
          <li>
            <strong>Requires plans to provide participants with information about the plan.</strong> Participants are
            employees who have worked a certain length of time and are therefore eligible to participate in the plan.
          </li>
          <li>
            <strong>Sets minimum standards for participation, vesting, benefit accrual and funding.</strong> The law
            defines how long a person may be required to work before becoming eligible to participate in a plan, to
            accumulate benefits, and to have a vested right to those benefits. The law also has detailed funding rules
            that require employer plan sponsors to provide adequate funding for your plan.
          </li>
          <li>
            <strong>Requires accountability of plan fiduciaries.</strong> ERISA says a fiduciary is anyone who exercises
            discretionary authority or control over a plan's management or assets, including anyone who provides
            investment advice to the plan. Fiduciaries who do not follow the ERISA principles of conduct may be liable for
            restoring losses to the plan.
          </li>
          <li>
            <strong>Gives participants the right to sue for benefits and breaches of fiduciary duty.</strong>
          </li>
          <li>
            <strong>Guarantees payment of certain benefits if a defined benefit plan is terminated.</strong>
          </li>
        </ul>
        <p>
          Before we discuss what ERISA guarantees, it is important to distinguish among the different types of employee
          retirement plans, since the rights guaranteed with pension plans vary according to the type of plan. Generally
          speaking, there are two types of pension plans: (1) defined benefit plans and (2) defined contribution plans.
        </p>

        <h3>What is a Defined Benefit Plan?</h3>
        <p>
          A defined benefit plan, usually a traditional pension plan, promises you a specified monthly benefit at
          retirement. The plan may state this promised benefit as an exact dollar amount, such as $100 per month at
          retirement. Or, more commonly, it may calculate a benefit through a plan formula that considers such factors as
          salary and service, for example, one percent of your average salary for the last five years of employment for
          every year of service with your employer. The amount of your benefit depends on what is promised, not on the
          performance of the investments.
        </p>
        <p>The general rules of ERISA apply to defined benefit plans, and some specialized rules also apply.</p>

        <h3>What is a Defined Contribution Plan?</h3>
        <p>
          A defined contribution plan, on the other hand, does not promise you a specific amount of benefits at
          retirement. In these plans, you or your employer (or both) contribute to your individual account under the
          plan, sometimes at a set rate, such as five percent of your earnings annually.
        </p>
        <p>
          The contributions are invested on your behalf. When you retire, quit, or otherwise separate from service, you
          will receive the balance in your account, which is based on contributions plus or minus investment gains or
          losses. The value of your account will fluctuate due to changes in the value of your investments.
        </p>
        <p>
          Examples of defined contribution plans include 401(k) plans, 403(b) plans, employee stock ownership plans, and
          profit-sharing plans. The general rules of ERISA apply to each of these types of plans.
        </p>
        <Callout label="Tip">
          <p>
            To determine what type of plan your employer provides, check with your plan administrator or read your
            summary plan description.
          </p>
        </Callout>
        <p>
          There are a number of variations on the defined contribution plan. These include (1) the Money Purchase Plan,
          (2) the Simplified Employee Pension Plan (SEP), (3) the Profit Sharing Plan and Stock Bonus Plan, (4) the 401
          (k) Plan, (5) the "Simple" IRA Plan, and (6) the Employee Stock Ownership Plan (ESOP). They are discussed
          below:
        </p>
        <p>
          <strong>Money Purchase Plan.</strong> A money purchase pension plan requires fixed annual contributions from
          your employer to your individual account. This is a type of defined contribution plan. Because a money purchase
          pension plan requires these regular contributions, the plan is subject to certain funding and other rules.
        </p>
        <p>
          <strong>Simplified Employee Pension Plan (SEP)</strong>. Your employer may sponsor a Simplified Employee Pension
          plan (SEP). SEPs are relatively simple retirement savings vehicles which allow employers to make contributions on
          a tax-favored basis to individual retirement accounts (IRAs) owned by the employees. SEPs are subject to fewer
          reporting and disclosure requirements than other retirement plans. Under a SEP, you as the employee generally
          set up an IRA to accept your employer's contributions. (Sometimes the employer does this.) Your employer can
          contribute a percentage of your pay into a SEP each year.
        </p>
        <RelatedGuide guide={related([121, 'Employee Benefits: How To Handle Them'])}>
          For tax rules and contribution limits on pension and other employee retirement plans, see the Financial Guide:
        </RelatedGuide>
        <p>
          <strong>Profit Sharing Plan and Stock Bonus Plan.</strong> A profit-sharing or stock bonus plan is a defined
          contribution plan under which the plan may provide, or the employer may determine, annually, how much will be
          contributed to the plan (out of profits or otherwise). The plan contains a formula for allocating to each
          participant a portion of each annual contribution. A profit sharing plan or stock bonus plan may include a
          401(k) plan.
        </p>
        <p>
          <strong>401(k) Plan.</strong> Your employer may establish a defined contribution plan that is a cash or
          deferred arrangement, usually called a 401(k) plan. You can elect to defer receiving a portion of your salary,
          which is instead contributed on your behalf, before taxes, to the 401(k) plan. Sometimes the employer matches
          your contributions. There are special rules governing the operation of a 401 (k) plan.
        </p>
        <Callout label="Tip">
          <p>Your employer must advise you of any limits that may apply to you.</p>
        </Callout>
        <Callout label="Tip">
          <p>
            Although a 401(k) plan is a retirement plan, you may be able to access funds in the plan before retirement.
            For example, if you are an active employee, your plan can allow you to borrow from the plan. Also, your plan
            may permit you to make a withdrawal on account of hardship, generally from the funds you contributed. Sponsors
            cannot make your elective deferrals a condition for the receipt of other benefits, except for matching
            contributions.
          </p>
        </Callout>
        <p>
          <strong>"Simple" Plan.</strong> Recent legislation allows self-employed persons and employers with 100 or fewer
          employees to establish "SIMPLE" retirement plans. The SIMPLE combines the features of an IRA and a 401(k).
        </p>
        <p>
          <strong>Employee Stock Ownership Plan (ESOP)</strong>. Employee stock ownership plans (ESOPs) are a form of
          defined contribution plan in which the investments are primarily in employer stock. Congress authorized the
          creation of ESOPs as one method of encouraging employee participation in corporate ownership.
        </p>
      </>
    ),
  },
  {
    id: 'information',
    title: 'What Information Does the Plan Have to Provide You With?',
    body: (
      <>
        <p>
          ERISA requires plan administrators, the people who run plans, to give you in writing the most important facts
          you need to know about your pension plan. Some of these facts must be provided to you regularly and
          automatically by the plan administrator. Others are available upon request, free-of-charge or for copying fees.
        </p>
        <Callout label="Tip">
          <p>Your request for plan information should be made in writing.</p>
        </Callout>
        <p>
          The two most important documents you are entitled to are (1) the summary plan description and (2) the summary
          annual report. The summary annual report is a summary of the annual financial report that most pension plans
          must file with the Department of Labor. It is available to you at no cost.
        </p>
        <Callout label="Tip">
          <p>To learn more about your plan's assets, ask the plan administrator for a copy of the annual report in its entirety.</p>
        </Callout>

        <h3>What is the Summary Plan Description?</h3>
        <p>
          One of the most important documents you are entitled to receive automatically when you become a participant of
          an ERISA-covered pension plan or a beneficiary receiving benefits under such a plan, is a summary of the plan,
          called the summary plan description (SPD). Your plan administrator is legally obligated to provide the SPD to you
          free of charge.
        </p>
        <p>
          The SPD tells you what the plan provides and how it operates. It tells you when you begin to participate in the
          plan, how your service and benefits are calculated when your benefit becomes vested when you will receive payment
          and in what form, and how to file a claim for benefits.
        </p>
        <Callout label="Tip">
          <p>
            Read your SPD to learn about the particular provisions that apply to you. If a plan is changed you must be
            informed, either through a revised summary plan description or in a separate document, called a summary of
            material modifications, which also must be given to you free of charge.
          </p>
        </Callout>

        <h3>What if You Can't Obtain these Documents?</h3>
        <p>
          If you are unable to get the summary plan description, the summary annual report, or the annual report from the
          plan administrator, you may be able to obtain a copy by writing to the Department of Labor, PWBA, Public
          Disclosure Room, Room N-5638, 200 Constitution Avenue, N.W., Washington, D.C. 20210, for a nominal copying
          charge. If possible, provide the name of the plan, employer identification number (a 9-digit number assigned by
          the IRS) and the plan number (a 3-digit number, such as 002). If you do not have this information, give the
          name of the plan and the city and state.
        </p>

        <h3>Where Else Can I Get Plan Documents?</h3>
        <p>
          Documents for some plans are available for public inspection at the IRS. These documents include the
          applications filed by pension plans to determine if they meet federal tax qualification requirements,
          applications filed by certain organizations to determine if they qualify as tax-exempt, and the IRS responses to
          these applications. For information on available documents, contact the IRS Freedom of Information Electronic
          Reading Room via their website:{' '}
          <a href="https://www.irs.gov/privacy-disclosure/irs-freedom-of-information-act" {...external}>
            IRS Freedom of Information Electronic Reading Room
          </a>
        </p>
        <Callout label="Tip">
          <p>
            If you terminate employment and you have a vested pension benefit (see below for an explanation of vested
            benefits) that you are not eligible to receive until later, that information will be reported by your plan to
            the IRS, which, in turn, will inform the Social Security Administration. This information must also be provided
            to you by the plan.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Keep the plan administrator informed about any change of address or name change after you leave employment to
            assure that you will receive the pension benefit due you.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'age-and-service',
    title: 'What Age and Length of Service Requirements May Your Plan Impose?',
    body: (
      <>
        <p>
          Generally speaking, you must be permitted to become a participant if you have reached age 21 and have completed
          one year of service. Even if you work part-time or seasonally, you cannot be excluded from the plan on grounds of
          age or service if you meet this service standard. You must be permitted to begin to participate in the plan no
          later than the start of the next plan year or six months after meeting the requirements of membership,
          whichever is earlier.
        </p>
        <Callout label="Tip">
          <p>
            You must be in the "covered" group of employees to get the benefit of ERISA's age and length of service
            guarantees. Your employer is allowed to provide one or more plans covering different groups of employees, or to
            exclude certain categories of employees from coverage under any plan. For example, your employer might sponsor
            one plan for salaried employees and another for union employees. You may not be within the group that the
            employer defines as covered by the plan.
          </p>
        </Callout>
        <p>
          ERISA imposes certain other participation rules. They depend on the type of employer for whom you work, the
          type of plan your employer provides, and your age. For example:
        </p>
        <ul>
          <li>
            If you were an older worker when you were hired, you cannot be excluded from participating in the plan on
            grounds of age just because you are close to retirement age.
          </li>
          <li>
            If, upon your entry into the plan, your benefit will be immediately fully "vested," or non-forfeitable (see
            below), the plan can require that you complete two years of service before you become eligible to participate
            in the plan. 401 (k) plans, however, cannot require you to complete more than one year of service before you
            become eligible to participate.
          </li>
          <li>
            If you work for a tax-exempt educational institution and your plan benefit becomes vested after you earn one
            year of service, the plan can require that you be at least age 26 (instead of age 21) before you can
            participate in the plan.
          </li>
          <li>
            If your employer maintains a SEP, you must be permitted to participate if you have performed services for the
            employer in three of the immediately preceding five years.
          </li>
        </ul>

        <h3>How is "Service" Measured?</h3>
        <p>
          ERISA has rules for how employers must measure employees' employment to determine how the eligibility, benefit
          accrual, and vesting rules apply. ERISA generally defines a year of service as 1,000 hours of service during a
          12-month period. Different rules apply to counting years of service for purposes of eligibility, benefit
          accrual, and vesting.
        </p>
        <Callout label="Tip">
          <p>
            A plan basically has a choice among three methods for determining whether you must be credited with a year of
            service for participation, vesting, and, in some circumstances, benefit accrual: the general method of counting
            service, a simplified equivalency method, or the elapsed time method. Refer to your summary plan description to
            see which method is used by your plan.
          </p>
        </Callout>

        <h3>What is Benefit Accrual and How Does it Work?</h3>
        <p>
          When you participate in a pension plan, you accrue (earn) pension benefits. Your accrued benefit is the amount
          of benefit that has accumulated or been allocated in your name under the plan as of a particular point in time.
          ERISA generally does not set benefit levels or specify precisely how benefits are to accumulate.
        </p>
        <p>
          Plans may use any definition of service for purposes of benefit accrual as long as the definition is applied on
          a reasonable and consistent basis. Service for benefit accrual generally takes into account only the years of
          service you earn after you become a plan participant, not all service you have performed since you were hired by
          your employer. Employees who work less than full-time, but at least 1,000 hours per year, must be credited with a
          pro rata portion of the benefit that they would accrue if they were employed full-time.
        </p>
        <p>
          To illustrate: If a plan requires 2,000 hours of service for full benefit accrual, then a participant who works
          1,000 hours must be credited with at least 50 percent of the full benefit accrual.
        </p>
        <p>
          A special rule applies to SEPs: all participants who earn a certain minimum amount in compensation from their
          employers are entitled to receive a contribution.
        </p>
        <Callout label="Tip">
          <p>
            Since ERISA generally does not regulate the amount of your benefit, you can estimate how much pension you are
            building up only by examining the summary plan description or the plan document. These documents should explain
            how you earn service credit for full benefit accrual each plan year.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'other-features',
    title: 'Are Plan Features Other Than Accrued Benefits Protected?',
    body: (
      <>
        <p>
          Your accrued benefit includes more than just the amount of benefit you have accumulated. Your plan provides you
          with various rights and options, some of which are protected rights attached to your benefit amount. As a general
          rule, protected rights cannot be reduced or eliminated, nor can they be granted or denied at your employer's
          discretion. If a plan feature you care about has been eliminated, this section is designed to help you determine
          whether it was a protected right.
        </p>
        <p>
          The rights that are protected include (1) optional forms of benefit payments, (2) early retirement benefits, and
          (3) retirement-type subsidies.
        </p>
        <ul>
          <li>
            <strong>Optional forms of benefit payment.</strong> An example of an optional form of benefit that your plan
            may provide is the right to receive payment of your benefits in a lump sum payment rather than as an annuity.
          </li>
          <li>
            <strong>Early retirement benefit.</strong> ERISA does not require a pension plan to provide participants with
            the option to retire earlier than at the plan's normal retirement age, but if such an option is offered, a plan
            generally may not be changed to eliminate the right to take such an early retirement as to benefits accrued
            before the change.
          </li>
          <li>
            <strong>Retirement-type subsidy.</strong> Retirement-type subsidies are also a protected part of your benefit
            and cannot be eliminated retroactively.
          </li>
        </ul>
        <p>
          Certain important plan features are not protected, such as a Social Security supplement, the right to direct
          investments, the right to a particular form of investment, the right to take a loan from a plan, or the right to
          make employee contributions at a particular rate on either a before or after-tax basis.
        </p>
      </>
    ),
  },
  {
    id: 'reduce-future-benefits',
    title: 'Can Your Plan Reduce Future Benefits?',
    body: (
      <>
        <p>
          ERISA does not prohibit your employer from amending the plan to reduce the rate at which benefits accrue in the
          future. For example, a plan that pays $5 in monthly benefits at age 55 for years of service through 2001, may be
          amended to provide that years of service beginning in 2002 will be credited at the rate of $4 per month.
        </p>
        <p>
          If you are a participant in a defined benefit plan or a money purchase plan, you must receive written notice of
          a significant reduction the rate of future benefit accruals after the plan amendment is adopted and at least 15
          days before the effective date of the plan amendment. The written notice must describe the plan amendment and its
          effective date.
        </p>
        <p>
          The 2001 Tax Relief Act put teeth in this rule by imposing a penalty excise for a plan's failure to provide
          notice to participants (or QDRO recipients) of plan amendments making a significant reduction in the rate of
          future benefit accrual. The penalty generally is imposed on the employer and applies after June 6, 2001.
          "Egregious" (for example, intentional) failure to give notice can in effect void the amendment. The toughened
          provision was prompted by widespread conversions of regular defined benefit pension plans to cash balance plans.
        </p>
      </>
    ),
  },
  {
    id: 'leave-and-return',
    title: 'What if You Leave Your Job and Return Later?',
    body: (
      <>
        <p>
          A break in service can have serious consequences for your pension if it extends for a long enough time and your
          pension benefit is not yet fully vested. However, ERISA does not permit your accrued benefit to be forfeited if
          you have a short break in service. ERISA in general guarantees that your service credit cannot be forfeited for
          absences shorter than five consecutive years.
        </p>
        <Callout label="Tip">
          <p>
            If you need to take a leave of absence, you should carefully examine your plan's rules so that you do not lose
            pension benefits you have accrued.
          </p>
        </Callout>
        <p>
          If you continue to work past normal retirement age without retiring, you continue to accrue benefits, regardless
          of age. However, a plan can limit the total number of years of service that will be taken into account for
          benefit accrual for anyone under the plan. If you retire and later go back to work with your employer, you must be
          allowed to continue to accrue additional benefits, subject to any such limit on total years of service credited
          under the plan.
        </p>
        <p>
          Plans that provide for the payment of early retirement benefits may suspend payment of those benefits if you are
          re-employed before reaching normal retirement age. However, if the plan suspends payment of benefits before
          normal retirement age, under circumstances that would not have permitted a suspension <strong>after</strong>{' '}
          normal retirement age and the plan pays an actuarially reduced early retirement benefit, the plan must
          actuarially recalculate your monthly payment when you later begin to again receive payments.
        </p>
        <p>
          Under certain circumstances (described below), your pension payments after you reach normal retirement age may
          be suspended if you return to work. For example, ERISA permits a multi-employer plan to suspend the payment of
          normal retirement benefits if you return to work in the same industry, the same trade, and the same geographical
          area covered by the plan as when benefits commenced.
        </p>
        <p>
          Before suspending benefit payments, the plan must notify you of the suspension during the first calendar month in
          which the plan withholds payments. The notification must give you the information on why benefit payments are
          suspended, a general summary and a copy of the plan's suspension of benefit provisions, a statement regarding the
          Department of Labor regulations, and information on how you can request a review of the decision to suspend
          benefit payments. If most of this information is contained in the plan's summary plan description, the
          notification may simply refer to the appropriate pages of the summary plan description.
        </p>
        <p>
          A plan that suspends benefit payments must tell you how you can request an advance determination of whether a
          particular type of reemployment would result in a suspension.
        </p>
        <Callout label="Tip">
          <p>
            If you are a retiree and are considering taking a job, write to the administrator of your plan to ask if your
            pension benefits will be suspended.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'vesting',
    title: 'What is Vesting and How does it Work?',
    body: (
      <>
        <p>
          Vesting refers to the amount of time you must work before earning a non-forfeitable right to your accrued
          benefit. When you are fully vested, your accrued benefit is yours, even if you leave the company before reaching
          retirement age.
        </p>
        <p>
          Generally, if you are employed when you reach your plan's normal retirement age (usually 65), you will be fully
          vested. You also must be permitted to earn a vested right to your accrued benefit through service as described
          below.
        </p>
        <p>
          You are always entitled to 100 percent vesting in your own contributions and salary reduction contributions and
          their investment earnings. However, if your employer contributes to your accrued benefit (as most do) you may be
          required to complete a certain number of years of service with the employer before the employer portion of your
          accrued benefit becomes vested. Thus, if you terminate employment before working for a long enough period with
          your employer, you may forfeit all or part of the accrued benefit provided by your employer.
        </p>
        <p>
          You must be permitted to earn vesting credit according to a vesting schedule that is at least as generous as
          prescribed in{' '}
          <a href="https://www.dol.gov/general/faq" {...external}>
            ERISA vesting
          </a>{' '}
          schedules. Plans may provide a different standard, as long it is more generous than these minimums.
        </p>
        <Callout label="Tip">
          <p>Check your summary plan description for a description of your employer's vesting schedule.</p>
        </Callout>
        <p>
          With some exceptions, once you begin participating in a pension plan, all of your years of service with the
          employer after you reached age 18 must be taken into account to determine whether and to what extent your
          accrued benefits are vested. This includes service you earned before you began to participate in the plan and
          service you earned before the effective date of ERISA.
        </p>
        <p>However, ERISA does allow plans to disregard certain periods for purposes of determining an employee's vesting service.</p>
        <Callout label="Tip">
          <p>
            For further details on what periods of service may be disregarded, see your summary plan description or the
            plan document to find out what periods are counted in your plan.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            When you receive a benefit statement, compare the amount of your accrued benefit with the amount or percentage
            of your vested benefit to determine its accuracy. If these items are not clear from your benefit statement, ask
            your plan administrator.
          </p>
        </Callout>
        <p>The plan administrator may send you a benefit statement each year. If not, you may request a copy.</p>
        <Callout label="Tip">
          <p>
            In order to keep track of your vesting service, you may want to keep records of your hire date, the date you
            began participating in the plan, and the dates of any leaves of absence that could affect your total service.
          </p>
        </Callout>
        <p>
          If the plan's vesting schedule is changed after you have completed at least three years of service, you have the
          right to select the vesting schedule that existed prior to the change for the entire length of your service,
          rather than the new schedule.
        </p>
        <p>
          Plans are considered top-heavy if they are tax qualified and more than 60 percent of the benefits accrue to
          certain owners and officers, otherwise known as key employees. This could, for example, occur in small companies
          that have frequent turnover of rank-and-file workers. In years in which a plan is top-heavy, you have the right to
          both faster vesting and minimum benefits, if you are not a key employee. The 2001 Tax Relief Act eased the
          top-heavy rules for 2002 and after. This could have the effect of increasing key employees' shares in the plan,
          and reducing others' shares.
        </p>
      </>
    ),
  },
  {
    id: 'when-paid',
    title: 'When Will Your Benefits Be Paid?',
    body: (
      <>
        <p>
          ERISA provides specific rules governing when you may or must begin receiving your pension benefits. First, ERISA
          sets the latest date by which the plan must permit you to begin receiving your benefit. Under this rule, payment
          must begin by the 60th day after the end of the plan year in which the latest of the following events occur:
        </p>
        <ol>
          <li>Your reaching of age 65 or, if earlier, the normal retirement age specified by your plan</li>
          <li>The end of 10th year after you began participation in the plan</li>
          <li>Your termination of service</li>
        </ol>
        <Callout label="Example">
          <p>
            Your plan must provide—at a minimum—that you will be entitled to begin to receive your benefit 60 days after the
            end of the plan year in which you reach age 65, if you began participation in the plan at least 10 years before
            that year.
          </p>
        </Callout>
        <p>
          Your plan may allow you to receive payment of your benefit earlier than required by the above rule (and many
          plans do, subject to rules described below). However, as long as the present value of your vested accrued benefit
          is greater than $5,000, the plan cannot force you to begin receiving your benefit before you reach the age that is
          generally considered normal retirement age (or age 62 if later).
        </p>
        <p>
          If the present value of your vested accrued benefit under the plan is $5,000 or less, the plan may require you to
          receive your benefit when it first becomes distributable, such as when you terminate. Under the 2001 Tax Relief
          Act, such amounts, if more than $1,000, are automatically rolled over to an IRA for your benefit, unless you
          decide otherwise. This rule becomes effective after implementing regulations are issued.
        </p>

        <h3>How Early May Your Plan Allow You to Take Payments?</h3>
        <p>
          ERISA provides rules governing the times at which a pension plan may permit you to receive benefits. As these
          limitations on "distribution events" for payment vary, depending on the type of pension plan, you should consult
          your summary plan description for the specific conditions under which you will be entitled to receive your
          benefits. After the event occurs that permits payment of your benefit, your plan may require some reasonable
          period of time during which to calculate your benefit and determine your payment schedule, or to value your
          account balance and to liquidate any investments in which your account is invested.
        </p>
        <p>The following are a few general rules about possible distribution events for which your plan may provide.</p>
        <ul>
          <li>
            If your plan is a defined benefit plan or a money purchase plan, it will set a normal retirement age, which is
            generally the time at which you will be eligible to begin receiving your vested accrued benefit. These types of
            plans may permit earlier payments, however, either by providing for early retirement benefits, for which the
            plan may set additional eligibility requirements, or by permitting benefits to be paid when you terminate
            employment, suffer a disability, or die.
          </li>
          <li>
            If your plan is a 401(k) plan, it may permit you to take some or all of your vested accrued benefit when you
            terminate employment, retire, die, become disabled, reach age 59½, or if you suffer a hardship.
          </li>
          <li>
            If your plan is a profit-sharing plan or a stock bonus plan, your plan may permit you to receive your vested
            accrued benefit after you terminate employment, become disabled, die, reach a specific age, or after a specific
            number of years have elapsed.
          </li>
        </ul>
        <p>Your plan's summary plan description should describe all of the rules applicable to any of the events that permit distributions.</p>

        <h3>When Must You Take Payment?</h3>
        <p>
          ERISA also sets a date by which you must begin to receive your benefits, regardless of your wishes or the plan's
          rules, if your plan is tax-qualified. This mandatory beginning date is generally April 1 of the calendar year
          following the calendar year in which you reach age 72. ERISA provides rules for determining how much of your
          accrued benefit you must then receive each year.
        </p>
        <Callout label="Note">
          <p>
            Unless you own more than 5 percent of the business, the plan can allow you to postpone taking money out of your
            retirement plan beyond age 72 if you're still employed.
          </p>
        </Callout>

        <h3>In What Form Will Your Benefits Be Paid?</h3>
        <p>
          With some very important limits, your plan can dictate the forms in which you may receive your accrued benefit.
          The protections that ERISA provides about form of benefit payments vary again depending on whether you have a
          defined benefit plan, money purchase plan, or other kind of defined contribution plan.
        </p>
        <p>
          If you are covered under a defined benefit plan or a money purchase plan, your benefit must be available in the
          form of a life annuity, which means you will receive equal periodic payments (e.g., monthly, quarterly, etc.) for
          the rest of your life. If you are married, your benefit must be available in the form of a qualified joint and
          survivor annuity. (That form of benefit payment is described in the next section on spousal rights to benefit
          payments.) It is also free to offer benefits in a lump sum, as an alternative, subject to the participant's or
          spouse's right to insist on an annuity.
        </p>
        <Callout label="Caution">
          <p>
            Be careful about choosing a lump sum payout instead of an annuity under a defined benefit plan. The lump sum can
            be calculated—legally—in an amount which is less than what pension advisers consider the present value of the
            annuity. Consult a professional before deciding.
          </p>
        </Callout>
        <p>
          If you are covered under a defined contribution plan that is not a money purchase plan, the plan may choose to pay
          your benefits in a single lump sum payment, or in any other form it chooses. If it offers a life annuity option,
          however, and you choose that option, you and your spouse (if any) will be protected by being offered a life
          annuity or a joint and survivor annuity that satisfies the requirements of ERISA.
        </p>
      </>
    ),
  },
  {
    id: 'surviving-spouse',
    title: 'What Will Your Surviving Spouse Get When You Die?',
    body: (
      <>
        <p>
          ERISA provides some guarantees for surviving spouses of deceased participants who had earned a vested pension
          benefit before death. The nature of the guaranteed interest depends on the type of plan and whether the
          participant dies before or after the annuity starting date—i.e., before or after payment of the pension benefit
          is scheduled to begin.
        </p>
        <Callout label="Tip">
          <p>
            The rules we discuss apply to participants who completed an hour of service (or paid leave) on or after August
            23, 1984. ERISA's survivor annuity rules are different if you are the surviving spouse of a participant who left
            employment before that date.
          </p>
        </Callout>
        <p>
          In the case of a defined benefit plan (traditional pension plan) or a money purchase plan, the plan must provide
          for a qualified joint and survivor annuity. In the case of a defined contribution plan (a 401(k) plan or
          profit-sharing plan), the protections are somewhat different. Let's take a look at each of these.
        </p>
        <Callout label="Tip">
          <p>
            The summary plan description will tell you the type of plan involved and whether survivor annuities or other
            death benefits are provided under the plan.
          </p>
        </Callout>

        <h3>What is a Qualified Joint and Survivor Annuity (QJSA)?</h3>
        <p>
          The QJSA requirement applies to defined benefit plans and money purchase plans. ERISA says the retirement benefit
          payment must be paid in a series of equal, periodic payments over your lifetime, with a payment continuing to
          your spouse for life if you die first—unless you and your spouse have chosen otherwise. The periodic payment to
          your surviving spouse must be at least 50 percent and not more than 100 percent of the periodic payment received
          during your joint lives.
        </p>
        <p>
          If the plan provides other forms of benefit payment, and you and your spouse want to waive your rights to receive
          the QJSA and select one of the other payment forms, you can do so as long as:
        </p>
        <ul>
          <li>You and your spouse receive a timely explanation of the QJSA,</li>
          <li>Your waiver is made in writing within certain time limits, and</li>
          <li>Your spouse consents to the waiver in writing, as witnessed by a notary or plan representative.</li>
        </ul>

        <h3>What is a Qualified Pre-Retirement Survivor Annuity (QPSA)?</h3>
        <p>
          A survivor annuity must also be offered by a defined benefit or money purchase plan if a married participant with
          a vested benefit dies before he or she begins receiving benefits. This survivor annuity is called a qualified
          preretirement survivor annuity (QPSA), and ERISA specifies how the QPSA is calculated. You and your spouse must be
          given a timely explanation of the QPSA. You may only waive the right to a QPSA in writing, and your spouse must
          consent to the waiver of the QPSA in writing, witnessed by a notary or plan representative.
        </p>

        <h3>What Survivor Benefit Rules Apply to Defined Contribution Plans (such as 401(k) Plans)?</h3>
        <p>
          Most profit sharing and stock bonus plans, e.g., 401(k) plans, generally need not offer a survivor annuity.
          However, there are different rules for such plans that protect the spouse as beneficiary.
        </p>
        <p>
          Before you begin to receive your benefits under such a plan your spouse is automatically presumed to be your
          beneficiary. Thus, if you die before you receive your benefits, all of your benefits will automatically go to
          your surviving spouse. If you wish to select a beneficiary other than your spouse, your spouse must consent in
          writing, witnessed by a notary or plan representative. This protects your spouse in the event of your death
          before any payout has been made.
        </p>
        <p>
          However, when it is time for you to take payouts from the plan (e.g., you terminate employment or reach
          retirement,) you may choose—without your spouse's consent—among any optional forms of payment offered by the
          plan, including a life annuity. If you choose a life annuity, however, your spouse is then protected by QJSA
          rules, and the benefit will be paid as a QJSA unless you and your spouse consent to a different form, as outlined
          above.
        </p>
        <Callout label="Tip">
          <p>For more in-depth information on the rules governing QJSA and QPSA rights, IRS publications are available.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'claims',
    title: 'How Do You Make a Claim for Benefits?',
    body: (
      <>
        <p>
          Under ERISA you have a right to make a claim for benefits due under a plan. ERISA requires all plans to have a
          reasonable written procedure for processing your claims for benefits and for appealing if your claim is denied.
          The summary plan description should contain a description of your plan's procedures.
        </p>
        <Callout label="Tip">
          <p>
            If you believe you are entitled to a benefit from a pension plan, but your plan fails to set up a claims
            procedure, present the claim to the plan administrator.
          </p>
        </Callout>
        <p>
          If you make a claim for benefits that is denied, the plan must notify you in writing, generally within 90 days
          after receipt of the claim, of the reasons for the denial and the specific plan provisions on which the denial is
          based. If the plan denies your claim because the administrator needs more information to make a decision, the
          administrator must tell you what information is needed. Any notice of denial must also tell you how to file an
          appeal.
        </p>
        <p>
          If special circumstances require your plan to take more time to examine your request, it must tell you within the
          90 days that additional time is needed, why it is needed, and the date by which the plan expects to make a final
          decision. If you receive no answer at all in 90 days, this is treated the same as a denial, and you can appeal.
        </p>
        <p>
          You must be allowed at least 60 days to appeal any denial. After receiving your appeal, the plan generally must
          issue a ruling within 60 days, unless the plan provides for a special hearing. If the plan notifies you that it
          must hold a hearing, or that it has other special circumstances, it may have an additional 60 days.
        </p>
        <p>
          The plan must furnish you with a final decision on your appeal and the reasons for the decision with references
          to the relevant plan documents. If you disagree with the final decision, you may then file a lawsuit seeking your
          benefit under ERISA, as explained below. But courts generally require that you complete all the steps available
          to you under the claims procedure in a timely manner before you seek relief through a lawsuit. This is called
          "exhausting your administrative remedies."
        </p>
      </>
    ),
  },
  {
    id: 'investments',
    title: 'Can You Choose Your Own Investments?',
    body: (
      <>
        <p>
          In certain defined contribution plans, instead of one group or individual making all the investment decisions for
          the plan's assets, plan officials provide a number of investment options, and ask you to decide how to invest your
          account balance by choosing among those options.
        </p>
        <p>
          The Department of Labor has rules about plans that permit you to direct your own investments. Under these rules,
          only if you truly exercise independent control in making your investment choices will plan officials be excused
          from fiduciary responsibility for your investment decisions.
        </p>
        <p>
          A plan in which you actually exercise independent control over the investment of your individual account is called
          a 404(c) plan (after section 404(c) of ERISA). If you are a participant in a 404(c) plan, you are responsible for
          the consequences of your investment decision, and you cannot sue the plan officials for investment losses that
          result from your decision.
        </p>
        <p>You are entitled to receive a broad range of information about the investment choices available under a 404(c) plan.</p>
        <Callout label="Tip">
          <p>A plan that intends to relieve plan officials of fiduciary duties over investments must inform you of that fact.</p>
        </Callout>
        <p>
          A 404(c) plan must give you sufficient information about investment options for you to be able to make informed
          decisions. The information you are entitled to receive without asking includes the following:
        </p>
        <ul>
          <li>Notice that the plan officials may be relieved of liability of losses.</li>
          <li>A description of each investment option, including the investment goals, risk and return characteristics.</li>
          <li>Information about designated investment managers.</li>
          <li>
            An explanation of when and how to make investment instructions and any restrictions on when you can change
            investments.
          </li>
          <li>
            A statement of the fees that may be charged to your account when you change investment options or buy and sell
            investments.
          </li>
          <li>
            Information about your shareholder voting rights and the manner in which confidentiality will be provided on how
            you vote your shares of stock.
          </li>
          <li>
            The name, address, and phone number of the plan fiduciary or other person designated to provide certain
            additional information on request.
          </li>
          <li>For security investors, a copy of the most recent prospectus for the security.</li>
        </ul>
        <p>
          Effective starting in 2007, a plan may arrange to provide individual investment advice, without liability for
          plan officials, subject to strict conditions.
        </p>
      </>
    ),
  },
  {
    id: 'funding',
    title: 'How Must Your Plan Be Funded?',
    body: (
      <>
        <p>
          ERISA sets minimum funding rules to make sure sufficient money is available to pay promised pension benefits to
          you when you retire. Funding rules establish the minimum amounts that employers must contribute to plans to
          ensure that plans have enough money to pay benefits when due. The minimum funding rules apply to defined benefit
          plans and money purchase plans.
        </p>
        <p>
          Defined benefit plans generally fund future benefits over time. The plans consider probable investment gains and
          losses and make assumptions about factors such as future interest rates and potential workforce changes. ERISA
          provides detailed funding rules to protect you from financing methods that could prove inadequate to pay the
          promised benefits when they are due.
        </p>
        <p>
          ERISA provides severe sanctions against an employer who fails to meet the funding obligations. Any employer who
          fails to comply with the minimum funding requirements is charged an excise tax on the amount of the accumulated
          funding deficiency, unless the employer receives a waiver of the minimum funding requirements. This tax is
          imposed whether the under-funding was accidental or intentional.
        </p>
        <p>
          Certain actions can also be taken by the Department of Labor and the Pension Benefit Guaranty Corporation to
          enforce the minimum funding standards.
        </p>
        <Callout label="Tip">
          <p>A plan that intends to relieve plan officials of fiduciary duties over investments must inform you of that fact.</p>
        </Callout>
        <Callout label="Tip">
          <p>
            If a defined benefit plan is less than 90 percent funded, you must be notified each year about the plan's
            funding status and PBGC's guarantees. This rule is effective for plan years beginning after December 8, 1994.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Can Your Plan Be Terminated?',
    body: (
      <>
        <p>
          Although pension plans must be established with the intention of being continued indefinitely, employers are
          allowed to terminate plans.
        </p>
        <p>
          If your plan terminates or becomes insolvent, ERISA provides you some protection. In a tax-qualified plan, your
          accrued benefit must become 100 percent vested as soon as the plan terminates, to the extent then funded.
        </p>
        <p>
          If a partial termination occurs, for example, if your employer closes a particular plant or division that results
          in the layoff of a substantial portion of plan participants, immediate 100 percent vesting, to the extent funded,
          also is required for affected employees.
        </p>

        <h3>What If Your Plan Terminates Without Enough Money to Pay the Benefits?</h3>
        <p>
          If your terminated plan is a defined benefit plan insured by the Pension Benefit Guaranty Corporation, PBGC will
          guarantee the payment of your vested pension benefits up to the limits set by law. Benefits that are not
          guaranteed or that exceed PBGC's limits may be paid, depending on the plan's funding and on whether PBGC is able
          to recover additional amounts from the employer.
        </p>
        <Callout label="Tip">
          <p>
            If a plan terminates, and the plan purchases annuity contracts from an insurance company to pay pension benefits
            in the future, plan fiduciaries must take certain steps to select the safest available annuity. Thus, in
            accordance with Department of Labor guidance, the plan must conduct a thorough search with respect to the
            financial soundness of insurance companies that provide annuities, to better assure the future payment of
            benefits to participants and beneficiaries.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'merger',
    title: 'Is Your Accrued Benefit Protected if Your Plan Merges?',
    body: (
      <>
        <p>
          Your employer may choose to merge your plan with another plan. If your plan is terminated as a result of the
          merger, the benefit you would be entitled to receive after the merger must be at least equal to the benefit you
          were entitled to receive before the merger.
        </p>
        <p>Special rules apply to mergers of multi-employer plans, which are generally under the jurisdiction of the PBGC.</p>
      </>
    ),
  },
  {
    id: 'suing',
    title: 'Suing Under ERISA',
    body: (
      <>
        <p>As a plan participant or beneficiary, you may bring a civil action in court to do any of these things:</p>
        <ul>
          <li>Recover benefits due you and enforce your rights under the plan.</li>
          <li>Get access to plan documents you requested in writing.</li>
        </ul>
        <Callout label="Tip">
          <p>
            If your plan administrator does not supply the plan documents within 30 days of your written request, a court
            could find the plan administrator personally liable for up to $100 per day (unless the failure results from
            circumstances reasonably beyond his or her control).
          </p>
        </Callout>
        <ul>
          <li>Clarify your right to future benefits.</li>
          <li>Get appropriate relief from a breach of fiduciary duty.</li>
          <li>
            Enjoin any act or practice that violates the terms of the plan or any provision of Title I of ERISA, such as the
            reporting and disclosure, participation, vesting or funding, and fiduciary provisions, or to obtain other
            relief.
          </li>
          <li>Enforce the right to receive a statement of vested benefits on termination of employment.</li>
          <li>
            Obtain review of a final action of the Secretary of Labor; restrain the Secretary from taking action contrary to
            ERISA; or compel the Secretary to take action.
          </li>
          <li>Obtain review of any action of the PBGC or its agents that adversely affects you.</li>
        </ul>
        <p>
          A lawsuit under ERISA is filed in a federal district court. If you seek benefits or clarification of your right to
          future benefits, you can choose to file in a state court.
        </p>
        <Callout label="Tip">
          <p>
            The court has the discretion to order either party in the suit (you or the plan, fiduciaries, or sponsor) to pay
            reasonable attorney fees and costs in a suit under ERISA.
          </p>
        </Callout>

        <h3>Does the Government Ever Sue Employers or Sponsors?</h3>
        <p>
          The Secretary of Labor may directly bring a civil action under ERISA to enforce the fiduciary duty provisions of
          ERISA (explained later). The Labor Secretary also has limited authority to bring a civil action to enforce ERISA's
          participation, vesting, and funding standards with respect to a tax-qualified plan. In addition, the Secretary has
          discretion to intervene in lawsuits filed in federal court to enforce rights under ERISA.
        </p>
        <p>
          If you sue in federal court claiming a breach of fiduciary duty, you must provide a copy of the complaint to the
          Secretary of Labor and the Secretary of the Treasury by certified mail.
        </p>
        <Callout label="Tip">
          <p>
            It is not necessary to provide such notice to any government agency if you bring a lawsuit solely to recover
            benefits under the plan.
          </p>
        </Callout>

        <h3>Can You Be Fired for Suing for Making a Claim Under ERISA?</h3>
        <p>
          ERISA prohibits employers from promising pensions and then firing or disciplining workers to avoid paying a
          pension. To that end, ERISA says it is unlawful for an employer to discharge, fine, suspend, expel, discipline, or
          discriminate against you or any beneficiary for the purpose of interfering with the attainment of any right to
          which you may become entitled under the plan or the law.
        </p>
        <p>
          Also, employers cannot take any of these steps against you for exercising your rights under a plan or under
          ERISA, or for giving information or testimony in any inquiry or proceeding relating to ERISA. Further, the use of
          force or violence to restrain, coerce, or intimidate you for the purpose of interfering with your rights or
          prospective rights is punishable by a fine of up to $10,000 and/or up to one year in prison.
        </p>

        <h3>Can Your Creditors Get to Your Pension if You Get into Financial Trouble?</h3>
        <p>
          In general, your pension benefits cannot be taken away from you by people to whom you owe money. However, the IRS
          can attach such benefits for tax claims. And the law makes a limited further exception when family support is at
          stake. Thus, a state court can transfer some of your pension benefit by issuing a qualified domestic relations
          order (QDRO), and the plan must honor the order.
        </p>

        <h3>What Is a QDRO?</h3>
        <p>
          Before a plan honors a domestic relations order awarding part or all of your pension benefit to your spouse,
          former spouse, child or other dependent, the plan must determine whether the order is a qualified domestic
          relations order (QDRO.) The order must meet these requirements:
        </p>
        <ul>
          <li>It must relate to child support, alimony, or marital property rights</li>
          <li>It must be made under state domestic relations law.</li>
          <li>
            It should clearly specify your name and last known mailing address and the name and last known address of each
            alternate payee. (The alternate payee is the spouse, ex-spouse, or dependent to whom the benefits are awarded.)
          </li>
          <li>
            It must state the name of your plan; the amount or percentage—or the method of determining the amount or
            percentage—of the benefit to be paid to the alternate payee; and the number of payments or time period to which
            the order applies.
          </li>
        </ul>
        <p>
          It cannot provide a type or form of benefit that is not provided under the plan, and it cannot require the plan to
          provide an actuarially increased benefit.
        </p>
        <p>If an earlier QDRO applies to your benefit, the earlier QDRO takes precedence over a later one.</p>
        <p>
          In certain situations, a QDRO may provide that payment is to be made to an alternate payee before you are entitled
          to receive your benefit. For example, if you are still employed, a QDRO could require payment to an alternate
          payee to begin on or after your "earliest retirement age," whether or not the plan would allow you to receive
          benefits at that time.
        </p>
        <Callout label="Tip">
          <p>
            If you are in the process of a divorce, and a QDRO is being prepared for your family, be sure that the QDRO
            addresses (1) whether a benefit is payable to an alternate payee on your death and (2) the consequences of the
            death of the alternate payee.
          </p>
        </Callout>
        <p>
          The court's order can be in the form of a state court judgment, decree or order, or court approval of a property
          settlement agreement.
        </p>
      </>
    ),
  },
  {
    id: 'enforcement',
    title: 'Who Enforces ERISA?',
    body: (
      <>
        <p>
          The Department of Labor enforces Title I of ERISA, which, in part, establishes participants' rights and
          fiduciaries' duties. However, certain plans are not covered by the protections of Title I. They are:
        </p>
        <ul>
          <li>Federal, state, or local government plans, including plans of certain international organizations</li>
          <li>Certain church or church association plans</li>
          <li>
            Plans maintained solely to comply with state workers' compensation, unemployment compensation or disability
            insurance laws
          </li>
          <li>Plans maintained outside the United States primarily for non-resident aliens</li>
          <li>
            Unfunded excess benefit plans—plans maintained solely to provide benefits or contributions in excess of those
            allowed for tax-qualified plans
          </li>
        </ul>
        <p>
          The Labor Department's Pension and Welfare Benefits Administration is the agency charged with enforcing the rules
          governing the conduct of plan managers, investment of plan assets, reporting and disclosure of plan information,
          enforcement of the fiduciary provisions of the law, and workers' benefit rights.
        </p>
        <p>Other federal agencies that regulate plans include:</p>
        <ul>
          <li>
            The Internal Revenue Service is responsible for ensuring compliance with the Internal Revenue Code, which
            establishes the rules for operating a tax-qualified pension plan, including pension plan funding and vesting
            requirements. A pension plan that is tax-qualified can offer special tax benefits both to the employer sponsoring
            the plan and to the participants who receive pension benefits.
          </li>
          <li>
            The Pension Benefit Guaranty Corporation, PBGC, a non-profit, federally-created corporation, guarantees payment of
            certain pension benefits under defined benefit plans (traditional pension plans) that are terminated with
            insufficient money to pay benefits.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'summary',
    title: "Summary of Information You're Entitled To",
    body: (
      <>
        <p>
          Following is a list and description of the documents that must be made available to you. If a plan administrator
          refuses to comply with your request for documents, and the reasons for the delay are within his or her control, a
          court may impose a penalty of up to $100 per day. You will have to sue to enforce your rights, since the
          Department of Labor does not have the authority to impose this penalty.
        </p>
        <ArticleTable label="Documents you're entitled to" wide>
          <thead>
            <tr>
              <th scope="col">Whom You Can Get It From</th>
              <th scope="col">When You Can Get It</th>
              <th scope="col">Your Cost</th>
            </tr>
          </thead>
          <tbody>
            {documents.flatMap((document) => [
              <tr className="is-group" key={document.name}>
                <td colSpan={3}>
                  <strong>{document.name}</strong> {document.text}
                </td>
              </tr>,
              ...document.rows.map(([whom, when, cost]) => (
                <tr key={`${document.name}-${when}`}>
                  <td>{whom}</td>
                  <td>{when}</td>
                  <td>{cost}</td>
                </tr>
              )),
            ])}
          </tbody>
        </ArticleTable>
      </>
    ),
  },
];

export default function YourPension() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/improving-your-retirement"
      page="Your Pension"
      title={
        <>
          Your Pension: <em>What You're Entitled To</em>
        </>
      }
      lead="What happens to your pension if your employer goes out of business? How careful does a plan administrator have to be in managing retirement plan assets? What rights does your spouse have in your retirement plan benefits? This Financial Guide answers these and other major questions that you may have."
      sections={sections}
      numbered={false}
    >
      <p>
        Federal law, mainly the{' '}
        <a href="https://www.dol.gov/general/topic/retirement/erisa" {...external}>
          Employee Retirement Income Security Act
        </a>{' '}
        (ERISA), provides you with certain safeguards and guarantees as to the money you have in a plan maintained by an
        employer. This Financial Guide provides the answers to the major questions you may have about your pension plan.
      </p>
    </GuideArticle>
  );
}
