import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiGithub,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

import ypssLogo from "@/assets/imgs/ypss.webp";
import xampusLogo from "@/assets/imgs/xampus.webp";
import aiResumeImg from "@/assets/imgs/ai_resume.webp";
import neverKnowImg from "@/assets/imgs/never-know.webp";
import recipeImg from "@/assets/imgs/recipe.webp";
import notesImg from "@/assets/imgs/notes.webp";

import type {
  ContactInfo,
  Greeting,
  MasteryEntry,
  Project,
  SkillsSection,
  SocialMediaLinks,
  SplashScreenConfig,
  WorkExperience,
} from "./types";

export const splashScreen: SplashScreenConfig = {
  enabled: true,
  durationMs: 2000,
};

export const illustration = {
  /** false swaps every Lottie for its static SVG counterpart. */
  animated: true,
};

export const greeting: Greeting = {
  username: "Arsh Ramgarhia",
  title: [
    "Ciao, I'm Arsh",
    "Bonjour, I'm Arsh",
    "Hola, I'm Arsh",
    "Sawasdee, I'm Arsh",
  ],
  subTitle:
    "I'm a Full-Stack Web Developer who builds web applications with React.js, Next.js, Node.js, Express, PostgreSQL, Firebase, and Tailwind CSS. I handle both frontend and backend development, focusing on building functional and efficient solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1xiKKmDzm4BkmVMlGxZsSaCCTBBghnkpE/view?usp=sharing",
};

export const socialMediaLinks: SocialMediaLinks = {
  github: "https://github.com/arshpunisher",
  linkedin: "https://www.linkedin.com/in/arsh-ramgarhia/",
  gmail: "arshsiddle0822@gmail.com",
  twitter: "https://x.com/ArshRamgarhia",
};

export const skillsSection: SkillsSection = {
  title: "What I Do",
  subTitle:
    "DEVELOPER FUELED BY CAFFEINE WHO LOVES TO BUILD ACROSS WEB, CLOUD, AND BEYOND",
  skills: [
    "⚡ Develop interactive and responsive user interfaces using React.js and Next.js",
    "⚡ Build scalable backend services and REST APIs using Node.js and Express",
    "⚡ Work with databases like PostgreSQL and integrate cloud services like Firebase and AWS",
    "⚡ Explore different tech domains including web, automation, and cloud solutions",
    "⚡ Write clean, maintainable code and implement end-to-end solutions",
  ],
  softwareSkills: [
    { skillName: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { skillName: "CSS", icon: SiCss, color: "#663399" },
    { skillName: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { skillName: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { skillName: "React", icon: SiReact, color: "#61DAFB" },
    { skillName: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { skillName: "Express", icon: SiExpress, color: "#000000" },
    { skillName: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { skillName: "AWS", icon: FaAws, color: "#FF9900" },
    { skillName: "Firebase", icon: SiFirebase, color: "#DD2C00" },
    { skillName: "Redis", icon: SiRedis, color: "#FF4438" },
    { skillName: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { skillName: "MySQL", icon: SiMysql, color: "#4479A1" },
    { skillName: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { skillName: "Git", icon: SiGit, color: "#F05032" },
    { skillName: "Docker", icon: SiDocker, color: "#2496ED" },
    { skillName: "GitHub", icon: SiGithub, color: "#181717" },
    { skillName: "C", icon: SiC, color: "#A8B9CC" },
    { skillName: "C++", icon: SiCplusplus, color: "#00599C" },
  ],
};

export const skillsMastery: MasteryEntry[] = [
  { stack: "Frontend / UI Crafting", percentage: 85 },
  { stack: "Core Programming", percentage: 90 },
  { stack: "Git & Collaboration", percentage: 90 },
  { stack: "UX Thinking", percentage: 78 },
  { stack: "Backend / APIs", percentage: 85 },
  { stack: "Database & Querying", percentage: 88 },
];

export const workExperiences: WorkExperience[] = [
  {
    role: "Full Stack Developer",
    company: "YPSS",
    logo: ypssLogo,
    date: "Jan 2023 - Sep 2025",
    desc: "Worked on full-stack development projects, collaborated in team environments, and developed a social media platform project.",
    descBullets: [
      "Developed and deployed full-stack web applications with modern tech stacks.",
      "Collaborated with team members using Git and Agile practices.",
      "Built an admin panel for managing users, roles, and system data.",
      "Developed a report analysis project with data visualization and insights generation.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Xampus",
    logo: xampusLogo,
    date: "May 2024 - Nov 2024",
    desc: "Worked on full-stack web development projects, optimized performance, and collaborated with cross-functional teams.",
    descBullets: [
      "Built animated, responsive web apps with React and GSAP.",
      "Integrated forms and APIs for seamless user flows.",
      "Managed auth, storage, and database operations end-to-end.",
    ],
  },
];

export const projectsSection = {
  title: "Projects",
  subtitle: "SOME OF MY FEATURED PERSONAL PROJECTS",
};

export const projects: Project[] = [
  {
    image: aiResumeImg,
    projectName: "Ai Resume Builder",
    projectDesc:
      "Built with React and Firebase, this AI-powered resume builder uses OpenAI API to generate professional content dynamically. Includes multi-step form handling, PDF export, real-time preview, and template selection with persistent user sessions.",
    url: "https://ai-resume-builder-23eb4.web.app/",
  },
  {
    image: neverKnowImg,
    projectName: "Never Know",
    projectDesc:
      "A full-stack PERN marketplace with secure JWT-based auth, PostgreSQL queries, role-based dashboards, dynamic product listings, cart, and transaction tracking. Optimized using Express middleware, protected routes, and relational DB schema design.",
    url: "https://github.com/ArshPunisher/NeverKnow",
  },
  {
    image: recipeImg,
    projectName: "Recipe Bloggers",
    projectDesc:
      "A MERN stack platform with RESTful APIs and token-based authentication. Enables recipe posting, likes, comments, and user profile management. Built with modular Express routes and MongoDB schema validation using Mongoose.",
    url: "https://recipe-bloggers.onrender.com/",
  },
  {
    image: notesImg,
    projectName: "Notes",
    projectDesc:
      "A minimal MERN stack notes app with JWT auth, protected routes, and full CRUD. Features include category tagging, MongoDB indexing, and a responsive UI built with Tailwind CSS and React hooks.",
    url: "https://github.com/ArshPunisher/Notes-MERN",
  },
];

export const contactInfo: ContactInfo = {
  title: "Get in Touch",
  subtitle: "Want to collaborate or just drop a friendly hello? I'm all ears!",
  emailAddress: "arshsiddle0822@gmail.com",
};

/** Canonical origin. Also used for metadata, sitemap and JSON-LD. */
export const siteUrl = "https://portfolioarsh.vercel.app";
