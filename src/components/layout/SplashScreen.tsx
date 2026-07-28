import React from "react";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import { animations } from "@/data/animations";
import { greeting, splashScreen } from "@/data/portfolio";
import styles from "./SplashScreen.module.css";

/**
 * An overlay, not a gate. Page content is always rendered underneath, so it is
 * present in the server HTML; the overlay clears itself with a CSS animation
 * and therefore does not depend on hydration.
 */
export default function SplashScreen() {
  if (!splashScreen.enabled) return null;

  return (
    <div
      className={`${styles.overlay} px-2 sm:px-4`}
      aria-hidden="true"
      style={
        {
          "--splash-duration": `${splashScreen.durationMs}ms`,
        } as React.CSSProperties
      }
    >
      <div className="mb-4 flex h-[20vh] w-[80%] flex-col items-center justify-center sm:mb-6 sm:h-[40vh]">
        <LottiePlayer
          src={animations.welcome}
          lazy={false}
          className="h-[8rem] w-[12rem]"
        />
        <LottiePlayer
          src={animations.planeLoading}
          lazy={false}
          className="h-[10rem] w-[16rem]"
        />
      </div>
      <p className="mt-8 text-[1.5rem] sm:text-[2.5rem]">
        <span className="grey-color">&lt;</span>
        <span className={styles.title}>{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </p>
    </div>
  );
}
