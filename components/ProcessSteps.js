const STEPS = [
  { n: "01", title: "Private consultation", body: "We discuss your hair loss, lifestyle, preferred style, and the kind of coverage you want without pressure or judgment." },
  { n: "02", title: "Scalp measurement", body: "We measure the coverage area and choose a comfortable base construction that suits your scalp and daily routine." },
  { n: "03", title: "Hair matching", body: "Color, texture, density, length, and hairline shape are matched to your natural hair and personal style." },
  { n: "04", title: "Fitting & styling", body: "Your hair unit is securely fitted, cut, blended, and styled so it works naturally with your existing hair." },
  { n: "05", title: "Care & maintenance", body: "We show you how to care for your unit and arrange regular refitting, cleaning, and styling when needed." },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-sand">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-xl mb-14"><p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">The process</p><h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">From consultation to a confident new look</h2></div>
        <div className="grid md:grid-cols-5 gap-px bg-line rounded-2xl overflow-hidden">
          {STEPS.map((step) => <div key={step.n} className="bg-sand p-6 md:p-7 flex flex-col"><span className="font-mono text-copper text-sm">{step.n}</span><h3 className="font-display text-lg text-ink mt-4 mb-2 leading-snug">{step.title}</h3><p className="text-sm text-clay leading-relaxed">{step.body}</p></div>)}
        </div>
      </div>
    </section>
  );
}
