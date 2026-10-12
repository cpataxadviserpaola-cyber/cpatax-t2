import GuideArticle from '../../../GuideArticle.jsx';

const sections = [
  {
    id: 'small-employer-benefits',
    title: 'As a small employer, what do I need to know about employee benefits?',
    body: (
      <p>
        Employers may have obligations involving payroll taxes and programs such as Social Security, unemployment
        insurance, and workers’ compensation. Requirements differ by location and workforce. A voluntary benefits
        package might include health, disability, life, and retirement coverage; paid leave; bonuses; or education
        assistance. Before adopting a plan, set a budget, consider what employees value, decide what risks the plan
        should address, and determine who will administer it. Confirm current federal and state requirements with
        qualified advisers.
      </p>
    ),
  },
  {
    id: 'medical-plans',
    title: 'What types of medical plans are available for employees?',
    body: (
      <p>
        The source FAQ describes managed-care arrangements such as HMOs, PPOs, and point-of-service plans, which
        differ in provider networks, referrals, and out-of-network coverage. It also discusses high-deductible health
        plans paired with health savings accounts (HSAs) and health reimbursement arrangements (HRAs). These
        arrangements have distinct eligibility and tax rules; an HSA is not the same as a flexible spending account.
        Plan terms and current law determine which options are available.
      </p>
    ),
  },
  {
    id: 'disability-benefits',
    title: 'What types of disability benefits do companies provide to employees?',
    body: (
      <p>
        Employer disability coverage may replace part of an employee’s income during an illness or injury that keeps
        them from working. Short-term and long-term plans have different waiting periods, benefit periods, and
        replacement rates. This coverage is distinct from workers’ compensation, which relates to work-connected
        injury or illness. Policy terms and coordination with other benefits, including Social Security, vary.
      </p>
    ),
  },
  {
    id: 'life-insurance',
    title: 'What types of life insurance plans are available for employees?',
    body: (
      <p>
        Employers commonly offer group life insurance that pays a benefit to designated beneficiaries if a covered
        employee dies. The coverage amount, eligibility, employer and employee premium contributions, and tax
        treatment depend on the plan. Review the policy and current tax rules rather than assuming a standard
        coverage amount.
      </p>
    ),
  },
  {
    id: 'self-insurance',
    title: 'What is self-insurance?',
    body: (
      <p>
        Under a self-funded health arrangement, an employer pays covered claims from business funds or a dedicated
        reserve instead of transferring all claim risk to an insurer. An employer may use stop-loss coverage and
        contract with a third-party administrator. Self-funding changes who bears claim risk; it does not by itself
        exempt a plan from applicable federal or state requirements. Seek specialist advice before establishing one.
      </p>
    ),
  },
  {
    id: 'cafeteria-plan',
    title: 'What is a cafeteria plan?',
    body: (
      <p>
        A cafeteria plan is a written employee benefit arrangement that can let eligible employees choose among
        certain qualified benefits instead of receiving the same amount as taxable cash compensation. Depending on
        the plan and applicable law, choices may include health coverage, dependent-care benefits, or other eligible
        options. Not every benefit receives tax-free treatment, and formal design, documentation, and administration
        requirements apply.
      </p>
    ),
  },
];

export default function EmployeeBenefitsFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/running-your-business"
      page="Employee Benefits FAQ"
      title={
        <>
          Employee Benefits: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about employer benefit obligations, medical and disability plans, life insurance, self-funded health plans, and cafeteria plans."
      sections={sections}
      numbered={false}
    />
  );
}
