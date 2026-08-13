"use client";

import { useState } from "react";

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM",
];

// Single logical field: pick a date first, then time slots for that day
// appear right below it. Keeps both values as one combined string so the
// parent form only has to read one field.
export default function DateTimeField({ name = "preferred_datetime" }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const combined = date && time ? `${date} ${time}` : "";

  return (
    <div className="flex flex-col gap-3">
      <input type="hidden" name={name} value={combined} />

      <input
        type="date"
        className="contact-input"
        value={date}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => {
          setDate(e.target.value);
          setTime("");
        }}
      />

      {date && (
        <div>
          <p className="text-xs text-clay mb-2">Pick a time on {formatDate(date)}</p>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={`text-xs py-2 rounded-lg border transition-colors ${
                  time === slot
                    ? "bg-pine text-paper border-pine"
                    : "border-line text-clay hover:border-pine hover:text-pine bg-white"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function formatDate(value) {
  const d = new Date(`${value}T00:00:00`);
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
