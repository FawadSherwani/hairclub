"use client";

import Image from "next/image";
import { useBooking } from "@/lib/booking-context";
import DensityMotif from "./DensityMotif";

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-copper font-medium mb-6">
            <span className="w-6 h-px bg-copper" />
            Density-mapped hair restoration
          </p>
          <h1 className="font-display text-balance text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[3.6rem] text-ink">
            Every graft is planned,
            <br />
            <span className="italic text-pine">not just placed.</span>
          </h1>
          <p className="mt-6 text-clay text-base sm:text-lg max-w-md leading-relaxed">
            We map your donor area's actual density before we touch a single
            follicle — so the coverage plan is built for your hair, not a
            standard template.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openBooking()}
              className="bg-pine text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:bg-pine-light transition-colors"
            >
              Book a free consultation
            </button>
            <a
              href="#process"
              className="text-sm text-ink/80 hover:text-pine transition-colors underline underline-offset-4 decoration-line"
            >
              See how the mapping works
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="sr-only">Years of practice</dt>
              <dd className="font-mono text-2xl text-pine">14+</dd>
              <p className="text-xs text-clay mt-1">years in practice</p>
            </div>
            <div>
              <dt className="sr-only">Clinics</dt>
              <dd className="font-mono text-2xl text-pine">5</dd>
              <p className="text-xs text-clay mt-1">clinics nationwide</p>
            </div>
            <div>
              <dt className="sr-only">Grafts per session</dt>
              <dd className="font-mono text-2xl text-pine">6,000+</dd>
              <p className="text-xs text-clay mt-1">grafts per session</p>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[4/5] rounded-[2rem] bg-pine overflow-hidden">
          <Image
            src="https://picsum.photos/seed/hhc-clinic/900/1100"
            alt="Clinic consultation room"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover opacity-70 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-pine/55" />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <DensityMotif
              rows={16}
              cols={16}
              direction="sparse-to-dense"
              color="var(--color-copper-light)"
              className="w-full h-full"
              gap={16}
              dotSize={5}
            />
          </div>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-pine-dark/90 to-transparent p-7">
            <p className="text-paper/90 text-sm font-mono">
              Recipient-area density: 42 → 68 grafts / cm²
            </p>
            <p className="text-paper/55 text-xs mt-1">
              Sample density map from a hairline restoration plan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
