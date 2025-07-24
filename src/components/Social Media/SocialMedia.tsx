import React from "react";
import { socialMediaLinks } from "../../portfolio";

const iconMap: Record<string, string> = {
  github: "fab fa-github",
  linkedin: "fab fa-linkedin-in",
  gmail: "fas fa-envelope",
  instagram: "fab fa-instagram",
  twitter: "fab fa-twitter",
};

const getLink = (key: string, value: string) => {
  if (key === "gmail") return `mailto:${value}`;
  return value;
};

const SocialMedia: React.FC = () => {
  if (!socialMediaLinks.display) return null;

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center mt-2">
      {Object.entries(socialMediaLinks).map(([key, value]) => {
        if (key === "display" || typeof value !== "string" || !value) return null;
        return (
          <a
            key={key}
            href={getLink(key, value)}
            className={`icon-button ${key} flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md transition-all duration-300 hover:scale-110 hover:from-pink-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
          >
            <i className={iconMap[key] || "fas fa-link"}></i>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
