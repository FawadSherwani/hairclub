import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-pine text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-10 lg:py-14">
        <div>
          <Link href="/" className="font-display text-2xl tracking-tight">
            Hair &amp; Hair Club
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65">
            Personalized hair restoration and non-surgical hair replacement in Faisalabad.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-copper-light">
            Explore
          </p>
          <nav className="mt-4 flex flex-col items-start gap-3" aria-label="Footer navigation">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-copper-light">
            Faisalabad clinic
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-paper/70">
            Near McDonald&apos;s, Salami Chowk<br />
            Satiana Road, Faisalabad
          </address>
          <a href="tel:+923057679198" className="mt-3 inline-block text-sm text-paper transition-colors hover:text-copper-light">
            0305-7679198
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Hair &amp; Hair Club. All rights reserved.Develop by </p>
          <p>Faisalabad, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
