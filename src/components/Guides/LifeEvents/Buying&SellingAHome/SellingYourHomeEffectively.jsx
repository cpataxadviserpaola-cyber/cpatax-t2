import { Link } from 'react-router';
import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=69 (Selling Your Home: How To Do It Effectively),
// word for word from the live page.
// Address: /guides/life-events/buying-and-selling-a-home/selling-your-home-effectively
// (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'finding-a-good-real-estate-agent',
    title: 'Finding A Good Real Estate Agent',
    body: (
      <>
        <p>
          To find a good real estate agent, gather a list of names of candidates you will interview. You may want to
          consider recommendations from colleagues, friends, and professionals, as well as names listed on posted "for
          sale" signs, especially for houses that have been sold. Once you have at least three names, schedule a telephone
          or in-person interview with the agent. You may encounter some resistance; if you run into a broker who refuses
          to take the time to answer your questions, just move to the next one.
        </p>
        <Callout label="Tip">
          Although a popular practice in recent times (due to the savings on commissions paid to a broker), selling your
          own home without a broker is often more difficult unless you have a buyer in mind.
        </Callout>
        <p>Be sure to ask potential agents the following:</p>
        <ul>
          <li>
            <p>
              <em>What problems do you see in marketing our home?</em> (The broker should be honest about potential
              problems in selling the home and able to think creatively about solutions.)
            </p>
          </li>
          <li>
            <p>
              <em>What would your plan be for marketing our home? What can we do to help you implement your plan?</em>{' '}
              Listen carefully to the answer to find out whether the agent exhibits a willingness to think creatively in
              approaching whatever problems might exist with the selling process and whether he or she has a cooperative
              attitude.
            </p>
          </li>
          <li>
            <p>
              <em>Will you include any ideas you have for selling the home in a listing agreement if we decide to sign
              with you?</em>
            </p>
          </li>
          <li>
            <p>
              <em>Where do you live?</em> (You want a broker who lives nearby, who knows the good and bad points about
              your area.)
            </p>
          </li>
          <li>
            <p>
              <em>How much is your commission?</em> (The average commission is 6 or 7 percent. Although brokers sometimes
              take a cut in their commissions during the negotiation process in order to move a sale along there is no
              point in trying to bargain down a broker's commission at this point.)
            </p>
          </li>
          <li>
            <p>
              <em>Do you have a list of comparable homes?</em> (Such a list is essential in helping you arrive at an
              asking price for your home.)
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'reviewing-the-listing-agreement',
    title: 'Reviewing The Listing Agreement',
    body: (
      <>
        <p>
          The listing agreement is a contract between the homeowners and the agent. It states how much the agent will be
          paid and what services will be provided.
        </p>
        <p>
          An exclusive right-to-sell type of agreement gives the broker the exclusive right to sell your house for a
          limited period of time. Other types of listing agreements vary either the exclusivity or time period of the
          listing. No matter which of these agreements are signed, the listing agent gets 100 percent of the commission if
          he or she sells the house and part of the commission if another broker sells the house.
        </p>
        <Callout label="Tip">
          Generally, try to limit an exclusive-right-to-sell agreement to a period of three months. This agreement will
          give the broker an incentive to sell the home, and it will still give you an out if you feel the broker is not
          doing enough for you. If you have substantial confidence in the broker, and you have seen and approved his or
          her plans for marketing the home, you may wish to sign a six month contract.
        </Callout>
        <Callout label="Tip">
          If, at any time during the marketing process, you feel that your broker is not as effective as he or she could
          be, switch brokers. Do not waste time with a broker you have doubts about.
        </Callout>
      </>
    ),
  },
  {
    id: 'speeding-up-the-selling-process',
    title: 'Speeding Up The Selling Process',
    body: (
      <>
        <p>
          There are various things you can do before and during the selling process to move it along and make it less
          onerous. A good real estate agent may suggest the following:
        </p>
        <ul>
          <li>
            <p>
              <strong>Make cosmetic improvements to get the house looking as good as possible.</strong> For instance,
              patch damaged plaster and drywall, repaint, and re-wallpaper. Spruce up the exterior by replacing broken
              shingles or shutters or doing some minor landscaping to give your home more "curb appeal".
            </p>
          </li>
          <li>
            <p>
              <strong>Increase your home's appeal to a wider range of potential buyers.</strong> Repair or replace any
              part of your home that's been modified that might not appeal to the general population.
            </p>
          </li>
          <li>
            <p>
              <strong>Make your home cozy and inviting when potentials buyers come by.</strong> Make sure the interior and
              exterior are clean, neat, and well maintained. Have a fire burning in the fireplace, bake some cookies or an
              apple pie, or have a pot of coffee brewing. Put away toys and tools. Keep pets out of sight. Not everyone is
              as enamored of Fido as your family is. Try not to cook foods like fish with lingering odors.
            </p>
          </li>
          <li>
            <p>
              <strong>Offer a warranty.</strong> Sometimes offering a warranty on the roof, electrical system or
              appliances can speed up a sale or smooth the negotiating process, particularly if it's causing buyers to
              balk at the asking price.
            </p>
          </li>
          <li>
            <p>
              <strong>Create a home sale kit with your broker.</strong> A home sale kit consists of flyers that are
              distributed to potential home buyers and contain photos of your home's exterior, interior, and surroundings.
              The sales flyer should also list major selling points and include information about utility costs, taxes, and
              a floor plan.
            </p>
          </li>
          <li>
            <p>
              <strong>Do not help the broker show the home.</strong> Allow the broker to do his or her job. Make yourself
              available for questions, but do not try to help sell to potential buyers who are looking at your home.
            </p>
          </li>
          <li>
            <p>
              <strong>Offer a bonus to your broker.</strong> A bonus shouldn't be obvious to the buyer because the buyer
              will wonder if the house price has been bumped up to accommodate the real estate broker's bonus. Instead,
              offer the bonus in the form of an increased commission, say 3.5 percent instead of 3 percent.
            </p>
          </li>
          <li>
            <p>
              <strong>Take it off the market and re-list it later.</strong> If your house has been on the market for a
              long time, it may be perceived as undesirable. Taking it off the market and re-listing it at a later time
              sometimes helps.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'negotiating-effectively',
    title: 'Negotiating Effectively',
    body: (
      <>
        <p>
          Although it is the broker's job to do the actual negotiating, the homeowners should stay involved in the
          process. Here are some tips for negotiating with buyers, once they have made their first offer.
        </p>
        <ul>
          <li>
            Find out as much as possible about the potential buyer. Try to find out, for example, whether the buyer needs
            to buy a home quickly or is in a position to take plenty of time to negotiate. This will help you to decide
            what type of negotiating stance to take. Knowing details about the buyer's family will help you point out how
            your home accommodates their needs. And, if you know that a buyer lives in an apartment and will need to buy
            appliances for their new home, then you can throw in deal sweeteners such as refrigerators, washer and
            dryers, and furnishings.
          </li>
          <li>On the flip side, try to reveal as little as possible about your own situation.</li>
        </ul>
        <p>
          One final piece of advice is to avoid being confrontational, which can kill a potential deal during the
          negotiation process. The offers you receive will likely be 10 to 15 percent below your asking price. Do not be
          offended by this or by any "low-balling" techniques engaged in by buyers. Be willing to make some concessions.
          Make counter-offers and try to bring the offer closer to your asking price. If you feel that an offer is
          unreasonable, however, you can always reject it outright and wait for another buyer.
        </p>
      </>
    ),
  },
  {
    id: 'planning-your-move',
    title: 'Planning Your Move',
    body: (
      <>
        <p>
          Once you have signed the contracts, it is time to start planning the move. The closing date, which is generally
          your moving date, will fall about two months after the contracts are signed.
        </p>
        <h2>Hiring A Moving Company</h2>
        <p>
          One thing you should do immediately after the contracts are signed even though your moving date may be months
          away is to begin calling moving companies. Try to get recommendations from friends or colleagues. Call a number
          of movers for estimates. You will have to provide them with the number of miles involved in the move and the
          approximate weight of your belongings. The mover will help you in making this estimate. Do not use a mover
          whose estimate seems too low. The services provided may be second-rate. You get what you pay for!
        </p>
        <p>
          Ask in advance about extra charges for heavy items, stairways, or pianos. Be aware that having the movers pack
          for you will increase your moving bill by about 30 percent. Also, you may pay a premium if you schedule your
          move during busy moving times, generally after the 25th of the month or before the 2nd.
        </p>
      </>
    ),
  },
  {
    id: 'getting-ready-for-the-move',
    title: 'Getting Ready For the Move',
    body: (
      <>
        <p>Right after you have scheduled your move, start taking care of the following items:</p>
        <ul>
          <li>Start throwing away things you don't want to bring with you.</li>
          <li>Decide which items you are leaving behind for the new owners, and tag them appropriately.</li>
          <li>
            If your move is job-related, ask whether your employer will reimburse you for part of the cost. Save any
            receipts relating to the move, since part of the cost will be deductible.
          </li>
          <li>
            Start shopping for a new bank in your new neighborhood. Open a checking account once you have found one with
            competitive fees and convenient branches.
          </li>
          <li>
            Get a change of address kit from the post office, and start notifying everyone of your impending change. Note
            that you will need to follow any instructions given by credit card companies, banks, and other institutions
            that are affected by a change of address; sending them a change-of-address card will generally not be
            effective.
          </li>
          <li>Call the schools in the new area to enroll your children.</li>
          <li>
            Obtain enough packing supplies from your mover, and begin packing, unless the mover will be doing the packing
            for you.
          </li>
          <li>
            Get copies of your medical and dental records (and veterinary records), so you can hand these to your new
            doctors after you move.
          </li>
          <li>
            Be sure your move is covered by insurance: either the moving company's insurance or your homeowner's
            insurance. Call your insurance company to determine whether the move is covered. Also, take care of
            transferring your homeowner's insurance to the new home.
          </li>
        </ul>
        <p>Then, as you get closer to the date of your move, take care of the following:</p>
        <ul>
          <li>Call the utility companies and tell them to turn on service in the new place. Schedule a date when they will terminate service in the old place.</li>
          <li>Pack your belongings in boxes. Mark each box with its intended location in the new home, and with a summary of its contents. When you are close to moving day, pack a separate bag with items you will need right away, such as medications, toiletries, and clothing.</li>
          <li>Switch your direct payroll deposit, and any automatic payments, to your new checking account. You will have to fill out a form to accomplish this. Two or three days before you move, take the money out of your old account and transfer it to your new account.</li>
        </ul>
        <Callout label="Tip">
          Leave the old account open until all outstanding checks have cleared. To avoid fees, you may need to leave in
          any minimum balance required. Be sure to leave your new address with the old bank.
        </Callout>
        <ul>
          <li>If you are moving into an apartment building, discuss your moving plans with the landlord and make any necessary arrangements.</li>
          <li>Shop for auto insurance in the new area (if moving out of state).</li>
          <li>Confirm with the moving company. Write down directions to your new home.</li>
          <li>Transfer your brokerage account to your new area.</li>
          <li>Take valuables out of a safe deposit box and return the keys to the bank.</li>
          <li>Obtain travelers' checks to cover the expenses of your move, and a cashier's check to pay the mover (unless they will accept a personal check).</li>
          <li>Defrost your refrigerator.</li>
          <li>Leave a mail-forwarding order with the Post Office.</li>
          <li>On moving day, check your contract with the mover. Be sure the total cost of the move is clearly detailed. Make sure the moving date, location, and insurance information are correct.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'notifying-people-of-your-move',
    title: 'Notifying People Of Your Move',
    body: (
      <>
        <p>
          Here is a list of people you should notify when you change your address and phone number. Although the list is
          not all-inclusive, it can be used as a starting point. You may need to notify these parties at both your old
          and new locations. Bear in mind that you may need to follow the instructions provided by banks, utilities, and
          credit card companies in order to effectively change your address.
        </p>
        <ul>
          <li>The IRS (use Form 8822) and state and local taxing authorities</li>
          <li>The U.S. Post Office</li>
          <li>Home, auto, and life Insurance agents</li>
          <li>Debtors and creditors, such as mortgage holders, car lien holders, other lenders, and people who owe you money</li>
          <li>Credit card companies</li>
          <li>Publications</li>
          <li>Clubs and services to which you subscribe such as auto clubs, lawn mowing services, cleaning services, and book clubs</li>
          <li>The Social Security Administration</li>
          <li>Any organization that periodically mails you a check, such as a pension check or veterans' benefits</li>
          <li>Banks</li>
          <li>Employers</li>
          <li>Doctors, dentists, veterinarians</li>
          <li>Motor vehicle departments</li>
          <li>Places of worship and non-profit agencies you are involved with</li>
          <li>The registrar of voters</li>
          <li>Utilities, telephone service, answering service, and trash collectors</li>
          <li>Your professional advisors</li>
        </ul>
      </>
    ),
  },
  {
    id: 'figuring-the-tax',
    title: 'Figuring The Tax',
    body: (
      <>
        <p>
          Your responsibilities do not end with the sale of the old home and the move to the new one. There are tax
          consequences, often complex, that need to be considered. How much is the gain? How much of it is taxable? How
          can you minimize the tax impact? Here, professional guidance is important.
        </p>
        <Callout label="Related Guide">
          To gain a better understanding of the tax consequences, please see the Financial Guide:{' '}
          <Link to="/guides/life-events/buying-and-selling-a-home/selling-your-home-minimize-tax">
            SELLING YOUR HOME: How To Minimize The Tax On The Gain
          </Link>
        </Callout>
      </>
    ),
  },
  {
    id: 'agents-titles-and-what-they-mean',
    title: "Agents' Titles and What They Mean",
    body: (
      <>
        <p>
          When looking for a real estate agent, you may come across the following commonly used titles. Here is a basic
          definition of each:
        </p>
        <ul>
          <li>
            <p>
              <em>Principal broker:</em> This is a person who is licensed to operate a real estate office. He or she may
              either work alone or employ other agents. Several years of experience are required to obtain this licensure.
              Anyone selling real estate must work under the supervision of a principal broker.
            </p>
          </li>
          <li>
            <p>
              <em>Realtor:</em> A realtor is a member of the National Association of Realtors, along with a state
              realtors' association and a local board of realtors. Realtors are bound by a code of ethics. They are able
              to access a local computerized database of homes for sale known as the multiple listing service (MLS).
            </p>
          </li>
          <li>
            <p>
              <em>Agent:</em> This is the general term for any licensed professional in the real estate sales business.
            </p>
          </li>
          <li>
            <p>
              <em>Listing agent:</em> A type of agent who signs up the home seller and lists the home with the multiple
              listing service.
            </p>
          </li>
          <li>
            <p>
              <em>Selling agent:</em> An agent who finds a home for sale (through the multiple listing service) and finds
              a buyer for it.
            </p>
          </li>
          <li>
            <p>
              <em>Buyer's agent:</em> The buyer's agent is employed by the broker selected by the buyer.
            </p>
          </li>
        </ul>
        <Callout label="Note">
          On a home sale, the listing agent and the selling agent split the commission with each other and with their
          principal brokers.
        </Callout>
      </>
    ),
  },
  {
    id: 'improvements-that-help-the-most',
    title: 'Improvements That Help The Most',
    body: (
      <>
        <p>
          The following improvements and additions may increase the resale value of your home. Of course, bear in mind
          that the value home buyers place on various improvements will vary regionally, and even from neighborhood to
          neighborhood. But the list might serve to give you some ideas.
        </p>
        <ul>
          <li>Family room</li>
          <li>Fireplace</li>
          <li>Dining room</li>
          <li>Linen closet</li>
          <li>Garbage disposal</li>
          <li>Wall-to-wall carpeting</li>
          <li>Smoke detector</li>
          <li>Two-sink vanity (bathroom)</li>
          <li>Double-glass windows</li>
          <li>Range hood and fan</li>
          <li>Bathroom dressing area</li>
          <li>Patio</li>
          <li>New, stronger locks</li>
          <li>Central air</li>
          <li>Guest room</li>
          <li>Bathroom exhaust fan</li>
        </ul>
      </>
    ),
  },
];

export default function SellingYourHomeEffectively() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-selling-a-home"
      title="Selling Your Home: How To Do It Effectively"
      sections={sections}
    >
      This Financial Guide gives you suggestions that can increase the sales price and reduce the frustrations involved
      in selling a home. It discusses how to find a good agent, how to make your home more attractive to buyers, how to
      negotiate effectively, and how to handle the moving process.
    </GuideArticle>
  );
}
