import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'why-referrals',
    title: 'Why referrals matter',
    body: (
      <p>
        Referred prospects may begin with greater confidence because someone they know has introduced your business.
        The guide contrasts this with the expense of repeatedly finding entirely new prospects through promotion and
        recommends building a deliberate, customer-centered referral practice.
      </p>
    ),
  },
  {
    id: 'earn-and-ask',
    title: 'Earn referrals and ask for them',
    body: (
      <p>
        First deliver products and service customers genuinely value. Then make a clear, respectful request for
        introductions, describing the kinds of people or organizations that would benefit. Treat asking as a
        consistent part of the customer relationship rather than a one-time campaign.
      </p>
    ),
  },
  {
    id: 'appreciate-referrals',
    title: 'Show appreciation',
    body: (
      <p>
        Thank customers for referrals and, when appropriate, let them know the outcome. Personal follow-up and
        thoughtful appreciation can reinforce the relationship. Any gifts or incentives should be suitable for your
        industry and comply with applicable professional and legal requirements.
      </p>
    ),
  },
];

export default function Referrals() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Referrals"
      title="Referrals: The Secret to Building a Better Business Faster"
      lead="Build a sustainable referral practice by providing excellent service, asking thoughtfully, and appreciating introductions."
      sections={sections}
      numbered={false}
    />
  );
}
