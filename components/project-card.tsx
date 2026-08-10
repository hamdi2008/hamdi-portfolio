import type { Project } from "@/data/portfolio";
import { ProjectFrame } from "@/components/project-frame";

function ProjectActions({ project }: { project: Project }) {
  const visibleActions = project.actions.filter((action) => action.href);

  if (visibleActions.length === 0) return null;

  return (
    <div className="project-actions" aria-label={`${project.name} links`}>
      {visibleActions.map((action) => {
        const isExternal = action.href!.startsWith("http");
        return (
          <a
            key={action.label}
            href={action.href!}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {action.label}<span aria-hidden="true">↗</span>
          </a>
        );
      })}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <ProjectFrame project={project} sizes="(max-width: 900px) 100vw, 50vw" />
      <div className="project-content">
        <div className="project-kicker"><span>0{index + 2}</span></div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="stack-list" aria-label={`${project.name} technology stack`}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="featured-project">
      <div className="featured-heading">
        <div>
          <p className="featured-label">{project.label}</p>
          <h3>{project.name}</h3>
        </div>
        {project.status && <span className="status-badge">{project.status}</span>}
      </div>
      <ProjectFrame project={project} featured sizes="(max-width: 900px) 100vw, 1180px" />
      <div className="featured-details">
        <div>
          <p className="project-description featured-description">{project.description}</p>
          {project.longDescription && <p className="project-summary">{project.longDescription}</p>}
          <ProjectActions project={project} />
        </div>
        <div>
          <p className="detail-label">What I built</p>
          <ul className="highlights featured-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          {project.supportingHighlights && (
            <div className="supporting-highlights">
              <p>Foundation &amp; iteration</p>
              {project.supportingHighlights.map((item) => <span key={item}>{item}</span>)}
            </div>
          )}
          <div className="stack-list" aria-label={`${project.name} technology stack`}>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
      {project.mediaNote && <p className="future-shots">Current product areas · {project.mediaNote}</p>}
    </article>
  );
}
