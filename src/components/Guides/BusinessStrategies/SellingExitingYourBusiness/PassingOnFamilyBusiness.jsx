import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'succession-is-broader',
    title: 'Succession involves more than choosing a successor',
    body: (
      <p>
        Identifying, developing, and installing the next chief executive is only one part of a family-business
        transition. The process can involve the current owner, successors, family members, non-family executives,
        and professional advisers. Their roles, expectations, and perspectives all affect continuity.
      </p>
    ),
  },
  {
    id: 'balance-family-business',
    title: 'Balance family and business considerations',
    body: (
      <p>
        A transition brings together strategic, operational, financial, legal, estate, cultural, and personal
        considerations. Business decisions need sound management, while family values and relationships also shape
        how decisions are received. Planning should make room for both rather than treating the handover as a simple
        transfer of a title.
      </p>
    ),
  },
  {
    id: 'plan-across-areas',
    title: 'Plan across the whole enterprise',
    body: (
      <p>
        The source calls attention to planning areas that may be neglected when succession is treated too narrowly:
        business strategy and structure, operations, governance and accountability, family relationships and values,
        estate considerations, and the personal journeys of the people involved. A problem in any of these areas
        can threaten continuity.
      </p>
    ),
  },
  {
    id: 'start-early',
    title: 'Start planning early and involve key people',
    body: (
      <p>
        Begin while there is time to work through complex changes in personal, family, and business finances. Include
        the people who will be affected, clarify how decisions will be made, and seek advice from appropriate legal,
        tax, financial, and business professionals. The source describes a historical 30% second-generation survival
        statistic; treat that figure as historical rather than a current forecast.
      </p>
    ),
  },
];

export default function PassingOnFamilyBusiness() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/selling-exiting-your-business"
      page="Passing On a Family Business"
      title="Successfully Pass On Your Family Business To Next Generation"
      lead="A successful family-business transition involves the family, executives, advisers, business strategy, governance, and finances—not just selecting a successor."
      sections={sections}
      numbered={false}
    />
  );
}
