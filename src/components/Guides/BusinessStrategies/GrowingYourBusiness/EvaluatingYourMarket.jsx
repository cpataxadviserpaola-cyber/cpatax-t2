import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'market-research',
    title: 'Market research',
    body: (
      <p>
        Research helps define sales approaches, build realistic profit projections, organize marketing, set near-term
        goals, and understand the market’s profit potential. Set clear research goals, collect information
        systematically, and keep it organized so you can revisit and update it.
      </p>
    ),
  },
  {
    id: 'questions-to-ask',
    title: 'Questions to ask',
    body: (
      <>
        <p>Assess whether a market can support your product or service by investigating:</p>
        <ul>
          <li>Who the customers are, what they need, and what resources or budget they have.</li>
          <li>Where demand exists and whether the offer is important to customers.</li>
          <li>Whether you can compete on price, quality, and delivery while earning a profit.</li>
          <li>How many competitors serve the market and whether the market is growing or declining.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'market-data',
    title: 'Finding and using market data',
    body: (
      <p>
        Combine customer research with information from trade associations, regional planning groups, financial and
        real-estate businesses, and industry publications. Study competitors and keep checking in with customers:
        market research should continue after launch, as customer needs and the economy change. Use what you learn to
        test the assumptions in your business and financial plans.
      </p>
    ),
  },
  {
    id: 'export-markets',
    title: 'Exploring export markets',
    body: (
      <p>
        Evaluate international opportunities using the same basic discipline as domestic research. Identify countries
        with promising demand, compare local alternatives on quality and price, and learn who the likely buyers are.
        Start with a manageable number of target markets and expand as your export experience grows.
      </p>
    ),
  },
];

export default function EvaluatingYourMarket() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Evaluating Your Market"
      title="Evaluating Your Market: A Basic Review"
      lead="Use organized market research to understand customers, competition, demand, and the prospects for profitable growth."
      sections={sections}
      numbered={false}
    />
  );
}
