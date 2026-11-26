/**
 * All of the site's words live in this file.
 * To change what the site says, edit here and push; the layout stays the same.
 *
 * Rule for this file: every fact must be one Drabid has confirmed.
 * Do not add numbers, employers, dates or outcomes that are not verified.
 */

export interface Photo {
  /** Path under /public, e.g. '/images/portrait-960.webp'. */
  src: string;
  /** Describe what the photo shows, for people who cannot see it. */
  alt: string;
  width: number;
  height: number;
  /** Optional smaller and larger versions, e.g. '/images/a-480.webp 480w, /images/a-960.webp 960w'. */
  srcset?: string;
  /** Optional line shown under the photo. */
  caption?: string;
}

export const site = {
  name: 'Drabid Subedi',
  url: 'https://drabid.com.np',
  title: 'Drabid Subedi · AI education, adoption and security',
  description:
    'Drabid Subedi teaches people to work with AI and helps institutions trust it. AI education and adoption specialist at NAAMII, AI researcher at CARI, and former cybersecurity and GRC lead at SecurityPal AI. Based in Kathmandu.',
  location: 'Kathmandu, Nepal',
  email: 'drabid09@gmail.com',
  linkedin: 'https://www.linkedin.com/in/drabid-subedi-77913b1b2',
  github: 'https://github.com/drabid09',
  /**
   * PHOTO SLOT: hero portrait. Set to null to go back to the type-only hero.
   * Images live in /public/images. Keep them 4:5 (portrait) for this slot.
   */
  portrait: {
    src: '/images/drabid-portrait-960.webp',
    srcset: '/images/drabid-portrait-480.webp 480w, /images/drabid-portrait-960.webp 960w',
    alt: 'Drabid Subedi smiling at the camera, seated at a desk in a recording studio with a pen in hand.',
    width: 960,
    height: 1200,
  } as Photo | null,
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Drabid Subedi · Kathmandu, Nepal',
  headline: ['I teach people to work with AI,', 'and institutions to trust it.'],
  lede: 'AI education and adoption specialist at NAAMII, and a researcher on how institutions reorganise around AI. Before that, five years in enterprise security and compliance.',
  stats: [
    { value: '500+', label: 'people trained in practical AI' },
    { value: '~50', label: 'security and GRC professionals led at SecurityPal AI' },
    { value: '30+', label: 'Fortune 500 clients supported' },
  ],
};

/** The letter. <strong> marks the phrases that stay dark while the rest recedes. */
export const letter = {
  greeting: "Hello, I'm Drabid.",
  paragraphs: [
    'For five years my job was <strong>turning complicated security and compliance work into something people could act on.</strong> At SecurityPal AI I grew a delivery team to around 50 people, answering the questions enterprises ask before they trust a vendor with their data.',
    'Then AI reached the workplace faster than most people could learn to use it well, or safely. <strong>Now I do the same work with AI.</strong>',
    'I teach professionals who do not write code. I research how institutions reorganise around AI. And I design data-quality processes for AI in security. Before any of this I hosted events and ran marketing with AIESEC in Nepal, which is where I learned to hold a room.',
    '<strong>Technology only works when people understand it and can trust it.</strong>',
  ],
  signoff: 'Drabid',
  /** PHOTO SLOT: a small photo beside the letter. Set to null to remove it. Keep it 4:5. */
  photo: {
    src: '/images/drabid-event-680.webp',
    srcset: '/images/drabid-event-340.webp 340w, /images/drabid-event-680.webp 680w',
    alt: 'Drabid Subedi standing outdoors at an event, wearing a grey coat and tie.',
    width: 680,
    height: 850,
  } as Photo | null,
};

export interface Role {
  org: string;
  title: string;
  period?: string;
  text?: string;
  /** Short supporting lines, shown as a list. */
  facts?: string[];
  /** Names shown inline, e.g. the frameworks a role worked with. */
  tags?: string[];
}

