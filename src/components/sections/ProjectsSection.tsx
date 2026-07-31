"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { projects } from "@/config/projects";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <span
            className="mb-3 block text-sm font-medium tracking-wide"
            style={{ color: "var(--brand)" }}
          >
            Selected Work
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Six years of building interfaces — from early freelance sites to
            full-stack platforms, in the order they were built.
          </p>
        </FadeIn>

        <div className="relative mt-16 space-y-20 border-l border-border pl-8 md:border-l-0 md:pl-0">
          {/* center line, desktop only */}
          <div
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block"
            aria-hidden
          />
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
