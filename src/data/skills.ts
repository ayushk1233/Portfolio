export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  items: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-ml",
    index: "01",
    title: "AI / ML",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "PEFT (LoRA / QLoRA)",
      "Accelerate (DDP, fp16)",
      "TensorFlow",
      "ONNX Runtime",
      "GGUF Quantization",
      "GPU Batching & Profiling",
      "NLP",
      "Computer Vision",
      "Python",
      "C++",
    ],
  },
  {
    id: "llm-systems",
    index: "02",
    title: "LLM Systems",
    items: [
      "LangGraph",
      "LangChain",
      "RAG",
      "Embeddings",
      "Pinecone",
      "FAISS",
      "Agentic Workflows",
      "Prompt Regression Testing",
    ],
  },
  {
    id: "speech-ai",
    index: "03",
    title: "Speech AI",
    items: [
      "ASR",
      "TTS (Flow Matching)",
      "Speaker Diarization",
      "VAD",
      "Forced Alignment",
      "WER / CER",
      "DER / JER / cpWER",
      "Speaker Similarity",
    ],
  },
  {
    id: "backend",
    index: "04",
    title: "Backend",
    items: [
      "FastAPI",
      "Celery",
      "Redis",
      "PostgreSQL",
      "SQL",
      "Async I/O",
      "WebSockets",
      "WebRTC",
      "SSE",
    ],
  },
  {
    id: "cloud-infra",
    index: "05",
    title: "Cloud / Infrastructure",
    items: [
      "AWS (ECS Fargate, EKS, Lambda, ECR)",
      "RunPod",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Kaggle",
    ],
  },
];
