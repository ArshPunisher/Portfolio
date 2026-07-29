import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

export interface Greeting {
  username: string;
  /** Rotating strings for the typewriter effect. */
  title: string[];
  subTitle: string;
  resumeLink: string;
}

export interface SocialMediaLinks {
  github: string;
  linkedin: string;
  /** Bare address; the mailto: prefix is added at render time. */
  gmail: string;
  twitter: string;
}

export interface SoftwareSkill {
  skillName: string;
  /** Imported icon component — no magic class-name strings. */
  icon: IconType;
  /** Brand colour used on hover. */
  color: string;
}

export interface SkillsSection {
  title: string;
  subTitle: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
}

export interface MasteryEntry {
  stack: string;
  /** 0-100. */
  percentage: number;
}

export interface WorkExperience {
  role: string;
  company: string;
  /** Imported image, or null to fall back to a generated initial. */
  logo: StaticImageData | null;
  date: string;
  desc: string;
  descBullets: string[];
}

export interface Project {
  /** Imported image, or null to fall back to a generated initial. */
  image: StaticImageData | null;
  projectName: string;
  projectDesc: string;
  url: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  emailAddress: string;
}

export interface SplashScreenConfig {
  enabled: boolean;
  /** Total overlay lifetime in milliseconds. */
  durationMs: number;
}
