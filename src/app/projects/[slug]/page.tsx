import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ComingSoonSign } from "@/components/ComingSoonSign";
import { ProjectIllustration } from "@/components/ProjectIllustration";
import { PROJECTS, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Ayush Kumar`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIdx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];
  const isComingSoon = Boolean(project.comingSoon);

  return (
    <article className="bg-bg">
      {/* Breadcrumb / Back bar */}
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 font-mono text-xs sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-1.5 py-0.5 font-medium text-ink transition-colors duration-200 hover:bg-lime"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Selected Work</span>
          </Link>
          <span className="text-muted">
            {isComingSoon ? "ROADMAP" : "CASE STUDY"} {project.index} / 0
            {PROJECTS.length} · {project.period}
          </span>
        </div>
      </div>

      {/* Hero header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-1 border border-border bg-bg lg:grid-cols-12">
            <div className="flex flex-col justify-between border-b border-border p-6 sm:p-10 lg:col-span-7 lg:border-r lg:border-b-0">
              <div>
                <div className="inline-flex items-center gap-2 border border-border bg-surface px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.14em] text-ink uppercase">
                  <span
                    className="inline-block h-2 w-2 border border-border bg-lime"
                    aria-hidden="true"
                  />
                  <span>{project.category}</span>
                </div>

                <h1 className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.035em] text-ink">
                  {project.title}
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {project.shortDescription}
                </p>

                {project.cliPreview ? (
                  <div className="mt-6 border border-border bg-ink p-4 font-mono text-xs text-bg">
                    <div className="mb-2 flex items-center justify-between border-b border-muted/40 pb-1.5 text-[10px] text-lime">
                      <span>PLANNED CLI WORKFLOW</span>
                      <span>LOCAL-FIRST BETA</span>
                    </div>
                    <pre className="overflow-x-auto leading-relaxed text-bg/95">
                      {project.cliPreview.map((line) => `$ ${line}`).join("\n")}
                    </pre>
                  </div>
                ) : null}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-11 items-center gap-2 border border-border bg-ink px-5 font-mono text-xs font-semibold tracking-wider text-bg uppercase transition-colors duration-200 hover:bg-lime hover:text-ink"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight
                      className="arrow-shift arrow-shift-up-right h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <span className="inline-flex h-11 items-center gap-2 border border-border bg-lime px-5 font-mono text-xs font-semibold tracking-wider text-ink uppercase">
                    <span className="inline-block h-2 w-2 border border-border bg-ink" />
                    <span>Open-Source Beta Coming Soon</span>
                  </span>
                )}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-11 items-center gap-2 border border-border bg-lime px-5 font-mono text-xs font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-ink hover:text-bg"
                  >
                    <span>{project.liveLabel ?? "Live Demo"}</span>
                    <ArrowUpRight
                      className="arrow-shift arrow-shift-up-right h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                ) : null}
              </div>
            </div>

            {/* Right stage: Animated hanging wooden plywood sign for Coming Soon, or Technical Illustration */}
            {isComingSoon ? (
              <div className="flex flex-col justify-between bg-surface/60 lg:col-span-5">
                <ComingSoonSign />
              </div>
            ) : (
              <div className="flex flex-col justify-between bg-surface/60 bg-swiss-grid p-5 sm:p-6 lg:col-span-5">
                <div className="mb-3 flex items-center justify-between border-b border-border pb-2 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                  <span>SYSTEM DIAGRAM</span>
                  <span>{project.period}</span>
                </div>
                <div className="my-auto aspect-[19/10] w-full">
                  <ProjectIllustration type={project.illustration} />
                </div>
                <div className="mt-3 border-t border-border pt-2 font-mono text-[10px] tracking-wider text-ink">
                  HIGHLIGHT: {project.highlightStat}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Verified Results / Roadmap Milestones Strip */}
      <section
        className="border-b border-border bg-surface/60"
        aria-labelledby="results-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <h2
            id="results-heading"
            className="mb-5 font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase"
          >
            {isComingSoon ? "/ PLANNED ROADMAP & SCOPE" : "/ VERIFIED RESULTS"}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.verifiedResults.map((result, idx) => (
              <div
                key={result.label}
                className="border border-border bg-bg p-5"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-muted">
                  <span>0{idx + 1}</span>
                  <span className="h-2 w-2 border border-border bg-lime" />
                </div>
                <p className="mt-3 font-mono text-2xl font-bold tracking-tight text-ink">
                  {result.value}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Engineering Narrative */}
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {/* Problem & Solution */}
        <section
          aria-label="Problem and solution"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <div className="border border-border bg-bg p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-3 font-mono text-xs font-semibold tracking-[0.14em] text-ink uppercase">
              <span className="h-2 w-2 border border-border bg-ink" />
              <span>01 / PROBLEM</span>
            </div>
            <p className="text-sm leading-relaxed text-ink/90 sm:text-base">
              {project.problem}
            </p>
          </div>

          <div className="border border-border bg-bg p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-3 font-mono text-xs font-semibold tracking-[0.14em] text-ink uppercase">
              <span className="h-2 w-2 border border-border bg-lime" />
              <span>{isComingSoon ? "02 / WHAT IT WILL DO" : "02 / SOLUTION"}</span>
            </div>
            <p className="text-sm leading-relaxed text-ink/90 sm:text-base">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section
          aria-labelledby="architecture-heading"
          className="border border-border bg-bg"
        >
          <div className="border-b border-border bg-surface px-6 py-4 sm:px-8">
            <h2
              id="architecture-heading"
              className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase"
            >
              {isComingSoon ? "03 / PLANNED ARCHITECTURE" : "03 / ARCHITECTURE"}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              {project.architecture.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            {project.architecture.stages.map((stage, idx) => (
              <div
                key={stage.step}
                className={`p-6 sm:p-7 ${idx >= 2 ? "md:border-t md:border-border" : ""}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-6 items-center border border-border bg-lime px-2 font-mono text-[11px] font-semibold text-ink">
                    {stage.step}
                  </span>
                  <h3 className="text-base font-bold tracking-tight text-ink">
                    {stage.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Decisions & Tradeoffs */}
        <section
          aria-label="Engineering decisions and tradeoffs"
          className="grid grid-cols-1 gap-6 lg:grid-cols-12"
        >
          <div className="border border-border bg-bg lg:col-span-7">
            <div className="border-b border-border bg-surface px-6 py-4">
              <h2 className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase">
                {isComingSoon
                  ? "04 / DESIGN PRINCIPLES"
                  : "04 / ENGINEERING DECISIONS"}
              </h2>
            </div>
            <div className="divide-y divide-border">
              {project.engineeringDecisions.map((decision) => (
                <div key={decision.title} className="p-6">
                  <h3 className="text-sm font-bold text-ink sm:text-base">
                    {decision.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {decision.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-bg lg:col-span-5">
            <div className="border-b border-border bg-surface px-6 py-4">
              <h2 className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase">
                05 / TRADEOFFS
              </h2>
            </div>
            <div className="divide-y divide-border">
              {project.tradeoffs.map((tradeoff) => (
                <div key={tradeoff.title} className="p-6">
                  <h3 className="text-sm font-bold text-ink sm:text-base">
                    {tradeoff.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {tradeoff.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack & Repository / Status */}
        <section
          aria-labelledby="stack-heading"
          className="grid grid-cols-1 border border-border bg-bg lg:grid-cols-12"
        >
          <div className="border-b border-border p-6 sm:p-8 lg:col-span-8 lg:border-r lg:border-b-0">
            <h2
              id="stack-heading"
              className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase"
            >
              {isComingSoon
                ? "06 / PROPOSED TECHNICAL STACK"
                : "06 / TECHNOLOGY STACK"}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between bg-surface/60 p-6 sm:p-8 lg:col-span-4">
            {project.githubUrl ? (
              <>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                    SOURCE CODE
                  </span>
                  <p className="mt-2 font-mono text-xs break-all text-ink">
                    {project.githubUrl.replace("https://", "")}
                  </p>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex h-11 items-center justify-center gap-2 border border-border bg-lime px-4 font-mono text-xs font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-ink hover:text-bg"
                >
                  <span>Open on GitHub</span>
                  <ArrowUpRight
                    className="arrow-shift arrow-shift-up-right h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </>
            ) : (
              <>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                    RELEASE STATUS
                  </span>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-ink">
                    Public repository &amp; CLI package launching with Version 1
                    open-source beta.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group mt-5 inline-flex h-11 items-center justify-center gap-2 border border-border bg-lime px-4 font-mono text-xs font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-ink hover:text-bg"
                >
                  <span>Reach Out About Beta</span>
                  <ArrowRight
                    className="arrow-shift arrow-shift-right h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
              </>
            )}
          </div>
        </section>

        {/* Bottom navigation: All Selected Work & Next project */}
        <nav
          aria-label="Project navigation"
          className="grid grid-cols-1 border border-border bg-bg sm:grid-cols-2"
        >
          <Link
            href="/projects"
            className="group flex items-center justify-between border-b border-border p-6 transition-colors duration-200 hover:bg-surface sm:border-r sm:border-b-0"
          >
            <div>
              <span className="block font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                RETURN
              </span>
              <span className="mt-1 block font-mono text-sm font-semibold text-ink">
                ← All Selected Work
              </span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between p-6 transition-colors duration-200 hover:bg-lime"
          >
            <div>
              <span className="block font-mono text-[10px] tracking-[0.14em] text-muted uppercase group-hover:text-ink">
                NEXT PROJECT ({nextProject.index})
              </span>
              <span className="mt-1 block font-mono text-sm font-semibold text-ink">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight
              className="arrow-shift arrow-shift-right h-4 w-4 shrink-0 text-ink"
              aria-hidden="true"
            />
          </Link>
        </nav>
      </div>
    </article>
  );
}
