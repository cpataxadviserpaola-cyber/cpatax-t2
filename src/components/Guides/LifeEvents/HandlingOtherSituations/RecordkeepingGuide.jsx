import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=101 (Recordkeeping Guide: How Long You Should Retain
// Your Records), word for word. Back-to-top anchors omitted (handled by layout). The library's
// opening paragraph is the banner's text (`lead`); its next paragraph says nearly the same thing
// again, and it is kept, as there. The hyphen used as a dash in the opening paragraph is now a dash.
// Address: /guides/life-events/handling-other-situations/recordkeeping-guide (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'keep-indefinitely',
    title: 'Keep Indefinitely',
    body: (
      <ul>
        <li>Birth certificates</li>
        <li>Adoption papers</li>
        <li>Custody agreements</li>
        <li>Death certificates</li>
        <li>Deeds to property</li>
        <li>Divorce papers</li>
        <li>List of financial assets held (keep current)</li>
        <li>Wills and other estate planning documents</li>
        <li>Life insurance policies</li>
        <li>List of previous employers</li>
        <li>Marriage certificates</li>
        <li>Passports</li>
        <li>Photographic or video record of house and household contents</li>
        <li>Military records / record of any governmental employment (e.g., armed forces)</li>
        <li>Tax forms and supporting records relating to non-deductible IRA contributions</li>
        <li>Records of paid mortgages</li>
      </ul>
    ),
  },
  {
    id: 'prescribed-period',
    title: 'Keep for a Prescribed Period',
    body: (
      <ul>
        <li>
          Income tax returns (note that the IRS can audit you for 3 years after you filed a tax return, 6 years if you're
          self-employed or under reported 25% of your income, and if you don't file a return at all or filed a fraudulent
          return, there is no limit on the statute of limitations)
        </li>
        <li>
          Records supporting income tax returns and deductions (W-2s, 1099s, receipts) - 1 year, 3 years if used for tax
          purposes and 6 years if self-employed
        </li>
        <li>Loans that have been paid off (canceled notes or other evidence) - 7 years</li>
        <li>Bank statements - 1 year, 3 years if used for tax purposes and 6 years if self-employed</li>
        <li>Brokers' confirmation slips for stock and mutual fund purchases - until security is sold</li>
        <li>Records of selling a stock - 3 years</li>
        <li>Canceled checks - 1 year, 3 years if used for tax purposes and 6 years if self-employed</li>
        <li>Contracts - 7 years after expiration</li>
        <li>Medical bills - 3 years</li>
        <li>
          Credit card statements - Until the monthly bill is marked paid, but keep 1 year, 3 years if used for tax
          purposes and 6 years if self-employed
        </li>
        <li>
          Utility statements - Until the monthly bill is marked paid, but keep 1 year, 3 years if used for tax purposes
          and 6 years if self-employed
        </li>
        <li>Pay stubs - 1 year, until you received and reconciled with annual W-2 and social security statement</li>
        <li>
          Receipts for home improvements that can be added to tax basis of home - 6 years after home is sold in a
          transaction that is not a "rollover" transaction
        </li>
        <li>
          Insurance papers (all types of insurance) - after policy is renewed or 4 years after expiration or cancellation
        </li>
        <li>Records of selling a house - 3 years after paid off</li>
        <li>Owners' manuals for appliances - until item is discarded or sold</li>
        <li>Receipts for major warranted purchases - until item is discarded or sold</li>
        <li>Warranties and extended service agreements - until expiration</li>
        <li>Property tax records and disputes - 6 years after home is sold</li>
        <li>
          Vehicle records (title, registration, purchase receipt, repairs and maintenance recipets, etc) - until sold
        </li>
        <li>Savings bonds - until cashed in</li>
      </ul>
    ),
  },
  {
    id: 'throw-out-now',
    title: 'Throw Out Now',
    body: (
      <ul>
        <li>Owners' manuals and warranties for appliances and cars you no longer own</li>
        <li>
          Receipts for credit card purchases if not major or related to a tax deduction - after reconciling with monthly
          credit card statements
        </li>
        <li>ATM receipts - after reconciling with monthly bank statements</li>
        <li>
          Sales receipts (unless used for tax purposes, then 3 years if used for tax purposes and 6 years if
          self-employed)
        </li>
      </ul>
    ),
  },
];

export default function RecordkeepingGuide() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/handling-other-situations"
      page="Recordkeeping Guide"
      title={
        <>
          Recordkeeping Guide: <em>How Long You Should Retain Your Records</em>
        </>
      }
      lead="Some documents and records need to be kept indefinitely, but most can be discarded after a prescribed period. Here are some rules of thumb as to how long you should keep them. Keep in mind that certain circumstances—legal considerations, for instance—dictate that documents be kept longer. The basic rule is: When in doubt, don't throw it out. If you have any questions, check with your financial advisor."
      sections={sections}
      numbered={false}
    >
      <p>
        Some documents and records need to be kept indefinitely but most can be discarded after a prescribed period. Here
        are some <strong>general</strong> rules of thumb as to how long you should keep them. Keep in mind that there may
        be individual circumstances in which legal considerations, for instance, dictate that documents be kept longer.
        The basic rule is: When in doubt, don't throw it out. If you have any questions, check with your financial
        advisor.
      </p>
    </GuideArticle>
  );
}
