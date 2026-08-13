// Visual placeholder for a before/after result card. Real deployments should
// swap the two panels for actual consented patient photography — the dot
// density here only stands in for that until real images are supplied.
import DensityMotif from "./DensityMotif";

export default function BeforeAfterCard({ label, category, grafts }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-white">
      <div className="grid grid-cols-2">
        <div className="relative aspect-square bg-sand flex items-center justify-center p-6">
          <DensityMotif rows={10} cols={10} direction="dense-to-sparse" color="var(--color-clay)" gap={14} dotSize={4} />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-white/80 text-clay px-2 py-1 rounded-full">
            Before
          </span>
        </div>
        <div className="relative aspect-square bg-pine/95 flex items-center justify-center p-6">
          <DensityMotif rows={10} cols={10} direction="sparse-to-dense" color="var(--color-copper-light)" gap={14} dotSize={4} />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-paper/15 text-paper px-2 py-1 rounded-full">
            After
          </span>
        </div>
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
