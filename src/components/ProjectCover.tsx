import { type Project } from "@/config/projects";
import {
  Car,
  Landmark,
  LineChart,
  Radar,
  Bot,
  BarChart3,
  CalendarClock,
  Calculator,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<Project["icon"], LucideIcon> = {
  Car,
  Landmark,
  LineChart,
  Radar,
  Bot,
  BarChart3,
  CalendarClock,
  Calculator,
};

export default function ProjectCover({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = ICONS[project.icon];
  const angle = 135 + ((index * 37) % 90);

  if (project.image) {
    return (
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border"
      style={{
        backgroundImage: `linear-gradient(${angle}deg, color-mix(in oklch, var(--brand) 18%, transparent), transparent 60%), radial-gradient(circle at 30% 20%, color-mix(in oklch, var(--brand) 12%, transparent), transparent 55%)`,
        backgroundColor: "var(--muted)",
      }}
    >
      {/* dot-grid texture, consistent with Hero background */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklch, var(--foreground) 25%, transparent) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className="h-20 w-20 md:h-40 md:w-40"
          strokeWidth={1.25}
          style={{ color: "var(--brand)" }}
        />
      </div>
    </div>
  );
}
