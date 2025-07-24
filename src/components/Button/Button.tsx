
import React from "react";

interface ButtonProps {
  className?: string;
  href: string;
  text: string;
  newTab?: boolean;
}

const Button = ({ className = "", href, text, newTab }: ButtonProps) => {
  return (
    <div className={className}>
      <a
        className="main-button inline-block px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
