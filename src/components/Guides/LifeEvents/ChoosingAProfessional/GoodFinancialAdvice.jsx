import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=38 (Are You Getting Good Financial Advice?),
// word for word. Back-to-top anchors omitted (handled by layout).
// Address: /guides/life-events/choosing-a-professional/good-financial-advice (articlePages in
// src/data/guides.js).

const sections = [
  {
    id: 'gut-feeling',
    title: "Don't Just Look At Numbers; What's Your Gut Telling You?",
    body: (
      <>
        <p>
          It's not hard to find advice on how to manage your money these days. You can find plenty
          of it on the Internet, in books, magazines and newspapers, from well-meaning friends and
          relatives, and of course, from professional advisors.
        </p>
        <p>
          But while finding financial guidance is easy, judging the worth of it can be a much
          tougher task. Even hiring a professional adviser is no guarantee you'll get great advice.
          If you're paying someone for a personalized plan, though, you especially want to make
          sure you're getting your money's worth.
        </p>
        <p>
          The true test is whether you reach your goals. But if your goal is decades away—retirement,
          for example—you don't want to wait until age 65 to see if you made the right moves.
        </p>
        <p>
          An annual review of your overall financial situation is the best way to assess the quality
          of the service you're getting.
        </p>
        <p>
          So what things should you look at? Ask yourself these questions when gauging money advice:
        </p>
        <p>
          What are the numbers? The most obvious way to judge investment advice is by performance.
          But make sure your expectations are realistic.
        </p>
        <p>
          If you have a diversified portfolio, you're going to outperform the worst asset class but
          underperform the best. With that in mind, don't look at just your pure rate of return. You
          don't have to be in the year's highest flying mutual funds and stocks to succeed.
        </p>
        <p>
          Instead, you and your advisor should quantify your goals when creating your financial plan.
        </p>
        <p>
          That plan should include periodic, realistic mileposts to check your progress against. If
          your net worth isn't growing as fast as you'd forecast, examine why. Maybe it was just a
          down year in the market. Or maybe you've been too cautious with your investments and need
          to make a change.
        </p>
        <p>What does your gut say? Can you stomach the investment risk they're taking?</p>
        <p>The real key is to remain invested.</p>
        <p>
          Remember, some discomfort is normal. You're not going to gain anything without taking
          risks. But if you're so nervous about the risk you're taking that you cannot stay invested,
          you need to talk to your advisor. If you're always buying at the top and selling at the
          bottom, you won't build wealth.
        </p>
        <p>
          You also should pay attention if your gut feeling is telling you that your advisor isn't
          being honest with you.
        </p>
        <p>
          If it doesn't feel right, it probably isn't. If your advisor doesn't listen to you,
          doesn't return your phone calls, does some kind of trading in your account that you didn't
          know about, you need to raise your hand and say something.
        </p>
      </>
    ),
  },
  {
    id: 'following-advice',
    title: 'Have you been following the advice?',
    body: (
      <p>
        If you haven't put your plan into practice, what's stopping you? If it is because the
        suggestions are too complex, and you don't understand them or they make you uncomfortable,
        talk to your advisor. Why pay for counsel you're not going to use? If your planner won't
        listen, you may need to hire someone else.
      </p>
    ),
  },
  {
    id: 'clear-advice',
    title: 'Is the advice clear to you?',
    body: (
      <>
        <p>
          I really believe that the way an advisor speaks to a client is very important. Sometimes
          people who aren't confident about something use lingo to make themselves appear to be an
          expert.
        </p>
        <p>
          Also, it's crucial for you to understand the money moves you are making—and why you're
          making them.
        </p>
      </>
    ),
  },
  {
    id: 'good-listener',
    title: 'Is your financial advisor a good listener?',
    body: (
      <>
        <p>
          Responsiveness is key. Many people have questions. Are you getting good answers to those
          questions?
        </p>
        <p>
          If your accountant says: "Don't worry about those details. Just trust me," consider
          looking for a new one. You should feel comfortable enough with your advisor to ask
          questions and are entitled to understand what he or she is doing.
        </p>
      </>
    ),
  },
];

export default function GoodFinancialAdvice() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/choosing-a-professional"
      page="Are You Getting Good Financial Advice?"
      title={
        <>
          Are You Getting <em>Good Financial Advice?</em>
        </>
      }
      lead="Finding financial guidance is easy—judging the worth of it is a much tougher task. Ask yourself these questions when gauging money advice to make sure you're getting your money's worth."
      sections={sections}
      numbered={false}
    />
  );
}
