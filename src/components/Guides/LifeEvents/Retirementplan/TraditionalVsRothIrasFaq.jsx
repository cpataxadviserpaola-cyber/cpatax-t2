import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=26 (Traditional vs Roth IRAs: Frequently Asked
// Questions), word for word. Each question is worded as in the library's answers, not its table of
// contents ("stay at home" there, "stay-at-home" above the answer). The missing space in
// "$150,000 to$165,000" is added, and the "Note" box keeps the library's label. The library's page
// has no introduction, so the banner's opening line (`lead`) is written for this site, as on the
// other FAQ pages.
// Address: /guides/life-events/planning-for-retirement/traditional-vs-roth-iras-faq (articlePages
// in src/data/guides.js).

const sections = [
  {
    id: 'whats-good',
    title: "What's good about investing in IRAs?",
    body: (
      <p>
        There are two types of IRAs: traditional IRAs and Roth IRAs. Traditional IRAs defer taxation of investment
        income, and withdrawals are taxable income except for withdrawals of previously nondeductible contributions. In
        most cases, however, contributions are deductible. Roth IRAs are subject to many of the same rules as
        traditional IRAs. Still, there are several differences, the primary one being that contributions are not
        deductible and are made after tax, but qualified distributions are generally tax-free.
      </p>
    ),
  },
  {
    id: 'traditional-ira',
    title: 'Can anyone have a traditional IRA?',
    body: (
      <p>
        If you have income from wages or self-employment income, you can contribute up to $7,000 for 2025 (also $7,000
        for 2024). IRAs are available even to children who meet these conditions. Individuals aged 50 and older can
        contribute an additional $1,000 for a total of $8,000 for 2025 (the same as for 2024).
      </p>
    ),
  },
  {
    id: 'stay-at-home-spouse',
    title: 'Can my stay-at-home spouse have an IRA?',
    body: (
      <p>
        Yes. Contributions of $7,000 for each spouse are allowed for 2025 if the couple's wages or self-employment
        earnings are $14,000 or more. If less, the contribution amount cannot exceed your or your spouse's taxable
        compensation for the year. (The same limits apply for 2024.)
      </p>
    ),
  },
  {
    id: 'roth-advantages',
    title: 'What makes Roth IRAs so special?',
    body: (
      <>
        <p>Roth IRAs offer the following advantages:</p>
        <ul>
          <li>
            Withdrawals, if they qualify, are completely exempt from income tax, unlike most withdrawals from other
            retirement plans.
          </li>
          <li>
            You can quickly build up a Roth IRA account by converting traditional IRAs into Roth IRAs, but there is a tax
            cost.
          </li>
          <li>
            Because Roth IRAs aren't subject to age-triggered required minimum distribution rules, more money can be left
            in an account and passed on to heirs than is allowed under other plans.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'roth-eligibility',
    title: 'Can anyone have a Roth IRA?',
    body: (
      <>
        <p>Not everyone can contribute to a Roth IRA. The following conditions apply:</p>
        <ul>
          <li>
            The ability to contribute phases out if modified adjust gross income (MAGI) exceeds certain amounts. For
            married taxpayers filing jointly, the 2025 phaseout range is $236,000 to $246,000. For single and
            head-of-household taxpayers, the 2025 phaseout range is $150,000 to $165,000. (For 2024, the phaseout ranges
            are $230,000 to $240,000 and $146,000 to $161,000, respectively.) You can make a partial contribution if your
            MAGI falls within the applicable range, but no contribution if it exceeds the top of the range.
          </li>
          <li>
            As with traditional IRA contributions, you must have earnings from personal services equal to or greater than
            your Roth IRA contribution. The 2025 (and 2024) IRA contribution maximum of $7,000 (plus an additional $1,000
            for taxpayers age 50 or older) applies to traditional and Roth IRAs on a combined basis. So your maximum Roth
            IRA contribution is reduced by any traditional IRA contributions you make for the year. If you make the
            maximum contribution to a traditional IRA, you can't contribute to a Roth IRA.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'roth-for-spouse',
    title: 'Can I set up a Roth IRA for my spouse?',
    body: (
      <p>
        Yes, subject to the income conditions above, contributions of $7,000 each are allowed for 2025 if the couple's
        earnings are at least $14,000 for 2025 ($15,000 if one of you is age 50 or older or $16,000 if both of you are
        age 50 or older. The same limits apply for 2024.) Each spouse can contribute up to the current limit; however,
        the combined total of your contributions can't be more than the taxable compensation reported on your joint
        return.
      </p>
    ),
  },
  {
    id: 'roth-for-child',
    title: 'Can I set up a Roth IRA for my child?',
    body: <p>Yes, for a child with personal service earnings and subject to the other income conditions.</p>,
  },
  {
    id: 'roth-downside',
    title: "What's the downside to Roth IRAs?",
    body: (
      <>
        <p>The following is a brief list of negative issues regarding Roth IRAs:</p>
        <ul>
          <li>Roth IRA contributions are not tax-deductible.</li>
          <li>
            Unless you start contributing when you're very young, to build a sizable Roth IRA, you will likely have to
            convert some or all of a traditional IRA. Conversions are taxable.
          </li>
        </ul>
        <Callout label="Note">
          <p>
            If a contribution to a regular IRA has been converted into a contribution to a Roth IRA, it can't be
            converted back into a contribution to a regular IRA. This provision prevents a taxpayer from using
            recharacterization to unwind a Roth conversion.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'heirs',
    title: 'How are my heirs taxed on inherited Roth IRA wealth?',
    body: (
      <>
        <p>Your heirs are taxed as follows:</p>
        <ul>
          <li>No tax paid on withdrawals as long as the funds have been in the Roth IRA for at least five years.</li>
          <li>
            Starting in 2020 (SECURE Act), an heir inheriting a Roth IRA must withdraw the funds within ten (10) years
            after the account owner's death (some exceptions apply). Heirs with Roth IRAs inherited before 2020 can spread
            the withdrawal over their life, continuing the tax shelter for amounts not withdrawn.
          </li>
          <li>Estate tax treatment is the same as for traditional IRAs.</li>
        </ul>
      </>
    ),
  },
];

export default function TraditionalVsRothIrasFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-for-retirement"
      page="Traditional vs Roth IRAs: Frequently Asked Questions"
      title={
        <>
          Traditional vs Roth IRAs: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about traditional and Roth IRAs: who can contribute and how much, IRAs for a spouse or child, the pros and cons of Roth IRAs, and how heirs are taxed."
      sections={sections}
    />
  );
}
