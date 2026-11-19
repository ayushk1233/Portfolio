import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VinylWidget } from "@/components/VinylWidget";
import { SITE_CONFIG } from "@/data/site";
import { getSiteUrl, withBasePath } from "@/lib/paths";
import "./globals.css";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#F8F7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_CONFIG.title,
    template: "%s — Ayush Kumar",
  },
  description: SITE_CONFIG.description,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.github }],
  creator: SITE_CONFIG.name,
  keywords: [
    "Ayush Kumar",
    "AI ML Engineer",
    "Applied AI",
    "Voice AI",
    "Speech AI",
    "Agentic Systems",
    "LangGraph",
    "PyTorch",
    "MLOps",
    "Portfolio",
  ],
  icons: {
    icon: withBasePath("/favicon.svg"),
    shortcut: withBasePath("/favicon.svg"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: SITE_CONFIG.title,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: withBasePath("/og-image.svg"),
        width: 1200,
        height: 630,
        alt: "Ayush Kumar — AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [withBasePath("/og-image.svg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('ak_theme');
                var isDark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:border focus:border-border focus:bg-lime focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-semibold focus:text-ink"
        >
          Skip to main content
        </a>
        <div id="top" className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <VinylWidget />
        </div>
      </body>
    </html>
  );
}
