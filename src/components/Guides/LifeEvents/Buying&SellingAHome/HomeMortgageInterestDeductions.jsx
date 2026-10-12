import { Link } from 'react-router';
import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=66 (Home Mortgage Interest Deductions),
// word for word from the live page.
// Address: /guides/life-events/buying-and-selling-a-home/home-mortgage-interest-deductions (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'deductibility-in-general',
    title: 'Deductibility of Home Mortgage Interest, in General',
    body: (
      <>
        <Callout label="Note">
          <p>
            For a discussion of the deductibility of points, please{' '}
            <Link to="/guides/life-events/buying-and-selling-a-home/the-deductibility-of-points">click here</Link>.
          </p>
        </Callout>
        <p>
          Generally, home mortgage interest is any interest you pay on a loan that is secured by your main home or by a
          second home. The loan may be a mortgage to buy your home, a second mortgage, a line of credit, or a home
          equity loan.
        </p>
        <p>
          You can deduct home mortgage interest as an itemized deduction only if you are legally liable for the loan. In
          other words, you cannot deduct payments you make for someone else if you are not legally liable to make them.
          Further, there must be a true debtor-creditor relationship between you and the lender.
        </p>
        <p>
          And, finally, the mortgage must be a "secured debt" on a "qualified home." These two terms are explained later.
        </p>
      </>
    ),
  },
  {
    id: 'when-fully-deductible',
    title: 'When Is Mortgage Interest Fully Deductible?',
    body: (
      <>
        <p>
          In most cases, you can deduct all of your home mortgage interest. Whether it is all deductible depends on the
          date you took out the mortgage, the amount of the mortgage, and your use of the mortgage proceeds.
        </p>
        <p>
          If all of your mortgages fit into at least one of the following three categories at all times during the year,
          you can deduct all of the interest on those mortgages. If one or more of your mortgages does not fit into any of
          these categories, you may be able to deduct part of the interest. The three categories are:
        </p>
        <ul>
          <li>A mortgage you took out on or before October 13, 1987 (grandfathered debt).</li>
          <li>
            A mortgage taken out after October 13, 1987, to buy, build, or improve your home (called home acquisition
            debt) but only if throughout the year these mortgages plus any grandfathered debt totaled $1 million or less.
            The limit is $500,000 if you're married filing separately. Starting in 2018 (and extending through tax year
            2025), the interest deduction is allowed for amounts up to $750,000 (previously $1 million) for married
            filers ($375,000 for married filing separate) in mortgage principal on homes. Existing mortgages are
            grandfathered in and homes entered into contract before December 15, 2017, and that are closed on by April 1,
            2018, are able to use the prior limit of $1 million.
          </li>
          <li>
            Home equity debt other than home acquisition debt taken out after October 13, 1987, up to a total of $100,000.
            The limit is $50,000 if you're married filing separately. Home equity debt other than home acquisition debt is
            further limited to your home's fair market value reduced by the grandfathered debt and home acquisition debt.
            <Callout label="Caution">
              <p>
                Under the TCJA of 2017, to take the interest deduction, the loan must be used to buy, build or
                substantially improve the taxpayer's home that secures the loan.
              </p>
            </Callout>
          </li>
        </ul>
        <p>
          The dollar limits for the second and third categories apply to the combined mortgages on your main home and
          second home.
        </p>
      </>
    ),
  },
  {
    id: 'what-is-secured-debt',
    title: 'What is "Secured Debt?"',
    body: (
      <>
        <p>
          You can deduct home mortgage interest only if your mortgage is a secured debt. A secured debt is one in which
          you sign an instrument (such as a mortgage, deed of trust, or land contract) that:
        </p>
        <ol>
          <li>Makes your ownership in a "qualified home" security for payment of the debt,</li>
          <li>Provides, in case of default, that your home can be used to satisfy the debt, and</li>
          <li>Is recorded or is otherwise perfected under any state or local law that applies.</li>
        </ol>
        <p>
          In other words, your mortgage is a secured debt if you put your home up as collateral to protect the interests
          of the lender. If you cannot pay the debt, your home can then serve as payment to the lender to satisfy the
          debt.
        </p>
        <Callout label="Note">
          <p>
            A debt is not secured by your home if it is secured solely because of a lien on your general assets or if it
            is a security interest that attaches to the property without your consent (such as a mechanic's lien or
            judgment lien).
          </p>
        </Callout>
        <Callout label="Note">
          <p>A debt is not secured by your home if it once was, but is no longer secured by your home.</p>
        </Callout>
        <p>
          A <em>wraparound mortgage</em> is not a secured debt unless it is recorded or otherwise perfected under state
          law.
        </p>
        <Callout label="Example">
          <p>
            Beth owns a home subject to a mortgage of $40,000. She sells the home for $100,000 to John, who takes it
            subject to the $40,000 mortgage. Beth continues to make the payments on the $40,000 note. John pays $10,000 down
            and gives Beth a $90,000 note secured by a wraparound mortgage on the home. Beth does not record or otherwise
            perfect the $90,000 mortgage under the state law that applies. Therefore, that mortgage is not a secured
            debt, and the interest John pays on it is not deductible as home mortgage interest.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'what-is-qualified-home',
    title: 'What is a "Qualified Home?"',
    body: (
      <>
        <p>
          To deduct home mortgage interest, the debt must be secured by a qualified home. This means your main home or
          your second home, but not a third home except as described below under "More than one second home." A home is
          defined as a house, condominium, cooperative, mobile home, house trailer, boat, or similar property that has
          sleeping, cooking, and toilet facilities.
        </p>
        <Callout label="Tip">
          <p>
            The interest you pay on a mortgage on a home other than your main or second home may be deductible if the
            proceeds of the loan were used for business, investment, or other deductible purposes. Otherwise, it is
            considered personal interest and is not deductible.
          </p>
        </Callout>
        <p>
          <strong>Main home.</strong> You can have only one main home at any one time. Generally, this is the home where
          you spend most of your time.
        </p>
        <p>
          <strong>Second home.</strong> A second home is a home that you choose to treat as your second home.
        </p>
        <p>
          <strong>Second home not rented out.</strong> If you have a second home that you do not hold out for rent or
          resale to others at any time during the year, you can treat it as a qualified home. You do not have to use the
          home during the year.
        </p>
        <p>
          <strong>Second home rented out.</strong> If you have a second home and rent it out part of the year, you also
          must use it as a home during the year for it to be a qualified home. You must use this home more than 14 days or
          more than 10 percent of the number of days during the year that the home is rented at a fair rental, whichever
          is longer. If you do not use the home long enough, it is considered rental property and not a second home.
        </p>
        <p>
          <strong>More than one second home.</strong> If you have more than one second home, you can treat only one as the
          qualified second home during any year. However, you can change the home you treat as a second home in the
          following three situations:
        </p>
        <ol>
          <li>
            If you get a new home during the year, you can choose to treat the new home as your second home as of the day
            you buy it.
          </li>
          <li>
            If your main home no longer qualifies as your main home, you can choose to treat it as your second home as of
            the day you stop using it as your main home.
          </li>
          <li>
            If your second home is sold during the year or becomes your main home, you can choose a new second home as of
            the day you sell the old one or begin using it as your main home.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'hybrid-situations',
    title: 'Hybrid Situations',
    body: (
      <>
        <p>
          The only part of your home that is considered a qualified home is the part of your home that you use for
          residential living. If you use part of your home for other than residential living, such as for a home office,
          you must allocate the use of your home. You must then divide both the cost and fair market value of your home
          between the part that is a qualified home and the part that is not. These calculations may reduce or even negate
          your deduction.
        </p>
        <p>
          <strong>Renting out part of home.</strong> If you rent out part of a qualified home to another person (tenant),
          you can treat the rented part as being used by you for residential living only if all three of the following
          conditions apply:
        </p>
        <ol>
          <li>The rented part of your home is used by the tenant primarily for residential living.</li>
          <li>
            The rented part of your home is not a self-contained residential unit having separate sleeping, cooking, and
            toilet facilities.
          </li>
          <li>
            You do not rent (directly or by sublease) the same or different parts of your home to more than two tenants at
            any time during the tax year. If two persons (and dependents of either) share the same sleeping quarters, they
            are treated as one tenant.
          </li>
        </ol>
        <p>
          <strong>Office in home.</strong> If you have an office in your home that you use in your business, you may be
          entitled to deductions for the business use of your home, including the business part of your home mortgage
          interest.
        </p>
      </>
    ),
  },
  {
    id: 'other-situations',
    title: 'Other Situations',
    body: (
      <>
        <p>
          You can treat a <em>home under construction</em> as a qualified home for up to 24 months, but only if it
          becomes your qualified home at the time it is ready for occupancy.
        </p>
        <p>The 24-month period can start at any time on or after the day construction begins.</p>
        <p>
          You may be able to continue treating your home as a qualified home even after it is destroyed in a fire, storm,
          tornado, earthquake, or other casualty. This means you can continue to deduct the interest you pay on your home
          mortgage, subject to the limits described in this guide.
        </p>
        <p>
          You can continue treating a destroyed home as a qualified home if, within a reasonable period of time after the
          home is destroyed, you:
        </p>
        <ol>
          <li>Rebuild the destroyed home and move into it, or</li>
          <li>Sell the land on which the home was located.</li>
        </ol>
        <p>
          This rule applies to your main home and to a second home that you treat as a qualified home. It also applies
          whether or not your home is in a federal disaster area.
        </p>
        <p>
          You can treat a home you own under a <em>time-sharing</em> plan as a qualified home if it meets all the tests for
          a qualified home. If you rent out your timeshare, it qualifies as a second home only if you also use it as a
          home. To know whether you meet that requirement, count your days of use and rental of the home only during the
          time you have a right to use it or to receive any benefits from the rental of it.
        </p>
      </>
    ),
  },
  {
    id: 'married-taxpayers',
    title: 'Married Taxpayers',
    body: (
      <>
        <p>
          If you are married and file a joint return, your qualified home(s) can be owned either jointly or by only one
          spouse.
        </p>
        <p>
          If you are married filing separately and you and your spouse own more than one home, you can each take into
          account only one home as a qualified home. However, if you both consent in writing, then one spouse can take
          both the main home and a second home into account.
        </p>
        <Callout label="Note">
          <p>
            If a divorce or separation agreement requires you or your spouse or former spouse to pay home mortgage
            interest on a home owned by both of you, the payment of interest may be alimony.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'special-rules',
    title: 'Special Rules',
    body: (
      <>
        <p>
          This section describes certain items that can be included as home mortgage interest and others that cannot. It
          also describes certain special situations that may affect your deduction.
        </p>
        <p>
          <strong>Late payment charge on mortgage payment.</strong> You can deduct as home mortgage interest a late
          payment charge if it was not for a specific service in connection with your mortgage loan.
        </p>
        <p>
          <strong>Mortgage prepayment penalty.</strong> If you pay off your home mortgage early, you may have to pay a
          penalty. You can deduct that penalty as home mortgage interest provided the penalty is not for a specific
          service performed or cost incurred in connection with your mortgage loan.
        </p>
        <p>
          <strong>Sale of home.</strong> If you sell your home, you can deduct your home mortgage interest (subject to any
          limits that apply) paid up to, but not including, the date of the sale.
        </p>
        <Callout label="Example">
          <p>
            John and Peggy Harris sold their home on May 7. Through April 30, they made home mortgage interest payments of
            $1,220. The settlement sheet for the sale of the home showed $50 interest for a 6-day period in May up to,
            but not including, the date of sale. Their mortgage interest deduction is $1,270 ($1,220 + $50).
          </p>
        </Callout>
        <p>
          <strong>Prepaid interest.</strong> If you pay interest in advance for a period that goes beyond the end of the
          tax year, you must spread this interest over the tax years to which it applies. You can deduct in each year only
          the interest that qualifies as home mortgage interest for that year. However, there is an exception for
          points.
        </p>
        <p>
          <strong>Mortgage interest credit.</strong> You may be able to claim a mortgage interest credit if you were
          issued a mortgage credit certificate (MCC) by a state or local government. If you take this credit, you must
          reduce your mortgage interest deduction by the amount of the credit.
        </p>
        <p>
          <strong>Ministers' and military housing allowance.</strong> If you are a minister or a member of the
          uniformed services and receive a housing allowance that is not taxable, you can still deduct your home mortgage
          interest.
        </p>
        <p>
          <strong>Mortgage assistance payments.</strong> If you qualify for mortgage assistance payments under section
          235 of the National Housing Act, part or all of the interest on your mortgage may be paid for you. You cannot
          deduct the interest that is paid for you.
        </p>
        <p>
          <strong>Rental payments before real estate closing occurs.</strong> If you live in a house before final
          settlement on the purchase, any payments you make for that period are rent and not interest, and therefore not
          deductible. This is true even if the settlement papers call them interest.
        </p>
        <p>
          <strong>Mortgage proceeds invested in tax-exempt securities.</strong> You cannot deduct the home mortgage
          interest on debt used to buy securities or certificates that produce tax-free income.
        </p>
        <p>
          <strong>Refunds of interest.</strong> If you receive a refund of interest in the same year you paid it, you must
          reduce your interest expense by the amount refunded to you. If you receive a refund of interest deducted in an
          earlier year, you generally must include the refund in income in the year you receive it. However, you need to
          include it only up to the amount of the deduction that reduced your tax in the earlier year. This is true whether
          the interest overcharge was refunded to you or was used to reduce the outstanding principal on your mortgage.
        </p>
      </>
    ),
  },
  {
    id: 'form-1098',
    title: 'Mortgage Interest Statement (Form 1098)',
    body: (
      <>
        <p>
          If you paid $600 or more of mortgage interest (including certain points) during the year, you will usually
          receive IRS Form 1098, <em>Mortgage Interest Statement (Info Copy Only)</em> from the mortgage holder, showing
          the amount of interest you paid.
        </p>
        <Callout label="Tip">
          <p>
            You should receive the statement for each year by January 31 of the following year. A copy of this form is also
            sent to the IRS.
          </p>
        </Callout>
      </>
    ),
  },
];

export default function HomeMortgageInterestDeductions() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="Home Mortgage Interest Deductions"
      title={<>Home Mortgage <em>Interest Deductions</em></>}
      lead="This Financial Guide discusses the home mortgage interest deduction. It explains what tests must be met for interest on a home mortgage to be deductible and discusses the rules that apply in hybrid situations such as the business use of a home."
      sections={sections}
    />
  );
}
