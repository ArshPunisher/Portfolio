"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

/**
 * `lottie-react` is pulled in only when a player actually mounts, and the
 * animation JSON is fetched from /public rather than imported. Importing the
 * JSON would compile several hundred KB of animation data straight into the
 * page bundle, which is what this component exists to avoid.
 */
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => null,
});

export interface LottiePlayerProps {
  /** Path under /public, e.g. "/animations/welcome.json". */
  src: string;
  /**
   * Sizing classes. Applied to the placeholder as well as the player so the
   * async load cannot shift layout.
   */
  className?: string;
  loop?: boolean;
  /** Start fetching only once the player is near the viewport. */
  lazy?: boolean;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function LottiePlayer({
  src,
  className,
  loop = true,
  lazy = true,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [shouldLoad, setShouldLoad] = useState(!lazy);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Defer the fetch until the illustration is close to being seen.
  useEffect(() => {
    if (shouldLoad) return;
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;

    const controller = new AbortController();

    fetch(src, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.json();
      })
      .then(setAnimationData)
      .catch((err) => {
        if (err?.name === "AbortError") return;
        // Decorative only — a failed illustration must never break the page.
        console.warn(`[lottie] could not load ${src}:`, err);
      });

    return () => controller.abort();
  }, [shouldLoad, src]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {animationData && (
        <Lottie
          animationData={animationData}
          // Reduced motion still shows the artwork, just parked on frame one.
          loop={prefersReducedMotion ? false : loop}
          autoplay={!prefersReducedMotion}
          className="h-full w-full"
        />
      )}
    </div>
  );
}
