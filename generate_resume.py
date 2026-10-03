from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

pdf_path = "public/Aman_Gupta_Resume.pdf"
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=32,
    bottomMargin=32,
)

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=18,
    leading=22,
    alignment=1, # Center
    textColor=colors.black,
)

title_style = ParagraphStyle(
    "Title",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=13,
    alignment=1,
    textColor=colors.HexColor("#222222"),
)

contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.5,
    alignment=1,
    textColor=colors.HexColor("#333333"),
)

section_heading = ParagraphStyle(
    "SectionHeading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=12,
    textColor=colors.black,
    spaceAfter=3,
)

body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor("#222222"),
)

bullet_style = ParagraphStyle(
    "Bullet",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8,
    leading=11,
    textColor=colors.HexColor("#222222"),
    leftIndent=10,
    firstLineIndent=-10,
)

story = []

# Header
story.append(Paragraph("AMAN GUPTA", name_style))
story.append(Spacer(1, 2))
story.append(Paragraph("SOFTWARE ENGINEER &mdash; FULL-STACK", title_style))
story.append(Spacer(1, 3))
story.append(Paragraph("ag7921676@gmail.com &nbsp;|&nbsp; +91 7006450243 &nbsp;|&nbsp; Bengaluru, India &nbsp;|&nbsp; linkedin.com/in/aman-gupta-7b352a2a4 &nbsp;|&nbsp; github.com/amangupta0005 &nbsp;|&nbsp; portfolio-eta-six-pihjxyrel8.vercel.app", contact_style))
story.append(Spacer(1, 8))

# Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceAfter=4, spaceBefore=1))
story.append(Paragraph(
    "Proactive Full-Stack Software Engineer with a strong foundation in Computer Science fundamentals, modern distributed architectures, and AI/ML systems. "
    "Proven track record building high-performance web applications using <b>Next.js 14, React 18, TypeScript, Node.js, Express, PostgreSQL (Prisma)</b>, and <b>Redis</b>, "
    "with hands-on experience in LLM APIs (<b>Gemini 3.5 Flash</b>), semantic matching, and cloud tooling on AWS EC2.",
    body_style
))
story.append(Spacer(1, 7))

# Technical Skills
story.append(Paragraph("CORE TECHNICAL SKILLS", section_heading))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceAfter=4, spaceBefore=1))
story.append(Paragraph("<b>Languages:</b> C, C++, Java, Python, JavaScript, TypeScript, SQL", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Frameworks & Web:</b> Next.js 14, React 18, Node.js, Express, FastAPI, Prisma ORM, Tailwind CSS, REST APIs, Vite", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Tools, DB & Cloud:</b> PostgreSQL, Redis 7, Docker, AWS EC2, MongoDB Atlas, Git, GitHub, Postman, LLMs (Gemini API), Prompt Engineering, NumPy, Pandas", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Engineering Strengths:</b> Data Structures & Algorithms, Object-Oriented Programming (OOP), RESTful API Design, Database Normalization & Indexing, Problem Solving & Debugging, CI/CD & Containerization, Cross-Functional Team Collaboration", body_style))
story.append(Spacer(1, 7))

# Engineering Projects
story.append(Paragraph("KEY ENGINEERING PROJECTS", section_heading))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceAfter=5, spaceBefore=1))

# Project 1: Resume Ecosystem Builder
story.append(Paragraph("<b>Resume Ecosystem Builder – AI-Powered ATS & Resume Platform</b> &nbsp;|&nbsp; <font color='#444444'>Next.js 14, React 18, TypeScript, Tailwind, Prisma, PostgreSQL, Redis 7, Gemini 3.5, Docker, AWS EC2</font>", body_style))
story.append(Spacer(1, 1.5))
story.append(Paragraph("&bull; Architected a multi-variant resume platform with Next.js 14 App Router, TypeScript, and Tailwind CSS, featuring drag-and-drop project curation (@hello-pangea/dnd), real-time ATS keyword auditing, and instant 1-click Markdown export for LLMs.", bullet_style))
story.append(Paragraph("&bull; Engineered a hybrid ATS matching engine pairing deterministic regex keyword extraction with server-side Gemini 3.5 Flash LLM analysis, generating explainable match scores, categorized skill gaps, and in-editor bullet refinement.", bullet_style))
story.append(Paragraph("&bull; Built an atomic PostgreSQL backend via Prisma ORM with negative-index transaction reordering, backed by an in-memory Redis 7 cache with SHA-256 analysis hashing and sliding-window rate limiters, cutting query latency by 80%+.", bullet_style))
story.append(Paragraph("&bull; Containerized the full stack into an ultra-lean multi-stage Docker image (~130MB Next.js standalone) and deployed on AWS EC2 Free Tier with DuckDNS dynamic DNS synchronization and systemd boot automation.", bullet_style))
story.append(Spacer(1, 5))

