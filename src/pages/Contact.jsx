import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { site } from '../data/site.js';

export default function Contact() {
  return (
    <>
      <PageHero page="Contact" eyebrow="Contact us" title={<>Let's Talk About <em>Your Business</em></>}>
        Send us a message or give us a call. We serve clients nationwide, in English and
        Spanish.
      </PageHero>

      <section className="section section-tight">
        <div className="container contact">
          <aside className="contact-options" aria-label="Contact details">
            <div className="option">
              <span className="option-icon">
                <Icon name="phone" />
              </span>
              <div>
                <h2>Call Us</h2>
                <a className="option-main" href={site.phone.href}>
                  {site.phone.display}
                </a>
                <p>Fax {site.fax}</p>
              </div>
            </div>

            <div className="option">
              <span className="option-icon">
                <Icon name="mail" />
              </span>
              <div>
                <h2>Email Us</h2>
                {/* <wbr> lets a narrow phone wrap the address after the @, not mid-word. */}
                <a className="option-main" href={`mailto:${site.email}`}>
                  {site.email.split('@')[0]}@<wbr />
                  {site.email.split('@')[1]}
                </a>
              </div>
            </div>

            <div className="option">
              <span className="option-icon">
                <Icon name="pin" />
              </span>
              <div>
                <h2>Mailing Address</h2>
                <p className="option-main-text">
                  {site.address[0]}
                  <br />
                  {site.address[1]}
                </p>
                <p>Simpsonville, SC, serving clients nationwide in English and Spanish.</p>
              </div>
            </div>
          </aside>

          <div className="form-card reveal">
            <p className="eyebrow">Send a message</p>
            <h2>
              Tell Us About <em>Your Business</em>
            </h2>
            <p>Share a little about your situation and the services you need. We'll get back to you soon.</p>
            <p className="notice">
              While our expertise focuses on small businesses—including sole proprietors, LLCs,
              partnerships, and corporations—and individuals with international tax needs, we are
              also currently welcoming new individual clients with complex tax situations, such as
              equity compensation, multiple income sources, and other specialized tax matters. If
              you're looking for personalized tax guidance, we'd love to hear from you!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
