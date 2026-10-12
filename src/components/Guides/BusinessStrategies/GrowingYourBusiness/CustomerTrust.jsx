import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'customer-testimonials',
    title: 'Use customer testimonials responsibly',
    body: (
      <>
        <p>
          Prospective customers may find other customers’ experiences more persuasive than a business’s own claims.
          Testimonials can support sales materials, presentations, and advertising when they are genuine, relevant,
          and used with permission. Do not imply typical results or make claims that cannot be substantiated.
        </p>
        <p>
          The source describes using customer letters in sales correspondence and presentations, and including
          suitable testimonials in advertising. A collection of customer comments can help prospects understand
          others’ experiences in the customers’ own words. The guide also notes that businesses restricted from
          using testimonials about results may have other options, such as comments about the service experience;
          confirm the rules that apply before using testimonials.
        </p>
      </>
    ),
  },
  {
    id: 'collect-feedback',
    title: 'How to collect feedback',
    body: (
      <p>
        Start by providing a strong product and service. Ask customers what they value, what distinguishes their
        experience, and whether they are willing to share those comments in writing or an approved recording. You can
        also invite feedback through evaluations after presentations or customer advisory groups. Ask whether
        customers are comfortable writing their comments, approving a draft you prepare from their feedback, or
        recording an audio or video testimonial. Obtain approval for the final version and its intended use.
      </p>
    ),
  },
  {
    id: 'review-and-use',
    title: 'Review and use testimonials',
    body: (
      <p>
        Obtain the customer’s approval for the final statement and the way it will be presented. Keep records of
        permissions, avoid editing feedback in a way that changes its meaning, and consult legal or professional
        guidance when advertising rules limit claims in your industry.
      </p>
    ),
  },
  {
    id: 'customer-advisory-groups',
    title: 'Learn from customer advisory groups',
    body: (
      <p>
        A customer advisory group can be another source of detailed feedback. Invite participants to describe how
        they use your business and what they value about the relationship. Their comments may identify themes worth
        following up on and, with each customer’s explicit approval, may provide testimonials for suitable business
        materials.
      </p>
    ),
  },
];

export default function CustomerTrust() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Customer Trust"
      title="How To Get Your Customers To Trust You"
      lead="Earn credibility by delivering a good customer experience and using authentic, permission-based customer feedback."
      sections={sections}
      numbered={false}
    />
  );
}
