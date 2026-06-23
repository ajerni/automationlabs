"use client";

import { useEffect, useRef, useState } from "react";
import { techStack } from "@/content/site";

const PIXELS_PER_SECOND = 72;

function MarqueeContent() {
  return (
    <>
      {techStack.map((item) => (
        <span
          key={item}
          className="text-lg font-medium tracking-wide text-faint transition-colors hover:text-accent/60"
        >
          {item}
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(60);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDuration = () => {
      const copyWidth = track.scrollWidth / 2;
      if (copyWidth > 0) {
        setDuration(Math.max(copyWidth / PIXELS_PER_SECOND, 30));
      }
    };

    updateDuration();

    const observer = new ResizeObserver(updateDuration);
    observer.observe(track);
    window.addEventListener("resize", updateDuration);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDuration);
    };
  }, []);

  return (
    <section className="marquee-section relative overflow-hidden border-y border-border py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-surface-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-surface-950 to-transparent" />

      <div
        ref={trackRef}
        className="flex w-max marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center gap-12 pr-12">
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
