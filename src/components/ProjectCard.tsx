import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectIllustration } from "@/components/ProjectIllustration";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card flex h-full flex-col border border-border bg-bg">
      {/* Card top bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5 font-mono text-[11px]">
        <span className="font-semibold text-ink">
          {project.index} / {project.period}
        </span>
        <span className="text-muted">{project.highlightStat}</span>
      </div>

      {/* Custom SVG technical diagram */}
      <Link
        href={`/projects/${project.slug}`}
        className="block border-b border-border bg-surface/50 bg-swiss-grid p-3 transition-colors duration-200 hover:bg-surface"
        aria-label={`View engineering case study for ${project.title}`}
      >
        <div className="aspect-[19/10] w-full">
          <ProjectIllustration type={project.illustration} />
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl leading-snug font-bold tracking-[-0.02em] text-ink">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline decoration-border underline-offset-4"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">
            {project.shortDescription}
          </p>
        </div>

        {/* Technology tags (2-4) */}
        <ul
          className="mt-5 flex flex-wrap gap-1.5"
          aria-label="Key technologies"
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border bg-surface px-2 py-0.5 font-mono text-[11px] font-medium text-ink"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Action footer */}
      <div className="grid grid-cols-12 border-t border-border font-mono text-xs">
        <Link
          href={`/projects/${project.slug}`}
          className="group col-span-7 flex items-center justify-between border-r border-border bg-bg px-4 py-3 font-semibold text-ink transition-colors duration-200 hover:bg-lime"
        >
          <span>Case Study</span>
          <ArrowRight
            className="arrow-shift arrow-shift-right h-3.5 w-3.5"
            aria-hidden="true"
          />
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group col-span-5 flex items-center justify-center gap-1 bg-surface px-3 py-3 font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-bg"
        >
          <span>GitHub</span>
          <ArrowUpRight
            className="arrow-shift arrow-shift-up-right h-3.5 w-3.5"
            aria-hidden="true"
          />
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group col-span-12 flex items-center justify-center gap-1 border-t border-border bg-lime px-4 py-2.5 font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-bg"
          >
            <span>Live Demo</span>
            <ArrowUpRight
              className="arrow-shift arrow-shift-up-right h-3.5 w-3.5"
              aria-hidden="true"
            />
          </a>
        ) : null}
      </div>
    </article>
  );
}
