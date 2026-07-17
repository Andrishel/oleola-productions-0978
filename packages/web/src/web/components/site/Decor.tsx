// Elementos decorativos: blobs pastel difuminados y chispas.

export function Blob({ className = "", color = "#ff7eb9" }: { className?: string; color?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-40 ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}

export function Twinkles() {
  const dots = [
    { top: "12%", left: "8%", size: 10, delay: "0s", color: "#FFD86E" },
    { top: "20%", left: "88%", size: 8, delay: "0.6s", color: "#FF7EB9" },
    { top: "64%", left: "6%", size: 7, delay: "1.1s", color: "#4ECDC4" },
    { top: "80%", left: "82%", size: 11, delay: "0.3s", color: "#A88BEB" },
    { top: "44%", left: "50%", size: 6, delay: "1.6s", color: "#FFD86E" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="animate-twinkle absolute block rounded-full"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            backgroundColor: d.color,
            animationDelay: d.delay,
            boxShadow: `0 0 12px ${d.color}`,
          }}
        />
      ))}
    </div>
  );
}
