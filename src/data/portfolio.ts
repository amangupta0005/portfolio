export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  impactPoints: string[];
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  score: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Aman Gupta",
    role: "Software Engineer — Full-Stack",
    subrole: "Full-Stack AI Engineer",
    location: "Bengaluru, India",
    email: "ag7921676@gmail.com",
    phone: "+91 7006450243",
    status: "Open to Full-Stack & Software Engineering Roles",
    // Exact verbatim professional summary from your new resume
    bio: "Full-Stack AI Engineer with expertise in designing and shipping end-to-end AI-powered features from model to UI. Strong foundation in modern web development (React, Next.js, TypeScript, Node.js, Express, MongoDB) and SQL databases (PostgreSQL, Prisma). Experienced in leveraging LLMs and AI product patterns—including prompt engineering, structured outputs, and open-weight models—to build intelligent products. Comfortable owning work across the full stack (Model → API → UI → Server) in fast-moving, collaborative environments.",
    socials: {
      github: "https://github.com/amangupta0005",
      linkedin: "https://linkedin.com/in/aman-gupta-7b352a2a4",
      email: "mailto:ag7921676@gmail.com",
    },
    metrics: [
      { label: "B.E. CSE CGPA", value: "9.38" },
      { label: "Core Expertise", value: "React & Node.js" },
      { label: "Database Layer", value: "Mongo & Postgres" },
    ],
  },

  // Priority order: Resume Ecosystem (AWS/live), QuickGPT (AWS/live), CryptoStack (AWS/live), AcadSecure
  projects: [
    {
      id: "resume-ecosystem",
      title: "Resume Ecosystem Builder – Multi-Variant ATS Engine",
      tagline: "Production-grade multi-variant resume builder & ATS intelligence platform on AWS EC2",
      description:
        "Production-grade multi-variant resume builder and ATS intelligence platform featuring real-time keyword parsing, drag-and-drop curation, Redis caching, and automated cloud deployment on AWS EC2.",
      category: "Full-Stack & Cloud Architecture",
      impactPoints: [
        "Architected a multi-variant resume platform with Next.js 14 App Router, TypeScript, and Tailwind CSS, featuring drag-and-drop project curation, real-time ATS keyword auditing, and instant 1-click Markdown export for LLMs.",
        "Engineered an atomic PostgreSQL backend via Prisma ORM with negative-index transaction reordering, paired with an in-memory Redis 7 cache layer to serve variant reads with sub-10 ms latency.",
        "Containerized the full stack with Docker and Docker Compose, deployed on AWS EC2 with DuckDNS dynamic DNS and Systemd service management for zero-downtime 24/7 uptime.",
      ],
      techStack: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma ORM",
        "PostgreSQL",
        "Redis 7",
        "Docker",
        "AWS EC2",
        "DuckDNS",
        "Systemd",
        "Zod",
      ],
      repoUrl: "https://github.com/aman-coder-005/resume-ecosystem-builder",
      liveUrl: "http://aman-resumes.duckdns.org/",
    },
    {
      id: "quickgpt",
      title: "QuickGPT – Full-Stack AI Chatbot Platform",
      tagline: "Production AI chatbot with OAuth 2.0, Redis sessions & AWS EC2 deployment",
      description:
        "Production-ready full-stack AI chatbot platform on AWS EC2 using Gemini 2.5 Flash, featuring Google OAuth 2.0, Redis-backed session management, community image sharing, Stripe payments, and zero-downtime CI/CD.",
      category: "Full-Stack & Cloud Architecture",
      impactPoints: [
        "Architected a full-stack AI chatbot with Gemini 2.5 Flash API, Google OAuth 2.0, JWT session management, and community image sharing — deployed on AWS EC2 behind Nginx reverse proxy with SSL.",
        "Integrated Redis for session persistence and ImageKit SDK for automated AI image processing, reducing client load times via cloud media optimization.",
        "Engineered Stripe payment processing, Docker containerization, and GitHub Actions CI/CD pipelines for automated testing and zero-downtime deployments.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Gemini 2.5 Flash",
        "OAuth 2.0",
        "ImageKit",
        "Stripe",
        "Docker",
        "Nginx",
        "AWS EC2",
        "GitHub Actions",
      ],
      repoUrl: "https://github.com/aman-coder-005/QuickGpt",
      liveUrl: "https://quickgpt-api.duckdns.org/",
    },
    {
      id: "cryptostack",
      title: "CryptoStack – Real-Time Crypto Analytics Platform",
      tagline: "Live market intelligence dashboard with WebSocket feeds & on-chain alerts",
      description:
        "Real-time cryptocurrency analytics platform with live WebSocket price feeds, interactive charting, portfolio tracking, and on-chain alert infrastructure — deployed on AWS EC2.",
      category: "Full-Stack & Real-Time Systems",
      impactPoints: [
        "Built a real-time crypto analytics platform with live WebSocket price feeds, interactive charting via Chart.js, and portfolio tracking across 200+ assets.",
        "Engineered a Node.js/Express backend with MongoDB aggregation pipelines for OHLCV data processing and Redis pub/sub for low-latency price broadcast to connected clients.",
        "Deployed on AWS EC2 with Nginx reverse proxy, DuckDNS dynamic DNS, and Systemd for persistent uptime and automated restarts.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "WebSocket",
        "Chart.js",
        "Docker",
        "Nginx",
        "AWS EC2",
        "DuckDNS",
      ],
      repoUrl: "https://github.com/aman-coder-005/crypto-project",
      liveUrl: "https://cryptostack-aman.duckdns.org/",
    },
    {
      id: "acadsecure",
      title: "AcadSecure – AI Plagiarism & Collusion Detection",
      tagline: "NLP Semantic Analysis Engine with Blockchain Audit Proofs",
      description:
        "AI-powered academic integrity engine detecting plagiarism, synthetic AI content, and student collusion rings, with tamper-proof audit certificates anchored on Ethereum smart contracts.",
      category: "AI/ML & Distributed Systems",
      impactPoints: [
        "Engineered an AI-powered academic integrity engine detecting plagiarism, synthetic AI content, and student collusion rings using multi-layer NLP analysis.",
        "Implemented TF-IDF cosine similarity, fine-tuned RoBERTa transformer, and DBSCAN clustering for multi-document semantic analysis and collusion ring detection.",
        "Integrated Ethereum blockchain smart contracts (Ganache) to record tamper-proof audit certificates, ensuring immutable chain-of-custody for academic reports.",
      ],
      techStack: [
        "FastAPI",
        "React",
        "Vite",
        "TF-IDF",
        "RoBERTa",
        "DBSCAN",
        "Ethereum",
        "Ganache",
        "NLTK",
        "spaCy",
      ],
      repoUrl: "https://github.com/aman-coder-005/acadSecure",
    },
  ] as Project[],

  // Primary focus on Full-Stack (React, Node, Mongo, Next, Postgres) first, then AI/ML & Python
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
      "Bootstrap",
      "EJS",
    ],
    backendAndDatabases: [
      "Node.js",
      "Express",
      "MongoDB & Atlas",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful API Design",
      "FastAPI",
      "Database Normalization & Indexing",
    ],
    aiMlAndPython: [
      "Python",
      "LLMs & Prompt Engineering",
      "Open-Weight Models",
      "PyTorch",
      "RoBERTa / Transformers",
      "NumPy & Pandas",
      "XGBoost & Scikit-Learn",
      "Matplotlib",
    ],
    devopsAndTools: [
      "Docker & Containerization",
      "Git & GitHub",
      "CI/CD (GitHub Actions)",
      "Postman",
      "VS Code",
      "Jenkins",
      "Tableau",
    ],
    coreCompetencies: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Full-Stack Architecture (Model → API → UI → Server)",
      "Problem Solving & Debugging",
      "Cross-Functional Team Collaboration",
    ],
  },

  education: [
    {
      period: "2023 – 2027",
      degree: "Bachelor of Engineering (B.E.) — Computer Science and Engineering",
      institution: "Global Academy of Technology",
      location: "Bengaluru, India",
      score: "CGPA: 9.38 / 10",
      details: [
        "Strong foundation in Computer Science fundamentals, modern web architectures, and algorithms.",
        "Maintaining exceptional academic standing with 9.38 CGPA.",
      ],
    },
    {
      period: "2022 – 2023",
      degree: "Higher Secondary (Class 12) - JKBOSE",
      institution: "Govt Boys Higher Secondary School",
      location: "Jammu, India",
      score: "81.4% (Science)",
      details: ["Coursework in Physics, Chemistry, and Mathematics."],
    },
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "November 2024",
    },
    {
      title: "Python Programming – Basic Certification",
      issuer: "Python Institute / Online Fundamentals",
      date: "July 2023",
    },
  ] as Certification[],
};
