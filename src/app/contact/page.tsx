import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { Contact } from "@/components/Contact";
import { SITE_CONFIG } from "@/data/site";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ayush Kumar — email, GitHub, LinkedIn, and resume download.",
};

export default function ContactPage() {
  const resumeHref = withBasePath(SITE_CONFIG.resumePath);

  return (
    <section className="bg-bg" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Contact />

        {/* Secondary compact resume strip */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border border-border bg-surface/60 p-6 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              DOCUMENT // PDF
            </span>
            <p className="mt-1 font-mono text-sm font-semibold text-ink">
              Prefer a single-page summary? Download my latest resume.
            </p>
          </div>
          <a
            href={resumeHref}
            download={SITE_CONFIG.resumeFilename}
            className="group inline-flex h-11 shrink-0 items-center gap-2 border border-border bg-bg px-5 font-mono text-xs font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-lime"
          >
            <span>Download Resume</span>
            <ArrowDown
              className="arrow-shift arrow-shift-down h-4 w-4"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
