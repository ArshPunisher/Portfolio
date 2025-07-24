import React, { Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../loading/Loading";

interface DisplayLottieProps {
  animationData: object;
  loop?: boolean;
  className?: string;
}

const DisplayLottie: React.FC<DisplayLottieProps> = ({ animationData, loop = true, className }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={animationData} loop={loop} className={className} />
    </Suspense>
  );
};

export default DisplayLottie;
