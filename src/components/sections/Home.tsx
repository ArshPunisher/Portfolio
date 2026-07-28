"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import landingPageSvg from "@/assets/svg/landingPage.svg";
import SocialMedia from "@/components/common/SocialMedia";
import Button from "@/components/common/Button";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import { animations } from "@/data/animations";
import { greeting, illustration } from "@/data/portfolio";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center bg-white p-[10px]">
      <div className="flex w-[98%] flex-col-reverse items-center justify-between gap-8 lg:w-[94%] lg:flex-row">
        {/* Text and socials */}
        <div className="mb-8 flex flex-1 flex-col items-center text-center md:mb-0 md:text-left lg:items-start">
          <h1 className="mb-4 flex items-center text-[1.8rem] font-bold leading-tight text-black sm:text-[2.4rem] lg:text-[2.8rem] xl:text-[3rem]">
            {/*
              The typewriter renders nothing until it hydrates, which would
              leave the page's only <h1> empty for crawlers and screen readers.
              The real heading is always present; the animation is decorative.
            */}
            <span className="sr-only">
              {greeting.username} — Full-Stack Web Developer
            </span>
            <span className="inline-block align-middle" aria-hidden="true">
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
            <span
              className={`${styles.wave} ml-2 inline-block align-middle`}
              aria-hidden="true"
            >
              👋
            </span>
          </h1>

          <p
            className={`${styles.lead} mb-6 w-full leading-snug text-gray-500`}
          >
            {greeting.subTitle}
          </p>

          <SocialMedia />

          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button text="Contact me" href="#contact" />
            {greeting.resumeLink && (
              <Button text="See my resume" newTab href={greeting.resumeLink} />
            )}
          </div>
        </div>

        {/* Illustration */}
        <div className="flex items-center">
          {illustration.animated ? (
            <LottiePlayer
              src={animations.programTyping}
              // Eager: this is above the fold on load.
              lazy={false}
              className="h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px] xl:h-[480px] xl:w-[480px]"
            />
          ) : (
            <div className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px]">
              <Image src={landingPageSvg} alt="" aria-hidden="true" priority />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
