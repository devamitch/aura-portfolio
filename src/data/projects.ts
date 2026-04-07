export const COLORS = {
  bg: "#050505",
  bg2: "#0A0A0A",
  bg3: "#0F0F0F",
  text: "#FFFFFF",
  dim: "rgba(255,255,255,0.68)",
  faint: "rgba(255,255,255,0.42)",
  vfaint: "rgba(255,255,255,0.24)",
  ghost: "rgba(255,255,255,0.10)",
  border: "rgba(255,255,255,0.07)",
  card: "rgba(255,255,255,0.025)",
  gold: "#C9A84C",
  goldL: "#F5C842",
  goldD: "rgba(201,168,76,0.32)",
  goldF: "rgba(201,168,76,0.08)",
  goldG: "linear-gradient(135deg,#DAA520 0%,#F5C842 50%,#B8860B 100%)",
  green: "#34D399",
  blue: "#4FC3F7",
  red: "#FF4444",
  purple: "#C084FC",
} as const;

export const GRID = "rgba(201,168,76,0.022)" as const;
export const HN = "'Helvetica Neue',Helvetica,Arial,sans-serif" as const;
export const MONO = "'JetBrains Mono','Space Mono',monospace" as const;
export const EASE_X = [0.18, 1, 0.3, 1] as const;

export const PROFILE_DATA = {
  nameFirst: "AMIT",
  nameLast: "CHAKRABORTY",
  tagline:
    "From zero-to-one builds to platforms serving real users at scale. Web3, FinTech, AI/ML, GovTech — production systems that ship.",
  manifesto: [
    "8 years of building. Every project here went to production.",
    "From native C++ modules to visual AI nodal canvases — engineering without boundaries.",
    "Building production systems that survive real traffic, real payments, real users.",
  ],
  roles: ["VP Engineering", "Principal Architect", "0-to-1 Builder"],
  location: "Kolkata, India",
  timezone: "IST (UTC+5:30)",
  email: "amit@devamit.co.in",
  phone: "+91-9874173663",
  github: "https://github.com/devamitch",
  githubAlt: "https://github.com/techamit95ch",
  linkedin: "https://linkedin.com/in/devamitch",
  twitter: "https://x.com/devamitch",
  medium: "https://devamitch.medium.com/",
  profileImage: "/images/amit-profile.jpg",
  profileFallback: "https://github.com/devamitch.png",
  started: "2017-05-01",

  techStack: [
    "React Native",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "GraphQL",
    "GSAP",
    "Framer Motion",
    "TensorFlow",
    "MediaPipe",
    "Pinecone",
    "Solidity",
    "Web3.js",
    "Fastlane",
    "React.js",
    "Python",
    "Rust",
    "Go",
    "Firebase",
  ],
  ethos: {
    badge: "ENGINEERING DNA",
    status: "Always Shipping",
    location: "Global Reach",
    summary:
      "A specialized engineering unit focused on high-stakes product delivery. From zero-to-one architecture to scaling for 50K+ daily users.",
    metrics: [
      { label: "Delivery", value: "100", unit: "% Accurate" },
      { label: "Performance", value: "60fps", unit: "Standard" },
      { label: "Uptime", value: "99.9", unit: "%" },
      { label: "Projects", value: "18+", unit: "Shipped" },
    ],
    principles: [
      {
        label: "Systems Thinking",
        detail:
          "Designing architectures that solve for tomorrow's scale while delivering today's business value.",
      },
      {
        label: "Domain Agnostic",
        detail:
          "Proven delivery across Web3, FinTech, HealthTech, and GovTech ecosystems.",
      },
      {
        label: "Hard Blockers",
        detail:
          "Stepping in for high-risk technical failures and critical infrastructure bottlenecks.",
      },
      {
        label: "0-to-1 Mastery",
        detail:
          "Translating raw vision into production-grade infrastructure with extreme efficiency.",
      },
    ],
    story:
      "This portfolio represents eight years of relentless engineering. It is not a biography; it is a repository of technical solutions. Each project demonstrates a unique challenge—from real-time retina analysis on consumer hardware to on-chain prize governance. The focus is simple: high-performance systems and the code that runs them.",
    highlights: [
      "Architecting complex RAG pipelines and AI orchestration layers.",
      "Building proprietary bridgeless native modules in C++.",
      "Securing government-scale infrastructure against critical vulnerabilities.",
      "Leading multi-disciplinary engineering teams to successful delivery.",
    ],
  },
  experience: [
    {
      id: "synapsis",
      company: "Synapsis Medical Technologies",
      role: "Principal Mobile Architect",
      location: "Remote",
      period: "2025 — 2026",
      type: "Founding Engineer",
      color: "#8B5CF6",
      badge: "AL/ML · HEALTH",
      status: "Delivered",
      summary:
        "Retained for a full 0-to-1 technical build. Architected the entire foundation from zero, delivering a production-ready ecosystem.",
      metrics: [
        { label: "Team", value: "21", unit: "Engineers" },
        { label: "Apps", value: "5", unit: "Multi-Platform" },
        { label: "Uptime", value: "99.9", unit: "%" },
      ],
      deliverables: [],
      story: "",
      highlights: [
        "Led engineering team of 21+ across 5 production apps.",
        "Built proprietary game engine from scratch (C++/Swift/Kotlin).",
        "Architected HIPAA-compliant RAG pipelines.",
        "Computer Vision: MediaPipe for real-time retina analysis.",
      ],
    },
    {
      id: "nonceblox",
      company: "NonceBlox Pvt. Ltd.",
      role: "Lead Mobile Architect & Senior Full-Stack",
      location: "Dubai (Remote)",
      period: "Oct 2021 — Jan 2025",
      type: "Full-time",
      color: "#F5C842",
      badge: "3+ YEARS",
      status: "Completed",
      summary:
        "Led end-to-end mobile architecture for 13+ production applications across FinTech, Web3, and Gaming verticals.",
      metrics: [
        { label: "Apps Shipped", value: "13+", unit: "production" },
        { label: "Active Users", value: "50K+", unit: "peak daily" },
        { label: "Platforms", value: "iOS + Android", unit: "" },
        { label: "Duration", value: "3+", unit: "years" },
      ],
      deliverables: [],
      story: "",
      highlights: [
        "Shipped 13+ production apps across FinTech, Web3, and Gaming. 50,000+ active users.",
        "Web3/DeFi: Memr (Wallet whaling/staking), DeFi11 (Smart contracts/NFTs) — fully on-chain.",
        "Vulcan Eleven (Fantasy Sports) & MusicX (Streaming) — 60fps React Native, C++ native modules.",
        "Primary technical liaison for stakeholders; led hiring & mentorship across 3+ years.",
      ],
    },
    {
      id: "early",
      company: "TechProMind & WebSkitters",
      role: "Senior Full-Stack Engineer",
      location: "Kolkata, India",
      period: "May 2017 — Oct 2021",
      type: "Full-time",
      color: "#DAA520",
      badge: "4+ YEARS",
      status: "Completed",
      summary:
        "Built the technical foundation — government systems, enterprise portals, and the architecture mindset.",
      metrics: [
        { label: "Gov Projects", value: "13+", unit: "secured" },
        { label: "Efficiency", value: "40", unit: "% gained" },
        { label: "Duration", value: "4+", unit: "years" },
        { label: "Stack", value: "PHP → Angular", unit: "" },
      ],
      deliverables: [],
      story: "",
      highlights: [
        "Secured 13+ government projects — hardened against SQL injection/XSS. Enterprise-grade security.",
        "Architected GST Ecosystem (Merchant Portal & Retailer Software) from scratch.",
        "Enhanced system efficiency 40% through architectural overhaul.",
        "Migrated legacy PHP to Angular/REST — improved efficiency & maintainability.",
      ],
    },
  ],

  projects: [
    {
      id: "aura-studio",
      name: "Aura Studio",
      role: "Founder · Independent Build",
      badge: "FLAGSHIP · AI",
      featured: true,
      tagline: "Visual AI orchestration platform.",
      desc: "A nodal canvas where users drag, connect, and configure 45+ AI pipelines in real time without writing glue code.",
      impact: [
        "Node-based workflow UI",
        "45+ AI pipelines integrated",
        "Zero glue code required",
      ],
      tech: ["React 19", "Next.js", "Zustand", "Node-based UI", "Gemini API"],
      color: "#8B5CF6",
      link: "https://aurastudio.devamit.co.in",
    },
    {
      id: "kshem",
      name: "Kshem",
      role: "Founder · Independent Build",
      badge: "GOVTECH",
      featured: true,
      tagline: "Extensive 20+ stakeholder portal system.",
      desc: "Government, Land, and Community management. Embedded AI engine for document analysis, property valuation, and GIS data.",
      impact: [
        "20+ interconnected portals",
        "Embedded document AI",
        "GIS mapping capabilities",
      ],
      tech: ["Next.js 16", "Claude AI", "Tailwind v4", "GIS"],
      color: "#10B981",
      link: "https://kshem.devamit.co.in",
    },
    {
      id: "harmony-bloom",
      name: "HarmonyBloom",
      role: "Founder · Independent Build",
      badge: "HEALTHTECH",
      featured: true,
      tagline: "Premium Telegram Mini App for holistic wellness.",
      desc: "AI-driven cycle tracking, daily micro-habit quests, mood journaling, and an empathetic 'Aura' AI coach powered by Gemini.",
      impact: [
        "Run inside Telegram (TMA)",
        "Daily micro-habit quests",
        "Gemini-powered empathic AI",
      ],
      tech: ["React 18", "Vite", "Framer Motion", "Gemini API"],
      color: "#EC4899",
      link: "https://harmonybloom.devamit.co.in",
    },
    {
      id: "neev",
      name: "Neev",
      role: "Founder · Independent Build",
      badge: "CONSUMER",
      featured: false,
      tagline: "A private, AI-guided family OS.",
      desc: "An intelligent elder/guardian architecture that manages family data, scheduling, and wellness. Re-connecting Indian family roots.",
      impact: [
        "Family Guardian Architecture",
        "Cloud sync logic",
        "Wellness pattern detection",
      ],
      tech: ["Next.js 14", "TypeScript", "Claude AI", "Firebase"],
      color: "#3B82F6",
      link: "https://neev.devamit.co.in",
    },
    {
      id: "aura-arena",
      name: "Aura Arena",
      role: "Founder · Independent Build",
      badge: "COMPUTER VISION",
      featured: false,
      tagline: "Real-time AI detection under 16ms.",
      desc: "Real-time pose, hand, and face landmark detection. Hybrid on-device + cloud inference pipeline. WebGPU-accelerated rendering.",
      impact: [
        "Edge inference at 60fps",
        "Hybrid Cloud+Device pipeline",
        "WebGPU acceleration",
      ],
      tech: ["MediaPipe", "TensorFlow.js", "WebGPU", "PWA"],
      color: "#F59E0B",
      link: "https://auraarena.devamit.co.in",
    },
    {
      id: "crunchyroll-folio",
      name: "Crunchyroll Folio",
      role: "Founder · Independent Build",
      badge: "CREATIVE",
      featured: false,
      tagline: "Netflix/Crunchyroll-styled Portfolio.",
      desc: "A cinematic, immersive interactive portfolio. High-fidelity motion graphics, trailer video integration, and fluid transitions.",
      impact: ["Immersive media grids", "60fps web animations", "Cinematic UX"],
      tech: ["React", "Framer Motion", "Vite", "Tailwind CSS"],
      color: "#F97316",
      link: "https://crunchyroll.devamit.co.in",
    },
    {
      id: "vulcan-eleven",
      name: "Vulcan Eleven",
      role: "Lead Mobile Engineer",
      badge: "SPORTS · FINTECH",
      featured: false,
      tagline: "50,000 users. Zero downtime.",
      desc: "Fantasy sports platform with 60fps performance. 50K+ users, Razorpay + Binance Pay dual-payment, 35% transaction growth.",
      impact: [
        "50K+ active users",
        "35% transaction growth",
        "Binance Pay + Razorpay integration",
      ],
      tech: ["React Native", "Reanimated", "C++", "Razorpay", "Binance Pay"],
      color: "#22C55E",
      link: "https://apps.apple.com/app/vulcan-eleven/id6462420052",
    },
    {
      id: "defi11",
      name: "DeFi11",
      role: "Web3 Architect",
      badge: "DEFI",
      featured: false,
      tagline: "Fully on-chain. No compromise.",
      desc: "Fully decentralized fantasy sports. Smart contract prize pools, on-chain tournament logic, NFT marketplace on Ethereum.",
      impact: [
        "100% on-chain prize pools",
        "Smart contract architecture",
        "Zero-trust design",
      ],
      tech: ["Solidity", "Web3.js", "NFTs", "Smart Contracts", "Ethereum"],
      color: "#F59E0B",
      link: "https://apps.apple.com/app/defi11-fantasy-sports-app/id1608967244",
    },
    {
      id: "be4you",
      name: "Be4You",
      role: "Lead Architect",
      badge: "SOCIAL · DATING",
      featured: false,
      tagline: "Full MVP. Built for seed funding.",
      desc: "Full dating app MVP: real-time chat via Socket.io, Zoom-style video calls, live geolocation, social + Apple auth. Delivered in under 90 days.",
      impact: [
        "Full MVP for seed round",
        "Real-time video + chat + location",
        "90-day delivery",
      ],
      tech: ["WebRTC", "Socket.io", "Reanimated", "Video", "Node.js"],
      color: "#F43F5E",
    },
    {
      id: "music-x",
      name: "MusicX",
      role: "Senior Engineer",
      badge: "WEB3 · MUSIC",
      featured: false,
      tagline: "Blockchain royalties for artists.",
      desc: "Music competition platform with blockchain-backed royalties. Native C++ Modules, 60fps animations, Twitter + Spotify API.",
      impact: [
        "Blockchain royalty system",
        "C++ native modules",
        "60fps animations",
      ],
      tech: ["React Native", "Blockchain", "Native C++ Modules", "Audio APIs"],
      color: "#A855F7",
      link: "https://apps.apple.com/app/music-x/id6475713772",
    },
    {
      id: "housezy",
      name: "Housezy",
      role: "FinTech Lead",
      badge: "PROPTECH",
      featured: false,
      tagline: "Housing automation, reimagined.",
      desc: "Property management platform with complex payment gateways, subscription billing (PayU + Google Pay), GraphQL APIs, Socket.io real-time notifications.",
      impact: [
        "Subscription billing layer",
        "Real-time notifications",
        "PayU + Google Pay integration",
      ],
      tech: ["React Native", "GraphQL", "Socket.io", "PayU", "Subscription"],
      color: "#06B6D4",
      link: "https://apps.apple.com/app/housezy/id6471949955",
    },
    {
      id: "memr",
      name: "Memr",
      role: "Full-Stack Architect",
      badge: "WEB3 · DEFI",
      featured: false,
      tagline: "Blockchain intelligence tracking.",
      desc: "Real-time monitoring of large-wallet transactions with impact analysis. Uses AppKit v2 for seamless connection across 300+ wallets.",
      impact: [
        "Whale Feed tracking",
        "Multi-wallet connection",
        "Real-time analytics",
      ],
      tech: ["Next.js 15", "Wagmi", "Viem", "WalletConnect"],
      color: "#60A5FA",
    },
  ],

  skills: [
    {
      cat: "Mobile",
      color: "#C9A84C",
      items: [
        { name: "React Native (Expert, Bridgeless)", level: 98 },
        { name: "Expo", level: 90 },
        { name: "TypeScript", level: 96 },
        { name: "Native Modules C++/Swift/Kotlin", level: 85 },
        { name: "Reanimated", level: 92 },
        { name: "iOS & Android", level: 95 },
      ],
    },
    {
      cat: "AI & ML",
      color: "#F5C842",
      items: [
        { name: "RAG Pipelines", level: 88 },
        { name: "Agentic AI", level: 84 },
        { name: "LLM Integration (OpenAI/Claude)", level: 90 },
        { name: "Computer Vision (MediaPipe)", level: 82 },
        { name: "TensorFlow", level: 75 },
        { name: "NLP", level: 78 },
        { name: "Pinecone", level: 80 },
      ],
    },
    {
      cat: "Blockchain",
      color: "#DAA520",
      items: [
        { name: "Solana (Rust/Anchor)", level: 78 },
        { name: "Ethereum (Solidity)", level: 85 },
        { name: "Web3.js / Ethers.js", level: 88 },
        { name: "WalletConnect", level: 82 },
        { name: "Smart Contracts", level: 86 },
        { name: "IPFS", level: 74 },
        { name: "DeFi & NFT", level: 83 },
      ],
    },
    {
      cat: "Backend",
      color: "#E8B4B8",
      items: [
        { name: "NestJS / Node.js / Django", level: 90 },
        { name: "GraphQL / REST", level: 94 },
        { name: "PostgreSQL / MongoDB", level: 88 },
        { name: "AWS Lambda / S3", level: 85 },
        { name: "Docker / Kubernetes", level: 80 },
        { name: "CI/CD Fastlane", level: 88 },
      ],
    },
    {
      cat: "Frontend",
      color: "#4FC3F7",
      items: [
        { name: "React.js", level: 94 },
        { name: "Next.js", level: 92 },
        { name: "Redux", level: 90 },
        { name: "Framer Motion", level: 88 },
        { name: "GSAP", level: 85 },
        { name: "Tailwind CSS", level: 86 },
        { name: "MUI", level: 82 },
      ],
    },
    {
      cat: "Cloud",
      color: "#C084FC",
      items: [
        { name: "AWS (Lambda, S3, Amplify, EC2)", level: 85 },
        { name: "Docker & Kubernetes", level: 80 },
        { name: "GitHub Actions", level: 88 },
        { name: "Fastlane", level: 88 },
        { name: "CircleCI", level: 78 },
        { name: "Firebase", level: 86 },
      ],
    },
    {
      cat: "Databases",
      color: "#FF9800",
      items: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 82 },
        { name: "Firebase Realtime DB", level: 84 },
        { name: "Redis", level: 80 },
        { name: "Pinecone (Vector)", level: 78 },
      ],
    },
    {
      cat: "Leadership",
      color: "#34D399",
      items: [
        { name: "Team Building & Hiring", level: 94 },
        { name: "Technical Mentorship", level: 95 },
        { name: "Stakeholder Management", level: 88 },
        { name: "Agile/Scrum", level: 92 },
        { name: "0-to-1 Architecture", level: 98 },
        { name: "VP-Level Ops", level: 86 },
      ],
    },
  ],

  education: [
    {
      degree: "MCA",
      school: "Techno Main Salt Lake, Kolkata",
      period: "2018—2021",
      gpa: "8.61 CGPA",
    },
    {
      degree: "BCA",
      school: "The Heritage Academy, Kolkata",
      period: "2014—2017",
      gpa: "",
    },
  ],

  story: [
    {
      yr: "2017",
      title: "The Origin",
      color: "#C9A84C",
      icon: "◈",
      text: "PHP developer. Government projects. 13 secured, restructured, and shipped. Built GST portals, Android apps, and retailer software from zero.",
    },
    {
      yr: "2019",
      title: "MCA & Upskilling",
      color: "#F5C842",
      icon: "◉",
      text: "Master's in Computer Applications. 8.61 CGPA. React, React Native, Web3 foundations, and freelance projects running in parallel.",
    },
    {
      yr: "2021",
      title: "Web3 & Blockchain",
      color: "#DAA520",
      icon: "◆",
      text: "Joined NonceBlox. Deep-dived into Solidity, DeFi, NFTs. Built DeFi11 — fully decentralized fantasy sports. Shipped 13+ apps over 3 years.",
    },
    {
      yr: "2023",
      title: "The Lead Role",
      color: "#B8860B",
      icon: "●",
      text: "Lead Mobile Developer. Owned architecture for MusicX, Housezy, Vulcan Eleven. 50,000+ real users. Razorpay + Binance Pay. C++ Native Modules.",
    },
    {
      yr: "2025",
      title: "AI + HealthTech",
      color: "#C9A84C",
      icon: "◈",
      text: "Proprietary game engine from scratch. RAG pipelines for HIPAA-compliant medical data. Women's health platform at scale. VP-level operations.",
    },
    {
      yr: "Now",
      title: "Open to the Right Role",
      color: "#F5C842",
      icon: "→",
      text: "VP Engineering. CTO. Principal Architect. The title matters less than the mission. I build systems that scale and turn technical vision into business outcomes.",
    },
  ],

  testimonials: [
    {
      name: "Kartik Kalia",
      role: "Full Stack Developer · AWS",
      company: "NonceBlox",
      seniority: "DIRECT MANAGER",
      col: "#C9A84C",
      rel: "Managed Amit · 3 years",
      date: "Nov 2024",
      text: "I had the pleasure of working with Amit for three years and witnessed his impressive growth from Front-End Developer to Front-End Lead. His expertise and dedication make him a valuable asset to any team.",
      li: "https://linkedin.com/in/kartikkalia/",
    },
    {
      name: "Neha Goel",
      role: "HR Professional · 15+ Years",
      company: "NonceBlox",
      seniority: "SENIOR LEADERSHIP",
      col: "#78909C",
      rel: "Senior colleague",
      date: "Oct 2024",
      text: "Amit had been an amicable and diligent developer, one of the most dependable Engineers when it comes to delivery or urgent closures. His capability to rebuild any project from scratch is remarkable.",
      li: "https://linkedin.com/in/neha-goel/",
    },
    {
      name: "Varun Chodha",
      role: "Senior Full-Stack · MERN",
      company: "NonceBlox",
      seniority: "MENTEE → SENIOR",
      col: "#81C784",
      rel: "Grew under Amit's guidance",
      date: "Oct 2024",
      text: "Amit played a pivotal role in mentoring me, sharing his profound knowledge of Redux, React Native, and frontend concepts. His enthusiasm for coding and pursuit for perfection are truly inspiring.",
      li: "https://linkedin.com/in/varun-chodha/",
    },
  ],

  blogs: [
    {
      title: "Say Goodbye to Git Woes: Become a Git Wizard Today! 🧙♂️",
      cat: "DevOps / Git",
      color: "#C9A84C",
      date: "Jan 17, 2025",
      teaser:
        "Git isn’t just a tool; it’s a superpower. Whether you’re a beginner or an experienced developer, mastering Git practices will transform...",
      link: "https://devamitch.medium.com/say-goodbye-to-git-woes-become-a-git-wizard-today-c6f6e7c10b7a",
    },
    {
      title: "Let’s Build Your First Electron App: The Magical Feed App! 🪄",
      cat: "Desktop / Electron",
      color: "#F5C842",
      date: "Nov 23, 2024",
      teaser:
        "Hey there, future tech wizards! Are you ready to dive into the world of coding and create your very own app? With just some simple...",
      link: "https://devamitch.medium.com/lets-build-your-first-electron-app-the-magical-feed-app-7d8e9f2a1b3c",
    },
    {
      title: "From TypeScript to Rust & Go — Day 3: Mastering Functions",
      cat: "Rust & Go",
      color: "#DAA520",
      date: "Nov 23, 2024",
      teaser:
        "Day 3: Writing Reusable Functions and Handling Errors in Rust and Go. Each post introduces concepts step-by-step in plain English.",
      link: "https://devamitch.medium.com/from-typescript-to-rust-go-day-3-mastering-functions-and-error-handling-c2d1e4f5a6b7",
    },
    {
      title: "Expo vs. Bare React Native: Which Should You Use and When?",
      cat: "Mobile / React Native",
      color: "#4FC3F7",
      date: "Oct 25, 2024",
      teaser:
        "React Native has become a popular choice for mobile app development. Here is how to choose between Expo's managed workflow and Bare React Native.",
      link: "https://devamitch.medium.com/expo-vs-bare-react-native-which-should-you-use-and-when-f2b3c4d5e6f7",
    },
    {
      title: "Understanding Type vs. Interface in TypeScript",
      cat: "TypeScript",
      color: "#34D399",
      date: "Sep 28, 2024",
      teaser:
        "As I mentor my junior developers on the importance of type safety, I’ve observed a persistent gap in their understanding of foundational...",
      link: "https://devamitch.medium.com/understanding-type-vs-interface-in-typescript-a-guide-for-junior-developers-a1b2c3d4e5f6",
    },
  ],

  services: [
    {
      id: "pitch",
      icon: "◈",
      title: "Pitch Your Idea",
      sub: "Turn a concept into a roadmap",
      color: "#C9A84C",
      items: [
        "30-min discovery call",
        "Technical feasibility analysis",
        "MVP scope definition",
        "Tech stack recommendation",
        "Timeline + cost estimate",
        "Architecture blueprint",
      ],
      cta: "Submit Your Idea",
      price: "Free to pitch",
      note: "No commitment. Just clarity.",
      href: "#pitch",
    },
    {
      id: "consult",
      icon: "◉",
      title: "Consulting",
      sub: "Architecture · Strategy · Reviews",
      color: "#F5C842",
      items: [
        "Architecture design & review",
        "Technical due diligence",
        "Codebase audit",
        "Team structure advisory",
        "Ongoing strategic advisory",
        "1:1 mentorship sessions",
      ],
      cta: "Book a Session",
      price: "From $150/hr",
      note: "Or fixed retainer for ongoing work.",
      href: "#contact",
    },
    {
      id: "build",
      icon: "◆",
      title: "End-to-End Build",
      sub: "From zero to production",
      color: "#DAA520",
      items: [
        "Full 0-to-1 product build",
        "React Native + Next.js + NestJS",
        "AI/ML integrations (RAG, LLMs, CV)",
        "Team recruitment & training",
        "CI/CD setup",
        "Post-launch support",
      ],
      cta: "Start a Project",
      price: "Fixed scope",
      note: "Quoted after discovery call.",
      href: "#contact",
    },
  ],

  process: [
    {
      step: "01",
      duration: "30 min",
      title: "Discovery Call",
      color: "#C9A84C",
      desc: "You share the vision. I ask the hard questions. We figure out if this is a fit and what the right scope looks like.",
    },
    {
      step: "02",
      duration: "2–3 days",
      title: "Architecture Blueprint",
      color: "#F5C842",
      desc: "I design the technical system — stack, data models, integrations, cost structure, and timeline. No black boxes.",
    },
    {
      step: "03",
      duration: "Ongoing",
      title: "Aligned Build",
      color: "#DAA520",
      desc: "Regular check-ins. Transparent progress. No disappearing acts. You always know where things stand.",
    },
    {
      step: "04",
      duration: "Final",
      title: "Delivery & Handoff",
      color: "#B8860B",
      desc: "Production-ready code, documented systems, trained team if needed. I don't ghost after delivery.",
    },
  ],

  faqs: [
    {
      cat: "General",
      q: "What type of work do you take on?",
      a: "End-to-end mobile and fullstack architecture — React Native, Next.js, NestJS, AI/ML integrations. I specialize in 0-to-1 builds, team setup, and complex system design. If you have a vision and need a technical co-founder-level partner, that's my zone.",
    },
    {
      cat: "General",
      q: "How quickly can you start on a new project?",
      a: "Typically within 1–2 weeks, depending on scope and current availability. For urgent builds, reach out directly and we'll figure it out.",
    },
    {
      cat: "General",
      q: "Do you work with early-stage startups?",
      a: "Yes — that's where I do my best work. I've built two complete startup ecosystems from scratch. I understand the pressure, the pivots, and the need to ship fast without accumulating technical debt.",
    },
    {
      cat: "Process",
      q: "What's your process for starting an engagement?",
      a: "Discovery call (30 min) → Scope alignment → Architecture review → Roadmap + timeline → Delivery with regular check-ins. I don't disappear after signing.",
    },
    {
      cat: "Team",
      q: "Can you lead and build a team?",
      a: "Yes — I've recruited, hired, and trained 21 engineers for a single project. I can both build systems and build the humans who maintain them.",
    },
    {
      cat: "Technical",
      q: "Do you work on AI and machine learning projects?",
      a: "Absolutely. RAG pipelines, agentic AI, LLM integration, computer vision — this is a core part of my work, not a side experiment. I've deployed these in regulated HealthTech environments.",
    },
    {
      cat: "Services",
      q: "What does 'Pitch Your Idea' mean?",
      a: "You come with a concept — rough or refined. I evaluate technical feasibility, define the MVP, estimate cost and timeline, and give you a clear path to making it real. No gatekeeping, no jargon.",
    },
    {
      cat: "Services",
      q: "What's included in the Consulting service?",
      a: "Architecture reviews, technical due diligence, code audits, team structure recommendations, or ongoing strategic technical advisory. Priced by hour or retainer.",
    },
    {
      cat: "Services",
      q: "Can I buy a pre-built project or template?",
      a: "Yes — I have production-tested boilerplates and project foundations in React Native, Next.js, and NestJS. Reach out to discuss what fits your needs.",
    },
    {
      cat: "General",
      q: "Do you work remotely?",
      a: "Exclusively remote. I've worked with teams across Canada, Dubai, and India without missing a beat. Time zones are manageable with the right communication setup.",
    },
    {
      cat: "Services",
      q: "What's your day rate / project rate?",
      a: "Consulting starts at $150/hr. Project rates are fixed-scope after discovery. Reach out and let's find a structure that works.",
    },
    {
      cat: "Process",
      q: "Are you available for a quick technical review?",
      a: "Yes — I offer focused 1-hour architecture review sessions. Great for validating technical decisions, reviewing an existing codebase, or getting an expert second opinion.",
    },
  ],
} as const;

