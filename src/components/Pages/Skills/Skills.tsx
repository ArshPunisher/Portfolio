"use client"

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import mySkillsSvg from "../../../assets/svg/my-skills.svg";
import skillsLottie from "../../../assets/animations/developer-skills.json";
import { illustration, skillsSection } from "@/portfolio";
import SkillsMastery from "../../Skills Mastery/SkillsMastery";

const DisplayLottie = dynamic(() => import("../../Lottie/DisplayLottie"), { ssr: false });
gsap.registerPlugin && gsap.registerPlugin();

const Skills = () => {
  const rowCount = 3;
  const containerRefs = useRef<HTMLDivElement[]>([]);
  const iconSetRefs = useRef<HTMLDivElement[]>([]);
  const { softwareSkills } = skillsSection;

  const third = Math.ceil(softwareSkills.length / rowCount);
  const iconRows = [
    softwareSkills.slice(0, third),
    softwareSkills.slice(third, 2 * third),
    softwareSkills.slice(2 * third),
  ];

  useLayoutEffect(() => {
    iconRows.forEach((row, idx) => {
      const container = containerRefs.current[idx];
      const iconSet = iconSetRefs.current[idx];
      if (!container || !iconSet) return;
      requestAnimationFrame(() => {
        const rowWidth = iconSet.offsetWidth;
        if (!rowWidth) {
          console.warn(`Row ${idx} width is 0`);
          return;
        }
        gsap.set(container, { x: 0 });
        gsap.to(container, {
          x: rowWidth,
          duration: 20 + idx * 5,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.wrap(0, rowWidth),
          },
        });
      });
    });
  }, [iconRows]);

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-y-4 sm:gap-y-8 py-8 sm:py-16 px-2 bg-white">
        <div className="flex flex-col w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">{skillsSection.title}</h2>
          <p className="text-lg md:text-xl text-center mb-8 text-gray-600">{skillsSection.subTitle}</p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center">
          {/* Left: Illustration */}
          <div className="w-full md:w-[40%] flex items-center justify-center mb-8 md:mb-0">
            {illustration?.animated ? (
              <DisplayLottie animationData={skillsLottie} className="w-80 sm:w-auto h-80 sm:h-auto" />
            ) : (
              <Image src={mySkillsSvg} alt="Skills Illustration" className="w-80 h-80" />
            )}
          </div>
          {/* Right: Skills */}
          <div className="w-full md:w-[70%] flex flex-col items-center">
            <div className="relative w-[90%] overflow-hidden py-6 mb-8">
              {/* Faded Edges */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white" />
              <div className="space-y-4">
                {/* 3 rows of infinite loop, each with different icons */}
                {iconRows.map((row, i) => (
                  <div
                    key={i}
                    ref={el => { if (el) { containerRefs.current[i] = el; } }}
                    className="flex gap-6 whitespace-nowrap text-3xl"
                    style={{ willChange: 'transform' }}
                  >
                    <div ref={el => { if (el) { iconSetRefs.current[i] = el; } }} className="flex gap-6">
                      {row.map((skill, index) => (
                        <i
                          key={index}
                          title={skill.skillName}
                          className={`${skill.fontAwesomeClassname} text-gray-700 hover:text-black transition`}
                        ></i>
                      ))}
                    </div>
                    {/* Repeat 2 more times for seamless loop */}
                    {Array(2).fill(null).map((_, repeatIdx) => (
                      <div key={repeatIdx} className="flex gap-6">
                        {row.map((skill, index) => (
                          <i
                            key={`${repeatIdx}-${index}`}
                            title={skill.skillName}
                            className={`${skill.fontAwesomeClassname} text-gray-700 hover:text-black transition`}
                          ></i>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <ul className="text-left max-w-[95%] mx-auto space-y-2 list-none">
              {skillsSection.skills.map((skill, i) => (
                <li key={i} className="text-base md:text-lg text-gray-700 flex items-center list-none">
                  <span className="mr-2 select-none"> </span>{skill}
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
