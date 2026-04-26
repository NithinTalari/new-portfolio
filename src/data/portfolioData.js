// ============================================================
// PORTFOLIO DATA - Edit this file to customize your portfolio
// ============================================================

import profileImage from "../assets/Photo.jpeg";
import studentTaskImg from "../assets/StudentTask.png";
import hackSphereImg from "../assets/HackSphere.png";
import declamationCompetitionCert from "../assets/certificates/Certificate_DeclamationCompition.png";
import mathsQuizMeritCert from "../assets/certificates/Certificate_Merit_mathsquiz.png";
import reactInternCert from "../assets/certificates/Certificate_React.js_intern.png";
import serviceNowCsaCert from "../assets/certificates/Certificate_ServiceNow_CSA.png";
import uiUxCert from "../assets/certificates/Certificate_UI&UX_L&T.png";
import codeVipassanaCert from "../assets/certificates/CodeVipasana Season 11.jpeg";
import codeVipassanaSeason13Cert from "../assets/certificates/CodeVipasana Season 13.jpeg";
import agenticAiWorkshopCert from "../assets/certificates/WorkShop_Certificate of Agentic AI – Building Autonomous AI Workflows.png";
import promptEngineeringWorkshopCert from "../assets/certificates/WorkShop_Certificate of Prompt Engineering and Generative AI.png";

import architectureOne from "../assets/photography/Architecture1.JPG";
import creativeBirdsSunset from "../assets/photography/Creative_Birds_Sunset.JPG";

export const personalInfo = {
  name: "Talari Nithin",
  logo: "Talari Nithin",
  role: "FULL STACK DEVELOPER",
  headline: "Building Digital",
  headlineAccent: "Experiences",
  description:
    "MERN Stack developer specializing in creating modern web solutions and integrating AI capabilities into existing platforms. Passionate about crafting intuitive user experiences.",
  profileImage,
  resumeUrl:
    "https://drive.google.com/file/d/1470Re0xHzCFNN1AV34t23elaENuYE_2O/view?usp=drive_link",
};

