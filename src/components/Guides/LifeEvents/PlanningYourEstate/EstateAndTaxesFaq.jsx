import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=42 (Your Estate and Taxes: Frequently Asked
// Questions), word for word. The two lists of states are under subheadings, as on the library's
// page. The library's page has no introduction, so the banner's opening line (`lead`) is written
// for this site, as on the other FAQ pages.
// Address: /guides/life-events/planning-your-estate/estate-and-taxes-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'taxes-after-death',
    title: 'Will my estate have to pay taxes after I die?',
    body: (
      <p>
        It depends. The federal government imposes estate taxes at your death only if your property is worth more than a
        certain amount based on the year of death. By some estimates, more than 99 percent of estates do not pay any
        estate tax. In 2023, the exemption limit is $12.92 million ($12.06 million in 2022). Estates worth more than
        $12.92 million are taxed at 40 percent. For married couples, the exemption is $25.84 million. There are a couple
        of important exceptions to the general rule, however. All property left to a spouse is exempt from the tax as
        long as the spouse is a U.S. citizen, and estate taxes won't be assessed on any property you leave to a
        tax-exempt charity.
      </p>
    ),
  },
  {
    id: 'state-estate-taxes',
    title: 'Do states also impose estate taxes?',
    body: (
      <>
        <p>
          Most states impose estate taxes of some kind. In many cases, there's a state inheritance tax only where a
          federal estate tax would apply. But some states have estate taxes that are "uncoupled" from the federal tax,
          and some have inheritance taxes.
        </p>
        <p>
          Your inheritors, not your estate, pay inheritance taxes. Typically, how much they pay depends on their
          relationship to you.
        </p>
        <p>
          Twelve states and the District of Columbia impose an estate tax, while six states have an inheritance tax.
          Maryland is the only state with both an estate tax and an inheritance tax.
        </p>
        <h3>Estate Tax</h3>
        <ul>
          <li>Connecticut</li>
          <li>District of Columbia</li>
          <li>Hawaii</li>
          <li>Illinois</li>
          <li>Maine</li>
          <li>Maryland</li>
          <li>Massachusetts</li>
          <li>Minnesota</li>
          <li>New York</li>
          <li>Oregon</li>
          <li>Rhode Island</li>
          <li>Vermont</li>
          <li>Washington</li>
        </ul>
        <h3>Inheritance Tax</h3>
        <ul>
          <li>Iowa</li>
          <li>Kentucky</li>
          <li>Maryland</li>
          <li>Nebraska</li>
          <li>New Jersey</li>
          <li>Pennsylvania</li>
        </ul>
      </>
    ),
  },
  {
    id: 'minimize-federal',
    title: 'How can I minimize federal estate taxes?',
    body: (
      <p>
        There are several ways. One common way to do this is to leave your children, directly or in trust, an amount up
        to the estate tax exemption amount ($12.92 million in 2023) and the balance to your spouse.
      </p>
    ),
  },
  {
    id: 'avoid-state',
    title: 'Can I avoid paying state estate taxes?',
    body: (
      <>
        <p>
          In most states that base inheritance taxes on the federal estate tax, steps that avoid federal tax also avoid
          state tax. If your state imposes some other kind of estate tax, your professional advisor can help you minimize
          state tax by taking actions specifically adapted to that tax.
        </p>
        <p>
          If you live in two states, for instance, Florida in winter and summer in New Jersey, your inheritors may be
          able to save on estate taxes if you make your legal residence in the state with lower inheritance taxes.
        </p>
      </>
    ),
  },
  {
    id: 'give-property-away',
    title: 'Can I just give all my property away before I die and avoid estate taxes?',
    body: (
      <>
        <p>
          You can give up to $17,000 in 2023 ($16,000 in 2022) per person per year with no gift tax liability. Gifts
          exceeding that amount are counted against a gift tax exemption of $12,920,000. Gifts exceeding that exemption
          are subject to the gift tax. At your death, these gifts could become your taxable estate (with credit for gift
          tax paid).
        </p>
        <p>
          There are, however, a few exceptions to this rule. You can give an unlimited amount of property to your spouse
          unless your spouse is not a U.S. citizen, in which case you can give away up to $100,000 indexed for inflation;
          the 2023 amount is $175,000 ($164,000 in 2022) per year free of gift tax. Any property given to a tax-exempt
          charity avoids federal gift taxes. Money spent directly on someone's medical bills or school tuition is exempt
          as well.
        </p>
      </>
    ),
  },
];

export default function EstateAndTaxesFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-your-estate"
      page="Your Estate and Taxes: Frequently Asked Questions"
      title={
        <>
          Your Estate and Taxes: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about federal and state estate taxes, inheritance taxes, ways to minimize the tax on your estate, and giving property away during your lifetime."
      sections={sections}
    />
  );
}
