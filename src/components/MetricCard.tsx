import type { HighlightMetric } from "@/data/site";

interface MetricCardProps {
  metric: HighlightMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="flex h-full flex-col justify-between border border-border bg-bg p-5 sm:p-6">
      <div>
        <div className="flex items-center justify-between font-mono text-[11px] text-muted">
          <span>{metric.index}</span>
          <span
            className="inline-block h-2 w-2 border border-border bg-lime"
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
