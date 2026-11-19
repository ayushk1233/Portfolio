import { SITE_CONFIG } from "@/data/site";
import { withBasePath } from "@/lib/paths";

export function GeometricHeroArt() {
  const portraitSrc = withBasePath(SITE_CONFIG.portraitPath);

  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-surface/60 bg-swiss-grid p-4 sm:p-6">
      {/* Top technical header strip */}
      <div className="mb-4 flex items-center justify-between border-b border-border pb-2 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
        <span className="flex items-center gap-2 text-ink">
          <span
            className="inline-block h-2 w-2 border border-border bg-flame"
            aria-hidden="true"
          />
          <span className="font-semibold text-flame-ink">FIG.01</span>
          <span>{"// AYUSH KUMAR"}</span>
        </span>
        <span className="font-semibold text-flame-ink">RESEARCH → PROD</span>
      </div>

      {/* Main editorial portrait framed with Swiss neo-brutalist geometry */}
      <div className="relative mx-auto w-full max-w-[390px]">
        {/* Architectural corner ticks outside the frame */}
        <span
          className="pointer-events-none absolute -top-2 -left-2 h-3 w-3 border-t-2 border-l-2 border-border"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -top-2 -right-2 h-3 w-3 border-t-2 border-r-2 border-border"
          aria-hidden="true"
        />

        {/* Crisp bordered portrait box */}
        <figure className="relative overflow-hidden border border-border bg-surface shadow-[5px_5px_0_0_var(--shadow-color)]">
          {/* Top-left accent index tag */}
          <div className="absolute top-0 left-0 z-10 flex items-center gap-1.5 border-r border-b border-border bg-lime px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.12em] text-ink uppercase">
            <span>AK.</span>
            <span className="opacity-75">{"// AI·ML"}</span>
          </div>

          {/* Portrait image */}
          <div className="aspect-[4/4.35] w-full overflow-hidden bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portraitSrc}
              alt="Ayush Kumar — AI/ML Engineer"
              width={777}
              height={1024}
              className="h-full w-full object-cover object-[50%_35%] transition-all duration-300"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Technical caption strip inside box */}
          <figcaption className="flex items-center justify-between border-t border-border bg-bg px-3 py-2 font-mono text-[10px] tracking-[0.1em] text-ink">
            <span className="font-semibold">AYUSH KUMAR</span>
            <span className="text-muted">28.4595°N · 77.0266°E</span>
          </figcaption>
        </figure>

        {/* Compact geometric system diagram strip anchored below portrait */}
        <div
          className="mt-4 border border-border bg-bg p-2.5"
          role="img"
          aria-label="Compact AI inference pipeline schematic from speech and text input through evaluation gate to production runtime"
        >
          <svg
            viewBox="0 0 360 54"
            className="h-auto w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path id="hero-mini-bus" d="M 86 27 L 274 27" />
            </defs>

            {/* Connecting horizontal bus */}
            <line
              x1="84"
              y1="27"
              x2="276"
              y2="27"
              stroke="var(--border)"
              strokeWidth="1.25"
            />

            {/* Node 1: Input */}
            <rect
              x="2"
              y="9"
              width="82"
              height="36"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="10"
              y="23"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="7.5"
              fill="var(--muted)"
            >
              01 / INPUT
            </text>
            <text
              x="10"
              y="37"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="9"
              fontWeight="700"
              fill="var(--ink)"
            >
              ASR · RAG
            </text>

            {/* Node 2: Core Inference */}
            <rect
              x="108"
              y="9"
              width="86"
              height="36"
              fill="var(--ink)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="116"
              y="23"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="7.5"
              fill="var(--lime)"
            >
              02 / CORE
            </text>
            <text
              x="116"
              y="37"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="9"
              fontWeight="700"
              fill="var(--bg)"
            >
              ~34× RT
            </text>

            {/* Node 3: Eval Gate */}
            <rect
              x="218"
              y="9"
              width="58"
              height="36"
              fill="var(--lime)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <text
              x="225"
              y="23"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="7.5"
              fontWeight="600"
              fill="#121212"
            >
              EVAL
            </text>
            <text
              x="225"
              y="37"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="9"
              fontWeight="700"
              fill="#121212"
            >
              GATE
            </text>

            {/* Node 4: Prod */}
            <rect
              x="294"
              y="9"
              width="64"
              height="36"
              fill="var(--surface)"
              stroke="var(--border)"
              strokeWidth="1.25"
            />
            <rect
              x="344"
              y="14"
              width="7"
              height="7"
              fill="var(--lime)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="302"
              y="23"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="7.5"
              fill="var(--muted)"
            >
              PROD
            </text>
            <text
              x="302"
              y="37"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="8.5"
              fontWeight="700"
              fill="var(--ink)"
            >
              &lt;800ms
            </text>

            {/* Slow-moving accent signal dot along bus */}
            <circle r="3.2" fill="var(--lime)" stroke="var(--ink)" strokeWidth="1.2">
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#hero-mini-bus" />
              </animateMotion>
            </circle>
          </svg>
        </div>
      </div>

      {/* Bottom technical strip */}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-2 font-mono text-[10px] tracking-[0.12em] text-muted">
        <span>PYTORCH / LANGGRAPH / SPEECH</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-flame-ink">
          <span
            className="inline-block h-1.5 w-1.5 bg-flame"
            aria-hidden="true"
          />
          STATUS: PRODUCTION
        </span>
      </div>
    </div>
  );
}
