import GuideArticle, { Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/taxstrategies-businessowners.php?item=135 (Turn your Vacation Into a Tax
// Deduction), word for word. The library's opening paragraph is the banner's text (`lead`), and its
// five numbered bold lead-ins are the guide's sections, without their closing periods (numbered in
// their titles, so the contents list doesn't number them again). Hyphens used as dashes are dashes,
// and the example, tip and note boxes keep the library's labels. The note on 2021 and 2022 meals is
// as the library has it. Back-to-top anchors omitted. Tax Strategies has no topic pages, so the
// breadcrumb ends at the category.
// Address: /guides/tax-strategies/turn-your-vacation-into-a-tax-deduction (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'appointments',
    title: '1. Make all your business appointments before you leave for your trip',
    body: (
      <>
        <p>
          Most people believe that they can go on vacation and simply hand out their business cards in order to make the
          trip deductible.
        </p>
        <p>Wrong.</p>
        <p>
          You must have at least one business appointment before you leave in order to establish the "prior set business
          purpose" required by the IRS. Keeping this in mind, before he left for his trip, Tim set up appointments with
          business colleagues in the various cities that he planned to visit.
        </p>
        <p>
          Let's say Tim is a manufacturer of green office products looking to expand his business and distribute more
          product. One possible way to establish business contacts—if he doesn't already have them—is to place
          advertisements looking for distributors in newspapers in each location he plans to visit. He could then interview
          those who respond when he gets to the business destination.
        </p>
        <Callout label="Example">
          <p>
            Tim wants to vacation in Hawaii. If he places several advertisements for distributors, or contacts some of his
            downline distributors to perform a presentation, then the IRS would accept his trip for business.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            It would be vital for Tim to document this business purpose by keeping a copy of the advertisement and all
            correspondence along with noting what appointments he will have in his diary.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'business-travel',
    title: '2. Make Sure your Trip is All "Business Travel"',
    body: (
      <>
        <p>
          In order to deduct all of your on-the-road business expenses, you must be traveling on business. The IRS states
          that travel expenses are 100 percent deductible as long as your trip is business related and you are traveling
          away from your regular place of business longer than an ordinary day's work <em>and</em> you need to sleep or
          rest to meet the demands of your work while away from home.
        </p>
        <Callout label="Example">
          <p>
            Tim wanted to go to a regional meeting in Boston, which is only a one-hour drive from his home. If he were to
            sleep in the hotel where the meeting will be held (in order to avoid possible automobile and traffic problems),
            his overnight stay qualifies as business travel in the eyes of the IRS.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Remember: You don't need to live far away to be on business travel. If you have a good reason for sleeping at
            your destination, you could live a couple of miles away and still be on travel status.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'on-the-road-expenses',
    title: "3. Make sure that you deduct all of your on-the-road-expenses for each day you're away",
    body: (
      <>
        <p>
          For every day you are on business travel, you can deduct 100 percent of lodging, tips, car rentals, and 50
          percent of your food. Tim spends three days meeting with potential distributors. If he spends $50 a day for food,
          he can deduct 50 percent of this amount, or $25. The IRS doesn't require receipts for travel expense under $75
          per expense—except for lodging.
        </p>
        <Callout label="Note">
          <p>
            For 2021 and 2022 only, business-related meals purchased from a restaurant (for eat-in or take-out) are
            deductible at 100 percent.
          </p>
        </Callout>
        <p>Let's look at an example:</p>
        <Callout label="Example">
          <p>
            If Tim pays $6 for drinks on the plane, $6.95 for breakfast, $12.00 for lunch, $50 for dinner, he does not need
            receipts for anything since each item was under $75. He would, however, need to document these items in a
            diary. A good tax diary is essential in order to audit-proof your records. Adequate documentation shall consist
            of amount, date, place and business reason for the expense.
          </p>
          <p>
            If, however, Tim stays in the Bates Motel and spends $22 on lodging, will he need a receipt? The answer is yes.
            You need receipts for all paid lodging.
          </p>
        </Callout>
        <p>
          Not only are your on-the-road expenses deductible from your trip, but also all laundry, shoe shines, manicures,
          and dry-cleaning costs for clothes worn on the trip. Thus, your first dry cleaning bill that you incur when you
          get home will be fully deductible. Make sure that you keep the dry cleaning receipt and have your clothing dry
          cleaned within a day or two of getting home.
        </p>
      </>
    ),
  },
  {
    id: 'sandwich-weekends',
    title: '4. Sandwich weekends between business days',
    body: (
      <>
        <p>
          If you have a business day on Friday and another one on Monday, you can deduct all on-the-road expenses during
          the weekend.
        </p>
        <Callout label="Example">
          <p>
            Tim makes business appointments in Florida on Friday and one on the following Monday. Even though he has no
            business on Saturday and Sunday, he may deduct on-the-road business expenses incurred during the weekend.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'majority-business-days',
    title: '5. Make the majority of your trip days business days',
    body: (
      <>
        <p>
          The IRS says that you can deduct transportation expenses if business is the primary purpose of the trip. A
          majority of days in the trip must be for business activities, otherwise, you cannot make any transportation
          deductions.
        </p>
        <Callout label="Example">
          <p>
            Tim spends six days in San Diego. He leaves early on Thursday morning. He had a seminar on Friday and meets with
            distributors on Monday and flies home on Tuesday, taking the last flight of the day home after playing a
            complete round of golf. How many days are considered business days?
          </p>
        </Callout>
        <p>
          All of them. Thursday is a business day since it includes traveling—even if the rest of the day is spent at the
          beach. Friday is a business day because he had a seminar. Monday is a business day because he met with prospects
          and distributors in pre-arranged appointments. Saturday and Sunday are sandwiched between business days, so they
          count, and Tuesday is a travel day.
        </p>
        <p>
          Since Tim accrued six business days, he could spend another five days having fun and still deduct all his
          transportation to San Diego. The reason is that the majority of the days were business days (six out of eleven).
          However, he can only deduct six days worth of lodging, dry cleaning, shoe shines, and tips. The important point is
          that Tim would be spending money on lodging, airfare, and food, but now most of his expenses will become
          deductible.
        </p>
        <p>With proper planning, you can deduct most of your vacations if you combine them with business. Bon Voyage!</p>
      </>
    ),
  },
];

export default function VacationTaxDeduction() {
  return (
    <GuideArticle
      category="tax-strategies"
      page="Turn your Vacation Into a Tax Deduction"
      title={
        <>
          Turn your Vacation Into <em>a Tax Deduction</em>
        </>
      }
      lead="How would you like to legally deduct every dime you spend on vacation this year? This financial guide offers strategies that help you do just that."
      sections={sections}
      numbered={false}
    >
      <p>
        Tim, who owns his own business, decided he wanted to take a two-week trip around the US. So he did—and was able to
        legally deduct every dime that he spent on his "vacation." Here's how he did it.
      </p>
    </GuideArticle>
  );
}
