export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
