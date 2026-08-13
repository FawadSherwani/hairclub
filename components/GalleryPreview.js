import Link from "next/link";
import BeforeAfterCard from "./BeforeAfterCard";

const PREVIEW = [
  { label: "Hairline restoration", category: "FUE · 2,800 grafts", grafts: "8 mo" },
  { label: "Crown coverage", category: "DHI · 3,400 grafts", grafts: "10 mo" },
  { label: "Beard density", category: "FUE · 1,100 grafts", grafts: "6 mo" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
              Results
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
              Outcomes, tracked against the original density plan
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm text-pine underline underline-offset-4 decoration-line hover:decoration-pine"
          >
            View full gallery →
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
