import GuideArticle, { RelatedGuide } from '../../../GuideArticle.jsx';
import { guide } from '../../../../../data/guides.js';

const related = guide('business-strategies.php');

const sections = [
  {
    id: 'benefit-plans',
    title: 'What is an employee benefit plan?',
    body: (
      <p>
        Benefit plans can help employees and their families address illness, disability, death, unemployment, and
        retirement, and provide leave from work. Some benefits are required by law, while others are offered to
        attract and retain employees or support morale. Plan design involves costs, funding, tax and legal
        requirements, vendors, and administration.
      </p>
    ),
  },
  {
    id: 'mandated-and-optional',
    title: 'Mandated and optional benefits',
    body: (
      <p>
        The source guide identifies Social Security, unemployment insurance, and workers’ compensation among
        employer-related benefit obligations, while noting that some states also require certain disability benefits.
        Optional plan features may include health, disability, and life insurance; retirement plans; flexible
        compensation; leave; bonuses; service awards; and education assistance. Applicable mandates differ by state,
        employer, and employee.
      </p>
    ),
  },
  {
    id: 'why-offer-benefits',
    title: 'Why offer employees benefits?',
    body: (
      <p>
        A benefits package can help recruit and retain capable staff, remain competitive, support employee morale,
        and provide advancement opportunities. Employers should consider the costs and employee contributions as
        part of overall compensation, and ask what benefits employees value.
      </p>
    ),
  },
  {
    id: 'health-plans',
    title: 'Health and dental plans',
    body: (
      <p>
        The guide describes traditional indemnity coverage, where employees may choose providers and submit claims;
        HMOs, which use defined provider networks; and PPOs, which negotiate rates with a network while generally
        offering broader provider choice. Dental coverage may address preventive and other dental services. The
        guide also discusses HSAs paired with eligible high-deductible health plans. Coverage, provider access,
        cost-sharing, tax treatment, and eligibility vary by policy and current law.
      </p>
    ),
  },
  {
    id: 'disability-life',
    title: 'Disability and life insurance',
    body: (
      <p>
        Short- and long-term disability plans can replace part of an employee’s income when illness or injury prevents
        work; waiting periods, benefit duration, and offsets vary by policy. Group life insurance typically provides
        a benefit to named beneficiaries. Compare coverage, exclusions, premiums, insurer reliability, and employee
        needs before selecting a plan.
      </p>
    ),
  },
  {
    id: 'self-insurance',
    title: 'Self-insurance',
    body: (
      <p>
        A self-funded health plan has the employer pay some or all covered claims, sometimes using a reserve or trust
        and stop-loss insurance. Potential benefits include flexibility and greater control over funding and plan
        administration; risks include unpredictable and potentially high claims. The source notes that self-insurance
        requires careful study. It does not automatically exempt a plan from federal or state requirements.
      </p>
    ),
  },
  {
    id: 'aca',
    title: 'Affordable Care Act considerations',
    body: (
      <p>
        The source guide includes historical descriptions of small-employer coverage options, tax credits, employer
        coverage obligations, and the repeal of a proposed high-cost-plan excise tax. Thresholds, credits, marketplaces,
        and employer responsibilities change over time and depend on workforce and plan details. Check current IRS,
        Department of Labor, and marketplace guidance rather than relying on the source’s dated figures.
      </p>
    ),
  },
  {
    id: 'selecting-a-plan',
    title: 'Balancing cost, quality, and access',
    body: (
      <>
        <p>
          Compare total costs and coverage quality, including hospital and outpatient care, physical and mental health
          services, substance-use treatment, and prescription coverage. Before signing a contract, the guide suggests
          asking:
        </p>
        <ul>
          <li>Who is the insurer, and what is its financial stability and service reputation?</li>
          <li>Which doctors and hospitals are available, and how are costs managed?</li>
          <li>Who administers the plan, what information must the employer provide, and how are employees enrolled?</li>
          <li>How does the proposed plan fit the business budget and employee needs?</li>
        </ul>
        <p>
          If a serious insurance issue cannot be resolved, the source guide recommends contacting the state insurance
          regulator.
        </p>
      </>
    ),
  },
  {
    id: 'retirement-benefits',
    title: 'Retirement benefit plans',
    body: (
      <>
        <p>
          Retirement plans are another major part of employee benefits. Consider employee needs, employer
          contributions, eligibility, administration, and ongoing compliance when comparing plans.
        </p>
        <RelatedGuide guide={related([61, 'The "SIMPLE" Plan: A Retirement Plan for the Really Small Business'])} />
      </>
    ),
  },
];

export default function EmployeeBenefits() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/running-your-business"
      page="Employee Benefits"
      title={<>Employee Benefits: <em>How To Handle Them</em></>}
      lead="An overview of required and optional employee benefits, common health and insurance arrangements, self-funding, and questions to consider when choosing a plan."
      sections={sections}
    />
  );
}
