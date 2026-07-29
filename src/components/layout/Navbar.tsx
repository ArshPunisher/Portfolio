"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useHideOnScroll } from "@/hooks/useHideOnScroll";
import styles from "./Navbar.module.css";

/** Single source of truth — every entry must match a section id in page.tsx. */
const NAV_ITEMS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact Me" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hidden = useHideOnScroll();

  // Escape closes the mobile menu, matching normal disclosure behaviour.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`${styles.bar} ${hidden && !menuOpen ? styles.hidden : ""} fixed top-0 right-0 left-0 z-9999 bg-white`}
    >
      <nav
        aria-label="Main"
        className="relative mx-auto flex w-full items-start justify-between p-3 sm:p-4"
      >
        <Link
          href="#home"
          className="mt-2 block flex-none text-[1.5em] leading-normal whitespace-nowrap"
        >
          <span className="grey-color">&lt;</span>
          <span className="logo-name mx-1 text-lg sm:text-xl md:text-2xl">
            Arsh<span className="hidden lg:inline"> Ramgarhia</span>
          </span>
          <span className="grey-color"> /&gt;</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden min-w-0 flex-wrap items-center gap-2 lg:flex">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            aria-hidden="true"
            className={`mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-200 motion-reduce:transition-none ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-200 motion-reduce:transition-none ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-200 motion-reduce:transition-none ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>

        {menuOpen && (
          <ul
            id="mobile-menu"
            className={`${styles.menu} absolute top-full right-0 left-0 z-50 flex w-full flex-col items-center border-t border-gray-200 bg-white py-4 shadow-md lg:hidden`}
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link} text-lg`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
