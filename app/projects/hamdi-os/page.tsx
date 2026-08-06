import type { Metadata } from "next";
import Link from "next/link";
import { projects, siteConfig } from "@/data/portfolio";

const hamdiOS = projects.find((project) => project.slug === "hamdi-os")!;

export const metadata: Metadata = {
  title: "Hamdi OS — Case Study Coming Soon",
  description: "Hamdi OS is a personal operating system designed and built by Hamdi Hassan. The full product case study is coming soon.",
  alternates: { canonical: `${siteConfig.url}/projects/hamdi-os` },
  openGraph: {
    title: "Hamdi OS — Built by Hamdi Hassan",
    description: "A personal operating system for planning, tracking, and reviewing every area of life.",
    url: `${siteConfig.url}/projects/hamdi-os`,
  },
};

export default function HamdiOSCaseStudy() {
  return (
    <main className="case-study-shell">
      <Link className="back-link" href="/">← Back to portfolio</Link>
      <div className="case-study-content">
        <p className="eyebrow">Featured project · {hamdiOS.status}</p>
        <h1>{hamdiOS.name}</h1>
        <p className="case-study-lede">{hamdiOS.description}</p>
        <p>{hamdiOS.summary}</p>
        <div className="case-study-note"><span>Case study coming soon</span><p>A closer look at the product thinking, system design, build process, and continued iteration behind Hamdi OS will be added here.</p></div>
        <Link className="button button-dark button-large" href="/#projects">View all projects <span aria-hidden="true">↗</span></Link>
      </div>
    </main>
  );
}
