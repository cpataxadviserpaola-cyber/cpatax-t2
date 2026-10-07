import GuideArticle, { Agencies, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=82 (Funerals: What To Do At This Stressful
// Time), word for word. Hyphens used as dashes are now dashes, related guides are named by
// their titles in the library, the organizations in "Useful Resources" are shown as cards, and
// the FTC Funeral Rule link goes to the page its old address now redirects to.
// Address: /guides/life-events/getting-married/funerals (articlePages in src/data/guides.js).
const related = guide('life-events.php');

const external = { target: '_blank', rel: 'noopener noreferrer' };

const resources = [
  {
    name: 'The International Conference of Funeral Service Examining Boards',
    website: 'www.theconferenceonline.org',
    text: 'The International Conference of Funeral Service Examining Boards is a not-for-profit voluntary association providing examination services, information, and regulatory support to funeral service licensing boards and educators, governmental bodies and other regulatory agencies.',
    lines: ['1885 Shelby Lane', 'Fayetteville, Arkansas 72704', '479-442-7076'],
  },
  {
    name: 'AARP',
    website: 'www.aarp.org',
    text: 'AARP publishes Smart Ways to Cover the Costs of a Funeral, as well as other helpful pamphlets and free guides.',
    lines: ['American Association of Retired Persons (AARP)', 'AARP Fulfillment', '601 E Street, N.W.', 'Washington, D.C. 20049'],
  },
  {
    name: 'Funeral Consumers Alliance',
    website: 'www.funerals.org',
    text: 'Funeral Consumers Alliance has a list of memorial societies and state funeral consumer alliances.',
    lines: ['33 Patchen Road', 'South Burlington, VT 05403', 'Tel. 802-865-8300'],
  },
  {
    name: 'Cremation Association of North America',
    website: 'www.cremationassociation.org',
    text: 'The Cremation Association of North America (CANA) is an association of crematories, cemeteries, and funeral homes that offer cremation. More than 750 members own and operate crematories and encourage advanced planning.',
    lines: ['499 Northgate Parkway', 'Wheeling, Illinois 60090', '312-245-1077'],
  },
  {
    name: 'International Order of the Golden Rule',
    website: 'www.ogr.org',
    text: 'The International Order of the Golden Rule is an international association of independent funeral homes in which membership is by invitation only. Approximately 1,500 funeral homes are members of OGR.',
    lines: ['3520 Executive Center Drive, Suite 300', 'Austin, TX 78731', '800-637-8030'],
  },
  {
    name: 'National Funeral Directors Association',
    website: 'www.nfda.org',
    text: 'The National Funeral Directors Association is the largest educational and professional association of funeral directors. Established in 1882, it has 14,000 members throughout the United States.',
    lines: ["13625 Bishop's Drive", 'Brookfield, WI 53005', '800-228-6332'],
  },
  {
    name: 'National Funeral Directors and Morticians Association',
    website: 'www.nfdma.com',
    text: "The National Funeral Directors and Morticians Association is a national association of funeral firms in which membership is by invitation only and is conditioned upon the commitment of each firm to comply with the association's Code of Good Funeral Practice. Consumers may request a variety of publications through NSM's affiliate, the Consumer Information Bureau, Inc.",
    lines: ['6290 Shannon Parkway', 'Union City, GA 30291', '800-434-0958'],
  },
  {
    name: 'Selected Independent Funeral Homes',
    website: 'www.selectedfuneralhomes.org',
    text: 'If you have a complaint or question about funeral arrangements or funeral home practices:',
    lines: ['500 Lake Cook Road, Suite 205', 'Deerfield, IL 60015', '800-323-4219'],
  },
];

const sections = [
  {
    id: 'arranging',
    title: 'Arranging a Funeral',
    body: (
      <>
        <p>
          When the time comes to make funeral arrangements, first decide how much you want to spend for the
          funeral. Funerals cost an average of $7,600 and often much more, depending on location and style.
          Knowing how much you want to spend will help you to plan the funeral and to keep costs within reason.
        </p>
        <Callout label="Tip">
          <p>
            The Funeral Consumers Alliance provides information about affordable yet meaningful after-death
            arrangements. (click{' '}
            <a href="https://www.funerals.org/find-an-affiliate/" {...external}>
              here
            </a>
            ). These non-profit groups, located in most states, often have access to less expensive funeral
            alternatives and may save you hundreds or even thousands of dollars on funeral arrangements.
          </p>
        </Callout>
        <p>
          If you decide to plan funeral arrangements, either for yourself or a loved one, you'll have choices
          of several types of dispositions and ceremonies. Unless a deceased person has indicated their desires,
          you must choose how the remains will be disposed of for burial, entombment, or cremation. You may wish
          to consult with your religious leader. The type of disposition you choose will affect the cost.
        </p>
        <Callout label="Tip">
          <p>
            To help ensure that your wishes are fulfilled, you may want to write down your preferences. It also
            may be helpful to tell relatives and other responsible persons what you have decided.
          </p>
        </Callout>
        <p>When planning funeral arrangements, here are some of the services and options you should consider:</p>
        <Callout label="Tip">
          <p>
            Bring a friend or relative with you, someone who is not emotionally involved, when making funeral
            arrangements, whether or not you are planning them. This can help you keep the proper perspective on
            costs and elaborateness.
          </p>
        </Callout>
        <ul>
          <li>Filing of the death certificate and provision of copies</li>
          <li>Moving the deceased's remains to the funeral home</li>
          <li>Embalming</li>
          <li>Preparing the body</li>
          <li>Whether the service is to be indoors, at the graveside, or both</li>
          <li>Location of the service—at funeral home or at church or temple</li>
          <li>Content of the service, who will conduct it, and other speakers</li>
          <li>Music</li>
          <li>Flowers</li>
          <li>Pallbearers</li>
          <li>The hearse to be used and limousines for family members</li>
          <li>Transportation of the body to the cemetery</li>
          <li>Whether casket will be open or closed</li>
          <li>Viewing the body</li>
          <li>Chairs and tents for guests at the cemetery</li>
          <li>Guest book to be signed</li>
          <li>Headstone</li>
          <li>Obituaries</li>
        </ul>
      </>
    ),
  },
  {
    id: 'funeral-rule',
    title: 'How the Funeral Rule Protects You',
    body: (
      <>
        <p>
          <a href="https://consumer.ftc.gov/articles/ftc-funeral-rule" {...external}>
            The Funeral Rule
          </a>{' '}
          is the FTC's trade regulation rule concerning funeral industry practices and has been in effect since
          April 30, 1984. This rule, a trade regulation rule for the funeral industry, enables you to get cost
          and other information about funeral arrangements over the telephone and in person. It makes it easier
          to select only those goods and services you want or need and to pay for only those you select.
        </p>
        <p>
          The Funeral Rule requires that the funeral provider gives you a Statement of Funerals and Services
          Selected after you select the funeral goods and services you would like. The statement shows the prices
          of the items you are considering for purchase and the total price. It also requires providers to give
          you the cost of individual items over the telephone or, when you inquire in person about funeral
          arrangements, the funeral home will give you a written price list of the goods and services available.
        </p>
        <p>
          When arranging a funeral, you can purchase individual items or a package of goods and services. If you
          want to purchase a casket or vault, the funeral provider will supply lists that describe all the
          available selections and their prices. As described in detail in the following section, the Funeral
          Rule helps you obtain information about the cost and availability of individual funeral goods and
          services.
        </p>

        <h3>Telephone Inquiries</h3>
        <p>
          When you call a funeral provider and ask them about terms, conditions, or prices of funeral goods and
          services, the funeral provider will:
        </p>
        <ul>
          <li>Give you prices and any other information from the price lists to reasonably answer your questions.</li>
          <li>
            Let you know about any other information about prices or offerings that are readily available and
            reasonably answer your questions.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            You can compare prices among funeral providers using the telephone. Getting price information over
            the telephone may help you select a funeral home and your desired arrangements.
          </p>
        </Callout>

        <h3>In-Person Inquiries</h3>
        <p>
          If you inquire in person about funeral arrangements, the funeral provider will give you a general price
          list. This list, which you can keep, contains the cost of each funeral item and service offered. It also
          discloses important legal rights and requirements regarding funeral arrangements. It must include
          information about embalming, caskets for cremation, and required purchases.
        </p>
        <Callout label="Tip">
          <p>Use this information to help select the funeral provider and items you want, need, and can afford.</p>
        </Callout>

        <h3>Embalming Information</h3>
        <p>
          The Funeral Rule requires funeral providers to give you information about embalming that may help you
          decide whether to purchase this service. Under the Rule, a funeral provider:
        </p>
        <ul>
          <li>May not falsely state that embalming is required by law.</li>
          <li>Must disclose in writing that, except in certain special cases, embalming is not required by law.</li>
          <li>May not charge a fee for unauthorized embalming unless it is required by state law.</li>
          <li>
            Will disclose in writing that you usually have the right to choose a disposition, such as direct
            cremation or immediate burial, if you do not want to be embalmed.
          </li>
          <li>
            Will disclose to you in writing that certain funeral arrangements, such as a funeral with viewing, may
            make embalming a practical necessity, and there would be a required purchase.
          </li>
        </ul>

        <h3>Cash Advance Sales</h3>
        <p>
          The Funeral Rule requires providers to disclose to you in writing if they charge a fee for buying cash
          advance items. Cash advance items are goods or services paid for by the funeral provider on your
          behalf. Some examples of cash advance items are flowers, obituary notices, pallbearers, and clergy
          honoraria. Some funeral providers charge you their cost for these items. Others add a service fee to
          their cost.
        </p>
        <p>
          The Funeral Rule requires the funeral provider to inform you when a service fee is added to the price
          of cash advance items or if the provider gets a refund, discount, or rebate from the supplier of any
          cash advance item.
        </p>

        <h3>Direct Cremations</h3>
        <p>
          Some people may want to select direct cremation, which is the cremation of the deceased without a
          viewing or other ceremony at which the body is present. If you choose direct cremation, the funeral
          provider will offer you an inexpensive alternative container or an unfinished wood box. An alternative
          container is a non-metal enclosure used to hold the deceased. These containers may be of pressboard,
          cardboard, or canvas.
        </p>
        <Callout label="Tip">
          <p>
            Because any container you buy will be destroyed during the cremation, you may wish to use an
            alternative container or an unfinished wood box for direct cremation. These could lower your funeral
            costs since they are less expensive than traditional burial caskets.
          </p>
        </Callout>
        <p>Under the Funeral Rule, funeral directors who offer direct cremations:</p>
        <ul>
          <li>May not tell you state or local law requires a casket for direct cremation.</li>
          <li>
            Must disclose in writing your right to buy an unfinished wood box (a type of casket) or an alternative
            container for a direct cremation
          </li>
          <li>Must make an unfinished wood box or alternative container available for direct cremation.</li>
        </ul>

        <h3>Required Purchases</h3>
        <p>
          You do not have to purchase unwanted goods or services or pay any fees as a condition of obtaining
          those products and services you do want, other than one permitted fee for services of the funeral
          director and staff and fees for other goods and services selected by you or required by state law.
          Under the Funeral Rule:
        </p>
        <ul>
          <li>You can choose only the funeral goods and services you want, with some exceptions.</li>
          <li>The funeral provider must disclose this right in writing on the general price list.</li>
          <li>
            The funeral provider must disclose on your itemized statement of goods and services selected the
            specific state law that requires you to purchase any particular item.
          </li>
          <li>The funeral provider may not refuse, or charge a fee, to handle a casket you purchased elsewhere.</li>
        </ul>

        <h3>Preservative and Protective Claims</h3>
        <p>
          Under the Funeral Rule, funeral providers are prohibited from telling you a particular funeral item or
          service can indefinitely preserve the deceased's body in the grave. The information gathered during the
          FTC's investigation indicated these claims are not true. For example, funeral providers may not claim
          embalming, or a particular type of casket will indefinitely preserve the deceased's body.
        </p>
        <p>
          The Rule also prohibits funeral providers from claiming that funeral goods, such as caskets or vaults,
          will keep out water, dirt, or other gravesite substances when not true.
        </p>
      </>
    ),
  },
  {
    id: 'statement',
    title: 'Statement of Funeral Goods and Services Selected',
    body: (
      <>
        <p>The funeral provider will give you an itemized statement of the total cost of the funeral goods and services you select.</p>
        <Callout label="Tip">
          <p>
            This statement also will disclose any legal, cemetery, or crematory requirements that require you to
            purchase any specific funeral goods or services.
          </p>
        </Callout>
        <p>
          The funeral provider must give you this statement after you select the funeral goods and services that
          you would like. The statement combines the prices of the individual items you are considering for
          purchase and the total price in one place. You can decide whether to add or subtract items to get what
          you want. If the cost of cash advance items is not known, the funeral provider must write down a
          good-faith estimate of their cost.
        </p>
        <Callout label="Tip">
          <p>
            The Funeral Rule requires no specific form for this information. Therefore, this information might be
            included in any document they give you at the end of your discussion about funeral arrangements.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'complaint',
    title: 'How to Make a Complaint',
    body: (
      <>
        <p>
          If you have a problem concerning funeral matters, you should, of course, first, attempt to resolve it
          with your funeral director. If dissatisfied, contact your federal, state, or local consumer protection
          agencies or one of the organizations in the "Useful Resources" section below.
        </p>
        <p>
          While the Federal Trade Commission does not resolve individual consumer disputes, information about
          your experience may show a pattern of conduct or practices that the Commission may investigate to
          determine if any action is warranted.
        </p>
      </>
    ),
  },
  {
    id: 'benefits',
    title: 'Benefits for Widows/Widowers',
    body: (
      <>
        <p>
          Many people do not realize that widows and widowers can begin receiving Social Security benefits at age
          60 (or age 50 if disabled) on the deceased spouse's account. If you are receiving widows/widowers
          (including divorced widows/widowers) benefits, you can switch to your retirement benefits (assuming you
          are eligible and your retirement rate is higher than your widow/widower's rate) as early as age 62.
        </p>
        <p>
          In many cases, a widow or widower can begin receiving one benefit at a reduced rate and then switch to
          the other at an unreduced rate at age 65. Since the rules vary depending on the situation, talk to a
          Social Security representative about the options available to you.
        </p>
        <RelatedGuide guide={related([56, 'Social Security Benefits: How To Get The Maximum Amount'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <RelatedGuide guide={related([93, 'Survivor Benefits: A Guide To This Often Overlooked Insurance Add-On'])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'resources',
    title: 'Useful Resources',
    body: (
      <>
        <p>
          Most states have a licensing board that regulates the funeral industry. You may contact the licensing
          board in your state for information or help.
        </p>
        <Agencies agencies={resources} />
      </>
    ),
  },
];

export default function Funerals() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Funerals"
      title={
        <>
          Funerals: <em>What To Do At This Stressful Time</em>
        </>
      }
      lead="Americans arrange more than two million funerals each year, often costing $10,000 or more. What are your options? What is required by law? What information are you entitled to? This Guide provides the answers to these and other questions."
      sections={sections}
    >
      <p>
        Most decisions about purchasing funeral goods and services are made by grieving people under time
        constraints. Thinking ahead may help you make informed and thoughtful decisions about funeral
        arrangements. Moreover, it will relieve some of the stress. If you plan, you can carefully choose the
        specific items you want and need and can compare prices offered by one or more funeral providers.
      </p>
      <p>
        There are federal regulations aimed at protecting purchase vs. funeral arrangements and services. This
        Financial Guide explains how to take advantage of these regulations to arrange for a funeral in the most
        cost-effective way.
      </p>
    </GuideArticle>
  );
}
