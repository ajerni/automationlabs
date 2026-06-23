const contactUrl = "https://www.future-advice.ch/kontakt";
const bookingUrl = "https://calendly.com/jasmine-future-advice/30min";

export const siteConfig = {
  name: "AutomationLabs",
  tagline: "Intelligente Automatisierung für wachsende Unternehmen",
  url: "https://www.automationlabs.ch",
  locale: "de-CH",
  contact: {
    url: contactUrl,
    bookingUrl,
    email: "info@automationlabs.ch",
    phone: "+41 00 000 00 00",
    address: "BGW 4+6 Schweiz",
  },
} as const;

export const navigation = [
  { label: "Leistungen", href: "#services" },
  { label: "Vorgehen", href: "#process" },
  { label: "Über uns", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Kontakt", href: contactUrl },
] as const;

export const hero = {
  eyebrow: "Swiss Automation Agency",
  title: "Prozesse automatisieren.",
  titleHighlight: "Zeit zurückgewinnen.",
  description:
    "Wir verbinden Business-Automatisierung, Web-Services und smarte Add-ons zu Systemen, die KMUs messbar entlasten — von der Idee bis zum laufenden Betrieb.",
  primaryCta: { label: "Projekt besprechen", href: contactUrl },
  secondaryCta: { label: "Leistungen entdecken", href: "#services" },
  stats: [
    { value: "Agentic AI", label: "KI sinnvoll eingesetzt" },
    { value: "Automatisierung", label: "stabile Workflows" },
    { value: "24/7", label: "Zuverlässige Systeme" },
  ],
} as const;

export const intro = {
  title: "Automatisierung, die sich anfühlt wie Magie — und funktioniert wie Ingenieurskunst",
  paragraphs: [
    "AutomationLabs begleitet kleine und mittlere Unternehmen dabei, repetitive Aufgaben zu eliminieren, Datenflüsse zu verbinden und digitale Services nahtlos zu erweitern.",
    "Wir kombinieren Workflow-Automatisierung, API-Integrationen und moderne Web-Lösungen zu einem klaren Gesamtbild — pragmatisch umgesetzt, wartbar gebaut und auf Ihr Business zugeschnitten.",
  ],
  cta: { label: "Unverbindlich sprechen", href: contactUrl },
} as const;

export const services = [
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Workflows, die heute noch Zeit fressen — morgen laufen sie von selbst. Von n8n und Make bis zu Custom-Integrationen.",
    highlights: ["Prozessanalyse", "Workflow-Design", "API-Integrationen", "Monitoring"],
    icon: "workflow" as const,
  },
  {
    id: "integrations",
    title: "System-Integrationen",
    description:
      "CRM, ERP, Buchhaltung, Support-Tools — wir verbinden Ihre bestehende Landschaft zu einem reibungslosen Ökosystem.",
    highlights: ["HubSpot & Salesforce", "Bexio & Abacus", "Slack & Teams", "Custom APIs"],
    icon: "plug" as const,
  },
  {
    id: "web",
    title: "Web Services & Add-ons",
    description:
      "Portale, Dashboards, interne Tools und Erweiterungen — modern gebaut, schnell geliefert, einfach wartbar.",
    highlights: ["Next.js Apps", "Admin Dashboards", "Kundenportale", "API Backends"],
    icon: "globe" as const,
  },
  {
    id: "ai",
    title: "AI & Smart Assistants",
    description:
      "KI dort einsetzen, wo sie echten Mehrwert liefert — Dokumentenverarbeitung, Support-Bots und intelligente Routing-Logik.",
    highlights: ["Dokumenten-KI", "Chat-Assistenten", "Klassifizierung", "RAG-Systeme"],
    icon: "sparkles" as const,
  },
  {
    id: "maintenance",
    title: "Betrieb & Weiterentwicklung",
    description:
      "Automatisierung ist kein Einmalprojekt. Wir sorgen für Stabilität, Updates und kontinuierliche Optimierung.",
    highlights: ["SLA Support", "Performance", "Security", "Iterationen"],
    icon: "shield" as const,
  },
  {
    id: "consulting",
    title: "Automation Consulting",
    description:
      "Quick Wins identifizieren, Roadmap definieren, ROI transparent machen — bevor die erste Zeile Code geschrieben wird.",
    highlights: ["Audit", "Roadmap", "ROI-Analyse", "Workshops"],
    icon: "compass" as const,
  },
] as const;

export const process = {
  title: "So arbeiten wir",
  subtitle: "Von der ersten Idee zum laufenden System — strukturiert, transparent, ohne Overhead.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description: "Wir verstehen Ihre Prozesse, Pain Points und Ziele — und identifizieren die grössten Hebel.",
    },
    {
      number: "02",
      title: "Konzept",
      description: "Architektur, Toolwahl und Umsetzungsplan — klar dokumentiert, mit realistischem Scope.",
    },
    {
      number: "03",
      title: "Build",
      description: "Iterative Umsetzung mit regelmässigen Demos. Sie sehen Fortschritt, nicht nur Versprechen.",
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "Go-Live, Monitoring und kontinuierliche Verbesserung — damit Automatisierung langfristig trägt.",
    },
  ],
} as const;

export const about = {
  title: "Über AutomationLabs",
  description:
    "Wir sind ein spezialisiertes Team für Business-Automatisierung und digitale Services — mit Fokus auf KMU und Mittelstand in der Schweiz und dem DACH-Raum.",
  mission:
    "Unsere Mission: Technologie so einsetzen, dass Menschen sich auf das konzentrieren können, was wirklich zählt — Strategie, Kundenbeziehungen und Wachstum.",
  highlights: [
    "Pragmatisch statt over-engineered",
    "Transparente Kommunikation",
    "Wartbare, dokumentierte Systeme",
    "Messbare Ergebnisse",
  ],
} as const;

export const techStack = [
  "Workflow Automation Tools (n8n, Flowise, trigger.dev)",
  "Programming Languages (Python, JavaScript, TypeScript, C#, Rust)",
  "Database integrations (PostgreSQL, MySQL, MongoDB)",
  "Agentic AI & LLM's (OpenAI, Anthropic, Gemini)",
  "Communication Tools (Slack, Telegram, Teams)",
  "Cloud Services (Vercel, AWS, Azure, Google Cloud)",
  "Payment Processing (Stripe, PayPal)",
  "IoT - Internet of Things (MQTT, HiveMQ, Home Assistant, etc.)",
  "and many more...",
] as const;

export const insights = [
  {
    date: "März 2026",
    category: "Automation",
    title: "5 Prozesse, die jedes KMU sofort automatisieren sollte",
    excerpt:
      "Von Rechnungsstellung bis Lead-Routing — konkrete Quick Wins mit messbarem ROI für den Mittelstand.",
    href: "#",
  },
  {
    date: "Februar 2026",
    category: "Integration",
    title: "CRM und Buchhaltung verbinden: So sparen Sie 10 Stunden pro Woche",
    excerpt:
      "Ein praxisnaher Leitfaden für nahtlose Datenflüsse zwischen Sales, Finance und Operations.",
    href: "#",
  },
  {
    date: "Januar 2026",
    category: "AI",
    title: "KI in der Praxis: Wo Automatisierung wirklich Sinn macht",
    excerpt:
      "Nicht jedes Problem braucht AI — wir zeigen, wo intelligente Systeme echten Mehrwert liefern.",
    href: "#",
  },
] as const;

export const footer = {
  tagline: "Ihr Partner für intelligente Automatisierung und digitale Services.",
  links: [
    { label: "Impressum", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "AGB", href: "#" },
  ],
} as const;
