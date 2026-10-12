import { Link } from 'react-router';
import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/business-strategies.php?item=122 (Raising Capital: How To Get Money For a
// Small Business), word for word. Back-to-top and "Back to Programs" links are omitted (the layout
// and the programs list handle both). The library's table of contents hides "Quick Reference to SBA
// Loan Programs", but its two program summaries are on the page, so they are a section here under
// that name. The library's broken lists are rebuilt as the lists they are meant to be: the loan
// application checklist (split there into many lists) is one numbered list, and the disaster loan
// types are one list whose items keep their paragraphs. The micro-loan text the library hides is
// left out, as there. Hyphens used as dashes are now dashes, and the "Note" box keeps the library's
// label. SBA links go to the addresses their old ones now redirect to; the size-standards page, the
// CAPLines overview, and Form 1919 (dead links in the library) go to the SBA's current pages for
// them.
// Address: /guides/business-strategies/starting-a-business/raising-capital (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sba = {
  sevenA: 'https://www.sba.gov/sba-lenders/#types-7a-loans',
  sizeStandards: 'https://www.sba.gov/counseling/get-started/#size-standards',
  eligibility: 'https://www.sba.gov/sba-lenders/#7a-terms',
  form1919: 'https://legacy.sba.gov/document/sba-form-1919-borrower-information-form',
  form912: 'https://legacy.sba.gov/document/sba-form-912-statement-personal-history',
  form413: 'https://legacy.sba.gov/document/sba-form-413-personal-financial-statement',
  microloans: 'https://www.sba.gov/loans/microloans/',
  caplines: 'https://www.sba.gov/loans/7a-loans/',
  exportLoans: 'https://www.sba.gov/counseling/trade-tools-for-international-sales/#export-finance-programs',
  disaster: 'https://www.sba.gov/disaster/',
  loans504: 'https://www.sba.gov/loans/504-loans/',
  districtOffices: 'https://www.sba.gov/about-sba/sba-district-offices/',
  home: 'https://www.sba.gov/',
};

const programs = [
  ['sba-7a', '7(a) Loan and 7(m) Microloan Programs'],
  ['sba-caplines', 'CAPLines Program'],
  ['sba-export-working-capital', 'Export Working Capital and International Trade Loans'],
  ['sba-disaster', 'Disaster Assistance Loans'],
  ['sba-express', 'SBA Express'],
  ['sba-504', 'Certified Development Company (CDC) 504 Loan Program'],
];

