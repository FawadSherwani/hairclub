import Image from "next/image";
import Link from "next/link";
import DensityMotif from "./DensityMotif";

export default function AboutSection() {
  return (
    <section className="bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div className="relative aspect-[5/4] rounded-2xl bg-sand overflow-hidden">
          <Image
            src="https://picsum.photos/seed/hhc-team/800/640"
            alt="Clinic team at work"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-pine/20" />
          <div className="absolute inset-0 flex items-center justify-center p-8 opacity-80">
            <DensityMotif rows={12} cols={14} direction="sparse-to-dense" color="var(--color-copper-light)" gap={15} dotSize={4} />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            About Hair & Hair Club
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-5">
            Started by clinicians who thought hair loss deserved a real plan
          </h2>
          <p className="text-clay leading-relaxed max-w-xl">
            Hair & Hair Club was founded in 2011 on a simple complaint: most transplant
            consultations ended in a graft-count quote, not an actual plan.
            We built our practice around density mapping first, technique
            second — five clinics later, that order hasn't changed.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <p className="font-mono text-2xl text-pine">14+</p>
              <p className="text-xs text-clay mt-1">years in practice</p>
            </div>
            <div>
              <p className="font-mono text-2xl text-pine">5</p>
              <p className="text-xs text-clay mt-1">clinics nationwide</p>
            </div>
            <div>
              <p className="font-mono text-2xl text-pine">ISHRS</p>
              <p className="text-xs text-clay mt-1">member surgeons</p>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-9 inline-flex text-sm text-pine underline underline-offset-4 decoration-line hover:decoration-pine"
          >
            More about our team and credentials →
          </Link>
        </div>
      </div>
    </section>
  );
}
