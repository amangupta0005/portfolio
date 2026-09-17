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

  // Priority order matching your Full-Stack resume: QuickGPT first, Resume Ecosystem second, AcadSecure third
  projects: [
    {
      id: "quickgpt",
      title: "QuickGPT – AI Chatbot Platform",
      tagline: "Full-Stack AI Chatbot Platform with Streaming, Cloud Media & Stripe",
      description:
        "Architected a production-ready full-stack AI chatbot platform using Gemini 2.5 Flash API, implementing JWT authentication, persistent chat sessions, community image sharing, and automated CI/CD.",
      category: "Full-Stack & Cloud Architecture",
      impactPoints: [
        "Architected a full-stack AI chatbot platform using Gemini 2.5 Flash API, implementing JWT authentication, chat sessions, and community image sharing.",
        "Integrated ImageKit SDK for automated AI image processing and cloud media storage, reducing client load times and optimizing media delivery.",
        "Engineered secure Stripe payment processing, Docker containerization, and GitHub Actions CI/CD pipelines for automated testing and zero-downtime deployment.",
      ],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini 2.5 Flash",
        "ImageKit",
        "Stripe",
        "Docker",
        "GitHub Actions",
        "JWT",
      ],
      repoUrl: "https://github.com/amangupta0005/QuickGpt",
      liveUrl: "https://quick-gpt-smoky.vercel.app/",
    },
    {
      id: "resume-ecosystem",
      title: "Resume Ecosystem Builder",
      tagline: "Relational Multi-Variant Resume Architecture with Dynamic ATS Scoring",
      description:
        "Engineered a multi-variant resume builder using Next.js 14 and React, enabling dynamic generation of tailored resumes from a unified professional data model with live scoring and exports.",
      category: "Full-Stack Web Systems",
      impactPoints: [
        "Engineered a multi-variant resume builder using Next.js 14 and React, enabling the generation of tailored resumes from a unified professional profile.",
        "Designed a responsive UI with Tailwind CSS, integrating live ATS readiness scoring and on-the-fly PDF and text export capabilities.",
        "Architected the backend using Prisma ORM and PostgreSQL to securely store profiles, variations, and bullet overrides.",
      ],
      techStack: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "Git",
      ],
      repoUrl: "https://github.com/amangupta0005/resume-ecosystem-builder",
      liveUrl: "https://resume-ecosystem-builder.vercel.app/links",
    },
    {
      id: "acadsecure",
      title: "AcadSecure – AI Plagiarism & Collusion Detection",
      tagline: "NLP Semantic Analysis Engine with Blockchain Audit Proofs",
      description:
        "Engineered an AI-powered academic integrity engine detecting plagiarism, synthetic AI content, and student collusion rings, with tamper-proof audit certificates anchored on Ethereum.",
      category: "AI/ML & Distributed Systems",
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
      id: "neuroshield",
      title: "NeuroShield – AI Cognitive Fatigue Monitor",
      tagline: "Real-Time Telemetry via Chrome Extension & ML Classification",
      description:
        "Developed a real-time cognitive load monitoring system capturing keystroke dynamics via a Manifest V3 Chrome extension, streaming telemetry to XGBoost models and an interactive dashboard.",
      category: "Real-Time ML & Telemetry",
      impactPoints: [
        "Developed a real-time cognitive load monitoring system capturing keystroke dynamics and telemetry via a Chrome extension.",
        "Trained XGBoost and Scikit-Learn classification pipelines to predict developer fatigue thresholds with high precision.",
        "Built an interactive telemetry dashboard with React 19 and Express, streaming live fatigue indicators and break reminders.",
      ],
      techStack: [
        "React 19",
        "Vite",
        "Chrome Extension V3",
        "Node.js",
        "Express",
        "Python",
        "XGBoost",
        "Scikit-Learn",
      ],
      repoUrl: "https://github.com/amangupta0005/neuro_shield-1",
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
