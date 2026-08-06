import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Project } from "@/data/portfolio";

export function ProjectFrame({ project, featured = false, sizes }: { project: Project; featured?: boolean; sizes: string }) {
  const assetPath = path.join(process.cwd(), "public", project.screenshot.replace(/^\//, ""));
  const hasScreenshot = existsSync(assetPath);
  const source = hasScreenshot ? project.screenshot : "/projects/placeholder.svg";

  return (
    <div className={`product-frame ${featured ? "product-frame-featured" : ""}`}>
      <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.name}</span></div>
      <div className="product-screen">
        <Image src={source} alt={project.screenshotAlt} fill sizes={sizes} className={hasScreenshot ? "real-screenshot" : "fallback-screenshot"} />
        {!hasScreenshot && <span className="replace-note">Add {project.screenshot.replace("/projects/", "")} to /public/projects</span>}
      </div>
    </div>
  );
}
