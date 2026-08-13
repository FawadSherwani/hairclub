"use client";

import { useState } from "react";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import CTASection from "@/components/CTASection";

const RESULTS = [
  { label: "Hairline restoration", tag: "Hairline", category: "FUE · 2,800 grafts", grafts: "8 mo" },
  { label: "Frontal density boost", tag: "Hairline", category: "DHI · 2,200 grafts", grafts: "12 mo" },
  { label: "Crown coverage", tag: "Crown", category: "DHI · 3,400 grafts", grafts: "10 mo" },
  { label: "Vertex thinning correction", tag: "Crown", category: "FUE · 3,900 grafts", grafts: "14 mo" },
  { label: "Beard density", tag: "Beard", category: "FUE · 1,100 grafts", grafts: "6 mo" },
  { label: "Full beard restoration", tag: "Beard", category: "FUE · 1,800 grafts", grafts: "9 mo" },
  { label: "Eyebrow reconstruction", tag: "Eyebrow", category: "FUE · 340 grafts", grafts: "7 mo" },
  { label: "Full scalp coverage", tag: "Full scalp", category: "DHI · 5,200 grafts", grafts: "16 mo" },
];

const TABS = ["All", "Hairline", "Crown", "Beard", "Eyebrow", "Full scalp"];

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
            Outcomes, organized by area
          </h1>
          <p className="mt-6 text-clay max-w-xl">
            Each result is shown against the graft count and time since
            surgery, since density fills in gradually over 8–14 months.
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
