import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const description = "AI Product Builder designing, building, and shipping useful web products with Claude, ChatGPT, OpenAI Codex, Next.js, TypeScript, and Supabase.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Hamdi Hassan — AI Product Builder",
  description,
  keywords: ["Hamdi Hassan", "AI Product Builder", "Claude", "OpenAI Codex", "Next.js", "TypeScript", "Supabase"],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: siteConfig.url },
  openGraph: { title: "Hamdi Hassan — AI Product Builder", description, type: "website", locale: "en_US", url: siteConfig.url, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hamdi Hassan, AI Product Builder" }] },
  twitter: { card: "summary_large_image", title: "Hamdi Hassan — AI Product Builder", description, images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3efe7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
