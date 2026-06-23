import { cn } from "@/lib/cn";
import { FadeIn } from "@/components/motion/FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn(align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </FadeIn>
  );
}
