import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=152 (Long-Term Care Insurance: Frequently Asked
// Questions), word for word. Each question is worded as in the library's answers, not its table of
// contents, which differs in places ("Is it worthwhile buying "dread disease" insurance, and other
// types of special health insurance?"). Hyphens used as dashes are now dashes, "M. Best" is
// "A.M. Best", the stray semicolon in "a long nursing home stay and; for people" now follows
// "stay", and the "Example:" lead-in is the box's label. The library's page has no introduction, so
// the banner's opening line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/buying-insurance/long-term-care-insurance-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'should-i-buy',
    title: 'Should I buy long-term care insurance?',
    body: (
      <>
        <p>
          Long term care insurance (LTCI) is both complex and controversial. It covers certain nursing home costs and
          sometimes home health care. Here is a summary of some of the main points for and against purchasing such
          coverage.
        </p>
        <h3>Reasons Against:</h3>
        <ul>
          <li>
            Inability to afford the premiums, or not having enough assets to protect. In such a case, the individual
            will quickly qualify for Medicaid.
          </li>
          <li>
            Some LTCI policies lack sufficient home care coverage to keep an individual out of a nursing home unless
            family members or informal caregivers are available to help in providing care. Thus, if your goal is to
            avoid nursing homes at all costs, LTCI may not be the best way to go.
          </li>
          <li>
            LTCI policies return from 60 percent to 65 percent of total premiums paid in benefits. This is much less
            than returns from other types of health insurance.
          </li>
          <li>The fact that LTCI policies are improving: In a few years, you may be able to get a better deal.</li>
        </ul>
        <h3>Reasons For:</h3>
        <ul>
          <li>
            LTCI, although expensive, may provide protection against costly care. While the premiums may be wasted if
            you never need long-term care if you do need the care the insurance can effectively pay back your premiums
            many times over.
          </li>
          <li>
            If you have family caregivers, the extra home care coverage in LTCI might make it possible to remain at
            home longer.
          </li>
          <li>
            LTCI premium costs increase with age. Once you develop a serious medical condition, you probably won't
            qualify for coverage. Thus, it is better to buy LTCI early in the game if at all.
          </li>
        </ul>
        <h3>Some Guidelines</h3>
        <p>Do not buy long-term care insurance unless all of the following apply to you:</p>
        <ul>
          <li>
            Each person in the household has more than $75,000 in assets (not counting the value of the primary
            residence)
          </li>
          <li>Your annual retirement income per person in the household is over $30,000</li>
          <li>You can pay premiums without having to "go without"</li>
          <li>
            You could continue to afford the premiums, even if they increased by 20 percent or 30 percent in the future
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'alternatives',
    title: 'What are the alternatives to long-term care insurance?',
    body: (
      <>
        <p>Here are some options for paying for long-term care, along with their advantages and drawbacks:</p>
        <h3>Applying For Medicaid</h3>
        <p>
          Eligibility rules vary from state to state, but beneficiaries are generally required to "spend down" their
          income and assets to qualify. New laws in many states make it possible for the spouses of Medicaid nursing
          home residents to keep more income and assets than previously allowed.
        </p>
        <h3>Reverse Mortgage, Equity Conversion</h3>
        <p>
          Reverse mortgages and other forms of home equity conversion are often viable alternatives for those who wish
          to remain at home. Seniors borrow money against the equity in their homes and defer repayment until they die
          or sell their house. However, for these options to make sense, a home must have a high monetary value and be
          fully or mostly paid for, and the individual must intend to stay in the home for the long term.
        </p>
        <h3>Self Insurance</h3>
        <p>
          Self-insurance—paying for costs if they arise—is a gamble but is the current strategy of choice for the
          majority. Self-insurance makes the most sense for people with major assets; for those who can afford a long
          nursing home stay; and for people of modest means, who would quickly qualify for Medicaid anyway.
        </p>
      </>
    ),
  },
  {
    id: 'cost',
    title: 'How much does long-term care insurance cost?',
    body: (
      <>
        <p>
          Premiums for LTCI vary greatly, depending on your age at the time of purchase, the comprehensiveness of the
          coverage, and the company selling the plan.
        </p>
        <p>
          According to the 2023 Long-Term Care Insurance Price Index survey published by the American Association for
          Long-Term Care Insurance (AALTCI), a traditional policy valued at $165,000 in benefits can cost $900 annually
          for a 55-year-old male. The equivalent coverage for a 55-year-old woman is $1,500. A couple both age 65 could
          expect to pay $3,750 combined. The two policies could provide each with $165,000 of future benefits. Adding
          an option that increased future benefits (inflation protection) by three percent annually would cost the
          couple almost twice as much ($7,150 combined). Costs vary significantly from insurer to insurer even for
          identical policies so it's always a good idea to shop around.
        </p>
        <p>
          But, no matter how good a policy sounds, it's worth little if the company won't be there when it comes time
          to pay, so you should always buy from a company with strong financial reserves. Unfortunately, there is no
          foolproof method for determining which companies are financially strong. However, it pays to look up a
          company's rating by A.M. Best or Standard and Poor's, both of which evaluate the financial health of
          insurance companies.
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
    id: 'what-to-look-for',
    title: 'What should I look for in a long-term care insurance policy?',
    body: (
      <>
        <p>When you compare long-term care insurance policies, consider the following:</p>
        <p>
          <strong>Flexibility.</strong> A policy that covers nursing homes should also cover assisted living, a better
          alternative for many people who can no longer live on their own. If you want a policy with home care, look
          for one that offers a full range of community-based services, including adult daycare, or that pays you a
          monthly cash allowance to spend as you please for care.
        </p>
        <p>
          <strong>Eligibility.</strong> Look for a policy that bases eligibility on the need for help with activities
          of daily living. Policies that only pay for "medically necessary" care are not usually a good buy. To be sure
          you are covered for Alzheimer's disease, choose a policy that covers cognitive as well as physical disability
          and pays benefits if you meet either criterion.
        </p>
        <p>
          <strong>Inflation.</strong> If you purchase a policy before the age of 75, inflation protection is essential
          to ensure adequate coverage when you need long-term care at some point in the future. Buy a policy that has
          an additional cost but automatically increases benefits at the rate of 5 percent annually.
        </p>
        <p>
          <strong>Duration.</strong> Keep in mind that the chances of needing long-term care for five years or longer
          are relatively small. For most people, a policy covering two or three years will be more cost-effective.
        </p>
      </>
    ),
  },
  {
    id: 'do-i-need',
    title: 'Do I need long-term care insurance?',
    body: (
      <>
        <p>
          A study by the U.S. Department of Health and Human Services says that people who reach age 65 will likely
          have a 40 percent chance of entering a nursing home; however, the risk of needing nursing home care before
          age 75 is relatively low. Also, most people will not need nursing home care for longer than a year.
        </p>
        <p>
          Your chances of needing long-term care vary with your age, health, family history and longevity, exercise
          habits, diet, smoking, and gender. Women are at higher risk because they live longer.
        </p>
      </>
    ),
  },
  {
    id: 'how-it-works',
    title: 'How does long-term care insurance work?',
    body: (
      <>
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
          The older the covered individual, the higher the premium. For instance, premiums for a set amount of coverage
          for a 70-year-old individual are about three times those that would apply to a 50-year-old.
        </p>
        <p>
          Most long-term care policies are indemnity-type policies, meaning they will pay (up to the policy's limits)
          for actual charges by the care provider. Some long-term care policies, instead of being based on indemnity,
          pay daily benefit amounts to the insured rather than paying for actual charges. The latter type of policy
          offers insureds greater flexibility, allowing them to pay for home care for example, and less paperwork.
        </p>
      </>
    ),
  },
  {
    id: 'elimination-period',
    title: 'In a long-term care policy, what is the elimination period?',
    body: (
      <p>
        This period constitutes the number of days the insured must wait after becoming eligible for benefits before
        coverage actually begins. The elimination period can range from zero to 90 days, or up to one year. The longer
        the elimination period, the lower the premium is.
      </p>
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
    id: 'comparison-shop',
    title: 'Should I comparison shop for long-term care insurance coverage?',
    body: (
      <>
        <p>
          Seek independent advice before buying. You might find such guidance from a financial advisor; an elder-law
          attorney; government-funded counseling and information services; or consumer organizations.
        </p>
        <Callout label="Tip">
          <p>
            Use a local independent agent or broker who has been recommended by someone reliable. Don't buy from an
            agent who sells door-to-door.
          </p>
        </Callout>
        <p>
          <strong>Read the policy from cover to cover;</strong> don't rely on marketing literature.
        </p>
        <p>
          <strong>Don't be pressured to buy the first policy you see.</strong> Compare it with at least two others.
        </p>
        <Callout label="Tip">
          <p>
            Don't pay more than one month's premium when you apply for coverage. In most states, after you buy a
            policy, you have thirty days to change your mind and get a refund.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'special-health-insurance',
    title: 'Is it worthwhile buying special types of health insurance?',
    body: (
      <>
        <p>
          You may receive solicitations in the mail for the following types of health insurance, or you may run across
          ads for them. They are to be avoided at all costs.
        </p>
        <Callout label="Note">
          <p>
            We realize that there are worthwhile policies out there that fall into the categories we talk about. But we
            bring your attention to these categories so that you will be wary of them, and will not buy without careful
            research.
          </p>
        </Callout>
        <ul>
          <li>
            <strong>Dread-Disease Insurance.</strong> This limited coverage insures against only one specific disease.
            Further, if you already have this disease (i.e., have been diagnosed) at the time you buy the policy, you're
            not covered.
          </li>
          <li>
            <strong>Hospital Indemnity Insurance.</strong> "Indemnity" insurance means that the policy will pay (up to
            the policy's limits) for actual charges by the care provider, as opposed to paying daily benefit amounts to
            the insured regardless of actual charges. The typical "hospital indemnity" policy will provide a very small
            amount of coverage per day, and is not worth it.
          </li>
          <li>
            <strong>Medical-Surgical Insurance.</strong> This type of coverage also provides limited payments, and only
            for specified procedures.
          </li>
          <li>
            <strong>Insurance Sold Through the Mail and On Television.</strong> Many policies sold through television
            advertisements and mail solicitations have the following negative attributes: They tend to cover accidents
            but not illness; they start out with low premiums that later rise unreasonably; they deny claims more than
            other types of insurance; and they tend to exclude pre-existing conditions.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'disability-insurance',
    title: 'Do I need disability insurance? How can I ensure I have adequate coverage?',
    body: (
      <>
        <p>
          If you have dependents, you've probably made sure that you have adequate life insurance coverage. But what
          about disability coverage? Although the incidence of permanent or temporary disability during the average
          individual's prime earning years is fairly high, many people neglect to adequately insure against this risk.
        </p>
        <p>
          Disability insurance generally provides you with an income stream in case you are unable to earn income due
          to illness or accident. Here are some questions that will get you started in making sure you have adequate
          coverage.
        </p>
        <ul>
          <li>
            What does your employer provide? Find out what types (if any) of disability coverage are provided. If no
            coverage is provided, you may be able to purchase coverage through your employer.
          </li>
          <li>
            Is the employer or state-provided coverage adequate? Find out how much you will receive under any existing
            coverage you have. If the amount you will receive is not enough to support your family during an illness or
            other disability, you may wish to supplement it.
          </li>
        </ul>
        <p>If employer and government coverage is insufficient you should purchase a private disability policy.</p>
        <p>Before you buy a disability policy, check out the following factors:</p>
        <ol>
          <li>Make sure the policy can be renewed every year.</li>
          <li>Make sure that if you are able to work part-time when disabled, you will still receive benefits.</li>
          <li>
            Choose as policy with a three to six-month waiting period, since it will be less costly, and set aside an
            emergency fund to cover the waiting period.
          </li>
          <li>
            Be sure the policy covers you until you reach age 65, at which time you can obtain full Social Security
            benefits.
          </li>
          <li>Be sure the policy pays when you can't perform work in your own field.</li>
        </ol>
      </>
    ),
  },
];

export default function LongTermCareInsuranceFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-insurance"
      page="Long-Term Care Insurance: Frequently Asked Questions"
      title={
        <>
          Long-Term Care Insurance: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about whether to buy long-term care insurance, its alternatives and cost, what to look for in a policy, choosing an insurer, and disability coverage."
      sections={sections}
    />
  );
}
