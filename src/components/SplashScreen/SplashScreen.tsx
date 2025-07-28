import React from "react";
import "./SplashScreen.css";
import welcomeLottie from "../../assets/animations/welcome.json";
import planeLottie from "../../assets/animations/planeLoading.json";
import dynamic from "next/dynamic";

const DisplayLottie = dynamic(() => import("../Lottie/DisplayLottie"), { ssr: false });
const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-2 sm:px-4 bg-white">
      <div className="flex flex-col justify-center w-[80%] items-center mb-4 sm:mb-6 h-[20vh] sm:h-[40vh]">
        <DisplayLottie animationData={welcomeLottie} className="h-auto sm:h-[10rem]" />
        <DisplayLottie animationData={planeLottie} className="h-auto sm:h-[15rem]" />
      </div>
      <div className="text-[1.5rem] sm:text-[2.5rem] mt-8">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">Arsh Ramgarhia</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
};

export default SplashScreen;
