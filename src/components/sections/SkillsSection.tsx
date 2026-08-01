import { FadeIn } from "@/components/motion/FadeIn";
import { skillGroups } from "@/config/skills";
import SkillCard from "./components/SkillCard";

const softSkills = [
  "Fast learner",
  "Strong research skills",
  "AI-assisted development",
  "Clean code",
  "Problem solving",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient background — echoes the Hero's dot-grid + brand glow, mirrored to the opposite side */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 80% 20%, black, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-112 w-md rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--brand)" }}
      />

      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <span
            className="font-mono text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--brand)" }}
          >
            Skills
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Five years of shipping frontend — now going Full-Stack
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            The stack I reach for, grouped by where each piece pulls its weight.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>

        <FadeIn delay={skillGroups.length * 0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border/60 pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Also brings
            </span>
            <ul className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-dashed border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
