import {
  BEYOND_CODE_INTRO,
  PERSONAL_CARDS,
  type BeyondMotif,
} from "@/data/personal";
import { withBasePath } from "@/lib/paths";

function BeyondMotifArt({ motif }: { motif: BeyondMotif }) {
  if (motif === "football") {
    return (
      <svg
        viewBox="0 0 240 140"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Minimal tactical pitch geometry */}
        <rect x="20" y="16" width="200" height="108" stroke="#292929" strokeWidth="1.25" />
        <line x1="120" y1="16" x2="120" y2="124" stroke="#292929" strokeWidth="1.25" />
        <circle cx="120" cy="70" r="24" stroke="#292929" strokeWidth="1.25" />
        <circle cx="120" cy="70" r="3.5" fill="#C7FF35" stroke="#292929" strokeWidth="1.25" />
        <rect x="20" y="42" width="30" height="56" stroke="#292929" strokeWidth="1.25" />
        <rect x="190" y="42" width="30" height="56" stroke="#292929" strokeWidth="1.25" />
        <rect x="152" y="34" width="10" height="10" fill="#C7FF35" stroke="#292929" strokeWidth="1.2" />
      </svg>
    );
  }

  if (motif === "anime") {
    return (
      <svg
        viewBox="0 0 240 140"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Minimal storyboard / cinema aspect frame */}
        <rect x="24" y="18" width="192" height="104" stroke="#292929" strokeWidth="1.25" />
        <line x1="24" y1="34" x2="216" y2="34" stroke="#292929" strokeWidth="1" />
        <line x1="24" y1="106" x2="216" y2="106" stroke="#292929" strokeWidth="1" />
        <line x1="88" y1="34" x2="88" y2="106" stroke="#292929" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="152" y1="34" x2="152" y2="106" stroke="#292929" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="120" cy="70" r="22" fill="#C7FF35" stroke="#292929" strokeWidth="1.25" />
        <line x1="104" y1="70" x2="136" y2="70" stroke="#292929" strokeWidth="1.25" />
        <line x1="120" y1="54" x2="120" y2="86" stroke="#292929" strokeWidth="1.25" />
      </svg>
    );
  }

  if (motif === "reading") {
    return (
      <svg
        viewBox="0 0 240 140"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Open editorial spread geometry */}
        <rect x="30" y="22" width="90" height="96" fill="#F8F7F2" stroke="#292929" strokeWidth="1.25" />
        <rect x="120" y="22" width="90" height="96" fill="#F8F7F2" stroke="#292929" strokeWidth="1.25" />
        <line x1="44" y1="42" x2="106" y2="42" stroke="#292929" strokeWidth="1.25" />
        <line x1="44" y1="54" x2="98" y2="54" stroke="#292929" strokeWidth="1" />
        <line x1="44" y1="66" x2="104" y2="66" stroke="#292929" strokeWidth="1" />
        <line x1="44" y1="78" x2="90" y2="78" stroke="#292929" strokeWidth="1" />
        <rect x="134" y="38" width="62" height="36" fill="#C7FF35" stroke="#292929" strokeWidth="1.25" />
        <line x1="134" y1="88" x2="196" y2="88" stroke="#292929" strokeWidth="1" />
        <line x1="134" y1="98" x2="180" y2="98" stroke="#292929" strokeWidth="1" />
      </svg>
    );
  }

  // life-lately
  return (
    <svg
      viewBox="0 0 240 140"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Viewfinder / snapshot frame */}
      <rect x="34" y="18" width="172" height="104" stroke="#292929" strokeWidth="1.25" />
      <path d="M46 42 V30 H58" stroke="#292929" strokeWidth="1.5" />
      <path d="M194 42 V30 H182" stroke="#292929" strokeWidth="1.5" />
      <path d="M46 98 V110 H58" stroke="#292929" strokeWidth="1.5" />
      <path d="M194 98 V110 H182" stroke="#292929" strokeWidth="1.5" />
      <rect x="98" y="54" width="44" height="32" fill="#C7FF35" stroke="#292929" strokeWidth="1.25" />
      <circle cx="120" cy="70" r="5" fill="#171717" />
    </svg>
  );
}

export function BeyondCode() {
  return (
    <div>
      {/* Editorial intro header */}
      <div className="mb-10 grid grid-cols-1 gap-6 border-b border-border pb-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="mb-4 flex items-center gap-2.5">
            <span
              className="inline-block h-2.5 w-2.5 border border-border bg-lime"
              aria-hidden="true"
            />
            <span className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase">
              / BEYOND CODE
            </span>
          </div>
          <h2 className="text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.06] font-bold tracking-[-0.035em] text-ink">
            <span className="block">{BEYOND_CODE_INTRO.headingLine1}</span>
            <span className="block">{BEYOND_CODE_INTRO.headingLine2}</span>
          </h2>
        </div>

        <div className="lg:col-span-5 lg:text-right">
          <p className="font-mono text-xs leading-relaxed text-muted sm:text-sm">
            {BEYOND_CODE_INTRO.supporting}
          </p>
        </div>
      </div>

      {/* Four minimal bordered boxes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PERSONAL_CARDS.map((card) => (
          <article
            key={card.id}
            className="flex flex-col border border-border bg-bg"
          >
            {/* Box Header */}
            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5 font-mono text-xs font-semibold tracking-wider text-ink">
              <span>{card.label}</span>
              <span
                className="inline-block h-2 w-2 border border-border bg-lime"
                aria-hidden="true"
              />
            </div>

            {/* Photo slot or restrained architectural placeholder */}
            <div className="relative aspect-[4/3] w-full border-b border-border bg-surface/60 bg-swiss-grid">
              {card.photoPath ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={withBasePath(card.photoPath)}
                  alt={card.photoAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full flex-col justify-between p-3">
                  <div className="flex-1">
                    <BeyondMotifArt motif={card.motif} />
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-1.5 font-mono text-[9px] tracking-wider text-muted uppercase">
                    <span>PHOTO SLOT</span>
                    <span>[REPLACEABLE]</span>
                  </div>
                </div>
              )}
            </div>

            {/* Short caption */}
            <div className="flex flex-1 flex-col justify-between p-4">
              <p className="text-xs leading-relaxed text-muted">
                {card.caption}
              </p>
              {!card.photoPath ? (
                <p className="mt-3 font-mono text-[10px] text-ink/60">
                  {card.placeholderNote}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