export const experience = {
  headline: 'What I do now, and what taught me to do it.',
  now: [
    {
      org: 'NAAMII',
      title: 'AI Education and Adoption Specialist',
      period: 'Jun 2026 to now',
      text: 'I design and deliver AI literacy and adoption programmes for people who do not write code, under the EU-funded UDAAN project.',
      facts: [
        'AI Native Instructor for professional cohorts across UDAAN partner organisations in health, education, fintech, government and hospitality',
        'Sessions adapted to each sector while the curriculum stays intact',
        'Built the registration, cohort and attendance tools the AI School runs on',
      ],
    },
    {
      org: 'CARI at NAAMII',
      title: 'AI Researcher',
      period: 'Sep 2026 to now',
      text: 'I am a member of the Collective for AI Adoption and the Reorganization of Institutions, studying how organisational behaviour changes after AI adoption.',
      facts: ['Contributing across a multi-instrument study of AI adoption in the financial sector', 'Research in progress'],
    },
    {
      org: 'SecurityPal AI',
      title: 'Data Annotation Contractor',
      period: 'Aug 2026 to now',
      text: 'I write labelling guidelines and run quality control for AI training data in the security domain.',
      facts: [
        'Calibrate reviewers before annotation starts',
        'Own the quality process: sampling, double-labelling, disagreement resolution and a reviewer-agreement scorecard',
      ],
    },
    {
      org: 'Independent',
      title: 'AI Trainer and Facilitator',
      period: 'Ongoing',
      text: 'Practical AI sessions for professionals, students, colleges, public health students, insurance professionals and government workers. More than 500 people trained so far.',
    },
  ] as Role[],
  before: [
    {
      org: 'SecurityPal AI',
      title: 'Customer Operations Lead · Cybersecurity Assurance Engineering Lead',
      period: 'Oct 2021 to Jun 2026',
      text: 'Joined as a security research analyst and led customer operations from March 2022. I grew a cybersecurity and GRC delivery team to around 50 people, serving more than 30 Fortune 500 clients.',
      facts: [
        'Primary technical and strategic contact for enterprise customers',
        'Ran security questionnaire, onboarding and third-party vendor risk programmes',
        'Built a central questionnaire knowledge base and AI-assisted automation that cut turnaround time',
        'Owned hiring, onboarding and coaching for the team',
      ],
      tags: ['ISO 27001', 'ISO 27701', 'ISO 42001', 'NIST 800-53', 'NIST CSF', 'FedRAMP', 'StateRAMP', 'PCI DSS', 'GDPR'],
    },
  ] as Role[],
  also: [
    { org: 'GRC Professional Network (GRCPN)', title: 'Founding Member' },
    { org: 'Islington College Kathmandu', title: 'Business Lead, MBA Pulse Team' },
    { org: 'AIESEC in Nepal', title: 'Team Lead, then Local Committee Vice President', period: '2019 to 2022' },
    { org: 'Yarsa Labs', title: 'Quality Analyst', period: '2020' },
  ] as Role[],
};

export interface Project {
  name: string;
  status: string;
  line: string;
  flow: string[];
  problem: string;
  built: string;
  stands: string;
  features: string[];
  stack: string[];
  links: { label: string; href: string }[];
  /** PHOTO SLOT: a screenshot. Same shape as the other photos. Shown full width above the text. */
  image: Photo | null;
}

