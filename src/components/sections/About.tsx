import { Check } from "lucide-react";
import { about } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <Parallax speed={0.15} className="pointer-events-none absolute -left-32 top-1/4">
        <div className="h-96 w-96 rounded-full bg-accent-violet/5 blur-3xl" />
      </Parallax>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Über uns
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              {about.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{about.description}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{about.mission}</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface-900/50 p-8 shadow-sm backdrop-blur-sm lg:p-10">
              <p className="mb-6 text-sm font-medium uppercase tracking-wider text-subtle">
                Was uns auszeichnet
              </p>
              <ul className="space-y-5">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-lg text-heading">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
