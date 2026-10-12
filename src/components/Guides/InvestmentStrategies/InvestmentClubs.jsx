import GuideArticle, { Callout } from '../GuideArticle.jsx';

const sections = [
  {
    id: 'how-clubs-work',
    title: 'How investment clubs work',
    body: (
      <>
        <p>
          An investment club is a group whose members pool money to invest together. Many clubs use a partnership
          structure. Members research potential investments and decide what to buy or sell, often by majority vote.
          Meetings can provide a chance to learn about investing, especially when members take an active role in
          discussions and decisions.
        </p>
        <p>
          The club’s structure, how it makes decisions, and how much each member participates can affect which legal
          requirements apply. A club should review its own facts rather than assume that a particular exemption or
          registration rule applies.
        </p>
      </>
    ),
  },
  {
    id: 'securities-offerings',
    title: 'When club interests may be securities',
    body: (
      <>
        <p>
          Federal securities laws may apply to membership interests, as well as to how those interests are offered
          or sold. Under the Securities Act of 1933, an interest may be treated as a security when members invest
          money with an expectation that profits will come primarily from the work of others.
        </p>
        <p>
          The source guide contrasts clubs where every member participates in investment decisions with clubs that
          have passive members. Participation is one fact that may matter, but it does not by itself determine the
          legal outcome. Some offerings may qualify for an exemption, but the conditions and consequences depend on
          the specific circumstances and current law.
        </p>
      </>
    ),
  },
  {
    id: 'investment-company',
    title: 'Consider investment-company rules',
    body: (
      <>
        <p>
          The Investment Company Act of 1940 may also apply. The source guide describes three issues to examine:
          whether the club invests in securities, whether its membership interests are securities, and whether the
          club qualifies for an exclusion from the investment-company definition.
        </p>
        <p>
          The guide gives a private-company exclusion as an example, subject to limits on public offerings and
          membership. Whether a club qualifies is fact-specific; even an announcement seeking members may affect
          whether an offering is considered public. Do not rely on a simple member count or informal interpretation
          to determine registration status.
        </p>
        <Callout label="Tip">
          <p>
            Have a securities attorney assess whether the club’s interests, member recruitment, and structure trigger
            federal registration or reporting obligations.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'investment-advisers',
    title: 'Check investment-adviser requirements',
    body: (
      <>
        <p>
          A person who is paid to advise a club about securities, or who makes investment choices for the group,
          may have investment-adviser obligations. Registration and exemptions depend on the adviser’s activities,
          clients, assets, location, and applicable federal and state rules.
        </p>
        <p>
          The source guide cites an asset threshold as an example, but thresholds and registration rules can change
          and may not apply uniformly. Verify current requirements with a qualified securities professional and
          the relevant regulators rather than relying on figures in older material.
        </p>
      </>
    ),
  },
  {
    id: 'state-law',
    title: 'Check state securities laws',
    body: (
      <>
        <p>
          State securities laws may differ from federal requirements and may apply to a club or its members based
          on where it operates or offers interests. Contact the securities regulator for the relevant state and
          check current guidance from the North American Securities Administrators Association.
        </p>
        <Callout label="Tip">
          <p>
            Before joining or organizing a club, ask a securities attorney or state regulator to review the club’s
            specific arrangement and applicable laws.
          </p>
        </Callout>
      </>
    ),
  },
];

export default function InvestmentClubs() {
  return (
    <GuideArticle
      category="investment-strategies"
      topic="/guides/life-events/getting-married/investment-basics"
      page="Investment Clubs"
      title="Investment Clubs: What You Need To Know"
      lead="Investment clubs pool members’ money and make investment decisions together. Learn how participation, membership interests, advisers, and state and federal rules may affect a club."
      sections={sections}
    />
  );
}
