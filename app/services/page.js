import Image from "next/image";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import DensityMotif from "@/components/DensityMotif";

export const metadata = { title: "Non-Surgical Hair Units | Hair & Hair Club", description: "Explore custom lace, skin, and hybrid hair systems with professional fitting, styling, and maintenance in Faisalabad." };

const COMPARISON = [
  ["Best for", "Breathability and a natural front", "A close-to-scalp finish", "Everyday balance"],
  ["Hairline", "Soft and highly natural", "Clean and defined", "Natural lace front"],
  ["Feel", "Light and breathable", "Smooth and close fitting", "Comfortable and secure"],
  ["Care", "Gentle regular maintenance", "Simple cleaning routine", "Flexible maintenance"],
];

export default function ServicesPage() {
  return <>
    <section className="relative overflow-hidden bg-pine text-paper">
      <Image src="/5.jpg" alt="Premium non-surgical hair unit" fill sizes="100vw" className="object-cover opacity-25 mix-blend-luminosity" priority />
      <div className="absolute inset-0 bg-pine/70" /><div className="absolute -right-10 -top-10 opacity-20"><DensityMotif rows={12} cols={20} direction="sparse-to-dense" color="var(--color-copper-light)" /></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-24"><p className="text-xs uppercase tracking-[0.2em] text-copper-light font-medium mb-4">Non-surgical solutions</p><h1 className="font-display text-4xl sm:text-5xl max-w-2xl text-balance">The right hair unit starts with the right base</h1><p className="mt-6 text-paper/70 max-w-xl">We help you choose a lace, skin, or hybrid system based on comfort, lifestyle, coverage, and the finish you want. Every unit is fitted and styled for you.</p></div>
    </section>
    <ServicesGrid full />
    <section className="bg-white border-y border-line"><div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24"><p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">Base comparison</p><h2 className="font-display text-3xl sm:text-4xl text-ink mb-12 text-balance">Lace, skin, and hybrid systems</h2><div className="overflow-x-auto"><table className="w-full text-sm min-w-[680px]"><thead><tr className="border-b border-line text-left text-clay"><th className="py-4 pr-6 font-medium">Factor</th><th className="py-4 pr-6 font-medium">Lace</th><th className="py-4 pr-6 font-medium">Skin</th><th className="py-4 font-medium">Hybrid</th></tr></thead><tbody className="align-top">{COMPARISON.map((row) => <tr key={row[0]} className="border-b border-line">{row.map((cell, i) => <td key={cell} className={`py-4 ${i < 3 ? "pr-6" : ""} ${i === 0 ? "text-ink font-medium" : "text-clay"}`}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>
    <ProcessSteps /><CTASection />
  </>;
}
