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
        <line x1="0" y1="100" x2="380" y2="100" stroke="var(--border)" strokeOpacity="0.1" strokeDasharray="3 4" />
        <line x1="190" y1="0" x2="190" y2="200" stroke="var(--border)" strokeOpacity="0.1" strokeDasharray="3 4" />

        <rect x="18" y="34" width="66" height="24" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.25" />
        <rect x="18" y="66" width="66" height="24" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.25" />
        <rect x="18" y="98" width="66" height="24" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="27" y="49" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="var(--ink)">SRC_01</text>
        <text x="27" y="81" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="var(--ink)">SRC_02</text>
        <text x="27" y="113" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="var(--muted)">+18 MORE</text>

        <path d="M84 46 H108 V78 H126" stroke="var(--border)" strokeWidth="1.25" />
        <path d="M84 78 H126" stroke="var(--border)" strokeWidth="1.25" />
        <path d="M84 110 H108 V78" stroke="var(--border)" strokeWidth="1.25" />

        <rect x="126" y="30" width="126" height="98" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="126" y="30" width="126" height="18" fill="var(--ink)" />
        <text x="134" y="42" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="var(--lime)">LANGGRAPH AGENT</text>

        <rect x="136" y="56" width="106" height="18" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="144" y="68" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="#121212">01. EXTRACT SIGNALS</text>

        <rect x="136" y="80" width="106" height="18" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="144" y="92" fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill="var(--ink)">02. DRIFT DETECT</text>

        <rect x="136" y="104" width="106" height="16" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />
        <text x="144" y="115" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="#121212">03. BATTLECARD</text>

        <path d="M252 78 H282" stroke="var(--border)" strokeWidth="1.25" />
        <polygon points="282,75 288,78 282,81" fill="var(--ink)" />

        <rect x="288" y="36" width="74" height="44" fill="var(--lime)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="296" y="52" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#121212">EVAL BENCH</text>
        <text x="296" y="70" fontFamily="var(--font-geist-mono), monospace" fontSize="13" fontWeight="700" fill="#121212">≥0.80</text>

        <rect x="288" y="90" width="74" height="38" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="295" y="104" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">GRAFANA</text>
        <rect x="296" y="114" width="8" height="8" fill="var(--ink)" />
        <rect x="308" y="110" width="8" height="12" fill="var(--ink)" />
        <rect x="320" y="112" width="8" height="10" fill="var(--ink)" />
        <rect x="332" y="106" width="8" height="16" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />
        <rect x="344" y="109" width="8" height="13" fill="var(--ink)" />

        <line x1="18" y1="156" x2="362" y2="156" stroke="var(--border)" strokeWidth="1" />
        <text x="18" y="174" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="var(--muted)">CELERY · REDIS · FASTAPI</text>
        <text x="362" y="174" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="var(--ink)">~20K TOK/RUN · 14+ METRICS</text>
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
        <rect x="18" y="22" width="228" height="52" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="26" y="36" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">SRC AUDIO // FASTER-WHISPER ASR</text>
        {srcBars.map((h, i) => (
          <rect key={`src-${i}`} x={28 + i * 13} y={56 - h / 2} width="6" height={h} fill="var(--ink)" />
        ))}

        <line x1="28" y1="74" x2="28" y2="104" stroke="var(--border)" strokeDasharray="2 2" />
        <line x1="132" y1="74" x2="132" y2="104" stroke="var(--border)" strokeDasharray="2 2" />
        <line x1="230" y1="74" x2="230" y2="104" stroke="var(--border)" strokeDasharray="2 2" />

        <rect x="64" y="81" width="136" height="17" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />
        <text x="132" y="92.5" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="#121212">
          DURATION-SCORED · 1.2× GAP
        </text>

        <rect x="18" y="104" width="228" height="52" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="26" y="118" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">DUBBED // INDICF5 ZERO-SHOT CLONE</text>
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

        <path d="M246 48 H266 V130 H246" stroke="var(--border)" strokeWidth="1.25" />
        <line x1="266" y1="89" x2="282" y2="89" stroke="var(--border)" strokeWidth="1.25" />

        <rect x="282" y="22" width="80" height="134" fill="var(--ink)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="290" y="30" width="10" height="10" fill="var(--lime)" />
        <text x="306" y="38" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--lime)">LORA DIT</text>
        <text x="290" y="60" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fontWeight="700" fill="var(--bg)">337M</text>
        <text x="290" y="72" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="var(--surface)">FLOW MATCH</text>
        <line x1="290" y1="84" x2="354" y2="84" stroke="var(--muted)" strokeWidth="1" />
        <text x="290" y="100" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--surface)">2×T4 DDP</text>
        <text x="290" y="114" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--surface)">FP16 + EMA</text>
        <text x="290" y="128" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--lime)">14/14 SYNC</text>
        <text x="290" y="142" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--surface)">135 TESTS</text>

        <line x1="18" y1="168" x2="362" y2="168" stroke="var(--border)" strokeWidth="1" />
        <text x="18" y="184" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="var(--muted)">FFMPEG · INDICTRANS2 · CER QC</text>
        <text x="362" y="184" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="var(--ink)">ZERO DRIFT</text>
      </svg>
    );
  }

  if (type === "diarizbench") {
    return (
      <svg
        viewBox="0 0 380 200"
        className={`h-full w-full ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Speaker diarization turn timeline and DER benchmark comparison for DiarizBench"
      >
        {/* Top timeline box: multi-speaker turns */}
        <rect x="18" y="18" width="344" height="58" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="26" y="32" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">RTTM TURN TIMELINE // OVERLAP &amp; BRIEF SPEAKERS</text>
        {/* SPK 1 */}
        <text x="26" y="48" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="var(--ink)">SPK_A</text>
        <rect x="64" y="40" width="84" height="10" fill="var(--ink)" />
        <rect x="188" y="40" width="96" height="10" fill="var(--ink)" />
        {/* SPK 2 */}
        <text x="26" y="64" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="var(--ink)">SPK_B</text>
        <rect x="128" y="56" width="88" height="10" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />
        <rect x="304" y="56" width="44" height="10" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />

        {/* Lower comparison matrix: 3 systems DER */}
        <rect x="18" y="88" width="218" height="68" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="26" y="102" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="var(--ink)">PILOT DER ↓ (0-COLLAR, 24 RECS)</text>

        <text x="26" y="118" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">ANUVANI</text>
        <rect x="92" y="110" width="76" height="10" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />
        <text x="174" y="118" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="#121212">13.8%</text>

        <text x="26" y="133" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">PYANNOTE</text>
        <rect x="92" y="125" width="102" height="10" fill="var(--ink)" />
        <text x="200" y="133" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">20.4%</text>

        <text x="26" y="148" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">NEMOTRON</text>
        <rect x="92" y="140" width="108" height="10" fill="var(--muted)" />
        <text x="205" y="148" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">21.6%</text>

        {/* Right callout: Coverage + CI */}
        <rect x="248" y="88" width="114" height="68" fill="var(--ink)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="256" y="96" width="8" height="8" fill="var(--lime)" />
        <text x="270" y="103" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--lime)">BOOTSTRAP CI</text>
        <text x="256" y="124" fontFamily="var(--font-geist-mono), monospace" fontSize="11" fontWeight="700" fill="var(--bg)">7 LANGS</text>
        <text x="256" y="138" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--surface)">72 GPU RUNS</text>
        <text x="256" y="149" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--lime)">61% LOW-ACT RCL</text>

        <line x1="18" y1="168" x2="362" y2="168" stroke="var(--border)" strokeWidth="1" />
        <text x="18" y="184" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="var(--muted)">INDIC DIARBENCH · AMI · VOXCONVERSE</text>
        <text x="362" y="184" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="var(--ink)">0.053 RTF</text>
      </svg>
    );
  }

  if (type === "gptease-benchmark") {
    return (
      <svg
        viewBox="0 0 380 200"
        className={`h-full w-full ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="15-dimension hybrid evaluation and leaderboard diagram for GPTease ConvoRealism Benchmark"
      >
        {/* Left: 3-tier Evaluator Stack */}
        <rect x="18" y="20" width="124" height="36" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="26" y="34" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="var(--muted)">TIER 01 // RULE-BASED</text>
        <text x="26" y="48" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="700" fill="var(--ink)">REFUSAL · AI-TELLS</text>

        <rect x="18" y="64" width="124" height="36" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="26" y="78" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="var(--muted)">TIER 02 // HEURISTIC</text>
        <text x="26" y="92" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="700" fill="var(--ink)">ENTROPY · VERBOSITY</text>

        <rect x="18" y="108" width="124" height="44" fill="var(--ink)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="26" y="122" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="var(--lime)">TIER 03 // CROSS-JUDGE</text>
        <text x="26" y="136" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="700" fill="var(--bg)">REALISM · REACTIVITY</text>
        <text x="26" y="146" fontFamily="var(--font-geist-mono), monospace" fontSize="6.8" fill="var(--surface)">AVOID SELF-BIAS (+6.81)</text>

        {/* Connectors to Leaderboard */}
        <path d="M142 38 H162 V84 H178" stroke="var(--border)" strokeWidth="1.25" />
        <path d="M142 82 H178" stroke="var(--border)" strokeWidth="1.25" />
        <path d="M142 130 H162 V84" stroke="var(--border)" strokeWidth="1.25" />

        {/* Right: Realism Ceiling + Leaderboard */}
        <rect x="178" y="20" width="184" height="34" fill="var(--lime)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="186" y="34" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="#121212">REALISM CEILING + PENALTY</text>
        <text x="186" y="46" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#121212">15 DIMS → [20–100] SCALE</text>

        <rect x="178" y="64" width="184" height="88" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="186" y="79" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="var(--ink)">7-MODEL LEADERBOARD (200+ EVALS)</text>

        <text x="186" y="96" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">KIMI-K2.6</text>
        <rect x="246" y="88" width="76" height="9" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />
        <text x="328" y="96" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="700" fill="#121212">84.2</text>

        <text x="186" y="112" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="#121212">LUNARIS-8B</text>
        <rect x="246" y="104" width="70" height="9" fill="var(--ink)" />
        <text x="328" y="112" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">80.7</text>

        <text x="186" y="128" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">CYDONIA-24B</text>
        <rect x="246" y="120" width="66" height="9" fill="var(--muted)" />
        <text x="328" y="128" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">79.6</text>

        <text x="186" y="144" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">EURYALE-70B</text>
        <rect x="246" y="136" width="63" height="9" fill="var(--muted)" />
        <text x="328" y="144" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">78.5</text>

        <line x1="18" y1="168" x2="362" y2="168" stroke="var(--border)" strokeWidth="1" />
        <text x="18" y="184" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="var(--muted)">OPENROUTER · TOGETHER · FEATHERLESS</text>
        <text x="362" y="184" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="var(--ink)">~$3.50 TOTAL</text>
      </svg>
    );
  }

  if (type === "agent-lab") {
    return (
      <svg
        viewBox="0 0 380 200"
        className={`h-full w-full ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="AgentLab local-first testing, tracing, and regression evaluation diagram"
      >
        {/* Terminal CLI frame */}
        <rect x="18" y="22" width="160" height="126" fill="var(--ink)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="18" y="22" width="160" height="18" fill="var(--ink)" />
        <rect x="26" y="28" width="6" height="6" fill="var(--lime)" />
        <text x="38" y="34" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--bg)">AGENTLAB CLI // V1</text>

        <text x="28" y="58" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="var(--lime)">$ agentlab init</text>
        <text x="28" y="78" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="var(--bg)">$ agentlab test</text>
        <text x="28" y="98" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill="var(--bg)">$ agentlab report</text>
        <line x1="28" y1="112" x2="168" y2="112" stroke="var(--muted)" strokeWidth="1" />
        <text x="28" y="128" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--surface)">LOCAL-FIRST · PYTEST</text>
        <text x="28" y="140" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--lime)">OTEL TRACE + DIFF</text>

        {/* Connectors */}
        <path d="M178 60 H202" stroke="var(--border)" strokeWidth="1.25" />
        <path d="M178 106 H202" stroke="var(--border)" strokeWidth="1.25" />

        {/* Right: Planned modules */}
        <rect x="202" y="22" width="160" height="44" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.25" />
        <text x="212" y="38" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">EVAL + RAG METRICS</text>
        <text x="212" y="54" fontFamily="var(--font-geist-mono), monospace" fontSize="9.5" fontWeight="700" fill="var(--ink)">RECALL@K · MRR · NDCG</text>

        <rect x="202" y="76" width="160" height="44" fill="var(--lime)" stroke="var(--border)" strokeWidth="1.5" />
        <text x="212" y="92" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="600" fill="#121212">STATUS // IN BUILD</text>
        <text x="212" y="109" fontFamily="var(--font-geist-mono), monospace" fontSize="11" fontWeight="700" fill="#121212">COMING SOON</text>

        <rect x="202" y="128" width="160" height="20" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
        <text x="212" y="141" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--ink)">AI RELEASE ENGINEER</text>

        <line x1="18" y1="168" x2="362" y2="168" stroke="var(--border)" strokeWidth="1" />
        <text x="18" y="184" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="var(--muted)">LANGGRAPH · OTEL · CI GATES</text>
        <text x="362" y="184" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="var(--ink)">OPEN-SOURCE BETA</text>
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
      <rect x="18" y="64" width="76" height="50" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
      <text x="25" y="80" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">AGENT 01</text>
      <text x="25" y="96" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fontWeight="700" fill="var(--ink)">DECOMPOSE</text>
      <text x="25" y="108" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill="var(--muted)">SUB-QUERIES</text>

      <path d="M94 89 H112 V48 H128" stroke="var(--border)" strokeWidth="1.25" />
      <path d="M112 89 V126 H128" stroke="var(--border)" strokeWidth="1.25" />

      <rect x="128" y="28" width="74" height="40" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.25" />
      <text x="136" y="44" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">AGENT 02A</text>
      <text x="136" y="58" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fontWeight="700" fill="var(--ink)">FAISS DB</text>

      <rect x="128" y="106" width="74" height="40" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.25" />
      <text x="136" y="122" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">AGENT 02B</text>
      <text x="136" y="136" fontFamily="var(--font-geist-mono), monospace" fontSize="9" fontWeight="700" fill="var(--ink)">WEB ROUTE</text>

      <path d="M202 48 H216 V89 H230" stroke="var(--border)" strokeWidth="1.25" />
      <path d="M202 126 H216 V89" stroke="var(--border)" strokeWidth="1.25" />

      <rect x="230" y="34" width="132" height="44" fill="var(--bg)" stroke="var(--border)" strokeWidth="1.5" />
      <text x="240" y="50" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fill="var(--muted)">AGENT 03 // PROVENANCE</text>
      <text x="240" y="66" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fontWeight="700" fill="var(--ink)">SYNTHESIS</text>

      <line x1="296" y1="78" x2="296" y2="96" stroke="var(--border)" strokeWidth="1.25" />
      <polygon points="293,94 296,99 299,94" fill="var(--ink)" />

      <rect x="230" y="100" width="132" height="48" fill="var(--lime)" stroke="var(--border)" strokeWidth="1.5" />
      <text x="240" y="116" fontFamily="var(--font-geist-mono), monospace" fontSize="7.5" fontWeight="600" fill="#121212">AGENT 04 // CRITIQUE</text>
      <text x="240" y="135" fontFamily="var(--font-geist-mono), monospace" fontSize="11.5" fontWeight="700" fill="#121212">18% → 7% UNGRND</text>

      <line x1="18" y1="166" x2="362" y2="166" stroke="var(--border)" strokeWidth="1" />
      <rect x="18" y="175" width="8" height="8" fill="var(--lime)" stroke="var(--border)" strokeWidth="1" />
      <text x="32" y="182" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fill="var(--muted)">SSE TELEMETRY · 200-Q EVAL</text>
      <text x="362" y="182" textAnchor="end" fontFamily="var(--font-geist-mono), monospace" fontSize="8.5" fontWeight="600" fill="#121212">FASTAPI · PGSQL</text>
    </svg>
  );
}