export const projects = {
  headline: ['Find the problem. Specify it.', 'Hand it to AI. Own the result.'],
  lede: 'That is the method I teach, and these tools were built the same way. I defined the problem and the architecture, directed AI coding agents through the build, and verified each phase before the next one started.',
  items: [
    {
      name: 'NEPSE Analyzer',
      status: 'Live · Open source',
      line: 'A live dashboard for exploring the Nepal Stock Exchange.',
      flow: ['Scheduled jobs', 'Supabase Postgres', 'Analytics engine', 'Next.js on Vercel'],
      problem:
        'Following the Nepal Stock Exchange means stitching scattered data together by hand. I wanted one always-current view of trends, signals and price ranges for each company, running entirely on free tiers.',
      built:
        'Scheduled jobs collect market data into a Postgres database. An analytics layer runs data checks, signals, price ranges and a backtest. A Next.js dashboard presents the result, with a guide page for first-time visitors.',
      stands:
        'Live and updating. Tests run on every change, a monitor watches the live site and the database is backed up weekly. It is educational analysis, not financial advice.',
      features: [
        'Signals and estimated price ranges, with a backtested track record',
        'Freshness warnings whenever data is late or missing',
        'A personal watchlist',
        'Live-site monitor and weekly database backup',
        'Automated tests and click-through checks on every change',
      ],
      stack: ['Python', 'PostgreSQL on Supabase', 'GitHub Actions', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      links: [
        { label: 'Open the live site', href: 'https://nepse-analyzer-peach.vercel.app' },
        { label: 'View the code on GitHub', href: 'https://github.com/drabid09/nepse-analyzer' },
      ],
      image: null,
    },
    {
      name: 'AI School Toolkit',
      status: 'In use · Internal',
      line: 'Registration, cohorts and attendance for an EU-funded AI training programme.',
      flow: ['Register', 'Schedule the cohort', 'Mark attendance', 'Track progress'],
      problem:
        'The UDAAN AI School runs several courses across many cohorts. Registration lived in a Google Form and cohort records were tracked by hand.',
      built:
        'Three small web apps: a registration form for AI Native, AI Foundation and AI Deep; a cohort calendar with a project tracking dashboard and admin sign-in; and a workshop attendance app.',
      stands:
        'Used by the AI School team at NAAMII. These are internal tools holding learner records, so there are no public links.',
      features: [
        'One registration form covering all three courses',
        'Cohort calendar linked to attendance',
        'Project tracking dashboard for the programme team',
        'Admin sign-in so learner data stays private',
      ],
      stack: ['Static web apps', 'Firebase', 'GitHub Pages'],
      links: [],
      image: null,
    },
    {
      name: 'Real or AI?',
      status: 'Built for exhibition play',
      line: 'A perception game with one question: is it real, or is it AI?',
      flow: ['Look', 'Guess', 'See the leaderboard'],
      problem:
        'The UDAAN AI School wanted something many exhibition visitors could play at once, on their own phones, and compare scores.',
      built:
        'A browser game with a shared online leaderboard, so players on different devices compete on one board.',
      stands: 'Built with UDAAN AI School and NAAMII branding for use at an exhibition stand.',
      features: ['Plays in any phone browser, nothing to install', 'One shared leaderboard across all devices'],
      stack: ['Static web app', 'Firebase', 'GitHub Pages'],
      links: [],
      image: null,
    },
  ] as Project[],
};

export const research = {
  headline: 'Problem first. Name it after.',
  lede: 'The AI Native curriculum I teach and help design at NAAMII follows one rule: learners run into the problem before they are given the word for it.',
  courses: [
    { word: 'Context', topic: 'Context engineering', text: 'Giving AI the facts, rules and examples it needs.' },
    { word: 'Agents', topic: 'Agentic AI', text: 'Handing work to AI agents, and owning the result.' },
    { word: 'Safety', topic: 'Responsible AI', text: 'Catching hallucination and bias, and knowing what not to share.' },
  ],
  totals: [
    { value: '3', label: 'courses' },
    { value: '15', label: 'units' },
    { value: '26', label: 'assessed checkpoints' },
  ],
  cycleTitle: 'How each unit runs',
  cycle: ['Experience', 'Discover', 'Name', 'Apply', 'Generalise'],
  principlesTitle: 'Designed for Nepal',
  principles: [
    { title: 'No-code before code.', text: 'Nobody needs to program to start.' },
    { title: 'Free tools first.', text: 'Bandwidth, hardware and budgets are real constraints.' },
    { title: 'Prompting in Nepali.', text: 'Local language is part of the course.' },
    {
      title: 'Built to catch failure.',
      text: 'Some checkpoints are designed so the AI gets it wrong. Learners who catch the mistake score higher than those who hand in a clean answer.',
    },
  ],
  premise:
    'The limit on what AI is worth to an organisation is no longer the model. It is workflow, data, governance and whether people know how to use it.',
  study: {
    label: 'Research at CARI',
    question: 'What changes inside an institution after it adopts AI?',
    text: 'At CARI, the Collective for AI Adoption and the Reorganization of Institutions at NAAMII, I contribute across a multi-instrument study of AI adoption in the financial sector. The work is in progress, and findings will be linked here once they are published.',
  },
  frameworksTitle: 'Frameworks I work with',
  frameworks: [
    'UNESCO AI literacy framework',
    'OECD AILit',
    'NIST AI Risk Management Framework',
    'ISO/IEC 42001',
    "Nepal's National AI Policy 2082",
  ],
};

export const teaching = {
  figure: '500+',
  headline: 'people trained so far.',
  lede: 'Professional cohorts across health, education, fintech, government and hospitality, alongside college students and youth programmes. Every session is hands-on, and everyone should leave with something they can do on Monday.',
  note: 'Workshops in English and Nepali, in person in Kathmandu or online. I also host and MC events and talk shows.',
  groups: [
    {
      title: 'AI',
      sessions: [
        { name: 'AI Nativity', text: 'A full-day workshop: find the right problem, specify it, hand it to AI workers, and own the result.', where: 'NAAMII · EU UDAAN · 2026' },
        { name: 'Context Engineering', text: 'Ninety minutes on giving AI the facts, rules and examples it needs, with a fashion-industry block.', where: 'Namuna College of Fashion Technology · 2026' },
        { name: 'Guard Your Inputs', text: 'A three-hour laptop workshop on what not to put into ChatGPT, and why.', where: 'NAAMII · EU UDAAN' },
        { name: 'Building AI-Powered Products', text: 'From using AI to building with it: consumer, creator, product builder.', where: 'Career Kausal' },
        { name: 'AI for Resume Development', text: 'AI suggests, you decide. Refining a resume accurately, authentically and safely.', where: 'USYC 2026' },
        { name: 'AI Meets Governance in Nepal', text: 'Where Nepal stands, the capacity gap in public institutions, and pathways forward.', where: 'Research module · 2026' },
      ],
    },
    {
      title: 'Cybersecurity',
      sessions: [
        { name: "Cybersecurity in Today's World", text: 'Protecting the digital future, and what a career in security looks like.', where: 'Talk' },
        { name: 'Cybersecurity Starts With You', text: 'From eSewa and Khalti to OTP scams: everyday habits that keep you safe.', where: 'Talk' },
      ],
    },
    {
      title: 'Founders and early career',
      sessions: [
        { name: 'From Raw Ideas to Executable Plans', text: 'A train-the-trainers workshop for execution mentors.', where: 'Workshop' },
        { name: 'Internal Foundations for Founders', text: 'Roles, decisions and agreements that keep an early team from breaking.', where: '60-minute workshop' },
        { name: 'Operations Playbook', text: 'Building the internal engine of a startup: systems, team, vesting and IP.', where: '60-minute workshop' },
        { name: 'Managing Up and Ownership', text: 'Communication and ownership habits for new analysts.', where: 'New Analyst Program' },
      ],
    },
  ],
  /**
   * PHOTO SLOT: photographs of sessions. One photo is shown large; two or more become a row.
   * Keep them 3:2 (landscape).
   */
  photos: [
    {
      src: '/images/speaking-sunway-college-1800.webp',
      srcset: '/images/speaking-sunway-college-900.webp 900w, /images/speaking-sunway-college-1800.webp 1800w',
      alt: 'Drabid Subedi speaking into a microphone at a lectern, with a slide about ChatGPT projected behind him.',
      width: 1800,
      height: 1200,
      caption: 'Speaking at Sunway College Kathmandu.',
    },
  ] as Photo[],
};

export const credentials = {
  headline: 'Credentials',
  education: [
    { name: 'MBA, Cybersecurity', detail: 'Islington College · 2025 to 2026 · Completed with distinction' },
    { name: 'BE, Information Technology', detail: 'Nepal College of Information Technology · 2016 to 2021' },
  ],
  certifications: [
    { name: 'ISO/IEC 42001:2023 Lead Auditor', detail: 'AI management systems · Course certificate, Mastermind' },
    { name: 'CompTIA Security+', detail: '2026' },
    { name: 'Certified in Cybersecurity (CC)', detail: 'ISC2 · 2023' },
  ],
};

export const contact = {
  headline: ['Bringing AI into a team,', 'a classroom or an institution?'],
  lede: "I'd like to hear about it.",
  openTo: ['Training and speaking', 'AI adoption programmes', 'Research collaboration', 'Technology and business projects'],
};
