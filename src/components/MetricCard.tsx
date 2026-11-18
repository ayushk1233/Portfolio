import type { HighlightMetric } from "@/data/site";

interface MetricCardProps {
  metric: HighlightMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="group flex h-full flex-col justify-between border border-border bg-bg p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-flame hover:shadow-[3px_3px_0_0_#FF4D1A] sm:p-6">
      <div>
        <div className="flex items-center justify-between font-mono text-[11px] text-muted">
          <span className="font-semibold text-flame-ink">
            {metric.index}
          </span>
          <span
            className="inline-block h-2 w-2 border border-border bg-lime transition-colors duration-200 group-hover:bg-flame"
            aria-hidden="true"
          />
        </div>
        <p className="mt-4 font-mono text-[clamp(1.75rem,3vw,2.25rem)] leading-none font-bold tracking-[-0.03em] text-ink">
          {metric.value}
        </p>
        <h3 className="mt-3 text-sm font-semibold tracking-tight text-ink">
          {metric.label}
        </h3>
      </div>

      <div className="mt-4 border-t border-border/30 pt-3">
        <p className="text-xs leading-relaxed text-muted">{metric.context}</p>
        <p className="mt-1.5 font-mono text-[10px] tracking-wider text-ink/70 uppercase">
          {metric.source}
        </p>
      </div>
    </div>
  );
}
