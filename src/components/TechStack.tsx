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

export function TechStack() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {SKILL_CATEGORIES.map((category, idx) => {
        const Icon = CATEGORY_ICONS[category.id] ?? Cpu;
        // Balanced Swiss 3-over-2 grid on desktop: first 3 span 2 cols each, bottom 2 span 3 cols each
        const colSpanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";

        return (
          <div
            key={category.id}
            className={`flex flex-col border border-border bg-bg ${colSpanClass}`}
          >
            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-ink" aria-hidden="true" />
                <h3 className="font-mono text-xs font-semibold tracking-[0.12em] text-ink uppercase">
                  {category.title}
                </h3>
              </div>
              <span className="font-mono text-[11px] text-muted">
                {category.index}
              </span>
            </div>

            <ul className="flex flex-wrap gap-2 p-4 sm:p-5">
              {category.items.map((skill) => (
                <li
                  key={skill}
                  className="border border-border/80 bg-bg px-2.5 py-1 font-mono text-xs text-ink transition-colors duration-200 hover:bg-lime"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
