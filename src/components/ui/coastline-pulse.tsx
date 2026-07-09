"use client";

import { cn } from "@/lib/utils";

export function CoastlinePulse({
  className,
  color = "currentColor",
  strokeWidth = 2,
  animated = false,
  fill = "none",
}: {
  className?: string;
  color?: string;
  strokeWidth?: number;
  animated?: boolean;
  fill?: string;
}) {
  return (
    <svg
      className={cn("w-full h-full max-h-4 md:max-h-6", className)}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ stroke: color, strokeWidth, fill }}
    >
      <path
        d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1050,55 1200,30 1200,30"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={animated ? "1000" : "none"}
        strokeDashoffset={animated ? 1000 : 0}
        className={animated ? "animate-coastline-draw" : ""}
      />
    </svg>
  );
}

export function CoastlineDot({
  className,
  color = "currentColor",
  size = 8,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      className={cn("flex-shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r={size / 2} stroke={color} strokeWidth="2" />
    </svg>
  );
}