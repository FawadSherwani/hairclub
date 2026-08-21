import Image from "next/image";
import DensityMotif from "@/components/DensityMotif";
import CTASection from "@/components/CTASection";

export const metadata = { title: "About Us | Hair & Hair Club", description: "Learn about Hair & Hair Club's private, personalized approach to non-surgical hair replacement and custom hair units." };
const VALUES = [
  { title: "Listen before recommending", body: "We begin with your lifestyle, comfort, coverage needs, and preferred look before discussing a hair system." },
  { title: "Make every detail personal", body: "Base, size, hairline, density, color, texture, and style are selected to work together naturally." },
  { title: "Support you after fitting", body: "Clear home-care guidance and regular professional maintenance help your unit stay comfortable, secure, and fresh." },
];
const TEAM = [
  { role: "Hair System Consultant", note: "Guides private consultations, measurements, and the right base choice." },
  { role: "Hair Unit Specialist", note: "Handles customization, attachment, blending, and natural hairline placement." },
  { role: "Styling Expert", note: "Cuts and styles each unit to complement the client's face and existing hair." },
  { role: "Client Care Coordinator", note: "Schedules fittings and keeps maintenance visits simple and consistent." },
];
export default function AboutPage() {
  return <><section className="relative overflow-hidden bg-pine text-paper"><Image src="/4.jpg" alt="Close-up of a non-surgical hair unit base" fill sizes="100vw" className="object-cover opacity-25 mix-blend-luminosity" priority /><div className="absolute inset-0 bg-pine/70" /><div className="absolute -right-14 -top-14 opacity-20"><DensityMotif rows={12} cols={20} direction="sparse-to-dense" color="var(--color-copper-light)" /></div><div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-24"><p className="text-xs uppercase tracking-[0.2em] text-copper-light font-medium mb-4">About Hair & Hair Club</p><h1 className="font-display text-4xl sm:text-5xl max-w-2xl text-balance">Personal hair replacement, designed around real life</h1><p className="mt-6 text-paper/70 max-w-xl">We help people regain the look they want without surgery. Our approach combines discreet advice, careful matching, expert fitting, and dependable maintenance.</p></div></section>
  <section className="bg-paper"><div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24"><p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">What matters to us</p><h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-12 max-w-xl">A natural result starts with thoughtful service</h2><div className="grid md:grid-cols-3 gap-8">{VALUES.map((item) => <div key={item.title} className="border-t border-line pt-6"><h3 className="font-display text-lg text-ink mb-2">{item.title}</h3><p className="text-sm text-clay leading-relaxed">{item.body}</p></div>)}</div></div></section>
  <section className="bg-sand"><div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24"><p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">Our promise</p><h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-6 max-w-xl">Private advice. Honest options. No surgical procedure.</h2><p className="text-clay leading-relaxed max-w-2xl">A hair unit should fit more than your scalp. It should fit your work, routine, climate, budget, and confidence. We explain the differences clearly so you can choose without pressure.</p></div></section>
  <section className="bg-white border-t border-line"><div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24"><p className="text-xs uppercase tracking-[0.2em] text-copper font-medium mb-4">The team</p><h2 className="font-display text-3xl sm:text-4xl text-ink text-balance mb-14 max-w-xl">Specialists for every part of your hair unit journey</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{TEAM.map((member) => <div key={member.role} className="border border-line rounded-2xl p-6"><div className="w-11 h-11 rounded-full bg-pine/10 flex items-center justify-center mb-5"><span className="font-display text-pine text-sm">HH</span></div><h3 className="text-ink font-medium">{member.role}</h3><p className="text-sm text-clay leading-relaxed mt-3">{member.note}</p></div>)}</div></div></section><CTASection /></>;
}
