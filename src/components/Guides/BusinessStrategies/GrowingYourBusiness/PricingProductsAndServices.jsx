import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'pricing-position',
    title: 'Understand your market and position',
    body: (
      <p>
        Pricing should reflect customer demand, your costs, distribution, and competitors. A suggested retail price
        can be a convenient starting point, but it may not account for local competition. Compare your business with
        similar competitors and consider other reasons customers choose you, such as service or convenience.
      </p>
    ),
  },
  {
    id: 'pricing-strategies',
    title: 'Pricing strategies',
    body: (
      <>
        <p>
          Pricing below competitors can attract customers, but the reduced margin requires tight control of purchasing,
          inventory, location, and service costs. It can also invite price wars. Higher prices may be appropriate when
          customers value distinctive products, a convenient or exclusive location, or strong service. Multiple-unit
          offers can help move suitable low-cost goods or clear inventory.
        </p>
        <p>Choose a strategy that fits both the offer and the customers you want to serve.</p>
      </>
    ),
  },
  {
    id: 'costs',
    title: 'Account for all costs',
    body: (
      <ul>
        <li>
          <strong>Materials:</strong> inputs that become part of the product.
        </li>
        <li>
          <strong>Labor:</strong> production time and related employment costs, including applicable benefits.
        </li>
        <li>
          <strong>Overhead:</strong> indirect costs such as rent, utilities, insurance, supplies, administration,
          advertising, shipping, and storage.
        </li>
      </ul>
    ),
  },
  {
    id: 'service-pricing',
    title: 'Pricing services and reviewing results',
    body: (
      <p>
        Service businesses should account for time that cannot be billed, slow periods, and costs such as travel.
        Review prices and expenses regularly, update assumptions as costs change, and seek qualified help with complex
        cost allocation. A useful starting framework is to cover costs and operating expenses, then include a
        sustainable profit.
      </p>
    ),
  },
];

export default function PricingProductsAndServices() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Pricing Products and Services"
      title="Pricing Your Products and Services: A Basic Review"
      lead="Set prices with a clear view of costs, customer value, competitive position, and the profit your business needs."
      sections={sections}
      numbered={false}
    />
  );
}
