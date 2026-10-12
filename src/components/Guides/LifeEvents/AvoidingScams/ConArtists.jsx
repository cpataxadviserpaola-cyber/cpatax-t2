import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=80 (Con Artists: How To Spot and Stop Them), word
// for word. Back-to-top anchors omitted (handled by layout). Double hyphens are now dashes, the
// "Tip:" lead-ins are the boxes' labels, the agencies' details are address blocks, and links use
// https. The National Futures Association's phone number is the library's ("321-781-1300").
// Address: /guides/life-events/avoiding-scams/con-artists (articlePages in src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'victims',
    title: 'Who Are The Victims?',
    body: (
      <>
        <p>
          Anyone can fall victim to a con game, even someone who thinks they are too intelligent or sophisticated to be
          conned.
        </p>
        <p>
          Many victims share certain characteristics. Often, but certainly not always, they are older, female, and live
          alone. They trust others and either need or want more income. Loneliness, willingness to help and a sense of
          charity are characteristics a con artist will exploit to gain a victim's cooperation.
        </p>
        <p>
          The con artist exploits his victim's life insurance benefits, pensions or annuities, retirement nest eggs, home
          equity, or other assets. And he will usually have the willing cooperation of his victim.
        </p>
      </>
    ),
  },
  {
    id: 'buzz-words',
    title: 'Buzz Words And Tip-Offs',
    body: (
      <>
        <p>
          It is difficult to spot a con artist by his looks alone. But his words or expressions often give him away.
          These buzzwords include the following. A red flag should go up immediately when you hear these:
        </p>
        <p>
          <em>It's free!</em> Few things are really free. If you are told it's a free vacation, free cellular phone, free
          gift, investigate it. What else do you have to do to get the "freebie?" Pay shipping and handling charges? A
          gift tax or redemption fee? Get yourself to some distant destination? Sign up for a month or two of service?
          Buy three and get the fourth free?
        </p>
        <p>
          <em>It's 50 percent off</em>. Off of exactly what? The regular retail price or the manufacturer's suggested
          price? The bulk price? The sticker price? Ask for written verification of the original price.
        </p>
        <p>
          <em>It's a going-out-of-business sale</em>. Stores along parts of Fifth Avenue in Manhattan have been going out
          of business for years...and are still in business. Be particularly cautious in the crowded tourist and shopping
          sections of any major city or resort. Even when a company is honorably closing its doors, they could be posting
          artificially high prices and then marking them down. Their incentive to unload merchandise is strong. If you
          find what you believe is a good deal, read the warranty carefully—if something goes wrong with your CD player or
          refrigerator, you cannot take it back if the store is closed. But can you take the item to a service center or
          other designated repair place?
        </p>
        <p>
          <em>It's factory to you. We match lower prices. It's the lowest price in town. You have been specially chosen</em>
          . These are more often than not just come-ons to get you into the store. Will you really shop around to make
          certain it is the lowest price in town? Will you really ask management to lower the price because another store
          has a better deal? You need time and assertiveness to make these deals really work.
        </p>
        <p>
          <em>You've just won!</em> Sweepstakes and vacation prizes cram everyone's mailbox. Some are real, but many are
          not. If you are asked to pay a fee in advance in order to be a possible winner, don't grab the bait. This
          practice is known as an illegal lottery. And those low-cost vacation trips generally come with extra charges or
          difficult-to-meet conditions; the Federal Trade Commission is constantly issuing warnings about them. You may be
          asked to join a travel club, be charged extra for in-season rates, or get airfare only one way. Be sure to
          inquire.
        </p>
        <p>
          <em>Work at home and make a fortune</em>. Some of these offers are legitimate, but there are also hundreds that
          are pyramid schemes requiring you to make a high initial investment that you are unlikely to ever get back or
          requiring you to bring a number of other people into the business. A recent deal that swept the country involved
          sending $5 for information about stuffing envelopes at home. Once you did that, you were asked for $200 to $500
          for supplies, and then another $25 or $50 for something else. . .the pyramid, made up of your money, simply grew
          higher and higher.
        </p>
        <p>
          <em>We'll get you money for your down payment</em>. New home buyers are ripe for this one. The caller promises
          you money for a pre-paid fee, which is often an outrageous amount—$1,000 or more. Later on, he gets back to you
          with the surprising news that he just couldn't get you credit. Now you're out the $1,000 and no closer to buying
          the house.
        </p>
        <p>
          <em>These coins will put your child through college</em>. One year the Pennsylvania Attorney General's office
          received over 300 complaints from people who had lost money on phony coin deals; the average loss per person was
          $10,000. The coins were never delivered. We do not wish to discourage you from buying legitimate coins; just
          make sure to use a reputable dealer.
        </p>
        <p>
          <em>We have an IRS-endorsed retirement plan</em>. Phony telemarketers have promised people a retirement with an
          IRS-approved, IRS-endorsed plan. To set the record straight, the IRS does not endorse anything. Don't put your
          money anywhere but the bank, mutual fund or brokerage firm where you have an established IRA.
        </p>
        <p>
          <em>Cash only</em>. Why is cash necessary for a proposed transaction? Why not a check?
        </p>
        <p>
          <em>Secret plans</em>. Why are you being asked not to tell anyone?
        </p>
        <p>
          <em>Get rich quick</em>. Any scheme should be carefully investigated.
        </p>
        <p>
          <em>Something for nothing</em>. A "retired" swindler once said that any time you are promised something for
          nothing, you usually get nothing.
        </p>
        <p>
          <em>Contests</em>. Make sure they are not "come-ons" to draw you into a money-losing scheme.
        </p>
        <p>
          <em>Haste</em>. Be wary of any pressure that you must act immediately or lose out.
        </p>
        <p>
          <em>Today only</em>. If something is worthwhile today, it is likely to be available tomorrow.
        </p>
        <p>
          <em>Too good to be true</em>. Such a scheme is probably neither good nor true.
        </p>
        <p>
          <em>Last chance</em>. If it is a chance worth taking, why is it offered on such short notice?
        </p>
        <p>
          <em>Left-over material</em>. Left-over materials might also be stolen or defective.
        </p>
        <p>
          In fact, any cold call trying to sell you a half-acre ranch in some faraway state, aluminum siding, a new
          chimney flue, or even tax shelters, cattle, or anything else you know nothing about, should set off alarms.
        </p>
        <p>
          <em>We can clean up your credit card debt</em>. The latest version of this scam claims to give you a new credit
          report within 30 days for a flat fee. However, after paying for the service, the scam artists call back,
          informing you that they couldn't get the job done. Only you can repair your credit report. Also, watch out for
          those who tell you that by obtaining a new Taxpayer Identification Number or TIN, you get a new credit report.
          The TIN is your Social Security number.
        </p>
      </>
    ),
  },
  {
    id: 'where-they-operate',
    title: 'Areas In Which Con Artists Operate',
    body: (
      <>
        <p>
          The possibilities are infinite, but some of the more common con games you should be aware of involve the
          following (some of which are described in more detail below):
        </p>
        <ol>
          <li>
            <em>Home improvement</em>: Home repair or improvements you don't need that are recommended by a phony city
            inspector, or termites or pests you don't have.
          </li>
          <li>
            <em>Bank</em>: A false bank examiner, or a pigeon drop (false bank employee who takes your deposit or "tests
            the honesty of bank employees" and thereby gets his or her hands on your cash).
          </li>
          <li>
            <em>Investment</em>: Franchises, vending machines, land frauds, theft of inventions, securities investments,
            work-at-home.
          </li>
          <li>
            <em>Postal frauds</em>: Chain letters, magazine subscriptions, unordered merchandise, correspondence courses.
          </li>
          <li>
            <em>Others</em>: Bait and switch, charity rackets, computer dating, debt consolidation, contracts, dance
            lessons, freezer plans, psychic fraud, fortune tellers, health clubs, job placement, lonely hearts, medical
            quackery, missing heirs, referral sales, talent scouts, pyramid schemes, fake officials.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'con-games-described',
    title: 'Some Successful Con Games Described',
    body: (
      <>
        <p>
          Most successful cons are modern versions of old schemes. For example, the old "salting the gold mine" scheme is
          still being practiced, but today's salting occurs in living rooms rather than abandoned mines.
        </p>
        <p>
          In the old ruse, mine owners would place a few gold nuggets in used-up mines so they could sell them for
          inflated profits. In one recent scheme, a con artist bought six color television sets at the regular price from
          a retail store, and then sold them, still in their cartons, to six prominent local persons for one-fifth of their
          original price. Later, he hired several high school students as telephone solicitors to sell carloads of TV sets
          purchased new from a bankrupt retail chain. When potential customers balked, the con artist used as references
          the original six customers who had been salted. Before the police were alerted, he collected almost $60,000.
        </p>
        <p>
          The old "bank examiner" scheme still exists, and it is working well, particularly among older widows. In this
          scheme, the con artist, posing as a bank examiner, asks the victim to help him test the honesty of bank
          employees by withdrawing substantial funds. When the funds are handed over to the con artist for "examination,"
          he issues the victim a worthless receipt and disappears.
        </p>
        <p>
          Postal authorities warn against mail-order swindles, such as phony work-at-home schemes requiring cash deposits
          or payments. Among all con-game activity, these are probably the most active and productive for the con artist
        </p>
        <p>
          The most insidious scam involves the perpetrator offering you false legal assistance after he has already
          swindled you. For instance, you have already lost money in an illegitimate deal and you get a call from someone
          posing as a federal official or lawyer who claims he can get your money back, for a fee or a percentage of the
          total amount.
        </p>
      </>
    ),
  },
  {
    id: 'securities-con',
    title: 'Five Questions That Will Reveal A Securities Con',
    body: (
      <>
        <p>Here are five simple questions that will expose even the most clever of con artists.</p>
        <ol>
          <li>
            <em>How did you get my name?</em> If you fail to get a believable answer, you can assume it was from the phone
            book, which suggests a randomness in the selection of your name that should make you suspicious.
          </li>
          <li>
            <em>What risk is involved?</em> You know that every investment carries some risk and a 100% fully guaranteed
            deal does not exist.
          </li>
          <li>
            <em>Can you send me written information?</em> Scamsters would rather hang up and risk losing you than put
            something in writing. They often try to get around this question by saying there isn't time.
          </li>
          <li>
            <em>Will you explain your offering to my lawyer?</em> You will either be told there isn't time, or the caller
            will ask for your lawyer's address and never send anything. You can, of course, check this out by asking your
            lawyer if he or she has been contacted by this person.
          </li>
          <li>
            <em>Can you give me references?</em> Follow up on any you are given.
          </li>
        </ol>
        <Callout label="Tip">
          <p>Write down the answers you receive; they may amaze you.</p>
        </Callout>
        <Callout label="Tip">
          <p>
            If by some miracle you are satisfied with the answer to all five questions, then make two phone calls, to: The{' '}
            <a href="https://www.fraud.org/" {...external}>
              Fraud.org, a project of the National Consumers League
            </a>{' '}
            (800-822-0416) and the{' '}
            <a href="https://www.nasaa.org/" {...external}>
              North American Securities Administrators Association
            </a>{' '}
            (202-737-0900). They will run the person's name through their systems to see if any complaints have been filed
            against him or if any SEC violations are on record. Details on both groups are given at the end of this
            article.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'ten-steps',
    title: 'Ten Steps For Avoiding Scams',
    body: (
      <>
        <p>
          <strong>Here are 10 steps you can take to avoid becoming the victim of a con artist:</strong>
        </p>
        <ol>
          <li>
            <em>Don't let yourself be hurried</em>. No matter what you are told, almost every good deal will remain a good
            deal for at least a week. The small percentage of good deals that will not be available tomorrow is not worth
            the risk needed to find out. There may be times when you will want to make a prompt decision, but not when it
            is an irrevocable financial commitment to buy a product or invest in something you are not familiar with from a
            caller you don't know. Purchase decisions should never be made under pressure.
          </li>
          <li>
            <em>
              Always ask for information by mail about the product, service, investment or charity and about the
              organization selling it
            </em>
            . For legitimate firms, providing written information should not be a problem. But con artists will not want
            to give you time to consider the legitimacy of their offer, may not have written material available, or may not
            want to risk a run-in with legal or regulatory authorities by putting fraudulent statements in writing. Always
            insist on having enough time to study any information provided before being contacted again or agreeing to meet
            with anyone. Certain high-pressure telephone calls are solely for the purpose of convincing you to meet with an
            even higher-pressure salesperson in your home.
          </li>
          <li>
            <em>Do not make any investment or purchase you don't fully understand</em>. Unless you fully understand what
            you are buying or investing in, you can be burned. Swindlers seek out individuals who do not know what they
            are doing; often attempting to flatter them into thinking they are making an informed decision.
          </li>
          <li>
            <em>Ask what state or federal agencies the firm is regulated by and/or is required to be registered with</em>.
            If you get an answer, ask for a phone number or address to verify it. If the firm says it is not subject to any
            regulation, increase your level of caution.
          </li>
          <li>
            <em>Check out the organization</em>. Swindlers want you to assume the information they provide is accurate.
            They know most people never bother to follow check references. It is far better to contact the relevant agency
            and obtain the information while you still have your money.
          </li>
          <li>
            <em>
              If an investment or major purchase is involved, request that information also be sent to your accountant,
              financial advisor, banker, or attorney for evaluation
            </em>
            . Swindlers do not want you to seek a second opinion. Their reluctance or evasiveness could be your tip-off.
          </li>
          <li>
            <em>Ask what recourse you would have if you make a purchase and are not satisfied</em>. If there is a guarantee
            or refund provision, be sure to get it in writing, and be satisfied that the business will stand behind its
            guarantee before you make a final financial commitment.
          </li>
          <li>
            <em>Beware of testimonials that you may have no way of investigating</em>. They may involve nothing more than
            someone being paid a fee to speak well of a product or service.
          </li>
          <li>
            <em>
              Don't provide personal financial information over the phone unless you are absolutely certain the caller has
              a bona fide need to know
            </em>
            . That goes especially for your credit card number and bank account information. The only time you should give
            anyone your credit card number is when you have decided to make a purchase and want to charge it. If someone
            says they will send a bill later, but they need your credit card number in the meantime, be cautious; first,
            make certain you are dealing with a reputable company.
          </li>
          <li>
            <em>If necessary, hang up or walk away</em>. If you are simply not interested, if you become subject to
            high-pressure sales tactics, if you cannot obtain the information you want or get evasive answers, or if you
            hear your own better judgment whispering that you may be making a serious mistake, just say goodbye.
          </li>
        </ol>
        <p>
          The FTC (Federal Trade Commission) offers these tips to <strong>avoid fraudulent vacation offers</strong>:
        </p>
        <ul>
          <li>
            Be wary of "great deals" and low-priced offers. Few legitimate businesses can afford to give away products of
            real value.
          </li>
          <li>Don't be pressured into buying. A good offer today should be available tomorrow.</li>
          <li>Ask detailed questions.</li>
          <li>Get all the information in writing before you buy anything.</li>
          <li>Don't give your credit card number over the phone unless you know the company.</li>
        </ul>
        <p>
          The FTC has published a free brochure, Telemarketing Travel Fraud, to help you avoid these scams. For a copy,
          contact the agency at 1-877-FTC-HELP, or see its Website at{' '}
          <a href="https://www.ftc.gov/" {...external}>
            http://www.ftc.gov
          </a>
          , and click on "Consumer Protection."
        </p>
      </>
    ),
  },
  {
    id: 'telemarketing-fraud',
    title: 'Some Specific Suggestions For Telemarketing Fraud',
    body: (
      <>
        <p>
          Most telephone sales calls are from legitimate businesses. But wherever honest firms search for new customers,
          so do swindlers. Phone fraud is a multi-billion dollar business that involves selling everything from bad or
          non-existent investments to the peddling of misrepresented products and services. Everyone who has a phone is a
          prospect; whether you become a victim is largely up to you.
        </p>
        <p>
          There is no way to determine whether a sales call is on the up and up simply by talking on the phone. No matter
          what questions you ask or how many you ask, skilled swindlers have ready answers. For this reason, sales calls
          from persons or organizations that are unknown to you should always be checked out before you actually buy or
          invest. Legitimate callers have nothing to hide.
        </p>
        <p>
          Phone swindlers are likely to know more about you than you know about them. Depending on where they got your
          name in the first place, they may know your age and income, health and hobbies, occupation and marital status,
          education, the home you live in, what magazines you read, and whether you've bought by phone in the past.
        </p>
        <p>
          Even if your name came from the phone book, telephone con men and women assume that you would be interested in
          having more income, that you are receptive to a bargain, that you are basically sympathetic to people in need,
          and that you are reluctant to be rude. As admirable as such characteristics may be, they help make the
          swindler's job easier. Swindlers also exploit less admirable characteristics, such as greed.
        </p>
        <p>
          Fraudulent sales callers have one thing in common: They are skilled liars and experts at verbal camouflage, and
          their success depends on it. Many are coached to say whatever it takes by operators of the boiler rooms where
          they work at rows of phone desks, making hundreds of calls. Indeed, most victims of phone fraud think the caller
          sounded so believable.
        </p>
        <p>
          Perpetrators of phone fraud are good at sounding as though they represent legitimate businesses. They offer
          investments, sell subscriptions, provide products for homes and offices, promote travel and vacation plans,
          describe employment opportunities, solicit donations, and the list goes on. Never assume you will know a phone
          scam when you hear one. Even if you have read lists of the kinds of schemes most commonly practiced, innovative
          swindlers constantly devise new ones.
        </p>
        <p>
          Sadly, some families part with savings they worked years to accumulate on the basis of little more than a
          15-minute phone conversation, less time than they would spend considering the purchase of a household appliance.
        </p>
        <p>
          Be aware that the initiator of the phone call may be you. It is not uncommon for phone crooks to use mailings and
          advertise in reputable publications to encourage prospects to make the initial contact. So just because you may
          have written or phoned for additional information about an investment, product, or service does not mean you
          should be any less cautious about buying by phone from someone you do know.
        </p>
        <p>
          Victims of phone fraud seldom get their money back or, at best, no more than a few cents on the dollar.
          Swindlers generally do the same thing other people do when they get money; they spend it.
        </p>
      </>
    ),
  },
  {
    id: 'caller-tip-offs',
    title: 'Tip-Offs That A Caller Could Be A Crook',
    body: (
      <ul>
        <li>High-pressure sales tactics.</li>
        <li>Insistence on an immediate decision.</li>
        <li>The offer sounds too good to be true.</li>
        <li>A request for your credit card number for any purpose other than to make a purchase.</li>
        <li>
          An offer to send someone to your home or office to pick up your payment, or some other way of getting your funds
          more quickly.
        </li>
        <li>A statement that something is free, followed by a requirement that you pay for something.</li>
        <li>An investment that is without risk. Except for obligations of the U.S. Government, all investments have some degree of risk.</li>
        <li>
          Unwillingness to provide written information or references (such as a bank or name of satisfied customers in your
          area) that you can contact.
        </li>
        <li>A suggestion that you should make a purchase or investment on the basis of trust.</li>
      </ul>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Non-Profit Agencies',
    body: (
      <>
        <address className="article-address">
          <strong>
            <a href="https://www.ftc.gov/" {...external}>
              Federal Trade Commission
            </a>
          </strong>
          <span>Tel. 1-877-FTC-HELP</span>
        </address>
        <p>
          The FTC has published a free brochure, Telemarketing Travel Fraud, to help you avoid these scams. For a copy,
          contact the agency at 1-877-FTC-HELP.
        </p>

        <address className="article-address">
          <strong>
            <a href="https://www.nhtsa.gov/" {...external}>
              National Highway Traffic Safety Administration
            </a>
          </strong>
          <span>Tel. 800-424-9393</span>
        </address>
        <p>
          This agency has recall and safety information on new and used cars, child safety seats, tires, seat belts, bags,
          etc.
        </p>

        <address className="article-address">
          <strong>
            <a href="https://ustoa.com/" {...external}>
              U.S. Tour Operators Association
            </a>
          </strong>
        </address>
        <p>
          Members of the U.S. Tour Operators Association are required to post a $1 million bond to protect consumer funds.
          For information and a list of members, write:
        </p>
        <address className="article-address">
          <strong>USTOA</strong>
          <span>211 East 51st Street, Suite 12B</span>
          <span>New York, NY 10022</span>
          <span>Tel. 212-750-7371</span>
        </address>

        <address className="article-address">
          <strong>
            <a href="https://www.fraud.org/" {...external}>
              Fraud.org
            </a>
          </strong>
        </address>
        <p>Sponsored by the National Consumers League.</p>

        <address className="article-address">
          <strong>
            <a href="https://www.nasaa.org/" {...external}>
              North American Securities Administrators Association
            </a>
          </strong>
          <span>750 First Street, N.E., Suite 1140</span>
          <span>Washington, DC 20002</span>
          <span>Tel. 202-737-0900</span>
        </address>
        <p>
          Visit NASAA to find the phone number of your state's Securities Division; then, use it to check out any promoter
          or sales person trying to sell you an investment.
        </p>

        <address className="article-address">
          <strong>
            <a href="https://www.nfa.futures.org/" {...external}>
              The National Futures Association
            </a>
          </strong>
          <span>300 S. Riverside Plaza, #1800</span>
          <span>Chicago, IL 60606</span>
          <span>Tel. 321-781-1300</span>
        </address>
      </>
    ),
  },
];

export default function ConArtists() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/avoiding-scams"
      page="Con Artists"
      title={
        <>
          Con Artists: <em>How To Spot and Stop Them</em>
        </>
      }
      lead="Make sure you and your family never fall prey to the schemes and cons that pervade all aspects of American life. Learn to recognize con artists and send them on their way before parting with any of your hard-earned money."
      sections={sections}
      numbered={false}
    >
      <p>
        The successful con artist approaches victims with a nice guy approach. Behind this friendly exterior is a shrewd
        psychologist who can break down his victims' resistance to his proposals. The typical con artist has a good sense
        of timing and sincerely believes his victims deserve to be taken advantage of.
      </p>
      <p>
        Being well-informed and skeptical are your best means of protection. This Financial Guide tells you how to spot a
        scam. It provides lists of "buzzwords" used by con artists, strategies for knowing which sales pitches are
        legitimate, and ways to fight back.
      </p>
    </GuideArticle>
  );
}
