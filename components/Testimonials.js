const QUOTES = [
  {
    initials: "A.R.",
    role: "FUE patient, Lahore clinic",
    quote:
      "Seeing the actual graft-density number before surgery made the decision a lot less anxious for me.",
  },
  {
    initials: "S.K.",
    role: "DHI patient, Karachi clinic",
    quote:
      "The follow-up schedule was the part I didn't expect to appreciate as much as I did.",
  },
  {
    initials: "M.H.",
    role: "Beard transplant, Islamabad clinic",
    quote:
      "They were upfront that my donor area could only support a certain density, which I respected.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-pine text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-copper-light font-medium mb-4">
          Patient notes
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-balance mb-14 max-w-lg">
          Composite patient feedback, shared with permission
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {QUOTES.map((q) => (
            <figure key={q.initials} className="border-t border-paper/20 pt-6">
              <blockquote className="text-lg font-display italic leading-snug text-paper/95">
                "{q.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm text-paper/60">
                {q.initials} — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
