import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('business-strategies.php');

const sections = [
  {
    id: 'assess-the-fit',
    title: 'Assess whether working from home fits',
    body: (
      <>
        <p>
          Start by testing the business idea before committing significant time or money. Define what you will sell,
          who is likely to buy it, whether there is enough demand, and what skills or experience will help you compete.
        </p>
        <p>
          Also consider the realities of working at home: you will need a reliable routine, the discipline to stay on
          task, and a way to handle the isolation that can come with working alone. Check that your home has enough
          space for a professional workspace and that household life will not routinely interrupt your work.
        </p>
      </>
    ),
  },
  {
    id: 'check-requirements',
    title: 'Check local rules and business requirements',
    body: (
      <>
        <p>
          Operating from home does not generally exempt a business from rules that apply to other businesses. Before
          opening, check local zoning and any restrictions on making or selling your particular products. Requirements
          vary by location and industry, so confirm them with the relevant state and local agencies and get professional
          advice when needed.
        </p>
        <p>
          Depending on the business, you may need a license or permit, to register its name, or to obtain a sales-tax
          account. Keeping business banking and communications separate can also make administration easier. If you hire
          employees, account for payroll tax withholding and applicable wage, workplace-safety, and other employment
          requirements.
        </p>
      </>
    ),
  },
  {
    id: 'plan-the-money',
    title: 'Plan costs, sales, and cash flow',
    body: (
      <>
        <p>
          Build a practical financial forecast before launch. List one-time setup costs such as permits, equipment,
          supplies, workspace needs, and promotion. Then estimate recurring expenses, including utilities, insurance,
          professional services, taxes, loan payments, and your household living costs.
        </p>
        <p>
          Use market research to develop cautious sales estimates and compare expected income with those costs. Track
          cash coming in and bills coming due over time: a business can appear profitable on paper yet still lack the cash
          to pay its obligations. Leave room for a slower-than-expected start and revisit the forecast as real results
          come in.
        </p>
        <RelatedGuide guide={related([108, 'Business Plans: How To Prepare An Effective One'])} />
      </>
    ),
  },
];

export default function HomeBasedBusiness() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Home-Based Business"
      title={
        <>
          The Home-Based Business: <em>Key Considerations</em>
        </>
      }
      lead="A business run from home still needs a sound idea, a compliant setup, and a realistic financial plan. Use these points to guide your early decisions."
      sections={sections}
    />
  );
}
