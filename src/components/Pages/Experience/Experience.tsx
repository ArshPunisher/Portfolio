import Image, { StaticImageData } from "next/image";
import ypssLogo from "@/assets/imgs/ypss.jpg";
import xampusLogo from "@/assets/imgs/xampus.webp";
const companyLogos: Record<string, StaticImageData> = {
  "ypss.jpg": ypssLogo,
  "xampus.webp": xampusLogo,
};
import { workExperiences } from "@/portfolio";

function ExperienceCard({
  exp,
}: {
  exp: (typeof workExperiences.experience)[number];
}) {
  return (
    <div
      tabIndex={0}
      className="flex flex-col w-full mb-6 group relative cursor-pointer focus:outline-none"
    >
      {/* Card Content */}
      <div className="w-full max-w-[90%] flex flex-col sm:flex-row items-start gap-x-8 bg-white/90 relative z-10 mb-8">
        {exp.companylogo && companyLogos[exp.companylogo] ? (
          <Image
            src={companyLogos[exp.companylogo]}
            alt={exp.company}
            className="w-18 md:w-24 h-18 md:h-24 object-contain object-center rounded-full bg-gray-100 mb-4 sm:mb-0"
          />
        ) : (
          <div className="w-18 md:w-24 h-18 md:h-24 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 mb-4 sm:mb-0">
            <span className="text-2xl font-bold">{exp.company[0]}</span>
          </div>
        )}
        <div className="flex flex-col flex-1">
          <h3 className="text-[20px] md:text-[24px] xl:text-[28px] font-semibold tracking-wide text-gray-800">
            {exp.role}
          </h3>
          <span className="text-[18px] md:text-[22px] xl:text-[24px] font-medium text-indigo-700">
            {exp.company}
          </span>
          <span className="text-sm md:text-base font-medium text-gray-500 mb-6 md:mb-2">
            {exp.date}
          </span>
          <p className="text-[17px] md:text-[20px] font-medium tracking-wide text-gray-600 mb-2">
            {exp.desc}
          </p>
          {exp.descBullets && (
            <ul className="text-gray-600 pl-2">
              {exp.descBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[16px] md:text-[18px] font-normal tracking-wide"
                >
                  <span className="mt-0.5">⚡</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Underline bar */}
      <div
        className="absolute bottom-0 left-0 w-[75%] h-1 bg-gray-300 rounded-full transition-all duration-300 ease-in-out 
    group-hover:w-full group-hover:bg-purple-500 
    group-focus:w-full group-focus:bg-purple-500"
      ></div>
    </div>
  );
}

const Experience = () => {
  if (!workExperiences?.display) return null;
  return (
    <section className="min-h-screen w-full flex flex-col items-start justify-center gap-4 px-4 sm:px-8 lg:px-20 py-18 md:py-12 bg-white">
      <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold sm:font-medium mb-6 md:mb-12 text-center sm:text-start text-gray-900 tracking-wide">
        Experiences
      </h2>
      <div className="w-full flex flex-col gap-4">
        {workExperiences.experience.map((exp, idx) => (
          <ExperienceCard exp={exp} key={exp.company + exp.role + idx} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
