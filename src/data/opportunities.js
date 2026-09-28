// Content for the tax opportunity finder on the Home page. Each opportunity lists the
// situations it applies to. Keep descriptions general: they are prompts for a
// conversation with a CPA, not advice.
export const situations = [
  { id: 'self-employed', label: "I'm self-employed", icon: 'laptop' },
  { id: 'business', label: 'I own a business', icon: 'building' },
  { id: 'homeowner', label: 'I own my home', icon: 'home' },
  { id: 'children', label: 'I have children', icon: 'users' },
  { id: 'investor', label: 'I invest', icon: 'trend' },
  { id: 'rental', label: 'I own a rental property', icon: 'key' },
  { id: 'retirement', label: "I'm retired or close to it", icon: 'clock' },
  { id: 'charity', label: 'I give to charity', icon: 'heart' },
];

export const defaultSituations = ['self-employed', 'homeowner'];

export const opportunities = [
  {
    title: 'Home office deduction',
    text: 'If part of your home is used regularly and exclusively for your business, a share of your home costs may be deductible.',
    for: ['self-employed', 'business'],
  },
  {
    title: 'Solo 401(k) or SEP IRA',
    text: 'Retirement plans for the self-employed can allow much larger deductible contributions than a standard IRA.',
    for: ['self-employed', 'business'],
  },
  {
    title: 'Qualified business income deduction',
    text: 'Many owners of pass-through businesses can deduct up to 20% of their qualified business income.',
    for: ['self-employed', 'business'],
  },
  {
    title: 'Quarterly estimated payments',
    text: 'Paying the right amount each quarter helps you avoid underpayment penalties and a large bill in April.',
    for: ['self-employed', 'business', 'investor', 'rental'],
  },
  {
    title: 'Equipment and vehicle write-offs',
    text: 'Depreciation rules may let you deduct much of the cost of qualifying equipment in the year it goes into service.',
    for: ['business', 'self-employed'],
  },
  {
    title: 'Entity structure review',
    text: 'Comparing LLC, S corporation, and C corporation treatment can reveal meaningful savings as you grow.',
    for: ['business'],
  },
  {
    title: 'Mortgage interest and property taxes',
    text: 'If you itemize, mortgage interest and state and local taxes can be deductible, within annual limits.',
    for: ['homeowner'],
  },
  {
    title: 'Home sale exclusion',
    text: 'Up to $250,000 of gain on your main home, or $500,000 for married couples, can be tax-free if you qualify.',
    for: ['homeowner'],
  },
  {
    title: 'Child Tax Credit',
    text: 'A credit for each qualifying child under 17, part of which can be refundable.',
    for: ['children'],
  },
  {
    title: 'Child and dependent care credit',
    text: 'Daycare and after-school care costs that allow you to work can earn a credit.',
    for: ['children'],
  },
  {
    title: '529 education savings',
    text: 'Earnings grow tax-free for qualified education costs, and many states offer a deduction for contributions.',
    for: ['children'],
  },
  {
    title: 'Tax-loss harvesting',
    text: 'Selling investments at a loss can offset gains and up to $3,000 of other income each year.',
    for: ['investor'],
  },
  {
    title: 'Long-term gain timing',
    text: 'Holding investments for more than a year can qualify gains for lower long-term rates.',
    for: ['investor'],
  },
  {
    title: 'Rental depreciation',
    text: 'Deducting the cost of a rental building over time can significantly reduce taxable rental income.',
    for: ['rental'],
  },
  {
    title: '1031 exchange',
    text: 'Reinvesting sale proceeds into a like-kind property can defer tax on the gain.',
    for: ['rental'],
  },
  {
    title: 'Roth conversion timing',
    text: 'Converting part of a traditional IRA in a lower-income year may reduce taxes over your lifetime.',
    for: ['retirement'],
  },
  {
    title: 'Required minimum distribution planning',
    text: 'Planning withdrawals before required distributions begin can help keep you in a lower bracket.',
    for: ['retirement'],
  },
  {
    title: 'Catch-up contributions',
    text: 'At 50 or older, you can contribute extra to 401(k) plans and IRAs.',
    for: ['retirement'],
  },
  {
    title: 'Qualified charitable distributions',
    text: 'At 70½ or older, giving directly from an IRA can count toward required distributions without adding to taxable income.',
    for: ['charity', 'retirement'],
  },
  {
    title: 'Donating appreciated investments',
    text: 'Giving investments held for more than a year can avoid capital gains tax and may still be deductible.',
    for: ['charity', 'investor'],
  },
  {
    title: 'Bunching donations',
    text: 'Grouping several years of gifts into one year can help you itemize and deduct more.',
    for: ['charity'],
  },
];
