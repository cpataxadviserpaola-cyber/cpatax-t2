import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/business-strategies.php?item=108 (Business Plans: How To Prepare An
// Effective One), word for word. Back-to-top anchors omitted (handled by layout). The library sets
// the sentence "Your answers will help you create a focused, well-researched business plan…" as the
// last item of the pre-business checklist; it follows the list here as the paragraph it is.
// Address: /guides/business-strategies/starting-a-business/business-plans (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'starting-a-new-business',
    title: "If You're Starting a New Business",
    body: (
      <>
        <p>
          If the reason for preparing the business plan is that you are starting a new business, you should first examine
          your reasons for wanting to go into business. Some of the most common reasons for starting a business are:
        </p>
        <ul>
          <li>You want to be your own boss.</li>
          <li>You want financial independence.</li>
          <li>You want creative freedom.</li>
          <li>You want to fully use your skills and knowledge.</li>
        </ul>
        <p>Next, you need to determine is what business is "right for you." Ask yourself these questions:</p>
        <ul>
          <li>What do I like to do with my time?</li>
          <li>What technical skills have I learned or developed?</li>
          <li>What do others say I am good at?</li>
          <li>Will I have the support of my family?</li>
          <li>How much time do I have to run a successful business?</li>
          <li>Do I have any hobbies or interests that are marketable?</li>
        </ul>
        <p>
          Then, you should identify the niche your business will fill. Start by conducting the research necessary to
          answer questions like these:
        </p>
        <ul>
          <li>What business am I interested in starting?</li>
          <li>What services or products will I sell?</li>
          <li>Is my idea practical, and will it fill a need?</li>
          <li>What is my competition?</li>
          <li>What is my business's advantage over exiting firms?</li>
          <li>Can I deliver a better quality service?</li>
          <li>Can I create a demand for my business?</li>
        </ul>
        <p>You will also need to consider several options for getting your business off the ground:</p>
        <ul>
          <li>Do you want to purchase an existing business or start one from scratch?</li>
          <li>Are there franchises available for this type of business? If so, does a franchise make sense for you?</li>
        </ul>
        <p>The final step before developing your plan is the pre-business checklist. You should answer these questions:</p>
        <ul>
          <li>What skills and experience do I bring to the business?</li>
          <li>What will be my legal structure?</li>
          <li>How will my company's business records be maintained?</li>
          <li>What insurance coverage will be needed?</li>
          <li>What equipment or supplies will I need?</li>
          <li>How will I compensate myself?</li>
          <li>What financing will I need?</li>
          <li>Where will my business be located?</li>
          <li>What will I name my business?</li>
        </ul>
        <p>
          Your answers will help you create a focused, well-researched business plan, and that should serve as a
          blueprint. It should detail how the business will be operated, managed, and capitalized.
        </p>
        <p>
          Based on your initial answers to the questions listed above, the next step is to formulate a business plan. A
          business plan sets forth the mission or purpose of the business venture, describes the product or services to be
          provided, presents an analysis of the market state, outlines goals that the business has and how it intends to
          achieve those goals, and last but not least, includes a formal financial plan.
        </p>
        <p>
          In most cases, a business plan is necessary to obtain external capital for your business, but it also serves a
          number of other purposes. It forces you to critically evaluate the feasibility of your business and whether it
          will provide a return which is appropriate to the time and money you will invest in the business. The plan
          provides a benchmark against which you can evaluate the success of your business in later years.
        </p>
      </>
    ),
  },
  {
    id: 'what-to-include',
    title: 'What the Business Plan Should Include',
    body: (
      <>
        <p>
          Whether you are starting a new business, seeking financing for an existing business, attempting to analyze a new
          market, or wanting to define and evaluate future growth, the following outline of a typical business plan can
          serve as a guide. However, you should adapt it to your specific business.
        </p>

        <h3>Introduction and Mission Statement</h3>
        <p>In the introductory section of your business plan, you should:</p>
        <ul>
          <li>Give a detailed description of the business and its goals.</li>
          <li>Discuss the ownership of the business and its goals.</li>
          <li>List the skills and experience you bring to the business.</li>
          <li>Discuss the advantages you and your business have over your competition.</li>
        </ul>

        <h3>Products, Services and Markets</h3>
        <p>In this section, you must describe your products and/or services and:</p>
        <ul>
          <li>Identify the customer demand for your product/service.</li>
          <li>Describe how your product/service is unique.</li>
          <li>Identify your market, as well as its size and locations.</li>
          <li>Explain how your product/service will be advertised and marketed.</li>
          <li>Explain the pricing strategy.</li>
        </ul>

        <h3>Financial Management</h3>
        <p>In this section, you should:</p>
        <ul>
          <li>Explain the source and amount of initial equity capital.</li>
          <li>Develop a monthly operating budget for the first year.</li>
          <li>Develop an expected (return on investment), or ROI, and a monthly cash flow for the first year.</li>
          <li>Provide projected income statements and balance sheets for a two-year period.</li>
          <li>Discuss your break-even point.</li>
          <li>Explain your personal balance sheet and method of compensation.</li>
          <li>Discuss who will maintain your accounting records and how they will be kept.</li>
          <li>Provide "what if" statements that address alternative approaches to any problem that may develop.</li>
        </ul>

        <h3>Operations</h3>
        <p>In this section it is important to:</p>
        <ul>
          <li>Explain how the business will be managed on a day-to-day basis.</li>
          <li>Discuss hiring and personnel procedures.</li>
          <li>Discuss insurance, lease or rent agreements, and issues pertinent to your business.</li>
          <li>Account for the equipment necessary to produce your product or services.</li>
          <li>Account for production and delivery of products and services.</li>
        </ul>

        <h3>Concluding Statement</h3>
        <p>
          In the ending statement, you summarize your business goals, objectives, and express your commitment to the
          success of your business.
        </p>
        <p>
          Once you have completed your business plan, review it with a friend or business associate. When you feel
          comfortable with the content and structure, make an appointment to review and discuss it with your banker. The
          business plan is a flexible document that should change as your business grows.
        </p>
      </>
    ),
  },
];

export default function BusinessPlans() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Business Plans"
      title={
        <>
          Business Plans: <em>How To Prepare An Effective One</em>
        </>
      }
      lead="One of the major steps in starting a new business or getting financing is to prepare a business plan. This Financial Guide provides you with the basic information that you need to include in your business plan."
      sections={sections}
      numbered={false}
    >
      <p>
        A well thought out business plan is a valuable tool for any new company or one that is seeking financing. It also
        provides milestones to gauge your success and the process of developing a business plan helps you think through
        some important issues that you may not have considered yet.
      </p>
      <p>
        Before you begin preparing your business plan, take the time to explore and evaluate your business (and personal)
        goals. You can then use this information to build a comprehensive and effective business plan that will help you
        reach these goals.
      </p>
      <p>
        The purpose of this Financial Guide is to provide a basic introduction to preparing a business plan, rather than
        specific details to be incorporated into the plan since those depend on your specific goals and the nature of the
        specific business. Professional guidance is recommended when it comes to the actual preparation of the plan,
        particularly for the financial components.
      </p>
    </GuideArticle>
  );
}
