"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { hero } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-950" />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
        className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-accent-violet/15 blur-[100px]"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
        className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[80px]"
      />

      <motion.div style={{ opacity, y, scale }} className="relative z-10">
        <Container className="flex min-h-screen flex-col justify-center pb-24 pt-32">
          <FadeIn delay={0.1}>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-glass px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {hero.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-heading sm:text-6xl lg:text-7xl">
              {hero.title}
              <br />
              <span className="bg-gradient-to-r from-accent via-accent-bright to-accent-violet bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">
              {hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.45} className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </FadeIn>

          <FadeIn delay={0.55} className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-heading lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </FadeIn>
        </Container>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
