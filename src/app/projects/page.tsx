import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected AI/ML engineering systems by Ayush Kumar — Competitor Intelligence Monitor, Indic Speech Dubbing & TTS Fine-tuning, and Multi-Agent RAG Platform.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-bg">
      <section
        className="border-b border-border"
        aria-labelledby="projects-page-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div id="projects-page-heading">
            <SectionHeading
              index="01"
              label="/ SELECTED WORK"
              title="Systems built & measured in production."
              aside="3 FEATURED CASE STUDIES"
            />
          </div>

          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Each project below includes an engineering breakdown covering
            problem framing, architecture, design tradeoffs, and verified
            evaluation numbers.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Bottom navigation strip */}
          <div className="mt-12 grid grid-cols-1 border border-border bg-surface/50 sm:grid-cols-2">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-border p-6 transition-colors duration-200 hover:bg-surface sm:border-r sm:border-b-0"
            >
              <div>
                <span className="block font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                  OPEN SOURCE & REPOS
                </span>
                <span className="mt-1 block font-mono text-sm font-semibold text-ink">
                  More on {SITE_CONFIG.githubHandle}
                </span>
              </div>
              <ArrowUpRight
                className="arrow-shift arrow-shift-up-right h-4 w-4 text-ink"
                aria-hidden="true"
              />
            </a>

            <Link
              href="/experience"
              className="group flex items-center justify-between p-6 transition-colors duration-200 hover:bg-lime"
            >
              <div>
                <span className="block font-mono text-[10px] tracking-[0.14em] text-muted uppercase group-hover:text-ink">
                  NEXT TAB
                </span>
                <span className="mt-1 block font-mono text-sm font-semibold text-ink">
                  Experience &amp; Technical Toolbox
                </span>
              </div>
              <ArrowRight
                className="arrow-shift arrow-shift-right h-4 w-4 text-ink"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
