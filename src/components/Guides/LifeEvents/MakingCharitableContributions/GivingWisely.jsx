import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=75 (Charitable Contributions: How To Give Wisely),
// word for word. Back-to-top anchors omitted (handled by layout). Double hyphens and hyphens used
// as dashes are now dashes. Under Sweepstakes Appeals, the library's stray line "* If you wish to
// participate…" (outside its list) is the list's second item, and under Police And Firefighter
// Appeals the four points the library sets in a caution box are that box's list. The "Tip",
// "Caution" and "Example" boxes keep the library's labels; related guides are named by their titles
// in the library.
// Address: /guides/life-events/making-charitable-contributions/giving-wisely (articlePages in
// src/data/guides.js).

const related = guide('life-events.php');

const sections = [
  {
    id: 'giving-your-time',
    title: 'Giving Your Time',
    body: (
      <>
        <p>
          Volunteering your time can be personally rewarding, but it is important to consider the following factors
          before committing yourself:
        </p>
        <ul>
          <li>
            Make sure you are familiar with the charity's activities. Ask for written information about the charity's
            programs and finances.
          </li>
          <li>
            Be aware that volunteer work may require special training and the devotion of a scheduled number of hours
            each week to the charity.
          </li>
          <li>
            If you are considering assisting with door-to-door fund-raising, be sure to find out whether the charity has
            financial checks and balances in place to help ensure control over collected funds.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            Although the value of your time as a volunteer is not deductible, out-of-pocket expenses (including
            transportation costs) are generally deductible.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'mail-solicitations',
    title: 'Mail Solicitations',
    body: (
      <>
        <p>
          Many charities use direct mail to raise funds. While the overwhelming majority of these appeals are accurate
          and truthful, be aware of the following:
        </p>
        <ul>
          <li>
            The mailing piece should clearly identify the charity and describe its programs in specifics. If a
            fund-raising appeal brings tears to your eyes but tells you nothing about the charity's functions,
            investigate it carefully before responding.
          </li>
          <li>
            It is against the law to demand payment for unsolicited merchandise—e.g., address labels, stamps, bumper
            stickers, greeting cards, calendars, and pens. If such items are sent to you with an appeal letter, you are
            under no obligation to pay for or return them.
          </li>
          <li>
            Appeals that include sweepstakes promotions should disclose that you do not have to contribute to be eligible
            for the prizes offered. To require a contribution would make the sweepstakes illegal as a lottery operated by
            mail.
          </li>
          <li>Appeals that include surveys should not imply that you are obligated to return the survey.</li>
          <li>
            Beware of fund-raising appeals that are disguised as bills or invoices. It is illegal to mail a bill, invoice
            or statement of account that is, in fact, an appeal for funds unless it has a clear and noticeable
            disclaimer stating that it is an appeal and that you are under no obligation to pay unless you accept the
            offer.
          </li>
        </ul>
        <Callout label="Caution">
          <p>
            Deceptive-invoice appeals are most often aimed at businesses, not individuals. If you receive one of these,
            contact your local Better Business Bureau.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'public-education',
    title: 'Public Education Solicitations',
    body: (
      <>
        <p>
          If you respond to mail appeals, you should be aware that certain charities consider this to be a significant
          part of their educational budgets. In a recent survey, half of 150 well-known national charities included
          their direct mail and other fund-raising appeals in their public education programs. This practice makes
          fund-raising drives look like a smaller part of a charity's expenses than they are. These 75 charities
          allocated $160 million of their direct mail and other appeal costs to public education programs.
        </p>
        <Callout label="Example">
          <p>
            A charity whose purpose is to combat cruelty to animals uses direct mail to raise funds. The cost of a
            nationwide direct mail campaign is $1 million much more than the $200,000 the charity has budgeted for its
            program of research grants. This embarrassingly high allotment for fund-raising costs can be significantly
            reduced if the direct mail pieces include some information about cruelty to animals. Since the information
            is considered educational, the charity calls it a program expense and allots half the cost of the mailing to
            public education, thus reducing fund-raising expenses from $1 million to only $500,000, and bumping up
            program spending from $200,000 to $700,000.
          </p>
        </Callout>
        <p>
          The line between pure fund-raising and genuine public education activities is not always clear. However, if
          the charity is confident that the fund-raising appeal truly serves its educational purposes, it should be
          willing to disclose this fact in the appeal. This disclosure allows donors to make an informed decision about
          whether to support the activity.
        </p>
      </>
    ),
  },
  {
    id: 'telephone-door-to-door-street',
    title: 'Telephone, Door-To-Door, And Street Solicitations',
    body: (
      <>
        <p>
          When you are approached for a contribution of time or money, ask questions—and do not give until you are
          satisfied with the answers. Charities with nothing to hide will encourage your interest. Be wary of any
          reluctance to answer reasonable questions.
        </p>
        <ul>
          <li>Ask for the charity's full name and address. Demand identification from the solicitor.</li>
          <li>Ask if the contribution is tax-deductible.</li>
          <li>
            Ask if the charity is licensed by state and local authorities. Registration or licensing is required by most
            states and some local governments.
          </li>
        </ul>
        <Callout label="Caution">
          <p>Contributions to tax-exempt organizations are not always tax-deductible.</p>
        </Callout>
        <Callout label="Caution">
          <p>Registration, by itself, does not mean that the state or local government endorses the charity.</p>
        </Callout>
        <ul>
          <li>Do not give in to pressure to make an immediate donation or allow a runner to pick up a contribution.</li>
          <li>
            Statements such as "all proceeds will go to charity" may mean money left after expenses, such as the cost of
            fund-raising efforts, will go to the charity. These expenses can be big ones, so check carefully.
          </li>
          <li>
            When asked to buy candy, magazines, or tickets to benefit a charity, be sure to ask what the charity's share
            will be. Sometimes the organization will receive less than 20 percent of the amount you pay.
          </li>
          <li>
            If a fund raiser uses pressure tactics—intimidation, threats, or repeated and harassing calls or visits—call
            your local Better Business Bureau to report the actions.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sweepstakes',
    title: 'Sweepstakes Appeals',
    body: (
      <>
        <p>
          Sweepstakes mailings, used by businesses for many years to promote their products, have recently become popular
          with charities. Here are some points to consider when reviewing a sweepstakes appeal.
        </p>
        <ul>
          <li>The sweepstakes mailing should clearly disclose that no contribution is necessary to participate.</li>
          <li>
            If you wish to participate, read the sweepstakes promotion and direct mail contents carefully. Your entry may
            be discarded if the rules are not followed to the letter.
          </li>
          <li>
            If the charity sweepstakes promotion says you are a pre-selected winner, you will usually receive a prize only
            if you respond to the sweepstakes. Most "pre-selected winners" receive just pennies per person.
          </li>
          <li>Both donor and non-donor sweepstakes participants must have an equal chance of winning a prize.</li>
        </ul>
        <Callout label="Caution">
          <p>
            For a national campaign, the probability of winning the big prize may be quite low. Some campaigns involve
            mailings of a half-million to ten million or more letters.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            If you are considering a donation, check out the appeal as you would any other request for funds. Does it
            clearly specify the programs your gift would be supporting? Do not hesitate to ask for more information on
            the charity's finances and activities.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'thrift-stores',
    title: 'Charity Thrift Stores',
    body: (
      <>
        <p>
          Since all charity thrift stores do not necessarily operate the same way, it is important to find out if the
          charity is benefiting from thrift sales. There are three major types of thrift store operations:
        </p>
        <ul>
          <li>
            <em>Conduit-type shops run by volunteer church and civic groups.</em> These thrift stores generally
            distribute most of their proceeds to various charitable organizations, often community-based.
          </li>
          <li>
            Thrift operations are represented by service organizations such as{' '}
            <em>The Salvation Army and Goodwill Industries.</em> Here, the thrift stores are operated as part of their
            program activities through the goal of "rehabilitation through employment."
          </li>
          <li>
            <em>Charities that collect and sell used merchandise to raise funds for their own use.</em> This arrangement
            is popular for a number of veterans organizations and other charities. Such arrangements generally work one
            of two ways: (1) the charity owns and operates the store or (2) more commonly, variously charities solicit
            and collect used items, which are then sold to independently managed stores for an agreed-upon amount.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            The fair market value of goods donated to a thrift store is deductible as a charitable donation, as long as
            the store is operated by a charity. To determine the fair market value, visit a thrift store and check the
            going rate for comparable items. If you are donating directly to a for-profit thrift store or if your
            merchandise is sold on a consignment basis whereby you get a percentage of the sale, the thrift contribution
            is not deductible.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Remember to ask for a receipt that is properly authorized by the charity. It is up to the donor to set a
            value on the donated item.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>If you plan to donate a large or unusual item, check with the charity first to determine if it is acceptable.</p>
        </Callout>
        <p>
          If you are approached to donate goods for thrift purposes, ask how the charity will benefit financially. If the
          goods will be sold by the charity to a third party such as an independently managed thrift store, then ask what
          the charity's share will be.
        </p>
        <Callout label="Tip">
          <p>
            Sometimes the charity receives a small percentage, e.g., 5 to 20 percent of the gross or a flat fee per bag of
            goods collected.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'fund-raising-events',
    title: 'Fund-Raising Dinners, Variety Shows, And Other Events',
    body: (
      <>
        <p>
          Dinners, luncheons, galas, tournaments, circuses, and other events are often put on by charities to raise
          funds. Here are some points to consider before deciding to participate in such events.
        </p>
        <ul>
          <li>
            Check out the charity. The fact that you are receiving a meal or theater tickets should not justify less
            scrutiny.
          </li>
          <li>
            Your purchase of tickets to such events is generally not fully deductible. Only the portion of your gift above
            the fair market value of the benefit received (i.e., the meal, show, etc.) is deductible as a charitable
            donation. This rule holds true even if you decide to give your tickets away for someone else to use.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            If you decide not to use the tickets, give them back to the charity. In order to be able to deduct the full
            amount paid, you must either refuse to accept the tickets or return them to the charitable organization. In
            this way, you will not have received value for your payment.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            Make donations by check or money order out to the full name of the charity and not to the sponsoring show
            company or to an individual who may be collecting donations in person.
          </p>
        </Callout>
        <ul>
          <li>
            Watch out for statements such as "all proceeds will go to the charity." This can mean the amount after
            expenses have been taken out, such as the cost of the production, the fees for the fund-raising company hired
            to conduct the event, and other related expenses. These expenses can make a big difference and sometimes
            result in the charity receiving 20 percent or less of the price paid.
          </li>
        </ul>
        <Callout label="Tip">
          <p>Ask the charity what anticipated portion of the purchase price will benefit the organization.</p>
        </Callout>
        <ul>
          <li>
            Solicitors for some fund-raising events such as circuses, variety shows, and ice skating shows may suggest
            that if you are not interested in attending the event you can purchase tickets that will be given to
            handicapped or underprivileged children. If such statements are made, ask the solicitor how many children
            will attend the event, how they will be chosen, how many tickets have been already distributed to these
            children, and if transportation to the event will be provided for them.
          </li>
        </ul>
        <Callout label="Caution">
          <p>
            It has happened that the number of children eligible to receive free tickets has been limited or
            transportation has not been arranged. So, in effect, free tickets given to the few needy children who attend
            the event are paid for many times over by businesses and individuals who purchase tickets.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'affinity-credit-cards',
    title: 'Charity-Affinity Credit Cards',
    body: (
      <>
        <p>
          You may receive an offer to apply for an affinity credit card bearing the name and logo of a particular
          charity. Sometimes offered exclusively to an organization's donors or members, these cards are issued by banks
          and credit card companies under agreements worked out with individual charities. These cards are just like
          other credit cards, but the specified charity gets some kind of financial benefit.
        </p>
        <p>
          All affinity credit cards are not created equal. Offers vary in terms of how the charity benefits as well as the
          terms of the credit agreement with consumers. So check the terms carefully!
        </p>
        <Callout label="Caution">
          <p>
            Consider the specific terms as you would any credit card offer: the amount of the interest rate/finance
            charges, the amount of the annual fee, if any, the amount of late fees and over-the-limit fees, if any, and
            the length of the grace period, or amount of time after which finance charges begin to accrue on any unpaid
            balance.
          </p>
        </Callout>
        <p>The charity usually receives a benefit in one or more of the following ways:</p>
        <ul>
          <li>
            The charity receives a certain percentage of each purchase or a specified amount every time the consumer
            makes a purchase with the card,
          </li>
          <li>The charity receives a certain dollar amount every time a new customer signs up for a card, or</li>
          <li>The charity receives a portion of the annual renewal fee for the card.</li>
        </ul>
        <Callout label="Caution">
          <p>
            Make sure the promotional literature states exactly how the charity benefits. For example, one affinity card
            offer declared that a specified national charity would receive half of one percent of all transactions made
            with the card (that works out to 5 cents for every $10 worth of purchases). If the financial benefit for the
            charity is not spelled out, then ask.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            Contributions made by a bank and/or credit card company through the use of an affinity credit card are not
            deductible to consumers as charitable donations for federal income tax purposes.
          </p>
        </Callout>
        <p>
          Remember also to consider your interest in the charity and not to hesitate to seek out more information on the
          charity's programs and finances.
        </p>
        <Callout label="Tip">
          <p>
            If saving money is your bottom line, make a direct donation to the charity and seek a credit card with the
            best terms and lowest interest rates, regardless of affinity.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'charity-business-marketing',
    title: 'Charity/Business Marketing',
    body: (
      <>
        <p>The following points should be kept in mind when considering promotions that partner charities and businesses:</p>
        <ol>
          <li>
            Charity/business marketing campaigns should clearly disclose the actual or estimated portion of the purchase
            price that will benefit the specified cause. Without such information, you cannot know how much of your
            purchase will aid a charity participating in such a campaign.
          </li>
          <li>
            Read the disclosure carefully. Some charity/business marketing campaigns have an expiration period (for
            example, ten cents goes to the charity for all purchases made until October 31.) If there is no disclosure,
            be aware that the amount that goes to the charity is usually between one and ten percent of the retail price.
          </li>
          <li>
            In schemes during the Gulf War, businesses made no arrangements with the named charity and no contributions
            were given. Various items and services were sold with the false promise that a donation would be made to the
            USO or other organizations helping members of the armed services or their families. Similar advertising
            abuses commonly occur in the wake of hurricanes, floods and other natural disasters.
          </li>
          <li>
            Some advertisements falsely imply the existence of a direct connection between the consumers' purchase and
            the charity when, in fact, the charity was guaranteed a "flat" contribution regardless of the level of the
            resulting purchases.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'disaster-appeals',
    title: 'Disaster Appeals',
    body: (
      <>
        <p>
          The tragedy of a flood, massive fire, hurricane, earthquake, or another disaster always triggers an outpouring
          of public support and concern. During such crises, watch out for fraudulent appeals by some who see disasters
          as an opportunity to take advantage of American concern and generosity.
        </p>
        <p>
          Examine your options instead of giving to the first charity from which you receive an appeal. There will be a
          variety of relief efforts responding to the diverse needs of disaster victims. Be wary of appeals that are long
          on emotion and short on what the charity will do to address the specific disaster.
        </p>
        <Callout label="Caution">
          <p>
            Ask how much of your gift will be used for the crisis and how much will go towards other programs and to
            administrative and fund-raising costs. And find out what the charity intends to do with any excess
            contributions remaining after the crisis has ended.
          </p>
        </Callout>
        <p>
          Check with organizations before donating goods for overseas disaster relief. Most groups involved in overseas
          relief will not accept donated goods since purchasing goods overseas is often less expensive and more
          efficient. If a charity accepts donated items, ask about their arrangements for shipping and distribution.
        </p>
        <p>
          Some charities change their program focus during a crisis in order to respond to the changing needs of disaster
          victims. Do not assume the charity will carry out the same activities throughout a crisis situation.
        </p>
      </>
    ),
  },
  {
    id: 'police-firefighter',
    title: 'Police And Firefighter Appeals',
    body: (
      <>
        <p>In reviewing such appeals, potential donors should be aware of the following points.</p>
        <ul>
          <li>
            Many different types of police and firefighter organizations exist. Some are charities that operate
            educational or youth programs. Others are labor organizations, fraternities, or benevolent associations that
            provide benefits to members.
          </li>
          <li>
            Your gift may not be deductible. Police and firefighter organizations can be tax exempt under different
            sections of the Internal Revenue Code. Only some of them are eligible to receive deductible charitable
            donations.
          </li>
          <li>
            Do not make assumptions based on the name alone. The words "police" and "firefighter" in the organization's
            name do not necessarily mean that representatives from your local and/or state police or fire departments
            are members. In fact, the organization may not have any police or firefighter members.
          </li>
        </ul>
        <Callout label="Caution">
          <ul>
            <li>
              Ask about any affiliations the group might have with other organizations. Some groups operate as a lodge or
              chapter of a larger organization. Others are independent associations of local, state, and/or federal law
              enforcement officers.
            </li>
            <li>
              Do not believe promises that your donation will "give you special treatment" from your police or
              firefighters. If such suggestions of threats are used, contact your state attorney general's office and
              your Better Business Bureau.
            </li>
            <li>
              Ask how your contribution will be used and what programs and activities it will support. Do not hesitate to
              ask for written materials on the police or firefighter group's programs and finances.
            </li>
            <li>
              Groups offering legitimate help to your police, firefighters, and community will welcome your questions and
              encourage your interest.
            </li>
          </ul>
        </Callout>
      </>
    ),
  },
  {
    id: 'child-sponsorship',
    title: 'Child Sponsorship Groups',
    body: (
      <>
        <p>
          Not all sponsorship programs are alike. Sponsored donations usually benefit a project for an entire community
          (for example, medical care, education, food) and not the sponsored child exclusively. Some groups believe this
          is the most effective way to make significant and lasting changes in a child's living conditions. Other
          organizations do give a certain amount of the contribution directly to the sponsored child. Before deciding to
          participate in a sponsorship program, you may want to consider the following:
        </p>
        <ul>
          <li>
            Do you know how children are assisted (i.e., through a community development project operated by the
            charity or through an affiliated project that the group funds)?
          </li>
          <li>Can you commit at least several years to a program in the form of financial assistance and letter-writing?</li>
          <li>
            The child will not be your adopted child in any legal sense, and you will not be able to make any demands on
            him or her.
          </li>
          <li>Do you agree with the overall philosophy of the organization (e.g., any religious focus a program might have)?</li>
        </ul>
        <Callout label="Tip">
          <p>Contact other child sponsors to get a sense of their overall satisfaction with the organization.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'national-office-affiliates',
    title: "A Charity's National Office and Its Affiliates",
    body: (
      <>
        <p>
          While some organizations are a single entity under one name, others may be a network of local affiliates or
          chapters. If you give to a local chapter or affiliate, do not assume your donation will be spent locally. Nor
          should you assume that a chapter's operations are fully controlled by the national office.
        </p>
        <p>
          Many different types of relationships can exist between a charity's national office and its chapters. Here are
          three possible relationships chapters:
        </p>
        <ol>
          <li>
            The national office performs certain functions, such as developing educational or fund-raising materials but
            does not supervise affiliates. In this case, the local chapters are incorporated separately from the national
            office and each applies for its own tax-exempt status from the IRS. Each local chapter's programs and
            fund-raising is under the control of the chapter's local board of directors. To support the national office,
            the local affiliates purchase materials produced by it or send it a small percentage of their locally
            collected funds.
          </li>
          <li>
            The organization's national office and affiliates function as one centralized unit under the control of a
            national board of directors. All income and expenses are channeled through the national office. In this
            case, the chapters are not separate legal entities and have only limited authority, as stated in their
            charter agreements with the national office.
          </li>
          <li>
            Most national/chapter relationships fall somewhere between the two extremes in the preceding two paragraphs.
            In such a case, both the national office and the local affiliates share some level of authority. Local
            chapters may or may not be separately incorporated, but all have their own governing boards, some of which
            share control with the national office. The charity may have statewide affiliates that perform functions at
            the state level. With this structure, there is usually a fund sharing or dues formula between the local
            affiliates and the national office.
          </li>
        </ol>
        <Callout label="Caution">
          <p>
            The bottom line for you is that, depending on the organization's structure, the local affiliate may carry out
            different activities from those of the national office. It is important to inquire about this difference. In
            addition, donors may want to identify how much of a local affiliate's contributions are spent on local
            programs.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>When considering a donation to a local chapter, it is wise to check out the chapter separately.</p>
        </Callout>
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

export default function GivingWisely() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/making-charitable-contributions"
      page="Charitable Contributions"
      title={
        <>
          Charitable Contributions: <em>How To Give Wisely</em>
        </>
      }
      lead="Since charities ask for larger and more frequent donations from the public these days, soliciting by mail, telephone, television, and radio, for example, they should be checked out before you donate money or time. Here are some tips on how to maximize your charity dollar and avoid scams."
      sections={sections}
      numbered={false}
    >
      <p>Here are some basic, common-sense suggestions for avoiding rip-offs in making charitable contributions:</p>
      <ul>
        <li>
          Do not contribute cash. All contributions should be in the form of a check or money order made out to the
          charity never to the individual soliciting the donation.
        </li>
        <li>
          Do not be misled by a charity that resembles or mimics the name of a well-known organization—all charities
          should be checked out.
        </li>
        <li>
          Ignore pressure to donate immediately. Wait until you are sure that the charity is legitimate and deserving of a
          donation.
        </li>
        <li>
          When appropriate, ask for written descriptions of the charity's programs and/or finances, especially if the
          intended contribution is substantial.
        </li>
        <li>
          If you have any doubt about the legitimacy of a charity, check it out with the local charity registration office
          (usually a division of the state attorney's general office) and with the Better Business Bureau (BBB).
        </li>
      </ul>
      <RelatedGuide guide={related([79, 'Fraudulent Charities: How To Protect Yourself'])}>
        Please see the Financial Guide:
      </RelatedGuide>
      <Callout label="Tip">
        <p>
          You should, of course, keep receipts, canceled checks and bank statements so you will have records of your
          charitable giving at tax time.
        </p>
      </Callout>
      <RelatedGuide guide={related([78, 'Advanced Charity Techniques: Maximizing Your Deduction'])}>
        Please see the Financial Guide:
      </RelatedGuide>
    </GuideArticle>
  );
}
