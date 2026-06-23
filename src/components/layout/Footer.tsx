import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, footer, navigation } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { isExternalUrl } from "@/lib/cn";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-950">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-muted leading-relaxed">{footer.tagline}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-7">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-subtle">
                Navigation
              </p>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    {isExternalUrl(item.href) ? (
                      <a
                        href={item.href}
                        className="text-muted transition-colors hover:text-heading"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-muted transition-colors hover:text-heading"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-subtle">
                Rechtliches
              </p>
              <ul className="space-y-3">
                {footer.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted transition-colors hover:text-heading"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-subtle">
              Kontakt
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-heading">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-heading">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name} — Alle Rechte vorbehalten
          </p>
          <a
            href={siteConfig.url}
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            {siteConfig.url.replace("https://", "")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
