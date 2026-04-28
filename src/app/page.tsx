import Link from "next/link";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="paper-grain absolute inset-0" aria-hidden />
        <div className="glow-brand" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8 pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="tag-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-cedar" />
                Locally owned &middot; Licensed &amp; insured
              </span>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mt-6 leading-[0.98] tracking-tight">
                Fences, gates,
                <br />
                <span className="accent-mark accent-brand">porches &amp; decks</span>
                <br />
                built to last.
              </h1>

              <p className="mt-7 max-w-xl text-lg text-ink-soft leading-relaxed">
                S&amp;M Fencing and Decking is a full-service crew handling
                everything from a backyard dog fence to a custom-fabricated
                automatic gate. Free estimates, honest timelines, work we&rsquo;d
                put on our own homes.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-cedar">
                  Get a Free Quote
                  <Arrow />
                </Link>
                <Link href="/services" className="btn-outline">
                  Browse Services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Free estimates",
                  "Same-week starts",
                  "Permits handled",
                  "Workmanship warranty",
                ].map((h) => (
                  <span key={h} className="tag-pill">
                    <Check /> {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="eyebrow">What we build</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight tracking-tight">
                Everything that goes
                <br />
                around &mdash; or beside &mdash; a home.
              </h2>
            </div>
            <Link href="/services" className="btn-outline">
              All services
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href="/services"
                className="card p-7 group flex flex-col"
              >
                <div
                  className="mb-5 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: s.tint, color: s.fg }}
                >
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">
                  {s.short}
                </p>
                <div className="mt-5 text-sm font-semibold text-cedar inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Learn more <Arrow />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-bg-alt border-y border-line">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="eyebrow">How it works</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
              Simple, honest, on time.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="font-display text-6xl font-black text-cedar/30 leading-none">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-24 grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Why folks call us back</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight tracking-tight">
            Built once.
            <br />
            <span className="accent-mark">Built right.</span>
          </h2>
          <p className="mt-6 text-ink-soft leading-relaxed text-lg">
            We&rsquo;re a small, owner-operated crew. That means the person
            you meet at the estimate is the person who&rsquo;ll be on site
            running the job. We don&rsquo;t cut corners on materials, posts
            go in concrete, hardware is rated to last, and our work comes
            with a written warranty.
          </p>
          <ul className="mt-7 space-y-3 text-ink-soft">
            {WHY.map((w) => (
              <li key={w} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-brand/15 text-brand flex items-center justify-center shrink-0">
                  <Check />
                </span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-outline mt-8">
            More about us
          </Link>
        </div>

        <div className="grid gap-4 grid-cols-2">
          {STATS.map((s) => (
            <div key={s.label} className="card p-7">
              <div className="font-display text-5xl font-black text-ink leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-cedar font-bold">
                {s.label}
              </div>
              <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 0%, rgba(185,106,46,0.22), transparent 60%), radial-gradient(40% 50% at 0% 100%, rgba(47,74,58,0.28), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 py-24 text-center">
          <p className="eyebrow">Ready to start?</p>
          <h2 className="font-display text-4xl sm:text-6xl font-black mt-3 tracking-tight">
            Free quote. No pressure.
          </h2>
          <p className="mt-5 text-paper/80 max-w-xl mx-auto">
            Tell us a little about your project &mdash; we&rsquo;ll come take a
            look, talk options, and put numbers in writing.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-cedar">
              Request Estimate
              <Arrow />
            </Link>
            <a
              href="tel:0000000000"
              className="btn-outline border-paper/30 text-paper hover:bg-paper hover:text-ink"
            >
              Call (000) 000-0000
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p className="eyebrow">Common questions</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            Good to know,
            <br />
            before you call.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item card px-6 py-5 group">
              <summary className="faq-summary flex items-center justify-between gap-6 cursor-pointer list-none">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                  {f.q}
                </span>
                <span className="faq-icon shrink-0 w-8 h-8 rounded-full bg-bg-alt text-ink flex items-center justify-center transition-transform">
                  <Plus />
                </span>
              </summary>
              <div className="faq-body mt-4 text-ink-soft leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-ink-soft">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="font-semibold text-cedar hover:text-cedar-dark underline-offset-4 hover:underline"
            >
              Get in touch &rarr;
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function Plus() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div
        className="aspect-[4/5] rounded-[28px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(155deg, #14241b 0%, #2f4a3a 50%, #b96a2e 100%)",
          boxShadow:
            "0 50px 100px -30px rgba(20, 36, 27, 0.6), 0 1px 0 rgba(255,255,255,0.18) inset",
        }}
      >
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.55), transparent 55%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 wood-grain opacity-30"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 picket-pattern opacity-30"
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, rgba(20,22,27,0.45) 100%)",
          }}
          aria-hidden
        />

        <div className="relative h-full flex flex-col justify-between p-8 text-paper">
          <div className="flex items-center justify-between text-paper/85 text-[0.65rem] tracking-[0.32em] uppercase font-semibold">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cedar" />
              Est. Local
            </span>
            <span>S&amp;M</span>
          </div>

          <div>
            <div className="font-display text-6xl font-black leading-[0.88] tracking-tight">
              Posts set
              <br />
              in concrete.
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-paper/30" />
              <div className="text-paper/85 text-[0.65rem] tracking-[0.32em] uppercase font-semibold">
                Lines that stay true
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hero-badge p-5 max-w-[15rem] hidden sm:block">
        <div className="flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-cedar font-bold">
          <Shield />
          Workmanship
        </div>
        <div className="mt-2 font-display text-2xl font-bold tracking-tight leading-tight">
          1-Year Warranty
        </div>
        <div className="mt-1 text-xs text-ink-soft">In writing, every job.</div>
      </div>

      <div className="absolute -top-5 -right-5 hero-badge px-4 py-3 hidden sm:flex items-center gap-3">
        <div className="flex -space-x-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} />
          ))}
        </div>
        <div>
          <div className="font-display text-base font-bold tracking-tight leading-none">
            5.0
          </div>
          <div className="text-[0.6rem] tracking-[0.2em] uppercase text-muted mt-0.5">
            Local reviews
          </div>
        </div>
      </div>
    </div>
  );
}

