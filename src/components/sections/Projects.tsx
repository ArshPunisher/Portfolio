import ProjectCard from "./ProjectCard";
import { projects, projectsSection } from "@/data/portfolio";

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 py-16 sm:px-8 lg:px-20">
      <h2 className="mb-2 text-center text-[28px] font-semibold tracking-wide text-gray-900 sm:text-[36px] lg:text-[44px]">
        {projectsSection.title}
      </h2>
      <p className="mb-8 text-center text-lg text-gray-600">
        {projectsSection.subtitle}
      </p>
      <div className="grid w-full max-w-[95%] grid-cols-1 items-stretch gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.url} project={project} />
        ))}
      </div>
    </section>
  );
}
