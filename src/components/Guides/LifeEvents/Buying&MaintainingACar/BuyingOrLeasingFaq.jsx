import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=153 (Buying or Leasing Your Next Car: Frequently
// Asked Questions), word for word. "this is important" starts with a capital, and the "Tip" and
// "Example" boxes keep the library's labels. The library repeats two points from "How much can a
// dealer charge me…" as tips under "What are the typical final (lease-end) costs?"; both places
// keep them, as there. Links: Consumer Reports goes to the address its old one redirects to; the
// N.A.D.A. guide (nadaguides.com, now a dead page) became J.D. Power's car values, so the link goes
// there; the others use https. The library's page has no introduction, so the banner's opening line
// (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/buying-and-maintaining-a-car/buying-or-leasing-faq (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'lease-or-buy',
    title: 'Should I lease or buy my next car?',
    body: (
      <>
        <p>
          Will you save money leasing instead of buying? It depends on four things: (1) how good a deal you can strike
          with the dealership, (2) how many miles you put on a car, (3) how much wear and tear you put on a car, and (4)
          what the car will be used for.
        </p>
        <p>
          To decide whether to lease or buy, compare the costs and other factors involved with both leasing and buying.
          Consider the following factors:
        </p>
        <ul>
          <li>Your initial costs</li>
          <li>Your ongoing costs</li>
          <li>Your final costs and option rights</li>
          <li>Whether you will be able to deduct any of the costs of the car because it will be used in a business</li>
          <li>Whether having an ownership interest in the car is of overriding importance</li>
        </ul>
      </>
    ),
  },
  {
    id: 'best-buy',
    title: 'How do I get the "best buy" when buying a new car?',
    body: (
      <>
        <p>
          First, decide on the size and type of car you want, and then decide what options you want (e.g., automatic,
          air conditioning, anti-lock brakes).
        </p>
        <p>
          Second, find out what the car dealer is paying for the car(s) you're interested in. This is known as the dealer
          invoice cost. This is important because the difference between the invoice price and the sticker price is the
          amount that can be negotiated.
        </p>
        <p>
          There are two different ways to go about getting this information. The first (and best) way is to use an auto
          pricing service provided by a consumer group or an auto magazine such as{' '}
          <a href="https://www.consumerreports.org/cars/" {...external}>
            Consumer Reports New Car Price Service
          </a>
          . This service gives you a complete run-down of the invoice price and the sticker price, adjusted for various
          options, as well as any rebates or factory incentives. And it tells you how to use the information in
          negotiating your new car's price. In addition, using an auto pricing service provides you with the most
          up-to-date information. The second way is to use pricing guides found on the Internet, such as{' '}
          <a href="https://www.edmunds.com/" {...external}>
            Edmund's New Car Prices
          </a>
          .
        </p>
        <p>
          If you have a car to trade-in, you'll want to find out what it's worth, too. You can do this by looking up your
          used car in the N.A.D.A Official Used Car Guide, available online (
          <a href="https://www.jdpower.com/cars" {...external}>
            www.nadaguides.com
          </a>
          ) or at the library.
        </p>
        <p>
          The next step is to begin negotiating with car dealers. Now that you know the invoice price, use that
          information to bargain for the lowest possible markup over the dealer's cost.
        </p>
        <Callout label="Tip">
          <p>
            Generally, $300 to $500 over the dealer's cost is a reasonable mark-up, unless the car you want is either
            hard to get or an extremely popular, exotic or sporty model.
          </p>
        </Callout>
        <p>
          Resist any attempts by dealerships to sell you undercoating, rust-proofing, or other extras. Depending on the
          repair history of your model, however, you might want to invest in the extended warranty.
        </p>
      </>
    ),
  },
  {
    id: 'negotiate-purchase',
    title: 'How should I negotiate for a new car?',
    body: (
      <>
        <p>
          Remember that you are not only shopping for a car; you are choosing a dealer, with whom you will have a
          long-term relationship as you'll bring your car in for servicing. So if you don't like the dealership, go
          elsewhere.
        </p>
        <p>
          As far as timing of purchase, the last Saturday of September, October, or December is generally a good time to
          get a good bargain on a car because sales managers are scrambling to meet their quotas for month and year-end.
        </p>
        <p>
          Find out about financing alternatives before you begin shopping for a car. If you know what banks are charging,
          you will be prepared when the dealer talks about financing.
        </p>
        <p>Here are some of the main points you'll want to get across during your negotiations:</p>
        <ul>
          <li>You know the exact model you want, and which options you want.</li>
          <li>You are comparison shopping, and will obtain price quotes from other dealers.</li>
          <li>
            You will not discuss financing or trade-ins until the dealer has made you an offer (do not mention a trade-in
            until you have finished negotiating the price of your car).
          </li>
          <li>You know how much the car cost the dealer.</li>
        </ul>
        <p>Finally, even if you get what sounds like a good price, go to other dealers to get quotes.</p>
      </>
    ),
  },
  {
    id: 'negotiate-lease',
    title: 'Should I negotiate a car lease the same way as I purchase a car?',
    body: (
      <>
        <p>
          Similar to a loan, the monthly lease payment depends on the lease terms, the initial "purchase price" of the
          vehicle, and the interest rate. Unlike a loan, another important factor is the "lease-end" or "residual"
          value. This is the expected value of the car at the end of the lease term.
        </p>
        <p>
          In a lease you are effectively paying for the difference between initial purchase price and residual value.
          You should negotiate the best possible (i.e. lowest) purchase price because this will lower your cost of
          leasing. If it is a closed-end lease and you do not intend to purchase the car at the end of the lease term,
          you should also try to negotiate a higher residual value.
        </p>
        <Callout label="Example">
          <p>
            If you walk into a dealership and ask to lease a car, they will often try to base the lease on the
            Manufacturer's Suggested Retail Price (MSRP). You would never pay this sticker price to purchase a car for
            cash, so you should not do so in a lease situation.
          </p>
          <p>
            The first step is to negotiate the lowest possible price on the vehicle and then negotiate the lease terms.
            For example, assume a Lexus sedan has an MSRP of $36,955 (and the lease provides for a term of 36 months, an
            implicit interest rate of 6.67% and a residual value of $25,895). Based upon this MSRP, the monthly lease
            payment would be $481.50, excluding sales/use tax, licenses, etc.
          </p>
          <p>
            The invoice (dealer) cost on the same vehicle is $32,469. If you negotiated a price between MSRP and invoice,
            say $34,750; the lease payment would be reduced to $416.00.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'how-a-lease-works',
    title: 'How does an auto lease work?',
    body: (
      <>
        <p>
          There are two types of lease arrangements: closed-end ("walk-away") and open-end (finance). Here's how they
          work:
        </p>
        <h3>Closed-End: The Dealer Bears the Risk of Depreciated Value</h3>
        <p>
          When a closed-end lease is up, you bring the car back to the dealership and "walk away." You must return the
          car with only normal wear and tear and with less than the mileage limit specified in your lease. Since the
          dealer is bearing the risk that the value of the car at the end of the lease will go down, your monthly
          payment is higher than with an open-end lease.
        </p>
        <h3>Open-End: You Bear the Risk of Depreciated Value</h3>
        <p>
          With the open-end lease the customer bears the risk that the car will have a certain value (called the
          "estimated residual value") at the end of the lease. The monthly payment is lower because of this risk.
        </p>
        <p>
          When you return the car at the end of the lease, the dealer will have the car appraised. If the car's
          appraised value is at least equal to the estimated residual value in the agreement, you won't need to pay
          anything at the end of the lease term. Under some contracts, you can even receive a refund if the appraised
          value is higher than the residual value stated in the contract. If the appraised value is lower than the
          residual value, however, you may have to pay all or part of the difference.
        </p>
      </>
    ),
  },
  {
    id: 'initial-costs',
    title: 'What are the initial (up-front) costs of leasing a car?',
    body: (
      <>
        <p>
          In deciding whether to lease or buy, find out what your total initial costs will be. This is part of the total
          dollar amount you will arrive at to compare with the cost of buying.
        </p>
        <p>
          "Initial costs" are the down payment you must come up with when you lease a car. They include the security
          deposit, the first and last lease payments, the "capitalized cost reductions," the sales taxes, title fees,
          license fees, and insurance. With a lease, the initial costs usually total less than the down payment needed
          to buy a car. Further, all initial costs are subject to negotiation during your bargaining with the dealer.
        </p>
        <p>
          The Federal Consumer Leasing Act requires the Lessor to disclose all up-front, continuing and final costs in a
          standard, easy-to-read format.
        </p>
      </>
    ),
  },
  {
    id: 'questions-to-ask',
    title: 'What questions should I ask about a car lease?',
    body: (
      <>
        <p>
          Here is a list of questions you may want to ask the dealer before you enter into a car lease (you'll know some
          of the answers):
        </p>
        <ul>
          <li>
            What kinds of leases are available and what are the differences? We explained the two main types of leases
            earlier, but dealers may have variations.
          </li>
          <li>What are the initial costs of leasing the vehicle?</li>
          <li>Are there any ongoing costs associated with leasing?</li>
          <li>Does a trade-in decrease initial or ongoing costs?</li>
          <li>What happens if I exceed the mileage specified in my lease?</li>
          <li>How will my mileage allowance be enforced if I take an early termination or a purchase option?</li>
          <li>Can I sublease if I fall behind in my payments or want to stop leasing?</li>
          <li>What happens if I want to terminate my lease before the agreement is up?</li>
        </ul>
        <Callout label="Tip">
          <p>Look for a "premature termination" clause, which provides for termination prior to the end of the lease term.</p>
        </Callout>
        <ul>
          <li>What are my options at the end of my lease?</li>
          <li>What costs and charges can I expect to pay at the end of the lease?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security-deposit',
    title: 'Why is a security deposit required when I lease a car?',
    body: (
      <p>
        The Lessor is allowed to keep the security deposit if you owe money at the end of your lease or if you missed a
        monthly payment. The security deposit can also be used by the dealer to cover damage to the car or mileage in
        excess of the limit specified in the lease. If you do not owe any money on the lease at the end of the term, then
        your security deposit is returned to you.
      </p>
    ),
  },
  {
    id: 'end-of-lease-charges',
    title: 'How much can a dealer charge me at the end of an auto lease?',
    body: (
      <>
        <p>
          The Consumer Leasing Act (CLA) limits how much the dealer can collect at the end of the lease period. The CLA
          says dealers cannot collect more than three times the average monthly payment. However, the dealer can collect
          a higher amount in the following circumstances:
        </p>
        <ul>
          <li>The vehicle has unreasonable wear and tear, or miles greater than specified in the lease</li>
          <li>You agreed to pay a greater amount than specified in the original contract; or</li>
          <li>The Lessor wins a lawsuit asking for a greater amount.</li>
        </ul>
        <p>
          The dealer also has the option of selling the car at the end of the lease term. If the car is sold for less
          than the residual value stated in your leasing contract, you could be obligated to pay as much as three
          monthly payments to make up the difference.
        </p>
        <Callout label="Tip">
          <p>
            Although dealers will generally not risk the goodwill of their customers and sell leased cars for less than
            the residual value just to move the car quickly, you may want to negotiate to include the right to approve
            the final sales price of the leased vehicle as part of your lease agreement.
          </p>
        </Callout>
        <p>
          <strong>Here are a few other things you should know:</strong>
        </p>
        <ul>
          <li>If you stay under the mileage limit, you don't get a refund.</li>
          <li>
            If you buy a car at the end of a closed-end lease and you go over your mileage allowance, you probably won't
            have to pay for excess mileage.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ongoing-disclosures',
    title: 'What ongoing lease items must the dealer disclose?',
    body: (
      <p>
        The Consumer Leasing Act requires dealers to disclose the total number of payments, the amount of each payment,
        the total amount of all payments, and the due date or schedule of payments. There is usually a penalty for late
        payment, which the Lessor must also disclose to you.
      </p>
    ),
  },
  {
    id: 'maintenance',
    title: 'What about maintenance?',
    body: (
      <p>
        Maintenance is part of the lease and specifies whether the dealer assumes the maintenance expenses or the
        customer (you) assumes these expenses. If the dealer is to provide repair and maintenance, you will have to bring
        the car to the dealership in accordance with the manufacturer's suggested schedule in order to keep the warranty
        coverage. Even if you have to pay for repair and scheduled maintenance, you usually have to observe the
        manufacturer's scheduled maintenance in order not to jeopardize warranty coverage.
      </p>
    ),
  },
  {
    id: 'final-costs',
    title: 'What are the typical final (lease-end) costs?',
    body: (
      <>
        <p>Final costs include:</p>
        <h3>Excess mileage charges</h3>
        <p>
          Mileage limitations usually occur with a closed-end lease. If you have gone over the allowable mileage at the
          end of your lease, you will have to pay a fee.
        </p>
        <Callout label="Tip">
          <p>
            Consider carefully whether the mileage allowance is enough. Make some calculations of the miles you have
            driven per week, month, and year to find out whether the mileage allowance is sufficient.
          </p>
          <p>
            Be aware that the low-mileage lease deals currently popular in certain areas offer mileage limits that are
            insufficient for many people. If you think you need more than the allowable mileage, negotiate a larger
            mileage allowance in your lease.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            If you buy a car at the end of a closed-end lease and you go over your mileage allowance, you probably won't
            have to pay for excess mileage.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>If you stay under the mileage limit, you don't get a refund.</p>
        </Callout>
        <p>
          With an open-end lease, although there is no penalty, if you exceed the mileage limit the appraisal value at
          the end of the lease term will usually be lower.
        </p>
        <h3>Default fees</h3>
        <p>
          These cover any payments or security deposits that the dealer does not receive from you and legal fees and
          costs the dealer incurs to repossess the car.
        </p>
        <h3>Excessive wear and tear charges</h3>
        <p>
          You'll have to pay charges for excessive wear and tear when you return the car at the end of the lease unless
          the contract reads otherwise. The dealer must tell you in writing the specific definition of excessive wear and
          tear. Generally, it means anything beyond normal usage (mechanical or physical).
        </p>
        <h3>Disposition charges</h3>
        <p>
          These are the costs of cleaning the car, giving it a tune-up, and doing final maintenance. If the agreement
          does not state otherwise, the dealer may pass these costs on to you.
        </p>
      </>
    ),
  },
  {
    id: 'purchase-option',
    title: 'What is a lease-purchase option?',
    body: (
      <>
        <p>
          Your lease may include the option to purchase the car at the end of the lease term. This option is usually
          found in open-end rather than closed-end leases. The dealer must tell you the estimated residual value of the
          car and the formula that will be used to determine your purchase price at the end of the lease.
        </p>
        <Callout label="Tip">
          <p>
            If you think you might want to buy the car, be sure the purchase option is in your lease before you sign it;
            otherwise you'll have to renegotiate later, at which time you may have less bargaining power.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'early-termination',
    title: 'What is a lease early-termination option?',
    body: (
      <p>
        If you terminate your lease after, say, 36 months on a 48-month lease, you will have to pay an extra charge,
        based on the difference between the residual value of the car at that time and the estimated residual value at
        the end of the lease term (stated in the contract). The difference between these two may be great. In most lease
        agreements, you must keep the car at least 12 months. Before you sign the contract the dealer must tell you
        whether you can terminate early and what the cost is.
      </p>
    ),
  },
  {
    id: 'capitalized-cost-reduction',
    title: 'What is a "capitalized cost reduction"?',
    body: (
      <>
        <p>
          This is similar to a down payment. The dealer may ask you to put a certain amount of money down before leasing.
          The amount of the capitalized cost reduction varies with the business custom prevalent in the geographic area
          and the credit rating of the customer. The larger the down payment is, the smaller the monthly payment under
          the lease is; however, most people who want to lease instead of buy don't want to put down a large down
          payment, which is one of the major advantages of leasing.
        </p>
        <Callout label="Tip">
          <p>Trading in your old car can reduce your down payment and/or your monthly payments.</p>
        </Callout>
      </>
    ),
  },
];

export default function BuyingOrLeasingFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-maintaining-a-car"
      page="Buying or Leasing Your Next Car: Frequently Asked Questions"
      title={
        <>
          Buying or Leasing Your Next Car: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about whether to lease or buy, getting the best price on a new car, negotiating a purchase or a lease, how leases work, and the costs and options at the end of a lease."
      sections={sections}
    />
  );
}
