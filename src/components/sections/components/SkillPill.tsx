import { SkillItem } from "@/config/skills";

export default function SkillPill({ name, icon: Icon }: SkillItem) {
  return (
    <li className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/50 px-3 py-1.5 text-sm text-foreground/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand">
      {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
      {name}
    </li>
  );
}
