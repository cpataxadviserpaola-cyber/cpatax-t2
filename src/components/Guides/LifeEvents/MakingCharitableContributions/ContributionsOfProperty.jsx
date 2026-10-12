import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=76 (Charitable Contributions of Property:
// Maximizing the Deduction), word for word. Back-to-top anchors omitted (handled by layout). The
// library's sentence about certified historic structures ends "…all of the following three
// conditions:" with no conditions after it; it is kept as it is. Hyphens used as dashes are now
// dashes, the "Example:" lead-ins are the boxes' labels, and the "Caution" and "Note" boxes keep
// the library's labels. The related guide is named by its title in the library, and the box drops
// the library's lead-in "See", which its label already says.
// Address: /guides/life-events/making-charitable-contributions/contributions-of-property
// (articlePages in src/data/guides.js).

const related = guide('life-events.php');

const sections = [
  {
    id: 'fair-market-value',
    title: 'Determining Fair Market Value',
    body: (
      <>
        <p>
          Fair market value is the price at which property would change hands between a willing buyer and a willing
          seller, neither having to buy or sell, and both having reasonable knowledge of all of the relevant facts.
        </p>

        <h3>Used Clothing and Household Items</h3>
        <p>
          The fair market value of used clothing and used household goods, such as furniture and furnishings,
          electronics, appliances, linens, and other similar items is usually much lower than the price paid when new.
          These items may have little or no market value because they are in a worn condition, out of style, or no
          longer useful. Claim as the value of used clothing the price that buyers of used items actually pay clothing
          stores, such as consignment or thrift shops.
        </p>
        <p>
          Be prepared to support your valuation of other household items with photographs, canceled checks, receipts from
          your purchase of the items, or other evidence. Magazine or newspaper articles and photographs that describe the
          items and statements by the recipients of the items may be useful. This documentation does not get filed with
          your return; it is kept on hand as proof.
        </p>
        <Callout label="Note">
          <p>
            No deduction is allowed after August 17, 2006 for household items in less than "good used condition."
            However, deduction <em>is</em> allowed where the amount claimed for the item in less than good condition is
            more than $500 and a qualified appraisal supporting the valuation is filed with the return.
          </p>
        </Callout>

        <h3>Cars, Boats, and Aircraft</h3>
        <p>If you donate a car, a boat, or an aircraft to a charitable organization, you must determine the FMV.</p>
        <p>
          The FMV of a donated car, boat, or airplane is generally the amount listed in a used vehicle pricing guide for a
          private party sale, not the dealer retail value, of a similar vehicle. The FMV may be less than that, however
          if the vehicle has engine trouble, body damage, high mileage, or any type of excessive wear.
        </p>
        <p>
          Similar is defined as the same make, model, and year, sold in the same area, in the same condition, with the
          same or similar options or accessories, and with the same or similar warranties as the donated vehicle.
        </p>
        <p>
          <strong>Boats.</strong> Except for inexpensive small boats, the valuation of boats should be based on an
          appraisal by a marine surveyor because the physical condition is so critical to the value.
        </p>
        <p>
          If you donate a qualified vehicle to a qualified organization and you claim a deduction of more than $500, you
          can deduct the smaller of the gross proceeds from the sale of the vehicle by the organization or the vehicle's
          fair market value on the date of the contribution. If the vehicle's fair market value was more than your cost
          or other basis, you may have to reduce the fair market value to figure the deductible amount.
        </p>

        <h3>Paintings, Antiques, and Other Objects of Art.</h3>
        <p>
          Deductions for contributions of paintings, antiques, and other objects of art should be supported by a written
          appraisal from a qualified and reputable source unless the deduction is $5,000 or less.
        </p>
        <ol>
          <li>
            <strong>Art valued at $20,000 or more.</strong> If you claim a deduction of $20,000 or more for donations of
            art, you must attach a complete copy of the signed appraisal to your return. For individual objects valued at
            $20,000 or more, a photograph of a size and quality fully showing the object, preferably an 8 x 10-inch color
            photograph or a color transparency no smaller than 4 x 5 inches, must be provided upon request.
          </li>
          <li>
            <strong>Art valued at $50,000 or more.</strong> If you donate an item of art that has been appraised at
            $50,000 or more, you can request a Statement of Value for that item from the IRS. You must request the
            statement before filing the tax return that reports the donation.
          </li>
        </ol>
        <p>
          <strong>Large quantities</strong>. If you contribute a large number of the same item, fair market value is the
          price at which comparable numbers of the item are being sold.
        </p>
        <Callout label="Example">
          <p>
            You purchase 20 rare books for $1,000. The person who sells them to you says the retail value of these books
            is $3,000. If you contribute these rare books to a qualified organization, you can claim a deduction only for
            the price at which similar numbers of the same book are currently being sold. Your charitable contribution is
            $1,000 unless you can show that similar numbers of that book were selling at a different price at the time of
            the contribution.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'special-rules',
    title: 'Contributions Subject to Special Rules',
    body: (
      <>
        <p>Special rules apply if you contribute:</p>
        <ul>
          <li>Clothing or household items,</li>
          <li>A car, boat, or airplane,</li>
          <li>Taxidermy property,</li>
          <li>Property subject to a debt,</li>
          <li>A partial interest in property,</li>
          <li>A fractional interest in tangible personal property,</li>
          <li>A qualified conservation contribution,</li>
          <li>A future interest in tangible personal property,</li>
          <li>Inventory from your business, or</li>
          <li>A patent or other intellectual property.</li>
        </ul>
        <p>These special rules are described here briefly.</p>
        <p>
          <strong>Used clothing or household items.</strong> You cannot take a deduction for clothing or household items
          you donate unless the clothing or household items are in good used condition or better. However, there is an
          exception. You can take a deduction for a contribution of an item of clothing or a household item that is not
          in good used condition or better if you deduct more than $500 for it and include a qualified appraisal of it
          with your return.
        </p>
        <p>
          <strong>Car, boat, or airplane.</strong> A qualified vehicle is defined as a car or any motor vehicle
          manufactured mainly for use on public streets, roads, and highways, a boat, or an airplane. If you donate a
          qualified vehicle to a qualified organization and you claim a deduction of more than $500, you can deduct the
          smaller of:
        </p>
        <ul>
          <li>The gross proceeds from the sale of the vehicle by the organization, or</li>
          <li>
            The vehicle's fair market value on the date of the contribution. If the vehicle's fair market value was more
            than your cost or other basis, you may have to reduce the fair market value to figure the deductible amount
          </li>
        </ul>
        <p>
          <strong>Taxidermy property.</strong> If you donate taxidermy property to a qualified organization, your
          deduction is limited to your basis in the property or its fair market value, whichever is less. This applies
          if you prepared, stuffed, or mounted the property or paid or incurred the cost of preparing, stuffing, or
          mounting the property.
        </p>
        <p>
          Your basis for this purpose includes only the cost of preparing, stuffing, and mounting the property. Your basis
          does not include transportation or travel costs. It also does not include direct or indirect costs for hunting
          or killing an animal, such as equipment costs. In addition, it does not include the value of your time.
        </p>
        <p>Taxidermy property means any work of art that:</p>
        <ul>
          <li>Is the reproduction or preservation of an animal, in whole or in part,</li>
          <li>Is prepared, stuffed, or mounted to recreate one or more characteristics of the animal, and</li>
          <li>Contains a part of the body of the dead animal.</li>
        </ul>
        <p>
          <strong>Property subject to a debt</strong>. If you contribute property subject to a debt (such as a mortgage),
          there are two possible ways your deduction might be reduced. First, special rules require you to reduce your
          deduction by certain interest payments you make. These rules prevent a double deduction of the same amount as
          both investment interest and a charitable contribution.
        </p>
        <p>
          Second, if the debt is assumed by the recipient (or another person), you must reduce the fair market value of
          the property by the amount of the outstanding debt.
        </p>
        <Callout label="Note">
          <p>
            If you sold the property to a qualified organization at a bargain price (discussed later), the amount of the
            debt is also treated as an amount realized on the sale or exchange of property.
          </p>
        </Callout>
        <p>
          <strong>Partial interest in property</strong>. Generally, you cannot deduct a charitable contribution (not made
          by a transfer in trust) of less than your entire interest in property. A contribution of the right to use
          property is a contribution of less than your entire interest in that property, and is not deductible.
        </p>
        <p>
          There are important exceptions to this rule. You can deduct a charitable contribution of a partial interest in
          property if that interest fits one of the following categories:
        </p>
        <p>
          1. A remainder interest in your personal home or farm. A remainder interest is one that passes to a beneficiary
          after the end of an earlier interest in the property.
        </p>
        <Callout label="Example">
          <p>
            You keep the right to live in your home during your lifetime and give your church a remainder interest that
            begins upon your death.
          </p>
        </Callout>
        <p>
          2. An undivided part of your entire interest. This must consist of a part of every substantial interest or right
          you own in the property and must last as long as your interest in the property lasts.
        </p>
        <Callout label="Example">
          <p>
            You contribute voting stock to a qualified organization but keep the right to vote the stock. The right to
            vote is a substantial right in the stock. You have not contributed an undivided part of your entire interest
            and cannot deduct your contribution.
          </p>
        </Callout>
        <p>
          Where it's an undivided interest in tangible personal property (defined below) the donee must have possession
          of the property for a part of the year consistent with its interest in the property. Special rules apply for
          contributions after August 17, 2006, of further undivided interests in the same property by the same donor.
          And, for contributions after August 17, 2006, of undivided interests in tangible personal property, the
          deduction is "recaptured" if the donee doesn't get all of the donor's interest in the property by the earlier
          of 10 years from the first gift or the donor's death. "Recapture" means the deduction is added back to the
          donor's income (say, in the 11th year), with interest due from the year of contribution and a tax penalty of 10
          percent of the recaptured income.
        </p>
        <p>3. A partial interest that would be deductible if transferred in trust.</p>
        <p>4. A qualified conservation contribution (as specifically defined in the tax law).</p>
        <p>
          <strong>Fractional Interest in Tangible Personal Property.</strong> A fractional interest in property is an
          undivided portion of your entire interest in the property. You cannot deduct a charitable contribution of a
          fractional interest in tangible personal property unless all interests in the property are held immediately
          before the contribution by you or you and the qualifying organization receiving the contribution.
        </p>
        <p>
          <strong>Qualified Conservation Contribution.</strong> A qualified conservation contribution is a contribution of
          a qualified real property interest to a qualified organization such as a governmental unit or publicly
          supported charitable, religious, scientific, literary or educational organization that is to be used only for
          conservation purposes.
        </p>
        <p>
          The organization also must have a commitment to protect the conservation purposes of the donation and must have
          the resources to enforce the restrictions. Conservation purposes are defined as:
        </p>
        <ul>
          <li>Preserving land areas for outdoor recreation by, or for the education of, the general public.</li>
          <li>Protecting a relatively natural habitat of fish, wildlife, or plants, or a similar ecosystem.</li>
          <li>
            Preserving open space, including farmland and forest land, if it yields a significant public benefit. It must
            be either for the scenic enjoyment of the general public or under a clearly defined federal, state, or local
            governmental conservation policy.
          </li>
          <li>Preserving a historically important land area or a certified historic structure.</li>
        </ul>
        <p>
          If a building in a registered historic district is a certified historic structure, a contribution of a
          qualified real property interest that is an easement or other restriction on the exterior of the building is
          deductible only if it meets all of the following three conditions:
        </p>
        <p>
          <strong>Future interest in tangible personal property</strong>. You can deduct the value of a charitable
          contribution of a future interest in tangible personal property only after all intervening interests in and
          rights to the actual possession or enjoyment of the property have either expired or been turned over to
          someone other than yourself, a related person, or a related organization.
        </p>
        <p>
          Related persons include your spouse, children, grandchildren, brothers, sisters, and parents. Related
          organizations may include a partnership or corporation that you have an interest in, or an estate or trust
          that you have a connection with.
        </p>
        <p>
          <em>Tangible personal property</em>. This is any property, other than land or buildings, that can be seen or
          touched. It includes furniture, books, jewelry, paintings, and cars.
        </p>
        <p>
          <em>Future interest</em>. This is any interest that is to begin at some future time, regardless of whether it
          is designated as a future interest under state law.
        </p>
        <Callout label="Example">
          <p>
            You own an antique car that you contribute to a museum. You give up ownership, but retain the right to keep
            the car in your garage with your personal collection. Since you keep an interest in the property, you cannot
            deduct the contribution. If you turn the car over to the museum in a later year, giving up all rights to its
            use, possession, and enjoyment, you can take a deduction for the contribution in that later year.
          </p>
        </Callout>
        <p>
          <strong>Inventory.</strong> If you contribute inventory (property that you sell in the course of your
          business), the amount you can claim as a contribution deduction is the smaller of its fair market value on the
          day you contributed it or its basis. The basis of donated inventory is any cost incurred for the inventory in
          an earlier year that you would otherwise include in your opening inventory for the year of the contribution.
          You must remove the amount of your contribution deduction from your opening inventory. It is not part of the
          cost of goods sold.
        </p>
        <p>
          If the cost of donated inventory is not included in your opening inventory, the inventory's basis is zero and
          you cannot claim a charitable contribution deduction. Treat the inventory's cost as you would ordinarily treat
          it under your method of accounting. For example, include the purchase price of inventory bought and donated in
          the same year in the cost of goods sold for that year.
        </p>
        <p>
          A special rule applies to donations of food inventory (see <em>Food Inventory</em> below)
        </p>
        <p>
          <strong>Patents and Other Intellectual Property.</strong> If you donate a patent or other intellectual property
          to a qualified organization, your deduction is limited to the basis of the property or the fair market value of
          the property, whichever is less. After the legal life of the patent or other intellectual property ends, or
          after the 10th anniversary of the donation, no additional deduction is allowed. Also, additional deductions
          cannot be taken for patents or other intellectual property donated to certain private foundations.
          Intellectual property means any of the following:
        </p>
        <ul>
          <li>Patents.</li>
          <li>Copyrights (other than a copyright described in Internal Revenue Code sections 1221(a)(3) or 1231(b)(1)(C)).</li>
          <li>Trademarks.</li>
          <li>Trade names.</li>
          <li>Trade secrets.</li>
          <li>Know-how.</li>
          <li>Software (other than software described in Internal Revenue Code section 197(e)(3)(A)(i)).</li>
          <li>Other similar property or applications or registrations of such property.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'decreased-in-value',
    title: 'Donating Property That Has Decreased in Value',
    body: (
      <>
        <p>
          If you contribute property with a fair market value that is less than your basis in it (generally, less than
          what you paid for it), your deduction is limited to its fair market value. You cannot claim a deduction for the
          difference between the property's basis and its fair market value.
        </p>
        <p>Common examples of property that decreases in value include clothing, furniture, appliances, and cars.</p>
      </>
    ),
  },
  {
    id: 'increased-in-value',
    title: 'Donating Property That Has Increased in Value',
    body: (
      <>
        <p>
          If you contribute property with a fair market value that is more than your basis in it, you may have to{' '}
          <strong>reduce the fair market value</strong> by the amount of appreciation (increase in value) when you figure
          your deduction.
        </p>
        <p>
          Again, your basis in property is generally what you paid for it. Different rules apply to figuring your
          deduction, depending on whether the property is:
        </p>
        <p>1. Ordinary income property, or</p>
        <p>2. Capital gain property.</p>
      </>
    ),
  },
  {
    id: 'ordinary-income-property',
    title: 'Ordinary Income Property',
    body: (
      <>
        <p>
          Property is ordinary income property if its sale at fair market value on the date it was contributed would have
          resulted in ordinary income or in short-term capital gain. Examples of ordinary income property are inventory,
          works of art created by the donor, manuscripts prepared by the donor, and capital assets held 1 year or less.
        </p>
        <p>
          Equipment or other property used in a trade or business is considered ordinary income property to the extent
          of any gain that would have been treated as ordinary income under the tax law, had the property been sold at
          its fair market value at the time of contribution.
        </p>
        <p>
          <strong>Amount of deduction</strong>. The amount you can deduct for a contribution of ordinary income property
          is its fair market value less the amount that would be ordinary income or short-term capital gain if you sold
          the property for its fair market value. Generally, this rule limits the deduction to your basis in the property.
        </p>
        <Callout label="Example">
          <p>
            You donate stock that you held for 5 months to your church. The fair market value of the stock on the day you
            donate it is $1,000, but you paid only $800 (your basis). Because the $200 of appreciation would be short-term
            capital gain if you sold the stock, your deduction is limited to $800 (fair market value less the
            appreciation).
          </p>
        </Callout>
        <p>
          <em>Exception</em>. Do not reduce your charitable contribution if you include the ordinary or capital gain
          income in your gross income in the same year as the contribution.
        </p>
      </>
    ),
  },
  {
    id: 'capital-gain-property',
    title: 'Capital Gain Property',
    body: (
      <>
        <p>
          Property is capital gain property if its sale at fair market value on the date of the contribution would have
          resulted in long-term capital gain. Capital gain property includes capital assets held more than 1 year.
        </p>
        <p>
          <strong>Capital assets</strong>. Capital assets include most items of property that you own and use for
          personal purposes or investment. Examples of capital assets are stocks, bonds, jewelry, coin or stamp
          collections, and cars or furniture used for personal purposes.
        </p>
        <p>
          For purposes of figuring your charitable contribution, capital assets also include certain real property and
          depreciable property used in your trade or business and, generally, held more than 1 year.
        </p>
        <p>
          <em>Real property</em>. Real property is land and generally, anything that is built on, growing on, or attached
          to land.
        </p>
        <p>
          <em>Depreciable property</em>. Depreciable property is property used in business or held for the production of
          income and for which a depreciation deduction is allowed.
        </p>
        <p>
          <strong>Amount of deduction—general rule</strong>. When figuring your deduction for a gift of capital gain
          property, you usually can use the <strong>fair market value</strong> of the gift.
        </p>
        <p>
          However, in certain situations, you must reduce the fair market value by any amount that would have been
          long-term capital gain if you had sold the property for its fair market value. Generally, this means reducing
          the fair market value to the property's cost or other basis.
        </p>
        <p>
          This can happen where the charity's use of tangible personal property is not in connection with its exempt
          purpose. For contributions after September 1, 2006, of more than $5,000, the deduction is generally reduced to
          basis if the charity disposes of the property within 3 years of the donation. If disposition takes place after
          the donation, the appreciation (fair market value less basis) is recaptured as ordinary income in the year of
          the disposition (absent certification from the charity that use for its exempt purpose occurred or was
          intended). The charity must notify IRS and the donor of the disposition (and the certification, if
          applicable).
        </p>
        <p>
          <strong>Ordinary or capital gain income included in gross income</strong>. You do not reduce your charitable
          contribution if you include the ordinary or capital gain income in your gross income in the same year as the
          contribution. This may happen when you transfer installment or discount obligations or when you assign income
          to a charitable organization.
        </p>
        <Callout label="Example">
          <p>
            You donate an installment note to a qualified organization. The note has a fair market value of $10,000 and a
            basis to you of $7,000. As a result of the donation, you have a short-term capital gain of $3,000 ($10,000 −
            $7,000), which you include in your income for the year. Your charitable contribution is $10,000.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'food-inventory',
    title: 'Food Inventory',
    body: (
      <>
        <p>
          Special rules apply to certain donations of food inventory to a qualified organization. These rules apply if
          all of the following conditions are met.
        </p>
        <ol>
          <li>
            You made a contribution of apparently wholesome food from your trade or business. Apparently wholesome food is
            food intended for human consumption that meets all quality and labeling standards imposed by federal, state,
            and local laws and regulations even though the food may not be readily marketable due to appearance, age,
            freshness, grade, size, surplus, or other conditions.
          </li>
          <li>The food is to be used only for the care of the ill, the needy, or infants.</li>
          <li>The use of the food is related to the organization's exempt purpose or function.</li>
          <li>The organization does not transfer the food for money, other property, or services.</li>
          <li>You receive a written statement from the organization stating it will comply with requirements (2), (3), and (4).</li>
          <li>The organization is not a private non-operating foundation.</li>
          <li>
            The food satisfies any applicable requirements of the Federal Food, Drug, and Cosmetic Act and regulations on
            the date of transfer and for the previous 180 days.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'bargain-sales',
    title: 'Bargain Sales',
    body: (
      <>
        <p>
          A bargain sale of property to a qualified organization (a sale or exchange for less than the property's fair
          market value) is partly a charitable contribution and partly a sale or exchange.
        </p>
        <p>
          <strong>The part of the bargain sale that is a sale or exchange may result in a taxable gain.</strong>
        </p>
      </>
    ),
  },
  {
    id: 'penalty',
    title: 'Penalty',
    body: <p>The IRS may impose a penalty if you overstate the value or adjusted basis of donated property.</p>,
  },
];

export default function ContributionsOfProperty() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/making-charitable-contributions"
      page="Charitable Contributions of Property"
      title={
        <>
          Charitable Contributions of Property: <em>Maximizing the Deduction</em>
        </>
      }
      lead="This Financial Guide discusses the rules that apply when you contribute property—as opposed to money—to charity and is meant to provide general information. Contact your tax advisor if you need tax planning assistance."
      sections={sections}
      numbered={false}
    >
      <Callout label="Caution">
        <p>
          The rules in this area are extremely complex. We urge you not to act on any transaction without seeking the
          proper advice.
        </p>
      </Callout>
      <p>
        If you contribute property to a qualified organization, the amount of your charitable contribution is generally
        the <strong>fair market value</strong> of the property at the time of the contribution. However, if the property
        fits into one of the categories discussed here, the amount of your deduction must be decreased.
      </p>
      <p>
        After discussing how to determine the fair market value of something you donate, we'll discuss the following
        categories of charitable gifts of property:
      </p>
      <ul>
        <li>Contributions subject to special rules</li>
        <li>Property that has decreased in value;</li>
        <li>Property that has increased in value;</li>
        <li>Food Inventory.</li>
        <li>Bargain Sales.</li>
      </ul>
      <RelatedGuide guide={related([77, 'What Records You Must Keep Relating To Your Charitable Contributions'])} />
    </GuideArticle>
  );
}
