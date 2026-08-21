import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
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
            Custom non-surgical hair units, professional fitting, styling, and maintenance in Faisalabad.
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
            Faisalabad studio
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-paper/70">
            Near McDonald&apos;s, Salami Chowk<br />
            Satiana Road, Faisalabad
          </address>
          <a href="tel:+923057679198" className="mt-3 inline-block text-sm text-paper transition-colors hover:text-copper-light">
            0305-7679198
          </a>
          <div className="mt-4 flex flex-col items-start gap-2">
            <a href="https://wa.me/923057679198" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-copper-light" aria-label="WhatsApp 0305-7679198">
              <WhatsAppIcon className="h-5 w-5" />
              0305-7679198
            </a>
            <a href="https://wa.me/923007291096" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-copper-light" aria-label="WhatsApp +92 300 7291096">
              <WhatsAppIcon className="h-5 w-5" />
              +92 300 7291096
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Hair &amp; Hair Club. All rights reserved.Develop by AZWEBSOFT</p>
          <p>Faisalabad, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
