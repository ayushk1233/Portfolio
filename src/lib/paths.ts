const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const BASE_PATH = rawBasePath
  ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

/**
 * Prefixes static public asset paths (e.g. PDFs, favicons, images) with the
 * configured GitHub Pages basePath when deployed to a project repository.
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  if (configured) {
    return configured;
  }
  return `https://ayushk1233.github.io${BASE_PATH}`;
}
