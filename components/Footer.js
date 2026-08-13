"use client";

import { useState } from "react";
import { useBooking } from "@/lib/booking-context";
import DateTimeField from "@/components/DateTimeField";

const LOCATIONS = [
  {
    city: "Faisalabad",
    address: "Near McDonald's, Salami Chowk, Satiana Road, Faisalabad",
    phone: "0300-0000003",
  },
];

export default function ContactPage() {
  const { openBooking } = useBooking();
  const [sent, setSent] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Faisalabad");

  const selectedLocation = LOCATIONS.find((l) => l.city === selectedCity);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    selectedLocation.address
  )}&z=15&output=embed`;

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-20 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            Contact
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink max-w-2xl text-balance mb-14">
            Questions before you book? Send them here.
          </h1>

          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-14">
            <div className="bg-white border border-line rounded-2xl p-8">
              {sent ? (
                <div className="py-10 text-center">
                  <h3 className="font-display text-xl text-pine mb-2">
                    Message sent
                  </h3>
                  <p className="text-sm text-clay">
                    We'll reply within one business day. Prefer to talk sooner?
                  </p>
                  <button
                    onClick={() => openBooking()}
                    className="mt-6 bg-pine text-paper text-sm px-6 py-2.5 rounded-full hover:bg-pine-light transition-colors"
                  >
                    Book a consultation instead
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-ink/70">Full name</span>
                      <input required className="contact-input" placeholder="Your name" />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-ink/70">Phone</span>
                      <input required type="tel" className="contact-input" placeholder="03XX-XXXXXXX" />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium text-ink/70">Email</span>
                    <input type="email" className="contact-input" placeholder="you@example.com" />
                  </label>
                  <div className="grid sm:grid-cols-2 gap-5 items-start">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-ink/70">Select your service</span>
                      <select className="contact-input" defaultValue="">
                        <option value="" disabled>Choose a service</option>
                        <option>FUE Hair Transplant</option>
                        <option>DHI Hair Transplant</option>
                        <option>Beard / Eyebrow Transplant</option>
                        <option>PRP Therapy</option>
                        <option>Non-Surgical Hair Replacement</option>
                        <option>Not sure yet</option>
                      </select>
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-ink/70">Preferred date &amp; time</span>
                      <DateTimeField />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium text-ink/70">Message</span>
                    <textarea required rows={5} className="contact-input resize-none" placeholder="How can we help?" />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 self-start bg-pine text-paper text-sm px-7 py-3 rounded-full hover:bg-pine-light transition-colors"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display text-xl text-ink mb-6">Our clinics</h2>
              <ul className="flex flex-col gap-6">
                {LOCATIONS.map((loc) => (
                  <li key={loc.city} className="border-b border-line pb-6 last:border-0">
                    <button
                      onClick={() => setSelectedCity(loc.city)}
                      className={`text-left w-full transition-colors ${
                        selectedCity === loc.city ? "text-pine" : "text-ink"
                      }`}
                    >
                      <p className="font-medium flex items-center gap-2">
                        {loc.city}
                        {selectedCity === loc.city && (
                          <span className="text-[10px] uppercase tracking-widest bg-pine/10 text-pine px-2 py-0.5 rounded-full">
                            Showing on map
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-clay mt-1">{loc.address}</p>
                    </button>
                    <a href={`tel:${loc.phone}`} className="text-sm text-pine mt-1 inline-block">
                      {loc.phone}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl overflow-hidden border border-line aspect-[4/3]">
                <iframe
                  key={selectedCity}
                  title={`${selectedCity} clinic location map`}
                  src={mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <button
                onClick={() => openBooking()}
                className="mt-6 w-full bg-copper text-paper text-sm px-6 py-3 rounded-full hover:bg-copper-light transition-colors"
              >
                Or skip ahead — book a consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .contact-input {
          width: 100%;
          border: 1px solid var(--color-line);
          background: var(--color-paper);
          border-radius: 0.9rem;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.2s;
        }
        .contact-input:focus {
          border-color: var(--color-pine);
        }
      `}</style>
    </>
  );
}