import GuideArticle from '../../GuideArticle.jsx';

// Source: cpataxadviser.com/life-events.php?item=57 (Should You Count On Social Security?), word for
// word. Its opening paragraph is the banner's text (`lead`), and its one heading, "Taking Steps To
// Protect Yourself", is the guide's one section. The hyphen used as a dash is now a dash, and the SSA
// link goes to the address its old one (socialsecurity.gov) now redirects to.
// Address: /guides/life-events/planning-for-retirement/count-on-social-security (articlePages in
// src/data/guides.js).

const external = { target: '_blank', rel: 'noopener noreferrer' };

const sections = [
  {
    id: 'protect-yourself',
    title: 'Taking Steps To Protect Yourself',
    body: (
      <>
        <p>
          There are some important steps to take when you get your report. First, check your reported earnings for each
          year you worked. Just like any other bureaucracy, mistakes are always a possibility.
        </p>
        <p>
          Second, consider how your benefit varies according to your retirement age. If you retire at 62, generally, you
          will only get 80 percent of your benefits at the normal retirement age. Conversely, for each year you work past
          your normal retirement age, you will get an extra 8 percent. If you're married, your non-working spouse will
          get 37.5 percent of your benefits if you retire early and 50 percent at your normal retirement age.
        </p>
        <p>
          Remember that the full retirement age is no longer necessarily 65. The full retirement age is gradually
          increasing to age 67 by 2027. Looking at your various retirement benefits, you can figure out the best time for
          you to start taking Social Security.
        </p>
        <p>
          Third, decide how much you want to rely on Social Security. The younger you are, the more likely it is that
          your benefits will be less than projected. As a safety measure, you might assume your actual annual benefit
          would be 75 percent of current estimates. Whatever your method, plug that Social Security number into your
          retirement needs analysis to see how much you will have to save on your own to provide the income you want,
          and then plan to save even more than that if you can.
        </p>
        <p>
          Finally, when you deal with the Social Security Administration, do it online or in writing. If doing so is
          impossible, go to a Social Security office. For future reference, always take notes and get the employee's
          name and ID number of the person you spoke with.
        </p>
        <p>
          You won't be penalized if you receive incorrect information from the employee and you have proof. If you are
          unhappy with the Social Security Administration's decision about your situation, you can file a
          "reconsideration." You can also ask to have any deadlines waived until your problems are resolved.
        </p>
        <p>
          Social Security was never designed to pay for a life of luxury, but even with its current fiscal woes, you can
          probably count on something when you retire.
        </p>
      </>
    ),
  },
];

export default function CountOnSocialSecurity() {
  return (
    <GuideArticle
      category="life-events"
      topic="/guides/life-events/planning-for-retirement"
      page="Should You Count On Social Security?"
      title="Should You Count On Social Security?"
      lead="In December 2022, 48.6 million retired American workers received an average of $1,825 average monthly benefit in Social Security retirement benefits. Social Security is the major source of income for many elderly, but by 2035, the number of Americans 65 and older will increase from approximately 58 million today to over 76 million—with only 2.3 workers for each beneficiary. Currently, there are 2.8 workers for each beneficiary."
      sections={sections}
      numbered={false}
    >
      <p>
        If you're worried about social security, you're not alone. Nevertheless, Social Security is still an important
        part of your retirement planning. The best way to take control is to find out what your estimated benefits will
        be. You can do this by contacting the SSA through their{' '}
        <a href="https://www.ssa.gov/onlineservices/" {...external}>
          website
        </a>
        .
      </p>
      <p>
        You'll receive a report showing your estimated annual benefits at age 62, at your "normal" retirement age (65 to
        67, depending on your year of birth), and age 70. These are estimates of future benefits, with an actual dollar
        amount at that time.
      </p>
    </GuideArticle>
  );
}
