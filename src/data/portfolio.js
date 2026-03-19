// ── Personal info ─────────────────────────────────────────────────
export const PERSONAL = {
  name: '[Your Name]',
  initials: '[YN]',
  role: 'Frontend Developer',
  location: 'Tirana, Albania',
  email: 'your@email.com',
  linkedin: 'https://linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  cvUrl: '/cv.pdf',
  tagline: 'Building interfaces that feel right.',
  taglineSub: 'Not just look right.',
  bio: [
    "Over 4 years I've shipped e-commerce platforms, booking systems, admin dashboards, and food delivery apps for clients in the Netherlands, Italy, and Albania. React.js on the frontend, Laravel on the backend, Tailwind CSS keeping everything sharp.",
    "I don't just push pixels. I own the full vertical slice — from API design to UI component to production deployment.",
    "English C1. Remote-ready. Open to opportunities across the EU.",
  ],
  stats: [
    { num: '4', suffix: '+', label: 'years building' },
    { num: '8', suffix: '+', label: 'projects shipped' },
    { num: '3', suffix: '',  label: 'countries served' },
    { num: '0', suffix: '',  label: 'critical bugs post-launch' },
  ],
  nowReading: 'Clean Architecture — Robert Martin',
  currentlyBuilding: 'DevTrack — Next.js + TypeScript SaaS',
}

// ── Skills ────────────────────────────────────────────────────────
// levels: 'expert' | 'strong' | 'learning'
export const SKILLS = [
  {
    icon: '⬡',
    iconBg: 'rgba(200,240,75,0.1)',
    title: 'Frontend',
    items: [
      { name: 'React.js',           level: 'expert'   },
      { name: 'JavaScript (ES6+)',  level: 'expert'   },
      { name: 'Tailwind CSS',       level: 'expert'   },
      { name: 'HTML5 / CSS3',       level: 'expert'   },
      { name: 'Bootstrap',          level: 'strong'   },
      { name: 'Next.js',            level: 'learning' },
      { name: 'TypeScript',         level: 'learning' },
    ],
  },
  {
    icon: '⬢',
    iconBg: 'rgba(75,184,240,0.1)',
    title: 'Backend & Data',
    items: [
      { name: 'PHP / Laravel',      level: 'expert'  },
      { name: 'REST API Design',    level: 'expert'  },
      { name: 'MySQL',              level: 'strong'  },
      { name: 'Authentication',     level: 'strong'  },
      { name: 'Node.js',            level: 'learning'},
      { name: 'MongoDB',            level: 'learning'},
    ],
  },
  {
    icon: '⬟',
    iconBg: 'rgba(240,96,74,0.1)',
    title: 'WordPress',
    items: [
      { name: 'Custom Themes',      level: 'expert' },
      { name: 'WooCommerce',        level: 'strong' },
      { name: 'ACF / Dynamic',      level: 'strong' },
      { name: 'Custom Post Types',  level: 'strong' },
      { name: 'Headless WP',        level: 'learning'},
    ],
  },
  {
    icon: '◈',
    iconBg: 'rgba(180,75,240,0.1)',
    title: 'Tools',
    items: [
      { name: 'Git / GitHub',       level: 'expert' },
      { name: 'Figma',              level: 'strong' },
      { name: 'Postman',            level: 'strong' },
      { name: 'Jira / Agile',       level: 'strong' },
      { name: 'Docker',             level: 'learning'},
    ],
  },
  {
    icon: '◇',
    iconBg: 'rgba(75,184,240,0.1)',
    title: 'Testing & QA',
    items: [
      { name: 'Browser DevTools',   level: 'expert' },
      { name: 'Postman testing',    level: 'strong' },
      { name: 'Manual QA',          level: 'strong' },
      { name: 'Jest',               level: 'learning'},
      { name: 'Cross-browser',      level: 'strong' },
    ],
  },
  {
    icon: '⬠',
    iconBg: 'rgba(200,240,75,0.1)',
    title: 'Deploy',
    items: [
      { name: 'Vercel / Netlify',   level: 'strong' },
      { name: 'cPanel / Linux',     level: 'strong' },
      { name: 'App Store / Play',   level: 'strong' },
      { name: 'GitHub Actions',     level: 'learning'},
      { name: 'AWS basics',         level: 'learning'},
    ],
  },
]

