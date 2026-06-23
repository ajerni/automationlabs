import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center text-3xl font-semibold tracking-tight transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span className="text-heading">Automation</span>
      <span className="text-accent">Labs</span>
    </Link>
  );
}
