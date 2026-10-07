import GuideArticle, { Callout, RelatedGuide } from '../../GuideArticle.jsx';
import { guide } from '../../../../data/guides.js';

// Source: cpataxadviser.com/life-events.php?item=100 (Saving Money: 10 Major Ways To Increase
// Your Nest Egg), word for word. Related guides are named by their titles in the library.
// Address: /guides/life-events/getting-married/saving-money (articlePages in
// src/data/guides.js).
const related = guide('life-events.php');

const sections = [
  {
    id: 'financial-plan',
    title: '1. Prepare a Financial Plan',
    body: (
      <>
        <p>
          While most people appreciate the importance of a financial plan, too many put it off to the tomorrow
          that never comes. It is important to identify your goals and determine how best to achieve them. A
          financial plan can help you do this.
        </p>
        <RelatedGuide guide={related([10, 'Your Financial Plan: Getting Started On a Secure Future'])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'save-income',
    title: '2. Save Your Income',
    body: (
      <>
        <p>
          Use an automatic savings plan to make sure that you save a percentage of your paycheck every payroll
          period. The percentage should be determined by your financial planning needs. Some people need to save
          10 percent of their gross pay while others need to save more. If the amount saved goes to a 401(k) plan
          or another tax-deferred plan, so much the better.
        </p>
        <p>
          But don't stop with automatic savings. Put aside everything you can. If you invest $50 a month in a
          mutual fund, you could have as much as $25,000 in ten years, depending on the rate of return.
        </p>
        <Callout label="Tip">
          <p>A well-thought-out budget will help you determine how much you should and can save.</p>
        </Callout>
        <RelatedGuide guide={related([11, 'Budgeting: How To Prepare a Workable Plan'])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'mortgage',
    title: '3. Cut Your Mortgage Costs',
    body: (
      <>
        <ul>
          <li>
            <strong>Consider paying down your mortgage.</strong> For most people, paying down a mortgage is an
            effective way of saving and increasing net worth. Decide that you will pay $100 or $200 per month or
            more in mortgage principal, and do it faithfully.
          </li>
          <li>
            <strong>Consider refinancing your mortgage.</strong> See if you can save money by refinancing your
            mortgage. Go through the calculations and see whether the reduction in your monthly payments would be
            worth the costs involved with refinancing. The general rule is that a reduction of at least two points
            will make it worthwhile to refinance if you intend to stay in the house for at least five years.
          </li>
        </ul>
        <RelatedGuide guide={related([68, 'Refinancing Your Mortgage: When and How'])}>
          Please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'debt',
    title: '4. Cut Your Credit Card and Consumer Debt',
    body: (
      <>
        <p>
          To save interest, consider taking advantage of balance transfers, which offer a lower interest rate,
          typically zero percent (0%) for anyone with excellent credit and a stellar FICO score. You may have to
          pay a transaction fee of two to five percent (2-5%) on the amount transferred.
        </p>
        <RelatedGuide guide={related([52, 'Home Equity Loans: How To Shop For The One That Is Best For You'])}>
          Please see the Financial Guide:
        </RelatedGuide>
        <Callout label="Tip">
          <p>Once you have paid off a car loan or other debt, keep sending that payment to a mutual fund or other investment.</p>
        </Callout>
      </>
    ),
  },
  {
    id: 'credit-cards',
    title: '5. Cut Your Credit Card Costs',
    body: (
      <>
        <p>
          Cut your credit card fees and other costs by switching to a card that charges less interest or one that
          doesn't charge an annual fee. Better yet, pay cash (or use a debit card) to pay for your purchases and
          avoid credit cards altogether.
        </p>
        <RelatedGuide guide={related([24, 'Credit Cards: How To Choose—And Use—Them Wisely'])}>
          For suggestions as to other ways to cut credit card costs, please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'bank-fees',
    title: '6. Cut Your Bank Fees',
    body: (
      <>
        <p>
          There are several ways to reduce your bank fees. Find out what you need to do to get free checking and
          free ATM usage and do it. You may also want to join a credit union instead of using a bank since credit
          unions typically charge less for banking services. Here are a few more tips:
        </p>
        <ul>
          <li>Keep a minimum balance in your account to avoid fees.</li>
          <li>If you know you will be charged a fee for using another institution's ATM, only use the ATM at your own bank.</li>
          <li>
            Don't keep too much money in a low-interest savings account. Find out how much money you'll need
            access to in an emergency, typically three to six months' worth of expenses depending on your personal
            financial situation, and keep only that amount in savings. The rest of your funds should be put to
            work. With interest rates so low, options include investing in stocks or mutual funds and parking your
            money in a long-term CD (check rates using Bankrate.com).
          </li>
          <li>
            If you still write checks, avoid ordering them through your bank. Many check printers charge less for
            check orders than the printers used by banks.
          </li>
        </ul>
        <Callout label="Tip">
          <p>
            If you find you are withdrawing too much cash, stop using your ATM card and make yourself physically
            go to the bank to withdraw the money instead. This may help you to spend less cash.
          </p>
        </Callout>
        <RelatedGuide guide={related([22, 'Bank Accounts: What To Look and Ask For'])}>
          For suggestions as to other ways to cut bank fees, please see the Financial Guide:
        </RelatedGuide>
      </>
    ),
  },
  {
    id: 'insurance',
    title: '7. Fine Tune Your Insurance Coverage',
    body: (
      <>
        <p>Here are some ways to save on insurance of all types:</p>
        <ul>
          <li>
            <strong>Life insurance policy.</strong> Not everyone needs a life insurance policy, but if you think
            you need one, then it pays to shop around. If you already have a life insurance policy, then it's a
            good idea to periodically make sure you are paying the lowest premium on your life insurance policy
            because rates change frequently. Also, if you've quit smoking, you may be entitled to better rates
            after a few years.
          </li>
          <li>
            <strong>Examine your life insurance needs.</strong> You may find that you are paying for too much
            coverage.
          </li>
        </ul>
        <RelatedGuide guide={related([47, 'Life Insurance: How Much and What Kind To Buy'])}>
          For suggestions as to other ways to cut life insurance costs, please see the Financial Guide:
        </RelatedGuide>
        <ul>
          <li>
            <strong>Insure your home and autos with the same insurer.</strong> You should be able to get a break
            by doing this.
          </li>
          <li>
            <strong>Shop around for auto insurance every few years.</strong> You may be able to get a lower rate
            form a competing insurer.
          </li>
        </ul>
        <RelatedGuide guide={related([43, 'Car Insurance: 10 Cost-Cutters To Save You Money'])}>
          For suggestions as to other ways to cut auto insurance costs, please see the Financial Guide:
        </RelatedGuide>
        <ul>
          <li>
            <strong>Smoke detectors, burglar alarms, and sprinkler systems.</strong> Installing these types of
            safety devices usually helps you save on the cost of homeowner's insurance. Don't forget to ask your
            insurance agent about other savings.
          </li>
        </ul>
        <RelatedGuide guide={related([64, "Homeowner's Insurance: How To Get The Best Coverage and Value"])}>
          For suggestions as to other ways to cut home insurance costs, please see the Financial Guide:
        </RelatedGuide>
        <ul>
          <li>
            <strong>Get rid of private mortgage insurance.</strong> Once you have enough equity in the home, ask
            your lender to cancel your private mortgage insurance.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'utilities',
    title: '8. Cut Your Utility Costs',
    body: (
      <>
        <p>
          Your utility may have a program that subsidizes making your home more energy-efficient. Look into this
          possibility. Even if there is no help available from the utility, it is worth it to caulk your windows
          and make sure your insulation is a high enough "R" factor.
        </p>
        <p>Here are some other ideas:</p>
        <ul>
          <li>
            Use energy-efficient bulbs such as CFLs (compact fluorescent lights) and LEDs (light-emitting diodes)
            instead of incandescent bulbs. Doing so will save you about 25 to 30 percent. Another advantage is that
            these types of bulbs last longer.
          </li>
          <li>
            Keep the thermostat set at the lowest comfortable temperature in winter and the highest comfortable
            temperature in summer.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'phone',
    title: '9. Cut Your Phone Bills',
    body: (
      <>
        <p>
          Today's cost-cutting competition among phone service providers offers many opportunities for savings
          on your phone bills, such as:
        </p>
        <ul>
          <li>
            If you have a landline phone, make sure you're paying as little as possible for long-distance charges.
            Take the time to investigate which long-distance carrier will save you the most, and switch to that
            carrier. Or, bundle your phone with cable and internet service.
          </li>
          <li>Use e-mail, texting, or Zoom video to correspond with relatives and friends.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'big-expense',
    title: '10. Forego One Big Expense per Year',
    body: (
      <p>
        For instance, skip your yearly vacation this year or take a less expensive one. Another way to save on a
        large yearly expense is to swap an expensive health club membership for a membership at the YMCA or shop
        around. Many fitness facilities offer special rates for new members. Paying one year or six months up
        front may also give you a break on costs.
      </p>
    ),
  },
];

export default function SavingMoney() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Saving Money"
      title={
        <>
          Saving Money: <em>10 Major Ways To Increase Your Nest Egg</em>
        </>
      }
      lead="One way to accumulate assets for retirement, education, or other major goals is to reduce your spending. Studies have shown that these savings can add up over the years to a substantially increased nest egg."
      sections={sections}
      numbered={false}
    >
      <p>
        The familiar expression "A penny saved is a penny earned" overlooks the impact of taxes; a saved penny is,
        in fact, worth more, often much more, than an earned penny because you pay tax on an earned penny but not
        on the penny you save.
      </p>
      <p>
        Thus, tax-free savings, with earnings compounding over the years, can really increase your nest egg,
        making it worthwhile to explore the following money-saving techniques.
      </p>
      <p>
        This Financial Guide provides you with 10 tips for making sure that more of your money is slated for
        saving and investment. More important, it provides you with links to other Financial Guides that help you
        implement these tips and maximize the ultimate return.
      </p>
    </GuideArticle>
  );
}
