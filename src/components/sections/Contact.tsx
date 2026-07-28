import Image from "next/image";
import envelopeSvg from "@/assets/svg/envolope.svg";
import LottiePlayer from "@/components/lottie/LottiePlayer";
import ContactForm from "./ContactForm";
import { animations } from "@/data/animations";
import { contactInfo, illustration } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-5 py-10 md:gap-16 lg:flex-row">
      <div className="mb-8 flex max-w-xl flex-1 flex-col items-center px-4 text-center md:mb-0 md:items-start md:text-left">
        <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
          {contactInfo.title}
        </h2>
        <p className="mb-8 text-lg text-gray-600 md:text-xl">
          {contactInfo.subtitle}
        </p>
        <p className="mb-8 text-lg">
          <a
            className="font-medium text-indigo-700 underline underline-offset-4 hover:text-indigo-900"
            href={`mailto:${contactInfo.emailAddress}`}
          >
            {contactInfo.emailAddress}
          </a>
        </p>

        <div className="flex justify-center md:justify-start">
          {illustration.animated ? (
            <LottiePlayer
              src={animations.contactUs}
              className="h-64 w-64 md:h-80 md:w-80"
            />
          ) : (
            <Image
              src={envelopeSvg}
              alt=""
              aria-hidden="true"
              className="h-64 w-64 md:h-80 md:w-80"
            />
          )}
        </div>
      </div>

      <div className="w-full max-w-xl flex-1">
        <ContactForm />
      </div>
    </section>
  );
}
