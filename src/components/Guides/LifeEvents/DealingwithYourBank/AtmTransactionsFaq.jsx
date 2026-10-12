import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=162 (ATM Transactions: Frequently Asked
// Questions), word for word from the live page.
// Address: /guides/life-events/dealing-with-your-bank/atm-transactions-faq (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'how-electronic-transfers-work',
    title: 'How do automated teller machine (ATM) and other electronic transfer transactions work?',
    body: (
      <>
        <p>There are various transactions that fall under the umbrella term &ldquo;electronic funds transfer.&rdquo;</p>
        <p>
          <strong>Automated Teller Machines (ATMs).</strong> You can bank electronically and get cash, make deposits, pay
          bills, or transfer funds from one account to another. ATM machines are used with a debit or EFT card and a code,
          which is often called a personal identification number or &ldquo;PIN.&rdquo;
        </p>
        <p>
          <strong>Point-of-Sale (POS) Transactions.</strong> Some EFT cards can be used when shopping to allow the transfer
          of funds from your account to the merchant's. To pay for a purchase, you present an EFT card instead of a check or
          cash. Money is taken out of your account and put into the merchant's account electronically.
        </p>
        <p>
          <strong>Preauthorized Transfers.</strong> This is a method of automatically depositing to or withdrawing funds from
          an individual's account, when the account holder authorizes the bank or a third party (such as an employer) to do so.
          For example, you can authorize direct electronic deposit of wages, Social Security, or dividend payments to their
          accounts. Or, you can authorize financial institutions to make regular, ongoing payments of insurance, mortgage,
          utility or other bills.
        </p>
        <p>
          <strong>Telephone Transfers.</strong> You can transfer funds from one account to another—from savings to checking,
          for example—or order payment of specific bills by phone.
        </p>
        <p>
          People who use EFT systems are often concerned about safeguards in the system. Since there is no check—no piece of
          paper with information that authorizes a bank to withdraw a certain amount of money from your account and pay that
          amount to another person—EFT users wonder about recordkeeping, errors, and theft:
        </p>
        <p>
          <strong>Recordkeeping.</strong> When you use an ATM to withdraw money or make deposits, or a point-of-sale terminal
          to pay for a purchase, you get a written receipt—much like the sales receipt you get with a cash purchase—showing
          the amount of the transfer, the date it was made, and other information. This receipt is your record of transfers
          initiated at an electronic terminal.
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
      </>
    ),
  },
  {
    id: 'reporting-errors',
    title: 'What should I do if I find an error related to an electronic fund transfer or ATM transaction?',
    body: (
      <>
        <p>If you believe there has been an error in an electronic fund transfer relating to your account:</p>
        <ol>
          <li>
            Write or call your financial institution immediately if possible, but no later than 60 days from the date the
            first statement that you think shows an error was mailed to you. Give your name and account number and explain why
            you believe there is an error, what kind of error, and the dollar amount and date in question. If you call, you
            may be asked to send this information in writing within 10 business days.
          </li>
          <li>
            The financial institution must promptly investigate an error and resolve it within 45 days. However, if the
            financial institution takes longer than 10 business days to complete its investigation, generally it must put
            back into your account the amount in question while it finishes the investigation. In the meantime, you will have
            full use of the funds in question. You should also be aware that the time periods are longer for point-of-service
            debit card transactions and for any EFT transaction initiated outside the United States.
          </li>
          <li>
            The financial institution must notify you of the results of its investigation. If there was an error, the
            institution must correct it promptly, for example, by recrediting your account. If it finds no error, the
            financial institution must explain in writing why it believes no error occurred and let you know that it has
            deducted any amount re-credited during the investigation. You may ask for copies of documents relied on in the
            investigation.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'lost-or-stolen',
    title: 'What happens if my ATM card is lost or stolen?',
    body: (
      <>
        <p>
          If your credit, ATM, or debit card is lost or stolen, federal law limits your liability for charges made without
          your permission, but your protection depends on the type of card—and when you report the loss.
        </p>
        <p>
          It's important to be aware of the potential risk in using an ATM or other Electronic Funds Transfer card. Note that
          the risks differ from those involved with credit cards. For example, with a lost or stolen credit card, your loss
          is limited to $50 per card if you report your card's loss after someone uses it. However, if you report it before
          anyone uses the card you aren't responsible for any charges you didn't authorize. That's why it is important to
          act quickly.
        </p>
        <p>On an ATM or debit card, your liability for an unauthorized withdrawal varies depending on how quickly it is reported:</p>
        <ul>
          <li>
            Your loss is limited to $50 if you notify the financial institution within two business days after learning of
            loss or theft of your card or code.
          </li>
          <li>
            But you could lose as much as $500 if you do not tell the card issuer within two business days after learning of
            the loss or theft.
          </li>
        </ul>
        <p>
          If you report your ATM or debit card lost or stolen before any unauthorized charges are made, your maximum loss is
          $0. If you do not report an unauthorized transfer that appears on your statement within 60 days after the statement
          is mailed to you, you risk unlimited loss on transfers made after the 60-day period. That means you could lose all
          the money in your account plus your maximum overdraft line of credit.
        </p>
      </>
    ),
  },
  {
    id: 'overseas-use',
    title: 'Will I be able to use my ATM card overseas?',
    body: (
      <>
        <p>
          There are now hundreds of thousands of ATMs in more than 100 countries in both major cities and more remote
          locations such as villages in the Peruvian Andes. Before you go however, check with your financial institution to
          be sure there is an ATM at your destination, especially in a developing country. You can also check online. Both
          Visa and MasterCard have online services to pinpoint ATMs anywhere in the world.
        </p>
        <p>
          ATM cards can be very useful to travelers. They are safer than carrying cash because card issuers often will absorb
          any unauthorized withdrawals if you report your card stolen or missing right away. You can withdraw cash in local
          currency at a better exchange rate than you can get with traveler's checks. And you have access to money after
          hours or on weekends when banks are closed. The down side is that the fees banks charge on ATM transactions may make
          it expensive to change small amounts of money.
        </p>
      </>
    ),
  },
  {
    id: 'pre-authorized-credits',
    title: 'How will I know a pre-authorized credit (such as automatic payroll deposit) has been made?',
    body: (
      <p>
        There are various ways you may be notified. Notice may be given by your employer (or whoever is sending the funds)
        that the deposit has been sent to your financial institution. Otherwise, a financial institution may provide
        notice when it has received the credit or will send you a notice only when it has not received the funds.
      </p>
    ),
  },
  {
    id: 'stopping-pre-authorized-payments',
    title: 'How do I stop a pre-authorized payment?',
    body: (
      <p>
        To stop the next scheduled payment, give your bank the stop payment order at least three business days before the
        payment is scheduled. You can give the order in person, over the phone or in writing. To stop future payments, you
        might have to send your bank the stop payment order in writing.
      </p>
    ),
  },
  {
    id: 'protecting-against-fraud',
    title: 'How do I protect my ATM and debit cards against fraud?',
    body: (
      <ol>
        <li>Carry only those cards that you anticipate you'll need.</li>
        <li>Don't carry your PIN in your wallet or purse or write it on your ATM or debit card.</li>
        <li>Never write your PIN on the outside of a deposit slip, an envelope, or other papers that could be easily lost or seen.</li>
        <li>
          Carefully check ATM or debit card transactions before you enter the PIN or before you sign the receipt; the funds
          for this item will be fairly quickly transferred out of your checking or other deposit account.
        </li>
        <li>
          Check your account activity frequently especially if you bank online. Hackers and scammers are rampant in today's
          internet world. Compare the current balance and recent withdrawals or transfers to those you've recorded,
          including your current ATM and debit card withdrawals and purchases and your recent checks. If you notice
          transactions you didn't make, or if your balance has dropped suddenly without activity by you, immediately report
          the problem to your card issuer. Someone may have co-opted your account information to commit fraud.
        </li>
        <li>
          Open monthly statements promptly and compare them with your receipts. Report mistakes or discrepancies as soon as
          possible to the special address listed on your statement for inquiries. Under the FCBA (credit cards) and the EFTA
          (ATM or debit cards), the card issuer must investigate errors reported to them within 60 days of the date your
          statement was mailed to you.
        </li>
      </ol>
    ),
  },
];

export default function AtmTransactionsFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/dealing-with-your-bank"
      page="ATM Transactions: Frequently Asked Questions"
      title={<>ATM Transactions: <em>Frequently Asked Questions</em></>}
      lead="Automated teller machines and debit cards provide fast access to your money worldwide. Learn how electronic transfers work, how to correct errors, and how to safeguard your cards against loss and fraud."
      sections={sections}
    />
  );
}
