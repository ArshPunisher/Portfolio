import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import StyleContext from "../contexts/StyleContext";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const [isShowingSplash, setIsShowingSplash] = useState(true);

  useEffect(() => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkPref.matches);
    const timer = setTimeout(() => setIsShowingSplash(false), 3900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      <StyleContext.Provider value={{ isDark }}>
        {isShowingSplash ? (
          <SplashScreen />
        ) : (
          <>
            <Navbar />
            <main>
              <section id="home"><Home /></section>
              <section id="skills"><Skills /></section>
              <section id="experience"><Experience /></section>
              <section id="education"><Education /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </main>
          </>
        )}
      </StyleContext.Provider>
    </div>
  );
};

export default Main;
