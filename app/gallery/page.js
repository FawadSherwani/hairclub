"use client";
import { useState } from "react";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import CTASection from "@/components/CTASection";

const RESULTS = [
  // Add your own photos to /public, then change these before and after paths.
  { label: "Natural front hairline", tag: "Lace", category: "Fine lace base", detail: "Natural front", beforeImage: "/3.jpg", afterImage: "/6.jpg" },
  { label: "Secure everyday fit", tag: "Hybrid", category: "Lace and skin base", detail: "Hybrid", beforeImage: "/4.jpg", afterImage: "/7.jpg" },
  { label: "Full coverage styling", tag: "Full coverage", category: "Custom full-cap system", detail: "Full cap", beforeImage: "/5.jpg", afterImage: "/8.jpg" },
  { label: "Lightweight top coverage", tag: "Lace", category: "Breathable lace system", detail: "Light density", beforeImage: "/3.jpg", afterImage: "/6.jpg" },
  { label: "Close scalp appearance", tag: "Skin", category: "Ultra-thin skin base", detail: "Skin base", beforeImage: "/4.jpg", afterImage: "/7.jpg" },
  { label: "Textured custom finish", tag: "Custom", category: "Color and texture matched", detail: "Custom", beforeImage: "/5.jpg", afterImage: "/8.jpg" },
];
const TABS = ["All", "Lace", "Skin", "Hybrid", "Full coverage", "Custom"];
export default function GalleryPage() {
  const [tab, setTab] = useState("All"); const filtered = tab === "All" ? RESULTS : RESULTS.filter((item) => item.tag === tab);
  return <><section className="bg-sand"><div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10 lg:pt-20"><p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">Our Work</p><h1 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl text-balance">Before &amp; after transformations</h1><p className="mt-6 text-clay max-w-xl">See natural-looking transformations across different base types, coverage options, and finishes.</p><div className="mt-10 flex flex-wrap gap-2">{TABS.map((item) => <button key={item} onClick={() => setTab(item)} className={`px-4 py-2 rounded-full text-sm border transition-colors ${tab === item ? "bg-pine text-paper border-pine" : "border-line text-clay hover:border-pine hover:text-pine bg-white"}`}>{item}</button>)}</div></div></section><section className="bg-sand"><div className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28"><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{filtered.map((item) => <BeforeAfterCard key={item.label} {...item} />)}</div></div></section><CTASection /></>;
}
