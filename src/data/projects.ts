export type ProjectIllustrationType =
  | "agent-monitor"
  | "speech-dubbing"
  | "multi-agent-rag"
  | "diarizbench"
  | "gptease-benchmark"
  | "agent-lab";

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
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  comingSoon?: boolean;
  highlightStat: string;
  problem: string;
  solution: string;
  cliPreview?: string[];
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
  {
    slug: "diarizbench",
    index: "04",
    title: "DiarizBench",
    period: "Nov 2026",
    category: "SPEECH AI / BENCHMARKING",
    shortDescription:
      "Reproducible multilingual speaker-diarization pilot and leaderboard methodology across 24 recordings, 7 languages, and 3 systems.",
    tags: ["Python", "Pyannote", "Nemotron-3", "Anuvani"],
    stack: [
      "Python 3.11",
      "pyannote.metrics",
      "dscore",
      "CIIL Anuvani",
      "pyannote community-1",
      "NVIDIA Nemotron-3",
      "Kaggle T4 ×2",
      "Bootstrap CI",
    ],
    illustration: "diarizbench",
    githubUrl: "https://github.com/ayushk1233/DiarizBench-",
    liveUrl: "https://www.loom.com/share/8b679c3b23484febb68818ec3cf86945",
    liveLabel: "Loom Walkthrough",
    highlightStat: "72 runs · 7 languages · 13.8% DER",
    problem:
      "Headline Diarization Error Rate (DER) numbers routinely hide critical real-world failures: brief participants who get dropped entirely, overlapping speech, mixed offline vs. streaming operating modes, and corpus annotation mismatches across English and Indic languages.",
    solution:
      "Built a reproducible multilingual speaker-diarization pilot (24 source recordings across Indic DiarBench, AMI, and VoxConverse; 7 languages; 72 completed inference units across CIIL Anuvani, pyannote community-1, and NVIDIA Nemotron-3) paired with frozen scoring contracts, paired bootstrap confidence intervals, a low-activity speaker recall diagnostic, and an inspectable product leaderboard design.",
    architecture: {
      overview:
        "Decoupled Kaggle GPU inference, local deterministic scoring (zero collar primary + 0.25s collar sensitivity), statistical uncertainty analysis, and an audio-free inspectable leaderboard UI.",
      stages: [
        {
          step: "01",
          name: "Manifest & Consent-Safe Data Contract",
          detail:
            "Canonical 16 kHz mono WAV manifest spanning 12 Indic DiarBench recordings (Hindi, Bengali, Marathi, Tamil, Telugu, Kannada), 6 AMI meetings, and 6 VoxConverse recordings with decoded-PCM checksums and zero audio committed to Git.",
        },
        {
          step: "02",
          name: "Checkpointed Kaggle GPU Runner",
          detail:
            "Resumable 2×T4 runner executes 72 system/recording units plus a fixed 6-recording timing panel, persisting RTTM hypotheses, timing logs, and execution metadata.",
        },
        {
          step: "03",
          name: "Frozen Scoring & Coverage Diagnostics",
          detail:
            "Scores DER (0-collar primary and c=0.25s), JER, exact speaker count accuracy, and low-activity speaker recall (≤5% speaking time, ≥0.5s speech) with scorer unit tests and independent dscore reference checks.",
        },
        {
          step: "04",
          name: "Uncertainty Analysis & Inspectable Product UI",
          detail:
            "Computes paired bootstrap 95% confidence intervals and renders an interactive leaderboard design covering model comparison, recording-level turn timelines, methodology, and a proposed 60-hour collection spec.",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "Zero-Collar DER Primary + Low-Activity Recall Diagnostic",
        detail:
          "Kept zero-collar DER as the primary metric alongside exact speaker count and low-activity recall, exposing that Nemotron-3 streaming achieved higher exact-count accuracy (58%) and low-activity recall (61%) even where Anuvani led in offline DER (13.8%).",
      },
      {
        title: "Strict Separation of Offline vs. Streaming Modes",
        detail:
          "Refused to collapse offline and streaming systems into a single misleading rank, explicitly labeling operating mode and timed callable scope alongside every RTF measurement.",
      },
      {
        title: "Transparent Evidence Boundaries",
        detail:
          "Documented corpus confounding, public-corpus exposure, and non-equivalence under confidence intervals rather than overclaiming a universal leaderboard from a 24-recording pilot.",
      },
    ],
    tradeoffs: [
      {
        title: "Pilot Scope vs. Full 60-Hour Production Benchmark",
        detail:
          "A 24-recording multilingual pilot validates the scoring contract, failure modes, and UI design immediately, while deferring the proposed 60-hour (12h public dev / 48h private eval) collection to future execution.",
      },
      {
        title: "No Embedded Audio in Public Repo vs. Instant Web Playback",
        detail:
          "Excluding raw corpus audio honors dataset licenses and consent terms; reviewers inspect turn timelines directly and can load local permitted WAV files in the listening-room UI.",
      },
    ],
    verifiedResults: [
      { value: "13.8% DER", label: "CIIL Anuvani offline (0-collar, 95% CI [10.0, 17.9])" },
      { value: "58% / 61%", label: "Nemotron-3 exact speaker count & low-activity recall" },
      { value: "72 Runs", label: "24 recordings × 3 systems across 7 languages" },
      { value: "0.053 RTF", label: "Fixed 6-recording timing panel (Anuvani offline)" },
    ],
  },
  {
    slug: "gptease-benchmark",
    index: "05",
    title: "GPTease ConvoRealism Benchmark",
    period: "2026",
    category: "LLM EVALUATION / BENCHMARKING",
    shortDescription:
      "Open-source 15-dimension conversational realism benchmark across 7 LLMs with hybrid judge routing, realism ceilings, and multiplicative penalty cascades.",
    tags: ["Python", "Asyncio", "LLM-as-Judge", "Pydantic"],
    stack: [
      "Python",
      "Asyncio",
      "Pydantic",
      "Typer",
      "OpenRouter",
      "Together AI",
      "Featherless",
      "Tenacity",
      "YAML Config",
    ],
    illustration: "gptease-benchmark",
    githubUrl: "https://github.com/ayushk1233/gptease-benchmark",
    highlightStat: "7 models · 15 dims · +6.81 bias found",
    problem:
      "Standard LLM benchmarks measure coding, math, and MMLU recall—not whether a model sounds like a real person in emotionally nuanced conversation. Naive LLM judges also reward verbose, theatrical prose over authentic dialogue and suffer from unmeasured self-preference bias.",
    solution:
      "Built ConvoRealism for the GPTease platform: a modular, YAML-driven async evaluation pipeline scoring 7 open-source LLMs across 15 dimensions (rule-based detectors, structural/lexical heuristics, and hybrid-routed LLM judges), combining a Realism Ceiling with multiplicative penalty cascades onto a normalized 20–100 leaderboard scale.",
    architecture: {
      overview:
        "Externalized YAML configs drive multi-provider async generation, 3-tier hybrid evaluation, response-hash judge caching, and cascading score aggregation into JSON, Markdown, and CSV reports.",
      stages: [
        {
          step: "01",
          name: "Multi-Turn Prompt Builder & Classifier",
          detail:
            "Loads multi-turn JSONL prompts, strips generation markers to prevent payload leakage, and classifies prompt genres to set context-appropriate length windows.",
        },
        {
          step: "02",
          name: "Async Multi-Provider Inference Engine",
          detail:
            "Dispatches semaphore-throttled calls across OpenRouter, Together AI, and Featherless with exponential backoff, EMPTY_STOP failure caching, and full payload diagnostics.",
        },
        {
          step: "03",
          name: "15-Dimension Hybrid Evaluator Stack",
          detail:
            "Combines deterministic rule-based detectors (refusal, repetition, AI signature, immersion break), lexical heuristics (entropy, verbosity, cringe), and cross-routed LLM judges.",
        },
        {
          step: "04",
          name: "Realism Ceiling, Penalty Cascade & Reports",
          detail:
            "Caps prose quality when conversational naturalness or dynamic reactivity drops below 3.0, cascades multiplicative failure penalties, and exports normalized 20–100 leaderboards.",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "Realism Ceiling Over Prose Density",
        detail:
          "Elevated conversational_naturalness (12%), dynamic_reactivity (12%), and anti_ai_tone (11%) to dominant weights and gated prose dimensions behind them—preventing theatrical RP monologues from outranking authentic human-like replies.",
      },
      {
        title: "Cross-Model Hybrid Judge Routing",
        detail:
          "Empirically measured +6.81 points of self-preference inflation when DeepSeek-V4-Pro judged itself (86.87 vs 80.06 under neutral Kimi-K2.6), leading to per-model judge routing overrides and strict JSON judge hardening.",
      },
      {
        title: "Cost & Failure Isolation in Evaluation",
        detail:
          "Cached judge evaluations by (response_hash, judge_model_id, scoring_config_hash) and excluded EMPTY_STOP generations from leaderboard averages—completing 5 runs and 200+ evaluations for ~$3.50 total spend.",
      },
    ],
    tradeoffs: [
      {
        title: "Neutral Judge Selection vs. Content Filters",
        detail:
          "Standard neutral judges refuse explicit evaluation prompts while self-judging inflates scores by +6.81 points; cross-routing open/frontier judges mitigates bias until a human-annotated domain judge is trained.",
      },
      {
        title: "Sequential Multi-Dimension Judging vs. Throughput",
        detail:
          "Running 8+ LLM-judge calls per response makes judge API calls ~96% of total spend and bounds throughput via semaphore throttling, traded intentionally for granular per-dimension diagnostics.",
      },
    ],
    verifiedResults: [
      { value: "84.21", label: "Top score — Kimi-K2.6 (25/25 completions, 9.9s avg)" },
      { value: "+6.81 pts", label: "Measured LLM-judge self-preference bias (DeepSeek)" },
      { value: "80.71 / 8B", label: "Lunaris-8B outscored Euryale-70B (78.45) at 19× lower cost" },
      { value: "200+ Evals", label: "7 models · 15 dimensions · 5 runs · ~$3.50 total spend" },
    ],
  },
  {
    slug: "agent-lab",
    index: "06",
    title: "AgentLab (Agent Reliability Lab)",
    period: "Coming Soon · V1 Roadmap",
    category: "AGENTIC EVALS / COMING SOON",
    shortDescription:
      "Open-source local-first testing, tracing, RAG benchmarking, and regression release engineering toolkit for AI agents.",
    tags: ["Python", "LangGraph", "OpenTelemetry", "Pytest"],
    stack: [
      "Python",
      "Typer",
      "Pydantic",
      "LangGraph",
      "FastAPI",
      "Pytest",
      "OpenTelemetry",
      "SQLite / PostgreSQL",
    ],
    illustration: "agent-lab",
    comingSoon: true,
    highlightStat: "Coming Soon · Open-Source Beta",
    problem:
      "A small change to an agent's prompt, embedding model, retrieval pipeline, or tool definitions can silently break previously working behavior. Teams need to know what changed, what failed, and whether a new version is ready to ship—without manually eyeballing answers.",
    solution:
      "AgentLab is being designed as a local-first open-source toolkit—and long-term AI Release Engineer—that lets developers connect LangGraph or plain-Python agents, run deterministic and calibrated evaluation suites, trace tool calls/tokens/latency, benchmark RAG retrieval, and catch regressions against saved baselines in CI.",
    cliPreview: [
      "agentlab init      # scaffold config, adapters & baseline fixtures",
      "agentlab test      # run evals, RAG metrics & trace capture locally",
      "agentlab report    # diff against baseline & export JSON/HTML failure report",
    ],
    architecture: {
      overview:
        "Planned Version 1 open-source beta focused on CLI, Python SDK, reproducible evaluation, tracing, and baseline regression diffing before adding any hosted or dashboard layers.",
      stages: [
        {
          step: "01",
          name: "Python SDK & CLI Adapters",
          detail:
            "Lightweight adapter interface connecting LangGraph and plain-Python agents with minimal integration overhead via `agentlab init`, `test`, and `report`.",
        },
        {
          step: "02",
          name: "Evaluation & RAG Benchmarking Engine",
          detail:
            "Runs developer-supplied test cases scoring grounding, citations, tool selection, and retrieval quality (Recall@K, MRR, nDCG) across chunking, embeddings, and rerankers.",
        },
        {
          step: "03",
          name: "OpenTelemetry Tracing & Failure Taxonomy",
          detail:
            "Captures agent steps, tool calls, errors, latency, and token usage, categorizing failures (retrieval misses, unsupported claims, tool errors, timeouts) linked directly to traces.",
        },
        {
          step: "04",
          name: "Baseline Regression Diffing & CI Gates",
          detail:
            "Compares candidate agent runs against saved baselines in SQLite/PostgreSQL, flags newly failing cases, and integrates directly into GitHub Actions release workflows.",
        },
      ],
    },
    engineeringDecisions: [
      {
        title: "Local-First & Zero Silent Data Collection",
        detail:
          "Designed to run locally via Python package or Docker with SQLite persistence and strictly opt-in trace sharing so sensitive user data is never collected by default.",
      },
      {
        title: "CLI & Core Engine Before Dashboard",
        detail:
          "Immediate build priority is the CLI, evaluation engine, trace collection, and regression diffing—validated first on real systems like Competitor Intelligence Monitor and Multi-Agent RAG.",
      },
      {
        title: "Honest Separation of Mocked Replay vs. Live Testing",
        detail:
          "Explicitly distinguishes recorded-tool mocked replay from live integration tests, recognizing that traces alone do not guarantee deterministic causality.",
      },
    ],
    tradeoffs: [
      {
        title: "Tight V1 Scope vs. Hosted SaaS Platform",
        detail:
          "Deliberately keeping auto-fixes, autonomous deployments, and multi-tenant SaaS out of beta scope so the core open-source testing workflow becomes genuinely useful first.",
      },
      {
        title: "Deterministic Checks + Calibrated Judges vs. Pure LLM Grading",
        detail:
          "Anchoring evaluations in Pytest deterministic assertions and IR metrics (Recall@K, MRR, nDCG) with optional calibrated LLM judges avoids noisy, opaque scoring.",
      },
    ],
    verifiedResults: [
      { value: "Phase 1", label: "Core beta: CLI, SDK, eval engine & basic traces" },
      { value: "Phase 2", label: "RAG metrics, baseline regression diffs & CI checks" },
      { value: "Local-First", label: "Python + Docker · SQLite / PostgreSQL · OTel" },
      { value: "Open Source", label: "Roadmap & product spec — active build ahead" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
