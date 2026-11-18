"use client";

import { useState } from "react";
import {
  AudioLines,
  BrainCircuit,
  Cloud,
  Cpu,
  Server,
  type LucideIcon,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/skills";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "ai-ml": Cpu,
  "llm-systems": BrainCircuit,
  "speech-ai": AudioLines,
  backend: Server,
  "cloud-infra": Cloud,
};

const MARQUEE_ITEMS = [
  "PYTORCH",
  "LANGGRAPH",
  "NEMOTRON ASR",
  "INDICF5 FLOW MATCHING",
  "PEFT / QLORA",
  "WEBRTC VOICE AI",
  "FAISS & PINECONE",
  "FASTAPI + CELERY",
  "AWS ECS FARGATE",
  "RUNPOD GPU",
  "DOCKER & K8S",
  "GRAFANA + PROMETHEUS",
];

export function TechStack() {
  const [selectedId, setSelectedId] = useState<string>("all");

  const visibleCategories =
    selectedId === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedId);

  return (
    <div className="space-y-5">
      {/* Subtle live horizontal marquee bar */}
      <div
        className="overflow-hidden border border-border bg-ink py-2.5 text-bg"
        aria-hidden="true"
      >
        <div className="animate-stack-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-6 pr-6">
              {MARQUEE_ITEMS.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="inline-flex items-center gap-3 font-mono text-[11px] font-semibold tracking-[0.14em]"
                >
                  <span className="inline-block h-1.5 w-1.5 bg-lime" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive domain filter bar */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Filter technical stack by domain"
      >
        <button
          type="button"
          role="tab"
          aria-selected={selectedId === "all"}
          onClick={() => setSelectedId("all")}
          className={`inline-flex h-9 items-center gap-2 border border-border px-3 font-mono text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 ${
            selectedId === "all"
              ? "bg-lime text-ink shadow-[2px_2px_0_0_#292929]"
              : "bg-bg text-muted hover:-translate-y-0.5 hover:text-ink"
          }`}
        >
          <span>All Domains</span>
          <span className="text-[10px] opacity-75">
            ({SKILL_CATEGORIES.length})
          </span>
        </button>

        {SKILL_CATEGORIES.map((category) => {
          const isActive = selectedId === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedId(category.id)}
              className={`inline-flex h-9 items-center gap-2 border border-border px-3 font-mono text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                isActive
                  ? "bg-lime text-ink shadow-[2px_2px_0_0_#292929]"
                  : "bg-bg text-muted hover:-translate-y-0.5 hover:bg-surface hover:text-ink"
              }`}
            >
              <span>{category.title}</span>
              <span className="text-[10px] opacity-75">
                {category.items.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Animated bordered domain cards */}
      <div
        className={`grid grid-cols-1 gap-4 ${
          selectedId === "all" ? "sm:grid-cols-2 lg:grid-cols-6" : ""
        }`}
      >
        {visibleCategories.map((category, idx) => {
          const Icon = CATEGORY_ICONS[category.id] ?? Cpu;
          const colSpanClass =
            selectedId !== "all"
              ? "lg:col-span-6"
              : idx < 3
                ? "lg:col-span-2"
                : "lg:col-span-3";

          return (
            <div
              key={category.id}
              className={`group relative flex flex-col overflow-hidden border border-border bg-bg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#292929] ${colSpanClass}`}
            >
              {/* Animated lime accent bar sweeping across top on hover */}
              <div
                className="h-[3px] w-full origin-left scale-x-0 bg-lime transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-7 w-7 items-center justify-center border border-border bg-bg text-ink transition-colors duration-200 group-hover:bg-lime">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-mono text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                    {category.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
                  <span
                    className="animate-lime-beacon inline-block h-2 w-2 border border-border bg-lime"
                    aria-hidden="true"
                  />
                  <span>{category.index}</span>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 p-4 sm:p-5">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="cursor-default border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-lime hover:shadow-[2px_2px_0_0_#292929]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
