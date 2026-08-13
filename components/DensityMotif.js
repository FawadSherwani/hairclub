// Signature visual: a grid of dots that thins from dense (left) to sparse
// (right), or reverse. This mirrors the actual clinical concept of graft
// density mapping used to plan a transplant, so it doubles as a recurring
// diagram rather than decoration.
export default function DensityMotif({
  rows = 8,
  cols = 22,
  direction = "dense-to-sparse", // or "sparse-to-dense"
  color = "var(--color-copper)",
  className = "",
  dotSize = 3,
  gap = 13,
}) {
  const width = cols * gap;
  const height = rows * gap;
  const dots = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const progress = direction === "dense-to-sparse" ? c / cols : 1 - c / cols;
      // probability a dot survives at this column — creates the thinning effect
      const seed = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
      const rand = seed - Math.floor(seed);
      const keep = rand > progress * 0.92;
      if (!keep) continue;
      const scale = 1 - progress * 0.45;
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap + gap / 2}
          cy={r * gap + gap / 2}
          r={(dotSize * scale) / 2}
          fill={color}
          opacity={0.35 + (1 - progress) * 0.65}
        />
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {dots}
    </svg>
  );
}
