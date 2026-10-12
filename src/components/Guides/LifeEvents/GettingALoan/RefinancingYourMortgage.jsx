import GuideArticle, { Callout, FigureTable, RelatedGuide } from '../../GuideArticle.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=68 (Refinancing Your Mortgage: When and How), word
// for word. Back-to-top anchors and the row of asterisks before the closing paragraph are omitted,
// "1-1/2" is "1½", "$ 75" is "$75", the "Lock-In" step's last sentence gets its full stop, the
// "Tip:" lead-ins are the boxes' labels, and the calculator link goes to the firm's calculator page
// instead of cpasitesolutions.com. In the first table the library shows a
// monthly difference of "16" for an 11 percent mortgage; it is 164 ($714 − $550, and $1,968 a year
// ÷ 12), and that is the figure here.
// Address: /guides/life-events/getting-a-loan/refinancing-your-mortgage (articlePages in
// src/data/guides.js). The guide's earlier address under Preparing for College redirects here.

const related = guide('life-events.php');
const fixedOrAdjustable = calculator(['hom10', 'Which Is Better: Fixed or Adjustable-Rate Mortgage?']);

const external = { target: '_blank', rel: 'noopener noreferrer' };

// Sample refinancing savings on a $75,000, 30-year fixed-rate mortgage: present rate, current
// monthly payment, new monthly payment, monthly difference, annual difference.
const savingsAt8 = [
  ['9%', '603', '550', '53', '636'],
  ['9.5%', '631', '550', '81', '972'],
  ['10%', '658', '550', '108', '1296'],
  ['10.5%', '686', '550', '136', '1632'],
  ['11%', '714', '550', '164', '1968'],
  ['11.5%', '743', '550', '193', '2316'],
  ['12%', '771', '550', '221', '2652'],
];

const savingsAt6 = [
  ['9%', '603', '450', '153', '1836'],
  ['9.5%', '631', '450', '181', '2172'],
  ['10%', '658', '450', '208', '2496'],
  ['10.5%', '686', '450', '236', '2832'],
  ['11%', '714', '450', '264', '3168'],
  ['11.5%', '743', '450', '293', '3516'],
  ['12%', '771', '450', '321', '3852'],
];

const savingsColumns = (rate) => [
  'Your Present Mortgage Rate',
  'Current Monthly Payment',
  `Monthly Payment at ${rate}`,
  `Monthly Difference in Payment at ${rate}`,
  `Annual Difference in Payment at ${rate}`,
];

