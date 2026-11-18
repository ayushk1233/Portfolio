import { SITE_CONFIG } from "@/data/site";

interface IconProps {
  className?: string;
}

export function GmailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" />
      <path d="M2.5 6.5 L12 13.5 L21.5 6.5" />
      <line x1="6.5" y1="19.5" x2="6.5" y2="9.5" />
      <line x1="17.5" y1="19.5" x2="17.5" y2="9.5" />
    </svg>
  );
}

export function GitHubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.374 6.839 9.73.5.095.682-.222.682-.494 0-.243-.009-.888-.014-1.743-2.782.619-3.369-1.374-3.369-1.374-.455-1.184-1.11-1.499-1.11-1.499-.908-.636.069-.623.069-.623 1.004.072 1.532 1.057 1.532 1.057.892 1.566 2.341 1.114 2.91.852.091-.663.349-1.114.635-1.37-2.221-.259-4.555-1.138-4.555-5.066 0-1.119.39-2.033 1.029-2.75-.103-.26-.446-1.304.098-2.719 0 0 .84-.276 2.75 1.05A9.35 9.35 0 0 1 12 6.844c.85.004 1.705.118 2.504.346 1.909-1.326 2.748-1.05 2.748-1.05.546 1.415.203 2.459.1 2.719.64.717 1.028 1.631 1.028 2.75 0 3.938-2.338 4.804-4.566 5.058.359.317.679.942.679 1.899 0 1.37-.012 2.476-.012 2.812 0 .274.18.594.688.493C19.138 20.623 22 16.78 22 12.253 22 6.59 17.523 2 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.4 18.2H5.8V9.8h2.6v8.4ZM7.1 8.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11.1 9.5h-2.6v-4.1c0-.98-.02-2.24-1.36-2.24-1.37 0-1.58 1.07-1.58 2.17v4.17H10.1V9.8h2.5v1.15h.03c.35-.66 1.2-1.36 2.47-1.36 2.64 0 3.1 1.74 3.1 4v4.61Z" />
    </svg>
  );
}

interface SocialIconRowProps {
  size?: "sm" | "md";
}

export function SocialIconRow({ size = "md" }: SocialIconRowProps) {
  const boxClass = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const iconClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className="flex items-center gap-1.5">
      <a
        href={`mailto:${SITE_CONFIG.email}`}
        aria-label={`Email Ayush Kumar (${SITE_CONFIG.email})`}
        title={`Email: ${SITE_CONFIG.email}`}
        className={`inline-flex ${boxClass} items-center justify-center border border-border bg-bg text-ink transition-colors duration-200 hover:bg-lime`}
      >
        <GmailIcon className={iconClass} />
      </a>
      <a
        href={SITE_CONFIG.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        title="GitHub"
        className={`inline-flex ${boxClass} items-center justify-center border border-border bg-bg text-ink transition-colors duration-200 hover:bg-lime`}
      >
        <GitHubIcon className={iconClass} />
      </a>
      <a
        href={SITE_CONFIG.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        title="LinkedIn"
        className={`inline-flex ${boxClass} items-center justify-center border border-border bg-bg text-ink transition-colors duration-200 hover:bg-lime`}
      >
        <LinkedInIcon className={iconClass} />
      </a>
    </div>
  );
}
