import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 font-semibold text-ink"
          >
            <span
              className="inline-block h-2.5 w-2.5 border border-border bg-lime"
              aria-hidden="true"
            />
            {SITE_CONFIG.monogram}
          </Link>
          <span>{SITE_CONFIG.name}</span>
          <span aria-hidden="true">·</span>
          <span>{SITE_CONFIG.location}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-muted">
          <span>STATIC BUILD · NEXT.JS</span>
          <a
            href="#top"
            className="text-ink underline decoration-border underline-offset-4 transition-colors duration-200 hover:bg-lime"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
