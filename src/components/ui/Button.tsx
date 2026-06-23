import Link from "next/link";
import { cn, isExternalUrl } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-accent text-on-accent shadow-lg shadow-accent/20 hover:bg-accent-bright hover:shadow-accent/30",
  secondary:
    "border border-border-emphasis bg-glass text-heading backdrop-blur-sm hover:border-border-strong hover:bg-glass-hover",
  ghost: "text-muted hover:text-heading",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
    variants[variant],
    className,
  );

  if (external || isExternalUrl(href)) {
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