export const aboutData = {
  subtitle: "ABOUT ME",
  heading: "Crafting the\nFuture of Web",
  bio: [
    "As a student and passionate developer, I specialize in building full-stack web applications using the MERN stack. My journey in web development is driven by curiosity and a desire to solve real-world problems.",
    "I have a particular interest in integrating AI capabilities into web applications, creating intelligent solutions that enhance user experiences and automate complex workflows.",
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
  },
  {
    category: "AI Integration",
    items: ["OpenAI API", "LangChain", "Agentic AI", "Prompt Engineering"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Postman"],
  },
];

export const educationData = {
  subtitle: "ACADEMIC BACKGROUND",
  heading: "Education\nJourney",
  intro:
    "My academic foundation in computer science and data science continues to shape how I approach problem-solving, software design, and practical product development.",
  items: [
    {
      institution: "SVCET, Chittoor, Andhra Pradesh",
      degree: "B. Tech - Computer Science & Engineering (Data Science)",
      date: "2022 - 2026",
      cgpa: "7.8 / 10",
      campus: "SVCET Chittoor, Andhra Pradesh",
      description:
        "Pursuing a Bachelor's degree with a focus on computer science fundamentals and data science concepts, while building practical experience through projects, certifications, and hands-on development work.",
      tags: ["Computer Science", "Data Science", "B. Tech", "CGPA 7.8/10"],
    },
  ],
};

export const projectsData = [
  {
    title: "Smart Student Productivity & Task Management System",
    year: "2026",
    description:
      "Developed a MERN stack task system with role-based access control for efficient workflow tracking. Built RESTful APIs using Node.js and Express.js with JWT authentication for secure user access. Designed a responsive interface with task creation, prioritization, analytics, and dashboards, improving productivity for 50+ users.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
    image: studentTaskImg,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "HackSphere - Hackathon Management Platform",
    year: "2025",
    description:
      "Developed a responsive hackathon platform using React.js for event exploration and seamless team registration. Implemented features like project submission, mentor and judge profiles, and FAQ section for better user interaction.",
    tags: ["React.js", "CSS3", "React Router DOM", "AOS", "tsParticles"],
    image: hackSphereImg,
    githubUrl: "https://github.com/NithinTalari/hacksphere.git",
    liveUrl: "https://nrkshacksphere.netlify.app/",
  },
  {
    title: "Snake Game - Desktop Game Application",
    year: "2024",
    description:
      "Developed a Snake game in Python with real-time movement and score tracking system. Implemented collision detection, food generation, and dynamic difficulty using OOP concepts.",
    tags: ["Python"],
    image: null,
    githubUrl: "https://github.com/NithinTalari/Snakegame",
    liveUrl: null,
  },
];

export const experienceData = {
  subtitle: "PROFESSIONAL EXPERIENCE",
  heading: "Hands-On\nExperience",
  intro:
    "A focused internship experience where I contributed to real React.js work in a remote team environment and strengthened both delivery discipline and frontend engineering habits.",
  items: [
    {
      role: "React.js Intern",
      company: "NRKS Skill Development Pvt. Ltd.",
      location: "Remote",
      date: "July 2025 - Sep 2025",
      summary:
        "Developed and maintained reusable React.js components, improving UI performance across multiple modules. Collaborated in an agile team, contributed to code reviews, and earned certification for performance and contribution.",
      highlights: [
        "Built reusable React.js components for multiple product modules",
        "Improved UI consistency and frontend performance across screens",
        "Worked in an agile workflow with collaboration and code reviews",
        "Received an experience certificate for performance and contribution",
      ],
      tags: ["React.js", "Reusable Components", "UI Performance", "Agile Teamwork"],
    },
  ],
};

export const achievementsData = {
  certificates: [
    {
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      date: "July 29, 2025",
      description:
        "Completed the requirements for the ServiceNow Certified System Administrator credential, building core platform knowledge around administration, configuration, navigation, and workflow-driven service management.",
      credentialUrl: serviceNowCsaCert,
      image: serviceNowCsaCert,
      tags: [
        "ServiceNow",
        "System Administration",
        "Platform Configuration",
        "Workflow Management",
      ],
    },
    {
      title: "React.js Internship Experience Certificate",
      issuer: "NRKS Skill Development Pvt. Ltd.",
      date: "July 1 - September 30, 2025",
      description:
        "Worked as a React.js intern and gained practical experience building frontend interfaces, structuring reusable components, and contributing with professionalism, consistency, and delivery focus.",
      credentialUrl: reactInternCert,
      image: reactInternCert,
      tags: ["React.js", "Frontend Development", "Component Design", "Professional Experience"],
    },
    {
      title: "Outstanding Participant - Code Vipassana Season 11",
      issuer: "Google Developer Groups Cloud Kochi",
      date: "2025",
      description:
        "Recognized as an outstanding participant in Season 11 of Code Vipassana for applying skills in AI agents, Gemini CLI, and serverless runtimes to accelerate data-driven agentic applications.",
      credentialUrl: codeVipassanaCert,
      image: codeVipassanaCert,
      tags: ["AI Agents", "Gemini CLI", "Serverless Runtimes", "Google Cloud"],
    },
    {
      title: "Exceptional Performance - Code Vipassana Season 13",
      issuer: "Google Developer Groups Cloud Kochi",
      date: "Season 13",
      description:
        "Recognized for exceptional performance in Code Vipassana Season 13, focused on building 100% Postgres-compatible AI applications with Google Cloud and strengthening hands-on cloud AI implementation skills.",
      credentialUrl: codeVipassanaSeason13Cert,
      image: codeVipassanaSeason13Cert,
      tags: ["Google Cloud", "Postgres", "AI Applications", "Cloud AI"],
    },
    {
      title: "UI and UX Developer",
      issuer: "L&T EduTech",
      date: "April 11 - August 31, 2024",
      description:
        "Successfully completed the UI and UX Developer course with First Class, strengthening skills in user-centered design, interface planning, visual structure, and better digital product experiences.",
      credentialUrl: uiUxCert,
      image: uiUxCert,
      tags: ["UI Design", "UX Design", "Wireframing", "User-Centered Design"],
    },
    {
      title: "Declamation Competition Participation",
      issuer: "Viksit Bharat Youth Parliament 2025",
      date: "March 21, 2025",
      description:
        "Participated in the district-level declamation competition on the topic 'Viksit Bharat 2047: One Nation, One Election', sharpening public speaking, structured argumentation, and civic awareness.",
      credentialUrl: declamationCompetitionCert,
      image: declamationCompetitionCert,
      tags: ["Public Speaking", "Communication", "Critical Thinking", "Civic Awareness"],
    },
    {
      title: "Math Quiz - 2nd Prize",
      issuer: "Sri Venkateswara College of Engineering & Technology",
      date: "December 22, 2022",
      description:
        "Secured 2nd prize in the Math Quiz event at TechnoFest 2K22, demonstrating speed, accuracy, and strong analytical problem-solving in a competitive setting.",
      credentialUrl: mathsQuizMeritCert,
      image: mathsQuizMeritCert,
      tags: ["Mathematics", "Analytical Thinking", "Problem Solving", "Competitive Achievement"],
    },
  ],
  workshops: [
    {
      title: "AI Prompt Engineering and Generative AI",
      organizer: "Aylence in association with RHAPSODY 4.0, IISc Bangalore",
      date: "December 6-7, 2025",
      description:
        "Completed a workshop focused on prompt design, generative AI fundamentals, and practical ways to structure interactions with AI systems for stronger and more reliable outputs.",
      credentialUrl: promptEngineeringWorkshopCert,
      image: promptEngineeringWorkshopCert,
      tags: ["Prompt Engineering", "Generative AI", "LLMs", "AI Workflows"],
    },
    {
      title: "Agentic AI ML Masterclass - Build Autonomous AI Workflows",
      organizer: "Aylence in association with RHAPSODY 4.0, IISc Bangalore",
      date: "December 6-7, 2025",
      description:
        "Completed a masterclass on agentic AI and autonomous AI workflows, with exposure to building multi-step AI systems that can reason, act, and coordinate tasks more independently.",
      credentialUrl: agenticAiWorkshopCert,
      image: agenticAiWorkshopCert,
      tags: ["Agentic AI", "Autonomous Workflows", "LLMs", "AI Systems"],
    },
  ],
};

export const photographyData = {
  subtitle: "BEYOND CODING",
  heading: "Personal Interests",
  description:
    "Photography is one of my personal interests. I enjoy capturing a few meaningful moments and visual details, and I plan to connect this section to a dedicated photography portfolio soon.",
  note: "A separate photography portfolio will be connected here soon.",
  photos: [
    {
      id: 1,
      title: "Historic Dome Lines",
      category: "Architecture",
      image: architectureOne,
      camera: "Telephoto crop",
      settings: "Architectural detail",
      description:
        "A closer look at domes and spires with strong symmetry and layered structure.",
    },
    {
      id: 2,
      title: "Birds at Sundown",
      category: "Wildlife",
      image: creativeBirdsSunset,
      camera: "Mobile Capture",
      settings: "Sunset silhouette",
      description: "Two birds resting against a glowing sunset sky.",
    },
  ],
};

export const contactData = {
  subtitle: "GET IN TOUCH",
  heading: "Let's Work Together",
  description:
    "Have a project in mind or want to collaborate? Feel free to reach out!",
  email: "talarinithin12@gmail.com",
};

export const socialLinks = {
  github: "https://github.com/NithinTalari",
  linkedin: "https://www.linkedin.com/in/talari-nithin-416569268/",
  twitter: "https://twitter.com/yourusername",
  email: "talarinithin12@gmail.com",
};

export const chatbotData = {
  greeting:
    "Hi there! I'm Nithin's portfolio assistant. Ask me anything about the developer's skills, projects, or how to get in touch!",
  responses: {
    skills:
      "I'm proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), TypeScript, and AI integration with tools like OpenAI API and LangChain.",
    projects:
      "I've worked on several projects including a Smart Student Productivity System, HackSphere hackathon platform, and a Snake Game. Check out the Projects section for more details!",
    contact:
      "You can reach out via the contact form on this page, or email directly at talarinithin12@gmail.com. I'd love to hear from you!",
    experience:
      "I completed a remote React.js internship at NRKS Skill Development Pvt. Ltd. from July 2025 to September 2025, where I built reusable components, improved UI performance, collaborated in an agile team, and contributed to code reviews.",
    education:
      "I'm pursuing B. Tech in Computer Science and Engineering (Data Science) at SVCET, Chittoor, Andhra Pradesh from 2022 to 2026, and currently hold a CGPA of 7.8 out of 10.",
    ai:
      "I have experience with OpenAI API, LangChain, vector databases, and prompt engineering. I love integrating AI into web applications to create smarter solutions.",
    achievements:
      "I hold certifications including ServiceNow Certified System Administrator, a React.js internship experience certificate, UI and UX Developer by L&T EduTech, and recognitions from Code Vipassana Seasons 11 and 13. I've also completed workshops in Prompt Engineering, Generative AI, and Agentic AI workflows. Check out the Achievements section for more!",
    default:
      "I'm not sure about that, but feel free to explore the portfolio or use the contact form to ask the developer directly!",
  },
  keywords: {
    skills: [
      "skill",
      "skills",
      "tech",
      "technology",
      "technologies",
      "stack",
      "know",
      "language",
      "programming",
      "tools",
      "frontend",
      "backend",
    ],
    projects: [
      "project",
      "projects",
      "work",
      "built",
      "portfolio",
      "app",
      "application",
      "website",
    ],
    contact: ["contact", "reach", "email", "hire", "connect", "touch", "message"],
    experience: ["experience", "work", "background", "about", "who"],
    education: ["education", "study", "student", "school", "college", "university", "degree"],
    ai: ["ai", "artificial", "intelligence", "openai", "langchain", "machine", "learning", "gpt", "chatbot"],
    achievements: [
      "achievement",
      "achievements",
      "certificate",
      "certificates",
      "certification",
      "workshop",
      "workshops",
      "hackathon",
      "award",
      "awards",
    ],
  },
};
