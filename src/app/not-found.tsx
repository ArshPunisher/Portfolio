import type { Metadata } from "next";
import Image from "next/image";
import notFoundSvg from "@/assets/svg/404-man.svg";
import Button from "@/components/common/Button";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import { animations } from "@/data/animations";
import { illustration } from "@/data/portfolio";

// Next already marks not-found responses noindex; setting it again here only
// produces a duplicate robots meta tag.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-4 py-16 text-center">
      {illustration.animated ? (
        <LottiePlayer
          src={animations.notFound}
          lazy={false}
          className="h-64 w-64 sm:h-80 sm:w-80"
        />
      ) : (
        <Image
          src={notFoundSvg}
          alt=""
          aria-hidden="true"
          className="h-64 w-64 sm:h-80 sm:w-80"
          priority
        />
      )}

      <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="max-w-md text-lg text-gray-600">
        The link may be broken, or the page may have moved. Everything else is
        back on the home page.
      </p>

      <Button text="Back to home" href="/" />
    </main>
  );
}
