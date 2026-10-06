// Team shown on the Home and About pages. Source: cpataxadviser.com.
//
// featured     shown as the large founder card (one person)
// credentials  shown after the name
// seal         short credential on the portrait (leave empty for none)
// photo        portrait in public/team/; without one, the initials are shown instead
// avatar       square head-and-shoulders crop of the photo for the small round pictures
// summary      one line for the team card
// highlight    a line from the person's bio, shown in italics
// facts        short chips on the featured card
// bio          full bio, shown in the "Read bio" window
// action       main button; `external: true` opens in a new tab
export const team = [
  {
    id: 'paola-martinez',
    featured: true,
    name: 'Paola Martinez',
    credentials: 'CPA, CFP®',
    seal: 'CPA',
    role: 'Founder & CPA, CFP®',
    initials: 'PM',
    photo: '/team/paola-martinez.webp',
    avatar: '/team/paola-martinez-avatar.webp',
    summary:
      'Founder of CPA Tax Adviser, working with closely held businesses and their owners on strategy that goes far beyond compliance.',
    highlight:
      'Rather than serving as a once-a-year tax preparer, she acts as a trusted partner, guiding business decisions and creating structure for sustainable growth.',
    facts: ['Licensed CPA', 'CFP® professional', "Master's in Accountancy", '13+ years in tax', 'English & Spanish'],
    bio: [
      'Paola is the founder and driving force behind CPA Tax Adviser, a South Carolina Minority/Women-Owned Business Enterprise (MWBE). With over 13 years of experience in the tax preparation industry, she specializes in working with closely held businesses and their owners, providing strategic guidance that goes far beyond compliance.',
      'Her expertise also extends to foreign individuals and nonresident aliens investing in the United States, offering clients a broader, more global perspective on tax planning and financial strategy.',
      "What sets Paola apart is her combination of technical knowledge and real-world business insight. She holds an Associate's degree in Business Management, a Bachelor's degree in Engineering, and a Master's in Accountancy, a foundation that lets her understand not only the numbers but how a business truly operates.",
      'As a licensed CPA and CFP® professional, she integrates tax strategy with long-term financial planning. She helps clients become more organized, efficient, and confident in their financial direction, and also works with professionals and pre-retirees building wealth through diverse portfolios and investments.',
      'Originally from Colombia, Paola moved to the United States in 2008 and graduated with honors. She became a licensed CPA in 2022, now also holds the CFP® certification, and proudly serves clients in both English and Spanish.',
    ],
    focus: ['Closely held businesses', 'Foreign individuals & nonresident aliens', 'Professionals & pre-retirees', 'English & Spanish'],
    action: { label: 'Schedule with Paola', href: 'https://calendly.com/paolacpacfp', external: true },
  },
  {
    id: 'kari-nab',
    name: 'Kari Nab',
    credentials: '',
    seal: '',
    role: 'Tax Preparer',
    initials: 'KN',
    photo: null,
    summary: 'Makes sure every return is accurate, complete, and fully compliant.',
    highlight:
      'Clients may not always see her work directly, but they benefit from it in every return prepared with care and accuracy.',
    bio: [
      'Kari is a dedicated tax preparer with a strong eye for detail and a genuine passion for getting the numbers right. She works diligently behind the scenes to ensure every return is accurate, complete, and fully compliant, carefully reviewing income, deductions, and credits.',
      'Her organized approach and commitment to precision play a vital role in maintaining the high standards our firm is known for.',
      'Outside of work, Kari enjoys spending time with her husband and daughter, coaching youth softball, and creating meals to share with family and friends.',
    ],
    focus: ['Accurate, compliant returns', 'Income, deduction & credit review'],
    action: { label: 'Contact our team', href: '/contact' },
  },
  {
    id: 'verna-duke',
    name: 'Verna "Vee" Duke',
    credentials: '',
    seal: '',
    role: 'Administrative Assistant & Team Facilitator',
    initials: 'VD',
    photo: null,
    summary: 'Helps clients with questions and keeps every process running smoothly.',
    highlight: "While taxes are serious, the process doesn't have to feel overwhelming.",
    bio: [
      'Vee is the engine that keeps everything running smoothly behind the scenes. As the firm\'s administrative assistant and team facilitator, she supports both clients and the internal team, ensuring processes feel seamless and stress-free.',
      'She assists clients with general questions and helps them navigate the website with ease. She handles administrative tasks, develops materials, and streamlines systems.',
      'With her positive attitude and problem-solving mindset, Vee brings structure, clarity, and efficiency to every part of the firm.',
    ],
    focus: ['Client questions', 'Administrative support', 'Processes & systems'],
    action: { label: 'Contact our team', href: '/contact' },
  },
  {
    id: 'annie-johnson',
    name: 'Annie Johnson',
    credentials: '',
    seal: '',
    role: 'Bookkeeper',
    initials: 'AJ',
    photo: null,
    summary: "Keeps clients' financial records accurate, organized, and up to date.",
    highlight: "Annie is the backbone of the firm's financial operations.",
    bio: [
      "With extensive experience in bookkeeping and a sharp attention to detail, Annie ensures that clients' financial records are accurate, organized, and up to date.",
      'From reconciling accounts to preparing financial reports, she provides the clarity business owners need to understand their numbers and make informed decisions.',
      'Known for her collaborative approach, Annie works closely with both clients and the team to support strong financial foundations and long-term success.',
    ],
    focus: ['Account reconciliation', 'Financial reports', 'Organized, up-to-date books'],
    action: { label: 'Discuss your books', href: '/contact?service=bookkeeping' },
  },
  {
    id: 'adriana-pabon',
    name: 'Adriana Pabon',
    credentials: '',
    seal: '',
    role: 'Tax Preparer',
    initials: 'AP',
    photo: null,
    summary: 'Detail-oriented tax preparer committed to accuracy and compliance.',
    highlight: 'Her structured approach helps maintain high standards in every return she supports.',
    bio: [
      'Adriana is a detail-oriented tax preparer committed to accuracy and compliance. She ensures every return is complete, organized, and aligned with current tax regulations, carefully reviewing income, deductions, and credits.',
      'With a background in administrative operations and management control, she brings strong organizational skills, precision, and reliability to her work.',
      'During the off-season, Adriana works with Yellow Oak Financial Planning, supporting financial planning processes, and she is committed to continuous learning as tax laws evolve.',
    ],
    focus: ['Tax preparation & compliance', 'Organization & review', 'Financial planning support'],
    action: { label: 'Contact our team', href: '/contact' },
  },
];
