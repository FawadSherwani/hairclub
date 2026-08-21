import Link from "next/link";
import BeforeAfterCard from "./BeforeAfterCard";

const PREVIEW = [
  // Add your own photos to /public, then change these before and after paths.
  { label: "Natural lace base", category: "Breathable lace construction", detail: "Lace", beforeImage: "/3.jpg", afterImage: "/6.jpg" },
  { label: "Secure perimeter system", category: "Reinforced bonding zones", detail: "Hybrid", beforeImage: "/4.jpg", afterImage: "/7.jpg" },
  { label: "Full lace hair system", category: "Natural movement and coverage", detail: "Full lace", beforeImage: "/5.jpg", afterImage: "/8.jpg" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
              Our Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
              Hair units created for natural movement and confident wear
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm text-pine underline underline-offset-4 decoration-line hover:decoration-pine"
          >
            View our work &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PREVIEW.map((p) => (
            <BeforeAfterCard key={p.label} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
