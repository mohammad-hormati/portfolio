import { FadeIn } from "@/components/motion/FadeIn";
import SkillPill from "./SkillPill";
import { SkillGroup } from "@/config/skills";

export default function SkillCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  return (
    <FadeIn
      delay={index * 0.08}
      className={group.featured ? "lg:col-span-3" : "lg:col-span-1"}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8 ${
          group.featured ? "" : "h-full"
        }`}
      >
        {group.featured && (
          <div
            className="absolute inset-x-0 top-0 h-0.5"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--brand), transparent)",
            }}
          />
        )}

        <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {group.title}
        </h3>
        <p className="mt-2 text-sm text-foreground/70">{group.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <SkillPill key={item.name} {...item} />
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
