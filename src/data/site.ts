export interface NavItem {
  label: string;
  href: string;
  matchPrefix: string;
}

export interface HighlightMetric {
  id: string;
  index: string;
  value: string;
  label: string;
  context: string;
  source: string;
}

export const SITE_CONFIG = {
  name: "Ayush Kumar",
  monogram: "AK.",
  roleLabel: "AYUSH KUMAR / AI ML ENGINEER",
  title: "Ayush Kumar — AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in Applied AI, Voice AI, Agentic Systems, and Production ML Infrastructure. Taking models from research to measured production.",
  location: "Gurugram, Haryana",
  email: "ayushk1503@gmail.com",
  github: "https://github.com/ayushk1233",
  githubHandle: "github.com/ayushk1233",
  linkedin: "https://linkedin.com/in/ayushkumar15",
  linkedinHandle: "linkedin.com/in/ayushkumar15",
  resumePath: "/resume/Ayush_Kumar_Resume.pdf",
  resumeFilename: "Ayush_Kumar_Resume.pdf",
  portraitPath: "/images/ayush-portrait.jpg",
  specialties: "Applied AI · Voice AI · Agentic Systems · MLOps",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", matchPrefix: "/" },
  { label: "Projects", href: "/projects", matchPrefix: "/projects" },
  { label: "Experience", href: "/experience", matchPrefix: "/experience" },
  { label: "Contact", href: "/contact", matchPrefix: "/contact" },
];

export const ENGINEERING_METRICS: HighlightMetric[] = [
  {
    id: "asr-throughput",
    index: "01",
    value: "~34× RT",
    label: "Speech Inference Throughput",
    context: "23K multilingual audio files in ~1.5h on RTX 4090s",
    source: "Josh Talks · Nemotron 3.5 ASR",
  },
  {
    id: "voice-latency",
    index: "02",
    value: "<800ms",
    label: "Voice Agent E2E Latency",
    context: "Streaming speech-to-speech over WebRTC + Gemini Live API",
    source: "ATG / Banao · LangGraph",
  },
  {
    id: "rag-grounding",
    index: "03",
    value: "18% → 7%",
    label: "Ungrounded RAG Claims",
    context: "4-agent provenance pipeline on 200-question eval set",
    source: "Multi-Agent RAG Platform",
  },
  {
    id: "deploy-speed",
    index: "04",
    value: "25% Faster",
    label: "CI/CD Deploy Pipeline",
    context: "Cut deploy time 12 → 9 min with 3× ECS Fargate autoscale",
    source: "ATG / Banao · AWS ECS",
  },
];
