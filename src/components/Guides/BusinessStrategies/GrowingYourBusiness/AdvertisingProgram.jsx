import GuideArticle from '../../GuideArticle.jsx';

const sections = [
  {
    id: 'advertising-goals',
    title: 'Set advertising goals',
    body: (
      <p>
        Decide what each campaign should achieve before spending. Goals might include increasing awareness, attracting
        competitors’ customers, strengthening loyalty among current customers, or generating leads and immediate
        sales. Prioritize the outcomes so the campaign has a clear purpose.
      </p>
    ),
  },
  {
    id: 'target-audience',
    title: 'Choose a target audience',
    body: (
      <p>
        Define the audience using more than broad demographics. Consider where potential customers live or work, what
        they currently buy, how they make purchasing decisions, and what needs your offer can meet. Advertising aimed
        at everyone is unlikely to serve a specific business goal efficiently.
      </p>
    ),
  },
  {
    id: 'message',
    title: 'Develop the message',
    body: (
      <p>
        Explain benefits that matter to the intended audience. A useful message earns attention, holds interest,
        creates desire, and prompts an appropriate next step. Make the message consistent with what the business can
        actually deliver.
      </p>
    ),
  },
  {
    id: 'media',
    title: 'Choose where to advertise',
    body: (
      <p>
        Select media based on whether the target audience is likely to see or hear the message, the campaign goal, the
        cost to reach that audience, and your budget. The source reviews online marketing, television, radio,
        newspapers, magazines, direct mail, and directories; each trades off factors such as targeting, reach,
        production cost, flexibility, repetition, and audience attention.
      </p>
    ),
  },
];

export default function AdvertisingProgram() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/growing-your-business"
      page="Developing an Advertising Program"
      title="Developing An Advertising Program: A Basic Review"
      lead="Plan advertising around defined goals, a specific audience, a useful message, and media suited to the budget."
      sections={sections}
      numbered={false}
    />
  );
}
