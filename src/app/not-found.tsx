import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-1 items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full border border-border bg-bg p-8 sm:p-12">
        <div className="inline-flex items-center gap-2 border border-border bg-lime px-2.5 py-1 font-mono text-xs font-semibold text-ink">
          ERROR 404
        </div>
        <h1 className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-tight font-bold tracking-[-0.03em] text-ink">
          Route not found.
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          The page you requested does not exist in this static build.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center gap-2 border border-border bg-ink px-5 font-mono text-xs font-semibold tracking-wider text-bg uppercase transition-colors duration-200 hover:bg-lime hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
}
