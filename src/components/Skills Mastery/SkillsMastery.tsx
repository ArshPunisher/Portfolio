import React from "react";
import { illustration, skillsMastery } from "@/portfolio";
import dynamic from "next/dynamic";
import masteryLottie from "../../assets/animations/mastery.json";
import landingPage2Svg from "../../assets/svg/landingPage2.svg";
import Image from "next/image";

const DisplayLottie = dynamic(() => import("../Lottie/DisplayLottie"), { ssr: false });

export default function SkillsMastery() {
  if (!skillsMastery.viewSkillBars) return null;

  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-auto mt-8 gap-8 items-center">
      {/* Progress Bars */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Mastery</h2>
        {skillsMastery.experience.map((exp, i) => (
          <div key={i} className="mb-6">
            <p className="mb-1 text-lg font-medium text-gray-700">{exp.Stack}</p>
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
              <div
                className="h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
                style={{ width: exp.progressPercentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      {/* Illustration */}
      <div className="w-full md:w-[45%] flex justify-center items-center">
        {illustration?.animated ? (
          <DisplayLottie animationData={masteryLottie} className="w-72 h-72 xl:w-[24rem] xl:h-[24rem]" />
        ) : (
          <Image src={landingPage2Svg} alt="Skills" className="w-72 h-72 xl:w-[24rem] xl:h-[24rem]" />
        )}
      </div>
    </div>
  );
}
