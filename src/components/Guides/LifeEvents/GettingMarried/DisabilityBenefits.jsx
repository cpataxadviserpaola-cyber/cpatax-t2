import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=49 (Disability Benefits: How To Get All You're
// Entitled To), word for word. Hyphens used as dashes are now dashes, and "Under age 65," which
// ran into the first condition, is its own item. Links to Social Security go to the current
// pages: the change-of-address link to my Social Security (where the old address redirects),
// and the benefit payment schedule to the latest one (the 2023 schedule is no longer online).
// Address: /guides/life-events/getting-married/disability-benefits (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'general',
    title: 'General Information',
    body: (
      <>
        <p>
          An individual who the Social Security Administration determines to be "disabled" receives an Award
          Letter, which is a notice of decision that explains how much the disability benefit will be and when
          payments start. It also tells you when you can expect your condition to be reviewed to see if there has
          been any improvement
        </p>
        <Callout label="Planning Aid">
          <p>
            <a href="https://www.ssa.gov/pubs/EN-05-10029.pdf" {...external}>
              Disability Benefits
            </a>{' '}
            gives a general overview of social security disability benefits.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            You never have to pay for information or service at Social Security. Some businesses advertise that
            they can provide name changes, Social Security cards, or earnings statements for a fee. All these
            services are provided free by Social Security.
          </p>
        </Callout>
        <p>Generally, a worker is entitled to disability if they are:</p>
        <ol>
          <li>"Insured" for disability (i.e., have accumulated sufficient credits in the Social Security system).</li>
          <li>Under age 65.</li>
          <li>Have been disabled or are expected to be disabled for at least 12 months.</li>
          <li>Have filed an application for benefits.</li>
          <li>Have completed a five-month waiting period.</li>
        </ol>
        <p>In general, to get disability benefits, you must meet two different earnings tests:</p>
        <ul>
          <li>A "recent work" test based on your age at the time you became disabled; and</li>
          <li>A "duration of work" test to show that you worked long enough under Social Security.</li>
        </ul>
        <p>Certain blind workers only need to meet the "duration of work" test.</p>
        <p>
          Disability is generally defined as the inability to perform substantial gainful activity due to a
          medical or mental impairment. Social Security pays benefits to people who cannot work because they have
          a medical condition that is expected to last at least one year or result in death. Federal law requires
          this very strict definition of disability, and meeting this definition under Social Security is
          difficult.
        </p>
        <p>
          If you are getting disability benefits on your work record or a deceased spouse's record, your payments
          cannot begin before the sixth full month of disability. Your first payment may include back benefits if
          the sixth month has passed.
        </p>
        <Callout label="Note">
          <p>
            Your Social Security disability benefit may be reduced if you are eligible for workers' compensation,
            other public disability payments, or a pension from a job where you did not have to pay Social Security
            taxes (discussed later). You can expect your payment amount to go up in future years. Whenever the cost
            of living goes up in a year, benefits will be increased by that amount the following January. If there
            is an increase, you will get a notice about it.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            If a person claiming to be a Social Security employee visits you to talk about Social Security or SSI,
            ask for identification. A bona fide Social Security employee will gladly show you proper
            identification. If you have any doubts, check with SSA. Remember: Social Security employees will never
            ask you for money to have something done. It is their job to help you.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'taxation',
    title: 'Taxation of Benefits',
    body: (
      <>
        <p>
          Some people who get Social Security must pay taxes on their benefits. About one-third of our current
          beneficiaries pay taxes on their benefits. You will only be affected if you have substantial income in
          addition to your Social Security benefits.
        </p>
        <p>
          You must pay taxes if you file a federal tax return as an "individual" and your combined income is more
          than $25,000. Combined income is the total amount of your adjusted gross income + nontaxable interest +
          1/2 of your Social Security benefits. If you file a joint return, you may have to pay taxes if you and
          your spouse have a combined income of more than $32,000. If you are married and file a separate return,
          you will probably pay taxes on your benefits.
        </p>
      </>
    ),
  },
  {
    id: 'payments',
    title: 'Benefit Payments',
    body: (
      <>
        <h3>When to Expect Them</h3>
        <p>
          Your check should arrive on the third day of every month. If the third falls on a Saturday, Sunday, or
          legal holiday, you will receive your check on the last banking day before that day. The check you
          receive is the benefit for the previous month, i.e., the check you receive dated July 3 is for June.
        </p>

        <h3>Form of Payment</h3>
        <p>
          Your benefit can be deposited directly into your bank account or paid through the Direct Express card
          program. The money is deposited on the second, third, or fourth Wednesday, depending on your day of
          birth. For more information:{' '}
          <a href="https://www.ssa.gov/pubs/EN-05-10031-2026.pdf" {...external}>
            Schedule of Social Security Benefit Payments for 2023
          </a>
          .
        </p>
        <p>
          <strong>Direct Deposit.</strong> Direct deposit of your check is safe, reliable, and convenient.
        </p>
        <p>
          Questions about direct deposit and Direct Express can be answered by your financial institution or any
          Social Security office.
        </p>
        <p>
          <strong>Direct Express.</strong> Direct Express is a prepaid debit card that does not require a bank
          account but still gives you the same advantages as direct deposit.
        </p>
        <Callout label="Tip">
          <p>
            It is especially important to tell Social Security about any change in your mailing address when you
            receive your benefits by direct deposit. If you decide to change the account or the financial
            institution where your benefits are going, keeping the old account open until the first benefit is
            received in your new account is important. It usually takes one or two months to process the change
            from one bank or account to another.
          </p>
        </Callout>

        <h3>Duration of Payments</h3>
        <p>
          Your disability benefits generally continue for as long as you cannot work and your impairment has not
          medically improved. They will not necessarily continue indefinitely, however. Because of advances in
          medical science and rehabilitation techniques, many people with disabilities recover from serious
          accidents and illnesses. Also, many individuals, through determination and effort, overcome serious
          conditions and return to work despite them.
        </p>
      </>
    ),
  },
  {
    id: 'new-child',
    title: 'Having a Child After Benefits Start',
    body: (
      <p>
        If you become the parent of a child after you begin receiving Social Security benefits and the child is in
        your care, be sure to notify SSA so that the child can also receive benefits.
      </p>
    ),
  },
  {
    id: 'retirement-age',
    title: 'Reaching Retirement Age',
    body: (
      <p>
        If you are still getting disability benefits when you reach full retirement age, your benefits will be
        automatically changed to retirement benefits, generally in the same amount. You will receive a new booklet
        explaining your rights and responsibilities as a retired person. If you are a disabled widow or widower,
        your benefits will be changed to regular widow or widower benefits (at the same rate) at 60. You will
        receive a new instruction booklet that explains the rights and responsibilities of people who get survivors
        benefits.
      </p>
    ),
  },
  {
    id: 'medicare',
    title: 'Eligibility for Medicare',
    body: (
      <p>
        After you receive disability benefits for 24 months, you will be eligible for Medicare. You will get
        information about Medicare several months before your coverage starts. If you have permanent kidney failure
        requiring regular dialysis or a transplant or you have amyotrophic lateral sclerosis (Lou Gehrig's disease),
        you may qualify for Medicare almost immediately.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes That Can Affect Your Benefits',
    body: (
      <>
        <p>
          You should promptly report any changes affecting your disability benefits. Family members receiving
          benefits also should report events that might affect their checks. The events that must be reported are
          explained in this section.
        </p>

        <h3>If you work while receiving disability payments</h3>
        <p>
          Notify SSA if you take a job or become self-employed, no matter how little you earn. Tell them how many
          hours you expect to work and when your work starts or stops. If you still are disabled, then you will be
          eligible for a trial work period, and you can continue receiving benefits for up to nine months. Also,
          tell SSA if you have any special work expenses because of your disability (such as specialized
          equipment, a wheelchair, or even prescription drugs) or if there is any change in the amount of those
          expenses.
        </p>

        <h3>If you receive other disability benefits</h3>
        <p>
          Social Security benefits for you and your family may be reduced if you are eligible for workers'
          compensation (including payments through the black lung program) or disability benefits from certain
          federal, state, or local government programs. You must tell SSA if:
        </p>
        <ul>
          <li>You apply for another type of disability benefit;</li>
          <li>You receive another disability benefit or a lump-sum settlement; or</li>
          <li>Your benefits change or stop.</li>
        </ul>

        <h3>If you are offered services under the Ticket to Work Program</h3>
        <p>
          Social Security may send you a Ticket that you can use to obtain services to help you go to work or earn
          more money. You may take the Ticket to your state vocational rehabilitation agency or an Employment
          Network of your choice. Employment Networks are private organizations that have agreed to work with
          Social Security to provide employment services to beneficiaries with disabilities. Your participation in
          the Ticket Program is voluntary, and the services are provided at no cost to you.
        </p>

        <h3>If you move</h3>
        <p>
          When you plan to move, give SSA your new address and phone number as soon as you know them. Also, let
          them know the names of any family members who are getting benefits and are moving with you. Even if you
          receive your benefits by direct deposit, the social security office must have your correct address to
          send you letters and other important information. Your benefits will be stopped if they are unable to
          contact you. You can change your address{' '}
          <a href="https://www.ssa.gov/myaccount/" {...external}>
            here
          </a>
          . Be sure you also file a change of address with your post office.
        </p>

        <h3>If you change direct deposit accounts</h3>
        <p>
          If you change financial institutions or open a new account, be sure to say that you want to sign up for
          direct deposit. You also can change your direct deposit online if you have a personal identification
          number and a password. Or, SSA can change your direct deposit information over the telephone. Have your
          new and old bank account numbers handy when you call. It takes about 30-60 days to change this
          information. Do not close your old account until you make sure your Social Security benefits are
          deposited into the new account.
        </p>

        <h3>If you are unable to manage your benefits</h3>
        <p>
          Sometimes, people are unable to manage their money. When this happens, Social Security should be
          notified. They can arrange to send benefits to a relative or another person who agrees to use the money
          to take care of the person for whom the benefits are paid. The person who manages someone else's
          benefits is called a "representative payee."
        </p>
        <Callout label="Note">
          <p>
            People who have "power of attorney" for someone do not automatically qualify to be the person's
            representative payee. For more information, ask Social Security for{' '}
            <a href="https://www.ssa.gov/pubs/EN-05-10076.pdf" {...external}>
              A Guide For Representative Payees
            </a>{' '}
            (Publication No. 05-10076).
          </p>
        </Callout>

        <h3>If you get a pension from work not covered by Social Security</h3>
        <p>
          If you start receiving a pension from a job for which you did not pay Social Security taxes—such as the
          federal civil service system, some state or local pension systems, nonprofit organizations, or a foreign
          government—your Social Security benefit may be reduced. Also, be sure to notify SSA if the amount of your
          pension changes.
        </p>

        <h3>If you get married or divorced</h3>
        <p>
          If you get married or divorced, your Social Security benefits may be affected, depending on the kind of
          benefits you receive.
        </p>
        <p>If your benefits are stopped because of marriage or remarriage, they may be started again if the marriage ends.</p>

        <h3>If you change your name</h3>
        <p>
          If you change your name by marriage, divorce, or court order, you must tell SSA immediately. If you do
          not give them this information, your benefits will be issued under your old name, and if you have direct
          deposit, payments may not reach your account. If you receive checks, you may not be able to cash them if
          your identification differs from the name on your check.
        </p>

        <h3>If you care for a child who receives benefits</h3>
        <p>
          If you receive benefits because you are caring for a disabled worker's child who is younger than age 16
          or disabled, notify SSA right away if the child leaves your care. You must give them the name and address
          of the person with whom the child lives.
        </p>
        <p>
          A temporary separation may not affect your benefits if you continue to have parental control over the
          child; however, your benefits will stop if you no longer have responsibility for the child. If the child
          returns to your care, SSA can start sending your benefits to you again.
        </p>
        <p>Your benefits usually stop when the youngest, unmarried child in your care reaches age 16 unless the child is disabled.</p>

        <h3>If you become a parent after entitlement</h3>
        <p>
          If you become the parent of a child after entitlement (including an adopted child), let SSA know so they
          can determine if the child qualifies for benefits.
        </p>

        <h3>If a child receiving benefits is adopted</h3>
        <p>
          When a child receiving benefits is adopted by someone else, let SSA know their new name, the date of the
          adoption decree, and the adopting parent's name and address. The adoption will not cause the child's
          benefits to stop.
        </p>

        <h3>If you have an outstanding warrant for your arrest</h3>
        <p>You must tell SSA if you have an outstanding arrest warrant for any of the following felony offenses:</p>
        <ul>
          <li>Flight to avoid prosecution or confinement;</li>
          <li>Escape from custody; and</li>
          <li>Flight-escape.</li>
        </ul>
        <p>
          You cannot receive regular disability benefits or any underpayments you may be due for any month with an
          outstanding arrest warrant for felony offenses.
        </p>

        <h3>If you are convicted of a crime</h3>
        <p>
          Tell SSA immediately if you are convicted of a crime. Regular disability benefits or any underpayments
          that may be due are not paid for the months a person is confined for a crime. Any family members eligible
          for benefits based on that person's work may continue to receive benefits.
        </p>
        <p>
          Monthly benefits or any underpayments that may be due usually are not paid to someone who commits a crime
          and is confined to an institution by court order and at public expense. This rule applies if the person
          has been found:
        </p>
        <ul>
          <li>
            Not guilty by reason of insanity or similar factors (such as mental disease, mental defect, or mental
            incompetence); or
          </li>
          <li>Incompetent to stand trial.</li>
        </ul>

        <h3>If you violate a condition of parole or probation</h3>
        <p>
          You must tell SSA if you are violating a condition of your probation or parole imposed under federal or
          state law. You cannot receive regular disability benefits or any underpayment that may be due for any
          month in which you violate a condition of your probation or parole.
        </p>

        <h3>If you leave the United States</h3>
        <p>
          If you are a U.S. citizen, you can travel to or live in most foreign countries without affecting your
          Social Security benefits. There are, however, a few countries where Social Security payments generally
          cannot be sent to. These countries are Azerbaijan, Belarus, Georgia, Kazakhstan, Kyrgyzstan, Moldova,
          Tajikistan, Turkmenistan, Ukraine, Uzbekistan, and Vietnam. In addition, U.S. Department of the Treasury
          regulations prohibits making payments if you are in Cuba or North Korea.
        </p>
        <p>
          Let SSA know if you plan to go outside the United States for a trip that lasts 30 days or more. Tell SSA
          the name of the country or countries you plan to visit and the date you expect to leave the United
          States.
        </p>
        <p>
          They will send you special reporting instructions and tell you how to arrange for your benefits while you
          are away. Be sure to notify SSA when you return to the United States.
        </p>
        <p>
          If you are not a U.S. citizen and you return to live in the United States, you must provide evidence of
          your non-citizen status to continue receiving benefits. If you work outside the United States, different
          rules apply in determining whether you can get your benefits.
        </p>
        <p>
          For more information, ask any Social Security office for a copy of{' '}
          <a href="https://www.ssa.gov/pubs/EN-05-10137.pdf" {...external}>
            Your Payments While You Are Outside The United States
          </a>{' '}
          (Publication No. 05-10137).
        </p>

        <h3>If your citizenship status changes</h3>
        <p>
          If you are not a U.S. citizen, let SSA know if you become a U.S. citizen or if your non-citizen status
          changes. If your immigration status expires, you must give SSA new evidence that shows you continue to be
          in the United States lawfully.
        </p>

        <h3>If a beneficiary dies</h3>
        <p>
          Let SSA know if a person receiving Social Security benefits dies. Benefits are not payable for the month
          of death. That means if the person died at any time in July, for example, the check received in August
          (which is payment for July) must be returned. If direct deposit is used, also notify the financial
          institution of the death as soon as possible so it can return any payments received after the death.
        </p>
        <p>Family members may be eligible for Social Security Survivors Benefits when a person getting disability benefits dies.</p>

        <h3>If you are receiving Social Security and Railroad Retirement benefits</h3>
        <p>
          If you receive both Social Security and Railroad Retirement benefits based on your spouse's work and your
          spouse dies, you must tell SSA immediately. You will no longer be eligible to receive both benefits. You
          will be notified of which survivor benefit you will receive.
        </p>
      </>
    ),
  },
  {
    id: 'reporting',
    title: 'How to Report a Change',
    body: (
      <>
        <p>
          You can report a change by calling the Social Security Administration at (800) 772-1213 or visiting any
          SSA office. You can also visit the{' '}
          <a href="https://www.ssa.gov/onlineservices" {...external}>
            Social Security Administration website
          </a>
          . If you send a report by mail, be sure to include the following information:
        </p>
        <ul>
          <li>
            Your name, and if different, the name and Social Security claim number of the person on whose account
            you get benefits
          </li>
          <li>Name of person(s) about whom the report is made</li>
          <li>Your Social Security claim number</li>
          <li>What new information is being reported</li>
          <li>Date of the change</li>
          <li>Your signature, address, phone number, and date</li>
        </ul>
        <p>If you are getting benefits on somebody else's record (e.g., a spouse), SSA needs their Social Security number as well.</p>
      </>
    ),
  },
  {
    id: 'reviews',
    title: 'Disability Case Reviews',
    body: (
      <>
        <p>
          Under federal law, all disability cases must be reviewed occasionally. This review ensures that people
          receiving benefits are still considered disabled and meet all other requirements. Your benefits generally
          will continue unless there is strong proof that your condition has medically improved and there is
          evidence that you can return to work.
        </p>

        <h3>Frequency of Reviews</h3>
        <p>
          How often your case is reviewed depends on the severity of your condition and the likelihood of
          improvement. The frequency can range from six months to seven years. Your Certificate of Award states when
          you can expect your first review.
        </p>
        <p>Here are general guidelines for reviews:</p>
        <p>
          <strong>Improvement expected</strong>—If medical improvement can be predicted when benefits start, your
          first review should be six to 18 months later.
        </p>
        <p>
          <strong>Improvement possible</strong>—If medical improvement is possible but cannot be predicted, your
          case will be reviewed about every three years.
        </p>
        <p>
          <strong>Improvement not expected</strong>—If medical improvement is not likely, your case will be
          reviewed only about once every five to seven years.
        </p>

        <h3>What Happens During a Review</h3>
        <p>
          After you get a letter announcing the review, someone from your Social Security office will contact you to
          explain the review process and your appeal rights. You will be asked to provide information about any
          medical treatment and work you might have done. Then your file will be sent to the state agency that makes
          disability decisions for Social Security. An evaluation team that includes a disability examiner and a
          doctor will carefully review your file and request your medical reports. If reports are not complete or
          current enough, you may be asked to have a special examination or test that the government will pay for.
        </p>
        <p>
          Once a decision is reached, SSA will send you a letter explaining it. If SSA decides you are still
          disabled, your benefits will continue. If they decide you are no longer disabled, you can file an appeal
          (see below); otherwise, your benefits will stop three months after SSA determines that your disability
          has ended.
        </p>
      </>
    ),
  },
  {
    id: 'ticket-to-work',
    title: 'The Ticket to Work Program',
    body: (
      <>
        <p>
          Even after you start receiving disability benefits, you may want to try working again. Under this
          program, Social Security and Supplemental Security Income disability beneficiaries can get help with
          training and other services they need to go to work at no cost. Most beneficiaries will receive a
          "ticket" to take to a provider they choose who can offer the needed services. To learn more about this
          program, ask for{' '}
          <a href="https://www.ssa.gov/pubs/EN-05-10061.pdf" {...external}>
            Your Ticket To Work
          </a>{' '}
          (Publication No. 05-10061).
        </p>
        <Callout label="Note">
          <p>
            For more information about helping you return to work, ask for{' '}
            <a href="https://www.ssa.gov/pubs/EN-05-10095.pdf" {...external}>
              Working While Disabled—How We Can Help
            </a>{' '}
            (Publication No. 05-10095). A guide to all of SSA employment supports can be found in the{' '}
            <a href="https://www.ssa.gov/redbook/eng/main.htm" {...external}>
              Red Book, A Summary Guide to Employment Support for Individuals with Disabilities Under the Social
              Security Disability Insurance and Supplemental Security Income Programs
            </a>{' '}
            (Publication No. 64-030).
          </p>
        </Callout>

        <h3>"Substantial" Work</h3>
        <p>
          To understand how work affects your disability benefits, you must understand how Social Security measures
          your work. Disability benefits can only be paid if you are unable to do any "substantial" work, referred
          to as "Substantial Gainful Activity" (SGA) by the SSA. The amount of your earnings determine whether your
          work is substantial. The Substantial Gainful Activity (SGA) amount for persons with disabilities other
          than blindness is $1,470 per month in 2023. For persons who are blind, the amount of earnings that
          indicate SGA is $2,460 per month in 2023.
        </p>
        <p>If you are self-employed, your disability is blindness, and you are age 55 or older, special rules apply.</p>

        <h3>Nine-Month Trial Work Period (TWP)</h3>
        <p>
          You can continue to receive benefits for up to nine months while you try to work. The months need not be
          consecutive, but they must occur within a 60-month period. Generally speaking, a "trial work" month is any
          month in which you earn over $1,050 in gross wages for 2023 or spend 80 hours in your own business
          (regardless of the amount of earnings). You will receive your full benefits during this period as long as
          you report your activity and remain disabled. If you recover during a trial work period, your benefits
          will stop after a three-month adjustment period.
        </p>
        <p>
          At the end of nine months of trial work, SSA will decide if you are able to do "substantial" work. If you
          can, your benefits will stop after a three-month adjustment period. If you are not able to work, your
          payments will continue.
        </p>

        <h3>36-Month Extended Period of Eligibility (EPE)</h3>
        <p>
          If your benefits stop because you have returned to work even though you are still medically disabled, you
          receive special "benefit protection" for the next 36 months. During that time, you can receive a benefit
          for any month your earnings fall below $1,470 (SGA amount in 2023). You do not have to file a new
          application, but you do have to notify Social Security. If you are unable to continue working, your
          benefits continue indefinitely so long as you remain disabled.
        </p>

        <h3>Medicare Continues</h3>
        <p>
          If you are working even though you are still disabled, your Medicare coverage may continue for at least
          39 months after the trial work period. Beyond that, you may purchase coverage with a monthly premium.
        </p>

        <h3>Help With Work Expenses</h3>
        <p>
          If you need certain equipment or services to help you work, the money you pay for them can be deducted
          from your earnings in deciding whether you are doing "substantial" work. It does not matter if you also
          need the items or services for daily living (such as a wheelchair).
        </p>
        <p>
          The cost of medical equipment, certain attendant care services, prostheses, and similar items and
          services is generally deductible. The cost of drugs or medical services is deductible only if required
          because of your condition.
        </p>

        <h3>Vocational Rehabilitation</h3>
        <p>
          When you applied for disability benefits, information about you and your impairment may have been sent to
          the state vocational rehabilitation agency. If they offer you services and you refuse them (without good
          reason), your monthly benefits may be withheld. You should call them if you have not heard from them but
          are interested in receiving rehabilitation services.
        </p>
        <p>
          Your disability benefits will continue while you receive rehabilitation services. Under a special rule,
          benefits can continue even if you medically recover while participating in an approved vocational
          rehabilitation or training program.
        </p>
      </>
    ),
  },
  {
    id: 'children-students',
    title: 'Benefits for Children and Students',
    body: (
      <>
        <p>If a child is getting checks on your account, you should know several important things about their benefits:</p>
        <ol>
          <li>
            When a child reaches age 18, the child's benefits stop the month before age 18 unless the child remains
            unmarried and is either disabled or a full-time elementary or secondary school student.
          </li>
          <li>
            About five months before the child's 18th birthday, the person receiving the child's benefits will get
            a form explaining how benefits can continue.
          </li>
          <li>
            A child whose benefits stopped at 18 can have them started again if they become disabled before reaching
            22 or becomes a full-time elementary or secondary school student before reaching 19.
          </li>
          <li>
            If a child is disabled, the child can continue to receive benefits after age 18 if they have a
            disability. The child also may qualify for SSI disability benefits.
          </li>
          <li>
            If a child at 18 is a student, they can receive benefits until age 19 if they continue to be full-time
            elementary or secondary school students. When a student's 19th birthday occurs during a school term,
            benefits can be continued for up to two months to allow completion of the term.
          </li>
          <li>
            Social Security should be notified immediately if the student drops out of school, changes from
            full-time to part-time attendance are expelled or suspended, or changes schools. SSA should also be told
            if the student is paid by their employer for attending school.
          </li>
          <li>
            SSA sends each student a form at the start and end of the school year. It is important that the form be
            filled out and returned to SSA. Failure to return the form could result in a suspension of benefits.
          </li>
          <li>
            A student can keep receiving benefits during a vacation period of four months or less if they plan to
            return to school full-time at the end of the vacation.
          </li>
          <li>
            Generally, students who stop attending school can receive benefits again if they return to school
            full-time before age 19. The student needs to contact Social Security to reapply for benefits.
          </li>
          <li>
            Benefits for the child of someone getting disability benefits always end if the child marries. The must
            be reported right away.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'appeals',
    title: 'Your Right to an Appeal',
    body: (
      <>
        <p>
          If you disagree with SSA's decision, you can appeal it. You have 60 days to file a written appeal by mail
          or in person with any Social Security office. Generally, there are four levels to the appeals process.
          They are:
        </p>
        <p>
          <strong>Reconsideration.</strong> Your claim is reviewed by someone who did not take part in the first
          decision.
        </p>
        <p>
          <strong>Hearing Before an Administrative Law Judge.</strong> You can appear before a judge to present your
          case.
        </p>
        <p>
          <strong>Review by Appeals Council.</strong> If the Appeals Council decides your case should be reviewed,
          it will either decide your case or return it to the administrative law judge for further review.
        </p>
        <p>
          <strong>Federal District Court.</strong> If the Appeals Council decides not to review your case or
          disagree with its decision, you may file a civil lawsuit in a Federal District Court and continue your
          appeal to the U.S. Supreme Court if necessary.
        </p>
        <p>
          If you disagree with the decision at one level, you have 60 days to appeal to the next level until you are
          satisfied with the decision or have completed the last level of appeal.
        </p>
        <p>You have two special appeal rights when a decision is made that you are no longer disabled. They are:</p>
        <p>
          <strong>Disability Hearing.</strong> As part of the reconsideration process, this hearing allows you to
          meet face-to-face with the person reconsidering your case to explain why you feel you are still disabled.
          You can submit new evidence or information and bring someone who knows about your disability. This special
          hearing does not replace your right to have a formal hearing before an administrative law judge (the
          second appeal step) if your reconsideration is denied.
        </p>
        <p>
          <strong>Continuation of Benefits.</strong> While appealing your case, you can have your disability
          benefits and Medicare coverage (if you have it) continue until an administrative law judge decides.
          However, you must request the continuation of your benefits during the first ten (10) days of the 60 days
          mentioned earlier. If your appeal is unsuccessful, you may have to repay the benefits.
        </p>
      </>
    ),
  },
];

export default function DisabilityBenefits() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Disability Benefits"
      title={
        <>
          Disability Benefits: <em>How To Get All You're Entitled To</em>
        </>
      }
      lead={
        'Who is entitled to Social Security disability benefits? How is a "disability" determined? How long do payments continue? What happens when you reach retirement age? This Financial Guide provides information you should know about Social Security disability benefits in the event you or a loved one becomes disabled.'
      }
      sections={sections}
    >
      <p>
        Every family needs to plan for the possibility of a disabling illness that prevents a breadwinner from
        earning income. Here is a summary of the part that Social Security benefits will play in your disability
        insurance planning, the amount you're entitled to, and the applicable rules. This Guide also informs you of
        what changes you need to report to Social Security and the easiest ways to report them.
      </p>
    </GuideArticle>
  );
}
