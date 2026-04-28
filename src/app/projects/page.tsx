import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — S&M Fencing and Decking",
  description:
    "A look at recent fence, gate, deck, and porch projects from S&M Fencing and Decking.",
};

type Project = {
  title: string;
  category: string;
  blurb: string;
  bg: string;
  initials: string;
  size: "wide" | "tall" | "square";
};

const projects: Project[] = [
  {
    title: "Cedar Privacy Fence",
    category: "Custom Fence Construction",
    blurb: "180 linear feet of board-on-board cedar with hidden hardware.",
    bg: "linear-gradient(135deg, #b96a2e, #8a4d1f)",
    initials: "CP",
    size: "wide",
  },
  {
    title: "Aluminum Pool Surround",
    category: "Aluminum Fencing",
    blurb: "Pool-code aluminum with self-closing gate and key-locking latch.",
    bg: "linear-gradient(135deg, #4a6479, #2c3e4f)",
    initials: "AP",
    size: "tall",
  },
  {
    title: "Driveway Swing Gate",
    category: "Automatic Gates",
    blurb: "Custom-fabricated steel gate with keypad and intercom.",
    bg: "linear-gradient(135deg, #16181d, #3a3f49)",
    initials: "DG",
    size: "square",
  },
  {
    title: "Three-Rail Ranch Run",
    category: "Deer & Ranch Rail",
    blurb: "1,200 feet of three-rail ranch fence on rolling pasture.",
    bg: "linear-gradient(135deg, #2f4a3a, #1f3328)",
    initials: "RR",
    size: "wide",
  },
  {
    title: "Composite Deck & Pergola",
    category: "Porches & Decks",
    blurb: "400 sq ft composite deck with cedar pergola and step lighting.",
    bg: "linear-gradient(135deg, #b96a2e, #5e2a08)",
    initials: "DP",
    size: "tall",
  },
  {
    title: "Dog Yard Build-Out",
    category: "Dog Fencing",
    blurb: "Full-yard 6′ cedar with dig guard and self-latching gate.",
    bg: "linear-gradient(135deg, #2f4a3a, #4a6479)",
    initials: "DY",
    size: "square",
  },
  {
    title: "Custom Steel Garden Gate",
    category: "Custom Fabrication",
    blurb: "One-of-a-kind hand-welded gate with twisted-bar inset.",
    bg: "linear-gradient(135deg, #3a3f49, #16181d)",
    initials: "SG",
    size: "square",
  },
  {
    title: "Chain Link Jobsite",
    category: "Chain Link Fencing",
    blurb: "Galvanized 8′ site fencing with privacy slats and rolling gate.",
    bg: "linear-gradient(135deg, #4a6479, #6b7280)",
    initials: "CL",
    size: "wide",
  },
];

const sizeClasses: Record<Project["size"], string> = {
  wide: "sm:col-span-2",
  tall: "row-span-2",
  square: "",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-line relative overflow-hidden">
        <div className="glow-brand" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <p className="eyebrow">Recent work</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4 leading-[0.95] tracking-tight">
            Projects
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-ink-soft text-lg">
            A small selection of recent fence, gate, and deck builds. We’ll
            send more photos with your estimate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense auto-rows-[220px]">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`relative overflow-hidden rounded-[24px] group ${sizeClasses[p.size]}`}
              style={{
                background: p.bg,
                boxShadow:
                  "0 30px 60px -40px rgba(22,24,29,0.4), 0 1px 0 rgba(255,255,255,0.1) inset",
              }}
            >
              <div className="absolute inset-0 picket-pattern opacity-15" aria-hidden />
              <div
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)",
                }}
                aria-hidden
              />
              <div className="absolute top-5 right-5 font-display text-7xl font-black text-paper/15 leading-none">
                {p.initials}
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-paper">
                <div className="text-[0.65rem] tracking-[0.25em] uppercase text-paper/70 font-semibold">
                  {p.category}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight leading-tight">
                  {p.title}
                </h3>
                <p
                  className="mt-1 text-sm text-paper/80 max-w-sm"
                  dangerouslySetInnerHTML={{ __html: p.blurb }}
                />
              </div>
              <div
                className="absolute inset-0 ring-1 ring-paper/10 rounded-[24px] pointer-events-none group-hover:ring-paper/30 transition-all"
                aria-hidden
              />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 py-20 text-center">
          <p className="eyebrow">Got a project in mind?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Let’s build it.
          </h2>
          <p className="mt-5 text-paper/80 max-w-xl mx-auto">
            Send us a few details and we’ll come measure, talk options,
            and put a quote together — usually within 48 hours.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn-cedar">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
