import { Mail, Calendar } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Cta() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-surface-900 to-surface-950 p-10 text-center lg:p-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/15 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-accent-violet/10 blur-[60px]" />

            <p className="relative text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Bereit loszulegen?
            </p>
            <h2 className="relative mt-4 text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              Lassen Sie uns über Ihr nächstes
              <br className="hidden sm:block" />
              Automatisierungsprojekt sprechen
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-lg text-muted">
              Unverbindliches Erstgespräch — wir hören zu, stellen die richtigen Fragen und
              zeigen Ihnen konkrete Möglichkeiten auf.
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href={siteConfig.contact.url}>
                <Mail className="h-4 w-4" />
                Kontakt aufnehmen
              </Button>
              <Button href={siteConfig.contact.bookingUrl} variant="secondary">
                <Calendar className="h-4 w-4" />
                Termin vereinbaren
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
