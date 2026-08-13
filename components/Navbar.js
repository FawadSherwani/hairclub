"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-tight text-pine">
            Hair & Hair Club
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 hover:text-pine transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:+923000000000"
            className="hidden lg:inline text-sm text-clay hover:text-pine transition-colors"
          >
            0300-0000000
          </a>
          <button
            onClick={() => openBooking()}
            className="hidden sm:inline-flex items-center gap-2 bg-pine text-paper text-sm px-5 py-2.5 rounded-full hover:bg-pine-light transition-colors"
          >
            Book Consultation
          </button>
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d={menuOpen ? "M4 4l14 14M18 4L4 18" : "M2 6h18M2 11h18M2 16h18"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-line px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-ink"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              openBooking();
            }}
            className="mt-2 bg-pine text-paper text-sm px-5 py-3 rounded-full text-center"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}
