import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=48 (Disability Insurance: What To Look For), word
// for word. Hyphens used as dashes are now dashes.
// Address: /guides/life-events/getting-married/disability-insurance (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'worst-case',
    title: 'Planning For The Worst-Case Scenario',
    body: (
      <>
        <p>
          Many of us have life insurance; however, very few have long-term disability coverage. Yet according to
          statistics, workers are more likely to sustain a long-term disability (one lasting longer than 90 days)
          than to die early. Because long-term disability insurance is fairly expensive, people think workers'
          compensation or other sources will protect them. However, Social Security, workers' compensation, and
          employer-offered long-term coverage are often inadequate. For example, here is a typical disability
          scenario that could happen to anyone:
        </p>
        <Callout label="Example">
          <p>
            Roger Roberts, a former executive for a large company and currently self-employed as a consultant,
            earns $200,000 per year. Last year, his osteoarthritis suddenly worsened, and he could no longer bend
            his back, lift anything, or stand in one place for longer than a few minutes. Roger was forced to
            discontinue his consulting business and attempted various career changes, none of which panned out.
            Fortunately for Roger, he had taken out a disability policy years ago and had continued paying the
            $2,000 per year premiums. The policy will now pay him $20,000 per year in benefits—a badly needed
            income.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'employer',
    title: 'Employer-Provided Coverage',
    body: (
      <>
        <p>
          If your employer provides long-term disability coverage, which must usually be paid for by the
          employee, then it's a good idea to buy it. The premiums are probably discounted from what you'd pay for
          a private policy.
        </p>
        <p>
          However, look at what the employer-offered policy covers, and buy a private policy if you need it. Many
          employer-provided group policies are inadequate in that they limit either the term of the coverage or
          the amount of benefits paid. For instance, benefits may last only a few years, or benefit payments may
          represent only a small part of executive salaries. As such, check up on the following:
        </p>
        <ul>
          <li>How long does the disability coverage last?</li>
          <li>How much is the benefit?</li>
        </ul>
        <Callout label="Note">
          <p>Group plans may have a benefit cap, such as $5,000 per month. Individual plans may also have such a cap.</p>
        </Callout>
        <ul>
          <li>For what percentage of your income are you covered?</li>
        </ul>
        <Callout label="Note">
          <p>Generally, you cannot obtain insurance for more than 60 percent of your income.</p>
        </Callout>
        <ul>
          <li>Who pays the premiums?</li>
        </ul>
        <Callout label="Tip">
          <p>
            Tax-wise, you're better off paying the premiums yourself instead of having your employer pay them.
            Why? Because if you pay the premium for your disability benefits using after-tax dollars, your
            disability benefits are tax-free. On the other hand, if your employer pays the premiums using pre-tax
            dollars, your disability benefits are taxable.
          </p>
        </Callout>
        <ul>
          <li>
            If you receive bonuses or commissions, are these covered by the group policy? If not and bonuses or
            commissions make up a substantial part of your income, you'll probably need supplemental coverage.
          </li>
          <li>
            What is the definition of disability in the group policy? Own occupation, any occupation, or income
            replacement? (Please see the discussion of these three terms in the section on private policies.)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'government',
    title: 'Governmental Coverage',
    body: (
      <>
        <p>
          Workers' compensation covers injuries that happen on the job, and the amount of benefits you receive is
          based on your average salary at the time of your injury. Benefits vary widely from state to state since
          benefit amounts depend on state provisions. Most states pay benefits for the employee's lifetime in cases
          of permanent total disability.
        </p>
        <Callout label="Tip">
          <p>To get details on workers' comp benefits, contact your state's Department of Labor.</p>
        </Callout>
        <p>
          Veterans whose disability is related to a service-related injury may be eligible for disability benefits
          in certain states. If you are a veteran, find out whether a disability fund exists in your state.
        </p>
        <p>
          Social Security provides long-term disability coverage. However, more than half of the individuals who
          apply for Social Security disability are denied coverage, and the system leaves many gaps. Further, the
          average monthly payment has been around the $1,500 to $1,700 range in recent years, which may not be
          adequate for many individuals.
        </p>
      </>
    ),
  },
  {
    id: 'private-policy',
    title: 'What To Look For In A Private Policy',
    body: (
      <p>
        If you decide you need supplemental coverage, here are some things to look for in a private policy, as
        well as some suggestions for getting the most for your money.
      </p>
    ),
  },
  {
    id: 'income-level',
    title: 'Be Ready To Prove Your Income Level',
    body: (
      <p>
        A disability insurance company will usually not cover you for more than 66 2/3 percent of your income.
        Look for a policy that provides coverage for this level. When you shop for a disability policy, be ready to
        prove your income level.
      </p>
    ),
  },
  {
    id: 'definition',
    title: 'Watch Out For The "Definition Of Disability"',
    body: (
      <>
        <p>
          The definition of disability in a policy is extremely important. It tells you under what circumstances
          you will qualify to receive benefits.
        </p>
        <p>
          <strong>Own-occupation coverage</strong> pays benefits if you can't work in your chosen field, for
          example, attorney or teacher. Own-occupation policies are the most expensive type of disability coverage
          because they provide the broadest coverage. (If you cannot perform the duties of your occupation, you can
          take a job in a related field, make a decent income, and still collect the benefits.)
        </p>
        <p>
          <strong>Any-occupation coverage</strong> pays benefits if you can't work at any occupation for which
          your education level and training have prepared you. Thus, if you can no longer perform the duties of a
          nuclear physicist but can teach physics at the college level, you will not receive benefits.
        </p>
        <p>
          <strong>Income-replacement policies</strong>, which are less expensive than own-occupation or any
          occupation, replace whatever portion of your income you are no longer able to earn.
        </p>
      </>
    ),
  },
  {
    id: 'waiting-period',
    title: 'Waiting Period',
    body: (
      <p>
        The longer the waiting period before benefits kick in, the less your premium will be. If you have adequate
        sick leave, short-term disability, and an emergency fund, and can support a longer waiting period, choose a
        policy with a longer waiting period. Waiting periods are typically 30 to 90 days long but can be as long as
        26 weeks.
      </p>
    ),
  },
  {
    id: 'how-long',
    title: 'How Long Will Coverage Last?',
    body: (
      <p>
        It's a good idea to get a benefit period that lasts until the age you start receiving Social Security
        payments. Be aware that many policies cover you for only two to five years, an inadequate period. Unless you
        are so young that you haven't yet had time to qualify for Social Security, a policy that provides lifetime
        benefits at costly premiums is generally not worth it.
      </p>
    ),
  },
  {
    id: 'residual-benefits',
    title: 'Residual Benefits',
    body: (
      <>
        <p>
          If you are able to work only part-time instead of your previous full-time hours, will you receive
          benefits? Unless your policy states that you are entitled to residual benefits, you won't receive
          anything unless you are totally disabled and unable to work.
        </p>
        <Callout label="Note">
          <p>Residual benefits may be added on as a rider in some policies.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'noncancellable',
    title: 'Noncancellable vs. Guaranteed Renewable',
    body: (
      <p>
        The difference between these two terms is very important. If a policy is "noncancellable," you will pay a
        fixed premium throughout the contract term. Your premium will not go up for the term of the contract. If it
        is "guaranteed renewable," your premiums could go up.
      </p>
    ),
  },
  {
    id: 'riders',
    title: 'Riders and Options',
    body: (
      <>
        <p>Riders and options are additions to policies and cost extra.</p>

        <h3>Increasing Coverage</h3>
        <p>
          An option to increase coverage gives you the ability to buy more coverage without being turned down for
          health reasons. You will pay about 10 percent of your premium to have this option.
        </p>

        <h3>Cost-Of-Living</h3>
        <p>The cost-of-living rider, which can add 20 to 40 percent to your premium, pays you increased benefits after you become disabled.</p>

        <h3>Social Security</h3>
        <p>If you qualify for Social Security disability, the insurer gets to decrease your coverage.</p>
        <Callout label="Tip">
          <p>Take this rider if it is available. It will save you money on your premium.</p>
        </Callout>

        <h3>Waiver-of-Premium</h3>
        <p>This important rider allows you to stop paying premiums once you become disabled.</p>
        <Callout label="Tip">
          <p>Weigh the cost of the waiver-of-premium rider against the cost of continuing to pay the premiums after disability.</p>
        </Callout>

        <h3>Return-of-Premium</h3>
        <p>This option allows you some cash back if you do not collect on your disability coverage after a certain amount of time.</p>
        <Callout label="Tip">
          <p>This rider is too expensive, generally about 50 percent of your premium. Don't take it.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'insurer',
    title: 'Check Out Your Insurer',
    body: (
      <p>
        Before buying a policy, check the financial soundness of your insurer. If your insurer goes bankrupt, you
        may have to shop for a policy later in life, when premiums are more expensive.
      </p>
    ),
  },
  {
    id: 'premium-tips',
    title: 'Premium-Reducing Tips',
    body: (
      <ul>
        <li>
          Try to get disability insurance on a low-load (commission) basis. Look at the policies offered by
          independent agents, but don't buy insurance from an insurer that doesn't check out as financially sound.
        </li>
        <li>
          If you're young, consider buying an annual renewable disability income policy similar to term life
          insurance. Then, when you are older and more able to afford the policy, convert it to a permanent policy.
        </li>
        <li>Try to get group coverage from a trade association or other organization you belong to.</li>
        <li>If you're female, look for an insurer with unisex pricing. Otherwise, women will generally pay higher premiums.</li>
        <li>Investigate discounts that may be available.</li>
      </ul>
    ),
  },
];

export default function DisabilityInsurance() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Disability Insurance"
      title={
        <>
          Disability Insurance: <em>What To Look For</em>
        </>
      }
      lead="Have you neglected to protect what could be your most important financial asset? For many individuals, it's not their home or portfolio—it's earning power. And you can protect this asset with long-term disability insurance. This Financial Guide provides you with information to assist you in determining how much disability insurance you should have."
      sections={sections}
    >
      <p>
        Even if your employer provides you with disability coverage, it's vital to examine the terms and conditions
        of that coverage since it may not provide you with adequate coverage to meet your needs. For example, if you
        couldn't work, how long could you continue to pay your bills? Chances are, whatever employer-provided and
        government-provided coverage you have is inadequate, and you need private disability coverage.
      </p>
    </GuideArticle>
  );
}
