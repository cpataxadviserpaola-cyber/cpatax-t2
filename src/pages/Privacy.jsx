import LegalPage from '../components/LegalPage.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { site } from '../data/site.js';

// Source: cpataxadviser.com/privacy.php, word for word, with headings added. One line is
// replaced: the old site said online information is stored in its web host's datacenters,
// which is not true of this site, so it now refers to the client portal.
export default function Privacy() {
  usePageMeta(
    'Privacy Policy',
    `How ${site.name} collects, protects, and shares nonpublic personal information, as required by the Gramm-Leach-Bliley Act.`,
  );

  return (
    <LegalPage
      page="Privacy Policy"
      title={<>Privacy <em>policy</em></>}
      lead="Here is our Privacy Policy required by the Gramm-Leach-Bliley Act of 1999."
      question="If you have any questions about this policy, please do not hesitate to contact us."
    >
      <h2>Information we collect</h2>
      <p>We collect nonpublic personal information about you from the following sources:</p>
      <ul>
        <li>Information we receive from you on applications, tax organizers, worksheets and other documents;</li>
        <li>Information about your transactions with us, our affiliates, or others;</li>
        <li>Information we receive from a consumer-reporting agency.</li>
      </ul>

      <h2>What we share</h2>
      <p>
        <strong>
          We do not disclose any nonpublic personal information about our clients or former
          clients to anyone, except as permitted by law.
        </strong>
      </p>

      <h2>How we protect it</h2>
      <p>
        We restrict access to nonpublic personal information about you to those members of our
        firm who need to know that information to provide services to you. We maintain physical,
        electronic, and procedural safeguards that comply with federal regulations to guard your
        nonpublic personal information.
      </p>
      <p>Documents you share with us online go through our secure client portal.</p>
    </LegalPage>
  );
}
