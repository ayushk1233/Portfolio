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
              className="inline-block h-2.5 w-2.5 border border-border bg-lime"
              aria-hidden="true"
            />
          )}
          <span className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            {label}
          </span>
        </div>
        {aside ? (
          <span className="font-mono text-xs tracking-wide text-muted">
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
