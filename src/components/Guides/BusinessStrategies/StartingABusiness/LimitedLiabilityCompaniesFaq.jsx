import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'who-should-form',
    title: 'Who should form an LLC?',
    body: (
      <p>
        An LLC may be worth considering when owners want liability protection for many business debts and claims.
        Whether it is available depends on the type of business and state law; the source FAQ notes that some regulated
        industries, such as banking, trust, and insurance, may be barred from using LLCs. Confirm current rules for
        the industry and state before choosing a structure.
      </p>
    ),
  },
  {
    id: 'llc-or-s-corporation',
    title: 'Should I choose an LLC or an S corporation?',
    body: (
      <p>
        An S corporation may provide pass-through federal tax treatment, while an LLC can offer more flexibility in
        membership classes and ownership. S corporations have eligibility restrictions on shareholders and ownership;
        LLCs generally allow a wider range of members and can have subsidiaries. The best fit depends on ownership,
        management, tax, and legal needs, so compare the current rules with professional advice.
      </p>
    ),
  },
  {
    id: 'operating-agreement',
    title: 'What is an LLC operating agreement?',
    body: (
      <p>
        An operating agreement documents how the LLC and its members will work together. It can set out ownership
        percentages, the allocation of profits and losses, members’ rights and responsibilities, decision-making, and
        what happens when a member leaves.
      </p>
    ),
  },
  {
    id: 'need-agreement',
    title: 'Do I need an operating agreement?',
    body: (
      <p>
        Even where state law does not require a written agreement, one can help establish clear rules for finances,
        management decisions, and admitting or departing members. It can reduce misunderstandings and avoid relying
        entirely on default state LLC rules. Maintain the LLC’s separate records and follow applicable legal
        requirements; an agreement alone does not guarantee liability protection.
      </p>
    ),
  },
  {
    id: 'meetings',
    title: 'Must I hold LLC meetings?',
    body: (
      <p>
        Meeting requirements depend on state law and the LLC’s governing documents. The source FAQ notes that many
        states do not impose the same formal member or manager meeting requirements on LLCs that corporations face,
        while an operating agreement or articles may require meetings. Check your state’s law and documents.
      </p>
    ),
  },
  {
    id: 'exceptions-to-liability',
    title: 'What are the exceptions to limited liability?',
    body: (
      <>
        <p>
          LLC protection is not absolute. The source FAQ identifies situations where an owner may face personal
          liability, including personally causing injury, personally guaranteeing a debt, failing to remit employee
          withholding taxes, engaging in harmful unlawful or fraudulent conduct, or treating the LLC as a personal
          extension rather than a separate business.
        </p>
        <p>
          To support the LLC’s separate status, act lawfully and fairly, provide appropriate funding, keep personal
          and business finances and records separate, and document member arrangements in an operating agreement.
          Insurance may help cover some liability, but it does not necessarily cover business debts or every claim.
          Discuss suitable coverage and entity practices with qualified advisers.
        </p>
      </>
    ),
  },
];

export default function LimitedLiabilityCompaniesFaq() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Limited Liability Companies FAQ"
      title={
        <>
          Limited Liability Companies: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to questions about who may use an LLC, how LLCs compare with S corporations, operating agreements, meetings, and limits on liability protection."
      sections={sections}
      numbered={false}
    />
  );
}
