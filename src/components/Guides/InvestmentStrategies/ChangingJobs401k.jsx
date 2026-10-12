import GuideArticle, { Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/investment-strategies.php?item=90 (Changing Jobs? Don't Forget Your
// 401(k)), word for word. The library's opening paragraph is the banner's text (`lead`), and its
// three bold lead-ins are the guide's sections. "59 ½" is "59½", and the "Note" boxes keep the
// library's labels. "Contact The 401(k) plan administrator ... should have" is as the library has
// it. Back-to-top anchors omitted. Investment Strategies has no topic pages, so the breadcrumb
// ends at the category.
// Address: /guides/investment-strategies/changing-jobs-401k (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'alternatives',
    title: 'What are the Alternatives?',
    body: (
      <>
        <p>
          If your new job offers a retirement plan, then the easiest course of action is to roll your account into the new
          plan before the 60-day period ends. This is known as a "rollover" and is relatively painless to do. Contact The
          401(k) plan administrator at your previous job should have all of the forms you need.
        </p>
        <p>
          The best way to roll funds over from an old 401(k) plan to a new one is to use a direct transfer. With the direct
          transfer, you never receive a check and you avoid all of the taxes and penalties mentioned above and your savings
          will continue to grow tax-deferred until you retire.
        </p>
        <p>
          One word of caution: Many employers require that you work a minimum period of time before you can participate in
          a 401(k). If that is the case, one solution is to keep your money in your former employer's 401(k) plan until the
          new one is available. Then you can roll it over into the new plan. Most plans let former employees leave their
          assets several months in the old plan.
        </p>
      </>
    ),
  },
  {
    id: 'rollover-period',
    title: '60-Day Rollover Period',
    body: (
      <>
        <p>
          If you have your former employer make the distribution check out to you, the Internal Revenue Service considers
          this a cash distribution. The check you get will have 20 percent taken out automatically from your vested amount
          for federal income tax.
        </p>
        <p>
          But don't panic. You have 60 days to roll over the lump sum (including the 20 percent) to your new employer's
          plan or into a rollover individual retirement account (IRA). Then you won't owe the additional taxes or the 10
          percent early withdrawal penalty.
        </p>
        <Callout label="Note">
          <p>
            If you're not happy with the fund choices your new employer offers, you might opt for a rollover IRA instead of
            your company's plan. You can then choose from hundreds of funds and have more control over your money. But
            again, to avoid the withholding hassle, use direct rollovers.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'leave-it-alone',
    title: 'Leave It Alone',
    body: (
      <>
        <p>
          If your vested account balance in your 401(k) is more than $5,000, you can usually leave it with your former
          employer's retirement plan. Your lump sum will keep growing tax-deferred until you retire.
        </p>
        <p>
          However, if you can't leave the money in your former employer's 401(k) and your new job doesn't have a 401(k),
          your best bet is a direct rollover into an IRA. The same applies if you've decided to go into business for
          yourself.
        </p>
        <p>
          Once you turn 59½, you can begin withdrawals from your IRA without penalty and your withdrawals are taxed as
          ordinary income. The IRS "Rule of 55" allows you to withdraw funds from your 401(k) or 403(b) without a penalty
          at age 55 or older.
        </p>
        <p>
          With both a 401(k) and an IRA, you must begin taking required minimum distributions (RMDs) when you reach age 72,
          whether you're working or not.
        </p>
      </>
    ),
  },
];

export default function ChangingJobs401k() {
  return (
    <GuideArticle
      category="investment-strategies"
      page="Changing Jobs?"
      title={
        <>
          Changing Jobs? <em>Don't Forget Your 401(k)</em>
        </>
      }
      lead="One of the most important questions you face when changing job is what to do with the money in your 401(k) because making the wrong move could cost you thousands of dollars or more in taxes and lower returns."
      sections={sections}
    >
      <p>
        Let's say you put in five years at your current job. For most of those years, you've had the company take a set
        percentage of your pretax salary and put it into your 401(k) plan.
      </p>
      <p>
        Now that you're leaving, what should you do? The first rule of thumb is to leave it alone. You have 60 days to
        decide whether to roll it over or leave it in the account. Resist the temptation to cash out. The worst thing an
        employee can do when leaving a job is to withdraw the money from their 401(k) plans and put it in his or her bank
        account. Here's why:
      </p>
      <p>
        If you decide to have your distribution paid to you, the plan administrator will withhold 20 percent of your total
        for federal income taxes, so if you had $100,000 in your account and you wanted to cash it out, you're already down
        to $80,000.
      </p>
      <p>
        Furthermore, if you're younger than 59½, you'll face a 10 percent penalty for early withdrawal come tax time. Now
        you're down another 10 percent from the top line to $70,000.
      </p>
      <Callout label="Note">
        <p>
          If you separate from service during or after the year you reach age 55 (age 50 for public safety employees of a
          state, or political subdivision of a state, in a governmental defined benefit plan) there is an exception to the
          10 percent early withdrawal tax penalty. This applies to 401(k) plans only. IRA, SEP, SIMPLE IRA, and SARSEP Plans
          do not qualify for the exception.
        </p>
      </Callout>
      <p>
        In addition, because distributions are taxed as ordinary income, at the end of the year you'll have to pay the
        difference between your tax bracket and the 20 percent already taken out. For example, if you're in the 32 percent
        tax bracket, you'll still owe 12 percent, or $12,000. This lowers the amount of your cash distribution to $58,000.
      </p>
      <p>
        But that's not all. You also might have to pay state and local taxes. Between taxes and penalties, you could end up
        with little over half of what you had saved up, short-changing your retirement savings significantly.
      </p>
    </GuideArticle>
  );
}
