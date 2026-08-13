import Image from "next/image";
import DensityMotif from "@/components/DensityMotif";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us — Hair & Hair Club",
  description:
    "The team, credentials and clinical approach behind Hair & Hair Club's density-mapped FUE and DHI transplants.",
};

const VALUES = [
  {
    title: "Plan before procedure",
    body: "A density map is drawn up before any extraction begins, so the number of grafts we take matches what the plan actually needs.",
  },
  {
    title: "Say no when donor supply is limited",
    body: "If your donor area can't support the density you're picturing, we'll tell you that in the consultation, not after surgery.",
  },
  {
    title: "Track outcomes against the plan",
    body: "Follow-up visits compare growth to the original map, not just a general 'looks good' check.",
  },
];

const TIMELINE = [
  { year: "2011", event: "First clinic opens in Lahore, focused solely on FUE." },
  { year: "2015", event: "Density-mapping protocol introduced ahead of every procedure." },
  { year: "2018", event: "Karachi and Islamabad clinics open." },
  { year: "2021", event: "PRP therapy and non-surgical hair systems added." },
  { year: "2024", event: "Faisalabad and Multan clinics open, five locations nationwide." },
];

const TEAM = [
  { name: "Dr. Omar Farooq", role: "Lead Surgeon & Founder", note: "ABHRS-certified, 14 years in hair restoration." },
  { name: "Dr. Ayesha Malik", role: "Surgeon, Karachi Clinic", note: "Specialises in female pattern hair loss and eyebrow restoration." },
  { name: "Dr. Bilal Chaudhry", role: "Surgeon, Islamabad Clinic", note: "Focus on beard and facial hair transplantation." },
  { name: "Hina Saeed", role: "Patient Care Director", note: "Coordinates consultations and post-op follow-up across all clinics." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-pine text-paper">
        <Image
          src="https://picsum.photos/seed/hhc-about/1600/700"
          alt="Hair & Hair Club clinic"
          fill
          sizes="100vw"
          className="object-cover opacity-25 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-pine/70" />
        <div className="absolute -right-14 -top-14 opacity-20">
          <DensityMotif rows={12} cols={20} direction="sparse-to-dense" color="var(--color-copper-light)" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-copper-light font-medium mb-4">
            About Hair & Hair Club
          </p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl text-balance">
            Fourteen years of treating hair loss as a planning problem
          </h1>
          <p className="mt-6 text-paper/70 max-w-xl">
            We started as a single clinic in Lahore with one rule: no graft
            gets placed without a density map behind it. That rule is still
            what our five clinics are built around.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            What we hold to
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-12 max-w-xl">
            Three things that don't change between clinics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="border-t border-line pt-6">
                <h3 className="font-display text-lg text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-clay leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            Timeline
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-14 max-w-xl">
            From one clinic to five
          </h2>
          <div className="flex flex-col">
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                className={`flex gap-6 sm:gap-10 py-6 ${
                  i !== TIMELINE.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="font-mono text-copper text-sm shrink-0 w-14">{t.year}</span>
                <p className="text-sm text-clay leading-relaxed">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            The team
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-14 max-w-xl">
            Surgeons and coordinators across our clinics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="border border-line rounded-2xl p-6">
                <div className="w-11 h-11 rounded-full bg-pine/10 flex items-center justify-center mb-5">
                  <span className="font-display text-pine text-sm">
                    {member.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h3 className="text-ink font-medium">{member.name}</h3>
                <p className="text-xs text-copper mt-1 mb-3">{member.role}</p>
                <p className="text-sm text-clay leading-relaxed">{member.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-clay">
            Sample team profiles — replace with your clinic's actual staff and credentials.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
