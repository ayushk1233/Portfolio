export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
  keyMetric: string;
  tags: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "josh-talks",
    company: "Josh Talks",
    role: "AI Product, Speech AI / ML Engineering",
    period: "Aug 2026 – Present",
    current: true,
    bullets: [
      "Built multilingual ASR inference over ~40K audio files in 5 languages (NVIDIA Nemotron 3.5 Streaming ASR 0.6B, remote RTX 4090s) with async prefetch, duration bucketing, dynamic batching, and checkpointed resume; processed 23K files in ~1.5 hours at ~34× real-time.",
      "Root-caused a production inference crash to a 32-bit integer overflow in the PyTorch C++ path (tensors beyond ~2.14B elements), not GPU VRAM exhaustion; shipped adaptive batch throttling and file-level checkpointing, completing the run with zero reprocessing.",
      "Automated GPU-parallel diarization QC for ~1,500 Hindi recordings (Pyannote 3.1, 3 spawn-safe concurrent processes), cutting runtime from several hours to ~41 minutes; scored 5 acoustic signals into a penalty-based PASS/REVIEW/FAIL engine.",
      "Engineered diarization ground truth fusing GCC-PHAT sync, energy hysteresis, Silero VAD, and MMS forced alignment into QC-checked RTTM/UEM references; built an evaluation harness covering DER, JER, cpWER, purity/coverage, and overlap DER with scorer self-tests.",
      "Ran blind pairwise TTS human-preference benchmarking across multiple TTS systems, scoring naturalness and tagging 5 failure modes (prosody, hallucination, mispronunciation, emotion mismatch, code-switching) for Bradley-Terry ranking.",
    ],
    keyMetric: "~34× real-time ASR · ~41m diarization QC",
    tags: ["Nemotron 3.5 ASR", "PyTorch", "Pyannote 3.1", "Silero VAD", "TTS Eval"],
  },
  {
    id: "atg-banao",
    company: "ATG / Banao Technologies",
    role: "Applied AI Engineer Intern",
    period: "Nov 2025 – May 2026",
    bullets: [
      "Engineered a split-runtime serverless audio pipeline (FFmpeg, Faster-Whisper ASR, Pyannote diarization on RunPod GPUs), cutting active compute to 3–4 min/meeting; added SpeechBrain ECAPA-TDNN identity gating (0.90 threshold), with 0 misattributed speakers in 120 meetings.",
      "Built a streaming speech-to-speech voice agent at sub-800ms end-to-end latency using the Gemini Live API, LangGraph stateful orchestration, WebRTC transport, and Pinecone cross-session memory.",
      "Owned the ML integration layer for a multilingual AI interview platform: Sarvam API transcription (40% lower token consumption) and computer-vision checks for phone use and lip-sync mismatch (deepfake signals) at less than 2% false positives on 400 labelled sessions.",
      "Curated a 5,000+ coding-challenge bank with Pinecone retrieval so evaluations used only vetted questions; deployed microservices on AWS (ECS Fargate, ECR, Lambda) with GitHub Actions CI/CD, autoscaling from 2 to 6 ECS tasks (3×) at peak and cutting deploy time from 12 to 9 min (25%).",
    ],
    keyMetric: "<800ms voice agent · 0/120 speaker errors",
    tags: ["Gemini Live API", "LangGraph", "WebRTC", "RunPod", "AWS ECS"],
  },
  {
    id: "blockseblock",
    company: "BlockseBlock",
    role: "AI and Decentralized Systems Intern",
    period: "Aug 2025 – Oct 2025",
    bullets: [
      "Fine-tuned Llama 3 8B with QLoRA on 8K clinical Q&A and summarization examples, raising held-out answer accuracy from 61% to 78% on a single 24 GB GPU.",
      "Deployed quantized models on memory-constrained edge hardware (GGUF via Ollama, ONNX Runtime export) and enforced JSON-schema-validated LangChain prompts for clinical data extraction, cutting mis-routed requests 35% (20% to 13% of 1,000 test queries).",
    ],
    keyMetric: "61% → 78% accuracy · 35% fewer mis-routes",
    tags: ["Llama 3 8B", "QLoRA", "GGUF / ONNX", "LangChain"],
  },
];
