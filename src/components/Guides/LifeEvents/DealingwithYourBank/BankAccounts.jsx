import GuideArticle, { Agencies, ArticleTable, Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=22 (Bank Accounts: What To Look and Ask For),
// word for word from the live page.
// Address: /guides/life-events/dealing-with-your-bank/bank-accounts (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const accountTypes = [
  {
    type: 'Regular Checking',
    interest: 'No',
    checks: 'Yes',
    limits: 'No',
    fees: 'Yes',
  },
  {
    type: 'Interest Checking',
    interest: 'Yes',
    checks: 'Yes',
    limits: 'No',
    fees: 'Yes',
  },
  {
    type: 'Money Market Deposit Account (MMDA)',
    interest: 'Yes, usually higher than NOW or savings',
    checks: 'Yes, usually with a monthly limit',
    limits: 'Yes, usually with a monthly limit',
    fees: 'Yes',
  },
  {
    type: 'Savings',
    interest: 'Yes',
    checks: 'No',
    limits: 'Same as MMDA',
    fees: 'Yes',
  },
  {
    type: 'Certificate of Deposit (CD)',
    interest: 'Yes, usually higher than MMDA',
    checks: 'No',
    limits: 'Yes, usually no withdrawals of principal until date of maturity',
    fees: 'Yes, if you withdraw principal funds before date of maturity',
  },
];

const agencies = [
  {
    name: 'State-Chartered Member Banks of the Federal Reserve System:',
    lines: [
      'Division of Consumer and Community Affairs',
      'Board of Governors of the Federal Reserve System',
      '20th Street and Constitution Avenue, NW',
      'Washington, DC 20551',
      'Tel. (202) 452-3000',
    ],
  },
  {
    name: 'National Banks & Federally Insured Savings & Loan Institutions and Federally Chartered Savings Banks:',
    lines: [
      'Comptroller of the Currency',
      'Customer Assistance Group',
      '1301 McKinney Street',
      'Suite 3450',
      'Houston, TX 77010',
      'Tel. (800) 613-6743',
    ],
  },
  {
    name: 'Credit Unions:',
    lines: [
      'National Credit Union Administration',
      '1775 Duke Street # 4206',
      'Alexandria, Virginia 22314-6115',
      'Tel. (703) 519-4600',
    ],
  },
];

