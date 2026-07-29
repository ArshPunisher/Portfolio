"use client";

import React from "react";
import Image from "next/image";
import mySkillsSvg from "@/assets/svg/skills.svg";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import SkillsMastery from "./SkillsMastery";
import { animations } from "@/data/animations";
import { illustration, skillsSection } from "@/data/portfolio";
import type { SoftwareSkill } from "@/data/types";
import styles from "./Skills.module.css";

/**
 * Splits into `rows` contiguous slices (not round-robin), so each row keeps a
 * comparable width and the rows scroll at visually consistent speeds.
 */
function splitIntoRows<T>(items: T[], rows: number): T[][] {
  const perRow = Math.ceil(items.length / rows);
  return Array.from({ length: rows }, (_, i) =>
    items.slice(i * perRow, (i + 1) * perRow)
  ).filter((row) => row.length > 0);
}

function SkillIcons({
  skills,
  ariaHidden,
}: {
  skills: SoftwareSkill[];
  ariaHidden?: boolean;
}) {
  return (
    <ul className="flex items-center gap-4" aria-hidden={ariaHidden}>
      {skills.map(({ skillName, icon: Icon, color }) => (
        <li key={skillName} className="flex items-center">
          <Icon
            className="text-[2rem] text-gray-800 transition-colors duration-200 hover:text-(--skill-color) lg:text-[2.8rem]"
            style={{ "--skill-color": color } as React.CSSProperties}
            title={skillName}
            role="img"
            aria-label={ariaHidden ? undefined : skillName}
          />
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  const rows = splitIntoRows(skillsSection.softwareSkills, 3);

  return (
    <>
      <section className="relative flex w-full flex-col items-center justify-center gap-y-4 bg-white px-2 py-8 sm:gap-y-8 sm:py-16">
        <div className="flex w-full flex-col text-center">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {skillsSection.title}
          </h2>
          <p className="mb-8 px-2 text-center text-lg text-gray-600 md:text-xl">
            {skillsSection.subTitle}
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center lg:flex-row">
          {/* Illustration */}
          <div className="mb-8 flex w-full items-center justify-center md:mb-0 md:w-[40%]">
            {illustration.animated ? (
              <LottiePlayer
                src={animations.developerSkills}
                className="h-80 w-80 sm:h-92 sm:w-92 lg:h-[26rem] lg:w-[26rem]"
              />
            ) : (
              <Image
                src={mySkillsSvg}
                alt=""
                aria-hidden="true"
                className="h-80 w-80 sm:h-92 sm:w-92 lg:h-auto lg:w-auto"
              />
            )}
          </div>

          {/* Icon marquee */}
          <div className="flex w-full flex-col items-center">
            <div
              className={`${styles.marqueeTrack} relative mb-8 w-full overflow-hidden py-6 sm:w-[80%] lg:w-[60%]`}
            >
              <div className="flex flex-col space-y-4">
                {rows.map((row, idx) => (
                  <div
                    key={idx}
                    className={`${styles.marquee} flex w-max gap-4`}
                    style={{
                      animationDuration: `${15 + idx * 5}s`,
                      animationDirection: idx % 2 === 0 ? "normal" : "reverse",
                    }}
                  >
                    <SkillIcons skills={row} />
                    {/* Duplicate copy makes the -50% translate seamless. */}
                    <SkillIcons skills={row} ariaHidden />
                  </div>
                ))}
              </div>
            </div>

            <ul className="mx-auto max-w-[95%] list-none space-y-2 text-left">
              {skillsSection.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center text-base text-gray-700 md:text-lg"
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
}
