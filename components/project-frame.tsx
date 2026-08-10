import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { ProjectVideo } from "@/components/project-video";

export function ProjectFrame({ project, featured = false, imageOnly = false, sizes }: { project: Project; featured?: boolean; imageOnly?: boolean; sizes: string }) {
  const assetPath = path.join(process.cwd(), "public", project.screenshot.replace(/^\//, ""));
  const hasScreenshot = existsSync(assetPath);
  const source = hasScreenshot ? project.screenshot : "/projects/placeholder.svg";
  const hasVideo = project.video
    ? existsSync(path.join(process.cwd(), "public", project.video.src.replace(/^\//, "")))
    : false;
  const video = project.video ? { ...project.video, poster: source } : undefined;

  return (
    <div className={`product-frame ${featured ? "product-frame-featured" : ""}`}>
      <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.name}</span></div>
      <div className="product-screen">
        {video && hasVideo && !imageOnly ? (
          <ProjectVideo video={video} alt={project.screenshotAlt} sizes={sizes} />
        ) : (
          <>
            <Image src={source} alt={project.screenshotAlt} fill sizes={sizes} className={hasScreenshot ? "real-screenshot" : "fallback-screenshot"} />
            {!hasScreenshot && <span className="replace-note">Add {project.screenshot.replace("/projects/", "")} to /public/projects</span>}
          </>
        )}
      </div>
    </div>
  );
}
