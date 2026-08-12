import type { ElementType, ReactNode } from "react";

const accentClass = "text-[#1e6fd0]";

/** Dark brand title + brighter blue accent (same pattern as Awards / Testimonials). */
export function AccentTitle({
  before,
  accent,
  className,
  as: Tag = "h2",
  breakBeforeAccent = false,
}: {
  before: ReactNode;
  accent: ReactNode;
  className?: string;
  as?: ElementType;
  breakBeforeAccent?: boolean;
}) {
  return (
    <Tag className={["section-title", className].filter(Boolean).join(" ")}>
      {before}
      {breakBeforeAccent ? <br /> : " "}
      <span className={accentClass}>{accent}</span>
    </Tag>
  );
}

/** Multi-line titles — last line uses the accent blue. */
export function AccentTitleLines({
  lines,
  className,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={["section-title", className].filter(Boolean).join(" ")}>
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className={`block ${index === lines.length - 1 ? accentClass : ""}`}
        >
          {line}
        </span>
      ))}
    </Tag>
  );
}
