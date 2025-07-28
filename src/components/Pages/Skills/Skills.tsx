"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import mySkillsSvg from "../../../assets/svg/skills.svg";
import skillsLottie from "../../../assets/animations/developer-skills.json";
import { illustration, skillsSection } from "@/portfolio";
import SkillsMastery from "../../Skills Mastery/SkillsMastery";
import "./Skills.css";

const DisplayLottie = dynamic(() => import("../../Lottie/DisplayLottie"), {
  ssr: false,
});

type SoftwareSkill = {
  skillName: string;
  fontAwesomeClassname: string;
};

const chunkInto = <T,>(arr: T[], chunks: number): T[][] => {
  const out: T[][] = Array.from({ length: chunks }, () => []);
  arr.forEach((item, i) => out[i % chunks].push(item));
  return out;
};

const Skills = () => {
  const { softwareSkills } = skillsSection;
  const rows = chunkInto<SoftwareSkill>(softwareSkills, 3);

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-y-4 sm:gap-y-8 py-8 sm:py-16 px-2 bg-white relative">
        <div className="flex flex-col w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {skillsSection.title}
          </h2>
          <p className="text-lg md:text-xl text-center mb-8 text-gray-600 px-2">
            {skillsSection.subTitle}
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
          {/* Left: Illustration */}
          <div className="w-full md:w-[40%] flex items-center justify-center mb-8 md:mb-0">
            {illustration?.animated ? (
              <DisplayLottie
                animationData={skillsLottie}
                className="w-80 sm:w-92 lg:w-auto h-80 sm:h-92 lg:h-auto"
              />
            ) : (
              <Image
                src={mySkillsSvg}
                alt="Skills Illustration"
                className="w-80 sm:w-92 lg:w-auto h-80 sm:h-92 lg:h-auto"
              />
            )}
          </div>

          {/* Right: Skills */}
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full sm:w-[80%] lg:w-[60%] overflow-hidden py-6 mb-8">
              {/* Faded Edges only inside skills area */}
              <div className="pointer-events-none" />

              <div className="flex flex-col space-y-4">
                {rows.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex w-max gap-4 animate-marquee"
                    style={{
                      animationDuration: `${15 + idx * 5}s`,
                      animationDirection: idx % 2 === 0 ? 'normal' : 'reverse'
                    }}
                  >
                    {/* Original row */}
                    <ul className="flex gap-4 items-center">
                      {row.map((skill, i) => (
                        <li
                          key={`${skill.skillName}-${i}`}
                          className="flex items-center text-gray-800 text-[2rem] lg:text-[2.8rem] hover:text-[#3d2064] transition-colors duration-200"
                        >
                          <i className={skill.fontAwesomeClassname} />
                        </li>
                      ))}
                    </ul>

                    {/* Duplicate row */}
                    <ul className="flex gap-4 items-center">
                      {row.map((skill, i) => (
                        <li
                          key={`dup-${skill.skillName}-${i}`}
                          className="flex items-center text-gray-800 text-[2rem] lg:text-[2.8rem] hover:text-[#3d2064] transition-colors duration-200"
                        >
                          <i className={skill.fontAwesomeClassname} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills List */}
            <ul className="text-left max-w-[95%] mx-auto space-y-2 list-none">
              {skillsSection.skills.map((skill, i) => (
                <li
                  key={i}
                  className="text-base md:text-lg text-gray-700 flex items-center list-none"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SkillsMastery />
    </>
  );
};

export default Skills;
