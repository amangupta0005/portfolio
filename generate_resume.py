from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem

pdf_path = "public/Aman_Gupta_Resume.pdf"
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=40,
    rightMargin=40,
    topMargin=40,
    bottomMargin=40,
)

styles = getSampleStyleSheet()

# Custom styles
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
    fontSize=11,
    leading=14,
    alignment=1,
    textColor=colors.HexColor("#222222"),
)

contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9,
    leading=12,
    alignment=1,
    textColor=colors.HexColor("#333333"),
)

section_heading = ParagraphStyle(
    "SectionHeading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=13,
    textColor=colors.black,
    spaceAfter=4,
)

body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=9,
    leading=12.5,
    textColor=colors.HexColor("#222222"),
)

body_bold = ParagraphStyle(
    "BodyBold",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9,
    leading=12.5,
    textColor=colors.black,
)

bullet_style = ParagraphStyle(
    "Bullet",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.5,
    textColor=colors.HexColor("#222222"),
    leftIndent=12,
    firstLineIndent=-12,
)

story = []

# Header
story.append(Paragraph("AMAN GUPTA", name_style))
story.append(Spacer(1, 3))
story.append(Paragraph("SOFTWARE ENGINEER — FULL-STACK", title_style))
story.append(Spacer(1, 4))
story.append(Paragraph("ag7921676@gmail.com &nbsp;|&nbsp; +91 7006450243 &nbsp;|&nbsp; Bengaluru, India &nbsp;|&nbsp; linkedin.com/in/aman-gupta-7b352a2a4 &nbsp;|&nbsp; github.com/amangupta0005", contact_style))
story.append(Spacer(1, 10))

# Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceAfter=5, spaceBefore=1))
story.append(Paragraph(
    "Full-Stack AI Engineer with expertise in designing and shipping end-to-end AI-powered features from model to UI. "
    "Strong foundation in modern web development (<b>React, Next.js, TypeScript</b>) and SQL databases (<b>PostgreSQL, Prisma</b>). "
    "Experienced in leveraging LLMs and AI product patterns—including prompt engineering, structured outputs, and open-weight models—to build intelligent products. "
    "Comfortable owning work across the full stack (Model &rarr; API &rarr; UI &rarr; Server) in fast-moving, collaborative environments.",
    body_style
))
story.append(Spacer(1, 10))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", section_heading))
story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceAfter=5, spaceBefore=1))
story.append(Paragraph("<b>Programming Languages:</b> C, C++, Java, Python, JavaScript, SQL, TypeScript, HTML/CSS", body_style))
story.append(Spacer(1, 3))
story.append(Paragraph("<b>Frameworks & Libraries:</b> React, Node.js, Express, FastAPI, EJS, Tailwind CSS, Bootstrap, REST APIs, Vite, Next.js, Prisma", body_style))
story.append(Spacer(1, 3))
story.append(Paragraph("<b>Tools, Cloud & Databases:</b> MongoDB Atlas, Git, GitHub, Docker, VS Code, Postman, Jenkins, Tableau, NumPy, Pandas, Matplotlib, PostgreSQL, CI/CD, Prompt Engineering, LLMs, Open-Weight Models", body_style))
story.append(Spacer(1, 3))
story.append(Paragraph("<b>Core Competencies:</b> Data Structures & Algorithms, Object-Oriented Programming (OOP), RESTful API Design, Database Normalization & Indexing, Problem Solving & Debugging, CI/CD & Containerization, Cross-Functional Team Collaboration", body_style))
story.append(Spacer(1, 10))

# Key Projects
story.append(Paragraph("KEY PROJECTS", section_heading))
story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceAfter=6, spaceBefore=1))

# Project 1: QuickGPT
story.append(Paragraph("<b>QuickGPT – AI Chatbot Platform</b> &nbsp;|&nbsp; <font color='#444444'>React, Node.js, Express, MongoDB, Gemini 2.5 Flash, ImageKit, Stripe, Docker, GitHub Actions, JWT [GitHub] [Live Demo]</font>", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Architected a full-stack AI chatbot platform using Gemini 2.5 Flash API, implementing JWT authentication, chat sessions, and community image sharing.", bullet_style))
story.append(Paragraph("&bull; Integrated ImageKit SDK for automated AI image processing and cloud media storage, reducing client load times and optimizing media delivery.", bullet_style))
story.append(Paragraph("&bull; Engineered secure Stripe payment processing, Docker containerization, and GitHub Actions CI/CD pipelines for automated testing and zero-downtime deployment.", bullet_style))
story.append(Spacer(1, 7))

# Project 2: Resume Ecosystem Builder
story.append(Paragraph("<b>Resume Ecosystem Builder</b> &nbsp;|&nbsp; <font color='#444444'>Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Docker, Git [GitHub]</font>", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Engineered a multi-variant resume builder using Next.js 14 and React, enabling the generation of tailored resumes from a unified professional profile.", bullet_style))
story.append(Paragraph("&bull; Designed a responsive UI with Tailwind CSS, integrating live ATS readiness scoring and on-the-fly PDF and text export capabilities.", bullet_style))
story.append(Paragraph("&bull; Architected the backend using Prisma ORM and PostgreSQL to securely store profiles, variations, and bullet overrides.", bullet_style))
story.append(Spacer(1, 7))

# Project 3: AcadSecure
story.append(Paragraph("<b>AcadSecure – AI Plagiarism & Collusion Detection</b> &nbsp;|&nbsp; <font color='#444444'>FastAPI, React, Vite, TF-IDF, RoBERTa, DBSCAN, Ethereum, Ganache, NLTK, spaCy [GitHub]</font>", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("&bull; Engineered an AI-powered academic integrity engine detecting plagiarism, synthetic AI content, and student collusion rings.", bullet_style))
story.append(Paragraph("&bull; Implemented TF-IDF cosine similarity, fine-tuned RoBERTa transformer, and DBSCAN clustering for multi-document semantic analysis.", bullet_style))
story.append(Paragraph("&bull; Integrated Ethereum blockchain smart contracts with Ganache to record tamper-proof audit certificates of analysis reports.", bullet_style))
story.append(Spacer(1, 10))

# Education
story.append(Paragraph("EDUCATION", section_heading))
story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceAfter=5, spaceBefore=1))
story.append(Paragraph("<b>Bachelor of Engineering (B.E.)</b> &mdash; Global Academy of Technology, Bengaluru (2023 &ndash; 2027)", body_style))
story.append(Paragraph("Computer Science and Engineering &nbsp;|&nbsp; <b>CGPA: 9.38 / 10</b>", body_style))
story.append(Spacer(1, 3))
story.append(Paragraph("<b>Higher Secondary (Class 12) - JKBOSE</b> &mdash; Govt Boys Higher Secondary School, Jammu (2022 &ndash; 2023)", body_style))
story.append(Paragraph("Science &nbsp;|&nbsp; Percentage: 81.4%", body_style))
story.append(Spacer(1, 10))

# Certifications
story.append(Paragraph("CERTIFICATIONS", section_heading))
story.append(HRFlowable(width="100%", thickness=1, color=colors.black, spaceAfter=5, spaceBefore=1))
story.append(Paragraph("<b>Operating Systems Basics</b> &mdash; Cisco Networking Academy (November 2024)", body_style))
story.append(Spacer(1, 2))
story.append(Paragraph("<b>Python Programming &ndash; Basic Certification</b> &mdash; Python Institute / Online Fundamentals (July 2023)", body_style))

doc.build(story)
print("SUCCESS: Generated public/Aman_Gupta_Resume.pdf")
