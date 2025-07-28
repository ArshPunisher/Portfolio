"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [12, -12]);
  const rotateY = useTransform(mouseX, [0, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    mouseX.set(px);
    mouseY.set(py);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <Link href={project.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group h-full w-full rounded-2xl border border-orange-300 bg-white p-6 shadow-lg transition-all duration-300 will-change-transform hover:shadow-orange-300/40"
      >
        {/* Spotlight Gradient */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
          style={{
            background: `radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(255,140,0,0.12), transparent 70%)`,
          }}
        />

        <div className="flex flex-col h-full">
          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100" style={{ transform: "translateZ(30px)" }}>
            {project.image ? (
              <Image
                src={require(`@/assets/imgs/${project.image}`).default}
                alt={project.projectName}
                width={480}
                height={270}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 text-white rounded-lg">
                <span className="text-4xl font-bold drop-shadow-lg">{project.projectName[0]}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mt-4 space-y-2 flex-1" style={{ transform: "translateZ(40px)" }}>
            <h3 className="text-xl md:text-2xl font-bold text-orange-600 drop-shadow-sm">{project.projectName}</h3>
            <p className="text-base md:text-lg text-gray-700 font-medium line-clamp-3 overflow-hidden">{project.projectDesc}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
