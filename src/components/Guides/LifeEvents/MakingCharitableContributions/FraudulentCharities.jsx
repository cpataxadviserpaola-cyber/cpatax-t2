import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=79 (Fraudulent Charities: How To Protect
// Yourself), word for word. Back-to-top anchors omitted (handled by layout). The "Planning Aid",
// "Note" and "Tip" boxes keep the library's labels, related guides are named by their titles in the
// library, and the Better Business Bureau link uses https.
// Address: /guides/life-events/making-charitable-contributions/fraudulent-charities (articlePages
// in src/data/guides.js).

const related = guide('life-events.php');
const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'state-regulation',
    title: 'How the States Regulate Charities',
    body: (
      <>
        <p>
          Most state governments regulate charitable organizations. To obtain information on these regulations, which
          vary from state to state, contact the appropriate government agency (usually a division of the Attorney General
          or the Secretary of State). State government agencies do not approve charities. However, they do require
          charities to follow certain regulations.
        </p>
        <p>
          Most states have registration and licensing rules requiring charities to file certain basic information, such
          as the official name, principal address, and purpose of the organization. This requirement generally applies to
          most charities, whether national or local, that solicit in the state.
        </p>
        <p>
          Annual reporting is also a common state requirement and generally involves the filing of the charity's
          financial statements. In many cases, a copy of the charity's federal tax return (IRS Form 990) is accepted by
          the state as fulfilling its annual reporting requirements.
        </p>
        <Callout label="Planning Aid">
          <p>
            For more information on general businesses and their practices, see{' '}
            <a href="https://www.bbb.org/" {...external}>
              Better Business Bureau
            </a>
            .
          </p>
        </Callout>
        <Callout label="Note">
          <p>
            Churches and other religious organizations, as well as small charities that receive contributions below
            certain levels, are frequently exempt from state registration and annual reporting requirements.
          </p>
        </Callout>
        <p>
          Some states have specific regulations for professional fund-raisers used by charities. They may require the
          fund-raiser to register with the state and put up a bond ranging from $2,500 to $50,000 to reimburse the state
          for any fines and/or penalties imposed on the fundraiser.
        </p>
        <Callout label="Tip">
          <p>
            Contact the appropriate state government agency to verify a charity's registration and to obtain financial
            information on a soliciting charity.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'irs-regulation',
    title: 'How the IRS Regulates Charities',
    body: (
      <>
        <p>
          To obtain tax-exempt status under Section 501(c)(3) of the Internal Revenue Code, an organization has to file
          certain documents with the IRS that prove it is organized and operated for specified charitable purposes. The
          IRS looks at these documents in terms of whether they meet the Code's requirements; it does not judge
          charities' worthiness.
        </p>
        <p>
          Organizations with 501(c)(3) status are those that the IRS considers charitable, educational, religious,
          scientific or literary, those that prevent cruelty to animals, and those that foster national or international
          sports competition. When the IRS rules positively on an application, the organization is eligible to receive
          contributions deductible as charitable donations for federal income tax purposes. The charity receives a
          Determination Letter formally notifying it of its charitable status. Older charities may have a 101(6) ruling,
          which corresponds to Section 501(c)(3) of the current IRC. Churches and small charities with less than $5,000 of
          annual income do not have to apply to the IRS for exemption.
        </p>
        <RelatedGuide guide={related([78, 'Advanced Charity Techniques: Maximizing Your Deduction'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <Callout label="Tip">
          <p>
            Use the Tax Exempt Organization Search Tool on the IRS.gov website to find information about a tax-exempt
            organization’s federal tax status and filings.
          </p>
        </Callout>
        <p>
          You can obtain three documents on a specific charity by sending a written request to the attention of the
          Disclosure Officer at your nearest IRS District Office. The IRS will charge a per-page copying fee for these
          items. To speed your request, have the full, official name of the charity, as well as the city and state
          location. These three publicly available documents are:
        </p>
        <ul>
          <li>
            <em>Form 1023</em>: the application filed by the charity to obtain tax-exempt status.
          </li>
          <li>
            <em>IRS Letter of Determination</em>: the two-page IRS letter that notifies the organization of its
            tax-exempt status.
          </li>
          <li>
            <em>Form 990</em>: the financial/income tax form filed with the IRS annually by the charity. (Charities with a
            gross income of less than $25,000 and churches are not required to file this form). Among other things, Form
            990 includes information on the charity's income, expenses, assets, liabilities and net assets in the past
            fiscal year. Form 990 also identifies the salaries of the charity's five highest-paid employees. When
            contacting the IRS for copies, specify the fiscal year.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            If your request for information involves only Forms 990, you can get a faster response by writing directly to
            the IRS Service Center where the charity files its return. Contact your nearest IRS office for the address of
            the appropriate Service Center.
          </p>
        </Callout>
        <p>
          The charity registration office in your state (usually a division of the state attorney general's office) may
          also have a copy of the charity's latest Form 990, along with other publicly available information on charities
          soliciting in your state.
        </p>
        <p>
          A charity's application for tax-exempt status and its annual Form 990 must be made available for public
          inspection during regular business hours at the principal office of the charity and at each of its regional or
          district offices containing three or more employees. Although the charity is not required to provide photocopies
          of the return, it must have a copy on hand for public inspection.
        </p>
      </>
    ),
  },
  {
    id: 'filing-a-complaint',
    title: 'How to File a Complaint',
    body: (
      <>
        <p>
          Complaints about charities are uncommon. However, if sweepstakes prizes, membership benefits, the charity's
          magazine, or ordered merchandise is not received, donors may need to file complaints. Donors may also be
          concerned about duplicate mailings from the same charity or may wish to remove their names from the charity's
          mailing list.
        </p>
        <p>
          <strong>Here is how to file a complaint:</strong>
        </p>
        <ol>
          <li>
            Put your complaint in writing. Clearly explain the problem and what specific action you want taken by the
            charity to resolve it.
          </li>
          <li>
            Include copies of all applicable documents with your complaint (for example, copies of canceled checks for
            merchandise ordered, copies of mailing labels in case of duplicate mailings, or copies of problem appeals).
          </li>
          <li>
            File your complaint with the{' '}
            <a href="https://give.org/charity-inquiry" {...external}>
              Better Business Bureau online
            </a>{' '}
            or by mail: BBB Wise Giving Alliance, 3101 Wilson Blvd, Suite 523, Arlington, VA 22201. Complaints can also be
            filed with government agencies, such as your state attorney general's office. Many states have consumer
            protection agencies and special offices to regulate charities.
          </li>
          <li>
            If your complaint involves activities, not in accordance with the organization's tax-exempt purposes (for
            example, misappropriation of funds) contact the IRS, as well as your state attorney general's office. In
            addition, the U.S. Postal Inspection Service investigates charges of false representation and violations of
            the mail fraud statutes.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Non-Profit Agencies',
    body: (
      <ul>
        <li>
          Most state governments regulate charitable organizations. To obtain information on these regulations, which
          vary from state to state, contact the appropriate government agency (usually a division of the Attorney General
          or the Secretary of State).
        </li>
        <li>
          Contact the appropriate state government agency to verify a charity's registration and to obtain financial
          information on a soliciting charity.
        </li>
        <li>Contact your local Better Business Bureau to find out whether a complaint has been lodged against a charity.</li>
      </ul>
    ),
  },
];

export default function FraudulentCharities() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/making-charitable-contributions"
      page="Fraudulent Charities"
      title={
        <>
          Fraudulent Charities: <em>How To Protect Yourself</em>
        </>
      }
      lead="By knowing the many ways that charities are regulated, both by the states and the IRS, you can better protect yourself against fraudulent charities and know that your charitable contribution will be properly used for the intended purpose. And if you do fall prey, you should know how to complain most effectively."
      sections={sections}
      numbered={false}
    >
      <p>
        Giving to a charity is a worthy objective. However, for you and society to get the maximum benefit from your
        contribution, you need to give wisely and make sure that your contribution serves the intended purpose.
      </p>
      <RelatedGuide guide={related([75, 'Charitable Contributions: How To Give Wisely'])}>
        Please see the Financial Guide:
      </RelatedGuide>
      <p>
        If you aren't completely knowledgeable about your intended charities, you should review their operations and
        practices before giving. Even if the charity is a household name, its practices may be wasteful. For example, a
        major part of its receipts from contributors may be used not for charitable purposes but to pay an outside
        fundraiser.
      </p>
      <p>
        Unfortunately, many charities go beyond wasteful practices and are outright frauds. This Financial Guide will
        discuss how the various states and the IRS regulate charities to minimize the abuses in this area and explains how
        to files a complaint against a phony charity.
      </p>
    </GuideArticle>
  );
}
