import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=156 (Death of a Loved One: Frequently Asked
// Questions), word for word. Each question is worded as in the library's answers, not its table of
// contents ("…a joint return in the year…" there, "…for the year…" above the answer). The tip the
// library sets between two items of the assets list sits under the Safe Deposit Box item it belongs
// to, the "Tip" boxes keep the library's labels, and the FTC link goes to the address its old one
// now redirects to. The library's page has no introduction, so the banner's opening line (`lead`)
// is written for this site, as on the other FAQ pages.
// Address: /guides/life-events/death-of-a-loved-one/death-of-a-loved-one-faq (articlePages in
// src/data/guides.js). The topic's other pages are in ../DeathOfALovedOne.

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'papers-needed',
    title: 'What papers will I need if a family member dies?',
    body: (
      <>
        <p>Here is a list of the papers that you will probably need:</p>
        <ul>
          <li>
            Certified copies of the death certificate (at least 10). You can purchase them through the funeral director
            or directly from the County Health Department.
          </li>
          <li>
            Copies of all insurance policies, which may be located in the deceased's safe deposit box or among his or her
            personal belongings.
          </li>
          <li>Social Security numbers of the deceased, the spouse, and any dependent children.</li>
          <li>
            Military discharge papers, if the deceased was a veteran. If you cannot find a copy, write to The Department
            of Defense, National Personnel Record Center, 1 Archives Drive, St. Louis, MO 63138.
          </li>
          <li>
            Marriage Certificate, if the spouse of the deceased will be applying for benefits. Copies of marriage
            certificates are available at the Office of the County Clerk where the marriage license was issued.
          </li>
          <li>
            Birth Certificates of dependent children. Copies are available at either the State or the County Public
            Health offices where the child was born.
          </li>
          <li>The Will, which may be with the deceased's lawyer.</li>
          <li>
            A complete list of all property including real estate, stocks, bonds, savings accounts and personal property
            of the deceased.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            If the death is not unexpected, you should try to gather these papers in advance (other than the death
            certificate, of course) to lessen the strain at the time of death.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'deceased-assets',
    title: "What steps should I take regarding the deceased's assets?",
    body: (
      <>
        <p>
          You should check with your financial advisor as to how you should handle the following assets of the deceased,
          but some general rules of thumb include:
        </p>
        <ul>
          <li>
            <strong>Insurance Policies.</strong> You may need to change the beneficiaries of policies held by the spouse
            of the deceased. Moreover, if the spouse does not have any dependents, it might be wise to reduce the amount
            of life insurance coverage. Auto and home insurance may also need revision.
          </li>
          <li>
            <strong>Automobiles.</strong> Check with your State DMV to see if the title of the deceased's car needs to be
            changed.
          </li>
          <li>
            <strong>Bank Accounts.</strong> If the deceased and his or her spouse had a joint bank account, title will
            automatically pass to the surviving spouse. Notify the bank to change its records to reflect this change in
            ownership. If a bank account was held only in the name of the deceased, that asset will have to go through
            probate (unless it's a trust account).
          </li>
          <li>
            <strong>Stocks and Bonds.</strong> To change title to stocks or bonds, check with the deceased's broker.
          </li>
          <li>
            <strong>Safe Deposit Box.</strong> In most states, you will need a court order to open a safe deposit box
            that is rented only the name of the deceased.
            <Callout label="Tip">
              <p>
                In most states, only the will and other materials pertaining to the death can be removed before the will
                has been probated.
              </p>
            </Callout>
          </li>
          <li>
            <strong>Credit Cards.</strong> Any credit cards exclusively in the name of the deceased should be canceled
            (and any payments due should be paid by the estate). As to credit cards in the names of both the deceased and
            his or her spouse, the surviving spouse should notify the credit card companies of the death and ask that the
            card should be reissued in the survivor's name only.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            You should update your own will if it provides that any of your property will pass to the deceased upon your
            death.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'funeral-costs',
    title: 'How can I avoid overpaying for the funeral of a family member?',
    body: (
      <>
        <p>
          The best way to avoid overpaying for a funeral is to plan ahead. Further, it pays to know about the "Funeral
          Rule," the regulation of the Federal Trade Commission (FTC) concerning funeral industry practices.{' '}
          <a href="https://consumer.ftc.gov/articles/ftc-funeral-rule" {...external}>
            The Funeral Rule
          </a>{' '}
          provides that:
        </p>
        <ul>
          <li>
            The funeral provider must give you, over the phone, price and other readily available information that
            reasonably answers your questions.
          </li>
          <li>
            The funeral provider must give you (1) a general price list, (2) a disclosure of your important legal rights,
            and (3) information about embalming, caskets for cremation, and required purchases.
          </li>
          <li>
            The funeral provider must disclose in writing any service fees for paying for goods or services on your behalf
            (such as flowers, obituary notices, pallbearers, and clergy honoraria). While some funeral providers charge you
            only their cost for these items, others add a service fee to their cost. The funeral provider must also inform
            you of any refunds, discounts, or rebates from the supplier of any such item.
          </li>
          <li>
            The funeral provider must disclose in writing your right to buy, and make available to you, an unfinished
            wood box (a type of casket) or an alternative container for direct cremation.
          </li>
          <li>
            You do not have to purchase unwanted goods or services or pay any fees as a condition to obtain those products
            and services you do want. In addition to the fee for the services of the funeral director and staff, you need
            to pay only for those goods and services selected by you or required by state law.
          </li>
          <li>
            The funeral provider must give you an itemized statement of the total cost of the funeral goods and services
            you selected; this statement must disclose any legal, cemetery, or crematory requirements for you to purchase
            any specific funeral goods or services.
          </li>
          <li>
            The funeral provider is prohibited from telling you that a particular funeral item or service can indefinitely
            preserve the body of the deceased in the grave or claiming that funeral goods such as caskets or vaults will
            keep out water, dirt, or other gravesite substances.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            If you have a problem concerning funeral matters, and cannot resolve it with the funeral director, contact
            your federal, state, or local consumer protection agencies, the Funeral Consumers Alliance, or the
            International Conference of Funeral Examining Boards.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'social-security-benefits',
    title: 'What Social Security benefits are surviving family members entitled to?',
    body: (
      <>
        <p>
          The deceased is considered covered by Social Security if he or she paid into Social Security for at least 40
          quarters. Check with your local Social Security office or call 800-772-1213 to determine if the deceased was
          eligible. If the deceased was eligible, there are two types of possible benefits.
        </p>
        <h3>One-Time Death Benefit</h3>
        <p>
          Social Security pays a death benefit toward burial expenses. Complete the necessary form at your local Social
          Security office, or ask the funeral director to complete the application and apply the payment directly to the
          funeral bill. This payment is made only to eligible spouses or to a child entitled to survivors benefits.
        </p>
        <h3>Survivors Benefits for a Spouse or Children.</h3>
        <p>
          If the spouse is age 60 or older, he or she will be eligible for benefits. The amount of the benefit received
          before age 65 will be less than the benefit due at age 65 or over. Disabled widows age 50 or older are eligible
          for benefits. The spouse of the deceased who is under the age of 60 but who cares for dependent children under
          the age of 16 or cares for disabled children may be eligible for benefits. The children of the deceased who are
          under the age of 18 or are disabled may also be entitled to benefits.
        </p>
      </>
    ),
  },
  {
    id: 'probate',
    title: 'What is probate?',
    body: (
      <>
        <p>
          Probate is the legal process of paying the deceased's debts and distributing the estate to the rightful heirs.
          This process usually entails:
        </p>
        <ul>
          <li>
            The appointment of an individual by the court to act as "personal representative" or "executor" of the
            estate. This person is often named in the will. If there is no will, the court appoints a personal
            representative, usually the spouse.
          </li>
          <li>Proving that the will is valid.</li>
          <li>Informing creditors, heirs, and beneficiaries that the will is probated.</li>
          <li>Disposing of the estate by the personal representative in accordance with the will or state law.</li>
        </ul>
        <p>
          The spouse or personal representative named in the will must file a petition with the court after the death.
          There is a fee for the probate process.
        </p>
        <p>Depending on the size and complexity of the probable assets, probating a will may require legal assistance.</p>
        <p>
          Assets that are jointly owned by the deceased and someone else are not subject to probate. Proceeds from a life
          insurance policy or Individual Retirement Account (IRA) that are paid directly to a beneficiary are also not
          subject to probate.
        </p>
      </>
    ),
  },
  {
    id: 'taxes-due',
    title: 'What taxes are due upon the death of a family member?',
    body: (
      <>
        <p>Here is a summary of the various taxes that may have to be paid on the death of a family member:</p>
        <p>
          <strong>Federal Estate Tax.</strong> Amounts passing to a surviving spouse, and amounts passing to charity, are
          generally exempt from estate tax. Estate tax is generally only due on estates which, after reduction for what
          goes to spouse and charity, exceed the unified credit exemption equivalent, which in 2023 is $12,920,000
          ($12,060,000 in 2022).
        </p>
        <p>
          Contact the IRS for a Form 706, <em>United States Estate (and Generation-Skipping Transfer) Tax Return,</em> if
          you need to file an estate tax return. A federal estate tax return must be filed and taxes paid within nine
          months of the date of death absent extension.
        </p>
        <p>
          <strong>State Estate and Inheritance Taxes.</strong> State laws vary. Many states impose estate taxes, which may
          apply in addition to federal estate taxes, or may apply even when federal estate taxes don't. Some states impose
          inheritance taxes on individuals who receive inheritances, rather than on the estate.
        </p>
        <p>
          <strong>Income Taxes.</strong> The federal and state income taxes of the deceased are due for the year of
          death. The taxes are due on the normal filing date of the following year unless an extension is requested. The
          spouse of the deceased may file a joint federal income tax return for the year of death. A spouse with a
          dependent child may file jointly for two additional years. IRS Publication 559,{' '}
          <em>Survivors, Executors, and Administrators,</em> may be helpful.
        </p>
      </>
    ),
  },
  {
    id: 'refusing-property',
    title: 'Can I refuse to accept property bequeathed to me by a family member so as to cut taxes?',
    body: (
      <>
        <p>
          The disclaimer or generation-skipping transfer tax is a way for you to refuse all or part of property that
          would otherwise pass to you, via will, intestacy laws, or by operation of law. An effective disclaimer passes
          the property to the next beneficiary in line.
        </p>
        <p>
          The fact that the property is treated as if it had passed directly from the decedent to the next-in-line
          beneficiary may save thousands of dollars in estate taxes. The provision for a disclaimer in a will and the wise
          use of a disclaimer allows intra-family asset shifting and income shifting for maximal use of the estate tax
          marital deduction, the unified credit, and the lower income tax brackets.
        </p>
        <p>
          Disclaimers can also be used to provide for financial contingencies. For example, you can disclaim an interest
          if someone else is in need of the funds.
        </p>
      </>
    ),
  },
  {
    id: 'joint-return',
    title: 'Can I file a joint return for the year my spouse dies?',
    body: (
      <p>
        Yes, the surviving spouse can elect to file a joint return provided they did not remarry prior to the end of the
        tax year.
      </p>
    ),
  },
  {
    id: 'life-insurance-proceeds',
    title: 'Must I pay taxes on the proceeds of a life insurance policy payable to me?',
    body: (
      <p>
        Generally, no. Proceeds of life insurance policies are not taxable income unless the recipient paid for the right
        to receive them. For example, if you purchased a policy as an investment.
      </p>
    ),
  },
  {
    id: 'retirement-distributions',
    title:
      'If I receive distributions from a retirement plan or an IRA of the deceased, must I pay income taxes on the distribution?',
    body: (
      <p>
        Generally, yes. This is known as income in respect of a decedent. Since the deceased has not paid income tax on
        the distribution, the tax is owed by the recipient. If the value of the account was included in the decedent's
        estate tax return, you may be entitled to a deduction for a portion of the estate taxes paid.
      </p>
    ),
  },
  {
    id: 'no-will',
    title: "How will my spouse's assets be distributed if he/she died without a will?",
    body: (
      <p>
        Assets held jointly with right of survivorship will transfer by law to the joint holder. Insurance policies or
        retirement accounts with a designated beneficiary will go to that beneficiary. Assets owned solely by the
        decedent will transfer according to state law. This is known as intestacy. These laws vary by state, but
        generally, give preference to the spouse and children.
      </p>
    ),
  },
];

export default function DeathOfALovedOneFaq() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/death-of-a-loved-one"
      page="Death of a Loved One: Frequently Asked Questions"
      title={
        <>
          Death of a Loved One: <em>Frequently Asked Questions</em>
        </>
      }
      lead="Answers to common questions about the papers you will need, handling the deceased's assets, funeral costs, Social Security survivors benefits, probate, and the taxes due after a death."
      sections={sections}
    />
  );
}
