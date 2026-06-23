import {
  Workflow,
  Plug,
  Globe,
  Sparkles,
  Shield,
  Compass,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  workflow: Workflow,
  plug: Plug,
  globe: Globe,
  sparkles: Sparkles,
  shield: Shield,
  compass: Compass,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border-strong to-transparent" />

      <Container>
        <SectionHeading
          eyebrow="Leistungen"
          title="Alles, was Ihr Business beschleunigt"
          description="Von der Prozessautomatisierung bis zu massgeschneiderten Web-Services — modular, skalierbar und auf Ihre Ziele ausgerichtet."
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.id} delay={index * 0.08}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface-900/50 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:border-accent/20 hover:bg-surface-900/80">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-violet/10 text-accent transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-semibold text-heading">{service.title}</h3>
                  <p className="mt-3 flex-1 text-muted leading-relaxed">{service.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-border bg-glass px-3 py-1 text-xs text-muted"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Mehr erfahren
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
