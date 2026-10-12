import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/business-strategies.php?item=104 (Starting a Business? 3 Things You Must
// Know), word for word. The library's opening paragraph is the banner's text (`lead`), and its three
// bold lead-ins (the three things) are the guide's sections. Back-to-top anchors omitted.
// Address: /guides/business-strategies/starting-a-business/three-things-you-must-know (articlePages
// in src/data/guides.js).

const sections = [
  {
    id: 'employer-identification-number',
    title: 'Employer Identification Number (EIN)',
    body: (
      <p>
        Securing an Employer Identification Number (also known as a Federal Tax Identification Number) is the first thing
        that needs to be done since many other forms require it. The fastest way to apply for an EIN is online through the
        IRS website or by telephone. Applying by fax and mail generally takes one to two weeks. Note that effective May 21,
        2012, you can only apply for one EIN per day. The previous limit was 5.
      </p>
    ),
  },
  {
    id: 'state-taxes',
    title: 'State Withholding, Unemployment, and Sales Tax',
    body: (
      <p>
        Once you have your EIN, you need to fill out forms to establish an account with the State for payroll tax
        withholding, Unemployment Insurance Registration, and sales tax collections (if applicable).
      </p>
    ),
  },
  {
    id: 'payroll-record-keeping',
    title: 'Payroll Record Keeping',
    body: (
      <>
        <p>
          Payroll reporting and record keeping can be very time-consuming and costly, especially if it isn't handled
          correctly. Also, keep in mind, that almost all employers are required to transmit federal payroll tax deposits
          electronically. Personnel files should be kept for each employee and include an employee's employment application
          as well as the following:
        </p>
        <p>
          <strong>Form W-4</strong> is completed by the employee and used to calculate their federal income tax
          withholding. This form also includes necessary information such as address and social security number.
        </p>
        <p>
          <strong>Form I-9</strong> must be completed by you, the employer, to verify that employees are legally permitted
          to work in the U.S.
        </p>
      </>
    ),
  },
];

export default function ThreeThingsYouMustKnow() {
  return (
    <GuideArticle
      category="business-strategies"
      topic="/guides/business-strategies/starting-a-business"
      page="3 Things You Must Know"
      title={
        <>
          Starting a Business? <em>3 Things You Must Know</em>
        </>
      }
      lead="Starting a new business is a very exciting and busy time. There is so much to be done and so little time to do it in. If you expect to have employees, there are a variety of federal and state forms and applications that will need to be completed to get your business up and running. That's where we can help."
      sections={sections}
    />
  );
}
