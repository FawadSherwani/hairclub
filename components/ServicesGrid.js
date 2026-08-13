"use client";

import Link from "next/link";
import { useBooking } from "@/lib/booking-context";

export const SERVICES = [
  {
    slug: "fue",
    name: "FUE Hair Transplant",
    short: "Follicular Unit Extraction",
    body: "Follicles are extracted one at a time and placed by density map, leaving minimal, scattered donor scarring.",
    stat: "1–2 sessions",
  },
  {
    slug: "dhi",
    name: "DHI Hair Transplant",
    short: "Direct Hair Implantation",
    body: "Grafts are implanted directly with a Choi pen immediately after extraction, without pre-cut recipient sites.",
    stat: "Higher graft control",
  },
  {
    slug: "beard-eyebrow",
    name: "Beard & Eyebrow Transplant",
    short: "Facial hair restoration",
    body: "Density mapping applied to beard, moustache and eyebrow areas for a natural growth pattern.",
    stat: "500–2,500 grafts",
  },
  {
    slug: "prp",
    name: "PRP Therapy",
    short: "Platelet-rich plasma",
    body: "Concentrated platelets from your own blood are used to support existing follicles, alone or after surgery.",
    stat: "4–6 sessions",
  },
  {
    slug: "non-surgical",
    name: "Non-Surgical Replacement",
    short: "Hair systems",
    body: "Custom hair systems for those not ready for surgery, or supplementing a transplant in progress.",
    stat: "No downtime",
  },
];

export default function ServicesGrid({ full = false }) {
  const { openBooking } = useBooking();
  const items = full ? SERVICES : SERVICES.slice(0, 3);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
              Services
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
              Restoration methods, matched to your donor supply
            </h2>
          </div>
          {!full && (
            <Link
              href="/services"
              className="text-sm text-pine underline underline-offset-4 decoration-line hover:decoration-pine"
            >
              View all services →
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div
              key={s.slug}
              className="group border border-line rounded-2xl p-7 flex flex-col hover:border-pine transition-colors bg-white"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-copper mb-3">
                {s.short}
              </p>
              <h3 className="font-display text-xl text-ink mb-3">{s.name}</h3>
              <p className="text-sm text-clay leading-relaxed flex-1">{s.body}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-xs text-pine">{s.stat}</span>
                <button
                  onClick={() => openBooking(s.name)}
                  className="text-sm text-ink/80 group-hover:text-pine transition-colors"
                >
                  Ask about this →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
