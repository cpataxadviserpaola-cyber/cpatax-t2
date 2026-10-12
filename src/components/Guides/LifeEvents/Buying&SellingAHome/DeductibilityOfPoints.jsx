import { Link } from 'react-router';
import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=67 (The Deductibility of Points),
// word for word from the live page.
// Address: /guides/life-events/buying-and-selling-a-home/the-deductibility-of-points (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'what-are-points',
    title: 'What Are Points?',
    body: (
      <>
        <Callout label="Note">
          <p>
            For an explanation of the deductibility of home mortgage interest, please{' '}
            <Link to="/guides/life-events/buying-and-selling-a-home/home-mortgage-interest-deductions">click here</Link>.
          </p>
        </Callout>
        <p>
          The term "points" is used to describe certain charges paid or treated as paid, by a borrower to obtain a home
          mortgage. Points may also be called loan origination fees, maximum loan charges, loan discount, or discount
          points.
        </p>
        <p>
          Points are prepaid interest and may be deductible as home mortgage interest if you itemize deductions on Form
          1040, Schedule A. Generally, if you can deduct all of the interest on your mortgage, you may be able to deduct all
          of the points paid on the mortgage. If your acquisition debt exceeds $750,000 for tax years 2018–2025 or your home
          equity debt exceeds $100,000, you cannot deduct all the interest on your mortgage, and you cannot deduct all your
          points.
        </p>
        <p>
          A borrower is treated as paying any points that a home seller pays for the borrower's mortgage. See "Points Paid
          by Seller," later.
        </p>
      </>
    ),
  },
  {
    id: 'tests-for-deductibility',
    title: 'Tests for Deductibility',
    body: (
      <>
        <p>
          Generally, you cannot deduct the full amount of points in the year paid. Because they are prepaid interest, you
          generally must deduct them over the life (term) of the mortgage.
        </p>
        <p>However, you can fully deduct points in the year paid if you meet all of the following tests:</p>
        <ol>
          <li>Your loan is secured by your main home (the one you live in most of the time).</li>
          <li>Paying points is an established business practice in the area where the loan was made.</li>
          <li>The points paid were not more than the points generally charged in that area.</li>
          <li>You use the cash method of accounting (the method used by most individual taxpayers).</li>
          <li>
            The points were not paid in place of amounts that ordinarily are stated separately on the settlement statement,
            such as appraisal fees, inspection fees, title fees, attorney fees, and property taxes.
          </li>
          <li>You use your loan to buy or build your main home.</li>
          <li>The points were computed as a percentage of the principal amount of the mortgage.</li>
          <li>
            The amount is clearly shown on the settlement statement (such as the Uniform Settlement Statement, Form HUD-1)
            as points charged for the mortgage. The points may be shown as paid from either your funds or the seller's.
          </li>
          <li>
            The funds you provided at or before closing, plus any points the seller paid, were at least as much as the points
            charged. The funds you provided do not have to have been applied to the points. They can include a down payment,
            an escrow deposit, earnest money, and other funds you paid at or before closing for any purpose. You cannot have
            borrowed these funds from your lender or mortgage broker.
          </li>
        </ol>
        <p>
          <strong>Home improvement loan.</strong> You can also fully deduct in the year paid points paid on a loan to
          improve your main home if statements (1) through (5) above are true.
        </p>
      </>
    ),
  },
  {
    id: 'non-deductible-amounts',
    title: 'Non-Deductible Amounts',
    body: (
      <>
        <p>
          Amounts charged by the lender for specific services connected to the loan are not considered interest. Examples of
          these charges are:
        </p>
        <ol>
          <li>Appraisal fees</li>
          <li>Notary fees</li>
          <li>Preparation costs for the mortgage note or deed of trust</li>
          <li>Mortgage insurance premiums</li>
          <li>VA funding fees</li>
        </ol>
        <p>You cannot deduct these amounts as points either in the year paid or over the life of the mortgage.</p>
      </>
    ),
  },
  {
    id: 'points-paid-by-seller',
    title: 'Points Paid by Seller',
    body: (
      <>
        <p>
          The term "points" includes loan placement fees that the seller pays to the lender to arrange financing for the
          buyer. The <em>seller <strong>cannot</strong></em> deduct these fees as interest. But they are a selling expense
          that reduces the seller's amount realized. The buyer reduces the basis of the home by the amount of the
          seller-paid points and treats the points as if he or she had paid them. If all the tests explained earlier are met,
          the buyer can deduct the points in the year paid. If any of those tests are not met, the buyer deducts the points
          over the life of the loan.
        </p>
      </>
    ),
  },
  {
    id: 'funds-less-than-points',
    title: 'Funds Provided Are Less than Points',
    body: (
      <>
        <p>
          If you meet all the tests referred to earlier, except that the funds you provided were less than the points
          charged to you (test 9), you can deduct the points in the year paid, up to the amount of funds you provided. You can
          also deduct any points paid by the seller.
        </p>
        <Callout label="Example 1">
          <p>
            When you took out a $100,000 mortgage loan to buy your home in December, you were charged one point ($1,000). You
            meet all the nine tests for deducting points in the year paid, except the only funds you provided were a $750 down
            payment. Of the $1,000 charged for points, you can deduct $750 in the year paid. You spread the remaining $250 over
            the life of the mortgage.
          </p>
        </Callout>
        <Callout label="Example 2">
          <p>
            The facts are the same as in the example above except that the person who sold you your home also paid one point
            ($1,000) to help you get your mortgage. In the year paid, you can deduct $1,750 ($750 of the amount you were charged
            plus the $1,000 paid by the seller). You must reduce the basis of your home by the $1,000 paid by the seller.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'excess-points',
    title: 'Excess Points',
    body: (
      <>
        <p>
          If you meet all the tests except that the points paid were more than generally paid in your area (test 3), you
          deduct in the year paid only the points that are generally charged. You must spread any additional points over the
          life of the mortgage.
        </p>
      </>
    ),
  },
  {
    id: 'points-paid-on-second-home',
    title: 'Points Paid on Second Home',
    body: (
      <>
        <p>
          The general rule of instant deductibility does not apply to points you pay on loans secured by your second home.
          You can deduct these points only over the life of the loan.
        </p>
      </>
    ),
  },
  {
    id: 'mortgage-ends-early',
    title: 'Mortgage Ends Early',
    body: (
      <>
        <p>
          If you spread your deduction for points over the life of the mortgage, you can deduct any remaining balance in the
          year the mortgage ends. However, if you refinance the mortgage with the same lender, you cannot deduct any
          remaining balance of spread points. Instead, deduct the remaining balance over the term of the new loan.
        </p>
        <p>A mortgage may end early due to a prepayment, refinancing, foreclosure, or similar event.</p>
        <Callout label="Example">
          <p>
            Dan paid $3,000 in points in 2008 that he had to spread out over the 15-year life of the mortgage. He deducts $200
            points per year. Through 2019, Dan has deducted $2,200 of the points. Dan prepaid his mortgage in full in 2019. He
            can deduct the remaining $800 of points in 2019.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'points-paid-on-refinancing',
    title: 'Points Paid on Refinancing',
    body: (
      <>
        <p>
          Generally, points you pay to refinance a mortgage are not deductible in full in the year you pay them. This is true
          even if the new mortgage is secured by your main home.
        </p>
        <p>
          However, if you use part of the refinanced mortgage proceeds to <em><strong>improve your main home</strong></em> and
          you meet the first five tests listed earlier, you can fully deduct the part of the points related to the
          improvement in the year paid. You can deduct the rest of the points over the life of the loan.
        </p>
        <Callout label="Example 1">
          <p>
            In 1999, Bill Fields got a mortgage to buy a home. In 2019, Bill refinanced that mortgage with a 15-year $100,000
            mortgage loan. The mortgage is secured by his home. To get the new loan, he had to pay three points ($3,000). Two
            points ($2,000) were for prepaid interest, and one point ($1,000) was charged for services, in place of amounts that
            ordinarily are stated separately on the settlement statement. Bill paid the points out of his private funds, rather
            than out of the proceeds of the new loan. The payment of points is an established practice in the area and the points
            charged are not more than the amount generally charged there. Bill's first payment on the new loan was due July 1. He
            made six payments on the loan in 2019 and is a cash basis taxpayer.
          </p>
          <p>
            Bill used the funds from the new mortgage to repay his existing mortgage. Although the new mortgage loan was for
            Bill's continued ownership of his main home, it was not for the purchase or improvement of that home. For that
            reason, Bill does not meet all the tests, and he cannot deduct all of the points in 2019. He can deduct two points
            ($2,000) ratable over the life of the loan. He deducts $67 [($2,000 ÷ 180 months) × 6 payments] of the points in
            2019. The other point ($1,000) was a fee for services and is not deductible.
          </p>
        </Callout>
        <Callout label="Example 2">
          <p>
            The facts are the same as in Example 1, except that Bill used $25,000 of the loan proceeds to improve his home and
            $75,000 to repay his existing mortgage. Bill deducts 25 percent ($25,000 ÷ $100,000) of the points ($2,000) in
            2019. Therefore, his deduction is $500 ($2,000 × 0.25).
          </p>
          <p>
            Bill also deducts the ratable part of the remaining $1,500 ($2,000 - $500) prepaid interest that must be spread over
            the life of the loan. This is $50 [($1,500 ÷ 180 months) × 6 payments] in 2018. The total amount Bill deducts in
            2019 is $550 ($500 + $50).
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'limits-on-mortgage-interest',
    title: 'Limits on Home Mortgage Interest Affect Points',
    body: (
      <>
        <p>
          You cannot fully deduct points paid on a mortgage that exceeds the limits on home mortgages for purposes of the
          home mortgage interest deduction.
        </p>
      </>
    ),
  },
  {
    id: 'form-1098',
    title: 'Form 1098',
    body: (
      <>
        <p>
          The mortgage interest statement (Form 1098) you receive should show not only the total interest paid during the year
          but also your deductible points.
        </p>
        <p>
          The statement will show the total interest you paid during the year. If you purchased a main home during the year,
          it also will show the deductible points paid during the year, including seller-paid points. However, it should not
          show any interest that was paid for you by a government agency.
        </p>
        <p>
          As a general rule, Form 1098 will include only points that you can fully deduct in the year paid. However, certain
          points not included on Form 1098 also may be deductible, either in the year paid or over the life of the loan. See
          the earlier discussion of Points to determine whether you can deduct points not shown on Form 1098.
        </p>
      </>
    ),
  },
];

export default function DeductibilityOfPoints() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="The Deductibility of Points"
      title={<>The Deductibility <em>of Points</em></>}
      lead="This Financial Guide explains when and to what extent points paid on the purchase of a home or refinancing are deductible. It explains the rules for deducting points and discusses special circumstances and situations."
      sections={sections}
    />
  );
}
