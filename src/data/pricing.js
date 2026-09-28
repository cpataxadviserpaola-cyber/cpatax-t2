// Average investment ranges from the CPA Tax Adviser Pricing Guide 2026
// (public/files/CPA-Tax-Adviser-Pricing-Guide-2026.pdf). Update both together.
export const pricingNotes = {
  intro:
    "Your tax return is more than forms: it's strategy, compliance, and risk management. Tax preparation is not one-size-fits-all. Fees are based on the complexity of your financial situation, the reporting required, and the level of technical analysis involved.",
  typical:
    'Because most of our clients have business activity, investments, rental properties, or multi-state considerations, the typical investment falls between $900 and $1,500+.',
  final:
    'The ranges shown reflect the average investment for clients within each complexity tier. Final fees are determined after evaluating your specific tax situation and required reporting.',
  business:
    'Business engagements involving multiple states, ownership changes, significant transactions, or accounting clean-up may exceed these ranges. Final fees are confirmed after reviewing your financial statements and scope of work.',
};

export const pricingTables = [
  {
    id: 'individual',
    title: 'Individual tax services',
    columns: ['Complexity level', 'Typical situation', 'Average investment'],
    rows: [
      {
        level: 'Core complexity',
        detail: 'W-2 income, standard investment activity, limited additional reporting',
        price: '$650 – $900',
      },
      {
        level: 'Layered complexity',
        detail: 'Business income, rental properties, K-1s, multi-state filings, expanded investment portfolios',
        price: '$900 – $1,500+',
        featured: true,
      },
      {
        level: 'Advanced & strategic',
        detail: 'Equity compensation, AMT exposure, multiple entities, 1031 exchanges, significant transactions',
        price: '$1,500 – $2,500+',
      },
      {
        level: 'International & cross-border',
        detail: 'Foreign earned income exclusion, FBAR, FATCA reporting, foreign entities',
        price: 'Custom pricing',
      },
    ],
  },
  {
    id: 'business',
    title: 'Business tax services',
    columns: ['Entity type', 'Scope considerations', 'Average investment'],
    rows: [
      {
        level: 'S corporations',
        detail: 'Payroll activity, shareholder basis tracking, multi-state filing',
        price: '$1,500 – $3,500+',
      },
      {
        level: 'Partnerships',
        detail: 'Number of partners, capital accounts, guaranteed payments, K-1 allocations, state filings',
        price: '$1,500 – $3,500+',
      },
      {
        level: 'Advanced business reporting',
        detail: 'Multi-state apportionment, ownership changes, prior-year clean-up, restructuring',
        price: 'Custom pricing',
      },
    ],
  },
];
