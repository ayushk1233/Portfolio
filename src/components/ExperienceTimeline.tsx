import { EXPERIENCES } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <div className="relative pl-6 sm:pl-8">
      {/* Thin connecting vertical line */}
      <div
        className="absolute top-2 bottom-2 left-[5px] w-px bg-border sm:left-[7px]"
        aria-hidden="true"
      />

      <ol className="space-y-6">
        {EXPERIENCES.map((item) => (
          <li key={item.id} className="relative">
            {/* Small lime indicator square on the timeline axis */}
            <span
              className={`absolute top-6 -left-6 h-3 w-3 border border-border sm:-left-8 sm:h-3.5 sm:w-3.5 ${
                item.current ? "bg-lime" : "bg-bg"
              }`}
              aria-hidden="true"
            />
            {!item.current ? (
              <span
                className="absolute top-[27px] -left-[21px] h-1.5 w-1.5 bg-lime sm:top-[28px] sm:-left-[28px]"
                aria-hidden="true"
              />
            ) : null}

            {/* Bordered entry box */}
            <div className="border border-border bg-bg">
              {/* Top header bar */}
              <div className="flex flex-col justify-between gap-2 border-b border-border bg-surface px-5 py-3.5 sm:flex-row sm:items-center">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
                    {item.company}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    / {item.role}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-ink">
                  {item.current ? (
                    <span className="inline-flex items-center gap-1.5 border border-border bg-flame px-2 py-0.5 text-[10px] font-bold text-bg uppercase">
                      <span
                        className="inline-block h-1.5 w-1.5 bg-lime"
                        aria-hidden="true"
                      />
                      Current
                    </span>
                  ) : null}
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Full CV bullets + verified impact sidebar */}
              <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-12 md:divide-x md:divide-y-0">
                <div className="p-5 sm:p-6 md:col-span-8">
                  <ul className="space-y-3 text-sm leading-relaxed text-ink/90">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 border border-border bg-lime"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between bg-surface/40 p-5 md:col-span-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                      VERIFIED IMPACT
                    </span>
                    <p className="mt-1.5 font-mono text-xs font-semibold text-ink">
                      {item.keyMetric}
                    </p>
                  </div>

                  <div className="mt-5">
                    <span className="block font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                      STACK
                    </span>
                    <ul
                      className="mt-2 flex flex-wrap gap-1.5"
                      aria-label={`Technologies used at ${item.company}`}
                    >
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-border bg-bg px-2 py-0.5 font-mono text-[10px] text-ink"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
