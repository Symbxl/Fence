import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — S&M Fencing and Decking",
  description:
    "Request a free quote from S&M Fencing and Decking. Tell us about your fence, gate, deck, or porch project — we usually reply within 24 hours.",
};

const SERVICE_OPTIONS = [
  "Aluminum Fence Installation",
  "Automatic Gate Installation",
  "Automatic Gate Repair",
  "Chain Link Fence Installation",
  "Custom Fabrication",
  "Custom Fence Construction",
  "Deer / Ranch Rail Fencing",
  "Dog Fence Installation",
  "Porch / Deck Construction",
  "Repair / Other",
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line relative overflow-hidden">
        <div className="glow-brand" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 pt-20 pb-12 text-center">
          <p className="eyebrow">Free estimate</p>
          <h1 className="font-display text-5xl sm:text-7xl font-black mt-4 leading-[0.95] tracking-tight">
            Get a Quote
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-ink-soft text-lg">
            Tell us a little about your project and we&apos;ll come measure,
            talk options, and put a price together — usually within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 grid gap-12 lg:grid-cols-5">
        {/* FORM */}
        <div className="lg:col-span-3">
          <form
            action="https://formspree.io/f/your-id"
            method="POST"
            className="card p-7 sm:p-9 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field
              label="Property address"
              name="address"
              placeholder="Street, city, ZIP"
            />
            <SelectField
              label="What can we quote for you?"
              name="service"
              options={SERVICE_OPTIONS}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Approx. linear feet (if known)"
                name="length"
                placeholder="e.g. 150 ft"
              />
              <SelectField
                label="Timeline"
                name="timeline"
                options={[
                  "ASAP",
                  "Within 1 month",
                  "1–3 months",
                  "Just exploring",
                ]}
              />
            </div>
            <TextAreaField
              label="Project details"
              name="message"
              required
              placeholder="Materials, height, gates, slope, anything important..."
            />
            <div className="flex items-start gap-3">
              <input
                id="contact-ok"
                name="contact_ok"
                type="checkbox"
                className="mt-1 w-4 h-4 accent-cedar"
                defaultChecked
              />
              <label htmlFor="contact-ok" className="text-sm text-ink-soft">
                It&apos;s OK to text or call me at the number I provided.
              </label>
            </div>
            <button type="submit" className="btn-cedar w-full sm:w-auto">
              Send Request
              <Arrow />
            </button>
            <p className="text-xs text-muted">
              We&apos;ll never share your info. Estimates are always free and
              never carry a pressure pitch.
            </p>
          </form>
        </div>

        {/* DETAILS */}
        <aside className="lg:col-span-2 space-y-8">
          <div className="card p-6">
            <p className="eyebrow">Call or text</p>
            <a
              href="tel:0000000000"
              className="mt-3 block font-display text-3xl font-bold tracking-tight hover:text-cedar transition-colors"
            >
              (000) 000-0000
            </a>
            <p className="mt-2 text-sm text-ink-soft">
              Reach the owner directly. Texts are usually fastest.
            </p>
          </div>

          <div className="card p-6">
            <p className="eyebrow">Email</p>
            <a
              href="mailto:info@smfencinganddecking.com"
              className="mt-3 block font-display text-lg font-bold hover:text-cedar transition-colors break-all"
            >
              info@smfencinganddecking.com
            </a>
            <p className="mt-2 text-sm text-ink-soft">
              Replies within one business day.
            </p>
          </div>

          <div className="card p-6">
            <p className="eyebrow">Hours</p>
            <ul className="mt-3 text-sm text-ink-soft space-y-1.5">
              <li className="flex justify-between">
                <span className="font-semibold text-ink">Mon – Fri</span>
                <span>7am – 6pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-ink">Saturday</span>
                <span>8am – 2pm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold text-ink">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div
            className="rounded-3xl p-6 text-paper relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--brand) 0%, var(--brand-dark) 100%)",
            }}
          >
            <div className="picket-pattern absolute inset-0 opacity-15" aria-hidden />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-cedar">
                Service area
              </p>
              <p className="mt-3 text-sm text-paper/85 leading-relaxed">
                We work residential, commercial, and ranch projects within a
                ~50 mile radius of our shop. Have something further out?
                Reach out — we&apos;ll talk it through.
              </p>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-paper hover:gap-3 transition-all"
              >
                See all services <Arrow />
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] font-bold text-ink-soft mb-2">
        {label}
        {required && <span className="text-cedar ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-paper border border-line rounded-xl focus:border-ink focus:outline-none transition-colors text-base"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] font-bold text-ink-soft mb-2">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full px-4 py-3 bg-paper border border-line rounded-xl focus:border-ink focus:outline-none transition-colors text-base"
      >
        <option value="" disabled>
          Pick one...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] font-bold text-ink-soft mb-2">
        {label}
        {required && <span className="text-cedar ml-1">*</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-paper border border-line rounded-xl focus:border-ink focus:outline-none transition-colors text-base resize-y"
      />
    </label>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
