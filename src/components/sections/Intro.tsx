import { intro } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Parallax } from "@/components/motion/Parallax";
import { ProcessAutomationVisual } from "@/components/motion/ProcessAutomationVisual";

export function Intro() {
  return (
    <section className="relative py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6 xl:gap-10">
          <FadeIn>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-heading sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {intro.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="flex justify-center px-2 sm:px-4">
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden
                className="absolute -left-4 hidden h-40 w-px bg-linear-to-b from-transparent via-border-strong to-transparent sm:-left-6 lg:block"
              />
              <Parallax speed={0.15}>
                <ProcessAutomationVisual className="h-52 w-52 sm:h-56 sm:w-56 lg:h-60 lg:w-60" />
              </Parallax>
              <div
                aria-hidden
                className="absolute -right-4 hidden h-40 w-px bg-linear-to-b from-transparent via-border-strong to-transparent sm:-right-6 lg:block"
              />
            </div>
          </FadeIn>

          <div className="space-y-6">
            {intro.paragraphs.map((paragraph, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
              </FadeIn>
            ))}
            <FadeIn delay={0.3}>
              <Button href={intro.cta.href} variant="secondary" className="mt-4">
                {intro.cta.label}
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
