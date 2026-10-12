import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=147 (Car Insurance: Frequently Asked Questions),
// word for word. Each question is worded as in the library's answers, not its table of contents,
// except that "pay my insurance annual" reads "annually". Double hyphens and hyphens used as dashes
// are now dashes, "driver's)" is "driver(s)", the "Tip:" and "Note:" lead-ins are the boxes' labels,
// and the insurers' links use https. The library's page has no introduction, so the banner's
// opening line (`lead`) is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/buying-and-maintaining-a-car/car-insurance-faq (articlePages in
// src/data/guides.js). The FAQ's earlier address under Buying Insurance redirects here.

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'lower-costs',
    title: 'How can I lower my car insurance costs?',
    body: (
      <>
        <p>If you're trying to lower your auto insurance premiums, try using the following tactics:</p>
        <ul>
          <li>Comparison shop</li>
          <li>Take a higher deductible</li>
          <li>Drop collision damage on older cars</li>
          <li>Buy a low-profile car</li>
          <li>Check insurance costs by community when you are planning a move</li>
          <li>Do not duplicate medical coverage</li>
          <li>Pay premiums annually</li>
          <li>Inquire about discounts</li>
        </ul>
      </>
    ),
  },
  {
    id: 'coverage',
    title: 'What coverage should my auto policy include?',
    body: (
      <>
        <p>
          Everyone should have liability coverage for bodily injury and for property damage. These options will
          protect you if you injure someone else or damage property with your car. One thing to keep in mind is if
          you're in an accident and your costs exceed your coverage limits, you are responsible for the additional
          amount. That's why many motorists opt for more coverage than their state's minimum requirements.
        </p>
        <p>
          Most insurers recommend that you buy at least $100,000 per person with a $300,000 maximum for each accident
          to pay medical costs, loss of earnings, and pain and suffering. In addition, you should have at least
          $50,000 in coverage for property damage. Collision and comprehensive are essential for new cars but often
          can be dropped with an older car. They cover repairs to your car after an accident or in case of fire,
          theft, or vandalism.
        </p>
        <p>
          Uninsured motorist coverage, which protects against hit and run and people without enough insurance, is
          required in some states. If your life, health, and disability policies already protect your family, you
          might want to pass, given the choice. The same is true of medical payments coverage, which pays you in the
          case of injury and disability. For people with substantial assets, umbrella insurance is a good idea. It
          will protect you against liability judgments in excess of $1 million.
        </p>
        <p>
          Auto insurance is mandatory in every state, but coverage amounts vary among policies. At a minimum,
          however, the following areas should be covered:
        </p>
        <ul>
          <li>
            <strong>Medical:</strong> This protects you against medical costs for injuries to you and other riders in
            the car.
          </li>
          <li>
            <strong>Liability:</strong> This covers physical injuries to other people and compensation for expenses
            that might arise from such injuries. It also covers damage to other people's property.
          </li>
          <li>
            <strong>Comprehensive and collision:</strong> This covers damage to your car due to collisions or
            overturning, fire, flooding, and theft. There is usually a deductible.
          </li>
          <li>
            <strong>Uninsured (or underinsured) motorist:</strong> If there is an accident and the other driver has
            insufficient insurance, this covers the expenses of the accident.
          </li>
        </ul>
        <Callout label="Note">
          <p>
            In certain states with "no-fault" insurance laws, personal insurance protection coverage is required and
            there are some restrictions on liability lawsuits.
          </p>
        </Callout>
        <p>
          Your policy will show the total amounts of bodily injury, liability, and property damage coverage. For
          instance, a policy of $25/$50/$20 means that, in a single accident, you are covered for $25,000 for an
          individual injured, $50,000 for all persons injured, and $20,000 of property damage.
        </p>
        <p>
          The amount of coverage you choose will depend on the state's minimum requirements, the replacement cost of
          your vehicle, and how much medical coverage you already have under other policies.
        </p>
      </>
    ),
  },
  {
    id: 'claims',
    title: 'How should I handle an auto insurance claim?',
    body: (
      <>
        <p>
          Here are some tips for making sure that you obtain a fair settlement and obtain payment on a claim as
          quickly as possible.
        </p>
        <ul>
          <li>
            Start a file on the accident immediately after it occurs and put hospital bills, police accident reports,
            and copies of claims you have submitted into the folder.
          </li>
          <li>
            Each time you speak to an insurance company representative by phone, write a follow-up letter or email
            summarizing what was said. Include the date of the conversation and the name of the person spoken to. Put
            a copy of the letter or email into the file.
          </li>
          <li>
            If it is taking a long time to obtain your settlement, check your policy to see whether interim rental car
            expenses are covered. If so, rent a car. The insurer will be motivated to speed things along to avoid
            incurring this cost.
          </li>
          <li>
            If you feel the company is being unreasonable and is delaying or not acting in good faith, then make a
            complaint to your state's insurance regulator.
          </li>
          <li>If you're getting nowhere, consult an attorney.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'comparison-shop',
    title: 'Does it make sense to comparison shop for car insurance?',
    body: (
      <>
        <p>
          Don't assume that every insurance company charges the same rates. There are several thousand different auto
          insurers and all of them are vying for your business. It's possible to save as much as 30 to 50 percent by
          comparing costs.
        </p>
        <p>
          Costs are usually based on factors such as age, gender, and driving record of the vehicle's driver(s); state
          of residence; age and value of the vehicle; and frequency and purpose of the vehicle's use.
        </p>
        <p>
          First, contact the insurance regulating body in your state and find out whether they provide a free pamphlet
          that ranks insurers by price. Many state insurance departments do this. Obtaining this pamphlet will save you
          a lot of time on the phone asking for price quotes. If no pamphlet is available, then get quotes from
          independent agents (those who represent several insurance companies) or visit insurer's websites.
        </p>
        <p>You can also begin by comparing several insurers' rates such as:</p>
        <ul>
          <li>
            <strong>
              <a href="https://www.amica.com/" {...external}>
                AMICA
              </a>
            </strong>{' '}
            800-24-AMICA
          </li>
          <li>
            <strong>
              <a href="https://www.geico.com/" {...external}>
                GEICO:
              </a>
            </strong>{' '}
            Auto Insurance 800-861-8380
          </li>
          <li>
            <strong>
              <a href="https://www.erieinsurance.com/" {...external}>
                Erie Insurance:
              </a>
            </strong>{' '}
            800-458-0811
          </li>
          <li>
            <strong>
              <a href="https://www.usaa.com/" {...external}>
                USAA:
              </a>
            </strong>{' '}
            800-531-8722 (Note: USAA is limited to active-duty and former military officers and their families.)
          </li>
        </ul>
        <p>
          When calling an insurance company, ask if the insurer is a "mutual company"—one owned by its
          policyholders—as is the case with Amica. If so, ask what percentages of its premiums are returned to
          policyholders. You may find, for example, that Amica's premiums are higher than those of some other
          companies, but that it pays annual dividends of 18 percent to 20 percent to policyholders. These dividends
          reduce your insurance costs.
        </p>
        <p>
          It's also important not to neglect factors other than price. Quality personal service may cost a bit more
          but provides added conveniences, so talk to a number of insurers to get a feel for the quality of their
          service. Don't forget to ask them how you can lower your costs.
        </p>
        <Callout label="Tip">
          <p>
            Check the financial ratings of insurance companies with{' '}
            <a href="https://www.moodys.com/" {...external}>
              Moody's
            </a>
            , and then supplement your review by calling your state insurance department for further information.
            Some state insurance departments will supply you with the number of justified complaints that have been
            made about insurers.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'deductible',
    title: 'How much of a deductible should I take on my car insurance?',
    body: (
      <>
        <p>
          It may pay to absorb the cost of fender-benders yourself. In other words, get the highest deductible you can
          afford. The deductible is the dollar amount you agree to pay out-of-pocket before insurance kicks in. If you
          cover the cost of small claims and the insurance company covers the large ones, it makes a huge difference:
          raise your deductible from $100 to $500, for example, and you'll reduce your premiums by 10 percent to 20
          percent. Raise the deductible to $1,000 and you can save 25 percent to 30 percent.
        </p>
        <Callout label="Tip">
          <p>
            Don't file a claim for a minor accident when the cost to repair your vehicle is only a couple of hundred
            dollars. Picking up the cost yourself will more than offset the rise in your insurance rates that occurs
            when you file a claim.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'collision-older-cars',
    title: 'Is it worthwhile to maintain collision coverage on older cars?',
    body: (
      <>
        <p>
          Collision coverage takes care of the cost of repairing your car if you're in an accident, regardless of
          who's at fault; comprehensive pays if your car is stolen or damaged by fire, flood, hail or wind. If your car
          isn't worth much, why pay a premium for repairs on a vehicle you'll probably replace if it's badly damaged?
          Collision damage for an older car can cost more than the car is worth.
        </p>
        <p>If your car is worth a few thousand dollars it may not be cost effective to pay for this coverage.</p>
        <Callout label="Tip">
          <p>
            The rule of thumb—from the Consumer Federation of American group: Drop collision if your premium is equal
            to 10 percent or more of the value of your car. But remember that you generally can't drop collision until
            your auto loan is paid off.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Check the value of your old car in the "National Automobile Dealers Association Official Used Car Guide,"
            known as "The Blue Book." Auto dealers, banks and libraries have copies.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'kind-of-car',
    title: 'Does the kind of car I buy affect my insurance?',
    body: (
      <>
        <p>
          Before you buy a new or used car, check into insurance costs. Cars that are expensive to repair, or that are
          favorite targets for thieves, have much higher insurance costs.
        </p>
        <p>
          Not surprisingly, the more expensive the car, the more expensive the insurance. Cars that thieves
          love—Porsches, Jaguars, BMWs and sports models in general, are more costly to insure. The latest study shows
          that it costs three to four times as much to insure a Porsche as a Buick or a Ford.
        </p>
        <Callout label="Tip">
          <p>
            Call your insurance company or agent before buying a car and ask what the costs are for several different
            models.
          </p>
        </Callout>
        <p>If you buy a used car, insurance will be significantly lower.</p>
      </>
    ),
  },
  {
    id: 'address',
    title: 'Does my address affect my car insurance?',
    body: (
      <p>
        Costs tend to be lowest in rural communities and highest in cities. Additionally, rates vary within cities
        based upon the incidence of auto thefts and damage within particular areas. Very often zip codes or common
        streets are used to denote where rates change. If you are planning a move to a new city, call your agent to
        find out what car insurance costs in different neighborhoods or suburbs. While differences in cost will not
        likely sway your decision as to which house to rent or buy, doing this may give you an idea which areas you
        should consider or avoid.
      </p>
    ),
  },
  {
    id: 'payment-schedule',
    title: 'Does it make a difference if I pay my insurance annually, semi-annually or monthly?',
    body: (
      <p>
        Installment plans are convenient but wind up costing more because of fees or interest charges. You are usually
        better off paying the entire insurance bill when you receive it.
      </p>
    ),
  },
  {
    id: 'discounts',
    title: 'What types of auto insurance discounts are available?',
    body: (
      <p>
        Most insurance companies will reduce premiums 10 percent to 20 percent for various reasons, such as alarm
        systems, airbags, anti-lock brakes, insuring more than one car, and bundling home and auto insurance. There are
        also safe driver discounts and discounts if you live close to work. Your agent may not think to advise you of
        all of the available discounts, so it pays to ask your agent for a list of all discounts available and what
        requirements must be met to take advantage of them.
      </p>
    ),
  },
  {
    id: 'car-theft',
    title: "What's the most cost-effective way to prevent car theft?",
    body: (
      <>
        <p>
          The extent to which you go to protect yourself from car theft will depend on (1) how attractive your car is
          to thieves, and (2) how much money you're willing to spend. You can use the following methods:
        </p>
        <h3>Common-sense (no cost) measures</h3>
        <p>
          First, always park in safe, well-lighted, well-patrolled areas, don't leave your key in the ignition, and
          make sure to lock all the doors and close the windows.
        </p>
        <p>
          Also, don't leave items that might be attractive to thieves in the car. Thieves may break a window, even
          risking a car alarm, to get to a briefcase, a pocketbook, CDs, a leather jacket, or a pair of sneakers. If
          you've been out shopping, lock your purchase in the trunk. Don't leave them in plain site as temptation for
          would-be thieves.
        </p>
        <h3>Deterrent devices</h3>
        <p>
          These are devices, such as steering wheel locks and alarm systems, intended to deter theft. We'll start with
          the least expensive options.
        </p>
        <p>
          <strong>Clubs, shields, and cuffs.</strong> These devices are fairly inexpensive, but they are ineffective
          against a determined thief, who can simply saw through the steering wheel. Therefore, if you have a car model
          that is sought after by car thieves, you'll probably need more than a club or shield. There is also a collar
          available to cover your steering column (for cars where the ignition is on the steering column).
        </p>
        <p>
          <strong>Tracking systems.</strong> There is one tracking device on the market—the LoJack system. This is a
          system that allows authorities to track your car if it's stolen.
        </p>
        <p>
          <strong>Alarm systems.</strong> If your car doesn't have a factory-installed alarm system, you can have one
          installed, or buy a model that you install yourself. Alarm systems usually include an alarm that sounds when
          the car is struck or the door or trunk is opened, lights that flash on occurrence of the same eventualities,
          and a device that disables the starter, ignition, or fuel system. When you leave the car, you set the alarm
          with a remote control device. If you choose "passive arming," the system arms itself automatically 30
          seconds after you close the door. Alarm systems have a panic button that you can press in an emergency.
        </p>
      </>
    ),
  },
];

export default function CarInsuranceFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-maintaining-a-car"
      page="Car Insurance: Frequently Asked Questions"
      title={
        <>
          Car Insurance: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about the coverage your auto policy should include, handling a claim, choosing a deductible, comparing insurers, and lowering your premiums."
      sections={sections}
    />
  );
}
