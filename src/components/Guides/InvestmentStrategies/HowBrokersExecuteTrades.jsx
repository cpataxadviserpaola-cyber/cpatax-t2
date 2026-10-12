import GuideArticle, { Callout } from '../GuideArticle.jsx';

// Source: cpataxadviser.com/investment-strategies.php?item=91 (How Brokers Execute Trades: What
// Every Investor Should Know), word for word. The library's opening paragraph is the banner's text
// (`lead`), and its table of contents is the guide's contents list. Dashes for the hyphens used as
// dashes; the note, tip, example and caution boxes keep the library's labels, and the broker's
// choices stay one list per stretch between the notes, as on the library. The SEC rules (2000) and
// the fractional price ($20 1/16) are as the library has them. Back-to-top anchors omitted.
// Investment Strategies has no topic pages, so the breadcrumb ends at the category.
// Address: /guides/investment-strategies/how-brokers-execute-trades (articlePages in src/data/guides.js).

const sections = [
  {
    id: 'trade-execution',
    title: "Trade Execution Isn't Instantaneous",
    body: (
      <>
        <p>
          Many investors who trade through online brokerage accounts assume they have a direct connection to the securities
          markets. But they don't. When you press "enter," your order is sent over the Internet to your broker—who in turn
          decides which market to send it to for execution. A similar process occurs when you call your broker to place a
          trade.
        </p>
        <p>
          While trade execution is usually seamless and quick, it does take time. And prices can change quickly, especially
          in fast-moving markets. Because price quotes are only for a specific number of shares, investors may not always
          receive the price they saw on their screen or the price their broker quoted over the phone. By the time your order
          reaches the market, the price of the stock could be slightly—or very—different.
        </p>
        <Callout label="Note">
          <p>
            No SEC regulations require a trade to be executed within a set period of time. But if firms advertise their speed
            of execution, they must not exaggerate or fail to tell investors about the possibility of significant delays.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            To avoid buying or selling a stock at a price higher or lower than you wanted, place a limit order rather than a
            market order. A limit order is an order to buy or sell a security at a specific price. A buy limit order can only
            be executed at the limit price or lower, and a sell limit order can only be executed at the limit price or higher.
            When you place a market order, you can't control the price at which your order will be filled.
          </p>
        </Callout>
        <Callout label="Example">
          <p>
            You want to buy the stock of a "hot" IPO that was initially offered at $9, but don't want to end up paying more
            than $20 for the stock. Place a limit order to buy the stock at any price up to $20. By entering a limit order
            rather than a market order, you will not be caught buying the stock at $90 and then suffering immediate losses as
            the stock drops later in the day or the weeks ahead.
          </p>
        </Callout>
        <Callout label="Caution">
          <p>
            Your limit order may never be executed because the market price may quickly surpass your limit before your order
            can be filled. But by using a limit order you also protect yourself from buying the stock at too high a price.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'brokers-choices',
    title: "Your Brokers' Choices for Executing Your Trade",
    body: (
      <>
        <p>
          Just as you have a choice of brokers, your broker generally has a choice of markets in which to execute your
          trade:
        </p>
        <ul>
          <li>
            For a stock listed on an exchange, such as the New York Stock Exchange (NYSE), your broker may direct the order
            to that exchange, to another exchange (such as a regional exchange), or to a firm called a "third market maker."
            A "third market maker" is a firm that stands ready to buy or sell a stock listed on an exchange at publicly
            quoted prices. As a way to attract orders from brokers, some regional exchanges or third market makers will pay
            your broker for routing your order to that exchange or market maker—perhaps a penny or more per share for your
            order. This is called "payment for order flow."
          </li>
        </ul>
        <Callout label="Note">
          <p>
            Upon the opening of a new account and on an annual basis, firms must inform customers in writing whether they
            receive payment for order flow and, if they do, a detailed description of the type of payments. Firms must also
            disclose on trade confirmations whether they receive payment for order flow and that customers can make a
            written request to find out the source and type of the payment as to that particular transaction.
          </p>
        </Callout>
        <ul>
          <li>
            For a stock that trades in an over-the-counter (OTC) market, such as the NASDAQ, your broker may send the order
            to a "NASDAQ market maker" in the stock. Many NASDAQ market makers also pay brokers for order flow. Note: A
            "market maker" is a firm that stands ready to buy and sell a particular stock on a regular and continuous basis
            at a publicly quoted price. You'll most often hear about market makers in the context of the NASDAQ or other
            "over the counter" (OTC) markets. Market makers that stand ready to buy and sell stocks listed on an exchange,
            such as the New York Stock Exchange, are called "third market makers." Many OTC stocks have more than one
            market-maker.
          </li>
        </ul>
        <Callout label="Note">
          <p>
            Market-makers generally must be ready to buy and sell at least 100 shares of a stock they make a market in. As a
            result, a large order from an investor may have to be filled by a number of market-makers, perhaps at different
            prices.
          </p>
        </Callout>
        <ul>
          <li>
            Your broker may route your order—especially a "limit order"—to an electronic communications network (ECN) that
            automatically matches buy and sell orders at specified prices. A "limit order" is an order to buy or sell a
            stock at a specific price.
          </li>
          <li>
            Your broker may decide to send your order to another division of your broker's firm to be filled out of the
            firm's own inventory. This is called "internalization." With this option, your broker's firm can make money on
            the "spread"—the difference between the purchase price and the sale price.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'best-execution',
    title: 'Your Broker Has a Duty of "Best Execution"',
    body: (
      <>
        <p>
          Many firms use automated systems to handle the orders they receive from their customers. In deciding how to
          execute orders, your broker has a duty to seek the best execution reasonably available for its customers' orders.
          That means your broker must evaluate the orders it receives from all customers in the aggregate and periodically
          assess which competing markets, market makers, or ECNs offer the most favorable terms of execution.
        </p>
        <p>
          The opportunity for "price improvement"—which is the opportunity, but not the guarantee, for an order to be
          executed at a better price than what is currently quoted publicly—is an important factor a broker should consider
          in executing its customers' orders. Other factors include the speed and the likelihood of execution.
        </p>
        <Callout label="Example">
          <p>
            You enter a market order to sell 500 shares of a stock. The current quote is $20. Your broker may be able to send
            your order to a market or a market maker where your order would have the possibility of getting a price better
            than $20. If your order is executed at $20 1/16, you would receive $10,031.25 for the sale of your stock—$31.25
            more than if your broker had only been able to get the current quote for you.
          </p>
        </Callout>
        <p>
          Of course, the additional time it takes some markets to execute orders may result in your getting a worse price
          than the current quote—especially in a fast-moving market. So your broker is required to take into account any
          trade-off between providing its customers' orders with the possibility of better prices and the extra time it may
          take to do so.
        </p>
      </>
    ),
  },
  {
    id: 'direct-your-trades',
    title: 'You Can Direct Your Trades',
    body: (
      <>
        <p>
          If for any reason you want to direct your trade to a particular exchange, market maker, or ECN, you may be able to
          call your broker and ask him or her to do this. But some brokers may charge for that service.
        </p>
        <Callout label="Tip">
          <p>
            Some brokers now offer active traders the ability to direct orders in NASDAQ stocks to the market maker or ECN of
            their choice.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: 'new-rules',
    title: 'New Rules on Execution Practices',
    body: (
      <>
        <p>
          On November 15, 2000, the SEC adopted new rules aimed at improving public disclosure of order execution and routing
          practices. Beginning April 2001, all market centers that trade national market system securities must make
          monthly, electronic disclosures of basic information concerning their quality of executions on a stock-by-stock
          basis, including how market orders of various sizes are executed relative to the public quotes and information
          about effective spreads—the spreads actually paid by investors whose orders are routed to a particular market
          center. In addition, market centers will disclose the extent to which they provide executions at prices better
          than the public quotes to investors using limit orders.
        </p>
        <p>
          The new rules also require brokers that route orders on behalf of customers to disclose quarterly the identity of
          the market centers to which they route a significant percentage of their orders. In addition, the rule mandates
          that brokers respond to the requests of customers interested in learning where their individual orders were
          routed for execution during the previous six months.
        </p>
        <p>
          With this information now readily available, you can better learn where and how your firm executes its customers'
          orders and what steps it takes to assure the best execution.
        </p>
        <Callout label="Tip">
          <p>
            Ask your broker about the firm's policies on payment for order flow, internalization, or other routing
            practices—or look for that information in your account agreement. You can also write to your broker to find out
            the nature and source of any payment for order flow it may have received for a particular order.
          </p>
        </Callout>
        <Callout label="Tip">
          <p>
            If you're comparing brokerage firms, ask each how often it obtains price improvement on customers' orders. And
            then consider that information in deciding with which firm you will do business.
          </p>
        </Callout>
      </>
    ),
  },
];

export default function HowBrokersExecuteTrades() {
  return (
    <GuideArticle
      category="investment-strategies"
      page="How Brokers Execute Trades"
      title={
        <>
          How Brokers Execute Trades: <em>What Every Investor Should Know</em>
        </>
      }
      lead="When you place an order to buy or sell stock, you might not think about where or how your broker will execute the trade. But where and how your order is executed can impact the overall costs of the transaction, including the price you pay for the stock. Here's what you should know about trade execution."
      sections={sections}
    />
  );
}
