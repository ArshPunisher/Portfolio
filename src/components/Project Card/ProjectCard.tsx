"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  image: string;
  projectName: string;
  projectDesc: string;
  url: string;
};

export const AnimatedProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Distance from center [-1, 1]
    const dx = (x - centerX) / centerX;
    const dy = (y - centerY) / centerY;

    const rotateX = (-dy * 15).toFixed(2); // Invert Y-axis
    const rotateY = (dx * 15).toFixed(2);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--mx", `50%`);
    card.style.setProperty("--my", `50%`);
  };

  return (
    <Link href={project.url} target="_blank" rel="noopener noreferrer">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group h-full w-full rounded-2xl border border-orange-300 bg-white p-6 shadow-lg transition-transform duration-200 will-change-transform hover:shadow-orange-300/40"
      >
        {/* Spotlight Gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(255,140,0,0.12), transparent 70%)`,
          }}
        />

        <div className="flex flex-col h-full">
          {/* Image */}
          <div
            className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 shadow-lg"
            style={{ transform: "translateZ(30px)" }}
          >
            {project.image ? (
              <Image
                src={require(`@/assets/imgs/${project.image}`).default}
                alt={project.projectName}
                width={480}
                height={270}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-lg"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 text-white rounded-lg shadow-lg">
                <span className="text-4xl font-bold drop-shadow-lg">{project.projectName[0]}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mt-4 space-y-2 flex-1" style={{ transform: "translateZ(40px)" }}>
            <h3 className="text-xl md:text-2xl font-bold text-orange-600 drop-shadow-sm">{project.projectName}</h3>
            <p className="text-base md:text-lg text-gray-700 font-medium line-clamp-6 md:line-clamp-3 overflow-hidden">
              {project.projectDesc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
