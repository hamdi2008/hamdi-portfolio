import Image from "next/image";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <Image src={project.screenshot} alt={`${project.name} project screenshot placeholder`} fill sizes="(max-width: 900px) 100vw, 50vw" />
        <span className="replace-note">Screenshot placeholder · Replace in /public/projects</span>
      </div>
      <div className="project-content">
        <div className="project-kicker"><span>0{index + 1}</span>{project.status && <em>{project.status}</em>}</div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="stack-list" aria-label={`${project.name} technology stack`}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="project-actions">
          {project.actions.map((action) => <a key={action.label} href={action.href}>{action.label}<span aria-hidden="true">↗</span></a>)}
        </div>
      </div>
    </article>
  );
}
