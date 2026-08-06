import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hamdihassan.com"),
  title: "Hamdi Hassan — AI Product Builder",
  description: "Hamdi Hassan builds and ships useful web products using AI, Next.js, TypeScript, Supabase, and Vercel.",
  keywords: ["Hamdi Hassan", "AI Product Builder", "Next.js", "TypeScript", "Minnesota"],
  authors: [{ name: "Hamdi Hassan" }],
  openGraph: {
    title: "Hamdi Hassan — AI Product Builder",
    description: "I turn ideas into useful web products using AI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamdi Hassan — AI Product Builder",
    description: "I turn ideas into useful web products using AI.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3efe7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
