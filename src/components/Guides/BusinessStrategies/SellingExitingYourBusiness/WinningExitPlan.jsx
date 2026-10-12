import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'choose-exit',
    title: 'Compare four ways to exit a business',
    body: (
      <>
        <p>
          The source describes four exit paths: transfer ownership to family, sell to employees through an Employee
          Stock Ownership Plan (ESOP), sell to a third party, or liquidate. Compare the financial, operational, and
          personal consequences of each path before selecting a successor or committing to a sale.
        </p>
        <p>
          Choosing a successor is a central part of an exit plan. Start by deciding what you want from the transition
          and which potential successor or buyer can best meet those objectives.
        </p>
      </>
    ),
  },
  {
    id: 'family-transfer',
    title: 'Transfer ownership to family',
    body: (
      <>
        <p>
          A family transfer may support a goal of keeping the business in the family and can allow the owner to remain
          involved during a transition. The source also notes possible downsides: disagreements about fair treatment
          among siblings, family dynamics affecting control, reduced financial security, and the risk of placing the
          business with someone unable or unwilling to operate it. Consider a contingency plan if a family transfer
          cannot happen.
        </p>
        <p>
          The source also notes that a family transfer may provide younger family members with a livelihood and let
          the owner choose when to leave. Because the amount paid by a family member may not reflect the business’s
          full market value, assess whether the arrangement still supports the owner’s financial needs and the
          business’s ability to continue.
        </p>
      </>
    ),
  },
  {
    id: 'esop',
    title: 'Consider an employee ownership plan',
    body: (
      <>
        <p>
          An ESOP may provide a route for employees to acquire ownership when family members are not able or interested
          in taking over. The source describes ESOPs as qualified retirement plans holding significant employer stock
          and outlines a trust-based structure. ESOPs are subject to complex legal, valuation, financing, tax, and
          employee-benefit rules; obtain specialized professional advice before evaluating or establishing one. Do
          not rely on the source’s older tax statements as current law.
        </p>
        <p>
          In the source’s description, a trust holds cash used to purchase company shares or newly issued shares, which
          may then be allocated to employees under the plan. The guide suggests an ESOP may be worth exploring for a
          stable, established company with consistent earnings. Whether it is suitable depends on current law, the
          company’s valuation and financing capacity, plan costs, and the interests of both selling owners and
          employees.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-sale',
    title: 'Prepare for a third-party sale',
    body: (
      <>
        <p>
          A sale to an outside buyer can provide substantial proceeds at closing when the business is prepared for
          sale. The source cautions that relying on a large unpaid balance after closing can leave the seller exposed
          to the buyer’s future ability to pay. Evaluate the sale structure, payment timing, and risks with qualified
          advisers before agreeing to terms.
        </p>
        <p>
          The source emphasizes planning for the seller’s required financial proceeds before accepting a deal. If
          payment is deferred, the seller is exposed to the risk that the buyer may not pay as expected; evaluate any
          balance due after closing as contingent rather than guaranteed funds.
        </p>
      </>
    ),
  },
  {
    id: 'liquidation',
    title: 'Understand liquidation as an exit path',
    body: (
      <>
        <p>
          If there is no buyer, liquidation generally involves closing the business, selling assets, collecting
          receivables, paying outstanding bills, and distributing any remaining value. A business whose earnings
          depend heavily on the owner may have limited value as an ongoing operation, making advance planning
          important. Estimate likely proceeds and obligations before treating liquidation as a retirement plan.
        </p>
        <p>
          The source contrasts the value of a business as an operating enterprise with the value of its individual
          assets. If earnings depend on the owner’s personal work and do not support the business independently, a
          buyer may value the assets more than the operating business. It also cautions that service firms with few
          assets beyond receivables may produce especially little value in liquidation.
        </p>
      </>
    ),
  },
  {
    id: 'plan-early',
    title: 'Plan early and compare your objectives',
    body: (
      <p>
        Start by identifying what you need from an exit, who could take over, and what risks you can accept. Compare
        each route against your financial security, desired involvement after the transfer, family goals, and the
        business’s capacity to continue. Legal, tax, valuation, and financing rules change, so obtain current
        professional guidance before making a decision.
      </p>
    ),
  },
];

export default function WinningExitPlan() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/selling-exiting-your-business"
      page="Winning Exit Plan"
      title="Maximize Your Wealth With a Winning Exit Plan"
      lead="Compare family succession, employee ownership, a third-party sale, and liquidation against your goals, finances, and desired role after exit."
      sections={sections}
      numbered={false}
    />
  );
}
