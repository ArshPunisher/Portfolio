import Image from "next/image";
import { workExperiences } from "@/data/portfolio";
import type { WorkExperience } from "@/data/types";

function CompanyMark({ exp }: { exp: WorkExperience }) {
  if (exp.logo) {
    return (
      <Image
        src={exp.logo}
        alt={`${exp.company} logo`}
        width={96}
        height={96}
        className="mb-4 h-18 w-18 rounded-full bg-gray-100 object-contain object-center sm:mb-0 md:h-24 md:w-24"
      />
    );
  }

  // `company` is hand-maintained data; never index into it unguarded.
  const initial = exp.company.trim().charAt(0).toUpperCase() || "?";

  return (
    <div
      className="mb-4 flex h-18 w-18 items-center justify-center rounded-full bg-gray-200 text-gray-500 sm:mb-0 md:h-24 md:w-24"
      aria-hidden="true"
    >
      <span className="text-2xl font-bold">{initial}</span>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: WorkExperience }) {
  return (
    <article className="group relative mb-6 flex w-full flex-col">
      <div className="relative z-10 mb-8 flex w-full max-w-[90%] flex-col items-start gap-x-8 bg-white/90 sm:flex-row">
        <CompanyMark exp={exp} />

        <div className="flex flex-1 flex-col">
          <h3 className="text-[20px] font-semibold tracking-wide text-gray-800 md:text-[24px] xl:text-[28px]">
            {exp.role}
          </h3>
          <p className="text-[18px] font-medium text-indigo-700 md:text-[22px] xl:text-[24px]">
            {exp.company}
          </p>
          <p className="mb-6 text-sm font-medium text-gray-500 md:mb-2 md:text-base">
            {exp.date}
          </p>
          <p className="mb-2 text-[17px] font-medium tracking-wide text-gray-600 md:text-[20px]">
            {exp.desc}
          </p>

          {exp.descBullets.length > 0 && (
            <ul className="pl-2 text-gray-600">
              {exp.descBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-[16px] font-normal tracking-wide md:text-[18px]"
                >
                  <span aria-hidden="true" className="mt-0.5">
                    ⚡
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-[75%] rounded-full bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-purple-500" />
    </article>
  );
}

export default function Experience() {
  if (workExperiences.length === 0) return null;

  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center gap-4 bg-white px-4 py-18 sm:px-8 md:py-12 lg:px-20">
      <h2 className="mb-6 text-[28px] font-semibold tracking-wide text-gray-900 sm:text-start sm:text-[36px] sm:font-medium md:mb-12 lg:text-[44px]">
        Experiences
      </h2>
      <div className="flex w-full flex-col gap-4">
        {workExperiences.map((exp) => (
          <ExperienceCard exp={exp} key={`${exp.company}-${exp.role}`} />
        ))}
      </div>
    </section>
  );
}
