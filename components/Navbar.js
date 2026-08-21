"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";
import WhatsAppIcon from "./WhatsAppIcon";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBERS = [
  { label: "0305-7679198", value: "923057679198" },
  { label: "0300-7291096", value: "923007291096" },
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
          <div className="hidden lg:flex flex-col gap-1">
            {WHATSAPP_NUMBERS.map((phone) => (
              <a
                key={phone.value}
                href={`https://wa.me/${phone.value}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-clay hover:text-green-600 transition-colors"
                aria-label={`WhatsApp ${phone.label}`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                {phone.label}
              </a>
            ))}
          </div>
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
          <div className="border-t border-line pt-4 flex flex-col gap-3">
            {WHATSAPP_NUMBERS.map((phone) => (
              <a
                key={phone.value}
                href={`https://wa.me/${phone.value}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-sm text-ink hover:text-green-600 transition-colors"
                aria-label={`WhatsApp ${phone.label}`}
              >
                <WhatsAppIcon className="h-5 w-5" />
                {phone.label}
              </a>
            ))}
          </div>
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
