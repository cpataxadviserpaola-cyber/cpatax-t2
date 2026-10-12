import GuideArticle, { FigureTable } from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'customer-list',
    title: 'Your customer list as a business asset',
    body: (
      <p>
        The source argues that a business’s customer list can be one of its most valuable assets, even though it
        does not appear as a conventional balance-sheet item. The first sale is often the hardest and most expensive:
        it is when a business earns or loses a customer’s trust. A trusted relationship may lead to repeat purchases
        and referrals, while a business focused only on finding new customers can overlook the relationships it has
        already built.
      </p>
    ),
  },
  {
    id: 'lifetime-value',
    title: 'Why estimate customer lifetime value?',
    body: (
      <p>
        Customer lifetime value estimates the contribution a customer may generate over the expected relationship.
        It gives the business a benchmark for evaluating how much it may be reasonable to invest in acquiring a
        customer. When assessing marketing, compare the campaign cost with the value of the customers acquired rather
        than relying only on the response ratio (responses divided by messages delivered).
      </p>
    ),
  },
  {
    id: 'calculate-value',
    title: 'How to estimate customer lifetime value',
    body: (
      <p>
        Estimate the profit from expected customer transactions over the period you expect to retain the customer.
        Use your own records to estimate average purchases, gross-profit margin, customer retention, and referrals.
        The source suggests using a five-year period if the long-term relationship cannot be estimated; treat that
        as an example, not a universal forecast. Include referral value only when it can be reasonably supported by
        your experience.
      </p>
    ),
  },
  {
    id: 'worked-example',
    title: 'Source example: a computer software store',
    body: (
      <>
        <p>
          The linked guide illustrates its approach with annual average purchases of $500, a 30% gross-profit
          margin, a five-year customer relationship, and one referred customer for every three customers. Applying
          those assumptions gives the following estimate:
        </p>
        <FigureTable
          label="Example customer lifetime value calculation"
          columns={['Calculation', 'Amount']}
          rows={[
            ['Average purchases per year', '$500'],
            ['Expected years as a customer', '5'],
            ['Total purchases ($500 × 5)', '$2,500'],
            ['Gross-profit margin', '30%'],
            ['Estimated gross profit ($2,500 × 30%)', '$750'],
            ['Estimated referral value (one-third of $750)', '$250'],
          ]}
          total={['Estimated lifetime value', '$1,000']}
        />
        <p>
          In the source’s simplified example, spending $1,000 to acquire a customer would break even against the
          estimated lifetime value. The business would need to spend less than that, or generate greater value, to
          earn a profit.
        </p>
      </>
    ),
  },
  {
    id: 'marketing-investment',
    title: 'Use the estimate as a marketing benchmark',
    body: (
      <p>
        Compare the value of the customers gained with the campaign investment to evaluate the return from promotion.
        Revisit the estimate using actual results: customer spending, gross margins, retention, and referrals can all
        differ from assumptions. The calculation is a planning tool, not a guaranteed return; allow for acquisition
        and service costs and the profit the business needs.
      </p>
    ),
  },
];

export default function CustomerLifetimeValue() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Your Business’s Most Valuable Hidden Asset"
      title="Uncover Your Business's Most Valuable Hidden Asset"
      lead="A customer list can be a valuable business asset. Estimating the profit customers and their referrals may generate helps evaluate what to invest in marketing."
      sections={sections}
      numbered={false}
    />
  );
}
