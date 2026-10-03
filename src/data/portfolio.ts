export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  domains: string[];
  status: "completed" | "in_progress";
  impactPoints: string[];
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  packageUrl?: string;
  featured?: boolean;
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
    subrole: "Full-Stack AI & Cloud Systems",
    location: "Bengaluru, India",
    email: "ag7921676@gmail.com",
    contactEmail: "ag79216767@gmail.com",
    phone: "+91 7006450243",
    status: "Open to Full-Stack & Software Engineering Roles",
    // Verbatim Professional Summary from resume ecosystem summary
    bio: "Proactive Full-Stack Software Engineer with a strong foundation in Computer Science fundamentals, modern distributed architectures, and AI/ML systems. Proven track record building high-performance web applications using Next.js 14, React 18, TypeScript, Node.js, Express, PostgreSQL (Prisma), and Redis, with hands-on experience in LLM APIs (Gemini 3.5 Flash), semantic matching, and cloud tooling.",
    socials: {
      github: "https://github.com/amangupta0005",
      linkedin: "https://linkedin.com/in/aman-gupta-7b352a2a4",
      portfolio: "https://portfolio-eta-six-pihjxyrel8.vercel.app/",
      email: "mailto:ag7921676@gmail.com",
    },
    metrics: [
      { label: "B.E. CSE CGPA", value: "9.38" },
      { label: "Engineered Projects", value: "10 Projects" },
      { label: "Live Cloud Deployments", value: "3 on AWS EC2" },
    ],
  },

  // Full 10 Engineering Projects
  projects: [
    {
      id: "resume-ecosystem",
      title: "Resume Ecosystem Builder – AI-Powered ATS & Resume Intelligence Platform",
      tagline: "Hybrid deterministic-semantic ATS engine with Gemini 3.5 Flash & AWS EC2",
      description:
        "Production-grade multi-variant resume builder and ATS intelligence platform featuring hybrid deterministic-semantic JD matching with Gemini 3.5 Flash, drag-and-drop curation, Redis 7 caching, and automated AWS EC2 deployment.",
      category: "Full-Stack & Cloud Architecture",
      domains: ["Full-Stack", "AI/ML", "Cloud"],
      status: "completed",
      featured: true,
      impactPoints: [
        "Architected a multi-variant resume platform with Next.js 14 App Router, TypeScript, and Tailwind CSS, featuring drag-and-drop project curation (@hello-pangea/dnd), real-time ATS keyword auditing, and instant 1-click Markdown export for LLMs.",
        "Engineered a hybrid ATS matching engine pairing deterministic regex keyword extraction with server-side Gemini 3.5 Flash LLM analysis, generating explainable match scores, categorized skill gaps (Critical/Important/Nice-to-Have), and in-editor bullet refinement without metric hallucination.",
        "Built an atomic PostgreSQL backend via Prisma ORM with negative-index transaction reordering, backed by an in-memory Redis 7 cache with SHA-256 analysis hashing and sliding-window rate limiters, cutting query latency by 80%+ and preventing brute-force access.",
        "Containerized the full stack into an ultra-lean multi-stage Docker image (~130MB Next.js standalone) and deployed on AWS EC2 Free Tier with 2GB swap, configuring zero-touch systemd boot automation for dynamic DuckDNS domain synchronization.",
      ],
      techStack: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Prisma ORM",
        "PostgreSQL",
        "Redis 7",
        "Gemini 3.5 Flash",
        "LLMs",
        "Docker",
        "AWS EC2",
        "DuckDNS",
        "Systemd",
        "Zod",
      ],
      repoUrl: "https://github.com/amangupta0005/resume-ecosystem-builder",
      liveUrl: "http://aman-resumes.duckdns.org",
    },
    {
      id: "quickgpt",
      title: "QuickGPT – AI Chatbot Platform",
      tagline: "Multimodal AI platform with Gemini 2.5 Flash, Redis sessions & AWS EC2",
      description:
        "Production-ready full-stack AI platform built with Gemini 2.5 Flash, featuring multimodal chat, Google OAuth, distributed Redis caching, ImageKit media storage, and Stripe payments, deployed on AWS EC2 via Docker and Nginx.",
      category: "Full-Stack & Cloud Architecture",
      domains: ["Full-Stack", "AI/ML", "Computer Vision"],
      status: "completed",
      featured: true,
      impactPoints: [
        "Architected a multimodal full-stack AI chatbot utilizing Gemini 2.5 Flash and ImageKit SDK, integrating Google OAuth 2.0 and JWTs for secure sessions and community image sharing.",
        "Deployed a multi-stage microservices architecture on AWS EC2 via Docker, configuring an Nginx reverse proxy with automated Let's Encrypt SSL/TLS certificates and GitHub Actions CI/CD.",
        "Engineered Redis-backed distributed caching, rate limiting, and token blacklisting to optimize database queries, alongside secure Stripe payment gateways for automated subscriptions.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini 2.5 Flash",
        "ImageKit",
        "Redis",
        "Docker",
        "AWS EC2",
        "Nginx",
        "Stripe",
        "GitHub Actions",
        "OAuth 2.0",
        "JWT",
      ],
      repoUrl: "https://github.com/amangupta0005/QuickGpt",
      liveUrl: "https://quickgpt-api.duckdns.org",
    },
    {
      id: "cryptostack",
      title: "CryptoStack – Real-Time Crypto Tracker",
      tagline: "Scalable cryptocurrency platform with WebSocket feeds, Redis tier & AWS EC2",
      description:
        "Scalable full-stack cryptocurrency intelligence platform featuring live interactive charting, multi-user WebSockets chat, and personalized portfolios, deployed on an ultra-lean Dockerized AWS EC2 infrastructure with Redis caching.",
      category: "Full-Stack & Real-Time Systems",
      domains: ["Full-Stack", "Real-Time"],
      status: "completed",
      featured: true,
      impactPoints: [
        "Engineered a real-time crypto analytics platform with React 18, Node, and Socket.io, delivering interactive price charts, multi-user chat, and live portfolio tracking via MongoDB Atlas.",
        "Architected a Redis 7 caching tier and Docker microservices pipeline, reducing API latency by 75%+ while enforcing strict limits to run the entire stack within an 82 MiB memory footprint.",
        "Deployed a self-healing AWS EC2 infrastructure using systemd boot automation, an Nginx reverse proxy, and Let's Encrypt SSL, achieving seamless dynamic DNS updates and zero-touch restarts.",
      ],
      techStack: [
        "React 18",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB Atlas",
        "Redis",
        "Docker",
        "Nginx",
        "AWS EC2",
        "Let's Encrypt",
        "CoinGecko API",
        "Systemd",
      ],
      repoUrl: "https://github.com/amangupta0005/crypto-project",
      liveUrl: "https://cryptostack-aman.duckdns.org",
    },
    {
      id: "acadsecure",
      title: "AcadSecure – AI Plagiarism & Collusion Detection",
      tagline: "NLP semantic analysis engine with Ethereum blockchain audit proofs",
      description:
        "AI-powered academic integrity and collusion detection system analyzing submissions for plagiarism, AI-generated content, and collusion rings.",
      category: "AI/ML & Distributed Systems",
      domains: ["AI/ML", "AI Content Evaluation"],
      status: "completed",
      featured: true,
      impactPoints: [
        "Engineered an AI-powered academic integrity engine detecting plagiarism, synthetic AI content, and student collusion rings.",
        "Implemented TF-IDF cosine similarity, fine-tuned RoBERTa transformer, and DBSCAN clustering for multi-document semantic analysis.",
        "Integrated Ethereum blockchain smart contracts with Ganache to record tamper-proof audit certificates of analysis reports.",
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
      repoUrl: "https://github.com/amangupta0005/acadSecure",
    },
    {
      id: "collabtrack",
      title: "CollabTrack – Student Collaboration Platform",
      tagline: "Centralized collaboration portal with role-based access & team milestone tracking",
      description:
        "Full-stack student collaboration portal allowing users to post projects, assign roles, and track team milestones in real time.",
      category: "Full-Stack Web Systems",
      domains: ["Full-Stack"],
      status: "completed",
      featured: true,
      impactPoints: [
        "Architected CollabTrack, a centralized student collaboration portal facilitating project recruitment, role delegation, and workflow management.",
        "Implemented secure JWT authentication and role-based access control (RBAC) across Express REST APIs and MongoDB Atlas collections.",
        "Designed a clean, responsive dashboard in React and TailwindCSS, streamlining team formation and milestone tracking for student teams.",
      ],
      techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "TailwindCSS"],
      repoUrl: "https://github.com/amangupta0005/Collab_Track",
    },
    {
      id: "neuroshield",
      title: "NeuroShield – AI Cognitive Fatigue Monitor",
      tagline: "Real-time telemetry via Chrome extension & XGBoost classification",
      description:
        "Real-time AI fatigue and cognitive load monitoring system tracking user telemetry via a browser extension to deliver predictive wellness analytics.",
      category: "IoT, ML & Telemetry",
      domains: ["IoT+ML", "AI/ML"],
      status: "completed",
      featured: false,
      impactPoints: [
        "Developed a real-time cognitive load monitoring system capturing keystroke dynamics and telemetry via a Chrome extension.",
        "Trained XGBoost and Scikit-Learn classification pipelines to predict developer fatigue thresholds with high precision.",
        "Built an interactive telemetry dashboard with React 19 and Express, streaming live fatigue indicators and break reminders.",
      ],
      techStack: [
        "React 19",
        "Vite",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Python",
        "XGBoost",
        "Scikit-Learn",
        "Chrome Extension V3",
      ],
      repoUrl: "https://github.com/amangupta0005/neuro_shield-1",
    },
    {
      id: "aero-defect-ai",
      title: "Aero Defect AI – Automated Defect Inspection",
      tagline: "Computer vision surface inspection with YOLOv8 & PyTorch",
      description:
        "AI-powered computer vision system automating aircraft surface inspections by detecting, localizing, and classifying defects from high-resolution imagery.",
      category: "Computer Vision & Deep Learning",
      domains: ["Computer Vision", "AI/ML"],
      status: "completed",
      featured: false,
      impactPoints: [
        "Engineered an automated aircraft surface inspection pipeline detecting cracks, dents, and corrosion from high-resolution imagery.",
        "Trained and deployed Ultralytics YOLOv8 and PyTorch models with OpenCV preprocessing for defect localization and bounding box segmentation.",
        "Created an interactive Streamlit diagnostic console generating automated severity classification reports and maintenance logs.",
      ],
      techStack: [
        "Python",
        "Ultralytics YOLOv8",
        "PyTorch",
        "OpenCV",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
      repoUrl: "https://github.com/amangupta0005/flight-disaster-aeronautics",
    },
    {
      id: "smartlogger",
      title: "SmartLogger – Python Logging & Diagnostic Library",
      tagline: "Modular zero-dependency logging package published on official PyPI",
      description:
        "A lightweight, modular Python logging library published to PyPI, featuring colorized console logs, structured JSON formatting, and automatic file rotation.",
      category: "Open Source & Developer Tools",
      domains: ["Developer Tools", "AI/ML"],
      status: "completed",
      featured: false,
      impactPoints: [
        "Authored and published a modular Python logging package (smartlogger-aman) to the official PyPI registry.",
        "Architected structured JSON formatting, ANSI colorized console logging, and automated size-based file rotation.",
        "Engineered comprehensive unit test suites achieving high code coverage and zero-dependency runtime footprint.",
      ],
      techStack: ["Python 3", "Setuptools", "Twine", "Unittest", "PyPI"],
      packageUrl: "https://pypi.org/project/smartlogger-aman/",
    },
    {
      id: "sky2soil",
      title: "Sky2Soil – Precision Agriculture Telemetry",
      tagline: "IoT microcontrollers & ML regression for localized crop yield forecasting",
      description:
        "End-to-end precision agriculture platform collecting real-time environmental and soil telemetry, predicting crop yields using ML regression models.",
      category: "IoT & Predictive Analytics",
      domains: ["IoT+ML", "AI/ML"],
      status: "in_progress",
      featured: false,
      impactPoints: [
        "Constructed an IoT precision agriculture system aggregating soil telemetry from ESP32 microcontrollers and DHT22 sensors.",
        "Deployed Scikit-Learn and XGBoost regression models predicting localized crop yields from environmental time-series data.",
        "Built a full-stack telemetry monitoring dashboard with React, Recharts, and Express for real-time farm visualization.",
      ],
      techStack: [
        "ESP32",
        "Arduino/C++",
        "DHT22",
        "React 18",
        "Vite",
        "Recharts",
        "Node.js",
        "Express.js",
        "Python",
        "Scikit-Learn",
        "XGBoost",
        "Pandas",
      ],
    },
    {
      id: "coliving-study",
      title: "Co-Living & Real Estate Micro-Market Study",
      tagline: "Comparative analytics across 40+ properties & automated lead tracking pipeline",
      description:
        "Independent micro-market research study benchmarking co-living & managed housing spaces, paired with an automated Google Sheets lead tracking and follow-up pipeline.",
      category: "Market Research & Analytics",
      domains: ["Analytics", "Market Research"],
      status: "completed",
      featured: false,
      impactPoints: [
        "Researched and benchmarked 40+ co-living and managed residential properties across key micro-markets (pricing per bed, amenities, occupancy patterns); synthesized findings into structured comparative briefs and visual summary decks in Canva.",
        "Built a modular pipeline tracker in Google Sheets using conditional formatting, status dropdowns, and date-based reminder formulas to simulate tracking prospect meetings and open follow-up loops.",
        "Drafted concise cold outreach message templates and meeting agendas targeted at property managers and operators, focusing on clarity, professionalism, and structured next steps.",
      ],
      techStack: [
        "Google Sheets (Formulas)",
        "MS Excel",
        "Market Research",
        "Canva",
        "Outreach Drafting",
        "Data Analysis",
      ],
    },
  ] as Project[],

  // Grouped Technical Arsenal matching resume summary
  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    frameworks: [
      "Next.js 14",
      "React 18",
      "Node.js",
      "Express",
      "FastAPI",
      "Prisma ORM",
      "Tailwind CSS",
      "REST APIs",
      "Vite",
    ],
    toolsAndDatabases: [
      "PostgreSQL",
      "Redis 7",
      "Docker",
      "AWS EC2",
      "MongoDB Atlas",
      "Git & GitHub",
      "Postman",
      "LLMs (Gemini API)",
      "Prompt Engineering",
      "NumPy",
      "Pandas",
    ],
    aiMlAndVision: [
      "Gemini 3.5 & 2.5 Flash",
      "Prompt Engineering",
      "Open-Weight Models",
      "PyTorch",
      "Ultralytics YOLOv8",
      "RoBERTa / Transformers",
      "Scikit-Learn & XGBoost",
      "OpenCV",
      "TF-IDF & Cosine Similarity",
      "DBSCAN Clustering",
    ],
    devopsAndInfrastructure: [
      "AWS EC2 (Free Tier Optimization)",
      "Docker & Multi-Stage Builds",
      "Docker Compose",
      "Nginx (Reverse Proxy & SSL)",
      "Let's Encrypt SSL/TLS",
      "Systemd Boot Automation",
      "DuckDNS Dynamic DNS",
      "GitHub Actions (CI/CD)",
    ],
    coreCompetencies: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "RESTful API Design",
      "Database Normalization & Indexing",
      "Problem Solving & Debugging",
      "CI/CD & Containerization",
      "Cross-Functional Team Collaboration",
    ],
  },

  education: [
    {
      period: "2023 – 2027",
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      institution: "Global Academy of Technology",
      location: "Bengaluru, India",
      score: "CGPA: 9.38 / 10",
      details: [
        "Strong foundation in Computer Science fundamentals, modern distributed architectures, and algorithms.",
        "Maintaining exceptional academic standing with 9.38 / 10 CGPA.",
      ],
    },
    {
      period: "2022 – 2023",
      degree: "Higher Secondary (Class 12) - JKBOSE in Science",
      institution: "Govt Boys Higher Secondary School",
      location: "Jammu, India",
      score: "Percentage: 81.4%",
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
