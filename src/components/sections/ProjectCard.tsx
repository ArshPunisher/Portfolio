"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";

const MAX_TILT_DEG = 15;

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  // Reused across events so the rAF callback never allocates or double-schedules.
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = query.matches;

    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    query.addEventListener("change", onChange);

    return () => {
      query.removeEventListener("change", onChange);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const applyTilt = useCallback(() => {
    frameRef.current = null;
    const card = cardRef.current;
    if (!card) return;

    // Reading layout inside rAF keeps the read/write out of the event handler,
    // so moving the pointer can't force a reflow on every single event.
    const rect = card.getBoundingClientRect();
    const x = pointerRef.current.x - rect.left;
    const y = pointerRef.current.y - rect.top;

    const dx = (x - rect.width / 2) / (rect.width / 2);
    const dy = (y - rect.height / 2) / (rect.height / 2);

    card.style.transform = `perspective(1000px) rotateX(${(-dy * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(dx * MAX_TILT_DEG).toFixed(2)}deg)`;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotionRef.current) return;
      pointerRef.current = { x: e.clientX, y: e.clientY };
      frameRef.current ??= requestAnimationFrame(applyTilt);
    },
    [applyTilt]
  );

  const handleMouseLeave = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  }, []);

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full w-full rounded-2xl border border-orange-300 bg-white p-6 shadow-lg transition-transform duration-200 will-change-transform hover:shadow-orange-300/40 motion-reduce:transition-none"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(255,140,0,0.12), transparent 70%)",
          }}
        />

        <div className="flex h-full flex-col">
          <div
            className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 shadow-lg"
            style={{ transform: "translateZ(30px)" }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.projectName} screenshot`}
                width={480}
                height={270}
                sizes="(max-width: 768px) 100vw, 480px"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            ) : (
              <div
                className="flex aspect-video w-full items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-yellow-400 text-white"
                aria-hidden="true"
              >
                <span className="text-4xl font-bold drop-shadow-lg">
                  {project.projectName.trim().charAt(0).toUpperCase() || "?"}
                </span>
              </div>
            )}
          </div>

          <div
            className="mt-4 flex-1 space-y-2"
            style={{ transform: "translateZ(40px)" }}
          >
            <h3 className="text-xl font-bold text-orange-600 drop-shadow-sm md:text-2xl">
              {project.projectName}
            </h3>
            <p className="line-clamp-6 overflow-hidden text-base font-medium text-gray-700 md:line-clamp-3 md:text-lg">
              {project.projectDesc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
