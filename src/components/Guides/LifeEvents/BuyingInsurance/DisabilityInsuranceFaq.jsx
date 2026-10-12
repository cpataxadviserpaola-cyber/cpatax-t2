import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=148 (Disability Insurance: Frequently Asked
// Questions), word for word. The library's page hides one question ("Do I need long-term care
// insurance?") and so does this one. Double hyphens are now dashes, and the "Tip:", "Note:" and
// "Example:" lead-ins are the boxes' labels. The library's page has no introduction, so the
// banner's opening line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/buying-insurance/disability-insurance-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'own-policy',
    title: 'Should I purchase my own disability insurance policy?',
    body: (
      <>
        <p>
          Many of us have life insurance, however very few of us have long-term disability coverage. Yet according to
          statistics, workers are more likely to sustain a long-term disability (one lasting longer than 90 days) than
          die at an early age.
        </p>
        <p>
          Long-term disability insurance is fairly expensive, and people tend to think that they will be protected by
          workers' compensation or other sources. However, Social Security, workers' compensation, and
          employer-offered long-term coverage are often inadequate.
        </p>
      </>
    ),
  },
  {
    id: 'how-much',
    title: 'How much disability insurance should I have?',
    body: (
      <p>
        A disability insurance company will usually not cover you for more than 60 percent of your income. Look for a
        policy that provides coverage for this level. When you shop for a disability policy, be ready to prove your
        income level. If you purchase the policy and pay the premiums yourself, the income received will not be
        taxable. Therefore, 60 percent should come close to replacing your after-tax income.
      </p>
    ),
  },
  {
    id: 'workers-compensation',
    title: 'What does workers compensation insurance cover?',
    body: (
      <>
        <p>
          Worker's compensation covers injuries that happen on the job. Benefits vary widely from state to state but
          typically are equivalent to 66.67 percent of the average weekly wage for the previous 52 weeks. In addition,
          most states pay benefits for the employee's lifetime in cases of permanent total disability.
        </p>
        <Callout label="Tip">
          <p>To get details on worker's comp benefits, contact your state Department of Labor.</p>
        </Callout>
        <p>
          In addition to the requirement that an injury is work-related, the payments you would receive under
          worker's comp may be inadequate.
        </p>
      </>
    ),
  },
  {
    id: 'disability-defined',
    title: 'How is disability defined?',
    body: (
      <>
        <p>
          The definition of disability in a policy is extremely important. It tells you under what circumstances you
          will qualify to receive benefits.
        </p>
        <p>
          Own-occupation coverage pays benefits if you can't work in your chosen field—if you are an attorney or
          teacher, for example. Own-occupation policies are the most expensive type of disability coverage because they
          provide the broadest coverage. Generally, if you cannot perform the duties of your own occupation, you can
          take a job in a related field, make a decent income, and still collect the benefits.
        </p>
        <p>
          Any-occupation coverage pays benefits if you can't work at any occupation for which your education level and
          training has prepared you. Therefore, if you can no longer perform the duties of a nuclear physicist, but you
          can teach physics at college level, you will not receive benefits.
        </p>
        <Callout label="Note">
          <p>Many policies are own-occupation for a period of years, at which point they convert to any-occupation.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'long-term-care',
    title: 'How does long-term care insurance work?',
    body: (
      <>
        <p>
          By 2020, 12 million older Americans will need long-term care. Most will be cared for at home; family and
          friends are the sole caregivers for 70 percent of the elderly. A study by the U.S. Department of Health and
          Human Services says that people who reach age 65 will likely have a 40 percent chance of entering a nursing
          home. About 10 percent of the people who enter a nursing home will stay there five years or more.
        </p>
        <p>
          Your chances of needing long-term care vary with your age, health, family history and longevity, exercise
          habits, diet, smoking, and gender; however, women are often at higher risk simply because they live longer.
        </p>
        <p>
          Long-term care insurance policies pay a set dollar amount per day for covered care during the benefit period
          stated in the policy.
        </p>
        <Callout label="Example">
          <p>
            You choose a policy that pays $160 per day for five years. The maximum that policy will pay is $292,000
            ($160 per day, times 365 days, times 5 years).
          </p>
        </Callout>
        <p>
          The older the individual covered, the higher the premium is. For instance, premiums for a set amount of
          coverage on a 70-year-old individual are about three times those that would apply to a 50-year-old.
        </p>
        <p>
          Most long-term care policies are indemnity-type policies, meaning they will pay (up to the policy's limits)
          for actual charges by the care provider. Some long-term care policies, instead of being based on indemnity,
          pay daily benefit amounts to the insured rather than paying for actual charges. The latter type of policy
          offers insureds greater flexibility (e.g., allowing them to pay for home care) and less paperwork.
        </p>
      </>
    ),
  },
  {
    id: 'elimination-period',
    title: 'In a long-term care policy, what is the elimination period?',
    body: (
      <>
        <p>
          This period constitutes the number of days the insured must wait after becoming eligible for benefits before
          coverage actually begins.
        </p>
        <p>
          The elimination period can range from zero to 90 days, or up to one year. The longer the elimination period,
          the lower the premium is.
        </p>
      </>
    ),
  },
  {
    id: 'select-provider',
    title: 'How should I select a long-term care insurance provider?',
    body: (
      <>
        <p>
          If you decide that long-term care insurance (LTCI) is your best option, it is important to shop around for
          the right company. Some states have enacted important consumer protections in the LTCI area, while others
          have not. Do not assume the company is a safe bet just because it is licensed by the state insurance
          department to sell LTCI.
        </p>
        <p>
          No matter how good a policy sounds, it is worth little if the company won't be there when it comes time to
          pay. Buy from a company with strong financial reserves. Unfortunately, there is no foolproof method for
          determining which companies are financially strong. However, it pays to look up a company's rating by A.M.
          Best or Standard and Poor's, both of which evaluate the financial health of insurance companies.
        </p>
        <Callout label="Tip">
          <p>
            Purchase long-term care insurance from a company that has an A+ or A++ rating from Best or an A, AA, or AAA
            rating from Standard and Poor's. Most public libraries have these references.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'medicaid',
    title: 'When can I qualify for Medicaid insurance?',
    body: (
      <>
        <p>
          Eligibility rules vary from state to state, but beneficiaries are generally required to "spend down" their
          income and assets to qualify. New laws in many states make it possible for the spouses of Medicaid nursing
          home residents to keep more income and assets than previously allowed.
        </p>
        <p>
          By law, nursing homes cannot discriminate against Medicaid patients, but in reality, many keep "waiting
          lists" for them while enrolling patients with more income and assets. Medicaid coverage for home care is very
          limited in most states.
        </p>
      </>
    ),
  },
];

export default function DisabilityInsuranceFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-insurance"
      page="Disability Insurance: Frequently Asked Questions"
      title={
        <>
          Disability Insurance: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about buying disability insurance, how much coverage to have, how disability is defined, and how long-term care insurance and Medicaid work."
      sections={sections}
    />
  );
}
