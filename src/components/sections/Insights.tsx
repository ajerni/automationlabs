import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Insights() {
  return (
    <section id="insights" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          title="Gedanken & Praxiswissen"
          description="Tipps, Trends und Erfahrungen aus der Welt der Business-Automatisierung."
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, index) => (
            <FadeIn key={post.title} delay={index * 0.1}>
              <Link
                href={post.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface-900/30 p-8 shadow-sm transition-all duration-500 hover:border-accent/20 hover:bg-surface-900/60"
              >
                <div className="mb-4 flex items-center gap-3 text-sm text-muted">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-dot" />
                  <span className="text-accent">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-heading transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-muted leading-relaxed">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Weiterlesen
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
