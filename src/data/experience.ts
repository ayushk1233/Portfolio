export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  current?: boolean;
  achievement: string;
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
    achievement:
      "Built multilingual ASR inference over ~40K audio files in 5 languages (Nemotron 3.5 0.6B on RTX 4090s) processing 23K files in ~1.5h at ~34× real-time, root-caused a PyTorch C++ 32-bit integer overflow crash with zero reprocessing, and automated GPU-parallel Hindi diarization QC & TTS Bradley-Terry evaluation.",
    keyMetric: "~34× real-time ASR · ~41m diarization QC",
    tags: ["Nemotron 3.5 ASR", "PyTorch", "Pyannote 3.1", "TTS Eval"],
  },
  {
    id: "atg-banao",
    company: "ATG / Banao Technologies",
    role: "Applied AI Engineer Intern",
    period: "Nov 2025 – May 2026",
    achievement:
      "Built a sub-800ms streaming voice agent (Gemini Live API, LangGraph, WebRTC, Pinecone), engineered a serverless RunPod audio pipeline with 0 misattributed speakers across 120 meetings, and deployed autoscaling AWS ECS Fargate microservices cutting deploy time 25%.",
    keyMetric: "<800ms voice agent · 0/120 speaker errors",
    tags: ["Gemini Live API", "WebRTC", "RunPod", "AWS ECS"],
  },
  {
    id: "blockseblock",
    company: "BlockseBlock",
    role: "AI and Decentralized Systems Intern",
    period: "Aug 2025 – Oct 2025",
    achievement:
      "Fine-tuned Llama 3 8B with QLoRA on 8K clinical Q&A examples raising held-out accuracy from 61% to 78% on a single 24 GB GPU, and deployed quantized GGUF/ONNX edge models with schema-validated extraction cutting mis-routed queries 35%.",
    keyMetric: "61% → 78% accuracy · 35% fewer mis-routes",
    tags: ["Llama 3 8B", "QLoRA", "GGUF / ONNX", "LangChain"],
  },
];
