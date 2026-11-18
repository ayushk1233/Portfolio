import { BeyondCode } from "@/components/BeyondCode";
import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechStack } from "@/components/TechStack";
import { PROJECTS } from "@/data/projects";
import { ENGINEERING_METRICS } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* B. Hero */}
      <Hero />

      {/* C. Selected Projects */}
      <section
        id="projects"
        className="scroll-mt-16 border-b border-border bg-bg"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div id="projects-heading">
              <SectionHeading
                index="01"
                label="/ SELECTED WORK"
                title="Systems built & measured in production."
                aside="3 FEATURED CASE STUDIES"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* D. Engineering Highlights */}
      <section
        id="highlights"
        className="border-b border-border bg-surface/60"
        aria-labelledby="highlights-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div id="highlights-heading">
              <SectionHeading
                index="02"
                label="/ MEASURED SIGNALS"
                aside="VERIFIED AGAINST BASELINES"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ENGINEERING_METRICS.map((metric) => (
                <MetricCard key={metric.id} metric={metric} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* E. Experience */}
      <section
        id="experience"
        className="scroll-mt-16 border-b border-border bg-bg"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div id="experience-heading">
              <SectionHeading
                index="03"
                label="/ EXPERIENCE"
                title="Where I have shipped."
                aside="2025 — PRESENT"
              />
            </div>

            <ExperienceTimeline />
          </Reveal>
        </div>
      </section>

      {/* F. Technical Stack */}
      <section
        id="toolbox"
        className="scroll-mt-16 border-b border-border bg-surface/50"
        aria-labelledby="toolbox-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <div id="toolbox-heading">
              <SectionHeading
                index="04"
                label="/ TOOLBOX"
                title="Core stack across research and deployment."
                aside="5 DOMAINS"
              />
            </div>

            <TechStack />
          </Reveal>
        </div>
      </section>

      {/* G. Beyond the Code */}
      <section
        id="beyond-code"
        className="scroll-mt-16 border-b border-border bg-bg"
        aria-label="Beyond the code"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <BeyondCode />
          </Reveal>
        </div>
      </section>

      {/* H. Contact */}
      <section
        id="contact"
        className="scroll-mt-16 bg-bg"
        aria-label="Contact"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
