import { Link } from 'react-router';
import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=72 (The Deduction For Real Estate Taxes),
// word for word from the live page.
// Address: /guides/life-events/buying-and-selling-a-home/the-deduction-for-real-estate-taxes
// (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'preliminary-note-nondeductible-items',
    title: 'Preliminary Note: Nondeductible Items',
    body: (
      <>
        <p>
          If you took out a mortgage to finance the purchase of your home, you are probably making monthly house
          payments. This house payment may include various costs of owning a home. The only costs you can deduct are real
          estate taxes actually paid to the taxing authority and interest that qualifies as home mortgage interest.
        </p>
        <p>Nondeductible items that may be included in your house payment:</p>
        <ul>
          <li>Fire or homeowner's insurance premiums.</li>
          <li>FHA mortgage insurance premiums.</li>
          <li>Any amount applied to reduce the principal of the mortgage.</li>
        </ul>
        <Callout label="Note">
          Members of the clergy or of the uniformed services who receive a nontaxable housing allowance can still deduct
          real estate taxes and home mortgage interest. They need not reduce their deductions by the non-taxable
          allowance.
        </Callout>
      </>
    ),
  },
  {
    id: 'what-is-meant-by-real-estate-taxes',
    title: 'What Is Meant by "Real Estate Taxes"?',
    body: (
      <>
        <p>
          Most state and local governments charge an annual tax on the value of real property. This is called a real
          estate tax. You can deduct the tax if it is based on the assessed value of the real property and the taxing
          authority charges a uniform rate on all property in its jurisdiction. The tax must be for the welfare of the
          general public and not be a payment for a special privilege or service you receive.
        </p>
      </>
    ),
  },
  {
    id: 'deductible-taxes',
    title: 'Deductible Taxes',
    body: (
      <>
        <p>
          You can deduct real estate taxes imposed on you. You must have paid them either at settlement or closing or to
          a taxing authority (either directly or through an escrow account) during the year. If you own a cooperative
          apartment, special rules apply to the deduction, which is generally available to you.
        </p>
        <Callout label="Caution">
          Under tax reform (Tax Cuts and Jobs Act of 2017), for taxable years 2018 through 2025, the aggregate deduction
          for real estate property taxes, state, local, and foreign income taxes, or sales taxes is limited to $10,000 a
          year ($5,000 married filing separately).
        </Callout>
      </>
    ),
  },
  {
    id: 'purchase-or-sale-of-realty',
    title: 'Purchase or Sale of Realty: How the Deduction Is Divided Up',
    body: (
      <>
        <p>
          Real estate taxes are generally divided so that you and the seller each pay taxes for the part of the property
          tax year you owned the home. Your share of these taxes is fully deductible, as long as you itemize your
          deductions.
        </p>
        <p>
          For tax purposes, the seller is treated as paying the property taxes up to, but not including, the date of
          sale. You (the buyer) are treated as paying the taxes beginning with the date of sale. This applies regardless
          of the lien dates under local law. Generally, this information is included on the settlement statement you get
          at closing.
        </p>
        <Callout label="Tip">
          You and the seller are each considered to have paid your own share of the taxes, even if one or the other paid
          the entire amount. You can each deduct your own share, if you itemize deductions, for the year the property is
          sold.
        </Callout>
        <p>
          <strong>Delinquent taxes.</strong> Delinquent taxes are unpaid taxes imposed on the seller for an earlier tax
          year. If you agree to pay delinquent taxes when you buy your home, you cannot deduct them. You treat them as
          part of the cost of your home.
        </p>
        <Callout label="Caution">
          Many monthly house payments include an amount placed in escrow (put in the care of a third party) for real
          estate taxes. You may not be able to deduct the total you pay into the escrow account. You can deduct only the
          real estate taxes that the lender actually paid from escrow to the taxing authority. Your real estate tax bill
          will show this amount.
        </Callout>
        <p>
          <strong>Refund or rebate of real estate taxes.</strong> If you receive a refund or rebate of real estate taxes
          this year for amounts you paid this year, you must reduce your real estate tax deduction by the amount refunded
          to you. If the refund or rebate was for real estate taxes paid for a prior year, you may have to include some
          or all of the refund in your income.
        </p>
      </>
    ),
  },
  {
    id: 'items-not-considered-real-estate-taxes',
    title: 'Items Not Considered Real Estate Taxes',
    body: (
      <>
        <p>The following items are not deductible as real estate taxes.</p>
        <p>
          <strong>Charges for services.</strong> An itemized charge for services to specific property or people is not a
          tax, even if the charge is paid to the taxing authority. You cannot deduct the charge as a real estate tax if
          it is:
        </p>
        <ol>
          <li>A unit fee for the delivery of a service (such as a $5 fee charged for every 1,000 gallons of water you use),</li>
          <li>A periodic charge for a residential service (such as a $20 per month or $240 annual fee charged for trash collection), or</li>
          <li>A flat fee charged for a single service provided by your local government (such as a $30 charge for mowing your lawn because it had grown higher than permitted under a local ordinance).</li>
        </ol>
        <p>
          <em>
            You must look at your real estate tax bill to decide if any nondeductible itemized charges, such as those
            just listed, are included in the bill. If your taxing authority (or lender) does not furnish you a copy of
            your real estate tax bill, ask for it.
          </em>
        </p>
        <p>
          <strong>Assessments for local benefits.</strong> You cannot deduct amounts you pay for local benefits that tend
          to increase the value of your property. Local benefits include the construction of streets, sidewalks, or water
          and sewer systems. You must add these amounts to the basis of your property.
        </p>
        <p>
          You can, however, deduct assessments (or taxes) for local benefits if they are for maintenance, repair, or
          interest charges related to those benefits. An example is a charge to repair an existing sidewalk and any
          interest included in that charge.
        </p>
        <p>
          If only a part of the assessment is for maintenance, repair, or interest charges, you must be able to show the
          amount of that part to claim the deduction. If you cannot show what part of the assessment is for maintenance,
          repair, or interest charges, you cannot deduct any of it.
        </p>
        <p>
          An assessment for a local benefit may be listed as an item in your real estate tax bill. If so, use the rules
          in this section to find out how much of it, if any, you can deduct.
        </p>
        <p>
          <strong>Transfer taxes (or stamp taxes).</strong> You cannot deduct transfer taxes and similar taxes and
          charges on the sale of a personal home. If you are the buyer and you pay them, include them in the cost basis
          of the property. If you are the seller and you pay them, they are expenses of the sale and reduce the amount
          realized on the sale.
        </p>
        <p>
          <strong>Homeowners association assessments.</strong> You cannot deduct these assessments because the homeowners
          association imposes them rather than a state or local government.
        </p>
      </>
    ),
  },
  {
    id: 'special-rules-for-cooperatives',
    title: 'Special Rules for Cooperatives',
    body: (
      <>
        <p>
          If you own a <em>cooperative apartment</em>, some special rules apply to you, though you generally receive the
          same tax treatment as other homeowners. As an owner of a cooperative apartment, you own shares of stock in a
          corporation that owns or leases housing facilities. You can deduct your share of the corporation's deductible
          real estate taxes if the <em>cooperative housing corporation</em> meets certain conditions.
        </p>
        <Callout label="Note">
          For more information on the mortgage interest deduction, please see our guide on{' '}
          <Link to="/guides/life-events/buying-and-selling-a-home/home-mortgage-interest-deductions">
            Home Mortgage Interest Deductions
          </Link>
          .
        </Callout>
      </>
    ),
  },
];

export default function DeductionForRealEstateTaxes() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      title="The Deduction For Real Estate Taxes"
      sections={sections}
    >
      <>
        <Callout label="Note">
          <p>
            Click{' '}
            <Link to="/guides/life-events/buying-and-selling-a-home/home-mortgage-interest-deductions">here</Link> for
            the discussion of mortgage interest deductions.
          </p>
        </Callout>
        <p>
          There are two primary deductions for homeowners: real estate taxes and home mortgage interest. This Financial
          Guide explains which expenses you can and cannot deduct as a homeowner, and explains useful aspects of the real
          estate tax deduction. The mortgage interest deduction is discussed in a separate Financial Guide.
        </p>
      </>
    </GuideArticle>
  );
}
