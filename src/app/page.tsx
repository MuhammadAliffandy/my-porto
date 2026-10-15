import PortfolioTemplate from "@/app/components/templates/PortfolioTemplate";
import portfolioData from "../../portfolio.json";
import { ProjectData } from "@/app/components/organisms/ProjectModal/ProjectModal";

const masterExperience = [
  {
    company: "PUKULENAM", role: "FULLSTACK ENGINEER",
    meta: "SOFTWARE ENGINEERING · AUG 2025 - PRESENT",
    title: "Engineering for performance",
    description: "Optimized API data queries using ORM to achieve 50% faster retrieval and accelerated CRUD processes by 60% through a functional component-based UI. Automated batch retrieval of 500+ records using n8n, cutting execution time from over two hours to just 70 minutes. Integrated Twilio telephony into the CRM to streamline workflows and delivered classification reports to mitigate model bias.",
  },
  {
    company: "PUKULENAM", role: "FRONTEND ENGINEER",
    meta: "FRONTEND DEVELOPMENT · JUN 2025 - PRESENT",
    title: "Scalable interfaces at speed",
    description: "Developed an Admin CRUD service using React and Chakra UI, serving active user management for 500+ records. Built a reusable Atomic Design component library that reduced code duplication by 30%. Redesigned the core application interface with modern motion animations, responsive layouts, and integrated secure JWT authentication.",
  },
  {
    company: "ALGORITHMICS INDONESIA", role: "CODING TUTOR",
    meta: "EDUCATION · MAY 2025 - SEP 2025",
    title: "Mentoring the next generation",
    description: "Mentored students in Python and visual programming (Scratch), improving algorithm comprehension by 65%. Guided students to successfully complete monthly projects, achieving an 86% monthly attendance rate and significantly enhancing their technical presentation skills.",
  },
  {
    company: "PT. ADMA DIGITAL SOLUSI", role: "FRONTEND ENGINEER",
    meta: "WEB DEVELOPMENT · FEB 2024 - JUN 2024",
    title: "Building CMS and multi-platform tools",
    description: "Developed scalable Next.js projects including a CMS and Communication Management Tool that reduced manual content handling time by 40%. Connected applications with Twitter, Instagram, Facebook, and WhatsApp APIs. Optimized performance using SSR, SSG, and caching strategies to cut page load times by 15%.",
  },
  {
    company: "TECHNOLOGY INFRASTRUCTURE LAB", role: "OS TEACHING ASSISTANT",
    meta: "ACADEMIA · JAN 2024 - JUN 2024",
    title: "Mastering system foundations",
    description: "Mentored over 30 students in Linux Operating System concepts and practical usage. Prepared learning modules, facilitated lab sessions, and provided structural evaluations, leading to a 90% final project success rate.",
  },
  {
    company: "BINAR ACADEMY", role: "FULLSTACK WEB DEVELOPER",
    meta: "BOOTCAMP · AUG 2023 - DEC 2023",
    title: "Developing educational platforms",
    description: "Collaborated on a Massive Open Online Course (MOOC) platform. Built Database Management APIs with full CRUD functionality for courses and modules. Implemented secure admin authentication and user order management logic for verifying purchases and processing payments.",
  },
  {
    company: "DSAA GROUP", role: "FRONTEND MOBILE DEVELOPER",
    meta: "MOBILE DEVELOPMENT · JUL 2023 - AUG 2023",
    title: "Crafting mobile experiences",
    description: "Executed pixel-perfect UI slicing from Figma to Flutter using the Atomic Design methodology to build a reusable component library. Leveraged Dart algorithms for smooth animations and conducted thorough manual testing to significantly reduce UI-related bugs prior to release.",
  },
  {
    company: "FASTWORK ID", role: "FREELANCE GRAPHIC & UI/UX DESIGNER",
    meta: "DESIGN · JAN 2022 - JAN 2023",
    title: "Where design meets freelance",
    description: "Delivered custom digital products and UI/UX designs for clients on a marketplace platform. Maintained a 100% project completion rate and achieved an average client rating of 4.7/5 through continuous iteration and clear communication.",
  },
];

export default function MasterPortfolio() {
  return (
    <PortfolioTemplate 
      heroTitleRow1="Muhammad"
      heroTitleRow2="Aliffandy"
      heroSubtitle="A software engineer who speaks human."
      heroDescription="I bridge the gap between complex engineering and human-centric design, building interfaces that feel as good as they function."
      aboutTitle="Design-driven engineering."
      aboutParagraph1="I'm an engineer who cares deeply about the human side of software."
      aboutParagraph2="My work isn't just about writing efficient algorithms or architecting scalable databases—although I do that too. It's about translating complex technical requirements into fluid, intuitive experiences that users naturally understand."
      workTitle="Selected projects and case studies."
      experienceTitle="Where I have worked"
      experienceSubtitle="Over the years, I've had the privilege of collaborating with some incredible teams to build digital products that matter. Here's a brief timeline of my professional journey."
      experienceItems={masterExperience}
      projects={portfolioData as ProjectData[]}
    />
  );
}
