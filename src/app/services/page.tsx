import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — S&M Fencing and Decking",
  description:
    "Aluminum fencing, automatic gates, chain link, custom fabrication, custom wood fences, deer & ranch rail, dog fences, porches, and decks. Free estimates.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line relative overflow-hidden">
        <div className="glow-brand" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8 pt-20 pb-16 text-center">
          <p className="eyebrow">What we do</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4 leading-[0.95] tracking-tight">
            Services
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-ink-soft text-lg">
            From a single gate repair to a full property build, we handle it
            all in-house. No subcontractors, no surprises.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-cedar">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 space-y-20">
        {services.map((s, idx) => (
          <article
            key={s.slug}
            id={s.slug}
            className="grid gap-10 lg:grid-cols-12 lg:items-center scroll-mt-24"
          >
            <div
              className={`lg:col-span-5 ${
                idx % 2 === 1 ? "lg:order-last" : ""
              }`}
            >
              <div
                className="aspect-[4/3] rounded-[28px] overflow-hidden relative card flex items-center justify-center p-8"
                style={{ background: s.tint }}
              >
                <div
                  className="absolute inset-0 picket-pattern opacity-20"
                  aria-hidden
                />
                <div
                  className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
                  style={{
                    background: "var(--paper)",
                    color: s.fg,
                    boxShadow:
                      "0 30px 60px -30px rgba(22, 24, 29, 0.25)",
                  }}
                >
                  <div className="scale-[2.2]">{s.icon}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p
                className="text-xs tracking-[0.22em] uppercase font-bold"
                style={{ color: s.fg }}
              >
                Service {String(idx + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 tracking-tight">
                {s.title}
              </h2>
              <p className="mt-5 text-ink-soft leading-relaxed text-lg">
                {s.long}
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-y-2 gap-x-6">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                    dangerouslySetInnerHTML={{
                      __html: `<span class="mt-1 w-4 h-4 rounded-full bg-brand/15 text-brand inline-flex items-center justify-center shrink-0"><svg width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='M4 12l5 5L20 6'/></svg></span><span>${f}</span>`,
                    }}
                  />
                ))}
              </ul>
              <div className="mt-7">
                <Link href="/contact" className="btn-outline">
                  Quote this service
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 py-20 text-center">
          <p className="eyebrow">Don&rsquo;t see it?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 tracking-tight">
            We probably build that too.
          </h2>
          <p className="mt-5 text-paper/80 max-w-xl mx-auto">
            Pergolas, mailbox surrounds, dumpster enclosures, custom railings
            &mdash; if it&rsquo;s outside and made of wood or metal, give us a
            call and we&rsquo;ll talk through it.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-cedar">
              Tell Us About It
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
