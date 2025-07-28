"use client";


import { contactInfo, illustration } from "@/portfolio";
import dynamic from "next/dynamic";
import contactLottie from "../../../assets/animations/contact-us.json";
import envelopeSvg from "../../../assets/svg/envolope.svg";
import Image from "next/image";
import ContactForm from "../../Contact Form/Contact-form";

const DisplayLottie = dynamic(() => import("../../Lottie/DisplayLottie"), { ssr: false });


const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center py-10 gap-5 md:gap-16">
      {/* Left: Info & Illustration */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 px-4 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{contactInfo.title}</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">{contactInfo.subtitle}</p>
        <div className="flex justify-center md:justify-start">
          {illustration?.animated ? (
            <DisplayLottie animationData={contactLottie} className="w-64 h-64 md:w-auto md:h-auto" />
          ) : (
            <Image src={envelopeSvg} alt="Contact" className="w-64 h-64 md:w-auto md:h-auto" />
          )}
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="flex-1 w-full max-w-xl">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;