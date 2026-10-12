import { Fragment } from 'react';
import GuideArticle, { ArticleTable, Blank, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { calculator, guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=63 (Buying a Home: What To Do and How To Do It),
// word for word from the live page.
// Address: /guides/life-events/buying-and-selling-a-home/buying-a-home (articlePages in
// src/data/guides.js).

const related = guide('life-events.php', 17);
const external = { target: '_blank', rel: 'noopener noreferrer' };

const checklist = [
  {
    heading: 'General',
    items: [
      'Address',
      'Date of visit',
      'Asking price',
      'Square footage',
      'Price per square foot',
      'Financing available (FHA, VA, other)',
    ],
  },
  {
    heading: 'Interior',
    items: [
      'Number of bedrooms',
      'Number of baths',
      'Location of sunrise',
      'Size of master BR',
      'Size of 2nd BR',
      'Size of 3rd BR',
      'Size of 4th BR',
      'Size of 5th BR',
      'Size of master closet',
      'Size of 2nd closet, location',
      'Size of 3rd closet, location',
      'Size of master bath',
      'Size of 2nd bath, location',
      'Size of 3rd bath, location',
      'Size of kitchen, location',
      'Size of DR, location',
      'Size of living room, attributes',
      'Other rooms, size, and attributes',
      'Appliances (number, condition)',
      'Attic, attic vents',
      'Basement',
      'Ceiling fans',
      'Ventilation',
      'Garage, adequacy',
      'Garage, door opening convenience',
      'Fireplace(s)',
      'Cost of utility bills (ask homeowner)',
      'Floors (material, condition)',
      'Heating/AC',
      'Insulation',
      'Humidity, mildew',
      'Lead-based paints',
      'Plumbing',
      'Radon',
      'Security',
      'Stairs',
      'Wallpaper/wallcoverings',
      'Windows',
      'Wiring',
    ],
  },
  {
    heading: 'Exterior',
    items: [
      'Year of construction',
      'Comments about exterior, siding',
      'Deck/porch',
      'Doors (ext.)',
      'Windows',
      'Foundation',
      'Grading, drainage',
      'Lot size',
      'Landscaping, yard',
      'Roof',
      'Driveway',
      'Septic system',
      'Swimming pool',
      'Trees',
    ],
  },
  {
    heading: 'Neighborhood',
    items: [
      'Overall comment',
      'Accessibility during bad weather',
      'Nearby properties (use of property and comments on neighbors)',
      'Driving time to work',
      'Driving time to bus/train',
      'Driving time to airport',
      'Driving time to school',
      'Driving time to place of worship',
      'Driving time to highways',
      'Driving time to day care',
      'Noise levels',
      'Proximity of police, firefighters',
      'Privacy',
      'School district',
      'Restrictions (e.g., on landscaping)',
      'Security',
      'Flood, earthquake, other disasters likely',
      'Garbage removal',
    ],
  },
];

const sections = [
  {
    id: 'deciding-how-much-to-spend',
    title: 'Deciding How Much To Spend',
    body: (
      <>
        <p>
          Before deciding on the price range of the home you plan to buy, think about how much you want to pay out each
          month in mortgage payments. Use a mortgage calculator (online) to figure out what your payments would be, and try
          to make as large a down payment as possible to reduce your principal loan amount.
        </p>

        <h3>The Mortgage Payment</h3>
        <p>
          A mortgage payment consists of the mortgage loan payment (principal and interest), property taxes (in most
          cases), and homeowner's insurance. It might also include private mortgage insurance if your down payment is less
          than 20 percent.
        </p>
        <Callout label="Tip">
          <p>
            To get an estimate of the maximum mortgage amount, ask a real estate agent to help you get "pre-qualified" by a
            lender.
          </p>
        </Callout>
        <p>
          When deciding how much to borrow, be sure to take into account saving for your retirement, your financial goals,
          and your current lifestyle. Buying that particular home may not make financial sense if your monthly payments do
          not allow you to meet these needs.
        </p>
        <Callout label="Caution">
          <p>
            The lender will set a maximum on how much you can borrow, but you use the maximum only as a starting point in
            deciding how much you will borrow. To avoid having your dream home turn into a nightmare, calculate how much you
            realistically can spend on the monthly mortgage payment. Do not forget to add in the real estate taxes and
            mortgage insurance.
          </p>
        </Callout>
        <p>
          Lenders will be happy to pre-qualify you by giving you a preliminary limit on the amount they would be willing to
          lend you. This pre-qualification is not a commitment on the lender's part; lenders will not commit to a mortgage
          until they have the property appraisal and all of your supporting documentation, but the maximum loan amount they
          are willing to offer can be helpful for planning purposes.
        </p>
        <p>
          The maximum debt is based on your income and debt level. It depends on current interest rates, the term of the
          mortgage, and the property taxes. Generally, the rule of thumb is that the maximum debt amount is usually about
          three times your annual gross income.
        </p>

        <h3>The Purchase Price</h3>
        <p>
          Having decided how much of a monthly mortgage payment you can realistically afford, you are now ready to set a
          price range for your new home. Give this range to potential real estate agents during your first visit, or use it
          to rule out homes that are out of your price range.
        </p>
        <Callout label="Planning Aid">
          <p>
            See the Financial Calculator:{' '}
            <a href={calculator(['hom01', 'How much house can I qualify for?']).href} {...external}>
              How much house can I qualify for?
            </a>
          </p>
        </Callout>

        <h3>The Down Payment</h3>
        <p>
          Try to make as large a down payment as possible. There are two reasons for this: (1) lenders will generally not
          require you to pay for private mortgage insurance if you can come up with a 20 percent down payment, and (2) the
          sooner you pay off your mortgage, the better off you will be financially.
        </p>
        <p>
          To save the 20 percent down payment, you may need to go on an "austerity plan" for a year or two. Many home
          buyers also use cash gifts or loans from family members to meet the 20 percent figure. If you cannot save 20
          percent of the purchase price, you will still be able to get financing.
        </p>
      </>
    ),
  },
  {
    id: 'working-with-your-real-estate-agent',
    title: 'Working With Your Real Estate Agent',
    body: (
      <>
        <p>
          You can save time and trouble by knowing what to look for in a real estate agent. If your real estate agent is not
          doing their best to find you the home you want or is otherwise not meeting your expectations, don't hesitate to
          make a change. Avoid staying in the relationship because you have invested time in it. Rather, get out as soon as
          you can. The real estate agent will cost you money, so make sure you are getting your money's worth.
        </p>
        <p>
          You can shop for and buy a home without an agent, but you will need to put in much extra time to do an agent's
          work: search for properties, schedule appointments to see them, coordinate inspections, and negotiate. Home
          buyers who already have a property they want to buy are the best candidates to do the deal without an agent. Be
          aware that typically, on a home sale, the listing and selling agents split the commission with each other and
          their principal brokers.
        </p>

        <h3>Agents' Titles and What They Mean</h3>
        <p>
          You may find the following commonly used titles when looking for a real estate agent. Here is a basic definition
          of each:
        </p>
        <dl className="article-glossary">
          <div>
            <dt>Principal broker</dt>
            <dd>
              This is a person who is licensed to operate a real estate office. They may either work alone or employ other
              agents. Several years of experience are required to obtain this licensure. Anyone selling real estate must
              work under the supervision of a principal broker.
            </dd>
          </div>
          <div>
            <dt>Realtor</dt>
            <dd>
              A realtor is a member of the National Association of Realtors, along with a state realtors' association and a
              local board of realtors. Realtors are bound by a code of ethics and have access to a local computerized
              database of homes for sale (multiple listing service).
            </dd>
          </div>
          <div>
            <dt>Agent</dt>
            <dd>This is the general term for any licensed professional in the real estate sales business.</dd>
          </div>
          <div>
            <dt>Listing agent</dt>
            <dd>
              A type of agent who signs up the home seller and lists the home with the multiple listing service.
            </dd>
          </div>
          <div>
            <dt>Selling agent</dt>
            <dd>
              An agent who finds a home for sale (through the multiple listing service) and finds a buyer for it.
            </dd>
          </div>
        </dl>
      </>
    ),
  },
  {
    id: 'positive-traits',
    title: 'Positive Traits to Look For in a Real Estate Agent',
    body: (
      <>
        <p>
          To find such a competent and experienced real estate agent, ask for references from recent clients in
          neighborhoods where you are house-hunting. That will help you determine whether the agent has the traits you
          want. Interview several candidates at different agencies and ask the following:
        </p>
        <p>
          <strong>Is the Agent Full-Time?</strong>
          <br />
          Make sure the agent works in the field full-time. Otherwise, they may not be up-to-date on the fast-changing
          information and skills required for the job.
        </p>
        <p>
          <strong>Is the Agent Experienced?</strong>
          <br />
          Be sure the agent has been doing the type of work you will need them to do for at least a few years. For example,
          if you are looking for a modest single-family home in the suburbs, make sure the agent has not spent the last
          five years handling mostly rentals or mansions.
        </p>
        <p>
          <strong>Does the Agent Listen and Communicate Clearly?</strong>
          <br />
          The agent must be able to understand your priorities in purchasing a home and tell you what you need to know about
          a home. For instance, if you tell the agent repeatedly that you must have wood floors and a tree-lined
          neighborhood, and they persist in showing you linoleum floors on crowded streets, then get a new agent.
        </p>
        <p>
          <strong>Is the Agent Willing to Negotiate For You?</strong>
          <br />
          To get the best home for your dollar, you will have to negotiate with the seller on the price. The agent plays a
          crucial role in the negotiation process between the buyer and seller. If they are not willing to show you houses
          that are 20 percent over your price range or to vigorously negotiate with the seller, find a new agent.
        </p>
        <p>
          <strong>Is the Agent Careful In Their Work?</strong>
          <br />
          You need an agent who will cover all the details that go into buying a home. Someone who takes shortcuts to
          generate as many home sales as possible will not do you any good.
        </p>

        <h3>What Traits to Watch Out For</h3>
        <p>
          Here are some traits a good buyer's real estate agent should not have. Most of them concern potential conflicts
          of interest that could arise with any commissioned salespeople. A commission salesperson's goal is to see as
          many deals close as possible while putting in the minimum of hours. However, many agents still provide good
          service.
        </p>
        <ul>
          <li>The agent who tries to push you into deciding before you are comfortable doing so is to be avoided.</li>
          <li>Avoid agents who urge you to exceed your price range.</li>
          <li>
            Avoid agents who push you to buy their agency's listings over other properties or who push you to use the
            attorneys or inspectors they recommend.
          </li>
          <li>
            Dishonest agents have been known to help the seller hide a defect or to look the other way. The only way to
            protect yourself from such deceit is to use an objective inspector.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'finding-the-right-home',
    title: 'Finding The Right Home',
    body: (
      <>
        <p>
          When searching for a home, you must remember to remain focused on what you want (and don't want) in a home. You
          may want to keep a list of items important to you, such as the neighborhood's location, building materials used in
          a home, and proximity to schools.
        </p>
        <p>
          Do not take anyone's word for it. Investigate for yourself. Visit schools, walk around the neighborhood, look
          under carpets to see what the floors are made of, and stay in the basement for a while to see how damp it is. You
          may also want to drive through the neighborhood after dark to see if it is a safe place to live.
        </p>
        <Callout label="Tip">
          <p>
            To have a benchmark for comparing home prices, find out what the price per square foot is for the homes you are
            looking at. To find the price per square foot, divide the asking price by its square footage. Sources of a home's
            square footage include the local tax assessment agency, the real estate agent, and the home builder. You should
            verify any statement that might be self-serving.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'negotiating-the-selling-price',
    title: 'Negotiating The Selling Price',
    body: (
      <>
        <p>
          Buying a home requires negotiating skills because successful negotiation can often save you tens of thousands
          of dollars. Here are some tips to keep in mind when negotiating for your hoped-for home:
        </p>
        <ul>
          <li>
            Be willing to walk away from a deal. If you decide you must have a certain house, you have already lost
            negotiating power. There are other good properties out there.
          </li>
          <li>
            Learn everything you can about the property before making your offer. For instance, how long has it been on the
            market? Has the buyer dropped the asking price? Why is the owner selling? The answers to these questions will
            help you to negotiate.
          </li>
          <li>Know what comparable homes are selling for.</li>
          <li>
            If the seller refuses to budge on the price, try negotiating for something else. For instance, try to get the
            seller to pay for repairs or improvements you would have done yourself.
          </li>
          <li>Don't forget the real estate agent's commission. It may also be negotiable.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'arranging-for-the-mortgage',
    title: 'Arranging For The Mortgage',
    body: (
      <>
        <p>
          When you and the seller finally agree upon a price and sign a contract, the next step (unless you're paying cash or
          have arranged another type of loan) is to get a mortgage. Most home sales are contingent upon the buyer obtaining
          a mortgage.
        </p>
        <p>
          Getting the right mortgage is also important in that it too can result in savings of tens of thousands of dollars
          over the term of the mortgage. Because the discussion of mortgages is quite extensive, it is beyond the scope of
          this Financial Guide. Rather, it is covered in detail in other related Financial Guides such as:
        </p>
        <RelatedGuide guide={related([65, 'Mortgage Alternatives: How To Choose The Right One'])}>
          Please see the Financial Guide:
        </RelatedGuide>

        <h3>What is a Mortgage Service Provider?</h3>
        <p>
          A mortgage servicer collects your monthly payments and handles your escrow account. It also is required to give
          you an annual statement that details the activity of your escrow account. This statement shows your account balance
          and reflects property taxes and homeowners insurance payments.
        </p>
        <p>
          When you apply for a home mortgage, you may think that the lender, or loan originator, will service the loan until
          it is paid off or your house is sold. This assumption is not always true. In today's market, mortgage servicing
          rights often are bought and sold.
        </p>
        <p>
          If you are notified that your home mortgage servicing has been sold to another company, you may wonder how it
          will affect your loan terms and monthly payments. Some consumers have complained that they were not given enough
          notice of loan servicing transfers and were unfairly charged late fees and penalties. The National Affordable
          Housing Act was passed to address some of these concerns.
        </p>
        <p>
          To protect borrowers, the National Affordable Housing Act requires lenders or mortgage servicers (the company
          that borrowers pay their mortgage loan payments to) to do the following:
        </p>
        <ul>
          <li>
            They must provide a disclosure statement that says whether the lender intends to sell the mortgage servicing
            immediately, whether the mortgage servicing can be sold at any time during the life of the loan, and the
            percentage of loans the lender has sold previously.
          </li>
          <li>
            The lender also must provide information about servicing procedures, transfer practices, and complaint
            resolution.
          </li>
        </ul>
        <p>
          They must notify you at least 15 days before they sell your loan unless you receive a written transfer notice at
          settlement. If your loan servicing is sold, you should receive two notices, one from the current mortgage servicer
          and one from the new mortgage servicer. The new servicer must notify you no more than 15 days after the transfer.
          The notices must include the following information:
        </p>
        <ul>
          <li>The name and address of the new servicer</li>
          <li>
            The date the current servicer will stop accepting mortgage payments and the date the new servicer will begin
            accepting them
          </li>
          <li>
            Toll-free or collect call telephone numbers for both the current servicer and the new servicer that you can
            call for information about the transfer of service
          </li>
          <li>
            Information about whether you can continue any optional insurance, such as credit life or disability
            insurance; what action you must take to maintain coverage; and whether the insurance terms will change
          </li>
          <li>
            A statement that the transfer will not affect any terms or conditions of the contract you signed with the
            original mortgage company, other than terms directly related to the servicing of such loan
          </li>
        </ul>
        <p>
          For example, if your old lender did not require an escrow account but allowed you to pay property taxes and
          insurance premiums, the new servicer cannot demand that you establish such an account. They must grant a 60-day
          grace period, in which you cannot be charged a late fee if you mistakenly send your mortgage payment to the old
          mortgage servicer instead of the new one.
        </p>
        <p>
          If you believe you have been improperly charged a penalty or late fee, or there are other problems with servicing
          your loan, contact your servicer in writing. Include your account number and explain why you believe your account
          is incorrect.
        </p>
        <p>
          Within 20 business days of receiving your inquiry, the servicer must send you a written response acknowledging
          your inquiry. Within 60 business days, the servicer must correct your account or determine its accuracy. The
          servicer must send you a written notice of what action it took and why.
        </p>
        <p>
          If you believe the servicer has not responded appropriately to your written inquiry, contact your local or
          state consumer protection office. You can also send your complaint to the{' '}
          <a href="https://www.ftc.gov/" {...external}>
            FTC
          </a>
          . Or, you may want to contact an attorney to advise you of your legal rights. Under the National Affordable
          Housing Act, consumers can initiate class action suits and obtain actual damages, plus additional damages, for a
          pattern or practice of noncompliance.
        </p>
        <Callout label="Tip">
          <p>
            Do not subtract any disputed amount from your mortgage payment. Many mortgage services will refuse to accept
            partial payments. They may return the check and charge a late fee or declare the mortgage is in default and
            start foreclosure proceedings.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'inspecting-the-home',
    title: 'Inspecting The Home',
    body: (
      <>
        <p>
          The home inspection is an objective visual examination of the physical structure and systems of the house from
          the roof to the foundation. The purchase of a home is probably the largest single investment you will ever make.
          Therefore, you should learn as much as you can about the condition of the property and the need for any major
          repairs before you buy so that you can minimize unpleasant surprises and difficulties afterward.
        </p>
        <p>
          A home inspection will also point out the positive aspects of a home and the maintenance that will be necessary
          to keep it in good shape. After the inspection, you will have a much clearer understanding of the property you
          are about to purchase and will be able to make a confident buying decision.
        </p>
        <p>The standard home inspector's report will include an evaluation of the condition of:</p>
        <ul>
          <li>The home's heating system</li>
          <li>Central air conditioning system (temperature permitting)</li>
          <li>Interior plumbing and electrical systems</li>
          <li>The roof, attic, and visible insulation</li>
          <li>Walls, ceilings, floors, windows, and doors</li>
          <li>The foundation and basement</li>
          <li>The visible structure</li>
        </ul>
        <p>
          If problems or symptoms are found, the inspector will refer you to the appropriate specialist or tradesperson for
          further evaluation.
        </p>

        <h3>Cost</h3>
        <p>
          The inspection fee for a typical one-family house varies geographically, as does the cost of housing. Similarly,
          within a given area, the inspection fee may vary depending on the size of the house, particular features of the
          house, its age, and possible additional services, such as septic, well, or radon testing.
        </p>
        <Callout label="Tip">
          <p>
            Check local prices on your own. Do not let cost be a factor in deciding whether or not to have a home
            inspection or in the selection of your home inspector. The knowledge gained from an inspection is well worth the
            cost, and the lowest-priced inspector is not necessarily a bargain. The inspector's qualifications, including
            experience, training, and professional affiliations, should be the most important consideration.
          </p>
        </Callout>

        <h3>Why You Can't Just "Do It Yourself"</h3>
        <p>
          Even the most experienced homeowner lacks the knowledge and expertise of a professional home inspector who has
          inspected hundreds, perhaps thousands, of homes. An inspector is familiar with all home construction elements,
          proper installation, and maintenance. The inspector understands how the home's systems and components are
          intended to function together, as well as how and why they fail.
        </p>
        <p>
          Further, most buyers find it difficult to remain completely objective and unemotional about the house they want,
          which may affect their judgment. For the most accurate picture, obtaining an impartial third-party opinion from an
          expert in the home inspection field is best.
        </p>

        <h3>How to Find a Home Inspector</h3>
        <p>
          The best source of recommendations is a friend or business acquaintance who has been satisfied with a home
          inspector they have used. Real estate agents are also generally familiar with home inspectors and should be able to
          provide you with a list of names from which to choose.
        </p>
        <p>
          Whatever your referral source, ascertain the home inspector's professional qualifications, experience, and
          business ethics before making a selection. You can do this by checking with your local Better Business Bureau as
          well as by verifying the inspector's membership in a reputable professional association such as the{' '}
          <a href="https://www.homeinspector.org" {...external}>
            American Society of Home Inspectors
          </a>
          .
        </p>

        <h3>When Do You Call In the Home Inspector?</h3>
        <p>
          A home inspector is typically called right after the contract or purchase agreement has been signed. You don't
          need to be present for the inspection, but it is recommended. By following the home inspector around the house,
          observing, and asking questions, you will learn a great deal about the home's condition, how its systems work, and
          how to maintain it. You will also find the written report easier to understand if you've seen the property
          first-hand through the inspector's eyes.
        </p>
        <Callout label="Tip">
          <p>
            Before you sign, be sure that there is an inspection clause in the contract, making your purchase obligation
            contingent upon the findings of a professional home inspection. This clause should specify the terms to which
            both the buyer and seller are obligated.
          </p>
        </Callout>

        <h3>What if the Report Reveals Problems?</h3>
        <p>
          No house is perfect. If the inspector finds problems, it does not necessarily mean you should not buy the house,
          only that you will know in advance what to expect. A seller may be flexible with the purchase price or contract
          terms if major problems are found. If your budget is very tight, or if you do not wish to become involved in
          future repair work, this information will be extremely important to you.
        </p>
        <p>
          What if you find problems after you move in? A home inspection does not guarantee that problems will not develop
          after you move in. However, if you believe a problem was already visible at the inspection and should have been
          mentioned in the report, your first step should be to call and meet with the inspector to clarify the situation.
          Misunderstandings are often resolved in this manner. If necessary, you might wish to consult with a local mediation
          service to help you settle your disagreement.
        </p>
        <Callout label="Tip">
          <p>
            Though many home inspectors today carry Errors & Omissions liability insurance, litigation should be considered
            a last resort. It is a difficult, expensive, and by no means foolproof recovery method.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'checklist-of-home-needs',
    title: 'Checklist of Home Needs',
    body: (
      <>
        <p>
          For each home you are considering, bring a copy of the following list and fill it in. This form will enable you
          to record all the homes you visit and compare their features. You may be able to fill in much of the information
          from the multiple listing service sheets your real estate agent provides. Write down the size, materials, and any
          other comments you have about each item.
        </p>
        <ArticleTable label="Checklist of Home Needs">
          <tbody>
            {checklist.map((group) => (
              <Fragment key={group.heading}>
                <tr className="is-group">
                  <td colSpan={2}>
                    <strong>{group.heading}:</strong>
                  </td>
                </tr>
                {group.items.map((item) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <Blank />
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </ArticleTable>
      </>
    ),
  },
  {
    id: 'renting-vs-buying',
    title: 'Renting Vs. Buying',
    body: (
      <>
        <p>
          Other than whether you can afford a new home, here are some additional factors that you should consider when
          deciding whether to rent or buy:
        </p>
        <ul>
          <li>
            Home ownership is a less valuable investment when home prices are down. Of course, owning a principal
            residence is not just an investment.
          </li>
          <li>
            When comparing the costs of renting against the costs of owning, factor in the valuable income tax
            deductions available for mortgage interest payments.
          </li>
          <li>You may not have to pay tax on the capital gain when you sell your principal residence.</li>
          <li>In a period of high-interest rates, owning a home is more costly.</li>
          <li>
            Those who frequently move, every four years or less, for example, are often better off renting than buying.
          </li>
        </ul>
      </>
    ),
  },
];

export default function BuyingAHome() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      page="Buying a Home"
      title={<>Buying a Home: <em>What To Do and How To Do It</em></>}
      lead="Once you are ready to buy a home, you must be as informed as possible. This guide discusses how much money to save for a down payment, how to work with a real estate agent, how to negotiate, and what you need to know about closing on your new home—including fees and other costs."
      sections={sections}
    />
  );
}
