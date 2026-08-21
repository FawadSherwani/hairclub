"use client";

import Link from "next/link";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const PHONE = "+923057679198";
const SECOND_PHONE = "+923007291096";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none">
      <path d="M7.2 3.5 9.4 7c.4.7.3 1.5-.3 2l-1.2 1c1.2 2.6 3.4 4.7 6 5.9l1-1.2c.5-.6 1.3-.7 2-.3l3.5 2.2c.7.4.9 1.2.6 1.9l-.8 1.8c-.3.7-1 1.1-1.8 1-8-.8-14.3-7.1-15.1-15.1-.1-.8.3-1.5 1-1.8l1.8-.8c.4-.2.8-.2 1.1-.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const actions = [
  { label: "Email", href: "/contact", color: "bg-blue-600", icon: <EmailIcon /> },
  { label: "Call Now", href: `tel:${PHONE}`, color: "bg-emerald-600", icon: <PhoneIcon /> },
  { label: "WhatsApp", href: `https://wa.me/${PHONE.slice(1)}`, color: "bg-green-500", icon: <WhatsAppIcon />, external: true },
  { label: "WhatsApp", href: `https://wa.me/${SECOND_PHONE.slice(1)}`, color: "bg-green-500", icon: <WhatsAppIcon />, external: true },
];

export default function ContactDock() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-3" aria-label="Quick contact options">
      {open && (
        <div className="flex flex-col gap-3">
          {actions.map((action) => {
            const content = (
              <>
                <span className="min-w-32 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-ink shadow-lg sm:min-w-40 sm:text-base">
                  {action.label}
                </span>
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-lg sm:h-16 sm:w-16 ${action.color}`}>
                  {action.icon}
                </span>
              </>
            );

            const className = "flex items-center gap-3 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 rounded-full";

            return action.external ? (
              <a key={action.label} href={action.href} target="_blank" rel="noreferrer" className={className} aria-label={`${action.label} Hair & Hair Club`}>
                {content}
              </a>
            ) : (
              <Link key={action.label} href={action.href} className={className} aria-label={`${action.label} Hair & Hair Club`}>
                {content}
              </Link>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-colors hover:bg-red-700 sm:w-16"
        aria-label={open ? "Hide contact options" : "Show contact options"}
        aria-expanded={open}
      >
        {open ? (
          <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" fill="none">
            <path d="m6 6 8 8m0-8-8 8" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
          </svg>
        ) : (
          <PhoneIcon />
        )}
      </button>
    </aside>
  );
}
