"use client";

import React from "react";
import Image from "next/image";
import landingPage2Svg from "@/assets/svg/my-skills.svg";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import { animations } from "@/data/animations";
import { illustration, skillsMastery } from "@/data/portfolio";

export default function SkillsMastery() {
  if (skillsMastery.length === 0) return null;

  return (
    <div className="mx-auto mt-8 flex w-[90%] flex-col items-center gap-8 md:flex-row">
      <div className="w-full flex-1">
        <h2 className="mb-6 text-[28px] font-medium tracking-wider text-gray-900 sm:text-[36px] lg:text-[44px]">
          Mastery
        </h2>

        {skillsMastery.map(({ stack, percentage }) => (
          <div key={stack} className="mb-6">
            <p className="mb-1 text-lg font-medium text-gray-700">{stack}</p>
            <div
              className="h-5 w-full overflow-hidden rounded-full bg-gray-200"
              role="meter"
              aria-label={stack}
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full items-center justify-center md:w-[45%]">
        {illustration.animated ? (
          <LottiePlayer
            src={animations.mastery}
            className="h-72 w-72 xl:h-[24rem] xl:w-[24rem]"
          />
        ) : (
          <Image
            src={landingPage2Svg}
            alt=""
            aria-hidden="true"
            className="h-72 w-72 xl:h-[24rem] xl:w-[24rem]"
          />
        )}
      </div>
    </div>
  );
}
