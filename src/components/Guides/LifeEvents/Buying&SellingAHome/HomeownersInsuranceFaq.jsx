import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Address: /guides/life-events/buying-and-selling-a-home/homeowners-insurance-faq.

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'best-price',
    title: "How can I get the best homeowner's insurance at the best price?",
    body: (
      <>
        <p>
          The price you pay for homeowner's insurance can vary by hundreds of dollars, depending on the insurance
          company you buy your policy from. One tip is to ask your insurance agent or company representative about
          discounts available to you, but there are many others, some of which are listed below.
        </p>
        <ul>
          <li>Shop around</li>
          <li>Raise your deductibles</li>
          <li>Buy home and auto policies from the same company</li>
          <li>Check a home's insurance cost prior to purchase</li>
          <li>Don't insure land</li>
          <li>Increase home security</li>
          <li>Stop smoking</li>
          <li>Check your policy once a year</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-much',
    title: "How much homeowner's insurance should I buy?",
    body: (
      <>
        <h3>Insure For 100 percent of Rebuilding Costs</h3>
        <p>
          The amount of insurance you buy should be based on the cost of rebuilding, and not on the price of your
          home. The cost of rebuilding your house may be higher (or lower) than the price you paid for it or the price
          you could sell it for today.
        </p>
        <h3>Do You Have a Replacement Cost Policy?</h3>
        <p>
          Most policies cover replacement cost for structural damage but check with your insurance agent to make sure
          your policy does this. A replacement cost policy will pay for the repair or replacement of damaged property
          with materials of similar kind and quality. The insurance company won't deduct for depreciation (the
          decrease in value due to age, wear and tear, and other factors).
        </p>
        <h3>Find Out About Flood Insurance</h3>
        <p>
          If your home is in an area prone to flooding, contact your insurance agent or the Federal Insurance
          Administration at (800) 638-6620 and ask about the{' '}
          <a href="https://www.fema.gov/national-flood-insurance-program" {...external}>
            National Flood Insurance Program
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'adequate',
    title: "How can I make sure my homeowner's insurance is adequate?",
    body: (
      <>
        <h3>Check Your Policy and Keep Your Agent Informed</h3>
        <p>
          Make sure your agent knows about any improvements or additions to your house that have been made since you
          last discussed your insurance policy.
        </p>
        <p>
          Look at your policy to see what the maximum amount is that your insurance company would pay if your house
          was damaged and had to be rebuilt. The limits of the policy usually appear on the Declarations Page under
          Section 1, Coverage, Dwelling. Your insurance company will pay up to this amount to rebuild your home.
        </p>
        <h3>Contents Insurance: Make a List of All Your Personal Possessions</h3>
        <p>
          This includes everything you and your household own in your home and in other buildings on the property,
          except your car and certain boats, which must be insured separately. Among the things you should include are
          indoor and outdoor furniture; appliances, stereos, computers and other electronic equipment; hobby materials
          and recreational equipment; china, linens, silverware, and kitchen equipment; and jewelry, clothing and other
          personal belongings.
        </p>
        <h3>Check Your Policy for Special Limits</h3>
        <p>Check the limits on certain kinds of personal possessions, such as jewelry, artwork, silverware, and furs.</p>
        <p>
          This information is in Section 1, Personal Property, Special Limits of Liability. Some insurance companies
          also place a limit on what they'll pay for computers and other home office equipment.
        </p>
        <p>If the limits are too low, consider buying a special personal property "endorsement" or "floater."</p>
      </>
    ),
  },
  {
    id: 'shop',
    title: 'How should I shop for a home insurer?',
    body: (
      <>
        <p>
          First, do some preliminary research. Start by making a list of insurers to call. Ask your friends about
          their insurers, search online, check the Yellow Pages, or call your state insurance department. Also, check
          consumer guides. You can also check with an independent agent.
        </p>
        <p>
          When talking to insurers, ask them what they could do to lower your costs. Once you've narrowed your search
          to three companies, get price quotes.
        </p>
        <Callout label="Tip">
          <p>
            Don't consider price alone. The insurer you select should offer both a fair price and excellent service.
            Quality service may cost a bit more, but it provides added conveniences. Talking to insurers will give you a
            feel for the type of service they offer.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'deductible',
    title: "How much of a homeowner's deductible should I have?",
    body: (
      <p>Deductibles on homeowners' policies typically start at $250. Increasing your deductible saves you money.</p>
    ),
  },
  {
    id: 'same-company',
    title: 'Should I buy home and auto policies from the same company?',
    body: (
      <p>
        Some companies that sell homeowner's, auto, and liability coverage will take 5 to 15 percent off your premium
        if you buy two or more policies from them.
      </p>
    ),
  },
  {
    id: 'home-purchase',
    title: 'Should insurance costs be a factor in the home purchase decision?',
    body: (
      <>
        <p>
          A new home's electrical system and plumbing, as well as its structure, are usually in better shape than
          those of an older house, so insurers may offer you a discount of 8 to 15 percent for a new home. Check the
          home's construction. Brick houses may result in less costly premiums in the East; frame houses are less
          costly in the West. Choosing wisely could cut your premium by 5 to 15 percent. Avoiding areas that are prone
          to floods can save you money as well.
        </p>
        <p>
          Does your town have full-time or volunteer fire service? Is the home close to a hydrant or fire station? The
          closer it is to either of these, the lower your premium will be.
        </p>
      </>
    ),
  },
  {
    id: 'land',
    title: 'Should I insure the entire home cost including land?',
    body: (
      <p>
        Insuring the value of the land under your house is not necessary because land isn't at risk from theft,
        windstorm, fire or other disasters.
      </p>
    ),
  },
  {
    id: 'home-security',
    title: 'Does home security reduce insurance cost?',
    body: (
      <>
        <p>
          You can usually get discounts of at least 5 percent for a smoke detector, burglar alarm, or dead-bolt
          locks. Some companies offer to cut your premium by as much as 15 or 20 percent if you install a
          sophisticated sprinkler system and a fire and burglar alarm that rings at the police station or another
          monitoring facility. These systems are not inexpensive, and you should also be aware that not every system
          qualifies for the discount.
        </p>
        <Callout label="Tip">
          <p>
            Before you buy an alarm system, find out what kind your insurer recommends and how much you'd save on
            premiums.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'non-smokers',
    title: 'Do home insurers offer discounts for non-smokers?',
    body: (
      <p>
        Some insurers offer to reduce premiums if all the residents in a house don't smoke. Ask your insurer if this
        discount is available.
      </p>
    ),
  },
  {
    id: 'review',
    title: "How often should I review my homeowner's policy?",
    body: (
      <>
        <p>
          Compare the limits in your policy with the value of your possessions at least once a year, to make sure your
          policy covers major purchases or additions to your home.
        </p>
        <Callout label="Tip">
          <p>
            On the other hand, you don't want to spend money for coverage you don't need. If your five-year-old fur
            coat is no longer worth the $20,000 you paid for it, reduce your floater and pocket the difference.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'storm-insurance',
    title: 'Should I buy private or governmental sponsored storm insurance?',
    body: (
      <p>
        If you live in a high-risk area, one vulnerable to coastal storms, fires, or crime, for instance, and have been
        buying your homeowner's insurance through a government plan, you may find that there are steps you can take to
        allow you to buy insurance at a lower price in the private market. Check with your insurance agent.
      </p>
    ),
  },
];

export default function HomeownersInsuranceFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="Homeowner's Insurance: Frequently Asked Questions"
      title={
        <>
          Homeowner's Insurance: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about how much homeowner's insurance to buy, keeping your coverage adequate, shopping for an insurer, and the discounts that can lower your premium."
      sections={sections}
    />
  );
}
