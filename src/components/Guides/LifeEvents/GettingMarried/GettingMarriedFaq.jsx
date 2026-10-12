import GuideArticle, { RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

const related = guide('life-events.php');
const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'legal-rights',
    title: 'How can marriage affect a couple’s legal rights?',
    body: (
      <p>
        Marriage can affect inheritance, decision-making, and ownership rights, but the details depend
        on the law where you live and how your documents and assets are set up. Unmarried partners
        should not assume they can inherit automatically or make medical or financial decisions for
        each other. Consider getting legal advice about a will, powers of attorney, health-care
        directives, and beneficiary designations.
      </p>
    ),
  },
  {
    id: 'planning',
    title: 'What planning steps should unmarried partners consider?',
    body: (
      <>
        <p>
          Partners who want to provide for one another can document their wishes while both are able
          to make decisions. Depending on their circumstances, useful steps may include:
        </p>
        <ul>
          <li>Preparing or updating wills and reviewing account beneficiaries.</li>
          <li>Setting up durable financial powers of attorney.</li>
          <li>Recording health-care wishes and naming a health-care decision-maker.</li>
          <li>Reviewing how jointly owned property is titled and what happens at an owner’s death.</li>
        </ul>
        <p>
          State laws and individual circumstances vary, so consult an estate-planning professional
          before relying on a particular arrangement.
        </p>
      </>
    ),
  },
  {
    id: 'life-insurance',
    title: 'Do married couples need life insurance?',
    body: (
      <>
        <p>
          Life insurance may help replace income or cover expenses after a death. The need and
          amount depend on who relies on each person financially, available savings, debts, and
          future costs such as child care or education. Estimate the gap the policy would need to
          cover, and review coverage when family or financial circumstances change.
        </p>
        <RelatedGuide guide={related([47, 'Life Insurance: How Much and What Kind To Buy'])}>
          For a more detailed discussion, see:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'name-change',
    title: 'Who should be notified after a name change?',
    body: (
      <>
        <p>
          Update records where your former name is used, starting with government identification and
          payroll records. You may also need to notify:
        </p>
        <ul>
          <li>Financial institutions, lenders, and credit-card providers.</li>
          <li>Employers, insurers, and retirement-plan administrators.</li>
          <li>Schools, professional organizations, and subscription services.</li>
          <li>Voter registration and other government agencies relevant to you.</li>
        </ul>
        <p>
          The Social Security Administration explains how to{' '}
          <a href="https://www.ssa.gov/personal-record/change-name" {...external}>
            update your name on its records
          </a>
          . Check each organization’s requirements before sending documents.
        </p>
      </>
    ),
  },
  {
    id: 'will',
    title: 'Should you update your will after getting married?',
    body: (
      <p>
        Review your will and broader estate plan after marriage. A life change may affect who you
        want to inherit, who should manage your estate, and whether your existing documents still
        match your wishes. Ask an estate-planning attorney how marriage affects your documents
        under applicable state law.
      </p>
    ),
  },
  {
    id: 'taxes',
    title: 'What tax questions should couples consider?',
    body: (
      <>
        <p>
          Marriage can change federal filing options and may affect a household’s total tax, credits,
          deductions, and withholding. Compare the available filing statuses using current-year
          information rather than assuming that filing jointly or separately is always better.
        </p>
        <p>
          The IRS provides guidance on{' '}
          <a href="https://www.irs.gov/individuals/filing-taxes-after-marriage" {...external}>
            filing taxes after marriage
          </a>
          . A tax professional can help compare outcomes for your specific circumstances.
        </p>
      </>
    ),
  },
  {
    id: 'property',
    title: 'How can married couples own property?',
    body: (
      <p>
        Property may be held by one person or jointly, and joint ownership can include different
        rights about survivorship and each owner’s share. The names on a deed or account, state law,
        and any estate documents can affect what happens if an owner dies. Before retitling property,
        get advice about the legal, tax, and financial consequences in your state.
      </p>
    ),
  },
];

export default function GettingMarriedFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Getting Married: Frequently Asked Questions"
      title={<>Getting Married: <em>Frequently Asked Questions</em></>}
      lead="Marriage can affect more than a couple’s daily life. These answers offer a starting point for reviewing legal documents, insurance, taxes, and financial records."
      sections={sections}
    />
  );
}
