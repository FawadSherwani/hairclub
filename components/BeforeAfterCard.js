import Image from "next/image";

export default function BeforeAfterCard({ label, category, detail, beforeImage, afterImage }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-white">
      <div className="grid grid-cols-2">
        <div className="relative aspect-[4/5] bg-sand">
          <Image src={beforeImage} alt={`${label} before hair system`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw" className="object-cover" />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-white/90 text-clay px-2.5 py-1 rounded-full">Before</span>
        </div>
        <div className="relative aspect-[4/5] bg-pine">
          <Image src={afterImage} alt={`${label} after hair system`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw" className="object-cover" />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-pine/85 text-paper px-2.5 py-1 rounded-full">After</span>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-ink font-medium">{label}</p>
          <p className="text-xs text-clay mt-0.5">{category}</p>
        </div>
        <span className="font-mono text-xs text-copper">{detail}</span>
      </div>
    </div>
  );
}
