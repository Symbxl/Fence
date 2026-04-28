import Link from "next/link";
import Logo from "./Logo";

const services = [
  "Aluminum Fencing",
  "Automatic Gates",
  "Chain Link Fencing",
  "Custom Fabrication",
  "Custom Fence Construction",
  "Deer & Ranch Rail",
  "Dog Fencing",
  "Porches & Decks",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 lg:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm text-paper/70 leading-relaxed">
            Fences, gates, porches and decks built to last. Locally owned, fully
            insured, and proud of every job we sign our name to.
          </p>
          <Link href="/contact" className="btn-cedar mt-6">
            Get a Free Quote
          </Link>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cedar font-bold mb-4">
            Services
          </div>
          <ul className="space-y-2 text-sm text-paper/80">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-cedar">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cedar font-bold mb-4">
            Contact
          </div>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <a href="tel:0000000000" className="hover:text-cedar">
                (000) 000-0000
              </a>
            </li>
            <li>
              <a
                href="mailto:info@smfencinganddecking.com"
                className="hover:text-cedar"
              >
                info@smfencinganddecking.com
              </a>
            </li>
            <li className="pt-2">Mon &ndash; Fri &nbsp;7am &ndash; 6pm</li>
            <li>Sat &nbsp;8am &ndash; 2pm</li>
            <li>Sun &nbsp;Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/60">
          <p>&copy; {year} S&amp;M Fencing and Decking. All rights reserved.</p>
          <p>Licensed &middot; Bonded &middot; Insured</p>
        </div>
      </div>
    </footer>
  );
}
