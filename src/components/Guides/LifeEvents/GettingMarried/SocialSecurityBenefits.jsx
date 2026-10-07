import GuideArticle, { Callout, FigureTable } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=56 (Social Security Benefits: How To Get The
// Maximum Amount), word for word. Hyphens used as dashes are now dashes. "The Appeals Process"
// links to Social Security's appeals page, since that publication is no longer online.
// Address: /guides/life-events/getting-married/social-security-benefits (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'eligibility',
    title: 'Eligibility for Retirement Benefits',
    body: (
      <>
        <p>
          When you work and pay Social Security taxes (referred to as FICA on some pay stubs), you earn Social
          Security credits. Most people earn a maximum of four credits per year. In 2023, you earn one (1) Social
          Security and Medicare credit for every $1,640 in covered earnings annually. You must earn $6,560 to get the
          maximum four (4) credits for the year. The number of credits you need to get retirement benefits depends on
          your date of birth.
        </p>
        <p>
          If you stop working before you have enough credits to qualify for benefits, your credits will remain on your
          Social Security record. If you return to work later on, you can then add credits so that you may qualify. No
          retirement benefits can be paid until you have the required number of credits.
        </p>
        <p>
          If you are like most people, however, you will earn many more credits than you need to qualify for Social
          Security. While these extra credits do not increase your Social Security benefit, the income you earn while
          working will increase your benefit.
        </p>
      </>
    ),
  },
  {
    id: 'amount',
    title: 'Amount of Your Retirement Benefits',
    body: (
      <>
        <p>
          Your benefit amount is based on your earnings averaged over most of your working career. Higher lifetime
          earnings result in higher benefits. If you have some years of no earnings or low earnings, your benefit
          amount may be lower than if you had worked steadily.
        </p>
        <p>
          Your benefit amount is also affected by your age at the time you start receiving benefits. Your benefit will
          be lower if you start your retirement benefits at age 62 (the earliest possible retirement age) than if you
          wait until a later age.
        </p>
        <Callout label="Planning Aid">
          <p>
            <a href="https://www.ssa.gov" {...external}>
              Social Security
            </a>{' '}
            will give you a personalized benefit estimate at your request. Call 800-772-1213 and ask for a{' '}
            <a href="https://www.ssa.gov/forms/ssa-7050.pdf" {...external}>
              Request for Earnings and Benefit Estimate Statement
            </a>
            . Upon completing and returning the form, you will receive a statement of your complete earnings history,
            along with estimates of your benefits for early retirement, full retirement, and delayed retirement
            (discussed below). You'll also receive an estimate of the disability benefits you could receive and the
            amount of benefits payable to your spouse and children due to your retirement, disability, or death. If you
            are age 60 or older, you can get an estimate of your retirement benefits by telephone.
          </p>
        </Callout>
        <p>You can also use the Retirement Estimator on the Social Security Administration website.</p>
        <Callout label="Note">
          <p>Your actual benefit amount cannot be determined until you apply for benefits.</p>
        </Callout>
        <p>
          Social Security law provides for automatic cost-of-living increases. Once you start receiving benefits, the
          amount will go up automatically as the cost of living rises.
        </p>

        <h3>Full Retirement</h3>
        <p>
          People in the Social Security system who retire at "full retirement age" receive the full retirement
          benefit. Your full retirement age depends on when you were born.
        </p>
        <p>
          Because of longer life expectancies, the full retirement age starts at age 65 for those persons born in 1937
          or earlier and gradually increases until age 67 for those born in 1960 or later. The chart below shows what
          your full retirement age will be:
        </p>
        <FigureTable
          label="Full retirement age by year of birth"
          columns={['Year of Birth', 'Full Retirement Age']}
          rows={[
            ['1937 or earlier', '65'],
            ['1938', '65 and 2 months'],
            ['1939', '65 and 4 months'],
            ['1940', '65 and 6 months'],
            ['1941', '65 and 8 months'],
            ['1942', '65 and 10 months'],
            ['1943-1954', '66'],
            ['1955', '66 and 2 months'],
            ['1956', '66 and 4 months'],
            ['1957', '66 and 6 months'],
            ['1958', '66 and 8 months'],
            ['1959', '66 and 10 months'],
            ['1960 and later', '67'],
          ]}
          numeric={false}
        />

        <h3>Early Retirement</h3>
        <p>
          You can start your Social Security benefits as early as age 62, but your benefit amount will be less than
          your full retirement benefit. If you take early retirement, your benefits will be reduced based on the number
          of months you will receive checks before you reach full retirement age. If your full retirement age is 67
          (for example, one born in 1961 and retiring in 2023 at age 62), the reduction for starting your Social
          Security at 62 may be as much as 30 percent.
        </p>
        <p>
          In the case of early retirement, a benefit is reduced 5/9 of one percent for each month before the normal
          retirement age, up to 36 months. If the number of months exceeds 36, then the benefit is further reduced by
          5/12 of one percent per month. For example, if the number of reduction months is 60 (the maximum number for
          retirement at 62 when the normal retirement age is 67), then the benefit is reduced by 30 percent. This
          maximum reduction is calculated as 36 months times 5/9 of 1 percent plus 24 months times 5/12 of 1 percent.
        </p>
        <Callout label="Tip">
          <p>
            According to the Social Security Administration, you collect more during the first 15 years if you start
            collecting at 62; beyond the 15 years, you collect more overall by waiting to full retirement age. Of
            course, the calculation changes if you start to withdraw at age 62, continue working or return to work (see
            below for more information).
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            If you are unable to continue working because of poor health, you should consider applying for Social
            Security disability benefits. The amount of the disability benefit is based on your average lifetime
            earnings and is stated on your Social Security statement. For more information on disability benefits,
            request a copy of the booklet{' '}
            <a href="https://www.ssa.gov/pubs/EN-05-10029.pdf" {...external}>
              Disability Benefits
            </a>{' '}
            (Publication No. 05-10029).
          </p>
        </Callout>

        <h3>Delayed Retirement</h3>
        <p>
          Delayed retirement credit is generally given for retirement after the normal retirement age. You must be
          insured at your normal retirement age to receive full credit. No credit is given after age 69. If you retire
          before age 70, some of your delayed retirement credits will not be applied until the following January in
          the year after you start benefits.
        </p>
        <p>
          If you decide to continue working full-time beyond your full retirement age, you will increase your Social
          Security benefit in two ways:
        </p>
        <ul>
          <li>
            You will be adding a year of earnings to your Social Security record. As stated earlier, higher lifetime
            earnings result in higher benefits.
          </li>
          <li>
            Your benefit will increase by a certain percentage for each additional year you work. These increases will
            be added automatically from the time you reach your full retirement age until you either start taking your
            benefits or reach age 70. The percentage varies depending on your year of birth. The chart below shows the
            increase that will apply to you.
          </li>
        </ul>
        <FigureTable
          label="Yearly rate of increase by year of birth"
          columns={['Year Of Birth', 'Yearly Rate of Increase']}
          rows={[
            ['1917-1924', '3%'],
            ['1925-1926', '3.5%'],
            ['1927-1928', '4%'],
            ['1929-1930', '4.5%'],
            ['1931-1932', '5%'],
            ['1933-1934', '5.5%'],
            ['1935-1936', '6%'],
            ['1937-1938', '6.5%'],
            ['1939-1940', '7%'],
            ['1941-1942', '7.5%'],
            ['1943 or later', '8%'],
          ]}
        />
        <Callout label="Example">
          <p>
            If you were born in 1943 or later, your benefit will increase by 8 percent (2/3 of one percent per month)
            for each year you delay signing up for Social Security beyond your full retirement age.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            If you decide to delay your retirement, be sure to{' '}
            <a href="https://www.medicare.gov/" {...external}>
              sign up for Medicare at age 65
            </a>
            . In some circumstances, medical insurance costs more if you delay applying for it.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'retirement-date',
    title: 'Choosing Your Retirement Date',
    body: (
      <>
        <p>
          If you plan to start your retirement benefits at age 62, contact Social Security in advance to determine the
          best retirement month to claim your benefits. In some cases, your choice of a retirement month could mean
          additional benefits for you and your family.
        </p>
        <Callout label="Tip">
          <p>
            It may be to your advantage to have your Social Security benefits start in January, even if you don't plan
            to retire until later in the year. Depending on your earnings and your benefit amount, it may be possible
            for you to start collecting benefits even though you continue to work. Under current rules, many people can
            receive the most benefits possible with an application effective in January.
          </p>
        </Callout>
        <p>
          If you plan to start collecting your Social Security when you turn 62, you should apply for benefits three
          months before the date you want your benefits to start.
        </p>
        <Callout label="Tip">
          <p>
            Because the rules are complicated, you should discuss your plans with a Social Security claims
            representative in the year before the year you plan to retire.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'widows',
    title: 'Benefits for Widows/Widowers',
    body: (
      <>
        <p>
          Many people do not realize that widows and widowers can begin receiving Social Security benefits at age 60
          (or age 50 if disabled) on the deceased spouse's account. If you are receiving widows/widowers (including
          divorced widows/widowers) benefits, you can switch to your own retirement benefits (assuming you are eligible
          and your retirement rate is higher than your widow/widower's rate) as early as age 62.
        </p>
        <p>
          In many cases, a widow or widower can begin receiving one benefit at a reduced rate and then switch to the
          other benefit at an unreduced rate at age 65. Since the rules vary depending on the situation, talk to a
          Social Security representative about the options available to you.
        </p>
      </>
    ),
  },
  {
    id: 'work',
    title: 'How Work Affects Your Benefits',
    body: (
      <>
        <p>
          A Retirement Earnings Test limits the amount of Social Security benefits a person between 62 and their full
          retirement age (see below) can receive while still working.
        </p>
        <p>
          For those reaching full retirement age in 2023, $1 in benefits will be deducted for every $3 in earnings
          above an annual limit up to the month of full retirement age attainment. For 2023, that limit is $56,520. It
          applies to months before full retirement age. No limit applies beginning the month that full retirement age
          is reached.
        </p>
        <p>
          For those under full retirement age throughout 2023, $1 in benefits will be deducted for each $2 in earnings
          above the limit of $21,240. These limits generally increase in future years.
        </p>
        <p>
          If other family members receive benefits on your Social Security record, the total family benefits will be
          affected by your earnings. Not only will your benefits be offset, but those payable to your family will also
          be offset. However, if a family member works, their earnings only affect their benefits.
        </p>
        <p>
          A special rule applies to your earnings for one year, usually your first year of retirement. Under this rule,
          you can receive a full Social Security check for any month you are retired, regardless of your yearly
          earnings. Your earnings must be under a monthly limit. If you are self-employed, the services you perform in
          your business are taken into consideration as well.
        </p>
        <p>
          If you earn more than the earnings limit and receive Social Security benefits, you must report this to
          Social Security. However, you do not have to complete a report if you are at full retirement age all year.
        </p>
      </>
    ),
  },
  {
    id: 'family',
    title: "Your Family's Benefits",
    body: (
      <>
        <p>If you are receiving retirement benefits, some family members can also receive benefits. Those who can include:</p>
        <ul>
          <li>Your wife or husband age 62 or older;</li>
          <li>Your wife or husband under age 62 if she or he is taking care of your child who is under age 16 or disabled;</li>
          <li>Your former wife or husband age 62 or older (see below);</li>
          <li>Children up to age 18;</li>
          <li>Children aged 18-19 if they are full-time students through grade 12;</li>
          <li>Children over age 18, if they are disabled.</li>
        </ul>
        <p>
          The full benefit for a spouse is one-half of the retired worker's full benefit. However, suppose your spouse
          takes benefits between 62 and their full retirement age. In that case, the amount will be permanently
          reduced by a percentage based on the number of months up to their full retirement age unless they care for a
          child under 16 or disabled.
        </p>
        <p>
          If you are eligible for both your own retirement benefits and for benefits as a spouse, you will be paid your
          own benefit first. If your benefit as a spouse is higher than your retirement benefit, you will get a
          combination of benefits equaling the higher spouse benefit.
        </p>
        <Callout label="Example">
          <p>
            Mary Ann qualifies for a retirement benefit of $250 and a wife's benefit of $400. At age 65, she will
            receive her own $250 retirement benefit and an additional $150 from her wife's benefit for a total of $400.
          </p>
        </Callout>
        <p>
          A divorced spouse can get benefits on a former husband's or wife's Social Security record if the marriage
          lasted at least ten years and the divorced spouse is 62 or older and unmarried. For the divorced spouse to
          get benefits, the worker also must be 62 or older. If divorced for at least two years, the divorced spouse
          can get benefits even if the worker is not retired. This two-year waiting period is waived if the worker gets
          benefits before the divorce. The amount of benefits a divorced spouse gets does not affect the amount of
          benefits a current spouse can get.
        </p>
        <p>
          If you have children eligible for Social Security, each child will receive up to one-half of your full
          benefit. However, there is a limit to the amount of money that can be paid to a family. If the total benefits
          due to your spouse and children exceed this limit, their benefits will be reduced proportionately—but your
          benefit will not be affected.
        </p>
      </>
    ),
  },
  {
    id: 'apply',
    title: 'How to Apply',
    body: (
      <>
        <p>
          You can apply for benefits online by setting up a{' '}
          <strong>
            <em>my Social Security</em>
          </strong>{' '}
          account. A free and secure{' '}
          <strong>
            <em>my Social Security</em>
          </strong>{' '}
          account provides personalized tools for everyone, whether you receive benefits or not. You can use your
          account to request a replacement Social Security card, check the status of an application, estimate future
          benefits, or manage the benefits you already receive. You can also apply for benefits by telephone or at any
          Social Security office.
        </p>
        <Callout label="Tip">
          <p>
            You can set up your{' '}
            <strong>
              <em>my Social Security</em>
            </strong>{' '}
            account at any time once you turn 18 years old. There are two excellent reasons for doing this. First, is
            that you can watch your personal earnings and future benefits grow over time. The second, and perhaps more
            important, reason is that setting up a Social Security account online prevents an identity thief from
            creating an account even if they obtain your Social Security number.
          </p>
        </Callout>
        <p>Depending on your circumstances, you will need some or all of these documents:</p>
        <ul>
          <li>Your Social Security number;</li>
          <li>Your birth certificate;</li>
          <li>Your W-2 forms or self-employment tax return for last year;</li>
          <li>Your checking or savings account information for direct deposit.</li>
          <li>Your military discharge papers if you had military service;</li>
          <li>Your spouse's birth certificate and Social Security number if they are applying for benefits;</li>
          <li>Your children's birth certificates and Social Security numbers if applying for children's benefits.</li>
        </ul>
        <p>
          You must submit original documents or copies certified by the issuing office. You can mail or take them to
          Social Security, which will make photocopies and return your documents.
        </p>
        <Callout label="Tip">
          <p>
            Don't delay your application because you don't have all the information. If you don't have a document you
            need, Social Security can help you get it.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'appeal',
    title: 'Your Right to Appeal',
    body: (
      <p>
        If you disagree with a decision made on your claim, you can appeal it. The steps you can take are explained in
        the fact sheet{' '}
        <a href="https://www.ssa.gov/apply/appeal-decision-we-made" {...external}>
          The Appeals Process
        </a>{' '}
        (Publication No. 05-10141), which is available from Social Security. You have the right to be represented by an
        attorney or choose another qualified person. More information is in the fact sheet,{' '}
        <a href="https://www.ssa.gov/pubs/EN-05-10075.pdf" {...external}>
          Social Security and Your Right to Representation
        </a>{' '}
        (Publication No. 05-10075), also available from Social Security.
      </p>
    ),
  },
  {
    id: 'taxability',
    title: 'Taxability of Benefits',
    body: (
      <>
        <p>
          Less than one-third of people who get Social Security pay taxes on their benefits. This provision affects
          only people who have substantial income in addition to their Social Security.
        </p>
        <p>
          At the end of each year, you will receive a Social Security Benefit Statement (Form SSA-1099) in the mail
          showing the amount of benefits you received. You can use this statement when completing your income tax
          return to determine if any of your benefits are subject to tax.
        </p>
      </>
    ),
  },
  {
    id: 'pensions',
    title: 'Pensions from Work Not Covered by Social Security',
    body: (
      <>
        <p>
          If you get a pension from work where you paid Social Security taxes, it will not affect your Social Security
          benefits. However, your Social Security benefit may be lowered or offset if you get a pension from work not
          covered by Social Security (for example, the Federal civil service or some State or local government
          employment).
        </p>
        <Callout label="Tip">
          <p>
            For more information, call Social Security to ask for the fact sheets, <em>Government Pension</em> (for
            government workers who may be eligible for Social Security benefits on the record of a husband or wife)
            (Publication No. 05-10007) and <em>A Pension From Work Not Covered By Social Security</em> (for government
            workers who also are eligible for their own Social Security benefits) (Publication No. 05-10045).
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'leaving-us',
    title: 'Leaving the United States',
    body: (
      <>
        <p>
          If you are a U.S. citizen, you can travel or live in most foreign countries without affecting your
          eligibility for Social Security benefits. Your checks can be sent there. However, there are a few countries
          where Social Security will not send your checks. If you work outside the United States, different rules apply
          in determining whether you can get your benefit checks.
        </p>
        <p>
          Most people who are neither U. S. residents nor U.S. citizens will have up to 15 percent of their benefits
          withheld for federal income tax.
        </p>
        <Callout label="Tip">
          <p>
            For more information, ask Social Security for a copy of the booklet{' '}
            <a href="https://www.ssa.gov/pubs/EN-05-10137.pdf" {...external}>
              Your Payments While You Are Outside the United States
            </a>{' '}
            (Publication No. 05-10137).
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'medicare',
    title: 'Medicare Insurance',
    body: (
      <>
        <p>
          Medicare is a health insurance plan for people 65 or older. People who are disabled or have permanent kidney
          failure can get Medicare at any age. Medicare has four parts:
        </p>
        <ul>
          <li>
            Hospital insurance (Part A) covers inpatient hospital care and certain follow-up care. You have already paid
            for it as part of your Social Security taxes while working.
          </li>
          <li>
            Medical insurance (Part B) pays for physicians' services and some other services not covered by hospital
            insurance. Medical insurance is optional, and a premium is charged for it.
          </li>
          <li>
            Medicare Part C (also known as Medicare Advantage), which offers health plan options run by
            Medicare-approved private insurance companies and may cover Medicare prescription drug coverage (Part D).
          </li>
          <li>Medicare Part D (Medicare Prescription Drug Coverage), which helps cover the costs of prescription drugs.</li>
        </ul>
        <p>Most people are already getting Social Security benefits when they turn 65, and their Medicare starts automatically.</p>
        <Callout label="Tip">
          <p>
            If you are not getting Social Security, sign up for Medicare close to your 65th birthday, even if you do not
            plan to retire. For more information, ask Social Security for a copy of the booklet, <em>Medicare</em>{' '}
            (Publication No. 05-10043.)
          </p>
        </Callout>
      </>
    ),
  },
];

export default function SocialSecurityBenefits() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Social Security Benefits"
      title={
        <>
          Social Security Benefits: <em>How To Get The Maximum Amount</em>
        </>
      }
      lead="Decisions about retirement, including understanding your Social Security benefits, are among the most important ones you will ever make. This Financial Guide provides the information you need about Social Security benefits to help you plan for retirement."
      sections={sections}
    />
  );
}
