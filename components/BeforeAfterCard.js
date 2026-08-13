// Visual placeholder for a before/after result card. Real deployments should
// swap the two panels for actual consented patient photography — the dot
// density here only stands in for that until real images are supplied.
import Image from "next/image";

export default function BeforeAfterCard({ label, category, grafts, image }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-white">
      <div className="relative aspect-[4/3] bg-sand">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-white/85 text-pine px-2 py-1 rounded-full">
          Hair system
        </span>
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-ink font-medium">{label}</p>
          <p className="text-xs text-clay mt-0.5">{category}</p>
        </div>
        <span className="font-mono text-xs text-copper">{grafts}</span>
      </div>
    </div>
  );
}
