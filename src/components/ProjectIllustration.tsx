import type { ProjectIllustrationType } from "@/data/projects";

interface ProjectIllustrationProps {
  type: ProjectIllustrationType;
  className?: string;
}

export function ProjectIllustration({
  type,
  className = "",
}: ProjectIllustrationProps) {
  if (type === "agent-monitor") {
    return (
      <svg
        viewBox="0 0 380 200"
        className={`h-full w-full ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Agent workflow and orchestration diagram for Competitor Intelligence Monitor"
      >
        {/* Subtle grid */}
        <line x1="0" y1="100" x2="380" y2="100" stroke="#292929" strokeOpacity="0.1" strokeDasharray="3 4" />
        <line x1="190" y1="0" x2="190" y2="200" stroke="#292929" strokeOpacity="0.1" strokeDasharray="3 4" />

        {/* Left: 20+ Sources stack */}
        <rect x="18" y="34" width="66" height="24" fill="#F8F7F2" stroke="#292929" strokeWidth="1.25" />
        <rect x="18" y="66" width="66" height="24" fill="#F8F7F2" stroke="#292929" strokeWidth="1.25" />
        <rect x="18" y="98" width="66" height="24" fill="#F8F7F2" stroke="#292929" strokeWidth="1.25" />
        <text x="27" y="49" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="#171717">SRC_01</text>
        <text x="27" y="81" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="#171717">SRC_02</text>
        <text x="27" y="113" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="#626262">+18 MORE</text>

        {/* Connectors to orchestrator */}
        <path d="M84 46 H108 V78 H126" stroke="#292929" strokeWidth="1.25" />
        <path d="M84 78 H126" stroke="#292929" strokeWidth="1.25" />
        <path d="M84 110 H108 V78" stroke="#292929" strokeWidth="1.25" />

        {/* Center: LangGraph Agent Orchestration Box */}
        <rect x="126" y="30" width="126" height="98" fill="#F8F7F2" stroke="#292929" strokeWidth="1.5" />
        <rect x="126" y="30" width="126" height="18" fill="#171717" />
        <text x="134" y="42" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="#C7FF35">LANGGRAPH AGENT</text>

        <rect x="136" y="56" width="106" height="18" fill="#EFEFEA" stroke="#292929" strokeWidth="1" />
        <text x="144" y="68" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="#171717">01. EXTRACT SIGNALS</text>

        <rect x="136" y="80" width="106" height="18" fill="#EFEFEA" stroke="#292929" strokeWidth="1" />
        <text x="144" y="92" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="#171717">02. DRIFT DETECT</text>

        <rect x="136" y="104" width="106" height="16" fill="#C7FF35" stroke="#292929" strokeWidth="1" />
        <text x="144" y="115" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="#171717">03. BATTLECARD</text>

        {/* Right: Eval Gate & Grafana Output */}
        <path d="M252 78 H282" stroke="#292929" strokeWidth="1.25" />
        <polygon points="282,75 288,78 282,81" fill="#292929" />

        <rect x="288" y="36" width="74" height="44" fill="#C7FF35" stroke="#292929" strokeWidth="1.5" />
        <text x="296" y="52" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#171717">EVAL BENCH</text>
        <text x="296" y="70" fontFamily="var(--font-geist-mono), monospace" fontSize="13" fontWeight="700" fill="#171717">≥0.80</text>

        <rect x="288" y="90" width="74" height="38" fill="#F8F7F2" stroke="#292929" strokeWidth="1.25" />
        <text x="295" y="104" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#626262">GRAFANA</text>
        {/* Minimal metric bars */}
        <rect x="296" y="114" width="8" height="8" fill="#292929" />
        <rect x="308" y="110" width="8" height="12" fill="#292929" />
        <rect x="320" y="112" width="8" height="10" fill="#292929" />
        <rect x="332" y="106" width="8" height="16" fill="#C7FF35" stroke="#292929" strokeWidth="1" />
        <rect x="344" y="109" width="8" height="13" fill="#292929" />

        {/* Bottom status line */}
        <line x1="18" y1="156" x2="362" y2="156" stroke="#292929" strokeWidth="1" />
        <text x="18" y="174" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="#626262">CELERY · REDIS · FASTAPI</text>
        <text x="362" y="174" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="#171717">~20K TOK/RUN · 14+ METRICS</text>
      </svg>
    );
  }

  if (type === "speech-dubbing") {
    const srcBars = [12, 26, 18, 34, 24, 14, 30, 38, 20, 16, 28, 22, 10, 26, 32, 16];
    const dubBars = [14, 24, 20, 32, 22, 16, 28, 34, 22, 18, 26, 20, 12, 28, 30, 18];

    return (
      <svg
        viewBox="0 0 380 200"
        className={`h-full w-full ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Speech waveform alignment and TTS fine-tuning diagram for Indic Speech Dubbing"
      >
        {/* Source track box */}
        <rect x="18" y="22" width="228" height="52" fill="#F8F7F2" stroke="#292929" strokeWidth="1.25" />
        <text x="26" y="36" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#626262">SRC AUDIO // FASTER-WHISPER ASR</text>
        {srcBars.map((h, i) => (
          <rect
            key={`src-${i}`}
            x={28 + i * 13}
            y={56 - h / 2}
            width="6"
            height={h}
            fill="#292929"
          />
        ))}

        {/* Alignment vertical guides */}
        <line x1="28" y1="74" x2="28" y2="104" stroke="#292929" strokeDasharray="2 2" />
        <line x1="132" y1="74" x2="132" y2="104" stroke="#292929" strokeDasharray="2 2" />
        <line x1="230" y1="74" x2="230" y2="104" stroke="#292929" strokeDasharray="2 2" />

        {/* Duration bridge label */}
        <rect x="64" y="81" width="136" height="17" fill="#C7FF35" stroke="#292929" strokeWidth="1" />
        <text x="132" y="92.5" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="#171717">
          DURATION-SCORED · 1.2× GAP
        </text>

        {/* Target dubbed track box */}
        <rect x="18" y="104" width="228" height="52" fill="#F8F7F2" stroke="#292929" strokeWidth="1.5" />
        <text x="26" y="118" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#171717">DUBBED // INDICF5 ZERO-SHOT CLONE</text>
        {dubBars.map((h, i) => (
          <rect
            key={`dub-${i}`}
            x={28 + i * 13}
            y={138 - h / 2}
            width="6"
            height={h}
            fill={i % 4 === 3 ? "#C7FF35" : "#171717"}
            stroke={i % 4 === 3 ? "#292929" : "none"}
            strokeWidth={i % 4 === 3 ? "1" : "0"}
          />
        ))}

        {/* Right: LoRA DiT Stack Box */}
        <path d="M246 48 H266 V130 H246" stroke="#292929" strokeWidth="1.25" />
        <line x1="266" y1="89" x2="282" y2="89" stroke="#292929" strokeWidth="1.25" />

        <rect x="282" y="22" width="80" height="134" fill="#171717" stroke="#292929" strokeWidth="1.5" />
        <rect x="290" y="30" width="10" height="10" fill="#C7FF35" />
        <text x="306" y="38" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#C7FF35">LORA DIT</text>
        <text x="290" y="60" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fontWeight="700" fill="#F8F7F2">337M</text>
        <text x="290" y="72" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="#EFEFEA">FLOW MATCH</text>
        <line x1="290" y1="84" x2="354" y2="84" stroke="#626262" strokeWidth="1" />
        <text x="290" y="100" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#EFEFEA">2×T4 DDP</text>
        <text x="290" y="114" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#EFEFEA">FP16 + EMA</text>
        <text x="290" y="128" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#C7FF35">14/14 SYNC</text>
        <text x="290" y="142" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#EFEFEA">135 TESTS</text>

        {/* Bottom strip */}
        <line x1="18" y1="168" x2="362" y2="168" stroke="#292929" strokeWidth="1" />
        <text x="18" y="184" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="#626262">FFMPEG · INDICTRANS2 · CER QC</text>
        <text x="362" y="184" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="#171717">ZERO DRIFT</text>
      </svg>
    );
  }

  // multi-agent-rag
  return (
    <svg
      viewBox="0 0 380 200"
      className={`h-full w-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Four-agent retrieval and critique architecture diagram for Multi-Agent RAG Platform"
    >
      {/* Agent 01: Decompose */}
      <rect x="18" y="64" width="76" height="50" fill="#F8F7F2" stroke="#292929" strokeWidth="1.5" />
      <text x="25" y="80" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#626262">AGENT 01</text>
      <text x="25" y="96" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fontWeight="700" fill="#171717">DECOMPOSE</text>
      <text x="25" y="108" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="#626262">SUB-QUERIES</text>

      {/* Split to FAISS & Web */}
      <path d="M94 89 H112 V48 H128" stroke="#292929" strokeWidth="1.25" />
      <path d="M112 89 V126 H128" stroke="#292929" strokeWidth="1.25" />

      {/* Agent 02A: FAISS */}
      <rect x="128" y="28" width="74" height="40" fill="#EFEFEA" stroke="#292929" strokeWidth="1.25" />
      <text x="136" y="44" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#626262">AGENT 02A</text>
      <text x="136" y="58" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fontWeight="700" fill="#171717">FAISS DB</text>

      {/* Agent 02B: Web */}
      <rect x="128" y="106" width="74" height="40" fill="#EFEFEA" stroke="#292929" strokeWidth="1.25" />
      <text x="136" y="122" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#626262">AGENT 02B</text>
      <text x="136" y="136" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fontWeight="700" fill="#171717">WEB ROUTE</text>

      {/* Merge to Synthesis */}
      <path d="M202 48 H216 V89 H230" stroke="#292929" strokeWidth="1.25" />
      <path d="M202 126 H216 V89" stroke="#292929" strokeWidth="1.25" />

      {/* Agent 03: Synthesis */}
      <rect x="230" y="34" width="132" height="44" fill="#F8F7F2" stroke="#292929" strokeWidth="1.5" />
      <text x="240" y="50" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#626262">AGENT 03 // PROVENANCE</text>
      <text x="240" y="66" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fontWeight="700" fill="#171717">SYNTHESIS</text>

      {/* Connector to Critique */}
      <line x1="296" y1="78" x2="296" y2="96" stroke="#292929" strokeWidth="1.25" />
      <polygon points="293,94 296,99 299,94" fill="#292929" />

      {/* Agent 04: Critique */}
      <rect x="230" y="100" width="132" height="48" fill="#C7FF35" stroke="#292929" strokeWidth="1.5" />
      <text x="240" y="116" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="600" fill="#171717">AGENT 04 // CRITIQUE</text>
      <text x="240" y="135" fontFamily="var(--font-geist-mono), monospace" fontSize="11.5" fontWeight="700" fill="#171717">18% → 7% UNGRND</text>

      {/* Bottom SSE telemetry strip */}
      <line x1="18" y1="166" x2="362" y2="166" stroke="#292929" strokeWidth="1" />
      <rect x="18" y="175" width="8" height="8" fill="#C7FF35" stroke="#292929" strokeWidth="1" />
      <text x="32" y="182" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="#626262">SSE TELEMETRY · 200-Q EVAL</text>
      <text x="362" y="182" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="#171717">FASTAPI · PGSQL</text>
    </svg>
  );
}
