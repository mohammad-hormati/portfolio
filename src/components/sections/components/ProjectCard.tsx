import ProjectCover from "./ProjectCover";
import { type Project } from "@/config/projects";
import { SiGithub } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardType {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardType) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* timeline node */}
      <div
        className="absolute left-[-1.65rem] top-1.5 h-3 w-3 rounded-full border-2 md:left-1/2 md:-translate-x-1/2"
        style={{ background: "var(--background)", borderColor: "var(--brand)" }}
      />

      <div className="md:w-1/2">
        <ProjectCover project={project} index={index} />
      </div>

      <div className="md:w-1/2">
        <span
          className="mb-2 inline-block text-sm font-medium tracking-wide"
          style={{ color: "var(--brand)" }}
        >
          {project.year}
        </span>
        <h3 className="text-xl font-semibold text-foreground md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-5 flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                <SiGithub className="h-4 w-4" />
                Source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
              >
                Live site
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
