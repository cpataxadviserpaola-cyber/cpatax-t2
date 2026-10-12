import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'market-research',
    title: 'How do I research whether my small business’ product or service will sell?',
    body: (
      <p>
        Research customers, competitors, and potential suppliers to understand where demand exists and what customers
        may pay. Define your research goals first. The results can inform sales approaches, marketing plans,
        short- and medium-term goals, and realistic profit projections.
      </p>
    ),
  },
  {
    id: 'research-questions',
    title: 'What market research questions should I ask?',
    body: (
      <p>
        Learn who your customers are, what they need, and what they can afford. Investigate demand, how it might be
        developed, how many competitors offer similar products or services, and whether you can compete on price,
        quality, and delivery while earning a profit. Consider whether your market is growing or declining.
      </p>
    ),
  },
  {
    id: 'pricing-costs',
    title: 'What costs should I consider when determining how much to charge?',
    body: (
      <p>
        Include direct material and labor costs, related employment costs, and overhead that cannot be assigned
        directly to a particular product. Overhead may include utilities, rent, insurance, taxes, advertising,
        transportation, supplies, and indirect labor. Allocate overhead consistently and revisit estimates as costs
        change.
      </p>
    ),
  },
];

export default function MarketingPricingFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Marketing and Pricing FAQ"
      title={
        <>
          Marketing and Pricing: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about researching demand and accounting for costs when setting prices."
      sections={sections}
      numbered={false}
    />
  );
}
