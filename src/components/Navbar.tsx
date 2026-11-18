"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/site";
import { withBasePath } from "@/lib/paths";

export function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects");
  const [activeSection, setActiveSection] = useState<string>(
    isProjectPage ? "projects" : "home"
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isProjectPage) {
      setActiveSection("projects");
      return;
    }

    const sectionIds = NAV_ITEMS.map((item) => item.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = "home";
      for (const el of elements) {
        if (el.offsetTop <= scrollY) {
          current = el.id;
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40
      ) {
        current = "contact";
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const resumeHref = withBasePath(SITE_CONFIG.resumePath);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-[2px]">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Left: Monogram */}
        <Link
          href="/#home"
          onClick={() => {
            setMobileOpen(false);
            setActiveSection("home");
          }}
          className="group inline-flex items-center gap-2.5 font-mono text-base font-bold tracking-tight text-ink"
          aria-label="Ayush Kumar — Home"
        >
          <span
            className="inline-block h-3 w-3 border border-border bg-ink transition-colors duration-200 group-hover:bg-lime"
            aria-hidden="true"
          />
          <span>{SITE_CONFIG.monogram}</span>
        </Link>

        {/* Center: Desktop section links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item, idx) => {
            const isActive = activeSection === item.sectionId;
            return (
              <div key={item.sectionId} className="flex items-center">
                {idx > 0 ? (
                  <span
                    className="mx-2 font-mono text-xs text-muted/60 select-none"
                    aria-hidden="true"
                  >
                    /
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  onClick={() => setActiveSection(item.sectionId)}
                  data-active={isActive ? "true" : "false"}
                  className={`nav-link-underline px-1 py-1 font-mono text-xs tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right: External links */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 items-center gap-1 border border-border bg-bg px-3 font-mono text-xs font-medium text-ink transition-colors duration-200 hover:bg-surface"
          >
            <span>GitHub</span>
            <ArrowUpRight
              className="arrow-shift arrow-shift-up-right h-3.5 w-3.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-9 items-center gap-1 border border-border bg-lime px-3 font-mono text-xs font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-bg"
          >
            <span>Resume</span>
            <ArrowUpRight
              className="arrow-shift arrow-shift-up-right h-3.5 w-3.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center border border-border bg-bg text-ink transition-colors duration-200 hover:bg-lime md:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation drawer */}
      {mobileOpen ? (
        <div
          id="mobile-nav-menu"
          className="border-t border-border bg-bg md:hidden"
        >
          <div className="mx-auto max-w-6xl divide-y divide-border px-4 sm:px-6">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.sectionId;
              return (
                <Link
                  key={item.sectionId}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.sectionId);
                    setMobileOpen(false);
                  }}
                  className="flex items-center justify-between py-3.5 font-mono text-sm text-ink"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-muted">
                      0{idx + 1}
                    </span>
                    <span className={isActive ? "font-semibold" : ""}>
                      {item.label}
                    </span>
                  </span>
                  {isActive ? (
                    <span className="h-2.5 w-2.5 border border-border bg-lime" />
                  ) : null}
                </Link>
              );
            })}
            <div className="grid grid-cols-2 gap-3 py-4">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-1.5 border border-border bg-surface font-mono text-xs font-medium text-ink"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-1.5 border border-border bg-lime font-mono text-xs font-semibold text-ink"
              >
                <span>Resume</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
