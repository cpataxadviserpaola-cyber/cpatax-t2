import LegalPage from '../components/LegalPage.jsx';
import { site } from '../data/site.js';

// Source: cpataxadviser.com/disclaimer.php, word for word.
export default function Disclaimer() {
  return (
    <LegalPage
      page="Disclaimer"
      title={<>Website <em>disclaimer</em></>}
      lead="The terms that apply to the information on this website."
      question="If you have any questions about this disclaimer, please contact us."
    >
      <h2>No rendering of advice</h2>
      <p>
        The information contained within this website is provided for informational purposes
        only and is not intended to substitute for obtaining accounting, tax, or financial advice
        from a professional accountant.
      </p>
      <p>
        Presentation of the information via the Internet is not intended to create, and receipt
        does not constitute, an accountant-client relationship. Internet subscribers, users and
        online readers are advised not to act upon this information without seeking the service
        of a professional accountant.
      </p>
      <p>
        Any U.S. federal tax advice contained in this website is not intended to be used for the
        purpose of avoiding penalties under U.S. federal tax law.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        While we use reasonable efforts to furnish accurate and up-to-date information, we do not
        warrant that any information contained in or made available through this website is
        accurate, complete, reliable, current or error-free.
      </p>
      <p>
        We assume no liability or responsibility for any errors or omissions in the content of
        this website or such other materials or communications.
      </p>

      <h2>Disclaimer of warranties and limitations of liability</h2>
      <p>
        This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
        Use of this website is at your own risk. We and our suppliers disclaim all warranties.
        Neither we nor our suppliers shall be liable for any damages of any kind with the use of
        this website.
      </p>

      <h2>Links to third party websites</h2>
      <p>
        For your convenience, this website may contain hyperlinks to websites and servers
        maintained by third parties. We do not control, evaluate, endorse or guarantee content
        found in those sites. We do not assume any responsibility or liability for the actions,
        products, services and content of these sites or the parties that operate them. Your use
        of such sites is entirely at your own risk.
      </p>
    </LegalPage>
  );
}
