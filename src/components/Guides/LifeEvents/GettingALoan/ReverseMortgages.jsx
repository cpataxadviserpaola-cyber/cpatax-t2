import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=96 (Reverse Mortgages: How They Can Enhance Your
// Retirement), word for word. Back-to-top anchors omitted (handled by layout). The library's
// opening paragraph shows a garbled dash ("â€“"), which is a dash here; the tips, notes and the
// example keep the library's labels (its tips have no "Tip:" lead-in); the tip "The line of credit
// offers the most flexibility…" gets its full stop; "www.eldercare.gov" links to the address it now
// redirects to (eldercare.acl.gov). The guide isn't listed on the library's Getting a Loan page;
// it sits in this folder beside the other mortgage guides, which point to it.
// Address: /guides/life-events/getting-a-loan/reverse-mortgages (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'how-it-works',
    title: 'How Does A Reverse Mortgage Work?',
    body: (
      <>
        <p>
          A reverse mortgage is a type of home equity loan that allows you to convert some of the equity in your home
          into cash while you continue to own the home. Reverse mortgages operate like traditional mortgages, only in
          reverse. Rather than paying your lender each month, the lender pays you.
        </p>
        <p>
          Reverse mortgages differ from home equity loans in that most reverse mortgages do not require any repayment
          of principal, interest, or servicing fees as long as you live in the home. The loan is repaid when you die,
          sell your home, or when your home is no longer your primary residence. The proceeds of a reverse mortgage
          generally are tax-free, and many reverse mortgages have no income restrictions. When the homeowner dies or
          moves out, the loan is paid off by a sale of the property. Any leftover equity belongs to the homeowner or
          the heirs.
        </p>
        <p>
          In other words, the primary benefit of a reverse mortgage is that it allows homeowners who are age 62 and
          over to keep living in their homes and to use their equity for whatever purpose they choose. A reverse
          mortgage might be used to cover the cost of home health care, to pay off an existing mortgage to stop a
          foreclosure, or to support children or grandchildren.
        </p>
      </>
    ),
  },
  {
    id: 'who-qualifies',
    title: 'Who Qualifies for a Reverse Mortgage?',
    body: (
      <ul>
        <li>Applicants must be 62 years of age.</li>
        <li>
          Potential borrowers must either completely own their home or only have a couple of mortgage payments
          remaining.
        </li>
        <li>Reverse mortgage borrowers must live in the home being used as collateral.</li>
        <li>Borrowers must have an excellent credit history in order to qualify for reverse mortgage loans.</li>
        <li>All homeowners are required to sign the paperwork in order to secure the reverse mortgage.</li>
        <li>Primarily, single family one-unit dwellings are required to qualify for a reverse mortgage.</li>
        <li>
          During the reverse mortgage process, the homeowners are responsible for property taxes and repairs to the
          property as they still own their home.
        </li>
      </ul>
    ),
  },
  {
    id: 'payments',
    title: 'How Payments Are Received',
    body: (
      <>
        <p>
          Depending on the lender, borrowers can choose to receive monthly payments, a lump sum, a line of credit, or
          some combination.
        </p>
        <Callout label="Tip">
          <p>
            The line of credit offers the most flexibility by allowing homeowners to write checks on their equity when
            needed up to the limit of the loan.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'tax-rules',
    title: 'Tax Rules',
    body: (
      <>
        <p>
          The reverse mortgage payments you receive are nontaxable. Further, if you receive Social Security
          Supplemental Security Income, reverse mortgage payments do not affect your benefits, as long as you spend
          them within the month you receive them. This rule is also true for Medicaid benefits in most states.
        </p>
        <Callout label="Tip">
          <p>
            To find out the exact impact of reverse mortgage payments on benefits you are receiving, check with a
            benefits specialist at your local area agency on aging or legal services office.
          </p>
        </Callout>
        <p>Interest on reverse mortgages is not deductible until you pay off your reverse mortgage debt.</p>
      </>
    ),
  },
  {
    id: 'maximum-loan-amounts',
    title: 'Maximum Loan Amounts',
    body: (
      <>
        <p>
          Maximum loan amount limits are based on the value of the home, the borrower's age and life expectancy, the
          loan's interest rate, and whatever the lender's policies are. Maximum loan amounts range (depending on the
          lender) from 50% to 75% of the home's fair market value. The general rule is: The older the homeowner and
          the more valuable the home, the more money will be available.
        </p>
        <Callout label="Example">
          <p>
            A 65-year-old homeowner with a home worth $150,000 would be able to get a $30,000 lump sum or credit line. A
            90-year-old homeowner with the same home could be eligible for as much as $94,000.
          </p>
        </Callout>
        <p>
          All reverse mortgages have non-recourse clauses, meaning the debt cannot be more than the home's value. Thus,
          the lender seeks repayment from heirs, family members, or the borrower's income or other assets.
        </p>
      </>
    ),
  },
  {
    id: 'negative-aspects',
    title: 'Negative Aspects',
    body: (
      <>
        <p>Here are some of the downside aspects of reverse mortgages.</p>

        <h3>You Incur a Large Amount of Interest Debt</h3>
        <p>
          Reverse mortgages are rising-debt loans: The interest is added to the loan balance each month, since it is
          not paid currently, and the total interest you owe increases greatly over time as the interest compounds.
        </p>
        <Callout label="Note">
          <p>Some plans provide for fixed rate interest. Others have adjustable rates that change based on market conditions.</p>
        </Callout>

        <h3>Fewer Assets for Heirs</h3>
        <p>Reverse mortgages use up the equity in your home, leaving fewer assets for your heirs.</p>

        <h3>High Costs</h3>
        <p>
          The high up-front costs of reverse mortgage may make them less attractive to some people. All three types of
          plans charge origination fee, interest rate, closing costs, and servicing fees. Insured plans also charge
          insurance premiums.
        </p>
        <Callout label="Tip">
          <p>
            If you are forced to move soon after taking the reverse mortgage (e.g., because of illness), you will almost
            certainly end up with a great deal less equity to live on than if you had simply sold the house. This is
            particularly true in the case of loans terminated in five years or less.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Your lender may permit you to finance these costs, so that you won't have to pay them up front. But they
            will be added to your loan amount. Because of the high up-front costs on all reverse mortgages, effective
            interest rates for short-term loans are out of this world.
          </p>
        </Callout>

        <h3>Adjustable Interest Rates</h3>
        <p>
          With many reverse mortgage plans, interest rates are adjustable annually or monthly and tied to a financial
          index, in some cases with limits on how far the rate can go up or down. Reverse mortgages with interest rates
          that adjust monthly have no limit. Bear in mind that the higher the rate, the faster your equity is used up.
        </p>
        <p>
          In order to give a fixed rate, one lender requires appreciation sharing, with which it gets a part of any
          increase in the home's value over and above the debt. Another lender offers percent of value pricing,
          collecting a fixed percentage of the home's value when the loan comes due. The latter option can be very
          expensive if the loan must be paid off after only a few years.
        </p>
      </>
    ),
  },
  {
    id: 'is-it-for-you',
    title: 'Is A Reverse Mortgage For You?',
    body: (
      <>
        <p>
          Although a reverse mortgage may be the answer for house-rich and cash-poor retirees, they are not for
          everyone. For instance, if you plan to move a few years down the road or there is a possibility you will have
          to move due to illness or any other unforeseen event, then a reverse mortgage makes no sense. They make the
          most sense for those who plan to stay in their homes permanently. Also, if you already have a substantial
          mortgage on your home, the reverse mortgage is probably not for you, since you will have to pay it off before
          you can become eligible.
        </p>
        <p>
          If you want to pass your home to your children or heirs, the reverse mortgage is also not a good choice since
          the lender will get most of the equity when the home is sold.
        </p>
      </>
    ),
  },
  {
    id: 'other-alternatives',
    title: 'Other Alternatives',
    body: (
      <>
        <p>Besides the reverse mortgage, here are some alternatives to consider.</p>
        <ul>
          <li>
            <em>Programs that help with real estate taxes, repairs.</em> Many state and local governments have programs
            that provide special purpose loans to seniors for (1) the deferral of property taxes and (2) making home
            repairs or improvements. These loans can often prevent retirees' having to sell their homes. To find out
            whether your state has a special-purpose loan program for property taxes and/or for home repairs and
            improvements, contact your state agency on aging.
          </li>
          <li>
            <em>The Qualified Personal Residence Trust (QPRT).</em> If you want to pass your home to your children or
            other heirs, this option should be considered, especially if your home is worth a great deal and you want
            to remove it from your estate for estate tax purposes. The QPRT trust allows you to keep the home for a
            certain amount of time with ownership eventually passing to your heirs.
          </li>
          <li>
            <em>The sale-leaseback.</em> You sell your home to your kids, and continue to live in it, paying them a fair
            market rent.
          </li>
        </ul>
        <Callout label="Note">
          <p>Do not arrange a sale-leaseback without professional guidance.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'good-deal',
    title: 'Getting a Good Deal',
    body: (
      <>
        <p>
          Reverse mortgages are complex financial transactions. How do you know you are getting the best deal?
          Fortunately there are laws in place (such as the Federal Truth in Lending Act) to make sure you understand
          the terms and costs involved before you sign. The Federal Truth in Lending Act requires lenders to disclose
          such things as the Annual Percentage Rate (APR) and payment terms. On plans with adjustable rates, lenders
          must provide specific information about the variable rate feature. On plans with credit lines, lenders also
          must inform you of any charges to open and use the account, such as an appraisal, a credit report, or
          attorney's fees.
        </p>
        <p>
          If you're considering a reverse mortgage, shop around. Compare your options and the terms various lenders
          offer. Learn as much as you can about reverse mortgages before you talk to a counselor or lender. That can
          help inform the questions you ask that could lead to a better deal.
        </p>
        <p>
          If you want to make a home repair or improvement or you need help paying your property taxes, then you should
          find out if you qualify for any low-cost single-purpose loans in your area. Area Agencies on Aging (AAAs)
          generally know about these programs. To find the nearest agency, visit{' '}
          <a href="https://eldercare.acl.gov/" {...external}>
            www.eldercare.gov
          </a>{' '}
          or call 1-800-677-1116. Ask about "loan or grant programs for home repairs or improvements," or "property tax
          deferral" or "property tax postponement" programs, and how to apply.
        </p>
        <p>
          All HECM lenders must follow HUD rules. And while the mortgage insurance premium is the same from lender to
          lender, most loan costs, including the origination fee, interest rate, closing costs, and servicing fees vary
          among lenders.
        </p>
        <p>
          If you live in a higher-valued home, you may be able to borrow more with a proprietary reverse mortgage, but
          the more you borrow, the higher your costs are. The best way to see key differences between a HECM and a
          proprietary loan is to do a side-by-side comparison of costs and benefits. Many HECM counselors and lenders
          can give you this important information.
        </p>
        <p>
          No matter what type of reverse mortgage you're considering, understand all the conditions that could make
          the loan due and payable. Ask a counselor or lender to explain the Total Annual Loan Cost (TALC) rates: they
          show the projected annual average cost of a reverse mortgage, including all the itemized costs.
        </p>
      </>
    ),
  },
  {
    id: 'available-plans',
    title: 'A Summary of Available Plans',
    body: (
      <>
        <p>
          This section describes the three types of reverse mortgages available. Although the FHA and lender-insured
          plans appear similar, important differences exist. This section also discusses advantages and drawbacks of
          each loan type.
        </p>

        <h3>FHA-Insured Home Equity Conversion Mortgages (HECMs)</h3>
        <p>
          Backed by the U. S. Department of Housing and Urban Development (HUD), over 90 percent of all reverse
          mortgages are HECMs. These mortgages offer several payment options:
        </p>
        <ul>
          <li>Monthly loan advances for a fixed term, or for as long as you live in the home</li>
          <li>A line of credit</li>
          <li>Monthly loan advances plus a line of credit</li>
        </ul>
        <p>
          This type of reverse mortgage is not due as long as you live in your home. With the line of credit option,
          you may draw amounts as you need them over time. Closing costs, a mortgage insurance premium, and, sometimes,
          a monthly servicing fee are required. Interest is at an adjustable rate on your loan balance. Interest rate
          changes do not affect the monthly payment, but rather how quickly your loan balance grows.
        </p>
        <p>
          The FHA-insured reverse mortgage allows you to change the way you are paid at little cost. This plan also
          protects you by guaranteeing that loan advances will continue to be made to you if a lender defaults.
          However, the downside of FHA-insured reverse mortgages is that they may provide smaller loan advances than
          lender-insured plans. Also, loan costs may be greater than with uninsured plans.
        </p>
        <p>
          The most widely available plan is the Federal Housing Administration's Government-insured Home Equity
          Conversion Mortgage (HECM) program. To qualify for an HECM loan, homeowners must be at least 62 and live in a
          single-family home or condominium that is their principal residence. Under this program, the amount of
          equity homeowners may borrow against depends on where they live, as well as on prevailing interest rates.
        </p>
        <p>
          For people who have more expensive homes or who need to borrow more, there are alternatives. A program from
          the Federal National Mortgage Association grants larger reverse mortgages on home equity.
        </p>
        <p>
          Counseling is required before homeowners can apply for an HECM loan. This counseling allows homeowners to
          discover whether a reverse mortgage is really the best answer to their cash-flow problems.
        </p>
        <Callout label="Tip">
          <p>For an approved counselor, contact any HECM lender.</p>
        </Callout>

        <h3>Single-purpose reverse mortgages</h3>
        <p>
          Offered by some state and local government agencies and nonprofit organizations, these reverse mortgages are
          the least expensive option. They are not available everywhere and can be used for only one purpose, which is
          specified by the government or nonprofit lender. For example, the lender might say the loan may be used only
          to pay for home repairs, improvements, or property taxes. Most homeowners with low or moderate income can
          qualify for these loans.
        </p>

        <h3>Proprietary reverse mortgages</h3>
        <p>
          This type of reverse mortgage is a private loan that is backed by the company that develops it. Like HECM
          loans, they may be more expensive than traditional home loans and upfront costs can be high. There are no
          income requirements and can be used for any purpose.
        </p>
        <Callout label="Tip">
          <p>
            Most private reverse mortgages are not insured. Only the strength of the lender backs whatever promises it
            may make as to payments and other terms. So if you are looking to a reverse mortgage for future income,
            rather than a lump sum up front, you are better off in a federally insured program.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Non-Profit Agencies',
    body: (
      <>
        <p>
          To obtain a current list of lenders participating in the FHA-insured program, sponsored by the Department of
          Housing and Urban Development (HUD), or additional information on reverse mortgages and other home equity
          conversion plans, contact:
        </p>
        <address className="article-address">
          <strong>
            National Reverse Mortgage Lenders Association (
            <a href="https://www.nrmlaonline.org/" {...external}>
              NRMLA
            </a>
            )
          </strong>
          <span>1400 16th St., NW</span>
          <span>Suite 420</span>
          <span>Washington, DC 20036</span>
        </address>
        <p>If you have a question or complaint concerning reverse mortgages, contact:</p>
        <address className="article-address">
          <strong>
            Federal Trade Commission (
            <a href="https://www.ftc.gov/" {...external}>
              FTC
            </a>
            )
          </strong>
          <span>Tel. 1-877-382-4357</span>
        </address>
        <p>
          <em>
            Although the FTC generally does not intervene in individual disputes, the information you provide may
            indicate a pattern or practice that requires action by the Commission.
          </em>
        </p>
      </>
    ),
  },
];

export default function ReverseMortgages() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-a-loan"
      page="Reverse Mortgages"
      title={
        <>
          Reverse Mortgages: <em>How They Can Enhance Your Retirement</em>
        </>
      }
      lead="If you're 62 or older and looking for money to finance a home improvement, pay off your current mortgage, supplement your retirement income, or pay for healthcare expenses—you may be considering a reverse mortgage. It's a product that allows you to convert part of the equity in your home into cash without having to sell your home or pay additional monthly bills. This Financial Guide explains how reverse mortgages work."
      sections={sections}
      numbered={false}
    >
      <p>Three types of reverse mortgage plans are available:</p>
      <ul>
        <li>
          Single-purpose reverse mortgages, offered by some state and local government agencies and nonprofit
          organizations
        </li>
        <li>
          Federally-insured reverse mortgages, known as Home Equity Conversion Mortgages (HECMs) and backed by the U. S.
          Department of Housing and Urban Development (HUD)
        </li>
        <li>Proprietary reverse mortgages, private loans that are backed by the companies that develop them</li>
      </ul>
      <p>
        This guide describes the similarities and differences among them and discusses the benefits and drawbacks of
        each. Since each plan differs slightly, it is important to choose the one that best meets your financial needs.
      </p>
      <p>
        The reverse mortgage is not without risk however, and knowing the pros and cons will help you acquire the best
        possible deal should you decide to go with a reverse mortgage. Staying informed of your rights and
        responsibilities as a borrower may help to minimize your financial risks and avoid the threat of losing your
        home.
      </p>
    </GuideArticle>
  );
}
