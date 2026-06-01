"use client";

import { ReactNode } from "react";
import { useReveal, useCountUp, formatNumber } from "../../lib/hooks";

/**
 * Wrap any block with a fade-up reveal on scroll.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Component = As as unknown as React.ElementType;
  return (
    <Component
      ref={ref as unknown as React.Ref<HTMLDivElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * Animated counter — counts up from 0 to `target` when scrolled into view.
 */
export function CountUp({
  target,
  className = "",
  format = true,
  prefix = "",
  suffix = "",
}: {
  target: number;
  className?: string;
  format?: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const { ref, value } = useCountUp(target);
  return (
    <span ref={ref} className={className}>
      {prefix}{format ? formatNumber(value) : value}{suffix}
    </span>
  );
}
