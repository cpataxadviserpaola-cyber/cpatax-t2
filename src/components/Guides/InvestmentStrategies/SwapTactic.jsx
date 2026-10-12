import GuideArticle, { Callout } from '../GuideArticle.jsx';

const irsInstructions = 'https://www.irs.gov/instructions/i8824';

const sections = [
  {
    id: 'qualifying-property',
    title: 'What property may qualify',
    body: (
      <>
        <p>
          Section 1031 of the U.S. tax code may let an investor defer recognition of gain when exchanging real
          property held for business or investment for other real property held for business or investment. The
          properties do not need to be identical: for example, different types of U.S. real estate may qualify if
          the other requirements are met.
        </p>
        <p>
          The rules generally do not cover a personal residence, property held mainly for sale, stocks, or other
          personal property. A vacation home is not automatically eligible just because it is rented occasionally;
          its use and holding purpose matter. Special rules also apply to exchanges involving related parties.
        </p>
      </>
    ),
  },
  {
    id: 'deferred-exchange',
    title: 'Plan a deferred exchange in advance',
    body: (
      <>
        <p>
          Many exchanges are structured through a qualified intermediary. The intermediary must be involved before
          you transfer the property, and you generally cannot receive or control the sale proceeds yourself. If
          proceeds are paid to you, the exchange may fail to qualify for deferral.
        </p>
        <p>For a deferred exchange, federal rules generally require you to:</p>
        <ul>
          <li>Identify potential replacement property in writing within 45 days after transferring your property.</li>
          <li>
            Receive the replacement property by the earlier of 180 days after the transfer or the due date of your
            tax return for that year, including extensions.
          </li>
        </ul>
        <p>
          These are firm deadlines, and the identification rules limit which properties can be listed. Coordinate
          with a qualified intermediary and tax professional before closing on the property you plan to exchange.
        </p>
      </>
    ),
  },
  {
    id: 'cash-and-debt',
    title: 'Cash, other property, and debt can affect the tax',
    body: (
      <>
        <p>
          Receiving cash or non-like-kind property in an exchange may result in taxable gain, often called “boot.”
          Debt relief can also affect the calculation: if liabilities on the replacement property are lower, the
          difference may be treated as boot unless offset by other amounts you contribute. The precise result
          depends on the transaction and tax calculations.
        </p>
        <p>
          Do not assume that exchanging properties of similar value makes the entire transaction tax-deferred.
          Have the intermediary and your tax professional review cash, property, and liabilities on both sides of
          the exchange.
        </p>
      </>
    ),
  },
  {
    id: 'reporting-and-basis',
    title: 'Report the exchange and track your basis',
    body: (
      <>
        <p>
          A qualifying exchange generally defers gain rather than erasing it. The deferred gain affects the tax
          basis of the replacement property, so keep records of the original property’s adjusted basis, exchange
          costs, liabilities, and any cash or other property received.
        </p>
        <p>
          Report a like-kind exchange on IRS Form 8824 with the federal tax return for the year of the exchange.
          Related-party transactions and other special circumstances can change the reporting or timing of deferred
          gain.
        </p>
      </>
    ),
  },
];

export default function SwapTactic() {
  return (
    <GuideArticle
      category="investment-strategies"
      topic="/guides/life-events/getting-married/investment-basics"
      page="Like-Kind Exchanges"
      title="Swap Tactic Lets You Defer Capital Gains Tax"
      lead="A Section 1031 like-kind exchange may defer gain when qualifying business or investment real estate is exchanged for other real estate. Eligibility, deadlines, and the handling of proceeds are strict."
      sections={sections}
    >
      <p>
        Review the{' '}
        <a href={irsInstructions} target="_blank" rel="noopener noreferrer">
          IRS instructions for Form 8824
        </a>{' '}
        and get tax advice for your specific transaction.
      </p>
      <Callout label="Important">
        <p>
          A Section 1031 exchange is technical and must be structured before the property is transferred. Consult a
          qualified intermediary and tax professional before you sell or exchange real estate.
        </p>
      </Callout>
    </GuideArticle>
  );
}
