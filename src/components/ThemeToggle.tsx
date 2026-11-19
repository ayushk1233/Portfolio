"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "ak_theme";
const THEME_CHANGE_EVENT = "ak-theme-change";

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  } catch {
    // fallback
  }
  return "light";
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
  } else {
    root.classList.remove("dark");
    root.setAttribute("data-theme", "light");
  }
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore storage errors
  }
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: theme }));
}

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  className = "",
  showLabel = true,
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Sync with currently active DOM class or storage
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const onThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<Theme>;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      } else {
        const darkActive = document.documentElement.classList.contains("dark");
        setTheme(darkActive ? "dark" : "light");
      }
    };

    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && (e.newValue === "dark" || e.newValue === "light")) {
        applyTheme(e.newValue);
        setTheme(e.newValue);
      }
    };

    window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle color theme"
      }
      title={
        mounted
          ? isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Toggle theme"
      }
      className={`group inline-flex h-9 items-center gap-2 border border-border bg-bg px-2.5 font-mono text-xs font-semibold text-ink transition-colors duration-200 hover:border-flame hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${className}`}
    >
      {/* Accent indicator: in light mode it's lime, in dark mode it's the switched shade (lime green -> flame orange) */}
      <span
        className={`inline-block h-2 w-2 border border-border transition-colors duration-200 ${
          isDark ? "bg-flame" : "bg-lime"
        }`}
        aria-hidden="true"
      />

      {showLabel ? (
        <span className="hidden tracking-wider uppercase sm:inline">
          {mounted ? (isDark ? "DARK" : "LIGHT") : "THEME"}
        </span>
      ) : null}

      {mounted ? (
        isDark ? (
          <Sun
            className="h-3.5 w-3.5 text-flame transition-transform duration-200 group-hover:rotate-45"
            aria-hidden="true"
          />
        ) : (
          <Moon
            className="h-3.5 w-3.5 text-ink transition-transform duration-200 group-hover:-rotate-12"
            aria-hidden="true"
          />
        )
      ) : (
        <span className="inline-block h-3.5 w-3.5" aria-hidden="true" />
      )}
    </button>
  );
}