# Project 2: QuickGPT
story.append(Paragraph("<b>QuickGPT – Multimodal AI Chatbot Platform</b> &nbsp;|&nbsp; <font color='#444444'>React, Node.js, Express, MongoDB, Gemini 2.5 Flash, ImageKit, Redis, Docker, AWS EC2, Nginx, Stripe, OAuth 2.0</font>", body_style))
story.append(Spacer(1, 1.5))
story.append(Paragraph("&bull; Architected a multimodal full-stack AI chatbot utilizing Gemini 2.5 Flash and ImageKit SDK, integrating Google OAuth 2.0 and JWTs for secure sessions and community image sharing.", bullet_style))
story.append(Paragraph("&bull; Deployed a multi-stage microservices architecture on AWS EC2 via Docker, configuring an Nginx reverse proxy with automated Let's Encrypt SSL/TLS certificates and GitHub Actions CI/CD.", bullet_style))
story.append(Paragraph("&bull; Engineered Redis-backed distributed caching, rate limiting, and token blacklisting to optimize database queries, alongside secure Stripe payment gateways for automated subscriptions.", bullet_style))
story.append(Spacer(1, 5))

# Project 3: CryptoStack
story.append(Paragraph("<b>CryptoStack – Real-Time Crypto Analytics Platform</b> &nbsp;|&nbsp; <font color='#444444'>React 18, Node.js, Express.js, Socket.io, MongoDB Atlas, Redis 7, Docker, Nginx, AWS EC2, Let's Encrypt, Systemd</font>", body_style))
story.append(Spacer(1, 1.5))
story.append(Paragraph("&bull; Engineered a real-time crypto analytics platform with React 18, Node, and Socket.io, delivering interactive price charts, multi-user chat, and live portfolio tracking via MongoDB Atlas.", bullet_style))
story.append(Paragraph("&bull; Architected a Redis 7 caching tier and Docker microservices pipeline, reducing API latency by 75%+ while enforcing strict limits to run the entire stack within an 82 MiB memory footprint.", bullet_style))
story.append(Paragraph("&bull; Deployed a self-healing AWS EC2 infrastructure using systemd boot automation, an Nginx reverse proxy, and Let's Encrypt SSL, achieving seamless dynamic DNS updates and zero-touch restarts.", bullet_style))
story.append(Spacer(1, 5))

# Project 4: AcadSecure
story.append(Paragraph("<b>AcadSecure – AI Plagiarism & Collusion Detection</b> &nbsp;|&nbsp; <font color='#444444'>FastAPI, React, Vite, TF-IDF, RoBERTa, DBSCAN, Ethereum, Ganache, NLTK, spaCy</font>", body_style))
story.append(Spacer(1, 1.5))
story.append(Paragraph("&bull; Engineered an AI-powered academic integrity engine detecting plagiarism, synthetic AI content, and student collusion rings using TF-IDF cosine similarity, fine-tuned RoBERTa transformer, and DBSCAN clustering.", bullet_style))
story.append(Paragraph("&bull; Integrated Ethereum blockchain smart contracts with Ganache to record tamper-proof audit certificates of analysis reports.", bullet_style))
story.append(Spacer(1, 7))

# Education
story.append(Paragraph("EDUCATION", section_heading))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceAfter=4, spaceBefore=1))
story.append(Paragraph("<b>Bachelor of Engineering (B.E.) in Computer Science and Engineering</b> &mdash; Global Academy of Technology, Bengaluru (2023 &ndash; 2027)", body_style))
story.append(Paragraph("<b>CGPA: 9.38 / 10</b> &nbsp;|&nbsp; Coursework in Data Structures, Algorithms, Distributed Systems, DBMS, Operating Systems, Web Technologies", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Higher Secondary (Class 12) - JKBOSE in Science</b> &mdash; Govt Boys Higher Secondary School, Jammu (2022 &ndash; 2023) &nbsp;|&nbsp; <b>81.4%</b>", body_style))
story.append(Spacer(1, 7))

# Certifications
story.append(Paragraph("CERTIFICATIONS", section_heading))
story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceAfter=4, spaceBefore=1))
story.append(Paragraph("&bull; <b>Operating Systems Basics</b> &mdash; Cisco Networking Academy (November 2024)", body_style))
story.append(Spacer(1, 1.5))
story.append(Paragraph("&bull; <b>Python Programming &ndash; Basic Certification</b> &mdash; Python Institute / Online Fundamentals (July 2023)", body_style))

doc.build(story)
print("SUCCESS: Generated public/Aman_Gupta_Resume.pdf")
