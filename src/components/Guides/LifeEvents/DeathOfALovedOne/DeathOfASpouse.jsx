import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=81 (Death of a Spouse: Financial Steps You
// Should Take), word for word. Related guides are named by their titles in the library, and
// the Social Security office locator and national cemetery links go to the pages the old
// addresses now redirect to.
// Address: /guides/life-events/death-of-a-loved-one/death-of-a-spouse (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'papers',
    title: 'Collecting the Papers',
    body: (
      <>
        <p>
          The first step is to collect the necessary paperwork so that you can finalize the estate and
          file for any benefits that you and your children are entitled to.
        </p>

        <h3>The Death Certificate</h3>
        <p>
          Many of the offices or agencies you contact will require you to provide a copy of the death
          certificate. You can buy certified copies of the death certificate through your funeral
          director or directly from the county health department for a small fee, typically a few
          dollars per certificate. It is worth paying the money for the certified copies, however,
          since many companies require it.
        </p>
        <Callout label="Tip">
          <p>Whether you think you need them or not, try to get at least 10 certified copies of the death certificate.</p>
        </Callout>

        <h3>Insurance Policies</h3>
        <p>
          You will probably find copies of life, health, home mortgage, accident, and other insurance
          policies in a safe deposit box or with your spouse's personal belongings. Any or all of these
          insurance policies could be sources of possible benefits to you and your children.
        </p>

        <h3>Social Security Numbers</h3>
        <p>You'll need the Social Security numbers of your spouse and any dependent children.</p>
        <Callout label="Tip">
          <p>Your spouse's Social Security number can be found on the death certificate.</p>
        </Callout>

        <h3>Military Discharge Papers</h3>
        <p>
          You will need a copy of a certificate of honorable (or other than dishonorable) discharge if
          your spouse was a veteran. If you cannot find a copy of the discharge, write to:
        </p>
        <address className="article-address">
          <strong>The Department of Defense</strong>
          <span>National Personnel Record Center</span>
          <span>9700 Page Avenue</span>
          <span>St. Louis, MO 63138</span>
          <span>(314) 801-0800</span>
          <span>
            website:{' '}
            <a href="https://www.archives.gov" {...external}>
              www.archives.gov
            </a>
          </span>
        </address>

        <h3>Marriage Certificate</h3>
        <p>
          If you are going to apply for benefits based on your marital relationship, you will need
          copies of your marriage certificate. Copies are available at the office of the County Clerk
          where the marriage license was issued.
        </p>

        <h3>Children's Birth Certificates</h3>
        <p>
          You will need copies of birth certificates for dependent children. Copies are available at
          either the state or county public health offices where the child was born.
        </p>

        <h3>The Will</h3>
        <p>
          You will need a copy of the will. Your spouse's lawyer may have the will, or it may be in a
          safe, a safe deposit box, or with your spouse's personal belongings.
        </p>

        <h3>List of Assets</h3>
        <p>
          A complete list of all of your spouse's property, including real estate, stocks, bonds,
          savings accounts, and personal property will be needed. Land titles, stocks certificates, and
          other financial papers may be stored in a safe deposit box or another secure place.
        </p>
        <RelatedGuide guide={related([74, 'Post-Mortem Letter: How To Prepare It and What To Include'])}>
          To help your spouse find all the needed information and be better prepared for your death,
          please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'survivor-benefits',
    title: 'Survivor Benefits',
    body: (
      <>
        <p>The next step is to determine whether you are eligible for any benefits.</p>

        <h3>Insurance</h3>
        <p>
          Contact any insurers that may have issued policies to your spouse. Your spouse may have had
          several types of insurance policies, including the following:
        </p>
        <ul>
          <li>Life insurance,</li>
          <li>Mortgage or loan insurance,</li>
          <li>Accident insurance,</li>
          <li>Auto insurance,</li>
          <li>Credit card insurance, and</li>
          <li>Various types of insurance provided by your spouse's employer.</li>
        </ul>
        <p>
          The proceeds from an insurance policy can generally be paid directly to the named
          beneficiary. These claims can be processed quickly and are an important source of income for
          the survivors during this difficult time.
        </p>
        <Callout label="Tip">
          <p>File claims for insurance policies as soon as possible, especially if finances are a concern.</p>
        </Callout>
        <p>
          You may be required to decide how you want the payments made. Options might include taking
          the money in a lump sum or having the insurance company make fixed payments over a period of
          time. Which payment option to choose depends on your financial situation. You may, for
          example, want smaller fixed payments in order to have a steady income. Or you may want the
          full amount immediately to pay bills or to invest.
        </p>
        <p>
          It is highly recommended that you consult with a financial advisor about this decision. Do
          not succumb to pressure from an insurer to accept one plan or another. Take your time and make
          the right decision for you and your family.
        </p>

        <h3>Social Security</h3>
        <p>
          Your spouse is considered covered by Social Security if he or she paid into Social Security
          for at least 40 quarters. If you're not sure or need more information, contact your local
          Social Security Administration office or call 800-772-1213 to determine if he or she was
          eligible. To find the location of your local Social Security Office, visit the{' '}
          <a href="https://www.ssa.gov/locator" {...external}>
            Social Security Administration Office Locator.
          </a>
        </p>
        <Callout label="Tip">
          <p>
            If the deceased was already receiving benefits, do not deposit any checks received after
            death before checking with Social Security.
          </p>
        </Callout>
        <p>
          If your spouse was eligible, there are two additional types of possible benefits: (1) a death
          benefit and (2) survivor's benefits.
        </p>
        <ul>
          <li>
            <strong>One-Time Death Benefit</strong>. Social Security pays a one-time death benefit
            toward burial expenses. Complete the necessary form at your local Social Security office or
            ask the funeral director to complete the application and apply the payment directly to the
            funeral bill. This payment is made only to eligible spouses or to a child entitled to
            survivor's benefits.
          </li>
          <li>
            <strong>Survivor's Benefits for a Spouse or Children</strong>. If you are age 60 or older,
            you may be eligible for survivor's benefits. The amount of any benefits for which you will be
            eligible before age 65 will be less than any benefits due at age 65 or over. If you are under
            age 60, you may also be eligible for benefits if you are a disabled widow, age 50 or older
            and you care for dependent children under age 16 or disabled children.
          </li>
        </ul>
        <Callout label="Note">
          <p>Children who are under age 18 or are disabled may also be entitled to benefits.</p>
        </Callout>
        <Callout label="Tip">
          <p>
            When applying for Social Security benefits, have available your spouse's birth and death
            certificates, your marriage certificate, birth certificates of any dependent children,
            Social Security numbers, and copies of your spouse's most recent federal income tax return.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'veterans-benefits',
    title: "Veterans' Benefits",
    body: (
      <>
        <p>
          If your spouse was a veteran who received a discharge other than dishonorable, you may be
          eligible to receive a non-service-related death benefit. For non-service-related deaths on or
          after October 1, 2019, VA will pay a $300 burial allowance (if not hospitalized by the VA at
          the time of death) and $796 for a plot. If the death happened while the Veteran was in a VA
          hospital or under VA contracted nursing home care, some or all of the costs for transporting
          the Veteran's remains may be reimbursed.
        </p>
        <p>
          Burial in a{' '}
          <a href="https://www.cem.va.gov/find-cemetery/" {...external}>
            national cemetery
          </a>{' '}
          is free to a veteran, his or her spouse, and dependent children. Veterans are also eligible
          for a headstone or grave marker at no charge. The funeral director can help you apply for
          these benefits or you can contact the regional Department of Veterans' Affairs (VA) office.
        </p>
        <p>
          If your spouse was receiving disability benefits, you and any dependent children may also be
          entitled to monthly payments. Check with your regional VA office.
        </p>
      </>
    ),
  },
  {
    id: 'employee-benefits',
    title: 'Employee Benefits',
    body: (
      <>
        <p>
          If your spouse was employed at the time of death, ask his or her employer about any
          survivors' benefits. Your spouse may also be owed a paycheck for vacation or sick leave. If
          the employer-provided life, health, or accident insurance, you may be entitled to receive
          payments under these policies. If your spouse belonged to a union or professional
          organization, find out if this organization offers death benefits for members. If the death
          was work-related, you may be entitled to worker's compensation benefits.
        </p>
        <p>
          You should also contact all past employers, including federal, state, or local governments,
          to determine whether you are entitled to any payments from a pension plan.
        </p>
        <p>
          If your spouse was already retired and was receiving a pension, check with the employer to
          determine if you will continue to receive a pension payment, and in what amount. You should
          get professional guidance as to when and how to take any retirement plan distributions due
          your spouse or you.
        </p>
        <RelatedGuide guide={related([58, 'Retirement Plan Distributions: When To Take Them'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <RelatedGuide guide={related([59, 'Retirement Plan Distributions: How To Take Them'])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'will',
    title: 'The Will',
    body: (
      <>
        <p>
          If your spouse had a valid will, try to find a copy of it. Check with your lawyer, family and
          anyone who might know where the will is kept. It may be stored in a safe deposit box, which is
          sealed at the time of death in some states.
        </p>
        <Callout label="Caution">
          <p>Wills should not be stored in safe deposit boxes.</p>
        </Callout>
        <p>
          If your spouse did not have a will, his or her estate will be distributed according to state
          intestacy law. However, the state intestacy law will not apply to property where the title is
          in the name of the deceased and another person who has a right of survivorship. This property
          automatically passes to the co-owner.
        </p>
      </>
    ),
  },
  {
    id: 'probate',
    title: 'Probate',
    body: (
      <>
        <p>
          Probate is the legal process of paying the deceased's debts and distributing the estate to
          the rightful heirs. This process usually entails:
        </p>
        <ul>
          <li>
            The appointment of an individual by the court to act as the personal representative or
            executor of the estate; this person is often named in the will. If there is no will, the
            court appoints a personal representative, usually the spouse.
          </li>
          <li>Proving that the will is valid.</li>
          <li>Informing creditors, heirs, and beneficiaries that the will is to be probated.</li>
          <li>Disposing of the estate by the personal representative in accordance with the will or state law.</li>
        </ul>
        <p>
          The personal representative named in the will must file a petition with the court after the
          death. There is a fee for the probate process. Depending on the size and complexity of the
          probable assets, probating a will may require legal assistance.
        </p>
        <p>
          Assets jointly owned by the deceased and someone else are not subject to probate. Proceeds
          from a life insurance policy or Individual Retirement Account (IRA) that are paid directly to
          a beneficiary are also not subject to probate.
        </p>
      </>
    ),
  },
  {
    id: 'taxes',
    title: 'Taxes',
    body: (
      <>
        <p>There are various taxes that will have to be paid. Here is a summary:</p>
        <ul>
          <li>
            <strong>Federal Estate Tax</strong>. Estate tax is generally only due on estates exceeding
            the unified credit exemption equivalent, which for 2023 is $12,920,000 ($12,060,000 in
            2022). Estates over the threshold amount are subject to 40 percent tax.
          </li>
          <li>
            <strong>State Death Taxes</strong>. State laws vary, but generally, any estate which pays a
            federal estate tax must also file a state estate or death tax form and pay the state death
            tax. This amount is paid by the estate to the state in which the deceased lived.
          </li>
          <li>
            <strong>State Inheritance Taxes</strong>. Again, state requirements vary. Most states charge
            no inheritance tax.
          </li>
          <li>
            <strong>Federal and State Income Taxes</strong>. The federal and state income taxes of the
            deceased are due for the year of death. The taxes are due on the normal filing date of the
            following year unless an extension is requested.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            Professional guidance is strongly recommended in preparing the tax returns because the
            filing rules are quite complicated, and many tax-saving opportunities might be overlooked by
            an unqualified preparer.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'changing-ownership',
    title: 'Changing Ownership or Title',
    body: (
      <>
        <p>
          You may need to transfer ownership or change the title of property owned or revise documents
          after a death. Here are some items that should be checked:
        </p>

        <h3>Insurance Policies</h3>
        <p>
          If you hold any insurance policies, you may have to change beneficiaries. You may decide that
          you no longer need to have the same coverage if you do not have dependents, especially in the
          case of life insurance policies. Auto insurance and home insurance may also need revision.
        </p>
        <p>
          Your spouse may have medical insurance coverage through work. Under a federal law called
          COBRA, you and any dependent children may be entitled to continue under your spouse's
          work-related medical insurance plan for up to 36 months, provided you pay the premiums. On the
          other hand, you may need to purchase your own medical.
        </p>
        <Callout label="Tip">
          <p>
            Check with the employer to see if you can continue with its group health insurance plan,
            which may be less expensive. Contact the company issuing the policy to make any changes or
            for more information.
          </p>
        </Callout>

        <h3>Automobiles</h3>
        <p>
          The title of the car owned by your spouse may need to be changed. Contact your state's
          Department of Motor Vehicles.
        </p>

        <h3>Will</h3>
        <p>
          If your will provides for property to pass to your spouse, it should be updated. You may want
          to contact your estate planner for assistance.
        </p>
        <RelatedGuide guide={related([73, 'Estate Planning: How To Get Started'])}>
          Please see the Financial Guide:
        </RelatedGuide>

        <h3>Bank Accounts, Stocks, Bonds</h3>
        <p>
          If you had a joint bank account with your spouse, it will automatically pass to you. Check
          with the bank about changing the title and signature card on the account. To change stocks or
          bond titles, check with your stockbroker.
        </p>
        <p>
          If a bank account was held only in the name of your spouse, those assets will have to go
          through probate. An exception to this would be trust accounts.
        </p>

        <h3>Safe Deposit Box</h3>
        <p>
          In most states, if the box was rented only in the name of your spouse, it will require a court
          order to open the box. Only the will or any other materials pertaining to the death can be
          removed before the will has been probated.
        </p>

        <h3>Credit Cards</h3>
        <p>
          Credit cards held exclusively in the name of your spouse should be canceled. Any payments due
          on these credit cards should be paid by the estate.
        </p>
        <p>
          Your spouse may have used credit cards in both your names or used credit cards listed only in
          your name. If so, make the payments due on these cards to keep your own good credit rating.
          Notify the credit card companies that your spouse is deceased and that the card should list
          your name only. Some people, particularly widows, may experience difficulties in getting a new
          card if they do not have their own credit rating.
        </p>
        <Callout label="Tip">
          <p>
            When applying for a card, inform the lender about credit cards you shared with your spouse,
            even if your name was not listed.
          </p>
        </Callout>

        <h3>General Finances</h3>
        <p>
          Debts owed by your spouse will be the responsibility of the estate and should be forwarded to
          the personal representative or executor who is settling the estate. However, you should pay
          debts that are jointly owed (particularly mortgage payments and utility or phone bills) in
          order to keep a good credit rating.
        </p>
        <Callout label="Caution">
          <p>
            Do not immediately make permanent significant financial decisions, such as selling your
            home, moving, or changing jobs. You will need some time to consider your situation before you
            can make these decisions responsibly. If at all possible, do not rush into a decision you
            might later regret.
          </p>
        </Callout>
      </>
    ),
  },
];

export default function DeathOfASpouse() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/death-of-a-loved-one"
      page="Death of a Spouse"
      title={
        <>
          Death of a Spouse: <em>Financial Steps You Should Take</em>
        </>
      }
      lead="The death of a spouse or loved one is a difficult time. Yet, during this period, important financial arrangements must be made. This Financial Guide will help you handle the many financial details which must be attended to on the death of a loved one."
      sections={sections}
    >
      <p>
        Coping with the death of a spouse is difficult at best, but unfortunately, many decisions need
        to be made and actions must be taken in the first few months after the death occurs. This
        Financial Guide provides information that will help guide you through this difficult time.
      </p>
    </GuideArticle>
  );
}
