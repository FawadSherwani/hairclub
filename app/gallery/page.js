"use client";

import { useState } from "react";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import CTASection from "@/components/CTASection";

const RESULTS = [
  { label: "Natural front hairline", tag: "Lace front", category: "Fine lace edge", grafts: "Front", image: "/2.jpg" },
  { label: "Classic men's hair system", tag: "Full system", category: "Balanced all-over density", grafts: "Full", image: "/3.jpg" },
  { label: "Fine mesh base", tag: "Full system", category: "Lightweight breathable construction", grafts: "Mesh", image: "/4.jpg" },
  { label: "MGM lace-front system", tag: "Lace front", category: "Natural front with reinforced edge", grafts: "Lace", image: "/5.jpg" },
  { label: "Contour lace base", tag: "Lace front", category: "Flexible scalp-hugging fit", grafts: "Lace", image: "/6.jpg" },
  { label: "Secure perimeter system", tag: "Hybrid", category: "Reinforced bonding zones", grafts: "Hybrid", image: "/7.jpg" },
  { label: "Full lace system", tag: "Full system", category: "Natural movement and coverage", grafts: "Full lace", image: "/8.jpg" },
];

const TABS = ["All", "Lace front", "Full system", "Hybrid"];

export default function GalleryPage() {
  const [tab, setTab] = useState("All");
  const filtered = tab === "All" ? RESULTS : RESULTS.filter((r) => r.tag === tab);

  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10 lg:pt-20">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            Results
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl text-balance">
            Hair systems, organized by construction
          </h1>
          <p className="mt-6 text-clay max-w-xl">
            Explore our available base designs, hairline finishes and attachment
            options to find the right balance of comfort and realism.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  tab === t
                    ? "bg-pine text-paper border-pine"
                    : "border-line text-clay hover:border-pine hover:text-pine bg-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <BeforeAfterCard key={r.label} {...r} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
