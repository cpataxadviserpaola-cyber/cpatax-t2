import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=28 (Wills: Frequently Asked Questions), word for
// word. Each question is worded as in the library's answers, not its table of contents, which
// shortens the fourth one to "…care for my young children?". Hyphens used as dashes are now dashes,
// and the stray comma in "child(ren)'s, guardian" is dropped. The library's page has no
// introduction, so the banner's opening line (`lead`) is written for this site, as on the other FAQ
// pages.
// Address: /guides/life-events/planning-your-estate/wills-faq (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'no-will',
    title: 'What happens if I die without a will?',
    body: (
      <>
        <p>
          If you don't make a will or use some other legal method to transfer your property when you die, state law will
          determine what happens to your property. (This process is called "intestate succession.") Your property will
          be distributed to your spouse and children or, if you have neither, to other relatives such as siblings or
          parents according to a statutory formula.
        </p>
        <p>
          If no relatives are found to inherit your property, it will go into your state's coffers. More importantly
          however is that if you have minor children, in the absence of a will, a court will determine who will care for
          your young children and their property if the other parent is unavailable, unfit, or has died as well.
        </p>
      </>
    ),
  },
  {
    id: 'handwritten-will',
    title: "Can I just make a handwritten will if I don't have much property?",
    body: (
      <>
        <p>
          Handwritten wills, called "holographic" wills, are legal in 26 states. To be valid, a holographic will must be
          written, dated and signed in the handwriting of the person making the will. Some states allow will writers to
          use a fill-in-the-blanks form if the rest of the will is handwritten and the will is properly dated and signed.
        </p>
        <p>
          If you have very little property, and you want to make just a few specific bequests, a holographic will is
          better than nothing, provided it's valid in your state. In general however, they're not recommended. Unlike
          regular wills, holographic wills are not usually witnessed, so if your will goes before a probate court, the
          court may be unusually strict when examining it to be sure it's legitimate. It's better to take a little extra
          time to write a will that will easily pass muster when the time comes.
        </p>
      </>
    ),
  },
  {
    id: 'filing',
    title: 'Do I need to file my will with a court or in public records somewhere?',
    body: (
      <p>
        No. A will doesn't need to be recorded or filed with any government agency. Just keep your will in a safe,
        accessible place and be sure the person in charge of winding up your affairs (your executor) knows where it is.
      </p>
    ),
  },
  {
    id: 'guardian',
    title: 'Can I use my will to name somebody to care for my young children in case my spouse and I both die suddenly?',
    body: (
      <>
        <p>
          Yes. If both parents of a child die while the child is still a minor, another adult—that is, a "personal
          guardian"—must step in. You and the child's other parent (if there is one) can use your wills to name someone
          to be your child(ren)'s guardian. To avert conflicts, each parent should name the same person. If a guardian is
          needed, a judge will appoint the person you named as guardian as long as he or she agrees that it is in the
          best interest of your children.
        </p>
        <p>
          The personal guardian will be responsible for raising your children until they become legal adults, and you
          should have complete confidence in the person you name. Of course, you should ask the person if they are
          willing to accept the responsibility of raising your children should the need arise before you name them as a
          guardian in your will.
        </p>
      </>
    ),
  },
  {
    id: 'when-i-die',
    title: 'What happens to my will when I die?',
    body: (
      <p>
        After you die, your executor (the person you appointed in your will) is responsible for seeing that your wishes
        are carried out as directed by your will. He or she may hire an attorney to help wind up your affairs,
        especially if probate court proceedings are required.
      </p>
    ),
  },
  {
    id: 'challenges',
    title: 'What if someone challenges my will after I die?',
    body: (
      <>
        <p>
          Very few wills are ever challenged in court. When they are, it's usually by a close relative who feels somehow
          cheated out of his or her rightful share of the deceased person's property.
        </p>
        <p>
          Generally speaking, only spouses are legally entitled to a share of your property. Your children aren't
          entitled to anything unless you unintentionally overlooked them in your will.
        </p>
        <p>
          To get an entire will invalidated, someone must go to court and prove that it suffers from a fatal flaw: the
          signature was forged; you weren't of sound mind when you made the will or you were unduly influenced by
          someone.
        </p>
      </>
    ),
  },
  {
    id: 'final-arrangements',
    title: 'What instructions should I give my survivors about funeral ceremonies and the disposition of my body?',
    body: (
      <>
        <p>
          Letting your survivors know your wishes saves them the difficulties of making these decisions at a painful
          time. Many family members and friends find that discussing these matters ahead of time provides great relief,
          especially if a person is elderly or in poor health and death is expected soon.
        </p>
        <p>
          Planning some of these details in advance also helps save money. For many people, death goods and services
          cost more than anything they bought during their lives except homes and cars. Some wise comparison shopping in
          advance can help ensure that costs will be controlled or kept to a minimum.
        </p>
        <p>
          If you die without leaving written instructions about your preferences, state law will determine who has the
          right to decide how your remains will be handled. In most states, the right—and the responsibility—to pay for
          the reasonable costs of disposing of remains rests with the following people (in the order shown):
        </p>
        <ul>
          <li>Spouse</li>
          <li>Children</li>
          <li>Parents</li>
          <li>The next of kin, or</li>
          <li>A public administrator (who is appointed by a court).</li>
        </ul>
        <p>
          Some states have laws that permit you to name a designated agent to carry out your wishes for disposing of your
          remains. These laws are especially useful for people who have never married, yet wish their significant other
          to carry out their wishes, or for those who are estranged from family members or know that one child in
          particular is more likely to carry out your wishes.
        </p>
        <p>
          Disputes may arise if two or more people, the deceased person's children for example, share responsibility for
          a fundamental decision, such as whether the body of a parent should be buried or cremated. Such disputes can be
          avoided if you are willing to do some planning and to put your wishes in writing. In most cases the courts will
          respect your wishes.
        </p>
        <p>
          What you choose to include is a personal matter, likely to be dictated by custom, religious preference or
          simply your own whims. A typical final arrangements document might include:
        </p>
        <ul>
          <li>The name of the mortuary or other institution that will handle burial or cremation</li>
          <li>Whether or not you wish to be embalmed</li>
          <li>
            The type of casket or container in which your remains will be buried or cremated, including whether you want
            it present at any after-death ceremony
          </li>
          <li>The details of any ceremony you want before the burial or cremation</li>
          <li>Who your pallbearers will be if you wish to have some</li>
          <li>How your remains will be transported to the cemetery and gravesite</li>
          <li>Where your remains will be buried, stored or scattered</li>
          <li>The details of any ceremony you want to accompany your burial, interment or scattering</li>
          <li>The details of any marker you want to show where your remains are buried or interred</li>
        </ul>
      </>
    ),
  },
];

export default function WillsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-your-estate"
      page="Wills: Frequently Asked Questions"
      title={
        <>
          Wills: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about dying without a will, handwritten wills, naming a guardian for your children, will challenges, and instructions for your funeral and final arrangements."
      sections={sections}
    />
  );
}
