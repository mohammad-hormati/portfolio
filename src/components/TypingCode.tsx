"use client";

import { useEffect, useState } from "react";

const codeLines: string[] = [
  "const dev = {",
  "  name: 'Mohamad',",
  "  family: 'Hormati',",
  "  role: 'Web Developer',",
  "  stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],",
  "  mail: 'm.hormati1996@gmail.com',",
  "};",
];

export default function TypingCode() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timeout = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 220);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div className="rounded-lg border border-border bg-muted/40 p-6 font-mono text-sm leading-relaxed shadow-sm">
      <div className="mb-3 flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
      </div>
      {codeLines.slice(0, visibleLines).map((line, i) => (
        <div key={i}>
          <span className="text-muted-foreground">{i + 1}</span>
          <span className="ml-4" style={{ color: "var(--brand)" }}>
            {line}
          </span>
        </div>
      ))}
      <span
        className="inline-block h-4 w-2 animate-pulse"
        style={{ backgroundColor: "var(--brand)" }}
      />
    </div>
  );
}
