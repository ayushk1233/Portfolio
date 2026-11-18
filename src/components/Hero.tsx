import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GeometricHeroArt } from "@/components/GeometricHeroArt";
import { SITE_CONFIG } from "@/data/site";
import { withBasePath } from "@/lib/paths";

export function Hero() {
  const resumeHref = withBasePath(SITE_CONFIG.resumePath);

  return (
    <section
      id="home"
      className="border-b border-border bg-bg"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 border border-border bg-bg lg:grid-cols-12">
          {/* Left column: About Me Headline, Narrative & Actions */}
          <div className="flex flex-col justify-between border-b border-border p-6 sm:p-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-12">
            <div>
              {/* Eyebrow label */}
              <div className="mb-7 inline-flex items-center gap-2.5 border border-border bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-ink uppercase">
                <span
                  className="inline-block h-2 w-2 border border-border bg-flame"
                  aria-hidden="true"
                />
                <span>
                  AYUSH KUMAR <span className="text-flame-ink">/</span> AI ML
                  ENGINEER
                </span>
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="text-[clamp(2.3rem,5.2vw,4.15rem)] leading-[1.03] font-bold tracking-[-0.04em] text-ink"
              >
                <span className="block">
                  I build AI systems<span className="text-flame-ink">.</span>
                </span>
                <span className="mt-2 block">
                  Not just{" "}
                  <span className="inline-block border border-border bg-lime px-2.5 pb-1 leading-[1.02]">
                    demos<span className="text-flame-ink">.</span>
                  </span>
                </span>
              </h1>

              {/* Supporting specialties line */}
              <p className="mt-6 font-mono text-xs font-medium tracking-wide text-muted sm:text-sm">
                Applied AI <span className="text-flame-ink">·</span> Voice AI{" "}
                <span className="text-flame-ink">·</span> Agentic Systems{" "}
                <span className="text-flame-ink">·</span> MLOps
              </p>

              {/* About Me: What I build + Who I am */}
              <div className="mt-6 space-y-3.5 border-l-2 border-flame pl-4 text-sm leading-relaxed text-ink/90 sm:text-[15.5px]">
                <p>
                  I&apos;m <strong className="font-semibold text-ink">Ayush Kumar</strong>—an
                  AI/ML engineer based in Gurugram who takes models from
                  fine-tuning and evaluation to GPU inference at scale and cloud
                  deployment. Across speech AI (ASR, TTS, diarization), agentic
                  workflows, and RAG, I build systems measured against real
                  baselines.
                </p>
                <p className="text-muted">
                  Away from training runs and latency profiles, you&apos;ll find
                  me on a football turf, at the gym, swimming, picking up guitar
                  riffs, experimenting with fashion, travelling whenever I can,
                  or falling down YouTube rabbit holes learning cool new tricks.
                </p>
              </div>
            </div>

            {/* CTAs + metadata footer */}
            <div className="mt-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects"
                  className="group inline-flex h-12 items-center justify-center gap-2 border border-border bg-ink px-6 font-mono text-xs font-semibold tracking-wider text-bg uppercase transition-colors duration-200 hover:bg-lime hover:text-ink"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight
                    className="arrow-shift arrow-shift-up-right h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={resumeHref}
                  download={SITE_CONFIG.resumeFilename}
                  className="group inline-flex h-12 items-center justify-center gap-2 border border-border bg-bg px-6 font-mono text-xs font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-lime"
                >
                  <span>Download Resume</span>
                  <ArrowDown
                    className="arrow-shift arrow-shift-down h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-5 font-mono text-[11px] text-muted sm:grid-cols-3">
                <div>
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-flame-ink uppercase">
                    <span
                      className="inline-block h-1.5 w-1.5 bg-flame"
                      aria-hidden="true"
                    />
                    CURRENTLY
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    Josh Talks · Speech AI
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-semibold tracking-widest text-flame-ink uppercase">
                    LOCATION
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    {SITE_CONFIG.location}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] font-semibold tracking-widest text-flame-ink uppercase">
                    OFF-SCREEN
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    Football · Gym · Travel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Framed Portrait + Compact Pipeline Diagram */}
          <div className="lg:col-span-5">
            <GeometricHeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}
