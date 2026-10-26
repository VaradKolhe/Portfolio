export const profile = {
  name: "Varad Kolhe",
  role: "Backend Engineer",
  tagline:
    "I build concurrent systems and distributed architectures, with a focus on Java, Spring Boot, and cloud-native infrastructure.",
  location: "Pune, India",
  email: "varadkolhe36@gmail.com",
  availability: "Open to Backend Engineering roles",
  links: {
    github: "https://github.com/VaradKolhe",
    linkedin: "https://www.linkedin.com/in/varad-kolhe/",
    leetcode: "https://leetcode.com/u/varadkolhe/",
    codechef: "https://www.codechef.com/users/varadkolhe",
    codeforces: "https://codeforces.com/profile/VaradKolhe",
    resume: "/resume.pdf",
    email: "mailto:varadkolhe36@gmail.com",
  },
}

export const stats = [
  { value: "700+", label: "Problems Solved" },
  { value: "Knight", label: "LeetCode (1850+)" },
  { value: "Top 6%", label: "Global Ranking" },
  { value: "3-Star", label: "CodeChef (1600+)" },
]

export const about = [
  "I am a Computer Engineering undergraduate focused on the architectural integrity of backend systems. My work centers on building services that remain performant under concurrency and resilient in distributed environments.",
  "I leverage a strong foundation in algorithmic reasoning—honed through solving over 700 problems across competitive programming platforms—to design efficient data models and optimized API layers.",
  "Currently, I am specializing in the Java/Spring ecosystem, exploring how microservices, RBAC, and atomic transaction patterns can be applied to build production-ready software for startups and scale-ups.",
]

export const skillGroups = [
  {
    title: "Engineering Focus",
    items: [
      "Backend Engineering",
      "Distributed Systems",
      "System Design",
      "Cloud & AWS",
      "Problem Solving",
    ],
  },
  {
    title: "Technical Stack",
    items: ["Java", "Spring Boot", "MySQL", "Hibernate", "Python", "FastAPI", "REST APIs", "Microservices"],
  },
]

export const projects = [
  {
    name: "FusionArt",
    blurb: "Concurrent Bidding & Transaction Core",
    description:
      "Engineered a high-concurrency auction platform focusing on transaction integrity. Implemented atomic transaction patterns to handle simultaneous bidding and a wallet-based payment system, ensuring zero state drift during peak auction windows.",
    stack: ["Java", "Spring Boot", "MySQL", "Hibernate", "JWT"],
    metric: "Atomic Transaction Integrity",
    href: "https://github.com/VaradKolhe/FusionArt",
    featured: true,
  },
  {
    name: "MediTrack",
    blurb: "Distributed Healthcare Management",
    description:
      "Designed a modular hospital management system using a microservices architecture. Focused on secure, scalable resource management by implementing Role-Based Access Control (RBAC) and synchronized state across service boundaries.",
    stack: ["Java", "Spring Boot", "MySQL", "Microservices", "REST APIs"],
    metric: "Microservices & RBAC Architecture",
    href: "https://github.com/VaradKolhe/MediTrack",
    featured: true,
  },
  {
    name: "SmartGrading AI",
    blurb: "AI-Driven Semantic Pipeline",
    description:
      "Developed an automated grading infrastructure that integrates Qwen2-VL for robust OCR and SBERT for semantic evaluation. Optimized the AI pipeline for cloud deployment on AWS, handling end-to-end data flow from handwritten extraction to grading studio.",
    stack: ["Python", "FastAPI", "React.js", "Qwen2-VL", "SBERT", "AWS"],
    metric: "End-to-End AI Pipeline Scalability",
    href: "https://github.com/VaradKolhe/AnswerSheetEvaluator",
    featured: true,
  },
]

export const experience = []
