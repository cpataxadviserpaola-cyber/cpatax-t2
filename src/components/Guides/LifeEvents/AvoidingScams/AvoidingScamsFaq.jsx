import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=165 (Avoiding Scams: Frequently Asked Questions),
// word for word. Each question is worded as in the library's answers, not its table of contents,
// where two differ ("…look out for?", "…penny stock fraud?"). The hyphen used as a dash is now a
// dash, the doubled "for" in "For only for a short period" is single, the tip the library sets
// between two items of the auto mechanics list sits under the item it belongs to, the "Tip" and
// "Example" boxes keep the library's labels, and links use https. The library's page has no
// introduction, so the banner's opening line (`lead`) is written for this site, as on the other FAQ
// pages.
// Address: /guides/life-events/avoiding-scams/avoiding-scams-faq (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'spot-a-rip-off',
    title: 'How can I spot a rip-off?',
    body: (
      <>
        <p>By taking the following precautions, you can spot a scam and avoid being ripped off.</p>
        <ul>
          <li>
            Don't allow yourself to be pushed into a hurried decision. At least 99 percent of everything that's a good
            deal today will still be a good deal a week from now.
          </li>
          <li>
            Always request written information, by mail, about the product, service, investment or charity and about the
            organization that's offering it.
          </li>
          <li>
            Don't make any investment or purchase you don't fully understand. Swindlers try to convince individuals that
            they are making an informed decision.
          </li>
          <li>
            Ask what state or federal agencies the firm is regulated by, and contact the agency. If the firm says it's not
            subject to any regulation, you may want to act cautiously.
          </li>
          <li>
            If an investment or major purchase is involved, request that information also be sent to your accountant,
            financial advisor, banker, or attorney for evaluation and an opinion.
          </li>
          <li>
            Before you make a final financial commitment, ask for a copy of the refund policy and make sure it's in
            writing.
          </li>
          <li>Beware of testimonials that you may have no way of checking out.</li>
          <li>Never provide your credit card number and bank account information over the phone.</li>
          <li>
            If necessary, hang up or walk away. If you hear your own better judgment whispering that you may be making a
            serious mistake, just say good-bye.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'internet-fraud',
    title: 'What should I know about Internet fraud?',
    body: (
      <>
        <p>
          Internet crime such as identity theft and online fraud exceeded $10.3 billion in losses in 2022 according to an
          Internet Crime Complaint Center (IC3) estimate. It only gets worse every year and underscores the fact that both
          legitimate businesses and scam artists alike have equal access to the Internet. Among the 2022 complaints
          received, ransomware, business e-mail compromise (BEC) schemes, and the criminal use of cryptocurrency are among
          the top incidents reported, according their 2022 annual report.
        </p>
        <p>
          How can you avoid being snared by Internet fraud? Simple. If it sounds too good to be true, it is. Claims of
          "quick profits", "guaranteed returns", "double your investment", or "risk-free investment" probably indicate a
          fraudulent investment.
        </p>
      </>
    ),
  },
  {
    id: 'internet-scams',
    title: 'What are some of the Internet scams I should watch out for?',
    body: (
      <>
        <p>New scams appear every year, but usually with the same themes. Here are a few of them:</p>
        <p>
          <strong>Refund Scam.</strong> This is the most frequent IRS-impersonation scam seen by the IRS. In this phishing
          scam, a bogus email claiming to come from the IRS tells the consumer that he or she is eligible to receive a tax
          refund for a specified amount. It may use the phrase "last annual calculations of your fiscal activity."
        </p>
        <p>
          To claim the tax refund, the consumer must open an attachment or click on a link contained in the e-mail to
          access and complete a claim form. The form requires the entry of personal and financial information. Several
          variations on the refund scam have claimed to come from the Exempt Organizations area of the IRS or the name and
          signature of a genuine or made-up IRS executive. In reality, taxpayers do not complete a special form to obtain
          their federal tax refund because refunds are triggered by the tax return they submitted to the IRS.
        </p>
        <p>
          <strong>Lottery winnings or cash consignment.</strong> These advance fee scam e-mails claim to come from the
          Treasury Department to notify recipients that they'll receive millions of dollars in recovered funds or lottery
          winnings or cash consignment if they provide certain personal information, including phone numbers, via return
          e-mail. The e-mail may be just the first step in a multi-step scheme, in which the victim is later contacted by
          telephone or further e-mail and instructed to deposit taxes on the funds or winnings before they can receive any
          of it.
        </p>
        <p>
          Alternatively, they may be sent a phony check of the funds or winnings and told to deposit it but pay 10 percent
          in taxes or fees. Thinking that the check must have cleared the bank and is genuine, some people comply. However,
          the scammers, not the Treasury Department, will get the taxes or fees. In reality, the Treasury Department does
          not become involved in notification of inheritances or lottery or other winnings.
        </p>
        <p>
          <strong>Romance Scams.</strong> Scammers sometimes use online dating and social networking sites to try to
          convince people to send money in the name of love. In a typical scenario, the scam artist creates a fake
          profile, gains the trust of an online love interest, and then asks that person to wire money, typically to a
          location outside the United States.
        </p>
        <p>
          Warning signs of a romance or online dating scam include wanting to leave the dating site immediately and use
          personal e-mail or IM accounts, claiming feelings of instant love, planning to visit, but being unable to do so
          because of a tragic event, and asking for money to pay for travel, visas or other travel documents, medication,
          a child or other relative's hospital bills, recovery from a temporary financial setback, or expenses while a big
          business deal comes through.
        </p>
      </>
    ),
  },
  {
    id: 'credit-card-ssn',
    title: 'How can I prevent the illegal use of my credit card or Social Security number?',
    body: (
      <>
        <p>
          Criminals and con artists use many scams to target unsuspecting people who have access to money. Consumer scams
          happen on the phone, through the mail, e-mail, or over the internet. They can occur in person, at home, or at a
          business.
        </p>
        <p>
          The Consumer Financial Protection Bureau (CFPB) is a U.S. government agency that makes sure banks, lenders, and
          other financial companies treat you fairly, suggests these six tips for consumers to protect themselves from
          scams:
        </p>
        <ol>
          <li>
            <strong>Don't share account numbers or passwords for bank accounts, credit cards, or Social Security.</strong>
          </li>
          <li>
            <strong>Never pay upfront for a promised prize.</strong> It’s a scam if you are told that you must pay fees or
            taxes to receive a prize or other financial windfall.
          </li>
          <li>
            <strong>After hearing a sales pitch, take time to compare prices.</strong> Ask for information in writing and
            read it carefully.
          </li>
          <li>
            <strong>Too good to be true?</strong> Ask yourself why someone is trying so hard to give you a "great deal." If
            it sounds too good to be true, it probably is.
          </li>
          <li>
            <strong>Watch out for deals that are only "good today" and that pressure you to act quickly.</strong> Walk away
            from high-pressure sales tactics that don't allow you time to read a contract or get legal advice before
            signing. Also, don't fall for the sales pitch that says you need to pay immediately, for example by wiring the
            money or sending it by courier.
          </li>
          <li>
            <strong>Put your number on the National Do Not Call Registry.</strong> Go to{' '}
            <a href="https://www.donotcall.gov/" {...external}>
              Do Not Call Registry
            </a>{' '}
            or call (888) 382-1222.
          </li>
        </ol>
        <p>
          "Application fraud" occurs when a thief uses your name, Social Security number, address, and, perhaps, credit
          references to apply for credit. They can get much of this information from public sources (e.g., Who's Who
          Directories), from someone who has access to credit files (e.g., employees of car dealerships, department
          stores, or credit bureaus), from personal checks, or from stolen wallets.
        </p>
        <p>
          Another form of application fraud involves the interception of the preapproved credit card offers in the mail.
          The thief fills out the application and either changes the address or steals the credit card out of your mailbox
          when it arrives at your address.
        </p>
        <Callout label="Tip">
          <p>
            If you find a bill that you do not believe belongs to you on your credit report, check it out immediately.
            First, contact the creditor to find out if they have an account in your name. Ask to see a copy of the original
            application if they say you do.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'credit-clinics',
    title: 'How trustworthy are "credit clinics" and other organizations that claim to help me out of financial trouble?',
    body: (
      <>
        <p>
          Consumers with credit problems have paid millions of dollars to firms that claim they can "remove negative
          information," "clean up credit reports," and allow consumers to get credit no matter how bad the credit history.
          Consumers should beware of the following promises by credit clinics:
        </p>
        <ul>
          <li>"Based on little-known loopholes in Federal credit laws, we can show you how to clean up your credit report!"</li>
        </ul>
        <p>
          The loopholes are the provisions of the Fair Credit Reporting Act (FCRA), under which you have the right to
          challenge information in your credit report you believe incorrect.
        </p>
        <ul>
          <li>"We can show you how to remove negative information from your file including judgments."</li>
        </ul>
        <p>
          No matter how quickly you may pay off outstanding bills, creditors are under no obligation to remove negative
          information from your file.
        </p>
        <ul>
          <li>"We can get you a major credit card even if you've been through bankruptcy!"</li>
        </ul>
        <p>
          You will have to "secure" the card first by putting a deposit in the bank and getting a bank card with a credit
          limit based on a percentage of that deposit. Why should you pay the credit clinic just to provide an application
          and deposit slip?
        </p>
        <p>
          Check with your state attorney general's office to determine if your state has laws that protect consumers
          against credit clinics and contact your state Attorney General, consumer protection agency, or Better Business
          Bureau to check an organization's reputation.
        </p>
      </>
    ),
  },
  {
    id: 'government-surplus',
    title: 'How honest are ads touting "federal government surplus" sales?',
    body: (
      <p>
        Advertisements touting access to little-known sources of federal government property are simply selling the
        names and addresses of the federal government agencies, which you can get from the federal government or by
        contacting the agency's local or regional office. Furthermore, the information sold by these businesses may not
        be accurate or up-to-date. Information about federal sales programs is available for free or at low cost from the
        federal government by visiting:{' '}
        <a href="https://www.usa.gov/auctions-and-sales" {...external}>
          Government Sales and Auctions
        </a>
        .
      </p>
    ),
  },
  {
    id: 'penny-stocks',
    title: 'How can I protect myself from penny stock scams?',
    body: (
      <>
        <p>
          Penny stocks are common shares of small public companies that trade at less than $1.00 per share. They are
          considered to be highly speculative and high risk and are traded over the counter and are prime targets for
          price manipulation. Here is how a penny stock scam might operate:
        </p>
        <Callout label="Example">
          <p>
            Mrs. G got a call from Mr. S, who told her he wanted to help her out with a "little-known" investment bonanza.
            These penny stocks' prices could rise by 25 percent in a few months. After she was told to act before the
            opportunity vanished, Mrs. G invested $5,000 in the penny stocks. Result: She is still trying to get back her
            $5,000.
          </p>
          <p>
            Although she was told during the first few weeks that the stock was going up, within a month the seller was not
            returning her phone calls. She could not check the price of the stock because penny stocks are not traded on an
            exchange, but over-the-counter.
          </p>
          <p>
            Further, the price of the penny stock was not published anywhere. Mr. S's company was the only seller of these
            particular penny stocks and had been engaging in price manipulation. Eventually, Mrs. G. turned the case over to
            her attorney. Half of her $5,000 went in the markup of the penny stock's actual price and hidden commissions.
          </p>
        </Callout>
        <p>
          Penny stocks can be a legitimate investment opportunity if you learn to be alert, but with the proliferation of
          the Internet, these stocks are often quite risky for the average investor. Learn the following warning signs
          investigate before you invest.
        </p>
        <h3>Warning Sign #1: Unsolicited Telephone Calls</h3>
        <p>Beware of a salesperson who promises you quick profits with little or no risk.</p>
        <h3>Warning Sign #2: High-Pressure Sales Tactics</h3>
        <p>These tactics include the following statements by a salesperson:</p>
        <ul>
          <li>
            The salesperson has "inside" information on a stock and that you should purchase now, before the information
            becomes public
          </li>
          <li>For only a short period of time, a stock sells at a special or below market price</li>
          <li>Due to a series of increases in a stock's price, you should purchase immediately</li>
          <li>You may buy a particular stock only if you agree to buy stock of another company</li>
        </ul>
        <h3>Warning Sign #3: Inability to Sell Your Stock and Receive Cash</h3>
        <p>
          Fraudulent penny stock brokers may become inaccessible when you want to sell, or they may refuse to sell your
          stock unless you buy another one.
        </p>
      </>
    ),
  },
  {
    id: 'pyramid-schemes',
    title: 'How can I protect myself from a pyramid scheme?',
    body: (
      <>
        <p>The best way to protect yourself is to understand how pyramid schemes operate, as this example shows:</p>
        <Callout label="Example">
          <p>
            Frank L. was phoned by a friend and offered an opportunity to "get in on the ground floor" of a business
            involving selling products to the public. He was told he would get a 50 percent return on his money within a
            month and how his friend had made thousands of dollars on a $1,000 investment. Frank L. quickly accepted the
            offer and gave his friend $1,000 to buy a "distributorship" in this business.
          </p>
          <p>
            What Frank didn't know was that his friend had fallen victim to a pyramid scheme. Such schemes work as follows:
            A promoter offers investors "distributorships" at $1,000 each. The distributorships give the investor the right
            to sell other distributorships to friends and neighbors for $1,000 each, and also a right to sell some sort of
            product. Whenever an investor sells a $1,000 distributorship, he or she must give a percentage, usually half, to
            the promoter, and can keep the rest.
          </p>
        </Callout>
        <p>
          The tricky thing about pyramid schemes is that, for the first ten or twenty investors, they work. But, the
          pyramid scheme could continue to provide returns only in a world where there are infinite numbers of investors
          willing to invest $1,000, and willing (and able) to sell distributorships to others. Returns depend totally on
          new investors making an investment rather than on any business venture.
        </p>
        <p>
          Result: Because Frank had no sales ability, he was unable to unload even one distributorship, and thus the $1,000
          was lost. He is currently trying to get his money back and has reported the investment to the SEC.
        </p>
      </>
    ),
  },
  {
    id: 'ponzi-schemes',
    title: 'How can I protect myself from a Ponzi scheme?',
    body: (
      <>
        <p>
          Named for Charles A. Ponzi, who defrauded hundreds of investors in the 1920s, a Ponzi scheme pays off old
          "investors" with money coming in from new "investors."
        </p>
        <Callout label="Example">
          <p>
            Investor A gives Promoter ("P") $1,000 on P's promise to repay $1,000 plus $100 "interest" in 90 days. During
            the 90 days, P makes similar promises to Investors B and C, receiving $1,000 each from them. At the end of the
            first 90 day period, P may offer to pay A the $100 "interest" and to return the original $1,000.
          </p>
          <p>
            More likely, he will invite A to "re-invest" the $1000 plus the $100 "interest" for a similar, or higher,
            return at the end of another 90 days. Thereafter, A, believing s/he can receive a good return on the
            investment, is likely to bring other investors to P.
          </p>
        </Callout>
        <p>
          P collects a pool of money that he pays out to those wishing a return on their invested money. Eventually, P.
          either disappears with all the "investments" or reveals that the investments went "sour."
        </p>
        <p>
          A major factor in the eventual collapse of a Ponzi scheme is that there is no significant source of "income"
          other than from new investors.
        </p>
      </>
    ),
  },
  {
    id: 'travel-scams',
    title: 'How can I protect myself from travel scams?',
    body: (
      <>
        <p>
          Since travel services usually have to be paid for in advance, disreputable individuals and companies try to sell
          travel packages turn out to be different from what was presented. If you receive an offer by phone or mail for a
          free or extremely low-priced vacation trip to a popular destination (often Hawaii or Florida), there are a few
          things you should look for:
        </p>
        <ul>
          <li>Does the price seem too good to be true? If so, it probably is.</li>
          <li>Are you asked to give your credit card number over the phone?</li>
          <li>Are you pressured to make an immediate decision?</li>
          <li>
            Is the carrier simply identified as "a major airline", or does the representative offer a collection of
            airlines without being able to say which one you will be on?
          </li>
          <li>Is the representative unable or unwilling to give you a street address for the company?</li>
          <li>
            Finally, you are told you can't leave for at least two months? (The deadline for disputing a credit card
            charge is within 60 days of the charge appearing on your credit card statement and most scam artists know
            this.)
          </li>
        </ul>
        <p>
          If you encounter any of these symptoms, ask for written information and time to think it over. If they say no,
          this probably isn't the trip for you. Furthermore, if you are told that you've won a free vacation, make sure you
          don't have to buy expensive hotel arrangements in order to get it.
        </p>
        <p>
          If you are seriously considering the vacation offer, compare it to what you might obtain elsewhere. The appeal
          of free airfare or free accommodations often disguises the fact that the total price exceeds that of a regular
          package tour. Get written confirmation of the departure date. If the package involves standby or waitlist travel,
          or a reservation that can only be provided much later, ask if your payment is refundable if you want to cancel.
          If the destination is a beach resort, ask the seller how far the hotel is from the beach. Then ask the hotel.
        </p>
        <p>
          Determine the complete cost of the trip in dollars, including all service charges, taxes, processing fees, etc.
          If you decide to buy the trip, paying by credit card gives you certain legal rights to pursue a chargeback
          (credit) if promised services aren't delivered.
        </p>
      </>
    ),
  },
  {
    id: 'used-car-lemon',
    title: 'When buying a used car, how can I avoid buying a "lemon?"',
    body: (
      <>
        <p>
          Laundered lemons—used cars with serious defects, sold to unsuspecting new buyers are still being sold in
          alarming numbers. To avoid buying a "laundered lemon", take these steps.
        </p>
        <p>
          <strong>Do your research.</strong> Check Consumer Reports and Edmunds online. Both publish car reviews and are
          good sources for finding out whether a vehicle is reliable and has been trouble-free.
        </p>
        <p>
          <strong>Check for defects, repairs, and recalls.</strong> Visit the{' '}
          <a href="https://www.nhtsa.gov/recalls" {...external}>
            federal government's databases
          </a>{' '}
          to find out whether the vehicle (make and model) you're interested in has been recalled, as well as service
          bulletins, safety investigations, and owner complaints. Check with your local dealer's service department to
          verify that the problem (if there was one) was taken care of.
        </p>
        <p>
          <strong>Inspect the Vehicle.</strong> Conduct a thorough visual inspection inside and out. Look for signs of
          rust, mildew on carpeting, fluid leaks, bodywork repairs such as mismatched paint, and wear on tires. With the
          engine running check the exhaust smoke color and smell. Verify that the horn and lights are all working
          properly. Finally, have a reliable mechanic look it over. While it might cost a few bucks, he will be able to
          spot things you can't.
        </p>
        <p>
          <strong>Vehicle History Report.</strong> If you know the car's VIN (Vehicle Identification Number), visit{' '}
          <a href="https://www.carfax.com/" {...external}>
            CarFax
          </a>{' '}
          and enter it into their database to obtain a vehicle history report. The report will show you whether there are
          title problems, what the ownership history of the vehicle is, service records, and whether the vehicle has been
          involved in any accidents. The VIN is located on the driver's side dashboard.
        </p>
        <p>Also consider the following:</p>
        <ul>
          <li>
            Beware of used cars with low mileage. These may be described as demo models or program cars, but may in fact be
            lemons.
          </li>
          <li>
            Try to get in touch with the previous owner, via the car's title. In some states, the title will tell you
            whether the car was a lemon-law vehicle.
          </li>
          <li>Beware of cars that come from another state.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'auto-mechanics',
    title: 'How can I avoid being ripped off by auto mechanics?',
    body: (
      <>
        <p>
          It is estimated that anywhere from one-quarter to one-half of the $90 billion Americans spend every year on car
          repairs is wasted on the following scams:
        </p>
        <ol>
          <li>
            <strong>Only dealerships can perform maintenance.</strong> This is not true. As long as you keep thorough
            records and the mechanic uses the correct fluids for your make and model, car maintenance can be performed by
            any mechanic without affecting your warranty. The only dealership-required service is warranty-related repairs
            and recalls.
          </li>
          <li>
            <strong>XYZ part will cost you $900.</strong> If a mechanic tells you that you need an extensive repair or any
            large component, get a second opinion or two.
          </li>
          <li>
            <strong>Being charged to replace different parts to fix the same problem.</strong> This usually indicates that
            the mechanic is having trouble diagnosing the problem. That may be the case, but you shouldn't be charged for
            it.
          </li>
          <li>
            <strong>The Secret Warranty.</strong> Always ask a dealership service department whether a problem is covered
            by a manufacturer's warranty. (A manufacturer that discovers a widespread defect will often notify a dealership
            that repairs of the defect will be covered by the manufacturer.) There are only five states—California,
            Connecticut, Maryland, Virginia, and Wisconsin—in which it is illegal for a dealership not to tell you a repair
            is covered by a warranty.
            <Callout label="Tip">
              <p>
                If the defect is safety-related, you can call 800-424-9393 for a list of warranties and recalls or visit{' '}
                <a href="https://www.safercar.gov/" {...external}>
                  SaferCar.gov
                </a>
              </p>
            </Callout>
          </li>
          <li>
            <strong>Flushing the engine.</strong> In general, the engine doesn't need to be flushed except for routine
            coolant replacement associated with normal maintenance.
          </li>
          <li>
            <strong>The $9.95 Tune-Up.</strong> A common scam is to lure customers with an extremely low-priced oil-change
            or other service deal, and then to discover nonexistent problems while the car is on the lift.
          </li>
          <li>
            <strong>Double Billing.</strong> You might be told, for example, that you need repairs done on your brakes, and
            then discover that you have been billed for several extra items, which are actually part of the brake repair
            job.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'pickpockets',
    title: 'How can I avoid being pick-pocketed?',
    body: (
      <>
        <p>
          These tips on how to avoid becoming the victim of a con artist or pickpocket are provided by the New York City
          Police Department's Special Frauds Squad.
        </p>
        <ul>
          <li>
            Use handbags that have a zipper and locking flap and carry them securely with the flap side close to your body.
          </li>
          <li>Carry wallets inside your coat or side trouser pockets, never in your back pants pocket.</li>
          <li>
            Beware of loud arguments or commotions in crowded areas. Thieves working together may stage these incidents to
            distract you while your pocket is picked.
          </li>
          <li>Be aware that a pickpocket may bump or crowd you on public transportation.</li>
          <li>
            If your pocket is picked, call out immediately to warn the driver or conductor. Alert everyone that there's a
            pickpocket on board, and don't be afraid to shout.
          </li>
          <li>Avoid crowding in the area of the subway car doors when entering or exiting.</li>
          <li>Be on guard if a stranger directs your attention to a substance or stain on your clothes.</li>
          <li>Be on guard while doing your banking at an automatic teller machine.</li>
          <li>
            Be suspicious if you are approached by a stranger who claims to have just found an envelope full of money or
            tells you he has a winning lottery ticket with him. This could be the first step in a confidence crime, with you
            as the victim. Never discuss your personal finances with strangers, and don't draw money out of the bank at a
            stranger's suggestion in order to build trust in such a situation
          </li>
        </ul>
        <p>
          Being aware of the most current scams is the best way to prevent falling prey to them. If you or someone you
          know has been a victim of a con artist, call your local police precinct immediately.
        </p>
      </>
    ),
  },
];

export default function AvoidingScamsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/avoiding-scams"
      page="Avoiding Scams: Frequently Asked Questions"
      title={
        <>
          Avoiding Scams: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about spotting rip-offs, Internet scams, protecting your credit card and Social Security numbers, investment schemes, travel scams, used cars and auto repairs, and pickpockets."
      sections={sections}
    />
  );
}
