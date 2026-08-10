import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectFrame } from "@/components/project-frame";
import { hamdiOSCaseStudy, projects, siteConfig } from "@/data/portfolio";

const hamdiOS = projects.find((project) => project.slug === "hamdi-os")!;
const hasDemoVideo = hamdiOS.video
  ? existsSync(path.join(process.cwd(), "public", hamdiOS.video.src.replace(/^\//, "")))
  : false;

export const metadata: Metadata = {
  title: "Hamdi OS — Product Case Study",
  description: "How Hamdi Hassan designed and built a desktop-first personal operating system connecting life areas, time-based planning, measurements, recaps, and progress.",
  alternates: { canonical: `${siteConfig.url}/projects/hamdi-os` },
  openGraph: {
    title: "Hamdi OS — Product Case Study",
    description: hamdiOSCaseStudy.headline,
    url: `${siteConfig.url}/projects/hamdi-os`,
  },
};

export default function HamdiOSCaseStudyPage() {
  return (
    <main className="case-study-shell">
      <Link className="back-link" href="/">← Back to portfolio</Link>
      <article className="case-study-content">
        <header className="case-study-hero">
          <p className="eyebrow">Hamdi OS · {hamdiOS.status}</p>
          <h1>{hamdiOS.name}</h1>
          <p className="case-study-headline">{hamdiOSCaseStudy.headline}</p>
        </header>

        <section className="case-study-section case-study-intro" aria-labelledby="introduction-title">
          <p className="case-study-label" id="introduction-title">Introduction</p>
          <p>{hamdiOSCaseStudy.introduction}</p>
        </section>

        <section className="case-study-section case-study-split" aria-labelledby="problem-title">
          <h2 id="problem-title">{hamdiOSCaseStudy.problem.title}</h2>
          <p>{hamdiOSCaseStudy.problem.description}</p>
        </section>

        <section className="case-study-section" aria-labelledby="model-title">
          <div className="case-study-section-heading">
            <p className="case-study-label">The product model</p>
            <h2 id="model-title">{hamdiOSCaseStudy.productModel.title}</h2>
          </div>
          <div className="concept-grid">
            {hamdiOSCaseStudy.productModel.concepts.map((concept) => (
              <article className="concept-card" key={concept.number}>
                <span>{concept.number}</span><h3>{concept.title}</h3><p>{concept.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-study-section" aria-labelledby="current-product-title">
          <div className="case-study-section-heading compact">
            <p className="case-study-label">Current product</p>
            <h2 id="current-product-title">{hamdiOSCaseStudy.currentProduct.title}</h2>
            <p>{hamdiOSCaseStudy.currentProduct.description}</p>
          </div>
          <ProjectFrame project={hamdiOS} featured imageOnly sizes="(max-width: 900px) 100vw, 1180px" />
        </section>

        <section className="case-study-section case-study-split" aria-labelledby="iteration-title">
          <h2 id="iteration-title">{hamdiOSCaseStudy.iteration.title}</h2>
          <ol className="iteration-list">
            {hamdiOSCaseStudy.iteration.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
          </ol>
        </section>

        <section className="case-study-section case-study-split" aria-labelledby="stack-title">
          <h2 id="stack-title">Stack</h2>
          <div className="stack-list case-study-stack" aria-label="Hamdi OS technology stack">{hamdiOS.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <section className="case-study-section case-study-split" aria-labelledby="status-title">
          <h2 id="status-title">{hamdiOSCaseStudy.status.title}</h2>
          <p>{hamdiOSCaseStudy.status.description}</p>
        </section>

        <section className="case-study-section" aria-labelledby="demo-title">
          <div className="case-study-section-heading compact">
            <p className="case-study-label">Demo</p>
            <h2 id="demo-title">{hamdiOSCaseStudy.demo.title}</h2>
          </div>
          {hasDemoVideo ? (
            <ProjectFrame project={hamdiOS} featured sizes="(max-width: 900px) 100vw, 1180px" />
          ) : (
            <div className="case-study-note"><span>Demo account in preparation</span><p>{hamdiOSCaseStudy.demo.emptyMessage}</p></div>
          )}
        </section>

        <Link className="button button-dark button-large" href="/#projects">View all projects <span aria-hidden="true">↗</span></Link>
      </article>
    </main>
  );
}
