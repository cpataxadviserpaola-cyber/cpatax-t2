import GuideArticle, { Callout, Glossary } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=70 (Selling Your Home: How To Minimize the Tax On the Gain),
// word for word from the live page.
// Address: /guides/life-events/buying-and-selling-a-home/selling-your-home-minimize-tax
// (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'principal-residence',
    title: 'Principal Residence',
    body: (
      <>
        <p>
          Usually, the home you live in most of the time is your main home. In addition to a standard dwelling unit, your
          home can also be a houseboat, mobile home, cooperative apartment, or condominium.
        </p>
        <Callout label="Example">
          <strong>Example 1:</strong> You own and live in a house in town. You also own beach property, which you use in
          the summer months. The town property is your main home; the beach property is not.
        </Callout>
        <Callout label="Example">
          <strong>Example 2:</strong> You own a house, but you live in another house that you rent. The rented home is
          your main home.
        </Callout>
        <Callout label="Tip">
          Where a second residence has soared in value and you want to sell, some tax advisors have suggested moving to
          the second residence for the required period to qualify for exclusion on its sale. If this is your situation,
          please consult with a tax professional.
        </Callout>
      </>
    ),
  },
  {
    id: 'how-to-figure-gain-or-loss',
    title: 'How to Figure Gain or Loss',
    body: (
      <>
        <p>
          Key information for determining gain or loss is the selling price, the amount realized, and the adjusted basis.
        </p>
        <p>
          The selling price is the total amount you receive for your home. It includes money, all notes, mortgages, or
          other debts assumed by the buyer as part of the sale, and the fair market value of any other property or any
          services you receive. Next, you deduct the selling expenses such as commissions, advertising, legal fees, and
          loan charges paid by the seller from the selling price.
        </p>
        <p>
          The difference is the "amount realized." If the amount realized is more than your home's "adjusted basis,"
          discussed later, the difference is your gain. If the amount realized is less than the adjusted basis, the
          difference is your loss.
        </p>
        <p>
          However, it does not include amounts you received for personal property sold with your home. Personal property
          is property that is not a permanent part of the home, such as furniture, draperies, and lawn equipment.
        </p>
      </>
    ),
  },
  {
    id: 'non-traditional-sales',
    title: 'Non-Traditional Sales',
    body: (
      <>
        <p>
          The following discussion covers how to determine your gain or loss if you trade one home for another, if your
          home is foreclosed on or repossessed or if you transfer a jointly owned home.
        </p>
        <p>
          <strong>Jointly owned home.</strong> If you and your spouse sell your jointly owned home and file a joint
          return, you figure and report your gain or loss as one taxpayer. If you file separate returns, each of you must
          figure and report your own gain or loss according to your ownership interest in the home. Your ownership
          interest is determined by state law.
        </p>
        <p>
          If you and a joint owner other than your spouse sell your jointly owned home, each of you must figure and
          report your own gain or loss according to your ownership interest in the home. Each of you applies the
          exclusion rules individual basis.
        </p>
        <p>
          <strong>Trading homes.</strong> If you trade your old home for another home, treat the trade as a sale and a
          purchase.
        </p>
        <p>
          <strong>Foreclosure or repossession.</strong> If your home was foreclosed on or repossessed, you have what the
          IRS calls a disposition and will need to determine if you have ordinary income, gain, or loss. The amount of
          your gain or loss depends on whether you were personally liable for repaying the debt secured by the home and
          whether the outstanding loan balance is more than the fair market value (FMV) of the property.
        </p>
        <p>
          If you were not personally liable for repaying the debt secured by the home, the amount you realize includes the
          full amount of the outstanding debt immediately before the transfer. This is true even if the FMV of the
          property is less than the outstanding debt immediately before the transfer.
        </p>
        <p>
          If you were personally liable for repaying the debt secured by the home and the debt is canceled, the amount
          realized on the foreclosure or repossession includes the smaller of the outstanding debt immediately before the
          transfer reduced by any amount for which you remain personally liable immediately after the transfer, or the
          Fair Market Value (FMV) of the transferred property.
        </p>
        <p>
          In addition to any gain or loss, if you were personally liable for the debt you may have ordinary income. If the
          canceled debt is more than the home's fair market value, you have ordinary income equal to the difference.
          However, the income from the cancellation of debt is not taxed to you if the cancellation is intended as a gift,
          or if you are insolvent or bankrupt.
        </p>
        <Callout label="Example">
          You owned and lived in a home with an adjusted basis of $41,000. A real estate dealer accepted your old home as
          a trade-in and allowed you $50,000 toward a new house priced at $80,000 (its fair market value). You are
          considered to have sold your old home for $50,000 and to have had a gain of $9,000 ($50,000 minus $41,000). If
          the dealer had allowed you $27,000 and assumed your unpaid mortgage of $23,000 on your old home, $50,000 would
          still be considered the sales price of the old home (the trade-in allowed plus the mortgage assumed).
        </Callout>
        <p>
          <strong>Transfer to spouse.</strong> If you transfer your home to your spouse, or to your former spouse
          incident to your divorce, you generally have no gain or loss, even if you receive cash or other consideration
          for the home. Therefore, the rules explained in this Guide do not apply.
        </p>
        <p>
          If you owned your home jointly with your spouse and transfer your interest in the home to your spouse, or to
          your former spouse incident to your divorce, the same rule applies. You have no gain or loss.
        </p>
        <p>
          If you buy or build a new home, its basis will not be affected by the transfer of your old home to your spouse,
          or to your former spouse incident to divorce. The basis of the home you transferred will not affect the basis
          of your new home.
        </p>
      </>
    ),
  },
  {
    id: 'basis',
    title: 'Basis',
    body: (
      <>
        <p>
          You will need to know your basis in your home as a starting point for determining any gain or loss when you
          sell it. Your basis in your home is determined by how you got the home. Your basis is its cost if you bought it
          or built it. If you acquired it in some other way, its basis is either its fair market value when you received
          it or the adjusted basis of the person you received it from.
        </p>
        <p>
          While you owned your home, you may have made adjustments (increases or decreases) to the basis. This adjusted
          basis is used to figure gain or loss on the sale of your home.
        </p>
        <h3>Cost as Basis</h3>
        <p>The cost of property is the amount you pay for it in cash or other property.</p>
        <p>
          <strong>Purchase.</strong> If you buy your home, your basis is its cost to you. This includes the purchase
          price and certain settlement or closing costs. Your cost includes your down payment and any debt, such as a
          first or second mortgage or notes you gave the seller in payment for the home.
        </p>
        <p>
          <strong>Seller-paid points.</strong> If you bought your home after April 3, 1994, you must reduce the basis of
          your home by any points the seller paid, whether or not you deducted them. If you bought your home after 1990
          but before April 4, 1994, you must reduce your basis by the amount of seller-paid points only if you chose to
          deduct them as home mortgage interest in the year paid.
        </p>
        <p>
          <strong>Settlement fees or closing costs.</strong> When buying your home, you may have to pay settlement fees
          or closing costs in addition to the contract price of the property. You can include in your basis the
          settlement fees and closing costs that are for buying the home. You cannot include in your basis the fees and
          costs that are for getting a mortgage loan. A fee is for buying the home if you would have had to pay it even
          if you paid cash for the home.
        </p>
        <p>
          Settlement fees do not include amounts placed in escrow for the future payment of items such as taxes and
          insurance.
        </p>
        <p>Some of the settlement fees or closing costs that you can include in the basis of your property are:</p>
        <ul>
          <li>Abstract fees (sometimes called abstract of title fees),</li>
          <li>Charges for installing utility services,</li>
          <li>Legal fees (including fees for the title search and preparing the sales contract and deed),</li>
          <li>Recording fees,</li>
          <li>Surveys,</li>
          <li>Transfer taxes,</li>
          <li>Owner's title insurance, and</li>
          <li>
            Any amounts the seller owes that you agree to pay, such as back taxes or interest, recording or mortgage
            fees, charges for improvements or repairs, and sales commissions.
          </li>
        </ul>
        <p>Some settlement fees and closing costs not included in your basis are:</p>
        <ul>
          <li>Fire insurance premiums.</li>
          <li>Rent for occupancy of the house before closing.</li>
          <li>Charges for utilities or other services relating to occupancy of the house before closing.</li>
          <li>
            Any item that you deducted as a moving expense (settlement fees and closing costs incurred after 1993 cannot
            be deducted as moving expenses).
          </li>
          <li>Fees for refinancing a mortgage.</li>
          <li>
            Charges connected with getting a mortgage loan, such as mortgage insurance premiums (including VA funding
            fees), loan assumption fees, cost of a credit report, and fee for an appraisal required by a lender.
          </li>
        </ul>
        <p>
          <strong>Real estate taxes.</strong> Real estate taxes for the year you bought your home may affect your basis,
          as follows:
        </p>
        <ul>
          <li>
            If you pay taxes that the seller owed on the home up to the date of sale and the seller does not reimburse
            you, then the taxes are added to the basis of your home.
          </li>
          <li>
            If you pay taxes that the seller owed on the home up to the date of sale and the seller does reimburse you,
            then the taxes do not affect the basis of your home.
          </li>
          <li>
            If the seller pays taxes for you (taxes owed beginning on the date of sale) and you do not reimburse the
            seller, then the taxes are subtracted from the basis of your home.
          </li>
          <li>
            If the seller pays taxes for you (taxes owed beginning on the date of sale) and you reimburse the seller,
            then the taxes do not affect the basis of your home.
          </li>
        </ul>
        <p>
          <strong>Construction.</strong> If you contracted to have your house built on land you own, your basis is the
          cost of the land plus the amount it cost you to complete the house. This amount includes the cost of labor and
          materials, or the amounts paid to the contractor, and any architect's fees, building permit charges, utility
          meter and connection charges, and legal fees directly connected with building your home. Your cost includes
          your down payment and any debt, such as a first or second mortgage or notes you gave the seller or builder. It
          also includes certain settlement or closing costs. You may have to reduce the basis by points the seller paid
          for you. If you built all or part of your house yourself, its basis is the total amount it cost you to complete
          it. Do not include the value of your own labor or any other labor you did not pay for in the cost of the house.
        </p>
        <p>
          <strong>Cooperative apartment.</strong> Your basis in the apartment is usually the cost of your stock in the
          co-op housing corporation, which may include your share of a mortgage on the apartment building.
        </p>
        <p>
          <strong>Condominium.</strong> Your basis is generally its cost to you. The same rules apply as for any other
          home.
        </p>
      </>
    ),
  },
  {
    id: 'basis-other-than-cost',
    title: 'Basis Other Than Cost',
    body: (
      <>
        <p>
          If your home was acquired in a transaction other than a traditional purchase (such as gift, inheritance, trade,
          or from a spouse), you may have to use a basis other than cost, such as fair market value.
        </p>
        <Callout label="Note">
          Fair market value is the price at which the property would change hands between a willing buyer and a willing
          seller, neither having to buy or sell and both having reasonable knowledge of the relevant facts. Sales of
          similar property, on or about the same date, may be helpful in figuring the fair market value of the property.
        </Callout>
        <p>
          <strong>Home received as gift.</strong> If your home was a gift, its basis to you is the same as the donor's
          adjusted basis when the gift was made. However, if the donor's adjusted basis was more than the fair market
          value of the home when it was given to you, you must use that fair market value as your basis for measuring any
          loss on its sale.
        </p>
        <p>
          If you use the donor's adjusted basis to figure a gain and get a loss, and then use the fair market value to
          figure a loss and get a gain, you have neither a gain nor a loss on the sale or disposition.
        </p>
        <p>
          If you received your home as a gift and its fair market value was more than the donor's adjusted basis at the
          time of the gift, you may be able to add to your basis any federal gift tax paid on the gift. If the gift was
          before 1977, the basis cannot be increased to more than the fair market value of the home when it was given to
          you. On the other hand, if you received your home as a gift after 1976, you would add to your basis the part
          of the federal gift tax paid that is due to the home's &quot;net increase&quot; in value (value less donor's
          adjusted basis).
        </p>
        <p>
          <strong>Home received from spouse.</strong> You may have received your home from your spouse or from your
          former spouse incident to your divorce.
        </p>
        <ul>
          <li>
            If you received the home after July 18, 1984, you had no gain or loss on the transfer. Your basis in this
            home is generally the same as your spouse's (or former spouse's) adjusted basis just before you received it.
            This rule applies even if you received the home in exchange for cash, the release of marital rights, the
            assumption of liabilities, or other consideration.
          </li>
          <li>
            If you owned a home jointly with your spouse and your spouse transferred his or her interest in the home to
            you, your basis in the half interest received from your spouse is generally the same as your spouse's adjusted
            basis just before the transfer. This rule also applies if your former spouse transferred his or her interest
            in the home to you incident to your divorce. Your basis in the half interest you already owned does not change.
            Your new basis in the home is the total of these two amounts.
          </li>
          <li>
            If you received your home before July 19, 1984, in exchange for your release of marital rights, your basis in
            the home is generally its fair market value at the time you received it.
          </li>
        </ul>
        <p>
          <strong>Home acquired from a decedent who died before or after 2010.</strong> If you inherited your home from a
          decedent who died before or after 2010, your basis is the fair market value of the property on the date of the
          decedent's death (or the later alternate valuation date chosen by the personal representative of the estate).
          If an estate tax return was filed or required to be filed, the value of the property listed on the estate tax
          return is your basis. If a federal estate tax return did not have to be filed, your basis in the home is the
          same as its appraised value at the date of death, for purposes of state inheritance or transmission taxes.
        </p>
        <p>
          <strong>Surviving spouse.</strong> If you are a surviving spouse and you owned your home jointly, your basis in
          the home will change. The new basis for the interest your spouse owned will be its fair market value on the date
          of death (or alternate valuation date). The basis of your interest will remain the same. Your new basis in the
          home is the total of these two amounts.
        </p>
        <Callout label="Example">
          Your jointly owned home had an adjusted basis of $50,000 on the date of your spouse's death, and the fair market
          value on that date was $100,000. Your new basis in the home is $75,000 ($25,000 for one-half of the adjusted
          basis plus $50,000 for one-half of the fair market value).
        </Callout>
        <p>
          In community property states (Arizona, California, Idaho, Louisiana, Nevada, New Mexico, Texas, Washington, and
          Wisconsin), each spouse is usually considered to own half of the community property. When either spouse dies,
          the fair market value of the community property becomes the basis of the entire property, including the portion
          belonging to the surviving spouse. For this to apply, at least half of the community interest must be included
          in the decedent's gross estate, whether or not the estate must file a return.
        </p>
        <p>
          <strong>Home received in trade.</strong> If you acquired your home in a trade for other property, the basis of
          your home is generally its fair market value at the time of the trade. If you traded one home for another, you
          have made a sale and purchase. In that case, you may have realized a capital gain.
        </p>
      </>
    ),
  },
  {
    id: 'adjusted-basis',
    title: 'Adjusted Basis',
    body: (
      <>
        <p>Adjusted basis is your cost or other basis increased or decreased by certain amounts.</p>
        <p>
          <strong>Increases to basis include:</strong>
        </p>
        <ul>
          <li>Additions and other improvements that have a useful life of more than 1 year.</li>
          <li>Special assessments for local improvements.</li>
          <li>Amounts spent after a casualty to restore damaged property.</li>
        </ul>
        <p>
          <strong>Decreases to basis include:</strong>
        </p>
        <ul>
          <li>Discharge of qualified principal residence indebtedness that was excluded from income (but not below zero).</li>
          <li>Gain from the sale of your old home before May 7, 1997 on which tax was postponed.</li>
          <li>Insurance payments for casualty losses.</li>
          <li>Deductible casualty losses not covered by insurance.</li>
          <li>Payments received for granting an easement or right-of-way.</li>
          <li>Depreciation allowed or allowable if you used your home for business or rental purposes.</li>
          <li>
            Residential energy credit (generally allowed from 1977 through 1987) claimed for the cost of energy
            improvements that you added to the basis of your home.
          </li>
          <li>Adoption credit you claimed for improvements that you added to the basis of your home.</li>
          <li>
            Nontaxable payments from an employer's adoption assistance program that you used for improvements you added
            to the basis of your home.
          </li>
          <li>
            Nonbusiness energy property credit (allowed beginning in 2006 but not for 2008) claimed for making certain
            energy-saving improvements you added to the basis of your home.
          </li>
          <li>
            Residential energy efficient property credit (allowed beginning in 2006) claimed for making certain
            energy-saving improvements you added to the basis of your home.
          </li>
          <li>
            First-time home buyer's credit (allowed to certain first-time buyers in the District of Columbia—beginning on
            August 5, 1997).
          </li>
          <li>
            Energy conservation subsidy excluded from your gross income because you received it (directly or indirectly)
            from a public utility after December 31, 1992, to buy or install any energy conservation measure. An energy
            conservation measure includes an installation or modification that is primarily designed either to reduce
            consumption of electricity or natural gas or to improve the management of energy demand for a home.
          </li>
        </ul>
        <p>
          <strong>Discharges of qualified principal residence indebtedness.</strong> You may be able to exclude from gross
          income a discharge of qualified principal residence indebtedness. This exclusion applies to discharges made
          after 2006 through the end of 2025 (Consolidated Appropriations Act, 2021) and also applies to debts forgiven
          as the result of a written agreement entered into before January 1, 2026, even if the actual discharge happens
          later. If you choose to exclude this income, you must reduce (but not below zero) the basis of your principal
          residence by the amount excluded from gross income.
        </p>
        <p>
          <strong>Amount eligible for the exclusion.</strong> The exclusion applies only to debt discharged after 2006
          and before 2025. The maximum amount you can treat as qualified principal residence indebtedness is $750,000
          ($375,000 if married and filing separately). Prior to December 31, 2020, this amount was $2 million ($1 million
          if married filing separately). You cannot exclude from gross income discharge of qualified principal residence
          indebtedness if the discharge was for services performed for the lender or on account of any other factor not
          directly related to a decline in the value of your residence or to your financial condition.
        </p>
        <p>
          <strong>Improvements.</strong> These add to the value of your home, prolong its useful life, or adapt it to new
          uses. You add the cost of improvements to the basis of your property.
        </p>
        <Callout label="Tip">
          Putting a recreation room in your unfinished basement, adding another bathroom or bedroom, putting up a fence,
          putting in new plumbing or wiring, installing a new roof, or paving your driveway are improvements.
        </Callout>
        <p>Here are some other examples:</p>
        <ul>
          <li>Additions: Bedroom, bathroom, deck, garage, porch, patio</li>
          <li>Lawn and grounds: Landscaping, driveway, walkway, fence, retaining wall, sprinkler system, swimming pool</li>
          <li>
            Miscellaneous: Storm windows or doors, new roof, central vacuum, wiring upgrades, satellite dish, security
            system
          </li>
          <li>
            Heating and air conditioning: Heating system, central air, furnace, duct work, central humidifier, filtration
            system
          </li>
          <li>Plumbing: Septic system, water heater, soft water system, filtration system</li>
          <li>Interior: Built-in appliances, kitchen modernization, flooring, wall-to-wall carpet</li>
          <li>Insulation: attic, walls, floor, pipes, duct work</li>
        </ul>
        <p>
          <strong>Improvements no longer part of home.</strong> Your home's adjusted basis does not include the cost of
          any improvements that are no longer part of the home.
        </p>
        <Callout label="Example">
          You put wall-to-wall carpeting in your home 15 years ago. Later, you replaced that carpeting with new
          wall-to-wall carpeting. The cost of the old carpeting you replaced is no longer part of your home's adjusted
          basis.
        </Callout>
        <p>
          <strong>Repairs.</strong> These maintain the good condition of your home. They do not add to its value or
          prolong its life, and you do not add their costs to the basis of your property.
        </p>
        <Callout label="Tip">
          Repainting your house inside or outside, fixing your gutters or floors, repairing leaks or plastering, and
          replacing broken window panes are examples of repairs.
        </Callout>
        <Callout label="Tip">
          The entire job is considered an improvement, however, if items that would otherwise be considered repairs are
          done as part of an extensive remodeling or restoration of your home.
        </Callout>
        <p>
          <strong>Recordkeeping.</strong> You should keep records of your home's purchase price and purchase expenses.
          Furthermore, you should also save receipts and other records for all improvements, additions, and other items
          that affect the basis of your home.
        </p>
        <Callout label="Tip">
          You must keep records for 3 years after the due date for filing your return for the tax year in which you sold,
          or otherwise disposed of, your home. But if the basis of your old home affects the basis of your new one, such
          as when you sold your old home before May 7, 1997, and postponed tax on any gain, you should keep those records
          forever.
        </Callout>
        <p>The records you should keep include:</p>
        <ul>
          <li>Proof of the home's purchase price and purchase expenses;</li>
          <li>Receipts and other records for all improvements, additions, and other items that affect the home's adjusted basis;</li>
          <li>
            Any worksheets or other computations you used to figure the adjusted basis of the home you sold, the gain or
            loss on the sale, the exclusion, and the taxable gain;
          </li>
          <li>Any Form 982 you filed to exclude any discharge of qualified principal residence indebtedness;</li>
          <li>Any Form 2119, Sale of Your Home, you filed to postpone gain from the sale of a previous home before May 7, 1997;</li>
          <li>Any worksheets you used to prepare Form 2119</li>
        </ul>
      </>
    ),
  },
  {
    id: 'exclusion-for-sales-after-may-6-1997',
    title: 'Exclusion for Sales After May 6, 1997',
    body: (
      <>
        <p>
          If you sell your main home after May 6, 1997, you may qualify to exclude up to $250,000 of the gain ($500,000
          if married filing jointly) on the sale of your main home; however, to claim the exclusion, you must meet the
          ownership and use tests. This means that during the 5-year period ending on the date of the sale, you must
          have:
        </p>
        <ul>
          <li>Owned the home for at least 2 years (the ownership test)</li>
          <li>Lived in the home as your main home for at least 2 years (the use test)</li>
          <li>During the 2-year period ending on the date of the sale, you did not exclude gain from the sale of another home.</li>
        </ul>
        <p>
          <strong>Exception.</strong> If you owned and lived in the property as your main home for less than 2 years, you
          can still claim an exclusion in some cases. However, the maximum amount you may be able to exclude will be
          reduced.
        </p>
        <p>
          If you sell the land on which your main home is located, but not the house itself, you cannot exclude any gain
          you have from the sale of the land.
        </p>
        <p>
          If you have more than one home, only the sale of your main home qualifies for excluding the gain. If you have
          two homes and live in both of them, your main home is the one you live in most of the time.
        </p>
        <Callout label="Note">
          If you owned and used the property as your main home for less than 2 years, you may be able to claim a reduced
          exclusion.
        </Callout>
        <p>
          The two years of ownership and use during the five-year period don't have to be continuous. You meet the tests
          if you can show that you owned and lived in the property as your main home for either 24 full months or 730
          days during the five-year period. Short temporary absences, e.g., for vacations, are counted as periods of use,
          even if you rent out the property during that time.
        </p>
        <Callout label="Example">
          From 1994 through August 2007, Anne lived with her parents in a house that her parents owned. On September 29,
          2007, she bought this house from her parents. She continued to live there until December 15 of 2007 when she
          sold it at a gain. Although Anne lived in the property as her main home for more than 2 years, she did not own
          it for the required 2 years. Therefore, she cannot exclude any part of her gain on the sale, unless she sold
          the property due to a change in health or place of employment.
        </Callout>
        <Callout label="Example">
          Professor Moore bought and moved into a house on January 4, 2005. He lived in it as his main home continuously
          until October 1, 2006, when he went abroad for a one-year sabbatical. During part of the leave, the house was
          unoccupied, and during the rest of the time, he rented it out. On October 1, 2007, he sold the house. Because
          his leave was not a short temporary absence, he cannot include the period of leave to meet the 2-year use test.
        </Callout>
        <p>
          <strong>Ownership and Use Tests Met at Different Times.</strong> You can meet the ownership and use tests during
          different 2-year periods. However, you must meet both tests during the 5-year period ending on the date of the
          sale.
        </p>
        <Callout label="Example">
          In 1996, Harry was 60 years old and lived in a rental apartment. When the apartment building went co-op, he
          bought his apartment on December 1, 1999. Harry then went to live with his daughter on April 14, 2001, because
          he became ill. On July 10, 2003, he sold his co-op while still living with his daughter. Harry can exclude gain
          on the sale of his co-op because he met the ownership and use tests. His 5-year period runs from July 11, 1998,
          to July 10, 2003, the date he sold the co-op. Even though he only owned the co-op from December 1, 1999, to
          July 10, 2003—over two years, he lived in the apartment from July 11, 1997 (the beginning of the five-year
          period) to April 14, 2001 (over two years).
        </Callout>
        <h3>Special Situations</h3>
        <p>There are a number of special situations that may result in exceptions to the general rules.</p>
        <p>
          <strong>Individuals with Disabilities.</strong> There is an exception to the 2-out-of-5-year use test if you
          become physically or mentally unable to care for yourself at any time during the 5-year period. You qualify for
          this exception to the use test if, during the 5-year period before the sale of your home:
        </p>
        <ul>
          <li>You become physically or mentally unable to care for yourself, and</li>
          <li>You owned and lived in your home as a main home for a total of at least one year during the 5-year period before the sale of your home.</li>
        </ul>
        <p>
          Under this exception, you are considered to live in your home during any time that you live in a facility
          (including a nursing home) that is licensed by a state or political subdivision to care for persons in your
          condition.
        </p>
        <p>
          If you meet this exception to the use test, you still have to meet the 2-out-of-5-year ownership test to claim
          the exclusion.
        </p>
        <p>
          <strong>Gain postponed on sale of previous home.</strong> For the ownership and use tests, you may be able to
          add the time you owned and lived in a previous home to the time you lived in the home on which you wish to
          exclude gain. You can do this if you postponed all or part of the gain on the sale of the previous home because
          of buying the home on which you wish to exclude gain.
        </p>
        <Callout label="Tip">
          Also, if buying the previous home enabled you to postpone all or part of the gain on the sale of a home you
          owned earlier, you can also include the time you owned and lived in that earlier home.
        </Callout>
        <p>
          <strong>Previous home destroyed or condemned.</strong> For the ownership and use test, you add the time you
          owned and lived in a previous home that was destroyed or condemned to the time you owned and lived in the home
          on which you wish to exclude gain. This rule applies if any part of the basis of the home you sold depended on
          the basis of the destroyed or condemned home. Otherwise, you must have owned and lived in the same home for 2
          of the 5 years before the sale to qualify for the exclusion.
        </p>
        <p>
          <strong>
            Members of the uniformed services or Foreign Service, employees of the intelligence community, or employees
            or volunteers of the Peace Corps.
          </strong>{' '}
          You can choose to have the 5-year test period for ownership and use suspended during any period you or your
          spouse serve on qualified official extended duty (defined later) as a member of the uniformed services or
          Foreign Service of the United States, or as an employee of the intelligence community.
        </p>
        <p>
          You can choose to have the 5-year test period for ownership and use suspended during any period you or your
          spouse serve outside the United States either as an employee of the Peace Corps on qualified official extended
          duty (defined later) or as an enrolled volunteer or volunteer leader of the Peace Corps. This means that you may
          be able to meet the 2-year use test even if, because of your service, you did not actually live in your home
          for at least the required 2 years during the 5-year period ending on the date of sale.
        </p>
        <Callout label="Tip">
          The period of suspension cannot last more than 10 years. Together, the 10-year suspension period and the 5-year
          test period can be as long as, but no more than, 15 years. You cannot suspend the 5-year period for more than
          one property at a time. You can revoke your choice to suspend the 5-year period at any time.
        </Callout>
        <h3>Married Persons</h3>
        <p>
          If you and your spouse file a joint return for the year of sale, you can exclude gain (up to $500,000) if either
          spouse meets the ownership and use tests.
        </p>
        <Callout label="Example">
          Mary sells her home in June of this year and marries John later in the year. She meets the ownership and use
          tests, but John does not. Emily can exclude up to $250,000 of gain on a separate or joint return for this year.
        </Callout>
        <Callout label="Example">
          Now assume that John also sells a home. He meets the ownership and use tests on his home. Mary and John can each
          exclude $250,000 of gain.
        </Callout>
        <p>
          <strong>Death of spouse before sale.</strong> If your spouse died before the date of sale, you are considered
          to have owned and used the property as your main home during any period of time when your spouse owned and used
          it as his or her main home.
        </p>
        <p>
          <strong>Home transferred from spouse.</strong> If your home was transferred to you by your spouse (or former
          spouse if the transfer was incident to divorce), you are considered to have owned it during any period when your
          spouse owned it.
        </p>
        <p>
          <strong>Use of home after divorce.</strong> You are considered to have used property as your main home during any
          period when you owned it and your spouse or former spouse is allowed to use it under a divorce or separation
          instrument. Such use is added to your own use before or after divorce.
        </p>
        <h3>Special Exceptions Affecting Exclusions</h3>
        <p>
          <strong>Home destroyed or condemned.</strong> If your home is destroyed or condemned after May 6, 1997, any
          gain (e.g., due to insurance proceeds) qualifies for the exclusion.
        </p>
        <p>
          <strong>Expatriates.</strong> You cannot claim the exclusion if the expatriate tax applies to you because you
          have renounced their citizenship and one of the primary purposes was to avoid U.S. taxes.
        </p>
        <p>
          <strong>More Than One Home Sold During the Two-Year Period.</strong> You cannot exclude gain on the sale of
          your home if, during the two-year period ending on the date of the sale, you sold another home at a gain and
          are excluding all or part of that gain. If you cannot exclude the gain, you must include it in your income.
        </p>
        <p>
          However, you can claim a reduced exclusion if you sold the home due to a change in health or place of employment
          or experienced unforeseen circumstances such as natural disasters, death, or unemployment (eligible unemployment
          compensation). When counting the number of sales during a two-year period, do not count sales before May 7,
          1997.
        </p>
        <p>
          The $250,000 (or $500,000) exclusion is reduced according to a formula whose numerator is the number of days of
          qualified ownership or use (or between sales of the homes) and the denominator is 730 days (for 2 years). If
          married filing jointly, duplicate the same calculation for your spouse's ownership and use (or days between
          sales).
        </p>
        <Callout label="Example">
          You owned and used your main home for 400 days before selling it at a $150,000 gain following your move to a new
          job location. Your exclusion is $136,986, that is, 400/730 x $250,000.
        </Callout>
        <p>
          <strong>Change in Place of Employment.</strong> You may qualify for a reduced exclusion if the primary reason
          for the sale of your main home is a change in the location of employment of a qualified individual.
        </p>
        <p>
          <strong>Health.</strong> You may qualify for a reduced exclusion if the sale of your main home is because of
          health if your primary reason for the sale is to obtain, provide, or facilitate the diagnosis, cure, mitigation,
          or treatment of disease, illness, or injury of a qualified individual, or to obtain or provide medical or
          personal care for a qualified individual suffering from a disease, illness, or injury.
        </p>
        <p>
          <strong>Unforeseen Circumstances.</strong> You may qualify for a reduced exclusion if the sale of your main home
          is because of an unforeseen circumstance if your primary reason for the sale is the occurrence of an event that
          you could not reasonably have anticipated before buying and occupying that home. You are not considered to have
          an unforeseen circumstance if the primary reason you sold your home was that you preferred to get a different
          home or because your finances improved.
        </p>
        <p>
          <strong>Home used in business.</strong> So long as the business use takes place in the same dwelling unit as
          your main home, the exclusion is not affected by business use, with this exception: You cannot exclude the part
          of your gain that is equal to any depreciation allowed or allowable for the business use of your home after May
          6, 1997. The 2 out of 5-year use-as-the-main-home test is not applied to deny exclusion for gain allocable to
          business use in the same dwelling unit, except for allowable depreciation.
        </p>
        <Callout label="Example">
          You bought a home in 1997 and used it throughout 3/4 as your residence and 1/4 as your home office. On December
          30, 2002, you sold it. The gain qualifies for exclusion except that you cannot exclude the part of your gain
          that is equal to any depreciation allowed or allowable for the business use of your home after May 6, 1997.
        </Callout>
      </>
    ),
  },
  {
    id: 'recapture-of-federal-subsidy',
    title: 'Recapture Of Federal Subsidy',
    body: (
      <>
        <p>
          If you financed your home under a federally subsidized program (loans from tax-exempt qualified mortgage bonds
          or loans with mortgage credit certificates), you may have to recapture all or part of the benefit you received
          from that program when you sell or otherwise dispose of your home. You recapture the benefit by increasing your
          federal income tax for the year of the sale. You may have to pay this recapture tax even if you can exclude your
          gain from income under the rules discussed earlier; that exclusion does not affect the recapture tax.
        </p>
      </>
    ),
  },
  {
    id: 'glossary',
    title: 'Glossary',
    body: (
      <Glossary
        terms={[
          [
            'Adjusted basis',
            'This is your basis in the property increased or decreased by certain amounts. See Adjusted Basis, earlier in this Guide, for a list of items that increase or decrease your basis in the property.',
          ],
          ['Amount realized', 'This is the selling price of your old home minus your selling expenses.'],
          [
            'Basis',
            'Your basis in the property is determined by how you got it. If you bought or built the property, your basis is what it cost you. If you got the property in some other way, your basis will be determined differently. See Cost as Basis and Basis Other Than Cost earlier in this Guide for more information.',
          ],
          [
            'Date of sale',
            'If you received a Form 1099-S, Proceeds From Real Estate Transactions, the date should be shown in box 1. If you did not receive this form, the date of sale is the earlier of (a) the date title transferred or (b) the date the economic burdens and benefits of ownership shifted to the buyer. In most cases, these dates are the same.',
          ],
          [
            'Fair market value',
            'Fair market value is the price at which property would change hands between a willing buyer and a willing seller, neither having to buy or sell and both having reasonable knowledge of the relevant facts. Sales of similar property, on or about the same date, may be helpful in figuring the fair market value of the property.',
          ],
          [
            'Fixing-up expenses',
            'These are costs you pay for decorating or repairing your home to make it easier to sell. You may be able to deduct fixing-up expenses from the amount realized on the sale of your old home.',
          ],
          ['Gain', 'Your gain on the sale of your home is the amount realized minus the adjusted basis of the home you sold.'],
          [
            'Improvements',
            'These add to the value of your home, prolong the life of the property or allow the property to be used for new purposes. The cost of improvements increases your basis in the property.',
          ],
          [
            'Main home',
            'This is the home you live in most of the time. It can be a house, houseboat, cooperative apartment, condominium, etc.',
          ],
          [
            'Repairs',
            'These maintain your property in good condition. They differ from Improvements in that they do not add much to the value or life of the property and their cost does not increase your basis in the property.',
          ],
          ['Seller-financed mortgage', 'This is a mortgage from the buyer of your home. The buyer makes mortgage payments to you.'],
          [
            'Selling expenses',
            'Selling expenses include items such as sales commissions and advertising and legal fees you pay to sell your home. Selling expenses also usually include loan charges you pay on the buyer\'s behalf as an aid in selling your home, such as loan placement fees or "points."',
          ],
          [
            'Settlement fees (or closing costs)',
            'These are amounts paid in purchasing your property in addition to the contract price. Some of these amounts are added to the basis of the property and some are deductible as itemized deductions. Certain amounts are neither deductible nor added to the basis of the property. See Settlement fees or closing costs under Basis, earlier in this Guide, for more details.',
          ],
        ]}
      />
    ),
  },
];

