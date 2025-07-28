"use client";

import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import dynamic from "next/dynamic";
import SocialMedia from "../../Social Media/SocialMedia";
import Button from "../../Button/Button";
import StyleContext from "../../../contexts/StyleContext";
import "./Home.css";

const DisplayLottie = dynamic(() => import("../../Lottie/DisplayLottie"), { ssr: false });
import typingLottie from "../../../assets/animations/program_typing.json";
import { greeting, illustration } from "@/portfolio";

const HomePage = () => {
  const { isDark } = useContext(StyleContext);


  return (
    <section id="home" className="flex flex-col justify-center items-center min-h-screen bg-white transition-colors duration-100 py-[10px] px-[10px] mx-auto">
      <div className="w-[98%] lg:w-[94%] flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Text and Socials */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center md:text-left mb-8 md:mb-0">
          <h1 className="font-bold text-[1.8rem] sm:text-[2.4rem] md:text-[2.4rem] lg:text-[2.8rem] xl:text-[3rem] leading-tight mb-4 flex items-center text-black">
            <span className="inline-block align-middle">
              <Typewriter
                words={greeting.title}
                loop={0}
                cursor
                cursorStyle=">"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
            <span className="wave-emoji inline-block align-middle ml-2">👋</span>
          </h1>
          <p className="text-p mb-6 w-full text-gray-500 leading-snug">{greeting.subTitle}</p>
          <SocialMedia />
          <div className="button-greeting-div flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <Button text="Contact me" href="#contact" />
            {greeting.resumeLink && (
              <Button text="See my resume" newTab href={greeting.resumeLink} />
            )}
          </div>
        </div>
        {/* Lottie or SVG illustration */}
        <div className="flex items-center">
          {illustration?.animated ? (
            <div className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px]">
              <DisplayLottie animationData={typingLottie} className="w-65 sm:w-auto h-65 sm:h-auto" />
            </div>
          ) : (
            <div className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px]">
              <Image
                src={require("../../../assets/svg/landingPage.svg")}
                alt="Landing Page Illustration"
                className="w-65 sm:w-auto h-65 sm:h-auto"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;