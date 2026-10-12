import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'what-is-a-usp',
    title: 'What is a unique selling proposition?',
    body: (
      <>
        <p>
          A unique selling proposition (USP) answers a central marketing question: why should customers choose your
          business over its competitors? It states what distinguishes your company, product, or service in terms
          that matter to the people you want to reach.
        </p>
        <p>
          A USP can be repeated across marketing materials so customers connect your business with the particular
          value it offers. It has two related benefits: it differentiates the business for current and prospective
          customers, and it gives the team a promise to fulfill, helping focus internal performance.
        </p>
      </>
    ),
  },
  {
    id: 'identify-what-matters',
    title: 'Identify what customers value',
    body: (
      <p>
        Develop the USP around the features that best represent your offer to the target customer. For example, a
        specialty bakery might distinguish itself through ingredient quality, its atmosphere, friendly service, or a
        convenient or memorable location. The best point of difference is not necessarily the one the owner or
        friends notice most; consider what actually brings customers back.
      </p>
    ),
  },
  {
    id: 'understand-motivation',
    title: 'Understand why customers buy',
    body: (
      <p>
        Demographics such as age, gender, and income can help describe a market, but they may not explain the reasons
        people choose a product. Consider the customer’s motivations and desired experience as well as practical
        needs. For a specialty bakery, customers might value distinctive flavors, enjoy discovering a new experience,
        or be drawn to the feeling the shop creates. These motivations can help identify which real features should
        shape the USP.
      </p>
    ),
  },
  {
    id: 'ask-customers',
    title: 'Ask customers what sets you apart',
    body: (
      <p>
        If you already have customers, ask why they choose your product or service instead of a competitor’s. Their
        answers may surface benefits you had not considered. Use that feedback to form a clear proposition, then
        ensure the business can consistently deliver it before repeating it in marketing.
      </p>
    ),
  },
  {
    id: 'usp-examples',
    title: 'Recognize the idea in established brands',
    body: (
      <p>
        The source points to familiar brand propositions as examples of a clear, memorable distinction: a candy
        designed not to melt in your hand, a parcel service emphasizing dependable overnight delivery, an insurer
        connecting a short quote process with possible savings, a retailer centered on saving money, and a jeweler
        linking diamonds with enduring value. These examples illustrate different kinds of promises; a business’s
        own proposition should reflect benefits it can substantiate and consistently provide.
      </p>
    ),
  },
  {
    id: 'develop-before-launch',
    title: 'Develop a USP before you have customers',
    body: (
      <p>
        If the business is new and does not yet have customers to interview, apply the same customer-centered
        approach to the intended market. Learn what prospective buyers value, what motivates them to choose among
        alternatives, and which features of the planned product or service best meet those needs. Treat the initial
        proposition as a hypothesis and refine it as customer feedback becomes available.
      </p>
    ),
  },
];

export default function UniqueSellingProposition() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Developing a Unique Selling Proposition"
      title="Developing a Unique Selling Proposition"
      lead="A unique selling proposition explains why customers should choose your business—and focuses your marketing and team on a distinctive value customers care about."
      sections={sections}
      numbered={false}
    />
  );
}
