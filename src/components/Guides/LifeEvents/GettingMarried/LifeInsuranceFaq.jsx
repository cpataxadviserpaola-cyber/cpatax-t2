import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('life-events.php');
const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'underwriting',
    title: 'How do insurers assess applicants?',
    body: (
      <p>
        Insurers review information such as age, health history, tobacco use, occupation, and
        activities to estimate risk and determine whether to offer coverage and at what price.
        Underwriting guidelines differ, so an outcome from one insurer does not necessarily predict
        another’s decision. Answer application questions accurately and ask how the insurer reached
        its decision if an offer is declined or comes with a higher premium.
      </p>
    ),
  },
  {
    id: 'agent-questions',
    title: 'What should I ask an insurance agent?',
    body: (
      <>
        <p>Ask for clear explanations of the policy and how it fits your needs. Useful questions include:</p>
        <ul>
          <li>What is guaranteed, and what depends on future assumptions or insurer performance?</li>
          <li>How long will the premium and coverage amount remain in effect?</li>
          <li>What fees, exclusions, and charges apply if I change or cancel the policy?</li>
          <li>For a policy with cash value, how are values calculated and what happens if I borrow against it?</li>
          <li>What are the agent’s role and compensation, and which other policies should I compare?</li>
        </ul>
        <p>
          Request the policy illustration and contract, take time to review them, and consider an
          independent professional’s advice before purchasing a complex policy.
        </p>
      </>
    ),
  },
  {
    id: 'pitfalls',
    title: 'What should I watch for when buying coverage?',
    body: (
      <p>
        Be cautious if a policy’s costs, benefits, or assumptions are difficult to explain, or if
        you feel pressured to buy before you understand the contract. Review exclusions, premium
        changes, surrender charges, and any values that are not guaranteed. Make sure the
        recommendation reflects your needs and budget, and compare alternatives rather than
        focusing only on projected returns or a single premium figure.
      </p>
    ),
  },
  {
    id: 'compare',
    title: 'How can I compare policy costs?',
    body: (
      <p>
        Compare policies with the same coverage amount, duration, and assumptions. Review the
        guaranteed and non-guaranteed values separately, along with premiums, fees, surrender
        charges, and what happens if you stop paying or need to change the policy. Ask insurers for
        written illustrations and check with your state insurance department about consumer
        resources and the insurer’s licensing and complaint information.
      </p>
    ),
  },
  {
    id: 'need',
    title: 'Do I need life insurance?',
    body: (
      <p>
        Coverage may be useful when someone would face financial difficulty if you died, or when you
        have a specific estate or business-planning need. Consider who depends on your income or
        caregiving, outstanding debts, available savings, and future expenses. If no one relies on
        you financially, the need may be different; review your circumstances rather than assuming
        everyone needs the same policy.
      </p>
    ),
  },
  {
    id: 'amount',
    title: 'How much coverage should I consider?',
    body: (
      <p>
        Estimate the resources your family may need, then account for income replacement, debts,
        education or care costs, and other planned expenses. Subtract savings, existing insurance,
        and other dependable income sources. A salary multiple can be a starting point, but a
        household-specific calculation is more useful. Revisit the estimate when income, dependents,
        debt, or savings change.
      </p>
    ),
  },
  {
    id: 'types',
    title: 'What type of life insurance should I compare?',
    body: (
      <>
        <p>
          Term insurance generally provides a death benefit for a stated period. Permanent policies
          are designed to provide longer-lasting coverage and may accumulate cash value, but their
          costs and features can be more complex. Policy names alone do not show whether a product
          is suitable: compare the contract, duration, premium structure, guarantees, and how long
          you expect to need coverage.
        </p>
        <RelatedGuide guide={related([47, 'Life Insurance: How Much and What Kind To Buy'])}>
          See the related guide for a fuller discussion of coverage needs and policy types:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'resources',
    title: 'Where can I find independent information?',
    body: (
      <p>
        Your state insurance department can provide information about insurance products, licensing,
        and consumer protections. The{' '}
        <a href="https://content.naic.org/consumer" {...external}>
          National Association of Insurance Commissioners consumer resources
        </a>{' '}
        can help you locate your state regulator and learn about shopping for insurance. For advice
        about your individual coverage needs, consider speaking with a qualified professional who
        can explain any conflicts or compensation related to a recommendation.
      </p>
    ),
  },
];

export default function LifeInsuranceFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Life Insurance: Frequently Asked Questions"
      title={<>Life Insurance: <em>Frequently Asked Questions</em></>}
      lead="Choosing life insurance means weighing financial needs, policy terms, and costs. These answers are a starting point for comparing coverage and asking informed questions."
      sections={sections}
    />
  );
}
