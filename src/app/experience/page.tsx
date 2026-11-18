import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { TechStack } from "@/components/TechStack";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Engineering experience, production technical stack, publications, and open-source contributions of Ayush Kumar.",
};

const CREDENTIALS = [
  {
    index: "01",
    label: "KAGGLE & HACKATHONS",
    items: [
      "Top 3% of 2,500+ teams (Beats-per-Minute prediction)",
      "Top 10 of 500+ teams (Chatbot Arena preference modelling)",
      "Top 1% of 1,000 (Google AI Agents Intensive)",
      "Finalist, National AI Hackathon (500+ teams, enterprise Voice AI) · Runner-up, HackAithon",
    ],
  },
  {
    index: "02",
    label: "PUBLICATIONS & OPEN SOURCE",
    items: [
      "Cryptography Integration for Data Encryption and Secure Communication — accepted, IC3SE 2024",
      "PPE Kit Compliance Detection via Extended Object Detection — submitted, AI Summit 2025 (IEEE #66170)",
      "Core contributor: Aden Hive (MCP tool integrations with state persistence) & Bindu (DSPy adapter, gRPC A2A tests)",
    ],
  },
  {
    index: "03",
    label: "EDUCATION",
    items: [
      "Lovely Professional University — B.Tech, Computer Science & Engineering (2022 – 2026) · CGPA: 8.72",
      "Delhi Public School, Bokaro — Class XII: 93.0%",
      "The Pentecostal Assembly School, Bokaro — Class X: 94.4%",
    ],
  },
] as const;

export default function ExperiencePage() {
  return (
    <div className="bg-bg">
      {/* Experience Timeline */}
      <section
        className="border-b border-border"
        aria-labelledby="experience-page-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div id="experience-page-heading">
            <SectionHeading
              index="01"
              label="/ EXPERIENCE"
              title="Where I have shipped."
              aside="2025 — PRESENT"
            />
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Toolbox */}
      <section
        className="border-b border-border bg-surface/50"
        aria-labelledby="toolbox-page-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div id="toolbox-page-heading">
            <SectionHeading
              index="02"
              label="/ TOOLBOX"
              title="Core stack across research and deployment."
              aside="5 DOMAINS"
            />
          </div>

          <TechStack />
        </div>
      </section>

      {/* Compact Verified Credentials */}
      <section aria-labelledby="credentials-heading">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div id="credentials-heading">
            <SectionHeading
              index="03"
              label="/ CREDENTIALS"
              aside="ACHIEVEMENTS · RESEARCH · EDUCATION"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {CREDENTIALS.map((block) => (
              <div
                key={block.index}
                className="flex flex-col border border-border bg-bg"
              >
                <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 font-mono text-xs font-semibold tracking-wider text-ink">
                  <span>{block.label}</span>
                  <span className="text-muted">{block.index}</span>
                </div>
                <ul className="divide-y divide-border/40 p-4 text-xs leading-relaxed text-ink/90 sm:p-5">
                  {block.items.map((entry) => (
                    <li key={entry} className="py-2.5 first:pt-0 last:pb-0">
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Next page link */}
          <div className="mt-10 flex justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-border bg-bg px-6 py-4 font-mono text-xs font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:bg-lime"
            >
              <span>Next: Contact</span>
              <ArrowRight
                className="arrow-shift arrow-shift-right h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
