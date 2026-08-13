import Image from "next/image";
import ServicesGrid, { SERVICES } from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import DensityMotif from "@/components/DensityMotif";

export const metadata = {
  title: "Services — Hair & Hair Club",
  description:
    "FUE, DHI, beard & eyebrow transplant, PRP therapy and non-surgical hair replacement.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-pine text-paper">
        <Image
          src="/5.jpg"
          alt="Premium lace-front hair system"
          fill
          sizes="100vw"
          className="object-cover opacity-25 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-pine/70" />
        <div className="absolute -right-10 -top-10 opacity-20">
          <DensityMotif rows={12} cols={20} direction="sparse-to-dense" color="var(--color-copper-light)" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-copper-light font-medium mb-4">
            Services
          </p>
          <h1 className="font-display text-4xl sm:text-5xl max-w-2xl text-balance">
            Five ways to restore density, chosen by what your donor area allows
          </h1>
          <p className="mt-6 text-paper/70 max-w-xl">
            Not every method suits every patient. Your consultation includes a
            recommendation on which of these fits your hair loss pattern, age
            and donor supply — not a default upsell to the most expensive one.
          </p>
        </div>
      </section>

      <ServicesGrid full />

      <section className="bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">
            Method comparison
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mb-12 text-balance">
            FUE vs. DHI, side by side
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-line text-left text-clay">
                  <th className="py-4 pr-6 font-medium">Factor</th>
                  <th className="py-4 pr-6 font-medium">FUE</th>
                  <th className="py-4 font-medium">DHI</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {[
                  ["Extraction method", "Individual punch extraction", "Individual punch extraction"],
                  ["Implantation", "Pre-made recipient sites", "Direct implantation with a Choi pen"],
                  ["Session length", "Typically shorter", "Typically longer"],
                  ["Best suited for", "Larger areas, higher graft counts", "Precision zones like the hairline"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-line">
                    <td className="py-4 pr-6 text-ink font-medium">{row[0]}</td>
                    <td className="py-4 pr-6 text-clay">{row[1]}</td>
                    <td className="py-4 text-clay">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTASection />
    </>
  );
}