// ── Projects ──────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: '01',
    title: 'Supplement E-commerce Platform',
    badge: 'Featured',
    badgeType: 'featured',
    description: 'Full-stack e-commerce platform built from scratch for a Dutch supplement retailer. Dynamic product catalogue, real-time cart, payment API integration, and Laravel-powered order management. Lighthouse score 87+.',
    stack: ['React.js', 'Tailwind CSS', 'Laravel', 'MySQL', 'REST API', 'PHP'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/your-handle/project',
    imageUrl: null, // Add screenshot path when available: '/images/project1.png'
  },
  {
    num: '02',
    title: 'Beach Reservation System',
    badge: null,
    description: 'Real-time booking platform for umbrella and sunbed reservations along the Albanian Riviera. Concurrent availability checks, date scheduling, and online payments. Built mobile-first for seasonal tourists.',
    stack: ['React.js', 'Laravel', 'Axios', 'MySQL', 'Tailwind CSS'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/your-handle/project',
    imageUrl: null,
  },
  {
    num: '03',
    title: 'DevTrack — SaaS Project Manager',
    badge: 'In progress',
    badgeType: 'wip',
    description: 'Developer-focused Kanban + sprint tracker with GitHub integration, time logging, and real-time updates via WebSockets. Built as a working SaaS in Next.js + Laravel with TypeScript throughout.',
    stack: ['Next.js', 'TypeScript', 'Laravel', 'WebSockets', 'Tailwind CSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/your-handle/devtrack',
    imageUrl: null,
  },
  {
    num: '04',
    title: 'WooCommerce Custom Theme Suite',
    badge: null,
    description: 'Reusable WordPress theme system for WooCommerce stores — custom ACF field groups, dynamic pricing blocks, and a headless-ready REST API layer. Powers three live client stores; cuts time-to-launch by ~60%.',
    stack: ['WordPress', 'WooCommerce', 'ACF', 'PHP', 'JavaScript', 'REST API'],
    liveUrl: '/case-study',
    githubUrl: 'https://github.com/your-handle/project',
    imageUrl: null,
  },
  {
    num: '05',
    title: 'Food Delivery App (Italy)',
    badge: null,
    description: 'Multi-platform food delivery system deployed to App Store and Google Play. Real-time push notifications, kitchen staff dashboard, and customer menu browsing. End-to-end from requirements to submission.',
    stack: ['React.js', 'Laravel', 'Push Notifications', 'Android', 'MySQL'],
    liveUrl: null,
    githubUrl: null,
    imageUrl: null,
  },
]

// ── Experience ────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    date: 'May 2022 → Present',
    role: 'Software Developer',
    company: 'Landmark Technologies',
    location: 'Tirana, Albania',
    description: 'Lead frontend development for international client projects — e-commerce, booking platforms, and internal tooling. Own the full cycle from UI design to API integration to production deployment.',
    achievements: [
      'Built Dutch e-commerce supplement store (React + Laravel) from scratch — shipped in 3 months',
      'Delivered real-time beach reservation system across the Albanian Riviera',
      'Architected reusable component libraries cutting feature dev time by ~40%',
      'Sole frontend engineer on a 3-person cross-functional team',
    ],
  },
  {
    date: 'Oct 2021 → Apr 2022',
    role: 'Frontend Developer',
    company: 'W2020 SHPK',
    location: 'Tirana, Albania',
    description: 'Developed frontend for a multi-platform food delivery system serving Italian restaurant clients. Full product lifecycle — design implementation through app store submission.',
    achievements: [
      'Shipped to App Store & Google Play — zero launch-day critical bugs',
      'Integrated real-time push notification system for order tracking',
      'Collaborated with Italian client across timezone and language barriers',
    ],
  },
  {
    date: 'Sep 2021 → Oct 2021',
    role: 'Web Development Intern',
    company: 'Albania Business Partner',
    location: 'Tirana, Albania',
    description: 'First professional role — learned production workflows, Git discipline, and what it means to ship code others depend on.',
    achievements: [],
  },
]

// ── Education ─────────────────────────────────────────────────────
export const EDUCATION = [
  {
    date: '2024 → Present',
    degree: 'Software Engineering (MSc)',
    school: 'Tirana Business University',
    status: 'In progress',
  },
  {
    date: '2019 → 2022',
    degree: 'Computer Engineering (BSc)',
    school: 'Epoka University',
    status: 'Completed',
  },
]

// ── Languages ─────────────────────────────────────────────────────
export const LANGUAGES = [
  { name: 'Albanian', level: 'Native',        accent: false },
  { name: 'English',  level: 'C1 · Proficient', accent: true  },
  { name: 'Italian',  level: 'B1 · Working',  accent: false },
  { name: 'French',   level: 'A2',            accent: false },
  { name: 'German',   level: 'A1',            accent: false },
]

// ── Tags ──────────────────────────────────────────────────────────
export const TAGS = {
  core:     ['React.js', 'Tailwind CSS', 'Laravel', 'REST APIs', 'MySQL', 'WordPress', 'PHP', 'Git'],
  learning: ['TypeScript', 'Next.js', 'Docker', 'GitHub Actions'],
  prefs:    ['Remote-first', 'EU timezone', 'Agile / Jira', 'Figma collaboration'],
}