function Shield() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#b96a2e" aria-hidden>
      <path d="M12 2l3 7 7 .5-5.5 4.5 2 7-6.5-4-6.5 4 2-7L2 9.5 9 9z" />
    </svg>
  );
}

const STEPS = [
  {
    title: "Free estimate",
    body: "Call, text, or fill out the form. We come measure, talk options, and quote in writing.",
  },
  {
    title: "Plan & schedule",
    body: "Pick materials, finalize design, and lock a start date. We handle permits.",
  },
  {
    title: "Build it right",
    body: "Posts go in concrete. Lines stay true. We clean up at the end of every day.",
  },
  {
    title: "Walk it together",
    body: "Final walkthrough on site. You sign off. Warranty in writing, paperwork in hand.",
  },
];

const WHY = [
  "Owner on site for every project &mdash; no subcontracted crews",
  "Posts set in concrete; hardware rated for the long haul",
  "Permits, HOA submittals, and inspections handled for you",
  "Written workmanship warranty on every job",
  "Cleanup every evening &mdash; we leave the site better than we found it",
];

const STATS = [
  {
    value: "15+",
    label: "Years building",
    body: "Working in the area since day one. Same crew, same standards.",
  },
  {
    value: "1,000+",
    label: "Yards finished",
    body: "From a single gate to multi-acre ranch fence runs.",
  },
  {
    value: "5★",
    label: "Customer rating",
    body: "Most of our work comes from neighbors talking to neighbors.",
  },
  {
    value: "100%",
    label: "Insured",
    body: "Fully licensed, bonded, and liability-insured. Always.",
  },
];

const FAQS = [
  {
    q: "Do you charge for estimates?",
    a: "Nope — every estimate is free. We come out, measure, talk through materials and options, and put a written quote together with no obligation and no pressure.",
  },
  {
    q: "How long does a typical fence take?",
    a: "Most residential fences run 1–3 days from break-ground to cleanup once we're on site. Larger ranch jobs, decks, and automatic gates run longer — we'll give you an honest timeline with the quote.",
  },
  {
    q: "Are you licensed, bonded, and insured?",
    a: "Yes — fully licensed, bonded, and carrying general liability coverage on every job. Happy to share documentation before we start.",
  },
  {
    q: "Do you handle permits and HOA approvals?",
    a: "We do. We pull permits, file HOA submittals, and meet inspectors on site. You won't have to chase paperwork — that's part of the job.",
  },
  {
    q: "What's your service area?",
    a: "We work residential, commercial, and ranch projects within roughly 50 miles of our shop. Further out? Give us a call — for the right project we'll travel.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every job comes with a written workmanship warranty. If something we built has an issue, we come back and make it right.",
  },
];
