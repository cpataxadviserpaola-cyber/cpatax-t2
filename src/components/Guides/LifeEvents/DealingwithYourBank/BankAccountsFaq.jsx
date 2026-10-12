import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=161 (Bank Accounts: Frequently Asked
// Questions), word for word from the live page.
// Address: /guides/life-events/dealing-with-your-bank/bank-accounts-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'banking-fees',
    title: 'What banking fees do you need to look out for when shopping for a bank account?',
    body: (
      <>
        <p>
          Fortunately, banks are required to give you a list of fees for their accounts. Even with interest, the best account
          is usually the one with the lowest fees.
        </p>
        <p>
          Checking accounts are minefields for potential banking charges. Be sure you ask about monthly fees, fees for
          check processing, and ATM fees. A no-cost checking account may impose a charge if your balance drops below a
          minimum dollar amount. Check printing charges have sky-rocketed in recent years to as much as $24 at some banks. You
          can have your checks printed for much less by an outside financial printer.
        </p>
        <p>
          It rarely makes sense anymore to park money in an old-fashioned &ldquo;passbook&rdquo; savings account. Monthly
          account fees may overshadow the small amount of interest you will earn. Put it in your checking account instead if
          you can refrain from spending it. If it's a big enough sum, you might want to put it in a money market account. You
          will earn more interest than in a savings account, but make sure you don't get hit with a monthly charge if your
          balance falls too low.
        </p>
      </>
    ),
  },
  {
    id: 'account-types',
    title: 'What are the different types of bank accounts available?',
    body: (
      <>
        <p>The accounts offered by depository institutions generally fall within one of these types:</p>
        <ul>
          <li>
            <p>
              <strong>Checking accounts.</strong> With a checking account, you write checks to withdraw your deposited funds
              from the account. Checking accounts provide you with quick, convenient and frequent access to your money. You can
              make deposits as often as you like. Most institutions provide customers with access to an automated teller
              machine (ATM) for banking transactions or debits for purchases at stores.
            </p>
            <p>
              Some checking accounts pay interest; others do not. A regular checking account—usually called a demand deposit
              account—does not pay interest, while a negotiable order of withdrawal (NOW) account does.
            </p>
            <p>
              Various fees are charged on checking accounts, in addition to the charge for the checks you order. Fees vary among
              institutions. Some charge a maintenance or flat monthly fee regardless of the balance in your account. Other
              institutions charge a monthly fee if the minimum balance in your account drops below a certain amount any day
              during the month or if the average balance for the month drops below the specified amount. Some charge a fee for
              every transaction, such as for each check you write or for each withdrawal you make at an ATM. Many institutions
              impose a combination of these fees.
            </p>
          </li>
          <li>
            <p>
              <strong>Money market deposit accounts.</strong> A money market deposit account (MMDA) is an interest-bearing
              account that allows you to write checks. An MMDA usually pays a higher rate of interest than a checking or
              savings account. MMDAs usually require a higher minimum balance to start earning interest, and often pay higher
              rates of interest for higher balances.
            </p>
            <p>
              Making withdrawals from an MMDA is less convenient than withdrawing from a checking account. You are limited to six
              transfers per month to another account or to other parties, and only three of these can be by check. Most
              institutions charge fees with MMDAs.
            </p>
          </li>
          <li>
            <p>
              <strong>Savings accounts.</strong> With savings accounts, you can make withdrawals, but you do not have the
              flexibility of checks. As with an MMDA, the number of withdrawals or transfers per month may be limited.
            </p>
            <p>
              Many banks offer more than one type of savings account, for example, passbook savings and statement savings. With
              passbook savings you get a record book in which deposits and withdrawals are entered; this record book must be
              presented when making deposits and withdrawals. With statement savings, the bank mails you a regular statement
              showing withdrawals and deposits.
            </p>
            <p>As with other accounts, various fees, such as minimum balance fees, may be charged on savings accounts.</p>
          </li>
          <li>
            <p>
              <strong>Credit union accounts.</strong> Credit union accounts are similar to those at banks, but have different
              names. Credit union members have share-draft (rather than checking) accounts, share (rather than savings)
              accounts, and share certificate (rather than certificate of deposit) accounts.
            </p>
            <Callout label="Tip">
              <p>
                Credit unions typically charge less for banking services than banks. Thus, if you have access to a credit
                union, it pays to use it.
              </p>
            </Callout>
          </li>
          <li>
            <p>
              <strong>Certificates of deposit.</strong> Certificates of deposit, or CDs, are time deposits. CDs offer a
              guaranteed rate of interest for a specified term, such as one year. With CDs, you can choose from among various
              lengths of time that your money is on deposit, ranging from several days to several years.
            </p>
            <p>
              Once you pick the term you want, you will generally have to keep your money in the account until the term ends.
              Some banks allow you to withdraw the interest earned while leaving your initial deposit (the principal) in the CD.
              Because you are leaving your funds with the bank for a set period of time, the rate of interest is generally
              higher than for savings or other accounts. Typically, the longer the term, the higher the annual percentage yield.
            </p>
            <p>
              If you withdraw your principal before maturity, a penalty is usually charged. Penalties vary among institutions,
              and can be hefty—sometimes greater than the interest earned, eating into your principal.
            </p>
            <p>The bank will notify you before the maturity date for most CDs. Often CDs renew automatically.</p>
            <Callout label="Tip">
              <p>
                If you are going to take out your money at maturity, keep track of the maturity date and notify the
                institution that you wish to take out your money. Otherwise the CD will roll over for another term.
              </p>
            </Callout>
          </li>
          <li>
            <p>
              <strong>Basic or no-frills accounts.</strong> Basic or no-frill accounts, which may be offered by some banks,
              give you limited services for a lower price. Basic accounts give you a convenient way to pay bills and cash checks
              for less than you might pay without any account at all. Basic accounts are checking accounts, but the number of
              checks you can write and the number of deposits and withdrawals you can make is limited. Interest generally is not
              paid.
            </p>
            <Callout label="Tip">
              <p>
                Compare basic and regular checking accounts, taking into account your check-writing needs, to get the best
                deal in low fees or low minimum balance requirements. If you don't write many checks and don't want to keep a
                minimum balance in the checking account, the basic account may be worth your while.
              </p>
            </Callout>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'type-to-open',
    title: 'What type of account should I open?',
    body: (
      <>
        <p>
          The answer depends on how you plan to use the account. If you want to build up your savings and you won't need your
          money soon, a certificate of deposit will serve your purposes.
        </p>
        <p>
          If you need to reach your money easily, however, a savings account may be a better choice. And if you want a way to
          pay bills, a checking account is probably best for you.
        </p>
        <Callout label="Tip">
          <p>
            If you usually write only two or three checks per month, an MMDA might be a better deal than a checking account.
            MMDAs pay a higher rate of interest than checking accounts, but require a higher minimum balance.
          </p>
        </Callout>
        <p>
          Checking accounts have other advantages. They simplify your recordkeeping. Canceled checks provide you with receipts
          at tax time, and the check register is a convenient way of keeping track of monthly expenses.
        </p>
        <p>
          Account features and fees vary from one institution to the next. It's important to take the time to ask bank
          employees about any account features and fees before you open an account.
        </p>
        <Callout label="Tip">
          <p>
            To get the most out of a checking account, find out what the minimum balance for avoiding fees is, and keep that
            minimum in the account. Further, try to get a checking account that will pay you interest, or that looks to the
            combined balance in checking and savings accounts to arrive at the minimum required balance. This way, you will not
            be paying the bank for the checking services, and your money will be earning some interest—although not at a
            great rate.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'shopping-for-best-buy',
    title: 'How should I shop for a "best buy" bank account?',
    body: (
      <>
        <p>Choosing an account is a matter of comparing the features of accounts at various banks. The features that should be compared are:</p>
        <ul>
          <li>
            <p>
              <strong>Interest Rates.</strong> Determine the interest rate on an account. Find out whether the institution can
              change the rate after you open the account. In addition, find out the following:
            </p>
            <ol>
              <li>
                Does the institution pay different rates of interest depending on the amount of your account balance, and, if
                so, in what way is interest calculated? (See Tiered Interest Rates, below.)
              </li>
              <li>
                How often is interest compounded? In other words, when does the institution start paying interest on the
                interest you've already earned in the account?
              </li>
              <li>What is the annual percentage yield? The APY is a rate that reflects the amount of interest you will earn on a deposit.</li>
              <li>What is the minimum balance required before you earn interest?</li>
            </ol>
            <Callout label="Tip">
              <p>
                Find out how the bank calculates the minimum balance requirement. A calculation that is based on the minimum
                daily balance is best for you.
              </p>
            </Callout>
            <ol start={5}>
              <li>
                Do you begin earning interest the day you deposit a check into your account—called &ldquo;earning on your ledger
                balance&rdquo;—or do you begin earning interest later, when the institution receives credit for the check—known as
                &ldquo;earning on your collected balance&rdquo;?
              </li>
            </ol>
            <p>Institutions may pay different rates tied to different balance amounts.</p>
            <Callout label="Example">
              <p>
                An institution pays a 5 percent interest rate on balances up to $5,000 and 5.5 percent on balances above $5,000.
                If you deposit $8,000, the institution that pays interest on the entire balance pays you 5.5 percent on the entire
                $8,000. Other institutions may pay you 5 percent on the first $5,000 and 5.5 percent only on the remaining $3,000.
              </p>
            </Callout>
            <Callout label="Tip">
              <p>
                To tell which method an institution uses, check the annual percentage yield (APY) disclosure. If it is a single
                figure for a balance level, you will be paid the stated interest rate for the entire balance. If the APY is stated
                as a range for each balance level, your earnings will depend on the balance you keep in each level. Of course,
                getting paid the stated interest rate on the entire balance is a better deal.
              </p>
            </Callout>
          </li>
          <li>
            <p>
              <strong>Fees.</strong> Ask the following questions of each bank/account that you are considering:
            </p>
            <ol>
              <li>Will you pay a flat per-month fee? How much?</li>
              <li>Will you pay a fee if the balance in your account drops below a certain amount? How much?</li>
              <li>Is there a charge for each deposit and withdrawal you make? How much?</li>
              <li>
                How much will it cost you to use an ATM to make deposits and withdrawals on your account? Does it matter whether
                the transaction takes place at an ATM owned by the institution?
              </li>
            </ol>
            <Callout label="Tip">
              <p>
                You can cut ATM fees by limiting yourself to only one withdrawal per week, or by using only ATMs owned by your
                bank.
              </p>
            </Callout>
            <ol start={5}>
              <li>Is there a charge for bill payment by phone or modem? How much?</li>
              <li>If you have a checking account or an MMDA, how much will new checks cost?</li>
            </ol>
            <Callout label="Tip">
              <p>
                You can save up to 50 percent on the cost of checks by ordering your checks from your own supplier, instead of
                letting the bank order them.
              </p>
            </Callout>
            <ol start={7}>
              <li>Will you be charged for each check you write? How much?</li>
              <li>Are fees reduced if you have other accounts at the institution?</li>
              <li>
                Are fees reduced or waived if you agree to directly deposit your paycheck or government payments (e.g., Social
                Security check)?
              </li>
              <li>What is the fee for stopping payment on a check you have written?</li>
              <li>Is there a charge for making a balance inquiry?</li>
              <li>Does the institution charge a fee for closing an account soon after it is opened? If it does, when will the fee be imposed?</li>
              <li>Are you charged to have canceled checks returned to you with your statement? How much?</li>
              <li>
                What is the charge for writing a check that bounces (a check returned for insufficient funds)? And what happens if
                you deposit a check written by another person, and it bounces? Are you charged a fee?
              </li>
            </ol>
          </li>
          <li>
            <p>
              <strong>Limitations.</strong> Find out whether the following will apply to the account:
            </p>
            <ol>
              <li>Does the institution limit the number or the dollar amount of withdrawals or deposits you make?</li>
              <li>
                If you close the account before interest is credited to your account, will you be credited with the interest that
                has been earned?
              </li>
              <li>
                How long does it take for checks to clear? How soon does the institution allow you to withdraw funds that you have
                deposited to your account?
              </li>
            </ol>
            <p>
              <em>If you are looking into a CD, here are some questions to ask:</em>
            </p>
            <ol>
              <li>What is the term of the account (i.e., how long until maturity)?</li>
              <li>
                Will the account roll over automatically? Does the account renew unless you withdraw your money at maturity or
                during any grace period? A grace period is the time after maturity when you can withdraw your money without
                penalty. If there is a grace period, how long is it?
              </li>
              <li>If you are allowed to withdraw your money before maturity, is there a penalty? How much?</li>
              <li>
                Will the institution regularly send you the amount of interest you are earning on your account—or regularly credit
                it to another account of yours?
              </li>
            </ol>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'deposit-insurance',
    title: 'How much protection is provided by federal deposit insurance?',
    body: (
      <>
        <p>
          Federal deposit insurance sets apart deposit accounts from other savings choices. Only deposit accounts at federally
          insured depository institutions are protected by federal deposit insurance. Generally, the government protects up to
          $250,000 per depositor, per FDIC-insured bank, per ownership category. Accounts for special relationships, such as
          trusts or co-owners, may also have some effect on the amount of insurance coverage you have.
        </p>
        <Callout label="Tip">
          <p>
            Ask the bank how the deposit insurance rules will apply to your deposit account. Federally insured depository
            institutions also offer products that are not protected by insurance. For example, you may purchase shares in a
            mutual fund or an annuity. These investments are not protected by the federal government.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'negotiating-fees',
    title: 'How can I negotiate checking account fees with my current bank?',
    body: (
      <>
        <p>
          Here are some <strong>tips for negotiating</strong> with your current bank to try to get a better deal on your
          checking account:
        </p>
        <ul>
          <li>
            <strong>Step One:</strong> Take a look at your past three or four checking account statements. Find out what all of
            the fees and charges are, and make notes of them.
          </li>
          <li>
            <strong>Step Two:</strong> Figure out your checking account needs, and jot them down. How many checks do you write per
            month? How many ATM visits do you make? How many deposits do you make? How many times are you overdrawn? How often do
            you go below the minimum required balance?
          </li>
          <li>
            <strong>Step Three:</strong> Armed with this information, check with several other area banks to find out what they
            charge for the same services. Do this over the phone, if you have the time, or ask for the information to be sent to
            you in the mail.
          </li>
          <li>
            <strong>Step Four:</strong> Now you are ready to go to your own bank. Speak to a manager. Say that you are looking to
            reduce your banking costs. Ask them to cut fees, and if they won't budge, tell them what the competition is
            offering. They may move on certain fees if they sense they will lose your business. Ask whether you can lower costs by:
            using direct deposit, getting photocopies of canceled checks instead of the checks themselves, or opening another
            account or CD.
          </li>
        </ul>
        <Callout label="Tip">
          <p>Many banks offer free checking to seniors, students, or the disabled, if the depositor asks for this service.</p>
        </Callout>
        <Callout label="Tip">
          <p>If you decide to take your business elsewhere, don't overlook smaller banks, which may be more eager for your business.</p>
        </Callout>
        <h3>What questions should I ask when shopping for a Checking Account?</h3>
        <p>
          You need to know exactly how much a checking account will cost you. Get a list from your banker of all possible
          fees, including charges for maintaining the account, processing checks, bouncing checks, using the ATM, stopping
          payment, and transferring funds. Ask if the account will be cheaper if the bank does not return canceled checks. In the
          rare event that you need one, ask how much, if anything, it will cost to get a copy. To avoid bouncing checks, ask
          how long you have to wait after depositing funds to draw on them.
        </p>
        <p>
          For interest checking accounts, ask how the bank calculates the interest. If the bank pays more on accounts with higher
          balances, be sure you get a &ldquo;tiered&rdquo; rate, which pays you the highest interest on all the money you have
          in the account. Be sure you know the charge for falling below the minimum balance, too. It might be more than the
          interest you will earn. Finally, some banks reduce charges on checking accounts if you take out a loan or buy a CD. Ask
          what deals are available.
        </p>
      </>
    ),
  },
  {
    id: 'overdraft-protection',
    title: 'What is overdraft protection and should I have it?',
    body: (
      <>
        <p>
          Many people overlook a valuable service offered by banks: the overdraft protection line of credit. With this
          protection, if you write a check which would overdraw your account a loan is automatically made from a line of credit.
          With this protection you will not bounce any checks.
        </p>
        <p>
          This type of service is most valuable to a self-employed individual whose business is seasonal. If there are times
          during the year when you have cash flow problems, the overdraft protection line of credit can save you
          headaches—and at a lower interest rate than other forms of borrowing.
        </p>
        <p>
          Starting in 2010, automatic overdraft protection is no longer provided by banks and bank customers must opt-in for
          this protection. Don't neglect to inquire about this service if it would suit your situation.
        </p>
      </>
    ),
  },
  {
    id: 'truth-in-savings',
    title: 'What is the Truth in Savings Act?',
    body: (
      <>
        <p>
          The <strong>Truth in Savings Act,</strong> a federal law, requires depository institutions to disclose to you the
          important terms of their consumer deposit accounts. Institutions must tell you:
        </p>
        <ul>
          <li>The annual percentage yield and interest rate</li>
          <li>Cost information, such as fees that may be charged</li>
          <li>Information about other features such as any minimum balance amount required to earn interest or to avoid fees</li>
        </ul>
        <p>
          To help you shop for the best accounts, an institution must give you information about any consumer deposit account the
          institution offers, if you ask for it. You will also get disclosures before you actually open an account.
        </p>
        <p>
          In addition, the Truth in Savings Act generally requires that interest and fee information be provided on any periodic
          statements sent to you. And if you have a roll-over CD that is longer than one month, the law requires also that you get a
          renewal notice before the CD matures.
        </p>
      </>
    ),
  },
];

export default function BankAccountsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/dealing-with-your-bank"
      page="Bank Accounts: Frequently Asked Questions"
      title={<>Bank Accounts: <em>Frequently Asked Questions</em></>}
      lead="Understanding bank accounts, fees, rates, and consumer protections can save you money and headaches. Here are answers to common questions about choosing and managing your accounts."
      sections={sections}
    />
  );
}