const sections = [
  {
    id: 'sources-of-money',
    title: 'Finding Sources of Money',
    body: (
      <>
        <p>
          There are several sources to consider when looking for financing. It is important to explore all of your
          options before making a decision. These include:
        </p>
        <ul>
          <li>
            <strong>Personal Savings.</strong> The primary source of capital for most new businesses comes from savings
            and other forms of personal resources. While credit cards are often used to finance business needs, there may
            be better options available, even for very small loans.
          </li>
          <li>
            <strong>Friends and Relatives.</strong> Many entrepreneurs look to private sources such as friends and family
            when starting out in a business venture. Often, money is loaned interest free or at a low interest rate, which
            can be beneficial when getting started.
          </li>
          <li>
            <strong>Banks and Credit Unions.</strong> The most common source of funding, banks and credit unions, will
            provide a loan if you can show that your business proposal is sound.
          </li>
          <li>
            <strong>Venture Capital Firms.</strong> These firms help expanding companies grow in exchange for equity or
            partial ownership.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'borrowing-money',
    title: 'Borrowing Money',
    body: (
      <>
        <p>
          It is often said that small business people have a difficult time borrowing money, but this is not necessarily
          true. Banks make money by lending money; however, the inexperience of many small business owners in financial
          matters often prompts banks to deny loan requests.
        </p>
        <p>
          Requesting a loan when you are not properly prepared sends a signal to your lender. That message is: "High
          Risk!" To be successful in obtaining a loan, you must be prepared and organized. You must know exactly how much
          money you need, why you need it, and how you will pay it back. You must be able to convince your lender that you
          are a good credit risk.
        </p>
        <p>
          The bank official who reviews the loan request is focused on repayment. Most loan officers request a copy of
          your business credit report to determine your ability to repay. The lending officer will consider the following
          issues while using the information you provided and the credit report:
        </p>
        <ul>
          <li>
            Have you invested at least 25% or 50% of savings or personal equity into the business for the loan you are
            requesting? (Keep in mind that 100% of your business will not be financed by an investor.)
          </li>
          <li>
            Do your work history, your credit report and letters of recommendation show a healthy record of credit
            worthiness? This is a key factor.
          </li>
          <li>Do you have the training and experience necessary to operate a successful business?</li>
          <li>Do your loan proposal and business plan document your knowledge of and dedication to the success of the business?</li>
          <li>Is the cash flow of the business sufficient to make the monthly payments on the requested loan?</li>
        </ul>
        <p>Terms of loans may vary from lender to lender, but there are two basic types of loans: short-term and long-term.</p>
        <p>
          A short-term loan generally has a maturity date of one year. These include working capital loans, accounts
          receivable loans, and lines of credit.
        </p>
        <p>
          Long-term loans generally mature between one and seven years. Real estate and equipment loans are also
          considered long-term loans but may have a maturity date of up to 25 years. Long-term loans are used for major
          business expenses such as purchasing real estate and facilities, construction, durable equipment, furniture and
          fixtures, vehicles, etc.
        </p>
      </>
    ),
  },
  {
    id: 'loan-proposal',
    title: 'How to Write a Loan Proposal',
    body: (
      <>
        <p>
          Approval of your loan request depends on how well you present yourself, your business and your financial needs
          to a lender. Remember, lenders want to make loans, but they must make loans they know will be repaid. The best
          way to improve your chances of obtaining a loan is to prepare a written proposal.
        </p>
        <p>A good loan proposal will contain the following key elements:</p>

        <h3>General Information</h3>
        <ul>
          <li>Business name, names of principals, social security number for each principal, and the business address.</li>
          <li>Purpose of the loan: exactly what the loan will be used for and why it is needed.</li>
          <li>Amount required: the exact amount you need to achieve your purpose.</li>
        </ul>

        <h3>Business Description</h3>
        <ul>
          <li>
            History and nature of the business: details of what kind of business it is, its age, number of employees and
            current business assets.
          </li>
          <li>Ownership structure: details on your company's legal structure.</li>
        </ul>

        <h3>Management Profile</h3>
        <p>
          Develop a short statement on each principal in your business; provide background, education, experience, skills,
          and accomplishments.
        </p>

        <h3>Market Information</h3>
        <p>
          Clearly define your company's products as well as your markets. Identify your competition and explain how your
          business competes in the marketplace. Profile your customers and explain how your business can satisfy their
          needs.
        </p>

        <h3>Financial Information</h3>
        <ul>
          <li>
            Financial statements: balance sheets and income statements for the past three years. If you are just starting
            out, provide projected balance sheets and income statements.
          </li>
          <li>Personal financial statements on yourself and other principal owners of the business.</li>
          <li>Collateral you would be willing to pledge as security for the loan.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'loan-review',
    title: 'How Your Loan Request Will Be Reviewed',
    body: (
      <>
        <p>
          When reviewing a loan request, the bank official is primarily concerned about repayment. To help determine this
          ability, many loan officers will order a copy of your business credit report from a credit-reporting agency.
          Therefore, you should work with these agencies to help them present an accurate picture of your business. Using
          the credit report and the information you have provided, the lending officer will consider the following issues:
        </p>
        <ul>
          <li>
            Have you invested savings or personal equity in your business totaling at least 25 to 50 percent of the loan you
            are requesting? (Remember, a lender or investor will not finance 100 percent of your business.)
          </li>
          <li>
            Do you have a sound record of credit-worthiness as indicated by your credit report, work history and letters of
            recommendation? This is very important.
          </li>
          <li>Do you have sufficient experience and training to operate a successful business?</li>
          <li>
            Have you prepared a loan proposal and business plan that demonstrate your understanding of and commitment to the
            success of the business?
          </li>
          <li>Does the business have sufficient cash flow to make the monthly payments on the amount of the loan request?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'sba-programs',
    title: 'SBA Programs',
    body: (
      <>
        <p>
          The SBA offers a variety of financing options for small businesses. The SBA's assistance usually is in the form
          of loan guarantees; i.e., it guarantees loans made by banks and other private lenders to small business clients.
          Generally, the SBA can guarantee up to $3.75 million or 75 percent of the total loan value. The average size of
          an SBA-guaranteed loan is $368,737.
        </p>
        <p>
          Whether you are looking for a long-term loan for machinery and equipment, a general working capital loan, a
          revolving line of credit, or a "microloan," the SBA has a financing program to fit your needs.
        </p>
        <Callout label="Note">
          <p>
            The SBA guaranteed more than 50,000 loans totaling $19.2 billion to America's small businesses small businesses
            in fiscal year 2014 that otherwise would not have had such access to capital. It also provides assistance to
            small businesses and aspiring entrepreneurs through its Small Business Development Centers located throughout
            the United States and its territories.
          </p>
        </Callout>
        <p>
          The 7(a) Loan Guaranty Program, financing that can satisfy the requirements of almost any new or growing small
          business. The SBA offers a number of specialized loan and lender delivery programs.
        </p>
        <ul>
          {programs.map(([id, name]) => (
            <li key={id}>
              <Link to={`#${id}`}>{name}</Link>
            </li>
          ))}
        </ul>

        <h3 id="sba-7a">The 7(a) Loan Guaranty Program</h3>
        <p>
          The{' '}
          <a href={sba.sevenA} {...external}>
            7(a) Loan Guaranty Program
          </a>{' '}
          is the SBA's primary loan program. The SBA reduces risk to lenders by guaranteeing major portions of loans made
          to small businesses. This enables the lenders to provide financing to small businesses when funding is otherwise
          unavailable on reasonable terms.
        </p>
        <p>
          The eligibility requirements and credit criteria of the program are very broad in order to accommodate a wide
          range of financing needs.
        </p>
        <p>
          When a small business applies to a lending institution for a loan, the lender reviews the application and
          decides if it merits a loan on its own or if it requires additional support in the form of an SBA guaranty. SBA
          backing on the loan is then requested by the lender. In guaranteeing the loan, the SBA assures the lender that,
          in the event, the borrower does not repay the loan, the government will reimburse the lender for its loss. By
          providing this guaranty, the SBA helps tens of thousands of small businesses every year get financing they would
          not otherwise obtain.
        </p>
        <p>
          To qualify for an SBA guaranty, a small business must meet the 7(a) criteria and the lender must certify that it
          could not provide funding on reasonable terms except with an SBA guaranty. SBA can guarantee as much as 85
          percent on loans of up to $150,000 and 75 percent on loans of more than $150,000. SBA's maximum exposure amount is
          $3,750,000. Thus, if a business receives an SBA-guaranteed loan for $5 million, the maximum guarantee to the
          lender will be $3,750,000 or 75 percent. SBA Express loans have a maximum guarantee set at 50 percent.
        </p>
        <p>
          <strong>How The Procedure Works.</strong> You submit a loan application to a lender for initial review. If the
          lender approves the loan subject to an SBA guaranty, a copy of the application and a credit analysis are
          forwarded by the lender to the nearest SBA office. After SBA approval, the lending institution closes the loan and
          disburses the funds; you make monthly loan payments directly to the lender. As with any loan, you are responsible
          for repaying the full amount of the loan. There are no balloon payments, prepayment penalties, application fees
          or points permitted with 7(a) loans. Repayment plans may be tailored to each individual business.
        </p>
        <p>
          <strong>Permissible Use of Proceeds.</strong> You can use a 7(a) loan to expand or renovate facilities; purchase
          machinery, equipment, fixtures and leasehold improvements; finance receivables and augment working capital;
          refinance existing debt (with compelling reason); finance seasonal lines of credit; construct commercial
          buildings; and/or purchase land or buildings.
        </p>
        <p>
          <strong>Terms.</strong> The SBA's loan programs are generally intended to encourage longer term small-business
          financing. However, actual loan maturities are based on the ability to repay, the purpose of the loan proceeds
          and the useful life of the assets financed. However, maximum loan maturities have been established: 25 years for
          real estate, up to 10 years for equipment (depending on the useful life of the equipment) and generally up to
          seven years for working capital. Short-term loans and revolving lines of credit are also available through the
          SBA to help small businesses meet their short-term and cyclical working capital needs.
        </p>
        <p>
          <strong>Interest Rates.</strong> Both fixed and variable interest rate structures are available. The maximum rate
          is composed of two parts, a base rate, and an allowable spread. There are three acceptable base rates (A prime
          rate published in a daily national newspaper, London Interbank One Month Prime plus 3 percent and an SBA Peg
          Rate).
        </p>
        <p>
          Lenders are allowed to add an additional spread to the base rate to arrive at the final rate. For loans with
          maturities of shorter than seven years, the maximum spread will be no more than 2.25 percent. For loans with
          maturities of seven years or more, the maximum spread will be 2.75 percent. The spread on loans of less than
          $50,000 and loans processed through Express procedures have higher maximums.
        </p>
        <p>
          <strong>Fees.</strong> Loans guaranteed by the SBA are assessed a guarantee fee. This fee is based on the loan's
          maturity and the dollar amount guaranteed, not the total loan amount. The lender initially pays the guaranty fee
          and they have the option to pass that expense on to the borrower at closing. The funds to reimburse the lender
          can be included in the overall loan proceeds.
        </p>
        <p>
          On loans under $150,000 made after October 1, 2013, the fees will be set at zero percent. On any loan greater
          than $150,000 with a maturity of one year or shorter, the fee is 0.25 percent of the guaranteed portion of the
          loan. On loans with maturities of more than one year, the normal fee is 3 percent of the SBA-guaranteed portion
          on loans of $150,000 to $700,000, and 3.5 percent on loans of more than $700,000. There is also an additional fee
          of 0.25 percent on any guaranteed portion of more than $1 million.
        </p>
        <p>
          <strong>Collateral.</strong> The SBA expects every 7(a) loan to be fully secured, but the SBA will not decline a
          request to guarantee a loan if the only unfavorable factor is insufficient collateral, provided all available
          collateral is offered. This means every SBA loan is to be secured by all available assets (both business and
          personal) until the recovery value equals the loan amount or until all assets have been pledged (to the extent
          that they are reasonably available). Personal guarantees are required from all owners of 20 percent or more of
          the equity of the business, and lenders can require personal guarantees of owners with less than 20 percent
          ownership. Liens on personal assets of the principals may be required.
        </p>
        <p>
          <strong>Eligibility.</strong> SBA provides loans to businesses; so the requirements of eligibility are based on
          specific aspects of the business and its principals. As such, the key factors of eligibility are based on what
          the business does to receive its income, the character of its ownership and where the business operates.
        </p>
        <p>
          SBA generally does not specify what businesses are eligible. Rather, the agency outlines what businesses are not
          eligible. However, there are some universally applicable requirements. To be eligible for assistance, businesses
          must:
        </p>
        <ul>
          <li>Operate for profit</li>
          <li>
            Be small,{' '}
            <a href={sba.sizeStandards} {...external}>
              as defined by SBA
            </a>
          </li>
          <li>Be engaged in, or propose to do business in, the United States or its possessions</li>
          <li>Have reasonable invested equity</li>
          <li>Use alternative financial resources, including personal assets, before seeking financial assistance</li>
          <li>Be able to demonstrate a need for the loan proceeds</li>
          <li>Use the funds for a sound business purpose</li>
          <li>Not be delinquent on any existing debt obligations to the U.S. government</li>
        </ul>
        <p>
          <strong>Ineligible Businesses.</strong> A business must be engaged in an activity SBA determines as acceptable
          for financial assistance from a federal provider. For a{' '}
          <a href={sba.eligibility} {...external}>
            list of businesses types are not eligible for assistance
          </a>{' '}
          because of the activities they conduct visit the SBA website.
        </p>
        <p>
          <strong>What You Need to Take to the Lender.</strong> Once you have decided to apply for a loan guaranteed by the
          SBA, you will need to collect the appropriate documents for your application. The SBA does not provide direct
          loans. The process starts with your local lender, working within SBA guidelines.
        </p>
        <p>
          Use the checklist below to ensure you have everything the lender will ask for to complete your application. Once
          your loan package is complete, your lender will submit it to the SBA.
        </p>
        <ol>
          <li>
            <strong>SBA Loan Application</strong>—To begin the process, you will need to complete an SBA loan application
            form. Access the most current form here:{' '}
            <a href={sba.form1919} {...external}>
              Borrower Information Form - SBA Form 1919
            </a>
          </li>
          <li>
            <strong>Personal Background and Financial Statement</strong>—To assess your eligibility, the SBA also requires
            you complete a{' '}
            <a href={sba.form912} {...external}>
              Statement of Personal History
            </a>{' '}
            and{' '}
            <a href={sba.form413} {...external}>
              Personal Financial Statement
            </a>
            .
          </li>
          <li>
            <strong>Business Financial Statements</strong>—To support your application and demonstrate your ability to
            repay the loan, prepare and include the following financial statements:
            <ul>
              <li>
                Profit and Loss (P&amp;L) Statement—This must be current within 90 days of your application. Also include
                supplementary schedules from the last three fiscal years.
              </li>
              <li>
                Projected Financial Statements—Include a detailed, one-year projection of income and finances and attach a
                written explanation as to how you expect to achieve this projection.
              </li>
            </ul>
          </li>
          <li>
            <strong>Ownership and Affiliations</strong>—Include a list of names and addresses of any subsidiaries and
            affiliates, including concerns in which you hold a controlling interest and other concerns that may be
            affiliated by stock ownership, franchise, proposed merger or otherwise with you.
          </li>
          <li>
            <strong>Business Certificate/License</strong>—Your original business license or certificate of doing business.
            If your business is a corporation, stamp your corporate seal on the SBA loan application form.
          </li>
          <li>
            <strong>Loan Application History</strong>—Include records of any loans you may have applied for in the past.
          </li>
          <li>
            <strong>Income Tax Returns</strong>—Include signed <strong>personal</strong> and <strong>business</strong>{' '}
            federal income tax returns of your business's principals for previous three years.
          </li>
          <li>
            <strong>Resumes</strong>—Include personal resumes for each principal.
          </li>
          <li>
            <strong>Business Overview and History</strong>—Provide a brief history of the business and its challenges.
            Include an explanation of why the SBA loan is needed and how it will help the business.
          </li>
          <li>
            <strong>Business Lease</strong>—Include a copy of your business lease, or note from your landlord, giving terms
            of proposed lease.
          </li>
          <li>
            <strong>If You are Purchasing an Existing Business</strong>—The following information is needed for purchasing
            an existing business:
            <ul>
              <li>Current balance sheet and P&amp;L statement of business to be purchased</li>
              <li>Previous two years federal income tax returns of the business</li>
              <li>Proposed Bill of Sale including Terms of Sale</li>
              <li>Asking price with schedule of inventory, machinery and equipment, furniture and fixtures</li>
            </ul>
          </li>
        </ol>
        <p>
          In addition to the standard loan guaranty, the SBA has targeted programs under 7(a) that are designed to meet
          specialized needs. Unless otherwise indicated, they are governed by the same rules, regulations, interest rates,
          fees, etc. as the regular 7(a) loan guaranty.
        </p>

        <h3 id="sba-microloans">MicroLoans</h3>
        <p>
          <a href={sba.microloans} {...external}>
            The MicroLoan Program
          </a>{' '}
          provides small loans up to $50,000. Under this program, the SBA makes funds available to nonprofit
          intermediaries; these, in turn, make the loans. The average loan size is $13,000.
        </p>
        <p>
          <strong>Use of Proceeds.</strong> Microloans can be used for working capital, inventory or supplies, furniture or
          fixtures, and machinery or equipment. Proceeds from an SBA microloan cannot be used to pay existing debts or to
          purchase real estate.
        </p>
        <p>
          <strong>Eligibility.</strong> Each nonprofit lending organization will have its own requirements but generally
          will require some type of collateral. In most cases, the personal guaranties of the business owners are also
          required.
        </p>

        <h3 id="sba-caplines">The CAPLines Program</h3>
        <p>
          <a href={sba.caplines} {...external}>
            The CAPLines Loan Program
          </a>{' '}
          is the program under which the SBA helps small businesses meet their short-term and cyclical working-capital
          needs. The maximum CAPLines loan is $5 million.
        </p>
        <p>Four loan programs for small businesses are available under CAPLines:</p>
        <ol>
          <li>
            <strong>Seasonal Line.</strong> Finances the cost associated with contracts, subcontracts or purchase orders.
            Proceeds can be disbursed before the work begins. If used for one contract or subcontract when all the expenses
            are incurred before the buyer pays, it will generally not revolve. If used for more than one contract or
            subcontract, or for contracts and subcontracts where the buyer pays before all work is done, the line of credit
            can revolve. The loan maturity is usually based on the length of the contract, but no more than 10 years.
            Contract payments are generally sent directly to the lender, but alternative structures are available.
          </li>
          <li>
            <strong>Contract Line.</strong> Supports the buildup of inventory, accounts receivable or labor and materials
            above normal usage for seasonal inventory. The business must have been in business for a period of 12 months and
            must be able to demonstrate that it has a definite established seasonal pattern. The loan may be used over again
            after a "clean-up" period of 30 days to finance activity for a new season. These loans also may have a maturity
            of up to five years. The business may not have another seasonal line of credit outstanding but may have other
            lines for non-seasonal working capital needs.
          </li>
          <li>
            <strong>Builders Line.</strong> Provides financing for small contractors or developers to construct or
            rehabilitate residential or commercial property that will be sold to a third party that is not known at the time
            construction/rehabilitation begins. Loan maturity is generally three years but can be extended up to five
            years, if necessary, to facilitate the sale of the property. Proceeds are used solely for direct expenses of
            acquisition, immediate construction and/or significant rehabilitation of the residential or commercial
            structures. Land purchase can be included if it does not exceed 20 percent of the loan proceeds. Up to five
            percent of the proceeds can be used for community improvements that benefit the overall property.
          </li>
          <li>
            <strong>Working Capital Line of Credit.</strong> A revolving line of credit (up to $5,000,000) that provides
            short-term working capital. Businesses that generally use these lines provide credit to their customers or have
            inventory as their major asset. Disbursements are generally based on the size of a borrower's accounts
            receivable and/or inventory. Repayment comes from the collection of accounts receivable or sale of inventory.
            The specific structure is negotiated with the lender. There may be extra servicing and monitoring of the
            collateral for which the lender can charge additional fees to the borrower.
          </li>
        </ol>
        <p>
          <strong>Use of Proceeds.</strong> CAPLines may be used to:
        </p>
        <ul>
          <li>Finance seasonal working-capital needs</li>
          <li>
            Finance direct costs needed to perform construction, service and supply contracts, subcontracts, or purchase
            orders
          </li>
          <li>Finance direct costs associated with commercial and residential building construction</li>
          <li>Provide general working capital lines of credit that have specific requirements for repayment</li>
        </ul>

        <h3 id="sba-export-working-capital">The Export Working Capital Program</h3>
        <p>
          <a href={sba.exportLoans} {...external}>
            The Export Working Capital (EWCP) Loan
          </a>{' '}
          provides advances for up to $5 million to fund export transactions from purchase order to collections. This loan
          has a low guaranty fee and quick processing time.
        </p>
        <p>
          Contact your local lender to see if they are approved to underwrite EWCP loans. You can apply for EWCP loans
          before finalizing an export sale or contract.
        </p>
        <p>
          With an approved EWCP loan in place, you have greater flexibility in negotiating export payment terms. However,
          disbursements can only be made against firm purchase orders from a foreign buyer or to support foreign accounts
          receivable.
        </p>
        <p>
          <strong>Use of Proceeds.</strong> Proceeds may be used for:
        </p>
        <ul>
          <li>Financing for suppliers, inventory, WIP, or production of export goods or services</li>
          <li>Working capital to support foreign accounts receivable during long payment cycles</li>
          <li>Financing for standby letters of credit used as bid or performance bonds or as down payment guarantees</li>
        </ul>

        <h3 id="sba-international-trade">The International Trade Loan Program</h3>
        <p>
          <a href={sba.exportLoans} {...external}>
            The International Trade Loan
          </a>{' '}
          offers loans up to $5 million for fixed assets and working capital for businesses that plan to start or continue
          exporting.
        </p>
        <p>
          <strong>Eligibility.</strong> International Trade Loans are available if your small business is in a position to
          expand existing export markets or develop new export markets. These loans are also available if your small
          business has been adversely affected by import competition and can demonstrate that the loan proceeds will
          improve your competitive position. Contact your existing lender to determine if they are an SBA-approved 7(a)
          lender. If so, they are authorized to underwrite an International Trade Loan. SBA will work with your lender to
          determine borrower eligibility.
        </p>
        <p>
          <strong>Use of Proceeds.</strong> The borrower may use loan proceeds to acquire, construct, renovate, modernize,
          improve, or expand facilities and equipment to be used in the United States to produce goods or service involved
          in international trade and to develop and penetrate foreign markets. Funds also may be used to refinance an
          existing loan.
        </p>

        <h3 id="sba-disaster">Disaster Assistance Loans Program</h3>
        <p>
          SBA provides low-interest{' '}
          <a href={sba.disaster} {...external}>
            Disaster Assistance Loans
          </a>{' '}
          to businesses of all sizes, private non-profit organizations, homeowners, and renters. SBA disaster loans can be
          used to repair or replace the following items damaged or destroyed in a declared disaster: real estate, personal
          property, machinery and equipment, and inventory and business assets.
        </p>
        <p>Types of loans include:</p>
        <ul>
          <li>
            <p>
              Physical Damage loans—These loans to cover repairs and replacement of physical assets damaged in a declared
              disaster. Homeowners, renters, nonprofit organizations, and businesses of all sizes are eligible to apply for
              physical disaster assistance. There are two types of Physical Damage loans: Home and personal property loans
              and Business physical disaster loans.
            </p>
            <p>
              <strong>Home and personal property loans</strong>—If you live in a declared disaster area and have
              experienced damage to your home or personal property, you may be eligible for financial assistance from
              SBA—even if you do not own a business. As a homeowner, renter or personal property owner, you may apply to
              SBA for a loan to help you recover from a disaster.
            </p>
            <p>
              Homeowners may apply for up to $200,000 to replace or repair their primary residence. The loans may not be
              used to upgrade homes or make additions unless required by local building code. If you make improvements that
              help prevent the risk of future property damage caused by a similar disaster, you may be eligible for up to a
              20 percent loan amount increase above the real estate damage, as verified by the SBA.
            </p>
            <p>
              Renters and homeowners may borrow up to $40,000 to replace or repair personal property such as clothing,
              furniture, cars, and appliances damaged or destroyed in a disaster.
            </p>
            <p>
              <strong>Business physical disaster</strong>—The SBA Business Physical Disaster Loan covers disaster losses
              not fully covered by insurance. If you own a business located in a declared disaster area that has
              experienced damage, you may be eligible for financial assistance from SBA. Businesses of any size and most
              private non-profit organizations may apply to SBA for a loan to recover after a disaster. The SBA Business
              Physical Disaster Loan covers disaster losses not fully covered by insurance.
            </p>
            <p>
              SBA makes physical disaster loans of up to $2 million to qualified businesses or most private nonprofit
              organizations in a declared disaster area that have experienced damage to your business. Businesses of any
              size and most private nonprofit organizations may apply to the SBA for a loan to recover after a disaster.
              These loan proceeds may be used for the repair or replacement of real property, machinery, equipment,
              fixtures, inventory, and leasehold improvements.
            </p>
          </li>
          <li>
            Economic Injury Disaster Loans—Small business, small agricultural cooperative, or most private nonprofit
            organizations. The SBA can provide up to $2 million (maximum term of 30 years, maximum interest rate of 4
            percent) to help meet financial obligations and operating expenses that could have been met had the disaster
            not occurred. Your loan amount will be based on your actual economic injury and your company's financial needs,
            regardless of whether the business suffered any property damage.
          </li>
          <li>
            <p>
              Military Reservists Economic Injury Loans (MREIDL)—Provides funds (up to $2 million, maximum 30 years,
              maximum interest rate of 4 percent) to help an eligible small business meet its ordinary and necessary
              operating expenses that it could have met, but is unable to, because an essential employee was called-up to
              active duty in his or her role as a military reservist.
            </p>
            <p>
              The amount of each loan is limited to the actual economic injury as calculated by SBA. The amount is also
              limited by business interruption insurance and whether the business and/or its owners have sufficient funds to
              operate. If a business is a major source of employment, SBA has authority to waive the $2 million statutory
              limit.
            </p>
          </li>
          <li>
            Mitigation Assistance loans—These loans provide funding to cover small business operating expenses after a
            declared disaster. You can protect your home or business and reduce property damage with the help of SBA. If
            you've been affected by a disaster, you can rebuild a stronger business by increasing your SBA disaster
            assistance loan up to 20% of your verified physical damage to make mitigation improvements. Borrowers generally
            have two years after their loan approval to request an increase for higher rebuilding costs, code-required
            upgrades or mitigation. Projects covered by this type of loan include improvements related to flooding,
            wildfires, wind, and earthquakes.
          </li>
        </ul>

        <h3 id="sba-express">SBA Express Loan Program</h3>
        <p>
          The{' '}
          <a href={sba.sevenA} {...external}>
            SBA Express Loan Program
          </a>{' '}
          features an accelerated turnaround time of 36 hours for SBA review in response to an application. Capital is
          available to businesses seeking loans of up to $350,000 without requiring the lender to use the SBA process.
          Lenders use their existing documentation and procedures to make and service loans plus SBA Form 1919. The SBA
          guarantees up to 50 percent of an SBA Express loan. Loans made under this program generally follow SBA's
          standards for the 7(a) Loan Program. Your local SBA office can provide you with a list of SBA Express lenders.
        </p>
        <p>
          Lenders and borrowers can negotiate the interest rate. Rates can be fixed or variable and are tied to the prime
          rate (as published in The Wall Street Journal), LIBOR, or the optional peg rate (published quarterly in the
          Federal Register) and may be fixed or variable, but they may not exceed SBA maximums: lenders may charge up to 6.5
          percent over the base rate for loans of $50,000 or less, and up to 4.5 percent over for loans over $50,000.
          Lenders are not required to take collateral for loans up to $25,000; may use their existing collateral policy for
          loans over $25,000 up to $350,000. For revolving credits, small business owners may take up to seven years after
          the first disbursement to repay the loan.
        </p>

        <h3 id="sba-504">The Certified Development Company (504) Loan Program</h3>
        <p>
          <a href={sba.loans504} {...external}>
            The Certified Development Company (504) Loan Program
          </a>{' '}
          enables a nonprofit corporation (Certified Development Company or CDC) to contribute to the economic development
          of its community. CDCs are located nationwide and operate primarily in their state of incorporation (Area of
          Operation). CDCs work with SBA and private-sector lenders to provide financing to small businesses through the
          CDC/504 Loan Program, which provides growing businesses with long-term, fixed-rate financing for major fixed
          assets, such as land and buildings.
        </p>
        <p>
          The Role of CDCs is to market the 504 program; package and process 504 loan applications; close and service 504
          loans in its Area of Operation. A portfolio must be diversified by business sector. CDCs should also provide small
          businesses with financial and technical assistance, or help small businesses obtain assistance from other
          sources, including preparing, closing, and servicing loans under contract with lenders in SBA's 7(a) Loan
          Program. Loan amounts to the borrower equal to the value of all or part of the borrower's contribution to a
          project in the form of cash or land, including site improvements.
        </p>
        <p>Newly certified CDCs will be on probation for a period of two years.</p>
        <p>
          <strong>Eligibility.</strong> A CDC must:
        </p>
        <ul>
          <li>Be a nonprofit corporation in good standing.</li>
          <li>
            Have at least 25 members representing government organizations responsible for economic development in the
            Area of Operation and acceptable to SBA; Financial institutions that provide commercial long-term fixed asset
            financing in the Area of Operation; Community organizations dedicated to economic development in the Area of
            Operation, such as chambers of commerce, foundations, trade associations, colleges, or universities; Businesses
            in the Area of Operation; and Additional membership requirements are provided in 13 CFR 120.822.
          </li>
          <li>
            Have a Board of Directors chosen from the membership, and representing, at least, three of the four membership
            groups. Additional Board of Directors requirements are provided in 13 CFR 120.823.
          </li>
          <li>
            Have full-time professional management, including an Executive Director (or the equivalent) managing daily
            operations and a full-time professional staff qualified by training and experience to market the 504 Program;
            package and process loan applications; close loans; service, and, if authorized by SBA, liquidate the loan
            portfolio; and sustain a sufficient level of service and activity in the Area of Operation. CDCs may obtain,
            under written contract and with prior approval from SBA, marketing, packaging, processing, closing, servicing or
            liquidation services by qualified individuals and entities who live or do business in the CDC's Area of
            Operation.
          </li>
          <li>
            Meet a minimum level of lending activity, providing, at least, two 504 loan approvals each full fiscal year. A
            CDC's portfolio must reflect an average of one job opportunity per $65,000 of 504 loan funding.
          </li>
        </ul>

        <h3 id="sba-sbic">Small Business Investment Company Program</h3>
        <p>
          There is a variety of alternatives to bank financing for small businesses, especially business start-ups. The
          Small Business Investment Company Program fills the gap between the availability of venture capital and the needs
          of small businesses that are either starting or growing. Licensed and regulated by the SBA, SBICs are privately
          owned and managed investment firms that make capital available to small businesses through investments or loans.
          They use their own funds plus funds obtained at favorable rates with SBA guarantees and/or by selling their
          preferred stock to the SBA.
        </p>
        <p>
          SBICs are for-profit firms whose incentive is to share in the success of a small business. In addition to equity
          capital and long-term loans, SBICs provide debt-equity investments and management assistance.
        </p>
        <p>
          The Small Business Investment Company (SBIC) Program, administered by the U.S. Small Business Administration
          (SBA), is a multi-billion investment program created in 1958 to bridge the gap between entrepreneurs' need for
          capital and traditional sources of financing. Over the past five years, the program has channeled $17 billion of
          capital to more than 5,900 U.S. small businesses representing a variety of industries across the country. These
          results were achieved through a proven public-private partnership that leverages the full faith and credit of the
          U.S. government to increase the pool of investment capital available to small businesses.
        </p>
        <p>
          The SBIC Program provides funding to all types of manufacturing and service industries. Some investment companies
          specialize in certain fields while others seek out small businesses with new products or services because of the
          strong growth potential. Most, however, consider a wide variety of investment opportunities.
        </p>

        <h3 id="sba-surety">Surety Bond Program</h3>
        <p>
          By law, prime contractors to the federal government must post surety bonds on federal construction projects
          valued at $150,000 or more. Many state, county, city and private-sector projects require bonding as well. SBA
          helps small contractors by guaranteeing bid, performance, and payment bonds issued by participating surety
          companies for contracts up to $6.5 million. SBA can guarantee a bond for a contract up to $10 million if a
          Federal contracting officer certifies that SBA's guarantee is necessary for the small business to obtain bonding.
        </p>
        <p>
          <strong>Fees.</strong> SBA charges the small business 0.729 percent of the contract price for a payment or
          performance bond. There is no charge for a bid bond. SBA charges the surety company 26 percent of the fee the
          surety company charges the small business.
        </p>
      </>
    ),
  },
  {
    id: 'quick-reference',
    title: 'Quick Reference to SBA Loan Programs',
    body: (
      <>
        <p>
          <strong>
            <a href={sba.sevenA} {...external}>
              PROGRAM: SBA Express
            </a>
          </strong>
        </p>
        <ul>
          <li>
            <strong>Features:</strong> Lender approves loan, no additional paperwork for SBA, 36 hour turnaround
          </li>
          <li>
            <strong>Maximum Amount Guaranteed:</strong> $350,000 (total loan amount)
          </li>
          <li>
            <strong>Percent of Guarantee</strong> (maximum): 50 percent
          </li>
          <li>
            <strong>Use of Proceeds:</strong> Same as 7(a)
          </li>
          <li>
            <strong>Maturity:</strong> Term loan same as 7(a); no more than 7 years on revolving line of credit
          </li>
          <li>
            <strong>Maximum Interest Rates:</strong> Negotiable between lender and borrower
          </li>
          <li>
            <strong>Guaranty and Other Fees:</strong> See 7(a)
          </li>
          <li>
            <strong>Eligibility:</strong> See 7(a)
          </li>
        </ul>
        <p>
          <strong>
            <a href={sba.loans504} {...external}>
              The Certified Development Company (504) Loan Program
            </a>
          </strong>
        </p>
        <ul>
          <li>
            <strong>Features:</strong> CDCs work with SBA and private-sector lenders to provide financing to small
            businesses through the CDC/504 Loan Program, which provides growing businesses with long-term, fixed-rate
            financing for major fixed assets, such as land and buildings. Must create or retain one job for every $65,000
            provided by the SBA, except for small manufacturers, which have a $100,000 job creation or retention goal
          </li>
          <li>
            <strong>Maximum Amount Guaranteed:</strong> Limit on SBA portion of project is $4, $4.5, and $5 million
          </li>
          <li>
            <strong>Percent of Guarantee</strong> (maximum): 40 percent of project (100 percent SBA-backed debenture);
            private lender unlimited
          </li>
          <li>
            <strong>Use of Proceeds:</strong> Purchase of major fixed assets such as land, buildings, improvements,
            long-term equipment, construction, renovation
          </li>
          <li>
            <strong>Maturity:</strong> 10 or 20 years only
          </li>
          <li>
            <strong>Maximum Interest Rates:</strong> Pegged to an increment above the current market rate for 5-year and
            10-year U.S. Treasury issues
          </li>
          <li>
            <strong>Guaranty and Other Fees:</strong> Fees related to debenture, approximately 3 percent. May be financed
            with the loan.
          </li>
          <li>
            <strong>Eligibility:</strong> Tangible net worth less than $15 million and an average net income less than $5.0
            million after taxes for the preceding two years.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'agencies',
    title: 'Government and Non-Profit Agencies',
    body: (
      <ul>
        <li>
          <a href={sba.home} {...external}>
            U.S. Small Business Administration
          </a>
          <br />
          The SBA has offices located throughout the United States. For the one nearest you look under "U.S. Government"
          in your telephone directory, call the SBA Answer Desk at (800) 827-5722, or visit the SBA website for a list of{' '}
          <a href={sba.districtOffices} {...external}>
            SBA District Offices
          </a>
          .
        </li>
      </ul>
    ),
  },
];

export default function RaisingCapital() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="Raising Capital"
      title={
        <>
          Raising Capital: <em>How To Get Money For a Small Business</em>
        </>
      }
      lead="In addition to drive, ambition and a great deal of planning, starting and expanding a small business generally requires capital. Capital may come from family, friends, lenders or others. This Financial Guide provides an overview of how to get the capital you need to start or grow your business."
      sections={sections}
      numbered={false}
    >
      <p>
        One key to successful business start-up and expansion is your ability to obtain and secure appropriate financing.
        Raising capital is one of the most basic of all business activities. But as many new entrepreneurs quickly
        discover, raising capital may not be easy. In fact, it can be a complex and frustrating process and professional
        guidance should be considered, especially with regard to financial information needed for the loan proposal. This
        Financial Guide focuses on ways a small business can raise money and explains how to prepare a loan proposal.
      </p>
    </GuideArticle>
  );
}
