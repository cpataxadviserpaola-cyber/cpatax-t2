import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=41 (Living Trusts: Frequently Asked Questions),
// word for word. Each question is worded as in the library's answers, not its table of contents
// ("Can a living trust save on estate taxes?" there, "Can a living trust save taxes?" above the
// answer). Hyphens used as dashes are now dashes. The library's page has no introduction, so the
// banner's opening line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/planning-your-estate/living-trusts-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'what-is-a-living-trust',
    title: 'What is a living trust?',
    body: (
      <>
        <p>
          A living trust is an entity that exists only on paper (similar to a corporation) but is legally capable of
          owning property. However, a live person called the trustee must be in charge of the property. Furthermore, you
          can be the trustee of your own living trust, keeping full control over all property legally owned by the
          trust.
        </p>
        <p>
          There are many kinds of trusts. A living trust (also called a revocable trust, revocable living trust, or
          inter vivos trust) is simply one you create while you're alive rather than one created upon your death under
          the terms of your will.
        </p>
        <p>
          Property held in trust that is actually "owned" by the trustees, subject to the rights of the beneficiaries.
          The trust itself doesn't own anything. All living trusts are designed to avoid probate. Some also help you save
          on estate taxes, while others let you set up long-term property management.
        </p>
      </>
    ),
  },
  {
    id: 'what-is-probate',
    title: 'What is probate?',
    body: (
      <>
        <p>
          Probate is the legal process of paying the deceased's debts and distributing the estate to the rightful heirs.
          This process usually entails:
        </p>
        <ul>
          <li>
            The appointment of an individual by the court to act as executor of the estate. Executors are sometimes
            referred to as "personal representatives." Most people name an executor as part of their will. If there is
            no will, the court appoints an executor, most often a spouse if the deceased is married.
          </li>
          <li>Proving that the will is valid.</li>
          <li>Informing creditors, heirs, and beneficiaries that the will is probated.</li>
          <li>Disposing of the estate by the executor in accordance with the will or state law.</li>
        </ul>
        <p>
          The executor named in the will must file a petition with the court after the death. There is a fee for the
          probate process. Probating a will may require legal assistance depending on the size and complexity of the
          probable assets.
        </p>
        <p>
          Assets jointly owned by the deceased and others are not subject to probate. Proceeds from a life insurance
          policy or Individual Retirement Account (IRA) paid directly to a beneficiary are also not subject to probate.
        </p>
      </>
    ),
  },
  {
    id: 'do-i-need-one',
    title: 'Do I need a living trust?',
    body: (
      <p>
        A living trust is a useful estate and tax planning document that keeps your estate out of probate court. While
        some people may not need one, there are several reasons why it makes sense, such as having a beneficiary who is
        disabled, owning property in another state, or making it easier for your heirs to administer your estate after
        death.
      </p>
    ),
  },
  {
    id: 'avoiding-probate',
    title: 'How does a living trust avoid probate?',
    body: (
      <p>
        Property you transfer into a living trust before your death doesn't go through probate. The successor
        trustee—the person you appointed to handle the trust after your death—simply transfers ownership to the
        beneficiaries you named in the trust. In many cases, the whole process takes only a few weeks, and there are no
        lawyer or court fees to pay. The living trust ceases to exist when the property has all been transferred to the
        beneficiaries.
      </p>
    ),
  },
  {
    id: 'cost',
    title: 'Is it expensive to create a living trust?',
    body: (
      <p>
        The cost of creating a living trust depends on what you want to achieve. The more complicated a living trust is,
        the more expensive it will be. Also important to note is that while the fees associated with creating a living
        will are paid upfront, a living trust saves you money and time by avoiding probate court.
      </p>
    ),
  },
  {
    id: 'made-public',
    title: 'Is a trust document ever made public, like a will?',
    body: (
      <p>
        A will becomes a matter of public record when submitted to a probate court, as do all the other documents
        associated with probate—inventories of the deceased person's assets and debts, for example. However, the terms
        of a living trust need not be made public.
      </p>
    ),
  },
  {
    id: 'creditors',
    title: 'Does a trust protect property from creditors?',
    body: (
      <>
        <p>
          Holding assets in a revocable trust does not shelter those assets from creditors. A creditor who wins a lawsuit
          against you can go after the trust property as if you still owned it in your name.
        </p>
        <p>
          After your death, however, property in a living trust can be quickly and quietly distributed to the
          beneficiaries (unlike property that must go through probate). That complicates matters for creditors; by the
          time they find out about your death, your property may already be dispersed, and the creditors have no way of
          knowing exactly what you own (except for real estate, which is always a matter of public record). It may not be
          worth the creditor's time and effort to track down the property and demand that the new owners use it to pay
          your debts.
        </p>
        <p>
          On the other hand, probate can offer protection from creditors. During probate, known creditors must be
          notified of the death and given a chance to file claims. If they miss the deadline to file, they're out of luck
          forever.
        </p>
      </>
    ),
  },
  {
    id: 'young-and-healthy',
    title: "Do I need a trust if I'm young and healthy?",
    body: (
      <p>
        Probably not. At this stage in your life, your main estate planning goals are probably making sure that in the
        unlikely event of your premature death, your property is distributed how you want it to be and, if you have
        young children, that they are cared for. You don't need a trust to accomplish those ends; writing a will and
        perhaps buying some life insurance is sufficient.
      </p>
    ),
  },
  {
    id: 'taxes',
    title: 'Can a living trust save taxes?',
    body: (
      <p>
        A simple probate-avoidance living trust does not affect either income or estate taxes. More complicated living
        trusts, however, can greatly reduce your federal estate tax bill if you expect your estate to owe estate tax at
        your death.
      </p>
    ),
  },
];

export default function LivingTrustsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-your-estate"
      page="Living Trusts: Frequently Asked Questions"
      title={
        <>
          Living Trusts: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about what a living trust is, how it avoids probate, what it costs, whether it protects property from creditors, and whether it can save taxes."
      sections={sections}
    />
  );
}
