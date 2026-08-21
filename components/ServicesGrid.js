"use client";

import Link from "next/link";
import { useBooking } from "@/lib/booking-context";

export const SERVICES = [
  { slug: "custom", name: "Custom Hair Unit", short: "Made for your look", body: "A lightweight hair unit tailored to your scalp measurements, coverage needs, hair texture, color, and preferred style.", stat: "Fully customized" },
  { slug: "lace", name: "Lace Hair System", short: "Breathable and natural", body: "A fine lace base creates a realistic hairline, natural movement, and comfortable everyday wear in warm weather.", stat: "Undetectable hairline" },
  { slug: "skin", name: "Skin Base Hair System", short: "Scalp-like appearance", body: "An ultra-thin base designed to sit close to the scalp for clean parting, easy styling, and a seamless appearance.", stat: "Close scalp fit" },
  { slug: "hybrid", name: "Hybrid Hair System", short: "Comfort meets durability", body: "Lace and skin materials are combined to balance a natural front, secure attachment, and practical maintenance.", stat: "Balanced construction" },
  { slug: "maintenance", name: "Refitting & Maintenance", short: "Ongoing care", body: "Professional removal, scalp cleansing, rebonding, haircut blending, and styling keep your unit fresh and secure.", stat: "Regular care plans" },
];

export default function ServicesGrid({ full = false }) {
  const { openBooking } = useBooking();
  const items = full ? SERVICES : SERVICES.slice(0, 3);
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">Hair units made to look, feel, and move naturally</h2>
          </div>
          {!full && <Link href="/services" className="text-sm text-pine underline underline-offset-4 decoration-line hover:decoration-pine">View all services &rarr;</Link>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => (
            <div key={service.slug} className="group border border-line rounded-2xl p-7 flex flex-col hover:border-pine transition-colors bg-white">
              <p className="text-xs uppercase tracking-[0.15em] text-copper mb-3">{service.short}</p>
              <h3 className="font-display text-xl text-ink mb-3">{service.name}</h3>
              <p className="text-sm text-clay leading-relaxed flex-1">{service.body}</p>
              <div className="mt-6 flex items-center justify-between"><span className="font-mono text-xs text-pine">{service.stat}</span><button onClick={() => openBooking(service.name)} className="text-sm text-ink/80 group-hover:text-pine transition-colors">Ask about this &rarr;</button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
