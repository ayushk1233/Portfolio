import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BeyondCode } from "@/components/BeyondCode";
import { Hero } from "@/components/Hero";
import { MetricCard } from "@/components/MetricCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ENGINEERING_METRICS } from "@/data/site";

const DIRECTORY_LINKS = [
  {
    index: "01",
    label: "PROJECTS",
    title: "Selected Work & Case Studies",
    detail: "Architecture, tradeoffs, and results across 6 AI/ML systems.",
    href: "/projects",
  },
  {
    index: "02",
    label: "EXPERIENCE",
    title: "Timeline & Technical Toolbox",
    detail: "Josh Talks, ATG / Banao, BlockseBlock, and production stack.",
    href: "/experience",
  },
  {
    index: "03",
    label: "CONTACT",
    title: "Get in Touch",
    detail: "Direct email, GitHub, LinkedIn, and resume download.",
    href: "/contact",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. About Me & Hero Portrait */}
      <Hero />

      {/* 2. Measured Signals */}
      <section
        id="highlights"
        className="border-b border-border bg-surface/60"
        aria-labelledby="highlights-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <div id="highlights-heading">
              <SectionHeading
                index="01"
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

      {/* 3. Beyond the Code */}
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

      {/* Compact Directory to Dedicated Pages */}
      <section className="bg-surface/40" aria-label="Explore other sections">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-5 flex items-center justify-between font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            <span>CONTINUE EXPLORING</span>
            <span>03 PAGES</span>
          </div>
          <div className="grid grid-cols-1 border border-border bg-bg md:grid-cols-3 md:divide-x md:divide-border">
            {DIRECTORY_LINKS.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex flex-col justify-between p-6 transition-colors duration-200 hover:bg-lime ${
                  idx > 0 ? "border-t border-border md:border-t-0" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-muted group-hover:text-ink">
                    <span>
                      {item.index} / {item.label}
                    </span>
                    <ArrowRight
                      className="arrow-shift arrow-shift-right h-4 w-4 text-ink"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-3 text-lg font-bold tracking-tight text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted group-hover:text-ink/85">
                    {item.detail}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
