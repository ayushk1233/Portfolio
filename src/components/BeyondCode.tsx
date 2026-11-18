"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";
import {
  BEYOND_CODE_INTRO,
  BEYOND_PHOTOS,
  PERSONAL_INTERESTS,
} from "@/data/personal";
import { withBasePath } from "@/lib/paths";

const FEATURED_COUNT = 6;

export function BeyondCode() {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visiblePhotos = showAll
    ? BEYOND_PHOTOS
    : BEYOND_PHOTOS.slice(0, FEATURED_COUNT);

  const activePhoto = activeIndex !== null ? BEYOND_PHOTOS[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % BEYOND_PHOTOS.length
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + BEYOND_PHOTOS.length) % BEYOND_PHOTOS.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <div>
      {/* Editorial intro header */}
      <div className="mb-7 grid grid-cols-1 gap-6 border-b border-border pb-7 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="mb-3.5 flex items-center gap-2.5">
            <span
              className="inline-block h-2.5 w-2.5 border border-border bg-lime"
              aria-hidden="true"
            />
            <span className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase">
              / BEYOND CODE
            </span>
          </div>
          <h2 className="text-[clamp(1.85rem,3.8vw,2.95rem)] leading-[1.06] font-bold tracking-[-0.035em] text-ink">
            <span className="block">{BEYOND_CODE_INTRO.headingLine1}</span>
            <span className="block">{BEYOND_CODE_INTRO.headingLine2}</span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
          <p className="font-mono text-xs leading-relaxed text-muted lg:text-right">
            {BEYOND_CODE_INTRO.supporting}
          </p>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="inline-flex h-9 items-center gap-2 border border-border bg-bg px-3.5 font-mono text-[11px] font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-lime"
          >
            {showAll ? (
              <>
                <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Show Top {FEATURED_COUNT}</span>
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Show All ({BEYOND_PHOTOS.length})</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Compact interest tags row */}
      <ul
        className="mb-6 flex flex-wrap gap-1.5"
        aria-label="Personal interests"
      >
        {PERSONAL_INTERESTS.map((interest) => (
          <li
            key={interest}
            className="border border-border/80 bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-ink"
          >
            {interest}
          </li>
        ))}
      </ul>

      {/* 4-column grid: default 6 photos (4 + 2 with balanced Show All card), expanded 12 photos (3 rows of 4) */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {visiblePhotos.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className="group flex flex-col border border-border bg-bg text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#292929]"
            aria-label={`View photo ${photo.index}: ${photo.tag}`}
          >
            <div className="aspect-[4/4.6] w-full overflow-hidden bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(photo.src)}
                alt={photo.alt}
                className={`h-full w-full object-cover ${
                  photo.objectPosition ?? "object-center"
                } contrast-[1.03] saturate-[0.92] transition-all duration-300 group-hover:scale-[1.02] group-hover:saturate-100`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex items-center justify-between border-t border-border bg-bg px-2.5 py-1.5 font-mono text-[10px]">
              <span className="font-semibold tracking-wider text-ink">
                {photo.index} / {photo.tag}
              </span>
              <span
                className="inline-block h-1.5 w-1.5 border border-border bg-surface transition-colors duration-200 group-hover:bg-lime"
                aria-hidden="true"
              />
            </div>
          </button>
        ))}

        {/* Balanced 2-column Show All tile completing row 2 when only 6 are shown */}
        {!showAll ? (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="group col-span-2 flex flex-col justify-between border border-dashed border-border bg-surface/60 bg-swiss-grid p-5 text-left transition-all duration-200 hover:border-solid hover:bg-lime hover:shadow-[3px_3px_0_0_#292929]"
          >
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-muted uppercase group-hover:text-ink">
              <span>+06 MORE FRAMES</span>
              <span className="inline-flex h-7 w-7 items-center justify-center border border-border bg-bg text-ink">
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <div className="my-6">
              <p className="font-mono text-xl font-bold tracking-tight text-ink sm:text-2xl">
                Show All ({BEYOND_PHOTOS.length})
              </p>
              <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-muted group-hover:text-ink/80">
                Swimming, rafting, palace halls, misty mountain roads &amp;
                sunsets.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-border/50 pt-2.5 font-mono text-[10px] font-semibold tracking-wider text-ink uppercase">
              <span>3 ROWS × 4 GRID</span>
              <span>EXPAND →</span>
            </div>
          </button>
        ) : null}
      </div>

      {/* Minimal status note (no duplicate "View all" link) */}
      <div className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
        <span>
          SHOWING {visiblePhotos.length} OF {BEYOND_PHOTOS.length} FRAMES ·
          CLICK ANY TO EXPAND
        </span>
        <span>4 PER ROW</span>
      </div>

      {/* Minimal Swiss lightbox modal */}
      {activePhoto && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${activePhoto.index} — ${activePhoto.tag}`}
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-[2px]"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-xl flex-col border border-border bg-bg shadow-[6px_6px_0_0_#C7FF35]"
          >
            {/* Modal top bar */}
            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5 font-mono text-xs">
              <span className="flex items-center gap-2 font-semibold text-ink">
                <span className="inline-block h-2 w-2 border border-border bg-lime" />
                {activePhoto.index} / {activePhoto.tag}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + BEYOND_PHOTOS.length) %
                        BEYOND_PHOTOS.length
                    )
                  }
                  aria-label="Previous photo"
                  className="inline-flex h-7 w-7 items-center justify-center border border-border bg-bg text-ink hover:bg-lime"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % BEYOND_PHOTOS.length)
                  }
                  aria-label="Next photo"
                  className="inline-flex h-7 w-7 items-center justify-center border border-border bg-bg text-ink hover:bg-lime"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close photo preview"
                  className="inline-flex h-7 w-7 items-center justify-center border border-border bg-ink text-bg hover:bg-lime hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Full image */}
            <div className="flex items-center justify-center overflow-hidden bg-surface/60 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(activePhoto.src)}
                alt={activePhoto.alt}
                className="max-h-[72vh] w-auto max-w-full border border-border object-contain"
              />
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between border-t border-border bg-bg px-4 py-2.5 font-mono text-[11px] text-muted">
              <span className="truncate pr-4">{activePhoto.alt}</span>
              <span className="shrink-0 text-ink">
                {activeIndex + 1} / {BEYOND_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