export interface ProjectLink {
  text: string;
  url?: string;
}

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface Project {
  title: string;
  slug: string;
  role: string;
  description: string;
  longDescription: string[];
  badges: string[];
  stack: string[];
  sector: string;
  color: string;
  type: "web" | "mobile" | "desktop" | "web3";
  features: ProjectFeature[];
  techHighlights: string[];
  links: ProjectLink[];
  github?: string;
  // Media & Metadata (kept for UI compatibility)
  image: string;
  gallery: string[];
  location: string;
  year: string;
  category:
    | "B2B"
    | "B2C"
    | "SaaS"
    | "Web3"
    | "FinTech"
    | "HealthTech"
    | "GovTech"
    | "Creative"; // Technical Domains
  id?: string;
}

export const projects: Project[] = [
  {
    title: "Aura Arena",
    slug: "aura-arena",
    role: "Founder · Independent Build",
    color: "#F59E0B",
    type: "web",
    description:
      "Real-time AI-powered movement intelligence platform — live camera → competitive gameplay, biometric scoring, and adaptive coaching. Not a demo. A fully operational system.",
    longDescription: [
      "Aura Arena is a real-time, AI-powered movement intelligence platform that converts live camera input into competitive gameplay, biometric scoring, and adaptive coaching across disciplines like boxing, martial arts, dance, and gymnastics.",
      "Zero-latency vision pipeline: Fully client-side processing using MediaPipe (pose, hand, face) running at <16ms/frame. Hybrid AI coaching engine: On-device Gemma (WebGPU) for real-time inference + Gemini 2.0 Flash cascade for deep analysis.",
      "Live multiplayer state layer via Supabase Realtime: 1v1 battles, global leaderboards, and presence sync. High-performance PWA: Sub-2s TTI on 4G, offline-first with IndexedDB sync.",
      "Deep competitive loop: tier progression, combo scoring, PvE AI opponents, and integrations with Strava, Apple Health, and Garmin.",
    ],
    badges: ["PWA · Web", "AI/ML · Computer Vision"],
    stack: [
      "MediaPipe",
      "TensorFlow.js",
      "WebGPU",
      "Supabase",
      "PWA",
      "Gemini 2.0",
    ],
    sector: "Web AI/ML Mobile",
    features: [
      {
        title: "Zero-Latency Vision",
        desc: "Full-body pose, hand, and face landmarks at 60fps — fully client-side.",
      },
      {
        title: "Hybrid AI Coaching",
        desc: "On-device Gemma + Gemini 2.0 Flash for real-time + deep post-session analysis.",
      },
      {
        title: "Live Multiplayer",
        desc: "Supabase Realtime: 1v1 battles, global leaderboards, presence sync.",
      },
      {
        title: "Competitive Loop",
        desc: "Tier progression, combo scoring, PvE AI opponents, health app integrations.",
      },
    ],
    techHighlights: [
      "16ms per-frame budget maintained across multiple detection models",
      "On-device Gemma (WebGPU) + Gemini 2.0 Flash cascade architecture",
      "Supabase Realtime for multiplayer state and presence",
      "Sub-2s TTI on 4G, offline-first with IndexedDB sync",
    ],
    links: [{ text: "Live Platform", url: "https://auraarena.devamit.co.in" }],
    image:
      "https://media.licdn.com/dms/image/v2/D4E2CAQFwjnWLJMitmA/comment-image-shrink_8192_160/B4EZ0rch5WHsAM-/0/1774550423674?e=1776117600&v=beta&t=Sgey27oXnuMrLcSvIfxEFP6LQf0PgbWZ0O2pZ33Hb0s",
    gallery: [
      "https://media.licdn.com/dms/image/v2/D4E2CAQEYKzyT53rycw/comment-image-shrink_8192_160/B4EZ0rcwF8HUAQ-/0/1774550463859?e=1776117600&v=beta&t=jHTWSq0_H4Wt9cTnxBJrFHdhAKQFwdTt0DLklGAP-7o",
      "https://media.licdn.com/dms/image/v2/D4E22AQHpNLhWbgT7hg/feedshare-shrink_1280/B4EZ0rblpcGkAM-/0/1774550146187?e=1776902400&v=beta&t=1CJBjzqzCyoi5dsJtGiDpeFH6Q5XSmjEzG_Lgmm_iaQ",
      "https://media.licdn.com/dms/image/v2/D4E22AQHfYk-4nUYpJQ/feedshare-shrink_1280/B4EZ0rbmtBHQAM-/0/1774550150492?e=1776902400&v=beta&t=xM3QuIH3bX0OchilZBqZRQwe6ZR1EYrZ2NgbCsDhn88",
    ],
    location: "India",
    year: "2026",
    category: "Creative",
  },
  {
    title: "HarmonyBloom",
    slug: "harmony-bloom",
    role: "Founder · Independent Build",
    color: "#EC4899",
    type: "web",
    description:
      "Privacy-first AI wellness engine with on-device intelligence, gamified behavioral systems, and zero-knowledge architecture.",
    longDescription: [
      "HarmonyBloom is a privacy-first AI wellness system that synchronizes user productivity, mood, and focus with biological cycles using on-device intelligence.",
      "Architected a zero-knowledge system with AES-256-GCM encryption and offline-first data handling — no server-side data exposure.",
      "Built an on-device AI co-pilot for personalized insights without external inference calls. Developed gamified behavioral engine (XP, quests, progression loops) to drive habit formation.",
      "Implemented GPU-optimized interactive systems (real-time UI + arcade modules) for low-latency engagement. Designed end-to-end system for sensitive health data with HIPAA-aligned architecture.",
    ],
    badges: ["Web App (TMA)", "HealthTech · AI/ML"],
    stack: ["React 18", "Vite", "Framer Motion", "Gemini API", "Zustand"],
    sector: "Web Mobile AI/ML",
    features: [
      {
        title: "On-Device AI Co-Pilot",
        desc: "Personalized insights without external inference calls. Zero-knowledge, privacy-first.",
      },
      {
        title: "Gamified Behavioral Engine",
        desc: "XP, quests, and progression loops engineered to drive lasting habit formation.",
      },
      {
        title: "GPU-Optimized Arcade",
        desc: "Real-time interactive modules with low-latency engagement for wellness activities.",
      },
      {
        title: "HIPAA-Aligned Architecture",
        desc: "AES-256-GCM encryption, offline-first data, strict data ownership guarantees.",
      },
    ],
    techHighlights: [
      "AES-256-GCM encryption with zero-knowledge architecture",
      "On-device AI inference bypassing external API calls",
      "GPU-optimized WebGL for smooth arcade mini-game rendering",
      "Telegram Mini App (TMA) bridge for native APIs",
    ],
    links: [
      { text: "Live Platform", url: "https://harmonybloom.devamit.co.in" },
    ],
    image: "https://harmonybloom.devamit.co.in/og-image.png",
    gallery: [
      "https://harmonybloom.devamit.co.in/assets/light_hero.png",
      "https://harmonybloom.devamit.co.in/assets/light_insights.png",
      "https://harmonybloom.devamit.co.in/assets/light_chat.png",
    ],
    location: "Remote",
    year: "2026",
    category: "HealthTech",
  },
  {
    title: "Neev",
    slug: "neev",
    role: "Founder · Independent Build",
    color: "#3B82F6",
    type: "web",
    description:
      "A private, AI-guided family operating system. It amplifies your judgment with the calm intelligence of a trusted elder who sees your full picture.",
    longDescription: [
      "Neev is a private, AI-guided family operating system built for parents who take their responsibilities seriously.",
      "It doesn't try to replace your judgment. It amplifies it — with the calm, structured intelligence of a trusted elder who sees your full picture: your calendar, your children's needs, your work commitments, your health, and the thousand small things that would otherwise fall through the cracks.",
      "Built on Next.js 14 with Firebase, ensuring all data remains private within the family space. Claude AI reads schedules and health logs to generate context-aware suggestions.",
    ],
    badges: ["Web App", "Consumer · AI/ML"],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Claude AI",
      "Firebase",
      "Google Cloud",
    ],
    sector: "Web AI/ML",
    features: [
      {
        title: "Family OS Dashboard",
        desc: "Unified center for family schedules, health logs, and shared tasks.",
      },
      {
        title: "Guardian Architecture",
        desc: "Role-based hierarchy with elder oversight and child-safe access.",
      },
      {
        title: "AI Wellness Nudges",
        desc: "Claude AI generates personalized suggestions based on family data patterns.",
      },
    ],
    techHighlights: [
      "Next.js 14 App Router with server components for performance",
      "Firebase Realtime Database for sub-50ms data sync",
      "Google Cloud Functions for background AI processing",
    ],
    links: [{ text: "Live Platform", url: "https://neev.devamit.co.in" }],
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHOVJDxvGHiCw/feedshare-shrink_2048_1536/B56Z0iECCKKMAg-/0/1774392976517?e=1776902400&v=beta&t=BIPMu0mPJFOazeD11DLruISrtDvwDCbrbdNeTqWe_sM",
    gallery: [
      "https://media.licdn.com/dms/image/v2/D5622AQEMUoUR-IPO9A/feedshare-shrink_2048_1536/B56Z0iECVvJwAg-/0/1774392979533?e=1776902400&v=beta&t=49t9Pozg-bA0g3QXoCxvg5B65ksUYhLj-zOQsmslAZ4",
      "https://media.licdn.com/dms/image/v2/D5622AQEC6D8PVspwHA/feedshare-shrink_2048_1536/B56Z0iEClBG8Ag-/0/1774392978756?e=1776902400&v=beta&t=jdVWpdFyRLvein4t_-zSlXHJVbL4q-edByxfgVVnqOc",
      "https://media.licdn.com/dms/image/v2/D5622AQG5hgP71kAdIA/feedshare-shrink_2048_1536/B56Z0iECE.JgAg-/0/1774392976505?e=1776902400&v=beta&t=NZ0nfeblOf3dNN_EWa-uJMbEURG0Y9BkeapdAwYeNbw",
      "https://media.licdn.com/dms/image/v2/D5622AQF6-OrbI1DceA/feedshare-shrink_2048_1536/B56Z0iEBh8HIAg-/0/1774392974369?e=1776902400&v=beta&t=IoxH4qBOPcsCRZx2QvzkwPyCQNYzu0MM8owDkyCREdI",
    ],
    location: "India",
    year: "2026",
    category: "SaaS",
  },
  {
    title: "Aura Studio",
    slug: "aura-studio",
    role: "Founder · Independent Build",
    color: "#8B5CF6",
    type: "web",
    description:
      "Visual AI orchestration platform. A nodal canvas where users drag, connect, and configure 45+ AI pipelines in real time without writing glue code.",
    longDescription: [
      "Aura Studio is a full visual AI orchestration platform that removes the complexity of connecting AI services. Instead of writing glue code, users drag nodes onto a canvas, connect them with wires, and watch their AI pipeline execute in real time.",
      "The platform ships with 45+ pre-built node types spanning LLM calls, REST API connectors, logic gates, data transformers, and output renderers. Every pipeline is configurable without code.",
      "Built as a solo founder project, Aura Studio goes from concept to deployed production app demonstrating what a single senior engineer can ship in 2025 with modern AI tooling.",
    ],
    badges: ["Web App", "AI/ML · Enterprise"],
    stack: ["React 19", "Next.js", "Zustand", "Node-based UI", "Gemini API"],
    sector: "Web Enterprise AI/ML",
    features: [
      {
        title: "Visual Pipeline Editor",
        desc: "Drag-and-drop nodal canvas with pan, zoom, and connection wiring for building AI pipelines visually.",
      },
      {
        title: "45+ Node Types",
        desc: "Pre-built nodes for LLMs, API calls, logic gates, data transformers, and more.",
      },
      {
        title: "Real-Time Execution",
        desc: "Pipelines run live as you build — watch data flow through each node.",
      },
    ],
    techHighlights: [
      "Custom node-based UI built on React Flow with virtual canvas rendering",
      "Gemini API orchestration layer supporting streaming and function calling",
      "Zustand global state with atomic node state slices",
    ],
    links: [{ text: "Live Platform", url: "https://aurastudio.devamit.co.in" }],
    image: "https://aurastudio.devamit.co.in/app-icon.png",
    gallery: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    ],
    location: "Remote",
    year: "2025",
    category: "B2B",
  },
  {
    title: "KSHEM",
    slug: "kshem",
    role: "Founder · Independent Build",
    color: "#10B981",
    type: "web",
    description:
      "Global Land Intelligence Platform. Not a listing platform — core digital infrastructure for land intelligence, governance, and transaction clarity.",
    longDescription: [
      "KSHEM is an attempt to build core digital infrastructure for land intelligence, governance, and transaction clarity. This is not a listing platform.",
      "Key capabilities: AI-driven document analysis and verification, end-to-end ownership history tracking, GIS + GeoJSON-based boundary intelligence, real-time dispute detection before transaction execution, tax intelligence layer, and policy/regulatory interpretation aligned with regional frameworks (RERA, local land laws).",
      "Multi-stakeholder validation across government, legal, and community participants. Fraud detection (KYC/AML aligned), smart workflow orchestration for approvals, clearances, and escrow. Multi-language support with legal context preservation. Role-based access for 20+ stakeholder categories.",
      "Secure infrastructure with encryption, audit trails, and compliance frameworks.",
    ],
    badges: ["Web App", "GovTech · Land Intelligence"],
    stack: [
      "Next.js 16",
      "React 19",
      "Claude AI",
      "Tailwind v4",
      "Google Maps",
      "GIS",
      "React Native",
    ],
    sector: "Web Enterprise GovTech",
    features: [
      {
        title: "Land Intelligence Engine",
        desc: "AI-driven document analysis, ownership tracking, and real-time dispute detection before transaction execution.",
      },
      {
        title: "GIS Boundary Intelligence",
        desc: "GeoJSON-based mapping with boundary verification, tax records, and compliance gap analysis.",
      },
      {
        title: "20+ Stakeholder Portals",
        desc: "Role-based access for government, legal, developers, communities, and end users with multi-language support.",
      },
      {
        title: "Smart Workflow Orchestration",
        desc: "Automated approvals, clearances, escrow processes, and KYC/AML-aligned fraud detection.",
      },
    ],
    techHighlights: [
      "Next.js 16 App Router with per-portal server component isolation",
      "Claude AI for document analysis, verification, and regulatory interpretation",
      "GIS + GeoJSON integration with PostGIS-backed geospatial queries",
      "Encryption, audit trails, and RERA-aligned compliance frameworks",
    ],
    links: [{ text: "Live Platform", url: "https://kshem.devamit.co.in" }],
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQGqZ1htRH1cfQ/feedshare-shrink_2048_1536/B56Z1FIo.SIMAg-/0/1774981386528?e=1776902400&v=beta&t=n80ympJfDRF0hFJaf5CCTt2SLtv8QvpH8MtrIhJh8BE",
    gallery: [
      "https://media.licdn.com/dms/image/v2/D5622AQG05TL9eAFwFg/feedshare-shrink_480/B56Z1FIo7EKkAk-/0/1774981386491?e=1776902400&v=beta&t=jXDLSlOH1n6qP9vm00-MvyD99METMqoRAtstxb5xYyU",
      "https://media.licdn.com/dms/image/v2/D4E2CAQFwjnWLJMitmA/comment-image-shrink_8192_160/B4EZ0rch5WHsAM-/0/1774550423674?e=1776117600&v=beta&t=Sgey27oXnuMrLcSvIfxEFP6LQf0PgbWZ0O2pZ33Hb0s",
    ],
    location: "India",
    year: "2026",
    category: "GovTech",
  },

  {
    title: "Crunchyroll Folio",
    slug: "crunchyroll-folio",
    role: "Founder · Independent Build",
    color: "#F97316",
    type: "web",
    description:
      "A cinematic, immersive interactive portfolio built with streaming service aesthetics.",
    longDescription: [
      "A creative experiment borrowing design language from Netflix and Crunchyroll.",
      "Features shared element morphing, spring physics, and contextual background videos.",
      "Built with a focus on 60fps animations and seamless cinematic transitions.",
    ],
    badges: ["Web App", "Creative"],
    stack: ["React", "Framer Motion", "Vite", "Tailwind CSS"],
    sector: "Web",
    features: [
      {
        title: "Cinematic Motion",
        desc: "High-fidelity transitions mimicking premium streaming platforms.",
      },
      {
        title: "Streaming Catalog UI",
        desc: "Projects organized as a browseable visual experience.",
      },
      {
        title: "Fluid Interaction",
        desc: "Spring-based physics for all UI components and page transitions.",
      },
    ],
    techHighlights: [
      "Framer Motion layout animations for zero-config shared element transitions",
      "Intersection Observer for scroll-triggered cinematic sequences",
      "Zero layout thrashing through GPU-composited transforms",
    ],
    links: [
      { text: "Live Platform", url: "https://crunchyroll.devamit.co.in" },
    ],
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEUGwNtXbWDjw/feedshare-shrink_800/B56Z0GPXUZH0Ac-/0/1773926185229?e=1776902400&v=beta&t=OpKeG8nwbsHLzUIX2goBiqdnxcBGRLbsFMn3CWxD3nU",
    gallery: [
      "https://media.licdn.com/dms/image/v2/D5622AQEUGwNtXbWDjw/feedshare-shrink_800/B56Z0GPXUZH0Ac-/0/1773926185229?e=1776902400&v=beta&t=OpKeG8nwbsHLzUIX2goBiqdnxcBGRLbsFMn3CWxD3nU",
    ],
    location: "Tokyo, Japan",
    year: "2024",
    category: "Creative",
  },
  {
    title: "Vulcan Eleven",
    slug: "vulcan-eleven",
    role: "Lead Mobile Engineer · NonceBlox",
    color: "#22C55E",
    type: "mobile",
    description:
      "Production fantasy sports with dual payment system (fiat + crypto) and 50K+ users.",
    longDescription: [
      "Architected a scalable mobile stack for real-money gaming with heavy traffic.",
      "Implemented a dual payment pipeline using Razorpay and Binance Pay with server-side reconciliation.",
      "Maintains solid 60fps on all Android tiers using custom C++ native modules.",
    ],
    badges: ["iOS · Android", "Gaming · FinTech"],
    stack: [
      "React Native",
      "C++ Modules",
      "Reanimated 3",
      "Razorpay",
      "Binance Pay",
    ],
    sector: "Gaming FinTech Mobile",
    features: [
      {
        title: "Dual Payment System",
        desc: "Concurrent support for INR fiat and Binance Pay crypto deposits.",
      },
      {
        title: "Real-Time Stats",
        desc: "Live match tracking with WebSocket-powered persistent leaderboards.",
      },
      {
        title: "Native UI Threading",
        desc: "C++ JSI native modules for heavy UI computations.",
      },
    ],
    techHighlights: [
      "React Native Reanimated 3 worklet animations running on the native UI thread",
      "PostgreSQL indexed queries for sub-10ms contest ranking response",
      "Client-side point calculation engine for zero-latency updates",
    ],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/app/vulcan-eleven/id6462420052",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.vulcaneleven",
      },
    ],
    image:
      "https://play-lh.googleusercontent.com/wXdad08pFa4M-PUMMxHREAHVaorQWazNnP0MlR7Hfvrs6PngKrM6QGXxPZWHwKxk0Q=w480-h960-rw",
    gallery: [
      "https://play-lh.googleusercontent.com/ooxPxIZyc_AphBcbMPn4d1xhhRwqNtqxysK-keMGqOjTUXJXC2Amn91XRhQnz3wCI-Fo=w5120-h2880-rw",
      "https://play-lh.googleusercontent.com/8qLhwNsVfTxgTcpPVLMv-u0bYjEfbJnxjfpYfQFpvuIXEp2daSxQHmr01PfJq8oTIg=w5120-h2880-rw",
      "https://play-lh.googleusercontent.com/LXJihOUwd3VnEIcJsKjSMQY76QzWG1HjNbJpzPfKlHnWLkc3Ak-dXJLOBTC4fn_yJkhJ=w1052-h592-rw",
    ],
    location: "Dubai",
    year: "2023",
    category: "FinTech",
  },
  {
    title: "Housezy",
    slug: "housezy",
    role: "FinTech Lead · NonceBlox",
    color: "#06B6D4",
    type: "mobile",
    description:
      "Subscription-based housing platform with PostGIS geospatial search.",
    longDescription: [
      "PropTech solution connecting tenants and landlords via proximity-ranked discovery.",
      "Owned full payment flow including PayU, Google Pay, and a custom billing engine.",
      "GraphQL API layer for efficient data fetching of complex property listings.",
    ],
    badges: ["iOS · Android", "PropTech"],
    stack: ["Expo", "GraphQL", "Socket.io", "PostGIS", "PayU", "Google Pay"],
    sector: "PropTech Mobile",
    features: [
      {
        title: "Geospatial Search",
        desc: "PostGIS radius search ranked by proximity and amenity access.",
      },
      {
        title: "Billing Engine",
        desc: "Automated subscription management with proration and renewals.",
      },
      {
        title: "Real-Time Alerts",
        desc: "Socket.io event system for instant property notifications.",
      },
    ],
    techHighlights: [
      "PostGIS ST_DWithin queries with GiST spatial indexes for high performance",
      "GraphQL with DataLoader for sub-query optimization",
      "Expo Router for typed navigation and deep link support",
    ],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/app/housezy/id6471949955",
      },
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nonceblox.housezy",
      },
    ],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e3/eb/0d/e3eb0dec-d825-d86d-36f5-e8a7538d811d/AppIcon-0-0-1x_U007epad-0-1-85-220.png/400x400ia-75.webp",
    gallery: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8e/a1/0c/8ea10c28-ee64-276d-8b28-66279a5b4387/d2f59d30-2752-4359-85cd-3f669d62e048_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-02-14_at_09.17.13.png/460x998bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e3/3e/04/e33e0433-d543-0400-1155-21baad6ad0d0/63cadf32-aa3d-44f1-95eb-4247200bb4ba_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-09-07_at_07.13.18.png/460x998bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d2/86/a5/d286a5e0-f34b-eaa1-0f5e-3f4fcc80af0d/40f838b5-63b4-410e-ad3b-598f066939f6_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-09-07_at_07.24.27.png/460x998bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/bd/a7/6a/bda76a81-7d6e-23b5-f9ec-6e7f9b50b2b6/56f530a2-c885-4ddb-b91b-3ce67bf85430_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-09-06_at_19.24.06.png/460x998bb.webp",
    ],
    location: "London",
    year: "2023",
    category: "B2C",
  },
  {
    title: "MusicX",
    slug: "music-x",
    role: "Senior Engineer · NonceBlox",
    color: "#A855F7",
    type: "mobile",
    description:
      "Web3 music competition platform with blockchain-verified royalty distribution.",
    longDescription: [
      "Artists compete in community-voted battles with automatic Solidity-based payouts.",
      "Includes a 60fps audio visualizer powered by native C++ modules.",
      "Deep integration with Spotify and Twitter APIs for artist profile enrichment.",
    ],
    badges: ["iOS", "Web3 · Music"],
    stack: [
      "React Native",
      "C++ Modules",
      "Solidity",
      "Spotify API",
      "Twitter API",
    ],
    sector: "Web3 Mobile",
    features: [
      {
        title: "On-Chain Royalties",
        desc: "Automated prize pools powered by Solidity contracts.",
      },
      {
        title: "Audio Visuals",
        desc: "60fps spectrum analyzers and waveforms using C++ JSI.",
      },
      {
        title: "Social Integration",
        desc: "Real-time Spotify stats and Twitter engagement metrics.",
      },
    ],
    techHighlights: [
      "C++ audio processing bypassing the React Native bridge for zero latency",
      "IPFS for decentralized storage of high-fidelity tracks and NFT metadata",
      "Solidity tournament logic with ERC-20 prize pool settlement",
    ],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/app/music-x/id6475713772",
      },
    ],
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/18/59/41/185941b4-259c-0502-ee3e-f10da3f14f44/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/400x400ia-75.webp",
    gallery: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c9/69/43/c9694390-7467-9575-0e7f-8b73621f6fec/e24df204-255b-4f43-a0e7-55047739c058_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-09-09_at_19.57.44.png/460x998bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/89/a1/40/89a140ba-872f-45e3-c70e-6ecc237c91ba/1175aa65-c61a-43db-90ff-54ebb3e48333_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-09-09_at_19.57.54.png/460x998bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/55/d9/17/55d917ba-011a-86ba-8323-a1280cbce0cc/0f977a13-a60a-4028-8d3c-c51b830a931f_Simulator_Screenshot_-_iPhone_15_Pro_Max_-_2024-09-09_at_19.57.58.png/460x998bb.webp",
    ],
    location: "Remote",
    year: "2024",
    category: "Web3",
  },
  {
    title: "DeFi11",
    slug: "defi11",
    role: "Web3 Architect · NonceBlox",
    color: "#F59E0B",
    type: "web3",
    description:
      "Fully on-chain fantasy sports with 100% Ethereum-backed prize pools.",
    longDescription: [
      "The first fully decentralized sports platform where prize pools are governed by smart contracts.",
      "Trustless architecture ensuring absolute transparency and automated payouts via oracles.",
      "Includes an NFT marketplace for player cards with time-locked prize pools.",
    ],
    badges: ["iOS", "Web3 · DeFi"],
    stack: ["Solidity", "Ethereum", "Web3.js", "React Native", "ERC-20"],
    sector: "Web3 Mobile",
    features: [
      {
        title: "Trustless Pools",
        desc: "100% on-chain escrows with zero centralized custody.",
      },
      {
        title: "Oracle Integration",
        desc: "Chainlink oracle feeds triggering automated winner payouts.",
      },
      {
        title: "NFT Marketplace",
        desc: "ERC-721 player card ecosystem with on-chain ownership.",
      },
    ],
    techHighlights: [
      "Solidity tournament factory pattern with upgradeable proxy contracts",
      "ERC-20 prize distribution automatically executed on match finalization",
      "Web3.js bridge for secure transaction signing on mobile",
    ],
    links: [
      {
        text: "App Store",
        url: "https://apps.apple.com/app/defi11-fantasy-sports-app/id1608967244",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Dubai",
    year: "2022",
    category: "Web3",
  },
  {
    title: "Be4You",
    slug: "be4you",
    role: "Lead Architect · NonceBlox",
    color: "#F43F5E",
    type: "mobile",
    description:
      "Comprehensive dating application built concept-to-production in 90 days with WebRTC.",
    longDescription: [
      "High-speed 0-to-1 build of a full consumer dating ecosystem.",
      "Features swipe matching, WebRTC video calls, and real-time Socket.io chat.",
      "Delivered a robust MVP that successfully secured seed funding for the client.",
    ],
    badges: ["iOS · Android", "Consumer · Dating"],
    stack: [
      "React Native",
      "WebRTC",
      "Socket.io",
      "PostGIS",
      "Node.js",
      "Redis",
    ],
    sector: "Mobile",
    features: [
      {
        title: "P2P Video",
        desc: "WebRTC peer-to-peer calling with STUN/TURN fallback.",
      },
      {
        title: "Social Matching",
        desc: "Swipe-based logic with proximity-ranked match suggestions.",
      },
      {
        title: "Real-Time Chat",
        desc: "Messaging with typing indicators and read receipts via Socket.io.",
      },
    ],
    techHighlights: [
      "PostGIS ST_Distance for O(log n) proximity ranking with geohash indexing",
      "Redis pub/sub for scaling Socket.io across multiple Node.js instances",
      "React Native Reanimated for high-performance 60fps swipe physics",
    ],
    links: [{ text: "🔒 Private · Seed Funded" }],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Mumbai",
    year: "2022",
    category: "B2C",
  },
  {
    title: "Memr",
    slug: "memr",
    role: "Full-Stack Architect · NonceBlox",
    color: "#60A5FA",
    type: "web3",
    description:
      "Blockchain intelligence for tracking 'whale' movements across Ethereum.",
    longDescription: [
      "Real-time monitoring of large-wallet transactions with impact analysis.",
      "Uses AppKit v2 for seamless connection across 300+ wallets.",
      "Type-safe Ethereum interactions powered by Wagmi and Viem.",
    ],
    badges: ["Web App", "Web3 · DeFi Tracking"],
    stack: [
      "Next.js 15",
      "Wagmi",
      "Viem",
      "WalletConnect",
      "PayPal",
      "TypeScript",
    ],
    sector: "Web3 Web",
    features: [
      {
        title: "Whale Feed",
        desc: "Live monitoring of high-value on-chain transactions.",
      },
      {
        title: "Multi-Wallet",
        desc: "Seamless OAuth-style connection for over 300 wallet providers.",
      },
      {
        title: "Type-Safe Web3",
        desc: "Fully typed contract interactions for maximum reliability.",
      },
    ],
    techHighlights: [
      "Wagmi hooks with Viem transport for SSR-compatible data fetching",
      "WebSocket subscription to mempools for zero-latency movement tracking",
      "Next.js 15 Server Components for fast initial dashboard performance",
    ],
    links: [{ text: "🔒 Private" }],
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "Web3",
  },
  {
    title: "WeFoU",
    slug: "wefo-u",
    role: "Mobile Lead · NonceBlox",
    color: "#34D399",
    type: "mobile",
    description:
      "Proximity-first social network built on geofenced local discovery.",
    longDescription: [
      "Your social feed is defined by your physical neighborhood in real-time.",
      "Live map view tracks user clusters and events using battery-efficient geohashes.",
      "Spontaneous local broadcasting for anyone within a geofenced zone.",
    ],
    badges: ["iOS · Android", "Social"],
    stack: ["React Native", "PostGIS", "Socket.io", "Node.js", "Redis"],
    sector: "Mobile",
    features: [
      {
        title: "Live Neighbors",
        desc: "Discovery of people and events physically near you.",
      },
      {
        title: "Event Broadcast",
        desc: "Real-time broadcasting to users within defined local zones.",
      },
      {
        title: "Geofenced Maps",
        desc: "Visualizing local activity clusters without battery drain.",
      },
    ],
    techHighlights: [
      "PostGIS geohash-delta compression reducing bandwidth by 90%",
      "Redis sorted sets for proximity-ranked presence with TTL expiration",
      "Socket.io geo-rooms for efficient zone-scoped real-time messaging",
    ],
    links: [{ text: "🔒 Private" }],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2023",
    category: "B2C",
  },
  {
    title: "CryptoCoffeeTales",
    slug: "crypto-coffee-tales",
    role: "Senior Engineer · NonceBlox",
    color: "#FB923C",
    type: "web3",
    description:
      "Decentralized crypto news with IPFS storage and on-chain verification.",
    longDescription: [
      "Permanent, censorship-resistant publishing platform for the crypto community.",
      "Wallet-connected identity replaces traditional accounts for on-chain proof.",
      "Community curated rankings with transparent governance models.",
    ],
    badges: ["Android", "Web3 · News"],
    stack: ["React Native", "IPFS", "Blockchain", "Node.js"],
    sector: "Web3 Mobile",
    features: [
      {
        title: "Permanent Article",
        desc: "Content-addressed storage on IPFS with on-chain CIDs.",
      },
      {
        title: "Verified Identity",
        desc: "Wallet-based personas for trusted community governance.",
      },
      {
        title: "Censorship-Proof",
        desc: "Verifiable publishing records that cannot be revised.",
      },
    ],
    techHighlights: [
      "IPFS via Pinata for guaranteed availability of social content",
      "Smart contract registry for immutable publication history",
      "Wallet-signed authentication replacing legacy session management",
    ],
    links: [
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nonceblox.cryptocoffetales",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2022",
    category: "Web3",
  },
  {
    title: "JCare",
    slug: "jcare",
    role: "Senior Engineer · NonceBlox",
    color: "#22D3EE",
    type: "mobile",
    description:
      "Official donation and welfare platform for the Jitendra Foundation.",
    longDescription: [
      "Connects donors with welfare programs through real-time fund tracking.",
      "Automated tax receipting and donor dashboards for radical transparency.",
      "Centralized volunteer coordination and foundation event management.",
    ],
    badges: ["Android", "Social Welfare"],
    stack: ["React Native", "Firebase", "Node.js", "Payment Gateway"],
    sector: "Mobile",
    features: [
      {
        title: "Visible Impact",
        desc: "Real-time fund allocation updates for every donation.",
      },
      {
        title: "Smart Giving",
        desc: "Automated recurring donations and digital tax receipt generation.",
      },
      {
        title: "Volunteer Pulse",
        desc: "Direct foundation updates and event coordination in-app.",
      },
    ],
    techHighlights: [
      "Firebase Realtime Database for live cross-donor allocation syncing",
      "Cloud Messaging for targeted impact updates to donor devices",
      "Offline-first local caching for reliable history in low-connectivity areas",
    ],
    links: [
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nonceblox.jitendrafoundationapp",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2023",
    category: "B2C",
  },
  {
    title: "Bingo",
    slug: "bingo",
    role: "Senior Engineer · NonceBlox",
    color: "#84CC16",
    type: "mobile",
    description:
      "Offline-first POS with Bluetooth thermal printer tethering for SMEs.",
    longDescription: [
      "Billing system designed for retailers with unreliable internet access.",
      "Full inventory and sales reporting that works without any network connection.",
      "Tethers to Bluetooth thermal printers via ESC/POS command formatting.",
    ],
    badges: ["Android", "FinTech · Retail POS"],
    stack: ["React Native", "Bluetooth", "SQLite", "Offline-First"],
    sector: "Enterprise Mobile",
    features: [
      {
        title: "Network Optional",
        desc: "Complete billing, stock, and reporting without internet.",
      },
      {
        title: "Quick Print",
        desc: "Native Bluetooth tethering for immediate receipt generation.",
      },
      {
        title: "Smart Sync",
        desc: "Background cloud backup with automatic conflict resolution.",
      },
    ],
    techHighlights: [
      "SQLite with Write-Ahead Logging for ACID-compliant offline data",
      "ESC/POS command encoder for flexible receipt formatting",
      "Exponential backoff retry logic for cloud data sync",
    ],
    links: [
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.nonceblox.bingo",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2022",
    category: "B2B",
  },
  {
    title: "HRMS",
    slug: "hrms",
    role: "Lead Engineer · NonceBlox",
    color: "#818CF8",
    type: "desktop",
    description:
      "Cross-platform desktop employee management with live activity monitoring.",
    longDescription: [
      "Electron shell architecture wrapping a high-performance React dashboard.",
      "Complex payroll engine handling overtime and varying tax slabs in PostgreSQL.",
      "Live activity monitoring for check-ins and performance signals via Socket.io.",
    ],
    badges: ["Desktop · Web", "Enterprise · HR"],
    stack: ["Electron", "React", "Node.js", "PostgreSQL", "Socket.io"],
    sector: "Enterprise Web",
    features: [
      {
        title: "Native Desktop",
        desc: "Dedicated Windows and macOS apps from one codebase.",
      },
      {
        title: "Payroll Logic",
        desc: "Automated calculation engine for diverse employee types.",
      },
      {
        title: "Real-Time Pulse",
        desc: "Dashboard updates for employee attendance and status.",
      },
    ],
    techHighlights: [
      "Socket.io with PostgreSQL LISTEN/NOTIFY for live event streaming",
      "Electron IPC bridge for native OS notifications and tray access",
      "Window functions in SQL for complex payroll period computations",
    ],
    links: [{ text: "🔒 Internal Enterprise" }],
    image:
      "https://images.unsplash.com/photo-1454165833222-89937d40618a?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2023",
    category: "B2B",
  },
  {
    title: "AuraFlow",
    slug: "auraflow",
    role: "Founder · Independent Build",
    color: "#7C3AED",
    type: "web",
    description:
      "Visual AI Workflow Studio — prompt-to-architecture generation, RAG pipelines, and real-time AI orchestration.",
    longDescription: [
      "Built an AI-native workflow platform with prompt-to-architecture generation.",
      "Features RAG pipelines and real-time orchestration for complex AI workflows.",
      "Enables visual construction of AI systems without writing boilerplate code.",
    ],
    badges: ["Web App", "AI/ML · Workflows"],
    stack: ["React", "TypeScript", "Python", "RAG", "AI Agents"],
    sector: "AI/ML Enterprise",
    features: [
      {
        title: "Prompt-to-Architecture",
        desc: "Generate complete system architectures from natural language prompts.",
      },
      {
        title: "RAG Pipeline Builder",
        desc: "Visual construction of retrieval-augmented generation pipelines.",
      },
      {
        title: "Real-Time Orchestration",
        desc: "Live execution and monitoring of multi-step AI workflows.",
      },
    ],
    techHighlights: [
      "Python backend with FastAPI for high-throughput AI orchestration",
      "Vector database integration for semantic retrieval pipelines",
      "Real-time WebSocket streaming for live pipeline execution feedback",
    ],
    links: [{ text: "Live Platform", url: "https://auraflow.devamit.co.in" }],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "SaaS",
  },
  {
    title: "Bloom Directory",
    slug: "bloom-directory",
    role: "Founder · Independent Build",
    color: "#10B981",
    type: "web",
    description:
      "AI-powered intelligent directory platform built on Google's AI Studio with sophisticated search and matching.",
    longDescription: [
      "Intelligent directory platform built atop Google's AI Studio.",
      "Provides sophisticated search, matching, and content recommendations using Gemini API.",
      "Built with Next.js and Tailwind CSS for a modern, responsive experience.",
    ],
    badges: ["Web App", "AI/ML"],
    stack: ["Next.js", "Gemini API", "AI Studio", "Tailwind CSS"],
    sector: "Web AI/ML",
    features: [
      {
        title: "AI Search",
        desc: "Semantic search powered by Gemini for intelligent content discovery.",
      },
      {
        title: "Smart Matching",
        desc: "AI-driven matching algorithms for relevant recommendations.",
      },
      {
        title: "Directory Management",
        desc: "Full CRUD with categorization and filtering capabilities.",
      },
    ],
    techHighlights: [
      "Gemini API integration for semantic understanding of directory entries",
      "Next.js App Router with streaming SSR for fast initial loads",
      "Tailwind CSS v4 with custom design tokens",
    ],
    links: [
      { text: "Live Platform", url: "https://bloomdirectory.devamit.co.in" },
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "SaaS",
  },
  {
    title: "Seed Bridge",
    slug: "seed-bridge",
    role: "Frontend Engineer · NonceBlox",
    color: "#6366F1",
    type: "web3",
    description:
      "Cross-chain transfer bridge frontend — enabling seamless asset movement across blockchain networks.",
    longDescription: [
      "Set up the frontend foundation for cross-chain transfers between different blockchain networks.",
      "Built with React.js for a smooth, responsive bridging experience.",
      "Integrated wallet connections and transaction signing for secure cross-chain operations.",
    ],
    badges: ["Web App", "Web3 · Bridge"],
    stack: ["React.js", "Web3.js", "Ethers.js", "TypeScript"],
    sector: "Web3",
    features: [
      {
        title: "Cross-Chain Bridge",
        desc: "Seamless asset transfers between supported blockchain networks.",
      },
      {
        title: "Wallet Integration",
        desc: "Secure wallet connection with transaction signing flows.",
      },
      {
        title: "Transaction Tracking",
        desc: "Real-time status updates for cross-chain transfers.",
      },
    ],
    techHighlights: [
      "Multi-chain RPC provider abstraction for network-agnostic operations",
      "Web3.js bridge contracts with event listeners for transfer confirmations",
      "Responsive UI with real-time gas estimation and fee previews",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Dubai",
    year: "2021",
    category: "Web3",
  },
  {
    title: "SinCity",
    slug: "sincity",
    role: "Frontend Engineer · NonceBlox",
    color: "#EF4444",
    type: "web3",
    description:
      "Open-ended arcade game plot selling portal with robust authentication system.",
    longDescription: [
      "Implemented a robust authentication system for a blockchain-based virtual plot marketplace.",
      "Built the frontend for buying and selling virtual plots in an open-ended arcade game universe.",
      "Integrated Google Cloud Platform services for scalable infrastructure.",
    ],
    badges: ["Web App", "Web3 · Gaming"],
    stack: ["React.js", "GCP", "Web3.js", "Node.js"],
    sector: "Web3 Gaming",
    features: [
      {
        title: "Virtual Plot Marketplace",
        desc: "Buy and sell virtual land plots in an open-ended game world.",
      },
      {
        title: "Auth System",
        desc: "Robust wallet + OAuth authentication system.",
      },
      {
        title: "Plot Visualization",
        desc: "Interactive map rendering of available and owned plots.",
      },
    ],
    techHighlights: [
      "GCP-backed infrastructure for scalable multiplayer support",
      "Web3 wallet integration for on-chain plot ownership verification",
      "Canvas-based interactive map for spatial plot visualization",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Dubai",
    year: "2021",
    category: "Web3",
  },
  {
    title: "Treeverse",
    slug: "treeverse",
    role: "Frontend Engineer · NonceBlox",
    color: "#22C55E",
    type: "web3",
    description:
      "Fantasy MMORPG with MOBA-style combat system — designed the UI using Tailwind CSS.",
    longDescription: [
      "Designed and built the frontend UI for a fantasy MMORPG with MOBA-style combat mechanics.",
      "Implemented responsive game interfaces using Tailwind CSS and Next.js.",
      "Built character selection, inventory, and battle UI screens.",
    ],
    badges: ["Web App", "Gaming · Web3"],
    stack: ["Tailwind CSS", "Next.js", "TypeScript"],
    sector: "Gaming Web3",
    features: [
      {
        title: "Game UI",
        desc: "Character selection, inventory, and battle interface design.",
      },
      {
        title: "Combat System UI",
        desc: "MOBA-style real-time combat interface with skill cooldowns.",
      },
      {
        title: "Responsive Design",
        desc: "Fluid layouts adapting from desktop to mobile gameplay.",
      },
    ],
    techHighlights: [
      "Tailwind CSS with custom game-themed design tokens",
      "Next.js SSR for fast initial game lobby loads",
      "Canvas overlays for real-time combat animations",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Dubai",
    year: "2021",
    category: "Web3",
  },
  {
    title: "GST Ecosystem",
    slug: "gst-ecosystem",
    role: "Founding Developer · TechProMind",
    color: "#F87171",
    type: "web",
    description:
      "Complete GST compliance suite across Web, Desktop, and Mobile — 13+ government contracts secured.",
    longDescription: [
      "Built the initial infrastructure for tax filing following India's GST rollout.",
      "Secured 13+ government enterprise contracts through security-hardened design.",
      "Shared Oracle backend serving PHP, VB.NET, and Android platforms.",
    ],
    badges: ["Web · Desktop · Android", "GovTech"],
    stack: ["PHP", "VB.NET", "Java", "Kotlin", "Oracle DB", "Angular"],
    sector: "GovTech Enterprise Web Mobile",
    features: [
      {
        title: "Omni-Channel",
        desc: "GST filing on the go via mobile or in office via desktop.",
      },
      {
        title: "GSTR Automation",
        desc: "Verified invoice generation and automated tax return drafting.",
      },
      {
        title: "Gov-Grade Security",
        desc: "SQLi and XSS protection hardened for enterprise contracts.",
      },
    ],
    techHighlights: [
      "Oracle DB schema optimized for multi-platform data consistency",
      "SOAP client integration with National GST Network (GSTN) APIs",
      "Legacy PHP migration to Angular improving load times by 40%",
    ],
    links: [{ text: "🏛️ Government · 13+ Contracts" }],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata, India",
    year: "2018",
    category: "GovTech",
  },

  // ──── NONCEBLOX ERA: ADDITIONAL WEB3 & MOBILE PROJECTS ────
  {
    title: "BlockBet",
    slug: "blockbet",
    role: "Lead Mobile Engineer · NonceBlox",
    color: "#EAB308",
    type: "web3",
    description:
      "Decentralized prediction market with real-time odds engine and crypto-native settlement.",
    longDescription: [
      "On-chain prediction market with automated market makers for event betting.",
      "Cross-chain asset bridging for deposits from Ethereum and BSC.",
      "Live odds engine with sub-second WebSocket updates across active markets.",
    ],
    badges: ["iOS · Android", "Web3 · Prediction"],
    stack: ["React Native", "Solidity", "Web3.js", "Node.js", "Redis"],
    sector: "Web3 FinTech",
    features: [
      {
        title: "AMM Odds Engine",
        desc: "Automated market maker pricing for real-time prediction odds.",
      },
      {
        title: "Cross-Chain Deposits",
        desc: "Unified deposit layer across multiple blockchain networks.",
      },
      {
        title: "Live Markets",
        desc: "Real-time market updates via WebSocket with sub-second latency.",
      },
    ],
    techHighlights: [
      "Solidity AMM with configurable liquidity curves",
      "Redis streams for real-time odds broadcasting",
      "Cross-chain deposit reconciliation engine",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Dubai",
    year: "2023",
    category: "Web3",
  },
  {
    title: "NFT Launchpad",
    slug: "nft-launchpad",
    role: "Senior Engineer · NonceBlox",
    color: "#D946EF",
    type: "web3",
    description:
      "White-label NFT minting and launch platform with configurable smart contracts.",
    longDescription: [
      "Multi-tenant NFT launch infrastructure supporting ERC-721 and ERC-1155.",
      "Drag-and-drop configurator for minting rules, royalties, and whitelist management.",
      "Integrated with OpenSea and Rarible APIs for cross-marketplace listing.",
    ],
    badges: ["Web App", "Web3 · NFT"],
    stack: ["Next.js", "Solidity", "IPFS", "Ethers.js", "PostgreSQL"],
    sector: "Web3",
    features: [
      {
        title: "Multi-Tenant Minting",
        desc: "White-label infrastructure for launching NFT collections.",
      },
      {
        title: "Royalty Engine",
        desc: "On-chain royalty enforcement with configurable split percentages.",
      },
      {
        title: "Cross-Marketplace",
        desc: "Automatic listing across OpenSea, Rarible, and LooksRare.",
      },
    ],
    techHighlights: [
      "ERC-2981 royalty standard with on-chain enforcement",
      "IPFS pinning via Pinata with metadata validation",
      "Next.js ISR for fast collection page generation",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Dubai",
    year: "2022",
    category: "Web3",
  },
  {
    title: "Token Staking Portal",
    slug: "token-staking",
    role: "Frontend Engineer · NonceBlox",
    color: "#14B8A6",
    type: "web3",
    description:
      "DeFi staking dashboard with APY calculator and liquidity pool analytics.",
    longDescription: [
      "Staking portal for ERC-20 tokens with flexible lock periods.",
      "Real-time APY calculations with compound interest modeling.",
      "Portfolio tracking across multiple staking positions with P&L analysis.",
    ],
    badges: ["Web App", "DeFi · Staking"],
    stack: ["React", "Wagmi", "Viem", "Solidity", "The Graph"],
    sector: "Web3 DeFi",
    features: [
      {
        title: "Flexible Staking",
        desc: "Multiple lock periods with tiered reward multipliers.",
      },
      {
        title: "APY Calculator",
        desc: "Real-time compound interest modeling with historical projections.",
      },
      {
        title: "Portfolio Tracker",
        desc: "Unified view of all staking positions with P&L analysis.",
      },
    ],
    techHighlights: [
      "The Graph subgraph for indexed on-chain event queries",
      "Wagmi V2 hooks for type-safe contract interactions",
      "Viem transport layer for reliable RPC communication",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2022",
    category: "Web3",
  },
  {
    title: "DAO Governance UI",
    slug: "dao-governance",
    role: "Frontend Engineer · NonceBlox",
    color: "#6366F1",
    type: "web3",
    description:
      "On-chain governance interface with proposal creation, voting, and execution tracking.",
    longDescription: [
      "Snapshot-compatible governance UI for decentralized voting.",
      "Proposal lifecycle management from draft to execution.",
      "Delegate dashboard with voting power analytics and delegation flows.",
    ],
    badges: ["Web App", "Web3 · Governance"],
    stack: ["React", "Snapshot.js", "Ethers.js", "TypeScript"],
    sector: "Web3",
    features: [
      {
        title: "Proposal Flow",
        desc: "Complete lifecycle from draft, discussion, voting, to execution.",
      },
      {
        title: "Delegation",
        desc: "Token-weighted delegation with redelegate and undelegate flows.",
      },
      {
        title: "Analytics",
        desc: "Voting power distribution and participation rate tracking.",
      },
    ],
    techHighlights: [
      "Snapshot.js integration for gasless off-chain voting",
      "ERC-20 voting power snapshots with block-level precision",
      "Server-side proposal indexing for fast search and filtering",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2022",
    category: "Web3",
  },
  {
    title: "CryptoSwap DEX",
    slug: "cryptoswap-dex",
    role: "Senior Engineer · NonceBlox",
    color: "#EC4899",
    type: "web3",
    description:
      "Automated DEX with liquidity pool management and swap routing UI.",
    longDescription: [
      "Decentralized exchange frontend with multi-hop swap routing.",
      "Liquidity provision interface with impermanent loss calculator.",
      "Price charts with on-chain OHLCV data aggregation.",
    ],
    badges: ["Web App", "DeFi · DEX"],
    stack: ["React", "Uniswap SDK", "Web3.js", "D3.js"],
    sector: "Web3 DeFi",
    features: [
      {
        title: "Smart Routing",
        desc: "Multi-hop swap aggregation for optimal token exchange rates.",
      },
      {
        title: "LP Dashboard",
        desc: "Real-time impermanent loss tracking and fee accrual visualization.",
      },
      {
        title: "Price Charts",
        desc: "On-chain OHLCV data with TradingView-style charting.",
      },
    ],
    techHighlights: [
      "Uniswap V3 SDK integration for concentrated liquidity",
      "D3.js SVG charts for real-time price visualization",
      "Web Worker for off-thread swap route computation",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Dubai",
    year: "2023",
    category: "Web3",
  },
  {
    title: "KYC Verification Module",
    slug: "kyc-module",
    role: "Full-Stack Engineer · NonceBlox",
    color: "#0EA5E9",
    type: "web",
    description:
      "Identity verification module with document OCR and liveness detection.",
    longDescription: [
      "KYC pipeline with automated document verification and fraud detection.",
      "Liveness detection using face landmark analysis to prevent spoofing.",
      "Compliance dashboard for managing verification statuses and audit trails.",
    ],
    badges: ["Web App", "FinTech · Compliance"],
    stack: ["React", "Node.js", "Tesseract OCR", "TensorFlow.js", "PostgreSQL"],
    sector: "FinTech Enterprise",
    features: [
      {
        title: "Document OCR",
        desc: "Automatic extraction from IDs, passports, and utility bills.",
      },
      {
        title: "Liveness Check",
        desc: "Face landmark verification with anti-spoofing detection.",
      },
      {
        title: "Compliance Audit",
        desc: "Full audit trail with configurable compliance rule engine.",
      },
    ],
    techHighlights: [
      "Tesseract OCR with custom-trained models for ID extraction",
      "TensorFlow.js face mesh for real-time liveness verification",
      "PostgreSQL row-level security for multi-tenant data isolation",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2023",
    category: "FinTech",
  },
  {
    title: "Wallet SDK",
    slug: "wallet-sdk",
    role: "Senior Engineer · NonceBlox",
    color: "#8B5CF6",
    type: "web3",
    description:
      "Multi-chain wallet connection SDK with unified API for 300+ wallet providers.",
    longDescription: [
      "Reusable SDK for connecting to MetaMask, WalletConnect, Coinbase Wallet and 300+ providers.",
      "Unified transaction signing interface across EVM and non-EVM chains.",
      "React hooks library for seamless wallet state management in dApps.",
    ],
    badges: ["SDK · Library", "Web3 · Infrastructure"],
    stack: ["TypeScript", "WalletConnect", "Wagmi", "Viem", "ethers.js"],
    sector: "Web3 Infrastructure",
    features: [
      {
        title: "300+ Wallets",
        desc: "Single API surface for connecting any wallet provider.",
      },
      {
        title: "Multi-Chain",
        desc: "EVM, Solana, and Cosmos chain support from one SDK.",
      },
      {
        title: "React Hooks",
        desc: "Drop-in hooks for wallet state, balance, and transaction management.",
      },
    ],
    techHighlights: [
      "WalletConnect V2 with session persistence across page reloads",
      "Chain-agnostic transaction builder pattern",
      "Tree-shakeable ESM build for minimal bundle impact",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2023",
    category: "Web3",
  },

  // ──── FREELANCE & PERSONAL ────
  {
    title: "Expense Tracker Pro",
    slug: "expense-tracker-pro",
    role: "Independent · Freelance",
    color: "#10B981",
    type: "mobile",
    description:
      "Offline-first expense management app with category analytics and budget alerts.",
    longDescription: [
      "Personal finance app with offline-first architecture.",
      "Category-based analytics with monthly/weekly/daily spend visualization.",
      "Budget alerts with configurable thresholds.",
    ],
    badges: ["iOS · Android", "FinTech"],
    stack: ["React Native", "SQLite", "Chart.js", "React Navigation"],
    sector: "FinTech Mobile",
    features: [
      {
        title: "Offline-First",
        desc: "Full functionality without internet with SQLite backing.",
      },
      { title: "Category Analytics", desc: "Charts for spending patterns." },
      {
        title: "Budget Alerts",
        desc: "Configurable spending limits with push notification alerts.",
      },
    ],
    techHighlights: [
      "SQLite with WAL mode for concurrent read/write",
      "D3.js-based chart renderer",
      "Push notification scheduling for budget alerts",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2020",
    category: "FinTech",
  },
  {
    title: "RecipeBox",
    slug: "recipebox",
    role: "Independent · Personal",
    color: "#F97316",
    type: "mobile",
    description:
      "Recipe discovery app with AI-powered meal planning and shopping lists.",
    longDescription: [
      "Recipe search and discovery with personalized recommendations.",
      "AI-generated meal plans based on dietary preferences.",
      "Auto-generated shopping lists grouped by grocery store sections.",
    ],
    badges: ["iOS · Android", "Consumer"],
    stack: ["React Native", "Firebase", "Gemini API", "Expo"],
    sector: "Consumer Mobile",
    features: [
      { title: "AI Meal Plans", desc: "Personalized weekly meal plans." },
      {
        title: "Smart Shopping",
        desc: "Auto-generated grocery lists organized by store section.",
      },
      {
        title: "Recipe Discovery",
        desc: "Swipe-based discovery with cuisine filters.",
      },
    ],
    techHighlights: [
      "Gemini API for meal plan generation",
      "Firebase Firestore for recipe sync",
      "Expo Image for optimized photo rendering",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "B2C",
  },
  {
    title: "ChatApp RN",
    slug: "chatapp-rn",
    role: "Independent · Open Source",
    color: "#3B82F6",
    type: "mobile",
    description:
      "Real-time chat app with group messaging, image sharing, and typing indicators.",
    longDescription: [
      "Full-featured chat app with React Native and Firebase.",
      "Group messaging with admin controls, image sharing, and reactions.",
      "Typing indicators and online presence via Firebase RTDB.",
    ],
    badges: ["iOS · Android", "Social"],
    stack: ["React Native", "Firebase", "Cloud Messaging", "Expo"],
    sector: "Social Mobile",
    features: [
      {
        title: "Group Chat",
        desc: "Create groups with admin controls and member management.",
      },
      {
        title: "Media Sharing",
        desc: "Image compression and upload with progress.",
      },
      {
        title: "Presence System",
        desc: "Real-time typing indicators and online/offline status.",
      },
    ],
    techHighlights: [
      "Firebase RTDB for sub-100ms message delivery",
      "Cloud Messaging for background push notifications",
      "Image compression pipeline",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2019",
    category: "B2C",
  },
  {
    title: "TaskFlow",
    slug: "taskflow",
    role: "Independent · Personal",
    color: "#A855F7",
    type: "web",
    description:
      "Kanban-style project management with drag-and-drop and real-time collaboration.",
    longDescription: [
      "Trello-inspired project management with DnD cards.",
      "Real-time collaboration with cursor presence and live edits.",
      "Customizable board layouts with swimlanes.",
    ],
    badges: ["Web App", "Productivity"],
    stack: ["React", "DnD Kit", "Firebase", "Tailwind CSS"],
    sector: "SaaS Web",
    features: [
      { title: "Drag & Drop", desc: "Smooth card reordering with @dnd-kit." },
      {
        title: "Real-Time Sync",
        desc: "Firestore listeners for live multi-user collaboration.",
      },
      {
        title: "Custom Boards",
        desc: "Configurable columns, tags, and priority systems.",
      },
    ],
    techHighlights: [
      "@dnd-kit with sortable contexts",
      "Firestore compound queries for data partitioning",
      "CSS custom properties for theme switching",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "SaaS",
  },
  {
    title: "WeatherNow",
    slug: "weathernow",
    role: "Independent · Personal",
    color: "#06B6D4",
    type: "mobile",
    description:
      "Hyper-local weather app with animated conditions and 7-day forecasts.",
    longDescription: [
      "Weather app with location-based hyper-local forecasts.",
      "Animated conditions using Lottie.",
      "7-day forecast with hourly breakdown.",
    ],
    badges: ["iOS · Android", "Utility"],
    stack: ["React Native", "OpenWeather API", "Lottie", "Geolocation"],
    sector: "Utility Mobile",
    features: [
      {
        title: "Live Conditions",
        desc: "Real-time temperature, humidity, wind, UV.",
      },
      { title: "Animated UI", desc: "Lottie weather condition animations." },
      {
        title: "7-Day Forecast",
        desc: "Extended forecast with hourly curves.",
      },
    ],
    techHighlights: [
      "OpenWeather One Call API",
      "Lottie animations for 20+ condition types",
      "Battery-efficient location updates",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2019",
    category: "B2C",
  },
  {
    title: "E-Commerce RN",
    slug: "ecommerce-rn",
    role: "Independent · Freelance",
    color: "#F59E0B",
    type: "mobile",
    description:
      "Full e-commerce app with cart, payments, order tracking, and push notifications.",
    longDescription: [
      "Complete e-commerce solution for a local retailer.",
      "Cart with real-time inventory checks.",
      "Razorpay integration for secure payments.",
    ],
    badges: ["Android", "E-Commerce"],
    stack: ["React Native", "Redux", "Razorpay", "Node.js", "MongoDB"],
    sector: "E-Commerce Mobile",
    features: [
      {
        title: "Product Catalog",
        desc: "Searchable grid with category filters.",
      },
      { title: "Cart & Checkout", desc: "Persistent cart with coupon codes." },
      {
        title: "Order Tracking",
        desc: "Real-time order status with push notifications.",
      },
    ],
    techHighlights: [
      "Redux Toolkit with RTK Query",
      "Razorpay React Native SDK",
      "MongoDB aggregation pipelines",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2020",
    category: "B2C",
  },
  {
    title: "Portfolio V1",
    slug: "portfolio-v1",
    role: "Independent · Personal",
    color: "#C084FC",
    type: "web",
    description:
      "First portfolio built with React and Framer Motion animations.",
    longDescription: [
      "Original portfolio with project cards and scroll animations.",
      "Page transitions and responsive design.",
      "Built during the transition from PHP to modern JS.",
    ],
    badges: ["Web App", "Personal"],
    stack: ["React", "Framer Motion", "CSS Modules"],
    sector: "Web",
    features: [
      {
        title: "Scroll Animations",
        desc: "Intersection Observer-triggered reveals.",
      },
      {
        title: "Project Cards",
        desc: "Interactive showcase with hover effects.",
      },
      { title: "Responsive", desc: "Mobile-first layout with CSS Grid." },
    ],
    techHighlights: [
      "Framer Motion scroll-linked variants",
      "CSS Modules for scoped styling",
      "Animated page transitions",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2020",
    category: "Creative",
  },
  {
    title: "Portfolio V2",
    slug: "portfolio-v2",
    role: "Independent · Personal",
    color: "#F472B6",
    type: "web",
    description:
      "Second portfolio with Three.js 3D elements and GSAP cinematics.",
    longDescription: [
      "Upgraded portfolio with Three.js particle effects.",
      "GSAP ScrollTrigger for cinematic transitions.",
      "Dark theme with custom magnetic cursor.",
    ],
    badges: ["Web App", "Creative"],
    stack: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    sector: "Web Creative",
    features: [
      {
        title: "3D Particles",
        desc: "Three.js particles responding to mouse.",
      },
      { title: "GSAP Timeline", desc: "Scroll-triggered cinematic reveals." },
      { title: "Magnetic Cursor", desc: "Custom cursor with spring physics." },
    ],
    techHighlights: [
      "Three.js custom shaders",
      "GSAP ScrollTrigger with pinning",
      "Custom magnetic spring dynamics",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2023",
    category: "Creative",
  },

  // ──── EARLY CAREER: GOV & ENTERPRISE ────
  {
    title: "E-Governance Portal",
    slug: "e-governance-portal",
    role: "PHP Developer · TechProMind",
    color: "#2563EB",
    type: "web",
    description:
      "Citizen services portal for municipal corporation with document management.",
    longDescription: [
      "Digital portal for citizen services and document management.",
      "Online form submission with PDF generation.",
      "Admin dashboard for tracking applications.",
    ],
    badges: ["Web App", "GovTech"],
    stack: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    sector: "GovTech Web",
    features: [
      {
        title: "Document Portal",
        desc: "Upload, verify, and track government documents.",
      },
      { title: "Form Builder", desc: "Dynamic form generation for services." },
      {
        title: "Status Tracking",
        desc: "Real-time application status with SMS.",
      },
    ],
    techHighlights: [
      "PHP MVC architecture",
      "MySQL stored procedures",
      "jQuery AJAX forms",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2017",
    category: "GovTech",
  },
  {
    title: "Retailer Billing System",
    slug: "retailer-billing",
    role: "VB.NET Developer · TechProMind",
    color: "#059669",
    type: "desktop",
    description:
      "Desktop billing software for retail shops with inventory management.",
    longDescription: [
      "Windows application for small retailer billing and inventory.",
      "Barcode scanner integration for fast lookup.",
      "Sales reports with export to Excel.",
    ],
    badges: ["Desktop", "Retail · POS"],
    stack: ["VB.NET", "Oracle DB", "Crystal Reports", "WinForms"],
    sector: "Enterprise Desktop",
    features: [
      { title: "POS Billing", desc: "Fast checkout with barcode scan." },
      { title: "Inventory", desc: "Stock tracking with low-stock alerts." },
      { title: "Reports", desc: "Crystal Reports for sales analytics." },
    ],
    techHighlights: [
      "Oracle DB batch transactions",
      "Crystal Reports formatted output",
      "WinForms custom control library",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2017",
    category: "B2B",
  },
  {
    title: "GST Return Filing Tool",
    slug: "gst-return-tool",
    role: "Developer · TechProMind",
    color: "#DC2626",
    type: "web",
    description:
      "Automated GSTR-1 and GSTR-3B return filing with invoice matching.",
    longDescription: [
      "Specialized tool for automated GST return preparation.",
      "Invoice matching for input tax credit reconciliation.",
      "Bulk upload support for large transaction volumes.",
    ],
    badges: ["Web App", "GovTech · Tax"],
    stack: ["PHP", "MySQL", "jQuery", "GSTN API"],
    sector: "GovTech",
    features: [
      {
        title: "Auto-Fill",
        desc: "Pre-populated returns from uploaded invoices.",
      },
      { title: "ITC Matching", desc: "Input tax credit reconciliation." },
      {
        title: "Bulk Upload",
        desc: "CSV/Excel import for high-volume processing.",
      },
    ],
    techHighlights: [
      "GSTN API integration",
      "MySQL partitioning for millions of records",
      "Background job processing",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2018",
    category: "GovTech",
  },
  {
    title: "Aadhaar Verification Module",
    slug: "aadhaar-verification",
    role: "Developer · TechProMind",
    color: "#7C3AED",
    type: "web",
    description:
      "Aadhaar-based identity verification module for government applications.",
    longDescription: [
      "eKYC module for Aadhaar-based verification.",
      "OTP and biometric authentication flows.",
      "UIDAI API integration for real-time verification.",
    ],
    badges: ["Web Module", "GovTech · Identity"],
    stack: ["PHP", "UIDAI API", "MySQL", "OpenSSL"],
    sector: "GovTech",
    features: [
      { title: "Aadhaar OTP", desc: "OTP-based verification via UIDAI." },
      { title: "eKYC Flow", desc: "Electronic KYC with data extraction." },
      { title: "Audit Trail", desc: "Encrypted verification logs." },
    ],
    techHighlights: [
      "UIDAI API with PKI signing",
      "OpenSSL encrypted data handling",
      "Rate limiting and retry logic",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2018",
    category: "GovTech",
  },
  {
    title: "Municipality Tax Portal",
    slug: "municipality-tax",
    role: "Developer · TechProMind",
    color: "#0D9488",
    type: "web",
    description:
      "Online property tax payment portal for municipal corporations.",
    longDescription: [
      "Property tax calculation and online payment.",
      "Ward-wise property assessment.",
      "Receipt generation and payment history.",
    ],
    badges: ["Web App", "GovTech · Tax"],
    stack: ["PHP", "Oracle DB", "Payment Gateway", "jQuery"],
    sector: "GovTech",
    features: [
      { title: "Tax Calculator", desc: "Property tax estimation by ward." },
      { title: "Online Payment", desc: "Secure payment gateway." },
      { title: "Receipts", desc: "Digital tax receipts with QR verification." },
    ],
    techHighlights: [
      "Oracle DB stored procedures",
      "Payment gateway callbacks",
      "PDF receipt with QR code",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2018",
    category: "GovTech",
  },
  {
    title: "School ERP Android",
    slug: "school-erp-android",
    role: "Android Developer · TechProMind",
    color: "#F59E0B",
    type: "mobile",
    description:
      "School management app with attendance, grades, and parent communication.",
    longDescription: [
      "Android app for school administration with multi-role access.",
      "Digital attendance marking.",
      "Parent portal for grades and messaging.",
    ],
    badges: ["Android", "EdTech"],
    stack: ["Java", "Kotlin", "Firebase", "Android SDK"],
    sector: "EdTech Mobile",
    features: [
      {
        title: "Attendance",
        desc: "Digital attendance with student photo verification.",
      },
      { title: "Grades", desc: "Subject-wise grade entry with report cards." },
      {
        title: "Parent Portal",
        desc: "Push notifications for parent-teacher communication.",
      },
    ],
    techHighlights: [
      "Kotlin coroutines for async",
      "Firebase Cloud Messaging",
      "Room database for offline",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2018",
    category: "B2B",
  },
  {
    title: "Hospital OPD System",
    slug: "hospital-opd",
    role: "Developer · TechProMind",
    color: "#EF4444",
    type: "web",
    description:
      "Outpatient department management with scheduling and digital prescriptions.",
    longDescription: [
      "OPD management for multi-specialty hospitals.",
      "Appointment scheduling with queue management.",
      "Digital prescription with drug interaction checks.",
    ],
    badges: ["Web App", "HealthTech"],
    stack: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    sector: "HealthTech",
    features: [
      { title: "Scheduling", desc: "Doctor-wise appointment calendar." },
      {
        title: "Queue System",
        desc: "Real-time patient queue with wait times.",
      },
      {
        title: "Rx Digital",
        desc: "Digital prescription pad with drug database.",
      },
    ],
    techHighlights: [
      "MySQL event scheduler for reminders",
      "jQuery DataTables for patient records",
      "Print-optimized CSS for prescriptions",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2017",
    category: "HealthTech",
  },

  // ──── RECENT AI/ML & EXPERIMENTAL ────
  {
    title: "AI Code Reviewer",
    slug: "ai-code-reviewer",
    role: "Founder · Independent Build",
    color: "#6366F1",
    type: "web",
    description:
      "AI-powered code review tool that analyzes PRs for bugs, security issues, and patterns.",
    longDescription: [
      "Automated code review bot powered by Gemini API.",
      "Scans pull requests for security vulnerabilities and code smells.",
      "Provides actionable suggestions with code snippets.",
    ],
    badges: ["Web App", "AI/ML · DevTools"],
    stack: ["Next.js", "Gemini API", "GitHub API", "TypeScript"],
    sector: "AI/ML DevTools",
    features: [
      { title: "PR Analysis", desc: "Automated scan of PR diffs." },
      {
        title: "Security Scan",
        desc: "SQLi, XSS, and auth vulnerability detection.",
      },
      { title: "Best Practices", desc: "Style and pattern suggestions." },
    ],
    techHighlights: [
      "GitHub API webhook integration",
      "Gemini API structured output",
      "Next.js API routes for serverless webhooks",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2025",
    category: "SaaS",
  },
  {
    title: "RAG Document Chat",
    slug: "rag-document-chat",
    role: "Founder · Independent Build",
    color: "#8B5CF6",
    type: "web",
    description:
      "Chat with your documents — PDF, DOCX, and spreadsheet Q&A powered by RAG.",
    longDescription: [
      "Upload documents and chat with them using RAG.",
      "Supports PDF, DOCX, XLSX, CSV with auto-chunking.",
      "Source attribution with highlighted passages.",
    ],
    badges: ["Web App", "AI/ML · RAG"],
    stack: ["Next.js", "Gemini API", "Pinecone", "LangChain"],
    sector: "AI/ML SaaS",
    features: [
      { title: "Multi-Format", desc: "Upload PDF, DOCX, XLSX, CSV for Q&A." },
      {
        title: "Source Attribution",
        desc: "Every answer cites exact passages.",
      },
      {
        title: "Conversational",
        desc: "Multi-turn conversations with context memory.",
      },
    ],
    techHighlights: [
      "Pinecone vector database for similarity search",
      "LangChain recursive character splitter",
      "Gemini API streaming for real-time generation",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2025",
    category: "SaaS",
  },
  {
    title: "AI Image Generator",
    slug: "ai-image-gen",
    role: "Independent · Experiment",
    color: "#EC4899",
    type: "web",
    description:
      "Text-to-image generator with style presets, inpainting, and gallery management.",
    longDescription: [
      "AI image generation with prompt engineering presets.",
      "Inpainting and outpainting for image editing.",
      "Gallery with tagging and collection management.",
    ],
    badges: ["Web App", "AI/ML · Creative"],
    stack: ["React", "Stable Diffusion API", "Cloudflare R2", "Tailwind CSS"],
    sector: "AI/ML Creative",
    features: [
      {
        title: "Text-to-Image",
        desc: "Generate images from prompts with style presets.",
      },
      { title: "Inpainting", desc: "Edit regions of images with masking." },
      { title: "Gallery", desc: "Save, tag, and organize generated images." },
    ],
    techHighlights: [
      "Stable Diffusion API with negative prompts",
      "Cloudflare R2 for image storage",
      "Canvas API for mask drawing",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "Creative",
  },
  {
    title: "Voice Notes AI",
    slug: "voice-notes-ai",
    role: "Independent · Experiment",
    color: "#F97316",
    type: "mobile",
    description:
      "Voice memo app with AI transcription, summarization, and action item extraction.",
    longDescription: [
      "Record voice memos with instant AI transcription.",
      "Automatic summarization into key bullet points.",
      "Action item extraction with calendar integration.",
    ],
    badges: ["iOS · Android", "AI/ML · Productivity"],
    stack: ["React Native", "Whisper API", "Gemini API", "Expo AV"],
    sector: "AI/ML Mobile",
    features: [
      { title: "Auto Transcribe", desc: "Voice-to-text via Whisper API." },
      { title: "Smart Summarize", desc: "AI-generated bullet summaries." },
      {
        title: "Action Items",
        desc: "Extracted to-dos with deadline detection.",
      },
    ],
    techHighlights: [
      "Whisper API for multilingual speech recognition",
      "Gemini API for structured extraction",
      "Expo AV for high-quality audio recording",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2025",
    category: "SaaS",
  },
  {
    title: "Motion Coach",
    slug: "motion-coach",
    role: "Founder · Independent Build",
    color: "#10B981",
    type: "mobile",
    description:
      "On-device AI motion analysis using BlazePose for real-time kinematics coaching.",
    longDescription: [
      "Real-time kinematics analysis using MediaPipe BlazePose on-device.",
      "Exercise form correction with joint angle tracking.",
      "Rhythm analysis for dance and martial arts.",
    ],
    badges: ["iOS · Android", "AI/ML · Fitness"],
    stack: ["React Native", "MediaPipe", "TensorFlow Lite", "C++ TurboModules"],
    sector: "AI/ML Mobile",
    features: [
      {
        title: "Pose Detection",
        desc: "33-point body landmark tracking at 30fps.",
      },
      {
        title: "Form Correction",
        desc: "Joint angle analysis with visual feedback.",
      },
      { title: "Rep Counting", desc: "Automatic exercise rep counting." },
    ],
    techHighlights: [
      "MediaPipe BlazePose via C++ TurboModule",
      "TensorFlow Lite with GPU delegate",
      "Kalman filter for smooth tracking",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "HealthTech",
  },
  {
    title: "AI Security Firewall",
    slug: "ai-firewall",
    role: "Founder · Independent Build",
    color: "#EF4444",
    type: "mobile",
    description:
      "On-device AI notification classifier using llama.rn for spam and threat detection.",
    longDescription: [
      "AI-powered notification security running entirely on-device.",
      "llama.rn inference for classifying notification content.",
      "Pattern learning that adapts to user behavior.",
    ],
    badges: ["iOS · Android", "AI/ML · Security"],
    stack: ["React Native", "llama.rn", "SQLite", "C++ TurboModules"],
    sector: "AI/ML Security",
    features: [
      {
        title: "Notification Scan",
        desc: "Real-time classification of push notifications.",
      },
      {
        title: "On-Device AI",
        desc: "llama.rn with zero cloud data exposure.",
      },
      {
        title: "Adaptive Learning",
        desc: "User behavior improves classification.",
      },
    ],
    techHighlights: [
      "llama.rn with quantized GGUF models",
      "SQLite FTS5 for notification search",
      "C++ TurboModules for native notification access",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "SaaS",
  },
  {
    title: "Markdown Editor Pro",
    slug: "markdown-editor",
    role: "Independent · Personal",
    color: "#64748B",
    type: "web",
    description:
      "Distraction-free markdown editor with live preview and vim keybindings.",
    longDescription: [
      "Minimal markdown editor focused on writing.",
      "Split-pane live preview with syntax highlighting.",
      "Export to PDF, HTML, and DOCX.",
    ],
    badges: ["Web App", "DevTools"],
    stack: ["React", "CodeMirror 6", "Marked.js", "Tailwind CSS"],
    sector: "DevTools Web",
    features: [
      { title: "Live Preview", desc: "Side-by-side editing and preview." },
      { title: "Vim Mode", desc: "Optional vim keybindings." },
      { title: "Multi-Export", desc: "PDF, HTML, and DOCX export." },
    ],
    techHighlights: [
      "CodeMirror 6 with custom markdown support",
      "Marked.js with sanitized HTML",
      "HTML-to-PDF conversion",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "SaaS",
  },
  {
    title: "API Dashboard",
    slug: "api-dashboard",
    role: "Independent · Personal",
    color: "#3B82F6",
    type: "web",
    description:
      "Real-time API monitoring with latency tracking, error rates, and alerting.",
    longDescription: [
      "API health monitoring with real-time metrics.",
      "Latency percentile tracking (p50, p95, p99).",
      "Configurable alerting rules with Slack notifications.",
    ],
    badges: ["Web App", "DevOps"],
    stack: ["React", "Chart.js", "WebSocket", "Node.js", "Redis"],
    sector: "DevOps Web",
    features: [
      {
        title: "Real-Time Metrics",
        desc: "Live request rate and error charts.",
      },
      { title: "Percentile Analysis", desc: "p50/p95/p99 latency tracking." },
      {
        title: "Alert Rules",
        desc: "Configurable thresholds with notifications.",
      },
    ],
    techHighlights: [
      "Redis time-series for metric storage",
      "WebSocket for live updates",
      "Chart.js with streaming data",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "SaaS",
  },
  {
    title: "Component Library",
    slug: "component-library",
    role: "Independent · Open Source",
    color: "#A855F7",
    type: "web",
    description:
      "Reusable React component library with Storybook docs and theme system.",
    longDescription: [
      "Design system with 40+ reusable React components.",
      "Storybook with interactive props exploration.",
      "CSS custom properties-based theming.",
    ],
    badges: ["Library", "Design System"],
    stack: ["React", "Storybook", "TypeScript", "CSS Custom Properties"],
    sector: "DevTools",
    features: [
      {
        title: "40+ Components",
        desc: "Buttons, forms, modals, tables, and layouts.",
      },
      {
        title: "Storybook Docs",
        desc: "Interactive docs with live prop editing.",
      },
      {
        title: "Theme System",
        desc: "CSS custom properties for runtime theming.",
      },
    ],
    techHighlights: [
      "TypeScript polymorphic components",
      "Storybook 7 auto-documentation",
      "Tree-shakeable ESM build",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2023",
    category: "SaaS",
  },
  {
    title: "RN Boilerplate",
    slug: "rn-boilerplate",
    role: "Independent · Open Source",
    color: "#06B6D4",
    type: "mobile",
    description:
      "Production-ready React Native starter with auth, navigation, state management, CI/CD.",
    longDescription: [
      "Opinionated RN boilerplate with everything pre-configured.",
      "Auth flow with secure token storage and biometric login.",
      "Fastlane + GitHub Actions CI/CD.",
    ],
    badges: ["iOS · Android", "DevTools"],
    stack: ["React Native", "Redux Toolkit", "React Navigation", "Fastlane"],
    sector: "DevTools Mobile",
    features: [
      {
        title: "Auth Ready",
        desc: "JWT + refresh token with Keychain storage.",
      },
      { title: "Navigation", desc: "Tab, stack, drawer with deep links." },
      { title: "CI/CD", desc: "Fastlane + GitHub Actions automated builds." },
    ],
    techHighlights: [
      "Redux Toolkit with RTK Query",
      "React Navigation V6 typed params",
      "Fastlane with match for iOS certs",
    ],
    links: [{ text: "GitHub", url: "https://github.com/devamitch" }],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2023",
    category: "SaaS",
  },
  {
    title: "CLI Toolkit",
    slug: "cli-toolkit",
    role: "Independent · Open Source",
    color: "#22C55E",
    type: "desktop",
    description:
      "Node.js CLI tools for project scaffolding and code generation.",
    longDescription: [
      "Collection of CLI utilities for automating dev tasks.",
      "Project scaffolding with template selection.",
      "Code generation for components and routes.",
    ],
    badges: ["CLI · Node.js", "DevTools"],
    stack: ["Node.js", "Commander.js", "Inquirer.js", "Handlebars"],
    sector: "DevTools",
    features: [
      { title: "Scaffolding", desc: "Interactive project creation." },
      { title: "Code Gen", desc: "Generate components from templates." },
      { title: "Automation", desc: "Batch operations for file management." },
    ],
    techHighlights: [
      "Commander.js subcommand pattern",
      "Handlebars template engine",
      "Inquirer.js interactive prompts",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "SaaS",
  },
  {
    title: "Food Shala",
    slug: "food-shala",
    role: "Senior Engineer · NonceBlox",
    color: "#F97316",
    type: "mobile",
    description:
      "Food delivery app with restaurant discovery, real-time tracking, and rider management.",
    longDescription: [
      "Food delivery platform connecting restaurants with customers.",
      "Real-time order tracking with rider GPS.",
      "Restaurant management portal with analytics.",
    ],
    badges: ["iOS · Android", "FoodTech"],
    stack: ["React Native", "Socket.io", "Node.js", "MongoDB", "Google Maps"],
    sector: "FoodTech Mobile",
    features: [
      {
        title: "Discovery",
        desc: "Proximity-ranked restaurants with cuisine filters.",
      },
      { title: "Live Tracking", desc: "GPS-based rider tracking with ETA." },
      {
        title: "Restaurant Portal",
        desc: "Menu management and revenue analytics.",
      },
    ],
    techHighlights: [
      "Socket.io for rider location broadcasting",
      "Google Maps SDK with custom markers",
      "MongoDB geospatial queries",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2022",
    category: "B2C",
  },
  {
    title: "Blog Publishing Platform",
    slug: "blog-platform",
    role: "Independent · Personal",
    color: "#8B5CF6",
    type: "web",
    description:
      "Medium-inspired blogging platform with rich text editor and SEO optimization.",
    longDescription: [
      "Full-featured blogging platform with Tiptap editor.",
      "SEO optimization with auto-generated meta tags.",
      "Per-article analytics dashboard.",
    ],
    badges: ["Web App", "Content"],
    stack: ["Next.js", "Tiptap", "PostgreSQL", "Vercel"],
    sector: "Web Content",
    features: [
      {
        title: "Rich Editor",
        desc: "Tiptap-based with embeds and code blocks.",
      },
      { title: "SEO Engine", desc: "Auto meta tags, OG images, sitemap." },
      { title: "Analytics", desc: "View counts, read time, and scroll depth." },
    ],
    techHighlights: [
      "Tiptap V2 custom extensions",
      "PostgreSQL full-text search",
      "Next.js ISR with revalidation",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "SaaS",
  },
  {
    title: "URL Shortener",
    slug: "url-shortener",
    role: "Independent · Utility",
    color: "#0EA5E9",
    type: "web",
    description:
      "Custom URL shortener with click analytics and QR code generation.",
    longDescription: [
      "Custom short URL service with branded domains.",
      "Click analytics with geolocation and device tracking.",
      "QR code generation for every link.",
    ],
    badges: ["Web App", "Utility"],
    stack: ["Next.js", "Redis", "PostgreSQL", "Chart.js"],
    sector: "SaaS Web",
    features: [
      { title: "Short URLs", desc: "Custom aliases with vanity domains." },
      { title: "Click Analytics", desc: "Geo and device-level tracking." },
      { title: "QR Codes", desc: "Auto-generated QR for every link." },
    ],
    techHighlights: [
      "Redis for O(1) URL resolution",
      "PostgreSQL time-series analytics",
      "Next.js middleware for edge redirects",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "SaaS",
  },
  {
    title: "Invoice Generator",
    slug: "invoice-generator",
    role: "Independent · Freelance Tool",
    color: "#34D399",
    type: "web",
    description:
      "Professional invoice generator with templates, recurring billing, and PDF export.",
    longDescription: [
      "Invoice creation for freelancers and small businesses.",
      "Multiple professional templates with brand customization.",
      "Recurring invoice scheduling with email automation.",
    ],
    badges: ["Web App", "FinTech"],
    stack: ["React", "Puppeteer", "Node.js", "MongoDB"],
    sector: "FinTech Web",
    features: [
      { title: "Templates", desc: "5+ professional invoice templates." },
      { title: "Recurring", desc: "Automated recurring invoice generation." },
      { title: "PDF Export", desc: "High-quality PDF with Puppeteer." },
    ],
    techHighlights: [
      "Puppeteer for pixel-perfect PDF rendering",
      "MongoDB for client/invoice history",
      "Node.js cron for invoice scheduling",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2021",
    category: "SaaS",
  },
  {
    title: "NewsDigest",
    slug: "newsdigest",
    role: "Independent · Personal",
    color: "#64748B",
    type: "mobile",
    description:
      "Aggregated news reader with category filters, bookmarks, and offline reading.",
    longDescription: [
      "News aggregator from multiple RSS and API sources.",
      "Category-based filtering with personalized feed.",
      "Offline reading mode with article caching.",
    ],
    badges: ["Android", "News"],
    stack: ["React Native", "RSS Parser", "AsyncStorage", "React Navigation"],
    sector: "Media Mobile",
    features: [
      { title: "Multi-Source", desc: "50+ news sources with deduplication." },
      { title: "Offline Mode", desc: "Save articles for offline reading." },
      {
        title: "Personalized Feed",
        desc: "Category preferences and source ranking.",
      },
    ],
    techHighlights: [
      "RSS/Atom parser with HTML sanitization",
      "AsyncStorage LRU cache",
      "FlatList with virtual windowing",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2019",
    category: "B2C",
  },
  {
    title: "FitnessPal Clone",
    slug: "fitnesspal-clone",
    role: "Independent · Learning Project",
    color: "#22C55E",
    type: "mobile",
    description:
      "Calorie tracking app with barcode scanner and macro-nutrient breakdown.",
    longDescription: [
      "Calorie counting app built as a React Native deep-dive.",
      "Barcode scanner for instant food lookup.",
      "Macro tracking with visualization.",
    ],
    badges: ["Android", "Health"],
    stack: ["React Native", "Camera API", "SQLite", "Reanimated"],
    sector: "Health Mobile",
    features: [
      {
        title: "Barcode Scan",
        desc: "Instant food lookup via camera barcode.",
      },
      {
        title: "Macro Tracking",
        desc: "Protein, carbs, fat breakdown with targets.",
      },
      { title: "Meal Logging", desc: "Quick-add with search and history." },
    ],
    techHighlights: [
      "Native camera barcode detection",
      "SQLite offline food database",
      "Reanimated 3 chart animations",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2019",
    category: "B2C",
  },

  // ──── REAL GITHUB REPOS & LINKEDIN PROJECTS ────
  {
    title: "NexVault",
    slug: "nexvault",
    role: "Founder · Independent Build",
    color: "#7C3AED",
    type: "mobile",
    description:
      "Secure digital vault for credentials, documents, and sensitive data with biometric access.",
    longDescription: [
      "Privacy-first vault app with biometric authentication and AES encryption.",
      "Secure credential and document storage with zero-knowledge architecture.",
      "Built with React Native and TypeScript for cross-platform deployment.",
    ],
    badges: ["iOS · Android", "Security · Privacy"],
    stack: ["React Native", "TypeScript", "Keychain", "AES-256", "Biometrics"],
    sector: "Security Mobile",
    features: [
      {
        title: "Biometric Lock",
        desc: "FaceID/TouchID with Keychain-backed secure storage.",
      },
      {
        title: "Zero-Knowledge",
        desc: "All data encrypted client-side before persistence.",
      },
      {
        title: "Document Vault",
        desc: "Store and retrieve sensitive documents securely.",
      },
    ],
    techHighlights: [
      "AES-256-GCM encryption for all stored data",
      "Keychain/Keystore for biometric-secured key management",
      "Offline-first architecture with encrypted SQLite",
    ],
    links: [{ text: "GitHub", url: "https://github.com/devamitch/nexvault" }],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "SaaS",
  },
  {
    title: "Bloom Parents",
    slug: "bloom-parents",
    role: "Founder · Independent Build",
    color: "#EC4899",
    type: "web",
    description:
      "Parenting companion platform — guided activities, milestone tracking, and community support.",
    longDescription: [
      "Digital parenting assistant with age-appropriate activity recommendations.",
      "Milestone tracking with developmental insights.",
      "Community features for parent-to-parent support.",
    ],
    badges: ["Web App", "HealthTech · Parenting"],
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    sector: "HealthTech Web",
    features: [
      {
        title: "Activity Guide",
        desc: "Age-appropriate activities with developmental context.",
      },
      {
        title: "Milestone Tracker",
        desc: "Track child development milestones with visual progress.",
      },
      { title: "Community", desc: "Connect with parents in similar stages." },
    ],
    techHighlights: [
      "Firebase Firestore for real-time community feeds",
      "Tailwind CSS v4 with custom design system",
      "PWA with offline activity access",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/devamitch/bloom-parents" },
    ],
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "HealthTech",
  },
  {
    title: "BookShelf",
    slug: "bookshelf",
    role: "Founder · Independent Build",
    color: "#8B5CF6",
    type: "web",
    description:
      "Digital book profile and reading tracker with review system and reading analytics.",
    longDescription: [
      "Personal reading tracker with book profiles and reviews.",
      "Reading analytics with streak tracking and genre distribution.",
      "Built with TypeScript and modern web stack.",
    ],
    badges: ["Web App", "Productivity"],
    stack: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    sector: "Web Productivity",
    features: [
      {
        title: "Book Profiles",
        desc: "Detailed book entries with notes and rating.",
      },
      {
        title: "Reading Streaks",
        desc: "Daily reading tracking with streak motivation.",
      },
      {
        title: "Analytics",
        desc: "Genre distribution and reading speed insights.",
      },
    ],
    techHighlights: [
      "Firebase for real-time book sync across devices",
      "TypeScript strict mode throughout",
      "Responsive design with Tailwind CSS",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/devamitch/book-profile" },
    ],
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "SaaS",
  },
  {
    title: "Aura Workflow Studio",
    slug: "aura-workflow-studio",
    role: "Founder · Independent Build",
    color: "#6366F1",
    type: "web",
    description:
      "Visual AI workflow builder — drag-and-drop LLM chains, RAG nodes, and agent orchestration.",
    longDescription: [
      "Full-stack AI workflow platform with visual node editor.",
      "Frontend in TypeScript/React with drag-and-drop canvas for building LLM pipelines.",
      "Python FastAPI backend for executing AI agent workflows in real-time.",
    ],
    badges: ["Web App", "AI/ML · DevTools"],
    stack: ["TypeScript", "React", "Python", "FastAPI", "LangChain"],
    sector: "AI/ML DevTools",
    features: [
      {
        title: "Node Editor",
        desc: "Drag-and-drop canvas for building AI workflows visually.",
      },
      {
        title: "Agent Orchestration",
        desc: "Chain LLMs, RAG, and tools into executable pipelines.",
      },
      {
        title: "Live Execution",
        desc: "Run workflows in real-time with step-by-step output.",
      },
    ],
    techHighlights: [
      "React Flow for node-based visual editor",
      "Python FastAPI backend with async execution engine",
      "LangChain integration for composable AI chains",
    ],
    links: [
      {
        text: "GitHub (Frontend)",
        url: "https://github.com/devamitch/aura-workflow-studio",
      },
      {
        text: "GitHub (Backend)",
        url: "https://github.com/devamitch/aura-workflow-studio-backend",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2026",
    category: "SaaS",
  },
  {
    title: "CourseHub",
    slug: "coursehub",
    role: "Independent · Full-Stack",
    color: "#3B82F6",
    type: "web",
    description:
      "MERN stack course management platform — CRUD, search, likes, and category filtering.",
    longDescription: [
      "Full-stack course management built with MongoDB, Express, React, Node.",
      "Add, edit, search, like, and delete courses with real-time updates.",
      "RESTful API with JWT authentication and role-based access.",
    ],
    badges: ["Web App", "EdTech"],
    stack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    sector: "EdTech Web",
    features: [
      {
        title: "Course CRUD",
        desc: "Full create, read, update, delete with validation.",
      },
      {
        title: "Search & Filter",
        desc: "Real-time search with category filtering.",
      },
      {
        title: "Social Features",
        desc: "Like courses and share with the community.",
      },
    ],
    techHighlights: [
      "MongoDB with Mongoose ODM",
      "Express REST API with JWT auth",
      "React with Redux state management",
    ],
    links: [{ text: "GitHub", url: "https://github.com/techamit95ch/Courses" }],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "SaaS",
  },
  {
    title: "NoteStream",
    slug: "notestream",
    role: "Independent · Full-Stack",
    color: "#10B981",
    type: "web",
    description:
      "MERN stack note distribution system — classroom management with teacher/student roles and admin panel.",
    longDescription: [
      "Note distribution platform with role-based access: Admin, Teacher, Student.",
      "Admin manages teacher accounts. Teachers create classrooms and distribute notes.",
      "Students request access to classrooms with email verification.",
    ],
    badges: ["Web App", "EdTech"],
    stack: ["React", "Node.js", "MongoDB", "Express"],
    sector: "EdTech Web",
    features: [
      {
        title: "Role-Based Access",
        desc: "Admin, Teacher, and Student with distinct permissions.",
      },
      {
        title: "Classroom System",
        desc: "Teachers create classrooms and control note distribution.",
      },
      {
        title: "Access Control",
        desc: "Students request and receive classroom access from teachers.",
      },
    ],
    techHighlights: [
      "MongoDB with role-based document queries",
      "Express middleware for JWT role verification",
      "React with protected route patterns",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/notesapp" },
    ],
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "SaaS",
  },
  {
    title: "ArticleForge",
    slug: "articleforge",
    role: "Independent · Full-Stack",
    color: "#EF4444",
    type: "web",
    description:
      "Blog publishing platform built with Laravel & Vue.js — full CRUD, comments, ratings, likes, and sharing.",
    longDescription: [
      "Complete blog CMS with Laravel backend and Vue.js frontend.",
      "User management, article CRUD, commenting, and rating system.",
      "Comment ranking algorithm with social sharing integration.",
    ],
    badges: ["Web App", "Content · Publishing"],
    stack: ["Laravel", "Vue.js", "MySQL", "PHP", "Faker"],
    sector: "Web Content",
    features: [
      {
        title: "Full CMS",
        desc: "Create, edit, delete articles with rich text.",
      },
      {
        title: "Social Layer",
        desc: "Like, share, comment, and rate articles.",
      },
      {
        title: "Comment Ranking",
        desc: "Algorithmic comment ordering by engagement.",
      },
    ],
    techHighlights: [
      "Laravel Eloquent ORM with seed data via Faker",
      "Vue.js SPA with Laravel API backend",
      "MySQL with optimized query patterns",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/laravelvueone" },
    ],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "SaaS",
  },
  {
    title: "DataViz Campus",
    slug: "dataviz-campus",
    role: "Independent · Full-Stack",
    color: "#F59E0B",
    type: "web",
    description:
      "College & student analytics dashboard — React, Redux, Node.js with Ant Design + Material UI.",
    longDescription: [
      "Data visualization dashboard for college and student analytics.",
      "Charts, tables, and interactive components with Ant Design and Material UI.",
      "RESTful API with mock data generation via Faker.",
    ],
    badges: ["Web App", "EdTech · Analytics"],
    stack: ["React", "Redux", "Node.js", "Ant Design", "Material UI"],
    sector: "EdTech Web",
    features: [
      {
        title: "Data Charts",
        desc: "Interactive charts for student performance and college metrics.",
      },
      {
        title: "Dual UI Framework",
        desc: "Ant Design + Material UI component library integration.",
      },
      {
        title: "Mock API",
        desc: "Faker-powered backend for realistic demo data.",
      },
    ],
    techHighlights: [
      "React with Redux for centralized state",
      "Ant Design + Material UI dual framework usage",
      "Node.js API with Faker for demo data",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/collegeData" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "SaaS",
  },
  {
    title: "CryptoVerse",
    slug: "cryptoverse",
    role: "Independent · Personal",
    color: "#F97316",
    type: "web",
    description:
      "Cryptocurrency tracker with live prices, market data, and crypto news aggregation via RapidAPI.",
    longDescription: [
      "Real-time cryptocurrency dashboard with price tracking.",
      "Market cap, volume, and ranking data from RapidAPI Coinranking.",
      "Crypto news aggregation with Bing News API integration.",
    ],
    badges: ["Web App", "FinTech · Crypto"],
    stack: ["React", "Redux Toolkit", "RapidAPI", "Ant Design", "Chart.js"],
    sector: "FinTech Web",
    features: [
      {
        title: "Live Prices",
        desc: "Real-time cryptocurrency price tracking with charts.",
      },
      {
        title: "Market Data",
        desc: "Market cap, volume, and global crypto statistics.",
      },
      {
        title: "News Feed",
        desc: "Aggregated crypto news from multiple sources.",
      },
    ],
    techHighlights: [
      "Redux Toolkit with RTK Query for API caching",
      "RapidAPI Coinranking for live market data",
      "Chart.js for interactive price history charts",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/cryptoverse" },
    ],
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "FinTech",
  },
  {
    title: "ShopNext",
    slug: "shopnext",
    role: "Independent · Full-Stack",
    color: "#22C55E",
    type: "web",
    description:
      "E-commerce storefront built with Next.js — SSR product catalog, cart, and checkout flow.",
    longDescription: [
      "Server-side rendered e-commerce application with Next.js.",
      "Product catalog with search, filtering, and category navigation.",
      "Cart management with session persistence and checkout flow.",
    ],
    badges: ["Web App", "E-Commerce"],
    stack: ["Next.js", "React", "CSS Modules", "Stripe"],
    sector: "E-Commerce Web",
    features: [
      { title: "SSR Catalog", desc: "Server-rendered product pages for SEO." },
      {
        title: "Cart System",
        desc: "Persistent cart with quantity management.",
      },
      {
        title: "Checkout",
        desc: "Complete checkout flow with payment integration.",
      },
    ],
    techHighlights: [
      "Next.js getServerSideProps for product data fetching",
      "CSS Modules for scoped component styling",
      "Session-based cart persistence",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/ecommerce" },
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2020",
    category: "B2C",
  },
  {
    title: "PyMart",
    slug: "pymart",
    role: "Independent · Full-Stack",
    color: "#0EA5E9",
    type: "web",
    description:
      "E-commerce platform built with Django — full product lifecycle, cart, and user management.",
    longDescription: [
      "Complete e-commerce built with Django framework.",
      "Product CRUD, cart management, and user registration.",
      "Django ORM with PostgreSQL for data management.",
    ],
    badges: ["Web App", "E-Commerce"],
    stack: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    sector: "E-Commerce Web",
    features: [
      { title: "Product Management", desc: "Full CRUD with image uploads." },
      {
        title: "User Auth",
        desc: "Registration, login, and profile management.",
      },
      {
        title: "Shopping Cart",
        desc: "Add to cart, update quantities, and checkout.",
      },
    ],
    techHighlights: [
      "Django ORM with PostgreSQL",
      "Django auth with session management",
      "Bootstrap responsive templates",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "MerchantOS",
    slug: "merchantos",
    role: "Independent · Full-Stack",
    color: "#A855F7",
    type: "web",
    description:
      "Animated merchant management portal — product catalog, cart system, and registration flow.",
    longDescription: [
      "Merchant platform with smooth page transitions and animations.",
      "Login, registration, product catalog, and cart management.",
      "Built with React and modern animation libraries.",
    ],
    badges: ["Web App", "E-Commerce"],
    stack: ["React", "JavaScript", "CSS Animations", "Node.js"],
    sector: "E-Commerce Web",
    features: [
      {
        title: "Animated UI",
        desc: "Smooth page transitions and micro-animations.",
      },
      {
        title: "Product Catalog",
        desc: "Browse, search, and view product details.",
      },
      {
        title: "Cart System",
        desc: "Add to cart, view cart, and manage quantities.",
      },
    ],
    techHighlights: [
      "CSS keyframe animations for page transitions",
      "React Router with animated route changes",
      "Context API for cart state management",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/techamit95ch/merchantplatform",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "CineScope",
    slug: "cinescope",
    role: "Independent · Personal",
    color: "#DC2626",
    type: "web",
    description:
      "Movie discovery app with TheMovieDB API — search, trending, and watchlist with Redux Saga.",
    longDescription: [
      "Movie frontend using TheMovieDB API with reactive state management.",
      "Trending movies, search, and detailed movie information pages.",
      "Redux Saga for complex async data fetching patterns.",
    ],
    badges: ["Web App", "Entertainment"],
    stack: ["React", "Redux Saga", "TMDB API", "CSS"],
    sector: "Web Entertainment",
    features: [
      {
        title: "Trending Films",
        desc: "Discover trending and popular movies.",
      },
      { title: "Search", desc: "Real-time movie search with filtering." },
      {
        title: "Movie Details",
        desc: "Cast, reviews, and similar movie recommendations.",
      },
    ],
    techHighlights: [
      "Redux Saga for complex async flow management",
      "TMDB API with pagination and search",
      "CSS Grid for responsive movie card layouts",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/techamit95ch/moviesApp_ICLEAR",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "ReadShelf RN",
    slug: "readshelf-rn",
    role: "Independent · Mobile",
    color: "#14B8A6",
    type: "mobile",
    description:
      "React Native book management — Firebase CRUD, author-based views, ratings, and NativeBase UI.",
    longDescription: [
      "Mobile book management app with Firebase backend.",
      "Add books, view by author, rate, and delete with NativeBase UI.",
      "Firebase Authentication and Firestore for real-time data.",
    ],
    badges: ["iOS · Android", "Productivity"],
    stack: ["React Native", "Firebase", "NativeBase", "React Navigation"],
    sector: "Mobile Productivity",
    features: [
      { title: "Book CRUD", desc: "Add, view, delete books with details." },
      { title: "Author View", desc: "Browse books organized by author." },
      {
        title: "Rating System",
        desc: "Rate books with star rating component.",
      },
    ],
    techHighlights: [
      "Firebase Firestore for real-time book database",
      "NativeBase UI components for consistent design",
      "React Navigation with stack and tab navigators",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/bookRepo" },
    ],
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "FoodRunner RN",
    slug: "foodrunner-rn",
    role: "Independent · Mobile",
    color: "#F97316",
    type: "mobile",
    description:
      "React Native food ordering app — restaurant discovery, preferences, cart, and order placement.",
    longDescription: [
      "Mobile food ordering app with restaurant discovery.",
      "Filter by cuisine preferences, add to cart, and place orders.",
      "Redux Toolkit for state management with wishlist support.",
    ],
    badges: ["iOS · Android", "FoodTech"],
    stack: ["React Native", "Redux Toolkit", "React Navigation", "API"],
    sector: "FoodTech Mobile",
    features: [
      {
        title: "Restaurant Discovery",
        desc: "Browse restaurants with cuisine filtering.",
      },
      {
        title: "Smart Cart",
        desc: "Add items, manage quantities, and checkout.",
      },
      { title: "Wishlist", desc: "Save favorite restaurants and dishes." },
    ],
    techHighlights: [
      "Redux Toolkit for centralized order state",
      "React Navigation drawer + stack pattern",
      "Custom food preference matching algorithm",
    ],
    links: [{ text: "GitHub", url: "https://github.com/techamit95ch/foodApp" }],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "StackSearch",
    slug: "stacksearch",
    role: "Independent · Mobile",
    color: "#F48024",
    type: "mobile",
    description:
      "Stack Overflow client — search, browse, and read Stack Overflow questions with NativeBase UI.",
    longDescription: [
      "Mobile Stack Overflow client for browsing and searching questions.",
      "NativeBase UI with clean question/answer rendering.",
      "Stack Exchange API integration with pagination.",
    ],
    badges: ["Android", "DevTools"],
    stack: ["React Native", "NativeBase", "Stack Exchange API"],
    sector: "DevTools Mobile",
    features: [
      { title: "Search", desc: "Search Stack Overflow questions by keyword." },
      { title: "Browse", desc: "Trending and popular questions feed." },
      {
        title: "Read",
        desc: "Full question and answer rendering with code blocks.",
      },
    ],
    techHighlights: [
      "Stack Exchange API with token-based auth",
      "NativeBase for consistent mobile UI",
      "Infinite scroll with pagination",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/stack_exchange" },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "SaaS",
  },
  {
    title: "VoiceExpense",
    slug: "voiceexpense",
    role: "Independent · Experiment",
    color: "#6366F1",
    type: "web",
    description:
      "Voice-powered expense tracker — speak your expenses and they're logged automatically using Speechly.",
    longDescription: [
      "Expense tracking powered by voice commands via Speechly API.",
      "Say 'Add income of 500 in salary category' and it's logged.",
      "Visual charts for income vs expense tracking.",
    ],
    badges: ["Web App", "FinTech · AI"],
    stack: ["React", "Speechly", "Chart.js", "Context API"],
    sector: "FinTech AI",
    features: [
      {
        title: "Voice Input",
        desc: "Natural language voice commands for adding transactions.",
      },
      {
        title: "Auto-Categorize",
        desc: "Speechly NLU categorizes expenses from speech.",
      },
      {
        title: "Visual Reports",
        desc: "Income vs expense charts with category breakdown.",
      },
    ],
    techHighlights: [
      "Speechly API for real-time speech-to-intent processing",
      "React Context for transaction state management",
      "Chart.js for financial data visualization",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "FinTech",
  },
  {
    title: "LiveConnect",
    slug: "liveconnect",
    role: "Independent · Full-Stack",
    color: "#0EA5E9",
    type: "web",
    description:
      "Peer-to-peer video chat application using WebRTC with Socket.io signaling server.",
    longDescription: [
      "Real-time video calling application with WebRTC.",
      "Socket.io signaling server for peer connection establishment.",
      "Room-based video chat with share link functionality.",
    ],
    badges: ["Web App", "Communication"],
    stack: ["JavaScript", "WebRTC", "Socket.io", "Node.js"],
    sector: "Web Communication",
    features: [
      { title: "Video Call", desc: "Peer-to-peer video with WebRTC." },
      { title: "Room System", desc: "Create rooms and share join links." },
      { title: "Screen Share", desc: "Share screen during video calls." },
    ],
    techHighlights: [
      "WebRTC with STUN/TURN server configuration",
      "Socket.io for signaling and peer negotiation",
      "MediaStream API for camera and microphone access",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/videoChatApp" },
    ],
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "PrimeEats",
    slug: "primeeats",
    role: "Independent · Learning Build",
    color: "#22C55E",
    type: "mobile",
    description:
      "Uber Eats-inspired food delivery UI — restaurant listing, menu browsing, and order flow.",
    longDescription: [
      "Full Uber Eats-style UI implementation in React Native.",
      "Restaurant listing with category tabs and menu browsing.",
      "Order flow with cart management.",
    ],
    badges: ["iOS · Android", "FoodTech"],
    stack: ["React Native", "JavaScript", "React Navigation"],
    sector: "FoodTech Mobile",
    features: [
      {
        title: "Restaurant Card UI",
        desc: "Cards with ratings, delivery time, and cuisine tags.",
      },
      {
        title: "Menu Browser",
        desc: "Category-organized menu with item details.",
      },
      { title: "Order Flow", desc: "Cart and simplified checkout experience." },
    ],
    techHighlights: [
      "React Native FlatList with custom card components",
      "Animated category tabs with scroll sync",
      "React Navigation bottom tabs + stack hybrid",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/techamit95ch/uber-eats-clone",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "PhotoGram",
    slug: "photogram",
    role: "Independent · Learning Build",
    color: "#E4405F",
    type: "mobile",
    description:
      "Instagram-inspired social feed — photo uploads, likes, comments, and user profiles.",
    longDescription: [
      "Full Instagram-style social feed implementation.",
      "Photo uploads with like and comment functionality.",
      "User profiles with follower counts and post grids.",
    ],
    badges: ["iOS · Android", "Social"],
    stack: ["React Native", "JavaScript", "Firebase"],
    sector: "Social Mobile",
    features: [
      {
        title: "Photo Feed",
        desc: "Scrollable photo feed with like/comment actions.",
      },
      {
        title: "User Profiles",
        desc: "Profile pages with post grid and stats.",
      },
      {
        title: "Image Upload",
        desc: "Camera and gallery upload with preview.",
      },
    ],
    techHighlights: [
      "Firebase Storage for image hosting",
      "Firebase RTDB for real-time feed updates",
      "React Native Image component with lazy loading",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/insta-clone" },
    ],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "PrimeStore",
    slug: "primestore",
    role: "Independent · Full-Stack",
    color: "#FF9900",
    type: "web",
    description:
      "Amazon-style e-commerce — Next.js SSR with product search, cart, and payment integration.",
    longDescription: [
      "Full Amazon-inspired e-commerce built with Next.js.",
      "Product search, category browsing, and detailed product pages.",
      "Cart with quantity management and simplified checkout.",
    ],
    badges: ["Web App", "E-Commerce"],
    stack: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    sector: "E-Commerce Web",
    features: [
      {
        title: "Product Search",
        desc: "Full-text search with category filtering.",
      },
      {
        title: "SSR Pages",
        desc: "Server-rendered product pages for fast load.",
      },
      {
        title: "Cart & Checkout",
        desc: "Persistent cart with Stripe payment flow.",
      },
    ],
    techHighlights: [
      "Next.js SSR with product data pre-fetching",
      "Tailwind CSS for responsive product grid",
      "Stripe Checkout for secure payment processing",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/next-amazon" },
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "MemoryLane",
    slug: "memorylane",
    role: "Independent · Full-Stack",
    color: "#EC4899",
    type: "web",
    description:
      "MERN stack social memory app — create, like, and share life moments with the community.",
    longDescription: [
      "Social platform for sharing life memories and moments.",
      "Create posts with images, like and comment on others' memories.",
      "Google OAuth login with JWT authentication.",
    ],
    badges: ["Web App", "Social"],
    stack: ["React", "Node.js", "MongoDB", "Express", "Google OAuth"],
    sector: "Social Web",
    features: [
      {
        title: "Memory Posts",
        desc: "Create memories with images and descriptions.",
      },
      {
        title: "Social Feed",
        desc: "Browse, like, and comment on community posts.",
      },
      {
        title: "Google Auth",
        desc: "Sign in with Google for easy onboarding.",
      },
    ],
    techHighlights: [
      "MongoDB with Mongoose for flexible document storage",
      "Google OAuth 2.0 with JWT session management",
      "React Material UI for polished interface",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/techamit95ch/memories_mernstack",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "MicroApps Suite",
    slug: "microapps-suite",
    role: "Independent · Learning Collection",
    color: "#64748B",
    type: "web",
    description:
      "Collection of 8+ React mini-apps — TODO, contacts, movie browser, and more for pattern exploration.",
    longDescription: [
      "Suite of small React applications built for mastering UI patterns.",
      "Includes TODO, Contact Manager, Movie Browser, and more.",
      "Each app explores different state management and API patterns.",
    ],
    badges: ["Web Apps", "Learning · Patterns"],
    stack: ["React", "JavaScript", "Redux", "REST APIs"],
    sector: "Web Learning",
    features: [
      {
        title: "TODO App",
        desc: "Classic task manager with CRUD and filtering.",
      },
      {
        title: "Contact Manager",
        desc: "CRUD contacts with search and grouping.",
      },
      {
        title: "Movie Browser",
        desc: "API-powered movie discovery interface.",
      },
    ],
    techHighlights: [
      "Multiple state management patterns explored",
      "REST API integration patterns",
      "Component composition and reusability patterns",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2020",
    category: "SaaS",
  },
  {
    title: "QuickBite RN",
    slug: "quickbite-rn",
    role: "Independent · Mobile",
    color: "#EF4444",
    type: "mobile",
    description:
      "Restaurant discovery app with Redux Toolkit — browse menus, filter by cuisine, and track orders.",
    longDescription: [
      "React Native restaurant app with Redux Toolkit state management.",
      "Browse restaurants with cuisine filtering and detailed menus.",
      "Order tracking with push notification updates.",
    ],
    badges: ["iOS · Android", "FoodTech"],
    stack: ["React Native", "Redux Toolkit", "React Navigation"],
    sector: "FoodTech Mobile",
    features: [
      {
        title: "Browse Restaurants",
        desc: "Discover restaurants with ratings and filters.",
      },
      {
        title: "Menu Viewer",
        desc: "Detailed menu with item photos and descriptions.",
      },
      { title: "Order Tracking", desc: "Real-time order status updates." },
    ],
    techHighlights: [
      "Redux Toolkit with createAsyncThunk for API calls",
      "React Navigation drawer with nested stacks",
      "Custom splash screen and app icon configuration",
    ],
    links: [],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2C",
  },
  {
    title: "SpringTrack",
    slug: "springtrack",
    role: "Backend Developer · TechProMind",
    color: "#6DB33F",
    type: "web",
    description:
      "Training center management system — Java Spring Boot with course scheduling and enrollment.",
    longDescription: [
      "Training center management system built with Spring Boot.",
      "Course scheduling, instructor assignment, and student enrollment.",
      "RESTful APIs with JPA/Hibernate for data persistence.",
    ],
    badges: ["Web App · API", "Enterprise"],
    stack: ["Java", "Spring Boot", "JPA", "MySQL", "Thymeleaf"],
    sector: "Enterprise Web",
    features: [
      {
        title: "Course Management",
        desc: "Create and schedule training courses.",
      },
      {
        title: "Enrollment",
        desc: "Student registration and enrollment tracking.",
      },
      {
        title: "Instructor Portal",
        desc: "Instructor assignment and schedule management.",
      },
    ],
    techHighlights: [
      "Spring Boot with JPA/Hibernate ORM",
      "MySQL with normalized schema design",
      "Thymeleaf server-side rendering",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/techamit95ch/spring_boot_training_centre",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2021",
    category: "B2B",
  },
  {
    title: "FlutterAuth",
    slug: "flutterauth",
    role: "Independent · Mobile Experiment",
    color: "#02569B",
    type: "mobile",
    description:
      "Flutter authentication app — email login flow with Dart and Material Design.",
    longDescription: [
      "Authentication flow built with Dart and Flutter.",
      "Email/password login with form validation.",
      "Material Design UI with Flutter widget composition.",
    ],
    badges: ["iOS · Android", "Mobile · Auth"],
    stack: ["Dart", "Flutter", "Material Design"],
    sector: "Mobile",
    features: [
      {
        title: "Email Login",
        desc: "Complete email/password authentication flow.",
      },
      {
        title: "Form Validation",
        desc: "Client-side validation with error messaging.",
      },
      {
        title: "Material UI",
        desc: "Flutter Material Design widget composition.",
      },
    ],
    techHighlights: [
      "Dart async/await for auth operations",
      "Flutter Form with custom validators",
      "Material Design theming with custom colors",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/techamit95ch/Dart-Email-Login",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2020",
    category: "B2C",
  },
  {
    title: "NestJS Learning Lab",
    slug: "nestjs-lab",
    role: "Independent · Open Source Template",
    color: "#E0234E",
    type: "web",
    description:
      "Production-ready NestJS boilerplate — modular architecture, auth, guards, and TypeORM.",
    longDescription: [
      "NestJS starter template with best practices baked in.",
      "Modular architecture with guards, interceptors, and pipes.",
      "TypeORM integration with migration support.",
    ],
    badges: ["API · Backend", "DevTools · Template"],
    stack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "JWT"],
    sector: "DevTools Backend",
    features: [
      {
        title: "Modular Architecture",
        desc: "Feature-based module organization.",
      },
      {
        title: "Auth Module",
        desc: "JWT auth with guards and role-based access.",
      },
      {
        title: "Database Ready",
        desc: "TypeORM with migration and seeding support.",
      },
    ],
    techHighlights: [
      "NestJS with dependency injection patterns",
      "TypeORM with repository pattern",
      "JWT passport strategy with refresh tokens",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/devamitch/nestjs-bolierplate",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2025",
    category: "SaaS",
  },
  {
    title: "Expo Starter Kit",
    slug: "expo-starter",
    role: "Independent · Open Source Template",
    color: "#000020",
    type: "mobile",
    description:
      "Expo React Native boilerplate — navigation, state management, and component library pre-configured.",
    longDescription: [
      "Opinionated Expo starter with production patterns.",
      "Pre-configured navigation, theming, and component library.",
      "TypeScript throughout with strict configuration.",
    ],
    badges: ["iOS · Android", "DevTools · Template"],
    stack: ["Expo", "React Native", "TypeScript", "React Navigation"],
    sector: "DevTools Mobile",
    features: [
      {
        title: "Pre-Configured",
        desc: "Navigation, theming, and components ready to go.",
      },
      { title: "TypeScript", desc: "Strict TypeScript with path aliases." },
      {
        title: "Component Library",
        desc: "Reusable UI components with theming support.",
      },
    ],
    techHighlights: [
      "Expo with custom dev client configuration",
      "React Navigation V6 with typed navigation",
      "Zustand for lightweight state management",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/devamitch/expo-boilerplate" },
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2025",
    category: "SaaS",
  },
  {
    title: "Native Module Starter",
    slug: "native-module-starter",
    role: "Independent · Open Source",
    color: "#7F52FF",
    type: "mobile",
    description:
      "React Native native module template — Kotlin/Swift bridge setup for custom platform APIs.",
    longDescription: [
      "Template for building React Native native modules from scratch.",
      "Kotlin bridge for Android and Swift bridge for iOS.",
      "TurboModule and Fabric-compatible architecture.",
    ],
    badges: ["iOS · Android", "DevTools · Bridge"],
    stack: ["Kotlin", "Swift", "React Native", "C++"],
    sector: "DevTools Mobile",
    features: [
      {
        title: "Kotlin Bridge",
        desc: "Android native module with Kotlin implementation.",
      },
      {
        title: "Swift Bridge",
        desc: "iOS native module with Swift implementation.",
      },
      {
        title: "TurboModule Ready",
        desc: "New Architecture compatible module setup.",
      },
    ],
    techHighlights: [
      "Kotlin native module with JNI bridge",
      "Swift native module with Objective-C++ bridging",
      "Codegen spec for TurboModule compatibility",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/devamitch/native-module-start",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "SaaS",
  },
  {
    title: "Wagmi Web3 Starter",
    slug: "wagmi-starter",
    role: "Independent · Open Source",
    color: "#14B8A6",
    type: "web3",
    description:
      "Next.js + Wagmi Web3 starter — wallet connection, contract reads, and chain switching pre-built.",
    longDescription: [
      "Web3 frontend starter with Next.js and Wagmi V2.",
      "Pre-configured wallet connection for 300+ providers.",
      "Contract read/write hooks with type safety via Viem.",
    ],
    badges: ["Web App", "Web3 · Template"],
    stack: ["Next.js", "Wagmi", "Viem", "WalletConnect", "TypeScript"],
    sector: "Web3 DevTools",
    features: [
      {
        title: "Wallet Connect",
        desc: "Multi-wallet connection out of the box.",
      },
      {
        title: "Contract Hooks",
        desc: "Type-safe contract read/write with Wagmi.",
      },
      {
        title: "Chain Switching",
        desc: "Multi-chain support with network switching.",
      },
    ],
    techHighlights: [
      "Wagmi V2 with Viem transport layer",
      "WalletConnect V2 configuration",
      "Next.js App Router with Web3 provider setup",
    ],
    links: [
      {
        text: "GitHub",
        url: "https://github.com/devamitch/nextjs-wagmi-starter",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Remote",
    year: "2024",
    category: "Web3",
  },
  {
    title: "NestOrder API",
    slug: "nestorder-api",
    role: "Independent · Backend",
    color: "#E0234E",
    type: "web",
    description:
      "NestJS ordering system API — RESTful endpoints for product catalog, orders, and user management.",
    longDescription: [
      "Backend API for an ordering system built with NestJS.",
      "RESTful endpoints for products, orders, and users.",
      "TypeORM with PostgreSQL and JWT authentication.",
    ],
    badges: ["API · Backend", "E-Commerce"],
    stack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL"],
    sector: "E-Commerce Backend",
    features: [
      { title: "Product API", desc: "CRUD endpoints for product catalog." },
      {
        title: "Order System",
        desc: "Order creation, tracking, and status management.",
      },
      {
        title: "User Auth",
        desc: "JWT-based authentication with role guards.",
      },
    ],
    techHighlights: [
      "NestJS with modular service architecture",
      "TypeORM with entity relations and migrations",
      "Swagger/OpenAPI documentation generation",
    ],
    links: [
      { text: "GitHub", url: "https://github.com/techamit95ch/nest-ordering" },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    gallery: [],
    location: "Kolkata",
    year: "2022",
    category: "SaaS",
  },
];
