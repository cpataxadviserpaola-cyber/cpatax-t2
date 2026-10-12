import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=55 (10 Retirement Saving Tips), word for word.
// Each tip is a section, numbered as in the library, without the full stop after its heading; the
// double hyphen and the hyphens used as dashes are now dashes. The library's page has no
// introduction, so the banner's opening line (`lead`) is written for this site.
// Address: /guides/life-events/planning-for-retirement/retirement-saving-tips (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'save-early',
    title: '1. Save As Much As You Can As Early As You Can',
    body: (
      <p>
        Though it's never too late to start, the sooner you begin saving, the more time your money has to grow. Gains
        each year build on the prior year's—that's the power of compounding, and the best way to accumulate wealth.
      </p>
    ),
  },
  {
    id: 'realistic-goals',
    title: '2. Set Realistic Goals',
    body: (
      <p>
        Project your retirement expenses based on your needs, not rules of thumb. Be honest about how you want to live
        in retirement and how much it will cost. Then calculate how much you must save to supplement Social Security and
        other sources of retirement income.
      </p>
    ),
  },
  {
    id: '401k',
    title: '3. A 401(k) Is One Of The Easiest And Best Ways To Save For Retirement',
    body: (
      <p>
        Contributing money to a 401(k) gives you an immediate tax deduction, tax-deferred growth on your savings,
        and—usually—a matching contribution from your company.
      </p>
    ),
  },
  {
    id: 'ira',
    title: '4. An IRA Can Also Give Your Savings A Tax-Advantaged Boost',
    body: (
      <p>
        Like a 401(k), IRAs offer huge tax breaks. There are two types: a traditional IRA offers tax-deferred growth,
        meaning you pay taxes on your investment gains only when you make withdrawals, and, if you qualify, your
        contributions may be deductible; a Roth IRA, by contrast, doesn't allow for deductible contributions but offers
        tax-free growth, meaning you owe no tax when you make withdrawals, but contributions are not deductible.
      </p>
    ),
  },
  {
    id: 'asset-allocation',
    title: '5. Focus On Your Asset Allocation More Than On Individual Picks',
    body: (
      <p>How you divide your portfolio between stocks and bonds will have a big impact on your long-term returns.</p>
    ),
  },
  {
    id: 'stocks',
    title: '6. Stocks Are Best For Long-Term Growth',
    body: (
      <p>
        Stocks have the best chance of achieving high returns over long periods. A healthy dose will help ensure that
        your savings grows faster than inflation, increasing the purchasing power of your nest egg.
      </p>
    ),
  },
  {
    id: 'bonds',
    title: "7. Don't Move Too Heavily Into Bonds, Even In Retirement",
    body: (
      <p>
        Many retirees stash most of their portfolio in bonds for the income. Unfortunately, over 10 to 15 years,
        inflation easily can erode the purchasing power of bonds' interest payments.
      </p>
    ),
  },
  {
    id: 'tax-efficient-withdrawals',
    title: '8. Making Tax-Efficient Withdrawals Can Stretch The Life Of Your Nest Egg',
    body: (
      <p>
        Once you're retired, your assets can last several more years if you draw on money from taxable accounts first
        and let tax-advantaged accounts compound for as long as possible.
      </p>
    ),
  },
  {
    id: 'part-time-work',
    title: '9. Working Part-Time In Retirement Can Help In More Ways Than One',
    body: (
      <p>
        Working keeps you socially engaged and reduces the amount of your nest egg you must withdraw annually once you
        retire.
      </p>
    ),
  },
  {
    id: 'creative-ways',
    title: '10. There Are Other Creative Ways To Get More Mileage Out Of Retirement Assets',
    body: (
      <p>
        You might consider relocating to an area with lower living expenses or transforming the equity in your home into
        income by taking out a reverse mortgage.
      </p>
    ),
  },
];

export default function RetirementSavingTips() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-for-retirement"
      page="10 Retirement Saving Tips"
      title="10 Retirement Saving Tips"
      lead="Ten ways to build your retirement savings and make them last, from starting early and setting realistic goals to tax-advantaged accounts, investing, and drawing on your nest egg."
      sections={sections}
      numbered={false}
    />
  );
}
