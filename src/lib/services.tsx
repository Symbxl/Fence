import type { ReactNode } from "react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  features: string[];
  icon: ReactNode;
  tint: string;
  fg: string;
};

const stroke = { fill: "none", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const services: Service[] = [
  {
    slug: "aluminum-fencing",
    title: "Aluminum Fence Installation",
    short:
      "Sleek, strong, and rust-proof. Aluminum fencing that looks great for decades.",
    long:
      "Modern aluminum fencing offers the look of wrought iron without the upkeep. We install pool-code, residential, and commercial-grade aluminum panels — perfect for pools, gardens, and clean property lines.",
    features: [
      "Pool-code compliant options",
      "Powder-coated finishes",
      "Residential & commercial",
      "Custom heights & post caps",
    ],
    tint: "color-mix(in srgb, var(--steel) 14%, transparent)",
    fg: "var(--steel)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M3 21V8" /><path d="M9 21V8" /><path d="M15 21V8" /><path d="M21 21V8" />
        <path d="M2 12h20" /><path d="M2 17h20" />
        <path d="M3 8l3-3 3 3M9 8l3-3 3 3M15 8l3-3 3 3" />
      </svg>
    ),
  },
  {
    slug: "automatic-gates",
    title: "Automatic Gate Installation & Repairs",
    short:
      "Drive in, drive out. Smart gate operators with reliable repair service.",
    long:
      "From driveway swing gates to commercial slide gates, we install and service automatic gate operators. Keypads, intercoms, sensors, remotes — we keep it all running smooth.",
    features: [
      "Swing & slide operators",
      "Keypad / intercom / remote",
      "Safety sensors & loops",
      "Same-week repair service",
    ],
    tint: "color-mix(in srgb, var(--ink) 8%, transparent)",
    fg: "var(--ink)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M2 20V6h9v14" /><path d="M22 20V6h-9" />
        <path d="M2 6h20" /><path d="M11 11h2" /><path d="M11 15h2" />
        <circle cx="6.5" cy="13" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "chain-link-fencing",
    title: "Chain Link Fence Installation",
    short:
      "Affordable, durable, and quick to install. Chain link done right.",
    long:
      "Galvanized or vinyl-coated chain link is one of the most cost-effective ways to enclose a yard, jobsite, or commercial lot. We install standard, privacy-slatted, and tall security configurations.",
    features: [
      "Galvanized or vinyl-coated",
      "Heights up to 12'",
      "Privacy slats available",
      "Commercial & residential",
    ],
    tint: "color-mix(in srgb, var(--steel) 14%, transparent)",
    fg: "var(--steel)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M3 7l3 3 3-3 3 3 3-3 3 3 3-3" />
        <path d="M3 12l3 3 3-3 3 3 3-3 3 3 3-3" />
        <path d="M3 17l3 3 3-3 3 3 3-3 3 3 3-3" />
      </svg>
    ),
  },
  {
    slug: "custom-fabrication",
    title: "Custom Fabrication",
    short:
      "If you can sketch it, we can build it. In-house metal fabrication.",
    long:
      "We design and weld custom gates, railings, panels, and architectural metalwork in our own shop. Bring us a Pinterest board, a napkin sketch, or a CAD file — we’ll make it real.",
    features: [
      "In-house welding shop",
      "Wrought iron & steel",
      "One-of-a-kind gates",
      "Architectural railings",
    ],
    tint: "color-mix(in srgb, var(--cedar) 14%, transparent)",
    fg: "var(--cedar)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M14 4l6 6-9 9-6 0 0-6z" />
        <path d="M13 5l6 6" /><path d="M3 21l3-3" />
      </svg>
    ),
  },
  {
    slug: "custom-fence-construction",
    title: "Custom Fence Construction",
    short:
      "Cedar, redwood, board-on-board, shadowbox — built to your spec.",
    long:
      "Every yard is different. We build wood privacy fences, semi-privacy and decorative styles to fit your property — not a one-size-fits-all template. Posts set in concrete, hardware that won’t rust, lines that stay true.",
    features: [
      "Cedar, pine, redwood",
      "Board-on-board / shadowbox",
      "Custom heights & gates",
      "Concrete-set posts",
    ],
    tint: "color-mix(in srgb, var(--cedar) 14%, transparent)",
    fg: "var(--cedar)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M5 21V8l2-3 2 3v13" /><path d="M11 21V8l2-3 2 3v13" />
        <path d="M17 21V8l2-3 2 3v13" /><path d="M3 13h18" /><path d="M3 18h18" />
      </svg>
    ),
  },
  {
    slug: "deer-and-ranch-rail",
    title: "Deer Fencing & Ranch Rail",
    short:
      "Big land, big fences. Ranch rail and deer fencing for property lines.",
    long:
      "From classic three-rail ranch fence to 8′ deer fencing for orchards and gardens, we work properties of every size — including tractor-friendly entries and long-run installs.",
    features: [
      "2, 3, and 4-rail ranch",
      "8′ deer / wildlife fencing",
      "Long-run pricing",
      "Cattle & livestock rated",
    ],
    tint: "color-mix(in srgb, var(--brand) 14%, transparent)",
    fg: "var(--brand)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M3 8h18" /><path d="M3 13h18" /><path d="M3 18h18" />
        <path d="M6 5v17" /><path d="M14 5v17" />
      </svg>
    ),
  },
  {
    slug: "dog-fencing",
    title: "Dog Fence Installation",
    short:
      "Safe yards for happy dogs. Built to keep them in — and others out.",
    long:
      "Whether it’s a fully-enclosed run, a privacy yard, or a kennel build, we design dog fencing with the right height, dig-guards, and gate hardware to actually hold up to a real dog.",
    features: [
      "Dig-guard installation",
      "Self-closing gate latches",
      "Heights for any breed",
      "Run-line & full-yard builds",
    ],
    tint: "color-mix(in srgb, var(--brand) 14%, transparent)",
    fg: "var(--brand)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M5 13l-2-3 2-3 3 1 2-2 4 1 3 0 2 3-1 4-3 1v3l-2 1-3-1-2 1-3-1z" />
        <circle cx="9" cy="9" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    slug: "porches-and-decks",
    title: "Porches & Decks",
    short:
      "Outdoor living, built to last. Pressure-treated, cedar, and composite.",
    long:
      "Decks, screened porches, pergolas, stairs, and railings — we design and build outdoor spaces that hold up to weather and look great year after year. Composite, cedar, or pressure-treated.",
    features: [
      "Composite & cedar decking",
      "Screened porches & pergolas",
      "Stairs, railings, lighting",
      "Permits handled for you",
    ],
    tint: "color-mix(in srgb, var(--cedar) 14%, transparent)",
    fg: "var(--cedar)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" {...stroke}>
        <path d="M3 11h18" /><path d="M3 11v8h18v-8" />
        <path d="M5 19v3" /><path d="M19 19v3" />
        <path d="M3 11l4-5h10l4 5" />
      </svg>
    ),
  },
];
