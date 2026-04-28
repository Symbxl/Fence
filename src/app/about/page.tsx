import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — S&M Fencing and Decking",
  description:
    "Locally owned and operated. The story, the crew, and the standards behind S&M Fencing and Decking.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line relative overflow-hidden">
        <div className="glow-brand" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <p className="eyebrow">Our story</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4 leading-[0.95] tracking-tight">
            A small crew. <br />
            <span className="accent-mark">A high standard.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-20 space-y-7 text-lg leading-relaxed text-ink-soft">
        <p>
          S&M Fencing and Decking is a locally-owned outfit that started
          out doing fence work for friends and family. Word got around. One
          job became three. Three became thirty. We’ve been swinging
          hammers, mixing concrete, and welding gates for the same community
          ever since.
        </p>
        <p>
          The whole company runs on a simple idea: a fence isn’t just
          posts and panels. It’s a property line, a safe yard for a
          dog, a place to host a barbecue, the first thing you see every
          morning. It deserves to be done right.
        </p>
        <p>
          So we keep things small on purpose. The owner is on every job.
          Every post goes in concrete — no exceptions. Every gate
          swings true before we leave. Every site gets cleaned up at the end
          of every day. And every project comes with a written workmanship
          warranty.
        </p>
        <p>
          We do residential, commercial, and ranch. Wood, metal, aluminum,
          chain link, composite. New builds and repairs. If it’s
          outside and it surrounds, supports, or stands up — we
          probably build it.
        </p>
      </section>

      <section className="bg-bg-alt border-y border-line">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 grid gap-10 sm:grid-cols-3 text-center">
          {VALUES.map((v) => (
            <div key={v.title}>
              <div className="font-display text-5xl font-black text-cedar">
                {v.stat}
              </div>
              <div className="mt-3 font-display text-xl font-bold tracking-tight">
                {v.title}
              </div>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="eyebrow">What we stand for</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Our Standards
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STANDARDS.map((s) => (
            <div key={s.title} className="card p-7">
              <div className="font-display text-xl font-bold tracking-tight">
                {s.title}
              </div>
              <p className="mt-3 text-ink-soft leading-relaxed text-sm">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 0%, rgba(185,106,46,0.22), transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(47,74,58,0.28), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-5 lg:px-8 py-20 text-center">
          <p className="eyebrow">Stop by the shop</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Or just give us a call.
          </h2>
          <p className="mt-5 text-paper/80">
            We’re happy to walk through options, talk materials, and
            help you figure out what you actually need.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-cedar">
              Contact Us
            </Link>
            <Link
              href="/services"
              className="btn-outline border-paper/30 text-paper hover:bg-paper hover:text-ink"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const VALUES = [
  {
    stat: "15+",
    title: "Years in the area",
    body: "Building locally since day one. Same team, same standards.",
  },
  {
    stat: "1,000+",
    title: "Projects finished",
    body: "From single-gate fixes to multi-acre ranch fence runs.",
  },
  {
    stat: "100%",
    title: "Insured & licensed",
    body: "Fully bonded with general liability coverage on every job.",
  },
];

const STANDARDS = [
  {
    title: "Posts in concrete. Always.",
    body: "Every post on every job gets set in concrete. No skimping, no shortcuts. It’s how a fence stays standing for 20+ years.",
  },
  {
    title: "Hardware that lasts.",
    body: "Stainless or hot-dipped galvanized hardware on every build. Cheap screws and brackets are the first thing to fail — we don’t use them.",
  },
  {
    title: "Owner on site.",
    body: "We don’t hand jobs off to subcontractors. The person quoting your job is the person running it.",
  },
  {
    title: "Clean every evening.",
    body: "Tools picked up, scraps hauled, dirt knocked off the driveway. Every day. We’re working in your yard — we treat it that way.",
  },
  {
    title: "Written warranty.",
    body: "Every project comes with a written workmanship warranty. If something we built has an issue, we come back and fix it.",
  },
  {
    title: "Honest timelines.",
    body: "We’ll tell you straight up when we can start, how long it’ll take, and if rain pushes us back. No phantom delays.",
  },
];