const sections = [
  {
    id: 'who-can-benefit',
    title: 'Who Can Benefit From Refinancing?',
    body: (
      <>
        <p>
          Refinancing does not make good financial sense for everyone. A general rule of thumb is that refinancing is
          worthwhile if the current interest rate on your mortgage is, at least, two percentage points higher than the
          prevailing market rate. This figure is generally accepted as the safe margin when balancing the costs of
          refinancing a mortgage against the savings. However, a rule of thumb is not ironclad: every individual's
          circumstances need to be analyzed. If your loan amount and the particular circumstances warrant it, you might
          choose to refinance a loan that is only 1½ percentage points higher than the current rate.
        </p>
        <Callout label="Tip">
          <p>
            Lenders may be offering zero point loans and low-cost refinancing. Therefore, even if your rate change is
            less than one percentage point, you may be able to save some money by refinancing.
          </p>
        </Callout>
        <p>
          Most experts say that it takes at least three years to fully realize the savings from a lower interest rate,
          given the costs of refinancing. You may find, however, that you could recoup the refinancing costs in a
          shorter time than three years. Again, every homeowner's circumstances should be analyzed individually.
          Generally, refinancing is a good idea if you:
        </p>
        <ul>
          <li>
            Want to get out of a high-interest rate loan to take advantage of lower rates. (This is a good idea only if
            you intend to stay in the house long enough to make the additional fees worthwhile.)
          </li>
          <li>
            Want to convert to an ARM with a lower interest rate or more protective features (such as a better rate and
            payment caps) than the ARM you currently have.
          </li>
          <li>Want to build up equity more quickly by converting to a loan with a shorter term.</li>
          <li>
            Want to draw on the equity built up in your home to get cash for a major purchase or for your children's
            education.
          </li>
          <li>
            Have an adjustable-rate mortgage (ARM) and want a fixed-rate loan in order to know exactly what the mortgage
            payment will be for the life of the loan.
          </li>
        </ul>
        <Callout label="Planning Aid">
          <p>
            For information on fixed rates, see the Financial Calculator:{' '}
            <a href={fixedOrAdjustable.href} {...external}>
              {fixedOrAdjustable.title}
            </a>
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            If you decide that refinancing is not worth the costs, ask your lender whether you may be able to obtain
            all or some of the new terms you want by agreeing to a modification of your existing loan instead of a
            refinancing.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'making-the-decision',
    title: 'How to Go About Making the Decision',
    body: (
      <>
        <p>
          Talk to several lenders to find out what the current rates are and what costs are associated with
          refinancing. These costs (explained in more detail below) include appraisals, attorney's fees, and points.
          Once you know what the costs will be, determine what your new payment would be if you refinanced. You can
          then estimate how long it will take to recover the costs of refinancing by dividing your closing costs by the
          difference between your new and old payments.
        </p>
        <p>
          Be aware that the amount of money that you ultimately save depends on many factors, including your total
          refinancing costs, whether you sell your home in the near future, and the effects of refinancing on your
          taxes.
        </p>
        <p>If you are thinking of refinancing an adjustable rate mortgage (ARM), you should also consider these questions:</p>
        <ul>
          <li>
            Is the next interest rate adjustment on your existing loan likely to increase your monthly payments
            substantially? Will the new interest rate be two or three percentage points higher than the prevailing rates
            being offered for either fixed-rate loans or other ARMs?
          </li>
          <li>
            If the current mortgage sets a cap on your monthly payments, are those payments large enough to pay off
            your loan by the end of the original term? Will refinancing to a new ARM or a fixed-rate loan enable you to
            pay your loan in full by the end of the term?
          </li>
        </ul>
        <p>
          You also might want to consider refinancing if you have an adjustable rate mortgage with high or no limits on
          interest rate increases. You might want to switch to a fixed-rate mortgage or to an adjustable-rate mortgage
          that limits changes in the rate at each adjustment date as well as over the life of the loan.
        </p>
      </>
    ),
  },
  {
    id: 'refinancing-costs',
    title: 'How to Determine Your Refinancing Costs',
    body: (
      <>
        <p>
          When you refinance your mortgage, you usually pay off your original mortgage and sign a new loan. With the
          new loan, you again pay most of the same costs you paid to get your original mortgage, including settlement
          costs, discount points, and other fees. You may also be charged a penalty for paying off your original loan
          early, called a prepayment penalty if such a practice is not prohibited by your state.
        </p>
        <p>
          The total expense for refinancing a mortgage depends on the interest rate, number of points, and other costs
          required to obtain a loan. You should plan on paying an average of 3 to 6 percent of the outstanding
          principal in refinancing costs, plus any prepayment penalties and the costs of paying off any second
          mortgages that may exist.
        </p>
        <Callout label="Tip">
          <p>
            When shopping for a lender, ask each one for a list of charges and costs you must pay at closing. Some
            lenders may require that some of these costs be paid at the time of application.
          </p>
        </Callout>
        <p>
          The fees described below are the ones that you are most likely to encounter in a refinancing. (Some of the
          costs are expanded on in the paragraphs that follow.) Because costs may vary significantly from area to area
          and from lender to lender, the following chart should be regarded only as an estimate. Your actual closing
          costs may be higher or lower than the ranges indicated below.
        </p>
        <ul>
          <li>Application Fee $75 to $300</li>
          <li>Appraisal Fee $300 to $700</li>
          <li>Survey Costs $150 to $400</li>
          <li>Homeowners Hazard Insurance $300 to $1,000</li>
          <li>Lenders Attorney's Review Fees $500 to $1,000</li>
          <li>Title Search &amp; Title Insurance $700 to $900</li>
          <li>Home Inspection Fees $175 to $350</li>
          <li>Loan Origination Fees 1% - 2% of loan</li>
          <li>Mortgage Insurance 0.5% to 1.0%</li>
          <li>Points 1% to 3%</li>
        </ul>
        <Callout label="Tip">
          <p>
            To save on some of these costs, check with the lender who holds your current mortgage. The lender may be
            willing to waive some of them, especially if the work relating to the mortgage closing is still current
            (such as the fees for the title search, surveys, inspections, and so on).
          </p>
        </Callout>
        <p>Let's look at some of these costs in greater detail:</p>
        <p>
          <em>Application Fee.</em> This charge imposed by your lender covers the initial costs of processing your loan
          request and checking your credit report.
        </p>
        <p>
          <em>Title Search and Title Insurance.</em> This charge will cover the cost of examining the public record to
          confirm ownership of the real estate. It also covers the cost of a policy, usually issued by a title insurance
          company that insures the policyholder in a specific amount for any loss caused by discrepancies in the title
          to the property.
        </p>
        <Callout label="Tip">
          <p>
            Be sure to ask the title insurance company carrying the present policy if it can re-issue your policy at a
            re-issue rate. You could save up to 70 percent of what it would cost you for a new policy.
          </p>
        </Callout>
        <p>
          <em>Lender's Attorney's Review Fees.</em> The lender will usually charge you for fees paid to the lawyer or
          company that conducts the closing for the lender. Settlements are conducted by lending institutions, title
          insurance companies, escrow companies, real estate brokers, and attorneys for the buyer and seller. In most
          situations, the person conducting the settlement is providing a service to the lender. You may also be
          required to pay for other legal services relating to your loan which are provided to the lender.
        </p>
        <Callout label="Tip">
          <p>You may want to retain your own attorney to represent you at all stages of the transaction, including settlement.</p>
        </Callout>
        <p>
          <em>Loan Origination Fees.</em> The origination fee is charged for the lender's work in evaluating and
          preparing your mortgage loan.
        </p>
        <p>
          <em>Points.</em> Points are prepaid finance charges imposed by the lender at closing to increase the lender's
          yield beyond the stated interest rate on the mortgage note. One point equals one percent of the loan amount.
          For example, one point on a $75,000 loan would be $750. The total number of points a lender charges will
          depend on market conditions and the interest rate to be charged. To give you the lowest rate offered, most
          lenders will charge several points, and the total cost can run between three and six percent of the total
          amount you borrow. For example, on a $100,000 mortgage, the lender might charge you between $3,000 and
          $6,000. However, some lenders may offer zero points at a higher interest rate, which may significantly reduce
          your initial costs although your payments may be somewhat higher.
        </p>
        <Callout label="Tip">
          <p>
            In some cases, the points you pay can be financed by adding them to the loan amount. This means that the
            points will be added to your loan balance, and you will pay a finance charge on them. Although this may
            enable you to get the financing, it also will increase the amount of your monthly payments.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            To decide what combination of rate and points is best for you, balance the amount you can pay up front with
            the amount you can pay monthly. The less time you keep the loan, the more expensive points become. If you
            plan to stay in your house for a long time, then it may be worthwhile to pay additional points to obtain a
            lower interest rate.
          </p>
        </Callout>
        <p>
          <em>Appraisal Fee.</em> This fee pays for an appraisal which is a supportable and defensible estimate or
          opinion of the value of the property.
        </p>
        <p>
          <em>Prepayment Penalty.</em> A prepayment penalty on your present mortgage could be the greatest deterrent to
          refinancing. The practice of charging money for an early payoff of the existing mortgage loan varies by
          state, type of lender, and type of loan. Prepayment penalties are forbidden on various loans including loans
          from federally chartered credit unions, FHA and VA loans, and some other home-purchase loans. The mortgage
          documents for your existing loan will state if there is a penalty for prepayment. In some loans, you may be
          charged interest for the full month in which you prepay your loan.
        </p>
        <p>
          <em>Miscellaneous.</em> Depending on the type of loan you have and other factors, another major expense you
          might face is the fee for a VA loan guarantee, FHA mortgage insurance, or private mortgage insurance. There
          are a few other closing costs in addition to these.
        </p>
      </>
    ),
  },
  {
    id: 'tax-situation',
    title: 'How Does Refinancing Affect Your Tax Situation?',
    body: (
      <>
        <p>
          With a lower interest rate on your home loan, you will have less interest to deduct on your income tax
          return. That, of course, may increase your tax payments and decrease the total savings you might obtain from
          a new, lower-interest mortgage.
        </p>
        <p>
          Interest (points) paid up front for refinancing must be deducted over the life of the loan, not in the year
          you refinance unless the loan is for home improvements. This means that if you paid a certain number of
          points, you would have to spread the tax deduction for those points over the life of the loan. If, however,
          the refinancing is for home improvements (or a portion of the loan is for this purpose) you may be able to
          deduct the points (or a portion of the points) under certain circumstances.
        </p>
        <p>
          If you are thinking about refinancing your mortgage, you might want to consider other types of mortgages.
          For example, you might want to look into a 15-year, fixed-rate mortgage. In this plan, your mortgage payments
          are somewhat higher than a longer-term loan, but you pay substantially less interest over the life of the
          loan and build equity more quickly. Of course, this also means you have less interest to deduct on your
          income tax return.
        </p>
      </>
    ),
  },
  {
    id: 'best-deal',
    title: 'Tips for Getting the Best Deal',
    body: (
      <>
        <p>Here are some tips for getting the best deal when refinancing of your mortgage:</p>

        <h3>1. Shop Around</h3>
        <p>
          If you decide to refinance your mortgage, it pays to shop around by calling several lending institutions to
          find out what interest and fees they charge. This helps you get the best deal available. Also, ask each about
          their "annual percentage rate" (APR) and compare them. The APR will tell you the total credit costs of the
          refinancing, including interest, points, and other charges.
        </p>
        <Callout label="Tip">
          <p>
            You do not have to refinance your mortgage with the same lender that provided your original mortgage.
            However, to keep your business, some lenders will offer their original mortgage customers the incentive of
            lower mortgage interest rates, sometimes with reduced closing costs.
          </p>
        </Callout>

        <h3>2. Obtain a "Lock-In" or Guarantee</h3>
        <p>
          If you decide to apply for refinancing with a particular lender, and if you do not want to let the interest
          rate float until closing, then get a written statement guaranteeing the interest rate and the number of
          discount points that you will pay at closing. This binding commitment, or lock-in, ensures that the lender
          will not raise these costs even if rates increase before you settle on the new loan. You might also consider
          requesting an agreement where the interest rate can decrease but not increase before closing. If you cannot
          get the lender to put this information in writing, you may want to choose one that will.
        </p>
        <p>
          Most lenders place a limit on the length of time (60 days for example) that they will guarantee the interest
          rate. You must sign the loan during that time or lose the benefit of that particular rate. Because many
          people are refinancing their mortgages, there may be a delay in processing the papers. Therefore, contact
          your loan officer periodically to check on the progress of your loan approval and to see if additional
          information is needed.
        </p>

        <h3>3. Review the Disclosure Form</h3>
        <p>
          When refinancing, the lender must give you a written statement of the costs and terms of the financing
          before you become legally obligated for the loan. This is required under the Truth in Lending Act. Typically,
          you receive this information around the time of settlement, although some lenders provide it earlier. Review
          this statement carefully before you sign the loan. The disclosure tells you the APR, finance charge, amount
          financed, payment schedule, and other important credit terms.
        </p>
        <RelatedGuide guide={related([53, 'Mortgage Lock-ins: Questions To Ask'])}>
          Please see the Financial Guide:
        </RelatedGuide>

        <h3>4. Be Aware Of Your Right to Rescind</h3>
        <p>
          If you refinance with a different lender, or if you borrow beyond your unpaid balance with your current
          lender, you also must be given the right to rescind the loan. In these loans, you have the right to rescind
          or cancel the transaction within three business days following settlement, receipt of your Truth in Lending
          disclosures, or receipt of your cancelation notice, whichever occurs last.
        </p>

        <h3>5. Find Out If the Application Fee Is Refundable</h3>
        <p>
          When you apply for a mortgage, some lenders require you to pay a special charge to cover the costs of
          processing your application. The amount of this fee varies but generally is in the range of $75 to $300.
          Usually, you must pay this charge at the time you file the application. Some lenders do not refund this
          application fee if you are not approved for the loan or if you decide not to take it.
        </p>
        <p>
          If you elect to cancel the transaction within three business days after you close the loan, as discussed
          above, you are entitled to a refund of all costs and charges imposed for the credit transaction.
        </p>
        <Callout label="Tip">
          <p>
            Before you apply for a mortgage, ask lenders whether they charge an application fee. If they do, find out
            how much it is and under what circumstances and to what extent it is refundable.
          </p>
        </Callout>
        <p>
          As you can see, there are many financial factors to consider when refinancing a mortgage, so you may want to
          think about getting professional guidance if you're considering your refinancing options.
        </p>
      </>
    ),
  },
  {
    id: 'sample-savings',
    title: 'Sample Refinancing Savings',
    body: (
      <>
        <p>
          The charts below illustrate the monthly and yearly differences in your mortgage payments if you refinanced to
          a 6 or an 8 percent, 30-year fixed-rate mortgage for $75,000. Remember, however, that the actual amount you
          may save by refinancing depends on many factors, such as your tax bracket and how long you plan to remain in
          your home.
        </p>
        <FigureTable
          label="Savings from refinancing a $75,000 mortgage at 8 percent"
          columns={savingsColumns('8%')}
          rows={savingsAt8}
          wide
        />
        <FigureTable
          label="Savings from refinancing a $75,000 mortgage at 6 percent"
          columns={savingsColumns('6%')}
          rows={savingsAt6}
          wide
        />
      </>
    ),
  },
];

export default function RefinancingYourMortgage() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-a-loan"
      page="Refinancing Your Mortgage"
      title={
        <>
          Refinancing Your Mortgage: <em>When and How</em>
        </>
      }
      lead="If you bought your home when mortgage rates were higher than today's rates are, or have an adjustable-rate loan and would like to change it to a fixed rate, then you are probably a candidate for refinancing your mortgage. Here are some factors to consider when deciding whether to refinance and how to get the best deal."
      sections={sections}
      numbered={false}
    >
      <p>
        If you decide to refinance your mortgage, you can expect the process to be similar to what you went through in
        obtaining the original mortgage because in reality, refinancing a mortgage is simply taking out a new mortgage.
        You will encounter many of the same procedures and the same types of costs the second time around. In this
        Financial Guide, we will give you some pointers on how to get the best possible deal.
      </p>
    </GuideArticle>
  );
}