export default function SellingYourHomeMinimizeTax() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      title="Selling Your Home: How To Minimize the Tax On the Gain"
      sections={sections}
    >
      <>
        <p>
          Many tax benefits are available to you when you sell your principal residence. However, the rules are complex
          and personal guidance is necessary to take full advantage of these benefits so that you and your tax advisor
          can best work together to minimize the tax on the gain. This financial guide discusses the key rules so that you
          and your tax advisor can best work together to minimize the tax on the gain.
        </p>
        <p>
          The IRS allows an exclusion of up to $250,000 of the gain on the sale of your main home ($500,000 if you are
          married and file a joint return). Most taxpayers can take advantage of the exclusion and will not have to pay
          any tax on the sale of a main home as long as they meet the IRS ownership and use tests (see below).
        </p>
        <Callout label="Note">
          If you do have a loss from the sale, it is a personal loss. You cannot deduct the loss.
        </Callout>
        <p>
          If you don't qualify for the exclusion, your gain exceeds the exclusion, or you used part of the property in
          business or for rent, you have a taxable gain and must report the sale of your main home on your tax return on
          IRS Form 8949, Sales and Other Dispositions of Capital Assets and Schedule D, Capital Gains and Losses.
        </p>
      </>
    </GuideArticle>
  );
}
