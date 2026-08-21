"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";

const CITIES = [ "Faisalabad"];
const SERVICES = [
  "Custom Hair Unit",
  "Lace Hair System",
  "Skin Base Hair System",
  "Hybrid Hair System",
  "Refitting & Maintenance",
  "Not sure yet",
];

export default function BookingModal() {
  const { isOpen, closeBooking, prefillService } = useBooking();
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: CITIES[0],
    service: "",
    date: "",
    notes: "",
  });

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
        service: "",
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

      <div className="booking-papers" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => (
          <span key={index} className={`booking-paper booking-paper-${index + 1}`}>
            <i />
            <i />
            <i />
          </span>
        ))}
      </div>

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
              A client coordinator will call {form.name || "you"} within one
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
              <Field label="Preferred studio">
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
              <select name="service" value={form.service || prefillService || SERVICES[0]} onChange={handleChange} className="input">
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
                placeholder="Coverage area, preferred style, or questions about daily wear..."
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
              No payment required. We&apos;ll confirm by phone.
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
        .booking-papers {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .booking-paper {
          position: absolute;
          bottom: -7rem;
          width: 4.5rem;
          height: 5.75rem;
          padding: 1rem 0.75rem;
          border-radius: 0.35rem;
          background: rgba(250, 248, 244, 0.72);
          box-shadow: 0 10px 35px rgba(20, 24, 27, 0.2);
          animation: paper-float 9s linear infinite;
          will-change: transform, opacity;
        }
        .booking-paper::before {
          content: "";
          display: block;
          width: 45%;
          height: 0.28rem;
          margin-bottom: 0.65rem;
          border-radius: 999px;
          background: rgba(184, 134, 63, 0.6);
        }
        .booking-paper i {
          display: block;
          height: 0.18rem;
          margin-top: 0.4rem;
          border-radius: 999px;
          background: rgba(31, 61, 51, 0.22);
        }
        .booking-paper i:nth-child(2) { width: 78%; }
        .booking-paper i:nth-child(3) { width: 55%; }
        .booking-paper-1 { left: 5%; animation-delay: -1s; transform: rotate(-8deg); }
        .booking-paper-2 { left: 18%; animation-delay: -6s; animation-duration: 11s; }
        .booking-paper-3 { left: 34%; animation-delay: -3s; animation-duration: 10s; transform: rotate(7deg); }
        .booking-paper-4 { left: 58%; animation-delay: -8s; animation-duration: 12s; }
        .booking-paper-5 { left: 73%; animation-delay: -4s; animation-duration: 9.5s; transform: rotate(-6deg); }
        .booking-paper-6 { left: 88%; animation-delay: -7s; animation-duration: 11.5s; }
        .booking-paper-7 { left: 46%; animation-delay: -10s; animation-duration: 13s; transform: rotate(5deg); }
        @keyframes paper-float {
          0% { opacity: 0; transform: translate3d(0, 4rem, 0) rotate(-5deg); }
          12% { opacity: 0.65; }
          50% { transform: translate3d(1.5rem, -52vh, 0) rotate(5deg); }
          88% { opacity: 0.45; }
          100% { opacity: 0; transform: translate3d(-1rem, -112vh, 0) rotate(-7deg); }
        }
        @media (max-width: 640px) {
          .booking-paper { width: 3.5rem; height: 4.5rem; opacity: 0.5; }
          .booking-paper-2, .booking-paper-4, .booking-paper-6 { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .booking-papers { display: none; }
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
