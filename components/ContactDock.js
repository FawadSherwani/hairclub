"use client";

import Link from "next/link";
import { useState } from "react";

const PHONE = "+923057679198";

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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="currentColor">
      <path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.3 22l5.6-1.3A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.4 0-2.8-.4-4-1.1l-.3-.2-3.3.8.8-3.2-.2-.3A7.7 7.7 0 1 1 12 19.7Zm4.2-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-1.3-.5-2.4-1.5-3.1-2.7-.2-.3.2-.6.5-1 .1-.2.1-.4 0-.6L9.5 8c-.2-.5-.5-.4-.7-.4h-.5c-.2 0-.5.1-.8.4-.9 1-.9 2.4-.1 3.8 1.3 2.4 3.3 4.2 5.8 5.1 1.8.6 2.5.4 3.4-.4.5-.4.8-1.1.9-1.8.1-.3 0-.5-.2-.6l-1.1-.2Z" />
    </svg>
  );
}

const actions = [
  { label: "Email", href: "/contact", color: "bg-blue-600", icon: <EmailIcon /> },
  { label: "Call Now", href: `tel:${PHONE}`, color: "bg-emerald-600", icon: <PhoneIcon /> },
  { label: "WhatsApp", href: `https://wa.me/${PHONE.slice(1)}`, color: "bg-green-500", icon: <WhatsAppIcon />, external: true },
];

export default function ContactDock() {
  const [open, setOpen] = useState(true);

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
