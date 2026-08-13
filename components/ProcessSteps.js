const STEPS = [
  {
    n: "01",
    title: "Consultation & scalp analysis",
    body: "We examine donor supply, hair characteristics and the pattern of loss, and discuss what result is realistic for you.",
  },
  {
    n: "02",
    title: "Density mapping",
    body: "A graft count and density map is drawn up for the recipient area, so extraction and placement follow a plan rather than guesswork.",
  },
  {
    n: "03",
    title: "Extraction (FUE / DHI)",
    body: "Individual follicular units are removed from the donor area one at a time, under local anaesthesia.",
  },
  {
    n: "04",
    title: "Implantation",
    body: "Grafts are placed at the angle and density set out in the map, following your natural hair direction.",
  },
  {
    n: "05",
    title: "Recovery & follow-up",
    body: "You're seen at set intervals over the following year to track growth against the original plan.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            The process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
            Five stages, in the order they actually happen
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-px bg-line rounded-2xl overflow-hidden">
          {STEPS.map((step) => (
            <div key={step.n} className="bg-sand p-6 md:p-7 flex flex-col">
              <span className="font-mono text-copper text-sm">{step.n}</span>
              <h3 className="font-display text-lg text-ink mt-4 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-clay leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
