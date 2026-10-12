import GuideArticle from '../GuideArticle.jsx';

// Source: cpataxadviser.com/taxstrategies-businessowners.php?item=141 (Recordkeeping: Frequently Asked
// Questions), word for word. The library's page has no introduction, so the banner's opening line
// (`lead`) is written for this site, as on the other FAQ pages. The bold lead-ins within the answers
// are subheadings, and the hyphen used as a dash is a dash. Typing slip fixed: the stray full stop
// in "all functions in your business. in which speed" is dropped. "computerize list, identify", the
// "diskette" and the "(CRT)" screen are as the library has them. Back-to-top anchors omitted. Tax
// Strategies has no topic pages, so the breadcrumb ends at the category.
// Address: /guides/tax-strategies/recordkeeping-faq (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'records-to-keep',
    title: 'What kind of records do I need to keep in my business?',
    body: (
      <>
        <p>
          Complete and accurate financial record keeping is crucial to your business success. Good records provide the
          financial data that helps you operate more efficiently. Accurate and complete records enable you to identify all
          your business assets, liabilities, income, and expenses. That information helps you pinpoint both the strong and
          weak phases of your business operations.
        </p>
        <p>
          Moreover, good records are essential for the preparation of current financial statements, such as the income
          statement (profit and loss) and cash-flow projection. These statements, in turn, are critical for maintaining
          good relations with your banker. Finally, good records help you avoid underpaying or overpaying your taxes. In
          addition, good records are essential during an Internal Revenue Service audit, if you hope to answer questions
          accurately and to the satisfaction of the IRS.
        </p>
        <p>
          To assure your success, your financial records should show how much income you are generating now and project
          how much income you can expect to generate in the future. They should inform you of the amount of cash tied up in
          accounts receivable. Records also need to indicate what you owe for merchandise, rent, utilities, and equipment,
          as well as such expenses as payroll, payroll taxes, advertising, equipment and facilities maintenance, and benefit
          plans for yourself and employees. Records will tell you how much cash is on hand and how much is tied up in
          inventory. They should reveal which of your product lines, departments, or services are making a profit, as well
          as your gross and net profit.
        </p>
        <h3>The Basic Recordkeeping System</h3>
        <p>
          A basic record-keeping system needs a basic journal to record transactions, accounts receivable records,
          accounts payable records, payroll records, petty cash records, and inventory records.
        </p>
        <p>
          An accountant can develop the entire system most suitable for your business needs and train you in maintaining
          these records on a regular basis. These records will form the basis of your financial statements and tax
          returns.
        </p>
      </>
    ),
  },
  {
    id: 'automating',
    title: 'What do I need to know about automating part or all of my business?',
    body: (
      <>
        <p>
          You must have a clear understanding of your firm's long- and short-range goals, the advantages and disadvantages
          of all of the alternatives to a computer and, specifically, what you want to accomplish with a computer. Compare
          the best manual (non-computerized) system you can develop with the computer system you hope to get. It may be
          possible to improve your existing manual system enough to accomplish your goals. In any event, one cannot
          automate a business without first creating and improving manual systems.
        </p>
        <h3>Business Applications Performed by Computers</h3>
        <p>
          A computer's multiple capabilities can solve many business problems from keeping transaction records and
          preparing statements and reports to maintaining customer and lead lists, creating brochures, and paying your
          staff. A complete computer system can organize and store many similarly structured pieces of information, perform
          complicated mathematical computations quickly and accurately, print information quickly and accurately,
          facilitate communications among individuals, departments, and branches, and link the office to many sources of
          data available through larger networks. Computers can also streamline such manual business operations as
          accounts receivable, advertising, inventory, payroll, and planning. With all of these operations, the computer
          increases efficiency, reduces errors, and cuts costs.
        </p>
        <h3>Computer Business Applications</h3>
        <p>
          Computers also can perform more complicated operations, such as financial modeling programs that prepare and
          analyze financial statements and spreadsheet and accounting programs that compile statistics, plot trends and
          markets and do market analysis, modeling, graphs, and forms. Various word processing programs produce typewritten
          documents and provide text-editing functions while desktop publishing programs enable you to create good quality
          print materials on your computer. Critical path analysis programs divide large projects into smaller, more easily
          managed segments or steps.
        </p>
      </>
    ),
  },
  {
    id: 'choosing-a-system',
    title: "How can I ensure that I'm choosing the right computer system?",
    body: (
      <>
        <p>
          To computerize your business you need to choose the best programs for your business, select the right equipment,
          and then implement the various applications associated with the software. In addition, application software is
          composed of programs that make the computer perform particular functions, such as payroll check writing, accounts
          receivable, posting or inventory reporting and are normally purchased separately from the computer hardware.
          QuickBooks is a good example of this type of software.
        </p>
        <p>
          To determine your requirements, prepare a list of all functions in your business in which speed and accuracy are
          needed for handling volumes of information. These are called applications.
        </p>
        <p>
          For each of these applications make a list of all reports that are currently produced. You should also include
          any pre-printed forms such as checks, billing statements or vouchers. If such forms don't exist, develop a good
          idea of what you want—a hand-drawn version will help. For each report list the frequency with which it is to be
          generated, who will generate it and the number of copies needed. In addition to printed matter, make a list of
          information that you want to display on the computer video screen (CRT).
        </p>
        <p>
          For all files you are keeping manually or expect to computerize list, identify how you retrieve a particular
          entry. Do you use account numbers or are they organized alphabetically by name? What other methods would you like
          to use to retrieve a particular entry? Zip code? Product purchased? Indeed, the more detailed you are, the better
          your chance of finding programs compatible with your business.
        </p>
      </>
    ),
  },
  {
    id: 'implementing',
    title: 'How can I successfully implement a new computer system?',
    body: (
      <>
        <p>
          When implementing computer applications for your business, problems are inevitable, but proper planning can help
          you avoid some and mitigate the effects of others. First, explain to each affected employee how the computer will
          change his or her position. Set target dates for key phases of the implementation, especially the last date for
          format changes. Be sure the location for your new computer meets the system's requirements for temperature,
          humidity, and electrical power. Prepare a prioritized list of applications to be converted from manual to
          computer systems, and then train, or have the vendors train, everyone who will be using the system.
        </p>
        <p>
          After installation, each application on the conversion list should be entered and run parallel with the
          preexisting, corresponding manual system until you have verified that the new system works.
        </p>
        <h3>System Security</h3>
        <p>
          If you will have confidential information in your system, you will want safeguards to keep unauthorized users from
          stealing, modifying or destroying the data. You can simply lock up the equipment, or you can install user
          identification and password software.
        </p>
        <h3>Data Safety</h3>
        <p>
          The best and cheapest insurance against lost data is to back up information on each diskette regularly. Copies
          should be kept in a safe place away from the business site. Also, it is useful to have and test a disaster
          recovery plan and to identify all data, programs, and documents needed for essential tasks during recovery from a
          disaster.
        </p>
        <p>
          Finally, be sure to employ more than one person who can operate the system, and ensure that all systems are
          continually monitored.
        </p>
      </>
    ),
  },
];

export default function BusinessRecordkeepingFaq() {
  return (
    <GuideArticle
      category="tax-strategies"
      page="Recordkeeping: Frequently Asked Questions"
      title={
        <>
          Recordkeeping: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about the records your business needs to keep, automating your recordkeeping, choosing a computer system, and putting a new system in place."
      sections={sections}
    />
  );
}
