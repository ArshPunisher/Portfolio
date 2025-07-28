"use client";

import Link from "next/link";
import React, { useState } from "react";
import Headroom from "react-headroom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Headroom
      style={{
        zIndex: 9999,
      }}
    >
      <nav className="w-full p-3 sm:p-4 bg-white mx-auto relative flex items-start justify-between z-[9999]">
        <Link
          href="/"
          className="block flex-none text-[1.5em] mt-2 leading-normal whitespace-nowrap"
          style={{ flexShrink: 0 }}
        >
          <span className="grey-color">&lt;</span>
          <span className="logo-name mx-1 text-lg sm:text-xl md:text-2xl">
            Arsh<span className="hidden lg:inline"> Ramgarhia</span>
          </span>
          <span className="grey-color"> /&gt;</span>
        </Link>
        {/* Desktop/Tablet Nav */}
        <div className="navbar-menu hidden lg:flex flex-wrap items-center gap-2 overflow-visible min-w-0">
          <div className="flex items-center">
            <Link href="#skills" className="navbar-link">
              Skills
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="#experience" className="navbar-link">
              Experience
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="#projects" className="navbar-link">
              Projects
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="#achievements" className="navbar-link">
              Achievements
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="#contact" className="navbar-link">
              Contact Me
            </Link>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none cursor-pointer"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        {/* Mobile menu (render a different component or menu here) */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full w-full bg-white shadow-md flex flex-col items-center py-4 lg:hidden animate-fade-in z-50 border-t border-gray-200">
            <a
              href="#skills"
              className="navbar-link py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="navbar-link py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="navbar-link py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#achievements"
              className="navbar-link py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Achievements
            </a>
            <a
              href="#contact"
              className="navbar-link py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </Headroom>
  );
};

export default Navbar;
