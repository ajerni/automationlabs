"use client";

import { techStack } from "@/content/site";

export function Marquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="relative overflow-hidden border-y border-border py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-surface-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-surface-950 to-transparent" />

      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-lg font-medium tracking-wide text-faint transition-colors hover:text-accent/60"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
