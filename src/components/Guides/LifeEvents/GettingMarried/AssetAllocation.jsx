import { Link } from 'react-router';
import GuideArticle, { Callout } from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/investment-strategies.php?item=84 (Asset Allocation: How To
// Diversify For Maximum Return), word for word. Hyphens used as dashes are now dashes, the
// "Tip:"/"Note:" lead-ins are the boxes' labels, and the pointer to "The Efficient Frontier"
// links to that section. The library's graph of the efficient frontier no longer loads there,
// so the chart below is drawn from the figures the text gives for Portfolios A to D.
// Address: /guides/life-events/getting-married/asset-allocation (articlePages in
// src/data/guides.js).

// The chart: expected return (%) against expected risk (standard deviation). The frontier is a
// smooth curve through Portfolio C (risk 12, return 10%) and Portfolio B (risk 25, return 12%);
// Portfolio A (risk 25, return 10%) sits below it.
const curve = { b: 2 / Math.log(25 / 12) };
curve.a = 10 - curve.b * Math.log(12);
const frontier = (risk) => curve.a + curve.b * Math.log(risk);

const plot = { left: 60, right: 580, top: 56, bottom: 330 };
const x = (risk) => plot.left + (risk / 30) * (plot.right - plot.left);
const y = (ret) => plot.bottom - ((ret - 6) / 7) * (plot.bottom - plot.top);

const frontierPath = Array.from({ length: 53 }, (_, index) => 4 + index * 0.5)
  .map((risk, index) => `${index ? 'L' : 'M'}${x(risk).toFixed(1)},${y(frontier(risk)).toFixed(1)}`)
  .join(' ');

const portfolios = [
  { name: 'D', risk: 6, ret: frontier(6), label: { dx: -12, dy: -8, anchor: 'end' } },
  { name: 'C', risk: 12, ret: 10, label: { dx: -12, dy: -9, anchor: 'end' } },
  { name: 'B', risk: 25, ret: 12, label: { dx: -12, dy: -9, anchor: 'end' } },
  { name: 'A', risk: 25, ret: 10, label: { dx: 12, dy: 5, anchor: 'start' }, inefficient: true },
];

function EfficientFrontierChart() {
  return (
    <figure className="article-figure">
      <svg
        className="frontier-chart"
        viewBox="0 0 600 400"
        role="img"
        aria-labelledby="frontier-title frontier-desc"
      >
        <title id="frontier-title">The Efficient Frontier</title>
        <desc id="frontier-desc">
          Expected return rises with expected risk along a curve, the efficient frontier. Portfolio D, risk about 6
          and return about 8 percent; Portfolio C, risk 12 and return 10 percent; and Portfolio B, risk 25 and return
          12 percent, all lie on the frontier. Portfolio A, risk 25 and return 10 percent, falls below it.
        </desc>

        {[6, 7, 8, 9, 10, 11, 12, 13].map((ret) => (
          <g key={ret}>
            <line className="frontier-grid" x1={plot.left} x2={plot.right} y1={y(ret)} y2={y(ret)} />
            <text x={plot.left - 10} y={y(ret) + 4} textAnchor="end">
              {ret}%
            </text>
          </g>
        ))}
        {[0, 5, 10, 15, 20, 25, 30].map((risk) => (
          <text key={risk} x={x(risk)} y={plot.bottom + 28} textAnchor="middle">
            {risk}
          </text>
        ))}
        <text x={8} y={24}>
          Expected return
        </text>
        <text x={(plot.left + plot.right) / 2} y={392} textAnchor="middle">
          Expected risk (standard deviation)
        </text>

        <path className="frontier-line" d={frontierPath} />
        <text className="frontier-name" x={plot.right - 5} y={y(frontier(30)) - 20} textAnchor="end">
          Efficient frontier
        </text>

        {portfolios.map((portfolio) => {
          const cx = x(portfolio.risk);
          const cy = y(portfolio.ret);
          return (
            <g className={`frontier-point${portfolio.inefficient ? ' is-inefficient' : ''}`} key={portfolio.name}>
              <title>
                {`Portfolio ${portfolio.name}: risk ${portfolio.risk}, return about ${Math.round(portfolio.ret)}%${
                  portfolio.inefficient ? ' (below the efficient frontier)' : ' (on the efficient frontier)'
                }`}
              </title>
              <circle className="frontier-hit" cx={cx} cy={cy} r={14} />
              <circle className="frontier-dot" cx={cx} cy={cy} r={8} />
              <text
                className="frontier-label"
                x={cx + portfolio.label.dx}
                y={cy + portfolio.label.dy}
                textAnchor={portfolio.label.anchor}
              >
                {portfolio.name}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption>
        The Efficient Frontier. Portfolios B, C, and D lie on the frontier; Portfolio A falls below it.
      </figcaption>
    </figure>
  );
}

const sections = [
  {
    id: 'what-it-is',
    title: 'What is Asset Allocation?',
    body: (
      <>
        <p>
          Asset allocation is based on the proven theory that the <em>type or class</em> of security you own is much
          more important than the particular security itself. Asset allocation is a way to control risk in your
          portfolio. The risk is controlled because the six or seven asset classes in the well-balanced portfolio will
          react differently to changes in market conditions such as inflation, rising or falling interest rates,
          market sectors coming into or falling out of favor, a recession, etc.
        </p>
        <p>
          Asset allocation should not be confused with simple diversification. Suppose you diversify by owning 100 or
          even 1,000 different stocks. You really haven't done anything to control risk in your portfolio if those
          1,000 stocks all come from only one or two different asset classes—say, blue chip stocks (which usually fall
          into the category known as large-capitalization, or large-cap, stocks) and mid-cap stocks. Those classes
          will often react to market conditions in a similar way they will generally all either go up or down after a
          given market event. This is known as "correlation."
        </p>
        <p>
          Similarly, many investors make the mistake of building a portfolio of various top-performing growth funds,
          perhaps thinking that even if one goes down, one or two others will continue to perform well. The problem
          here is that growth funds are highly correlated—they tend to move in the same direction in response to a
          given market force. Thus, whether you own two or 20 growth funds, they will tend to react in the same way.
        </p>
        <p>
          Not only does it lower risk, but asset allocation maximizes returns over a period of time. This is because
          the proper blend of six or seven asset classes will allow you to benefit from the returns in all of those
          classes.
        </p>
      </>
    ),
  },
  {
    id: 'how-it-works',
    title: 'How Does Asset Allocation Work?',
    body: (
      <>
        <p>
          Asset allocation planning can range from the relatively simple to the complex. It can range from generic
          recommendations that have no relevance to your specific needs (dangerous) to recommendations based on
          sophisticated computer programs (very reliable although far from perfect). Between these extremes, it can
          include recommendations based only on your time horizon (still risky) or on your time horizon adjusted for
          your risk tolerance (less risky) or any combination of factors.
        </p>
        <Callout label="Tip">
          <p>
            Most mutual fund families, brokerage firms and financial service companies offer computerized asset
            allocation analysis. Unfortunately, many of them, in recommending a specific portfolio of mutual funds or
            stocks, include only funds in their family (in the case of fund families) or those on which they receive
            the highest commissions (in the other cases). However, these may not be the best-performing investments.
            Don't undercut the benefit of a sophisticated asset allocation analysis by allowing yourself to be steered
            into funds or stocks that are based on biased recommendations.
          </p>
        </Callout>
        <p>
          <em>Computerized</em> asset allocations are based on a questionnaire you fill out. Your answers provide the
          information the computer needs to become familiar with your unique circumstances. From the questionnaire
          will be determined:
        </p>
        <ul>
          <li>Your investment time horizon (mainly, your age and retirement objectives).</li>
          <li>Your risk threshold (how much of your capital you are willing to lose during a given time frame), and</li>
          <li>Your financial situation (your wealth, income, expenses, tax bracket, liquidity needs, etc.).</li>
          <li>Your goals (the financial goals you and your family want to achieve).</li>
        </ul>
        <p>
          The goal of the computer analysis is to determine the best blend of asset classes, in the right
          percentages, that will match your particular financial profile.
        </p>
        <p>
          At this point, the "efficient frontier" concept comes into play. It may sound complex, but it is a key to
          investment success.
        </p>
        <Callout label="Note">
          <p>
            For an in-depth discussion of this important concept, see{' '}
            <Link to="#efficient-frontier">The Efficient Frontier</Link>, below.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'asset-classes',
    title: 'What Are Asset Classes?',
    body: (
      <>
        <p>
          The securities that exist in today's financial markets can be divided into four main classes: stocks,
          bonds, cash, and foreign holdings, with the first two representing the major part of most portfolios. These
          categories can be further subdivided by "style." Let's take a look at these classes in the context of mutual
          fund investments:
        </p>
        <p>
          <em>Equity Funds</em>: The style of an equity fund is a combination of both (1) the fund's particular
          investment methodology (growth-oriented, value-oriented or a blend of the two) and (2) the size of the
          companies in which it invests (large, medium and small). Combining these two variables—investment
          methodology and company size—offers a broad view of a fund's holdings and risk level. Thus, for equity funds,
          there are nine possible style combinations, ranging from large capitalization/value for the safest funds to
          small capitalization/growth for the riskiest.
        </p>
        <p>
          <em>Fixed Income Funds</em>: The style of a domestic or international fixed-income fund is to focus on the
          two pillars of fixed-income performance—interest-rate sensitivity (based on maturity) and credit quality.
          Thus, fixed-income funds are split into three maturity groups (short-term, intermediate-term, and long-term)
          and three credit-quality groups (high, medium and low). These groupings display a portfolio's effective
          maturity and credit quality to provide an overall representation of the fund's risk, given the length and
          quality of bonds in its portfolio.
        </p>
      </>
    ),
  },
  {
    id: 'models',
    title: 'How Are Asset Allocation Models Built?',
    body: (
      <>
        <p>
          Simply stated, financial advisors build asset allocation models by (1) taking historic market data on
          classes of securities, <em>individual</em> securities, interest rates, and various market conditions; (2)
          applying projections of future economic conditions and other relevant factors; (3) analyzing, comparing and
          weighting the data with computer programs; and (4) further analyzing the data to create model portfolios.
        </p>
        <p>There are three key areas that determine investment performance for each asset class:</p>
        <ol>
          <li>
            <em>Expected return</em>. This is an estimate of what the asset class will earn in the future—both income
            and capital gain—based on both historical performance and economic projections.
          </li>
          <li>
            <em>Risk</em>. This is measured by looking to the asset class's past performance. If an investment's
            returns are volatile (vary widely from year to year), it is considered high-risk.
          </li>
          <li>
            <em>Correlation</em>. Correlation is determined by viewing the extent in which asset classes tend to rise
            and fall together. If there is a high correlation, a decision to invest in these asset classes increases
            risk. The correct asset mix will have a low correlation among asset classes. Correlation coefficients are
            calculated by looking back over the historical performance of the asset classes being compared.
          </li>
        </ol>
        <Callout label="Tip">
          <p>
            The ideal asset allocation model for you will change over time, due to changes in your portfolio, market
            conditions and your individual circumstances. There will probably be shifts in the percentages allocated
            to asset classes, and possibly some changes in the asset classes themselves.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'right-for-you',
    title: 'What Is Right For You?',
    body: (
      <>
        <p>
          It's important to be informed about asset allocation so as to avoid the "cookie cutter" approach that many
          investors end up accepting. Many of the asset allocations performed today take this "one size fits all"
          approach.
        </p>
        <p>
          There are all sorts of investment recommendations, but the question is whether they are suitable for you.
          Regardless of the approach you take, be sure that an asset allocation takes into account <em>your</em>{' '}
          financial profile <em>to the extent feasible</em>.
        </p>
      </>
    ),
  },
  {
    id: 'efficient-frontier',
    title: 'The Efficient Frontier',
    body: (
      <>
        <p>
          The "efficient frontier" concept is a key to investment success. A graph demonstrating the efficient
          frontier is shown below.
        </p>
        <EfficientFrontierChart />
        <p>
          Any expected return (left side of graph) carries with it an expected risk (bottom of graph). This
          risk-reward relationship varies from individual to individual. Conservative investors cannot tolerate more
          than a low level of risk, and are willing to accept a return commensurate with that level of risk. More
          aggressive investors are willing to tolerate higher levels of risk in the expectation of higher returns.
        </p>
        <p>
          The efficient frontier is a line on the graph that represents a <em>series</em> of{' '}
          <em>optimal risk-return</em> relationships. That is, every dot on the line represents the highest return
          for a given level of risk or, stated conversely, the lowest risk for a given rate of return. Conservative
          investors will aim for a spot on the left side of the efficient (low return, low risk) while aggressive
          investors will aim for the right side (high return, high risk). If your portfolio (present or proposed)
          falls <em>on</em> the efficient frontier line, it has an optimal risk-return relationship, but nonetheless
          still may not be suitable <em>for you</em> because it may be <em>too</em> aggressive or <em>too</em>{' '}
          conservative. Your portfolio should be at <em>that spot</em> on the efficient frontier that approximates{' '}
          <em>your</em> particular risk-return goal.
        </p>
        <Callout label="Note">
          <p>
            The efficient frontier is the result of mathematical calculations of expected risk and return. Risk is
            shown in levels of standard deviation, a commonly used measure of volatility.
          </p>
        </Callout>
        <p>
          As shown on the graph, if you are willing to tolerate an expected risk (standard deviation) of, say, 12,
          then you can reasonably (not definitely) expect an approximate return of 10 percent{' '}
          <em>over a period of time</em> (Portfolio C)—<em>if</em> your portfolio is efficient.
        </p>
        <p>
          It is unlikely, over time, that returns will be <em>higher</em> than those shown on the efficient frontier.
          Of course, you may, in specific instances, achieve a higher return than that shown, but your average return
          over time will generally not exceed the amount shown.
        </p>
        <p>
          If your portfolio falls <em>below</em> the efficient frontier, then it is "inefficient" in that it exposes
          you to too much risk for the specified return or, conversely, provides too low a return for the specified
          risk. Unfortunately for investors, most portfolios fall substantially below the efficient frontier.
        </p>
        <Callout label="Example">
          <p>
            Portfolio A represents an inefficient portfolio in that it falls below the efficient frontier, meaning
            that the investor might reasonably expect a return of 10 percent for a risk of 25. However, if the
            investor is comfortable with that risk level, he can theoretically increase his return to 12 percent with
            no increase in risk by making his portfolio efficient (i.e., modifying it to resemble Portfolio B, which is
            on the efficient frontier). Conversely, if he wants to lower his risk, he can maintain the 10 percent
            return while reducing the risk to 12 (by modifying his portfolio to resemble Portfolio C on the efficient
            frontier).
          </p>
        </Callout>
        <p>
          <em>
            Portfolio D is also efficient (as are B and C, all on the efficient frontier), but represents a portfolio
            that will enjoy a lower return with lower risk.
          </em>
        </p>
        <Callout label="Caution">
          <p>A diversified portfolio does not assure a profit or protect against loss in a declining market.</p>
        </Callout>
        <Callout label="Caution">
          <p>
            Asset allocation will not guarantee a profit or protect you from loss however, it may provide a hedge
            against risk and create opportunities in both bull and bear markets.
          </p>
        </Callout>
      </>
    ),
  },
];

export default function AssetAllocation() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/getting-married"
      page="Asset Allocation"
      title={
        <>
          Asset Allocation: <em>How To Diversify For Maximum Return</em>
        </>
      }
      lead={
        <>
          Contrary to popular belief, asset allocation, which refers to the types or classes of securities owned, is
          generally the most important factor in determining the return on your investments, responsible for about 90
          percent of the return according to experts. The remaining 10 percent of the return is determined by{' '}
          <em>which</em> particular investments (stock, bond, mutual fund, etc.) you select and <em>when</em> you decide
          to buy them.
        </>
      }
      sections={sections}
    >
      <p>What is not so important is what's referred to as "market timing."</p>
      <p>
        Likewise, buying a "hot" stock or mutual fund recommended by a financial magazine or newsletter, a brokerage
        firm or mutual fund family, an advertisement or any other source is generally not a good move.
      </p>
      <Callout label="Tip">
        <p>Recommendations in publications may be out-of-date, having been prepared several months prior to the publication date.</p>
      </Callout>
      <p>
        Market timing refers to the concept of moving in and out of an investment or an investment class in
        anticipation of a rise or fall in the market; however, it's been proven over and over again that the modern
        market cannot be timed. In other words, market timing is a strategy that just does not work.
      </p>
      <p>
        Asset allocation, on the other hand, is the cornerstone of good investing. Each investment made is part of an
        overall asset allocation plan. Further, this plan must not be generic (one-size-fits-all), but rather must be
        tailored to <em>your specific needs</em>.
      </p>
      <p>
        Sound financial advice from a trusted and competent advisor is very important as the investment world is
        populated by many "advisors" who either are unqualified or don't have your best interests at heart.
      </p>
      <p>That said, here are the basic investment guidelines you should live by:</p>
      <ul>
        <li>
          First, determine your financial profile based on your time horizon, risk tolerance, goals, and financial
          situation. For more sophisticated investment analysis, this profile should be translated into a graph or
          curve by a computer program. It's important to use a good computer program because of the complexity of the
          task.
        </li>
        <li>
          Find the right mix of "asset classes" for your portfolio. Asset classes should balance each other in a way
          that will give the best return for the degree of risk you are willing to take. Using computer programs,
          financial advisors can determine the proper mix of assets for your financial profile. Over time, the ideal
          allocation for you will not remain the same; it will change as your situation changes or in response to
          changes in market conditions.
        </li>
        <li>Choose investments from each class, based on performance and costs.</li>
      </ul>
      <p>These concepts are discussed further in the following sections.</p>
      <Callout label="Note">
        <p>
          If the discussion that follows seems theoretical, keep in mind that even increasing your investment return by
          only two percent—with no increase in risk—can amount to a $94,000 increase in the value of a $100,000
          portfolio ($307,000 portfolio value at 10 percent vs. $213,000 at 8 percent) at the end of 20 years. Even
          more dramatically, it can amount to an increase of more than $2.2 million on a $1 million investment ($5.3
          million portfolio value at 10 percent vs. $3.1 million at 8 percent) at the end of 30 years. Is this type of
          reward worth making the effort to polish your investment approach? The difference in total return is based
          largely on investing wisely and following the proper principles, and can often mean the difference between a
          comfortable retirement and struggling to survive.
        </p>
      </Callout>
    </GuideArticle>
  );
}
