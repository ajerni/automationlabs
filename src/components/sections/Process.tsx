"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { process } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Vorgehen"
          title={process.title}
          description={process.subtitle}
          align="center"
          className="mb-20"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block lg:left-8">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-linear-to-b from-accent to-accent-violet"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {process.steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.12}>
                <div className="relative flex gap-8 md:gap-12">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface-950 text-sm font-bold text-accent md:h-16 md:w-16 lg:text-base">
                    {step.number}
                  </div>
                  <div className="pt-1 md:pt-3">
                    <h3 className="text-2xl font-semibold text-heading">{step.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-muted">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
