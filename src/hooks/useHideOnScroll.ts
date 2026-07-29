"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hides a pinned header when scrolling down and reveals it when scrolling up.
 *
 * Replaces `react-headroom`, which caps its React peer dependency at 18 and so
 * sits unsupported on React 19 in the critical navigation path.
 */
export function useHideOnScroll({
  /** Ignore jitter below this many pixels. */
  threshold = 8,
  /** Always show the header within this distance of the top. */
  pinnedZone = 80,
} = {}) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const update = () => {
      frame.current = null;
      const current = window.scrollY;
      const delta = current - lastScrollY.current;

      if (current <= pinnedZone) {
        setHidden(false);
      } else if (Math.abs(delta) >= threshold) {
        setHidden(delta > 0);
      }

      lastScrollY.current = current;
    };

    // Scroll events fire far faster than frames; coalesce them into one read.
    const onScroll = () => {
      frame.current ??= requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [threshold, pinnedZone]);

  return hidden;
}
