import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=27 (Social Security Benefits: Frequently Asked
// Questions), word for word. The SSA links use https and go to ssa.gov, where the old
// socialsecurity.gov address now redirects. The library's page has no introduction, so the banner's
// opening line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/planning-for-retirement/social-security-benefits-faq (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'who-is-entitled',
    title: 'Who is entitled to Social Security disability benefits?',
    body: (
      <>
        <p>
          An individual who is determined to be "disabled" by the Social Security Administration receives an Award
          Letter, which is a notice of decision that explains how much the disability benefit will be and when payments
          start. It also tells you when you can expect your condition to be reviewed to see if there has been any
          improvement.
        </p>
        <p>If family members are eligible, they will receive a separate notice and a booklet about things they need to know.</p>
        <p>
          <strong>
            Under the Social Security disability insurance program (Title II of the Act), there are three basic
            categories of individuals who can qualify for benefits on the basis of disability:
          </strong>
        </p>
        <ul>
          <li>A disabled insured worker under full retirement age.</li>
          <li>
            An individual disabled since childhood (before age 22) who is a dependent of a parent entitled to Title II
            disability or retirement benefits or was a dependent of a deceased insured parent.
          </li>
          <li>Disabled widow or widower, age 50-60 if the deceased spouse was insured under Social Security.</li>
          <li>Been disabled or expected to be disabled for at least 12 months</li>
          <li>Has filed an application for benefits, and</li>
          <li>
            Completed a five-month waiting period; however, the 5-month waiting period does not apply to individuals
            filing as children of workers. Under SSI, disability payments may begin as early as the first full month
            after the individual applied or became eligible for SSI. In addition, if you become disabled a second time
            within five years after your previous disability benefits stopped, there is no waiting period before benefits
            start.
          </li>
        </ul>
        <p>
          <strong>
            Under Title XVI or SSI, there are two basic categories under which a financially needy person can get
            payments based on disability:
          </strong>
        </p>
        <ul>
          <li>An adult age 18 or over who is disabled.</li>
          <li>Child (under age 18) who is disabled.</li>
        </ul>
        <p>
          For all individuals applying for disability benefits under Title II and for adults applying under Title XVI,
          the definition of disability is the same. The law defines disability as the inability to engage in any
          substantial gainful activity (SGA) because of any medically determinable physical or mental impairment(s) which
          can be expected to result in death or which has lasted or can be expected to last for a continuous period of
          not less than 12 months.
        </p>
        <p>
          Meeting this definition under Social Security is difficult. Insured means that you have accumulated sufficient
          credits in the Social Security system. Visit the{' '}
          <a href="https://www.ssa.gov/" {...external}>
            Social Security Administration's Website
          </a>{' '}
          to apply for an estimate.
        </p>
      </>
    ),
  },
  {
    id: 'when-benefits-begin',
    title: 'When do Social Security disability benefits begin?',
    body: (
      <>
        <p>
          If you are getting disability benefits on your work record, or if you are a widow or widower getting benefits
          on a spouse's record, there is a five-month waiting period, and your payments will not begin until the sixth
          full month of disability. The 5-month waiting period does not apply to individuals filing as children of
          workers. Under SSI, disability payments may begin as early as the first full month after the individual
          applied or became eligible for SSI.
        </p>
        <p>
          If the sixth month has passed, your first payment may include some back benefits. Your payment should arrive on
          the third day of every month. If the third falls on a Saturday, Sunday, or legal holiday, you will receive your
          payment on the last banking day before that day. The payment you receive is the benefit for the previous month.
          The payment you receive on July 3 (or dated July 3 if you get a paper check) is for June. Ninety-nine percent of
          recipients receive direct deposit; however, your benefit can be mailed or deposited directly into your bank
          account.
        </p>
      </>
    ),
  },
  {
    id: 'taxable',
    title: 'Are Social Security disability benefits taxable?',
    body: (
      <p>
        Some people who get Social Security must pay taxes on their benefits. The rules are the same regardless of
        whether Social Security benefits are received due to retirement or disability. You must pay taxes if you file a
        federal tax return as an "individual" and your combined income is more than $25,000. Combined income is defined
        as your adjusted gross income + Nontaxable interest + 1/2 of your Social Security benefits. If you file a joint
        return, you may have to pay taxes if you and your spouse have a combined income of more than $32,000. If you are
        married and file a separate return, you will probably pay taxes on your benefits. Social Security has no
        authority to withhold state or local taxes from your benefit. Many states and local authorities do not tax
        Social Security benefits. However, you should contact your state or local taxing authority for more information.
      </p>
    ),
  },
  {
    id: 'how-long',
    title: 'How long do Social Security disability payments continue?',
    body: (
      <>
        <p>
          Your disability benefits generally continue for as long as your impairment has not medically improved and you
          cannot work. They will not necessarily continue indefinitely, however.
        </p>
        <p>
          Because of advances in medical science and rehabilitation techniques, an increasing number of people with
          disabilities recover from serious accidents and illnesses. Also, through determination and effort, many
          individuals overcome serious conditions and return to work in spite of them.
        </p>
      </>
    ),
  },
  {
    id: 'retirement-age',
    title: 'What happens to Social Security disability benefits when I reach retirement age?',
    body: (
      <>
        <p>
          If you are still getting disability benefits when you reach retirement age, your benefits will be
          automatically changed to retirement benefits, generally in the same amount. You will receive a new booklet
          explaining your rights and responsibilities as a retired person.
        </p>
        <p>
          If you are a disabled widow or widower, your benefits will be changed to the regular widow or widower benefits
          (at the same rate) at 60. You will receive a new instruction booklet that explains the rights and
          responsibilities for people who get survivor benefits.
        </p>
      </>
    ),
  },
  {
    id: 'claim-turned-down',
    title: 'What happens if Social Security turns down my claim for disability benefits?',
    body: (
      <>
        <p>
          If you disagree with SSA's decision, you can appeal it. You have 60 days to file a written appeal (either by
          mail or in person) with any Social Security office. Generally, there are four levels to the appeals process.
          They are:
        </p>
        <ul>
          <li>
            <strong>Reconsideration.</strong> Your claim is reviewed by someone who did not take part in the first
            decision.
          </li>
          <li>
            <strong>Hearing before an Administrative Law Judge.</strong> You can appear before a judge to present your
            case.
          </li>
          <li>
            <strong>Review by Appeals Council.</strong> If the Appeals Council decides your case should be reviewed, it
            will either decide your case or return it to the administrative law judge for further review.
          </li>
          <li>
            <strong>Federal District Court.</strong> If the Appeals Council decides not to review your case or disagree
            with its decision, you may file a civil lawsuit in a Federal District Court and continue your appeal to the US
            Supreme Court if necessary.
          </li>
        </ul>
        <p>
          If you disagree with the decision at one level, you have 60 days to appeal to the next level until you are
          satisfied with the decision or have completed the last level of appeal.
        </p>
        <p>
          <strong>You have two special appeal rights when a decision is made that you are no longer disabled.</strong>
        </p>
        <p>They are as follows:</p>
        <ul>
          <li>
            <strong>Disability Hearing.</strong> As part of the reconsideration process, this hearing allows you to meet
            face-to-face with the person reconsidering your case to explain why you feel you are still disabled. You can
            submit new evidence or information and bring someone who knows about your disability. This special hearing
            does not replace your right to also have a formal hearing before an administrative law judge (the second
            appeal step) if your reconsideration is denied.
          </li>
          <li>
            <strong>Continuation of Benefits.</strong> While appealing your case, you can have your disability benefits
            and Medicare coverage (if you have it) continue until an administrative law judge decides the outcome.
            However, you must request the continuation of your benefits during the first ten days of the 60 days mentioned
            earlier. If your appeal is unsuccessful, you may have to repay the benefits.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'retirement-benefits',
    title: 'Will I receive Social Security when I retire?',
    body: (
      <>
        <p>
          Retirement benefit calculations are based on your average earnings during a lifetime of work under the Social
          Security system. For most current and future retirees, The Social Security Administration (SSA) averages your
          35 highest years of earnings. Years in which you have low earnings or no earnings may be counted to bring the
          total years of earnings up to 35.
        </p>
        <p>
          You can collect early retirement benefits at age 62, but keep in mind that for anyone born from 1943 to 1954,
          the full retirement age is 66, and it increases gradually until it reaches 67 for those born in 1960 and later.
          Then you can collect additional benefits for every year you delay your retirement until age 70. After you begin
          to collect Social Security benefits, you will continue to receive them for life.
        </p>
      </>
    ),
  },
  {
    id: 'find-out-what-you-will-get',
    title: 'How can I find out what Social Security will pay me when I retire?',
    body: (
      <p>
        You can create a{' '}
        <a href="https://www.ssa.gov/myaccount/" {...external}>
          my Social Security account
        </a>{' '}
        with SSA and view your Social Security Statement online at any time.
      </p>
    ),
  },
  {
    id: 'count-on-social-security',
    title: 'Can I count on Social Security being around when I retire?',
    body: (
      <p>
        With retirement on the horizon for scores of baby boomers, Social Security will likely be in your future;
        however, the Social Security trust fund will be less and less able to pay benefit increases, which increase
        annually as the taxable wage base rises without some kind of reform.
      </p>
    ),
  },
];

export default function SocialSecurityBenefitsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-for-retirement"
      page="Social Security Benefits: Frequently Asked Questions"
      title={
        <>
          Social Security Benefits: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about Social Security disability benefits, from who qualifies and when payments begin to taxes and appeals, and about your Social Security retirement benefits."
      sections={sections}
    />
  );
}
