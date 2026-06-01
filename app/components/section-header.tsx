import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "orange",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  accent?: "orange" | "green" | "blue" | "yellow" | "purple";
}) {
  const dot = {
    orange: "bg-orange",
    green: "bg-green",
    blue: "bg-blue",
    yellow: "bg-yellow",
    purple: "bg-purple",
  }[accent];

  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] font-bold text-ink/65">
          <span className={`h-2 w-2 rounded-full ${dot}`} />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-4xl md:text-5xl xl:text-6xl text-ink leading-[0.95]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-ink/75 text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
