import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'customer-retention',
    title: 'Make customers feel valued',
    body: (
      <>
        <p>
          Keeping existing customers is an important part of sustainable growth. The guide argues that people
          respond to personal attention and can leave when they feel a business is indifferent. Friendly service and
          genuine follow-through can strengthen the relationship beyond the transaction itself.
        </p>
        <p>
          The source encourages businesses not to imitate an impersonal corporate image at the expense of human
          connection. It points to recognizable business leaders who personally represented their organizations as
          examples of how customers can connect with people, rather than an institution alone.
        </p>
        <p>
          The article cites an older customer-departure study, attributing most departures in that study to perceived
          indifference. Treat those percentages as historical figures rather than current benchmarks; the practical
          point is to listen for signs that customers do not feel valued.
        </p>
      </>
    ),
  },
  {
    id: 'thank-you-notes',
    title: 'Use personal thank-you notes',
    body: (
      <>
        <p>
          A concise personal note can acknowledge a meeting, a purchase, or a referral. Make the message sincere and
          timely. If a customer has raised a problem, address it promptly and follow up after it is resolved rather
          than relying on a note alone.
        </p>
        <p>
          The source recommends personalizing the note, such as addressing the envelope by hand and using a real
          postage stamp; it considers a handwritten message especially personal. If handwriting is difficult to
          read, the guide suggests signing the letter by hand.
        </p>
      </>
    ),
  },
  {
    id: 'long-term-relationships',
    title: 'Build a long-term relationship',
    body: (
      <p>
        Focus on helping customers make choices that fit their needs. Appreciation should be part of consistent
        service, not a tactic that substitutes for resolving issues or delivering value. A trusted relationship can
        support repeat business and referrals over time.
      </p>
    ),
  },
  {
    id: 'when-to-write',
    title: 'When to send a thank-you note',
    body: (
      <p>
        The source suggests following up after business contacts, including meeting someone at a seminar or
        exchanging business cards, as well as after major purchases and referrals. When a problem occurs, apologize
        personally, work to resolve it promptly, and consider sending another note once it has been resolved.
      </p>
    ),
  },
  {
    id: 'help-the-customer',
    title: 'Act in the customer’s interests',
    body: (
      <p>
        The guide contrasts a one-time sale with becoming a trusted helper who supports customers in making
        transactions that serve their interests. Show sincere interest in the customer as a person, and let
        appreciation reinforce—not replace—useful advice, reliable service, and a resolved concern.
      </p>
    ),
  },
];

export default function CustomerAppreciation() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="The Nicest Way to Build Your Business"
      title="The Nicest Way To Build Your Business"
      lead="Customer loyalty grows when people feel appreciated and receive personal, attentive service."
      sections={sections}
      numbered={false}
    />
  );
}
