"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";

const CITIES = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Multan"];
const SERVICES = [
  "FUE Hair Transplant",
  "DHI Hair Transplant",
  "Beard / Eyebrow Transplant",
  "PRP Therapy",
  "Non-Surgical Hair Replacement",
  "Not sure yet",
];

export default function BookingModal() {
  const { isOpen, closeBooking, prefillService } = useBooking();
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: CITIES[0],
    service: SERVICES[0],
    date: "",
    notes: "",
  });

  useEffect(() => {
    if (prefillService) {
      setForm((f) => ({ ...f, service: prefillService }));
    }
  }, [prefillService]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && closeBooking();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    // Wire this up to your booking endpoint / CRM of choice.
    setTimeout(() => {
      setStatus("success");
    }, 700);
  }

  function handleClose() {
    closeBooking();
    setTimeout(() => {
      setStatus("idle");
      setForm({
        name: "",
        phone: "",
        city: CITIES[0],
        service: SERVICES[0],
        date: "",
        notes: "",
      });
    }, 300);
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full sm:max-w-lg bg-paper rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 bg-paper flex items-start justify-between px-6 sm:px-8 pt-7 pb-4 border-b border-line">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper mb-1">
              Free consultation
            </p>
            <h3 id="booking-title" className="font-display text-2xl text-pine">
              Book your consultation
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="p-1.5 -mr-1 text-clay hover:text-ink transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="px-6 sm:px-8 py-12 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-pine/10 flex items-center justify-center mb-5">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M6 13l5 5 9-11" stroke="var(--color-pine)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 className="font-display text-xl text-ink mb-2">Request received</h4>
            <p className="text-sm text-clay max-w-xs mx-auto">
              A patient coordinator will call {form.name || "you"} within one
              business day to confirm your slot in {form.city}.
            </p>
            <button
              onClick={handleClose}
              className="mt-7 bg-pine text-paper text-sm px-6 py-2.5 rounded-full hover:bg-pine-light transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 flex flex-col gap-4">
            <Field label="Full name" required>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input"
              />
            </Field>

            <Field label="Phone number" required>
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="03XX-XXXXXXX"
                className="input"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Preferred clinic">
                <select name="city" value={form.city} onChange={handleChange} className="input">
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred date">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="input"
                />
              </Field>
            </div>

            <Field label="Interested in">
              <select name="service" value={form.service} onChange={handleChange} className="input">
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>

            <Field label="Anything we should know? (optional)">
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                placeholder="Hairline shape, area of concern, previous procedures..."
                className="input resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 bg-copper text-paper text-sm font-medium px-6 py-3.5 rounded-full hover:bg-copper-light transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Request consultation"}
            </button>
            <p className="text-[11px] text-clay text-center">
              No payment required. We'll confirm by phone.
            </p>
          </form>
        )}
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid var(--color-line);
          background: white;
          border-radius: 0.9rem;
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          color: var(--color-ink);
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus {
          border-color: var(--color-pine);
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink/70">
        {label} {required && <span className="text-copper">*</span>}
      </span>
      {children}
    </label>
  );
}
