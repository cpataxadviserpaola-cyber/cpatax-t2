import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=50 (Long-Term Care Insurance: How To Get The Best Deal),
// word for word. Back-to-top anchors omitted (handled by layout). The Self-Insurance sentence
// is as the library has it ("Even though … is a gamble even though it is …").
// Address: /guides/life-events/buying-insurance/long-term-care-insurance (articlePages in src/data/guides.js).

const related = guide('life-events.php');

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'how-ltci-works',
    title: 'How LTCI Works',
    body: (
      <>
        <p>
          Long-term care insurance policies pay a set dollar amount per day for covered care
          during the benefit period stated in the policy. Most long-term care policies are
          indemnity-type policies, meaning they will pay you for actual charges by the care provider
          (up to the policy's limits). Other long-term care policies, instead of being based on
          indemnity, pay daily benefit amounts to the insured rather than paying for actual charges.
          The latter type of policy offers insurers greater flexibility (e.g., allowing them to pay
          for home care) and less paperwork.
        </p>
        <p>
          You also need to keep in mind that it's necessary to plan ahead and sign up for long-term
          care insurance before you need it because the older the individual covered, the higher the
          premium is.
        </p>

        <h3>When are Benefits Paid?</h3>
        <p>
          To receive benefits, you must usually suffer serious cognitive impairment or be unable to
          perform several "activities of daily living" independently. Long-term care insurance
          covers activities of daily living (ADLs) without assistance, such as eating, bathing,
          dressing, continence, toileting (moving on and off the toilet), and transferring (moving in
          and out of bed).
        </p>

        <h3>Period of Payment</h3>
        <p>
          The benefit period you choose can range from one year to life; the longer the period, the
          higher the premium will be.
        </p>
        <Callout label="Tip">
          <p>
            About 10 percent of the people who enter a nursing home will stay there five years or
            more. Purchase at least three to five years of coverage, the average length of a nursing
            home stay.
          </p>
        </Callout>

        <h3>Types of Care Covered</h3>
        <p>
          Most policies cover skilled care, intermediate care, and custodial care at a nursing
          facility. Home care may also be covered or offered as an extra. You may also be able to
          purchase coverage for adult day care, assisted living facilities or hospices.
        </p>
        <p>
          Most, but not all, long-term care policies can help cover costs incurred during a nursing
          home stay, assisted living residence, in-home care, informal care, custodial care,
          Alzheimer's facilities, and respite and hospice care.
        </p>

        <h3>Elimination Period</h3>
        <p>
          This period constitutes the number of days the insured must wait after becoming eligible
          for benefits before coverage actually begins. The elimination period generally ranges
          from zero to 90 days, but can go up to one year; the longer the elimination period, the
          lower the premium is. During the waiting period, you must pay all of the expenses related to
          your care.
        </p>

        <h3>Renewability</h3>
        <p>
          Most policies are guaranteed to be renewable. However, rates are generally not guaranteed
          and can be raised for a class of policyholders with the approval of the state insurance
          commission.
        </p>

        <h3>Rising Health Care Costs</h3>
        <p>
          A fixed-benefit policy will lose much of its protective ability over a 10 to 20 year
          period. Thus, if you purchase a policy at age 60 and expect to rely on it for 20 years, you
          need inflation protection. This is available with most policies in the form of "benefit
          increase options" of various types. Benefit Increase Options are also known as automatic
          benefit increase option, automatic increase benefit, and cost of living adjustment benefit.
          They provide for annual increases in the benefit amount to offset the effects of inflation
          and are paid for at the time the policy is issued.
        </p>
      </>
    ),
  },
  {
    id: 'why-purchase',
    title: 'Why Purchase LTCI',
    body: (
      <>
        <p>Here are the reasons most often given by insured for purchasing LTCI:</p>
        <ul>
          <li>To avoid being a burden to their families</li>
          <li>To conserve assets for heirs</li>
          <li>To be able to get into the nursing home of their choice</li>
          <li>To be cared for at home as long as possible</li>
          <li>To preserve quality of life</li>
          <li>To have peace of mind</li>
        </ul>
        <p>
          LTCI may not be the best way to achieve these goals. There are alternatives to obtaining
          LTCI that are more suitable for certain people.
        </p>
      </>
    ),
  },
  {
    id: 'pros-and-cons',
    title: 'The Pros And Cons',
    body: (
      <>
        <p>
          Long-term care insurance is both complex and controversial. Today, experts are suggesting
          that long-term care insurance may not be right for everyone, for instance, people whose net
          worth is at least $400,000 (excluding their home) might want to skip LTCI. The choice is
          yours, however, so here is a summary of some of the main points for and against purchasing
          such coverage.
        </p>

        <h3>Reasons for Buying LTCI</h3>
        <ul>
          <li>
            LTCI, although expensive, may provide protection against costly care. Thus, if other
            options are not viable, LTCI may be the way to meet your goals. Although LTCI policies
            remain a low-value product, they are better than nothing.
          </li>
          <li>
            If you have family caregivers, the extra home care coverage in LTCI might make it
            possible to remain at home longer.
          </li>
          <li>
            LTCI premium costs increase with age. Once you develop a serious medical condition, you
            probably will not qualify for coverage. Thus, it is better to buy LTCI early, if at all.
          </li>
        </ul>

        <h3>Reasons against Buying LTCI</h3>
        <ul>
          <li>
            You cannot afford the premiums or don't have enough assets to protect. The National
            Association of Insurance Commissioners recommends spending only 5 percent of your
            income on an LTCI policy.
          </li>
          <li>
            LTCI policies lack sufficient home care coverage to keep an individual out of a nursing
            home unless family members or informal caregivers are available to help in providing
            care. Thus, if your goal is to avoid nursing homes at all costs, LTCI may not be the
            best way to go.
          </li>
          <li>
            LTCI policies return from 60 percent to 65 percent of total premiums paid in benefits.
            This return rate is much less than returns from other types of health insurance.
          </li>
          <li>
            Those with assets over $2 million are better off going the self-insured route or simply
            paying costs as they come up.
          </li>
        </ul>

        <Callout label="Tip">
          <p>
            Refuse to pay more than one month's premium when you apply for coverage. In most
            states, after you buy a policy, you have 30 days to change your mind and get a refund.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'other-alternatives',
    title: 'Other Alternatives',
    body: (
      <>
        <p>
          Here are some options for paying for long-term care, along with their advantages and
          drawbacks:
        </p>

        <h3>Transferring Assets</h3>
        <p>
          Giving away assets to qualify for Medicaid may make sense for some people who want to leave
          their heirs an inheritance. The downside of giving away assets is that there is less
          flexibility and fewer resources to pay for care.
        </p>
        <p>
          The Medicaid program provides coverage for long-term care services for individuals who are
          unable to afford it. In the past, some people gave away their assets to qualify for Medicaid
          and make sure their heirs received an inheritance; however, the passage of the Deficit
          Reduction Act of 2005 introduced new rules that discourage the improper transfer of assets
          to gain Medicaid eligibility and receive long-term care services.
        </p>
        <p>
          As such, for anyone who transferred assets in order to become eligible for Medicaid, there
          is a period of ineligibility depending on the date of transfer. For individuals
          transferring assets before February 8, 2006, state Medicaid officials only look at
          transfers made within the 36 months prior to the Medicaid application (60 months if the
          transfer was made to or from certain kinds of trusts). For anyone who transferred assets
          after February 8, 2006, date, the period is 60 months.
        </p>
        <p>
          In addition, assets transferred, sold, or gifted for less than they are worth by
          individuals in long-term care facilities or receiving home and community-based waiver
          services, by their spouses, or by someone else acting on their behalf are prohibited for
          purposes of establishing Medicaid eligibility. This is referred to as transfers of
          assets for less than fair market value.
        </p>
        <p>
          So called "Medicaid trusts" are another option. However, recent changes in federal law make
          it more difficult to have a trust and still qualify for Medicaid. Recent policy states the
          following:
        </p>
        <p>
          Where an individual, his or her spouse, or anyone acting on the individual's behalf,
          establishes a trust using, at least, some of the individual's funds, that trust can be
          considered available to the individual for purposes of determining eligibility for
          Medicaid.
        </p>
        <p>
          Certain trusts are not counted as being available to the individual. They include the
          following:
        </p>
        <ul>
          <li>
            Trusts established by a parent, grandparent, guardian, or court for the benefit of an
            individual who is disabled and under the age of 65, using the individual's own funds.
          </li>
          <li>
            Trusts established by a disabled individual, parent, grandparent, guardian, or court for
            the disabled individual, using the individual's own funds, where the trust is made up of
            pooled funds and managed by a non-profit organization for the sole benefit of each
            individual included in the trust.
          </li>
          <li>
            Trusts composed only of pension, Social Security, and other income of the individual, in
            states which make individuals eligible for institutional care under a special income
            level, but do not cover institutional care for the medically needy.
          </li>
        </ul>
        <p>
          In all of the above instances, the trust must provide that the state receives any funds,
          up to the amount of Medicaid benefits paid on behalf of the individual, remaining in the
          trust when the individual dies.
        </p>
        <p>
          A trust will not be counted as available to the individual where the State determines that
          counting the trust would work an undue hardship.
        </p>

        <h3>Reverse Mortgage or Equity Conversion</h3>
        <p>
          Reverse mortgages and other forms of home equity conversion are often viable alternatives
          for those who wish to remain at home. Seniors can borrow money against the equity in their
          homes and defer repayment until they die or sell their house. However, for these options to
          make sense, a home must have a high monetary value and be fully or mostly paid for.
          Moreover, the individual must intend to stay in the home for the long-term.
        </p>
        <RelatedGuide guide={related([96, 'Reverse Mortgages: How They Can Enhance Your Retirement'])}>
          Please see the Financial Guide
        </RelatedGuide>

        <h3>Other Sources of Income</h3>
        <p>
          Developing other income sources is an option that many older persons overlook. If you are
          retired, you might want to get a part-time job. If you are currently working, you might
          work a few years longer than you had planned. You might consider either renting part of
          your home or selling your current home in order to invest the proceeds.
        </p>

        <h3>Self-Insurance</h3>
        <p>
          Even though self-insurance—paying for costs yourself if they arise—is a gamble even though
          it is the current strategy of choice for most people. Self-insurance makes the most sense for people
          with major assets ($2 million or more), for those who can afford a long nursing home stay,
          and for people of modest means (under $400,000) who would quickly qualify for Medicaid
          anyway.
        </p>
      </>
    ),
  },
  {
    id: 'can-you-afford',
    title: 'Can You Afford LTCI?',
    body: (
      <>
        <p>
          Premiums for LTCI vary greatly, depending on your age at the time of purchase, the
          comprehensiveness of the coverage, and the company selling the plan.
        </p>
        <p>
          According to the 2023 Long-Term Care Insurance Price Index survey published by the American
          Association for Long-Term Care Insurance (AALTCI), a traditional policy valued at $165,000
          in benefits can cost $900 annually for a 55-year-old male. The equivalent coverage for a
          55-year-old woman is $1,500. A couple both age 65 could expect to pay $3,750 combined. The
          two policies could provide each with $165,000 of future benefits. Adding an option that
          increased future benefits (inflation protection) by three percent annually would cost the
          couple almost twice as much ($7,150 combined). Costs vary significantly from insurer to
          insurer even for identical policies so it's always a good idea to shop around.
        </p>
        <p>Here are some general guidelines that suggest buying LTCI:</p>
        <ul>
          <li>Your net worth is more than $400,000 (not counting the value of the primary residence)</li>
          <li>You can pay premiums without having to "go without"</li>
          <li>
            You could continue to afford the premiums, even if they increased by 20 or 30 percent in
            the future.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            Long-term care premiums are tax deductible. For example, if you are between 60 and 70
            years of age in 2023, you can deduct up to $4,770 (up from $4,510 in 2022).
          </p>
        </Callout>
        <RelatedGuide guide={related([49, "Disability Benefits: How To Get All You're Entitled To"])}>
          Consider the possibility of receiving benefits under a disability policy, please see the
          Financial Guide
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'select-an-insurer',
    title: 'How To Select An Insurer',
    body: (
      <>
        <p>
          If you decide that LTCI is your best option, it is important to shop around for the right
          company. Some states have enacted important consumer protections in the LTCI area while
          others have not. Do not assume that a company is a safe bet just because it is licensed by
          the state insurance department to sell LTCI.
        </p>
        <Callout label="Tip">
          <p>
            Seek independent advice from your financial advisor before buying. Use a local
            independent agent or broker who has been recommended by someone reliable. Do not buy
            from an agent who sells door-to-door.
          </p>
        </Callout>
        <p>
          No matter how good a policy sounds, it is worth little if the company won't be there when it
          comes time to pay. Buy from a company with strong financial reserves. Unfortunately, there
          is no foolproof method for determining which companies are financially strong. However, it
          pays to look up a company's rating by A.M. Best or Standard and Poor's, both of which
          evaluate the financial health of insurance companies.
        </p>
        <Callout label="Tip">
          <p>
            Purchase long-term care insurance from a company that has an A+ or A++ rating from Best or
            an A, AA, or AAA rating from Standard and Poor's. Most public libraries have these
            references.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'what-to-look-for',
    title: 'What To Look For In A Policy',
    body: (
      <>
        <p>
          Read the policy from cover to cover. Do not rely on marketing literature. When you compare
          LTCI policies, consider the following features:
        </p>

        <h3>Flexibility</h3>
        <p>
          A policy that covers nursing homes should also cover assisted living, a better alternative
          for many people who can no longer live on their own. If you want a policy with home care,
          look for one that offers a full range of community-based services, including adult day
          care, or that pays you a monthly cash allowance to spend as you please for care.
        </p>
        <Callout label="Tip">
          <p>
            If you lack family caregivers you can count on far into the future, avoid buying a policy
            with home care coverage—it will not be sufficient to enable you to stay at home.
          </p>
        </Callout>

        <h3>Eligibility</h3>
        <p>
          Look for a policy that bases eligibility on the need for help with activities of daily
          living. Policies that pay only for medically necessary care are not usually a good buy.
        </p>
        <Callout label="Tip">
          <p>
            To be sure you are covered for Alzheimer's disease, choose a policy that covers cognitive
            as well as physical disability and pays benefits if you meet either criterion.
          </p>
        </Callout>

        <h3>Inflation</h3>
        <p>
          If you purchase a policy before the age of 75, inflation protection is essential to ensure
          adequate coverage if you need long-term care in the future.
        </p>
        <Callout label="Tip">
          <p>
            Buy a policy that has an additional cost but automatically increases benefits at the
            rate of 5 percent annually.
          </p>
        </Callout>
        <p>
          If you cannot afford inflation protection, either choose a less comprehensive policy or do
          not buy LTCI at all.
        </p>

        <h3>Duration</h3>
        <p>
          Keep in mind that the chances of needing long-term care for five years or longer are
          relatively small. For most people, a policy covering two or three years will be more
          cost-effective.
        </p>
        <Callout label="Tip">
          <p>Resist pressure to buy the first policy you see. Compare it with at least two others.</p>
        </Callout>
      </>
    ),
  },
];

export default function LongTermCareInsurance() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-insurance"
      page="Long-Term Care Insurance"
      title={
        <>
          Long-Term Care Insurance: <em>How To Get The Best Deal</em>
        </>
      }
      lead="Many people are concerned about the cost of long-term care for themselves or a family member. As the result of a prolonged illness, disability, or injury, older individuals may need long-term care when they can no longer do the ordinary tasks of everyday living or when their health requires constant day-to-day monitoring. Here are the facts you need to decide whether to purchase long-term care insurance and to choose the most cost-effective method of providing for the possibility of long-term care."
      sections={sections}
      numbered={false}
    >
      <p>
        An estimated 14 million older Americans need long-term care. By the year 2030, that number is
        expected to increase to 24 million. Most will be cared for at home; family and friends are the
        sole caregivers for 70 percent of the elderly. A study by the U.S. Department of Health and
        Human Services says that people who reach age 65 will likely have a 40 percent chance of
        entering a nursing home. About 10 percent of the people who enter a nursing home will stay
        there five years or more.
      </p>
      <p>
        Medicare only pays for medically necessary skilled nursing facility or home health care and
        you must meet certain conditions for it to do so. For the majority of Americans, Medicare
        does not pay for custodial or long-term care, which is defined as assisting with daily living
        skills such as dressing, bathing, and using the bathroom. Therefore, you may want to think
        about how you would cover the cost of nursing home care for yourself, your spouse or family
        members.
      </p>
      <Callout label="Note">
        <p>
          Slightly less than half of all nursing home expenses are paid for by Medicaid. And only
          about two percent of stays in nursing facilities are paid for by Medicare or by private
          health insurance. Even less assistance is available to meet the cost of care at home or in
          the community.
        </p>
      </Callout>
      <Callout label="Planning Aid">
        <p>
          For further information on Medicaid care services, see{' '}
          <a href="https://www.medicaid.gov/medicaid/long-term-services-supports/index.html" {...external}>
            Medicaid Long-Term Services and Supports
          </a>
          .
        </p>
      </Callout>
      <p>
        One way of covering these often burdensome nursing home costs is long-term care insurance
        (LTCI). Long-Term Care Insurance is private insurance that you can buy to cover long-term
        care. Benefits and costs of these plans vary widely.
      </p>
      <p>
        This Financial Guide covers the factors you will need to think about if you are considering
        purchasing LTCI and offers help in selecting a policy if you decide to buy LTCI coverage.
      </p>
      <Callout label="Planning Aid">
        <p>
          For more information on these plans, contact the{' '}
          <a href="https://content.naic.org/" {...external}>
            National Association of Insurance Commissioners
          </a>{' '}
          (NAIC). It represents state health insurance regulators and has a free publication called{' '}
          <em>A Shopper's Guide to Long-Term Care Insurance</em>.
        </p>
      </Callout>
    </GuideArticle>
  );
}
