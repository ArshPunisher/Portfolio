// Portfolio data for Arsh Ramgarhia

// Splash Screen
export const splashScreen = {
  enabled: true,
  animation: {}, // Add your Lottie animation data here if needed
  duration: 2000,
};

export const illustration = {
  animated: true // Set to false to use static SVG
};

// Greeting Section
export const greeting = {
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
    "https://drive.google.com/file/d/1tGPZHT3aNVxbLSaxskwRv_HN7UWE2knG/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
export const socialMediaLinks = {
  github: "https://github.com/arshpunisher",
  linkedin: "https://www.linkedin.com/in/arsh-ramgarhia/",
  gmail: "arshsiddle0822@gmail.com",
  twitter: "https://x.com/ArshRamgarhia",
  display: true,
};

// Skills Section
export const skillsSection = {
  title: "My Skills",
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
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain colored",
    },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express", fontAwesomeClassname: "fas fa-server" },
    { skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-memory" },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "devicon-postgresql-plain colored",
    },
    { skillName: "MYSQL", fontAwesomeClassname: "fas fa-database" },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain colored",
    },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Github", fontAwesomeClassname: "fab fa-github" },
    { skillName: "C", fontAwesomeClassname: "fab fa-cuttlefish" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
  ],
  display: true,
};

// Education Section
export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Punjab Technical University",
      logo: "",
      subHeader: "Bachelor's of Technology in Computer Science",
      duration: "July 2020 - July 2024",
      desc: "Scored 9.2 CGPA till now",
      descBullets: ["Active member of coding club and technical workshops."],
    },
    {
      schoolName: "Amritsar Group of Colleges",
      logo: "",
      subHeader: "Senior Secondary",
      duration: "July 2018 - July 2020",
      desc: "Secured 84% in board exams.",
      descBullets: ["Participated in various technical and cultural events."],
    },
  ],
};

// Tech Stack
export const skillsMastery = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend / UI Crafting", progressPercentage: "85%" },
    { Stack: "Core Programming", progressPercentage: "90%" },
    { Stack: "Git & Collaboration", progressPercentage: "90%" },
    { Stack: "UX Thinking", progressPercentage: "78%" },
    { Stack: "Backend / APIs", progressPercentage: "85%" },
    { Stack: "Database & Querying", progressPercentage: "88%" },
  ],
};

// Work Experience
export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Xampus",
      companylogo: "", // Add logo path if available
      date: "May 2024 - Nov 2024",
      desc: "Worked on full-stack web development projects, optimized performance, and collaborated with cross-functional teams.",
      descBullets: [
        "Built animated, responsive web apps with React and GSAP.",
        "Integrated forms and APIs for seamless user flows.",
        "Managed auth, storage, and database operations end-to-end.",
      ],
    },
  ],
};

// Projects
export const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PERSONAL AND TEAM PROJECTS",
  projects: [
    {
      image: "", // Add image path if available
      projectName: "Portfolio Website",
      projectDesc:
        "A personal portfolio website to showcase my projects and skills.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/arshramgarhia/portfolio",
        },
      ],
    },
    {
      image: "",
      projectName: "Task Manager",
      projectDesc:
        "A full-stack task management app with authentication and real-time updates.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/arshramgarhia/task-manager",
        },
      ],
    },
  ],
  display: true,
};

// Achievements
export const achievementSection = {
  title: "Achievements And Certifications 🏆 ",
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff!",
  achievementsCards: [
    {
      title: "Hackathon Winner",
      subtitle: "Won 1st place in a national-level hackathon.",
      image: "", // Add image path if available
      imageAlt: "Hackathon",
      footerLink: [
        { name: "Certification", url: "https://example.com/certification" },
      ],
    },
  ],
  display: true,
};

// Blogs
export const blogSection = {
  title: "Blogs",
  subtitle: "I love to write about tech and share my knowledge.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://medium.com/@arshramgarhia/why-i-love-react",
      title: "Why I Love React",
      description: "A deep dive into the features and ecosystem of React.",
    },
  ],
  display: true,
};

// Contact Info
export const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or just want to say hi? My inbox is open!",
  email_address: "arshsiddle0822@gmail.com",
};

// Twitter
export const twitterDetails = {
  userName: "arshramgarhia",
  display: false,
};

export const isHireable = true;
