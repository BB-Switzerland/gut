"use client";

/**
 * Dashed running route — décorative, évoque le tracé d'une course
 */
export function RouteTrail({
  className = "",
  color = "#ec6436",
  variant = "loop",
  strokeWidth = 4,
  showDots = true,
}: {
  className?: string;
  color?: string;
  variant?: "loop" | "wave" | "curve" | "vertical";
  strokeWidth?: number;
  showDots?: boolean;
}) {
  const paths: Record<typeof variant, string> = {
    loop: "M 40 200 Q 100 80, 200 120 T 360 80 Q 420 60, 460 140 T 520 240 Q 480 320, 380 300 T 200 320 Q 80 320, 40 200 Z",
    wave: "M 0 60 Q 80 20, 160 60 T 320 60 Q 400 60, 480 60 T 640 60",
    curve: "M 40 280 C 100 200, 160 100, 280 120 S 440 200, 480 80",
    vertical: "M 40 20 Q 80 100, 40 180 T 80 340 Q 120 420, 60 500",
  };
  return (
    <svg
      className={className}
      viewBox={variant === "vertical" ? "0 0 120 520" : "0 0 640 320"}
      fill="none"
      aria-hidden
    >
      <path
        d={paths[variant]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 14"
      />
      {showDots && (
        <>
          <circle cx={variant === "vertical" ? 40 : 40} cy={variant === "vertical" ? 20 : variant === "wave" ? 60 : variant === "curve" ? 280 : 200} r="9" fill="#00a184" stroke="#fff" strokeWidth="3" />
          <circle cx={variant === "vertical" ? 60 : variant === "wave" ? 640 : variant === "curve" ? 480 : 380} cy={variant === "vertical" ? 500 : variant === "wave" ? 60 : variant === "curve" ? 80 : 300} r="9" fill={color} stroke="#fff" strokeWidth="3" />
        </>
      )}
    </svg>
  );
}

/**
 * Dossard — pinned race number, comme un vrai dossard
 */
export function Dossard({
  number,
  rotation = -2,
  color = "#ec6436",
  size = "md",
}: {
  number: string;
  rotation?: number;
  color?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeCls = { sm: "w-20 h-24 text-2xl", md: "w-28 h-32 text-4xl", lg: "w-36 h-40 text-5xl" }[size];
  return (
    <div
      className={`relative ${sizeCls} bg-white rounded-md shadow-soft-lg flex items-center justify-center font-display text-ink select-none`}
      style={{ transform: `rotate(${rotation}deg)`, background: "#fdfdfb" }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.22em] font-bold" style={{ color }}>
        GUT 2026
      </div>
      <span>{number}</span>
      <div className="absolute -top-1 left-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
      <div className="absolute -top-1 right-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
      <div className="absolute -bottom-1 left-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
      <div className="absolute -bottom-1 right-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] tracking-wider font-semibold text-ink/55">
        Geneva Urban Trail
      </div>
    </div>
  );
}

/**
 * KM marker — kilometre flag with km number
 */
export function KmMarker({
  km,
  color = "#ec6436",
  size = "md",
  rotation = 0,
}: {
  km: number;
  color?: string;
  size?: "sm" | "md";
  rotation?: number;
}) {
  const sizeCls = { sm: "w-14 h-14 text-base", md: "w-20 h-20 text-xl" }[size];
  return (
    <div
      className={`relative ${sizeCls} rounded-full grid place-items-center font-display text-white shadow-soft`}
      style={{ background: color, transform: `rotate(${rotation}deg)` }}
    >
      <div className="text-[8px] uppercase tracking-widest font-bold opacity-80 -mb-1">KM</div>
      <div className="leading-none">{km}</div>
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-soft-sm" />
    </div>
  );
}

/**
 * Topographic background — subtle contour lines
 */
export function TopoBackground({ className = "", opacity = 0.08 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden
      style={{ opacity }}
    >
      <defs>
        <pattern id="topo-bg" x="0" y="0" width="240" height="160" patternUnits="userSpaceOnUse">
          <path d="M0 80 Q60 20 120 80 T240 80" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M0 100 Q60 40 120 100 T240 100" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M0 120 Q60 60 120 120 T240 120" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M0 60 Q60 0 120 60 T240 60" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#topo-bg)" />
    </svg>
  );
}

/**
 * Course bib stripe — like a finish line tape, alternating brand colors
 */
export function FinishStripe({ height = 12, className = "" }: { height?: number; className?: string }) {
  return (
    <div
      className={`w-full flex ${className}`}
      style={{ height }}
      aria-hidden
    >
      <div className="flex-1 bg-orange" />
      <div className="flex-1 bg-green" />
      <div className="flex-1 bg-blue" />
      <div className="flex-1 bg-yellow" />
      <div className="flex-1 bg-purple" />
      <div className="flex-1 bg-orange" />
      <div className="flex-1 bg-green" />
      <div className="flex-1 bg-blue" />
    </div>
  );
}

/**
 * Race stat — used for big numbers, "1'248", "3'500", etc.
 */
export function StatBlock({
  value,
  label,
  color = "#ec6436",
  align = "center",
}: {
  value: string;
  label: string;
  color?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-display text-5xl md:text-6xl xl:text-7xl leading-none" style={{ color }}>
        {value}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.22em] font-bold text-ink/65">{label}</p>
    </div>
  );
}