const sections = [
  {
    id: 'comparing-types-of-accounts',
    title: 'Comparing Types Of Accounts',
    body: (
      <>
        <p>The accounts offered by depository institutions generally fall within one of these types:</p>

        <h3>1. Checking Accounts</h3>
        <p>
          With a checking account you write checks to withdraw your deposited funds from the account. Checking accounts
          provide you with quick, convenient and frequent access to your money. You can make deposits as often as you like.
          Most institutions provide customers with access to an automated teller machine (ATM) for banking transactions or
          debit features for purchases at stores.
        </p>
        <p>
          Some checking accounts pay interest; others do not. A regular checking account—usually called a demand deposit
          account—does not pay interest, while a negotiable order of withdrawal (NOW) account does. Interest-bearing checking
          accounts may appear attractive, but they often charge higher fees than regular checking accounts; the fees often
          negate the interest. It's important to find out how much you'll be paying in fees.
        </p>
        <p>
          Various fees are charged on checking accounts. You generally must pay for the printing of your checks. Other fees
          vary among institutions. Some charge a maintenance or flat monthly fee regardless of the balance in your account.
          Other institutions charge a monthly fee if the minimum balance in your account drops below a certain amount any day
          during the month or if the average balance for the month drops below the specified amount. Some charge a fee for
          every transaction, such as for each check you write or for each withdrawal you make at an ATM. Many institutions
          impose a combination of these fees.
        </p>
        <Callout label="Tip">
          <p>You can negotiate checking account fees with your bank. Here's how to approach this:</p>
          <ul>
            <li>See what your fees and charges have been over the past 3 years.</li>
            <li>
              Write down your checking needs, i.e. how many checks you write a month, how many ATM visits, how many
              deposits, how many times you have overdrawn, how often you go below the minimum balance.
            </li>
            <li>
              Take this info and do some research into other banks in the area. Compare their rates and fees to your bank.
            </li>
            <li>
              Go to your bank and ask to speak to a manager. Tell them you want to reduce your banking costs. If they don't
              negotiate, bring up their competition. If they don't want to lose your business they will negotiate. Also ask
              them other ways to cut costs.
            </li>
            <li>Keep in mind that many banks offer free checking to seniors, students, and the disabled.</li>
            <li>Don't rule out smaller banks as they may be more willing to cut your costs just to get your business.</li>
          </ul>
        </Callout>

        <h3>2. Money-Market Deposit Accounts (MMDA)</h3>
        <p>
          A money market deposit account (MMDA) is an interest-bearing account that allows you to write checks. An MMDA usually
          pays a higher rate of interest than a checking or savings account. MMDAs usually require a higher minimum balance
          to start earning interest and often pay higher rates of interest for higher balances.
        </p>
        <p>
          Making withdrawals from an MMDA is less convenient than withdrawing from a checking account. You are generally
          limited to six transfers per month to another account or to other parties, and only three of these can be by check.
          Most institutions charge fees with MMDAs.
        </p>

        <h3>3. Savings Accounts</h3>
        <p>
          With savings accounts you can make withdrawals, but you do not have the flexibility of checks. As with an MMDA, the
          number of withdrawals or transfers per month may be limited.
        </p>
        <p>
          Many banks offer more than one type of savings account, for example, passbook savings, and statement savings. With
          passbook savings you get a record book in which deposits and withdrawals are entered; this record book must be
          presented when making deposits and withdrawals. With statement savings, the bank mails you a regular statement
          showing withdrawals and deposits. As with other accounts, various fees, such as minimum balance fees, may be
          charged on savings accounts.
        </p>

        <h3>4. Credit Union Accounts</h3>
        <p>
          Credit union accounts are similar to those at banks but have different names. Credit union members have share draft
          (rather than checking) accounts, share (rather than savings) accounts, and share certificate (rather than certificate
          of deposit) accounts.
        </p>
        <Callout label="Tip">
          <p>
            Credit unions typically charge less for banking services than banks. In order to use a credit union you
            generally must be a member of a group, such as through your employer or a family member's employer. Check local
            credit unions and find out their membership requirements. You can contact the National Credit Union
            Administration for information on credit unions. Similarly, you can obtain information, including financial data
            on federally insured banks through the FDIC.
          </p>
        </Callout>
        <Callout label="Planning aid">
          <p>
            Please see{' '}
            <a href="https://www.ncua.gov" {...external}>
              National Credit Union Administration
            </a>
            , which regulates and insures credit unions.
          </p>
        </Callout>
        <Callout label="Planning aid">
          <p>
            Please see{' '}
            <a href="https://www.bankrate.com/banking/savings/rates/" {...external}>
              Rates for Savings and CDs
            </a>
            . This site provides current savings and CD rates.
          </p>
        </Callout>

        <h3>5. Time Deposits (Certificates of Deposit)</h3>
        <p>
          Certificates of deposit, or CDs, are time deposits. CDs offer a guaranteed rate of interest for a specified term,
          such as one year. With CDs, you can choose from among various lengths of time that your money is on deposit,
          ranging from several days to several years.
        </p>
        <p>
          Once you pick the term you want, you will generally have to keep your money in the account until the term ends.
          Some banks allow you to withdraw the interest earned while leaving your initial deposit (the principal) in the CD.
          Because you are leaving your funds in the bank for a set period of time, the rate of interest is generally higher
          than for a savings or other account. Typically, the longer the term, the higher the annual percentage yield.
        </p>
        <p>
          If you withdraw your principal before maturity, a penalty is usually charged. Penalties vary among institutions
          and can be hefty—sometimes greater than the interest earned, eating into your principal. The bank will notify you
          before the maturity date for most CDs. Often CDs renew automatically.
        </p>
        <Callout label="Tip">
          <p>
            If you are going to take out your money at maturity, keep track of the maturity date and notify the institution
            that you wish to take out your money. Otherwise the CD will roll over for another term.
          </p>
        </Callout>

        <h3>6. Basic (No-Frill) Accounts</h3>
        <p>
          Basic or no-frill accounts, which may be offered by some banks, give you limited services for a lower price. Basic
          accounts give you a convenient way to pay bills and cash checks for less than you might pay without any account at
          all. Basic accounts are checking accounts, but the number of checks you can write and the number of deposits and
          withdrawals you can make is limited. Interest generally is not paid.
        </p>
        <Callout label="Tip">
          <p>
            Compare basic and regular checking accounts, taking into account your check-writing needs, to get the best
            deal in low fees or low minimum balance requirements. If you don't write many checks and don't want to keep a
            minimum balance in the checking account, the basic account may be worth your while.
          </p>
        </Callout>

        <h3>Summary Of Features</h3>
        <p>The table below summarizes the available account types and their features:</p>
        <ArticleTable label="Summary of account features" wide>
          <thead>
            <tr>
              <th scope="col">Type Of Account</th>
              <th scope="col">Earn Interest?</th>
              <th scope="col">Write Checks?</th>
              <th scope="col">Withdrawal Limitations?</th>
              <th scope="col">Fees?</th>
            </tr>
          </thead>
          <tbody>
            {accountTypes.map((row) => (
              <tr key={row.type}>
                <th scope="row">{row.type}</th>
                <td>{row.interest}</td>
                <td>{row.checks}</td>
                <td>{row.limits}</td>
                <td>{row.fees}</td>
              </tr>
            ))}
          </tbody>
        </ArticleTable>
        <Callout label="Note">
          <p>These are the general rules at the time of this writing. They may vary from bank to bank and from time to time.</p>
        </Callout>
        <p>
          What type of account should you open? The answer depends on how you plan to use the account. If you want to build
          up your savings and you won't need your money soon, a certificate of deposit will serve your purposes.
        </p>
        <p>
          If you need to reach your money easily, however, a savings account may be a better choice. And if you want a way to
          pay bills, a checking account is probably best for you.
        </p>
        <Callout label="Tip">
          <p>
            If you usually write only two or three checks per month, an MMDA might be a better deal than a checking
            account. MMDAs pay a higher rate of interest than checking accounts but require a higher minimum balance.
          </p>
        </Callout>
        <p>
          Checking accounts have other advantages. They simplify your record keeping. Canceled checks provide you with
          receipts at tax time, and the check register is a convenient way of keeping track of monthly expenses.
        </p>
        <p>
          Account features and fees vary from one institution to the next. It's important to take the time to ask bank
          employees about any account features and fees before you open an account. Banks are always required to notify you of
          the fees for their accounts. The best account to choose is usually the one with the lowest fees, regardless of the
          interest rate. Keep an eye out for potential extra charges when shopping for checking accounts. Ask about monthly
          fees, check processing fees, and ATM fees. Also be wary of cost-free checking accounts, as the bank may charge you
          if your balance drops below a certain amount. Also, the charges for printing new checks can often be much higher at
          your bank than through an outside printing provider.
        </p>
        <p>
          In this day and age, it doesn't really benefit you to put money into an old fashioned &ldquo;passbook&rdquo; savings
          account. Often monthly account fees overshadow the small amount of interest you will earn. Instead, put your money
          into a checking account. If it is a larger sum, look into a money market account. In this type of account you will
          earn more interest than in a savings account, but watch out for additional charges if your balance drops too low.
        </p>
        <Callout label="Tip">
          <p>
            To get the most out of a checking account, find out what the minimum balance for avoiding fees is, and keep
            that minimum in the account. Further, try to get a checking account that will pay you interest, or that looks to
            the combined balance in checking and savings accounts to arrive at the minimum required balance. This way, you
            will not be paying the bank for the checking services, and your money will be earning some interest—although, not
            at a great rate.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'choosing-an-account',
    title: 'Choosing An Account',
    body: (
      <>
        <p>
          Choosing an account is a matter of comparing the features of accounts at various banks. The features that should
          be compared are interest, fees, limitations on withdrawals, and limitations on time deposit accounts.
        </p>

        <h3>Interest</h3>
        <p>
          Determine the interest rate on an account. Find out whether the institution can change the rate after you open the
          account. In addition, find out the following:
        </p>
        <ul>
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
        </ul>
        <Callout label="Tip">
          <p>
            Find out how the bank calculates the minimum balance requirement. A calculation that is based on the minimum
            daily balance is best for you.
          </p>
        </Callout>
        <ul>
          <li>
            Do you begin earning interest the day you deposit a check into your account called &ldquo;earning on your ledger
            balance&rdquo;—or do you begin earning interest later, when the institution receives credit for the check known as
            &ldquo;earning on your collected balance&rdquo;?
          </li>
        </ul>
        <Callout label="Planning aid">
          <p>
            See{' '}
            <a href="https://www.bankrate.com/banking/savings/rates/" {...external}>
              Money Market Accounts
            </a>
            . This site provides information on current money market rates.
          </p>
        </Callout>
        <Callout label="Planning aid">
          <p>
            See{' '}
            <a href="https://www.bankrate.com/banking/savings/rates/" {...external}>
              Savings Accounts
            </a>
            . This site provides current savings and CD rates.
          </p>
        </Callout>

        <h3>Tiered Interest Rates</h3>
        <p>Institutions may pay different rates tied to different balance amounts.</p>
        <Callout label="Example">
          <p>
            An institution pays a 5 percent interest rate on balances up to $5,000 and 5.5% on balances above $5,000. If you
            deposit $8,000, the institution that pays interest on the entire balance pays you 5.5% on the entire $8,000.
            Other institutions may pay you 5% on the first $5,000 and 5.5% only on the remaining $3,000.
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

        <h3>Fees</h3>
        <p>Determine the following about an account:</p>
        <ul>
          <li>
            Will you pay a <em>flat per-month fee</em>? How much?
          </li>
          <li>
            Will you pay a fee if the <em>balance in your account drops below a certain amount</em>? How much?
          </li>
          <li>
            Is there a charge for <em>each deposit and withdrawal</em> you make? How much?
          </li>
          <li>
            How much will it cost you to <em>use an ATM</em> to make deposits and withdrawals on your account? Does it matter
            whether the transaction takes place at an ATM owned by the institution?
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            You can cut ATM fees by limiting yourself to only one withdrawal per week or by using only ATMs owned by your
            bank.
          </p>
        </Callout>
        <ul>
          <li>Is there a charge for bill payment by phone or modem? How much?</li>
          <li>
            If you have a checking account or an MMDA, <em>how much will new checks cost</em>?
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            You can save up to 50% on the cost of checks by ordering your checks from your own supplier, instead of letting
            the bank order them.
          </p>
        </Callout>
        <ul>
          <li>
            Will you be <em>charged for each check</em> you write? How much?
          </li>
          <li>
            Are fees reduced if you have <em>other accounts</em> at the institution?
          </li>
          <li>
            Are fees reduced or waived if you agree to <em>directly deposit your paycheck</em> or government payments (e.g.,
            Social Security check)?
          </li>
          <li>
            What is the fee for <em>stopping payment</em> on a check you have written?
          </li>
          <li>
            Is there a charge for <em>making a balance inquiry</em>?
          </li>
          <li>
            Does the institution charge a fee for <em>closing an account soon after it is opened</em>? If it does, when will
            the fee be imposed?
          </li>
          <li>
            Are you charged to <em>have canceled checks returned to you</em> with your statement? How much?
          </li>
          <li>
            What is the charge for <em>writing a check that bounces</em> (a check returned for insufficient funds)? And what
            happens <em>if you deposit a check written by another person, and it bounces</em>? Are you charged a fee?
          </li>
        </ul>

        <h3>Check Clearing and Other Limitations</h3>
        <p>Find out whether the following will apply to the account:</p>
        <ul>
          <li>Does the institution limit the number or the dollar amount of withdrawals or deposits you make?</li>
          <li>
            If you close the account before interest is credited to your account, will you be credited with the interest that
            has been earned?
          </li>
          <li>
            How long does it take for checks to clear? How soon does the institution allow you to withdraw funds that you have
            deposited to your account?
          </li>
        </ul>

        <h3>For Certificates of Deposit</h3>
        <p>If you are looking into a CD, here are some questions to ask:</p>
        <ul>
          <li>What is the term of the account (i.e., how long until maturity)?</li>
          <li>
            Will the account roll over automatically? Does the account renew unless you withdraw your money at maturity or
            during any grace period? A grace period is the amount of time after maturity when you can withdraw your money
            without penalty. If there is a grace period, how long is it?
          </li>
          <li>If you are allowed to withdraw your money before maturity, is there a penalty? How much?</li>
          <li>
            Will the institution regularly send you the amount of interest you are earning on your account or regularly credit
            it to another account of yours?
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'getting-a-better-deal',
    title: 'Getting A Better Deal',
    body: (
      <>
        <p>
          A recent survey showed that more than half of the surveyed individuals picked their checking account banks
          because of geographic location. Only 19% chose their banks because of cost-effectiveness (low fees). This shows
          that cost-effective accounts are out there, but it takes time to shop around for them.
        </p>
        <p>
          An easy way for a bank to increase its cash flow is to add on fees here and there for services that used to be
          free of charge. Conversely, bank customers can increase their cash flow by getting a bank to drop a charge or by
          changing banks.
        </p>
        <p>Here are some tips for negotiating with your current bank to try to get a better deal on your checking account:</p>
        <ul>
          <li>
            <em>Step One:</em> Take a look at your past three or four checking account statements. Find out what all of the
            fees and charges are, and make notes of them.
          </li>
          <li>
            <em>Step Two:</em> Figure out your checking account needs, and jot them down. How many checks do you write per
            month? How many visits to the ATM do you make? How many deposits do you make? How many times are you overdrawn? How
            often do you go below the minimum required balance?
          </li>
          <li>
            <em>Step Three:</em> Armed with this information, check with several other area banks to find out what they
            charge for the same services. Do this over the phone, if you have the time, or ask for the information to be sent
            to you in the mail.
          </li>
          <li>
            <em>Step Four:</em> Now you are ready to go to your own bank. Speak to a manager. Say that you are looking to
            reduce your banking costs. Ask them to cut fees, and if they won't budge, tell them what the competition is
            offering. They may move on certain fees if they sense they will lose your business. Ask whether you can lower
            costs by using direct deposit, getting photocopies of canceled checks instead of the checks themselves, or
            opening another account or CD.
          </li>
        </ul>
        <Callout label="Tip">
          <p>Many banks offer free checking to seniors, students, or the disabled, if the depositor asks for this service.</p>
        </Callout>
        <Callout label="Tip">
          <p>If you decide to take your business elsewhere, don't overlook smaller banks, which may be more eager for your business.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'protecting-your-account',
    title: 'Protecting Your Account',
    body: (
      <>
        <h3>Overdraft Protection</h3>
        <p>
          Many people overlook a valuable service offered by banks: the overdraft protection line of credit. With this
          protection, if you write a check which would overdraw your account a loan is automatically made from a line of
          credit. With this protection, you will not bounce any checks.
        </p>
        <p>
          This type of service is most valuable to a self-employed individual whose business is seasonal. If there are times
          during the year when you have cash flow problems, the overdraft protection line of credit can save you headaches and
          at a lower interest rate than other forms of borrowing.
        </p>
        <p>
          Starting in 2010, automatic overdraft protection is no longer provided by banks and bank customers must opt-in for
          this protection. Don't neglect to inquire about this service if it would suit your situation.
        </p>

        <h3>Truth In Savings</h3>
        <p>
          The Truth in Savings Act, a federal law, requires depository institutions to disclose to you the important terms
          of their consumer deposit accounts. Institutions must tell you:
        </p>
        <ul>
          <li>The annual percentage yield and interest rate;</li>
          <li>Cost information, such as fees that may be charged; and</li>
          <li>
            Information about other features such as any minimum balance amount required to earn interest or to avoid
            fees.
          </li>
        </ul>
        <p>
          To help you shop for the best accounts, an institution must give you information about any consumer deposit account
          the institution offers if you ask for it. You will also get disclosures before you actually open an account.
        </p>
        <p>
          In addition, the Truth in Savings Act generally requires that interest and fee information be provided on any
          periodic statements sent to you. And if you have a roll-over CD that is longer than one month, the law requires
          also that you get a renewal notice before the CD matures.
        </p>

        <h3>Federal Deposit Insurance</h3>
        <p>
          Only <em>deposit accounts</em> at federally insured depository institutions are protected by federal deposit
          insurance. Generally, the government protects the money you have on deposit to a limit of $250,000. If an account
          is in trust or co-owned, there may be an effect on the amount of insurance coverage you have.
        </p>
        <Callout label="Tip">
          <p>
            Ask how the deposit insurance rules will apply to your deposit account. Federally insured depository
            institutions also offer products that are not protected by insurance. For example, you may purchase shares in a
            mutual fund or an annuity. These investments are not protected by the federal government.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            You can also check out the financial condition of your bank if you are concerned about protection for balances
            over $250,000.
          </p>
        </Callout>
        <Callout label="Planning aid">
          <p>
            See{' '}
            <a href="https://www.bankrate.com" {...external}>
              Bank Financial Condition Ratings
            </a>
            . This site provides ratings on the financial conditions of banks so that you can evaluate your institution.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'using-electronic-fund-transfers',
    title: 'Using Electronic Fund Transfers',
    body: (
      <>
        <p>
          The Electronic Fund Transfer (EFT) system is a national payment mechanism that moves money between accounts.
          Here are some of the ways EFT is in use:
        </p>
        <p>
          <em>Automated Teller Machines (ATMs).</em> You can bank electronically and get cash, make deposits, pay bills, or
          transfer funds from one account to another. ATM machines are used with a debit or EFT card and a code, which is
          often called a personal identification number or &ldquo;PIN.&rdquo;
        </p>
        <p>
          <em>Point-of-Sale (POS) Transactions.</em> Some EFT cards can be used when shopping to allow the transfer of funds
          from your account to the merchant's account. To pay for a purchase, you present an EFT card instead of a check or
          cash. Money is taken out of your account and put into the merchant's account electronically.
        </p>
        <p>
          <em>Pre-Authorized Transfers.</em> This is a method of automatically depositing to or withdrawing funds from an
          individual's account when the account holder authorizes the bank or a third party (such as an employer) to do so.
          For example, you can authorize direct electronic deposit of wages, Social Security, or dividend payments to their
          accounts. Or, you can authorize financial institutions to make regular, ongoing payments of insurance, mortgage,
          utility or other bills.
        </p>
        <p>
          <em>Telephone Transfers.</em> You can transfer funds from one account to another—from savings to checking, for
          example—or order payment of specific bills by phone.
        </p>
        <p>
          People who use EFT systems are often concerned about safeguards in the system. Since there is no check, that is,
          no piece of paper with information that authorizes a bank to withdraw a certain amount of money from your account
          and pay that amount to another person, EFT users wonder about record keeping, errors, and theft:
        </p>
        <ul>
          <li>What record—what evidence—exists for transactions?</li>
          <li>How easily can errors be corrected?</li>
          <li>What if someone steals money from the account?</li>
          <li>What about solicitations?</li>
          <li>Is it mandatory to use EFT services?</li>
        </ul>
        <p>
          The answers are found in a federal law the Electronic Funds Transfer Act. We have summarized the EFT's
          protections.
        </p>

        <h3>What Record Will I Have Of My Transactions?</h3>
        <p>A canceled check is permanent proof that a payment has been made. Is proof of payment available with EFT services?</p>
        <p>
          The answer is yes. If you use an ATM to withdraw money or make deposits, or a point-of-sale terminal to pay for a
          purchase, you can get a written receipt—much like the sales receipt you get with a cash purchase—showing the amount
          of the transfer, the date it was made, and other information. This receipt is your record of transfers initiated
          at an electronic terminal.
        </p>
        <p>
          Your periodic bank statement must also show all electronic transfers to and from your account, including those
          made with debit cards, by a pre-authorized arrangement, or under a telephone transfer plan. It will also name the
          party to whom payment has been made and show any fees for EFT services (or the total amount charged for account
          maintenance) and your opening and closing balances.
        </p>
        <p>
          Your monthly statement is proof of payment to another person, your record for tax or other purposes, and your way
          of checking and reconciling EFT transactions with your bank balance.
        </p>

        <h3>What About Loss Or Theft?</h3>
        <p>
          It's important to be aware of the potential risk in using an EFT card, specifically, that the risks differ from
          those involved with credit cards. On lost or stolen credit cards, your loss is limited to $50 per card. On an EFT
          card, your liability for an unauthorized withdrawal can vary:
        </p>
        <ul>
          <li>
            Your loss is limited to $50 if you notify the financial institution within two business days after learning of
            loss or theft of your card or code.
          </li>
          <li>
            But you could lose as much as $500 if you do not tell the card issuer within two business days after learning
            of the loss or theft.
          </li>
        </ul>
        <p>
          If you do not report an unauthorized transfer that appears on your statement within 60 days after the statement
          is mailed to you, you risk unlimited loss on transfers made after the 60-day period. That means you could lose all
          the money in your account plus your maximum overdraft line of credit.
        </p>
        <Callout label="Example">
          <p>
            On Monday, John's debit card and secret code were stolen. On Tuesday, the thief withdrew $250, all the money John
            had in his checking account. Five days later, the thief withdrew another $500, triggering John's overdraft line
            of credit. John did not realize his card was stolen until he received a statement from the bank, showing
            withdrawals of $750 he did not make. He called the bank right away. John's liability is $50.
          </p>
        </Callout>
        <Callout label="Example">
          <p>
            Now suppose that when John got his bank statement he didn't look at it and didn't call the bank. Seventy days
            after the statement was mailed to John, the thief withdrew another $1,000, reaching the limit on John's line of
            credit. In this case, John would be liable for $1,050 ($50 for transfers before the end of the 60 days; $1,000
            for transfers made more than 60 days after the statement was mailed).
          </p>
        </Callout>

        <h3>What About Solicitations?</h3>
        <p>
          A financial institution may send you an EFT card that is valid for use only if you ask for one, or to replace or
          renew an expiring card. The financial institution must also give you the following information about your rights
          and responsibilities:
        </p>
        <ul>
          <li>A notice of your liability in case the card is lost or stolen;</li>
          <li>A telephone number for reporting loss or theft of the card or an unauthorized transfer;</li>
          <li>A description of its error resolution procedures;</li>
          <li>
            The kinds of electronic fund transfers you may make and any limits on the frequency or dollar amounts of such
            transfers;
          </li>
          <li>Any charge by the institution for using EFT services;</li>
          <li>Your right to receive records of electronic fund transfers;</li>
          <li>How to stop payment of a pre-authorized transfer;</li>
          <li>The financial institution's liability to you for any failure to make or to stop transfers; and</li>
          <li>The conditions under which a financial institution will give information to third parties about your account.</li>
        </ul>
        <p>
          Generally, you must also get advance notice of any change in the account that would increase your costs or
          liability, or limit transfers.
        </p>
        <p>
          A financial institution may send you a card you did not request only if the card is not valid for use. An
          &ldquo;unsolicited&rdquo; card can be validated only at your request and only after the institution makes sure that
          you are the person whose name is on the card. It must also be sent with instructions on how to dispose of an
          unwanted card.
        </p>

        <h3>Do I Have To Use EFT?</h3>
        <p>
          The EFT Act forbids a creditor from requiring you to repay a loan or other credit by EFT, except in the case of
          overdraft checking plans.
        </p>
        <p>
          Although your employer or a government agency can require you to receive your salary or a government benefit by
          electronic transfer, you have the right to choose the financial institution that will receive your funds.
        </p>
      </>
    ),
  },
  {
    id: 'common-questions-about-pre-authorized-plans',
    title: 'Common Questions About Pre-Authorized Plans',
    body: (
      <>
        <p>Here are some frequently asked questions about pre-authorized plans:</p>

        <h3>How will I know a pre-authorized credit has been made?</h3>
        <p>
          There are various ways you may be notified. Notice may be given by your employer (or whoever is sending the funds)
          that the deposit has been sent to your financial institution. Otherwise, a financial institution may provide notice
          when it has received the credit or will send you a notice only when it has not received the funds. Financial
          institutions also have the option of giving you a telephone number you can call to check on a pre-authorized credit.
        </p>

        <h3>How do I stop a pre-authorized payment?</h3>
        <p>
          You may stop any pre-authorized payment by calling or writing the financial institution so that your order is
          received at least three business days before the payment date. Written confirmation of a telephone notice to stop
          payment may be required.
        </p>

        <h3>If the payments I pre-authorize vary in amount from month to month, how will I know how much will be transferred out of my account?</h3>
        <p>You have the right to be notified of all varying payments at least 10 days in advance.</p>
        <p>
          Or, you may choose to specify a range of amounts and to be told only when a transfer falls outside that range. You
          may also choose to be told only when a transfer differs by a certain amount from the previous payment to the same
          company.
        </p>

        <h3>Do the EFT Act protections apply to all pre-authorized plans?</h3>
        <p>
          No. They do not apply to automatic transfers from your account to the institution that holds your account or vice
          versa. For example, they do not apply to automatic payments made on a mortgage held by the financial institution
          where you have your EFT account. The EFT Act also does not apply to automatic transfers among your accounts at one
          financial institution.
        </p>
      </>
    ),
  },
  {
    id: 'correcting-errors',
    title: 'Correcting Errors',
    body: (
      <>
        <ol>
          <li>
            If you believe that there is an error in your bank account write or call your bank immediately if possible, but
            no later than 60 days from the date the first statement that you think shows an error was mailed to you. Give your
            name and account number and explain why you believe there is an error, what kind of error, and the dollar amount
            and date in question. If you call, you may be asked to send this information in writing within 10 business days.
          </li>
          <li>
            The bank must promptly investigate an error and resolve it within 45 days. However, if the bank takes longer than
            10 business days to complete its investigation, generally it must put back into your account the amount in
            question while it finishes the investigation.
          </li>
          <li>
            The financial institution must notify you of the results of its investigation. If there was an error, the
            institution must correct it promptly for example, by making a re-credit final.
          </li>
          <li>
            If it finds no error, the bank must explain in writing why it believes no error occurred and let you know that it
            has deducted any amount re-credited during the investigation. You may ask for copies of documents relied on in the
            investigation.
          </li>
        </ol>
        <Callout label="Note">
          <p>
            The time periods are longer for point-of-service debit card transactions and for any EFT transaction initiated
            outside the United States. In the meantime, you will have full use of the funds in question.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'government-and-non-profit-agencies',
    title: 'Government and Non-Profit Agencies',
    body: (
      <>
        <p>
          The following federal agencies are responsible for making sure that depository institutions follow the federal
          Truth in Savings Act. Questions about an institution should be directed as follows:
        </p>
        <Agencies agencies={agencies} />
      </>
    ),
  },
];

export default function BankAccounts() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/dealing-with-your-bank"
      page="Bank Accounts"
      title={<>Bank Accounts: <em>What To Look and Ask For</em></>}
      lead="What type of account should you keep your money in at a bank or savings and loan association? How can you find the account that will charge you the least amount of money for the services you need? This Financial Guide helps you choose the most cost-effective type of account."
      sections={sections}
    >
      <p>
        Bank accounts are a basic part of managing your money and nearly everyone has a bank account of some sort, whether
        it's a checking, savings, or money market account.
      </p>
      <p>
        Features and costs of accounts can vary greatly among institutions, so it is important to shop around when looking
        for a new account. You should also ask questions and negotiate fees and services with your current account. You may
        discover that you do not need to pay many of the fees you are currently paying.
      </p>
      <p>
        This Financial Guide discusses the various types of bank accounts and provides suggestions for finding the lowest-cost
        account that will provide you with the services you want. In addition, it tells you what you need to know about
        Electronic Funds Transfers—how to get the best use from ATM cards, pre-authorized transfers, and point-of-service
        payments.
      </p>
    </GuideArticle>
  );
}
