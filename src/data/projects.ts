export type ProjectIllustrationType = "agent-monitor" | "speech-dubbing" | "multi-agent-rag";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  period: string;
  category: string;
  shortDescription: string;
  tags: string[];
  stack: string[];
  illustration: ProjectIllustrationType;
  githubUrl: string;
  liveUrl?: string;
  highlightStat: string;
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    stages: {
      step: string;
      name: string;
      detail: string;
    }[];
  };
  engineeringDecisions: {
    title: string;
    detail: string;
  }[];
  tradeoffs: {
    title: string;
    detail: string;
  }[];
  verifiedResults: ProjectMetric[];
}

export const PROJECTS: Project[] = [
  {
    slug: "competitor-intelligence-monitor",
    index: "01",
    title: "Competitor Intelligence Monitor",
    period: "Feb 2026 – Jul 2026",
    category: "AGENTIC SYSTEMS / OBSERVABILITY",
    shortDescription:
      "Autonomous agentic monitor across 20+ sources for signal extraction, strategic drift detection, and battlecard generation.",
    tags: ["LangGraph", "FastAPI", "Celery", "Grafana"],
    stack: ["LangGraph", "FastAPI", "Celery", "Redis", "Next.js", "Grafana"],
    illustration: "agent-monitor",
    githubUrl: "https://github.com/ayushk1233/Competitor-Intelligence-Monitor",
    highlightStat: "0.80+ eval · 20+ sources",
    problem:
      "Tracking product, pricing, and positioning shifts across dozens of competitor surfaces manually is slow, noisy, and easy to miss. Naive LLM scrapers either drown teams in false alarms or silently degrade in output quality as prompts evolve.",
    solution:
      "Built an autonomous multi-step monitoring system orchestrated with LangGraph that continuously ingests signals from 20+ sources, detects meaningful strategic drift, and synthesizes structured battlecards within a bounded ~20K token budget per run—backed by prompt regression testing and real-time operational telemetry.",
    architecture: {
      overview:
        "Decoupled ingestion, asynchronous agent orchestration, and live observability allow scheduled monitoring runs to scale independently from the web interface.",
      stages: [
        {
          step: "01",
          name: "Multi-Source Signal Ingestion",
          detail:
            "Celery workers coordinated via Redis pull and normalize updates across 20+ external competitor sources asynchronously.",
        },
        {
          step: "02",
          name: "LangGraph Agent Pipeline",
          detail:
            "Stateful graph executes structured signal extraction, strategic drift detection against prior snapshots, and battlecard synthesis (~20K tokens/run).",
        },
        {
          step: "03",
          name: "Prompt Regression Gate",
          detail:
            "Automated benchmark suite validates extraction and synthesis quality across prompt iterations, enforcing a 0.80+ score bar.",
        },
        {
          step: "04",
          name: "API, Alerting & Grafana Telemetry",
          detail:
            "FastAPI serves structured intelligence to a Next.js UI while real-time alerts and Grafana dashboards track 14+ pipeline and system metrics.",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "Explicit Graph State via LangGraph",
        detail:
          "Modeled extraction, drift comparison, and battlecard generation as discrete stateful nodes rather than a monolithic prompt, keeping token usage predictable (~20K tokens/run) and failures inspectable.",
      },
      {
        title: "Prompt Regression Testing as a First-Class Gate",
        detail:
          "Paired prompt and workflow changes with an automated benchmark harness holding a 0.80+ score so model or prompt edits cannot silently regress battlecard quality.",
      },
      {
        title: "Full-Stack Operational Visibility",
        detail:
          "Instrumented 14+ metrics in Grafana alongside real-time alerting to monitor worker queues, run health, latency, and alert triggers in production.",
      },
    ],
    tradeoffs: [
      {
        title: "Token Budget vs. Deep Context",
        detail:
          "Capping each monitoring pass near ~20K tokens keeps recurring multi-source runs economically viable, at the cost of aggressive pre-filtering before synthesis.",
      },
      {
        title: "Celery + Redis Complexity vs. Background Reliability",
        detail:
          "Introducing a dedicated task queue adds operational moving parts over simple cron jobs, but isolates long-running scraping and LLM execution from FastAPI request handling.",
      },
    ],
    verifiedResults: [
      { value: "20+", label: "Monitored competitor sources" },
      { value: "0.80+", label: "Prompt regression benchmark score" },
      { value: "~20K", label: "Tokens consumed per autonomous run" },
      { value: "14+", label: "Tracked Grafana telemetry metrics" },
    ],
  },
  {
    slug: "indic-speech-dubbing-tts",
    index: "02",
    title: "Indic Speech Dubbing & TTS Fine-tuning",
    period: "Sep 2026 – Present",
    category: "SPEECH AI / MODEL TRAINING",
    shortDescription:
      "Timing-preserving video dubbing pipeline and open-source LoRA fine-tuning stack for IndicF5 (337M flow-matching DiT).",
    tags: ["PyTorch", "IndicF5", "Faster-Whisper", "PEFT"],
    stack: [
      "PyTorch",
      "IndicF5",
      "Faster-Whisper",
      "IndicTrans2",
      "PEFT",
      "Accelerate",
      "FFmpeg",
    ],
    illustration: "speech-dubbing",
    githubUrl: "https://github.com/ayushk1233/indic-dub-pipeline",
    highlightStat: "14/14 zero-drift · 135 tests",
    problem:
      "Automatic Hindi-English video dubbing frequently drifts out of lip/scene alignment due to a measured 1.2× Hindi-vs-English speech-length gap, while zero-shot TTS models struggle to preserve faithful Indian English accents without stable, reproducible fine-tuning infrastructure.",
    solution:
      "Built an end-to-end timing-preserving video dubbing pipeline (FFmpeg, Faster-Whisper ASR, IndicTrans2, IndicF5 zero-shot voice cloning, and Whisper CER content QC) paired with an open-source distributed LoRA fine-tuning stack for the 337M-parameter IndicF5 flow-matching DiT.",
    architecture: {
      overview:
        "Two tightly coupled engineering tracks: an inference-time dubbing pipeline with duration-aware translation selection, and a fault-tolerant multi-GPU LoRA training harness.",
      stages: [
        {
          step: "01",
          name: "ASR & Segment Timing Extraction",
          detail:
            "FFmpeg demuxes source tracks and Faster-Whisper produces timestamped transcripts establishing exact target segment durations.",
        },
        {
          step: "02",
          name: "Duration-Scored Translation",
          detail:
            "IndicTrans2 generates candidate translations scored by a duration model to close the measured 1.2× Hindi-vs-English speech-length gap.",
        },
        {
          step: "03",
          name: "Voice Cloning, Assembly & CER QC",
          detail:
            "IndicF5 synthesizes zero-shot cloned speech, timing-preserving assembly remuxes the video, and Whisper CER verifies content fidelity.",
        },
        {
          step: "04",
          name: "IndicF5 LoRA Training Stack",
          detail:
            "PEFT + Accelerate training loop for 337M-param flow-matching DiT across 2×T4 DDP with fp16, EMA, bit-exact resume, NaN rollback, and a 14-check GPU pre-flight suite.",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "Duration-Model-Scored Candidate Selection",
        detail:
          "Rather than stretching synthesized audio aggressively during post-processing, translation candidates are scored against target speech durations upfront to prevent timing drift.",
      },
      {
        title: "Closed-Loop Whisper CER Content QC",
        detail:
          "Every synthesized segment is transcription-checked via Whisper CER so hallucinations or dropped words are flagged automatically before final remux.",
      },
      {
        title: "Defensive Multi-GPU Training Reliability",
        detail:
          "Engineered bit-exact checkpoint resume, automatic NaN rollback, EMA weights, a 14-check GPU pre-flight suite, and 135 automated tests so 2×T4 DDP runs fail fast and recover cleanly.",
      },
    ],
    tradeoffs: [
      {
        title: "LoRA Adapters vs. Full-Model Fine-Tuning",
        detail:
          "PEFT LoRA enables training the 337M flow-matching DiT on commodity 2×T4 GPUs in fp16 while preserving zero-shot cloning capability, trading off full parameter plasticity for hardware accessibility.",
      },
      {
        title: "Strict Duration Matching vs. Literal Translation",
        detail:
          "Selecting duration-aligned translation candidates prioritizes natural pacing and zero drift across segments over word-for-word literal phrasing.",
      },
    ],
    verifiedResults: [
      { value: "14 / 14", label: "Segments landed with zero drift (first auto dub)" },
      { value: "1.2×", label: "Measured Hindi-vs-English length gap closed" },
      { value: "135", label: "Automated tests + 14-check GPU pre-flight suite" },
      { value: "337M", label: "IndicF5 flow-matching DiT trained via 2×T4 DDP LoRA" },
    ],
  },
  {
    slug: "multi-agent-rag-platform",
    index: "03",
    title: "Multi-Agent RAG Platform",
    period: "Apr 2026 – May 2026",
    category: "LLM SYSTEMS / RETRIEVAL",
    shortDescription:
      "4-agent RAG pipeline (decomposition, retrieval, synthesis, critique) with claim-level provenance and hybrid FAISS/web routing.",
    tags: ["FastAPI", "FAISS", "PostgreSQL", "SSE"],
    stack: ["FastAPI", "Streamlit", "FAISS", "Redis", "PostgreSQL", "SSE"],
    illustration: "multi-agent-rag",
    githubUrl: "https://github.com/ayushk1233/mega-ai",
    highlightStat: "18% → 7% ungrounded",
    problem:
      "Single-pass RAG pipelines struggle on multi-hop questions: a single retrieval query misses supporting evidence, and unconstrained synthesis blends retrieved facts with unverified parametric assumptions—producing high ungrounded claim rates without visibility into where latency or errors originate.",
    solution:
      "Architected a 4-agent RAG system separating query decomposition, hybrid FAISS/web retrieval, grounded synthesis, and automated critique with claim-level provenance, streaming real-time per-agent latency and token telemetry over Server-Sent Events (SSE).",
    architecture: {
      overview:
        "Specialized agent roles communicate over a FastAPI backend backed by FAISS vector indexes, Redis caching, and PostgreSQL persistence, streaming step-by-step execution events to Streamlit.",
      stages: [
        {
          step: "01",
          name: "Decomposition Agent",
          detail:
            "Breaks complex user prompts into focused sub-queries so retrieval targets discrete factual dependencies.",
        },
        {
          step: "02",
          name: "Hybrid Retrieval Agent",
          detail:
            "Routes each sub-query dynamically across local FAISS vector stores and live web retrieval to maximize evidence coverage.",
        },
        {
          step: "03",
          name: "Synthesis Agent",
          detail:
            "Compiles candidate answers attaching explicit claim-level provenance links back to retrieved source spans.",
        },
        {
          step: "04",
          name: "Critique Agent & SSE Telemetry",
          detail:
            "Audits synthesized claims against retrieved evidence to suppress unsupported statements while streaming per-agent latency and token telemetry via SSE.",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "Dedicated Critique Pass with Claim-Level Provenance",
        detail:
          "Decoupling verification from generation allowed systematic auditing of each claim against source chunks, driving the measured drop from 18% to 7% ungrounded claims.",
      },
      {
        title: "Hybrid FAISS + Web Routing",
        detail:
          "Combining fast local dense retrieval (FAISS) with web fallback handles both private/indexed corpora and out-of-index factual queries within one pipeline.",
      },
      {
        title: "Per-Agent SSE Telemetry",
        detail:
          "Streaming granular per-agent latency and token counts via SSE makes multi-hop execution transparent to users and highlights bottlenecks during evaluation.",
      },
    ],
    tradeoffs: [
      {
        title: "Multi-Agent Verification vs. Single-Pass Latency",
        detail:
          "Running four sequential/coordinated agents increases total compute and time-to-final-answer compared to a single-agent baseline, mitigated in UX through progressive SSE streaming.",
      },
      {
        title: "Strict Grounding vs. Answer Completeness",
        detail:
          "Flagging or pruning unsupported claims dramatically reduces hallucinations (18% → 7%), occasionally resulting in more conservative answers when evidence is sparse.",
      },
    ],
    verifiedResults: [
      { value: "18% → 7%", label: "Ungrounded claims vs. single-agent baseline" },
      { value: "200", label: "Questions in controlled evaluation benchmark" },
      { value: "4 Agents", label: "Decomposition, retrieval, synthesis, critique" },
      { value: "Live SSE", label: "Per-agent latency & token telemetry stream" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
