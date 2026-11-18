export function ComingSoonSign() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center bg-surface/70 bg-swiss-grid p-6 sm:p-8"
      role="img"
      aria-label="Animated wooden plywood sign hanging on a steel nail with COMING SOON stenciled on it"
    >
      <svg
        viewBox="0 0 400 290"
        className="h-auto w-full max-w-[380px] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Warm plywood base gradient */}
          <linearGradient id="plywood-face" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#DEC092" />
            <stop offset="48%" stopColor="#D3AF7B" />
            <stop offset="100%" stopColor="#C19760" />
          </linearGradient>
          <linearGradient id="plywood-edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9B7443" />
            <stop offset="100%" stopColor="#7C5A31" />
          </linearGradient>
        </defs>

        {/* Subtle wall shadow behind nail */}
        <circle cx="203" cy="30" r="8" fill="#171717" fillOpacity="0.16" />

        {/* Swinging assembly pivoting around nail (200, 26) */}
        <g className="animate-plywood-swing">
          {/* Hanging cord / braided wire from nail to board eyelets */}
          <line
            x1="200"
            y1="26"
            x2="96"
            y2="112"
            stroke="#292929"
            strokeWidth="2.4"
          />
          <line
            x1="200"
            y1="26"
            x2="304"
            y2="112"
            stroke="#292929"
            strokeWidth="2.4"
          />

          {/* Offset neo-brutalist drop shadow */}
          <rect
            x="48"
            y="112"
            width="316"
            height="148"
            fill="#171717"
            fillOpacity="0.18"
          />

          {/* Plywood thickness bottom/right bevel */}
          <path
            d="M42 252 L358 252 L364 258 L48 258 Z"
            fill="url(#plywood-edge)"
            stroke="#292929"
            strokeWidth="1.5"
          />
          <path
            d="M358 106 L364 112 L364 258 L358 252 Z"
            fill="#8D683B"
            stroke="#292929"
            strokeWidth="1.5"
          />

          {/* Main wooden plywood board */}
          <rect
            x="42"
            y="106"
            width="316"
            height="146"
            fill="url(#plywood-face)"
            stroke="#292929"
            strokeWidth="2.2"
          />

          {/* Realistic wood grain lines & subtle knots */}
          <path
            d="M44 128 Q130 122 210 129 T356 126"
            stroke="#9B7443"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
          <path
            d="M44 146 Q150 153 240 144 T356 150"
            stroke="#9B7443"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <path
            d="M44 174 Q120 168 205 176 T356 172"
            stroke="#8B6334"
            strokeOpacity="0.32"
            strokeWidth="1.2"
          />
          <path
            d="M44 202 Q165 208 265 198 T356 205"
            stroke="#9B7443"
            strokeOpacity="0.38"
            strokeWidth="1"
          />
          <path
            d="M44 228 Q140 222 230 232 T356 226"
            stroke="#8B6334"
            strokeOpacity="0.42"
            strokeWidth="1.2"
          />
          <ellipse
            cx="84"
            cy="224"
            rx="11"
            ry="4.5"
            stroke="#8B6334"
            strokeOpacity="0.45"
            strokeWidth="1.1"
          />
          <ellipse
            cx="322"
            cy="134"
            rx="9"
            ry="3.5"
            stroke="#8B6334"
            strokeOpacity="0.4"
            strokeWidth="1"
          />

          {/* Inner stenciled workshop border */}
          <rect
            x="54"
            y="118"
            width="292"
            height="122"
            fill="none"
            stroke="#292929"
            strokeWidth="1.2"
            strokeDasharray="6 4"
          />

          {/* Drilled holes / metal grommets for hanging rope */}
          <circle
            cx="96"
            cy="116"
            r="5.5"
            fill="#292929"
            stroke="#F8F7F2"
            strokeWidth="1.2"
          />
          <circle
            cx="304"
            cy="116"
            r="5.5"
            fill="#292929"
            stroke="#F8F7F2"
            strokeWidth="1.2"
          />

          {/* Small electric-lime builder tag taped on board */}
          <rect
            x="138"
            y="130"
            width="124"
            height="20"
            fill="#C7FF35"
            stroke="#292929"
            strokeWidth="1.4"
          />
          <text
            x="200"
            y="143.5"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="9.5"
            fontWeight="700"
            fill="#171717"
            letterSpacing="1.2"
          >
            AGENTLAB // V1
          </text>

          {/* Bold stenciled COMING SOON */}
          <text
            x="200"
            y="194"
            textAnchor="middle"
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            fontSize="36"
            fontWeight="800"
            fill="#171717"
            letterSpacing="1.5"
          >
            COMING SOON
          </text>

          {/* Bottom stencil caption */}
          <line
            x1="88"
            y1="208"
            x2="312"
            y2="208"
            stroke="#292929"
            strokeWidth="1.2"
          />
          <text
            x="200"
            y="226"
            textAnchor="middle"
            fontFamily="var(--font-geist-mono), monospace"
            fontSize="9.5"
            fontWeight="600"
            fill="#171717"
            letterSpacing="1"
          >
            UNDER ACTIVE BUILD · OPEN-SOURCE BETA
          </text>
        </g>

        {/* Fixed steel nail head driven into wall (stays stationary while board swings) */}
        <circle
          cx="200"
          cy="26"
          r="9"
          fill="#4A4A4A"
          stroke="#171717"
          strokeWidth="2"
        />
        <circle cx="197.5" cy="23.5" r="2.5" fill="#EFEFEA" fillOpacity="0.65" />
      </svg>

      <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
        HOVER SIGN TO PAUSE · PLYWOOD WORKSHOP SIGN
      </p>
    </div>
  );
}
