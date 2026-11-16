import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaSection from '../components/CtaSection.jsx';

const principles = [
  {
    icon: 'award',
    title: 'Professionalism',
    paragraphs: [
      'Our firm is one of the leading firms in the area. By combining our expertise, experience and the energy of our staff, each client receives close personal and professional attention.',
      'We make sure that every client is served by the expertise of our whole firm.',
    ],
  },
  {
    icon: 'clock',
    title: 'Responsiveness',
    paragraphs: [
      'Because we get new business from the people who know us best, client referrals have fueled our growth in the recent years.',
      'Through hard work, we have earned the respect of the business and financial communities. This respect illustrates our diverse talents, dedication and ability to respond quickly.',
    ],
  },
  {
    icon: 'target',
    title: 'Quality',
    paragraphs: [
      "An accounting firm is known for the quality of its service. Our firm's reputation reflects the high standards we demand of ourselves.",
      'Our primary goal as a trusted advisor is to be available and to provide insightful advice to enable our clients to make informed financial decisions. We do not accept anything less from ourselves and this is what we deliver to you.',
      'We believe in continuously educating ourselves to strengthen our technical expertise, expand our financial knowledge, and improve the quality of service we provide to our clients.',
      'We stay informed about the latest tax laws, regulatory changes, and updates to the tax system so that we can offer accurate guidance, effective solutions, and better support to meet our clients\' evolving financial needs.',
      'Our high service quality and "raving fan" clients are the result of our commitment to excellence.',
      <>
        We will answer all of your questions, as they impact both your tax and financial
        situations. We welcome you to <Link to="/contact">contact us</Link> anytime.
      </>,
    ],
  },
];

export default function Values() {
  return (
    <>
      <PageHero
        page="Our Values"
        parents={[{ to: '/about', label: 'About' }]}
        eyebrow="Our values"
        title={<>Three principles. <em>One standard.</em></>}
      >
        Our firm provides outstanding service to our clients because of our dedication to the
        three underlying principles of professionalism, responsiveness and quality.
      </PageHero>

      <section className="section section-white">
        <div className="container">
          <div className="values values-page reveal">
            {principles.map((principle) => (
              <article className="value" key={principle.title}>
                <span className="icon-badge">
                  <Icon name={principle.icon} />
                </span>
                <h2>{principle.title}</h2>
                {principle.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        soft
        title={<>Let's work <em>together</em></>}
        text="We welcome your questions about your taxes."
      />
    </>
  );
}
