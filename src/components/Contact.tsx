import { ArrowUpRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function Contact() {
  return (
    <div className="border border-border bg-bg">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Bold headline & email CTA */}
        <div className="flex flex-col justify-between border-b border-border p-6 sm:p-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-12">
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span
                className="inline-block h-2.5 w-2.5 border border-border bg-flame"
                aria-hidden="true"
              />
              <span className="font-mono text-xs font-semibold tracking-[0.16em] text-ink uppercase">
                <span className="mr-1.5 text-flame-ink">/</span>CONTACT
              </span>
            </div>

            <h2 className="text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.04] font-bold tracking-[-0.035em] text-ink">
              <span className="block">Have something</span>
              <span className="mt-1 block">
                interesting{" "}
                <span className="inline-block border border-border bg-lime px-2 pb-0.5 leading-[1.04]">
                  in mind?
                </span>
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Open to conversations around production AI/ML systems, Speech AI,
              agentic infrastructure, and applied research engineering.
            </p>
          </div>

          <div className="mt-8">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="group inline-flex h-12 items-center gap-2.5 border border-border bg-ink px-6 font-mono text-xs font-semibold tracking-wider text-bg uppercase transition-colors duration-200 hover:bg-lime hover:text-ink"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Send an Email</span>
              <ArrowUpRight
                className="arrow-shift arrow-shift-up-right h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Right: Structured contact links */}
        <div className="flex flex-col divide-y divide-border bg-surface/50 lg:col-span-5">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group flex flex-1 items-center justify-between p-6 transition-colors duration-200 hover:bg-lime sm:p-7"
          >
            <div>
              <span className="block font-mono text-[10px] font-semibold tracking-[0.16em] text-flame-ink uppercase group-hover:text-ink">
                01 / EMAIL
              </span>
              <span className="mt-1.5 block font-mono text-sm font-semibold break-all text-ink sm:text-base">
                {SITE_CONFIG.email}
              </span>
            </div>
            <ArrowUpRight
              className="arrow-shift arrow-shift-up-right h-5 w-5 shrink-0 text-ink"
              aria-hidden="true"
            />
          </a>

          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-between p-6 transition-colors duration-200 hover:bg-lime sm:p-7"
          >
            <div>
              <span className="block font-mono text-[10px] font-semibold tracking-[0.16em] text-flame-ink uppercase group-hover:text-ink">
                02 / GITHUB
              </span>
              <span className="mt-1.5 block font-mono text-sm font-semibold text-ink sm:text-base">
                {SITE_CONFIG.githubHandle}
              </span>
            </div>
            <ArrowUpRight
              className="arrow-shift arrow-shift-up-right h-5 w-5 shrink-0 text-ink"
              aria-hidden="true"
            />
          </a>

          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-1 items-center justify-between p-6 transition-colors duration-200 hover:bg-lime sm:p-7"
          >
            <div>
              <span className="block font-mono text-[10px] font-semibold tracking-[0.16em] text-flame-ink uppercase group-hover:text-ink">
                03 / LINKEDIN
              </span>
              <span className="mt-1.5 block font-mono text-sm font-semibold text-ink sm:text-base">
                {SITE_CONFIG.linkedinHandle}
              </span>
            </div>
            <ArrowUpRight
              className="arrow-shift arrow-shift-up-right h-5 w-5 shrink-0 text-ink"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
