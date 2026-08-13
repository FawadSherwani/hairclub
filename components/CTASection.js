"use client";

import { useBooking } from "@/lib/booking-context";

export default function CTASection() {
  const { openBooking } = useBooking();
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-20 lg:pb-28">
        <div className="rounded-[2rem] bg-ink text-paper px-8 py-14 sm:px-16 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl sm:text-4xl text-balance">
              Start with a density assessment, not a sales pitch.
            </h2>
            <p className="mt-4 text-paper/60 text-sm sm:text-base">
              Free consultation, in person or over video, at any of our five
              clinics.
            </p>
          </div>
          <button
            onClick={() => openBooking()}
            className="shrink-0 bg-copper text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:bg-copper-light transition-colors"
          >
            Book a free consultation
          </button>
        </div>
      </div>
    </section>
  );
}
