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
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 border border-border bg-bg lg:grid-cols-12">
          {/* Left column: Headline & Actions */}
          <div className="flex flex-col justify-between border-b border-border p-6 sm:p-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-12">
            <div>
              {/* Eyebrow label */}
              <div className="mb-8 inline-flex items-center gap-2.5 border border-border bg-surface px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-ink uppercase">
                <span
                  className="inline-block h-2 w-2 border border-border bg-lime"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.roleLabel}</span>
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="text-[clamp(2.35rem,5.4vw,4.35rem)] leading-[1.03] font-bold tracking-[-0.04em] text-ink"
              >
                <span className="block">I build AI systems.</span>
                <span className="mt-2 block">
                  Not just{" "}
                  <span className="inline-block border border-border bg-lime px-2.5 pb-1 leading-[1.02]">
                    demos.
                  </span>
                </span>
              </h1>

              {/* Supporting specialties line */}
              <p className="mt-7 font-mono text-xs tracking-wide text-muted sm:text-sm">
                {SITE_CONFIG.specialties}
              </p>

              {/* Brief grounding line */}
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/85 sm:text-[17px]">
                Taking models from fine-tuning and evaluation to GPU inference
                at scale and cloud deployment—each system measured against a
                baseline.
              </p>
            </div>

            {/* CTAs + metadata footer */}
            <div className="mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="group inline-flex h-12 items-center justify-center gap-2 border border-border bg-ink px-6 font-mono text-xs font-semibold tracking-wider text-bg uppercase transition-colors duration-200 hover:bg-lime hover:text-ink"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight
                    className="arrow-shift arrow-shift-up-right h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
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
                  <span className="block text-[10px] tracking-widest uppercase">
                    CURRENTLY
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    Josh Talks · Speech AI
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest uppercase">
                    LOCATION
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    {SITE_CONFIG.location}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-[10px] tracking-widest uppercase">
                    FOCUS
                  </span>
                  <span className="mt-0.5 block font-medium text-ink">
                    Inference · Voice · Agents
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Geometric Engineering Diagram */}
          <div className="lg:col-span-5">
            <GeometricHeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}
