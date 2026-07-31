"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

const highlights: { title: string; description: string }[] = [
  {
    title: "Frontend Engineering",
    description:
      "5+ years building scalable, high-performance apps with React, Next.js, and TypeScript.",
  },
  {
    title: "Full-Stack Capable",
    description:
      "Node.js, Express, Prisma, and MySQL for backend work — plus Docker and CI/CD for deployment.",
  },
  {
    title: "Fast, Practical Learner",
    description:
      "Strong research skills and AI-assisted workflows to pick up new stacks quickly and ship reliably.",
  },
];

const stats: { label: string; value: string }[] = [
  { label: "Years experience", value: "5+" },
  { label: "Companies & clients", value: "3+" },
  { label: "Projects shipped", value: "10+" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <span className="text-sm font-mono uppercase tracking-widest text-brand">
              About
            </span>
          </div>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
          {/* Visual column */}
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="relative aspect-4/6 rounded-2xl overflow-hidden border border-border bg-muted">
                <Image
                  src="/images/portfolio-photo.jpg"
                  alt="Mohamad Hormati"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div
                className="absolute -z-10 -bottom-8 -right-8 h-40 w-40 rounded-full blur-3xl opacity-40"
                style={{ background: "var(--brand)" }}
              />
            </div>
          </FadeIn>

          {/* Content column */}
          <div>
            <FadeIn delay={0.15}>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-balance">
                Senior Frontend Developer
                <span className="text-brand"> Full-Stack Capable</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I&apos;m a frontend developer with 5+ years of experience
                building scalable, high-performance web applications —
                specialized in React, Next.js, and TypeScript, with a strong
                focus on clean code, reusability, and responsive design. Over
                the past few years I&apos;ve expanded into full-stack work with
                Node.js, Express, and MySQL, along with hands-on DevOps
                experience using Docker and CI/CD pipelines. I care about
                writing maintainable code, and I lean on strong research skills
                and AI-assisted workflows to pick up new tools fast and deliver
                solid results.
              </p>
            </FadeIn>

            {/* Highlight cards */}
            <FadeIn delay={0.35}>
              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-(--brand)/40"
                  >
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.45}>
              <div className="mt-10 flex justify-center sm:justify-start flex-wrap gap-x-5 sm:gap-x-10 gap-y-4 border-t border-border pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-semibold">{stat.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTA row */}
            <FadeIn delay={0.55}>
              <div className="mt-10 flex justify-center sm:justify-start flex-wrap gap-3">
                <Button asChild>
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download résumé
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">
                    Get in touch
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
