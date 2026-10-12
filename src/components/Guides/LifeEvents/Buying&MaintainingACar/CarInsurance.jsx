import { Fragment } from 'react';
import GuideArticle, { ArticleTable, Blank, Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=43 (Car Insurance: 10 Cost-Cutters To Save You
// Money), word for word. Back-to-top anchors omitted (handled by layout). "driver's;" is
// "driver(s);", hyphens used as dashes are now dashes, the Insurance Information Institute link
// goes to its current auto insurance page (the old one no longer exists), and the "Planning Aid",
// "Tip" and "Note" boxes keep the library's labels. The Auto Information Checklist keeps its blanks.
// Address: /guides/life-events/buying-and-maintaining-a-car/car-insurance (articlePages in
// src/data/guides.js). The guide's earlier addresses under Buying Insurance and Preparing for
// College redirect here.

const related = guide('life-events.php');
const external = { target: '_blank', rel: 'noopener noreferrer' };

// The Auto Information Checklist: each group's heading, then its lines.
const checklist = [
  {
    heading: 'Automobile Information',
    lines: [
      'Year',
      'Manufacturer',
      'Model',
      'Body Style',
      'Vehicle ID No.',
      "City/State/Zip For Car's Location",
      'Total miles driven per year',
    ],
  },
  {
    heading: "Vehicle's Use",
    lines: [
      'Miles driving to & from work',
      'Miles driving to & from school',
      'Miles driving for business',
      'Miles driving for farming',
    ],
  },
  {
    heading: (
      <>
        <strong>Driver Information</strong> (for each driver to be insured)
      </>
    ),
    key: 'Driver Information',
    lines: [
      'Name',
      'Relationship to Applicant',
      'Date of Birth',
      'Sex',
      'Marital Status',
      'Occupation',
      'Moving violation convictions in past three (3) years (be ready with details).',
      'Accidents in past three (3) years.',
    ],
  },
];

const sections = [
  {
    id: 'comparison-shop',
    title: '1. Comparison Shop',
    body: (
      <>
        <p>
          Do not assume that every insurance company charges the same rates. With several thousand different auto
          insurers competing for your dollar, you can save from 30 to 50 percent just by comparing costs. Costs are
          usually based on factors such as the age, gender, and driving record of the vehicle's driver(s); the state of
          residence; the age and value of the vehicle; and the frequency and purpose of the vehicle's use.
        </p>
        <p>
          First, contact the insurance regulating body in your state and find out whether they provide a free pamphlet
          that ranks insurers by price. Many state insurance departments do this. Obtaining this pamphlet will save you a
          lot of time on the phone asking for price quotes. If no pamphlet is available, get quotes from independent
          agents (those who represent several insurance companies) and from "direct writers." Direct writers sell
          directly to the public and not through agents. You may save about 10 percent because you are not covering an
          agent's commission.
        </p>
        <p>
          When calling an insurance company, ask if the insurer is a mutual company, i.e., one that is owned by its
          policyholders; if so, ask what percentage of its premiums are returned to policyholders. You may find, for
          example, that one company's premiums are higher than those of some other companies, but that it pays annual
          dividends of 18 to 20 percent to policyholders, which reduce your insurance costs.
        </p>
        <p>
          In addition to asking insurance agents and insurance companies, be sure to ask colleagues and friends about
          their carriers. You might also look on the Internet, review consumer guides, and check with your state
          insurance department.
        </p>
        <Callout label="Planning Aid">
          <p>
            For independent advice on how to shop for car insurance and which companies offer lower rates, see{' '}
            <a href="https://www.consumerreports.org/" {...external}>
              Consumer Reports Online.
            </a>
          </p>
        </Callout>
        <p>
          It is important not to neglect factors other than price. Although quality personal service may cost a bit
          more, it provides added conveniences, so talk to a number of insurers to get a feel for the quality of their
          service. Ask them how you can lower your costs.
        </p>
        <Callout label="Tip">
          <p>
            Be sure to check the financial ratings of carriers. Check them out in a ratings service company such as
            Moody's, and then supplement your review by calling your state insurance department for further information.
            Some state agencies will supply you with the number of justified complaints that have been made about
            insurers.
          </p>
        </Callout>
        <Callout label="Note">
          <p>
            In some states, car owners with good driving records cannot be turned away by the insurance company of their
            choice. On the other hand, an insurance company can deny you coverage or charge you substantial premiums if
            you have a poor driving record.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'choose-coverage',
    title: '2. Choose Your Coverage Carefully',
    body: (
      <>
        <p>
          Although certain minimum coverages are mandatory in most states, the amounts of such coverage vary among
          policies. Most coverages are discretionary, therefore, you should choose your coverage carefully to avoid being
          over insured, resulting in unnecessary premium costs. For those who are not familiar with auto insurance
          policies, all drivers are required to have the following basic coverages:
        </p>
        <ul>
          <li>
            <strong>Liability</strong>—covers physical injuries to other people, including compensation for expenses
            that might arise from such injuries, and damage to other people's property.
          </li>
          <li>
            <strong>Comprehensive and collision</strong>—covers damage to your car due to collision or overturning,
            fire, flooding, or theft (there is usually a deductible).
          </li>
          <li>
            <strong>Uninsured (or underinsured) motorist</strong>—covers the expenses of an accident if the other driver
            has insufficient insurance.
          </li>
          <li>
            <strong>Medical</strong>—protects you against medical costs for injuries to you and other riders in the car.
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
          The amount of coverage you choose will depend on the state's minimum requirements, the replacement cost of your
          vehicle, and how much medical coverage you already have under other policies.
        </p>
      </>
    ),
  },
  {
    id: 'higher-deductibles',
    title: '3. Consider Higher Deductibles',
    body: (
      <>
        <p>
          It may pay to absorb the cost of fender-benders yourself. In other words, get the highest deductible you can
          afford. If you absorb the cost of small claims and the insurance company covers the large ones, it makes a huge
          difference in your premium. For example, raising your deductible from $100 to $500 will reduce your premiums
          by 10 to 20 percent and raising it to $1,000 will save 25 to 30 percent.
        </p>
        <Callout label="Tip">
          <p>
            Do not file a claim for a minor accident. If the damage costs a couple of hundred dollars in repairs, pay for
            it yourself. The expense will be more than offset by the rise in your insurance rates that will occur when you
            file a claim.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'older-cars',
    title: '4. Drop Collision And Comprehensive On Older Cars',
    body: (
      <>
        <p>
          You may wish to drop collision and/or comprehensive coverage on older cars. (Collision coverage takes care of
          the cost of repairing your car if you are in an accident, regardless of who's at fault; comprehensive pays if
          your car is stolen or damaged by fire, flood, hail or wind.) If your car is not worth much, why pay a premium
          for repairs on a vehicle you will probably replace if it's badly damaged? Collision damage for an older car can
          cost more than the car is worth.
        </p>
        <Callout label="Tip">
          <p>
            Drop collision if your car is worth less than $2,000 or if your premium is equal to 10 percent or more of the
            value of your car. But remember that you generally can't drop collision until your auto loan is paid off.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            Check the value of your old car in the "National Automobile Dealers Association Official Used Car Guide,"
            known as "The Blue Book" (auto dealers, banks and libraries have copies) or on the Internet, a faster, more
            efficient procedure.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'low-profile-car',
    title: '5. Buy A Low Profile Car',
    body: (
      <>
        <p>
          Before you buy a new or used car, check into insurance costs. Cars that are expensive to repair or that are
          favorite targets for thieves have much higher insurance costs.
        </p>
        <p>
          Not surprisingly, the more expensive the car is, the more expensive the insurance will be. Cars that thieves
          love include Porsches, Jaguars, BMWs and sports models, and in general, they are more costly to insure. The
          latest study shows that it costs three to four times as much to insure a Porsche as a Ford. If you buy a used
          car, insurance will be significantly lower.
        </p>
        <RelatedGuide guide={related([62, 'Your Next Car: Should You Buy Or Lease?'])}>
          Please see the Financial Guide
        </RelatedGuide>
        <Callout label="Tip">
          <p>Call your insurance company or agent before buying a car and ask about the costs for several different models.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'duplicate-medical',
    title: '6. Avoid Duplicate Medical Coverage',
    body: (
      <p>
        If you have an adequate comprehensive health insurance plan, you should consider dropping medical expense
        coverage from your auto insurance policy. This could lower your premium by up to 40 percent.
      </p>
    ),
  },
  {
    id: 'discounts',
    title: '7. Maximize Discounts',
    body: (
      <>
        <p>
          Most insurance companies will reduce premiums 10 to 20 percent for some or all of these situations. However,
          you may have to bring up the subject with your agent.
        </p>
        <ul>
          <li>Automatic seat belts and air bags</li>
          <li>Anti-lock brakes</li>
          <li>Insuring more than one car</li>
          <li>No accidents in three years</li>
          <li>No accidents ever</li>
          <li>Drivers over 50 years of age</li>
          <li>Driver training courses</li>
          <li>Anti-theft devices</li>
          <li>Good grades for students</li>
          <li>Low mileage discounts</li>
          <li>Insuring your home or apartment with the same company</li>
          <li>College student living at least 100 miles away from home without a car on campus</li>
          <li>Not smoking</li>
          <li>Not drinking</li>
          <li>Serving in the armed forces (past or present)</li>
          <li>Carpooling</li>
          <li>Ignition cutoff system and/or a hood or wheel-locking device</li>
          <li>Being a doctor, lawyer, farmer, or member of a profession that the insurance company regards as a good risk</li>
          <li>Being female and the only driver in the household</li>
          <li>Renewing for longer than a year</li>
        </ul>
      </>
    ),
  },
  {
    id: 'collect-benefits',
    title: "8. Collect All Of The Benefits You're Entitled To",
    body: (
      <>
        <p>
          Here are some tips for making sure that you obtain a fair settlement and obtain payment on a claim as quickly as
          possible.
        </p>
        <ul>
          <li>
            Start a file on the accident immediately. Put into it hospital bills, police accident reports, and copies of
            claims you have submitted.
          </li>
          <li>
            Where practical, write a follow up letter summarizing any phone conversations with an insurance company
            representative. Include the date of the conversation and the name of the person spoken to. Put a copy of the
            letter in the file.
          </li>
          <li>
            If it is taking a long time to obtain your settlement, check your policy to see whether interim rental car
            expenses are covered. If so, rent a car. The insurer will be motivated to speed things along to avoid
            incurring this cost.
          </li>
          <li>
            If you feel the company is being unreasonable—is delaying or not acting in good faith—make a complaint to
            your state's insurance regulator.
          </li>
          <li>If you are getting nowhere, and the claim is substantial, consider consulting an attorney.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'repair-networks',
    title: '9. Use Car Repair Networks',
    body: (
      <>
        <p>
          The Direct Repair Program, or DRP, is a type of "managed care" approach to getting your car repaired, available
          from many major insurers. The idea behind DRP's is that they will save insurers money by cutting car rental
          periods for loaners, by eliminating the need for adjusters and by taking advantage of discounts on parts and
          labor. Some of these savings should be passed on to you. In some cases, insurers have been known to take up to
          20 percent off premiums for collision/damage coverage.
        </p>
        <p>
          Whether most people will save much with a DRP is unclear. However, if you have a busy schedule, the DRP's
          advantage is that it will certainly save you time. In addition, it can take the stress out of filing a claim.
        </p>
        <Callout label="Tip">
          <p>
            Insurers seldom advertise their DRP's, so you will have to ask. Then get a list of repair shops near you.
            Skip the plan if you have to travel too far to an approved garage.
          </p>
        </Callout>
        <p>
          The DRP plan lets you choose between using a prescreened network of repair shops or your own mechanic. The
          repair shops participating in the network have already negotiated agreements with the insurance company. Use
          one of them and the insurance company will cover all costs except the deductible. Without this program, the old
          rules apply: you get the best estimate and then hope your insurer will pay.
        </p>
        <p>
          The great advantage is that you do not have to shop for estimates because the garage is authorized by the
          insurer to do the repairs. Some even loan you a car while repairs are being done. And, because you do not have
          to wait for a claims adjuster, you will probably get your car back sooner. Sometimes the garage or the insurer
          also guarantees the repairs for as long as you own the car.
        </p>
        <p>Before signing up for a DRP, get answers to these questions:</p>
        <ul>
          <li>Will I get a break on my premiums or a lower deductible on collision?</li>
          <li>Are eligible repair shops nearby?</li>
          <li>What if I have an accident while traveling out of state?</li>
          <li>For how long is the repair work guaranteed?</li>
          <li>Will I get a free loaner while repairs are done?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'drive-carefully',
    title: '10. Drive Carefully And Take Your Car Key',
    body: (
      <p>
        Finally, at the risk of being obvious, drive carefully. Accidents can greatly increase your premiums as well as
        cause the insurance company to refuse to renew (or, in serious cases, to cancel) your policy. And don't forget to
        take your car key when leaving your car: a car is stolen every 19 seconds in the U.S. and over 20 percent have
        the key in the ignition.
      </p>
    ),
  },
  {
    id: 'checklist',
    title: 'Auto Information Checklist',
    body: (
      <>
        <p>When calling insurers to request price quotes, this checklist of information will come in handy.</p>
        <ArticleTable label="Auto Information Checklist">
          <tbody>
            {checklist.map((group) => (
              <Fragment key={group.key ?? group.heading}>
                <tr className="is-group">
                  <td colSpan={2}>{group.key ? group.heading : <strong>{group.heading}</strong>}</td>
                </tr>
                {group.lines.map((line) => (
                  <tr key={line}>
                    <td>{line}</td>
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
    id: 'learn-more',
    title: 'Learn More',
    body: (
      <>
        <p>For free brochures on buying and insuring cars, contact:</p>
        <address className="article-address">
          <strong>
            <a href="https://www.iii.org/insurance-types/auto" {...external}>
              The Insurance Information Institute
            </a>
          </strong>
          <span>110 William Street</span>
          <span>New York, NY 10038</span>
          <span>Tel. 212-346-5500</span>
        </address>
      </>
    ),
  },
];

export default function CarInsurance() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/buying-and-maintaining-a-car"
      page="Car Insurance"
      title={
        <>
          Car Insurance: <em>10 Cost-Cutters To Save You Money</em>
        </>
      }
      lead="The amount of money you spend for car insurance can vary dramatically depending on the insurance company you choose, the coverage you want and the kind of car you drive. Are you spending more than you need to on insurance premiums? This Financial Guide will help you get the most for your car insurance dollar."
      sections={sections}
      numbered={false}
    >
      <p>
        All that is required to cut car insurance costs is a little of your time. Here are 10 cost-cutting suggestions
        for lowering your auto insurance costs.
      </p>
    </GuideArticle>
  );
}
