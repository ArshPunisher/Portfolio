"use client";
import React from "react";
import { bigProjects } from "@/portfolio";
import { AnimatedProjectCard } from "@/components/Project Card/ProjectCard";

const Projects = () => {
  if (!bigProjects.display) return null;
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-16 bg-white">
      <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold mb-2 text-gray-900 tracking-wide text-center">
        {bigProjects.title}
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        {bigProjects.subtitle}
      </p>
      <div className="w-full max-w-[95%] grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {bigProjects.projects.map((project, idx) => (
          <div key={project.projectName + idx} className="flex flex-col h-full">
            <AnimatedProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
