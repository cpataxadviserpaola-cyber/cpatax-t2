import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'business-or-job',
    title: 'Do you have a business or a job?',
    body: (
      <>
        <p>
          The guide describes a common path into small-business ownership: a skilled technician believes they can do
          better working independently, opens a business, and then discovers they still perform nearly all of its
          work. Instead of gaining freedom, they may have created a demanding job that depends on them.
        </p>
        <p>
          The owner’s broader task is to shape an organization that can serve customers without requiring the owner
          to personally perform every role. That shift can make it possible for the owner to choose how involved to
          remain, and can make the business more transferable or repeatable.
        </p>
      </>
    ),
  },
  {
    id: 'design-the-business',
    title: 'Design the business you want to build',
    body: (
      <>
        <p>
          Start by picturing how the business should operate and identifying the work that must be done. An
          organizational chart can make these functions visible, including leadership, marketing, accounting,
          finance, and production or service delivery. In an early-stage business, the owner may occupy every role;
          the chart still helps clarify what the business will eventually need.
        </p>
        <p>
          A repeatable operating model can be learned from businesses that provide a consistent experience across
          locations. The useful lesson is to define and test how work is done, not to copy another company’s
          procedures without considering your own customers and circumstances.
        </p>
      </>
    ),
  },
  {
    id: 'build-and-delegate',
    title: 'Test, document, and delegate the work',
    body: (
      <p>
        Develop procedures for each role by trying them in practice, measuring whether they work, and documenting
        the reliable steps. Then train others to take responsibility for those functions. Continue refining the
        process as the team learns, rather than assuming an untested procedure will produce good results.
      </p>
    ),
  },
  {
    id: 'values-and-judgment',
    title: 'Let values and judgment guide the systems',
    body: (
      <>
        <p>
          Written processes can help people work consistently, but they should not become more important than the
          people they are meant to serve. Define what matters in the business and give employees room to think and
          respond to customers.
        </p>
        <p>
          The source cautions that a rigid system can struggle when situations change. Review procedures when they
          stop serving customers well, and use common sense rather than following a script at the expense of people.
        </p>
      </>
    ),
  },
];

export default function GrowWithLessStress() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Grow Your Business With Less Stress"
      title="How to Profitably Grow Your Business With Less Stress"
      lead="A business owner’s role is not just to do the technical work, but to build an organization that can operate well without depending on the owner for every task."
      sections={sections}
      numbered={false}
    />
  );
}
