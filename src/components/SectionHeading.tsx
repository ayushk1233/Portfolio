interface SectionHeadingProps {
  label: string;
  index?: string;
  title?: string;
  aside?: string;
}

export function SectionHeading({
  label,
  index,
  title,
  aside,
}: SectionHeadingProps) {
  const hasLeadingSlash = label.startsWith("/");
  const cleanLabel = hasLeadingSlash ? label.slice(1).trimStart() : label;

  return (
    <div className="mb-10 border-b border-border pb-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {index ? (
            <span className="inline-flex h-6 items-center border border-border bg-lime px-2 font-mono text-[11px] font-semibold tracking-wider text-ink">
              {index}
            </span>
          ) : (
            <span
              className="inline-block h-2.5 w-2.5 border border-border bg-flame"
              aria-hidden="true"
            />
          )}
          <span className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            {hasLeadingSlash ? (
              <span className="mr-1.5 text-flame-ink">/</span>
            ) : null}
            {cleanLabel}
          </span>
        </div>
        {aside ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium tracking-wide text-flame-ink">
            <span
              className="inline-block h-1.5 w-1.5 bg-flame"
              aria-hidden="true"
            />
            {aside}
          </span>
        ) : null}
      </div>
      {title ? (
        <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.625rem)] leading-[1.08] font-bold tracking-[-0.03em] text-ink">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
